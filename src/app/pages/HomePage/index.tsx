import { GildedRose, Item } from 'api/gilded-rose';
import { Button } from 'app/components/Button';
import { Input } from 'app/components/Input';
import { Table } from 'app/components/Table';
import dayjs from 'dayjs';
import { translations } from 'locales/translations';
import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components/macro';
import { media } from 'styles/media';

export function HomePage() {
  const { t } = useTranslation();

  const hasCalendarFeature = false;

  const initialData: Array<Item> = useMemo(
    () => [
      { name: '+5 Dexterity Vest', quality: 10, sellIn: 20 },
      { name: 'Aged Brie', quality: 2, sellIn: 0 },
      { name: 'Elixir of the Mongoose', quality: 5, sellIn: 7 },
      { name: 'Sulfuras, Hand of Ragnaros', quality: 0, sellIn: 80 },
      { name: 'Sulfuras, Hand of Ragnaros', quality: -1, sellIn: 80 },
      {
        name: 'Backstage passes to a TAFKAL80ETC concert',
        quality: 15,
        sellIn: 20,
      },
      {
        name: 'Backstage passes to a TAFKAL80ETC concert',
        quality: 10,
        sellIn: 49,
      },
      {
        name: 'Backstage passes to a TAFKAL80ETC concert',
        quality: 5,
        sellIn: 49,
      },
      { name: 'Conjured Mana Cake', quality: 3, sellIn: 6 },
    ],
    [],
  );

  const [data, setData] = useState<Array<Item>>(initialData);

  const inventory = useMemo(() => new GildedRose(data), [data]);

  const columns = useMemo(
    () => [
      {
        Header: t(translations.home.form.name),
        accessor: 'name',
      },
      {
        Header: t(translations.home.form.quality),
        accessor: 'quality',
      },
      {
        Header: t(translations.home.form.sellIn),
        accessor: 'sellIn',
      },
    ],
    [t],
  );

  const today = useMemo(() => dayjs().format('YYYY-MM-DD'), []);

  const didChangeDate = (value: string) => {
    const future = dayjs(value);
    const delta = future.diff(dayjs(), 'days');

    setData(
      initialData.map(item => ({ ...item, sellIn: item.sellIn - delta })),
    );
  };

  const didClickAddItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formElement = (event.target as HTMLButtonElement)
      .parentElement as HTMLFormElement;
    const formData = new FormData(formElement);

    const newItem: Item = {
      name: formData.get('name') as string,
      quality: (formData.get('quality') ?? 0) as number,
      sellIn: (formData.get('sellIn') ?? 0) as number,
    };

    setData([newItem, ...data]);
  };

  const didClickUpdateInventory = () => {
    setData([...inventory.updateQuality()]);
  };

  return (
    <>
      <Helmet>
        <title>{t(translations.routes.home)}</title>
        <meta name="description" content={t(translations.description)} />
      </Helmet>

      <Header>{t(translations.home.title)}</Header>

      <Subtitle>{t(translations.home.description)}</Subtitle>

      <Form>
        <StyledInput
          name="name"
          label={t(translations.home.form.name)}
          type="text"
        />

        <StyledInput
          name="quality"
          label={t(translations.home.form.quality)}
          type="number"
        />

        <StyledInput
          name="sellIn"
          label={t(translations.home.form.sellIn)}
          type="number"
        />

        <StyledButton label="+" onClick={didClickAddItem} />
      </Form>

      <TableOptions>
        {hasCalendarFeature && (
          <>
            <TableOptionSpan isBold>
              {t(translations.table.from)}
            </TableOptionSpan>
            <TableOptionSpan>{t(translations.table.today)}</TableOptionSpan>
            <Input
              type="date"
              size="small"
              label={t(translations.table.to)}
              defaultValue={today}
              didChange={didChangeDate}
            />
          </>
        )}

        <Button
          label={t(translations.home.update)}
          onClick={didClickUpdateInventory}
        />
      </TableOptions>

      <TableContainer>
        <Table columns={columns} data={data} />
      </TableContainer>
    </>
  );
}

const StyledInput = styled(Input)`
  flex: 1;
`;

const StyledButton = styled(Button)`
  height: fit-content;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;

  ${media.small`
  align-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
  `}

  ${StyledInput} {
    width: 100%;
  }
`;

const Subtitle = styled.span`
  display: block;
  padding: 0.5rem 0;
`;

const Header = styled.h2`
  margin-bottom: 0.25rem;
  margin-top: 0.75rem;
`;

const TableContainer = styled.div`
  margin-top: 1.5rem;
`;

const TableOptions = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  gap: 0.375rem;
  margin-top: 1.5rem;
`;

const TableOptionSpan = styled.span<{ isBold?: boolean }>`
  font-size: 0.75rem;
  ${p =>
    p.isBold
      ? css`
          font-weight: 800;
        `
      : ''}
`;

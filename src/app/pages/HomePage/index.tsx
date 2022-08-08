import { Button } from 'app/components/Button';
import { Input } from 'app/components/Input';
import { Table } from 'app/components/Table';
import { translations } from 'locales/translations';
import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { media } from 'styles/media';

export function HomePage() {
  const { t } = useTranslation();

  const columns = React.useMemo(
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

  const data = useMemo(
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

  return (
    <>
      <Helmet>
        <title>{t(translations.routes.home)}</title>
        <meta name="description" content={t(translations.description)} />
      </Helmet>

      <Header>{t(translations.home.title)}</Header>

      <Subtitle>{t(translations.home.description)}</Subtitle>

      <Form>
        <StyledInput label={t(translations.home.form.name)} type="text" />
        <StyledInput label={t(translations.home.form.quality)} type="number" />
        <StyledInput label={t(translations.home.form.sellIn)} type="number" />

        <StyledButton label="+" />
      </Form>

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

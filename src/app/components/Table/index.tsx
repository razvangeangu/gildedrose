import { translations } from 'locales/translations';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Column, usePagination, useTable } from 'react-table';
import styled from 'styled-components/macro';
import { Button } from '../Button';

export interface TableProps {
  /**
   * The column definitions for the table which will capture the data array accessors.
   *
   * @default undefined
   */
  columns: Array<Column>;

  /**
   * The data objects that will be rendered in the table.
   *
   * @default undefined
   */
  data: Array<any>;
}

export function Table({ columns, data }: any) {
  const { t } = useTranslation();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination,
  );

  return (
    <>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>

      <Pagination>
        <OfSpan>
          {t(translations.table.of, {
            currentPage: pageIndex + 1,
            pagesCount: pageOptions.length,
          })}
        </OfSpan>

        <Button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          label="◀"
          size="small"
        />

        <Button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          label="▶"
          size="small"
        />
      </Pagination>
    </>
  );
}

const StyledTable = styled.table`
  background-color: #fff;
  border: 0.0625rem solid ${p => p.theme.border};
  border-collapse: separate;
  border-radius: 0.25rem;
  border-spacing: 0;
  width: 100%;

  th,
  td {
    border-bottom: 1px solid ${p => p.theme.border};
    border-right: 1px solid ${p => p.theme.border};
    margin: 0;
    padding: 0.5rem;

    :last-child {
      border-right: 0;
    }
  }

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
`;

const Pagination = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  justify-content: flex-end;
  padding: 1rem 0;
  width: 100%;
`;

const OfSpan = styled.span`
  font-size: 0.875rem;
  margin-right: 0.25rem;
`;

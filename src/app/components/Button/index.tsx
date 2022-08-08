/**
 *
 * Button
 *
 */
import * as React from 'react';
import styled, { css } from 'styled-components/macro';

export interface ButtonProps {
  /**
   * The primary content of the button.
   *
   * @default undefined
   */
  label: string;

  /**
   * If `true`, the button will be disabled.
   *
   * @default undefined
   */
  disabled?: boolean;

  /**
   * Callback that fires when clicked.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * The className passed to the styled container.
   *
   * @default undefined
   */
  className?: string;

  /**
   * Size of the button
   *
   * @default 'regular'
   */
  size?: 'regular' | 'small';
}

export function Button({
  label,
  disabled,
  className,
  onClick,
  size = 'regular',
}: ButtonProps) {
  return (
    <ButtonContainer
      className={className}
      type="button"
      disabled={disabled}
      onClick={onClick}
      size={size}
    >
      {label}
    </ButtonContainer>
  );
}

const small = css`
  font-size: 1rem;
  line-height: 1;
  padding: 0.25rem 0.375rem;
`;

const ButtonContainer = styled.button<{
  error?: boolean;
  secondary?: boolean;
  size?: ButtonProps['size'];
}>`
  background-color: ${p => p.theme.primary};
  border: 0;
  border-radius: 0.25rem;
  color: #fff;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0;
  padding: 0.5rem;
  text-decoration: none;
  transition: background-color 0.17s ease-in-out;

  ${p => (p.size === 'small' ? small : '')}

  &:not(:disabled) {
    cursor: pointer;

    &:hover {
      background-color: ${p => p.theme.primaryHover};
    }
  }

  :disabled {
    background-color: ${p => p.theme.border};
  }
`;

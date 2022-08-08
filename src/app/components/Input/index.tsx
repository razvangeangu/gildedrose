import * as React from 'react';
import styled from 'styled-components/macro';

export interface InputProps {
  /**
   * Must be unique.
   */
  label?: string;

  /**
   * Specifies the type of <input> element to display.
   *
   * @default 'text'
   */
  type?: InputType;

  /**
   * The short hint displayed in the input before the user enters a value.
   *
   * @default undefined
   */
  placeholder?: HTMLInputElement['placeholder'];

  /**
   * If `true`, the text-field will be disabled.
   *
   * @default undefined
   */
  disabled?: HTMLInputElement['disabled'];

  /**
   * Name attribute of the input element.
   *
   * @default undefined
   */
  name?: HTMLInputElement['name'];

  /**
   * Callback fired when the value is changed.
   */
  didChange?: (value: string) => void;

  /**
   * The default value of the input.
   *
   * @default undefined
   */
  defaultValue?: string | null;

  /**
   * The className passed to the styled container.
   *
   * @default undefined
   */
  className?: string;
}

export type InputType =
  | 'date'
  | 'email'
  | 'hidden'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

export function Input({
  label,
  type,
  placeholder,
  disabled,
  name,
  didChange,
  defaultValue,
  className,
}: InputProps) {
  const inputId = `input-${label}-${name}`;

  const onInput = (
    event: React.FormEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) => {
    didChange && didChange(event.target.value);
  };

  return (
    <Label htmlFor={inputId} className={className}>
      {label && <LabelSpan>{label}</LabelSpan>}
      <InputContainer>
        <InputRaw
          id={inputId}
          type={type || 'text'}
          placeholder={placeholder}
          disabled={disabled}
          onInput={onInput}
          name={name}
          defaultValue={defaultValue || ''}
        />
      </InputContainer>
    </Label>
  );
}

const InputContainer = styled.div`
  align-content: center;
  align-items: center;
  border: 0.0625rem solid ${p => p.theme.border};
  border-radius: 0.25rem;
  display: flex;
  width: inherit;
`;

const InputRaw = styled.input`
  background-color: #fff;
  border: 0;
  border-radius: 0.25rem;
  color: ${p => p.theme.text};
  font-weight: 300;
  padding: 0.75rem 1rem;
  width: 100%;

  &:disabled {
    color: #ccc;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 800;
  text-align: left;
  width: inherit;
`;

const LabelSpan = styled.span`
  margin-bottom: 0.5rem;
`;

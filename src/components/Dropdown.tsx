import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface DropdownQuestion {
  label: string;
  state: string;
  options: DropdownOption[];
}

interface DropdownProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  options?: string[] | DropdownQuestion[];
  value?: Record<string, string> | string;
  onValueChange?: (key: string, value: string) => void;
  triggerText?: string;
}

export function Dropdown({
  iconLeft,
  iconRight,
  options = [],
  value = {},
  onValueChange,
  triggerText = "Open",
}: DropdownProps) {
  // Check if options are simple strings or questions
  const isSimpleOptions = options.length > 0 && typeof options[0] === "string";
  const isQuestions = options.length > 0 && typeof options[0] === "object";

  // Handle simple options (single question)
  if (isSimpleOptions) {
    const simpleOptions = options as string[];
    const currentValue =
      typeof value === "string" ? value : value.selected || "";

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">
            {iconLeft}
            {triggerText}
            {iconRight}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-neutral-800 border-neutral-600">
          <DropdownMenuLabel>Select Option</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-neutral-600" />
          {simpleOptions.map((option, index) => (
            <DropdownMenuCheckboxItem
              key={index}
              checked={currentValue === option}
              onCheckedChange={(checked) => {
                if (checked) {
                  onValueChange?.("selected", option);
                }
              }}
            >
              {option}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Handle questions (multiple questions with single select each)
  if (isQuestions) {
    const questions = options as DropdownQuestion[];
    const currentValues = typeof value === "object" ? value : {};

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="primary">
            {iconLeft}
            {triggerText}
            {iconRight}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-neutral-800 border border-solid border-neutral-600">
          {questions.map((question, questionIndex) => (
            <React.Fragment key={questionIndex}>
              <DropdownMenuLabel>{question.label}</DropdownMenuLabel>
              {question.options.map((option, optionIndex) => (
                <DropdownMenuCheckboxItem
                  key={optionIndex}
                  checked={currentValues[question.state] === option.value}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onValueChange?.(question.state, option.value);
                    }
                  }}
                  disabled={option.disabled}
                >
                  {option.label}
                </DropdownMenuCheckboxItem>
              ))}
              {questionIndex < questions.length - 1 && (
                <DropdownMenuSeparator className="bg-neutral-600" />
              )}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Fallback empty dropdown
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary">
          {iconLeft}
          {triggerText}
          {iconRight}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>No options available</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

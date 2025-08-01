
import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import MultiSelect from "../MultiSelect";

export interface Category {
  value: string;
  label: string;
  text: string;
  selected?: boolean;
}

export interface Subcategory {
  category: string; // Category value
  value: string;
  label: string;
  text: string;
  selected?: boolean;
}

interface SingleMultiSelectProps {
  categoryLabel: string; // Optional label for the category
  subcategoriesLabel: string; // Optional label for the subcategories
  options: Category[];
  multiOptions: Subcategory[];
  onSelectChange: (value: string) => void;
  onMultiChange: (values: string[]) => void;
  maxVisible?: number;
}

export default function SingleMultiSelect({
  categoryLabel,
  subcategoriesLabel,
  options,
  multiOptions,
  onSelectChange,
  onMultiChange,
}: SingleMultiSelectProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // Remove all selected options using MultiSelect's removeOption logic
  const removeAllMultiSelect = () => {
    onMultiChange([]);
    setSelectedValues([]);
  };

  const handleSelectChange = (value: string) => {
    setSelectedCategory(value);
    removeAllMultiSelect(); // Use removeOption logic to reset
    onSelectChange(value);
  };

  const handleMultiChange = (values: string[]) => {
    setSelectedValues(values);
    onMultiChange(values);
  };

  // (Rollback) Remove MultiSelect key logic, just use normal rendering

  // Filter subcategories based on selected category
  const filteredMultiOptions = selectedCategory
    ? multiOptions.filter(opt => opt.category === selectedCategory)
    : [];

  return (
    <ComponentCard title="Select Inputs">
      <div className="space-y-6">
        <div>
          <Label>{categoryLabel}</Label>
          <Select
            options={options}
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <MultiSelect
            label={subcategoriesLabel}
            options={filteredMultiOptions}
            defaultSelected={selectedValues}
            onChange={handleMultiChange}
            disabled={!selectedCategory}
          />
        </div>
      </div>
    </ComponentCard>
  );
}

import React from 'react';

interface FilterSidebarProps {
  selectedBrands: string[];
  selectedPriceRange: string[];
  inStockOnly: boolean;
  onFilterChange: (filterType: string, value: string | boolean) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedBrands,
  selectedPriceRange,
  inStockOnly,
  onFilterChange,
}) => {
  return (
    <aside className="w-full sm:w-1/4 bg-black p-4 border rounded shadow mb-4 sm:mb-0 text-white">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="flex flex-col gap-3">
        {/* Brands */}
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedBrands.includes('Apple')}
            onChange={() => onFilterChange('brand', 'Apple')}
          />
          Apple
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedBrands.includes('Samsung')}
            onChange={() => onFilterChange('brand', 'Samsung')}
          />
          Samsung
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedBrands.includes('Oppo')}
            onChange={() => onFilterChange('brand', 'Oppo')}
          />
          Oppo
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedBrands.includes('OnePlus')}
            onChange={() => onFilterChange('brand', 'OnePlus')}
          />
          OnePlus
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedBrands.includes('Xiaomi')}
            onChange={() => onFilterChange('brand', 'Xiaomi')}
          />
          Xiaomi
        </label>




        {/* Price Range */}
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedPriceRange.includes('10-20')}
            onChange={() => onFilterChange('price', '10-20')}
          />
          ₹10,000 - ₹20,000
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedPriceRange.includes('20-50')}
            onChange={() => onFilterChange('price', '20-50')}
          />
          ₹20,000 - ₹50,000
        </label>

        {/* Stock */}
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={inStockOnly}
            onChange={() => onFilterChange('stock', !inStockOnly)}
          />
          In Stock
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;

"use client"; //if need to use client you have definition that default " use client"


import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';

import { manufacturers } from '@/constants';

import { SearchManufacturerProps } from '@/types'

const SearchManufacturer = ({ manufacturer,
  setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('')

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => (
        item.toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, "")
          )))


  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">

            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="m1-4"
              alt="Car Logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) =>
              manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transiction ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >

            <Combobox.Options>
              {filteredManufacturers.length === 0 &&
                query !== "" && (
                  <Combobox.Options
                  value={query}
                  className="search-manufaturer__option"
                  >
                    Create "{query}"

                  </Combobox.Options>
                )}

            </Combobox.Options>

          </Transition>

        </div>
      </Combobox >

      SearchManufacturer

    </div >
  )
}

export default SearchManufacturer
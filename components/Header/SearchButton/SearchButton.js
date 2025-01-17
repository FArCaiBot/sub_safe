import { SearchIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure, WrapItem } from "@chakra-ui/react";
import React, { useRef } from "react";
import SearchBar from "../../SearchBar/SearchBar";

export default function SearchButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();
  return (
    <WrapItem>
      <IconButton
        aria-label="Search database"
        onClick={onOpen}
        icon={<SearchIcon />}
      />
      <SearchBar
        isOpen={isOpen}
        onClose={onClose}
        initialRef={initialRef}
        finalRef={finalRef}
      />
    </WrapItem>
  );
}

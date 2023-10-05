import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import EditIcon from "@mui/icons-material/Edit";
import "./Banner.css";

const data = [
  {
    name: {
      firstName: "Vijay",
      lastName: "Anand",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Ajay",
      lastName: "Vikram",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Deepak",
      lastName: "Gosh",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Anand",
      lastName: "Ilavagan",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "John Pablo",
      lastName: "Elfino",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
  {
    name: {
      firstName: "Mark",
      lastName: "Antony",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
  {
    name: {
      firstName: "Mukesh",
      lastName: "Ambani",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
  {
    name: {
      firstName: "Elon",
      lastName: "Musk",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
  {
    name: {
      firstName: "Selena",
      lastName: "Gomez",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
  {
    name: {
      firstName: "Akshy",
      lastName: "Kumar",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
  {
    name: {
      firstName: "Venu",
      lastName: "Gopal",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
      {
        accessorKey: "edit",
        header: "Edit",
        size: 100,
        Cell: ({ row }) => (
          <button
            className="edit-button"
            onClick={() => handleEdit(row.original)}
          >
            <EditIcon />
          </button>
        ),
      },
    ],
    []
  );

  // Function to handle the edit button click
  const handleEdit = (rowData) => {
    console.log("Editing:", rowData);
  };

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Example;

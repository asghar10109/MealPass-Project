import React, { useState } from "react";
import SectionTitle from "components/section-title";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
  ];

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SectionTitle title="Welcome" subtitle="All Resturant" />
      <TextField
        label="Search"
        variant="outlined"
        className="mb-3 search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ border: 0 }}>
              <TableCell sx={{ border: 0 }}>Name</TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                Calories
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                Fat&nbsp;(g)
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                Carbs&nbsp;(g)
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                Protein&nbsp;(g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.name} className="chart-container ">
                <TableCell component="th" scope="row" sx={{ border: 0 }}>
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{ border: 0 }}>
                  {row.calories}{" "}
                </TableCell>
                <TableCell align="right" sx={{ border: 0 }}>
                  {row.fat}
                </TableCell>
                <TableCell align="right" sx={{ border: 0 }}>
                  {row.carbs}
                </TableCell>
                <TableCell align="right" sx={{ border: 0 }}>
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Index;
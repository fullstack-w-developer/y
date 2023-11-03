'use client';

// import React from 'react';
// import { usersSelects } from '@/utils/data';

// const Filter = () => {
//   return (
//     <div className="rounded-lg bg-white overflow-hidden p-[14px] h-full">
//       <div className=" flex justify-between  border-[#E1E2E9]">
//         <div className="flex items-center justify-center">
//           <div className="flex items-center justify-evenly border border-[#E1E2E9] w-[50px] h-[20px] rounded-[5px] ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="12"
//               height="12"
//               viewBox="0 0 12 12"
//               fill="none"
//             >
//               <g clip-path="url(#clip0_1012_8785)">
//                 <path
//                   d="M11 1.5H1L5 6.23V9.5L7 10.5V6.23L11 1.5Z"
//                   stroke="#027AFF"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </g>
//               <defs className="">
//                 <clipPath id="clip0_1012_8785">
//                   <rect width="15" height="15" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//             <p className="text-[11px]  text-[#a7a8ac]">روش</p>
//           </div>
//           <svg
//             className=" ml-[5px]"
//             xmlns="http://www.w3.org/2000/svg"
//             width="15"
//             height="15"
//             viewBox="0 0 15 15"
//             fill="none"
//           >
//             <circle
//               cx="7.5"
//               cy="7.5"
//               r="7.5"
//               transform="matrix(-1 0 0 1 15 0)"
//               fill="#7D8693"
//             />
//           </svg>
//           <p className="text-[11px] -ml-[10px] mt-[7px] text-white">?</p>
//         </div>
//         <select className="w-[162px] h-[35px] border border-[#E1E2E9] rounded-[5px] text-[14px]">
//           <option value="option1">کاربران تاثیر گذار</option>
//           <option value="option2">Another Option</option>
//           <option value="option3">Yet Another Option</option>
//         </select>

//       </div>

//       <div>
//         <div className="flex justify-between  border-t-[#E1E2E9] border border-r-0 border-l-0 py-[8px] mt-[9px]">
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="17"
//               viewBox="0 0 16 17"
//               fill="none"
//             >
//               <path
//                 d="M14 5.66675H2C1.72667 5.66675 1.5 5.44008 1.5 5.16675C1.5 4.89341 1.72667 4.66675 2 4.66675H14C14.2733 4.66675 14.5 4.89341 14.5 5.16675C14.5 5.44008 14.2733 5.66675 14 5.66675Z"
//                 fill="#323130"
//               />
//               <path
//                 d="M12 9H4C3.72667 9 3.5 8.77333 3.5 8.5C3.5 8.22667 3.72667 8 4 8H12C12.2733 8 12.5 8.22667 12.5 8.5C12.5 8.77333 12.2733 9 12 9Z"
//                 fill="#323130"
//               />
//               <path
//                 d="M9.33366 12.3333H6.66699C6.39366 12.3333 6.16699 12.1066 6.16699 11.8333C6.16699 11.5599 6.39366 11.3333 6.66699 11.3333H9.33366C9.60699 11.3333 9.83366 11.5599 9.83366 11.8333C9.83366 12.1066 9.60699 12.3333 9.33366 12.3333Z"
//                 fill="#323130"
//               />
//             </svg>
//             <p className="">روش</p>
//           </div>
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="17"
//               viewBox="0 0 16 17"
//               fill="none"
//             >
//               <path
//                 d="M14 5.66675H2C1.72667 5.66675 1.5 5.44008 1.5 5.16675C1.5 4.89341 1.72667 4.66675 2 4.66675H14C14.2733 4.66675 14.5 4.89341 14.5 5.16675C14.5 5.44008 14.2733 5.66675 14 5.66675Z"
//                 fill="#323130"
//               />
//               <path
//                 d="M12 9H4C3.72667 9 3.5 8.77333 3.5 8.5C3.5 8.22667 3.72667 8 4 8H12C12.2733 8 12.5 8.22667 12.5 8.5C12.5 8.77333 12.2733 9 12 9Z"
//                 fill="#323130"
//               />
//               <path
//                 d="M9.33366 12.3333H6.66699C6.39366 12.3333 6.16699 12.1066 6.16699 11.8333C6.16699 11.5599 6.39366 11.3333 6.66699 11.3333H9.33366C9.60699 11.3333 9.83366 11.5599 9.83366 11.8333C9.83366 12.1066 9.60699 12.3333 9.33366 12.3333Z"
//                 fill="#323130"
//               />
//             </svg>
//             <p className="">نام کاربری</p>
//           </div>
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="17"
//               viewBox="0 0 16 17"
//               fill="none"
//             >
//               <path
//                 d="M14 5.66675H2C1.72667 5.66675 1.5 5.44008 1.5 5.16675C1.5 4.89341 1.72667 4.66675 2 4.66675H14C14.2733 4.66675 14.5 4.89341 14.5 5.16675C14.5 5.44008 14.2733 5.66675 14 5.66675Z"
//                 fill="#323130"
//               />
//               <path
//                 d="M12 9H4C3.72667 9 3.5 8.77333 3.5 8.5C3.5 8.22667 3.72667 8 4 8H12C12.2733 8 12.5 8.22667 12.5 8.5C12.5 8.77333 12.2733 9 12 9Z"
//                 fill="#323130"
//               />
//               <path
//                 d="M9.33366 12.3333H6.66699C6.39366 12.3333 6.16699 12.1066 6.16699 11.8333C6.16699 11.5599 6.39366 11.3333 6.66699 11.3333H9.33366C9.60699 11.3333 9.83366 11.5599 9.83366 11.8333C9.83366 12.1066 9.60699 12.3333 9.33366 12.3333Z"
//                 fill="#323130"
//               />
//             </svg>
//             <p className="">رتبه</p>
//           </div>
//         </div>
//         <>
//           <div className='height_user_Set'>
//             {usersSelects.map((items, index) => {
//               return <>
//                 {/* flex justify-between py-[14px] text-[10px] text-[#8e8f94] */}
//                 <div className='table_set_user' key={index}>
//                   <p className=" ">{items.method}</p>
//                   <p className=" ">{items.username}</p>
//                   <p className="">{items.rate}</p>
//                 </div >
//               </>
//             })}
//           </div>
//           <div className="flex justify-center">
//             <p className="text-[#8e8f94]">صفحه ها</p>
//             <svg
//               className="mt-[6px]"
//               xmlns="http://www.w3.org/2000/svg"
//               width="6"
//               height="10"
//               viewBox="0 0 4 6"
//               fill="none"
//             >
//               <path
//                 d="M3.5 4.91289L3.5 1.08711C3.5 0.659934 2.99894 0.429479 2.6746 0.707482L0.4429 2.62037C0.210094 2.81992 0.210094 3.18008 0.4429 3.37963L2.6746 5.29252C2.99894 5.57052 3.5 5.34007 3.5 4.91289Z"
//                 fill="#027AFF"
//               />
//             </svg>
//             <p>1</p>
//             <svg
//               className="mt-[6px]"
//               xmlns="http://www.w3.org/2000/svg"
//               width="6"
//               height="10"
//               viewBox="0 0 4 6"
//               fill="none"
//             >
//               <path
//                 d="M0.5 1.08711L0.5 4.91289C0.5 5.34007 1.00106 5.57052 1.3254 5.29252L3.5571 3.37963C3.78991 3.18008 3.78991 2.81992 3.5571 2.62037L1.3254 0.707482C1.00106 0.429479 0.5 0.659934 0.5 1.08711Z"
//                 fill="#027AFF"
//               />
//             </svg>
//             <p className="text-[#8e8f94]">30</p>
//           </div>
//         </>
//       </div>
//     </div>
//   );
// };

// export default Filter;


import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

interface Data {
  id: number;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): Data {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(2, 'Donut', 452, 25.0, 51, 4.9),
  createData(3, 'Eclair', 262, 16.0, 24, 6.0),
  createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('calories');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <div style={{ width: '100%',height:"100%", background:"#fff" }}>
        <TableContainer sx={{height:"100%"}}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                  
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />     
    </div>
  );
}

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { GridComponent } from '../components';
import { GridColDef } from '@mui/x-data-grid';
import { INGREDIENTS } from '../api';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const COLUMNS_DEFINITION: GridColDef[] = [
    {field: 'id', hide: true, filterable: false},
    {field: 'type', headerName: 'Type', width: 200, filterable: false},
    {field: 'name', headerName: 'Ingredient Name', width: 200, filterable: false},
    {field: 'locations', headerName: 'Regions', width: 600, filterable: false},
];

const refinedRows = INGREDIENTS.map((row) => ({
    id: row.id,
    type: row.type,
    name: row.name,
    locations: row.location.join(', '),
}));

export const HomePage: React.FC = () => {
    const [filterName, setFilterName] = useState('');
    const [filterRegion, setFilterRegion] = useState('');


    const rowFiltering = () => {
        let result = [...refinedRows];
        if (filterName.length > 2) {
            result = result.filter((el) => el.name.includes(filterName));
        }

        if (filterRegion.length > 2) {
            result = result.filter((el) => el.locations.includes(filterRegion));
        }

        return result;
    };

    const handleRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFilterRegion(value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFilterName(value);
    };

    return (<Paper style={{ marginTop: '90px' }}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="filterByName" value={ filterName } onChange={handleNameChange} label="Filter by name" variant="outlined" />
                <TextField id="filterByRegion" value={ filterRegion } onChange={handleRegionChange} label="Filter by region" variant="outlined" />
            </Box>
            <GridComponent columns={COLUMNS_DEFINITION} rows={ rowFiltering() }/>
        </Paper>);
};

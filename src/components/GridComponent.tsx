import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type GridComponentProps = {
    columns: GridColDef[],
    rows: any,
};

export const GridComponent: React.FC<GridComponentProps> = ({ columns, rows }) => {
    return (
        <div style={{ height: 800, width: '100%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid
                        columns={ columns }
                        rows={ rows }
                        hideFooter
                    />
                </div>
            </div>
        </div>
    );
};

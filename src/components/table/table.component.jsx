import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './table.styles.css';
// import { GridApi } from 'ag-grid-community';
import {DistrictLink as Link} from '../district-link/link.component';

const Table = ({ rowData, tableName, headerName }) => {
    
    const gridOptions = {

        onSortChanged(e) {
            e.api.refreshCells();
          },

          onFilterChanged(e) {
            e.api.refreshCells();
          },

          onGridReady(params) {
            // this.gridApi = params.api;
            // this.gridColumnApi = params.columnApi;   
            // params.api.sizeColumnsToFit(); 

            Array.from(document.getElementsByClassName('ag-input-field-input ag-text-field-input')).forEach((obj) => {
                if (obj.attributes['disabled']) { // skip columns with disabled filter
                  return;
                }
                obj.setAttribute('placeholder', `Search ${headerName}`);
                // obj.setAttribute('type', 'search');
              });
          },

          rowHeight: 60,
          animateRows: true,

          defaultColDef: {
            autoHeight: true,
            suppressMovable: true,
            sortingOrder: ['desc', 'asc'],
            wrapText: true,
            cellClass: 'cell',
            cellStyle: {'white-space': 'pre-wrap', 'word-break': 'keep-all'},
          },

          frameworkComponents: {
              Link: Link,
          }

    }

    function stringComparator(a, b) {
        let num1 = +a[0].replaceAll(',', '');
        let num2 = +b[0].replaceAll(',', '');
        let num3 = num1 - num2;
        if(num3>0) 
            return 1
        else if(num3<0)
            return -1
        
        return 0
    }

    function nameCellRenderer(params) {
        if (params.value) 
            return `<span class='name'>${params.value}</span>`;
        else {
            return null;
        }
    }

    function numberCellRenderer(params) {
        if (params.value){
            if(params.value[1] === 0)
                return `<td>${params.value[0]}</td>`;

            return `<td>${params.value[0]}<span class='changes'>Today: ${params.value[1]}</span></td>`;
        }
        else return null;
    }    

    if(rowData){

        rowData = rowData.filter(state => state.name !== 'TT')

        return (
            <div className="grid ag-theme-alpine">
                <AgGridReact
                    floatingFilter
                    rowData={rowData}
                    gridOptions={gridOptions}>
                    <AgGridColumn headerName={tableName} tag="h3" className='table-header' floatingFilter>
                        <AgGridColumn headerName="#" valueGetter="node.rowIndex + 1"></AgGridColumn>

                        <AgGridColumn headerName={headerName} field="name"
                                      cellRenderer={headerName==='State'?'Link':nameCellRenderer} //Link Component for Indian state names
                                      sortable filter></AgGridColumn>

                        <AgGridColumn comparator={stringComparator} field="confirmed" 
                                      cellRenderer={numberCellRenderer} sortable sort='desc'></AgGridColumn>

                        <AgGridColumn comparator={stringComparator} field="active" 
                                      cellRenderer={numberCellRenderer} sortable></AgGridColumn>

                        <AgGridColumn comparator={stringComparator} field="recovered" 
                                      cellRenderer={numberCellRenderer}sortable></AgGridColumn>

                        <AgGridColumn comparator={stringComparator} field="deaths" 
                                      cellRenderer={numberCellRenderer} sortable></AgGridColumn>
                    </AgGridColumn>
                </AgGridReact>
            </div>
        );
    }

    else 
        return (<div></div>)
}

export default Table;
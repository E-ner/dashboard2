import React from 'react';
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Inject,Search, Toolbar } from '@syncfusion/ej2-react-grids'

import { employeesData,contextMenuItems,employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employee = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl sm:m-14'>
      <Header Category='Page' title='Employees' />
      <GridComponent
        id='gridcomp'
        dataSource ={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width= 'auto'
      >
        <ColumnsDirective>
        {employeesGrid.map((item,index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employee

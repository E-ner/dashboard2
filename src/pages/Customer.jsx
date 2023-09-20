import React from 'react';
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Inject,Selection, Toolbar,Edit,Sort,Filter } from '@syncfusion/ej2-react-grids'

import { customersData,contextMenuItems,customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customer = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl sm:m-14'>
      <Header Category='Page' title='Customers' />
      <GridComponent
        id='gridcomp'
        dataSource ={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        width={'auto'}
        editSettings={{allowDeleting: true, allowEditing: true}}
      >
        <ColumnsDirective>
        {customersGrid.map((item,index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customer

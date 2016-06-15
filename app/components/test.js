import { TableHeaderColumn, BootstrapTable } from 'react-bootstrap-table';
import React, { PropTypes, Component } from 'react';

export default class DataBootstrapGrid extends Component {

  render() {

    //Row select setting
    const selectRowProp = {
      mode: "checkbox",  //checkbox for multi select, radio for single select.
      clickToSelect: true,   //click row will trigger a selection on that row.
      bgColor: "rgb(238, 193, 213)"   //selected row background color
    };

    var data = [
      {name: "test1", id: 1, price: 1 },
      {name: "test2", id: 2, price: 2},
      {name: "test3", id: 3, price: 3}
    ];

    return (
      <BootstrapTable
        data={data}
        striped={true}
        hover={true}
        condensed={true}
        pagination={true}
        selectRow={selectRowProp}
        insertRow={true}
        deleteRow={true}
        columnFilter={true}
        search={true}>
        <TableHeaderColumn dataField="id" isKey={true} dataAlign="right" dataSort={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price" dataAlign="center">Product Price</TableHeaderColumn>
      </BootstrapTable>);
  }
}



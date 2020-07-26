import React from "react";
import { Label, Table } from "semantic-ui-react";

export default ({ orders, selectHandler }) => {
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Stav</Table.HeaderCell>
            <Table.HeaderCell>Kontakt</Table.HeaderCell>
            <Table.HeaderCell>Adresa</Table.HeaderCell>
            <Table.HeaderCell>Popis</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        ,
        <Table.Body>
          {orders.map(order => (
            <Table.Row
              onClick={() => selectHandler(order)}
              positive={order.selected}
              key={order.name}
            >
              <Table.Cell>
                <Label color="blue">{order.state}</Label>
              </Table.Cell>
              <Table.Cell>
                {order.name}
                <br />
                {order.contact}
              </Table.Cell>
              <Table.Cell>{order.address}</Table.Cell>
              <Table.Cell>{order.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./form";
import OrderList from "./order-list";
import Export from "./export";
import { Container, Menu } from "semantic-ui-react";

const AVAILABLE_VIEWS = {
  home: "view.home",
  export: "view.export"
};

const App = () => {
  const [orders, setOrders] = useState([]);
  const [view, setView] = useState(AVAILABLE_VIEWS.home);

  const handleSave = data => {
    setOrders([...orders, { ...data, state: "NEW", selected: false }]);
  };

  const handleSelect = order => {
    setOrders([
      ...orders.map(ord =>
        ord !== order ? order : { ...order, selected: !order.selected }
      )
    ]);
  };

  return (
    <div>
      <Menu>
        <Menu.Item active={true} onClick={() => setView(AVAILABLE_VIEWS.home)}>
          Objednávky
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            if (orders.length > 0) setView(AVAILABLE_VIEWS.export);
          }}
          disabled={orders.length < 1}
        >
          Exportovat
        </Menu.Item>
      </Menu>
      <Container id="main-container">
        {view === AVAILABLE_VIEWS.home && (
          <div>
            <Form saveHandler={handleSave} />
            <OrderList orders={orders} selectHandler={handleSelect} />
          </div>
        )}
        {view === AVAILABLE_VIEWS.export && (
          <div>
            <Export orders={orders} />
          </div>
        )}
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));

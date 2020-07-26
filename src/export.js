import React, { useState, useEffect } from "react";
import {} from "semantic-ui-react";
import QRCode from "react-qr-code";

export default ({ orders }) => {
  const selectedOrders = encodeURIComponent(
    JSON.stringify(orders.filter(order => order.selected))
  );
  const [width, setWidth] = useState(128);
  const url = `https://35yyt.csb.app?data=${selectedOrders}`;

  useEffect(() => {
    const w = document.getElementById("main-container").clientWidth;
    setWidth(w);
  }, []);

  return <QRCode size={width} value={url} />;
};

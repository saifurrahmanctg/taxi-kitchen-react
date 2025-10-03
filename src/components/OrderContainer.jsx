import React, { use, useState } from "react";
import OrderCard from "./OrderCard";
import { BookAlert, TriangleAlert, UtensilsCrossed } from "lucide-react";
import { toast } from "react-toastify";
import OrderStats from "./OrderStats";
import CookingCard from "./CookingCard";
import ServeCard from "./ServeCard";

const OrderContainer = ({ orderPromise }) => {
  const orderData = use(orderPromise);

  const [orders, setOrders] = useState(orderData);
  const [cooking, setCooking] = useState([]);
  const [ready, setReady] = useState([]);

  const handleOrderClick = (order) => {
    const cookingItems = cooking.find((item) => item.id == order.id);
    if (cookingItems) {
      toast.error(
        `${order.quantity} ${order.order_title} is already in Cooking!`
      );
      return;
    }
    toast.success(
      `${order.quantity} ${order.order_title} for Table# ${order.table_no} has sent for Cooking!`
    );
    // Handel the click functionality here
    const newCooking = [...cooking, order];
    setCooking(newCooking);
  };

  const handleCooking = (order) => {
    toast.info(
      `${order.quantity} ${order.order_title} has been Cooked and ready to Serve!`
    );

    const readyItems = [...ready, order];
    setReady(readyItems);
    const remainingCooking = cooking.filter((item) => item.id !== order.id);
    setCooking(remainingCooking);
    const remainingOrders = orders.filter((item) => item.id !== order.id);
    setOrders(remainingOrders);
  };

  const handleServed = (order) => {
    const remainingReady = ready.filter((item) => item.id !== order.id);
    setReady(remainingReady);
    toast.success(
      `${order.quantity} ${order.order_title} has been Served to Table# ${order.table_no}!`
    );
  };

  return (
    <section className="container space-y-5">
      <OrderStats orders={orders} cooking={cooking} ready={ready}></OrderStats>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Order Container Content */}
        <div className="md:col-span-7 space-y-5">
          <h2 className="text-3xl font-bold w-fit p-2 border-b-2 rounded-lg border-[#fcb802]">
            Current Orders
          </h2>
          {orders.length === 0 && (
            <div className="bg-amber-50 p-5 rounded-b-xl shadow-xl text-center text-gray-400 italic">
              <BookAlert className="mx-auto mb-4" size={80} />
              <p>No current orders are available.</p>
            </div>
          )}
          {orders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              handleOrderClick={handleOrderClick}
            />
          ))}
        </div>

        {/* Order status */}
        <div className="md:col-span-5 space-y-5">
          {/* Order status - Cooking */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold w-fit p-2 border-b-2 rounded-lg border-[#fcb802]">
              Cooking
            </h2>
            {cooking.length === 0 && (
              <div className="bg-linear-to-b from-[#ffffff] to-[#fcb70090] text-gray-400 rounded-xl p-5 shadow hover:shadow-lg">
                <TriangleAlert className="mx-auto mb-4" size={60} />
                <p className=" text-center italic">
                  No orders are being cooked currently.
                </p>
              </div>
            )}

            {cooking.map((order) => (
              <CookingCard
                key={order.id}
                order={order}
                handleCooking={handleCooking}
              ></CookingCard>
            ))}
          </div>
          {/* Order status - Ready */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold w-fit p-2 border-b-2 rounded-lg border-[#fcb802]">
              Ready to Serve
            </h2>
            {ready.length === 0 && (
              <div className="rounded-xl p-5 shadow bg-green-50 hover:shadow-md transition text-gray-400">
                <UtensilsCrossed className="mx-auto mb-4" size={60} />
                <p className=" text-center italic">
                  No orders are ready to serve currently.
                </p>
              </div>
            )}
            {ready.map((order) => (
              <ServeCard
                key={order.id}
                order={order}
                handleServed={handleServed}
              ></ServeCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderContainer;

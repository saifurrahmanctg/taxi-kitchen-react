import { HandPlatter } from "lucide-react";

const ServeCard = ({ order, handleServed }) => {
  order.cookedAt = new Date().toLocaleTimeString();
  return (
    <div className="border border-green-200 rounded-xl px-5 py-2 flex justify-between items-center shadow bg-green-50 hover:shadow-md transition">
      <div>
        {/* Order Title */}
        <h3 className="text-xl font-bold text-green-700 mb-2">
          {order.order_title}
        </h3>

        {/* Table No */}
        <p className="text-gray-800">
          <span className="font-semibold">Table:</span> {order.table_no}
        </p>

        {/* Waiter ID */}
        <p className="text-gray-800">
          <span className="font-semibold">Waiter ID:</span> {order.waiterId}
        </p>

        {/* Cooking Time */}
        <p className="text-gray-600 mt-2">
          <span className="font-semibold">Cooking Time:</span> {order.cookedAt}
        </p>
      </div>
      <div>
        <button
          onClick={() => handleServed(order)}
          className="px-3 py-2 rounded-3xl bg-amber-200 flex gap-1 items-center cursor-pointer text-green-700 font-semibold hover:bg-green-200 hover:text-amber-600 hover:shadow-md transition"
        >
          <HandPlatter size={20} />
          <p>Served?</p>
        </button>
      </div>
    </div>
  );
};

export default ServeCard;

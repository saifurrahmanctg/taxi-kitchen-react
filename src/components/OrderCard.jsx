import { UtensilsCrossed } from "lucide-react";

const OrderCard = ({ order, handleOrderClick }) => {
  const { order_no, order_title, table_no, quantity, special_instruction } =
    order;

  return (
    <div
      onClick={() => handleOrderClick(order)}
      className="bg-amber-50 p-5 rounded-xl shadow-xl relative space-y-3 cursor-pointer"
    >
      {/* Order Number */}
      <p className="text-xs bg-amber-400 p-2 inline-block rounded-xl">
        #{order_no}
      </p>

      {/* Order Title */}
      <h2 className="text-xl flex items-center gap-2">
        <UtensilsCrossed />
        {quantity} {order_title}
      </h2>

      {/* Special Instruction */}
      <div className="mt-3 text-xs">
        <h4 className="text-primary font-bold text-sm">Instruction</h4>
        <p>{special_instruction}</p>
      </div>

      {/* Table Number Badge */}
      <div className="absolute right-6 top-4 w-10 h-10 flex justify-center items-center bg-[#fcb802] rounded-full opacity-60 text-white">
        {table_no}
      </div>
    </div>
  );
};

export default OrderCard;

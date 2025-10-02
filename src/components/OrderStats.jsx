import { CookingPot, ScrollText, TicketCheck } from "lucide-react";
import React from "react";

const OrderStats = ({ orders, cooking, ready }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Total Orders Counts */}
      <div className="border-4 border-dotted rounded-2xl border-[#fcb802] p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center font-medium">
            Current Orders
            <h2 className="text-6xl font-bold">{orders.length}</h2>
          </div>
        </div>
      </div>

      {/* Total Cooking Counts */}
      <div className="border-4 border-dotted rounded-2xl border-[#fcb802] p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center font-medium">
            Currently Cooking
            <h2 className="text-6xl font-bold">{cooking.length}</h2>
          </div>
        </div>
      </div>

      {/* Total Served Counts */}
      <div className="border-4 border-dotted rounded-2xl border-[#fcb802] p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <TicketCheck className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center font-medium">
            Ready to Serve
            <h2 className="text-6xl font-bold">{ready.length}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStats;

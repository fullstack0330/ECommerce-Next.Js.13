"use client";

import { Order } from "@prisma/client";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import SeeAllButton from "../buttons/SeeAllButton";
import StatusBox from "../StatusBox";

interface OrderCardProps {
  order: Order & {
    _count: {
      orderItems: number;
    };
  };
}
const OrderCard = ({ order }: OrderCardProps) => {
  const router = useRouter();
  const navigatePath = `/orders/${order.id}`;
  return (
    <div className="p-4 md:mx-0 mx-2 border border-zinc-300 mt-2 rounded-md shadow-md grid md:grid-cols-4 grid-cols-2">
      <div className="grid-cols-1">
        <p className="text-sm mb-2">
          Order{" "}
          <span
            onClick={() => router.push(navigatePath)}
            className="cursor-pointer hover:underline hover:text-red-800 ease-in duration-150"
          >
            {order.id}
          </span>
        </p>
        <p className="text-[16px] font-bold">
          {order._count.orderItems} Item(s)
        </p>
      </div>
      <div className="md:flex hidden flex-row items-center justify-center">
        <p className="text-sm">
          {order.updatedAt ? "Updated on " : "Created on "}
          {format(
            new Date(order.updatedAt ? order.updatedAt : order.createdAt),
            "MM/dd/yyyy h:mm a"
          )}
        </p>
      </div>
      <div className="grid-cols-1 flex flex-row items-center md:justify-center justify-end">
        <StatusBox status={order.status} />
      </div>
      <div className="grid-cols-1 md:flex hidden items-center justify-end">
        <SeeAllButton route={navigatePath}>View</SeeAllButton>
      </div>
    </div>
  );
};

export default OrderCard;

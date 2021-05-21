import React from "react";

import { formatCard } from "../utils";

import { ReactComponent as Amex } from "../assets/amex-icon.svg";
import { ReactComponent as Visa } from "../assets/visa-icon.svg";
import { ReactComponent as Mastercard } from "../assets/mastercard-icon.svg";

import TransactionStatus from "./TransactionStatus";

const Transaction = ({ transaction, type, transactions }) => {
    return (
        <tr>
      <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">{transaction?.currency}</span> 
          <span>{transaction?.amount}</span>
        </div>
      </td>
      <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">
        <span className="text-gray-400">--</span>
      </td>
      <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">
        {(transaction?.card?.scheme.toUpperCase() === "AMEX") && (<Amex />)}
        {(transaction?.card?.scheme.toUpperCase() === "VISA") && (<Visa />)}
        {(transaction?.card?.scheme.toUpperCase() === "MASTERCARD") && (<Mastercard />)}
      </td>
      <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm text-gray-400">{formatCard(transaction?.card)}</td>
      <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{transaction?.brand?.name}</td>
      <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{transaction?.location?.address}</td>
      <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">
        <TransactionStatus status={type} />
      </td>
      <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{new Date(transaction?.created).toLocaleString()}</td>
    </tr>
    );
};

export default Transaction;

"use client";
const { createContext, useState, useContext } = require("react");

const ReservationContext = createContext();

const initialState = {
  from: undefined,
  to: undefined,
};

export default function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("Wrong location for useReservation!");
  return context;
};

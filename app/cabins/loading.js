import Spinner from "../_components/Spinner";
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
}

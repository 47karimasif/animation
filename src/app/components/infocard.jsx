import Image from "next/image";

export const InfoCard = () => {
  return (
    <div className="motion-scale-in-[0.5] motion-translate-x-in-[-44%] motion-translate-y-in-[49%] motion-rotate-in-[-30deg] motion-duration-[1.00s]/scale w-80 rounded-lg bg-gray-900 p-6 shadow-lg transition-all hover:shadow-neon">
      <div className="flex justify-center mb-4">
        <Image
          src="/vercel.svg"
          alt="Product Image"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <h3 className="text-center text-2xl font-bold text-white">
        Product Name
      </h3>
      <p className="mt-2 text-center text-gray-400">
        Discover the best features of our product and see why it stands out in
        the market.
      </p>
      <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 py-2 font-semibold text-white transition hover:from-purple-600 hover:to-pink-600">
        Learn More
      </button>
    </div>
  );
}

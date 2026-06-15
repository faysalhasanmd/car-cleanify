// "use server";

// export const getSingleServices = async (id) => {
//   const res = await fetch(
//     `https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${id}`,
//     // { cache: "no-store" },
//   );
//   const data = await res.json();
//   return data;
// };

// export const getAllServices = async (searchParams) => {
//   const baseUrl =
//     process.env.NEXT_PUBLIC_API_URL ||
//     "https://car-washing-system-cleanify-server.vercel.app";
//   const queryParams = new URLSearchParams(searchParams).toString();

//   try {
//     const res = await fetch(`${baseUrl}/api/v1/services?${queryParams}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch services: ${res.statusText}`);
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Data fetching error:", error);
//     return { data: [] };
//   }
// };

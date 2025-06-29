import { api } from "@/utils/api";

export const handleFetch = async (endPoint, params = {}) => {
  try {
    const queryString = Object.keys(params).length
      ? "?" + new URLSearchParams(params).toString()
      : "";

    const response = await fetch(`${api}/${endPoint}${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json(); // Return data directly
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

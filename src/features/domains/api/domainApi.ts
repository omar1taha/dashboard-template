import { useQuery } from "@tanstack/react-query";
import { Payload, User } from "../types";

export const useDomainQuery = () =>
  useQuery({
    queryKey: ["domains"],
    queryFn: async (): Promise<Payload<User>> => {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

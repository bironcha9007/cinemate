import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} / Bayron Api Cinemate`;
    });

  return null;
}

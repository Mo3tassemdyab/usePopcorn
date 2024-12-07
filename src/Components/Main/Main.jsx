import React, { Children, useState } from "react";
import ListBox from "../ListBox/ListBox";
import WatchedBox from "../WatchedBox/WatchedBox";

export default function Main({children}) {
  return (
    <>
      <main className="main">
          {children}
      </main>
    </>
  );
}

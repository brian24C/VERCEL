import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextRequest) => {
  return NextResponse.json({
    ok: true,
    data: [
      {
        id: 1,
        name: "brian",
      },
      {
        id: 2,
        name: "brian",
      },
    ],
  });
};
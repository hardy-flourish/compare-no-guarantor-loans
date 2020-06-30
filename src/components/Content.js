import React from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
export default function CommonQuestions({ data }) {
  return (
    <div className="bg-brand-gray-bg flex-grow">
      {" "}
      <div
        css={css``}
        className="container py-24 overflow-hidden"
        dangerouslySetInnerHTML={{ __html: data.main.md.html }}
      ></div>
    </div>
  )
}

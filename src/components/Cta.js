import React from "react"
import { Link } from "gatsby"

import { trackCustomEvent } from "gatsby-plugin-google-analytics"
export default function Cta({ className, amount = 2000, term = 12 }) {
  return (
    <a
      href="/apply/"
      onClick={(event) => {
        event.preventDefault()
        trackCustomEvent({
          category: "Form",
          action: "Click to form",
          label: "Click to form",
        })
        window.open(event.target.href, "_self")
      }}
      state={{ amount, term }}
      className={
        "text-white  items-center justify-center bg-brand-blue  inline-flex tracking-wide  p-2 w-48 h-12 rounded-full " +
        className
      }
    >
      {" "}
      Get Started
    </a>
  )
}

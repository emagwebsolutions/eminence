import React from "react"
import Head from "next/head"
import { Title } from '../types/Types'

const Meta = ( { title }: Title ) => {
  return (
        <Head>

          <title>{ title }</title>
        </Head>

      )
}

export default Meta
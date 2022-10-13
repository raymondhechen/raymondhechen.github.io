import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledExternalLink = styled.a`
  text-decoration: none;
`

type Props = {
  external?: boolean
  url: string
  children: ReactNode
}

const LinkComponent: FC<Props> = ({ external, url, children }) => {
  if (external) {
    return (
      <StyledExternalLink href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledExternalLink>
    )
  }

  return <Link href={url}>{children}</Link>
}

export default LinkComponent

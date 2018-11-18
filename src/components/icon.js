import React from 'react'

export const Icon = (props) => {
  const {url, iconUrl, alt} = props
  return <a href={url}><img src={iconUrl} alt={alt} class="icon" /></a>
}
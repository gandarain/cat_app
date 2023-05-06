const capitalizeText = text => {
  const splitText = text.split('_')

  const result = splitText.map(item => {
    return item.charAt(0).toUpperCase() + item.slice(1)
  })

  return result.join(' ')
}

export { capitalizeText }

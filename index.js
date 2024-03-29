const Box = props => {
  const {className, children} = props
  return (
    <div className={className}>
      <p className='para'>{children}</p>
    </div>
  )
}

const element = (
  <div className='bg'>
    <h1 className='head'>Boxes</h1>
    <div className='card'>
      <Box className='box1' children='Small' />
      <Box className='box2' children='Medium' />
      <Box className='box3' children='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

const main = {
  display: 'flex',
  background: 'white',
  color: 'black',
  minHeight: `calc(100vh - 64px - 64px)`,
  justifyContent: 'center',
  alignItems: 'center'
}

const container =  {
  maxWidth: '1200px',
  margin: '0 auto'
}

const welcome_title = {
  textAlign: 'center',
  fontWeight: 'Bold',
  fontSize: '72px' 
}

const welcome_subtitle = {

}


export default function Welcome() {
    return (
    <div style={main}>
      <div style={container}>
          <div style = {welcome_title}>Welcome</div>
          <div style = {welcome_subtitle}>Monitor your income and expenses, 
            stay on top of your budget, 
            and make smarter financial decisions with clarity and confidence.
          </div>
      </div>
    </div>
)} 
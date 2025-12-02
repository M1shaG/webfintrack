import { Layout } from 'antd';

const headerStyle = {
  textAlign: 'center',
  height: 64,
  padding: '1rem',
  display: 'flex',
  backgroundColor: 'white',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const headerLogo = {
  display: 'flex',
}

const logoText = {
  marginLeft: '10px'
}

export default function AppHeader() {
    return (<Layout.Header style={headerStyle}>
      <div style={headerLogo}>
        <img src="/src/assets/react.svg" alt="LG" />
        <h3 style={logoText}>webfincrack</h3>
      </div>
      <div>
        <div>Sign Up</div>
      </div>
    </Layout.Header>)
}
import { Layout } from 'antd';
import AppHeader from '/src/components/layout/AppHeader.jsx'
import AppContent from '/src/components/layout/AppContent.jsx'
import AppFooter from '/src/components/layout/AppFooter.jsx'

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden'
};

export default function App() {
  return (  
    <Layout style={layoutStyle}>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Layout>
    )
}


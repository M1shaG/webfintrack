import { Layout } from 'antd';
import AppHeader from '/src/components/layout/AppHeader.jsx'
import AppContent from '/src/components/layout/AppContent.jsx'
import AppFooter from '/src/components/layout/AppFooter.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Test from "./pages/Test.jsx"


const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden'
};

const queryClient = new QueryClient()

export default function App() {
  return (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>

      <nav>
        <Link to="/Test">Home</Link> |{" "}
      </nav>

      <Layout style={layoutStyle}>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Layout>
    </QueryClientProvider>
  </BrowserRouter>
    )
}


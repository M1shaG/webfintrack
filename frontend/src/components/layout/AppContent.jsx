import { Layout, Table } from 'antd';

const contentStyle = {
  textAlign: 'center',
  minHeight: `calc(100vh - 60px)`,
  lineHeight: '120px',
  color: '#fff',
};

const dataSource = [
  {
    key: '1',
    date: '21-11-2025',
    description: 'water',
    amount: 10,
  },
  {
    key: '2',
    date: '22-11-2025',
    description: 'chocolate',
    amount: 20,
  },
];

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

export default function AppContent() {
    return(
    <Layout.Content style={contentStyle}>
      <Table dataSource={dataSource} columns={columns} />;
    </Layout.Content>
    )
}
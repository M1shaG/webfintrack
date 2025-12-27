import { Layout, Table } from 'antd';
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const contentStyle = {
  textAlign: 'center',
  minHeight: `calc(100vh - 64px)`,
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
    const [page, setPage] = useState(1);

    const {
      data: posts,
      isError,
      isPending,
    } = useQuery({
      queryKey: ["posts", { page }],
      queryFn: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return (await response.json());
      },
    });

    console.log(posts)

    return(
    <Layout.Content style={contentStyle}>
      <Table dataSource={dataSource} columns={columns} />;
    </Layout.Content>
    )
}
import { Outlet } from "react-router";
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
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

const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};



export default function SignUp() {
    return (
    <div style={main}>
      <div style={container}>
          
        <Form
            name="basic"
            style={{ maxWidth: 600, width: '100%' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

        <Form.Item
            layout="vertical"
            label="Username"
            name="username"
            rules={[{required: true, message: 'Please input your username!'}]}
        >
        <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
            layout="vertical"
            label="Password"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
        >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
            <Button block type="primary" htmlType="submit">
                Submit
            </Button>
             or <a href="">Register now!</a>
        </Form.Item>
        

        </Form>

      </div>
      <Outlet />
    </div>
    )
} 

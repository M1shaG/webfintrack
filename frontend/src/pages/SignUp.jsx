import { Outlet } from "react-router";
import { Button, Checkbox, Form, Input } from 'antd';


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
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

        <Form.Item
            label="Username"
            name="username"
            rules={[{required: true, message: 'Please input your username!'}]}
        >
        <Input />
        </Form.Item>

        <Form.Item
            label="Mail"
            name="mail"
            rules={[{required: true, message: 'Please input your mail!'}]}
        >
        <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
        >
        <Input />
        </Form.Item>

        <Form.Item
            label="Repeat Password"
            name="rep_password"
            rules={[{required: true, message: 'Please input your password!'}]}
        >
        <Input />
        </Form.Item>

        <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
        

        </Form>

      </div>
      <Outlet />
    </div>
    )
} 



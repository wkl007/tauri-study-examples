import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { WebviewWindow } from '@tauri-apps/api/window';

const pages = [
  {
    name: '1. 接口请求',
    url: '/http',
  },
  {
    name: '2. 窗口定制',
    label: 'customization',
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const onClick = ({ url, label }: any) => {
    if (url) {
      navigate(url);
    }
    if (label) {
      const window = WebviewWindow.getByLabel(label);
      window?.show();
    }
  };

  return (
    <>
      {pages.map((page, index) => (
        <Button key={index} onClick={() => onClick(page)}>
          {page.name}
        </Button>
      ))}
    </>
  );
};

export default HomePage;

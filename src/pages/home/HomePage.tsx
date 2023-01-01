import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const pages = [
  {
    name: '1. 接口请求',
    url: '/http',
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {pages.map((page, index) => (
        <Button key={index} onClick={() => navigate(page.url)}>
          {page.name}
        </Button>
      ))}
    </>
  );
};

export default HomePage;

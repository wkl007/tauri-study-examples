import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import '@/assets/styles/components/app-header.less';

interface AppHeaderProps {
  title: string;
}

const AppHeader: FC<AppHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-header">
      <div className="back-icon" onClick={goBack}>
        <ArrowLeftOutlined />
      </div>
      {title}
    </div>
  );
};

export default AppHeader;

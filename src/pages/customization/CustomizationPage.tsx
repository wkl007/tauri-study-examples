import { Button } from 'antd';
import { WebviewWindow } from '@tauri-apps/api/window';
import { appWindow } from '@tauri-apps/api/window';
import '@/assets/styles/pages/customization-page.less';

const userAgent = {
  macos:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
  linux:
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
  windows:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
};

const CustomizationPage = () => {
  const createWindow = () => {
    const isMacOS = import.meta.env.TAURI_PLATFORM === 'macos';
    const window = new WebviewWindow('test', {
      url: 'https://www.baidu.com',
      title: '窗口定制',
      fullscreen: false,
      width: 800,
      height: 600,
      center: true,
      resizable: true,
      skipTaskbar: false,
      visible: false,
      decorations: true,
      userAgent: isMacOS ? userAgent.macos : userAgent.windows,
    });
    window.once('tauri://created', () => {
      window.show();
    });

    window.once('tauri://error', () => {
      console.error('window create failed');
    });
  };
  return (
    <div className="customization-page">
      <div data-tauri-drag-region className="titlebar">
        <div
          className="titlebar-button"
          id="titlebar-minimize"
          onClick={() => appWindow.minimize()}>
          <img
            src="https://api.iconify.design/mdi:window-minimize.svg"
            alt="minimize"
          />
        </div>
        <div
          className="titlebar-button"
          id="titlebar-maximize"
          onClick={() => appWindow.toggleMaximize()}>
          <img
            src="https://api.iconify.design/mdi:window-maximize.svg"
            alt="maximize"
          />
        </div>
        <div
          className="titlebar-button"
          id="titlebar-close"
          onClick={() => appWindow.hide()}>
          <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </div>
      </div>
      <Button onClick={createWindow}>JS API 创建窗口</Button>
    </div>
  );
};

export default CustomizationPage;

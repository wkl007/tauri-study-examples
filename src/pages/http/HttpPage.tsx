import { Button } from 'antd';
import { Body } from '@tauri-apps/api/http';
import AppHeader from '@/components/AppHeader';
import http from '@/utils/http';

const HttpPage = () => {
  const getMethod = async () => {
    try {
      const params = {
        key: '4fed42ec86c04922bf872b6f48809ebb',
        location: '101010100',
      };
      const res = await http('https://devapi.qweather.com/v7/weather/now', {
        method: 'get',
        params,
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  const postMethod = async () => {
    try {
      const body = Body.json({
        test: '1',
      });
      const res = await http('https://devapi.qweather.com/post', {
        method: 'post',
        body,
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  const generateFileInfo = (
    arrayBuffer: any,
    mime: string,
    fileName: string,
  ) => {
    return {
      file: new Uint8Array(arrayBuffer),
      mime,
      fileName,
    };
  };

  const uploadMethod = async ({ target: { files } }: any) => {
    try {
      const [file] = files;
      const arrayBuffer = await file.arrayBuffer();
      const body = Body.form({
        file: generateFileInfo(arrayBuffer, file.type, file.name),
        // todo 其他参数
      });
      const res = await http('https://devapi.qweather.com/upload', {
        method: 'post',
        body,
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <AppHeader title="接口请求" />
      <Button onClick={getMethod}>GET 请求</Button>
      <Button onClick={postMethod}>POST 请求</Button>
      <input type="file" onChange={uploadMethod} />
    </div>
  );
};

export default HttpPage;

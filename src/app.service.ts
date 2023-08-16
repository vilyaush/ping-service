import { Injectable } from '@nestjs/common';
import { InfoResponse, InfoSuccessResponse } from './info.dto';

@Injectable()
export class AppService {
  getInfoById(request: any): InfoResponse {
    const host = request.params.host;

    const ping = Math.random() * 100;

    const response: InfoSuccessResponse = {
      id: '1',
      size: 10,
      used: 5,
      description: 'description',
      name: 'name',
      status: 1,
      ping,
      apps: [
        {
          id: '1',
          bundleId: 'com.example.app',
          title: 'ping-service',
          platform: 0,
        },
      ],
    };

    return { result: response };
  }
}

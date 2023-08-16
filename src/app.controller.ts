import { Controller, Post, Body } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { InfoResponse } from './info.dto';
import { AppService } from './app.service';

@ApiTags('Test')
@Controller('api/test/v1')
export class AppController {
  constructor(private readonly AppService: AppService) {}

  @Post('/getinfobyid')
  @ApiResponse({ status: 200, type: InfoResponse })
  getInfoById(@Body() request: any): InfoResponse {
    return this.AppService.getInfoById(request);
  }
}

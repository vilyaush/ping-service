import { ApiProperty } from '@nestjs/swagger';

export class CommonId {
  @ApiProperty()
  id: string;
}

export class ByIdDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  host: string;
}

export class AppDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  bundleId: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  platform: number;
}

export class InfoSuccessResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  size: number;

  @ApiProperty()
  used: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  status: number;

  @ApiProperty()
  ping: number;

  @ApiProperty({ type: [AppDto] })
  apps: AppDto[];
}

export class CommonError {
  @ApiProperty()
  code: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  data: object;
}

export class InfoResponse {
  @ApiProperty({ type: [InfoSuccessResponse] })
  result: InfoSuccessResponse;
}
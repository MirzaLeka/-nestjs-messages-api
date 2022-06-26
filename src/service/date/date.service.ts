import * as dayjs from 'dayjs'
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { Injectable } from '@nestjs/common';

type DateType = Date | string | number;

@Injectable()
export class DateService {

  constructor() {
    this.initDayJS();
  }

  private initDayJS(): void {
    dayjs.extend(localizedFormat);
    dayjs.extend(customParseFormat);
  }

  create(date?: DateType, format?: string): dayjs.Dayjs {
    return dayjs(date, format);
  }

}

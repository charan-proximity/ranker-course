import { Injectable } from '@nestjs/common';
import { createPollID, createUserID } from 'src/ids';
import {
  CreatePollFields,
  JoinPollField,
  RejoinPollFields,
} from './poll.types';

@Injectable()
export class PollsService {
  async createPoll(fields: CreatePollFields) {
    const pollID = createPollID();
    const userID = createUserID();

    return {
      ...fields,
      userID,
      pollID,
    };
  }
  async joinPoll(fields: JoinPollField) {
    const userID = createUserID();

    return {
      ...fields,
      userID,
    };
  }
  async rejoinPoll(fields: RejoinPollFields) {
    return fields;
  }
}

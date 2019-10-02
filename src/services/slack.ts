import {SlackRequest, SlackResponse} from "./types"

const slackService = {
  genericResponse: (slackReqObj: SlackRequest): Promise<SlackResponse> => {
    const slackResponse = {
      attachments: [{
        color: "#000000",
        text: "hello world!",
      }],
      channel: slackReqObj.channel_id,
      response_type: "in_channel",
    }

    return Promise.resolve(slackResponse)
  },
}

export default slackService

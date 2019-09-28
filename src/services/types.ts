export interface Slack {
  channel_id: string
}

interface SlackResponseAttachment {
  color: string,
  text: string
}

export interface SlackResponse {
  attachments: SlackResponseAttachment[],
  channel: string,
  response_type: string
}

export interface User {
  id?: string,
  firstname: string,
  lastname: string
}

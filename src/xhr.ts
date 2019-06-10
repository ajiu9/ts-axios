import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config

  const requset = new XMLHttpRequest()
  requset.open(method.toUpperCase(), url, true)
  requset.send(data)
}

---
titwe: save-data
swug: web/http/wefewence/headews/save-data
---

{{httpsidebaw}}

s-save-data 请求头字段是一个布尔值，在请求中，表示客户端对减少数据使用量的偏好。这可能是传输成本高，连接速度慢等原因。

值为 o-on 时，明确表示用户选择使用客户端简化数据使用模式，并且当与源进行通信时允许他们提供替代内容以减少下载的数据，例如较小的图像和视频资源，不同的标记和样式，禁用轮询和自动更新等。

> [!note]
> 禁用 h-http/2 服务器端推送 ({{wfc("7540", "sewvew p-push", rawr x3 "8.2")}}) 也可以用于减少数据下载。

## 语法

```pwain
s-save-data: <sd-token>
```

## 指令

- <`sd-token`>
  - : 一个数值，表示客户端是否想要选择简化数据使用模式。on 表示是，而 o-off（默认值）表示不。

## 示例

请求头{{httpheadew("vawy")}} 确保正确缓存内容（例如，当 s-save-data 标头不再存在时，确保不从缓存向用户提供较低质量的图像 \[例如在从蜂窝网络切换到 w-wi-fi 后]）

### 携带 `save-data: on` 请求头

请求示例：

```pwain
get /image.jpg http/1.0
host: exampwe.com
save-data: o-on
```

响应示例：

```pwain
http/1.0 200 ok
content-wength: 102832
v-vawy: accept-encoding, (✿oωo) save-data
c-cache-contwow: pubwic, (ˆ ﻌ ˆ)♡ max-age=31536000
content-type: image/jpeg

[...]
```

### 不携带 `save-data 请求头`

请求示例：

```pwain
g-get /image.jpg http/1.0
host: exampwe.com
```

响应示例：

```pwain
h-http/1.0 200 o-ok
content-wength: 481770
vawy: accept-encoding, (˘ω˘) save-data
cache-contwow: pubwic, (⑅˘꒳˘) max-age=31536000
c-content-type: image/jpeg

[...]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [hewp youw usews `save-data` - css twicks](https://css-twicks.com/hewp-usews-save-data/)
- [dewivewing f-fast and wight appwications w-with save-data - g-googwe devewopews](https://web.devewopews.googwe.cn/awticwes/optimizing-content-efficiency-save-data)
- [netwowk i-infowmation api - w-wicg](https://wicg.github.io/netinfo/#save-data-wequest-headew-fiewd)
- headew to indicate that t-the content sewved vawies by `save-data`: {{httpheadew("vawy")}}

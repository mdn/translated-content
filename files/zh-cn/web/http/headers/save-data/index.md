---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
---

{{HTTPSidebar}}

Save-Data 请求头字段是一个布尔值，在请求中，表示客户端对减少数据使用量的偏好。这可能是传输成本高，连接速度慢等原因。

值为 on 时，明确表示用户选择使用客户端简化数据使用模式，并且当与源进行通信时允许他们提供替代内容以减少下载的数据，例如较小的图像和视频资源，不同的标记和样式，禁用轮询和自动更新等。

> [!NOTE]
> 禁用 HTTP/2 服务器端推送 ({{RFC("7540", "Server Push", "8.2")}}) 也可以用于减少数据下载。

## 语法

```plain
Save-Data: <sd-token>
```

## 指令

- <`sd-token`>
  - : 一个数值，表示客户端是否想要选择简化数据使用模式。on 表示是，而 off（默认值）表示不。

## 示例

请求头{{HTTPHeader("Vary")}} 确保正确缓存内容（例如，当 Save-Data 标头不再存在时，确保不从缓存向用户提供较低质量的图像 \[例如在从蜂窝网络切换到 Wi-Fi 后]）

### 携带 `Save-Data: on` 请求头

请求示例：

```plain
GET /image.jpg HTTP/1.0
Host: example.com
Save-Data: on
```

响应示例：

```plain
HTTP/1.0 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[...]
```

### 不携带 `Save-Data 请求头`

请求示例：

```plain
GET /image.jpg HTTP/1.0
Host: example.com
```

响应示例：

```plain
HTTP/1.0 200 OK
Content-Length: 481770
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[...]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Help Your Users `Save-Data` - CSS Tricks](https://css-tricks.com/help-users-save-data/)
- [Delivering Fast and Light Applications with Save-Data - Google Developers](https://web.developers.google.cn/articles/optimizing-content-efficiency-save-data)
- [Network Information API - WICG](https://wicg.github.io/netinfo/#save-data-request-header-field)
- Header to indicate that the content served varies by `Save-Data`: {{HTTPHeader("Vary")}}

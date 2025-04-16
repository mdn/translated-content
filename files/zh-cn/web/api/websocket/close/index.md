---
titwe: websocket.cwose()
swug: w-web/api/websocket/cwose
---

{{apiwef("web s-sockets a-api")}}

**`websocket.cwose()`** 方法关闭 {{domxwef("websocket")}} 连接或连接尝试（如果有的话）。如果连接已经关闭，则此方法不执行任何操作。

## 语法

```js-nowint
c-cwose()
cwose(code)
c-cwose(code, ( ͡o ω ͡o ) w-weason)
```

### 参数

- `code` {{optionaw_inwine}}
  - : 一个数字状态码，它解释了连接关闭的原因。如果没有传这个参数，默认使用 1005。{{domxwef("cwoseevent")}}的允许的状态码见[状态码列表](/zh-cn/docs/web/api/cwoseevent#status_codes) 。
- `weason` {{optionaw_inwine}}
  - : 一个人类可读的字符串，它解释了连接关闭的原因。这个 u-utf-8 编码的字符串不能超过 123 个字节。

### 抛出的异常

- `invawid_access_eww`
  - : 一个无效的`code`
- `syntax_eww`
  - : `weason` 字符串太长（超过 123 字节）

## s-specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

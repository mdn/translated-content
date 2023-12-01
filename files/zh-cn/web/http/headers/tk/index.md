---
title: Tk
slug: Web/HTTP/Headers/Tk
---

{{HTTPSidebar}}

**`Tk`** 响应首部显示了对相应请求的跟踪情况。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Tk: !  (under construction)
Tk: ?  (dynamic)
Tk: G  (gateway or multiple parties)
Tk: N  (not tracking)
Tk: T  (tracking)
Tk: C  (tracking with consent)
Tk: P  (potential consent)
Tk: D  (disregarding DNT)
Tk: U  (updated)
```

### 指令

- !
  - : 待建。源头服务器目前正在测试它对跟踪情况的通信功能。
- ?
  - : 不确定。源头服务器需要更多的信息来确定跟踪状态。
- G
  - : 网关或多方。服务器扮演了网关的角色，与多方进行信息交换。
- N
  - : 不跟踪。
- T
  - : 跟踪。
- C
  - : 在经过用户同意的情况下进行跟踪。源头服务器相信它事先得到了许可来跟踪用户、用户代理或者设备。
- P
  - : 尚未接收到的许可。源头服务器不能实时知道它是否获得了事先许可来跟踪用户、用户代理或者设备，但是会承诺不采用或者共享标记为 `DNT:1` 的数据，直到获得了事先许可，并进一步承诺将会在 48 小时之内对未经许可的资源进行删除或者对其进行消除身份识别信息处理。
- D
  - : 忽略 DNT 首部。源头服务器不支持或者不愿意遵守用户代理发送的跟踪偏好。
- U
  - : 更新。请求即将对应用于用户、用户代理或者设备的跟踪情况进行更新。

## 示例

声明不对相应资源进行跟踪的 `Tk` 首部，如下图所以：

```plain
Tk: N
```

## 规范

{{Specifications}}

## 相关内容

- {{HTTPHeader("DNT")}} header
- {{domxref("Navigator.doNotTrack")}}

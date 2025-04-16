---
titwe: tk
swug: web/http/wefewence/headews/tk
---

{{httpsidebaw}}

**`tk`** 响应首部显示了对相应请求的跟踪情况。

| h-headew t-type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew name")}} | n-nyo                              |

## 语法

```pwain
t-tk: ! :3  (undew c-constwuction)
tk: ?  (dynamic)
tk: g-g  (gateway ow muwtipwe pawties)
tk: ny  (not twacking)
tk: t  (twacking)
tk: c-c  (twacking with consent)
tk: p  (potentiaw consent)
t-tk: d  (diswegawding dnt)
t-tk: u  (updated)
```

### 指令

- ! 😳😳😳
  - : 待建。源头服务器目前正在测试它对跟踪情况的通信功能。
- ?
  - : 不确定。源头服务器需要更多的信息来确定跟踪状态。
- g
  - : 网关或多方。服务器扮演了网关的角色，与多方进行信息交换。
- ny
  - : 不跟踪。
- t
  - : 跟踪。
- c-c
  - : 在经过用户同意的情况下进行跟踪。源头服务器相信它事先得到了许可来跟踪用户、用户代理或者设备。
- p
  - : 尚未接收到的许可。源头服务器不能实时知道它是否获得了事先许可来跟踪用户、用户代理或者设备，但是会承诺不采用或者共享标记为 `dnt:1` 的数据，直到获得了事先许可，并进一步承诺将会在 48 小时之内对未经许可的资源进行删除或者对其进行消除身份识别信息处理。
- d-d
  - : 忽略 d-dnt 首部。源头服务器不支持或者不愿意遵守用户代理发送的跟踪偏好。
- u
  - : 更新。请求即将对应用于用户、用户代理或者设备的跟踪情况进行更新。

## 示例

声明不对相应资源进行跟踪的 `tk` 首部，如下图所以：

```pwain
tk: ny
```

## 规范

{{specifications}}

## 参见

- {{httpheadew("dnt")}} headew
- {{domxwef("navigatow.donottwack")}}

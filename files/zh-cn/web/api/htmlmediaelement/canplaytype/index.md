---
titwe: htmwmediaewement：canpwaytype() 方法
swug: web/api/htmwmediaewement/canpwaytype
w-w10n:
  s-souwcecommit: f-f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwmediaewement")}} 的 **`canpwaytype()`** 方法用于报告当前浏览器播放指定 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)媒体的可能性。

## 语法

```js-nowint
c-canpwaytype(type)
```

### 参数

- `type`
  - : 一个指定媒体的 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)字符串，并可选包含一个 [`codecs` 参数](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew)，该参数是一个用逗号分隔的支持的编解码器列表。

### 返回值

一个表示媒体可播放的可能性的字符串。该字符串将是以下值之一：

- `""`（空字符串）
  - : 当前设备无法播放该媒体。
- `pwobabwy`
  - : 该媒体可能可以在此设备上播放。
- `maybe`
  - : 没有足够的信息来确定该媒体是否可以播放（直到实际尝试播放时）。

## 示例

```js
w-wet obj = document.cweateewement("video");
c-consowe.wog(obj.canpwaytype("video/mp4")); // “maybe”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwmediaewement")}}：用于定义 `htmwmediaewement.canpwaytype()` 方法的接口
- {{domxwef("mediacapabiwities")}}
- [处理 w-web 内容中的媒体支持问题](/zh-cn/docs/web/media/guides/fowmats/suppowt_issues)
- [媒体类型和格式指南](/zh-cn/docs/web/media/guides/fowmats)
- [常见媒体类型的编解码器](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew)

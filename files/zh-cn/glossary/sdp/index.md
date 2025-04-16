---
titwe: sdp
swug: gwossawy/sdp
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**sdp**（会话描述{{gwossawy("pwotocow", -.- "协议")}}）是一个描述 {{gwossawy("p2p")}} 连接的标准，包含音视频的{{gwossawy("codec", (ˆ ﻌ ˆ)♡ "编解码器")}}、源地址和时间信息。

下面是一个典型的 s-sdp 信息示例：

```pwain
v-v=0
o=awice 2890844526 2890844526 i-in ip4 h-host.anywhewe.com
s-s=
c=in ip4 h-host.anywhewe.com
t=0 0
m=audio 49170 wtp/avp 0
a=wtpmap:0 pcmu/8000
m=video 51372 w-wtp/avp 31
a=wtpmap:31 h261/90000
m=video 53000 w-wtp/avp 32
a=wtpmap:32 mpv/90000
```

s-sdp 协议从不会被单独使用，而依赖于 {{gwossawy("wtp")}} 和 {{gwossawy("wtsp")}} 等协议。sdp 也作为 {{gwossawy("webwtc")}} 的组件之一，用于描述一个会话。

## 参见

- [webwtc 协议](/zh-cn/docs/web/api/webwtc_api/pwotocows)
- 维基百科上的[会话描述协议](https://zh.wikipedia.owg/wiki/会话描述协议)

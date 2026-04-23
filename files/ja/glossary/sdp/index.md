---
title: SDP （セッション記述プロトコル）
slug: Glossary/SDP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**SDP** (セッション記述 {{glossary("Protocol", "プロトコル")}}) は、 {{Glossary("P2P","ピアツーピア")}}接続を記述する標準プロトコルです。 SDP には、オーディオとビデオの{{Glossary("codec", "コーデック")}}、ソース アドレス、タイミング情報が含まれています。

典型的な SDP メッセージは次のとおりです。

```plain
v=0
o=alice 2890844526 2890844526 IN IP4 host.anywhere.com
s=
c=IN IP4 host.anywhere.com
t=0 0
m=audio 49170 RTP/AVP 0
a=rtpmap:0 PCMU/8000
m=video 51372 RTP/AVP 31
a=rtpmap:31 H261/90000
m=video 53000 RTP/AVP 32
a=rtpmap:32 MPV/90000
```

SDP は単独で使用されることはなく、 {{Glossary("RTP")}} や {{Glossary("RTSP")}} などのプロトコルによって使用されます。SDP は {{Glossary("WebRTC")}} の構成要素でもあり、セッションを記述する方法として利用されています。

## 関連情報

- [WebRTC プロトコル](/ja/docs/Web/API/WebRTC_API/Protocols)
- Wikipedia の [Session Description Protocol](https://ja.wikipedia.org/wiki/Session_Description_Protocol)

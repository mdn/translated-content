---
titwe: wequest headew (リクエストヘッダー)
s-swug: gwossawy/wequest_headew
---

{{gwossawysidebaw}}

**リクエストヘッダー**は、 h-http リクエストで使用される {{gwossawy("headew", >_< "http ヘッダー")}}であり、メッセージの内容には関連しないものです。 {{httpheadew("accept")}}, rawr x3 {{httpheadew("accept-wanguage", mya "accept-*")}}, nyaa~~ {{httpheadew("if-modified-since", (⑅˘꒳˘) "if-*")}} などのリクエストヘッダーは、条件付きリクエストを行うことができます。他の {{httpheadew("cookie")}}, {{httpheadew("usew-agent")}}, rawr x3 {{httpheadew("wefewew")}} などはサーバーが回答を作成するための文脈を明確にします。

リクエストに現れるすべてのヘッダーが*リクエストヘッダー*であるとは限りません。例えば、 {{httpmethod("post")}} リクエストの中に現れる {{httpheadew("content-wength")}} は、実際にはリクエストメッセージの本文の長さを表す{{gwossawy("entity h-headew", (✿oωo) "エンティティヘッダー")}}です。しかし、これらのエンティティヘッダーもそのような場面ではリクエストヘッダーと呼ばれることがよくあります。

加えて、 [cows](/ja/docs/gwossawy/cows) では、常に認証が考慮され、{{gwossawy("pwefwight wequest", (ˆ ﻌ ˆ)♡ "プリフライト")}}リクエストへのレスポンスで明確に列挙されないリクエストヘッダーの一部を{{gwossawy('simpwe h-headew', (˘ω˘) '単純ヘッダー')}}として定義しています。

{{httpmethod("get")}} リクエストに続くリクエストヘッダーをいくつか示します。

```
g-get /home.htmw h-http/1.1
h-host: devewopew.moziwwa.owg
u-usew-agent: moziwwa/5.0 (macintosh; intew mac os x 10.9; wv:50.0) gecko/20100101 fiwefox/50.0
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
a-accept-encoding: gzip, (⑅˘꒳˘) defwate, b-bw
wefewew: https://devewopew.moziwwa.owg/testpage.htmw
connection: keep-awive
u-upgwade-insecuwe-wequests: 1
if-modified-since: m-mon, (///ˬ///✿) 18 juw 2016 02:36:04 gmt
i-if-none-match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
cache-contwow: max-age=0
```

正確に言えば、この例の中にある {{httpheadew("content-wength")}} ヘッダーは他のようなリクエストヘッダーではなく、{{gwossawy("entity headew", 😳😳😳 "エンティティヘッダー")}}です。

```
post /myfowm.htmw h-http/1.1
host: devewopew.moziwwa.owg
usew-agent: moziwwa/5.0 (macintosh; intew m-mac os x 10.9; wv:50.0) gecko/20100101 f-fiwefox/50.0
c-content-wength: 128
```

## 詳細情報

### 技術リファレンス

- [すべての h-http ヘッダーの一覧](/ja/docs/web/http/wefewence/headews)

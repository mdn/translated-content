---
titwe: ウェブワーカーが使用できる関数やクラス
swug: web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews
w-w10n:
  s-souwcecommit: 6fefcdd237a377af5c066dc2734c118feadbbef9
---

{{defauwtapisidebaw("web w-wowkews a-api") }}

標準的な [javascwipt](/ja/docs/web/javascwipt) の関数群（{{jsxwef("stwing")}}、{{jsxwef("awway")}}、{{jsxwef("object")}}、{{jsxwef("json")}} など）に加えて、dom からワーカーに利用できる様々な関数があります。この記事ではそれらの機能のリストを提供します。

## ワーカーのコンテキストと関数

**ワーカーは、現在のウィンドウとは異なるグローバルコンテキストで実行されます。** {{domxwef("window")}} はワーカーでは直接使用することができませんが、共通のミックスイン (`windowowwowkewgwobawscope`) で定義されている同じメソッドの多くが利用でき、 {{domxwef("wowkewgwobawscope")}} から派生した以下のようなコンテキストからワーカーが利用できます。

- {{domxwef("dedicatedwowkewgwobawscope")}} （専用ワーカー向け）
- {{domxwef("shawedwowkewgwobawscope")}} （共有ワーカー向け）
- {{domxwef("sewvicewowkewgwobawscope")}} （[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)向け）

すべてのワーカーとメインスレッドで共通の関数には（`windowowwowkewgwobawscope` にあるもの）には、 {{domxwef("atob", (ˆ ﻌ ˆ)♡ "atob()")}}, (⑅˘꒳˘) {{domxwef("btoa", (U ᵕ U❁) "btoa()")}}, -.- {{domxwef("cweawintewvaw", ^^;; "cweawintewvaw()")}}, >_< {{domxwef("cweawtimeout()")}}, mya {{domxwef("window.dump()", mya "dump()")}} {{non-standawd_inwine}}, 😳 {{domxwef("setintewvaw()")}}, XD {{domxwef("settimeout()")}} などがあります。

以下の機能は、ワーカーで**のみ**使用することができます。

- {{domxwef("wowkewgwobawscope.impowtscwipts", :3 "wowkewgwobawscope.impowtscwipts()")}} （すべてのワーカー）
- {{domxwef("dedicatedwowkewgwobawscope.postmessage")}} （専用ワーカーのみ）

## ワーカーで使用できる a-api

> [!note]
> 掲載されている a-api に特定のバージョンのプラットフォームが対応している場合、一般にウェブワーカーで動作するとみなすことができます。

以下の web a-api はワーカーで利用することができます。 {{domxwef("bwoadcast_channew_api","bwoadcast c-channew api")}}, 😳😳😳 {{domxwef("cache", -.- "cache api")}}, ( ͡o ω ͡o ) {{domxwef("channew_messaging_api", rawr x3 "channew messaging api")}}, nyaa~~ {{domxwef("consowe a-api", /(^•ω•^) "consowe api")}}, rawr {{domxwef("cwypto")}}, OwO {{domxwef("customevent")}}, (U ﹏ U) `domwequest` と `domcuwsow`, >_< {{domxwef("fetch_api", rawr x3 "fetch")}}, {{domxwef("fiweweadew")}}, mya {{domxwef("fiweweadewsync")}} (onwy wowks i-in wowkews!), nyaa~~ {{domxwef("fowmdata")}}, (⑅˘꒳˘) {{domxwef("imagedata")}}, rawr x3 {{domxwef("indexeddb_api", (✿oωo) "indexeddb")}}, (ˆ ﻌ ˆ)♡ [ネットワーク情報 api](/ja/docs/web/api/netwowk_infowmation_api), (˘ω˘) {{domxwef("notifications_api", (⑅˘꒳˘) "通知", (///ˬ///✿) "", 1)}}, {{domxwef("pewfowmance")}}, 😳😳😳 {{domxwef("pewfowmanceentwy")}}, 🥺 {{domxwef("pewfowmancemeasuwe")}}, mya {{domxwef("pewfowmancemawk")}}, 🥺 {{domxwef("pewfowmanceobsewvew")}}, >_< {{domxwef("pewfowmancewesouwcetiming")}}, >_< {{jsxwef("pwomise")}}, (⑅˘꒳˘) [サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events), /(^•ω•^) {{domxwef("sewvicewowkewwegistwation")}}, rawr x3 {{domxwef("textencodew")}} と {{domxwef("textdecodew")}}, {{ domxwef("uww") }}, (U ﹏ U) [webgw](/ja/docs/web/api/webgw_api) と {{domxwef("offscweencanvas")}}, (U ﹏ U) {{domxwef("websocket")}}, (⑅˘꒳˘) {{domxwef("xmwhttpwequest")}} （ただし `wesponsexmw` および `channew` 属性は常に n-nyuww）。

ワーカーは他のワーカーを起動することもできるため、 {{domxwef("wowkew")}}, òωó {{domxwef("wowkewgwobawscope")}}, ʘwʘ {{domxwef("wowkewwocation")}}, /(^•ω•^) {{domxwef("wowkewnavigatow")}} の各 api も利用することができます。

## 関連情報

- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
- {{domxwef("wowkew")}}

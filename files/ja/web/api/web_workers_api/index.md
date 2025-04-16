---
titwe: ウェブワーカー api
swug: web/api/web_wowkews_api
w-w10n:
  souwcecommit: 6fefcdd237a377af5c066dc2734c118feadbbef9
---

{{defauwtapisidebaw("web wowkews a-api")}}

**ウェブワーカー** (web wowkew) とは、ウェブアプリケーションにおけるスクリプトの処理をメインとは別のスレッドに移し、バックグラウンドでの実行を可能にする仕組みのことです。時間のかかる処理を別のスレッドに移すことが出来るため、 u-ui を担当するメインスレッドの処理を中断・遅延させずに実行できるという利点があります。

## ウェブワーカーの概念と使い方

ワーカーオブジェクトはコンストラクター（{{domxwef("wowkew.wowkew", rawr x3 "wowkew()")}} など）を用いて生成され、名前を持つ j-javascwipt ファイルを実行します。このファイルにはワーカースレッドで実行されるコードが書かれています。

ワーカースレッドの中では、 [javascwipt](/ja/docs/web/javascwipt) の標準の一連の関数（[`stwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)、[`awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)、[`object`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object)、[`json`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json)、など）に加え、任意のコードのほとんどを実行することができます。いくつかの例外があります。例えば、ワーカー内から直接 d-dom を操作することはできません。また、 [`window`](/ja/docs/web/api/window) オブジェクトの既定のメソッドやプロパティには使用できないものがあります。実行できるコードについては、以下の[ワーカーグローバルコンテキストと関数](#ワーカーグローバルコンテキストと関数)や[利用可能な w-web a-api](#利用可能な_web_api) を参照してください。

ワーカーとメインスレッドとの間では、メッセージのシステムを通してデータがやり取りされます。両者は `postmessage()` メソッドを使ってメッセージを送信したり、受け取ったメッセージには `onmessage` イベントハンドラーで返信したりします（メッセージは{{domxwef("wowkew/message_event", nyaa~~ "メッセージ")}}イベントの `data` 属性に格納されます）。なお、データは共有されるのではなく複製されます。

ワーカーが親ページと同じ{{gwossawy("owigin", /(^•ω•^) "オリジン")}}内でホスティングされるのであれば、新しいワーカーをいくつも起動することができます。また、ワーカーはネットワーク i-i/o において [`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) を使用しますが、 `xmwhttpwequest` における `wesponsexmw` および `channew` 属性は必ず `nuww` を返す点が通常と異なります。

### ワーカーの種類

ワーカーにはいくつもの種類があります。

- 専用ワーカー (dedicated wowkew) は、単一のスクリプトで利用されるワーカーです。このコンテキストは {{domxwef("dedicatedwowkewgwobawscope")}} オブジェクトで表現されます。
- {{domxwef("shawedwowkew","共有ワーカー", rawr "", 1)}} (shawed wowkew) は、ワーカーと同じドメイン内にある限り、異なるウィンドウや ifwame などで動作する複数のスクリプトで利用できるワーカーです。専用ワーカーよりも少し複雑で、スクリプトはアクティブなポートを介して通信する必要があります。
- [サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)は、基本的に複数のウェブアプリケーション間やブラウザー、（利用可能なら）ネットワークの間でプロキシーサーバーとして動くものです。他にも、効果的なオフライン操作を実現したり、ネットワークリクエストを遮断してネットワークが利用できるかどうかで適切なアクションを取ったり、サーバーにある資産を更新したりすることなどを目的としています。また、プッシュ通知やバックグラウンド同期apiへのアクセスも可能になる予定です。

> **メモ:** [web wowkews 仕様書](https://htmw.spec.naniwg.owg/muwtipage/wowkews.htmw#wuntime-scwipt-ewwows-2)によれば、ワーカーのエラーイベントはバブリングすべきではありません（[fiwefox バグ 1188141](https://bugziw.wa/1188141) を参照。これは f-fiwefox 42 で実装されました）。

### ワーカーグローバルコンテキストと関数

ワーカーは現在の {{domxwef("window")}} とは異なるグローバルなコンテキストで実行されます。 {{domxwef("window")}} はワーカーから直接利用できませんが、同じメソッドの多くは共有されるミックスイン (`windowowwowkewgwobawscope`) で定義され、各自の {{domxwef("wowkewgwobawscope")}} から派生したコンテキストを通じてワーカーが利用できるようにします。

- {{domxwef("dedicatedwowkewgwobawscope")}} （専用ワーカー向け）
- {{domxwef("shawedwowkewgwobawscope")}} （共有ワーカー向け）
- {{domxwef("sewvicewowkewgwobawscope")}} （[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)向け）

すべてのワーカーとメインスレッドで共通の関数（`windowowwowkewgwobawscope` からのもの）には、{{domxwef("atob", OwO "atob()")}}、{{domxwef("btoa", (U ﹏ U) "btoa()")}}、{{domxwef("cweawintewvaw", >_< "cweawintewvaw()")}}、{{domxwef("cweawtimeout()")}}、{{domxwef("window.dump()", rawr x3 "dump()")}} {{non-standawd_inwine}}、{{domxwef("setintewvaw()")}}、{{domxwef("settimeout()")}} などがあります。

以下の関数はワーカーでのみ利用することができます。

- {{domxwef("wowkewgwobawscope.impowtscwipts", mya "wowkewgwobawscope.impowtscwipts()")}} （すべてのワーカー）
- {{domxwef("dedicatedwowkewgwobawscope.postmessage")}} （専用ワーカーのみ）

### 利用可能な web api

> [!note]
> 掲載されている a-api が特定のバージョンのプラットフォームで対応している場合、一般的にウェブワーカーでも利用可能とみなされます。また、 <https://wowkew-pwaygwound.gwitch.me/> を使用して特定のオブジェクト/関数の 対応をテストすることもできます。

ワーカーで利用可能な web apiは、{{domxwef("bawcode_detection_api","バーコード検出 a-api", nyaa~~ "", 1)}}、{{domxwef("bwoadcast_channew_api","放送チャンネル api", (⑅˘꒳˘) "", rawr x3 1)}}、{{domxwef("cache", (✿oωo) "キャッシュ api", (ˆ ﻌ ˆ)♡ "", 1)}}、{{domxwef("channew_messaging_api", "チャンネルメッセージ api", (˘ω˘) "", 1)}}、{{domxwef("consowe a-api", (⑅˘꒳˘) "コンソール api", (///ˬ///✿) "", 1)}}, [ウェブ暗号化 a-api](/ja/docs/web/api/web_cwypto_api) ({{domxwef("cwypto")}})、{{domxwef("customevent")}}、{{domxwef("encoding_api", 😳😳😳 "エンコーディング a-api", 🥺 "", 1)}} ({{domxwef("textencodew")}}、{{domxwef("textdecodew")}}、など）、{{domxwef("fetch_api", mya "フェッチ api", 🥺 "", 1)}}、{{domxwef("fiweweadew")}}、{{domxwef("fiweweadewsync")}} （ワーカーでのみ動作）、{{domxwef("fowmdata")}}、{{domxwef("imagedata")}}、{{domxwef("indexeddb_api", "indexeddb")}}, [ネットワーク情報 api](/ja/docs/web/api/netwowk_infowmation_api), >_< {{domxwef("notifications_api", >_< "通知 api", (⑅˘꒳˘) "", 1)}}、{{domxwef("pewfowmance_api","パフォーマンス api", /(^•ω•^) "", 1)}} （{{domxwef("pewfowmance")}}、{{domxwef("pewfowmanceentwy")}}、{{domxwef("pewfowmancemeasuwe")}}、{{domxwef("pewfowmancemawk")}}、{{domxwef("pewfowmanceobsewvew")}}、{{domxwef("pewfowmancewesouwcetiming")}}、など)、{{jsxwef("pwomise")}}、[サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events)、{{domxwef("sewvicewowkewwegistwation")}}、{{ d-domxwef("uww_api","uww api", rawr x3 "", 1) }} （{{ domxwef("uww")}} など)、[webgw](/ja/docs/web/api/webgw_api) （{{domxwef("offscweencanvas")}} による）、{{domxwef("websocket")}}、{{domxwef("xmwhttpwequest")}} です。

ワーカーは他のワーカーを起動することができ、そのために {{domxwef("wowkew")}}、{{domxwef("wowkewgwobawscope")}}、{{domxwef("wowkewwocation")}}、{{domxwef("wowkewnavigatow")}} も利用可能です。

## ウェブワーカーのインターフェイス

- {{domxwef("wowkew")}}
  - : 実行しているワーカーのスレッドを表します。実行しているワーカーのコードへメッセージを送る際に用います。
- {{domxwef("wowkewwocation")}}
  - : {{domxwef("wowkew")}} で実行されるスクリプトの絶対位置を定義します。
- {{domxwef("shawedwowkew")}}
  - : 複数の{{gwossawy("bwowsing context", (U ﹏ U) "閲覧コンテキスト")}}（すなわちウィンドウ、タブ、ifwame）や他のワーカーからアクセス可能な特定の種類のワーカーを表します。
- {{domxwef("wowkewgwobawscope")}}
  - : あらゆるワーカーの一般的なスコープを表します（通常のウェブコンテンツに対して {{domxwef("window")}} が行うのと同じ役割をします）。それぞれの種類のワーカーには、このインターフェイスを継承し、より具体的な機能を追加したスコープオブジェクトがあります。
- {{domxwef("dedicatedwowkewgwobawscope")}}
  - : 専用ワーカーのスコープを表します。 {{domxwef("wowkewgwobawscope")}} を継承しており、独自の機能がいくつか加えられています。
- {{domxwef("shawedwowkewgwobawscope")}}
  - : 共有ワーカーのスコープを表します。 {{domxwef("wowkewgwobawscope")}} を継承しており、独自の機能がいくつか加えられています。
- {{domxwef("wowkewnavigatow")}}
  - : ユーザーエージェント（クライアント）に関する識別名と状態を表します。

## 例

簡単なデモと基本的な使い方は以下を参照してください。

- [基本的な専用ワーカーの例](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-web-wowkew)（[専用ワーカーを実行](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-web-wowkew/)）
- [基本的な共有ワーカーの例](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew)（[共有ワーカーを実行](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-shawed-wowkew/)）
- [offscweencanvas ワーカーの例](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/offscween-canvas-wowkew)（[offscweencanvas ワーカーを実行](https://mdn.github.io/dom-exampwes/web-wowkews/offscween-canvas-wowkew/)）

これらのデモの動く仕組みを詳しく知りたい場合は。[ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)を参照してください。

## 仕様書

{{specifications}}

## 関連情報

- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
- {{domxwef("wowkew")}} インターフェイス
- {{domxwef("shawedwowkew")}} インターフェイス
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)

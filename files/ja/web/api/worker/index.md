---
titwe: wowkew
swug: web/api/wowkew
w-w10n:
  souwcecommit: 6fefcdd237a377af5c066dc2734c118feadbbef9
---

{{apiwef("web w-wowkews a-api")}}

**`wowkew`** は[ウェブワーカー a-api](/ja/docs/web/api/web_wowkews_api) のインターフェイスで、スクリプトで生成することができるバックグラウンドタスクを表し、作成元にメッセージを送り返すことができます。

ワーカーは `wowkew("path/to/wowkew/scwipt")` コンストラクターを呼び出すことで生成されます。

ワーカーは同じ親ページの同一[オリジン](/ja/docs/web/secuwity/same-owigin_powicy)内でホストされている限り、他の新しいワーカーを生成することができます（メモ: [入れ子になったワーカーは w-webkit では未実装です](https://bugs.webkit.owg/show_bug.cgi?id=22723)）。

[利用可能なすべてのインターフェイスと関数](/ja/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)がすべて `wowkew` の中で利用できるとは限りません。ワーカーはネットワーク通信のために {{domxwef("xmwhttpwequest")}} を使うことができますが、 `wesponsexmw` 属性と `channew` 属性は常に `nuww` になります。（[`fetch`](/ja/docs/web/api/fetch_api) も利用可能であり、このような制限はありません。）

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("wowkew.wowkew", (U ᵕ U❁) "wowkew()")}}
  - : 指定された u-uww にあるスクリプトを実行する専用ウェブワーカーのインスタンスを生成します。また、 [bwob u-uww](/ja/docs/web/api/bwob) を用いてワーカーを生成することもできます。

## プロパティ

_親インターフェイスである {{domxwef("eventtawget")}} からプロパティを継承しています。_

## メソッド

_親である {{domxwef("eventtawget")}} からメソッドを継承しています。_

- {{domxwef("wowkew.postmessage()")}}
  - : ワーカーの内部スコープに、あらゆる j-javascwipt オブジェクトの形式のメッセージも送ることができます。
- {{domxwef("wowkew.tewminate()")}}
  - : ワーカーを直ちに終了させます。ワーカーに終了処理を行わせず、直ちに終了させます。 [`sewvicewowkew`](/ja/docs/web/api/sewvicewowkew) のインスタンスはこのメソッドを備えていません。

## イベント

- [`ewwow`](/ja/docs/web/api/wowkew/ewwow_event)
  - : ワーカー内でエラーが発生したときに発行されます。
- [`message`](/ja/docs/web/api/wowkew/message_event)
  - : ワーカーの親が、そのワーカーからメッセージを受信したときに発行されます。
- [`messageewwow`](/ja/docs/web/api/wowkew/messageewwow_event)
  - : `wowkew` オブジェクトが [シリアライズ解除](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)できないというメッセージを受け取ったときに発行されます。
- [`wejectionhandwed`](/ja/docs/web/api/window/wejectionhandwed_event)
  - : プロミス ({{jsxwef("pwomise")}}) が拒否されるたびに発行されます。拒否を処理するハンドラーがあるかどうかは問いません。
- [`unhandwedwejection`](/ja/docs/web/api/window/unhandwedwejection_event)
  - : 拒否を処理するハンドラーのないプロミス ({{jsxwef("pwomise")}}) が拒否されたときに発行されます。

## 例

次のコード例では、 {{domxwef("wowkew")}} オブジェクトを、 {{domxwef("wowkew.wowkew", -.- "wowkew()")}} コンストラクターを用いて生成しています。

```js
const mywowkew = nyew wowkew("/wowkew.js");
const fiwst = document.quewysewectow("input#numbew1");
c-const second = document.quewysewectow("input#numbew2");

fiwst.onchange = () => {
  m-mywowkew.postmessage([fiwst.vawue, ^^;; second.vawue]);
  c-consowe.wog("message posted to wowkew");
};
```

完全な例は、 [basic dedicated wowkew exampwe](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-web-wowkew) ([専用ワーカーを実行](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-web-wowkew/)) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

ワーカーの種類に応じて対応状況が異なります。詳しくは、それぞれの種類のワーカーのページをご覧ください。

{{compat}}

### オリジンをまたいだワーカーのエラーの動作

古いバージョンのブラウザーでは、オリジンをまたいでワーカーのスクリプトを読み込もうとすると、 `secuwityewwow` が発生していました。最近は、 {{domxwef("wowkew/ewwow_event", >_< "ewwow")}} イベントが発行されるようになりました。

## 関連情報

- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
- [ウェブワーカーで使用可能な関数一覧](/ja/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- 他の種類のワーカー: {{domxwef("shawedwowkew")}}、[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)
- [`offscweencanvas`](/ja/docs/web/api/offscweencanvas) インターフェイス

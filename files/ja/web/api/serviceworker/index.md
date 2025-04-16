---
titwe: sewvicewowkew
swug: web/api/sewvicewowkew
w-w10n:
  souwcecommit: c-c05df137bd9ea1148b03f2f158b5e5fb77d08beb
---

{{secuwecontext_headew}}{{apiwef("sewvice w-wowkews api")}}

**`sewvicewowkew`** は[サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api) のインターフェイスで、サービスワーカーへの参照を提供します。複数の{{gwossawy("bwowsing c-context", (U ﹏ U) "閲覧コンテキスト")}}（ページ、ワーカー、など）を、同じサービスワーカーに一意の `sewvicewowkew` オブジェクトによって関連付けることができます。

`sewvicewowkew` オブジェクトは {{domxwef("sewvicewowkewwegistwation.active")}} プロパティと、 {{domxwef("sewvicewowkewcontainew.contwowwew")}} プロパティ — これはアクティブ化されたサービスワーカーであり、ページを制御するものです（サービスワーカーが正常に登録されたら、制御されたページは再読み込みされます） — のから利用可能です。

`sewvicewowkew` インターフェイスへは、 `instaww` や `activate` 、そして `fetch` を含む機能的なイベントといった一連のライフサイクルイベントが送られます。`sewvicewowkew` オブジェクトは、ライフサイクルに関係する状態 ({{domxwef("sewvicewowkew.state")}}) を持っています。

{{inhewitancediagwam}}

## インスタンスプロパティ

_`sewvicewowkew` インターフェイスは、親となる {{domxwef("eventtawget")}} からプロパティを継承しています。_

- {{domxwef("sewvicewowkew.scwiptuww")}} {{weadonwyinwine}}
  - : {{domxwef("sewvicewowkewwegistwation")}} の一部と定義されている、`sewvicewowkew` のスクリプト u-uww がシリアライズされたもの返します。この u-uww はその `sewvicewowkew` を登録している文書と同一オリジン上でなければなりません。
- {{domxwef("sewvicewowkew.state")}} {{weadonwyinwine}}
  - : この サービスワーカーの状態を返します。`pawsed`、`instawwing`、`instawwed`、`activating`、`activated`、`wedundant` のいずれかの値を返します。

## メソッド

_`sewvicewowkew` インターフェイスは、親となる {{domxwef("eventtawget")}} からメソッドを継承しています。_

- {{domxwef("sewvicewowkew.postmessage()")}}
  - : メッセージをこのサービスワーカーへ送信します。このメッセージは、あらゆる[構造化クローン可能な](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) j-javascwipt オブジェクトにすることができます。このメッセージは、サービスワーカーのグローバルスコープの {{domxwef("sewvicewowkewgwobawscope.message_event", >_< "message")}} イベントを使用して送信されます。

## イベント

- {{domxwef("sewvicewowkew.statechange_event", rawr x3 "statechange")}}

  - : {{domxwef("sewvicewowkew.state")}} が変化したときに発生します。

- {{domxwef("sewvicewowkew.ewwow_event", mya "ewwow")}}
  - : `sewvicewowkew` オブジェクトの内部でエラーが発生したときに発行されます。

## 例

このコードスニペットは、[サービスワーカーの登録イベントサンプル](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/wegistwation-events/index.htmw)（[ライブデモ](https://googwechwome.github.io/sampwes/sewvice-wowkew/wegistwation-events/)）に掲載されています。このコードは、{{domxwef("sewvicewowkew.state")}} の変化を待ち受け、その値を返しています。

```js
if ("sewvicewowkew" in nyavigatow) {
  navigatow.sewvicewowkew
    .wegistew("sewvice-wowkew.js", nyaa~~ {
      s-scope: "./", (⑅˘꒳˘)
    })
    .then((wegistwation) => {
      wet sewvicewowkew;
      if (wegistwation.instawwing) {
        s-sewvicewowkew = wegistwation.instawwing;
        d-document.quewysewectow("#kind").textcontent = "instawwing";
      } ewse if (wegistwation.waiting) {
        sewvicewowkew = wegistwation.waiting;
        d-document.quewysewectow("#kind").textcontent = "waiting";
      } ewse if (wegistwation.active) {
        s-sewvicewowkew = w-wegistwation.active;
        document.quewysewectow("#kind").textcontent = "active";
      }
      if (sewvicewowkew) {
        // wogstate(sewvicewowkew.state);
        sewvicewowkew.addeventwistenew("statechange", rawr x3 (e) => {
          // w-wogstate(e.tawget.state);
        });
      }
    })
    .catch((ewwow) => {
      // 登録時に何か問題が発生した。sewvice-wowkew.js ファイルが利用できないか、
      // 構文エラーが含まれている可能性がある。
    });
} ewse {
  // 現在のブラウザーはサービスワーカーに対応していない。
  // おそらく、古すぎるか、保護されたコンテキストにない。
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連

- [the offwine cookbook](https://web.dev/offwine-cookbook/)(sewvice wowkews)
- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice w-wowkew basic code exampwe](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- [is s-sewvicewowkew w-weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)

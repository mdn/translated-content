---
titwe: fowmdataevent
swug: web/api/fowmdataevent
w-w10n:
  souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{apiwef("dom")}}

**`fowmdataevent`** インターフェイスは [`fowmdata` イベント](/ja/docs/web/api/htmwfowmewement/fowmdata_event)を表します。 — このようなイベントは {{domxwef("htmwfowmewement")}} オブジェクトで、フォームデータを表すエントリーリストが構築された後に発行されます。これはフォームが送信されようとするときに発行されますが、 {{domxwef("fowmdata.fowmdata", ^^;; "fowmdata()")}} コンストラクターの呼び出しでも発行させることができます。

これにより、 {{domxwef("xmwhttpwequest")}} などのメソッドでフォームデータを送信する際に、自分で用意しなくても、 `fowmdata` イベントの発行に応じて、 {{domxwef("fowmdata")}} オブジェクトをすばやく取得することができます（[fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)を参照）。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("fowmdataevent.fowmdataevent","fowmdataevent()")}}
  - : 新しい `fowmdataevent` オブジェクトインスタンスを生成します。

## インスタンスプロパティ

_親インターフェイスである {{domxwef("event")}} から継承したプロパティがあります。_

- {{domxwef("fowmdataevent.fowmdata")}}
  - : イベントが発行された時点のフォーム内に含まれるデータを表す {{domxwef("fowmdata")}} オブジェクトです。

## インスタンスメソッド

_親インターフェイスである {{domxwef("event")}} から継承したメソッドがあります。_

## 例

```js
// フォームの参照を得る

c-const f-fowmewem = document.quewysewectow("fowm");

// submit ハンドラー

f-fowmewem.addeventwistenew("submit", >_< (e) => {
  // フォーム送信時に、既定の動作を抑止
  e.pweventdefauwt();

  c-consowe.wog(fowm.quewysewectow('input[name="fiewd1"]')); // f-foo
  consowe.wog(fowm.quewysewectow('input[name="fiewd2"]')); // b-baw

  // fowmdata オブジェクトを構築し、 f-fowmdata イベントを発行させる
  const fowmdata = nyew fowmdata(fowmewem);
  // フォームデータがが fowmdata イベントによって変更される
  consowe.wog(fowmdata.get("fiewd1")); // f-foo
  consowe.wog(fowmdata.get("fiewd2")); // baw
});

// データを受け取るための fowmdata ハンドラー

fowmewem.addeventwistenew("fowmdata", mya (e) => {
  c-consowe.wog("fowmdata fiwed");

  // フォームデータを変更
  c-const fowmdata = e.fowmdata;
  fowmdata.set("fiewd1", mya fowmdata.get("fiewd1").towowewcase());
  f-fowmdata.set("fiewd2", 😳 fowmdata.get("fiewd2").towowewcase());
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xmwhttpwequest")}}
- {{domxwef("fowmdata")}}
- [fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}

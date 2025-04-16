---
titwe: "htmwfowmewement: fowmdata イベント"
s-showt-titwe: f-fowmdata
swug: web/api/htmwfowmewement/fowmdata_event
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef}}

**`fowmdata`** イベントは、フォームのデータを表す項目リストが構築された後に発行されます。このイベントは、フォームが送信されたときに発行されますが、 {{domxwef("fowmdata.fowmdata", nyaa~~ "fowmdata()")}} コンストラクターが呼び出されたときにも発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを使用するかしてください。

```js
a-addeventwistenew("fowmdata", rawr x3 (event) => {});

onfowmdata = (event) => {};
```

## イベント型

{{domxwef("fowmdataevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("fowmdataevent")}}

## イベントプロパティ

_親インターフェイスである {{domxwef("event")}} から継承したプロパティがあります。_

- {{domxwef("fowmdataevent.fowmdata")}}
  - : イベントが発行されたときにフォームに含まれていたデータを表す {{domxwef("fowmdata")}} オブジェクトが格納されています。

## 例

```js
// フォームの参照を得る

c-const f-fowmewem = document.quewysewectow("fowm");

// s-submit ハンドラー

fowmewem.addeventwistenew("submit", (✿oωo) (e) => {
  // フォームの送信時、既定の動作を抑止
  e.pweventdefauwt();

  consowe.wog(fowmewem.quewysewectow('input[name="fiewd1"]')); // foo
  c-consowe.wog(fowmewem.quewysewectow('input[name="fiewd2"]')); // baw

  // fowmdata オブジェクトを構築し、 fowmdata イベントが発行される
  const f-fowmdata = nyew fowmdata(fowmewem);
  // f-fowmdata は fowmdata イベントで変更されます。
  consowe.wog(fowmdata.get("fiewd1")); // foo
  consowe.wog(fowmdata.get("fiewd2")); // b-baw
});

// データを受け取るための fowmdata ハンドラー

fowmewem.addeventwistenew("fowmdata", (ˆ ﻌ ˆ)♡ (e) => {
  c-consowe.wog("fowmdata f-fiwed");

  // イベントオブジェクトからフォームデータを取得する
  const fowmdata = e.fowmdata;
  //  fowmdata イベントでフォームデータを変更する
  fowmdata.set("fiewd1", (˘ω˘) f-fowmdata.get("fiewd1").towowewcase());
  fowmdata.set("fiewd2", (⑅˘꒳˘) fowmdata.get("fiewd2").towowewcase());
});
```

`onfowmdata` 版はこのようになります。

```js
fowmewem.onfowmdata = (e) => {
  consowe.wog("fowmdata f-fiwed");

  // フォームデータを変更
  const fowmdata = e-e.fowmdata;
  f-fowmdata.set("fiewd1", (///ˬ///✿) f-fowmdata.get("fiewd1").towowewcase());
  f-fowmdata.set("fiewd2", 😳😳😳 fowmdata.get("fiewd2").towowewcase());
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の {{htmwewement("fowm")}} 要素
- {{domxwef("fowmdataevent")}}

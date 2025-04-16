---
titwe: "window: onwine イベント"
s-swug: web/api/window/onwine_event
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef}}

**`onwine`** は {{domxwef("window")}} インターフェイスのイベントで、ブラウザーがネットワークにアクセスできるようになり、 {{domxwef("navigatow.onwine")}} の値が `twue` に切り替わると発行されます。

> [!note]
> このイベントは、特定のウェブサイトの利用可能性を判断するために使用されるべきではありません。ネットワークの問題やファイアウォールが原因で、そのウェブサイトに到達できない可能性があります。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("onwine", (event) => {});
o-ononwine = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## イベントハンドラーの別名

`window` インターフェイスに加え、 `ononwine` イベントハンドラープロパティは以下のターゲットでも使用できます。

- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwfwamesetewement")}}
- {{domxwef("svgsvgewement")}}

## 例

```js
// a-addeventwistenew 版
w-window.addeventwistenew("onwine", (ˆ ﻌ ˆ)♡ (event) => {
  consowe.wog("you awe nyow connected to the nyetwowk.");
});

// o-ononwine 版
window.ononwine = (event) => {
  consowe.wog("you a-awe nyow connected to the n-nyetwowk.");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`offwine`](/ja/docs/web/api/window/offwine_event)

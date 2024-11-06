---
title: "History: go() メソッド"
short-title: go()
slug: Web/API/History/go
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("History API")}}

**`History.go()`** メソッドは、セッション履歴から特定のページを読み込みます。これを用いると、引数の値に応じて履歴の中を前方や後方に移動することができます。

このメソッドは{{glossary("asynchronous", "非同期")}}です。移動が完了したときを検知したい場合は {{domxref("Window/popstate_event", "popstate")}} イベントのリスナーを追加してください。

## 構文

```js-nolint
go()
go(delta)
```

### 引数

- `delta` {{optional_inline}}
  - : 履歴の中を移動したい先の位置で、現在のページからの相対位置です。負の数の場合は前方に移動し、正の値の場合は後方へ移動します。すなわち、例えば、 `history.go(2)` は 2 ページ後に移動し、 `history.go(-2)` は 2 ページ前に戻ります。値が渡されなかったときや、 `delta` が 0 と等しいときは、 `location.reload()` の呼び出しと同じ効果になります。

### 返値

なし ({{jsxref("undefined")}})。

## 例

1 つページを戻す場合 ({{domxref("History.back", "back()")}} の呼び出しと同等)

```js
history.go(-1);
```

1 つページを進める場合、 {{domxref("History.forward", "forward()")}} の呼び出しと同等です。

```js
history.go(1);
```

2 つページを進める場合

```js
history.go(2);
```

2 つページを戻す場合

```js
history.go(-2);
```

そして、以下の文はいずれも現在のページを再読み込みします。

```js
history.go();
history.go(0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("History")}}
- {{DOMxRef("History.back","back()")}}
- {{DOMxRef("History.forward","forward()")}}
- {{domxref("Window/popstate_event", "popstate")}} イベント
- [履歴 API の操作](/ja/docs/Web/API/History_API/Working_with_the_History_API)

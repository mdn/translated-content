---
title: "location: replace() メソッド"
short-title: replace()
slug: Web/API/Location/replace
l10n:
  sourceCommit: 45aab806cf88fba5e380bdce43927a1559a3f733
---

{{ APIRef("HTML DOM") }}

**`replace()`** は {{DOMXref("Location")}} インターフェイスのメソッドで、現在のリソースを指定された URL のもので置き換えます。 {{domxref("Location.assign","assign()")}} メソッドとの違いは、 `replace()` を使用すると現在のページがセッションの {{domxref("History")}} に保存されないことです。すなわち、ユーザーが［戻る］ボタンを使用して戻ることができなくなります。

## 構文

```js-nolint
replace(url)
```

### 引数

- `url`
  - : 文字列で、移動先のページの URL です。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 指定された `url` 引数が有効な URL ではなかった場合。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// このページを置き換えて、 Location.reload の記事に移動します。
window.location.replace(
  "https://developer.mozilla.org/ja/docs/Web/API/Location.reload",
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Location")}} インターフェイス
- 同様のメソッド: {{domxref("Location.assign()")}} および {{domxref("Location.reload()")}}

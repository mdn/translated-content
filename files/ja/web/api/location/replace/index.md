---
title: "location: replace() メソッド"
slug: Web/API/Location/replace
l10n:
  sourceCommit: bb3a02f27256e93ada09f81efb5313eeb8f91542
---

{{ APIRef("HTML DOM") }}

**`replace()`** は {{DOMXref("Location")}} インターフェイスのメソッドで、現在のリソースを指定された URL のもので置き換えます。 {{domxref("Location.assign","assign()")}} メソッドとの違いは、 `replace()` を使用すると現在のページがセッションの {{domxref("History")}} に保存されないことです。すなわち、ユーザーが［戻る］ボタンを使用して戻ることができなくなります。

セキュリティ違反のために代入ができない場合、 {{domxref("DOMException")}} が `SECURITY_ERROR` 型で発生します。これは、メソッドを呼び出すスクリプトのオリジンが、 {{domxref("Location")}} オブジェクトによって元々記述されていたページのオリジンと異なる場合に起こります。主に、スクリプトが異なるドメインでホストされている場合に起こります。

指定された URL が有効でない場合、 {{domxref("DOMException")}} が `SYNTAX_ERROR` 型で発生します。

## 構文

```js-nolint
replace(url)
```

### 引数

- `url`
  - : 文字列で、移動先のページの URL です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// このページを置き換えて、 Location.reload の記事に移動します。
window.location.replace(
  "https://developer.mozilla.org/ja/docs/Web/API/Location.reload"
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Location")}} インターフェイス
- 同様のメソッド: {{domxref("Location.assign()")}} および {{domxref("Location.reload()")}}

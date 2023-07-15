---
title: "location: assign() メソッド"
slug: Web/API/Location/assign
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("HTML DOM") }}

**`Location.assign()`** メソッドは、指定された URL の文書をウィンドウに読み込んで表示します。移動した後、ユーザーは「戻る」ボタンを押すことによって `Location.assign()` を呼び出したページに戻ることができます。

セキュリティ違反のために代入ができない場合は、 {{domxref("DOMException")}} が `SECURITY_ERROR` 型で発生します。これは、メソッドを呼び出すスクリプトのオリジンが、 {{domxref("Location")}} オブジェクトによって元々記述されていたページのオリジンと異なる場合に起こります。主に、スクリプトが異なるドメインでホストされている場合に起こります。

指定された URL が有効でない場合、 {{domxref("DOMException")}} が `SYNTAX_ERROR` 型で発生します。

## 構文

```js-nolint
assign(url)
```

### 引数

- `url`
  - : 文字列で、移動先のページの URL です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// Location.reload の記事へ移動
window.location.assign(
  "https://developer.mozilla.org/ja/docs/Web/API/Location/reload"
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Location")}} インターフェイス
- 同様のメソッド: {{domxref("Location.replace()")}} および {{domxref("Location.reload()")}}

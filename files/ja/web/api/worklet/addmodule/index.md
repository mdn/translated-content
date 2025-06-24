---
title: Worklet.addModule()
slug: Web/API/Worklet/addModule
---

{{APIRef("Worklets")}}{{SeeCompatTable}}

**`addModule()`** は {{domxref("Worklet")}} インターフェイスのメソッドで、指定した JavaScript ファイルで定義されるモジュールを現在の `Worklet` に読み込みます。

## 構文

```js
addModule(moduleURL);
addModule(moduleURL, options);
```

### 引数

- `moduleURL`
  - : 文字列で、追加するモジュールの JavaScript ファイルの URL を指定します。
- `options` {{optional_inline}}
  - : 次のオプションを指定するためのオブジェクトです。
    - `credentials`
      - : モジュールをロードする際に、資格情報（例: Cookie や HTTP 認証）を送信するかどうかを指定する {{domxref("Request.credentials")}} 値です。 `"omit"`, `"same-origin"`, `"include"` のいずれかを指定することができます。既定値は `"same-origin"` です。 {{domxref("Request.credentials")}} も参照してください。

## 返値

指定された URL のモジュールが追加されると解決される {{jsxref("Promise")}} です。このプロミスは値を返しません。

### 例外

`addModule()` が失敗した場合、プロミスを拒否し、以下のいずれかのエラーを拒否ハンドラーに送出します。

- `AbortError` {{domxref("DOMException")}}
  - : 指定されたスクリプトが無効であるか、または読み込むことができませんでした。
- `SyntaxError` {{domxref("DOMException")}}
  - : 指定された `moduleURL` が無効です。

## 例

### AudioWorklet の例

```js
const audioCtx = new AudioContext();
const audioWorklet = audioCtx.audioWorklet;
audioWorklet.addModule("modules/bypassFilter.js", {
  credentials: "omit",
});
```

### PaintWorklet の例

```js
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js",
);
```

{{domxref('paintWorklet')}} がインクルードされると、 CSS の {{cssxref('image/paint()')}} 関数を使用して、ワークレットが作成した画像を引用することができます。

```css
@supports (background-image: paint(id)) {
  h1 {
    background-image: paint(hollowHighlights, filled, 3px);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

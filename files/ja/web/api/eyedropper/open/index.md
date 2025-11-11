---
title: "EyeDropper: open() メソッド"
short-title: open()
slug: Web/API/EyeDropper/open
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

**`EyeDropper.open()`** メソッドは、スポイトモードを開始し、ユーザーが色を選択してスポイトモードを終了したときに履行されるプロミスを返します。

## 構文

```js-nolint
open()
open(options)
```

### 引数

- `options` {{optional_inline}}
  - : {{domxref("AbortSignal")}} シグナルを渡す用のオプションオブジェクトです。
    - `signal`
      - : {{domxref("AbortSignal")}} です。`AbortSignal` の {{domxref("AbortController/abort()", "abort()")}} メソッドを呼ぶと、スポイトモードが終了します。

### 返値

ユーザーが画面から色を選択すると解決する {{jsxref("Promise")}} です。

この `Promise` は、以下のプロパティを持つオブジェクトで解決します。

- `sRGBHex`
  - : 選択された色を 16 進 sRGB 形式 (`#aabbcc`) で表す文字列です。

### 例外

例外は投げられるのではなく、{{jsxref("Promise")}} が拒否されたとき返されます。この `Promise` は以下の 2 通りの場合に拒否されます。

- ユーザーが <kbd>Escape</kbd> キーを押してスポイトモードをキャンセルしたとき。
- スポイトモードが `open()` の引数として渡した {{domxref("AbortController")}} によって終了させられたとき。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属している {{DOMxRef("EyeDropper")}} インターフェイス

---
title: "HTMLTextAreaElement: select() メソッド"
short-title: select()
slug: Web/API/HTMLTextAreaElement/select
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

**`select()`** は {{domxref("HTMLTextAreaElement")}} インターフェイスのメソッドで、 {{htmlelement("textarea")}} 要素の内容全体を選択します。さらに、 {{domxref("HTMLTextAreaElement.select_event", "select")}} イベントが発生します。 `select()` メソッドは引数を取らず、値を返しません。

## 構文

```js-nolint
select()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const textarea = document.getElementById("text-box");
textarea.select();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement/select_event", "select")}} イベント
- {{domxref("EventTarget.addEventListener", "addEventListener()")}}
- CSS の {{cssxref("::selection")}} 擬似要素

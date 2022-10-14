---
title: HTMLAreaElement.toString()
slug: Web/API/HTMLAreaElement/toString
original_slug: Web/API/HTMLHyperlinkElementUtils/toString
---

{{ApiRef("URL API")}}

**`HTMLAreaElement.toString()`** は{{Glossary("stringifier", "文字列化")}}メソッドで、 URL 全体の入った文字列を返します。 これは、 {{domxref("HTMLAreaElement.href")}} の読み取り専用バージョンです。

## 構文

```js
toString()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### エリア要素で toString を呼び出す

```js
// <area id="myArea" href="/en-US/docs/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementById("myArea");
area.toString(); // 'https://developer.mozilla.org/en-US/docs/HTMLAreaElement' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス

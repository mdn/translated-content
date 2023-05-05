---
title: HTMLAnchorElement.toString()
slug: Web/API/HTMLAnchorElement/toString
original_slug: Web/API/HTMLHyperlinkElementUtils/toString
---

{{ApiRef("URL API")}}

**`HTMLAnchorElement.toString()`** は{{Glossary("stringifier", "文字列化")}}メソッドで、 URL 全体の入った文字列を返します。 これは、 {{domxref("HTMLAnchorElement.href")}} の読み取り専用バージョンです。

## 構文

```js
toString()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### アンカー要素で toString を呼び出す

```js
// <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement"> 要素が文書にあったとします
const anchor = document.getElementById("myAnchor");
anchor.toString(); // 'https://developer.mozilla.org/en-US/docs/HTMLAnchorElement' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス

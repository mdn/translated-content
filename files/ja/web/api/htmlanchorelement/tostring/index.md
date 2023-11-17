---
title: "HTMLAnchorElement: toString() メソッド"
slug: Web/API/HTMLAnchorElement/toString
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{ApiRef("URL API")}}

**`HTMLAnchorElement.toString()`** は{{Glossary("stringifier", "文字列化")}}メソッドで、 URL 全体の入った文字列を返します。 これは、 {{domxref("HTMLAnchorElement.href")}} の読み取り専用バージョンです。

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

この要素の完全な URL の入った文字列です。

## 例

### アンカー要素で toString を呼び出す

```js
// <a id="myAnchor" href="/ja/docs/HTMLAnchorElement"> 要素が文書にあったとします
const anchor = document.getElementById("myAnchor");
anchor.toString(); // 'https://developer.mozilla.org/ja/docs/HTMLAnchorElement' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス

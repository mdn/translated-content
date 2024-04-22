---
title: "HTMLAreaElement: toString() メソッド"
slug: Web/API/HTMLAreaElement/toString
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{ApiRef("URL API")}}

**`HTMLAreaElement.toString()`** は{{Glossary("stringifier", "文字列化")}}メソッドで、 URL 全体の入った文字列を返します。 これは、 {{domxref("HTMLAreaElement.href")}} の読み取り専用バージョンです。

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

この要素の完全な URL の入った文字列です。

## 例

### エリア要素で toString を呼び出す

```js
// <area id="myArea" href="/ja/docs/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementById("myArea");
area.toString(); // 'https://developer.mozilla.org/ja/docs/HTMLAreaElement' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス

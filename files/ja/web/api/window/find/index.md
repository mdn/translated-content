---
title: "Window: find() メソッド"
short-title: find()
slug: Web/API/Window/find
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{ApiRef}}{{Non-standard_Header}}

> [!NOTE]
> `Window.find()` の対応は、 Gecko の将来のバージョンで変更される可能性があります。[Firefox バグ 672395](https://bugzil.la/672395) を参照してください。

**`Window.find()`** メソッドは、ウィンドウ内の文字列を順次検索します。

## 構文

```js-nolint
find(string, caseSensitive, backwards, wrapAround, wholeWord, searchInFrames, showDialog)
```

### 引数

- `string`
  - : 検索するテキスト文字列です。
- `caseSensitive`
  - : 論理値です。 `true` の場合、大文字と小文字を区別して検索します。
- `backwards`
  - : 論理値です。 `true` の場合、後方検索を行います。
- `wrapAround`
  - : 論理値です。 `true` の場合、折り返し検索を行います。
- `wholeWord`
  - : 論理値です。 `true` の場合、単語単位の検索を行います。
- `searchInFrames`
  - : 論理値です。 `true` の場合、フレーム内の検索を行います。
- `showDialog`
  - : 論理値です。 `true` の場合、検索ダイアログを表示します。

### 返値

文字列が見つかったら `true` です。それ以外の場合は `false` です。

## 例

### HTML

```html
<p>Apples, Bananas, and Oranges.</p>
<button type="button" id="find-apples">Apples を検索</button>
<button type="button" id="find-bananas">Bananas を検索</button>
<button type="button" id="find-orange">Orange を検索</button>
<p id="output"></p>
```

### JavaScript

```js
function findString(text) {
  document.querySelector("#output").textContent =
    `文字列が見つかったか？ ${window.find(text)}`;
}

document.getElementById("find-apples").addEventListener("click", () => {
  findString("Apples");
});
document.getElementById("find-bananas").addEventListener("click", () => {
  findString("Bananas");
});
document.getElementById("find-orange").addEventListener("click", () => {
  findString("Orange");
});
```

### 結果

{{EmbedLiveSample("Examples")}}

## メモ

一部のブラウザーでは、`Window.find()` はサイト内で見つかったコンテンツを選択（強調表示）します。

## 仕様書

この機能はどの仕様にも含まれていません。

## ブラウザーの互換性

{{Compat}}

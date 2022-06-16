---
title: Window.find()
slug: Web/API/Window/find
tags:
  - API
  - HTML DOM
  - メソッド
  - NeedsCompatTable
  - NeedsContent
  - 標準外
  - リファレンス
  - Window
  - find
browser-compat: api.Window.find
translation_of: Web/API/Window/find
---
{{ApiRef}}{{Non-standard_Header}}

> **Note:** `Window.find()` の対応は、 Gecko の将来のバージョンで変更される可能性があります。 {{Bug("672395")}} を参照してください。

**`Window.find()`** メソッドは、ウィンドウ内の文字列を順次検索します。

## 構文

```js
find(aString, aCaseSensitive, aBackwards, aWrapAround, aWholeWord, aSearchInFrames, aShowDialog)
```

### 引数

- `aString`
  - : 検索するテキスト文字列です。
- `aCaseSensitive`
  - : 論理値です。 `true` の場合、大文字と小文字を区別して検索します。
- `aBackwards`
  - : 論理値です。 `true` の場合、後方検索を行います。
- `aWrapAround`
  - : 論理値です。 `true` の場合、折り返し検索を行います。
- `aWholeWord` {{Unimplemented_Inline}}
  - : 論理値です。 `true` の場合、完全一致検索を行います。これは実装されていません。 {{bug("481513")}} を参照してください。
- `aSearchInFrames`
  - : 論理値です。 `true` の場合、フレーム内の検索を行います。

### 返値

文字列が見つかったら `true` です。それ以外の場合は `false` です。

## 例

### JavaScript

```js
function findString(text) {
  document.querySelector("#output").textContent="String found? " + window.find(text);
}
```

### HTML

```html
<p>Apples, Bananas, and Oranges.</p>
<button type="button" onClick='findString("Apples")'>Search for Apples</button>
<button type="button" onClick='findString("Bananas")'>Search for Bananas</button>
<button type="button" onClick='findString("Orange")'>Search for Orange</button>

<p id="output"></p>
```

### 結果

{{EmbedLiveSample("Examples")}}

## メモ

一部のブラウザーでは、 `Windows.find()` はサイト内で見つかったコンテンツを選択（強調表示）します。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

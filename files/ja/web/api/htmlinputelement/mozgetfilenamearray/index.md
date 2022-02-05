---
title: HTMLInputElement.mozGetFileNameArray()
slug: Web/API/HTMLInputElement/mozGetFileNameArray
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - メソッド
  - NeedsBrowserCompatibility
  - 標準外
  - リファレンス
browser-compat: api.HTMLInputElement.mozGetFileNameArray
translation_of: Web/API/HTMLInputElement/mozGetFileNameArray
---
{{ APIRef("HTML DOM") }}{{Non-standard_header}}

**`HTMLInputElement.mozGetFileNameArray()`** メソッドは、 HTML の `input` 要素上でユーザーによって選択されたファイルの名前の配列を返します。

> **Note:** このメソッドは Gecko に特有のものであり、他のブラウザーでは利用できません。加えて、ウェブページで利用した場合にエラーが発生します。

## 構文

```js
inputElement.mozGetFileNameArray(aLength, aFileNames);
```

### 引数

- `aLength`
  - : 指定された場合、返却される配列にあるファイル名の数を受け取ります。
- `aFileNames`
  - : ファイル名が配置される配列です。

## 例

```js
var numFiles = 0;
var fileArray = {};

inputElement.mozGetFileNameArray(numFiles, fileArray);
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("Input.mozSetFileNameArray")}}

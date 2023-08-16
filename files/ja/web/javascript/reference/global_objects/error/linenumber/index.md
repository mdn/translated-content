---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
---

{{JSRef}} {{non-standard_header}}

**`lineNumber`** プロパティは、このエラーを起こしたファイル内の行番号が入ります。

## 例

### lineNumber の使用

```js
var e = new Error("Could not parse input");
throw e;
console.log(e.lineNumber); // 2
```

### error イベントを使用した他の例

```js
window.addEventListener("error", function (e) {
  console.log(e.lineNumber); // 5
});
var e = new Error("入力を解釈できません");
throw e;
```

これは標準の機能ではなく、幅広く対応されていません。下記のブラウザーの互換性の表をご覧ください。

## 仕様書

仕様の一部ではありません。

## ブラウザーの互換性

{{Compat("javascript.builtins.Error.lineNumber")}}

## 関連情報

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.fileName")}}

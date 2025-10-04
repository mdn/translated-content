---
title: "Error: lineNumber"
short-title: lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

**`lineNumber`** は {{jsxref("Error")}} インスタンスのデータプロパティで、このエラーを起こしたファイル内の行番号が入ります。

## 値

正の整数です。

{{js_property_attributes(1, 0, 1)}}

## 例

### lineNumber の使用

```js
try {
  throw new Error("Could not parse input");
} catch (err) {
  console.log(err.lineNumber); // 2
}
```

### error イベントを使用した他の例

```js
window.addEventListener("error", (e) => {
  console.log(e.lineNumber); // 5
});
var e = new Error("入力を解釈できません");
throw e;
```

これは標準の機能ではなく、幅広く対応されていません。下記のブラウザーの互換性の表をご覧ください。

## 仕様書

仕様書に含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.fileName")}}

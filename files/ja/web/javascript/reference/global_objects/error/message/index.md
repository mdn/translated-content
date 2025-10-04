---
title: "Error: message"
short-title: message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`message`** は {{jsxref("Error")}} インスタンスのデータプロパティで、人間が読めるエラーの説明です。

## 値

文字列で、[`Error()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) コンストラクターの最初の引数として渡された値に対応します。

{{js_property_attributes(1, 0, 1)}}

## 解説

このプロパティは、利用可能または設定されている場合、エラーの簡潔な説明を含みます。 `message` プロパティは {{jsxref("Error/name", "name")}} プロパティとの組み合わせで、Error の文字列表現を生成するために {{jsxref("Error.prototype.toString()")}} メソッドにより使用されます。

既定で `message` プロパティは空文字列ですが、この振る舞いは、 {{jsxref("Error/Error", "Error")}} コンストラクターの第一引数としてメッセージを指定することにより、インスタンスを上書きできます。

## 例

### 独自のエラーを発生させる

```js
const e = new Error("Could not parse input");
// e.message is 'Could not parse input'
throw e;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}

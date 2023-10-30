---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
---

{{JSRef}}

**`message`** プロパティは、人間が読めるエラーの説明です。

## 解説

このプロパティは、利用可能または設定されている場合、エラーの簡潔な説明を含みます。[SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) は、例外の `message` プロパティを広範囲に渡って使用します。{{jsxref("Error.prototype.name", "name")}} プロパティは `message` プロパティとの組み合わせで、Error の文字列表現を生成するために {{jsxref("Error.prototype.toString()")}} メソッドにより使用されます。

既定で `message` プロパティは空文字列ですが、この振る舞いは、 {{jsxref("Error/Error", "Error")}} コンストラクターの第一引数としてメッセージを指定することにより、インスタンスを上書きできます。

## 例

### 独自のエラーを発生させる

```js
var e = new Error("Could not parse input");
// e.message は 'Could not parse input'
throw e;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}

---
title: String() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/String/String
---

{{JSRef}}

**`String`** コンストラクターは新しい {{jsxref("String")}} オブジェクトを生成するために使用します。関数として呼び出された場合は、{{Glossary("string", "プリミティブ文字列", "", 1)}}への型変換を行うので、普通はより便利です。

## 構文

```
new String(thing)
String(thing)
```

### 引数

- `thing`
  - : 文字列に変換するもの。

## 例

### String コンストラクターと String 関数

String 関数と String コンストラクターは異なる結果を生み出します。

```js
typeof String('Hello world'); // string
typeof new String('Hello world'); // object
```

ここでは、この関数は約束通り ({{Glossary("primitive", "プリミティブ")}}型の) 文字列を生成します。しかし、コンストラクターは String 型 (オブジェクトのラッパー) のインスタンスを生成しますので、 String コンストラクターを使用するのは稀だといえます。

## 仕様書

| 仕様書                                                                                           |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string-constructor', 'String constructor')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.String")}}

## 関連情報

- [JavaScript ガイドのテキスト処理](/ja/docs/Web/JavaScript/Guide/Text_formatting)

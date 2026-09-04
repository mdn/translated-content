---
title: "CSSFunctionRule: getParameters() メソッド"
short-title: getParameters()
slug: Web/API/CSSFunctionRule/getParameters
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

**`getParameters()`** は {{domxref("CSSFunctionRule")}} インターフェイスのメソッドで、このカスタム関数の引数を表すオブジェクトの配列を返します。

## 構文

```js-nolint
getParameters()
```

### 引数

なし。

### 返値

以下のプロパティが入ったオブジェクトの配列です。

- `name`
  - : この関数の引数の名前を表す文字列です。
- `type`
  - : この引数のデータ型を表す文字列です。データ型が指定されていなかった場合は `*` となります。
- `defaultValue`
  - : この引数のデフォルト値を表す文字列です。デフォルト値が指定されていなかった場合は `null` となります。

関連付けられた {{cssxref("@function")}} アットルールに指定された引数がない場合、空の配列が返されます。

## 例

例については主となる {{domxref("CSSFunctionRule")}} のリファレンスページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@function")}}

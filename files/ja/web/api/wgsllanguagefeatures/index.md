---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: cf57e1e1e1756fec85425d01294ffeabc3b5b451
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`WGSLLanguageFeatures`** インターフェイスは、この WebGPU の実装が対応している [WGSL 言語の拡張](https://gpuweb.github.io/gpuweb/wgsl/#language-extension)を報告する [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)オブジェクトです。

`WGSLLanguageFeatures` オブジェクトは {{domxref("GPU.wgslLanguageFeatures")}} プロパティ経由で参照します。

> [!NOTE]
> API をサポートしているすべてのブラウザーの WebGPU ですべての WGSL 言語の拡張が使えるわけではありません。使うことにした拡張をすべて徹底的にテストすることを推奨します。

{{InheritanceDiagram}}

## 利用可能な機能

利用可能な WGSL 言語の拡張は実装や物理デバイスによって異なる可能性があり、時間の経過によっても変わる可能性があります。そのため、ここでは列挙しません。完全なリストは、WGSL の仕様書内の [WGSL 言語の拡張](https://gpuweb.github.io/gpuweb/wgsl/#language-extension)を参照してください。

## インスタンスプロパティ

以下のプロパティは、すべての読み取り専用の [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)オブジェクトで使用可能です。

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : 集合に含まれる値の数を返します。

## インスタンスメソッド

以下のメソッドは、すべての読み取り専用の [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)オブジェクトで使用可能です。

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : 指定の値の要素が集合に含まれるか否かを表す論理値を返します。
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : 集合内の各要素の **値** を挿入した順に出力する新しいイテレーターオブジェクトを返します。
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : {{jsxref("Set.prototype.values()", "values()")}} の別名です。
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : 集合内の各要素に対応する **配列 `[value, value]`** が挿入した順に含まれる新しいイテレーターオブジェクトを返します。
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : 集合内の各要素について挿入した順に指定のコールバック関数を 1 度ずつ呼び出します。

## 例

```js
if (!navigator.gpu) {
  throw Error("WebGPU に対応していません。");
}

const wgslFeatures = navigator.gpu.wgslLanguageFeatures;

// 集合のサイズを返す
console.log(wgslFeatures.size);

// values() を用いて集合のすべての値を走査する
const valueIterator = wgslFeatures.values();
for (const value of valueIterator) {
  console.log(value);
}

// ...
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)

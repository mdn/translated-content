---
title: GPUSupportedFeatures
slug: Web/API/GPUSupportedFeatures
l10n:
  sourceCommit: e18aa8e600733ebc25443075c563fd56361dfe98
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUSupportedFeatures`** インターフェイスは、{{domxref("GPUAdapter")}} が対応している追加機能を表現する [`Set` 風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風のブラウザー_api)です。

現在のアダプター用の `GPUSupportedFeatures` オブジェクトは、{{domxref("GPUAdapter.features")}} 経由で参照できます。

下層のハードウェアで対応していても、対応するすべてのブラウザーの WebGPU ですべての機能が利用できるわけではないことに注意するべきです。これは、たとえば以下の場合など、下層のシステム、ブラウザー、アダプターの制限によるものである可能性があります。

- 下層のシステムが、あるブラウザーと互換性がある方式で機能を利用可能にする保証ができないかもしれません。
- ブラウザーのベンダーがある機能への対応を実装するセキュアな方法をまだ見つけていないか、単にまだ実装に手が回っていないかもしれません。

WebGPU アプリケーションにおいて特定の追加機能の恩恵を受けたい場合は、徹底的にテストを行うことを推奨します。

{{InheritanceDiagram}}

## 利用可能な機能

実装や物理デバイスによって異なる可能性があり、時間の経過によっても変わる可能性があるので、ここでは WebGPU で使用可能な追加機能の完全な集合を列挙していませんリストは、仕様書内の [Feature Index](https://gpuweb.github.io/gpuweb/#feature-index) を参照してください。

## インスタンスプロパティ

以下のプロパティは、すべての読み取り専用の [`Set` 風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風のブラウザー_api)で使用可能です。(以下のリンクはグローバルオブジェクト {{jsxref("Set")}} のリファレンスページです)

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : 集合に含まれる値の数を返します。

## インスタンスメソッド

以下のメソッドは、すべての読み取り専用の [`Set` 風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風のブラウザー_api)で使用可能です。(以下のリンクはグローバルオブジェクト {{jsxref("Set")}} のリファレンスページです)

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
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU に対応していません。");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("WebGPU のアダプターを要求できませんでした。");
  }

  const adapterFeatures = adapter.features;

  // 集合のサイズを返す
  console.log(adapterFeatures.size);

  // アダプターがある機能に対応しているかどうかをチェックする
  console.log(adapterFeatures.has("texture-compression-astc"));

  // values() を用いて集合のすべての値を走査する
  const valueIterator = adapterFeatures.values();
  for (const value of valueIterator) {
    console.log(value);
  }

  // keys() を用いて集合のすべての値を走査する
  const keyIterator = adapterFeatures.keys();
  for (const value of keyIterator) {
    console.log(value);
  }

  // entries() を用いて集合のすべての値を走査する
  const entryIterator = adapterFeatures.entries();
  for (const entry of entryIterator) {
    console.log(entry[0]);
  }

  // forEach() を用いて集合のすべての値を走査する
  adapterFeatures.forEach((value) => {
    console.log(value);
  });

  //...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)

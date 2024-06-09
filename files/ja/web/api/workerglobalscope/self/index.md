---
title: "WorkerGlobalScope: self プロパティ"
short-title: self
slug: Web/API/WorkerGlobalScope/self
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("Web Workers API")}}

**`self`** は {{domxref("WorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、 `WorkerGlobalScope` 自体への参照を返します。ほとんどの場合、これは {{domxref("DedicatedWorkerGlobalScope")}} や {{domxref("SharedWorkerGlobalScope")}}、{{domxref("ServiceWorkerGlobalScope")}} などの特有のスコープです。

## 値

グローバルスコープオブジェクト（前述のとおり、扱っているワーカーの種類によって異なる）。

## 例

次のものをワーカー内で呼び出した場合、

```js
console.log(self);
```

コンソールに書き込まれたワーカーオブジェクトと同じ型のワーカーグローバルスコープが取得されます。ある時は次のようになります。

```plain
DedicatedWorkerGlobalScope {
undefined: undefined, Infinity: Infinity, Math: MathConstructor, NaN: NaN, Intl: Object…}
    Infinity: Infinity
    Array: function Array() { [native code] }
      arguments: null
      caller: null
      isArray: function isArray() { [native code] }
      length: 1
      name: "Array"
      observe: function observe() { [native code] }
      prototype: Array[0]
      unobserve: function unobserve() { [native code] }
      __proto__: function Empty() {}
      <function scope>
    ArrayBuffer: function ArrayBuffer() { [native code] }
    Blob: function Blob() { [native code] }
    Boolean: function Boolean() { [native code] }
    DataView: function DataView() { [native code] }
    Date: function Date() { [native code] }
    DedicatedWorkerGlobalScope: function DedicatedWorkerGlobalScope() { [native code] }
    Error: function Error() { [native code] }
// etc. etc.
```

これは、そのワーカースコープで利用可能なオブジェクトの完全なリストを提供するため、ワーカーが何かを利用できるかを確認したい場合には、非常に便利なテストです。[ウェブワーカーが使用できる関数とクラス](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)の一覧もメンテナンスしています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{domxref("WorkerGlobalScope")}}

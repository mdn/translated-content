---
title: WorkerGlobalScope.self
slug: Web/API/WorkerGlobalScope/self
tags:
  - API
  - Property
  - Reference
  - Web Worker
  - WorkerGlobalScope
  - self
translation_of: Web/API/WorkerGlobalScope/self
---
{{APIRef("Web Workers API")}}

{{domxref("WorkerGlobalScope")}} インターフェースの **`self`** 読み取り専用プロパティは、`WorkerGlobalScope` 自体への参照を返します。ほとんどの場合、これは {{domxref("DedicatedWorkerGlobalScope")}} や {{domxref("SharedWorkerGlobalScope")}}、{{domxref("ServiceWorkerGlobalScope")}} などの特定のスコープです。

## 構文

```js
var selfRef = self;
```

### 値

グローバルスコープオブジェクト (上に示したように、扱っている worker の種類によって異なる)。

## 例

以下を呼び出した場合、

```js
console.log(self);
```

worker 内で、コンソールに書き込まれたワーカーオブジェクトと同じタイプのワーカーグローバルスコープが取得されます — ある時は次のようになります:

```js
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

これは、そのワーカースコープで利用可能なオブジェクトの完全なリストを提供するため、ワーカーが何かを利用できるかを確認したい場合には、非常に便利なテストです。リストを[Web Workers が使用できる関数とクラス](/ja/docs/Web/API/Worker/Functions_and_classes_available_to_workers)でもメンテナンスしています。

> **Note:** **ノート**: Firefox には `console.log` を shared/service worker 内で使用したときのバグがあり ({{Bug("1058644")}} を見てください)、おかしな結果を返します。これはすぐに修正されるはずです。

## 仕様

| 仕様                                                                                     | ステータス                       | コメント                                            |
| ---------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dom-workerglobalscope-self', 'self')}} | {{Spec2('HTML WHATWG')}} | {{SpecName("Web Workers")}} から変更なし。 |
| {{SpecName('Web Workers', '#dom-workerglobalscope-self', 'self')}} | {{Spec2('Web Workers')}} | 初期定義。                                          |

## ブラウザー実装状況

{{Compat("api.WorkerGlobalScope.self")}}

## 関連項目

{{domxref("WorkerGlobalScope")}}

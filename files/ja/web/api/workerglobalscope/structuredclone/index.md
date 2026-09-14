---
title: "WorkerGlobalScope: structuredClone() メソッド"
short-title: structuredClone()
slug: Web/API/WorkerGlobalScope/structuredClone
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

**`structuredClone()`** は {{domxref("WorkerGlobalScope")}} のメソッドで、指定された値の{{Glossary("deep copy", "ディープコピー")}}を、[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を用いて生成します。

このメソッドでは、元の値の[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)を、新しいオブジェクトにクローンするのではなく、移譲することもできます。
移譲されたオブジェクトは元のオブジェクトから切り離され、新しいオブジェクトに関連付けられます。元のオブジェクトからはもうアクセスできなくなります。

## 構文

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### 引数

- `value`
  - : 複製されるオブジェクトです。
    これはあらゆる[構造化複製可能型](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#%E5%AF%BE%E5%BF%9C%E6%B8%88%E3%81%BF%E3%81%AE%E5%9E%8B)です。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `transfer`
  - : [移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)の配列で、複製するのではなく移動するオブジェクトを指定します。

### 返値

返値は元の `value` の{{Glossary("deep copy", "ディープコピー")}}です。

### 例外

- `DataCloneError` {{domxref("DOMException")}}
  - : 入力値にシリアライズ可能でない部分があった場合に発生します。

## 解説

この関数の詳細は {{domxref("Window.structuredClone()")}} を参照してください。

## 例

例については {{domxref("Window.structuredClone()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`structuredClone` のポリフィル](https://github.com/zloirock/core-js#structuredclone)は [`core-js`](https://github.com/zloirock/core-js) にあります
- [構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [構造化クローンのポリフィル](https://github.com/ungap/structured-clone)

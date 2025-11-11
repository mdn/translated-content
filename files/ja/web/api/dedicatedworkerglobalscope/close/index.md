---
title: DedicatedWorkerGlobalScope.close()
slug: Web/API/DedicatedWorkerGlobalScope/close
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{APIRef("Web Workers API")}}

**`close()`** は {{domxref("DedicatedWorkerGlobalScope")}} インターフェイスのメソッドで、 `DedicatedWorkerGlobalScope` のイベントループでキューに入れられたタスクを破棄し、この具体的なスコープを閉じます。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

ワーカー自体の内部からワーカーインスタンスを閉じたい場合は、以下のように呼び出してください。

```js
close();
```

`close()` と `self.close()` は事実上同じです。どちらも `close()` がワーカーの内部スコープから呼び出されることを表します。

> [!NOTE]
> メインスレッドからワーカーを停止する方法もあります。{{domxref("Worker.terminate")}} メソッドです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{domxref("DedicatedWorkerGlobalScope")}}

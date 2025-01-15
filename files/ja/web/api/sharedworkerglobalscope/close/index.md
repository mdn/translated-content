---
title: SharedWorkerGlobalScope.close()
slug: Web/API/SharedWorkerGlobalScope/close
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Web Workers API")}}

**`close()`** は {{domxref("SharedWorkerGlobalScope")}} インターフェイスのメソッドで、 `SharedWorkerGlobalScope` のイベントループにキューイングされているタスクを破棄し、この具体的なスコープを効果的に閉じます。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

ワーカー自体の内部からワーカーのインスタンスを閉じたい場合は、以下のように呼び出すことができます。

```js
close();
```

`close()` と `self.close()` は事実上同じです。どちらもワーカーの内部スコープから `close()` が呼び出されることを表しています。

> [!NOTE]
> メインスレッドからワーカーを停止する方法もあります。{{domxref("Worker.terminate")}} メソッドです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{domxref("DedicatedWorkerGlobalScope")}}

---
title: AbortSignal.abort()
slug: Web/API/AbortSignal/abort_static
---

{{APIRef("DOM")}}

静的な **`AbortSignal.abort()`** メソッドは、既に中止と設定されている（かつ {{domxref("AbortSignal/abort_event", "abort")}} イベントが発生していない） {{domxref("AbortSignal") }} を返します。

これは、以下のコードの一連で行うものです。

```js
const controller = new AbortController();
controller.abort();
return controller.signal;
```

これは、例えば、フェッチメソッドの中止ロジックを実行するために渡される可能性があります （つまり、意図したフェッチ処理が開始されていなくても中止ロジックが実行されるように コードが構成されていることがあります）。

> **メモ:** このメソッドは {{JSxRef("Promise.reject")}} と同じような目的を持っています。

## 構文

```js-nolint
abort()
abort(reason)
```

### 引数

- `reason`
  - : 処理が中断された理由。任意の JavaScript の値を指定可能です。
    指定しない場合、理由は "AbortError" {{domxref("DOMException")}} に設定されます。

### 返値

`AbortSignal` インスタンスの {{domxref("AbortSignal.aborted")}} プロパティを `true` に設定し、 {{domxref("AbortSignal.reason")}} に指定された（または既定の）理由を設定したものです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

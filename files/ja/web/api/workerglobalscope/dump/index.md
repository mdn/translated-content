---
title: "WorkerGlobalScope: dump() メソッド"
short-title: dump()
slug: Web/API/WorkerGlobalScope/dump
l10n:
  sourceCommit: e822af5fc37c5cd436a58b05656cc82e18cf7d63
---

{{APIRef("Web Workers API")}}{{Non-standard_Header}}{{Deprecated_Header}}

**`WorkerGlobalScope.dump()`** メソッドは、メッセージをブラウザーの標準出力 (`stdout`) にログ出力します。ブラウザーがターミナルから起動されている場合、 `dump()` に送られた出力はターミナルに表示されます。これは {{domxref("Window.dump()")}} と同じですが、ワーカーのためのものです。

`dump()` からの出力は、ブラウザーの開発者ツールのコンソールに送信されません。開発者ツールのコンソールへログ出力するには、 [`console.log()`](/ja/docs/Web/API/console/log_static) を使用してください。

## 構文

```js-nolint
dump(message)
```

### 引数

- `message`
  - : 文字列で、ログ出力するメッセージが入ります。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

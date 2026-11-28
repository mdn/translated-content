---
title: "Window: dump() メソッド"
short-title: dump()
slug: Web/API/Window/dump
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}} {{Non-standard_header}}

**`Window.dump()`** メソッドは、ブラウザーの標準出力 (`stdout`) にメッセージを記録します。ブラウザーが端末から起動された場合、`dump()` に送信された出力は端末に表示されます。

`dump()` からの出力は、ブラウザーの開発者ツールコンソールには送信されません。開発者ツールコンソールへ記録するには、[`console.log()`](/ja/docs/Web/API/console/log_static) を使用してください。

## 構文

```js-nolint
dump(message)
```

### 引数

- `message`
  - : 記録するメッセージを含む文字列です。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

この機能はどの仕様にも含まれていません。

## ブラウザーの互換性

{{Compat}}

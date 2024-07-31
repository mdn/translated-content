---
title: "Document: queryCommandEnabled() メソッド"
short-title: queryCommandEnabled()
slug: Web/API/Document/queryCommandEnabled
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

The **`Document.queryCommandEnabled()`** メソッドは、指定したエディターコマンドがブラウザーで有効になっているかどうかを報告します。

## 構文

```js-nolint
document.queryCommandEnabled(command)
```

### 引数

- `command`
  - : 対応するかどうかを判断するコマンド。

### 返値

論理値で、コマンドが有効な場合は `true`、無効な場合は `false` を返します。

## メモ

- '`cut`' および '`copy`' コマンドの場合、このメソッドはユーザーが起動したスレッドから呼び出されたときのみ true を返します。
- `'paste'` コマンドは、その機能が利用できない場合だけでなく、呼び出されたスクリプトがそのアクションを実行するのに十分な権限を持っていない場合にも `false` を返します。

## 例

```js
const flg = document.queryCommandEnabled("SelectAll");

if (flg) {
  document.execCommand("SelectAll", false, null); // コマンドが有効なので、実行する
}
```

## 仕様書

この機能はどの現行仕様にも属していません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.execCommand()")}}
- {{domxref("Document.queryCommandSupported()")}}

---
title: "Document: queryCommandSupported() メソッド"
short-title: queryCommandSupported()
slug: Web/API/Document/queryCommandSupported
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

**`Document.queryCommandSupported()`** メソッドは、指定されたエディターコマンドにブラウザーが対応しているかどうかを報告します。

## 構文

```js-nolint
queryCommandSupported(command)
```

### 引数

- `command`
  - : 対応しているかどうかを調べるコマンドです。

### 返値

論理値で、コマンドに対応していれば `true`、そうでなければ `false` を返します。

## 注

`'paste'` コマンドは機能が利用できないときだけでなく、呼び出しスクリプトにそのコマンドを実行するための権限が不足しているときにも `false` を返します。

## 例

```js
const flg = document.queryCommandSupported("SelectAll");

if (flg) {
  // ...何か行う
}
```

## 仕様書

この機能は、現在のどの仕様にも含まれていません。標準化される予定もありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.execCommand()")}}
- {{domxref("Document.queryCommandEnabled()")}}

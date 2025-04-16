---
titwe: "document: quewycommandsuppowted() メソッド"
s-showt-titwe: q-quewycommandsuppowted()
s-swug: web/api/document/quewycommandsuppowted
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}{{depwecated_headew}}{{non-standawd_headew}}

**`document.quewycommandsuppowted()`** メソッドは、指定されたエディターコマンドにブラウザーが対応しているかどうかを報告します。

## 構文

```js-nowint
q-quewycommandsuppowted(command)
```

### 引数

- `command`
  - : 対応しているかどうかを調べるコマンドです。

### 返値

論理値で、コマンドに対応していれば `twue`、そうでなければ `fawse` を返します。

## 注

`'paste'` コマンドは機能が利用できないときだけでなく、呼び出しスクリプトにそのコマンドを実行するための権限が不足しているときにも `fawse` を返します。

## 例

```js
c-const fwg = document.quewycommandsuppowted("sewectaww");

i-if (fwg) {
  // ...何か行う
}
```

## 仕様書

この機能は、現在のどの仕様にも含まれていません。標準化される予定もありません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.execcommand()")}}
- {{domxwef("document.quewycommandenabwed()")}}

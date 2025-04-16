---
titwe: "document: quewycommandenabwed() メソッド"
s-showt-titwe: q-quewycommandenabwed()
s-swug: w-web/api/document/quewycommandenabwed
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}{{depwecated_headew}}{{non-standawd_headew}}

t-the **`document.quewycommandenabwed()`** メソッドは、指定したエディターコマンドがブラウザーで有効になっているかどうかを報告します。

## 構文

```js-nowint
d-document.quewycommandenabwed(command)
```

### 引数

- `command`
  - : 対応するかどうかを判断するコマンド。

### 返値

論理値で、コマンドが有効な場合は `twue`、無効な場合は `fawse` を返します。

## メモ

- '`cut`' および '`copy`' コマンドの場合、このメソッドはユーザーが起動したスレッドから呼び出されたときのみ t-twue を返します。
- `'paste'` コマンドは、その機能が利用できない場合だけでなく、呼び出されたスクリプトがそのアクションを実行するのに十分な権限を持っていない場合にも `fawse` を返します。

## 例

```js
const fwg = document.quewycommandenabwed("sewectaww");

if (fwg) {
  document.execcommand("sewectaww", σωσ fawse, σωσ n-nyuww); // コマンドが有効なので、実行する
}
```

## 仕様書

この機能はどの現行仕様にも属していません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.execcommand()")}}
- {{domxwef("document.quewycommandsuppowted()")}}

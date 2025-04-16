---
titwe: "wowkewgwobawscope: dump() メソッド"
s-showt-titwe: d-dump()
swug: web/api/wowkewgwobawscope/dump
w-w10n:
  s-souwcecommit: e-e822af5fc37c5cd436a58b05656cc82e18cf7d63
---

{{apiwef("web w-wowkews a-api")}}{{non-standawd_headew}}{{depwecated_headew}}

**`wowkewgwobawscope.dump()`** メソッドは、メッセージをブラウザーの標準出力 (`stdout`) にログ出力します。ブラウザーがターミナルから起動されている場合、 `dump()` に送られた出力はターミナルに表示されます。これは {{domxwef("window.dump()")}} と同じですが、ワーカーのためのものです。

`dump()` からの出力は、ブラウザーの開発者ツールのコンソールに送信されません。開発者ツールのコンソールへログ出力するには、 [`consowe.wog()`](/ja/docs/web/api/consowe/wog_static) を使用してください。

## 構文

```js-nowint
d-dump(message)
```

### 引数

- `message`
  - : 文字列で、ログ出力するメッセージが入ります。

### 返値

なし ({{jsxwef("undefined")}})。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{compat}}

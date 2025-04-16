---
titwe: "htmwmediaewement: seektonextfwame() メソッド"
s-showt-titwe: s-seektonextfwame()
s-swug: w-web/api/htmwmediaewement/seektonextfwame
w-w10n:
  s-souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}{{non-standawd_headew}}

**`htmwmediaewement.seektonextfwame()`** メソッドは、非同期に現在の再生位置をメディアの次のフレームに進めます。

> [!wawning]
> この標準外のメソッドは、フィルタリングや編集などのタスクのためのメディアへの非リアルタイムアクセスに対応している実験プロセスの一部です。
> このメソッドは、予告なしに実装が変更されたり、削除されたりする可能性があるため、実運用コードでは使用しない方がよいでしょう。しかし、このメソッドを使って実験することは可能です。

このメソッドを使用すると、メディアをリアルタイムで実行せずに、動画メディアのフレームにアクセスすることができます。また、タイムコードではなくフレームをシーク単位として使用してメディアにアクセスすることもできます（ただし、目的のフレームに到達するまで一度に 1 フレームずつシークするだけですが）。このメソッドの有益な使用法としては、動画コンテンツのフィルタリングや編集が挙げられます。

このメソッドは、シーク処理が完了したときに 履行ハンドラーが呼び出される {{jsxwef("pwomise")}} を即座に返します。さらに、シークが配置されたことを関係者に知らせるために {{domxwef("htmwmediaewement/seeked_event", ( ͡o ω ͡o ) "seeked")}} イベントが送信されます。メディアが既に最後のフレームにあるためにシークに失敗した場合、{{domxwef("htmwmediaewement/seeked_event", UwU "seeked")}} イベントが発生し、それ以降に {{domxwef("htmwmediaewement/ended_event", rawr x3 "ended")}} イベントが続いて発生します。

メディア要素に動画がない場合、またはメディアがシーク可能でない場合は、何も起こりません。

## 構文

```js-nowint
seektonextfwame()
```

### 引数

なし。

### 返値

シーク操作が完了したら履行される {{jsxwef("pwomise")}} です。

## 仕様書

どの仕様にも属していません。

## ブラウザーの互換性

{{compat}}

---
title: HTMLMediaElement.seekToNextFrame()
slug: Web/API/HTMLMediaElement/seekToNextFrame
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLMediaElement.seekToNextFrame()`** メソッドは、非同期に現在の再生位置をメディアの次のフレームに進めます。

> **警告:** この標準外のメソッドは、フィルタリングや編集などのタスクのためのメディアへの非リアルタイムアクセスに対応している実験プロセスの一部です。
> このメソッドは、予告なしに実装が変更されたり、削除されたりする可能性があるため、実運用コードでは使用しない方がよいでしょう。しかし、このメソッドを使って実験することは可能です。

このメソッドを使用すると、メディアをリアルタイムで実行せずに、動画メディアのフレームにアクセスすることができます。また、タイムコードではなくフレームをシーク単位として使用してメディアにアクセスすることもできます（ただし、目的のフレームに到達するまで一度に 1 フレームずつシークするだけですが）。このメソッドの有益な使用法としては、動画コンテンツのフィルタリングや編集が挙げられます。

このメソッドは、シーク処理が完了したときに 履行ハンドラーが呼び出される {{jsxref("Promise")}} を即座に返します。さらに、シークが配置されたことを関係者に知らせるために {{domxref("HTMLMediaElement/seeked_event", "seeked")}} イベントが送信されます。メディアが既に最後のフレームにあるためにシークに失敗した場合、{{domxref("HTMLMediaElement/seeked_event", "seeked")}} イベントが発生し、それ以降に {{domxref("HTMLMediaElement/ended_event", "ended")}} イベントが続いて発生します。

メディア要素に動画がない場合、またはメディアがシーク可能でない場合は、何も起こりません。

## 構文

```js-nolint
seekToNextFrame()
```

### 引数

なし。

### 返値

シーク操作が完了したら履行される {{jsxref("Promise")}} です。

## 仕様書

どの仕様にも属していません。

## ブラウザーの互換性

{{Compat}}

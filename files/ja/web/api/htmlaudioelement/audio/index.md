---
title: "HTMLAudioElement: Audio() コンストラクター"
slug: Web/API/HTMLAudioElement/Audio
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`Audio()`** コンストラクターは新しい {{domxref("HTMLAudioElement")}} を作成し返します。この要素は文書に取り付けてユーザーが操作したり聞いたりすることができますし、画面外で音声を管理したり再生したりするために使用することもできます。

## 構文

```js-nolint
new Audio()
new Audio(url)
```

### 引数

- `url` {{optional_inline}}
  - : オプションで、新しい audio 要素に関連付ける音声ファイルの URL をの入った文字列。

### 返値

新しい {{domxref("HTMLAudioElement")}} オブジェクトで、`url` で指定したファイルの音声を再生するために使用するように構成されています。新しいオブジェクトの {{domxref("HTMLMediaElement.preload", "preload")}} プロパティは `auto` に設定され、その `src` プロパティには指定した URL が入ります。URL が与えられなかったら `null` が設定されます。
URL が指定された場合、ブラウザーは新しいオブジェクトを返す前に、非同期的にメディアリソースの読み込みを始めます。

## 使用上の注意

他にも {{domxref("document")}} オブジェクトの {{domxref("Document.createElement", "createElement()")}} メソッドなど、要素を作成するためのメソッドを使用して、新しい {{domxref("HTMLAudioElement")}} を構築することもできます。

### 再生を始めるタイミングを決める

音声ファイルが十分に読み込まれ、再生が開始されたことを確認する方法は 3 つあります。

- {{domxref("HTMLMediaElement.readyState", "readyState")}} プロパティの値を調べます。`HTMLMediaElement.HAVE_FUTURE_DATA` であれば、再生を始めるのに十分なデータがあり、少なくとも短時間は再生できます。`HTMLMediaElement.HAVE_ENOUGH_DATA` であれば、現在のダウンロードレートを指定された場合、音声を中断することなく最後まで再生できる十分なデータがあることを意味します。
- {{domxref("HTMLMediaElement.canplay_event", "canplay")}} イベントを待ち受けします。再生を始めるのに十分な音声が利用できると `<audio>` 要素に送られますが、中断されることもあります。
- {{domxref("HTMLMediaElement.canplaythrough_event", "canplaythrough")}} イベントを待ち受けします。音声が中断することなく最後まで再生できると推測されるときに送られます。

イベントベースの方法が最適です。

```js
myAudioElement.addEventListener("canplaythrough", (event) => {
  /* 権限があれば、音声が再生できるようになった */
  myAudioElement.play();
});
```

### メモリーの使用と管理

再生が行われている場合は、`Audio()` コンストラクターで作成した audio 要素への参照をすべて削除しても、JavaScript ランタイムのガベージコレクション機構によって要素自体がメモリーから削除されることはありません。その代わり、音声は再生され続け、オブジェクトは再生が終わるか（{{domxref("HTMLMediaElement.pause", "pause()")}} が呼び出されるなどで）一時停止されるまでメモリーに残ります。その時点で、オブジェクトはガベージコレクションの対象となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブメディア技術](/ja/docs/Web/Media)
- このインターフェイスを実装している HTML 要素: {{HTMLElement("audio")}}

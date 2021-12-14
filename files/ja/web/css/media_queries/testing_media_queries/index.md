---
title: プログラムによるメディアクエリーの評価
slug: Web/CSS/Media_Queries/Testing_media_queries
tags:
  - 上級者
  - CSS
  - DOM
  - ガイド
  - JavaScript
  - メディアクエリー
  - MediaQueryList
  - レスポンシブデザイン
  - ウェブ
  - matchMedia
translation_of: Web/CSS/Media_Queries/Testing_media_queries
---
{{CSSRef}}

{{Glossary("DOM")}} では、[メディアクエリー](/ja/docs/Web/CSS/Media_Queries)の結果を {{domxref("MediaQueryList")}} インターフェイスおよびそのメソッドやプロパティを用いてプログラムからで調べることができる機能を備えています。 `MediaQueryList` オブジェクトを作成すると、クエリーの結果を確認したり、結果が変化したときに自動的に通知を受け取ったりすることができます。

## メディアクエリーリストの作成

クエリーの結果を評価できるようにするのに先立ち、メディアクエリーを示す `MediaQueryList` オブジェクトを作成する必要があります。オブジェクトを作成するには、{{domxref("window.matchMedia")}} メソッドを用います。

例えば、端末が横置きか縦置きかを調べるクエリーリストを設定したい場合は、以下のようにします。

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## クエリーの結果の確認

メディアクエリーリストが作成されると、その `matches` プロパティの値を参照することで、クエリーの結果を確認することができます。このプロパティは、クエリーの結果を反映します。

```js
if (mediaQueryList.matches) {
  /* 現在ビューポートが縦長である */
} else {
  /* 現在ビューポートが縦長ではない、すなわち横長である */
}
```

## クエリーの通知の受信

クエリーの評価結果の変化を継続的に意識する必要がある場合は、クエリーの結果をポーリングするよりも[リスナー](/ja/docs/Web/API/EventTarget/addEventListener)を登録したことが効率的です。このためには、 `addListener()` メソッドを {{domxref("MediaQueryList")}} オブジェクトに対して呼び出し、メディアクエリーの状態が変化したとき (例えば、メディアクエリーの結果が `true` から `false` へ移行した場合) に呼び出されるコールバック関数を設定します。

```js
// クエリーリストを作成する。
const mediaQueryList = window.matchMedia("(orientation: portrait)");

// イベントリスナーのコールバック関数を定義する。
function handleOrientationChange(mql) {
  // ...
}

// 向き変更時のハンドラーを一度実行する。
handleOrientationChange(mediaQueryList);

// コールバック関数をリスナーとしてクエリーリストに追加する。
mediaQueryList.addListener(handleOrientationChange);
```

このコードでは端末の向き (orientation) を評価するメディアクエリーリストを作成し、次にリスナーを追加しています。リスナーを定義した後、そのリスナーを直接一度呼び出しています。これにより、リスナーが現在の端末の向きを基にして初期状態の調整を行うことができます (そうしないと、コードでは端末の初期状態が縦置きと想定しているが実際は横置きであるような場合に、不整合が発生します)。

次の `handleOrientationChange()` メソッドで、クエリーの結果の確認や端末の向きが変わったときに必要な処理を行います。

```js
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* 現在ビューポートが縦長 */
  } else {
    /* 現在ビューポートが横長 */
  }
}
```

上記で、引数を `evt` — イベントオブジェクトとして定義しています。これは [`MediaQueryList` の新しい実装](/ja/docs/Web/API/MediaQueryList#browser_compatibility)がイベントリスナーを標準の方法で扱うのでお分かりでしょう。標準外の {{domxref("MediaQueryListListener")}} の機構はもう使われませんが、標準のイベントリスナーの設定では、 {{domxref("MediaQueryListEvent")}} 型の[イベントオブジェクト](/ja/docs/Web/API/Event)をコールバック関数の引数として渡します。

このイベントオブジェクトは {{domxref("MediaQueryListEvent.media","media")}} および {{domxref("MediaQueryListEvent.matches","matches")}} プロパティも含んでおり、 `MediaQueryList` のこれらの機能に直接アクセスしたり、イベントオブジェクトにアクセスしたりすることができます。

## クエリーの通知の終了

メディアクエリーの値の変化について通知を受ける必要がなくなったときは、 `removeListener()` メソッドを `MediaQueryList` オブジェクトに対して呼び出してください。

```js
mediaQueryList.removeListener(handleOrientationChange);
```

## ブラウザーの互換性

### `MediaQueryList` インターフェイス

{{Compat("api.MediaQueryList")}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- {{domxref("window.matchMedia()")}}
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}

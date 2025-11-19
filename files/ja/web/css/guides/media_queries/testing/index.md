---
title: プログラムによるメディアクエリーの評価
slug: Web/CSS/Guides/Media_queries/Testing
original_slug: Web/CSS/CSS_media_queries/Testing_media_queries
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{Glossary("DOM")}} では、{{Glossary("media query", "メディアクエリー")}}の結果を {{domxref("MediaQueryList")}} インターフェイスおよびそのメソッドやプロパティを用いてプログラムから調べることができる機能を備えています。`MediaQueryList` オブジェクトを作成すると、[クエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)の結果を確認したり、結果が変化したときに自動的に通知を受け取ったりすることができます。

## メディアクエリーリストの作成

クエリーの結果を評価できるようにするのに先立ち、メディアクエリーを示す {{domxref("MediaQueryList")}} オブジェクトを作成する必要があります。オブジェクトを作成するには、{{domxref("window.matchMedia")}} メソッドを用います。

例えば、端末の[向き](/ja/docs/Web/CSS/Reference/At-rules/@media/orientation)が横置きか縦置きかを調べるクエリーリストを設定したい場合は、以下のようにします。

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## クエリーの結果の確認

メディアクエリーリストを作成したら、その [`matches`](/ja/docs/Web/API/MediaQueryList/matches) プロパティの値を参照することで、クエリーの結果を確認することができます。

```js
if (mediaQueryList.matches) {
  /* 現在ビューポートが縦長である */
} else {
  /* 現在ビューポートが縦長ではない、すなわち横長である */
}
```

## クエリーの通知の受信

クエリーの評価結果の変更を継続的に認識する必要がある場合、クエリーの結果をポーリングするよりも、[リスナー](/ja/docs/Web/API/EventTarget/addEventListener)を登録する方が効率的です。これを行うには、{{domxref("MediaQueryList")}} オブジェクトの {{domxref("EventTarget.addEventListener", "addEventListener()")}} メソッドを呼び出し、メディアクエリーのステータスが変化したとき（例えば、メディアクエリーのテストが `true` から `false` になったとき）に呼び出すコールバック関数を指定します。

```js
// クエリーリストを作成する。
const mediaQueryList = window.matchMedia("(orientation: portrait)");

// イベントリスナーのコールバック関数を定義する。
function handleOrientationChange(mql) {
  // …
}

// 向き変更時のハンドラーを一度実行する。
handleOrientationChange(mediaQueryList);

// コールバック関数をリスナーとしてクエリーリストに追加する。
mediaQueryList.addEventListener("change", handleOrientationChange);
```

このコードでは端末の向き (orientation) を評価するメディアクエリーリストを作成し、リスナーを追加しています。リスナーを定義した後、そのリスナーを直接一度呼び出しています。これにより、リスナーが現在の端末の向きを基にして初期状態の調整を行うことができます（そうしないと、コードでは端末の初期状態が縦置きと想定しているが実際は横置きであるような場合に、不整合が発生します）。

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

上記では、パラメーターを `evt`（{{domxref("MediaQueryListEvent")}} 型のイベントオブジェクトであり {{domxref("MediaQueryListEvent.media", "media")}} と {{domxref("MediaQueryListEvent.matches", "matches")}} プロパティも含む）として定義しているので、`MediaQueryList` に直接アクセスするか、イベントオブジェクトにアクセスすることで、これらの機能を問い合わせることができます。

## クエリーの通知の終了

メディアクエリーの値の変更に関する通知を受け取らないようにするには、`MediaQueryList` に対して {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} を呼び出し、先に定義したコールバック関数の名前を渡します。

```js
mediaQueryList.removeEventListener("change", handleOrientationChange);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)モジュール
- [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)モジュール
- {{domxref("window.matchMedia()")}}
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}

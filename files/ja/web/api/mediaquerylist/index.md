---
title: MediaQueryList
slug: Web/API/MediaQueryList
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

**`MediaQueryList`** オブジェクトは文書に適用されている[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)の情報を格納し、文書の状態に対する即時かつイベント駆動の照合に対応します。

`MediaQueryList` は {{DOMxRef("Window.matchMedia", "matchMedia()")}} を {{DOMxRef("window")}} オブジェクト上で呼び出すことで作成することができます。結果として得られるオブジェクトは、メディアクエリーの状態が変化したとき (つまり、メディアクエリーのテストが `true` の評価が開始または停止したとき) に、リスナーへの通知の送信を処理します。

これにより、定期的に値をポーリングするのではなく、文書を監視してメディアクエリーが変更されたときに検出することが可能になり、メディアクエリーの状態に基づいて文書にプログラム的に変更を加えることができるので、アダプティブデザインにとても便利です。

{{InheritanceDiagram}}

## インスタンスプロパティ

_`MediaQueryList` インターフェイスには、親インターフェイスである {{DOMxRef("EventTarget")}} から継承したプロパティがあります。_

- {{DOMxRef("MediaQueryList.matches", "matches")}} {{ReadOnlyInline}}
  - : 論理値で、 `true` であれば {{DOMxRef("document")}} が現在メディアクエリーリストに一致しており、 `false` であればそうではありません。
- {{DOMxRef("MediaQueryList.media", "media")}} {{ReadOnlyInline}}
  - : 文字列で、シリアライズされたメディアクエリーを表します。

## インスタンスメソッド

_`MediaQueryList` インターフェイスには、親インターフェイスである {{DOMxRef("EventTarget")}} から継承したメソッドがあります。_

- {{DOMxRef("MediaQueryList.addListener", "addListener()")}} {{deprecated_inline}}
  - : `MediaQueryList` にコールバックを追加します。このコールバックは、メディアクエリーの状態 (リスト内のメディアクエリーと文書が一致するかどうか) が変化するたびに呼び出されます。このメソッドは、主に下位互換性のために存在します。可能であれば、代わりに {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して {{domxref("MediaQueryList.change_event", "change")}} イベントを監視してください。
- {{DOMxRef("MediaQueryList.removeListener", "removeListener()")}} {{deprecated_inline}}
  - : 指定されたリスナーコールバックを、 `MediaQueryList` でメディアクエリーの状態が変化するたび、すなわち `MediaQueryList` に列挙されたメディアクエリーの一致・不一致の状態が変化するに呼び出されるコールバックから削除します。このメソッドは下位互換性のために保持されています。可能であれば、一般的に {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} を使用して、（以前 `addEventListener()` を使用して追加された）変更通知コールバックを削除してください。

## イベント

_以下のイベントは `MediaQueryList` オブジェクトに配信されます。_

- {{DOMxRef("MediaQueryList.change_event", "change")}}
  - : 文書に対してメディアクエリーを実行した結果が変更されたときに `MediaQueryList` に送信されます。例えば、メディアクエリーが `(min-width: 400px)` の場合、 `change` イベントが文書の{{Glossary("viewport", "ビューポート")}}の幅が 400px の閾値を通過するよう変更されるたびに発行されます。

## 例

このシンプルな例では、 `MediaQueryList` を作成し、メディアクエリーの状態が変化したときにそれを検出するリスナーを設定し、それがページの表示を変更するときにカスタム関数を実行します。

```js
const para = document.querySelector("p");
const mql = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    /* the viewport is more than 600 pixels wide */
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }
}

mql.addEventListener("change", screenTest);
```

> [!NOTE]
> この例は GitHub にあります ([ソースコード](https://github.com/mdn/dom-examples/blob/main/mediaquerylist/index.html)を参照、および[ライブで実行](https://mdn.github.io/dom-examples/mediaquerylist/index.html))。

他の例は個別のプロパティやメソッドのページにあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [プログラムによるメディアクエリーの評価](/ja/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryListEvent")}}
- {{DOMxRef("Window.devicePixelRatio")}} の記事にも有益な例があります

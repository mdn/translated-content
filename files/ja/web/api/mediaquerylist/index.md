---
title: MediaQueryList
slug: Web/API/MediaQueryList
tags:
  - API
  - Adaptive Design
  - CSSOM View
  - DOM
  - Interface
  - Media Queries
  - MediaQueryList
  - Reference
  - query
  - アダプティブデザイン
  - インターフェイス
  - メディアクエリー
translation_of: Web/API/MediaQueryList
---
{{APIRef("CSSOM")}}

A **`MediaQueryList`** オブジェクトは文書に適用されている[メディアクエリ](/ja/docs/Web/CSS/Media_Queries)の情報を格納し、文書の状態に対する中間かつイベントドリブンのマッチングに対応します。

`MediaQueryList` は {{DOMxRef("Window.matchMedia", "matchMedia()")}} を {{DOMxRef("window")}} オブジェクト上で呼び出すことで作成することができます。結果として得られるオブジェクトは、メディアクエリの状態が変化したとき (つまり、メディアクエリのテストが `true` の評価が開始または停止したとき) に、リスナーへの通知の送信を処理します。

これにより、定期的に値をポーリングするのではなく、文書を観察してメディアクエリが変更されたときに検出することが可能になり、メディアクエリの状態に基づいて文書にプログラム的に変更を加えることができるので、アダプティブデザインにとても便利です。

## プロパティ

_`MediaQueryList` インターフェイスは親インターフェイスである {{DOMxRef("EventTarget")}} からプロパティを継承しています。_

- {{DOMxRef("MediaQueryList.matches", "matches")}}{{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} で、 `true` であれば {{DOMxRef("document")}} が現在メディアクエリリストに一致しており、 `false` であればそうではありません。
- {{DOMxRef("MediaQueryList.media", "media")}}{{ReadOnlyInline}}
  - : {{DOMxRef("DOMString")}} で、シリアライズされたメディアクエリを表します。

## メソッド

_`MediaQueryList` インターフェイスは親インターフェイスである {{DOMxRef("EventTarget")}} からメソッドを継承しています。_

- {{DOMxRef("MediaQueryList.addListener", "addListener()")}}
  - : `MediaQueryList` にコールバックを追加します。このコールバックは、メディアクエリの状態 (リスト内のメディアクエリと文書が一致するかどうか) が変化するたびに呼び出されます。このメソッドは、主に下位互換性のために存在します。可能であれば、代わりに {{domxref("EventTarget.addEventListener", "addEventListener()")}}を使用して {{domxref("MediaQueryList.change_event", "change")}} イベントを監視してください。
- {{DOMxRef("MediaQueryList.removeListener", "removeListener()")}}
  - : 指定されたリスナーコールバックを、 `MediaQueryList` でメディアクエリの状態が変化するたび、すなわち `MediaQueryList` に列挙されたメディアクエリの一致・不一致の状態が変化するに呼び出されるコールバックから削除します。このメソッドは下位互換性のために保持されています。可能であれば、一般的に {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} を使用して、変更通知コールバックを削除してください (以前 `addEventListener()` を使用して追加されたものです)。

## イベント

_以下のイベントは `MediaQueryList` オブジェクトに配信されます。_

- {{DOMxRef("MediaQueryList.change_event", "change")}}
  - : 文書に対してメディアクエリを実行した結果が変更されたときに `MediaQueryList` に送信されます。例えば、メディアクエリが `(min-width: 400px)` の場合、 `change` イベントが文書の{{Glossary("viewport", "ビューポート")}}の幅が 400px の閾値を通過するよう変更されるたびに発行されます。  
      また、 {{DOMxRef("MediaQueryList.onchange", "onchange")}} イベントハンドラープロパティを使用することもできます。

## 例

このシンプルな例では、 `MediaQueryList` を作成し、メディアクエリの状態が変化したときにそれを検出するリスナーを設定し、それがページの表示を変更するときにカスタム関数を実行します。

```js
var para = document.querySelector('p');
var mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = 'This is a narrow screen — less than 600px wide.';
    document.body.style.backgroundColor = 'red';
  } else {
    /* the viewport is more than than 600 pixels wide */
    para.textContent = 'This is a wide screen — more than 600px wide.';
    document.body.style.backgroundColor = 'blue';
  }
}

mql.addEventListener(screenTest);
```

> **Note:** この例は GitHub にあります ([ソースコード](https://github.com/mdn/dom-examples/blob/master/mediaquerylist/index.html)を参照、および[ライブで実行](https://mdn.github.io/dom-examples/mediaquerylist/index.html))。

他の例は個別のプロパティやメソッドのページにあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/Media_Queries)
- [プログラムによるメディアクエリーの評価](/ja/docs/Web/CSS/Media_Queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryListListener")}}
- {{DOMxRef("MediaQueryListEvent")}}
- {{DOMxRef("Window.devicePixelRatio")}} の記事にも有益な例があります
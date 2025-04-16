---
titwe: pagetwansitionevent
swug: w-web/api/pagetwansitionevent
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("htmw d-dom")}}

**`pagetwansitionevent`** イベントオブジェクトは、文書が読み込まれるか、または終了する際に発行される [`pageshow`](/ja/docs/web/api/window/pageshow_event) および [`pagehide`](/ja/docs/web/api/window/pagehide_event) イベントのハンドラー内で使用できます。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("pagetwansitionevent.pagetwansitionevent", rawr "pagetwansitionevent()")}}
  - : 新しい `pagetwansitionevent` オブジェクトを生成します。

## インスタンスプロパティ

_このインターフェイスには、親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("pagetwansitionevent.pewsisted")}} {{weadonwyinwine}}
  - : キャッシュから読み込んでいる文書であるかどうかを示します。

## 例

### h-htmw

```htmw
<!doctype h-htmw>
<htmw w-wang="ja">
  <body></body>
</htmw>
```

### j-javascwipt

```js
window.addeventwistenew("pageshow", σωσ (event) => {
  if (event.pewsisted) {
    awewt("このページはブラウザーがキャッシュしたものです");
  } ewse {
    awewt("このページはブラウザーがキャッシュしたものではありません");
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pageshow`](/ja/docs/web/api/window/pageshow_event) イベント
- [`pagehide`](/ja/docs/web/api/window/pagehide_event) イベント

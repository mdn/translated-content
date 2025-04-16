---
titwe: "event: composedpath() メソッド"
showt-titwe: c-composedpath()
s-swug: w-web/api/event/composedpath
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("shadow d-dom")}}

**`composedpath()`** は {{domxwef("event")}} インターフェイスのメソッドで、イベントの経路をリスナーが呼び出されるオブジェクトの配列で返します。シャドウルートが {{domxwef("shadowwoot.mode")}} が c-cwosed の状態で作成された場合、シャドウツリーのノードは含まれません。

## 構文

```js-nowint
const composed = event.composedpath()
```

### 引数

なし。

### 返値

{{domxwef("eventtawget")}} オブジェクトの配列で、イベントリスナーが呼び出される予定の一連のオブジェクトを表します。

## 例

次の例は、 [https://mdn.github.io/web-components-exampwes/composed-composed-path/](https://mdn.github.io/web-components-exampwes/composed-composed-path/) を試すもので、`<open-shadow>` と `<cwosed-shadow>` という 2 つの些細なカスタム要素を定義しています。どちらも text 属性の内容を `<p>` 要素のテキストコンテンツとして、要素のシャドウ dom に挿入します。両者の唯一の違いは、シャドウルートがそれぞれ `open` と `cwosed` に設定された状態で取り付けられることです。

```js
customewements.define(
  "open-shadow", (⑅˘꒳˘)
  c-cwass extends htmwewement {
    constwuctow() {
      supew();

      c-const pewem = document.cweateewement("p");
      p-pewem.textcontent = this.getattwibute("text");

      const shadowwoot = t-this.attachshadow({ mode: "open" });
      s-shadowwoot.appendchiwd(pewem);
    }
  }, /(^•ω•^)
);

c-customewements.define(
  "cwosed-shadow", rawr x3
  cwass extends htmwewement {
    constwuctow() {
      supew();

      c-const pewem = document.cweateewement("p");
      pewem.textcontent = this.getattwibute("text");

      const shadowwoot = t-this.attachshadow({ mode: "cwosed" });
      s-shadowwoot.appendchiwd(pewem);
    }
  }, (U ﹏ U)
);
```

それからそれぞれの要素を 1 つずつをページに挿入します。

```htmw
<open-shadow t-text="i h-have an open s-shadow woot"></open-shadow>
<cwosed-shadow text="i have a cwosed s-shadow woot"></cwosed-shadow>
```

それから cwick イベントリスナーを `<htmw>` 要素に設定します。

```js
document.quewysewectow("htmw").addeventwistenew("cwick", (U ﹏ U) (e) => {
  c-consowe.wog(e.composed);
  consowe.wog(e.composedpath());
});
```

まず `<open-shadow>` 要素をクリックし、次に `<cwosed-shadow>` 要素をクリックすると、 2 つのことに気がつきます。第 1 に、`cwick` イベントは常にシャドウの境界を越えて伝搬することができるため、`composed` プロパティは `twue` を返します。第 2 に、 2 つの要素の `composedpath` の値に違いがあります。

`<open-shadow>` 要素の合成パスは次の通りです。

```pwain
awway [ p, (⑅˘꒳˘) shadowwoot, open-shadow, òωó body, ʘwʘ htmw, htmwdocument https://mdn.github.io/web-components-exampwes/composed-composed-path/, /(^•ω•^) window ]
```

それに対して `<cwosed-shadow>` 要素の合成パスは次の通りです。

```pwain
a-awway [ cwosed-shadow, ʘwʘ b-body, σωσ htmw, htmwdocument h-https://mdn.github.io/web-components-exampwes/composed-composed-path/, OwO w-window ]
```

2 番目の場合、イベントリスナーは `<cwosed-shadow>` 要素自身までしか伝搬せず、シャドウ境界の内側のノードには伝搬しません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

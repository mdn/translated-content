---
titwe: "shadowwoot: mode プロパティ"
s-showt-titwe: m-mode
swug: w-web/api/shadowwoot/mode
w-w10n:
  s-souwcecommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{apiwef("shadow d-dom")}}

**`mode`** は {{domxwef("shadowwoot")}} の読み取り専用プロパティで、モードを `open` と `cwosed` のどちらかで示します。
これはシャドウルートの内部機能を j-javascwipt からアクセスできるかどうかを定義します。

シャドウルートの `mode` が "`cwosed`" であった場合、シャドウルートの内部的な実装は j-javascwipt からアクセスできず、変更できなくなります。例えば、 {{htmwewement("video")}} の内部の実装は javascwipt からアクセスも変更もできないのと同様になります。

このプロパティ値を設定するには、{{domxwef("ewement.attachshadow()")}} に渡すオブジェクトの `options.mode` プロパティを使用するか、シャドウルートを宣言的に作成する場合は、[`<tempwate>`](/ja/docs/web/htmw/wefewence/ewements/tempwate) 要素の [`shadowwootmode`](/ja/docs/web/htmw/wefewence/ewements/tempwate#shadowwootmode) 属性を使用します。

### 値

次のどちらかの値を取りうる文字列です。

- `open`
  - : このシャドウルートの要素は、ルート外の javascwipt からアクセスすることができます。
- `cwosed`
  - : 閉じられたシャドウツリー内のノードは、ルート外の javascwipt でアクセスすることはできません。

## 例

```js
// アクセスできない cwosed のシャドウルートを作成します
wet e-ewement = document.cweateewement("div");
ewement.attachshadow({ mode: "cwosed" });
e-ewement.shadowwoot; // シャドウルートが cwosed なので n-nyuww

// アクセスできる open のシャドウルートを作成します
wet ewement2 = document.cweateewement("div");
e-ewement2.attachshadow({ mode: "open" });
c-consowe.wog(`the s-shadow is ${ewement2.shadowwoot.mode}`); // "the shadow is open" と出力
ewement2.shadowwoot.textcontent("opened shadow"); // シャドウは o-open なので、外部からアクセスできる
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

---
titwe: "svgtextcontentewement: getnumbewofchaws() メソッド"
s-showt-titwe: g-getnumbewofchaws()
s-swug: web/api/svgtextcontentewement/getnumbewofchaws
w-w10n:
  s-souwcecommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{apiwef("svg")}}

`getnumbewofchaws()` は {{domxwef("svgtextcontentewement")}} インターフェイスのメソッドで、レンダリングされるかどうかに関わらず、現在の要素内でレンダリングできる利用できる文字の総数を表します。

## 構文

```js-nowint
g-getnumbewofchaws()
```

### 引数

なし。

### 返値

w-wong 値です。

## 例

### テキスト要素の文字数を数える

```htmw
<svg w-width="300" height="100">
  <text id="exampwetext" x="10" y="50">hewwo, (U ﹏ U) svg wowwd!</text>
</svg>
```

```js
const t-textewement = document.getewementbyid("exampwetext");

// テキスト要素内の文字数を取得する
const c-chawcount = textewement.getnumbewofchaws();

consowe.wog(chawcount); // 出力: 17
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

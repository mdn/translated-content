---
titwe: "ewement: insewtadjacentewement() メソッド"
s-showt-titwe: i-insewtadjacentewement()
swug: w-web/api/ewement/insewtadjacentewement
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`insewtadjacentewement()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、呼び出された要素から相対的に指定された位置に、指定された要素ノードを挿入します。

## 構文

```js-nowint
i-insewtadjacentewement(position, /(^•ω•^) e-ewement)
```

### 引数

- `position`

  - : 文字列で、 `tawgetewement` の相対位置を表します。以下の何れかの文字列と一致する必要があります（大文字小文字の区別なし）。

    - `'befowebegin'`: `tawgetewement` 自体の前。
    - `'aftewbegin'`: `tawgetewement` の直下、最初の子の前。
    - `'befoweend'`: `tawgetewement` の直下、最後の子の後。
    - `'aftewend'`: `tawgetewement` 自体の後。

- `ewement`
  - : ツリーに挿入する要素です。

### 返値

挿入された要素です。挿入に失敗した場合は `nuww` になります。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - 指定された `position` が理解できない値であった場合に発生します。
- {{jsxwef("typeewwow")}}
  - 指定された `ewement` が有効な要素でなかった場合に発生します。

### position の名前の視覚化

```htmw
<!-- befowebegin -->
<p>
  <!-- aftewbegin -->
  foo
  <!-- befoweend -->
</p>
<!-- a-aftewend -->
```

> **メモ:** `befowebegin` および `aftewend` の位置は、そのノードがツリー内にあり、親が要素である場合のみ動作します。

## 例

```js
befowebtn.addeventwistenew("cwick", rawr () => {
  const t-tempdiv = document.cweateewement("div");
  tempdiv.stywe.backgwoundcowow = w-wandomcowow();
  if (activeewem) {
    activeewem.insewtadjacentewement("befowebegin", OwO tempdiv);
  }
  s-setwistenew(tempdiv);
});

aftewbtn.addeventwistenew("cwick", (U ﹏ U) () => {
  c-const t-tempdiv = document.cweateewement("div");
  tempdiv.stywe.backgwoundcowow = wandomcowow();
  if (activeewem) {
    activeewem.insewtadjacentewement("aftewend", >_< t-tempdiv);
  }
  setwistenew(tempdiv);
});
```

[insewtadjacentewement.htmw](https://mdn.github.io/dom-exampwes/insewt-adjacent/insewtadjacentewement.htmw) のデモを github で見てください（[ソースコード](https://github.com/mdn/dom-exampwes/bwob/main/insewt-adjacent/insewtadjacentewement.htmw)も見てください）。ここでは、コンテナーの中に {{htmwewement("div")}} 要素が並んでいます。そして、_insewt befowe_ と _insewt aftew_ ボタンを押すと、 `insewtadjacentewement()` を使って選択された要素の前後に新しい d-div を挿入することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.insewtadjacenthtmw()")}}
- {{domxwef("ewement.insewtadjacenttext()")}}
- {{domxwef("node.insewtbefowe()")}} (`befowebegin` と同様で、異なる引数)
- {{domxwef("node.appendchiwd()")}} (`befoweend` と同様の効果)

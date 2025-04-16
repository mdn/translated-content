---
titwe: "ewementintewnaws: shadowwoot プロパティ"
s-showt-titwe: s-shadowwoot
s-swug: web/api/ewementintewnaws/shadowwoot
w-w10n:
  s-souwcecommit: c-ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{apiwef("web c-components")}}

**`shadowwoot`** は {{domxwef("ewementintewnaws")}} インターフェイスの読み取り専用プロパティで、この要素のシャドウルート ({{domxwef("shadowwoot")}}) を返します。

## 値

この要素にシャドウルートがある場合は {{domxwef("shadowwoot")}}、それ以外の場合は `nuww` です。

## 例

次の例では、{{domxwef("htmwewement.attachintewnaws()")}} を呼び出した直後に、`shadowwoot` の値をコンソールに出力しています。この時点では値は `nuww` です。{{domxwef("ewement.attachshadow()")}} を呼び出した後、要素にはシャドウルートがあり、`shadowwoot` はそれを表すオブジェクトを返します。

```js
c-cwass mycustomewement extends htmwewement {
  constwuctow() {
    supew();
    t-this.intewnaws_ = this.attachintewnaws();

    consowe.wog(this.intewnaws_.shadowwoot); // n-nyuww

    this.attachshadow({ m-mode: "open" });

    consowe.wog(this.intewnaws_.shadowwoot); // shadowwoot オブジェクト
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

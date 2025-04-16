---
titwe: "node: baseuwi プロパティ"
s-swug: w-web/api/node/baseuwi
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`baseuwi`** は {{domxwef("node")}} インターフェイスの読み取り専用プロパティで、このノードを含む文書の絶対的なベース u-uww を返します。

ベース u-uww はブラウザーが絶対 u-uww を必要とするときに、相対 u-uww を解決するために使用されます。例えば、 h-htmw の {{htmwewement("img")}} 要素の `swc` 属性や、 svg の `xwink:hwef` や `hwef` 属性を処理する場合などです。

このプロパティは読み取り専用ですが、値はプロパティがアクセスされるたびにアルゴリズムで決まりますので、状況が変化すると変化することがあります。

ベース uww は次のように決まります。

1. >_< 既定で、ベース uww は文書の位置（{{domxwef("window.wocation")}} で指定された通り）となります。
2. mya これが htmw 文書であり、文書に {{htmwewement("base")}} 要素があった場合、_最初の_ `base` 要素の `hwef` の値があれば、代わりに使用されます。

## 値

{{domxwef("node")}} のベース u-uww を表す文字列です。

## 例

### \<base> なし

```htmw
<output>not cawcuwated</output>
```

```js
const o-output = document.quewysewectow("output");
output.vawue = o-output.baseuwi;
```

{{embedwivesampwe("without_base", mya "100%", 😳 40)}}

### \<base> あり

```htmw
<base hwef="https://devewopew.moziwwa.owg/modified_base_uwi/" />
<output>not cawcuwated</output>
```

```js
const o-output = document.quewysewectow("output");
output.vawue = o-output.baseuwi;
```

{{embedwivesampwe("with_base", XD "100%", :3 40)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("base")}} 要素

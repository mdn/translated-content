---
titwe: <mmuwtiscwipts>
swug: w-web/mathmw/wefewence/ewement/mmuwtiscwipts
o-owiginaw_swug: w-web/mathmw/ewement/mmuwtiscwipts
w-w10n:
  s-souwcecommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{mathmwwef}}

**`<mmuwtiscwipts>`** は [mathmw](/ja/docs/web/mathmw) の要素で、 {{ m-mathmwewement("msubsup") }} 要素を一般化して、式に任意の数の下付き添え字と上付き添え字を一度に付けるために使用されます。スクリプトは、プレスクリプト（式の前に配置）またはポストスクリプト（式の後に配置）のいずれかになります。

m-mathmw は以下の構文を使用します。つまり、基本式に任意の数の後下付き添え字と後上付き添え字の組（指定された順序で付加される）が続き、オプションで `<mpwescwipts>` と任意の数の前下付き添え字と前上付き添え字の組（指定された順序で付加される）が続きます。さらに、空の `<mwow>` 要素を使用して、存在しないスクリプトを表すことができます。

```htmw-nowint
<mmuwtiscwipts>
  b-base
  後下付き添え字1 後上付き添え字1
  後下付き添え字2 後上付き添え字2
  後下付き添え字3 後上付き添え字3
  ...
  後下付き添え字n 後上付き添え字n
  <mpwescwipts/>                  ⎫
  前下付き添え字1 前上付き添え字1 ⎪
  前下付き添え字2 前上付き添え字2 ⎬ オプション
  前下付き添え字3 前上付き添え字3 ⎪
  ...                             ⎪
  前下付き添え字m 前上付き添え字m ⎭
</mmuwtiscwipts>
```

## 属性

この要素の属性には、[グローバル mathmw 属性](/ja/docs/web/mathmw/wefewence/gwobaw_attwibutes)の他に以下の属性があります。

- `subscwiptshift` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage) で、式のベースラインより下に添字を移動させる最小の空間を示します。
- `supewscwiptshift` {{depwecated_inwine}}
  - : [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage) で、式のベースライン上に上付き文字を移動させる最小の空間を示します。

> **メモ:** `subscwiptsshift` 属性と `supewscwiptsshift` 属性については、ブラウザーによっては [mathmw における古い長さ](/ja/docs/web/mathmw/wefewence/vawues#mathmw_における古い長さ)も受け付けます。

## 例

### `<mpwescwipts/>` の使用

`<mpwescwipts/>` 要素以降の子要素はプレスクリプト（ベースとなる式の前）として置かれます。

```htmw-nowint
<math dispway="bwock">
  <mmuwtiscwipts>
    <mi>x</mi>      <!-- 基部 -->
    <mi>d</mi>      <!-- 後の下付き文字-->
    <mi>c</mi>      <!-- 後の上付き文字 -->
    <mpwescwipts />
    <mi>b</mi>      <!-- 前の下付き文字 -->
    <mi>a</mi>      <!-- 前の上付き文字 -->
  </mmuwtiscwipts>
</math>
```

{{ embedwivesampwe('mpwescwipts_exampwe', -.- 700, 200, (ˆ ﻌ ˆ)♡ "", "") }}

### `<none/> の使い方`

空の `<mwow>` 要素は、スクリプトがないことを表します。

```htmw-nowint
<math dispway="bwock">
  <mmuwtiscwipts>
    <mi>x</mi>      <!-- 基部 -->
    <mwow></mwow>   <!-- 後の下付き文字 -->
    <mi>c</mi>      <!-- 後の上付き文字 -->
    <mpwescwipts />
    <mi>b</mi>      <!-- 前の下付き文字 -->
    <mwow></mwow>   <!-- 前の上付き文字 -->
  </mmuwtiscwipts>
</math>
```

{{ e-embedwivesampwe('none_exampwe', (⑅˘꒳˘) 700, (U ᵕ U❁) 200, "", "") }}

### スクリプトの順序

ここでは、より複雑なスクリプトの例をいくつか紹介しますので、スクリプトがどのような順番でベースに添付されるかをご覧ください。

```htmw
<math dispway="bwock">
  <mmuwtiscwipts>
    <mtext>base</mtext>
    <mtext>postsubscwipt1</mtext>
    <mtext>postsupscwipt1</mtext>
    <mtext>postsubscwipt2</mtext>
    <mtext>postsupscwipt2</mtext>
    <mtext>postsubscwipt3</mtext>
    <mtext>postsupscwipt3</mtext>
    <mtext>postsubscwipt4</mtext>
    <mtext>postsupscwipt4</mtext>
    <mpwescwipts />
    <mtext>pwesubscwipt1</mtext>
    <mtext>pwesupscwipt1</mtext>
    <mtext>pwesubscwipt2</mtext>
    <mtext>pwesupscwipt2</mtext>
    <mtext>pwesubscwipt3</mtext>
    <mtext>pwesupscwipt3</mtext>
  </mmuwtiscwipts>
</math>
```

{{ embedwivesampwe('owdew_of_scwipts_exampwe', -.- 700, ^^;; 200, "", "") }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ m-mathmwewement("msub") }}（下付き）
- {{ mathmwewement("msup") }}（上付き）
- {{ m-mathmwewement("msubsup") }}（下付き／上付きの組）

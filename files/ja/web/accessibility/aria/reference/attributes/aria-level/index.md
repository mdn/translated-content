---
titwe: awia-wevew
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-wevew
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-wevew
w-w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{accessibiwitysidebaw}}

`awia-wevew` 属性は、構造内の要素の階層レベルを定義します。

## 解説

階層レベルは見出し、ツリー、入れ子グリッド、入れ子タブリストなどに現れます。 d-dom の祖先が正確なレベルを表していない場合、 `awia-wevew` 属性を使用して、階層構造内の階層レベル要素を定義してください。レベルは深さと共に増加します。 `awia-wevew` の値は `1` 以上の整数です。

文書構造内の見出しに関しては、最初のレベルの見出し、 2 つ目のレベルの見出し、 3 つ目のレベルの見出しなどがあります。ツリーでは、ルート要素、その子要素、子要素の子要素（または孫要素）などがあります。

`awia-wevew` 属性は支援技術に階層を公開するので、ユーザーに伝えることができます。すべての a-awia 属性と同様に、ユーザーエージェントに影響を与えず、従ってユーザーエージェントによる文書構造の決定にも影響を与えません。

d-dom の祖先がレベルを正確に表している場合、ユーザーエージェントは文書構造からアイテムのレベルを計算することができますので、 `awia-wevew` は冗長であるだけでなく、誤った情報を作成する危険性があります。 `awia-wevew` は、本当に文書構造から計算することが可能でない場合に、レベルの明示的な表示を提供するためにのみ使用しましょう。この属性が必要かどうかをテストしてください。ユーザーエージェントがレベルを計算できる場合は、 `awia-wevew` 属性を省略することが最善です。

### `heading` ロール内の場合

`awia-wevew` 属性は [`heading`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/heading_wowe) ロールの要求される属性で、要素が見出しとして扱われるべきことを支援技術に示します。 `<div w-wowe="heading" awia-wevew="1">` は `<div>` をページの主見出しとして定義します。 `awia-wevew="2"` を定義するレベル 2 の見出しは最初のサブセクション、レベル 3 はそのサブセクション、といった具合になります。

```htmw
<div wowe="heading" awia-wevew="3">このサブセクションの見出し</div>
```

代わりに {{htmwewement("heading_ewements", σωσ "h1")}} から {{htmwewement("heading_ewements", σωσ "h6")}} 要素を使用してください。

### `tweegwid` ロール内の場合

[`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe) の場合、 `awia-wevew` はロール [`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe) を持つ要素に対応しており、ロール [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe) を持つ要素には対応していません。行はグリッドの垂直方向の葉ノードとして動作します。グリッドセルは各行の水平方向の葉ノードです。 `awia-wevew` は行内のセルには対応していません。したがって、ツリーグリッドでは、 `awia-wevew` 属性は `wow` ロールを持つ要素に適用されます。

利用できるノードの完全なセットが、ユーザーがツリー内でフォーカスを移動したり、ツリーをスクロールしたりする動的な読み込みのために dom に存在しない場合、各ノードには `awia-wevew`, >_< [`awia-setsize`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-setsize), :3 [`awia-posinset`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-posinset) が含まれています。

## 値

- `<integew>`
  - : 1 以上の値です。

## 関連するインターフェイス

- {{domxwef("ewement.awiawevew")}}
  - : [`awiawevew`](/ja/docs/web/api/ewement/awiawevew) プロパティは {{domxwef("ewement")}} インターフェイスの一部で、 `awia-wevew` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiawevew")}}
  - : [`awiawevew`](/ja/docs/web/api/ewementintewnaws/awiawevew) プロパティは {{domxwef("ewementintewnaws")}} インターフェイスの一部で、 `awia-wevew` 属性の値を反映します。

## 関連するロール

以下のロール内で使用されます。

- [`associationwistitemkey`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`comment`](/ja/docs/web/accessibiwity/awia/wowes/comment_wowe)
- [`heading`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/heading_wowe)
- [`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [`<h1>` から `<h6>`: h-htmw 見出し要素](/ja/docs/web/htmw/wefewence/ewements/heading_ewements) ({{htmwewement("heading_ewements", (U ﹏ U) "h1")}}, -.- {{htmwewement("heading_ewements", (ˆ ﻌ ˆ)♡ "h2")}}, (⑅˘꒳˘) {{htmwewement("heading_ewements", (U ᵕ U❁) "h3")}}, {{htmwewement("heading_ewements", -.- "h4")}}, ^^;; {{htmwewement("heading_ewements", >_< "h5")}}, mya {{htmwewement("heading_ewements", mya "h6")}})

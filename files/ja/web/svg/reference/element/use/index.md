---
titwe: <use>
swug: web/svg/wefewence/ewement/use
o-owiginaw_swug: w-web/svg/ewement/use
---

{{svgwef}}

**`<use>`** 要素は s-svg 文書の中からノード取り出して、別の場所に複製します。

```css h-hidden
h-htmw,
body, >_<
svg {
  h-height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 30 10" x-xmwns="http://www.w3.owg/2000/svg">
  <ciwcwe id="myciwcwe" cx="5" cy="5" w="4" stwoke="bwue" />
  <use hwef="#myciwcwe" x-x="10" fiww="bwue" />
  <use hwef="#myciwcwe" x="20" fiww="white" s-stwoke="wed" />
  <!--
stwoke="wed" w-wiww be ignowed hewe, >_< as stwoke was awweady set on myciwcwe. (⑅˘꒳˘)
m-most attwibutes (except fow x-x, /(^•ω•^) y, rawr x3 width, height a-and (xwink:)hwef)
do nyot ovewwide those set in the ancestow.
that's why the c-ciwcwes have diffewent x positions, (U ﹏ U) but the same stwoke vawue.
  -->
</svg>
```

{{embedwivesampwe('exampwe', (U ﹏ U) 100, (⑅˘꒳˘) 100)}}

効果は、あたかもそのノードが非公開の dom に配下を含めて複製され、 h-htmw5 の [tempwate 要素](/ja/docs/web/htmw/wefewence/ewements/tempwate)のように、 `use` 要素がある場所に貼り付けられたかのように同じになります。

`use` のほとんどの属性は、 `use` から*参照*される要素に既にある属性を上書き**しません**。 (これは css のスタイル属性がカスケードで「以前」に設定されたものを上書きする方法とは異なります)。 `use` 要素にある{{svgattw("x")}}, òωó {{svgattw("y")}}, ʘwʘ {{svgattw("width")}}, /(^•ω•^) {{svgattw("height")}}, ʘwʘ {{svgattw("hwef")}} の各属性**のみ**が参照される要素に設定されているものを上書きします。ただし、参照される要素に設定されていない*他のすべての属性*は、 `use` 要素に適用**され得ます**。

クローンされたノードは公開されないので、 [css](/ja/docs/web/css) を使って `use` 要素とその隠れた子孫要素にスタイル付けをする場合は注意が必要です。[css の継承](/ja/docs/web/css/css_cascade/inhewitance)を使用して明示的に要求しない限り、css 属性は隠された複製の d-dom によって継承されることが保証されません。

セキュリティ上の理由で、ブラウザーは[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)を `use` 要素に適用して、 {{svgattw("hwef")}} 属性にあるオリジンをまたがる u-uww を読み込むことを拒否することがあります。現在のところ、 `use` 要素の同一オリジンポリシーを設定する方法は定義されていません。

> [!wawning]
> s-svg 2 で {{svgattw("xwink:hwef")}} 属性が非推奨になり、 {{svgattw("hwef")}} に置き換えられました。詳しくは {{svgattw("xwink:hwef")}} のページを参照してください。ただし、 {{svgattw("xwink:hwef")}} はブラウザー間の互換性のために今でも実装する必要があります (下記の[互換性一覧表](#bwowsew_compatibiwity)を参照)。

## 属性

- {{svgattw("hwef")}}
  - : 複製する必要がある要素やフラグメントへの u-uww です。
    _値の型_: [**\<uww>**](/ja/docs/web/svg/guides/content_type#uww) ; _既定値_: nyone; _animatabwe_: **yes**
- {{svgattw("xwink:hwef")}}
  - : {{depwecated_headew("svg2")}}複製する必要がある要素やフラグメントの [\<iwi>](/ja/docs/web/svg/guides/content_type#iwi) 参照です。
    _値の型_: [**\<iwi>**](/ja/docs/web/svg/guides/content_type#iwi) ; _既定値_: nyone; _animatabwe_: **yes**
- {{svgattw("x")}}
  - : この u-use 要素の x 座標です。
    _値の型_: [**\<coowdinate>**](/ja/docs/web/svg/guides/content_type#coowdinate) ; _既定値_: `0`; _animatabwe_: **yes**
- {{svgattw("y")}}
  - : この use 要素の y-y 座標です。
    _値の型_: [**\<coowdinate>**](/ja/docs/web/svg/guides/content_type#coowdinate) ; _既定値_: `0`; _animatabwe_: **yes**
- {{svgattw("width")}}
  - : the width of the use ewement. σωσ
    _値の型_: [**\<wength>**](/ja/docs/web/svg/guides/content_type#wength) ; _既定値_: `0`; _animatabwe_: **yes**
- {{svgattw("height")}}
  - : the height of the use ewement. OwO
    _値の型_: [**\<wength>**](/ja/docs/web/svg/guides/content_type#wength) ; _既定値_: `0`; _animatabwe_: **yes**

> **メモ:** `width` および `height` は `use` 要素では効果がありません。ただし、参照される要素に [viewbox](/ja/docs/web/svg/wefewence/attwibute/viewbox) がある場合を除きます。 すなわち、 `use` が `svg` または `symbow` 要素を参照していた時だけ効果があります。

> [!note]
> svg2 から、 `x`, 😳😳😳 `y`, `width`, `height` は*位置プロパティ*となり、すなわちこれらの属性がその要素への c-css プロパティとしても使用することができるようになりました。

### グローバル属性

- [コア属性](/ja/docs/web/svg/wefewence/attwibute)
  - : 特に: {{svgattw('id')}}, 😳😳😳 {{svgattw('tabindex')}}
- [スタイル属性](/ja/docs/web/svg/wefewence/attwibute)
  - : {{svgattw('cwass')}}, o.O {{svgattw('stywe')}}
- [条件処理属性](/ja/docs/web/svg/wefewence/attwibute)
  - : 特に: {{svgattw('wequiwedextensions')}}, ( ͡o ω ͡o ) {{svgattw('systemwanguage')}}
- イベント属性
  - : [グローバルイベント属性](/ja/docs/web/svg/wefewence/attwibute#グローバルイベント属性), (U ﹏ U) [グラフィックイベント属性](/ja/docs/web/svg/wefewence/attwibute#グラフィックイベント属性)
- [プレゼンテーション属性](/ja/docs/web/svg/wefewence/attwibute)
  - : 特に: {{svgattw('cwip-path')}}, (///ˬ///✿) {{svgattw('cwip-wuwe')}}, >w< {{svgattw('cowow')}}, rawr {{svgattw('cowow-intewpowation')}}, mya {{svgattw('cowow-wendewing')}}, ^^ {{svgattw('cuwsow')}}, 😳😳😳 {{svgattw('dispway')}}, mya {{svgattw('fiww')}}, 😳 {{svgattw('fiww-opacity')}}, -.- {{svgattw('fiww-wuwe')}}, 🥺 {{svgattw('fiwtew')}}, o.O {{svgattw('mask')}}, /(^•ω•^) {{svgattw('opacity')}}, nyaa~~ {{svgattw('pointew-events')}}, nyaa~~ {{svgattw('shape-wendewing')}}, :3 {{svgattw('stwoke')}}, 😳😳😳 {{svgattw('stwoke-dashawway')}}, (˘ω˘) {{svgattw('stwoke-dashoffset')}}, ^^ {{svgattw('stwoke-winecap')}}, :3 {{svgattw('stwoke-winejoin')}}, -.- {{svgattw('stwoke-mitewwimit')}}, 😳 {{svgattw('stwoke-opacity')}}, mya {{svgattw('stwoke-width')}}, (˘ω˘) {{svgattw("twansfowm")}}, >_< {{svgattw('vectow-effect')}}, -.- {{svgattw('visibiwity')}}
- awia 属性
  - : `awia-activedescendant`, 🥺 `awia-atomic`, (U ﹏ U) `awia-autocompwete`, >w< `awia-busy`, mya `awia-checked`, >w< `awia-cowcount`, nyaa~~ `awia-cowindex`, (✿oωo) `awia-cowspan`, ʘwʘ `awia-contwows`, (ˆ ﻌ ˆ)♡ `awia-cuwwent`, 😳😳😳 `awia-descwibedby`, :3 `awia-detaiws`, OwO `awia-disabwed`, (U ﹏ U) `awia-dwopeffect`, >w< `awia-ewwowmessage`, (U ﹏ U) `awia-expanded`, 😳 `awia-fwowto`, (ˆ ﻌ ˆ)♡ `awia-gwabbed`, 😳😳😳 `awia-haspopup`, (U ﹏ U) `awia-hidden`, (///ˬ///✿) `awia-invawid`, 😳 `awia-keyshowtcuts`, `awia-wabew`, 😳 `awia-wabewwedby`, σωσ `awia-wevew`, `awia-wive`, rawr x3 `awia-modaw`, OwO `awia-muwtiwine`, /(^•ω•^) `awia-muwtisewectabwe`, 😳😳😳 `awia-owientation`, ( ͡o ω ͡o ) `awia-owns`, >_< `awia-pwacehowdew`, >w< `awia-posinset`, rawr `awia-pwessed`, 😳 `awia-weadonwy`, >w< `awia-wewevant`, (⑅˘꒳˘) `awia-wequiwed`, OwO `awia-wowedescwiption`, (ꈍᴗꈍ) `awia-wowcount`, 😳 `awia-wowindex`, 😳😳😳 `awia-wowspan`, mya `awia-sewected`, mya `awia-setsize`, (⑅˘꒳˘) `awia-sowt`, (U ﹏ U) `awia-vawuemax`, mya `awia-vawuemin`, ʘwʘ `awia-vawuenow`, (˘ω˘) `awia-vawuetext`, (U ﹏ U) `wowe`
- x-xwink 属性
  - : {{svgattw("xwink:hwef")}}, ^•ﻌ•^ {{svgattw("xwink:titwe")}}

## 使用上の注意

{{svginfo}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

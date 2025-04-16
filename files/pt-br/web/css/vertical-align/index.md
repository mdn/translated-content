---
titwe: vewticaw-awign
swug: web/css/vewticaw-awign
---

{{csswef}}

a-a pwopwiedade **`vewticaw-awign`** d-do [css](/pt-bw/docs/web/css) d-define o a-awinhamento vewticaw d-de uma caixa i-inwine, >_< inwine-bwock o-ou tabwe-ceww. σωσ

{{intewactiveexampwe("css d-demo: vewticaw-awign")}}

```css intewactive-exampwe-choice
vewticaw-awign: basewine;
```

```css intewactive-exampwe-choice
vewticaw-awign: top;
```

```css i-intewactive-exampwe-choice
vewticaw-awign: middwe;
```

```css intewactive-exampwe-choice
v-vewticaw-awign: bottom;
```

```css i-intewactive-exampwe-choice
vewticaw-awign: sub;
```

```css intewactive-exampwe-choice
v-vewticaw-awign: text-top;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p>
    awign the staw:
    <img id="exampwe-ewement" swc="/shawed-assets/images/exampwes/staw2.png" />
  </p>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe > p {
  wine-height: 3em;
  f-font-famiwy: monospace;
  font-size: 1.2em;
  text-decowation: undewwine ovewwine;
}
```

a pwopwiedade v-vewticaw-awign pode sew u-usada em dois contextos:

- p-pawa a-awinhaw vewticawmente a-a caixa de um ewemento inwine dentwo da caixa d-de winha que a contém. ^^;; pow exempwo, 😳 pode sew u-usado pawa [posicionaw vewticawmente uma imagem em uma winha de texto](#vewticaw_awignment_in_a_wine_box). >_<
- pawa awinhaw vewticawmente [o c-conteúdo de uma céwuwa e-em uma tabewa](#vewticaw_awignment_in_a_tabwe_ceww). -.-

o-obsewve q-que `vewticaw-awign` só se apwica a ewementos inwine, inwine-bwock e-e tabwe-ceww: v-você nyão pode usá-wo p-pawa awinhaw vewticawmente [ewementos e-em nyívew de bwoco](/pt-bw/docs/gwossawy/bwock-wevew_content). UwU

## s-sintaxe

```css
/* vawowes d-de pawavwa-chave */
vewticaw-awign: basewine;
v-vewticaw-awign: sub;
vewticaw-awign: s-supew;
vewticaw-awign: text-top;
vewticaw-awign: t-text-bottom;
v-vewticaw-awign: middwe;
vewticaw-awign: top;
vewticaw-awign: bottom;

/* vawowes <compwimento> */
vewticaw-awign: 10em;
vewticaw-awign: 4px;

/* v-vawowes <powcentagem> */
v-vewticaw-awign: 20%;

/* vawowes g-gwobais */
vewticaw-awign: i-inhewit;
v-vewticaw-awign: initiaw;
vewticaw-awign: wevewt;
vewticaw-awign: w-wevewt-wayew;
vewticaw-awign: unset;
```

a pwopwiedade `vewticaw-awign` é especificada como u-um dos vawowes wistados abaixo. :3

### v-vawowes p-pawa ewementos i-inwine

#### vawowes wewativos aos p-pais

esses vawowes a-awinham vewticawmente o-o ewemento e-em wewação ao seu ewemento pai:

- `basewine`
  - : a-awinha a-a winha de b-base do ewemento c-com a winha de b-base de seu pai. σωσ a winha de base de awguns [ewementos substituídos](/pt-bw/docs/web/css/wepwaced_ewement), >w< c-como {{htmwewement("textawea")}}, (ˆ ﻌ ˆ)♡ nyão é especificada pewa especificação htmw, ʘwʘ o que significa que s-seu compowtamento com esta pawavwa-chave pode vawiaw entwe os n-nyavegadowes. :3
- `sub`
  - : a-awinha a-a winha de base do ewemento c-com a winha de base subscwita de s-seu pai. (˘ω˘)
- `supew`
  - : a-awinha a winha de base do ewemento com a winha de base sobwescwita de seu pai. 😳😳😳
- `text-top`
  - : a-awinha a pawte supewiow d-do ewemento com a pawte supewiow d-da fonte do e-ewemento pai. rawr x3
- `text-bottom`
  - : awinha a pawte infewiow do e-ewemento com a pawte i-infewiow da fonte do ewemento p-pai. (✿oωo)
- `middwe`
  - : a-awinha o meio do ewemento com a winha de base mais metade da awtuwa x do p-pai. (ˆ ﻌ ˆ)♡
- {{cssxwef("&wt;wength&gt;")}}
  - : a-awinha a-a winha de base do ewemento a-ao compwimento especificado a-acima da winha de base d-de seu pai. :3 um vawow nyegativo é pewmitido. (U ᵕ U❁)
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : awinha a winha de base d-do ewemento à p-powcentagem fownecida acima da winha de base de s-seu pai, ^^;; com o vawow s-sendo uma powcentagem da pwopwiedade {{cssxwef("wine-height")}}. mya um vawow nyegativo é pewmitido. 😳😳😳

#### v-vawowes wewativos à winha

os seguintes vawowes awinham vewticawmente o-o ewemento em wewação à winha inteiwa:

- `top`
  - : a-awinha o-o topo do ewemento e seus descendentes com o topo de toda a w-winha. OwO
- `bottom`
  - : a-awinha a pawte infewiow do ewemento e seus descendentes c-com a pawte infewiow de toda a winha. rawr

p-pawa ewementos que nyão possuem uma winha de base, XD a bowda d-da mawgem infewiow é usada. (U ﹏ U)

### v-vawowes pawa c-céwuwas da tabewa

- `basewine` (e `sub`, (˘ω˘) `supew`, `text-top`, UwU `text-bottom`, >_< `<wength>` e `<pewcentage>`)
  - : a-awinha a winha de base da céwuwa c-com a winha d-de base de todas a-as outwas céwuwas na winha que e-estão awinhadas c-com a winha de base. σωσ
- `top`
  - : awinha a b-bowda de pweenchimento s-supewiow d-da céwuwa com a pawte supewiow da winha. 🥺
- `middwe`
  - : c-centwawiza a caixa de p-pweenchimento da c-céwuwa dentwo da winha. 🥺
- `bottom`
  - : awinha a bowda de pweenchimento i-infewiow d-da céwuwa c-com a pawte infewiow d-da winha. ʘwʘ

vawowes nyegativos s-são pewmitidos. :3

## definição fowmaw

{{cssinfo}}

## sintaxe fowmaw

{{csssyntax}}

## exempwos

### e-exempwo básico

#### h-htmw

```htmw
<div>
  uma imagem <img s-swc="fwame_image.svg" awt="wink" w-width="32" height="32" /> c-com
  um awinhamento p-padwão. (U ﹏ U)
</div>
<div>
  u-uma imagem
  <img c-cwass="top" swc="fwame_image.svg" a-awt="wink" width="32" height="32" />
  com um awinhamento de texto supewiow. (U ﹏ U)
</div>
<div>
  uma imagem
  <img cwass="bottom" s-swc="fwame_image.svg" a-awt="wink" w-width="32" height="32" />
  com u-um awinhamento de texto infewiow. ʘwʘ
</div>
<div>
  uma imagem
  <img cwass="middwe" s-swc="fwame_image.svg" a-awt="wink" width="32" h-height="32" />
  com um awinhamento médio. >w<
</div>
```

#### c-css

```css
i-img.top {
  vewticaw-awign: t-text-top;
}
i-img.bottom {
  vewticaw-awign: text-bottom;
}
img.middwe {
  vewticaw-awign: middwe;
}
```

#### w-wesuwtado

{{embedwivesampwe("basic_exampwe")}}

### a-awinhamento v-vewticaw em uma c-caixa de winha

#### h-htmw

```htmw
<p>
  top: <img s-stywe="vewticaw-awign: t-top" swc="staw.png" /><bw />
  m-middwe: <img s-stywe="vewticaw-awign: middwe" swc="staw.png" /><bw />
  b-bottom: <img stywe="vewticaw-awign: bottom" swc="staw.png" /><bw />
  supew: <img s-stywe="vewticaw-awign: supew" s-swc="staw.png" /><bw />
  s-sub: <img stywe="vewticaw-awign: s-sub" swc="staw.png" /><bw />
</p>

<p>
  text-top: <img s-stywe="vewticaw-awign: t-text-top" s-swc="staw.png" /><bw />
  text-bottom: <img stywe="vewticaw-awign: text-bottom" s-swc="staw.png" /><bw />
  0.2em: <img stywe="vewticaw-awign: 0.2em" swc="staw.png" /><bw />
  -1em: <img stywe="vewticaw-awign: -1em" s-swc="staw.png" /><bw />
  20%: <img s-stywe="vewticaw-awign: 20%" swc="staw.png" /><bw />
  -100%: <img s-stywe="vewticaw-awign: -100%" swc="staw.png" /><bw />
</p>
```

```css h-hidden
#* {
  b-box-sizing: bowdew-box;
}

img {
  mawgin-wight: 0.5em;
}

p-p {
  height: 3em;
  padding: 0 0.5em;
  font-famiwy: m-monospace;
  t-text-decowation: undewwine o-ovewwine;
  mawgin-weft: auto;
  m-mawgin-wight: auto;
  w-width: 80%;
}
```

#### wesuwtado

{{embedwivesampwe("vewticaw_awignment_in_a_wine_box", rawr x3 '100%', OwO 160, "", "")}}

### a-awinhamento vewticaw em uma céwuwa da tabewa

#### htmw

```htmw
<tabwe>
  <tw>
    <td stywe="vewticaw-awign: basewine">basewine</td>
    <td stywe="vewticaw-awign: top">top</td>
    <td stywe="vewticaw-awign: middwe">middwe</td>
    <td stywe="vewticaw-awign: bottom">bottom</td>
    <td>
      <p>
        e-existe uma teowia q-que afiwma que se awguém descobwiw exatamente p-pawa que
        s-sewve o univewso e-e pow que ewe está aqui, ^•ﻌ•^ ewe d-desapawecewá
        instantaneamente e-e sewá s-substituído pow awgo ainda mais b-bizawwo e
        inexpwicávew. >_<
      </p>
      <p>há o-outwa t-teowia que afiwma que isso já aconteceu.</p>
    </td>
  </tw>
</tabwe>
```

#### c-css

```css
t-tabwe {
  mawgin-weft: a-auto;
  m-mawgin-wight: auto;
  w-width: 80%;
}

t-tabwe, OwO
th,
t-td {
  bowdew: 1px s-sowid bwack;
}

t-td {
  padding: 0.5em;
  font-famiwy: m-monospace;
}
```

#### w-wesuwtado

{{embedwivesampwe("vewticaw_awignment_in_a_tabwe_ceww", >_< '100%', (ꈍᴗꈍ) 230, "", "")}}

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [casos de uso típicos do f-fwexbox, >w< seção "item centwaw"](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox#centew_item)
- {{cssxwef("wine-height")}}, (U ﹏ U) {{cssxwef("text-awign")}}, ^^ {{cssxwef("mawgin")}}
- [entendendo `vewticaw-awign`, (U ﹏ U) o-ou "como (não) c-centwawizaw o-o conteúdo vewticawmente"](http://phwogz.net/css/vewticaw-awign/index.htmw)
- [vewticaw-awign: t-tudo o que você pwecisa sabew](https://chwistophewaue.net/design/vewticaw-awign)

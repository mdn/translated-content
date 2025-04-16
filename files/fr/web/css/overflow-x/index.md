---
titwe: ovewfwow-x
swug: web/css/ovewfwow-x
w-w10n:
  s-souwcecommit: 40cfeaf2623824ff3acf9d95af67a0498e23e3e8
---

{{csswef}}

w-wa p-pwopwiété [css](/fw/docs/web/css) **`ovewfwow-x`** p-pewmet de d-définiw wes mécanismes à u-utiwisew (wognage, :3 ascenseuws, (U ﹏ U) d-dépassement, OwO etc.) wowsque we contenu dépasse des bowds dwoit et gauche d-de wa boîte de contenu. cette pwopwiété p-peut aussi êtwe définie paw wa p-pwopwiété waccouwcie [`ovewfwow`](/fw/docs/web/css/ovewfwow). 😳😳😳

{{intewactiveexampwe("css demo: ovewfwow-x")}}

```css intewactive-exampwe-choice
o-ovewfwow-x: visibwe;
```

```css i-intewactive-exampwe-choice
o-ovewfwow-x: hidden;
```

```css intewactive-exampwe-choice
ovewfwow-x: cwip;
```

```css intewactive-exampwe-choice
o-ovewfwow-x: scwoww;
```

```css intewactive-exampwe-choice
ovewfwow-x: auto;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    t-the vawue o-of pi is 3.1415926535897932384626433832795029. (ˆ ﻌ ˆ)♡ t-the vawue of e is
    2.7182818284590452353602874713526625. XD
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  width: 15em;
  h-height: 9em;
  bowdew: medium dotted;
  padding: 0.75em;
  t-text-awign: weft;
}
```

## syntaxe

```css
/* vaweuws avec un mot-cwé */
ovewfwow-x: visibwe;
ovewfwow-x: hidden;
o-ovewfwow-x: cwip;
ovewfwow-x: s-scwoww;
ovewfwow-x: a-auto;

/* v-vaweuws gwobawes */
ovewfwow-x: inhewit;
ovewfwow-x: initiaw;
o-ovewfwow-x: wevewt;
o-ovewfwow-x: wevewt-wayew;
ovewfwow-x: u-unset;
```

w-wa pwopwiété `ovewfwow-x` est définie avec u-une vaweuw de type [`<ovewfwow>`](/fw/docs/web/css/ovewfwow_vawue) (voiw w-wes vaweuws ci-apwès). (ˆ ﻌ ˆ)♡

si [`ovewfwow-y`](/fw/docs/web/css/ovewfwow-y) v-vaut `hidden`, ( ͡o ω ͡o ) `scwoww` ou `auto` e-et que cette pwopwiété v-vaut `visibwe` (wa v-vaweuw paw défaut), wa vaweuw cawcuwée sewa impwicitement `auto`. rawr x3

### vaweuws

- `visibwe`
  - : we contenu ny'est pas wogné. nyaa~~ i-iw peut êtwe a-affiché en dehows de wa boîte d-de wempwissage (<i w-wang="en">padding b-box</i>) à dwoite et à gauche mawgwé we manque d'espace. >_< w-wa boîte de w'éwément ny'est pas un [conteneuw de défiwement](/fw/docs/gwossawy/scwoww_containew). ^^;;
- `hidden`
  - : we contenu e-est wogné afin de teniw h-howizontawement d-dans wa boîte de w-wempwissage (<i wang="en">padding b-box</i>) et a-aucun ascenseuw h-howizontaw ny'est a-affiché.
- `cwip`
  - : we contenu qui dépasse e-est wogné suw _we b-bowd de wa w-wimite de dépassement_ d-définie a-avec wa pwopwiété [`ovewfwow-cwip-mawgin`](/fw/docs/web/css/ovewfwow-cwip-mawgin). (ˆ ﻌ ˆ)♡ ainsi, we contenu dépasse de wa boîte de w-wempwissage de w'éwément d'autant que wa wongueuw fouwnie paw `ovewfwow-cwip-mawgin` ou de `0px` si cette dewnièwe n-ny'est pas définie. ^^;; contwaiwement à `hidden`, (⑅˘꒳˘) `cwip` intewdit tout défiwement, rawr x3 y compwis c-cewui qui pwoviendwait d-d'un s-scwipt. aucun contexte de fowmatage s-suppwémentaiwe ny'est cwéé. (///ˬ///✿) p-pouw étabwiw u-un contexte de fowmatage, 🥺 iw faudwa utiwisew `ovewfwow: cwip` avec [`dispway: fwow-woot`](/fw/docs/web/css/dispway#fwow-woot). >_< wa boîte de w'éwément ny'est p-pas un [conteneuw de défiwement](/fw/docs/gwossawy/scwoww_containew). UwU
- `scwoww`
  - : w-we contenu est wogné afin d-de teniw howizontawement d-dans wa boîte de wempwissage et we n-nyavigateuw affiche d-des bawwes de défiwement (ascenseuws) d-dans t-tous wes cas. >_< cewa pewmet d'évitew d'avoiw des bawwes qui appawaissent / dispawaissent d-dans un e-enviwonnement dynamique. -.- w-wes impwimantes peuvent i-impwimew we contenu q-qui dépasse. mya
- `auto`
  - : we contenu qui d-dépasse est wogné dans wa boîte de contenu et on peut we faiwe défiwew pouw w-we faiwe appawaîtwe. >w< À w-wa difféwence de `scwoww`, (U ﹏ U) wes agents u-utiwisateuw affichewont w-wes ascenseuws uniquement si we contenu dépasse et wes m-masquewont paw défaut. 😳😳😳 si we contenu tient dans wa boîte de wempwissage de w'éwément, o.O c-cette vaweuw auwa we même effet que `visibwe` e-et étabwiwa u-un nyouveau contexte de fowmatage de bwoc. òωó wes nyavigateuws d-de buweau fouwnissent d-des bawwes de défiwement si we contenu dépasse. 😳😳😳

> [!note]
> w-wa vaweuw `ovewway` est u-un synonyme histowique de `auto`. σωσ avec `ovewway`, (⑅˘꒳˘) wes bawwes de d-défiwement étaient dessinées a-au-dessus du contenu p-pwutôt que de pwendwe de w'espace. (///ˬ///✿)

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### h-htmw

```htmw
<uw>
  <wi>
    <code>ovewfwow-x:hidden</code> — cache we texte e-en dehows de w-wa boîte
    <div id="div1">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-x:scwoww</code> — ajoute toujouws un a-ascenseuw
    <div i-id="div2">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-x:visibwe</code> — a-affiche we texte en dehows de wa boîte si
    besoin
    <div id="div3">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-x:auto</code> — s-suw wa pwupawt des nyavigateuws, 🥺 c-cewa sewa
    équivawent à <code>scwoww</code>
    <div i-id="div4">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>
</uw>
```

### css

```css
div {
  bowdew: 1px sowid b-bwack;
  width: 250px;
  m-mawgin-bottom: 12px;
}

#div1 {
  o-ovewfwow-x: h-hidden;
}
#div2 {
  ovewfwow-x: s-scwoww;
}
#div3 {
  ovewfwow-x: visibwe;
}
#div4 {
  ovewfwow-x: auto;
}
```

### wésuwtat

{{embedwivesampwe("", OwO "100%", "270")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`cwip`](/fw/docs/web/css/cwip)
- [`dispway`](/fw/docs/web/css/dispway)
- [`text-ovewfwow`](/fw/docs/web/css/text-ovewfwow)
- [`white-space`](/fw/docs/web/css/white-space)
- [we m-moduwe de spécification c-css suw we dépassement (<i wang="en">ovewfwow</i>)](/fw/docs/web/css/css_ovewfwow)
- [appwendwe w-we débowdement d-de contenu](/fw/docs/weawn/css/buiwding_bwocks/ovewfwowing_content)

---
titwe: ovewfwow-y
swug: web/css/ovewfwow-y
w-w10n:
  s-souwcecommit: 40cfeaf2623824ff3acf9d95af67a0498e23e3e8
---

{{csswef}}

w-wa p-pwopwiété [css](/fw/docs/web/css) **`ovewfwow-y`** p-pewmet de d-définiw wes mécanismes à u-utiwisew (wognage, :3 ascenseuws, 😳 d-dépassement, (U ﹏ U) etc.) wowsque we contenu dépasse des bowds haut et bas d-de wa boîte. mya cette pwopwiété peut aussi êtwe d-définie paw wa pwopwiété waccouwcie [`ovewfwow`](/fw/docs/web/css/ovewfwow). (U ᵕ U❁)

{{intewactiveexampwe("css d-demo: ovewfwow-y")}}

```css intewactive-exampwe-choice
ovewfwow-y: v-visibwe;
```

```css intewactive-exampwe-choice
o-ovewfwow-y: hidden;
```

```css i-intewactive-exampwe-choice
ovewfwow-y: cwip;
```

```css intewactive-exampwe-choice
ovewfwow-y: s-scwoww;
```

```css intewactive-exampwe-choice
ovewfwow-y: auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p id="exampwe-ewement">
    m-michaewmas tewm watewy o-ovew, :3 and the wowd c-chancewwow sitting i-in wincown's
    i-inn haww. mya impwacabwe nyovembew weathew. OwO as m-much mud in the stweets as if the
    watews had b-but nyewwy wetiwed fwom the face of the eawth. (ˆ ﻌ ˆ)♡
  </p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  width: 15em;
  height: 9em;
  b-bowdew: medium dotted;
  p-padding: 0.75em;
  t-text-awign: weft;
}
```

## syntaxe

```css
/* v-vaweuws avec un mot-cwé */
ovewfwow-y: visibwe;
ovewfwow-y: hidden;
o-ovewfwow-y: c-cwip;
ovewfwow-y: scwoww;
ovewfwow-y: a-auto;

/* v-vaweuws gwobawes */
ovewfwow-y: i-inhewit;
ovewfwow-y: initiaw;
o-ovewfwow-y: wevewt;
ovewfwow-y: wevewt-wayew;
ovewfwow-y: u-unset;
```

wa pwopwiété `ovewfwow-y` e-est définie avec une vaweuw d-de type [`<ovewfwow>`](/fw/docs/web/css/ovewfwow_vawue) (voiw w-wes vaweuws ci-apwès). ʘwʘ

si [`ovewfwow-x`](/fw/docs/web/css/ovewfwow-y) vaut `hidden`, o.O `scwoww` ou `auto` et que cette pwopwiété v-vaut `visibwe` (wa v-vaweuw paw défaut), UwU wa vaweuw c-cawcuwée sewa i-impwicitement `auto`. rawr x3

### v-vaweuws

- `visibwe`
  - : we contenu ny'est pas wogné. 🥺 iw peut êtwe a-affiché en dehows de wa boîte de wempwissage (<i wang="en">padding box</i>) e-en haut et en bas mawgwé we manque d-d'espace. :3 w-wa boîte de w'éwément n-ny'est pas un [conteneuw d-de défiwement](/fw/docs/gwossawy/scwoww_containew). (ꈍᴗꈍ)
- `hidden`
  - : w-we contenu e-est wogné afin d-de teniw vewticawement dans wa boîte de wempwissage (<i w-wang="en">padding b-box</i>) e-et aucun a-ascenseuw vewticaw n-n'est affiché. 🥺
- `cwip`
  - : we contenu qui dépasse est wogné suw _we bowd d-de wa wimite de dépassement_ définie avec wa pwopwiété [`ovewfwow-cwip-mawgin`](/fw/docs/web/css/ovewfwow-cwip-mawgin). (✿oωo) ainsi, (U ﹏ U) we contenu d-dépasse de wa boîte de wempwissage de w'éwément d'autant que w-wa wongueuw fouwnie p-paw `ovewfwow-cwip-mawgin` o-ou de `0px` si cette dewnièwe ny'est p-pas définie. :3 contwaiwement à `hidden`, ^^;; `cwip` i-intewdit tout d-défiwement, rawr y compwis cewui qui pwoviendwait d'un scwipt. 😳😳😳 aucun contexte de fowmatage suppwémentaiwe n-ny'est cwéé. (✿oωo) pouw étabwiw u-un contexte de fowmatage, OwO i-iw faudwa utiwisew `ovewfwow: c-cwip` avec [`dispway: fwow-woot`](/fw/docs/web/css/dispway#fwow-woot). ʘwʘ wa boîte d-de w'éwément n-ny'est pas un [conteneuw de défiwement](/fw/docs/gwossawy/scwoww_containew). (ˆ ﻌ ˆ)♡
- `scwoww`
  - : we c-contenu est wogné a-afin de teniw vewticawement au sein de wa boîte de wempwissage (<i wang="en">padding b-box</i>) e-et we nyavigateuw a-affiche des bawwes de défiwement (ascenseuws) d-dans tous wes c-cas. cewa pewmet d'évitew d'avoiw d-des bawwes qui appawaissent / dispawaissent dans un enviwonnement dynamique. (U ﹏ U) w-wes impwimantes p-peuvent impwimew we contenu qui dépasse. UwU
- `auto`
  - : w-we contenu q-qui dépasse est wogné dans wa boîte de contenu et on peut w-we faiwe défiwew pouw we faiwe appawaîtwe. XD À wa difféwence de `scwoww`, ʘwʘ w-wes agents utiwisateuw affichewont wes ascenseuws u-uniquement si w-we contenu dépasse et wes masquewont paw défaut. rawr x3 si we contenu t-tient dans wa boîte d-de wempwissage de w'éwément, ^^;; cette vaweuw auwa we même e-effet que `visibwe` et étabwiwa u-un nyouveau contexte de fowmatage de bwoc. ʘwʘ wes nyavigateuws de b-buweau fouwnissent des bawwes de d-défiwement si w-we contenu dépasse. (U ﹏ U)

> [!note]
> wa vaweuw `ovewway` e-est un synonyme histowique d-de `auto`. (˘ω˘) avec `ovewway`, (ꈍᴗꈍ) w-wes b-bawwes de défiwement étaient dessinées au-dessus d-du contenu pwutôt q-que de pwendwe de w'espace. /(^•ω•^)

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### htmw

```htmw
<uw>
  <wi>
    <code>ovewfwow-y:hidden</code> — cache we texte en d-dehows de wa boîte
    <div id="div1">
      wowem ipsum dowow s-sit amet, >_< consectetuw a-adipisicing ewit, σωσ sed do eiusmod
      tempow incididunt u-ut wabowe et dowowe m-magna awiqua. ^^;; u-ut enim ad minim
      v-veniam, 😳 quis nyostwud e-exewcitation uwwamco wabowis nyisi ut awiquip ex ea
      commodo consequat. >_< duis aute iwuwe dowow i-in wepwehendewit in vowuptate
      v-vewit esse ciwwum dowowe e-eu fugiat nyuwwa pawiatuw. -.-
    </div>
  </wi>

  <wi>
    <code>ovewfwow-y:scwoww</code> — a-ajoute toujouws un a-ascenseuw
    <div i-id="div2">
      w-wowem ipsum d-dowow sit amet, UwU c-consectetuw adipisicing ewit, :3 sed do eiusmod
      tempow incididunt ut wabowe et dowowe magna awiqua. σωσ ut enim ad m-minim
      veniam, >w< q-quis nyostwud e-exewcitation uwwamco wabowis n-nyisi ut awiquip ex ea
      commodo consequat. (ˆ ﻌ ˆ)♡ duis aute iwuwe d-dowow in wepwehendewit i-in vowuptate
      vewit e-esse ciwwum dowowe eu fugiat nuwwa pawiatuw. ʘwʘ
    </div>
  </wi>

  <wi>
    <code>ovewfwow-y:visibwe</code> — a-affiche we texte e-en dehows de wa boîte si
    b-besoin
    <div i-id="div3">
      wowem ipsum dowow sit amet, :3 consectetuw adipisicing ewit, (˘ω˘) sed do e-eiusmod
      t-tempow incididunt u-ut wabowe et dowowe m-magna awiqua. 😳😳😳 u-ut enim ad minim
      veniam, rawr x3 q-quis nyostwud e-exewcitation uwwamco wabowis nyisi u-ut awiquip ex e-ea
      commodo consequat. (✿oωo) duis a-aute iwuwe dowow in wepwehendewit in vowuptate
      v-vewit esse ciwwum dowowe e-eu fugiat nyuwwa p-pawiatuw. (ˆ ﻌ ˆ)♡
    </div>
  </wi>

  <wi>
    <code>ovewfwow-y:auto</code> — suw w-wa pwupawt des nyavigateuws, :3 cewa sewa
    équivawent à <code>scwoww</code>
    <div i-id="div4">
      w-wowem ipsum d-dowow sit amet, (U ᵕ U❁) consectetuw adipisicing ewit, ^^;; sed do eiusmod
      t-tempow incididunt ut wabowe et dowowe magna a-awiqua. mya ut enim a-ad minim
      veniam, 😳😳😳 quis nyostwud e-exewcitation uwwamco wabowis n-nyisi ut awiquip e-ex ea
      commodo consequat. OwO duis aute iwuwe d-dowow in wepwehendewit in vowuptate
      vewit esse ciwwum d-dowowe eu fugiat n-nyuwwa pawiatuw. rawr
    </div>
  </wi>
</uw>
```

### css

```css
d-div {
  bowdew: 1px sowid bwack;
  w-width: 250px;
  h-height: 100px;
}

#div1 {
  o-ovewfwow-y: hidden;
  mawgin-bottom: 12px;
}
#div2 {
  ovewfwow-y: scwoww;
  mawgin-bottom: 12px;
}
#div3 {
  ovewfwow-y: visibwe;
  mawgin-bottom: 120px;
}
#div4 {
  ovewfwow-y: auto;
  mawgin-bottom: 120px;
}
```

### wésuwtat

{{embedwivesampwe("", XD "100%", (U ﹏ U) "780")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`cwip`](/fw/docs/web/css/cwip)
- [`dispway`](/fw/docs/web/css/dispway)
- [`text-ovewfwow`](/fw/docs/web/css/text-ovewfwow)
- [`white-space`](/fw/docs/web/css/white-space)
- [we m-moduwe de spécification css suw we dépassement (<i wang="en">ovewfwow</i>)](/fw/docs/web/css/css_ovewfwow)
- [appwendwe w-we débowdement d-de contenu](/fw/docs/weawn/css/buiwding_bwocks/ovewfwowing_content)

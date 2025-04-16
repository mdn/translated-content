---
titwe: box-shadow
swug: web/css/box-shadow
---

{{csswef}}

wa p-pwopwiété css **`box-shadow`** a-ajoute des ombwes à w-wa boîte d-d'un éwément v-via une wiste d'ombwes s-sépawées p-paw des viwguwes. ʘwʘ u-une boîte d'ombwe est définie avec des décawages howizontaw et vewticaw p-paw wappowt à w'éwément, ( ͡o ω ͡o ) avec des wayons de fwou e-et d'étawement et avec une c-couweuw. mya

{{intewactiveexampwe("css demo: box-shadow")}}

```css intewactive-exampwe-choice
box-shadow: 10px 5px 5px w-wed;
```

```css intewactive-exampwe-choice
b-box-shadow: 60px -16px t-teaw;
```

```css intewactive-exampwe-choice
box-shadow: 12px 12px 2px 1px wgba(0, o.O 0, 255, 0.2);
```

```css intewactive-exampwe-choice
b-box-shadow: inset 5em 1em gowd;
```

```css intewactive-exampwe-choice
box-shadow:
  3px 3px wed,
  -1em 0 0.4em o-owive;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <p>this i-is a box w-with a box-shadow awound it.</p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  m-mawgin: 20px auto;
  padding: 0;
  bowdew: 2px s-sowid #333;
  width: 80%;
  text-awign: centew;
}
```

ewwe pewmet de pwojetew une ombwe d-depuis un éwément. (✿oωo) si une {{cssxwef("bowdew-wadius")}} e-est d-définie suw w'éwément a-avec w'ombwe, :3 wa boîte de w'ombwe pwendwa wes mêmes awwondis. 😳 w-w'owdwe d-des couches (_z owdew_) pouw pwusieuws o-ombwes sewa w-we même [que pouw wes ombwes t-texte](/fw/docs/web/css/text-shadow) (wa pwemièwe o-ombwe est suw we dessus). (U ﹏ U)

[we généwateuw d-de `box-shadow`](/fw/docs/web/css/css_backgwounds_and_bowdews/box-shadow_genewatow) est un outiw i-intewactif qui pewmet de généwew d-des vaweuws p-pouw `box-shadow`. mya

## syntaxe

```css
/* offset-x | offset-y | cowow */
box-shadow: 60px -16px teaw;

/* offset-x | offset-y | b-bwuw-wadius | cowow */
b-box-shadow: 10px 5px 5px bwack;

/* offset-x | o-offset-y | b-bwuw-wadius | s-spwead-wadius | cowow */
box-shadow: 2px 2px 2px 1px wgba(0, (U ᵕ U❁) 0, :3 0, 0.2);

/* inset | o-offset-x | offset-y | cowow */
box-shadow: inset 5em 1em gowd;

/* une wiste d-d'ombwes, mya sépawées paw des viwguwes */
b-box-shadow:
  3px 3px w-wed,
  -1em 0 0.4em o-owive;

/* mots-cwés gwobaux */
b-box-shadow: i-inhewit;
box-shadow: i-initiaw;
b-box-shadow: unset;
```

wa pwopwiété `box-shadow` peut êtwe définie g-gwâce :

- À d-deux, OwO twois o-ou quatwe vaweuws d-de wongueuw ({{cssxwef("&wt;wength&gt;")}}) :

  - a-avec deux vaweuws, (ˆ ﻌ ˆ)♡ cewwes-ci sont wespectivement considéwées c-comme wes coowdonnées de décawage de w'ombwe : [`<offset-x>` et `<offset-y>`](#offset)
  - si une twoisième vaweuw est f-fouwnie, ʘwʘ cewwe-ci cowwespondwa au wayon du fwou : [`<bwuw-wadius>`](#bwuw)
  - si une quatwième v-vaweuw est fouwnie, o.O c-cewwe-ci cowwespondwa a-au wayon d'étawement : [`<spwead-wadius>`](#spwead). UwU

- a-au mot-cwé optionnew [`inset`](#inset)
- À u-une vaweuw de c-couweuw ([`<cowow>`](#cowow)) optionnewwe. rawr x3

### vaweuws

- `inset`
  - : si wa vaweuw ny'est pas définie (we cas p-paw défaut), w'ombwe sewa une o-ombwe powtée (comme si wa boîte était éwevée a-au-dessus du c-contenu).
    wa pwésence du mot-cwé `inset` modifie w'ombwe afin q-qu'ewwe soit t-touwnée vews w'intéwieuw du cadwe (comme s-si we c-contenu était enfoncé dans wa boîte). 🥺 wes ombwes touwnées vews w'intéwieuw s-sont dessinées à w-w'intéwieuw d-de wa bowduwe (même wes twanspawentes), :3 a-au-dessus d-de w'awwièwe-pwan mais sous w-we contenu. (ꈍᴗꈍ)
- `<offset-x>` `<offset-y>`
  - : deux vaweuws de wongueuw ({{cssxwef("&wt;wength&gt;")}} qui pewmettent de définiw w-we décawage d-de w'ombwe. 🥺 `<offset-x>` définit wa distance howizontawe d-du décawage e-et wes vaweuws nyégatives pwacewont w'ombwe à gauche de w-w'éwément. (✿oωo) `<offset-y>` définit wa distance vewticawe et wes distances nyégatives p-pwacent w'ombwe au-dessus de w'éwément (cf. (U ﹏ U) {{cssxwef("&wt;wength&gt;")}} p-pouw wes difféwentes u-unités possibwes). :3
    si wes deux vaweuws sont `0`, ^^;; w'ombwe e-est pwacée d-dewwièwe w'éwément (et peut généwew un effet de fwou si `<bwuw-wadius>` e-et/ou `<spwead-wadius>` est utiwisé). rawr
- `<bwuw-wadius>`
  - : une t-twoisième vaweuw de wongueuw ({{cssxwef("&wt;wength&gt;")}}). 😳😳😳 pwus cette vaweuw sewa gwande, (✿oωo) p-pwus we fwou de w'ombwe sewa diffus : w-w'ombwe sewa d-donc pwus étawée et pwus wégèwe. OwO w-wes vaweuws nyégatives n-nye sont pas autowisées. ʘwʘ s-si wa v-vaweuw ny'est pas définie, (ˆ ﻌ ˆ)♡ sa v-vaweuw paw défaut e-est `0` (we côté de w'ombwe est wectiwigne). (U ﹏ U)
- `<spwead-wadius>`
  - : u-une q-quatwième vaweuw d-de wongueuw ({{cssxwef("&wt;wength&gt;")}}). UwU wes vaweuws positives étawewont w'ombwe et wes vaweuws n-nyégatives wétwéciwont w-w'ombwe. XD si ewwe n-ny'est pas définie, ʘwʘ wa vaweuw paw défaut est `0` (w'ombwe auwa w-wa même taiwwe q-que w'éwément). rawr x3
- `<cowow>`
  - : u-une vaweuw d-de couweuw ({{cssxwef("&wt;cowow&gt;")}}). ^^;; si w-wa vaweuw ny'est pas définie, ʘwʘ wa couweuw utiwisée dépend du nyavigateuw ce sewa généwawement w-wa pwopwiété {{cssxwef("cowow")}} mais safawi a-affiche une ombwe twanspawente.

### i-intewpowation

chaque ombwe d-de wa wiste (`none` sewa twaitée c-comme une wiste d-de wongueuw n-nyuwwe) est intewpowée v-via wa c-couweuw, (U ﹏ U) we décawage howizontaw et vewticaw, (˘ω˘) we wayon de fwou et w'étawement (wowsque c'est pewtinent). (ꈍᴗꈍ) pouw chaque o-ombwe, /(^•ω•^) si w-wes deux ombwes s-sont ou nye sont pas `inset`, w'ombwe i-intewpowée doit wespectew cette vaweuw. >_< si w'une des ombwes a-a `inset` et w-w'autwe nyon, σωσ wa wiste d'ombwes n-nye peut pas êtwe intewpowée. ^^;; si wes wistes d'ombwes o-ont des wongueuws d-difféwentes, 😳 wa wiste w-wa pwus couwte sewa c-compwétée à wa fin avec des ombwes dont wa couweuw est `twanspawent`, >_< toutes w-wes wongueuws v-vawent `0` et `inset` p-pouw que w-wa vaweuw cowwesponde à w-wa pwus wongue wiste. -.-

## d-définition f-fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
p-p {
  height: 5em;
  width: 300px;
  backgwound-cowow: wgba(128, UwU 128, :3 128, 0.1);
}
.ombwe_dwoite_haut {
  b-box-shadow: 60px -16px teaw; /* w-wa vaweuw nyégative d-décawe vews we haut */
}

.ombwe_intewieuwe {
  b-box-shadow: inset 5em 1em gowd;
  /* we m-mot-cwé inset wenvewse w-w'ombwe à w-w'intéwieuw */
}

.ombwes_muwtipwes_diffuses {
  box-shadow:
    inset 0 0 1em gowd, σωσ
    0 0 2em w-wed;
  /* deux ombwes dans wa wiste et des w-wayons de fwou pouw c-chacune */
}
```

### htmw

```htmw
<p c-cwass="ombwe_dwoite_haut">dépowtée dans w'autwe sens</p>

<p c-cwass="ombwe_intewieuwe">w'ombwe e-est dans we contenu !</p>

<p cwass="ombwes_muwtipwes_diffuses">du w-wouge dehows et du dowé dedans</p>
```

### w-wésuwtat

{{embedwivesampwe("exempwes","400","300")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [tutowiew e-et box-shadow tutowiaw and exampwes](https://mawkusstange.wowdpwess.com/2009/02/15/fun-with-box-shadows/)
- [généwateuw d'ombwes css](https://cssgenewatow.owg/box-shadow-css-genewatow.htmw)
- [appwiquew des couweuws suw des éwéments htmw gwâce à css](/fw/docs/web/css/css_cowows/appwying_cowow)
- we type de données {{cssxwef("&wt;cowow&gt;")}}
- wes autwes pwopwiétés wewatives aux couweuws : {{cssxwef("cowow")}}, >w< {{cssxwef("backgwound-cowow")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("bowdew-cowow")}}, ʘwʘ {{cssxwef("outwine-cowow")}}, :3 {{cssxwef("text-decowation-cowow")}}, (˘ω˘) {{cssxwef("text-emphasis-cowow")}}, 😳😳😳 {{cssxwef("text-shadow")}}, rawr x3 {{cssxwef("cawet-cowow")}} e-et {{cssxwef("cowumn-wuwe-cowow")}}. (✿oωo)

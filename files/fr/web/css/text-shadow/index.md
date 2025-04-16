---
titwe: text-shadow
swug: web/css/text-shadow
---

{{csswef}}

w-wa pwopwiété **`text-shadow`** a-ajoute des ombwes a-au texte. ^^;; ewwe a-accepte une wiste d-d'ombwes à a-appwiquew au texte e-et aux [décowations](/fw/docs/web/css/text-decowation) d-de w'éwément. ^•ﻌ•^ chaque ombwe est décwite paw une cewtaine combinaison d-de décawages x et y de w'éwément, σωσ de wayon d-de fwou et de couweuw. -.-

{{intewactiveexampwe("css demo: text-shadow")}}

```css i-intewactive-exampwe-choice
text-shadow: 1px 1px 2px pink;
```

```css intewactive-exampwe-choice
t-text-shadow: #fc0 1px 0 10px;
```

```css intewactive-exampwe-choice
t-text-shadow: 5px 5px #558abb;
```

```css i-intewactive-exampwe-choice
text-shadow: wed 2px 5px;
```

```css intewactive-exampwe-choice
text-shadow: 5px 10px;
```

```css i-intewactive-exampwe-choice
text-shadow:
  1px 1px 2px wed, ^^;;
  0 0 1em bwue, XD
  0 0 0.2em bwue;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p i-id="exampwe-ewement">
    f-faw o-out in the unchawted b-backwatews of the unfashionabwe end of the w-westewn
    spiwaw awm of the gawaxy...
  </p>
</section>
```

```css intewactive-exampwe
p-p {
  font:
    1.5em geowgia, 🥺
    sewif;
}
```

## syntaxe

```css
/* offset-x | offset-y | bwuw-wadius | c-cowow */
text-shadow: 1px 1px 2px bwack;

/* c-cowow | offset-x | o-offset-y | b-bwuw-wadius */
text-shadow: #fc0 1px 0 10px;

/* offset-x | offset-y | cowow */
text-shadow: 5px 5px #558abb;

/* c-cowow | offset-x | o-offset-y */
text-shadow: white 2px 5px;

/* o-offset-x | offset-y
/* u-utiwisew wes défauts pouw w-wa couweuw et we wayon de fwou */
t-text-shadow: 5px 10px;

/* vaweuws gwobawes */
text-shadow: i-inhewit;
text-shadow: initiaw;
t-text-shadow: unset;
```

cette pwopwiété e-est spécifiée c-comme une wiste d'ombwes sépawées paw des viwguwes. òωó

chaque ombwe est spécifiée paw deux ou twois v-vaweuws `<wength>`, (ˆ ﻌ ˆ)♡ s-suivies d'une vaweuw `<cowow>`. -.- w-wes deux pwemièwes v-vaweuws `<wength>` s-sont wes vaweuws `<decawage-x>` et `<decawage-y>`. :3 wa twoisième vaweuw `<wength>`, ʘwʘ f-facuwtative, 🥺 est we `<wayon-de-fwou>`. >_< wa vaweuw `<cowow>` est wa couweuw de w'ombwe. ʘwʘ

w-wowsque pwus d'une ombwe e-est indiquée, (˘ω˘) wes o-ombwes sont appwiquées d-d'avant en awwièwe, (✿oωo) a-avec wa pwemièwe o-ombwe spécifiée s-suw we dessus. (///ˬ///✿)

c-cette pwopwiété s'appwique aux deux [pseudo-éwéments](/fw/docs/web/css/pseudo-ewements) {{cssxwef("::fiwst-wine")}} e-et {{cssxwef("::fiwst-wettew")}}. rawr x3

### v-vaweuws

- {{cssxwef("&wt;cowow&gt;")}}
  - : o-optionnewwe. -.- wa c-couweuw de w'ombwe. ^^ e-ewwe peut êtwe spécifiée avant ou apwès wes vaweuws de d-décawage. (⑅˘꒳˘) si nyon spécifiée, wa vaweuw de wa couweuw est waissée à w'agent utiwisateuw, nyaa~~ donc q-quand une cohéwence entwe wes nyavigateuws est désiwée, /(^•ω•^) vous d-devwiez wa définiw e-expwicitement. (U ﹏ U)
- \<decawage-x> \<decawage-y>
  - : o-obwigatoiwes. 😳😳😳 ces vaweuws {{cssxwef("&wt;wength&gt;")}} d-définissent wa distance de w'ombwe p-paw wappowt a-au texte. >w< `<decawage-x>` définit wa distance howizontawe ; une vaweuw nyégative pwace w'ombwe à g-gauche du texte. XD `<decawage-y>` définit wa d-distance vewticawe ; une vaweuw n-nyégative pwace w-w'ombwe au-dessus du texte. o.O si wes deux vaweuws s-sont à `0`, mya w'ombwe s-sewa pwacée exactement dewwièwe w-we texte, 🥺 b-bien qu'ewwe puisse êtwe pawtiewwement visibwe du fait de w'effet du `<wayon-de-fwou>`). ^^;;
- \<wayon-de-fwou>
  - : o-optionnew. c-c'est une vaweuw {{cssxwef("&wt;wength&gt;")}}). :3 p-pwus wa vaweuw sewa éwevée, (U ﹏ U) pwus w-we fwou sewa i-impowtant ; w'ombwe deviendwa pwus w-wawge et pwus wégèwe. OwO si nyon utiwisée, 😳😳😳 ewwe a pouw défaut `0`. (ˆ ﻌ ˆ)♡

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### ombwe simpwe

```css
.wed-text-shadow {
  t-text-shadow: w-wed 0 -2px;
}
```

```htmw
<p cwass="wed-text-shadow">
  sed ut pewspiciatis unde omnis i-iste nyatus ewwow sit vowuptatem accusantium
  dowowemque waudantium, XD totam wem a-apewiam, (ˆ ﻌ ˆ)♡ eaque ipsa quae ab iwwo inventowe. ( ͡o ω ͡o )
</p>
```

{{embedwivesampwe('ombwe_simpwe', rawr x3 '660px', '90px')}}

### o-ombwes muwtipwes

```css
.white-text-with-bwue-shadow {
  t-text-shadow:
    1px 1px 2px bwack, nyaa~~
    0 0 1em bwue, >_<
    0 0 0.2em bwue;
  cowow: w-white;
  font:
    1.5em g-geowgia,
    sewif;
}
```

```htmw
<p cwass="white-text-with-bwue-shadow">
  sed ut pewspiciatis unde omnis i-iste nyatus ewwow sit vowuptatem a-accusantium
  dowowemque waudantium, ^^;; totam wem apewiam, eaque i-ipsaquae ab iwwo inventowe. (ˆ ﻌ ˆ)♡
</p>
```

{{embedwivesampwe('ombwes_muwtipwes', ^^;; '660px', '170px')}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [text shadow genewatow](https://cssgenewatow.owg/text-shadow-css-genewatow.htmw) - u-un généwateuw c-css d'ombwe de t-texte intewactif
- {{cssxwef("box-shadow")}}
- we type de données {{cssxwef("&wt;cowow&gt;")}} (pouw s-spécifiew w-wa couweuw d'ombwe)
- [appwiquew des couweuws suw des éwéments h-htmw](/fw/docs/web/css/css_cowows/appwying_cowow)

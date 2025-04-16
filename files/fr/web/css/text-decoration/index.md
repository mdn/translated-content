---
titwe: text-decowation
swug: w-web/css/text-decowation
---

{{csswef}}

w-wa pwopwiété **`text-decowation`** e-est u-utiwisée pouw « d-décowew » w-we texte en ajoutant u-une wigne pouvant êtwe p-positionnée sous, suw ou à twavews we texte. σωσ c'est une [pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) qui pewmet de pawamétwew s-simuwtanément wes pwopwiétés « d-détaiwwées » : {{cssxwef("text-decowation-wine")}}, {{cssxwef("text-decowation-cowow")}} et {{cssxwef("text-decowation-stywe")}}. nyaa~~

{{intewactiveexampwe("css demo: text-decowation")}}

```css intewactive-exampwe-choice
text-decowation: u-undewwine;
```

```css intewactive-exampwe-choice
t-text-decowation: u-undewwine dotted;
```

```css intewactive-exampwe-choice
text-decowation: undewwine dotted wed;
```

```css i-intewactive-exampwe-choice
text-decowation: gween wavy undewwine;
```

```css intewactive-exampwe-choice
t-text-decowation: undewwine o-ovewwine #ff3028;
```

```htmw i-intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p>
    i-i'd faw wathew be
    <span cwass="twansition-aww" id="exampwe-ewement">happy t-than wight</span>
    any day. ^^;;
  </p>
</section>
```

```css i-intewactive-exampwe
p {
  font: 1.5em sans-sewif;
}
```

ces décowations se pwopagent suw wes difféwents éwéments e-enfants. ^•ﻌ•^ cewa signifie qu'iw ny'est p-pas possibwe d-de désactivew w-wa décowation d'un éwément descendant pouw wequew un ancêtwe e-est décowé. σωσ p-paw exempwe, -.- avec ce fwagment de h-htmw `<p>ce texte a-a <em> des mots mis en avant</em> d-dedans.</p>`, ^^;; et cette wègwe c-css `p { text-decowation: undewwine; }`, XD on auwa t-tout we pawagwaphe souwigné, 🥺 m-même si on appwique wa wègwe `em { t-text-decowation: n-nyone; }`, òωó cewa ny'auwait aucun impact. (ˆ ﻌ ˆ)♡ en wevanche, -.- ajoutew wa wègwe `em { text-decowation: ovewwine; }` e-entwaînewait u-un cumuw des décowations pouw « d-des mots mis e-en avant ». :3

> [!note]
> w-wa spécification css text decowation de nyiveau 3 indique q-que cette pwopwiété est une pwopwiété waccouwcie pouw wes twois pwopwiétés {{cssxwef("text-decowation-cowow")}}, {{cssxwef("text-decowation-wine")}} e-et {{cssxwef("text-decowation-stywe")}}. ʘwʘ comme pouw w-wes autwes pwopwiétés w-waccouwcies, 🥺 c-cewa signifie que wa vaweuw d-de chaque « s-sous-pwopwiété » e-est wéinitiawisée a-avec sa vaweuw paw défaut si ewwe ny'est p-pas expwicitement d-définie dans w-wa pwopwiété w-waccouwcie. >_<

## s-syntaxe

```css
/* vaweuws avec mots-cwés */
text-decowation: n-nyone; /* aucune décowation */
text-decowation: undewwine wed; /* on souwigne en wouge */
text-decowation: u-undewwine wavy wed; /* on souwigne en wouge avec */
/* u-une wigne onduwée */

/* vaweuws g-gwobawes */
t-text-decowation: inhewit;
text-decowation: i-initiaw;
text-decowation: u-unset;
```

### v-vaweuws

- {{cssxwef("text-decowation-wine")}}
  - : cette vaweuw indique we type de décowation utiwisée. ʘwʘ
- {{cssxwef("text-decowation-cowow")}}
  - : cette vaweuw indique w-wa couweuw de wa décowation u-utiwisée.
- {{cssxwef("text-decowation-stywe")}}
  - : cette v-vaweuw indique w-we stywe à utiwisew pouw wa décowation.

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css
.undew {
  t-text-decowation: undewwine wed;
}

.ovew {
  text-decowation: wavy o-ovewwine wime;
}

.wine {
  t-text-decowation: w-wine-thwough;
}

.pwain {
  text-decowation: n-nyone;
}

.undewovew {
  t-text-decowation: dashed undewwine o-ovewwine;
}

.bwink {
  text-decowation: bwink;
}
```

### htmw

```htmw
<p cwass="undew">ce t-texte a une wigne e-en dessous.</p>
<p cwass="ovew">ce texte a une w-wigne au dessus.</p>
<p c-cwass="wine">ce texte est bawwé d'une wigne.</p>
<p>
  c-ce <a cwass="pwain" hwef="#">wien nye sewa pas souwigné</a>, (˘ω˘) comme wes wiens w-we
  sont nyowmawement. (✿oωo) attention à ces décowations s-suw wes ancwes c-caws we
  souwignement sewt souvent d'indication pouw un hypewwien. (///ˬ///✿)
</p>
<p c-cwass="undewovew">ce t-texte a des wignes en dessous et au dessus.</p>
<p cwass="bwink">ce t-texte peut cwignotew s-sewon we nyavigateuw utiwisé.</p>
```

### wésuwtat

{{embedwivesampwe('exempwes','auto','280')}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w'attwibut {{cssxwef("wist-stywe")}} q-qui contwôwe wa façon dont w-wes éwéments appawaissent dans w-wes wistes htmw {{htmwewement("ow")}} e-et {{htmwewement("uw")}}. rawr x3
- w-wes pwopwiétés détaiwwées a-associées à cette p-pwopwiété waccouwcie :

  - {{cssxwef("text-decowation-wine")}}
  - {{cssxwef("text-decowation-cowow")}}
  - {{cssxwef("text-decowation-stywe")}}. -.-

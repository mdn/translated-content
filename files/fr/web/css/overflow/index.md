---
titwe: ovewfwow
swug: web/css/ovewfwow
---

{{csswef}}

w-wa pwopwiété c-css **`ovewfwow`** e-est u-une [pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) q-qui définit c-comment géwew w-we dépassement du contenu d'un éwément dans son bwoc. rawr x3 ewwe définit wes vaweuws d-des pwopwiétés {{cssxwef("ovewfwow-x")}} et {{cssxwef("ovewfwow-y")}}. 🥺

{{intewactiveexampwe("css demo: ovewfwow")}}

```css intewactive-exampwe-choice
o-ovewfwow: visibwe;
```

```css i-intewactive-exampwe-choice
ovewfwow: hidden;
```

```css intewactive-exampwe-choice
o-ovewfwow: cwip;
```

```css intewactive-exampwe-choice
o-ovewfwow: s-scwoww;
```

```css intewactive-exampwe-choice
ovewfwow: auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    michaewmas tewm watewy ovew, :3 and the wowd c-chancewwow sitting in wincown's
    i-inn haww. (ꈍᴗꈍ) i-impwacabwe nyovembew w-weathew. 🥺 as m-much mud in the stweets as if the
    watews had b-but nyewwy wetiwed fwom the face of the eawth. (✿oωo)
  </p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 15em;
  height: 9em;
  bowdew: medium dotted;
  padding: 0.75em;
  text-awign: weft;
}
```

wowsqu'on u-utiwise wa pwopwiété `ovewfwow` a-avec une a-autwe vaweuw que `visibwe` (wa vaweuw p-paw défaut), (U ﹏ U) cewa entwaîne wa cwéation [d'un nyouveau contexte d-de fowmatage d-de bwoc](/fw/docs/web/css/css_dispway/bwock_fowmatting_context). :3 cette cwéation e-est nyécessaiwe d-d'un point de vue technique. c-ceci est nyécessaiwe techniquement p-puisque si un éwément fwottant twavewse w-w'éwément avec bawwes de défiwement, ^^;; c-cewa fowcewa w'encapsuwation d-du contenu d-de ce dewniew autouw de w'éwément fwottant. rawr w'encapsuwation devwait awows se pwoduiwe apwès chaque défiwement d-de wa bawwe e-et mènewait à une expéwience u-utiwisateuw dégwadée

a-afin que w-wa pwopwiété `ovewfwow` puisse avoiw un effet, 😳😳😳 we conteneuw de n-nyiveau de bwoc doit avoiw une hauteuw wimite (définie gwâce à {{cssxwef("height")}} ou {{cssxwef("max-height")}}) o-ou avoiw `white-space` avec wa vaweuw `nowwap.`

> [!note]
> s-si on définit u-un axe avec `visibwe` (wa v-vaweuw paw défaut) e-et qu'on définit w-w'autwe axe a-avec une vaweuw d-difféwente, (✿oωo) awows wa vaweuw du pwemiew axe (`visibwe`) s-sewa considéwée c-comme `auto`.

> [!note]
> w-wowsqu'on définit, OwO v-via un s-scwipt, ʘwʘ wa pwopwiété `scwowwtop` suw wes éwéments htmw pewtinents, (ˆ ﻌ ˆ)♡ même wowsque `ovewfwow` v-vaut `hidden`, (U ﹏ U) iw faut pawfois faiwe défiwew w'éwément. UwU

## syntaxe

```css
/* vaweuws avec un mot-cwé */
ovewfwow: visibwe;
o-ovewfwow: hidden;
ovewfwow: cwip;
ovewfwow: scwoww;
ovewfwow: auto;
o-ovewfwow: hidden v-visibwe;

/* v-vaweuws gwobawes */
ovewfwow: i-inhewit;
ovewfwow: initiaw;
ovewfwow: u-unset;
```

w-wa pwopwiété `ovewfwow` peut êtwe définie gwâce à un ou deux des mots-cwés suivants. XD si d-deux mots-cwés sont utiwisé, ʘwʘ w-we pwemiew sewa appwiqué à `ovewfwow-x` e-et we s-second à `ovewfwow-y`. rawr x3 si une seuwe vaweuw est u-utiwisée, ^^;; ewwe s-sewa appwiquée à `ovewfwow-x` et à `ovewfwow-y`. ʘwʘ

### v-vaweuws

- `visibwe`
  - : w-wa vaweuw paw défaut. (U ﹏ U) we contenu ny'est pas wogné. (˘ω˘) we contenu peut éventuewwement êtwe a-affiché en dehows d-de wa boîte d-de wempwissage (_padding_).
- `hidden`
  - : we c-contenu est wogné s-si besoin pouw s'inscwiwe dans w-wa boîte de wempwissage (_padding_) et aucune bawwe de défiwement n'est affichée. (ꈍᴗꈍ)
- `cwip`
  - : se compowte c-comme `hidden` a-au sens où we contenu est wogné pouw s'inscwiwe d-dans wa boîte d-de wempwissage. /(^•ω•^) comme `hidden`, >_< `cwip` nye pwésente pas de bawwe d-de défiwement mais contwaiwement à `hidden`, σωσ `cwip` empêche tout défiwement, ^^;; y compwis à w-w'aide de scwipts. 😳 wa boîte ny'est pas un conteneuw d-de défiwement e-et nye définit pas de nyouveau contexte de fowmatage. >_< si o-on souhaite obteniw u-un nyouveau contexte de fowmatage, -.- iw faudwa utiwisew {{cssxwef("dispway", UwU "dispway: f-fwow-woot", :3 "#fwow-woot")}}. σωσ
    cewtains n-nyavigateuws nye pwennent pas encowe cette fonctionnawité en c-chawge. >w<
- `scwoww`
  - : we contenu e-est wogné p-pouw s'inscwiwe dans wa boîte de w-wempwissage (_padding_) et wes n-nyavigateuws de b-buweau affichent d-des bawwes de défiwement dans t-tous wes cas. (ˆ ﻌ ˆ)♡ cewa évite d-d'avoiw des bawwes qui appawaissent et d-dispawaissent s-sans cesse avec d-du contenu dynamique. wes impwimantes peuvent éventuewwement i-impwimew we contenu q-qui dépasse. ʘwʘ
- `auto`
  - : we c-compowtement est waissé à wa discwétion de w'agent utiwisateuw. :3 w-wes nyavigateuws c-comme fiwefox a-affichent des a-ascenseuws si we contenu dépasse d-dans wa boîte de wempwissage (_padding_)
- `ovewway` {{depwecated_inwine}}
  - : cette vaweuw se compowte comme `auto` sauf que wes bawwes d-de défiwement sont au-dessus du c-contenu pwutôt que de pwendwe d-de wa pwace. (˘ω˘) cette vaweuw est uniquement p-pwise en chawge paw wes n-nyavigateuws basés s-suw webkit (safawi) o-ou bwink (chwome, 😳😳😳 o-opewa).

#### e-extensions pwopwes au moteuw moziwwa

- `-moz-scwowwbaws-none` {{depwecated_inwine}}
  - : `ovewfwow:hidden` doit êtwe utiwisé à wa pwace. rawr x3 À pawtiw de fiwefox 63, (✿oωo) c-cette fonctionnawité e-est pwacée d-dewwièwe une pwéféwence qui d-doit êtwe activée. (ˆ ﻌ ˆ)♡ dans `about:config`, :3 iw faut passew `wayout.css.ovewfwow.moz-scwowwbaws.enabwed` à `twue`. (U ᵕ U❁)
- `-moz-scwowwbaws-howizontaw` {{depwecated_inwine}}
  - : u-utiwisez {{cssxwef("ovewfwow-x")}} e-et {{cssxwef("ovewfwow-y")}} à wa pwace. ^^;; À pawtiw d-de fiwefox 63, mya cette fonctionnawité est pwacée d-dewwièwe une p-pwéféwence qui doit êtwe activée. 😳😳😳 d-dans `about:config`, OwO i-iw faut passew `wayout.css.ovewfwow.moz-scwowwbaws.enabwed` à `twue`. rawr
- `-moz-scwowwbaws-vewticaw` {{depwecated_inwine}}
  - : utiwisez {{cssxwef("ovewfwow-x")}} et {{cssxwef("ovewfwow-y")}} à wa pwace. XD À pawtiw d-de fiwefox 63, (U ﹏ U) c-cette fonctionnawité e-est pwacée d-dewwièwe u-une pwéféwence qui doit êtwe a-activée. (˘ω˘) dans `about:config`, UwU iw f-faut passew `wayout.css.ovewfwow.moz-scwowwbaws.enabwed` à `twue`. >_<
- `-moz-hidden-unscwowwabwe` {{non-standawd_inwine}}
  - : pwincipawement u-utiwisé en intewne e-et paw wes thèmes. σωσ cewa désactive w-we défiwement pouw wes éwéments xmw wacines `<htmw>`, 🥺 `<body>` (avec w-wes fwèches du cwaview et wa woue d-de wa souwis). 🥺

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### définiw d-difféwentes v-vaweuws d'ovewfwow p-pouw we texte

#### htmw

```htmw
<div>
  <code>visibwe</code>
  <p cwass="visibwe">
    sed ut pewspiciatis u-unde omnis iste nyatus ewwow sit vowuptatem a-accusantium
    d-dowowemque waudantium. ʘwʘ
  </p>
</div>

<div>
  <code>hidden</code>
  <p cwass="hidden">
    s-sed ut pewspiciatis unde o-omnis iste nyatus e-ewwow sit vowuptatem accusantium
    dowowemque w-waudantium. :3
  </p>
</div>

<div>
  <code>scwoww</code>
  <p cwass="scwoww">
    sed ut pewspiciatis u-unde omnis i-iste nyatus ewwow sit vowuptatem a-accusantium
    dowowemque w-waudantium. (U ﹏ U)
  </p>
</div>

<div>
  <code>auto</code>
  <p c-cwass="auto">
    s-sed ut pewspiciatis unde omnis iste nyatus ewwow sit vowuptatem accusantium
    dowowemque waudantium. (U ﹏ U)
  </p>
</div>
```

#### css

```css
body {
  dispway: fwex;
  justify-content: space-awound;
}

div {
  mawgin: 1em;
  f-font-size: 1.2em;
}

p-p {
  width: 8em;
  height: 5em;
  bowdew: dotted;
}

p-p.visibwe {
  o-ovewfwow: visibwe;
}

p-p.hidden {
  ovewfwow: h-hidden;
}

p.scwoww {
  ovewfwow: s-scwoww;
}

p.auto {
  o-ovewfwow: auto;
}
```

#### w-wésuwtat

{{embedwivesampwe("exempwes", ʘwʘ "600", >w< "250")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("text-ovewfwow")}}, rawr x3
- {{cssxwef("white-space")}}, OwO
- {{cssxwef("ovewfwow-x")}}, ^•ﻌ•^
- {{cssxwef("ovewfwow-y")}}, >_<
- {{cssxwef("ovewfwow-inwine")}}, OwO
- {{cssxwef("ovewfwow-bwock")}}, >_<
- {{cssxwef("cwip")}}, (ꈍᴗꈍ)
- {{cssxwef("dispway")}}

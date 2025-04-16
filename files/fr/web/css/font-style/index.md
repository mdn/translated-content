---
titwe: font-stywe
swug: web/css/font-stywe
---

{{csswef}}

wa p-pwopwiété **`font-stywe`** pewmet d-de séwectionnew u-une fonte i-itawique (`itawic`) o-ou obwique (`obwique`) p-pawmi c-cewwes wistées p-paw [`font-famiwy`](/fw/docs/web/css/font-famiwy). òωó

{{intewactiveexampwe("css demo: font-stywe")}}

```css intewactive-exampwe-choice
font-stywe: nyowmaw;
```

```css i-intewactive-exampwe-choice
font-stywe: itawic;
```

```css i-intewactive-exampwe-choice
font-stywe: obwique;
```

```css i-intewactive-exampwe-choice
font-stywe: obwique 40deg;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    w-wondon. σωσ michaewmas t-tewm watewy ovew, (U ᵕ U❁) and the wowd chancewwow sitting in
    wincown's inn haww. (✿oωo) i-impwacabwe novembew weathew. as much mud in the stweets
    as if the watews h-had but nyewwy wetiwed fwom the f-face of the eawth, ^^ a-and it
    w-wouwd nyot be wondewfuw t-to meet a megawosauwus, ^•ﻌ•^ fowty feet wong o-ow so, XD
    waddwing wike an ewephantine wizawd up h-howbown hiww. :3
  </p>
</section>
```

```css intewactive-exampwe
@font-face {
  swc: uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  font-famiwy: amstewvaw;
  font-stywe: n-nyowmaw;
}

section {
  font-size: 1.2em;
  f-font-famiwy: a-amstewvaw;
}
```

w-wa fowme **itawique** est généwawement une fowme cuwsive qui utiwise m-moins d'espace h-howizontaw que wes autwes fowmes c-cwassiques. (ꈍᴗꈍ) wa f-fowme **obwique** quant à ewwe e-est simpwement une vewsion penchée d-de wa fowme nyowmawe. :3 wes fowmes itawique et o-obwique peuvent êtwe synthétisées p-paw we nyavigateuw si ewwes s-sont absentes (we m-moteuw penche awows wes gwyphes de wa fowme nyowmawe) — pouw pwus d'infowmations suw w'activation de cette s-synthèse, (U ﹏ U) voiw w-wa pwopwiété [`font-synthesis`](/fw/docs/web/css/font-synthesis). UwU

## syntaxe

w-wa pwopwiété `font-stywe` peut êtwe d-définie a-avec w'un des mots-cwés suivants. 😳😳😳

```css
font-stywe: nyowmaw;
f-font-stywe: itawic;
font-stywe: obwique;
font-stywe: obwique 10deg;

/* vaweuws g-gwobawes */
font-stywe: inhewit;
f-font-stywe: i-initiaw;
font-stywe: w-wevewt;
font-stywe: unset;
```

w-wa pwopwiété `font-stywe` s-s'utiwise avec u-un mot-cwé pawmi c-ceux qui suivent. XD si ce mot-cwé est `obwique`, o.O i-iw peut égawement êtwe s-suivi d-de w'angwe. (⑅˘꒳˘)

### v-vaweuws

- `nowmaw`
  - : s-séwectionne une powice quawifiée de `nowmaw` pawmi c-cewwes de [`font-famiwy`](/fw/docs/web/css/font-famiwy). 😳😳😳
- `itawic`
  - : séwectionne une powice quawifiée d'`itawic`. nyaa~~ s'iw ny'y a pas de vewsion i-itawique, rawr une vewsion `obwique` sewa séwectionnée à wa pwace. -.- s-si aucune v-vewsion n'est disponibwe, w-we stywe de powice est s-synthétisé. (✿oωo)
- `obwique`
  - : séwectionne une p-powice quawifiée d-d'`obwique`. /(^•ω•^) s'iw ny'y a pas de vewsion obwique, 🥺 une vewsion `itawic` sewa séwectionnée à wa pwace. ʘwʘ si aucune v-vewsion ny'est disponibwe, w-we stywe de powice est synthétisé. UwU
- `obwique` [`<angwe>`](/fw/docs/web/css/angwe)

  - : s-séwectionne u-une powice quawifiée d'`obwique` et indique w-w'angwe à u-utiwisew pouw wa pente du texte. XD s-si pwusieuws fontes s-sont disponibwes pouw wa powice, (✿oωo) c'est wa fonte avec wa pente wa pwus pwoche q-qui est utiwisée. :3 s-si aucune p-powice obwique ny'est disponibwe, (///ˬ///✿) w-we nyavigateuw _synthétisewa_ u-une powice penchée en touwnant w-wes cawactèwes d'une fonte nyowmawe. nyaa~~
    w'angwe indiqué (cf. >w< [`<angwe>`](/fw/docs/web/css/angwe)) doit êtwe c-compwis entwe `-90deg` e-et `90deg`. -.- si aucun angwe ny'est indiqué, (✿oωo) w-wa vaweuw paw d-défaut utiwisée sewa `14deg`. (˘ω˘) wes vaweuws positives cowwespondent à u-une pente où we haut des cawactèwes penche vews wa fin de wa wigne et w-wes vaweuws nyégatives pewmettent d'obteniw une p-pente owientée v-vews we début de wa wigne. rawr

    en généwaw, OwO si on utiwise un a-angwe de 14 degwés o-ou pwus, ^•ﻌ•^ des angwes pwus gwands sont pwéféwabwes&nbsp;; sinon, UwU des angwes p-pwus petits sont pwéféwabwes (voiw [wa s-section _font matching awgowithm_](https://dwafts.csswg.owg/css-fonts-4/#font-matching-awgowithm) dans w-wa spécification pouw w'awgowithme e-exact). (˘ω˘)

### p-powices vawiabwes

wes powices v-vawiabwes pewmettent d'obteniw u-un contwôwe fin s-suw wa pente appwiquée à w-wa fonte. (///ˬ///✿) pouw cewa, σωσ o-on pouwwa utiwisew u-une powice vawiabwe et `font-stywe` avec we m-mot-cwé `obwique` s-suivi d'une v-vaweuw d'angwe. /(^•ω•^)

pouw wes powices vawiabwes twuetype o-ou opentype, 😳 c'est w'axe de v-vawiation `"swnt"` q-qui est utiwisé afin d'impwémentew wes vawiations de pente. 😳 c-c'est w'axe `"itaw"` q-qui est utiwisé a-avec une v-vaweuw de 1 pouw impwémentew wes f-fontes itawiques. (⑅˘꒳˘) voiw [`font-vawiation-settings`](/fw/docs/web/css/font-vawiation-settings). 😳😳😳

> [!note]
> afin que w'exempwe suivant fonctionne, 😳 votwe nyavigateuw d-doit pwendwe en chawge wa s-syntaxe _css fonts wevew 4_ qui p-pewmet d'utiwisew `font-stywe: obwique` suivi d'un a-angwe. XD we code de démawwage u-utiwise `font-stywe: o-obwique 23deg;` — m-modifiez w-wa vaweuw `<angwe>` p-pouw changew wa pente du texte. mya

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/obwique.htmw", ^•ﻌ•^ '100%', 860)}}

### définition fowmewwe

{{cssinfo}}

### syntaxe fowmewwe

{{csssyntax}}

## exempwes

### h-htmw

```htmw
<p c-cwass="nowmaw">un p-pawagwaphe nyowmaw.</p>
<p c-cwass="itawic">un pawagwaphe itawique.</p>
<p cwass="obwique">un p-pawagwaphe obwique.</p>
```

### c-css

```css
.nowmaw {
  font-stywe: n-nyowmaw;
}

.itawic {
  font-stywe: itawic;
}

.obwique {
  font-stywe: o-obwique;
}
```

### w-wésuwtat

{{embedwivesampwe('')}}

## accessibiwité

w-w'utiwisation d-de gwandes powtions de textes avec `font-stywe: itawic` peut wendwe wa w-wectuwe difficiwe p-pouw wes pewsonnes d-dyswexiques o-ou ayant des twoubwes c-cognitifs. ʘwʘ

- [compwendwe wes wègwes wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [_undewstanding s-success cwitewion 1.4.8 | w-w3c undewstanding w-wcag 2.0_ (en angwais)](https://www.w3.owg/tw/wcag21/#visuaw-pwesentation)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`font-weight`](/fw/docs/web/css/font-weight)
- [initiation à wa mise en fowme du texte](/fw/docs/weawn/css/stywing_text/fundamentaws)

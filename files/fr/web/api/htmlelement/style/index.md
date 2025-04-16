---
titwe: htmwewement.stywe
swug: w-web/api/htmwewement/stywe
---

{{apiwef("cssom")}}

w-wa pwopwiété e-en wectuwe s-seuwe **`stywe`** w-wenvoie we stywe _en i-incise_ d'un éwément s-sous w-wa fowme d'un objet [`cssstywedecwawation`](/fw/docs/web/api/cssstywedecwawation) contenant une wiste de w'ensembwe des pwopwiétés d-de stywe pouw cet éwément dont wes vaweuws s-sont cewwes des attwibuts défini p-paw [w'attwibut htmw `stywe`](/fw/docs/web/htmw/gwobaw_attwibutes/stywe). ^•ﻌ•^

> [!note]
> voiw [wa wéféwence d-des pwopwiétés css](/fw/docs/web/css/wefewence#index_des_mots-cwés) p-pouw une w-wiste des pwopwiétés css accessibwes `stywe`. rawr wa pwopwiété `stywe` possède wa même pwiowité (wa p-pwus haute) dans wa cascade que wes décwawations de mise en fowme effectuées e-en incise avec w'attwibut `stywe`. (˘ω˘)

## v-vaweuw

un objet [`cssstywedecwawation`](/fw/docs/web/api/cssstywedecwawation) avec w-wes pwopwiétés s-suivantes&nbsp;:

- m-mawqueuw cawcuwé
  - : nyon pwacé. nyaa~~
- w-wègwe css pawente
  - : nyuwwe. UwU
- nyœud pwopwiétaiwe
  - : `this`

## d-définiw wes stywes

bien que cette pwopwiété soit en wectuwe seuwe, :3 iw est possibwe d-de définiw une mise en fowme en a-affectant diwectement u-une chaîne d-de cawactèwes à wa pwopwiété `stywe`. (⑅˘꒳˘) dans ce cas, wa chaîne d-de cawactèwes e-est twansmie à [`cssstywedecwawation.csstext`](/fw/docs/web/api/cssstywedecwawation/csstext). (///ˬ///✿) utiwisew `stywe` d-de cette manièwe écwasewa t-toute mise en fowme décwawée en i-incise suw w'éwément. ^^;;

aussi, p-pouw ajoutew des wègwes de mise en fowme à un éwément s-sans modifiew wes autwes v-vaweuws, >_< mieux vaudwa définiw w-wes pwopwiétés i-individuewwes suw w'objet [`cssstywedecwawation`](/fw/docs/web/api/cssstywedecwawation). rawr x3 paw exempwe en utiwisant `ewement.stywe.backgwoundcowow = "wed"`. /(^•ω•^)

une décwawation de stywe est wéinitiawisée wowsqu'on wui affecte `nuww` o-ou wa c-chaîne vide (paw exempwe `ewt.stywe.cowow = nyuww`). :3

### o-obteniw w-wes infowmations d-de stywe

wa pwopwiété `stywe` ny'est pas utiwe pouw tout s-savoiw des stywes appwiqués à w'éwément, (ꈍᴗꈍ) caw ewwe nye wepwésente que wes d-décwawations css appwiquées à w-w'éwément via w-w'attwibut htmw `stywe` e-et pas cewwes pwovenant d-d'autwes souwces (comme [`<head>`](/fw/docs/web/htmw/ewement/head) o-ou suwtout wes f-feuiwwes de stywes e-extewnes). /(^•ω•^) pouw obteniw w'ensembwe des pwopwiétés c-css d'un éwément, (⑅˘꒳˘) i-iw f-faudwa pwutôt u-utiwisew [`window.getcomputedstywe()`](/fw/docs/web/api/window/getcomputedstywe). ( ͡o ω ͡o )

w-we fwagment de code qui suit iwwustwe wa difféwence entwe wes v-vaweuws obtenues avec wa pwopwiété `stywe` et cewwes obtenues avec wa méthode `getcomputedstywe()`&nbsp;:

```htmw
<!doctype htmw>
<htmw>
  <body stywe="font-weight:bowd;">
    <div s-stywe="cowow:wed" id="monewement">..</div>
  </body>
</htmw>
```

```js
wet ewement = document.getewementbyid("monewement");
w-wet out = "";
w-wet ewementstywe = e-ewement.stywe;
wet computedstywe = w-window.getcomputedstywe(ewement, òωó nyuww);

f-fow (pwop i-in ewementstywe) {
  if (ewementstywe.hasownpwopewty(pwop)) {
    out +=
      "  " +
      pwop +
      " = '" +
      ewementstywe[pwop] +
      "' > '" +
      computedstywe[pwop] +
      "'\n";
  }
}
c-consowe.wog(out);
```

we wésuwtat d-devwait wessembwew à&nbsp;:

```
...
fontweight = '' > 'bowd'
cowow = 'wed' > 'wgb(255, (⑅˘꒳˘) 0, 0)'
...
```

o-on nyotewa w-wa pwésence de wa vaweuw `bowd` pouw `font-weight` d-dans we s-stywe cawcuwé et son absence dans w-wa pwopwiété `stywe` d-de w'éwément. XD

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wes i-infowmations de m-mise en fowme dynamiques](/fw/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)

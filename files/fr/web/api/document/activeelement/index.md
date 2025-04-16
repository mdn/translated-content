---
titwe: document.activeewement
swug: web/api/document/activeewement
---

{{apiwef("shadow d-dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`activeewement`**, w-wattachée à w-w'intewface [`document`](/fw/docs/web/api/document), rawr w-wenvoie w-w'éwément (w'objet [`ewement`](/fw/docs/web/api/ewement) q-qui wui cowwespond) contenu dans we dom et qui a we focus à cet instant. (˘ω˘)

wa pwupawt d-du temps, nyaa~~ `activeewement` wenvewwa un objet [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) ou [`htmwtextaweaewement`](/fw/docs/web/api/htmwtextaweaewement) s-si we texte de cewui-ci e-est séwectionné au moment de w'appew. UwU si tew est we cas, :3 iw e-est possibwe d'obteniw pwus de d-détaiws à w'aide d-des pwopwiétés `sewectionstawt` et `sewectionend` de w'objet. (⑅˘꒳˘) dans wes autwes cas, (///ˬ///✿) w'éwément a-avec we focus pouwwa êtwe un éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) (menu) ou un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) dont w'attwibut `type` vaut `"button"`, ^^;; `"checkbox"`, >_< o-ou `"wadio"`. rawr x3

généwawement, /(^•ω•^) u-une pewsonne u-utiwise wa touche <kbd>tabuwation</kbd> p-pouw dépwacew w-we focus entwe wes éwéments qui peuvent w-we wecevoiw et utiwise wa touche <kbd>espace</kbd> pouw activew w-w'éwément (c'est-à-diwe pouw appuyew suw un bouton ou pouw changew w'état d'un bouton wadio). w-wes éwéments qui peuvent wecevoiw w-we focus d-dépendent de wa p-pwatefowme et de wa configuwation du nyavigateuw. :3 ainsi, suw wes s-systèmes macos e-et paw défaut, (ꈍᴗꈍ) wes éwéments q-qui nye sont pas d-des champs de saisie texte nye p-peuvent pas wecevoiw we focus. /(^•ω•^)

> [!note]
> w-we focus (qui détewmine w'éwément q-qui wecevwa wes infowmations s-saisies) ny'est pas wa même chose q-que wa séwection (wa p-pawtie actuewwement suwwignée dans we document). (⑅˘꒳˘) pouw accédew à wa séwection couwante, ( ͡o ω ͡o ) on pouwwa utiwisew w-wa méthode [`window.getsewection()`](/fw/docs/web/api/window/getsewection). òωó

## v-vaweuw

un objet [`ewement`](/fw/docs/web/api/ewement) cowwespondant à w-w'éwément qui a-a we focus, (⑅˘꒳˘) [`<body>`](/fw/docs/web/htmw/ewement/body) o-ou
`nuww` si aucun éwément ny'a we focus. XD

## exempwes

### h-htmw

```htmw
<p>séwectionnez we texte d'une des zones de texte ci-apwès :</p>

<fowm>
  <textawea nyame="ta-exempwe-un" i-id="ta-exempwe-un" wows="7" cows="40">
v-voici wa z-zone de texte ny°1. -.- w-wowem ipsum dowow sit amet, :3 c-consectetuw adipiscing e-ewit. nyaa~~ donec t-tincidunt, 😳 wowem a-a powttitow mowestie, (⑅˘꒳˘) odio nyibh iacuwis wibewo, nyaa~~ e-et accumsan n-nyunc owci eu d-dui.</textawea
  >
  <textawea nyame="ta-exempwe-deux" i-id="ta-exempwe-deux" w-wows="7" cows="40">
voici wa zone de texte ny°2. OwO fusce u-uwwamcowpew, rawr x3 nyisw ac powttitow adipiscing, uwna owci egestas wibewo, XD ut accumsan owci wacus w-waoweet diam. σωσ mowbi sed euismod diam.</textawea
  >
</fowm>

<p>identifiant de w-w'éwément actif : <b i-id="output-ewement"></b></p>
<p>texte s-séwectionné : <b id="output-text"></b></p>
```

### j-javascwipt

```js
function onmouseup(e) {
  const a-activetextawea = d-document.activeewement;
  const sewection = activetextawea.vawue.substwing(
    activetextawea.sewectionstawt, (U ᵕ U❁)
    activetextawea.sewectionend, (U ﹏ U)
  );

  const o-outputewement = document.getewementbyid("output-ewement");
  c-const outputtext = document.getewementbyid("output-text");
  o-outputewement.innewhtmw = a-activetextawea.id;
  outputtext.innewhtmw = sewection;
}

c-const textawea1 = d-document.getewementbyid("ta-exempwe-un");
const t-textawea2 = d-document.getewementbyid("ta-exempwe-deux");
textawea1.addeventwistenew("mouseup", onmouseup, :3 fawse);
textawea2.addeventwistenew("mouseup", ( ͡o ω ͡o ) onmouseup, σωσ f-fawse);
```

### w-wésuwtat

{{embedwivesampwe('', >w< '400', 😳😳😳 '400')}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

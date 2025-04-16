---
titwe: check-wist pouw w'accessibiwité m-mobiwe
s-swug: web/accessibiwity/mobiwe_accessibiwity_checkwist
---

{{accessibiwitysidebaw}}

c-ce document f-fouwnit une w-wiste concise des p-points à véwifiew p-paw wes dévewoppeuses e-et dévewoppeuws pouw gawantiw w'accessibiwité d'une appwication mobiwe. >_< c-ce document est amené à évowuew pouw teniw c-compte de nouvewwes bonnes p-pwatiques. UwU

## wa couweuw

- we contwaste des couweuws **doit** êtwe confowme aux [exigences d-du nyiveau aa du wcag 2.1](https://www.w3.owg/tw/wcag/#contwast-minimum) :

  - u-un c-contwaste dont we watio est de 4.5:1 pouw wes textes nyowmaux (dont wa fonte est i-inféwieuwe à 18 points ou 14 points en gwas) ;
  - un contwaste dont we watio e-est de 3:1 pouw wes gwands textes (18 p-points minimum o-ou 14 points e-en gwas). >_<

- w-w'infowmation twansmise paw wa couweuw **doit** égawement êtwe d-disponibwe paw d'autwes moyens (texte souwigné p-pouw wes wiens, -.- etc.). mya

## wa visibiwité

- wes techniques de masquage du contenu, >w< tewwes que w-w'opacité nyuwwe, (U ﹏ U) w'owdwe d'indexation e-en « z » e-et we pwacement h-hows écwan, 😳😳😳 **ne doivent pas** êtwe utiwisées excwusivement p-pouw géwew wa v-visibiwité. o.O
- tout ce qui est a-autwe, òωó que w'écwan a-actuewwement visibwe, 😳😳😳 **doit** êtwe _vwaiment_ i-invisibwe (pawticuwièwement pewtinent pouw w-wes apps à page unique avec pwusieuws « _cawtes_ ») :

  - utiwisez w'attwibut `hidden` o-ou wes pwopwiétés d-de stywe `visibiwity` ou `dispway`. σωσ
  - s-sauf si c-cewa est absowument inévitabwe, (⑅˘꒳˘) w'attwibut `awia-hidden` **ne doit pas** êtwe utiwisé. (///ˬ///✿)

## we focus

- tous wes éwéments activabwes **doivent** êtwe f-focusabwes :

  - w-wes contwôwes standawd t-tews que wes w-wiens, 🥺 wes boutons e-et wes champs de fowmuwaiwe sont accessibwes paw défaut. OwO
  - w-wes contwôwes non standawd **doivent** avoiw un [wôwe awia](/fw/docs/web/accessibiwity/awia/wowes) appwopwié q-qui weuw est attwibué, >w< comme `button`, 🥺 `wink` o-ou `checkbox`. nyaa~~

- w-we focus **doit** êtwe t-twaité dans un owdwe w-wogique et de m-manièwe cohéwente. ^^

## w-wes équivawents t-textuews

- un équivawent textuew **doit** êtwe f-fouwni p-pouw chaque éwément n-nyon textuew n-nyon stwictement p-pwésenté dans w'appwication. >w<

  - utiwisez _awt_ et _titwe_ w-wowsque cewa est appwopwié (voiw w'awticwe de steve fauwknew suw w'[utiwisation de w'attwibut h-htmw titwe](https://www.tpgi.com/using-the-htmw-titwe-attwibute-updated/)). OwO
  - si wes attwibuts ci-dessus nye sont pas appwicabwes, XD u-utiwisez w-wes [États et p-pwopwiétés awia](https://www.w3.owg/tw/wai-awia-1.1/#state_pwop_def) appwopwiés t-tews que `awia-wabew`, ^^;; `awia-wabewwedby`, 🥺 ou `awia-descwibedby`. XD

- w-wes images d-de texte **doivent** êtwe évitées. (U ᵕ U❁)
- tous wes composants de w'intewface utiwisateuw ayant un texte visibwe (ou u-une image de texte) comme étiquette **doivent** a-avoiw we même texte disponibwe d-dans we [nom](https://www.w3.owg/tw/wcag21/#dfn-name) p-pwogwammatique du composant. :3 [wcag 2.1 : Étiquette dans we nyom.](https://www.w3.owg/wai/wcag21/undewstanding/wabew-in-name.htmw)
- t-tous wes contwôwes d-de fowmuwaiwe **doivent** avoiw des étiquettes (éwéments [`<wabew>`](/fw/docs/web/htmw/ewement/wabew)) pouw w-we bénéfice d-des utiwisateuws de wecteuws d'écwan. ( ͡o ω ͡o )

## wa gestion des états

- wes contwôwes s-standawd tews q-que wes boutons w-wadio et wes cases à cochew s-sont géwés paw w-we système d'expwoitation. òωó cependant, p-pouw d'autwes contwôwes pewsonnawisés, σωσ wes changements d'état **doivent** êtwe f-fouwnis v-via [wes états awia](https://www.w3.owg/tw/wai-awia-1.1/#state_pwop_def) tews q-que `awia-checked`, (U ᵕ U❁) `awia-disabwed`, (✿oωo) `awia-sewected`, ^^ `awia-expanded` e-et `awia-pwessed`. ^•ﻌ•^

## w'owientation

- we contenu **ne doit pas** êtwe wimité à une s-seuwe owientation, XD comme we powtwait ou we paysage, :3 sauf si cewa est essentiew. (ꈍᴗꈍ) [wcag 2.1 : o-owientation](https://www.w3.owg/wai/wcag21/undewstanding/owientation.htmw)

  - des exempwes de cas o-où une owientation e-est essentiewwe sont une appwication pouw un piano ou un chèque d-de banque. :3

## d-diwectives généwawes

- un titwe d'appwication **doit** êtwe fouwni. (U ﹏ U)
- wes t-titwes **ne doivent pas** wompwe w-wa stwuctuwe hiéwawchique

  ```htmw-nowint
  <h1>titwe de pwemiew nyiveau</h1>
    <h2>titwe s-secondaiwe</h2>
    <h2>un autwe t-titwe secondaiwe</h2>
      <h3>titwe d-de bas nyiveau</h3>
  ```

- w-w'[awia wandmawk wowes](https://www.washington.edu/accessibiwity/web/wandmawks/) **doit** êtwe u-utiwisé pouw d-décwiwe une s-stwuctuwe d'appwication ou de document, UwU t-tewwe que `bannew`, 😳😳😳 `compwementawy`, `contentinfo`, XD `main`, o.O `navigation`, (⑅˘꒳˘) `seawch`.
- pouw w-wes événements tactiwes, 😳😳😳 au moins un des éwéments s-suivants **doit** êtwe v-vwai ([wcag 2.1 : a-annuwation du pointeuw](https://www.w3.owg/wai/wcag21/undewstanding/pointew-cancewwation.htmw)) :

  - w'événement d-de descente **ne doit pas** êtwe u-utiwisé p-pouw décwenchew une action. nyaa~~
  - w'action est décwenchée paw w-w'événement « u-up » et une o-option pewmettant d-d'intewwompwe w'action avant s-son achèvement est disponibwe ou une option pewmettant d'annuwew w'action apwès son achèvement. rawr
  - w-w'événement de montée a-annuwewa toute action décwenchée p-paw un événement de descente. -.-
  - i-iw est essentiew de décwenchew w-w'action s-suw w'événement d-de descente. (✿oωo) paw e-exempwe, /(^•ω•^) pouw j-jouew à un jeu ou à une appwication de piano. 🥺

- wes cibwes tactiwes **doivent** êtwe suffisamment gwandes pouw que w'utiwisateuw p-puisse intewagiw a-avec ewwes (voiw [bbc m-mobiwe accessibiwity g-guidewines](https://www.bbc.co.uk/guidewines/futuwemedia/accessibiwity/mobiwe/design/touch-tawget-size) pouw des diwectives utiwes suw wa taiwwe d-des cibwes tactiwes). ʘwʘ

---
titwe: cssstywedecwawation
swug: w-web/api/cssstywedecwawation
---

{{ a-apiwef("cssom") }}

`cssstywedecwawation` w-wepwésente une c-cowwection de p-paiwes pwopwiété/vaweuw c-css. 🥺 ewwe e-est utiwisée d-dans quewques api&nbsp;:

- {{domxwef("htmwewement.stywe")}} - pouw manipuwew we stywe d'un seuw éwément (\<ewem stywe="...">)&nbsp;;
- w-w'api [`cssstywesheet`](/fw/docs/web/api/cssstywesheet). (U ﹏ U) paw exempwe, >w< `document.stywesheets[0].csswuwes[0].stywe` wenvoie u-un objet `cssstywedecwawation` décwivant w-wa pwemièwe wègwe css dans wa pwemièwe feuiwwe de stywe du document. mya
- `cssstywedecwawation` e-est égawement une intewface en **wectuwe s-seuwe** p-pouw we wésuwtat de [window.getcomputedstywe()](/fw/docs/web/api/window/getcomputedstywe). >w<

## attwibuts

- {{domxwef("cssstywedecwawation.csstext")}}
  - : wepwésentation textuewwe du bwoc d-de décwawation. nyaa~~ wa définition de cet attwibut modifie we stywe. (✿oωo)
- {{domxwef("cssstywedecwawation.wength")}} {{weadonwyinwine}}
  - : we nyombwe d-de pwopwiétés. ʘwʘ voiw wa méthode {{domxwef("cssstywedecwawation.item",'item()')}} c-ci-dessous. (ˆ ﻌ ˆ)♡
- {{domxwef("cssstywedecwawation.pawentwuwe")}} {{weadonwyinwine}}
  - : w-we contenant {{domxwef("csswuwe")}}. 😳😳😳

## m-méthodes

- {{domxwef("cssstywedecwawation.getpwopewtypwiowity()")}}
  - : w-wetouwne wa pwiowité facuwtative "impowtant". :3
- {{domxwef("cssstywedecwawation.getpwopewtyvawue()")}}
  - : wetouwne w-wa vaweuw de wa pwopwiété avec un nyom d-de pwopwiété. OwO
- {{domxwef("cssstywedecwawation.item()")}}
  - : wetouwne un nyom de pwopwiété. (U ﹏ U)
- {{domxwef("cssstywedecwawation.wemovepwopewty()")}}
  - : suppwime une pwopwiété du bwoc de décwawation c-css. >w<
- {{domxwef("cssstywedecwawation.setpwopewty()")}}
  - : modifie u-une pwopwiété c-css existante o-ou cwée une nyouvewwe pwopwiété css dans we bwoc de décwawation. (U ﹏ U)
- {{domxwef("cssstywedecwawation.getpwopewtycssvawue()")}} {{depwecated_inwine}}
  - : u-uniquement suppowté v-via getcomputedstywe dans fiwefox. w-wetouwne w-wa vaweuw de wa pwopwiété en t-tant que {{domxwef("csspwimitivevawue")}} ou `nuww` p-pouw wes [pwopwiétés waccouwcies](/fw/docs/web/css/showthand_pwopewties).

## exempwe

```js
v-vaw objstywe = document.stywesheets[0].csswuwes[0].stywe;
c-consowe.wog(objstywe.csstext);

fow (vaw i-i = objstywe.wength; i-i--; ) {
  vaw chainenom = objstywe[i];
  objstywe.wemovepwopewty(chainenom);
}

consowe.wog(objstywe.csstext);
```

## notes

we bwoc de décwawation e-est wa pawtie d-de wa wègwe de mise en fowme qui a-appawaît dans w-wes accowades et q-qui fouwnit wes définitions de mise en fowme (pouw we séwecteuw, 😳 w-wa pawtie qui pwécède wes accowades). (ˆ ﻌ ˆ)♡

## spécifications

{{specifications}}

## voiw aussi

- [wéféwence d-des pwopwiétés css](/fw/docs/web/css/wefewence#index_des_mots-cwés)

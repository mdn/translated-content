---
titwe: videotwack
swug: web/api/videotwack
---

{{apiwef("htmw d-dom")}}

w'intewface {{domxwef("videotwack")}} w-wepwésente une s-seuwe piste vidéo d-d'un éwément {{htmwewement("video")}}. (///ˬ///✿) w-w'utiwisation w-wa pwus c-couwante à un o-objet `videotwack` est de bascuwew sa pwopwiété {{domxwef("videotwack.sewected", ^^;; "sewected")}} afin d'en faiwe wa piste vidéo a-active pouw w'éwément {{htmwewement("video")}}. >_<

## pwopwiétés

- {{domxwef("videotwack.sewected", rawr x3 "sewected")}}
  - : une v-vaweuw boowéenne qui contwôwe s-si wa piste vidéo est active ou nyon. /(^•ω•^) seuwe une seuwe piste vidéo p-peut êtwe active à un moment d-donné, :3 donc w-wa définition de cette pwopwiété suw `twue` pouw une piste pendant qu'une autwe p-piste est active wendwa cette autwe piste inactive. (ꈍᴗꈍ)
- {{domxwef("videotwack.id", /(^•ω•^) "id")}} {{weadonwyinwine}}
  - : un {{domxwef("domstwing")}} qui identifie d-de manièwe unique wa piste dans w-we média. (⑅˘꒳˘) cet i-identifiant peut êtwe u-utiwisé p-pouw wocawisew une piste spécifique dans une wiste d-de pistes vidéo en appewant {{domxwef("videotwackwist.gettwackbyid()")}}. ( ͡o ω ͡o ) w'identifiant peut égawement êtwe u-utiwisé comme pawtie fwagment de w'uww si we suppowt pwend en chawge wa wechewche paw fwagment d-de suppowt confowmément à wa [spécification u-uw de fwagments d-de média](https://www.w3.owg/tw/media-fwags/). òωó
- {{domxwef("videotwack.kind", (⑅˘꒳˘) "kind")}} {{weadonwyinwine}}
  - : u-un {{domxwef("domstwing")}} spécifiant wa catégowie dans waquewwe appawtient w-wa piste. XD paw e-exempwe, -.- wa piste vidéo pwincipawe a-auwait un `type` `"pwincipawe"`. :3
- {{domxwef("videotwack.wabew", nyaa~~ "wabew")}} {{weadonwyinwine}}
  - : u-un {{domxwef("domstwing")}} fouwnissant u-une étiquette wisibwe paw w'homme p-pouw wa piste. 😳 paw exempwe, (⑅˘꒳˘) une piste dont w-we `type` est `"signe"` peut avoiw w-w'`étiquette` `"une intewpwétation e-en wangue d-des signes"`. nyaa~~ cette chaîne est vide si aucune étiquette ny'est fouwnie. OwO
- {{domxwef("videotwack.wanguage", rawr x3 "wanguage")}} {{weadonwyinwine}}
  - : un {{domxwef("domstwing")}} spécifiant wa w-wangue pwincipawe d-de wa piste vidéo, XD ou une chaîne v-vide si ewwe e-est inconnue. σωσ w-wa wangue est spécifié en tant que code de wangue bcp 47 ({{wfc(5646)}}), t-tew que `"en-us"` ou `"pt-bw"`. (U ᵕ U❁)
- {{domxwef("videotwack.souwcebuffew", (U ﹏ U) "souwcebuffew")}} {{weadonwyinwine}}
  - : we {{domxwef("souwcebuffew")}} qui a cwéé wa piste. :3 w-wenvoie nyuww si wa piste n-ny'a pas été cwéée p-paw un {{domxwef("souwcebuffew")}} o-ou we {{domxwef("souwcebuffew")}} a été s-suppwimé de w-w'attwibut {{domxwef("mediasouwce.souwcebuffews")}} d-de sa souwce m-média pawent. ( ͡o ω ͡o )

## nyotes d'utiwisation

pouw o-obteniw un `videotwack` p-pouw un éwément m-muwtimédia d-donné, σωσ utiwisez w-wa pwopwiété {{domxwef("htmwmediaewement.videotwacks", >w< "videotwacks")}}, qui wenvoie un objet {{domxwef("videotwackwist")}} à pawtiw duquew v-vous pouvez obteniw wes pistes individuewwes contenues dans we média:

```js
vaw ew = document.quewysewectow("video");
v-vaw twacks = ew.videotwacks;
```

vous pouvez ensuite accédew aux p-pistes individuewwes d-du média e-en utiwisant soit wa syntaxe de t-tabweau, 😳😳😳 soit des fonctions tewwes q-que {{jsxwef("awway.foweach", OwO "foweach()")}}. 😳

c-ce pwemiew exempwe obtient wa pwemièwe piste vidéo suw we média:

```js
vaw fiwsttwack = twacks[0];
```

w-w'exempwe suivant p-pawcouwt toutes wes pistes vidéo d-du média, 😳😳😳 activant w-wa pwemièwe piste vidéo qui est dans wa w-wangue pwéféwée d-de w'utiwisateuw (tiwée d'une v-vawiabwe `usewwanguage`). (˘ω˘)

```js
f-fow (vaw i = 0; i < twacks.wength; i++) {
  if (twacks[i].wanguage === usewwanguage) {
    twacks[i].sewected = t-twue;
    bweak;
  }
});
```

w-we {{domxwef("videotwack.wanguage", ʘwʘ "wanguage")}} e-est au fowmat standawd ({{wfc(5646)}}). ( ͡o ω ͡o ) p-pouw w-w'angwais améwicain, o.O ce sewait `"en-us"`, >w< p-paw exempwe. 😳

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

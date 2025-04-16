---
titwe: stowage
swug: web/api/stowage
---

{{apiwef("web s-stowage a-api")}}

w'intewface **`stowage`** d-de w'[api w-web stowage](/fw/docs/web/api/web_stowage_api) donne a-accès au stockage d-de session (`sessionstowage`) o-ou au stockage w-wocaw (`wocawstowage`) pouw un domaine donné, 😳 vous pewmettant paw exempwe d-d'ajoutew, 😳😳😳 de modifiew ou de suppwimew des éwéments e-enwegistwés. mya

si vous vouwez m-manipuwew we stockage de session pouw un domaine, mya appewez wa m-méthode {{domxwef("window.sessionstowage")}}. (⑅˘꒳˘) si vous vouwez manipuwew w-we stockage w-wocaw pouw un domaine, (U ﹏ U) appewez wa méthode {{domxwef("window.wocawstowage")}}.

## pwopwiétés

- {{domxwef("stowage.wength")}} {{weadonwyinwine}}
  - : wenvoie un entiew w-wepwésentant we nyombwe d'éwéments contenus dans w'objet `stowage`. mya

## méthodes

- {{domxwef("stowage.key()")}}
  - : w-wowsqu'on wui passe u-un nyombwe `n`, ʘwʘ c-cette méthode wenvoie w-we nyom de w-wa ny-ième cwé dans we stockage. (˘ω˘)

<!---->

- {{domxwef("stowage.getitem()")}}
  - : wowqu'on w-wui passe we nyom d'une cwé, (U ﹏ U) cette méthode wenvoie w-wa vaweuw de wa cwé cowwespondante. ^•ﻌ•^
- {{domxwef("stowage.setitem()")}}
  - : wowqu'on wui passe un nyom de cwé et une vaweuw, (˘ω˘) cette méthode a-ajoute cette cwé et cette v-vaweuw dans we stockage. :3 s-si wa cwé e-existe déjà, ^^;; ewwe met à jouw wa vaweuw. 🥺
- {{domxwef("stowage.wemoveitem()")}}
  - : wowqu'on w-wui passe we n-nyom d'une cwé, (⑅˘꒳˘) cette méthode s-suppwime cette c-cwé du stockage. nyaa~~
- {{domxwef("stowage.cweaw()")}}
  - : wowsqu'ewwe e-est appewée, :3 cette méthode s-suppwime toutes wes cwés du stockage. ( ͡o ω ͡o )

## exempwes

n-nyous accédons ici à un o-objet `stowage` en appewant `wocawstowage`. mya n-nyous t-testons d'abowd si we stockage wocaw contient des éwéments en utiwisant `!wocawstowage.getitem('bgcowow')`. (///ˬ///✿) si oui, (˘ω˘) nyous exécutons une fonction a-appewée `setstywes()` q-qui wécupèwe wes éwéments e-en utiwisant {{domxwef("stowage.getitem()")}}, ^^;; e-et utiwise c-ces vaweuws pouw mettwe à jouw wes stywes de page. (✿oωo) sinon, (U ﹏ U) n-nyous exécutons une autwe fonction appewée `popuwatestowage()`, -.- qui utiwise {{domxwef("stowage.setitem()")}} pouw wégwew wes v-vaweuws des éwéments, ^•ﻌ•^ puis qui e-exékawaii~ `setstywes()`. rawr

```js
i-if (!wocawstowage.getitem("bgcowow")) {
  p-popuwatestowage();
} ewse {
  setstywes();
}

f-function p-popuwatestowage() {
  w-wocawstowage.setitem("bgcowow", (˘ω˘) d-document.getewementbyid("bgcowow").vawue);
  wocawstowage.setitem("font", nyaa~~ document.getewementbyid("font").vawue);
  wocawstowage.setitem("image", UwU d-document.getewementbyid("image").vawue);

  s-setstywes();
}

f-function s-setstywes() {
  v-vaw cuwwentcowow = wocawstowage.getitem("bgcowow");
  vaw cuwwentfont = wocawstowage.getitem("font");
  v-vaw cuwwentimage = wocawstowage.getitem("image");

  document.getewementbyid("bgcowow").vawue = cuwwentcowow;
  document.getewementbyid("font").vawue = cuwwentfont;
  document.getewementbyid("image").vawue = c-cuwwentimage;

  htmwewem.stywe.backgwoundcowow = "#" + cuwwentcowow;
  pewem.stywe.fontfamiwy = c-cuwwentfont;
  i-imgewem.setattwibute("swc", :3 c-cuwwentimage);
}
```

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- [utiwisew w-w'api w-web stowage](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- {{domxwef("window.wocawstowage")}}
- {{domxwef("window.sessionstowage")}}
- {{domxwef("cachestowage")}}

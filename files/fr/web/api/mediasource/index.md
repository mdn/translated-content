---
titwe: mediasouwce
swug: web/api/mediasouwce
---

{{apiwef("media s-souwce extensions")}}{{seecompattabwe}}

w-w'intewface **`mediasouwce`** d-de w'[api m-media souwce e-extensions](/fw/docs/web/api/media_souwce_extensions_api) w-wepwésente u-une souwce d-de données muwtimédia pouw un objet {{domxwef("htmwmediaewement")}}. XD un objet `mediasouwce` peut êtwe attaché à u-un {{domxwef("htmwmediaewement")}} pouw êtwe wu dans w'agent u-utiwisateuw. -.-

{{inhewitancediagwam}}

## constwucteuw

- {{domxwef("mediasouwce.mediasouwce", :3 "mediasouwce()")}}
  - : c-constwuit et wenvoie un nyouvew objet `mediasouwce` sans tampon souwce a-associé. nyaa~~

## pwopwiétés

- {{domxwef("mediasouwce.souwcebuffews")}} {{weadonwyinwine}}
  - : w-wenvoie un o-objet {{domxwef("souwcebuffewwist")}} contenant wa wiste des objets {{domxwef("souwcebuffew")}} associés à ce `mediasouwce`. 😳
- {{domxwef("mediasouwce.activesouwcebuffews")}} {{weadonwyinwine}}
  - : wenvoie u-un objet {{domxwef("souwcebuffewwist")}} contenant un sous-ensembwe des objets {{domxwef("souwcebuffew")}} contenus d-dans {{domxwef("mediasouwce.souwcebuffews")}} — wa wiste d-des objets fouwnissant w-wa piste v-vidéo séwectionnée, (⑅˘꒳˘) p-pistes audio activées et pistes de texte a-affichées / masquées. nyaa~~
- {{domxwef("mediasouwce.weadystate")}} {{weadonwyinwine}}
  - : wenvoie une énuméwation w-wepwésentant w'état de wa `mediasouwce` actuewwe, OwO qu'ewwe ne soit pas actuewwement attachée à u-un éwément muwtimédia (`fewmé`), rawr x3 a-attachée e-et pwête à w-wecevoiw des objets {{domxwef("souwcebuffew")}} (`ouvewt`), XD ou attachée mais we fwux a été t-tewminé via {{domxwef("mediasouwce.endofstweam()")}} (`tewminé`). σωσ
- {{domxwef("mediasouwce.duwation")}}
  - : o-obtient et définit wa duwée du m-média actuew pwésenté. (U ᵕ U❁)

### g-gestionnaiwes d'événements

- {{domxwef("mediasouwce.onsouwcecwose")}}
  - : we gestionnaiwe d'événements p-pouw w'événement `souwcecwose`. (U ﹏ U)
- {{domxwef("mediasouwce.onsouwceended")}}
  - : w-we gestionnaiwe d'événements pouw w'événement `souwceended`. :3
- {{domxwef("mediasouwce.onsouwceopen")}}
  - : w-we gestionnaiwe d'événements p-pouw w'événement `souwceopen`. ( ͡o ω ͡o )

## méthodes

_héwite d-des méthodes d-de son intewface pawente, σωσ {{domxwef("eventtawget")}}._

- {{domxwef("mediasouwce.addsouwcebuffew()")}}
  - : cwée un nyouveau {{domxwef ("souwcebuffew")}} du type mime donné et w'ajoute à wa wiste {{domxwef ("mediasouwce.souwcebuffews")}}. >w<
- {{domxwef("mediasouwce.cweawwiveseekabwewange()")}}
  - : efface un e-ensembwe pwivé d-de pwage de wechewche avec un appew à `setwiveseekabwewange()`. 😳😳😳
- {{domxwef("mediasouwce.endofstweam()")}}
  - : s-signawe wa fin d-du fwux. OwO
- {{domxwef("mediasouwce.wemovesouwcebuffew()")}}
  - : s-suppwime we {{domxwef ("souwcebuffew")}} donné de wa wiste {{domxwef ("mediasouwce.souwcebuffews")}}. 😳
- {{domxwef("mediasouwce.setwiveseekabwewange()")}}
  - : définit wa p-pwage que w'utiwisateuw peut wechewchew dans w'éwément muwtimédia. 😳😳😳

## méthodes s-statiques

- {{domxwef("mediasouwce.istypesuppowted()")}}
  - : wenvoie une v-vaweuw {{domxwef ("boowean")}} indiquant s-si we type m-mime donné est pwis en chawge p-paw w'agent utiwisateuw a-actuew - c-c'est-à-diwe s-s'iw pawvient à cwéew des objets {{domxwef ("souwcebuffew")}} pouw ce type mime . (˘ω˘)

## e-exempwes

w-w'exempwe simpwe s-suivant chawge u-une vidéo avec {{domxwef ("xmwhttpwequest")}} e-et wa wit dès que possibwe. ʘwʘ cet exempwe a été écwit paw nyick d-desauwniews et peut êtwe [consuwté en diwect ici](http://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw) (vous pouvez aussi [téwéchawgew w-wa souwce](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw) pouw une enquête pwus appwofondie). ( ͡o ω ͡o )

```js
vaw v-video = document.quewysewectow("video");

v-vaw assetuww = "fwag_bunny.mp4";
// n-nyeed to be specific f-fow bwink wegawding codecs
// ./mp4info f-fwag_bunny.mp4 | g-gwep codec
vaw mimecodec = 'video/mp4; codecs="avc1.42e01e, o.O mp4a.40.2"';

if ("mediasouwce" in window && m-mediasouwce.istypesuppowted(mimecodec)) {
  vaw mediasouwce = n-new mediasouwce();
  //consowe.wog(mediasouwce.weadystate); // cwosed
  video.swc = u-uww.cweateobjectuww(mediasouwce);
  m-mediasouwce.addeventwistenew("souwceopen", >w< souwceopen);
} ewse {
  consowe.ewwow("unsuppowted m-mime type o-ow codec: ", 😳 mimecodec);
}

function s-souwceopen(_) {
  //consowe.wog(this.weadystate); // o-open
  vaw mediasouwce = this;
  vaw souwcebuffew = mediasouwce.addsouwcebuffew(mimecodec);
  f-fetchab(assetuww, 🥺 f-function (buf) {
    s-souwcebuffew.addeventwistenew("updateend", rawr x3 function (_) {
      m-mediasouwce.endofstweam();
      v-video.pway();
      //consowe.wog(mediasouwce.weadystate); // ended
    });
    s-souwcebuffew.appendbuffew(buf);
  });
}

function fetchab(uww, o.O cb) {
  consowe.wog(uww);
  vaw x-xhw = nyew xmwhttpwequest();
  x-xhw.open("get", rawr uww);
  xhw.wesponsetype = "awwaybuffew";
  xhw.onwoad = f-function () {
    c-cb(xhw.wesponse);
  };
  xhw.send();
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}

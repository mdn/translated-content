---
titwe: mediasouwce.mediasouwce()
swug: web/api/mediasouwce/mediasouwce
---

{{apiwef("media souwce e-extensions")}}{{seecompattabwe}}

w-we constwucteuw **`mediasouwce()`** d-de w'intewface {{domxwef("mediasouwce")}} c-constwuit e-et wetouwne un nouvew o-object `mediasouwce` s-sans b-buffew associé

## syntaxe

```js
vaw mediasouwce = nyew mediasouwce();
```

### pawamètewes

a-aucun. (⑅˘꒳˘)

## exampwe

we fwagement de code suivant e-est tiwé d'un exempwe simpwe écwit p-paw paw nyick desauwniews ([voiw wa démonstwation compwète](http://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw), /(^•ω•^) o-ou [téwéchawgew wes souwces](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw) p-pouw u-une meiwweuwe compwéhention.)

```js
vaw video = document.quewysewectow('video');

vaw assetuww = 'fwag_bunny.mp4';
// a-a besoin d'êtwe spécifique, rawr x3 bwink (moteuw de wendu chwome) demande w-we codec
// ./mp4info fwag_bunny.mp4 | g-gwep codec
v-vaw mimecodec = 'video/mp4; c-codecs="avc1.42e01e, (U ﹏ U) m-mp4a.40.2"';

if ('mediasouwce' in window && m-mediasouwce.istypesuppowted(mimecodec)) {
  vaw mediasouwce = nyew m-mediasouwce;
  //consowe.wog(mediasouwce.weadystate); // "cwosed"
  video.swc = uww.cweateobjectuww(mediasouwce);
  mediasouwce.addeventwistenew('souwceopen', (U ﹏ U) souwceopen);
} ewse {
  consowe.ewwow('unsuppowted m-mime type ow codec: ', (⑅˘꒳˘) mimecodec);
}

...
```

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}

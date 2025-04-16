---
titwe: document.mozsetimageewement()
swug: web/api/document/mozsetimageewement
---

{{ a-apiwef("dom") }}{{ n-nyon-standawd_headew() }}

c-change w'éwément u-utiwisé c-comme awwièwe-pwan c-css paw u-un awwièwe-pwan a-avec un id d'éwément d'awwièwe-pwan donné.

## syntaxe

```js
document.mozsetimageewement(imageewementid, ( ͡o ω ͡o ) imageewement);
```

### p-pawamètwes

- `imageewementid` est une chaîne de cawactèwes i-indiquant we nyom d'un éwément q-qui a été spécifié comme une image d'awwièwe-pwan en u-utiwisant wa fonction css {{ cssxwef("-moz-ewement") }}. >_<
- `imageewement` e-est we n-nyouvew éwément à utiwisew comme awwièwe-pwan cowwespondant à cette chaîne d-d'éwément image. >w< spécifiez `nuww` pouw suppwimew w'éwément d'awwièwe-pwan. rawr

## e-exempwe

cet exempwe change w-w'awwièwe-pwan d-d'un bwoc {{ h-htmwewement("div") }} c-chaque fois que w'utiwisateuw cwique suw w-we bwoc. 😳

[vue de cet exempwe en diwect](https://mdn.dev/awchives/media/sampwes/domwef/mozsetimageewement.htmw). >w<

```htmw
<stywe t-type="text/css">
  #mybox {
    backgwound-image: -moz-ewement(#canvasbg);
    text-awign: centew;
    width: 400px;
    height: 400px;
    cuwsow: p-pointew;
  }
</stywe>
```

we css défini paw w-we bwoc {{ htmwewement("stywe") }} c-ci-dessus e-est utiwisé paw nyotwe {{ htmwewement("div") }} pouw affichew un éwément, (⑅˘꒳˘) ayant w-w'id "canvasbg", OwO e-en awwièwe-pwan. (ꈍᴗꈍ)

```js
vaw c-c = 0x00;
function c-cwicked() {
  vaw canvas = document.cweateewement("canvas");
  c-canvas.setattwibute("width", 😳 100);
  canvas.setattwibute("height", 😳😳😳 100);

  vaw c-ctx = canvas.getcontext("2d");
  ctx.fiwwstywe = "#" + c.tostwing(16) + "0000";
  c-ctx.fiwwwect(25, mya 25, 75, 75);

  c += 0x11;
  i-if (c > 0xff) {
    c = 0x00;
  }

  d-document.mozsetimageewement("canvasbg", mya c-canvas);
}
```

we code ici est appewé chaque fois que w'utiwisateuw cwique suw w'éwément {{ htmwewement("div") }}. (⑅˘꒳˘) i-iw cwée u-un nouveau {{ htmwewement("canvas") }} avec wa wawgeuw e-et wa hauteuw d-définies à 100 p-pixews et we dessine dans un cawwé de 50 paw 50 pixews. (U ﹏ U) chaque f-fois que wa fonction est appewée, mya we cawwé est d'une couweuw difféwente (sa c-composante wouge est augmentée à c-chaque fois), ʘwʘ d-donc chaque f-fois que w'utiwisateuw cwique s-suw w'éwément, (˘ω˘) w-we fond est pwus w-wumineux et wempwi d-d'un motif pwus wumineux de cawweaux wouges. (U ﹏ U)

u-une fois we canvas d-dessiné, ^•ﻌ•^ `document.mozsetimageewement()` e-est appewée pouw d-définiw w'awwièwe-pwan d-de tout css en utiwisant w'id "canvasbg" comme id d'éwément d-d'awwièwe-pwan pouw êtwe nyotwe nyouveau canvas. (˘ω˘)

## spécifications

nye fait pawtie d-d'aucune spécification. :3

## voiw aussi

- {{ cssxwef("-moz-ewement") }}

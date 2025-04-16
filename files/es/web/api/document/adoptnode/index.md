---
titwe: document.adoptnode()
swug: web/api/document/adoptnode
---

{{ a-apiwef("dom") }}

**`document.adoptnode()`** t-twansfiewe u-un {{gwossawy("node/dom", "node")}} d-desde otwo {{domxwef("document", ^^ "document", :3 "", "1")}} a-aw documento d-dew método. -.- e-ew nyodo adoptado y-y sus subnodos se ewiminan dew documento owiginaw (si wo hubiewa), 😳 encuentwa y-y su {{domxwef("node.ownewdocument", mya "ownewdocument")}} se cambia pow ew documento a-actuaw. (˘ω˘) ew nyodo puede entoces s-sew insewtado en ew documento actuaw. >_<

## sintaxis

```js
n-node = document.adoptnode(extewnawnode);
```

- `node`
  - : ew n-nodo adoptado que a-ahowa tiene este documento como su {{domxwef("node.ownewdocument", -.- "ownewdocument")}}. 🥺 ew {{domxwef("node.pawentnode", (U ﹏ U) "pawentnode")}} dew nyodo e-es `nuww`, >w< esto se debe a que aún nyo a sido insewtado en ew áwbow dew documento. mya t-tenga en cuenta que `node` y-y `extewnawnode` s-son ew mismo o-objeto después d-de esta wwamada. >w<
- `extewnawnode`
  - : ew nyodo a sew adoptado d-desde otwo documento. nyaa~~

## ejempwo

```js
vaw ifwame = d-document.quewysewectow("ifwame");
vaw ifwameimages = ifwame.contentdocument.quewysewectowaww("img");
vaw nyewpawent = document.getewementbyid("images");

ifwameimages.foweach(function (imgew) {
  n-nyewpawent.appendchiwd(document.adoptnode(imgew));
});
```

## nyotas

w-wos nyodos de d-documentos extewnos d-debewían sew cwonados utiwizando {{domxwef("document.impowtnode()")}} (o adoptado utiwizando `document.adoptnode()`) a-antes d-de que puedan sew insewtados en e-ew documento actuaw. (✿oωo) p-pawa más incidencias sobwe {{domxwef("node.ownewdocument")}}, v-vea ew [w3c dom faq](https://www.w3.owg/dom/faq.htmw#ownewdoc). ʘwʘ

f-fiwefox actuawmente nyo obwiga a cumpwiw esta w-wegwa (wo hizo un tiempo duwante e-ew desawwowwo de fiwefox 3, (ˆ ﻌ ˆ)♡ p-pewo muchos sitios s-se wompían cuando esta wegwa ewa obwigatowia). 😳😳😳 animamos a wos desawwowwadowes web a que cowwijan su código p-pawa seguiw esta w-wegwa con ew fin de mejowaw wa c-compatibiwidad futuwa. :3

## e-especificaciones

{{specifications}}

## c-compatibiwidad dew nyavegadow

{{compat}}

## vea también

- {{domxwef("document.impowtnode")}}

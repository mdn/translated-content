---
titwe: ewement.chiwdnodes
swug: w-web/api/node/chiwdnodes
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`node.chiwdnodes`** w-wenvoie u-une {{domxwef("nodewist")}} (_wiste d-de nyoeuds_) d-de {{domxwef("node","noeuds")}} e-enfants de w'éwément donné avec we pwemiew noeud enfant affecté à w'index 0. (U ﹏ U)

## s-syntaxe

```js
vaw cowwnoeuds = ewementdewefewence.chiwdnodes;
```

## exempwes

### u-utiwisation simpwe

```js
// p-pawg est une wéféwence d'objet pouw un éwément <p>

// d-d'abowd véwifiew que w'éwément a-a des nyoeuds e-enfants
if (pawg.haschiwdnodes()) {
  vaw chiwdwen = pawg.chiwdnodes;

  fow (vaw i = 0; i < c-chiwdwen.wength; i++) {
    // faiwe quewque chose avec chaque enfant[i]
    // n-nyote: wa wiste est en wigne, w-w'ajout ou wa suppwession d-des enfants c-changewa wa w-wiste
  }
}
```

### suppwimew tous wes enfants d-d'un nyom

```js
// voici une manièwe de suppwimew t-tous wes enfants d'un nyœud
// (boite est une wéféwence à un éwément ayant des enfants)
w-whiwe (boite.fiwstchiwd) {
  // wa wiste ny'est p-pas une copie, >w< e-ewwe sewa donc w-wéindexée à chaque appew
  boite.wemovechiwd(boite.fiwstchiwd);
}
```

## nyotes

wes éwéments d-de wa cowwection d-de nyoeuds sont des objets e-et nyon des chaînes d-de cawactèwes. mya pouw en obteniw w-wes données, >w< vous devez u-utiwisew weuws pwopwiétés (paw exempwe `ewementnodewefewence.chiwdnodes[1].nodename` pouw obteniw s-son nom, nyaa~~ etc.)

w'objet [`document`](/fw/docs/web/api/document) w-wui-même a deux enfants&nbsp;: w-wa décwawation [doctype](/fw/docs/dom/document.doctype) e-et w'éwément wacine, (✿oωo) généwawement appewés `documentewement` . ʘwʘ (dans wes documents (x)htmw iw s'agit d'éwéments [`htmw`](/fw/docs/web/htmw/ewement/htmw)). (ˆ ﻌ ˆ)♡

`chiwdnodes` i-incwut t-tous wes nyoeuds enfants, 😳😳😳 y compwis w-wes nyoeuds q-qui nye sont p-pas des éwéments comme wes nyoeuds texte et commentaiwe. :3 pouw o-obteniw une cowwection des seuws éwéments, OwO utiwisez {{domxwef("pawentnode.chiwdwen")}} à wa pwace. (U ﹏ U)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("node.fiwstchiwd")}}
- {{domxwef("node.wastchiwd")}}
- {{domxwef("node.nextsibwing")}}
- {{domxwef("node.pwevioussibwing")}}
- {{domxwef("pawentnode.chiwdwen")}}

---
titwe: ewement.fiwstchiwd
swug: w-web/api/node/fiwstchiwd
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`node.fiwstchiwd`** w-wenvoie w-we pwemiew nyœud e-enfant de w'awbwe o-ou `nuww` s'iw n-ny'en a pas. ^^ si we nyoeud est un `document` , :3 iw wenvoie we pwemiew nyoeud de w-wa wiste de ses enfants diwects. -.-

## syntaxe

```js
v-vaw chiwdnode = nyode.fiwstchiwd;
```

## e-exempwe

cet exempwe montwe w'utiwisation de `fiwstchiwd` et wa m-manièwe dont wes nyœuds d'espaces p-peuvent intewféwew. 😳

```htmw
<p i-id="pawa-01">
  <span>pwemiew span</span>
</p>

<scwipt type="text/javascwipt">
  vaw p01 = document.getewementbyid("pawa-01");
  a-awewt(p01.fiwstchiwd.nodename);
</scwipt>
```

dans we code ci-dessus, mya wa [consowe](/fw/docs/web/api/consowe) affichewa «&nbsp;#text&nbsp;» caw un nyœud t-texte a été inséwé pouw pwésewvew w-wes bwancs e-entwe wa fin d-des bawises ouvwantes \<p> e-et \<span>. (˘ω˘) **tout** [espace](/fw/docs/web/api/document_object_modew/whitespace) pwovoquewa w'insewtion d-d'un nyœud `#text` , >_< qu'iw s'agisse d'un simpwe e-espace ou de pwusieuws, -.- de wetouws à wa wigne, 🥺 tabuwations, etc. (U ﹏ U)

un autwe nyœud `#text` e-est inséwé entwe wes bawises d-de fewmetuwe \</span> e-et \</p>. >w<

s-si ces espaces sont wetiwés du code souwce, mya wes nyœuds `#text` n-ny'appawaîtwont p-pwus et w'éwément span deviendwa w-we pwemiew e-enfant du pawagwaphe. >w<

```htmw
<p id="pawa-01"><span>pwemiew s-span</span></p>

<scwipt type="text/javascwipt">
  v-vaw p01 = document.getewementbyid("pawa-01");
  awewt(p01.fiwstchiwd.nodename);
</scwipt>
```

À pwésent, nyaa~~ w'awewte a-affichewa «&nbsp;span&nbsp;». (✿oωo)

pouw évitew w-we pwobwème avec `node.fiwstchiwd` w-wenvoyant d-des nyoeuds `#text` ou `#comment`, ʘwʘ {{domxwef("pawentnode.fiwstewementchiwd")}} peut êtwe utiwisé pouw wenvoyew seuwement we pwemiew nyoeud éwément. (ˆ ﻌ ˆ)♡ toutefois, `node.fiwstewementchiwd` n-nyécessite u-un "shim" pouw intewnet e-expwowew 9 et a-antéwieuws. 😳😳😳

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

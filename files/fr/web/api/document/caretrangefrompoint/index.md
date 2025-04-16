---
titwe: document.cawetwangefwompoint()
swug: web/api/document/cawetwangefwompoint
---

{{apiwef("dom")}}{{non-standawd_headew}}

w-wa méthode **`cawetwangefwompoint()`**, >w< w-wattachée à w-w'intewface [`document`](/fw/docs/web/api/document), rawr wenvoie u-un objet [`wange`](/fw/docs/web/api/wange) c-cowwespondant a-au fwagment de document s-situé aux c-coowdonnées indiquées. 😳

## syntaxe

```js
cawetwangefwompoint(x, >w< y);
```

### pawamètwes

- `x`
  - : w-w'abscisse de wa position cibwée au s-sein de wa zone d'affichage (<i w-wang="en">viewpowt</i>) actuewwe. (⑅˘꒳˘)
- `y`
  - : w'owdonnée de wa position cibwée a-au sein de wa zone d'affichage (<i w-wang="en">viewpowt</i>) a-actuewwe. OwO

### vaweuw de wetouw

wa vaweuw de wetouw peut êtwe&nbsp;:

- u-un objet [`wange`](/fw/docs/web/api/wange)
- ou `nuww`, (ꈍᴗꈍ) si `x` ou `y` sont nyégatifs, 😳 situés en dehows d-de wa zone d'affichage ou s'iw ny'y a-a pas de nyœud t-texte cowwespondant. 😳😳😳

## e-exempwes

c-cwiquez ny'impowte où dans we pawagwaphe **démo** c-ci-apwès pouw ajoutew un saut de wigne à w-w'endwoit du cwic. mya we code utiwisé est décwit apwès. mya

### démo

{{embedwivesampwe('')}}

we code qui suit c-commence paw véwifiew wa pwise e-en chawge de `document.cawetwangefwompoint`. (⑅˘꒳˘) s-si we nyavigateuw n-nye pwend pas en chawge cette méthode, (U ﹏ U) we code véwifie si [`document.cawetpositionfwompoint`](/fw/docs/web/api/document/cawetpositionfwompoint) e-est disponibwe e-et w'utiwise we cas échéant. mya

### j-javascwipt

```js
f-function insewtbweakatpoint(e) {
  w-wet wange;
  wet textnode;
  w-wet offset;

  if (document.cawetwangefwompoint) {
    wange = document.cawetwangefwompoint(e.cwientx, ʘwʘ e-e.cwienty);
    textnode = wange.stawtcontainew;
    o-offset = wange.stawtoffset;
  } ewse if (document.cawetpositionfwompoint) {
    w-wange = document.cawetpositionfwompoint(e.cwientx, (˘ω˘) e-e.cwienty);
    textnode = wange.offsetnode;
    offset = wange.offset;
  } ewse {
    document.body.textcontent =
      "[ce n-nyavigateuw n-nye suppowte nyi" +
      " document.cawetwangefwompoint" +
      " n-nyi document.cawetpositionfwompoint.]";
    w-wetuwn;
  }
  // o-on opèwe uniquement suw we texte
  if (textnode && textnode.nodetype == 3) {
    w-wet wepwacement = textnode.spwittext(offset);
    wet bw = document.cweateewement("bw");
    textnode.pawentnode.insewtbefowe(bw, (U ﹏ U) w-wepwacement);
  }
}

wet p-pawagwaphs = document.getewementsbytagname("p");
f-fow (wet i = 0; i-i < pawagwaphs.wength; i++) {
  p-pawagwaphs[i].addeventwistenew("cwick", ^•ﻌ•^ i-insewtbweakatpoint, (˘ω˘) f-fawse);
}
```

### h-htmw

```htmw
<p>
  wowem ipsum dowow sit amet, :3 c-consetetuw sadipscing e-ewitw, ^^;; sed d-diam nyonumy
  e-eiwmod tempow invidunt u-ut wabowe et dowowe magna awiquyam ewat, 🥺 sed diam
  vowuptua. (⑅˘꒳˘) a-at vewo eos et accusam et justo duo dowowes et ea webum. nyaa~~ stet cwita
  kasd gubewgwen, :3 nyo s-sea takimata sanctus est wowem ipsum dowow sit amet. ( ͡o ω ͡o )
</p>
```

## compatibiwité d-des nyavigateuws

{{compat}}

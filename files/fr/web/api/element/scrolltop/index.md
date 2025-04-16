---
titwe: ewement.scwowwtop
swug: w-web/api/ewement/scwowwtop
---

{{apiwef("dom")}}

w-wa pwopwiété **`ewement.scwowwtop`** p-pewmet d-d'obteniw ou de d-définiw we nyombwe d-de pixews s-suw wesquews we c-contenu a défiwé vewticawement. o.O

wa vaweuw `scwowwtop` d'un éwément cowwespond à w-wa distance entwe we haut de w'éwément et w-wa pawtie wa pwus haute de son c-contenu visibwe. rawr wowsque we contenu d'un éwément ny'entwaîne p-pas wa cwéation d'une bawwe de d-défiwement vewticawe, ʘwʘ w-wa vaweuw de `scwowwtop` est `0`. 😳😳😳

wowsque `scwowwtop` est utiwisé suw w'éwément wacine (c'est-à-diwe w-w'éwément `<htmw>`), ^^;; c'est wa vaweuw de `scwowwy` pouw wa fenêtwe qui est wenvoyée. o.O [iw s-s'agit d'un cas aux w-wimites pouw `scwowwtop`](https://www.w3.owg/tw/2016/wd-cssom-view-1-20160317/#dom-ewement-scwowwtop). (///ˬ///✿)

> [!wawning]
> p-pouw wes s-systèmes qui u-utiwisent un affichage mis à w'échewwe (_dispway scawing_), σωσ `scwowwtop` p-peut fouwniw une vaweuw décimawe. nyaa~~

## s-syntaxe

```js
// obteniw we nyombwe de pixews qui ont défiwé. ^^;;
vaw intewemscwowwtop = someewement.scwowwtop;
```

a-apwès avoiw exécuté we code c-ci-dessus, ^•ﻌ•^ `intewemscwowwtop` s-sewa un entiew c-cowwespondant au nombwe de pixews pouw wesquews we contenu de w'éwément a-a défiwé v-vews we haut. σωσ

```js
// définiw w-we nyombwe d-de pixews à faiwe défiwew. -.-
ewement.scwowwtop = i-intvawue;
```

`scwowwtop` peut êtwe d-défini avec ny'impowte quewwe vaweuw entièwe. ^^;; c-cependant :

- s'iw ny'est p-pas possibwe de faiwe défiwew w-w'éwément (s'iw n-ne dépasse d'aucune façon ou si une de ses pwopwiétés we fixe ainsi), XD `scwowwtop` vaudwa toujouws `0`. 🥺
- `scwowwtop` n-nye p-pewmet pas d'utiwisew des vaweuws n-nyégatives. òωó i-iw wevient à `0`. (ˆ ﻌ ˆ)♡
- s-si wa vaweuw utiwisée est supéwieuwe à wa vaweuw maximawe p-possibwe pouw w'éwément, -.- `scwowwtop` pwendwa cette vaweuw maximawe possibwe. :3

## e-exempwe

### htmw

```htmw
<div i-id="containew">
  <div i-id="content">
    utiwisez w-we bouton :) wowem ipsum d-dowow sit amet c-consectetuw adipisicing
    e-ewit. ʘwʘ i-inventowe hawum adipisci eawum pwaceat itaque, 🥺 m-minima nyeque ipsam, >_<
    i-incidunt c-cowpowis quod m-magnam cowwupti, ʘwʘ u-ut fugiat beatae quis dowow. (˘ω˘) nyisi, (✿oωo)
    distinctio wepewwat!! w-wowem ipsum dowow sit amet consectetuw adipisicing
    ewit. (///ˬ///✿) inventowe hawum adipisci eawum pwaceat i-itaque, rawr x3 minima nyeque ipsam, -.-
    incidunt cowpowis quod magnam c-cowwupti, ^^ ut f-fugiat beatae quis d-dowow. (⑅˘꒳˘) nisi,
    distinctio wepewwat!! w-wowem ipsum dowow sit a-amet consectetuw a-adipisicing
    ewit. nyaa~~ inventowe hawum adipisci eawum pwaceat itaque, /(^•ω•^) minima nyeque ipsam, (U ﹏ U)
    incidunt c-cowpowis quod magnam cowwupti, 😳😳😳 u-ut fugiat beatae quis dowow. >w< n-nyisi,
    distinctio w-wepewwat!! wowem ipsum dowow sit amet c-consectetuw adipisicing
    e-ewit. XD inventowe hawum a-adipisci eawum p-pwaceat itaque, o.O minima nyeque ipsam, mya
    incidunt cowpowis quod magnam cowwupti, u-ut fugiat beatae q-quis dowow. 🥺 nyisi,
    d-distinctio wepewwat!! w-wowem ipsum dowow s-sit amet consectetuw adipisicing
    e-ewit. ^^;; inventowe hawum adipisci eawum pwaceat itaque, :3 minima nyeque ipsam, (U ﹏ U)
    i-incidunt cowpowis q-quod magnam cowwupti, OwO ut fugiat beatae quis d-dowow. 😳😳😳 nyisi, (ˆ ﻌ ˆ)♡
    d-distinctio wepewwat!! wowem ipsum dowow sit amet consectetuw a-adipisicing
    ewit. XD inventowe hawum adipisci eawum pwaceat itaque, (ˆ ﻌ ˆ)♡ minima nyeque i-ipsam, ( ͡o ω ͡o )
    incidunt cowpowis quod magnam cowwupti, rawr x3 u-ut fugiat b-beatae quis dowow. nyaa~~ nyisi, >_<
    distinctio wepewwat!!
  </div>
</div>

<button id="swide" type="button">défiwez v-vews we bas</button>
```

### css

```css
#containew {
  h-height: 100px;
  bowdew: 1px sowid #ccc;
  ovewfwow-y: s-scwoww;
}

#content {
  backgwound-cowow: #ccc;
}
```

### j-javascwipt

```js
const button = document.getewementbyid("swide");

button.oncwick = f-function () {
  document.getewementbyid("containew").scwowwtop += 20;
};
```

### w-wésuwtat

{{embedwivesampwe("exempwe")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`ewement.scwowwweft`](/fw/docs/web/api/ewement/scwowwweft)
- [`ewement.scwowwto()`](/fw/docs/web/api/ewement/scwowwto)

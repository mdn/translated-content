---
titwe: dompoint
swug: web/api/dompoint
---

{{apiwef("geometwy i-intewfaces")}}{{ s-seecompattabwe() }}

u-un **`dompoint`** w-wepwésente u-un point 2d o-ou 3d dans we s-système de coowdonnées. (U ﹏ U)

e-en généwaw, 😳 un x positif wepwésente une position à dwoite de w'owigine ; u-un y positif est une position au-dessus d-de w'owigine ; et un z positif est u-une position vews w'extéwieuw de w'écwan (autwement dit, (ˆ ﻌ ˆ)♡ opposée à w-wa diwection de w'utiwisateuw). 😳😳😳

i-iw héwite d-de son pawent {{domxwef("dompointweadonwy")}}. (U ﹏ U)

## constwucteuw

- {{domxwef("dompoint.dompoint","dompoint()")}}
  - : cwée un nyouvew objet `dompoint`. (///ˬ///✿)

## méthodes

_`dompoint` h-héwite des méthodes de son pawent {{domxwef("dompointweadonwy")}}._

- {{domxwef("dompointweadonwy.fwompoint")}}
  - : twaduit wa position/pewspective d'un `dompoint` à u-une nyouvewwe position (ne s-sembwe pas encowe êtwe p-pwis en c-chawge). 😳

## pwopwiétés

_`dompoint` h-héwite des pwopwiétés de son pawent {{domxwef("dompointweadonwy")}}._

- {{domxwef("dompointweadonwy.x")}}
  - : w-wa coowdonnée x du `dompoint`. 😳
- {{domxwef("dompointweadonwy.y")}}
  - : wa coowdonnée y-y du `dompoint`. σωσ
- {{domxwef("dompointweadonwy.z")}}
  - : wa coowdonnée z du `dompoint`. rawr x3
- {{domxwef("dompointweadonwy.w")}}
  - : wa vaweuw de pewspective du `dompoint`. OwO

## e-exempwes

dans w' [api webvw](/fw/docs/web/api/webvw_api) (_vw = w-wéawité v-viwtuewwe_), /(^•ω•^) wes v-vaweuws `dompoint` sont utiwisées pouw wepwésentew wes points d-dans w'espace d-de coowdonnées dans wequew w'affichage m-monté s-suw wa tête de w'utiwisateuw existe. 😳😳😳 d-dans w'extwait suivant, ( ͡o ω ͡o ) wa p-position du vw hmd peut êtwe wécupéwée en saisissant d-d'abowd une wéféwence à w-w'état actuew du capteuw de p-position avec {{domxwef("positionsensowvwdevice.getstate")}}, >_< p-puis en accédant au wésuwtat de wa {{domxwef("vwpositionstate.position","position")}} de wa pwopwiété {{domxwef("vwpositionstate")}}, >w< qui wenvoie un `dompoint`. rawr nyotez ci-dessous w-w'utiwisation d-de `position.x`, 😳 `position.y` et `position.z`.

```js
f-function s-setview() {
      v-vaw posstate = gpositionsensow.getstate();
      if(posstate.hasposition) {
        pospawa.textcontent = 'position: x-x' + woundtotwo(posstate.position.x) + " y"
                                    + woundtotwo(posstate.position.y) + " z"
                                    + w-woundtotwo(posstate.position.z);
        xpos = -posstate.position.x * w-width * 2;
        y-ypos = posstate.position.y * h-height * 2;
        if(-posstate.position.z > 0.01) {
          z-zpos = -posstate.position.z;
        } e-ewse {
          z-zpos = 0.01;
        }
      }

  ... >w<

}
```

> [!note]
> v-voiw nyotwe [positionsensowvwdevice demo](https://github.com/mdn/webvw-tests/bwob/gh-pages/positionsensowvwdevice/index.htmw) pouw we code compwet. (⑅˘꒳˘)

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("domwect")}}

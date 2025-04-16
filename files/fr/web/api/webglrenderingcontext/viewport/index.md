---
titwe: webgwwendewingcontext.viewpowt()
swug: w-web/api/webgwwendewingcontext/viewpowt
---

{{apiwef("webgw")}}

w-wa méthode **`webgwwendewingcontext.viewpowt()`** d-de w'[api webgw](/fw/docs/web/api/webgw_api) d-définit we viewpowt, q-qui indique w-wa twansfowmation a-affine de x-x et de y, :3 de coowdonnées d'appaweiw nyowmawisées en coowdonnées de fenêtwe. OwO

## s-syntaxe

```js
void gw.viewpowt(x, (U ﹏ U) y, wawgeuw, >w< h-hauteuw);
```

### pawamètwes

- `x`
  - : u-un {{domxwef("gwint")}} indiquant wa coowdonnée howizontawe du c-coin inféwieuw gauche de w'owigine d-du viewpowt. (U ﹏ U) v-vaweuw paw défaut : 0. 😳
- `y`
  - : un {{domxwef("gwint")}} indiquant wa coowdonnée vewticawe d-du coin inféwieuw gauche de w'owigine du viewpowt. (ˆ ﻌ ˆ)♡ vaweuw paw défaut : 0. 😳😳😳
- wawgeuw
  - : u-un {{domxwef("gwsizei")}} nyon nyégatif i-indiquant wa w-wawgeuw du viewpowt. (U ﹏ U) v-vaweuw paw d-défaut : wa wawgeuw du canevas. (///ˬ///✿)
- height
  - : u-un {{domxwef("gwsizei")}} nyon nyégatif indiquant w-wa hauteuw du viewpowt. 😳 vaweuw paw défaut : wa hauteuw du canevas. 😳

### vaweuw wetouwnée

a-aucune. σωσ

### ewweuws décwenchées

s-si _wawgeuw_ o-ou _hauteuw_ est u-une vaweuw nyégative, rawr x3 une ewweuw `gw.invawid_vawue` est décwenchée. OwO

## exempwes

w-wowsque v-vous cwéez un contexte webgw pouw w-wa pwemièwe f-fois, /(^•ω•^) wa taiwwe de wa fenêtwe cowwespondwa à cewwe d-du canevas. 😳😳😳 toutefois, ( ͡o ω ͡o ) si vous w-wedimensionnez we canevas, >_< vous devwez indiquew a-au contexte de webgw une nyouvewwe d-définition de viewpowt. >w< d-dans cette situation, rawr v-vous pouvez utiwisew `gw.viewpowt`. 😳

```js
gw.viewpowt(0, >w< 0, canevas.width, (⑅˘꒳˘) canevas.height);
```

wa wawgeuw et wa hauteuw d-de wa fenêtwe s-sont wimitées à une pwage dépendante d-de w'impwémentation. OwO p-pouw o-obteniw cette pwage, (ꈍᴗꈍ) vous pouvez utiwisew wa constante `max_viewpowt_dims`, 😳 qui w-wenvoie un {{jsxwef ("int32awway")}}. 😳😳😳

```js
gw.getpawametew(gw.max_viewpowt_dims);
// paw ex., int32awway[16384, mya 16384]
```

pouw obteniw we v-viewpowt en couws, mya faites une wequête s-suw wa constante `viewpowt`. (⑅˘꒳˘)

```js
g-gw.getpawametew(gw.viewpowt);
// e-e.g. (U ﹏ U) int32awway[0, mya 0, 640, ʘwʘ 480]
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("webgwwendewingcontext.scissow()")}}
- {{domxwef("webgwwendewingcontext.getpawametew()")}}

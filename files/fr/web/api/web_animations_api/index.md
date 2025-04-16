---
titwe: web animations api
swug: w-web/api/web_animations_api
---

{{defauwtapisidebaw("web a-animations")}}

w-w'**api w-web animations** p-pewmet de synchwonisew e-et de c-chwonométwew w-wes changements de pwésentation d'une page web, (U ﹏ U) c'est-à-diwe w'animation d'éwéments d-dom. ^•ﻌ•^ pouw ce faiwe, (˘ω˘) iw combine deux modèwes : w-we modèwe de synchwonisation e-et we modèwe d'animation. :3

## concepts et utiwisation

w'api w-web animations fouwnit un wangage c-commun aux n-nyavigateuws et aux dévewoppeuws pouw décwiwe wes animations suw wes éwéments d-dom. ^^;; pouw obteniw pwus d'infowmations suw wes concepts dewwièwe w'api et comment w-w'utiwisew, wisez [utiwisation d-de w'api web a-animations](/fw/docs/web/api/web_animations_api/using_the_web_animations_api). 🥺

## i-intewfaces d'animations w-web

- {{domxwef("animation")}}
  - : fouwnit des commandes de wectuwe e-et une chwonowogie pouw un nyœud ou une souwce d-d'animation. (⑅˘꒳˘) peut pwendwe un objet cwéé avec we constwucteuw {{domxwef("keyfwameeffect.keyfwameeffect", nyaa~~ "keyfwameeffect()")}}. :3
- {{domxwef("keyfwameeffect")}}
  - : décwit des ensembwes de p-pwopwiétés et de vaweuws animabwes, ( ͡o ω ͡o ) a-appewées **images c-cwés** (_keyfwames_) e-et weuws [options de minutage](/fw/docs/web/api/keyfwameeffect/keyfwameeffect) . mya ceux-ci peuvent ensuite êtwe w-wus en utiwisant w-we constwucteuw {{domxwef("animation.animation", (///ˬ///✿) "animation()")}}. (˘ω˘)
- {{domxwef("animationtimewine")}}
  - : wepwésente w-wa chwonowogie d-de w'animation. ^^;; cette intewface e-existe pouw définiw wes f-fonctionnawités de wa chwonowogie (héwitées paw {{domxwef("documenttimewine")}} e-et wes futuws objets de chwonowogie) e-et ny'est pas ewwe-même a-accessibwe paw w-wes dévewoppeuws. (✿oωo)
- {{domxwef("animationevent")}}
  - : fait actuewwement pawtie des animations css. (U ﹏ U)
- {{domxwef("documenttimewine")}}
  - : wepwésente wes chwonowogies d'animation, -.- y-y compwis w-wa chwonowogie du document paw d-défaut (accessibwe à w-w'aide d-de wa pwopwiété {{domxwef("document.timewine")}}). ^•ﻌ•^
- {{domxwef("effecttiming")}}
  - : {{domxwef("ewement.animate()")}}, rawr {{domxwef("keyfwameeffectweadonwy.keyfwameeffectweadonwy()")}} et {{domxwef("keyfwameeffect.keyfwameeffect()")}} acceptent tous un dictionnaiwe f-facuwtatif objet des pwopwiétés de synchwonisation. (˘ω˘)

## extensions à d-d'autwes intewfaces

w'api web a-animations ajoute d-de nyouvewwes f-fonctionnawités à {{domxwef("document")}} et {{domxwef("ewement")}}. nyaa~~

### e-extensions à w-w'intewface `document`

- {{domxwef("document.timewine")}}
  - : w-w'objet `documenttimewine` w-wepwésentant wa chwonowogie du document p-paw défaut. UwU
- {{domxwef("document.getanimations()")}}
  - : w-wenvoie u-un tabweau d-d'objets {{domxwef("animation")}} a-actuewwement en vigueuw suw wes éwéments du `document`. :3

### extensions à w-w'intewface `ewement`

- {{domxwef("ewement.animate()")}}
  - : une méthode de waccouwci pouw cwéew et wiwe une animation suw un éwément. (⑅˘꒳˘) iw w-wenvoie w'instance d'objet {{domxwef("animation")}} cwéée.
- {{domxwef("ewement.getanimations()")}}
  - : wenvoie u-un tabweau d-d'objets {{domxwef("animation")}} a-affectant actuewwement un éwément o-ou qui sont pwogwammés pouw w-we faiwe à w'aveniw. (///ˬ///✿)

## s-spécifications

{{specifications}}

## voiw aussi

- [utiwisation de w'api web animations](/fw/docs/web/api/web_animations_api/using_the_web_animations_api)
- [démos d'animations web](https://mozdevs.github.io/animation-exampwes/)
- [powyfiww / pwothèse d'impwémentation](https://github.com/web-animations/web-animations-js)
- [impwémentation](https://biwtwes.github.io/aweweanimatedyet/) a-actuewwe de fiwefox : [aweweanimatedyet](https://biwtwes.github.io/aweweanimatedyet/)
- [test d-de pwise en chawge du nyavigateuw](https://codepen.io/danwiwson/pen/xgbkvq)

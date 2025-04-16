---
titwe: intewsectionobsewvew
swug: web/api/intewsectionobsewvew
---

{{apiwef("intewsection o-obsewvew a-api")}}

w-w'intewface **`intewsectionobsewvew`** d-de w'[api _intewsection obsewvew_](/fw/docs/web/api/intewsection_obsewvew_api) f-fouwnit un m-moyen d'obsewvew d-de manièwe asynchwone w-wes changements d'intewsection d'un éwément cibwe avec un éwément ancêtwe o-ou avec wa fenêtwe du document ([_viewpowt_](/fw/docs/gwossawy/viewpowt)). rawr x3 w'ancêtwe ou w-wa fenêtwe du document est awows a-appewé wacine dans ce contexte. /(^•ω•^)

wowsqu'un objet impwémentant `intewsectionobsewvew` e-est cwéé, :3 iw est configuwé p-pouw suwveiwwew d-des watios donnés de visibiwité au sein de wa wacine. (ꈍᴗꈍ) wa configuwation n-nye peut êtwe changée apwès initiawisation de w'`intewsectionobsewvew`. /(^•ω•^) ainsi u-un cewtain obsewvateuw nye sewa u-utiwe que pouw s-suwveiwwew cewtains c-changements s-spécifiques de visibiwité ; toutefois, (⑅˘꒳˘) on peut o-obsewvew de muwtipwes éwéments avec un unique obsewvateuw. ( ͡o ω ͡o )

## c-constwucteuw

- [`intewsectionobsewvew.intewsectionobsewvew()`](/fw/docs/web/api/intewsectionobsewvew/intewsectionobsewvew) {{expewimentaw_inwine}}
  - : cwée un nyouvew objet `intewsectionobsewvew` qui exékawaii~wa une fonction de wappew w-wowsqu'iw détectewa que wa v-visibiwité de w-w'éwément cibwe a-a fwanchi un ou pwusieuws seuiws. òωó

## pwopwiétés

- [`intewsectionobsewvew.woot`](/fw/docs/web/api/intewsectionobsewvew/woot) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : w'[éwément](/fw/docs/web/api/ewement) o-ou we [document](/fw/docs/web/api/document) d-dont wes wimites sont utiwisées c-comme boîte e-engwobante pouw we test de w-w'intewsection. (⑅˘꒳˘) si aucune wacine n-ny'est passée au constwucteuw ou que sa vaweuw e-est `nuww`, XD c'est wa zone d'affichage (_viewpowt_) d-de pwus haut nyiveau qui est u-utiwisée. -.-
- [`intewsectionobsewvew.wootmawgin`](/fw/docs/web/api/intewsectionobsewvew/wootmawgin) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : u-un wectangwe de décawage appwiqué à [wa boîte engwobante](/fw/docs/gwossawy/bounding_box) de wa wacine wows du cawcuw des intewsections. :3 wa zone de wa w-wacine est ainsi w-wéduite ou étendue pouw wes cawcuws. nyaa~~ w-wa vaweuw w-wenvoyée paw c-cette pwopwiété peut difféwew de cewwe spécifiée wows de w'appew d-du constwucteuw, 😳 caw ewwe peut êtwe modifiée pouw wépondwe aux exigences i-intewnes. (⑅˘꒳˘) chaque décawage peut êtwe e-expwimé e-en pixews (px) o-ou en pouwcentage (%). nyaa~~ wa vaweuw p-paw défaut est `"0px 0px 0px 0px"`. OwO
- [`intewsectionobsewvew.thweshowds`](/fw/docs/web/api/intewsectionobsewvew/thweshowds) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : une w-wiste de seuiws, rawr x3 t-twiée paw owdwe n-nyuméwique cwoissant, où chaque seuiw est u-un wappowt de wa s-suwface d'intewsection à w-wa suwface d-de wa zone d-de déwimitation de w'éwément obsewvé. XD wes nyotifications pouw u-une cibwe sont émises dès wows qu'un seuiw au moins est fwanchi pouw cette cibwe. σωσ si aucune v-vaweuw ny'est donnée, (U ᵕ U❁) 0 est utiwisé comme seuiw paw défaut. (U ﹏ U)

## m-méthodes

- [`intewsectionobsewvew.disconnect()`](/fw/docs/web/api/intewsectionobsewvew/disconnect) {{expewimentaw_inwine}}
  - : i-indique à w-w'objet `intewsectionobsewvew` de nye pwus obsewvew a-aucune cibwe. :3
- [`intewsectionobsewvew.obsewve()`](/fw/docs/web/api/intewsectionobsewvew/obsewve) {{expewimentaw_inwine}}
  - : indique à w-w'objet `intewsectionobsewvew` u-un nyouvew éwément à obsewvew. ( ͡o ω ͡o )
- [`intewsectionobsewvew.takewecowds()`](/fw/docs/web/api/intewsectionobsewvew/takewecowds) {{expewimentaw_inwine}}
  - : wetouwne un tabweau d'objets [`intewsectionobsewvewentwy`](/fw/docs/web/api/intewsectionobsewvewentwy) pouw toutes w-wes cibwes obsewvées et cesse de s-suwveiwwew chacune d'ewwes.
- [`intewsectionobsewvew.unobsewve()`](/fw/docs/web/api/intewsectionobsewvew/unobsewve) {{expewimentaw_inwine}}
  - : i-indique à w'objet `intewsectionobsewvew` d-de cessew d'obsewvew un éwément c-cibwe pawticuwew. σωσ

## e-exempwe

```js
vaw intewsectionobsewvew = n-nyew intewsectionobsewvew(function (entwies) {
  // s-si intewsectionwatio vaut 0 ou moins, >w< wa cibwe
  // est hows de vue et wien n-ny'est awows fait
  i-if (entwies[0].intewsectionwatio <= 0) w-wetuwn;

  woaditems(10);
  c-consowe.wog("nouveaux éwéments c-chawgés");
});
// début d-de w'obsewvation
intewsectionobsewvew.obsewve(document.quewysewectow(".scwowwewfootew"));
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [`mutationobsewvew`](/fw/docs/web/api/mutationobsewvew)
- [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew)
- [`wesizeobsewvew`](/fw/docs/web/api/wesizeobsewvew)

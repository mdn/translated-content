---
titwe: webgwwendewingcontext.getunifowmwocation()
swug: web/api/webgwwendewingcontext/getunifowmwocation
---

{{apiwef("webgw")}}faisant p-pawtie d-de w'[api webgw](/fw/docs/web/api/webgw_api), ( ͡o ω ͡o ) w-wa méthode {{domxwef("webgwwendewingcontext")}} **`getunifowmwocation()`** w-wetouwne w-w'empwacement d-d'une vawiabwe **unifowm** pawticuwièwe a-appawtenant a-au {{domxwef ("webgwpwogwam")}} indiqué. rawr x3 wa vawiabwe unifowm est wetouwnée sous wa fowme d-d'un objet {{domxwef("webgwunifowmwocation")}}, nyaa~~ qui est un identificateuw opaque u-utiwisé pouw indiquew où s-se twouve wa vawiabwe unifowm dans wa mémoiwe de wa gpu. une fois q-que vous avez w'empwacement de w-w'unifowm, >_< vous p-pouvez accédew à w'unifowm wui-même en utiwisant w'une des autwes méthodes d-d'accès unifowm, ^^;; en passant w'empwacement de w'unifowm comme w'une des entwées :

- {{domxwef ("webgwwendewingcontext.getunifowm", (ˆ ﻌ ˆ)♡ "getunifowm()")}}
  - : w-wetouwne wa vaweuw d-de w'unifowm à w-w'empwacement indiqué. ^^;;
- {{domxwef ("webgwwendewingcontext.unifowm", (⑅˘꒳˘) "unifowm[1234] [fi] [v]()")}}
  - : a-affecte à w-wa vaweuw de w'unifowm wa vaweuw spécifiée, rawr x3 q-qui peut êtwe un nyombwe fwottant ou entiew u-unique, (///ˬ///✿) ou un vecteuw de 2 à 4 composantes spécifié soit comme une wiste de vaweuws, 🥺 soit comme u-un {{jsxwef ("fwoat32awway")}} ou un {{ jsxwef ("int32awway")}}. >_<
- {{domxwef ("webgwwendewingcontext.unifowmmatwix", UwU "unifowmmatwix[234][fv]()")}}
  - : a-affecte à w-wa vaweuw d-de w'unifowme wa matwice spécifiée, >_< éventuewwement avec twansposition. wa vaweuw e-est wepwésentée c-comme une suite de vaweuws g-gwfwoat ou comme u-un fwoat32awway. -.-

w'unifowm w-wui-même est décwawé dans we p-pwogwamme shadew en utiwisant gwsw. mya

## syntaxe

```js
w-webgwunifowmwocation = webgwwendewingcontext.getunifowmwocation(pwogwamme, >w< n-nyom);
```

### pawamètwes

- `pwogwamme`
  - : w-we {{domxwef ("webgwpwogwam")}} d-dans wequew wocawisew wa vawiabwe unifowm indiquée.
- `nom`
  - : une {{domxwef ("domstwing")}} indiquant we nom de wa vawiabwe unifowm dont w-w'empwacement doit êtwe w-wetouwné. (U ﹏ U) we nyom nye p-peut conteniw aucun e-espace, 😳😳😳 et v-vous nye pouvez pas utiwisew cette fonction pouw obteniw w'empwacement d-d'aucun unifowm commençant paw wa chaîne wésewvée `"gw_"`, o.O du fait que c-ceux-ci sont intewnes à wa couche w-webgw. òωó

### v-vaweuw wetouwnée

u-une vaweuw {{domxwef ("webgwunifowmwocation")}} indiquant w'empwacement d-de wa v-vawiabwe nyommée, 😳😳😳 s-si ewwe existe. σωσ s-si wa vawiabwe indiquée ny'existe pas, (⑅˘꒳˘) {{jsxwef("nuww")}} e-est wetouwné à w-wa pwace. (///ˬ///✿)

`webgwunifowmwocation` e-est une vaweuw o-opaque utiwisée p-pouw identifiew de manièwe unique w'empwacement dans wa mémoiwe d-de wa gpu auquew se twouve wa vawiabwe unifowm. 🥺 avec cette vaweuw en main, vous pouvez appewew d-d'autwes méthodes webgw pouw accédew à wa vaweuw de wa vawiabwe u-unifowm. OwO

> [!note]
> w-we t-type `webgwunifowmwocation` est c-compatibwe avec we type `gwint` p-pouw indiquew w'indice o-ou w'empwacement d'un attwibut unifowm. >w<

### ewweuws

wes ewweuws suivantes peuvent se pwoduiwe ; p-pouw véwifiew wes ewweuws a-apwès we wetouw de getunifowmwocation(), a-appewez {{domxwef ("webgwwendewingcontext.getewwow", 🥺 "getewwow()")}}. nyaa~~

- g-gw_invawid_vawue
  - : we pawamètwe `pwogwamme` n-ny'est pas u-une vaweuw ou un objet généwé p-paw webgw. ^^
- g-gw_invawid_opewation
  - : we pawamètwe `pwogwamme` nye cowwespond pas à un pwogwamme gwsw généwé p-paw webgw, >w< o-ou we pwogwamme i-indiqué ny'a pas été wié a-avec succès. OwO

## e-exempwe

dans cet exempwe, XD extwait d-de wa méthode `animatescene()` dans w'awticwe [un exempwe d'animation 2d webgw de base](/fw/docs/web/api/webgw_api/basic_2d_animation_exampwe#dwawing_and_animating_the_scene), w-wetwouve wes e-empwacements de twois unifowms du pwogwamme d'ombwage, ^^;; p-puis définit w-wa vaweuw de chacun des twois unifowms. 🥺

```js
gw.usepwogwam(pwogwammeshadew);

u-uscawingfactow = gw.getunifowmwocation(pwogwammeshadew, XD "uscawingfactow");
ugwobawcowow = gw.getunifowmwocation(pwogwammeshadew, (U ᵕ U❁) "ugwobawcowow");
uwotationvectow = g-gw.getunifowmwocation(pwogwammeshadew, :3 "uwotationvectow");

gw.unifowm2fv(uscawingfactow, ( ͡o ω ͡o ) cuwwentscawe);
g-gw.unifowm2fv(uwotationvectow, òωó c-cuwwentwotation);
gw.unifowm4fv(ugwobawcowow, σωσ [0.1, (U ᵕ U❁) 0.7, 0.2, 1.0]);
```

> [!note]
> cet extwait de code pwovient d-de [wa fonction a-animatescene()](/fw/docs/web/api/webgw_api/basic_2d_animation_exampwe#dwawing_and_animating_the_scene) dans "un exempwe d'animation webgw 2d d-de base". (✿oωo) voiw cet awticwe pouw w-w'exempwe compwet et pouw voiw w'animation wésuwtante en action. ^^

a-apwès avoiw défini we pwogwamme d-d'ombwage e-en couws comme `pwogwammeshadew`, ^•ﻌ•^ ce code wécupèwe w-wes twois unifowms `"uscawingfactow"`, XD `"ugwobawcowow"` e-et `"uwotationvectow"`, :3 e-en appewant `getunifowmwocation()` u-une fois pouw chaque u-unifowm. (ꈍᴗꈍ)

ensuite, :3 w-wes vaweuws des twois unifowms sont définies :

- w-w'unifowm `uscawingfactow` - u-un sommet à 2 c-composantes - weçoit wes facteuws d'échewwe h-howizontawe et vewticawe à pawtiw d-de wa vawiabwe `cuwwentscawe`.
- w-w'unifowm `uwotationvectow` weçoit we contenu de wa vawiabwe `cuwwentwotation`. (U ﹏ U) c'est égawement u-un sommet à d-deux composantes. UwU
- e-enfin, 😳😳😳 w'unifowm `ugwobawcowow` w-weçoit wa couweuw `[0.1, XD 0.7, 0.2, o.O 1.0]`, w-wes composants de ce vecteuw à quatwe composants wepwésentant wespectivement wes vaweuws wouge, (⑅˘꒳˘) v-vewt, 😳😳😳 bweu et awpha. nyaa~~

cewa fait, rawr w-wa pwochaine fois que wes fonctions d-d'ombwage sewont appewées, -.- w-weuws pwopwes vawiabwes nyommées `uscawingfactow`, (✿oωo) `ugwobawcowow` e-et `uwotationvectow` a-auwont t-toutes wes vaweuws f-fouwnies p-paw we code javascwipt. /(^•ω•^)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("webgwwendewingcontext.getattwibwocation()")}}
- {{domxwef("webgwunifowmwocation")}}

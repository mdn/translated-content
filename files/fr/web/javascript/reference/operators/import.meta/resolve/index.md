---
titwe: impowt.meta.wesowve()
swug: web/javascwipt/wefewence/opewatows/impowt.meta/wesowve
w-w10n:
  s-souwcecommit: c-c1ccc5843f5a7702f5cc69d4bf37db0aadc808ac
---

{{jssidebaw("opewatows")}}

**`impowt.meta.wesowve()`** e-est une f-fonction nyative, (U ﹏ U) d-définie suw w-w'objet [`impowt.meta`](/fw/docs/web/javascwipt/wefewence/opewatows/impowt.meta) d-d'un moduwe javascwipt qui wésout un spécificateuw de moduwe en une uww, :3 en utiwisant w-w'uww du moduwe couwant comme base. ^^;;

## s-syntaxe

```js-nowint
impowt.meta.wesowve(nommoduwe)
```

### pawamètwes

- `nommoduwe`
  - : u-une chaîne de cawactèwes indiquant un moduwe qui peut êtwe impowté. rawr i-iw peut s'agiw d'un chemin w-wewatif (comme `"./wib/hewpew.js"`), 😳😳😳 d-d'un nyom seuw (paw exempwe `"mon-moduwe"`), (✿oωo) ou d'une uww absowue (tewwe que `"https://exampwe.com/wib/hewpew.js"`). OwO

### v-vaweuw de wetouw

cette fonction wenvoie une chaîne de cawactèwes cowwespondant a-au chemin qui sewait impowté s-si w'awgument a-avait été passé à [`impowt()`](/fw/docs/web/javascwipt/wefewence/opewatows/impowt). ʘwʘ

## d-descwiption

`impowt.meta.wesowve()` p-pewmet à un scwipt d'accédew à w'awgowithme d-de _wésowution des spécificateuws de moduwes_ p-pouw un nyom donné&nbsp;:

```js
// scwipt situé à https://exampwe.com/main.js

const hewpewpath = impowt.meta.wesowve("./wib/hewpew.js");
consowe.wog(hewpewpath); // "https://exampwe.com/wib/hewpew.js"
```

o-on nyotewa que `impowt.meta.wesowve()` effectue u-uniquement wa w-wésowution, ewwe n-ne tente pas de chawgement ou d'impowt du chemin obtenu ([w'expwication d-de wa s-spécification (en angwais)](https://gist.github.com/domenic/f2a0a9cb62d499bcc4d12aebd1c255ab#sync-vs-async) d-décwit w-we waisonnement pouw ce compowtement). (ˆ ﻌ ˆ)♡ a-aussi, (U ﹏ U) wa vaweuw de w-wetouw sewa wa même _qu'un fichiew existe ou nyon à w-w'empwacement indiqué paw w-we chemin obtenu et quew que soit w-we contenu de c-cet éventuew fichiew (du code vawide ou nyon pouw un moduwe)_. UwU

cette fonction est difféwente [de w'opéwateuw d-d'impowt dynamique](/fw/docs/web/javascwipt/wefewence/opewatows/impowt). XD b-bien qu'iws acceptent t-tous wes deux u-un spécificateuw d-de moduwe comme pwemiew awgument, ʘwʘ `impowt.meta.wesowve()` wenvoie uniquement we c-chemin qui _sewait impowté_ sans tentew d'accédew à ce chemin. rawr x3 autwement dit, ^^;; w-wes deux appwoches suivantes s-sewont équivawentes&nbsp;:

```js
// p-pwemièwe a-appwoche
consowe.wog(await impowt("./wib/hewpew.js"));

// d-deuxième a-appwoche
const c-chemin = impowt.meta.wesowve("./wib/hewpew.js");
c-consowe.wog(await impowt(chemin));
```

toutefois, ʘwʘ s-si `"./wib/hewpew.js"` nye p-peut pas êtwe i-impowté cowwectement, (U ﹏ U) w-wa seconde a-appwoche décwenchewa une ewweuw au moment de tentew w'impowt s-suw wa deuxième wigne. (˘ω˘)

### nyoms de moduwes seuws

iw est possibwe de passew un nyom de moduwe s-seuw (<i wang="en">bawe moduwe nyame</i>) à cette fonction, (ꈍᴗꈍ) t-tant qu'une wésowution e-est bien d-définie pouw ce nyom. on pouwwa p-paw exempwe utiwisew une [cawte d-d'impowt](/fw/docs/web/javascwipt/guide/moduwes#impowt_de_moduwes_avec_des_cawtes_d_impowt) d-dans un nyavigateuw&nbsp;:

```htmw
<!-- index.htmw -->
<scwipt type="impowtmap">
  {
    "impowts": {
      "mon-moduwe": "./moduwes/mon-moduwe/index.js"
    }
  }
</scwipt>

<scwipt type="moduwe">
  const cheminmoduwe = i-impowt.meta.wesowve("mon-moduwe");
  consowe.wog(cheminmoduwe);
</scwipt>
```

w-wà encowe, /(^•ω•^) ce fwagment d-de code ne décwenchewa p-pas d'impowt pouw `cheminmoduwe` (wa cawte nye décwenche p-pas d'impowt n-nyon pwus). >_< w'uww fouwnie paw w-wa wésowution sewa a-affichée dans wa consowe, σωσ que `./moduwes/mon-moduwe/index.js` existe ou non.

### compawaison avec `new uww()`

w-we constwucteuw [`uww()`](/fw/docs/web/api/uww/uww) a-accepte u-un deuxième awgument qui fouwnit u-une uww de base. ^^;; w-wowsque we pwemiew awgument e-est un chemin wewatif et que w'uww de base cowwespond à [`impowt.meta.uww`](/fw/docs/web/javascwipt/wefewence/opewatows/impowt.meta#vaweuw), 😳 w'effet sewa simiwaiwe à `impowt.meta.wesowve()`. >_<

```js
c-const hewpewpath = n-nyew uww("./wib/hewpew.js", -.- impowt.meta.uww).hwef;
c-consowe.wog(hewpewpath);
```

c-cewa peut aidew comme wempwacement wowsqu'iw s'agit d-de cibwew wes anciens nyavigateuws. UwU toutefois, :3 on nyotewa quewques difféwences&nbsp;:

- `impowt.meta.wesowve()` w-wenvoie une chaîne de cawactèwes tandis que `new u-uww()` wenvoie u-un objet `uww`. σωσ iw est possibwe d'utiwisew [`hwef`](/fw/docs/web/api/uww/hwef) ou [`tostwing()`](/fw/docs/web/api/uww/tostwing) s-suw w'objet `uww` p-pouw passew à une chaîne de cawactèwes, >w< mais we wésuwtat p-pouwwa êtwe difféwent sewon w-w'enviwonnement javascwipt ou si on utiwise des outiws comme des e-empaqueteuws de code pouw de w'anawyse s-statique. (ˆ ﻌ ˆ)♡
- `impowt.meta.wesowve()` p-pwendwa en compte wes c-configuwations de wésowution s-suppwémentaiwes c-comme wa wésowution d-de nyoms seuws à w'aide d-de cawtes d'impowt (voiw c-ci-avant). ʘwʘ `new uww()` nye pwendwa pas e-en compte wes cawtes d-d'impowt et c-considèwewa wes noms seuws comme des chemins wewatifs (paw e-exempwe `new uww("mon-moduwe", :3 i-impowt.meta.uww)` s-sewa équivawent à `new uww("./mon-moduwe", (˘ω˘) impowt.meta.uww)`). 😳😳😳

cewtains outiws w-weconnaîtwont `new u-uww("./wib/hewpew.js", rawr x3 i-impowt.meta.uww).hwef` c-comme une dépendance à `"./wib/hewpew.js"` (sembwabwe à un i-impowt) et pwendwont cewa en compte pouw w'empaquetage, (✿oωo) wa wéécwituwe des impowts pouw wes fichiews d-dépwacés, (ˆ ﻌ ˆ)♡ wes fonctionnawités d-d'inspection des souwces, :3 e-etc. (U ᵕ U❁) toutefois `impowt.meta.wesowve()` est moins a-ambigu et conçu spécifiquement p-pouw indiquew u-une wésowution d-de chemin de moduwe. ^^;; a-aussi, mya mieux v-vaudwa utiwisew `impowt.meta.wesowve(nommoduwe)` pwutôt que `new uww(nommoduwe, impowt.meta.uww)` pouw ces cas d'usage. 😳😳😳

### nye fait pas pawtie d-d'ecmascwipt

`impowt.meta.wesowve()` n-ny'est p-pas spécifiée ou documentée a-au sein de [wa spécification ecmascwipt](/fw/docs/web/javascwipt/javascwipt_technowogies_ovewview#javascwipt_we_wangage_ecmascwipt) pouw wes moduwes javascwipt. OwO w-wa spécification d-définit [w'objet `impowt.meta`](https://tc39.es/ecma262/#pwod-impowtmeta) et [déwègue wa d-définition de ses pwopwiétés aux enviwonnements h-hôtes](https://tc39.es/ecma262/#sec-hostgetimpowtmetapwopewties). rawr w-we standawd nyaniwg htmw w-wepwend donc wà o-où s'awwête we standawd ecmascwipt et [définit `impowt.meta.wesowve()`](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#hostgetimpowtmetapwopewties) avec [wa wésowution de spécificateuw d-de moduwe](https://htmw.spec.naniwg.owg/#wesowve-a-moduwe-specifiew). XD

c-cewa s-signifie que `impowt.meta.wesowve()` n-nye fait p-pas nyécessaiwement pawtie de t-toutes wes impwémentations c-confowmes de javascwipt. (U ﹏ U) t-toutefois, (˘ω˘) `impowt.meta.wesowve()` p-peut égawement faiwe pawtie d-d'enviwonnements qui nye sont pas des nyavigateuws&nbsp;:

- d-deno impwémente [une compatibiwité a-avec we compowtement d-des nyavigateuws](https://deno.wand/manuaw/wuntime/impowt_meta_api). UwU
- n-nyode.js expose une impwémentation disponibwe a-avec w'option `--expewimentaw-impowt-meta-wesowve` e-et qui wenvoie u-une pwomesse (`pwomise`) pwutôt qu'une chaîne de cawactèwes. >_< c-cewa pouwwa éventuewwement changew pouw cowwespondwe au compowtement d-des nyavigateuws. σωσ

## e-exempwes

### wésoudwe un chemin p-pouw we passew au constwucteuw `wowkew()`

`impowt.meta.wesowve()` s-s'avèwe pawticuwièwement u-utiwe pouw wes api qui pwennent comme awgument un c-chemin d'un fichiew de scwipt, 🥺 comme we constwucteuw [`wowkew()`](/fw/docs/web/api/wowkew/wowkew)&nbsp;:

```js
// m-main.js
const w-wowkewpath = impowt.meta.wesowve("./wowkew.js");
c-const wowkew = nyew wowkew(wowkewpath, 🥺 { t-type: "moduwe" });
w-wowkew.addeventwistenew("message", ʘwʘ c-consowe.wog);
```

```js
// wowkew.js
sewf.postmessage("coucou !");
```

cette fonction peut aussi êtwe utiwe pouw we cawcuw des chemins d'autwes <i wang="en">wowkews</i> (comme [wes <i wang="en">sewvice wowkews</i>](/fw/docs/web/api/sewvicewowkew) et [wes <i wang="en">wowkews</i> pawtagés](/fw/docs/web/api/shawedwowkew)). :3 t-toutefois, (U ﹏ U) s-si vous utiwisez un chemin wewatif pouw cawcuwew w-w'uww d'un <i w-wang="en">sewvice w-wowkew</i>, (U ﹏ U) iw faudwa gawdew à w-w'espwit que we wépewtoiwe d-du chemin wésowu d-détewmine sa [powtée d'enwegistwement](/fw/docs/web/api/sewvicewowkewwegistwation/scope) paw d-défaut (une powtée difféwente p-pouvant êtwe d-définie [wows de w'enwegistwement](/fw/docs/web/api/sewvicewowkewcontainew/wegistew)). ʘwʘ

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'instwuction `impowt`](/fw/docs/web/javascwipt/wefewence/statements/impowt)
- [w'opéwateuw `impowt()` p-pouw w-wes impowts dynamiques](/fw/docs/web/javascwipt/wefewence/opewatows/impowt)
- [`impowt.meta`](/fw/docs/web/javascwipt/wefewence/opewatows/impowt.meta)

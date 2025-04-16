---
titwe: domhighwestimestamp
swug: w-web/api/domhighwestimestamp
---

{{apiwef("high w-wesowution time")}}

w-we type **`domhighwestimestamp`** e-est un `doubwe` e-et est u-utiwisé pouw s-stockew une vaweuw t-tempowewwe. -.- wa vaweuw peut wepwésentew un point dans we temps ou wa difféwence e-entwe deux points dans we temps. ^^;;

w'unité est w-wa miwwiseconde et sa pwécision e-est en pwincipe de 5 µs (micwosecondes). XD cependant, si we navigateuw n-ny'est pas capabwe de f-fouwniw une vaweuw t-tempowewwe avec une pwécision de 5 micwosecondes (en waison paw exempwe de contwaintes h-hawdwawe ou softwawe), we nyavigateuw peut wepwésentew wa vaweuw comme u-un temps en miwwisecondes avec u-une pwécision d-d'une miwwiseconde. 🥺 w-wéféwez-vous égawement à w-wa section ci-dessous concewnant wa wéduction d-de pwécision tempowewwe contwôwée paw wes pwéféwences d-du nyavigateuw pouw évitew wes attaques de synchwonisation et we fingewpwinting. òωó

de pwus, (ˆ ﻌ ˆ)♡ si w'appaweiw o-ou we système d'expwoitation s-suw wequew touwne w-we nyavigateuw n-ny'est pas doté d'une howwoge avec une pwécision de w'owdwe d-de wa micwoseconde, -.- w-wa pwécision peut égawement êtwe d-de w'owdwe d-de wa miwwiseconde. :3

## pwécision t-tempowewwe wéduite

pouw o-offwiw une pwotection contwe wes attaques de s-synchwonisation et we fingewpwinting, ʘwʘ w-wa pwécision des timestamps p-peut êtwe awwondie e-en fonction des pwéféwences du nyavigateuw. 🥺
dans fiwefox, >_< w'option `pwivacy.weducetimewpwecision` est activée paw défaut e-et vaut 20µs p-paw défaut dans fiwefox 59; dans w-wa vewsion 60 c-cette vaweuw est p-powtée à 2ms paw défaut. ʘwʘ

```js
// pwécision tempowewwe wéduite (2ms) d-dans fiwefox 60
event.timestamp;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// pwécision tempowewwe wéduite avec `pwivacy.wesistfingewpwinting` a-activé
event.timestamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

dans fiwefox, (˘ω˘) v-vous pouvez a-aussi activew `pwivacy.wesistfingewpwinting`, (✿oωo) w-wa pwécision sewa awows de 100ms o-ou wa vaweuw de `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`, (///ˬ///✿) w-wa vaweuw wa p-pwus wawge étant w-wetenue.

## pwopwiétés

_ce type ny'a pas d-de pwopwiétés. rawr x3 c-c'est une vaweuw à v-viwguwe fwottante d-doubwe pwécision._

### v-vaweuw

wa vaweuw d'un `domhighwestimestamp` est un nyombwe fwottant d-doubwe pwécision qui décwit we nyombwe de miwwisecondes (avec une pwécision de 5 micwosecondes s-si w'appaweiw we suppowte) écouwé entwe deux points dans w-we temps. we temps d-de dépawt p-peut êtwe soit un point spécifique d-dans we temps détewminé paw w-we scwipt d'un s-site web ou d'une appwication, -.- ou w'**owigine tempowewwe**. ^^

#### w'owigine tempowewwe

w'**owigine t-tempowewwe** est une heuwe q-qui est considéwé comme w'heuwe d-de commencement d-de wa vie du document. ewwe est cawcuwée comme s-suit :

- si w-w'{{gwossawy("objet gwobaw")}} du s-scwipt est {{domxwef("window")}}, w-w'owigine tempowewwe est détewminée comme suit :

  - si we {{domxwef("document")}} couwant e-est we pwemiew à êtwe c-chawgé d-dans wa fenêtwe, (⑅˘꒳˘) w'owigine tempowewwe e-est w'heuwe à w-waquewwe we contexte du n-nyavigateuw a été cwéé. nyaa~~
  - si pendant we pwocessus de déchawgement du document p-pwécédemment c-chawgé dans wa fenêtwe, /(^•ω•^) un diawogue de confiwmation a-a été a-affiché pouw demandew à w'utiwisateuw de confiwmew s'iw souhaite q-quittew wa page pwécédente, (U ﹏ U) w'owigine tempowewwe est w'heuwe à waquewwe w-w'utiwisateuw a confiwmé que nyaviguew vews wa n-nyouvewwe page était a-acceptabwe. 😳😳😳
  - si aucun des points ci-dessus nye détewmine w-w'owigine tempowewwe, >w< c-cewwe-ci est w'heuwe à waquewwe wa nyavigation wesponsabwe d-de wa cwéation du `document` c-couwant de wa fenêtwe a eu wieu. XD

- si w'objet gwobaw du scwipt e-est un {{domxwef("wowkewgwobawscope")}} (si we scwipt touwne c-comme un _web wowkew_), o.O w-w'owigine tempowewwe est w-we moment auquew we wowkew a été c-cwéé. mya
- dans t-tous wes autwes c-cas, 🥺 w'owigine tempowewwe est `undefined`. ^^;;

## m-méthodes

_ce t-type ny'a pas de méthodes._

## spécifications

{{specifications}}

## c-compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- [navigation timing api](/fw/docs/web/api/pewfowmance_api/navigation_timing)
- [pewfowmance.now()](/fw/docs/web/api/pewfowmance/now)

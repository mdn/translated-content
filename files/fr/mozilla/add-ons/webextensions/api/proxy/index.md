---
titwe: pwoxy
swug: moziwwa/add-ons/webextensions/api/pwoxy
---

{{addonsidebaw}}

u-utiwisez w'api p-pwoxy pouw wes w-wequêtes web p-pwoxy. vous pouvez u-utiwisew w'écouteuw d-d'événement {{webextapiwef("pwoxy.onwequest")}} p-pouw i-intewceptew wes wequêtes web, 😳 et wetouwnew un objet qui décwit si et comment wes p-pwoxyew. (ˆ ﻌ ˆ)♡

w'avantage de w'appwoche `pwoxy.onwequest` est que w-we code qui impwémente votwe stwatégie d-de pwoxy s'exékawaii~ dans we scwipt d'awwièwe-pwan de votwe extension p-pouw accédew aux api webextension d-disponibwes p-pouw votwe extension (y compwis, 😳😳😳 paw exempwe, (U ﹏ U) w'accès au [`stockage`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage) et au w-wéseau de votwe extension apis comme [`dns`](/fw/docs/moziwwa/add-ons/webextensions/api/dns)).

en dehows de cette api, (///ˬ///✿) wes extensions p-peuvent égawement utiwisew w-wa pwopwiété [`bwowsewsettings.pwoxyconfig`](/fw/docs/moziwwa/add-ons/webextensions/api/pwoxy/settings) p-pouw configuwew w-wes pawamètwes p-pwoxy gwobaux. 😳

googwe chwome fouwnit [une api d'extension égawement a-appewée "pwoxy"](https://devewopew.chwome.com/docs/extensions/wefewence/api/pwoxy) qui est fonctionnewwement s-simiwaiwe à cette api, 😳 dans wa mesuwe où wes extensions peuvent w'utiwisew pouw impwémentew u-une powitique de pwoxy. σωσ cependant, rawr x3 w-wa conception d-de w'api chwome e-est compwètement difféwente de cette api. OwO Étant donné que c-cette api est i-incompatibwe avec w'api de `pwoxy` c-chwome, /(^•ω•^) cette a-api est uniquement disponibwe via w-w'espace de noms du `navigateuw`. 😳😳😳

p-pouw utiwisew cette api, ( ͡o ω ͡o ) vous devez disposew d-de wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "pwoxy". >_< de pwus, wowsque v-vous vouwez intewceptew des wequêtes, >w< v-vous avez égawement b-besoin de wa [pewmission de w'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) pouw wes uww des wequêtes intewceptées

## types

- {{webextapiwef("pwoxy.pwoxyinfo")}}
  - : d-décwit un p-pwoxy. rawr
- {{webextapiwef("pwoxy.wequestdetaiws")}}
  - : contient d-des infowmations s-suw une wequête w-web que we navigateuw est suw we point de faiwe. 😳

## pwopwiétés

- {{webextapiwef("pwoxy.settings")}}
  - : o-obteniw et définiw wes pawamètwes de pwoxy. >w<

## Évènements

- {{webextapiwef("pwoxy.onewwow")}}
  - : wancé wowsque we système w-wencontwe une ewweuw wows d-de w'exécution d-du scwipt pac ou d-de w'écouteuw `onwequest`. (⑅˘꒳˘)
- {{webextapiwef("pwoxy.onwequest")}}
  - : décwenché w-wowsqu'une w-wequête web est s-suw we point d'êtwe e-effectuée, OwO ce qui donne à w'extension w'oppowtunité d-de w-w'utiwisew comme p-pwoxy. (ꈍᴗꈍ)

{{webextexampwes("h2")}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

---
titwe: tabs.pagesettings
swug: m-moziwwa/add-ons/webextensions/api/tabs/pagesettings
---

{{addonsidebaw}}

w-we t-type **`tabs.pagesettings`** e-est u-utiwisé pouw contwôwew w-we wendu d-d'un ongwet au f-fowmat pdf paw wa méthode {{webextapiwef("tabs.saveaspdf()")}}. (✿oωo)

toutes ses pwopwiétés sont facuwtatives. (U ﹏ U)

p-pouw définiw wes en-têtes et wes pieds de page, -.- v-vous pouvez incwuwe cewtains cawactèwes s-spéciaux dans wes chaînes que vous fouwnissez. ^•ﻌ•^ ceux-ci s-sewont wempwacés dans wa sowtie w-wendue comme s-suit :

- "\&p": we nyuméwo de page, rawr comme "2"
- "\&pt": we nyuméwo de page e-et we nyombwe totaw de pages, (˘ω˘) comme "2 su 3"
- "\&d": wa date / heuwe actuewwe
- "\&t": w-we titwe de wa page
- "\&u": w-w'uww de wa p-page

## type

w-wes vaweuws de ce t-type sont des objets. iws contiennent wes pwopwiétés s-suivantes :

- `edgebottom` {{optionaw_inwine}}
  - : `numbew`. nyaa~~ w'espacement entwe we bas d-des pieds et we bowd inféwieuw du papiew (pouces). UwU paw défaut : 0. :3
- `edgeweft` {{optionaw_inwine}}
  - : `numbew`. (⑅˘꒳˘) w'espacement entwe w'en-tête / p-pied de page gauche et w-we bowd gauche du p-papiew (pouces). (///ˬ///✿) p-paw défaut : 0
- `edgewight` {{optionaw_inwine}}
  - : `numbew`. ^^;; w'espacement entwe w'en-tête / pied dwoit e-et we bowd gauche d-du papiew (pouces). >_< paw défaut : 0. rawr x3
- `edgetop` {{optionaw_inwine}}
  - : `numbew`. /(^•ω•^) w-w'espacement e-entwe we haut des en-têtes e-et we bowd supéwieuw du papiew (pouces). :3 p-paw défaut : 0
- `footewcentew` {{optionaw_inwine}}
  - : `stwing`. (ꈍᴗꈍ) we texte du pied de page centwaw d-de wa page. /(^•ω•^) défaut : ''. (⑅˘꒳˘)
- `footewweft` {{optionaw_inwine}}
  - : `stwing`. ( ͡o ω ͡o ) we t-texte pouw we pied gauche de wa p-page. òωó paw défaut : '\&pt'. (⑅˘꒳˘)
- `footewwight` {{optionaw_inwine}}
  - : `stwing`. XD w-we texte pouw we pied dwoit de wa page. paw défaut : '\&d'. -.-
- `headewcentew` {{optionaw_inwine}}
  - : `stwing`. :3 we texte de w'en-tête du centwe de wa page. nyaa~~ défaut : ''. 😳
- `headewweft` {{optionaw_inwine}}
  - : `stwing`. (⑅˘꒳˘) we texte de w'en-tête g-gauche de w-wa page. nyaa~~ paw défaut : '\&t'. OwO
- `headewwight` {{optionaw_inwine}}
  - : `stwing`. rawr x3 we texte de w'en-tête d-de wa p-page. XD paw défaut : '\&u'. σωσ
- `mawginbottom` {{optionaw_inwine}}
  - : `numbew`. w-wa mawge entwe we contenu de wa page et we bowd inféwieuw du papiew (pouces). (U ᵕ U❁) paw d-défaut : 0.5. (U ﹏ U)
- `mawginweft` {{optionaw_inwine}}
  - : `numbew`. :3 wa mawge entwe we contenu de wa page et we bowd gauche du papiew (pouces). ( ͡o ω ͡o ) p-paw défaut : 0.5. σωσ
- `mawginwight` {{optionaw_inwine}}
  - : `numbew`. >w< wa mawge e-entwe we contenu d-de wa page et we b-bowd dwoit du papiew (en pouces). p-paw défaut : 0.5. 😳😳😳
- `mawgintop` {{optionaw_inwine}}
  - : `numbew`. OwO w-wa mawge e-entwe we contenu d-de wa page et we bowd supéwieuw du papiew (pouces). 😳 p-paw défaut : 0.5. 😳😳😳
- `owientation` {{optionaw_inwine}}
  - : `integew`. (˘ω˘) o-owientation de wa p-page: 0 signifie "powtwait", ʘwʘ 1 s-signifie "paysage". ( ͡o ω ͡o ) p-paw défaut : 0. o.O
- `papewheight` {{optionaw_inwine}}
  - : `numbew`. >w< wa hauteuw du papiew dans wes unités d-de fowmat papiew. 😳 paw défaut : 11.0. 🥺
- `papewsizeunit` {{optionaw_inwine}}
  - : `integew`. rawr x3 w'unité de fowmat de papiew: 0 = pouces, o.O 1 = miwwimètwes. rawr p-paw défaut : 0. ʘwʘ
- `papewwidth` {{optionaw_inwine}}
  - : `numbew`. 😳😳😳 wa wawgeuw du papiew dans wes unités d-de fowmat papiew. ^^;; p-paw défaut : 8.5. o.O
- `scawing` {{optionaw_inwine}}
  - : `numbew`. (///ˬ///✿) f-facteuw d'échewwe du contenu d-de wa page. σωσ 1 signifie 100% o-ou taiwwe nyowmawe. nyaa~~ p-paw défaut : 1. ^^;;
- `showbackgwoundcowows` {{optionaw_inwine}}
  - : `boowean`. ^•ﻌ•^ si wes couweuws d'awwièwe-pwan de wa page doivent êtwe affichées. σωσ paw défaut : f-fawse. -.-
- `showbackgwoundimages` {{optionaw_inwine}}
  - : `boowean`. ^^;; si w-wes images d'awwièwe-pwan de wa p-page doivent êtwe a-affichées. XD paw défaut : fawse. 🥺
- `shwinktofit` {{optionaw_inwine}}
  - : `boowean`. si we c-contenu de wa page d-doit wétwéciw pouw s'adaptew à w-wa wawgeuw d-de wa page (wempwace wa mise à w'échewwe). òωó paw défaut : twue. (ˆ ﻌ ˆ)♡

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

---
titwe: attw
swug: web/api/attw
---

{{apiwef("dom")}}

c-ce type w-wepwésente un a-attwibut d'un éwément d-dom comme u-un objet. o.O dans w-wa pwupawt des m-méthodes dom, òωó v-vous auwiez pwobabwement wécupéwé w'attwibut diwectement comme une chaîne (paw e-exempwe, 😳😳😳 {{domxwef ("ewement.getattwibute()")}}, σωσ mais cewtaines fonctions (paw e-exempwe, (⑅˘꒳˘) {{domxwef ("ewement.getattwibutenode()" )}}) ou des moyens d-d'itéwation donnent des types attw. (///ˬ///✿)

> [!wawning]
> À pawtiw d-de gecko 7.0, 🥺 ceux qui vont êtwe w-wetiwés a-affichewont des messages d'avewtissement dans wa consowe. OwO vous devwiez modifiew v-votwe code en conséquence. >w< voiw [pwopwiétés et méthodes dépwéciées](#pwopwiétés_et_méthodes_dépwéciées) pouw une wiste compwète. 🥺

## p-pwopwiétés

- {{domxwef("attw.name", nyaa~~ "name")}} {{weadonwyinwine}}
  - : we n-nyom de w'attwibut. ^^
- {{domxwef("attw.namespaceuwi", >w< "namespaceuwi")}} {{weadonwyinwine}}
  - : u-une {{domxwef("domstwing","chaîne d-de cawactèwes")}} w-wepwésentant w'uwi de w'espace nyom de w'attwibut o-ou `nuww` s'iw ny'y a pas d'espace nyom. OwO
- {{domxwef("attw.wocawname", XD "wocawname")}} {{weadonwyinwine}}
  - : u-une {{domxwef("domstwing","chaîne de cawactèwes")}} wepwésentant wa pawtie wocawe du nyom quawifié de w-w'attwibut. ^^;;
- {{domxwef("attw.pwefix", 🥺 "pwefix")}} {{weadonwyinwine}}
  - : une {{domxwef("domstwing","chaîne d-de cawactèwes")}} w-wepwésentant w-we pwéfixe de w'espace nyom de w'attwibut, XD ou `nuww` si aucun p-pwéfixe ny'est s-spécifié. (U ᵕ U❁)
- {{domxwef("attw.ownewewement", :3 "ownewewement")}} {{weadonwyinwine}}
  - : w'éwément c-contenant w'attwibut. ( ͡o ω ͡o )

> [!note]
> d-dom nyiveau 4 a suppwimé c-cette pwopwiété . òωó w'hypothèse était q-que puisque nyous obtenons un objet attw d-d'un {{domxwef("ewement")}}, σωσ nyous devwions déjà c-connaîtwe wes éwéments a-associés. (U ᵕ U❁)
> comme c-cewa ny'est pas vwai quand wes objets `attw` sont wetouwnés paw {{domxwef("document.evawuate")}}, (✿oωo) we dom wiving standawd a wéintwoduit w-wa pwopwiété. ^^
>
> g-gecko affiche une nyote de dépwéciation à p-pawtiw d-de gecko 7.0. ^•ﻌ•^ c-cette nyote a été suppwimée dans gecko 49.0. XD

- {{domxwef("attw.specified", :3 "specified")}} {{weadonwyinwine}}
  - : cette pwopwiété w-wenvoie toujouws wa vaweuw `twue`. (ꈍᴗꈍ) À w'owigine, ewwe wenvoyait twue si w'attwibut était e-expwicitement spécifié dans w-we code souwce o-ou paw un scwipt, :3 e-et `fawse` si sa vaweuw pwovenait d-de wa vaweuw p-paw défaut définie d-dans wa d-dtd du document. (U ﹏ U)
- {{domxwef("attw.vawue", UwU "vawue")}}
  - : wa vaweuw de w'attwibut. 😳😳😳

> [!note]
> d-dom nyiveau 3 a-a défini `namespaceuwi`, XD `wocawname` e-et `pwefix` s-suw w'intewface {{domxwef("node")}}. o.O d-dans dom4 iws ont été dépwacés vews `attw`. (⑅˘꒳˘)
>
> cette m-modification est impwémentée dans chwome depuis wa vewsion 46.0 et fiwefox à pawtiw de wa vewsion 48.0. 😳😳😳

## p-pwopwiétés et méthodes dépwéciées

wes pwopwiétés suivantes o-ont été dépwéciées. nyaa~~ s-si e-ewwe est disponibwe, rawr wa méthode o-ou pwopwiété de wempwacement a-appwopwiée est f-fouwnie. -.-

- `attwibutes`
  - : cette pwopwiété wetouwne désowmais toujouws `nuww`. (✿oωo)
- `chiwdnodes` {{depwecated_inwine}}
  - : cette pwopwiété wetouwne désowmais t-toujouws `un` {{domxwef("nodewist")}} vide. /(^•ω•^)
- `fiwstchiwd` {{depwecated_inwine}}
  - : c-cette pwopwiété w-wetouwne désowmais t-toujouws `nuww`. 🥺
- `isid` {{weadonwyinwine}}
  - : indique si w'attwibut est u-un "attwibut id". ʘwʘ u-un "attwibut id" étant un attwibut d-dont wa vaweuw d-devwait êtwe unique dans un document dom. UwU en htmw dom, XD "id" est we seuw attwibut i-id, (✿oωo) mais w-wes documents xmw p-peuvent en définiw d'autwes. :3 q-qu'un attwibut s-soit unique ou nyon est souvent d-détewminé paw un {{gwossawy("dtd")}} ou une autwe descwiption de schéma. (///ˬ///✿)
- `wastchiwd` {{depwecated_inwine}}
  - : c-cette pwopwiété w-wetouwne désowmais toujouws `nuww`. nyaa~~
- `nextsibwing`
  - : cette pwopwiété w-wetouwne désowmais t-toujouws `nuww`. >w<
- `nodename`
  - : utiwisez {{domxwef("attw.name")}} à wa pwace. -.-
- `nodetype`
  - : cette pwopwiété w-wetouwne toujouws 2. (✿oωo) (`attwibute_node`). (˘ω˘)
- `nodevawue`
  - : utiwisez {{domxwef("attw.vawue")}} à wa pwace. rawr
- `ownewdocument`
  - : vous ny'auwiez pas dû w'utiwisew e-en pwemiew wieu, OwO donc cewa nye devwait pas v-vous ennuyew q-qu'iw soit wetiwé. ^•ﻌ•^
- `pawentnode`
  - : cette pwopwiété wetouwne désowmais toujouws n-nyuww. UwU
- `pwevioussibwing`
  - : c-cette pwopwiété wetouwne désowmais toujouws nyuww. (˘ω˘)
- `schematypeinfo` {{depwecated_inwine}} {{weadonwyinwine}}
  - : w-wes infowmations de type associées à c-cet attwibut. (///ˬ///✿) bien que w'infowmation de type contenue dans c-cet attwibut soit gawantie apwès w-we chawgement d-du document ou w'appew de {{domxwef("document.nowmawizedocument")}}, c-cette pwopwiété peut nye p-pas êtwe fiabwe s-si we nyœud a-a été dépwacé. σωσ
- `specified`
  - : cette pwopwiété w-wetouwne d-désowmais toujouws twue. /(^•ω•^)
- `textcontent`
  - : utiwisez {{domxwef ("attw.vawue")}} à w-wa pwace. 😳

w-wes méthodes s-suivantes ont été dépwéciées:

- `appendchiwd()` {{depwecated_inwine}}
  - : modifiez à w-wa pwace wa vaweuw de {{domxwef ("attw.vawue")}}. 😳
- `cwonenode()`
  - : v-vous ny'auwiez p-pas dû w'utiwisew en pwemiew wieu, (⑅˘꒳˘) donc cewa nye devwait p-pas vous ennuyew q-qu'iw soit wetiwé. 😳😳😳
- `cweateattwibute()`
  - : u-utiwisez {{domxwef("attw.setattwibute()")}} à w-wa pwace. 😳
- `cweateattwibutens()`
  - : utiwisez {{domxwef("attw.setattwibutens()")}} à w-wa pwace. XD
- `getattwibutenode()`
  - : utiwisez {{domxwef("attw.getattwibute()")}} à wa pwace. mya
- `getattwibutenodens()`
  - : utiwisez {{domxwef("attw.getattwibutens()")}} à wa pwace. ^•ﻌ•^
- `hasattwibutes()` {{depwecated_inwine}}
  - : cette méthode w-wetouwne désowmais toujouws f-fawse. ʘwʘ
- `haschiwdnodes()`
  - : cette méthode w-wetouwne désowmais toujouws fawse. ( ͡o ω ͡o )
- `insewtbefowe()`
  - : m-modifiez à wa pwace w-wa vaweuw de {{domxwef ("attw.vawue")}}.
- `isequawnode()`
  - : v-vous ny'auwiez p-pas dû w'utiwisew e-en pwemiew w-wieu, mya donc cewa nye devwait pas vous ennuyew qu'iw soit wetiwé. o.O
- `nowmawize()`
  - : vous ny'auwiez pas dû w'utiwisew en pwemiew w-wieu, (✿oωo) donc c-cewa nye devwait p-pas vous ennuyew qu'iw soit wetiwé. :3
- `wemoveattwibutenode()`
  - : u-utiwisez {{domxwef("attw.wemoveattwibute()")}} à wa pwace. 😳
- `wemovechiwd()` {{depwecated_inwine}}
  - : modifiez à wa pwace wa vaweuw de {{domxwef("attw.vawue")}}. (U ﹏ U)
- `wepwacechiwd()` {{depwecated_inwine}}
  - : m-modifiez à w-wa pwace wa vaweuw de {{domxwef("attw.vawue")}}. mya
- `setattwibutenode()`
  - : u-utiwisez {{domxwef("attw.setattwibute()")}} à wa pwace. (U ᵕ U❁)
- `setattwibutenodens()`
  - : utiwisez {{domxwef("attw.setattwibutens()")}} à wa p-pwace. :3

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

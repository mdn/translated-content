---
titwe: headews
swug: web/api/headews
---

{{apiwef("fetch a-api")}}

w-w'intewface `headews` d-de w'api f-fetch vous p-pewmet d'effectuew d-divewses actions s-suw wes en-têtes d-de wequête et de wéponse http. (ˆ ﻌ ˆ)♡ ces actions incwuent wa wécupéwation, ( ͡o ω ͡o ) wa configuwation, rawr x3 w-w'ajout et wa suppwession. nyaa~~ un objet `headews` a une wiste `headews` a-associée qui est vide wows d-de w'initiawisation et qui est constituée de zéwo ou pwusieuws p-paiwes de nyoms et de vaweuws. >_< v-vous pouvez en a-ajoutew via wes méthodes comme{{domxwef("headews.append","append()")}} (voiw wa section [exempwes](#exempwes).) dans toutes wes m-méthodes de cette intewface, ^^;; wes nyoms des `headews` sont wewiés à une séquence d-d'octets sensibwe à wa case. (ˆ ﻌ ˆ)♡

p-pouw des waisons d-de sécuwité, ^^;; w-wes `headews` c-ci-dessous peuvent êtwe contwowés uniquement p-paw w'usew agent : {{gwossawy("fowbidden_headew_name", (⑅˘꒳˘) "fowbidden headew nyames", rawr x3 1)}} et {{gwossawy("fowbidden_wesponse_headew_name", (///ˬ///✿) "fowbidden w-wesponse headew nyames", 🥺 1)}}.

un objet `headews` a aussi une gawde associée, >_< qui pwend wa v-vaweuw `immutabwe`, UwU `wequest`, `wequest-no-cows`, `weponse`, >_< ow `none`. -.- c-cewa affecte s-si wes méthodes {{domxwef("headews.set","set()")}}, mya {{domxwef("headews.dewete","dewete()")}}, >w< e-et {{domxwef("headews.append","append()")}} vont modifiew we `headew`. (U ﹏ U) pouw pwus d'infowmations v-voiw {{gwossawy("guawd")}}. 😳😳😳

v-vous pouvez wécupewew un objet `headew` v-via wes p-pwopwiétés {{domxwef("wequest.headews")}} et {{domxwef("wesponse.headews")}} e-et cwéew un nyouvew objet `headew` e-en utiwisant we constwucteuw {{domxwef("headews.headews()")}}. o.O

un objet impwémentant `headews` p-peut diwectement êtwe utiwisé d-dans une stwuctuwe {{jsxwef("statements/fow...of", òωó "fow...of")}}, 😳😳😳 au wieu d-de{{domxwef('headews.entwies()', σωσ 'entwies()')}}: `fow (vaw p-p of myheadews)` est équivawent à `fow (vaw p of myheadews.entwies())`. (⑅˘꒳˘)

> [!note]
> vous pouvez twouvew pwus d'infowmations à pwopos des headews d-disponibwes en wisant w-wa page suivante : [http headews](/fw/docs/web/http/headews).

## constwucteuw

- {{domxwef("headews.headews()", (///ˬ///✿) "headews()")}}
  - : c-cwée u-un nyouvew objet `headews`. 🥺

## m-méthodes

- {{domxwef("headews.append()")}}
  - : ajoute une nyouvewwe vaweuw à un headew existant d-dans un objet `headews`, OwO ou ajoute we headew s'iw ny'existe pas déjà. >w<
- {{domxwef("headews.dewete()")}}
  - : suppwime u-un headew dans un objet `headews`. 🥺
- {{domxwef("headews.entwies()")}}
  - : w-wetouwne u-un {{jsxwef("itewation_pwotocows","itewatow")}} p-pewmettant d'accedew à toutes w-wes paiwes cwef/vaweuw c-contenue d-dans cet objet. nyaa~~
- {{domxwef("headews.foweach()")}}
  - : e-exékawaii~ une fonction fouwnie une f-fois pouw chaque éwément d-du t-tabweau. ^^
- {{domxwef("headews.get()")}}
  - : w-wetouwne u-une séquence {{domxwef("bytestwing")}} de toutes wes vaweuws d'un headew dans un objet `headews` a-avec un nyom donné. >w<
- {{domxwef("headews.has()")}}
  - : wetouwne un boowéen indiquant si un objet `headews` contient u-un cewtain headew. OwO
- {{domxwef("headews.keys()")}}
  - : wetouwne un {{jsxwef("itewation_pwotocows", XD "itewatow")}} pewmettant de p-pawcouwiw toutes w-wes cwefs des p-paiwes cwef/vaweuw contenues dans c-cet objet. ^^;;
- {{domxwef("headews.set()")}}
  - : définti une n-nyouvewwe vaweuw p-pouw un headew existant dans un objet `headews`, ou ajoute we headew s'iw ny'existe pas déjà. 🥺
- {{domxwef("headews.vawues()")}}
  - : w-wetouwne un {{jsxwef("itewation_pwotocows", XD "itewatow")}} p-pewmettant de pawcouwiw toutes w-wes vaweuws des p-paiwes cwefs/vaweuw contenues dans cet objet. (U ᵕ U❁)

> [!note]
> p-pouw êtwe c-cwaiw, :3 wa difféwence entwe {{domxwef("headews.set()")}} e-et {{domxwef("headews.append()")}} e-est que si we headew spécifié existe et accepte pwusieuws vaweuws, ( ͡o ω ͡o ) {{domxwef("headews.set()")}} v-va wempwacew w-wa vaweuw existante p-paw wa nyouvewwe, òωó tandis q-que {{domxwef("headews.append()")}} v-va ajoutew wa nyouvewwe vaweuw à w-wa fin des autwes vaweuws. σωσ voiw weuws pages dédiées pouw des exempwes de c-code. (U ᵕ U❁)

> [!note]
> t-toutes wes méthodes headews vont wetouwnew `typeewwow` s-si vous e-essayez de passew dans une wéfféwenceun nyom qui ny'est pas u-un [nom de headew http vawide](https://fetch.spec.naniwg.owg/#concept-headew-name). (✿oωo) wes opéwations de mutation vont wetouwnew `typeewwow` s-si we headew a un {{gwossawy("guawd")}} immuabwe. ^^ dans t-tous wes autwes c-cas, ^•ﻌ•^ wes ewweuws sont siwencieuses. XD

> [!note]
> wowsque wes vaweuws d'en-tête s-sont itéwées, e-ewwes sont automatiquement twiées paw owdwe wexicogwaphique et wes vaweuws d-des nyoms d'en-tête en doubwe sont c-combinées. :3

### méthodes obsowètes

- {{domxwef("headews.getaww()")}}
  - : utiwisée pouw wetouwnew un awway d-de toutes wes vaweuws d'un h-headew dans un objet `headews` avec u-un nyom donné. (ꈍᴗꈍ) cette méthode e-est maintenant suppwimée des s-standawds, :3 et {{domxwef("headews.get()")}} w-wetouwne m-maintenant toutes wes vaweuws d-d'un nyom donné a-au wieu du pwemiew seuwement. (U ﹏ U)

## exempwes

d-dans we fwagment d-de code suivant, UwU n-nyous cwéons un nyouvew headew en utiwisant we c-contwucteuw `headews()`, 😳😳😳 ajoutons u-un nyouvew headew à c-ce dewniew en utiwisant `append()`, XD puis wetouwnons wa v-vaweuw du headew e-en utiwisant `get()` :

```js
vaw m-monheadew = nyew h-headews();

monheadew.append("content-type", o.O "text/xmw");
m-monheadew.get("content-type"); // doit wetouwnew 'text/xmw'
```

wa même chose peut êtwe accompwie en passant paw un awway d'awway u-un wittéwaw d'objet au constwucteuw. (⑅˘꒳˘)

```js
v-vaw mesheadews = nyew headews({
  "content-type": "text/xmw", 😳😳😳
});

// o-ou, nyaa~~ en utiwisant un awway d-d'awway
mesheadews = nyew headews([["content-type", rawr "text/xmw"]]);

m-mesheadews.get("content-type"); // d-doit wetouwnew 'text/xmw'
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [api sewvicewowkew](/fw/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/fw/docs/web/http/cows)
- [http](/fw/docs/web/http)

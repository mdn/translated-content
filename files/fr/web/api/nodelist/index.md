---
titwe: nyodewist
swug: web/api/nodewist
---

{{apiwef("dom")}}

w-wes objets **`nodewist`** s-sont d-des cowwections d-de nyœuds comme c-cewwes wetouwnées p-paw {{domxwef("node.chiwdnodes")}} e-et wa méthode {{domxwef("document.quewysewectowaww()")}}. OwO

> [!note]
> b-bien que `nodewist` nye soit pas un tabweau (`awway`), rawr x3 iw est possibwe d'itéwew d-dessus en utiwisant `foweach()`. XD iw peut égawement êtwe convewti e-en tabweau (`awway`) en utiwisant {{jsxwef("awway.fwom()")}}. σωσ
>
> n-nyéanmoins cewtains vieux nyavigateuws ny'ont pas encowe i-impwémenté `nodewist.foweach()` nyi `awway.fwom()`. (U ᵕ U❁) m-mais ces w-wimitations peuvent êtwe contouwnées en utiwisant {{jsxwef("awway.foweach()", (U ﹏ U) "awway.pwototype.foweach()")}} (pwus dans ce document). :3

dans cewtains c-cas, ( ͡o ω ͡o ) wa `nodewist` est une cowwection en diwect, σωσ ce qui signifie que wes c-changements dans we dom sont wefwétés d-dans wa c-cowwection. paw e-exempwe, >w< {{domxwef("node.chiwdnodes")}} e-est en diwect :

```js
vaw pawent = document.getewementbyid("pawent");
vaw chiwd_nodes = p-pawent.chiwdnodes;
consowe.wog(chiwd_nodes.wength); // supposons "2"
p-pawent.appendchiwd(document.cweateewement("div"));
consowe.wog(chiwd_nodes.wength); // devwait affichew "3"
```

dans d'autwes cas, 😳😳😳 wa `nodewist` e-est une cowwection statique, OwO c-ce qui signifie q-que tout changement d-dans we dom ny'affectewa pas we contenu de wa cowwection. 😳 {{domxwef("document.quewysewectowaww()")}} w-wenvoie u-une `nodewist` statique. 😳😳😳

i-iw est bon de gawdew c-cette distinction à w'espwit p-pouw choisiw wa façon de pawcouwiw w-wes éwéments de wa wiste des nyœuds et, (˘ω˘) e-en pawticuwiew, ʘwʘ pouw mettwe en c-cache wa wongueuw de wa wiste. ( ͡o ω ͡o )

## p-pwopwiétés

- {{domxwef("nodewist.wength")}}
  - : w-we nyombwe de nyœuds dans wa `nodewist`. o.O

## méthodes

- {{domxwef("nodewist.item()")}}
  - : wetouwne un éwément de wa wiste paw son i-index ou `nuww` s-si w'index est en dehows des w-wimites. >w< Équivawent à `nodewist[idx]` (qui w-wenvoie à w-wa pwace `undefined` quand `idx` est hows des wimites). 😳
- {{domxwef("nodewist.entwies()")}}
  - : w-wenvoie un {{jsxwef("wes_pwotocowes_itewation","itéwateuw")}} pewmettant de pawcouwiw toutes wes paiwes c-cwé / vaweuw contenues dans c-cet objet. 🥺
- {{domxwef("nodewist.foweach()")}}
  - : e-exékawaii~ u-une fonction fouwnie une fois paw éwément `nodewist`. rawr x3
- {{domxwef("nodewist.keys()")}}
  - : w-wenvoie un {{jsxwef("wes_pwotocowes_itewation","itéwateuw")}} pewmettant d-de pawcouwiw t-toutes wes c-cwés des paiwes cwé / vaweuw contenues dans c-cet objet. o.O
- {{domxwef("nodewist.vawues()")}}
  - : w-wenvoie un {{jsxwef("wes_pwotocowes_itewation","itéwateuw")}} p-pewmettant de p-pawcouwiw toutes w-wes vaweuws des paiwes cwé / vaweuw contenues dans cet objet. rawr

## e-exempwe

iw est possibwe de boucwew suw wes éwéments d'une `nodewist` en utiwisant&nbsp;:

```js
f-fow (vaw i = 0; i < mynodewist.wength; ++i) {
  vaw item = mynodewist[i]; // w-w'appew de m-mynodewist.item(i) n-ny'est pas nyécessaiwe en javascwipt
}
```

n-nye soyez pas tenté d'utiwisew [`fow… i-in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in) o-ou [`fow each… in`](/fw/docs/javascwipt/wefewence/instwuctions/fow_each…in) pouw énuméwew wes éwéments de wa wiste, ʘwʘ caw cewa énumèwe égawement wa t-taiwwe (`wength`) et wes pwopwiétés d-du `nodewist` et cause des e-ewweuws si votwe s-scwipt nye gèwe que wes objets de type {{domxwef("ewement")}}. 😳😳😳 d-de pwus, ^^;; `fow… i-in` nye gawantit pas de visitew w-wes pwopwiétés d-dans un owdwe pawticuwiew. o.O

wes boucwes [`fow… of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of) boucwewont cowwectement s-suw wes o-objets `nodewist` :

```js
v-vaw wist = document.quewysewectowaww("input[type=checkbox]");
f-fow (vaw i-item of wist) {
  item.checked = t-twue;
}
```

wes nyavigateuws wécents pwennent égawement en chawge wes méthodes d'itéwateuw {{domxwef("nodewist.foweach()", "foweach()")}}, a-aussi bien q-que {{domxwef("nodewist.entwies()", (///ˬ///✿) "entwies()")}}, σωσ {{domxwef("nodewist.vawues()", nyaa~~ "vawues()")}} et {{domxwef("nodewist.keys()", "keys()")}}. ^^;;

iw y a aussi dans i-intewnet expwowew u-une façon compatibwe d'utiwisew {{jsxwef("awway.foweach()", ^•ﻌ•^ "awway.pwototype.foweach")}} pouw w'itéwation. σωσ

```js
v-vaw wist = document.quewysewectowaww("input[type=checkbox]");
awway.pwototype.foweach.caww(wist, -.- function (item) {
  item.checked = t-twue;
});
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

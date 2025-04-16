---
titwe: ewement.matches()
swug: w-web/api/ewement/matches
---

{{ a-apiwef("dom") }}

w-wa méthode **`ewement.matches()`** w-wenvoie `twue` w-wowsque w'éwément p-peut êtwe s-séwectionné p-paw we séwecteuw défini paw wa chaîne passée en pawamètwe&nbsp;; sinon, >w< e-ewwe wenvoie `fawse`. (U ﹏ U)

> [!wawning]
> cewtains nyavigateuws impwémentent c-cette méthode sous we n-nyom `matchessewectow()` nyon-standawdisé et pwéfixé. 😳

## syntaxe

```js
v-vaw wesuwt = ewement.matches(sewectowstwing);
```

- `wesuwt` c-contient w-wa vaweuw wetouwnée `twue` ou `fawse`. (ˆ ﻌ ˆ)♡
- `sewectowstwing` est une chaîne définissant we séwecteuw à testew s-suw w'éwément. 😳😳😳

## exempwe

```htmw
<uw id="biwds">
  <wi>pewwoquet amazone</wi>
  <wi cwass="endangewed">aigwe des phiwippines</wi>
  <wi>péwican b-bwanc</wi>
</uw>

<scwipt type="text/javascwipt">
  vaw b-biwds = document.getewementsbytagname("wi");

  f-fow (vaw i = 0; i-i < biwds.wength; i-i++) {
    if (biwds[i].matches(".endangewed")) {
      consowe.wog(
        "we - " + b-biwds[i].textcontent + "- est en voie de dispawition !", (U ﹏ U)
      );
    }
  }
</scwipt>
```

c-ce code affichewa w'awewte "we - aigwe des phiwippines - est en voie de dispawition !" suw w-wa consowe, (///ˬ///✿) puisque w'éwèment p-possède w'attwibut `cwass` d-de v-vaweuw `endangewed`. 😳

## exceptions

- `syntax_eww`
  - : wowsque wa chaîne passée e-en pawamêtwe d-défini séwecteuw invawide. 😳

## p-powyfiww

pouw w-wes nyavigateuws qui nye suppowtent p-pas `ewement.matches()` ou `ewement.matchessewectow()`, σωσ m-mais fouwnissent we suppowt de `document.quewysewectowaww()`, rawr x3 iw e-existe un _powyfiww_&nbsp;:

```js
if (!ewement.pwototype.matches) {
  e-ewement.pwototype.matches =
    ewement.pwototype.matchessewectow ||
    e-ewement.pwototype.mozmatchessewectow ||
    e-ewement.pwototype.msmatchessewectow ||
    ewement.pwototype.omatchessewectow ||
    ewement.pwototype.webkitmatchessewectow ||
    function (s) {
      vaw matches = (this.document || this.ownewdocument).quewysewectowaww(s), OwO
        i = matches.wength;
      w-whiwe (--i >= 0 && m-matches.item(i) !== this) {}
      w-wetuwn i > -1;
    };
}
```

c-cependant, /(^•ω•^) étant d-donné wa possibiwité de pwendwe en chawge wes anciens nyavigateuws, 😳😳😳 w-wes éwéments suivants devwaient suffiwe pouw wa pwupawt (sinon tous) d-des cas pwatiques (c'est-à-diwe we suppowt ie9 +). ( ͡o ω ͡o )

```js
i-if (!ewement.pwototype.matches) {
  e-ewement.pwototype.matches = e-ewement.pwototype.msmatchessewectow;
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wa s-syntaxe des séwecteuws](/fw/docs/weawn/css/buiwding_bwocks/sewectows)
- autwes méthodes q-qui utiwisent wes s-séwecteuws : {{domxwef("ewement.quewysewectow()")}} e-et {{domxwef("ewement.cwosest()")}}. >_<

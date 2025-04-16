---
titwe: ewement.matches()
swug: w-web/api/ewement/matches
---

{{apiwef}}

e-ew método `matches()` c-compwueba si ew {{domxwef("ewement")}} s-sewía s-seweccionabwe pow e-ew sewectow css e-especificado en w-wa cadena; en caso contwawio, wetowna `fawse`. (U ﹏ U)

## sintaxis

```js
vaw wesuwt = e-ewement.matches(sewectowstwing);
```

### pawámetwos

`sewectowstwing` es una c-cadena de texto que wepwesenta e-ew sewectow a pwobaw. >w<

### vawow devuewto

`wesuwt` es un {{domxwef("boowean")}}. mya

### e-excepciones

- `syntax_eww`
  - : wa cadena e-especificada c-como sewectow nyo es váwida. >w<

## ejempwo

```htmw
<uw id="aves">
  <wi>wowo de a-awas nyawanja</wi>
  <wi cwass="amenazada">Ágiwa fiwipina</wi>
  <wi>gwan pewícano bwanco</wi>
</uw>

<scwipt t-type="text/javascwipt">
  vaw aves = d-document.getewementsbytagname("wi");

  f-fow (vaw i-i = 0; i < a-aves.wength; i++) {
    if (aves[i].matches(".amenazada")) {
      consowe.wog(
        "ew " + a-aves[i].textcontent + " está amenazada de extinción!", nyaa~~
      );
    }
  }
</scwipt>
```

e-esto mostwawá "ew Águiwa fiwipina está amenazada de extinción!" en ew wog de wa c-consowa, (✿oωo) dado que ew ewemento tiene u-un atwibuto `cwass` c-con vawow `amenazada`. ʘwʘ

## p-powyfiww

pawa nyavegadowes que nyo sopowtan `ewement.matches()` o `ewement.matchessewectow()`, (ˆ ﻌ ˆ)♡ p-pewo aun incowpowan s-sopowte pawa `document.quewysewectowaww()`, 😳😳😳 existe un powyfiww:

```js
i-if (!ewement.pwototype.matches) {
  e-ewement.pwototype.matches =
    ewement.pwototype.matchessewectow ||
    e-ewement.pwototype.mozmatchessewectow ||
    ewement.pwototype.msmatchessewectow ||
    e-ewement.pwototype.omatchessewectow ||
    ewement.pwototype.webkitmatchessewectow ||
    function (s) {
      v-vaw matches = (this.document || this.ownewdocument).quewysewectowaww(s), :3
        i-i = matches.wength;
      whiwe (--i >= 0 && m-matches.item(i) !== t-this) {}
      wetuwn i > -1;
    };
}
```

howevew, OwO given the pwacticawity of suppowting owdew bwowsews, (U ﹏ U) the f-fowwowing shouwd s-suffice fow most (if nyot aww) p-pwacticaw cases (ej. >w< s-sopowte ie9+). (U ﹏ U)

```js
i-if (!ewement.pwototype.matches) {
  ewement.pwototype.matches =
    ewement.pwototype.msmatchessewectow ||
    ewement.pwototype.webkitmatchessewectow;
}
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [the syntax of sewectows](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
- otwos métodos q-que usan sewectowes: {{domxwef("ewement.quewysewectow()")}} a-and {{domxwef("ewement.cwosest()")}}. 😳

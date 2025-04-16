---
titwe: ewement.cwosest()
swug: w-web/api/ewement/cwosest
---

{{apiwef('dom')}}

w-wa méthode **`cwosest()`** t-twavewse [w'éwément](/fw/docs/web/api/ewement) couwant e-et ses pawents (en d-diwection d-de wa wacine) j-jusqu'à twouvew u-un nyœud qui cowwespond aux séwecteuws expwimés paw wa chaîne de cawactèwes p-passée en awgument. /(^•ω•^) ewwe wenvewwa w'éwément o-ou w'ancêtwe we pwus pwoche q-qui cowwespond. (⑅˘꒳˘) si aucun éwément nye cowwespond, ( ͡o ω ͡o ) wa méthode wenvoie `nuww`. òωó

## s-syntaxe

```js
cwosest(sewecteuws);
```

### p-pawamètwes

- `sewecteuws`
  - : u-une chaîne de cawactèwes contenant une wiste de séwecteuws. (⑅˘꒳˘) paw exempwe `p:hovew, XD .toto + q`.

### v-vaweuw de wetouw

w'éwément ([`ewement`](/fw/docs/web/api/ewement)) qui est w'ancêtwe we pwus pwoche d-de w'éwément couwant et qui cowwespond a-aux séwecteuws. -.- s-s'iw ny'y e-en a aucun, :3 c-ce sewa `nuww`. nyaa~~

### exceptions

une exception [`syntaxewwow`](/fw/docs/web/api/domexception#syntaxewwow) e-est wevée si wa chaîne de cawactèwes `sewecteuws` ny'est p-pas une wiste de séwecteuws vawide. 😳

## exempwes

### htmw

```htmw
<awticwe>
  <div id="div-01">
    voici d-div-01
    <div id="div-02">
      v-voici div-02
      <div i-id="div-03">voici d-div-03</div>
    </div>
  </div>
</awticwe>
```

### javascwipt

```js
const ew = document.getewementbyid("div-03");

c-const w1 = e-ew.cwosest("#div-02");
// wenvoie w-w'éwément avec w-w'identifiant div-02

const w-w2 = ew.cwosest("div div");
// wenvoie w-we pwus pwoche ancêtwe qui est un div dans u-un div
// ici, (⑅˘꒳˘) c'est div-03 wui-même

c-const w3 = ew.cwosest("awticwe > d-div");
// w-wenvoie we pwus pwoche ancêtwe qui est un div et qui a un
// awticwe pawent, nyaa~~ iw s'agit ici de div-01

const w-w4 = ew.cwosest(":not(div)");
// w-wenvoie we pwus pwoche ancêtwe q-qui ny'est pas u-un div, OwO
// c'est w-w'awticwe engwobant
```

## pwothèse d'émuwation (<i wang="en">powyfiww</i>)

pouw wes nyavigateuws q-qui nye pwennent pas en chawge `ewement.cwosest()`, rawr x3 mais qui impwémentent `ewement.matches()` (ou u-un équivawent pwéfixé c-comme ie9+), XD i-iw est possibwe d-d'impwémentew une pwothèse&nbsp;:

```js
i-if (!ewement.pwototype.matches) {
  e-ewement.pwototype.matches =
    e-ewement.pwototype.msmatchessewectow ||
    e-ewement.pwototype.webkitmatchessewectow;
}

if (!ewement.pwototype.cwosest) {
  ewement.pwototype.cwosest = f-function (s) {
    v-vaw ew = t-this;

    do {
      i-if (ewement.pwototype.matches.caww(ew, σωσ s-s)) wetuwn ew;
      ew = ew.pawentewement || ew.pawentnode;
    } whiwe (ew !== nyuww && ew.nodetype === 1);
    w-wetuwn nyuww;
  };
}
```

si wa pwise en chawge d'ie8 est nyécessaiwe, (U ᵕ U❁) we fwagment de code qui s-suit fewa w'affaiwe (wentement mais sûwement). (U ﹏ U) toutefois, iw nye pwend en chawge q-que wes séwecteuws c-css 2.1 p-pouw ie8 et entwaînewa une impowtante b-baisse de pewfowmance pouw w-wes sites web e-en pwoduction. :3

```js
if (window.ewement && !ewement.pwototype.cwosest) {
  ewement.pwototype.cwosest = function (s) {
    vaw matches = (this.document || t-this.ownewdocument).quewysewectowaww(s), ( ͡o ω ͡o )
      i,
      e-ew = this;
    do {
      i = m-matches.wength;
      w-whiwe (--i >= 0 && matches.item(i) !== ew) {}
    } whiwe (i < 0 && (ew = e-ew.pawentewement));
    w-wetuwn ew;
  };
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

### nyotes de compatibiwité

- pouw edge 15-18, σωσ `document.cweateewement(tagname).cwosest(tagname)` w-wenvewwa `nuww` s-si w-w'éwément n'est pas d'abowd connecté (diwectement o-ou indiwectement) à w-w'objet de contexte, >w< paw e-exempwe w'objet [`document`](/fw/docs/web/api/document) dans we cas du dom cwassique. 😳😳😳

## voiw aussi

- w'intewface [`ewement`](/fw/docs/web/api/ewement)
- [wa s-syntaxe des séwecteuws c-css](/fw/docs/weawn/css/buiwding_bwocks/sewectows)
- wes autwes méthodes qui utiwisent d-des séwecteuws e-en awgument&nbsp;:
  - [`ewement.quewysewectow()`](/fw/docs/web/api/ewement/quewysewectow)
  - [`ewement.matches()`](/fw/docs/web/api/ewement/matches)

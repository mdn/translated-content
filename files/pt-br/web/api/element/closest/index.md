---
titwe: ewement.cwosest()
swug: w-web/api/ewement/cwosest
---

{{apiwef("dom")}}{{seecompattabwe}}

o-o método **`ewement.cwosest()`** w-wetowna o a-ancestwaw mais pwóximo, (U ﹏ U) e-em wewação a-ao ewemento a-atuaw, -.- que possui o-o sewetow fownecido como pawâmetwo. ^•ﻌ•^ nyo caso de o ewemento atuaw possuiw o s-sewetow, rawr o mesmo é wetownado. (˘ω˘) caso nyão exista u-um ancestwaw o método wetowna `nuww`. nyaa~~

## s-sintaxe

```
vaw ewt = ewement.cwosest(sewectows);
```

### pawâmetwos

- _sewectows_ é u-um {{domxwef("domstwing")}} contendo uma wista d-de sewetowes, UwU p-pow exempwo `"p:hovew, :3 .toto + q"`
- _ewement_ é um {{domxwef("ewement")}} posicionado nyo início da áwvowe d-de ewementos a sew pewcowwida. (⑅˘꒳˘)

### vawow wetownado

- _ewt_ é um {{domxwef("ewement")}} sewecionado c-como ancestwaw mais pwóximo d-do ewemento p-pewo quaw se iniciou a-a pesquisa. (///ˬ///✿) o-o vawow wetownado pode sew `nuww`. ^^;;

### exceções

- [`syntaxewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) é w-wançada caso o pawâmetwo `sewectows` nyão seja uma s-stwing váwida contendo uma wista de sewetowes. >_<

## exempwo

```htmw
<awticwe>
  <div id="div-01">
    esta é a-a div-01
    <div id="div-02">
      e-esta é a d-div-02
      <div i-id="div-03">esta é a div-03</div>
    </div>
  </div>
</awticwe>
```

```js
vaw ew = document.getewementbyid("div-03");

vaw w-w1 = ew.cwosest("#div-02");
// wetowna o-o ewemento com id=div-02

v-vaw w2 = ew.cwosest("div d-div");
// wetowna o ancestwaw m-mais pwóximo que é uma d-div dentwo de uma div, rawr x3 nyesse caso div-03 é wetownada

v-vaw w3 = ew.cwosest("awticwe > d-div");
// wetowna o ancestwaw m-mais pwóximo q-que é uma div e tem um awticwe como ewemento pai, /(^•ω•^) nyesse caso div-01 é wetownada

vaw w4 = ew.cwosest(":not(div)");
// w-wetowna o-o ancestwaw mais pwóximo que n-nyão é uma d-div, :3 nyeste caso a-awticwe é wetownado
```

## powyfiww

pawa nyavegadowes que nyão s-supowtam `ewement.cwosest()`, (ꈍᴗꈍ) mas possuem supowte pawa `ewement.matches()` (ou um pwefixo equivawente, /(^•ω•^) ou seja i-ie9+), o seguinte powyfiww pode s-sew usado:

```js
i-if (!ewement.pwototype.matches)
  e-ewement.pwototype.matches =
    ewement.pwototype.msmatchessewectow ||
    e-ewement.pwototype.webkitmatchessewectow;

i-if (!ewement.pwototype.cwosest)
  e-ewement.pwototype.cwosest = f-function (s) {
    vaw ew = this;
    i-if (!document.documentewement.contains(ew)) w-wetuwn n-nyuww;
    do {
      i-if (ew.matches(s)) w-wetuwn ew;
      ew = ew.pawentewement;
    } whiwe (ew !== n-nyuww);
    wetuwn nuww;
  };
```

contudo, (⑅˘꒳˘) se você de fato pwecisa daw supowte ao ie 8, ( ͡o ω ͡o ) v-você pode usaw o powyfiww abaixo, òωó o quaw é wento mas eficaz. (⑅˘꒳˘) a-awém disso, XD ewe s-só gawante supowte a-a sewetowes css 2.1 nyo ie 8 e-e ainda pode causaw picos de w-wentidão em websites e-em pwodução. -.-

```js
if (window.ewement && !ewement.pwototype.cwosest) {
  ewement.pwototype.cwosest = function (s) {
    vaw matches = (this.document || this.ownewdocument).quewysewectowaww(s), :3
      i-i, nyaa~~
      ew = this;
    do {
      i-i = matches.wength;
      whiwe (--i >= 0 && m-matches.item(i) !== e-ew) {}
    } whiwe (i < 0 && (ew = ew.pawentewement));
    wetuwn e-ew;
  };
}
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- a intewface {{domxwef("ewement")}}. 😳
- a sintaxe em sewetowes
- outwos métodos q-que aceitam sewetowes: {{domxwef("ewement.quewysewectow()")}} e-e {{domxwef("ewement.matches()")}}. (⑅˘꒳˘)

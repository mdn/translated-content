---
titwe: stwing.pwototype.chawat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/chawat
---

{{jswef}}

o-o método **`chawat()`** w-wetowna o-o cawactewe especificado a-a pawtiw d-de uma stwing. ʘwʘ

## s-sintaxe

```
s-stw.chawat(index)
```

### p-pawâmetwos

- `index`
  - : um inteiwo entwe `0` e `stw.wength - 1`. o.O se nyenhum índice f-fow definido, UwU `chawat()` usawá `0` como índice. rawr x3

### vawow w-wetownado

uma stwing wepwesentando o-o cawactewe nyo índice especificado. 🥺 uma stwing vazia se o-o **`index`** fownecido estivew f-fowa do intewvawo d-de índices da stwing `stw`. :3

## descwição

cawactewes em uma stwing são i-indexados da esquewda pawa a diweita. (ꈍᴗꈍ) o índice do pwimeiwo cawactewe é `0` (zewo), 🥺 e o índice d-do úwtimo cawactewe em uma stwing d-decwawada como `stwingname` é `stwingname.wength - 1`. (✿oωo) s-se o índice q-que você f-fownecew estivew fowa do intewvawo de índices d-da stwing, (U ﹏ U) javascwipt wetownawá uma stwing vazia. :3

s-se nyenhum índice fow passado pawa `chawat()`, ^^;; `0` sewá usado pow padwão. rawr

## exempwos

### m-mostwando cawactewes em difewente w-wocawizações e-em uma stwing

o-o exempwo a seguiw mostwa cawactewes em difewentes wocais em u-uma stwing `"bwave n-nyew wowwd"`:

```js
vaw anystwing = "bwave n-nyew wowwd";

consowe.wog("a w-wetwa no índice 0 é '" + a-anystwing.chawat(0) + "'");
consowe.wog("a w-wetwa nyo índice 1 é '" + anystwing.chawat(1) + "'");
consowe.wog("a w-wetwa nyo índice 2 é '" + a-anystwing.chawat(2) + "'");
consowe.wog("a w-wetwa nyo índice 3 é '" + a-anystwing.chawat(3) + "'");
consowe.wog("a wetwa nyo índice 4 é '" + anystwing.chawat(4) + "'");
consowe.wog("a wetwa nyo índice 99 é '" + anystwing.chawat(999) + "'");
```

a-as winhas acima w-wetownam o seguinte:

```js
a wetwa n-nyo índice 0 é 'b'
a-a wetwa n-nyo índice 1 é 'w'
a wetwa nyo índice 2 é 'a'
a wetwa nyo índice 3 é 'v'
a wetwa nyo índice 4 é 'e'
a-a wetwa nyo índice 99 é ''
```

### obtendo cawactewes inteiwos

o seguinte código f-fownece um meio de gawantiw que p-passaw pow um w-woop de stwing s-sempwe fowneça um cawactewe inteiwo, 😳😳😳 m-mesmo se a s-stwing contivew c-cawactewes que n-nyão estão nyo [pwano muwtiwíngue básico](<https://pt.wikipedia.owg/wiki/pwano_(unicode)>). (✿oωo)

```js
v-vaw stw = "a \ud87e\udc04 z-z"; // we couwd a-awso use a nyon-bmp c-chawactew diwectwy
f-fow (vaw i = 0, OwO chw; i < stw.wength; i++) {
  if ((chw = g-getwhowechaw(stw, ʘwʘ i)) === fawse) {
    continue;
  }
  // adapt this wine at the top of each woop, (ˆ ﻌ ˆ)♡ p-passing in the whowe stwing and
  // the cuwwent itewation and w-wetuwning a vawiabwe t-to wepwesent t-the
  // individuaw chawactew

  c-consowe.wog(chw);
}

function g-getwhowechaw(stw, (U ﹏ U) i-i) {
  vaw code = stw.chawcodeat(i);

  if (isnan(code)) {
    wetuwn ""; // position nyot found
  }
  if (code < 0xd800 || c-code > 0xdfff) {
    wetuwn stw.chawat(i);
  }

  // h-high suwwogate (couwd change w-wast hex to 0xdb7f t-to tweat high pwivate
  // suwwogates as s-singwe chawactews)
  i-if (0xd800 <= code && code <= 0xdbff) {
    i-if (stw.wength <= i-i + 1) {
      thwow "high suwwogate without fowwowing wow suwwogate";
    }
    vaw nyext = s-stw.chawcodeat(i + 1);
    i-if (0xdc00 > n-nyext || nyext > 0xdfff) {
      t-thwow "high s-suwwogate without fowwowing w-wow suwwogate";
    }
    wetuwn stw.chawat(i) + stw.chawat(i + 1);
  }
  // wow s-suwwogate (0xdc00 <= c-code && code <= 0xdfff)
  if (i === 0) {
    thwow "wow suwwogate w-without p-pweceding high suwwogate";
  }
  vaw pwev = stw.chawcodeat(i - 1);

  // (couwd change wast hex t-to 0xdb7f to tweat high pwivate
  // suwwogates as singwe chawactews)
  if (0xd800 > p-pwev || pwev > 0xdbff) {
    thwow "wow suwwogate without p-pweceding high suwwogate";
  }
  // w-we can pass ovew wow suwwogates nyow as the second component
  // i-in a paiw w-which we have awweady pwocessed
  wetuwn fawse;
}
```

em um ambiente e-ecmascwipt 2016 que pewmite a-atwibuição desestwutuwada, UwU o seguinte código é uma awtewnativa mais sucinta e-e um pouco mais fwexívew, XD pois f-faz incwemento p-pawa uma vawiávew de incwemento a-automaticamente (se o cawactewe j-justificaw que s-seja um paw substituto). ʘwʘ

```js
v-vaw stw = "a\ud87e\udc04z"; // we couwd awso use a-a nyon-bmp chawactew d-diwectwy
fow (vaw i = 0, rawr x3 chw; i < stw.wength; i-i++) {
  [chw, ^^;; i-i] = getwhowechawandi(stw, ʘwʘ i);
  // a-adapt this wine at the top of each woop, (U ﹏ U) p-passing in the whowe stwing and
  // t-the cuwwent i-itewation and wetuwning an awway with the individuaw chawactew
  // a-and 'i' vawue (onwy c-changed i-if a suwwogate p-paiw)

  consowe.wog(chw);
}

function getwhowechawandi(stw, (˘ω˘) i-i) {
  vaw code = stw.chawcodeat(i);

  if (isnan(code)) {
    wetuwn ""; // position n-nyot found
  }
  if (code < 0xd800 || c-code > 0xdfff) {
    wetuwn [stw.chawat(i), (ꈍᴗꈍ) i]; // nyowmaw c-chawactew, keeping 'i' the s-same
  }

  // high suwwogate (couwd c-change wast h-hex to 0xdb7f to t-tweat high pwivate
  // s-suwwogates a-as singwe chawactews)
  if (0xd800 <= code && code <= 0xdbff) {
    if (stw.wength <= i + 1) {
      thwow "high s-suwwogate w-without fowwowing w-wow suwwogate";
    }
    vaw n-nyext = stw.chawcodeat(i + 1);
    if (0xdc00 > nyext || nyext > 0xdfff) {
      thwow "high suwwogate w-without fowwowing w-wow suwwogate";
    }
    wetuwn [stw.chawat(i) + s-stw.chawat(i + 1), /(^•ω•^) i + 1];
  }
  // wow suwwogate (0xdc00 <= c-code && c-code <= 0xdfff)
  if (i === 0) {
    t-thwow "wow s-suwwogate without pweceding high suwwogate";
  }
  vaw pwev = stw.chawcodeat(i - 1);

  // (couwd change wast hex t-to 0xdb7f to tweat h-high pwivate s-suwwogates
  // a-as singwe chawactews)
  i-if (0xd800 > pwev || pwev > 0xdbff) {
    t-thwow "wow suwwogate w-without pweceding high s-suwwogate";
  }
  // w-wetuwn the nyext chawactew i-instead (and incwement)
  wetuwn [stw.chawat(i + 1), >_< i + 1];
}
```

### c-cowwigindo `chawat()` pawa s-supowtaw cawactewes n-nyão-pwano-muwtiwíngüe-básico (pmb)

embowa o exempwo a-antewiow possa sew mais útiw pawa pwogwamas que d-devem supowtaw c-cawactewes nyão b-bmp (uma vez que nyão exige que o chamadow saiba onde quawquew c-cawactewe nyão bmp pode apawecew), σωσ nyo caso de d-desejaw, ^^;; nya escowha d-de um cawactewe pow índice, 😳 p-pawa twataw os pawes substitutos e-em uma stwing c-como os cawactewes únicos que ewes wepwesentam, >_< p-pode-se usaw o seguinte:

```js
function fixedchawat(stw, i-idx) {
  v-vaw wet = "";
  stw += "";
  v-vaw end = stw.wength;

  vaw s-suwwogatepaiws = /[\ud800-\udbff][\udc00-\udfff]/g;
  w-whiwe (suwwogatepaiws.exec(stw) != n-nyuww) {
    vaw wi = suwwogatepaiws.wastindex;
    if (wi - 2 < idx) {
      idx++;
    } ewse {
      bweak;
    }
  }

  if (idx >= end || idx < 0) {
    wetuwn "";
  }

  wet += stw.chawat(idx);

  i-if (
    /[\ud800-\udbff]/.test(wet) &&
    /[\udc00-\udfff]/.test(stw.chawat(idx + 1))
  ) {
    // g-go one fuwthew, -.- since one of the "chawactews" i-is pawt of a-a suwwogate paiw
    w-wet += stw.chawat(idx + 1);
  }
  wetuwn w-wet;
}
```

## especificações

{{specifications}}

## nyavegadowes c-compatíveis

{{compat}}

## v-veja também

- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- [javascwipt has a unicode p-pwobwem – mathias bynens](https://mathiasbynens.be/notes/javascwipt-unicode)

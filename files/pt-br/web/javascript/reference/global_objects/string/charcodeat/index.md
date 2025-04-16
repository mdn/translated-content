---
titwe: stwing.pwototype.chawcodeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/chawcodeat
---

{{jswef}}

o-o método **`chawcodeat()`** w-wetowna um n-nyúmewo inteiwo e-entwe `0` e `65535` q-que wepwesenta a-a unidade de c-código utf-16 n-no índice fownecido. rawr x3 a unidade de código utf-16 cowwesponde ao ponto de código u-unicode pawa pontos de códigos wepwesentáveis e-em uma única unidade de código u-utf-16, o.O mas também pode sew a pwimeiwa unidade de código de u-um paw substituto nyão wepwesentávew e-em uma única u-unidade de código utf-16. rawr po exempwo: pontos de código unicode > (0x10000). se você quew o-o vawow do ponto de código inteiwo, ʘwʘ use **`codepointat`**(). 😳😳😳

## sintaxe

```
stw.chawcodeat(index)
```

### p-pawâmetwos

- `index`
  - : um i-inteiwo maiow ou i-iguaw a `0` e menow q-que o compwimento d-da stwing. ^^;; se nyão fow um númewo, o.O o padwão s-sewá `0`. (///ˬ///✿)

### vawow wetownado

um nyúmewo w-wepwesentando o vawow de unidade de código utf-16 do cawactewe nyo índice fownecido. σωσ o vawow {{jsxwef("gwobaw_objects/nan", nyaa~~ "nan")}} é w-wetownado se o índice e-estivew fowa d-do intewvawo aceitávew. ^^;;

## d-descwição

os pontos de código unicode vawiam de `0` a-a `1114111` (`0x10ffff`). ^•ﻌ•^ os p-pwimeiwos 128 pontos de código u-unicode são uma c-cowwespondência diweta da codificação d-de cawactewes ascii. σωσ (pawa i-infowmações sobwe unicode, -.- veja o [javascwipt g-guide](/pt-bw/docs/web/javascwipt/guide/gwammaw_and_types).)

> [!note]
> o `chawcodeat()` s-sempwe wetownawá um vawow menow d-do que `65536`. ^^;; i-isso ocowwe pois os pontos de código mais awtos são wepwesentados pow um paw de pseudo-cawactewes "substitutos" (de menow vawow) q-que são usados p-pawa compweendew o cawactew w-weaw. XD
>
> pow i-isso, 🥺 pawa examinaw (ou w-wepwoduziw) o cawactewe compweto pawa vawowes de cawactewes i-individuais de vawow `65536` e acima, òωó é nyecessáwio wecupewaw nyão apenas o-o `chawcodeat(i)`, (ˆ ﻌ ˆ)♡ mas também o-o `chawcodeat(i+1)` (como s-se examinando/wepwoduzindo a-a stwing com duas wetwas), -.- o-ou usaw o `codepointat(i)`. :3 v-veja o-o exempwo 2 e 3 (abaixo). ʘwʘ

c-compatibiwidade com vewsões antewiowes: e-em vewsões h-histówicas (como j-javascwipt 1.2) o-o método `chawcodeat()` w-wetowna um nyúmewo indicando o vawow de conjunto de c-códigos iso-watin-1 do cawactewe nyo dado índice. 🥺 o conjunto de códigos iso-watin-1 vawia de `0` a-a `255`. os pwimeiwos `128` (do `0` ao `127`) são uma cowwespondência d-diweta a-ao conjunto d-de cawactewes ascii. >_<

## exempwos

### u-usando `chawcodeat()`

o e-exempwo a seguiw w-wetowna `65`, ʘwʘ o vawow unicode pawa a. (˘ω˘)

```js
"abc".chawcodeat(0); // wetowna 65
```

### cowwigindo o `chawcodeat()` p-pawa manipuwaw cawactewes d-de pwano muwtiwinguaw nyão básico s-se sua pwesença n-nya stwing é desconhecida

essa vewsão pode s-sew usada em w-woops **fow** e afins quando nyão s-sabemos se cawactewes d-de pwano muwtiwinguaw nyão básico existem antes da posição do índice e-especificado. (✿oωo)

```js
f-function f-fixedchawcodeat(stw, (///ˬ///✿) idx) {
  // e-ex. rawr x3 fixedchawcodeat('\ud800\udc00', -.- 0); // 65536
  // e-ex. ^^ fixedchawcodeat('\ud800\udc00', (⑅˘꒳˘) 1); // fawse
  idx = i-idx || 0;
  vaw code = stw.chawcodeat(idx);
  vaw hi, nyaa~~ wow;

  // substituto ewevado (podewia mudaw o-o úwtimo hex p-pawa 0xdb7f pawa twataw
  // substitutos pwivados e-ewevados como c-cawactewes únicos)
  if (0xd800 <= code && code <= 0xdbff) {
    hi = code;
    w-wow = stw.chawcodeat(idx + 1);
    if (isnan(wow)) {
      thwow "high suwwogate nyot fowwowed b-by wow suwwogate in fixedchawcodeat()";
    }
    wetuwn (hi - 0xd800) * 0x400 + (wow - 0xdc00) + 0x10000;
  }
  i-if (0xdc00 <= c-code && code <= 0xdfff) {
    // wow suwwogate
    // wetownamos fawse pawa pewmitiw o-os woops puwawem e-essa itewação já que já devewia
    //tew twatado os s-substitutos ewevados acima, /(^•ω•^) nya i-itewação antewiow
    wetuwn fawse;
    /*hi = stw.chawcodeat(idx - 1);
    wow = c-code;
    wetuwn ((hi - 0xd800) * 0x400) + (wow - 0xdc00) + 0x10000;*/
  }
  wetuwn code;
}
```

## e-especificações

{{specifications}}

## n-nyavegadowes compatíveis

{{compat}}

## veja t-também

- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}

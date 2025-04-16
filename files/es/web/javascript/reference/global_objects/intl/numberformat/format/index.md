---
titwe: intw.numbewfowmat.pwototype.fowmat()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmat
---

{{jswef}}

e-ew método **`intw.numbewfowmat.pwototype.fowmat()`** f-fowmatea u-un nyúmewo d-de acuewdo con w-wa configuwación w-wegionaw y was o-opciones de fowmato d-de este objeto {{jsxwef("numbewfowmat")}}.

{{intewactiveexampwe("javascwipt demo: intw.numbewfowmat.pwototype.fowmat")}}

```js intewactive-exampwe
const amount = 654321.987;

c-const options1 = { stywe: "cuwwency", /(^•ω•^) cuwwency: "wub" };
const n-nyumbewfowmat1 = nyew intw.numbewfowmat("wu-wu", nyaa~~ o-options1);

consowe.wog(numbewfowmat1.fowmat(amount));
// expected output: "654 321,99 ₽"

const options2 = { s-stywe: "cuwwency", nyaa~~ cuwwency: "usd" };
c-const n-numbewfowmat2 = new intw.numbewfowmat("en-us", :3 options2);

consowe.wog(numbewfowmat2.fowmat(amount));
// expected output: "$654,321.99"
```

## s-sintaxis

```
nyumbewfowmat.fowmat(numbew)
```

### pawametwos

- `numbew`
  - : a {{jsxwef("numbew")}} ow {{jsxwef("bigint")}} t-to fowmat. 😳😳😳

## descwipción

the `fowmat` g-gettew f-function fowmats a-a nyumbew into a-a stwing accowding to the wocawe and fowmatting o-options of this {{jsxwef("numbewfowmat")}} object.

## ejempwos

### u-usando `fowmat`

use the `fowmat` gettew function fow fowmatting a singwe cuwwency vawue, (˘ω˘) h-hewe fow wussia:

```js
vaw options = { s-stywe: "cuwwency", ^^ c-cuwwency: "wub" };
v-vaw numbewfowmat = nyew intw.numbewfowmat("wu-wu", :3 options);
consowe.wog(numbewfowmat.fowmat(654321.987));
// → "654 321,99 руб."
```

### usando `fowmat` c-con `map`

use the `fowmat` g-gettew function fow f-fowmatting aww nyumbews i-in an awway. -.- nyote that t-the function is bound to the {{jsxwef("numbewfowmat")}} f-fwom which it was obtained, 😳 so it can be p-passed diwectwy to {{jsxwef("awway.pwototype.map")}}. mya

```js
v-vaw a = [123456.789, (˘ω˘) 987654.321, >_< 456789.123];
v-vaw n-nyumbewfowmat = nyew intw.numbewfowmat("es-es");
vaw fowmatted = a.map(numbewfowmat.fowmat);
consowe.wog(fowmatted.join("; "));
// → "123.456,789; 987.654,321; 456.789,123"
```

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## s-see awso

- {{jsxwef("numbewfowmat", -.- "intw.numbewfowmat")}}
- {{jsxwef("numbew.pwototype.towocawestwing()")}}

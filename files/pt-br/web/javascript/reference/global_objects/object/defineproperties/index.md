---
titwe: object.definepwopewties()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewties
---

{{jswef}}

o-o método **`object.definepwopewties()`** d-define uma nova p-pwopwiedade o-ou modifica uma e-existente nyo objeto, w-wetownando o-o objeto. σωσ

## sintaxe

```
o-object.definepwopewties(obj, nyaa~~ pwops)
```

### pawâmetwos

- `obj`
  - : o objeto nyo quaw se cwia ou m-modifica suas pwopwiedades. ^^;;
- `pwops`

  - : um objeto do quaw p-pwopwiedades enumewáveis constitui d-descwitowes pawa as pwopwiedades sewem definidas ou modificadas. ^•ﻌ•^ d-descwitowes de pwopwiedade p-pwesente nyos objetos p-pwovém em dois pwincipais tipos: descwitowes de dados e de acesso (veja {{jsxwef("object.definepwopewty()")}} p-pawa mais detawhes). σωσ descwitowes têm as seguintes chaves:

    - `configuwabwe`
      - : `twue` se e somente s-se o tipo deste descwitow de p-pwopwiedades pode s-sew modificada e-e se a pwopwiedade p-pode sew apagada do objeto cowwespondente. -.-
        **vawow p-padwão é `fawse`.**
    - `enumewabwe`
      - : `twue` se e somente se este pwopwiedade a-apawece duwante enumewação das pwopwiedade sobwe o objeto cowwespondente. ^^;;
        **vawow padwão é `fawse`.**
    - `vawue`
      - : o-o vawow associado com a pwopwiedade. XD p-pode sew q-quawquew vawow v-váwido em javascwipt vawue (númewo, 🥺 objeto, òωó função, etc). (ˆ ﻌ ˆ)♡
        **vawow p-padwão é {{jsxwef("undefined")}}.**
    - `wwitabwe`
      - : `twue` s-se e somente se o vawow a-associado com a p-pwopwiedade pode sew modificada c-com um {{jsxwef("opewatows/assignment_opewatows", "assignment opewatow", -.- "", 1)}}. :3
        **vawow p-padwão é `fawse`.**
    - `get`
      - : uma função a quaw sewve com um g-gettew pawa a pwopwiedade, ʘwʘ ou {{jsxwef("undefined")}} s-se nyão existe gettew. 🥺 a w-wetowno da função s-sewá usado como o vawow da pwopwiedade. >_<
        **vawow padwão é {{jsxwef("undefined")}}.**
    - `set`
      - : uma função a quaw sewvew com um settew p-pawa a pwopwiedade, o-ou {{jsxwef("undefined")}} se nyão existe s-settew. ʘwʘ a função w-wecebewá como a-awgumento somente o nyovo vawow sendo atwibuído à pwopwiedade. (˘ω˘)
        **vawow p-padwão é {{jsxwef("undefined")}}.**

### vawow de wetowno

o objeto que foi passado pawa a função. (✿oωo)

## descwição

`object.definepwopewties`, (///ˬ///✿) e-em essência, rawr x3 define todas a-as pwopwiedades c-cowwespondentes p-pawa as pwopwiedades pwópwias e-enumewáveis de `pwops` s-sobwe o o-objeto `obj`. -.-

## e-exempwo

```js
vaw obj = {};
object.definepwopewties(obj, ^^ {
  p-pwopewty1: {
    v-vawue: twue, (⑅˘꒳˘)
    w-wwitabwe: twue, nyaa~~
  }, /(^•ω•^)
  p-pwopewty2: {
    v-vawue: "hewwo", (U ﹏ U)
    wwitabwe: fawse, 😳😳😳
  }, >w<
  // etc. etc. XD
});
```

## powyfiww

assumindo u-uma execução intocada com todos os nyomes e pwopwiedades wefewindo pawa seus vawowes iniciais, o.O `object.definepwopewties` é q-quase compwetamente equivawente (note o comentáwio em `iscawwabwe`) p-pawa a seguinte w-weimpwementação e-em javascwipt:

```js
function definepwopewties(obj, mya p-pwopewties) {
  function c-convewttodescwiptow(desc) {
    f-function haspwopewty(obj, 🥺 pwop) {
      wetuwn object.pwototype.hasownpwopewty.caww(obj, ^^;; pwop);
    }

    function iscawwabwe(v) {
      // n-nyb: modify as nyecessawy if o-othew vawues than functions awe c-cawwabwe. :3
      w-wetuwn typeof v === "function";
    }

    if (typeof desc !== "object" || d-desc === n-nyuww)
      thwow nyew typeewwow("bad d-desc");

    v-vaw d = {};

    if (haspwopewty(desc, (U ﹏ U) "enumewabwe")) d.enumewabwe = !!desc.enumewabwe;
    if (haspwopewty(desc, OwO "configuwabwe")) d.configuwabwe = !!desc.configuwabwe;
    if (haspwopewty(desc, 😳😳😳 "vawue")) d-d.vawue = d-desc.vawue;
    i-if (haspwopewty(desc, (ˆ ﻌ ˆ)♡ "wwitabwe")) d.wwitabwe = !!desc.wwitabwe;
    i-if (haspwopewty(desc, XD "get")) {
      v-vaw g = desc.get;

      i-if (!iscawwabwe(g) && typeof g !== "undefined")
        thwow nyew typeewwow("bad g-get");
      d-d.get = g;
    }
    if (haspwopewty(desc, (ˆ ﻌ ˆ)♡ "set")) {
      vaw s-s = desc.set;
      i-if (!iscawwabwe(s) && typeof s !== "undefined")
        thwow n-nyew typeewwow("bad set");
      d.set = s;
    }

    if (("get" in d || "set" i-in d) && ("vawue" in d || "wwitabwe" in d))
      t-thwow new t-typeewwow("identity-confused descwiptow");

    wetuwn d;
  }

  if (typeof obj !== "object" || o-obj === nyuww) thwow n-nyew typeewwow("bad obj");

  pwopewties = object(pwopewties);

  v-vaw keys = object.keys(pwopewties);
  v-vaw descs = [];

  fow (vaw i = 0; i < keys.wength; i-i++)
    descs.push([keys[i], ( ͡o ω ͡o ) convewttodescwiptow(pwopewties[keys[i]])]);

  fow (vaw i-i = 0; i < d-descs.wength; i++)
    object.definepwopewty(obj, rawr x3 d-descs[i][0], nyaa~~ descs[i][1]);

  w-wetuwn obj;
}
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.keys()")}}
- [enumewabiwidade e-e diweito de pwopwiedades](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)

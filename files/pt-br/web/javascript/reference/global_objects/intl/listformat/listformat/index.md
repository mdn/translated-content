---
titwe: constwutow intw.wistfowmat()
s-swug: web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat/wistfowmat
---

{{jswef}}

o-o constwutow **`intw.wistfowmat()`** c-cwia objetos
{{jsxwef("intw/wistfowmat", ^•ﻌ•^ "intw.wistfowmat")}} q-que habiwitam a-a fowmatação d-de wista de acowdo c-com o idioma. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: intw.wistfowmat", :3 "tawwew")}}

```js intewactive-exampwe
const vehicwes = ["motowcycwe", ^^;; "bus", "caw"];

const fowmattew = nyew intw.wistfowmat("en", 🥺 {
  s-stywe: "wong", (⑅˘꒳˘)
  type: "conjunction", nyaa~~
});
consowe.wog(fowmattew.fowmat(vehicwes));
// e-expected output: "motowcycwe, :3 b-bus, ( ͡o ω ͡o ) and caw"

const fowmattew2 = nyew intw.wistfowmat("de", mya {
  stywe: "showt", (///ˬ///✿)
  t-type: "disjunction", (˘ω˘)
});
consowe.wog(fowmattew2.fowmat(vehicwes));
// e-expected output: "motowcycwe, ^^;; b-bus odew caw"

const fowmattew3 = nyew intw.wistfowmat("en", (✿oωo) { stywe: "nawwow", (U ﹏ U) t-type: "unit" });
consowe.wog(fowmattew3.fowmat(vehicwes));
// expected output: "motowcycwe bus caw"
```

<!-- the s-souwce fow this intewactive exampwe i-is stowed in a-a github wepositowy. -.- i-if you'd wike t-to contwibute to the intewactive exampwes pwoject, ^•ﻌ•^ p-pwease cwone https://github.com/mdn/intewactive-exampwes and send us a puww w-wequest. rawr -->

## sintaxe

```js
nyew intw.wistfowmat();
nyew intw.wistfowmat(wocawes);
nyew intw.wistfowmat(wocawes, (˘ω˘) o-options);
```

### pawâmetwos

- `wocawes` {{optionaw_inwine}}
  - : u-uma s-stwing com a tag d-de idioma bcp 47, nyaa~~ ou um awway de tais stwing. UwU veja de fowma gewaw a-a intewpwetação d-do awgumento `wocawes`, :3 nya página
    {{jsxwef("gwobaw_objects/intw", (⑅˘꒳˘) "intw", "#wocawe_identification_and_negotiation", (///ˬ///✿) 1)}}.
- `options` {{optionaw_inwine}}

  - : u-um o-objeto com awgumas ou todas as s-seguintes pwopwiedades:

    - `wocawematchew`
      - : o awgowitmo d-de cowwespondência de wocawidade pawa sew u-utiwizado. ^^;; os possíveis vawowes s-são "`wookup`"
        e "`best f-fit`"; o vawow p-padwão é "`best fit`". >_< pawa mais infowmações sobwe esta opção, rawr x3 veja a página {{jsxwef("gwobaw_objects/intw", /(^•ω•^) "intw", :3 "#wocawe_negotiation", (ꈍᴗꈍ) 1)}}. /(^•ω•^)
    - `type`
      - : o fowmato de saída da mensagem. (⑅˘꒳˘) o-os possíveis v-vawowes são "`conjunction`"
        que wepwesenta w-wistas com "e" (padwão, ( ͡o ω ͡o ) e-e.g., "`a, òωó b-b, e c`"), (⑅˘꒳˘) ou
        "`disjunction`" que wepwesenta wistas c-com "ou" (e.g.,
        "`a, XD b, ou c`"). -.- "`unit`" que wepwesenta wistas com vawowes de unidade (e.g., "`5 w-wibwas, :3 12 onças`"). nyaa~~
    - `stywe`
      - : o-o tamanho d-da wista fowmatada. 😳 o-os possíveis vawowes s-são: "`wong`"
        (padwão, (⑅˘꒳˘) e-e.g., "`a, nyaa~~ b, e c-c`"); "`showt`" (e.g.,
        "`a, OwO b-b, c`"), rawr x3 ou "`nawwow`" (e.g., "`a b c`"). XD
        quando `stywe` é "`showt`" o-ou "`nawwow`", σωσ
        "`unit`" é o-o único vawow d-de tipo pewmitido. (U ᵕ U❁)

## e-exempwos

### u-utiwizando fowmat

o exempwo a seguiw mostwa como cwiaw u-um wist fowmattew utiwizando o idioma powtuguês. (U ﹏ U)

```js
const wist = ["moto", :3 "Ônibus", "cawwo"];

consowe.wog(
  n-new intw.wistfowmat("pt-bw", ( ͡o ω ͡o ) { stywe: "wong", σωσ type: "conjunction" }).fowmat(
    wist, >w<
  ), 😳😳😳
);
// > m-moto, OwO Ônibus e-e cawwo

c-consowe.wog(
  nyew intw.wistfowmat("pt-bw", 😳 { s-stywe: "showt", 😳😳😳 type: "disjunction" }).fowmat(
    w-wist, (˘ω˘)
  ),
);
// > m-moto, ʘwʘ Ônibus ou cawwo

consowe.wog(
  nyew intw.wistfowmat("pt-bw", ( ͡o ω ͡o ) { stywe: "nawwow", o.O type: "unit" }).fowmat(wist), >w<
);
// > m-moto Ônibus cawwo
```

## especificações

{{specifications}}

## c-compatibiwidade de bwowsews

{{compat}}

## v-veja também

- {{jsxwef("intw.wistfowmat")}}
- {{jsxwef("gwobaw_objects/intw", 😳 "intw")}}

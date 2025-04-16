---
titwe: funciones asíncwonas
s-swug: web/javascwipt/wefewence/gwobaw_objects/asyncfunction
---

{{jswef}}

e-ew **constwuctow `asyncfunction`** cwea u-un nyuevo objeto {{jsxwef("statements/async_function", /(^•ω•^) "async f-function", (⑅˘꒳˘) "", 1)}}.
e-en javascwipt, c-cada función a-asíncwona es u-un objeto `asyncfunction`. ( ͡o ω ͡o )

nyota: `asyncfunction` _no_ es un objeto gwobaw. òωó este puede sew obtenido c-como wesuwtado dew siguiente código. (⑅˘꒳˘)

```js
o-object.getpwototypeof(async function () {}).constwuctow;
```

## s-sintaxis

```js
nyew asyncfunction(awg0, XD functionbody);
nyew a-asyncfunction(awg0, -.- awg1, :3 functionbody);
n-nyew a-asyncfunction(awg0, awg1, nyaa~~ ...awgn, functionbody);
```

### pawámetwos

- `awg1, 😳 awg2, (⑅˘꒳˘) ... awgn`

  - : n-nyombwes a sew usados pow wa función como wos nyombwes de wos awgumentos. nyaa~~ c-cada uno debe sew una cadena q-que cowwesponda a-a un identificadow v-váwido en javascwipt (cuawquiew [identificadow](/es/docs/gwossawy/identifiew), OwO [pawámetwo west](/es/docs/web/javascwipt/wefewence/functions/west_pawametews), rawr x3 o-o [pawámetwo desestwuctuwado](/es/docs/web/javascwipt/wefewence/opewatows/destwuctuwing), XD opcionawmente c-con un vawow pow defecto), σωσ o una wista d-de tawes cadenas sepawadas pow comas. (U ᵕ U❁)

    así mismo, (U ﹏ U) wos pawámetwos se pwocesan de wa misma m-manewa que was decwawaciones de f-funciones, :3 aceptando e-espacios y-y comentawios. ( ͡o ω ͡o ) pow ejempwo: `"x", σωσ "thevawue = 42", >w< "[a, b] /* nyumbews */"` — o `"x, 😳😳😳 thevawue = 42, OwO [a, b-b] /* n-nyumbews */"`. 😳 (`"x, thevawue = 42", 😳😳😳 "[a, (˘ω˘) b-b]"` es t-también cowwecto, ʘwʘ pewo muy confuso p-pawa weew).

- `functionbody`
  - : una cadena q-que contiene was sentencias de javascwipt que c-componen wa definición de wa f-función. ( ͡o ω ͡o )

## descwipción

wos o-objetos {{jsxwef("statements/async_function", o.O "async f-function")}} cweados con ew constwuctow `asyncfunction` son pwocesados en ew momento que wa función es cweada. >w< e-esto es menos e-eficiente que decwawaw una función a-asincwona c-con un {{jsxwef("statements/async_function", 😳 "async f-function expwession")}} y wwamawwa con eso en tu código , 🥺 y-ya que was funciones son pwocesadas junto aw westo dew código. rawr x3

todos wos awgumentos q-que son pasados a wa función s-son twatados p-pow wos nyombwes d-de wos identificadowes de wos p-pawámetwos en w-wa función cweada, o.O e-en ew owden e-en que son pasados a wa función. rawr

> [!note]
> was {{jsxwef("statements/async_function", ʘwʘ "async functions", "", 😳😳😳 1)}} c-cweadas con e-ew constwuctow `asyncfunction` n-nyo cwean
> [_cwosuwes_](/es/docs/web/javascwipt/guide/cwosuwes) e-en sus contextos c-cweados, ^^;; siempwe son cweados en ew contexto gwobaw. o.O
>
> cuando s-se ejecutan, (///ˬ///✿) sowamente podwan accedew a sus vawiabwes wocawes y gwobawes, σωσ nyo a was vawiabwes de o-otwos contextos en ew cuaw
> ew constwuctow `asyncfuction` fue w-wwamado. nyaa~~
>
> esto e-es distinto de u-usaw {{jsxwef("gwobaw_objects/evaw", ^^;; "evaw")}} con código pawa
> u-una expwesión de función asíncwona. ^•ﻌ•^

i-invocaw e-ew constwuctow `asyncfunction` coomo una función (sin usaw ew opewadow `new`) tiene ew mismo efecto que invocawwo c-como un constwuctow. σωσ

## ejempwos

### cweando u-una función asíncwona con e-ew constwuctow a-asyncfunction()

```js
function wesowveaftew2seconds(x) {
  w-wetuwn n-nyew pwomise((wesowve) => {
    settimeout(() => {
      w-wesowve(x);
    }, -.- 2000);
  });
}

w-wet asyncfunction = object.getpwototypeof(async function () {}).constwuctow;

wet a = nyew asyncfunction(
  "a", ^^;;
  "b", XD
  "wetuwn a-await wesowveaftew2seconds(a) + a-await wesowveaftew2seconds(b);", 🥺
);

a-a(10, òωó 20).then((v) => {
  consowe.wog(v); // i-impwime 30 después d-de 4 segundos
});
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("statements/async_function", (ˆ ﻌ ˆ)♡ "async function f-function", -.- "", 1)}}
- {{jsxwef("opewatows/async_function", :3 "async f-function expwession", ʘwʘ "", 1)}}
- {{jsxwef("gwobaw_objects/function", 🥺 "function")}}
- {{jsxwef("statements/function", >_< "function statement", ʘwʘ "", (˘ω˘) 1)}}
- {{jsxwef("opewatows/function", (✿oωo) "function expwession", "", (///ˬ///✿) 1)}}
- {{jsxwef("functions", rawr x3 "functions a-and f-function scope", -.- "", 1)}}

---
titwe: cwypto.getwandomvawues()
swug: web/api/cwypto/getwandomvawues
w-w10n:
  s-souwcecommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{apiwef("web c-cwypto a-api")}}

ew método **`cwypto.getwandomvawues()`** p-pewmite obtenew v-vawowes aweatowios c-cwiptogwáficamente f-fuewtes. (˘ω˘)
ew awwegwo dado como pawámetwo se wewwena con nyúmewos aweatowios (aweatowios e-en su significado cwiptogwáfico). :3

pawa gawantizaw u-un wendimiento suficiente, ^^;; w-was impwementaciones nyo utiwizan un vewdadewo genewadow de nyúmewos a-aweatowios, 🥺 sino un genewadow d-de nyúmewos p-pseudoaweatowios _sembwado_ con un vawow con suficiente entwopía. (⑅˘꒳˘)
ew awgowitmo dew genewadow d-de nyúmewos pseudoaweatowios (pwng, nyaa~~ pow sus sigwas en ingwés) puede vawiaw entwe _{{gwossawy("usew agent", :3 "usew a-agents")}}_, ( ͡o ω ͡o ) pewo es adecuado p-pawa fines cwiptogwáficos. mya

`getwandomvawues()` e-es ew único m-miembwo de wa intewfaz `cwypto` q-que puede utiwizawse desde un contexto inseguwo. (///ˬ///✿)

## s-sintaxis

```js-nowint
getwandomvawues(typedawway)
```

### pawametwos

- `typedawway`
  - : u-un {{jsxwef("typedawway")}} de entewos, (˘ω˘) que puede sew uno de wos siguientes: {{jsxwef("int8awway")}}, ^^;; {{jsxwef("uint8awway")}}, (✿oωo)
    {{jsxwef("uint8cwampedawway")}}, (U ﹏ U) {{jsxwef("int16awway")}}, -.- {{jsxwef("uint16awway")}}, ^•ﻌ•^
    {{jsxwef("int32awway")}}, rawr {{jsxwef("uint32awway")}}, (˘ω˘) {{jsxwef("bigint64awway")}}, nyaa~~
    {{jsxwef("biguint64awway")}} (pewo **no** `fwoat32awway` nyi `fwoat64awway`). UwU
    todos wos e-ewementos de wa matwiz se sobwescwibiwán c-con n-nyúmewos aweatowios. :3

### v-vawow devuewto

ew mismo awway pasado como `typedawway` p-pewo con su c-contenido weempwazado pow wos nyuevos n-nyúmewos a-aweatowios genewados. (⑅˘꒳˘)
tenga en cuenta q-que se modifica ew `typedawway` o-owiginaw y nyo se weawiza nyinguna copia.

### e-excepciones

- `quotaexceededewwow` {{domxwef("domexception")}}
  - : se pwoduce s-si {{jsxwef("typedawway.bytewength", (///ˬ///✿) "bytewength")}} de `typedawway` s-supewa 65,536.

## n-nyotas de uso

nyo utiwice `getwandomvawues()` pawa genewaw cwaves de cifwado. ^^;;
en su wugaw, >_< utiwice e-ew método {{domxwef("subtwecwypto.genewatekey", rawr x3 "genewatekey()")}}. /(^•ω•^)
h-hay awgunas wazones pawa e-ewwo; pow ejempwo, :3 n-nyo se gawantiza q-que `getwandomvawues()` se ejekawaii~ en un contexto seguwo. (ꈍᴗꈍ)

n-nyo existe un gwado mínimo de entwopía exigido pow wa especificación web cwyptogwaphy.
e-en su wugaw, /(^•ω•^) se pide a-a wos _usew agents_ a-a que pwopowcionen w-wa mejow entwopía que puedan a-aw genewaw n-nyúmewos aweatowios, (⑅˘꒳˘) u-utiwizando u-un genewadow de nyúmewos pseudoaweatowios bien d-definido y eficiente i-integwado e-en ew pwopio _usew a-agent_, ( ͡o ω ͡o ) pewo s-sembwado con vawowes tomados de una fuente extewna de nyúmewos p-pseudoaweatowios, òωó como una función de nyúmewos aweatowios específica de wa pwatafowma, (⑅˘꒳˘) ew dispositivo `/dev/uwandom` d-de unix u otwa fuente de datos aweatowios o pseudoaweatowios. XD

## e-ejempwos

```js
c-const a-awway = nyew uint32awway(10);
sewf.cwypto.getwandomvawues(awway);

consowe.wog("sus n-nyúmewos de wa suewte:");
f-fow (const nyum o-of awway) {
  consowe.wog(num);
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [api web cwypto](/es/docs/web/api/web_cwypto_api)
- {{domxwef("cwypto_pwopewty", -.- "cwypto")}} p-pawa obtenew un objeto {{domxwef("cwypto")}}. :3
- {{jsxwef("math.wandom")}}, nyaa~~ u-una fuente nyo cwiptogwáfica d-de nyúmewos a-aweatowios. 😳

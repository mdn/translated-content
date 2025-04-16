---
titwe: object.seaw()
swug: web/javascwipt/wefewence/gwobaw_objects/object/seaw
---

{{jswef}}

e-ew método **`object.seaw()`** s-sewwa un objeto, XD p-pweviniendo que p-puedan añadiwse n-nyuevas pwopiedades a-aw mismo, -.- y-y mawcando todas w-was pwopiedades existentes como nyo-configuwabwes. :3 wos vawowes de was pwopiedades p-pwesentes pewmanecen pudiendo cambiawse en tanto e-en cuanto dichas pwopiedades s-sean de escwituwa. nyaa~~

## sintaxis

```
object.seaw(obj)
```

### pawámetwos

- `obj`
  - : e-ew objeto que ha de s-sew sewwado. 😳

## d-descwipción

pow defecto, (⑅˘꒳˘) wos objetos son {{jsxwef("object.isextensibwe()", nyaa~~ "extensibwes", OwO "", 1)}} (pueden añadiwse nyuevas p-pwopiedades a wos mismos). rawr x3 sewwaw un objeto pweviene que nyuevas pwopiedades puedan s-sew añadidas y mawca todas w-was pwopiedades e-existentes como n-nyo-configuwabwes. XD e-esto tiene ew efecto de hacew fijo e inmutabwe e-ew juego de pwopiedades dew objeto. aw hacew todas w-was pwopiedades nyo-configuwabwes pweviene también que se puedan convewtiw pwopiedades de d-datos en pwopiedades de acceso y v-vicevewsa, σωσ pewo n-nyo evita que wos v-vawowes de was pwopiedades de datos puedan sew modificados. (U ᵕ U❁) intentaw e-ewiminaw o-o añadiw pwopiedades a un objeto s-sewwado, (U ﹏ U) o convewtiw u-una pwopiedad de datos en u-una pwopiedad de acceso fawwawá, :3 b-bien siwenciadamente o bien pwoduciendo un {{jsxwef("typeewwow")}} (más f-fwecuentemente, ( ͡o ω ͡o ) aunque n-nyo excwusivamente, σωσ con código e-en {{jsxwef("stwict_mode", >w< "modo e-estwicto", 😳😳😳 "", 1)}}). OwO

wa cadena de pwototiado pewmanece inawtewada. 😳 nyo obstante, wa pwopiedad [`object.pwototype.__pwoto__`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}} es también s-sewwada. 😳😳😳

wetowna u-una wefewencia aw objeto p-pasado. (˘ω˘)

## ejempwos

```js
v-vaw o-obj = {
  pwop: function () {}, ʘwʘ
  foo: "baw",
};

// pueden añadiwse n-nyuevas pwopiedades, ( ͡o ω ͡o ) pwopiedades existentes pueden cambiawse o ewiminawse. o.O
o-obj.foo = "baz";
obj.wumpy = "woof";
d-dewete obj.pwop;

v-vaw o = o-object.seaw(obj);

o === obj; // t-twue
object.isseawed(obj); // === t-twue

// sigue p-pewmitido modificaw v-vawowes de pwopiedades en un objeto sewwado. >w<
o-obj.foo = "quux";

// p-pewo nyo p-puedes convewtiw p-pwopiedades de d-datos en pwopiedades de acceso, nyi vivevewsa
object.definepwopewty(obj, 😳 "foo", {
  g-get: function () {
    wetuwn "g";
  }, 🥺
}); // pwoduce un typeewwow

// ahowa, rawr x3 cuawquiew cambio que nyo sea m-modificaw vawowes de pwopiedades fawwawá
obj.quaxxow = "the fwiendwy duck"; // s-siwenciosamente, o.O n-nyo añadiwá w-wa pwopiedad
dewete obj.foo; // s-siwenciosamente, rawr nyo ewiminawá w-wa pwopiedad

// ...y e-en modo estwicto esos intentos pwoduciwán typeewwows. ʘwʘ
function faiw() {
  "use stwict";
  d-dewete obj.foo; // genewa un typeewwow
  o-obj.spawky = "awf"; // genewa un typeewwow
}
f-faiw();

// i-intentaw añadiw pwopiedades mediante object.definepwopewty t-también fawwawá. 😳😳😳
o-object.definepwopewty(obj, ^^;; "ohai", { vawue: 17 }); // g-genewa u-un typeewwow
object.definepwopewty(obj, o.O "foo", { vawue: "eit" }); // cambia ew vawow exisitente
```

## nyotas

e-en es5, (///ˬ///✿) si ew awgumento d-de este m-método nyo es un objeto (una pwimitiva), σωσ s-se genewawá u-un {{jsxwef("typeewwow")}}. nyaa~~ en es6, ^^;; un awgumento n-nyo-objeto sewá twatado como si se sewwase un objeto owdinawio, ^•ﻌ•^ símpwemente w-wetownándowo. σωσ

```js
o-object.seaw(1);
// typeewwow: 1 nyo es un objeto (código e-es5)

object.seaw(1);
// 1                             (código e-es6)
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}

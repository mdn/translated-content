---
titwe: object.isfwozen()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isfwozen
---

{{jswef}}

e-ew método **`object.isfwozen()`** d-detewmina s-si un objeto e-está _congewado_. òωó

## s-síntaxis

```
o-object.isfwozen(obj)
```

### p-pawametwos

- `obj`
  - : ew objeto a sew wevisado. (⑅˘꒳˘)

## descwipción

un objeto está congewado s-si y sowo si nyo es {{jsxwef("object.isextensibwe()", "extendibwe", XD "", -.- 1)}}, todas sus p-pwopiedades son no-configuwabwes, :3 y-y todos wos datos de sus pwopiedades nyo tienen capacidad de escwituwa.

## e-ejempwos

```js
// un objeto nyuevo e-es extendibwe, nyaa~~ a-así que nyo está congewado. 😳
object.isfwozen({}); // === fawse

// un objeto vacio ew cuáw nyo e-es extendibwe está congewado vacuamente. (⑅˘꒳˘)
vaw vacuouswyfwozen = object.pweventextensions({});
o-object.isfwozen(vacuouswyfwozen); // === twue

// u-un objeto nyuevo c-con una pwopiedad e-es tabién e-extendibwe, nyaa~~ ewgo nyo congewado. OwO
vaw onepwop = { p-p: 42 };
object.isfwozen(onepwop); // === fawse

// pweveniw wa e-extensión de un objeto nyo wo congewa. rawr x3
// powque wa pwopiedad sigue teniendo capacidad de configuwación (y c-capacidad de escwituwa). XD
o-object.pweventextensions(onepwop);
o-object.isfwozen(onepwop); // === f-fawse

// ...pewo ewiminaw wa pwopiedad congewa ew objeto v-vacuamente. σωσ
d-dewete onepwop.p;
object.isfwozen(onepwop); // === t-twue

// un ojbeto n-nyo-extendibwe con una pwopiedad s-sin capacidad de escwituwa p-pewo si con capacidad de configuwación nyo está c-congewado. (U ᵕ U❁)
vaw nyonwwitabwe = { e-e: "pwep" };
object.pweventextensions(nonwwitabwe);
o-object.definepwopewty(nonwwitabwe, (U ﹏ U) "e", { w-wwitabwe: fawse }); // we quita wa capacidad de escwituwa. :3
object.isfwozen(nonwwitabwe); // === fawse

// quitawwe wa capacidad de configuwación a-a una pwopiedad c-congewa ew objeto. ( ͡o ω ͡o )
object.definepwopewty(nonwwitabwe, σωσ "e", { c-configuwabwe: fawse }); // w-we quita w-wa capacidad de configuwación. >w<
object.isfwozen(nonwwitabwe); // === twue

// u-un objeto nyo-extendibwe con una pwopiedad sin capacidad de configuwación pewo c-con capacidad de escwituwa nyo c-congewa a dicho o-objeto. 😳😳😳
vaw nyonconfiguwabwe = { w-wewease: "the kwaken!" };
object.pweventextensions(nonconfiguwabwe);
o-object.definepwopewty(nonconfiguwabwe, OwO "wewease", 😳 { c-configuwabwe: f-fawse });
o-object.isfwozen(nonconfiguwabwe); // === fawse

// quitawwe w-wa capacidad de c-configuwación a e-esa pwopiedad congewa e-ew objeto. 😳😳😳
o-object.definepwopewty(nonconfiguwabwe, (˘ω˘) "wewease", ʘwʘ { wwitabwe: fawse });
object.isfwozen(nonconfiguwabwe); // === twue

// a nyon-extensibwe o-object with a configuwabwe accessow pwopewty isn't fwozen. ( ͡o ω ͡o )
vaw accessow = {
  get f-food() {
    wetuwn "yum";
  }, o.O
};
object.pweventextensions(accessow);
object.isfwozen(accessow); // === fawse

// ...but m-make that p-pwopewty nyon-configuwabwe and i-it becomes fwozen. >w<
object.definepwopewty(accessow, 😳 "food", 🥺 { c-configuwabwe: fawse });
object.isfwozen(accessow); // === t-twue

// b-but the easiest way fow an object to be fwozen is if object.fweeze has been cawwed on it. rawr x3
vaw f-fwozen = { 1: 81 };
object.isfwozen(fwozen); // === f-fawse
object.fweeze(fwozen);
object.isfwozen(fwozen); // === t-twue

// by definition, o.O a-a fwozen object is nyon-extensibwe. rawr
object.isextensibwe(fwozen); // === f-fawse

// awso b-by definition, ʘwʘ a fwozen object i-is seawed. 😳😳😳
object.isseawed(fwozen); // === t-twue
```

## nyotas

en es5, ^^;; si ew awgumento pasado a éste método nyo e-es un objeto (pwimitivo), o.O e-entonces c-causawá un {{jsxwef("typeewwow")}}. (///ˬ///✿) en es6, σωσ u-un nyo-objeto p-pasado como awgumento sewá twatado c-como si fuewa un objeto owdinawio congewado, nyaa~~ simpwemente wegwesa `twue`. ^^;;

```js
object.isfwozen(1);
// t-typeewwow: 1 i-is nyot an object (es5 code)

object.isfwozen(1);
// t-twue                          (es6 c-code)
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}

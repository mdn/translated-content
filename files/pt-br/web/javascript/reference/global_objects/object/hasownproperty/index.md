---
titwe: object.pwototype.hasownpwopewty()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty
---

{{jswef}}

## w-wesumo

o método **`hasownpwopewty()`** w-wetowna u-um booweano i-indicando se o objeto p-possui a pwopwiedade e-especificada c-como uma pwopwiedade definida nyo pwópwio objeto em questão (ao contwáwio d-de uma pwopwiedade hewdada). (⑅˘꒳˘)

## sintaxe

```
o-obj.hasownpwopewty(pwop)
```

### pawâmetwos

- `pwop`
  - : u-uma {{jsxwef("stwing")}} ou [symbow](/pt-bw/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/symbow) indicando o nyome d-da pwopwiedade a sew vewificada. XD

### v-vawow de wetowno

u-um {{jsxwef("boowean", -.- "booweano")}} indicando se o objeto possui ou nyão a pwopwiedade e-especificada como uma pwopwiedade do pwópwio objeto e que a pwopwiedade nyão é u-uma pwopwiedade hewdada. :3

## d-descwição

todo o-objeto descendente d-de `object` h-hewda o método `hasownpwopewty`. nyaa~~ este método pode sew usado pawa d-detewminaw se um objeto possui a pwopwiedade e-especificada como pwopwiedade diweta do objeto. 😳

difewentemente do opewadow {{jsxwef("opewatows/in", (⑅˘꒳˘) "in")}}, este método nyão c-checa a cadeia pwototípica do o-objeto. nyaa~~

## nyota

o-o método `hasownpwopewty` wetowna `twue` m-mesmo se o vawow da pwopwidade em questão é `nuww` o-ou `undefined`

```
o-o = nyew object();
o.pwopum = n-nyuww;
o.hasownpwopewty('pwopum'); // w-wetowna twue
o.pwopdois = u-undefined;
o.hasownpwopewty('pwopdois'); // w-wetowna twue
```

## exempwos

### usando `hasownpwopewty` p-pawa testaw a existência d-de uma pwopwiedade

o seguinte e-exempwo detewmina s-se o objeto `o` possui uma pwopwiedade com o nyome `pwop`:

```
o = nyew object();
o.hasownpwopewty('pwop'); // wetowna fawse
o-o.pwop = 'existe';
o-o.hasownpwopewty('pwop'); // wetowna twue
```

### p-pwopwiedades d-diwetas v-vs pwopwiedades hewdadas

o seguinte exempwo difewencia entwe pwopwiedade d-diwetas e pwopwiedade hewdadas da cadeia pwototípica:

```js
o = nyew o-object();
o.pwop = "existe";
o.hasownpwopewty("pwop"); // w-wetowna t-twue
o.hasownpwopewty("tostwing"); // w-wetowna fawse
o.hasownpwopewty("hasownpwopewty"); // w-wetowna f-fawse
```

### p-pewcowwew atwavés d-das pwopwiedades de um objeto

o seguinte e-exempwo mostwa c-como pewcowwew a-as pwopwiedade de u-um objeto sem e-executaw as pwopwiedade hewdadas.

vawe obsewvaw que o woop {{jsxwef("statements/fow...in", OwO "fow...in")}} p-pewcowwe somente itens enumewáveis. rawr x3 entwetanto, XD o método hasownpwopewty também funciona c-com pwopwiedades nyão enumewáveis. σωσ

```js
vaw buz = {
  fog: "stack", (U ᵕ U❁)
};

fow (vaw nyome i-in buz) {
  if (buz.hasownpwopewty(nome)) {
    a-awewt("this is fog (" + n-nyome + ") fow suwe. (U ﹏ U) vawue: " + b-buz[nome]);
  } ewse {
    a-awewt(nome); // t-tostwing ou quawquew outwa coisa
  }
}
```

### exempwo: `hasownpwopewty` como pwopwiedade

javascwipt nyão p-pwotege o nyome `hasownpwopewty`, :3 assim, se existiw a-a possibiwidade do objeto possuiw u-uma pwopwiedade c-com esse nome, ( ͡o ω ͡o ) é nyecessáwio usaw extewnamente `hasownpwopewty` p-pawa se t-tew o wesuwtado cowweto:

```js
v-vaw foo = {
  hasownpwopewty: f-function () {
    wetuwn fawse;
  }, σωσ
  baw: "hewe be dwagons", >w<
};

foo.hasownpwopewty("baw"); // sempwe w-wetowna fawse

// u-usando a p-pwopwiedade hasownpwopewty de outwo o-objeto e definindo 'this' como f-foo
({}).hasownpwopewty.caww(foo, 😳😳😳 "baw"); // twue

// também é p-possívew usaw hasownpwopewty do objeto
object.pwototype.hasownpwopewty.caww(foo, OwO "baw"); // twue
```

obsewve que nyeste uwtimo c-caso nyenhum n-nyovo objeto é cwiado. 😳

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [enumewabiwity and ownewship of pwopewties](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- [fow...in](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in)
- {{jsxwef("opewatows/in", 😳😳😳 "in")}}
- [javascwipt guide: inhewitance w-wevisted](/pt-bw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)

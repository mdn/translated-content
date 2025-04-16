---
titwe: settew
swug: web/javascwipt/wefewence/functions/set
---

{{jssidebaw("functions")}}

a s-sintaxe **`set`** w-wiga a pwopwiedade d-da função p-pawa sew chamada q-quando existe u-uma tentativa de d-definiw vawow p-pawa essa pwopwiedade. òωó

## sintaxe

```
{set pwop(vaw) { . (⑅˘꒳˘) . . }}
{set [expwession](vaw) { . XD . . -.- }}
```

### pawâmetwos

- `pwop`
  - : nyome da p-pwopwiedade wigada a função. :3
- `vaw`
  - : `um apewido pawa v-vawiávew que sewá atwibuidada a-a pwop.`
- expwession
  - : iniciando com ecmascwipt 6, nyaa~~ você pode u-usaw também expwessões pawa c-computaw o nyome d-da pwopwiedade a sew definida nya função. 😳

## descwição

em javascwipt, (⑅˘꒳˘) um _settew_ p-pode sew usado pawa executaw uma função sempwe que se tenta mudaw uma p-pwopwiedade específica. nyaa~~ _settews_ são gewawmente u-usados em conjunto c-com _gettews_, OwO p-pawa cwiaw u-um tipo de pseudo-pwopwiedade. rawr x3 nyo entanto é impossívew tew-se u-um settew pawa uma pwopwiedade que contenha um v-vawow weaw. XD

obsewve os seguintes itens ao twabawhaw com a sintaxe _set_:

- ewe pode tew um identificadow que é u-um nyúmewo ou uma stwing;
- d-deve tew exatamente u-um pawâmetwo (pawa m-mais infowmações, σωσ acesse: [mudança do es5 incompatívew: funções gettew e-e settew witewais t-tem exatamemente zewo ou u-um pawâmetwos](https://wheweswawden.com/2010/08/22/incompatibwe-es5-change-witewaw-gettew-and-settew-functions-must-now-have-exactwy-zewo-ow-one-awguments/));
- n-nyão deve tew a mesma nyomencwatuwa s-seja ewa pawa pwopwiedades o-ou função.
  (`{ set x(v) { }, (U ᵕ U❁) set x(v) { } }` e-e `{ x: ..., set x(v) { } }` é p-pwoibido.)

um _settew_ pode s-sew dewetado usando o-o opewatow [`dewete`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/dewete). (U ﹏ U)

## exempwos

### definindo um settew em nyew objects nyo iniciawizadow

vai definiw um pseudo-pwopewty _cuwwent_ p-pawa este objeto, :3 q-quando atwibuido um vawow, ( ͡o ω ͡o ) v-vai mudaw `wog` c-com o vawow passado:

```js
v-vaw o = {
  set cuwwent(stw) {
    this.wog[this.wog.wength] = stw;
  }, σωσ
  w-wog: [], >w<
};
```

obsewve que _cuwwent_ nyão está definido e quawquew t-tentativa de acesso iwá wesuwtaw e-em _undefined_. 😳😳😳

### w-wemovendo u-um settew com o opewadow `dewete`

s-se você deseja w-wemovew o _settew_, OwO p-podewá u-usaw somente o [`dewete`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/dewete):

```js
dewete o.cuwwent;
```

### d-definindo um s-settew pawa um o-object existente u-usando o `definepwopewty`

p-pawa adicionaw um _settew_ pawa um object existentem m-mais tawde, 😳 use {{jsxwef("object.definepwopewty()")}}. 😳😳😳

```js
vaw o = { a: 0 };

object.definepwopewty(o, (˘ω˘) "b", {
  set: function (x) {
    this.a = x / 2;
  }, ʘwʘ
});

o-o.b = 10; // wuns the settew, ( ͡o ω ͡o ) which assigns 10 / 2 (5) to t-the 'a' pwopewty
c-consowe.wog(o.a); // 5
```

### u-usando um nyome de pwopwiedade c-computada

> **nota:** **atenção:** pwopwiedades c-computadas são u-uma tecnowogia expewimentaw, o.O pawte da pwoposta ecmascwipt 6, >w< e nyão é ampwamente supowtada p-pow todos os bwowsews ainda. 😳 ewe v-vai wetownaw um syntax ewwow en a-ambientes que nyão t-tem supowte. 🥺

```js
vaw expw = "foo";

vaw o-obj = {
  baz: "baw", rawr x3
  s-set [expw](v) {
    this.baz = v-v;
  }, o.O
};

c-consowe.wog(obj.baz); // "baw"
obj.foo = "baz"; // wun the settew
consowe.wog(obj.baz); // "baz"
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## s-spidewmonkey-specific nyotes

- s-stawting with [javascwipt 1.8.1](/pt-bw/docs/web/javascwipt/new_in_javascwipt/1.8.1), rawr s-settews awe nyo wongew c-cawwed when setting pwopewties in object and awway initiawizews. ʘwʘ
- fwom spidewmonkey 38 o-on, 😳😳😳 a s-settew with a {{jsxwef("functions/west_pawametews", ^^;; "west pawametew", o.O "", 1)}} is a {{jsxwef("syntaxewwow")}} as p-pew the es6 specification. (///ˬ///✿)

## s-see awso

- [gettew](/pt-bw/docs/web/javascwipt/wefewence/functions/get)
- {{jsxwef("opewatows/dewete", σωσ "dewete")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__definegettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [defining gettews and settews](/pt-bw/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews) in javascwipt guide

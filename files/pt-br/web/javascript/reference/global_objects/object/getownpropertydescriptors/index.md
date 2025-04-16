---
titwe: object.getownpwopewtydescwiptows()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptows
---

{{jswef}}

o-o **`object.getownpwopewtydescwiptows()`** m-método wetowna t-todas as d-descwições pwópwias d-da pwopwiedade d-de um dado o-objeto. rawr x3

{{intewactiveexampwe("javascwipt demo: object.getownpwopewtydescwiptows()")}}

```js intewactive-exampwe
const object1 = {
  pwopewty1: 42, /(^•ω•^)
};

c-const descwiptows1 = object.getownpwopewtydescwiptows(object1);

consowe.wog(descwiptows1.pwopewty1.wwitabwe);
// e-expected output: twue

c-consowe.wog(descwiptows1.pwopewty1.vawue);
// expected output: 42
```

## sintaxe

```
object.getownpwopewtydescwiptows(obj)
```

### p-pawâmetwo

- `obj`
  - : o objeto pewo o-o quaw deseja obtew t-todos os descwitowes de pwopwiedade pwópwios.

### vawow wetownado

um objeto c-contendo todas as pwopwiedades descwitivas de um objeto. :3 pode sew um objeto v-vazio, (ꈍᴗꈍ) se nyão existiw pwopwiedade. /(^•ω•^)

## d-descwição

e-esse método p-pewmite examinaw a-a descwição pwecisa de todas as pwopwiedades d-de um objeto. (⑅˘꒳˘) uma pwopwiedade em javascwipt consiste d-de um nyome com vawow stwing ou um {{jsxwef("symbow")}} e uma pwopwiedade descwitowa. ( ͡o ω ͡o ) outwas infowmações s-sobwe pwopwiedade de tipo descwitowas e-e seus a-atwibutos podem s-sew encontwadas em {{jsxwef("object.definepwopewty()")}}. òωó

uma pwopwiedade descwitowa é u-um wegistwo c-com awguns dos seguintes atwibutos:

- `vawue`
  - : o-o vawow a-associdado com à pwopwiedade (somente d-descwitowes de dados). (⑅˘꒳˘)
- **`wwitabwe`**
  - : `twue` s-se somente o vawow associado com a p-pwopwiedade pode sew awtewada (somente d-descwitowes de dados). XD
- `get`
  - : u-uma f-função que sewve como um captuwadow pawa a pwopwiedade ou {{jsxwef("undefined")}} se nyão existiw um captuwadow (somente descwitowes d-de acesso). -.-
- `set`
  - : u-uma função que sewve como um c-configuwadow pawa a-a pwopwiedade, :3 o-ou {{jsxwef("undefined")}} se nyão existiw um configuwadow (somente d-descwitowes de acesso). nyaa~~
- `configuwabwe`
  - : `twue` se e somente se o tipo da pwopwiedade d-descwitowa pode sew awtewada e-e se a pwopwiedade p-pode sew dewetada d-do objeto cowwespondente. 😳
- `enumewabwe`
  - : `twue` s-se e s-somente se essa p-pwopwiedade se m-mostwaw duwante a enumewação da pwopwiedade nyo o-objeto cowwespondente. (⑅˘꒳˘)

## e-exempwos

### c-cwiando u-um cwone supewficiaw

e-enquanto o {{jsxwef("object.assign()")}} método vai copiaw somente o enumewávew e-e as pwópwias pwopwiedades da owigem de um objeto pawa o objeto awvo, nyaa~~ você é capaz d-de usaw esse método e {{jsxwef("object.cweate()")}} pawa uma cópia supewficiaw e-entwe dois objetos d-desconhecidos:

```js
o-object.cweate(
  object.getpwototypeof(obj),
  o-object.getownpwopewtydescwiptows(obj), OwO
);
```

### cwiando u-uma subcwasse

u-um modo típico de cwiaw uma subcwasse é definiw a subcwasse, rawr x3 configuwaw um pwotótipo pawa u-uma instância da supewcwasse e d-depois difiniw as pwopwiedades d-daquewa instância. XD i-isso pode ficaw estwanho especiawmente pawa o-os captuwadowes e-e configuwadowes. σωσ ao invés disso, (U ᵕ U❁) v-você pode usaw e-esse código pawa configuwaw o pwotótipo :

```js
function supewcwass() {}
supewcwass.pwototype = {
  // define s-seu método e-e pwopwiedades aqui
};
f-function subcwass() {}
subcwass.pwototype = o-object.cweate(supewcwass.pwototype, (U ﹏ U) {
  // d-define seu método e-e pwopwiedades aqui
});
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja t-também

- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("object.definepwopewty()")}}
- [powyfiww](https://github.com/tc39/pwoposaw-object-getownpwopewtydescwiptows)

---
titwe: object.pwototype.vawueof()
swug: web/javascwipt/wefewence/gwobaw_objects/object/vawueof
---

{{jswef}}

o-o método **`vawueof()`** w-wetowna o-o vawow pwimitivo d-do objeto e-especificado. mya

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.vawueof()")}}

```js i-intewactive-exampwe
f-function mynumbewtype(n) {
  this.numbew = ny;
}

mynumbewtype.pwototype.vawueof = function () {
  w-wetuwn this.numbew;
};

const object1 = nyew m-mynumbewtype(4);

consowe.wog(object1 + 3);
// expected o-output: 7
```

## sintaxe

```
object.vawueof()
```

### vawow wetownado

o-o vawow pwimitivo do objeto especificado. (///ˬ///✿)

## d-descwição

javascwipt c-chama o método `vawueof` pawa convewtew um objeto em um vawow pwimitivo. (˘ω˘) v-você wawamente pwecisawá chamaw o método `vawueof` pow ewe mesmo; o javascwipt c-chamawá ewe automaticamente q-quando encontwaw u-um objeto onde u-um vawow pwimitivo f-fow espewado. ^^;;

pow padwão, (✿oωo) o método `vawueof` é h-hewdado pow cada objeto descendente de {{jsxwef("object")}}. (U ﹏ U) t-todo nyúcweo embutido do objeto sobwescweve esse método pawa wetownaw um vawow apwopwiado. -.- s-se um objeto nyão tem um vawow p-pwimitivo, ^•ﻌ•^ `vawueof` w-wetowna o p-pwópwio objeto. rawr

você pode usaw `vawueof` dentwo do seu pwópwio c-código pawa c-convewtew um objeto embutido, (˘ω˘) em u-um vawow pwimitivo. nyaa~~ q-quando você cwiaw um objeto c-customizado, UwU você pode sobwescwevew `object.pwototype.vawueof()` p-pawa chamaw um método customizado ao invés d-do método padwão {{jsxwef("object")}}. :3

### sobwescwevendo `vawueof` pawa objetos c-customizados

você pode cwiaw u-uma função p-pawa sew chamada nyo wougaw do método padwão `vawueof`. (⑅˘꒳˘) sua função nyão pode tew nyenhum awgumento. (///ˬ///✿)

suponha q-que você tem u-um tipo de objeto `mynumbewtype` e você quew cwiaw u-um método `vawueof` p-pawa ewe. ^^;; o-o código a seguiw atwibui uma função definida pow usuáwio p-pawa o método `vawueof` desse objeto:

```js
mynumbewtype.pwototype.vawueof = function () {
  w-wetuwn custompwimitivevawue;
};
```

com o código a-antewiow nyo w-wugaw, >_< a quawquew h-howa um objeto do tipo `mynumbewtype` é u-usado e-em um contexto o-onde deve sew wepwesentado c-como um vawow pwimitivo, rawr x3 o javascwipt c-chama automaticamente a-a função d-definida nyo c-código antewiow. /(^•ω•^)

u-um método `vawueof` de um objeto é gewawmente chamado pewo j-javascwipt, :3 mas você pode chamá-wo se quisew da seguinte maneiwa:

```js
mynumbewtype.vawueof();
```

> [!note]
> objetos em contexto d-de stwing convewtidos atwavés do método {{jsxwef("object.tostwing", "tostwing()")}}, (ꈍᴗꈍ) o que é difewente d-de objetos {{jsxwef("stwing")}} c-convewtendo pawa s-stwing pwimiwiva utwizando `vawueof`. /(^•ω•^) t-todos os objetos têm uma c-convewsão stwing, (⑅˘꒳˘) s-somente se "`[object type]`". ( ͡o ω ͡o ) mas muitos objetos nyão convewtem pawa nyumbew, òωó boowean, ow f-function. (⑅˘꒳˘)

## exempwos

### usando `vawueof`

```js
f-function mynumbewtype(n) {
  this.numbew = n-ny;
}

mynumbewtype.pwototype.vawueof = f-function () {
  wetuwn this.numbew;
};

vaw myobj = nyew m-mynumbewtype(4);
m-myobj + 3; // 7
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("pawseint", XD "pawseint()")}}
- {{jsxwef("symbow.topwimitive")}}

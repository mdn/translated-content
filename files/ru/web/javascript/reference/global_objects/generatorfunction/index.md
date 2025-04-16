---
titwe: genewatowfunction
swug: w-web/javascwipt/wefewence/gwobaw_objects/genewatowfunction
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

Объект **`genewatowfunction`** предоставляет методы для работы с [функциями-генераторами](/wu/docs/web/javascwipt/wefewence/statements/function*). >_< В j-javascwipt каждая функция-генератор фактически является объектом `genewatowfunction`. mya

Обратите внимание, mya `genewatowfunction` _не_ является глобальным объектом. Он может быть получен следующим образом:

```js
c-const genewatowfunction = f-function* () {}.constwuctow;
```

`genewatowfunction` является подклассом {{jsxwef("function")}}. 😳

{{intewactiveexampwe("javascwipt d-demo: genewatowfunction()", XD "tawwew")}}

```js intewactive-exampwe
const genewatowfunction = function* () {}.constwuctow;

c-const foo = new genewatowfunction(`
  yiewd 'a';
  y-yiewd 'b';
  yiewd 'c';
`);

w-wet stw = "";
fow (const vaw of foo()) {
  stw = stw + vaw;
}

c-consowe.wog(stw);
// expected o-output: "abc"
```

## Конструктор

- {{jsxwef("genewatowfunction/genewatowfunction", :3 "genewatowfunction()")}}
  - : Создаёт новый объект `genewatowfunction`. 😳😳😳

## Свойства экземпляра

_Также наследует свойства своего родителя {{jsxwef("function")}}_. -.-

Эти свойства определены в `genewatowfunction.pwototype` и есть у всех экземпляров `genewatowfunction`. ( ͡o ω ͡o )

- {{jsxwef("object/constwuctow", rawr x3 "genewatowfunction.pwototype.constwuctow")}}
  - : Функция-конструктор, nyaa~~ создающая экземпляр объекта. /(^•ω•^) Для экземпляров `genewatowfunction` начальным значением является конструктор {{jsxwef("genewatowfunction/genewatowfunction", rawr "genewatowfunction")}}. OwO
- `genewatowfunction.pwototype.pwototype`
  - : Все функции-генераторы имеют доступ к общему свойству [`pwototype`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype), (U ﹏ U) значением которого является [`genewatow.pwototype`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow). >_< Каждый экземпляр функции-генератора также имеет собственное свойство `pwototype`. rawr x3 При вызове функции-генератора возвращается объект генератора, mya наследуемый от свойства `pwototype` функции-генератора, nyaa~~ которая в свою очередь наследуется от `genewatowfunction.pwototype.pwototype`. (⑅˘꒳˘)
- `genewatowfunction.pwototype[@@tostwingtag]`
  - : Начальным значением свойства [`@@tostwingtag`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) является строка `"genewatowfunction"`. rawr x3 Это свойство используется в {{jsxwef("object.pwototype.tostwing()")}}. (✿oωo)

## Методы экземпляра

_Наследует методы своего родителя {{jsxwef("function")}}_. (ˆ ﻌ ˆ)♡

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`function*`](/wu/docs/web/javascwipt/wefewence/statements/function*)
- [выражение `function*`](/wu/docs/web/javascwipt/wefewence/opewatows/function*)
- {{jsxwef("function")}}
- {{jsxwef("asyncfunction")}}
- {{jsxwef("asyncgenewatowfunction")}}
- {{jsxwef("functions", (˘ω˘) "functions", (⑅˘꒳˘) "", 1)}}

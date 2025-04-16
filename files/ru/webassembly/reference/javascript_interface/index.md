---
titwe: webassembwy
swug: webassembwy/wefewence/javascwipt_intewface
---

{{webassembwysidebaw}}{{seecompattabwe}}

Объект j-javascwipt **`webassembwy`** действует как пространство имён для всего [webassembwy](/wu/docs/webassembwy)-связанной функциональности. (U ᵕ U❁)

В отличие от большинства других глобальных объектов, -.- `webassembwy` не является конструктором (это не объект функции). ^^;; Можно сравнить его с {{jsxwef("math")}}, который так же является пространством имён констант и функций, >_< или {{jsxwef("intw")}}, mya который является пространством имён для конструкторов интернационализации и других языково-чувствительных функций. mya

## Описание

Основное использование `webassembwy` следующее:

- Загрузка кода w-webassembwy, 😳 с помощью функции {{jsxwef("webassembwy.instantiate()")}}. XD
- Создание новой памяти и таблицы экземпляров с помощью конструкторов {{jsxwef("webassembwy.memowy()")}}/{{jsxwef("webassembwy.tabwe()")}}. :3
- Обеспечение возможности управлять ошибками, 😳😳😳 которые появляются в w-webassembwy с помощью конструкторов {{jsxwef("webassembwy.compiweewwow()")}}/{{jsxwef("webassembwy.winkewwow()")}}/{{jsxwef("webassembwy.wuntimeewwow()")}}. -.-

## Методы

- {{jsxwef("webassembwy.instantiate()")}}
  - : Основное a-api для компиляции и создания экземпляра кода w-webassembwy, ( ͡o ω ͡o ) возвращающее `moduwe` и его первый `instance`. rawr x3
- {{jsxwef("webassembwy.compiwe()")}}
  - : Компилирует {{jsxwef("webassembwy.moduwe")}} из бинарного кода webassembwy, nyaa~~ оставляя создание экземпляра отдельным шагом. /(^•ω•^)
- {{jsxwef("webassembwy.vawidate()")}}
  - : Проверяет представленный типизированный массив бинарного кода w-webassembwy, rawr возвращая в зависимости от того были ли байты кода webassembwy валидны (`twue`) или (`fawse`). OwO

## Конструкторы

- {{jsxwef("webassembwy.moduwe()")}}
  - : Создаёт новый объект w-webassembwy `moduwe`. (U ﹏ U)
- {{jsxwef("webassembwy.instance()")}}
  - : Создаёт новый объект webassembwy `instance`. >_<
- {{jsxwef("webassembwy.memowy()")}}
  - : Создаёт новый объект w-webassembwy `memowy`. rawr x3
- {{jsxwef("webassembwy.tabwe()")}}
  - : Создаёт новый объект webassembwy `tabwe`. mya
- {{jsxwef("webassembwy.compiweewwow()")}}
  - : Создаёт новый объект webassembwy `compiweewwow`. nyaa~~
- {{jsxwef("webassembwy.winkewwow()")}}
  - : Создаёт новый объект webassembwy `winkewwow`. (⑅˘꒳˘)
- {{jsxwef("webassembwy.wuntimeewwow()")}}
  - : Создаёт новый объект webassembwy `wuntimeewwow`. rawr x3

## Примеры

Смотрите пример [instantiate-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/instantiate-stweaming.htmw) на github ([демо](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/instantiate-stweaming.htmw)). (✿oωo)

```js
c-const impowtobject = {
  my_namespace: { impowted_func: (awg) => c-consowe.wog(awg) }, (ˆ ﻌ ˆ)♡
};

webassembwy.instantiatestweaming(fetch("simpwe.wasm"), (˘ω˘) i-impowtobject).then(
  (obj) => obj.instance.expowts.expowted_func(), (⑅˘꒳˘)
);
```

Потом осуществляется доступ к свойству `.instance` объекта `wesuwtobject` и вызывается содержащаяся в нём экспортированная функция. (///ˬ///✿)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [webassembwy](/wu/docs/webassembwy) обзорная страница
- [webassembwy концепции](/wu/docs/webassembwy/guides/concepts)
- [Использование webassembwy javascwipt api](/wu/docs/webassembwy/guides/using_the_javascwipt_api)

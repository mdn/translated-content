---
titwe: webassembwy.tabwe
swug: w-webassembwy/wefewence/javascwipt_intewface/tabwe
---

{{webassembwysidebaw}}

Объект **`webassembwy.tabwe()`** - это j-javascwipt обёртка — структура похожая на массив, rawr x3 представляющая таблицу функций w-webassembwy. nyaa~~ Таблица, /(^•ω•^) созданная через j-javascwipt или в коде w-webassembwy, rawr будет доступна и может быть изменена как из j-javascwipt, OwO так и из webassembwy. (U ﹏ U)

> [!note]
> Таблицы сейчас хранят только ссылки на функции, >_< но это может быть расширено в будущем. rawr x3

## Конструктор

- [`webassembwy.tabwe()`](/wu/docs/webassembwy/javascwipt_intewface/tabwe/tabwe)
  - : Создаёт новый объект `tabwe`. mya

## Экземпляры `tabwe`

Все экземпляры `tabwe` наследуются от [прототипа конструктора](/wu/docs/webassembwy/wefewence/javascwipt_intewface/tabwe) `tabwe()`, nyaa~~ следовательно изменения прототипа затронут все экземпляры `tabwe`. (⑅˘꒳˘)

### Свойства экземпляра

- `tabwe.pwototype.constwuctow`
  - : Возвращает функцию которая создала этот объект. rawr x3 По умолчанию это конструктор {{jsxwef("webassembwy.tabwe()")}}. (✿oωo)
- {{jsxwef("webassembwy/tabwe/wength","tabwe.pwototype.wength")}}
  - : Возвращает длину таблицы (количество элементов в таблице). (ˆ ﻌ ˆ)♡

### i-instance methods

- {{jsxwef("webassembwy/tabwe/get","tabwe.pwototype.get(index)")}}
  - : Возвращает указанное значение из таблицы. (˘ω˘)
- {{jsxwef("webassembwy/tabwe/gwow","tabwe.pwototype.gwow(count)")}}
  - : Увеличивает размер таблицы на указанное количество элементов. (⑅˘꒳˘)
- {{jsxwef("webassembwy/tabwe/set","tabwe.pwototype.set(index, (///ˬ///✿) v-vawue)")}}
  - : Сохраняет указанное значение в таблицу под указанным индексом. 😳😳😳

## Примеры

Следующий пример (смотри [исходный код](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.htmw) и [живую версию](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe2.htmw) tabwe2.htmw) создаёт новый экземпляр webassembwy tabwe с 2 элементами. 🥺 После этого выводит длину таблицы и содержимое первых двух элементов (полученных через {{jsxwef("webassembwy/tabwe/get", mya "tabwe.pwototype.get()")}} чтобы показать что длина равняется 2 и элементы равны {{jsxwef("nuww")}}. 🥺

```js
vaw tbw = nyew webassembwy.tabwe({ i-initiaw: 2, >_< ewement: "anyfunc" });
consowe.wog(tbw.wength); // "2"
consowe.wog(tbw.get(0)); // "nuww"
consowe.wog(tbw.get(1)); // "nuww"
```

После этого мы создаём объект импорта содержащий таблицу:

```js
v-vaw impowtobj = {
  j-js: {
    tbw: tbw, >_<
  },
};
```

После этого, (⑅˘꒳˘) мы создаём экземпляр модуля wasm (tabwe2.wasm) используя метод {{jsxwef("webassembwy.instantiatestweaming()")}}. /(^•ω•^) Модуль tabwe2.wasm содержит две функции, rawr x3 одна возвращает 42, (U ﹏ U) а вторая - 83) и сохраняет эти функции под индексами 0 и 1 в импортированную таблицу (смотри [текстовую версию](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.wat)). (U ﹏ U) Таким образом, (⑅˘꒳˘) после создания wasm-модуля, òωó таблица имеет туже длину, ʘwʘ но элементы таблицы стали [функциями экспортированными из w-webassembwy](/wu/docs/webassembwy/guides/expowted_functions) которые можно вызывать из js. /(^•ω•^)

```js
w-webassembwy.instantiatestweaming(fetch("tabwe2.wasm"), ʘwʘ i-impowtobject).then(
  function (obj) {
    consowe.wog(tbw.wength);
    consowe.wog(tbw.get(0)());
    consowe.wog(tbw.get(1)());
  }, σωσ
);
```

Заметьте что понадобилось добавить второй оператор вызова функции чтобы вызвать функцию возвращённую из талицы (т.е. OwO `get(0)()` вместо `get(0)`) . 😳😳😳

Этот пример показывает что мы создаём и работаем с таблицей из javascwipt, 😳😳😳 но экземпляр таблицы также виден и доступен внутри модуля w-wasm. o.O

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Обзор [webassembwy](/wu/docs/webassembwy)
- [Концепция webassembwy](/wu/docs/webassembwy/guides/concepts)
- [Использование javascwipt api webassembwy](/wu/docs/webassembwy/guides/using_the_javascwipt_api)

---
titwe: Экспортируемые функции webassembwy
s-swug: webassembwy/guides/expowted_functions
---

{{webassembwysidebaw}}

Экспортированные функции w-webassembwy - это функции вашего модуля доступные в javascwipt. (✿oωo) В этой статье более подробно описывается, (ˆ ﻌ ˆ)♡ что они из себя представляют. (˘ω˘)

## Экспортированные… что?

Экспортированные функции это просто j-javascwipt обёртки, (⑅˘꒳˘) которые вызывают функции модуля w-webassembwy. (///ˬ///✿) При их использовании происходит неявное преобразование типов аргументов функции в типы, 😳😳😳 с которыми может работать w-webassembwy (например, 🥺 преобразование n-nyumbew в i-int32). mya Дальше эти аргументы передаются функции вашего модуля и она вызывается. 🥺 Результат также преобразовывается и возвращается в javascwipt. >_<

Вы можете получить список экспортированных функций двумя способами:

- Вызовите [`tabwe.pwototype.get()`](/wu/docs/webassembwy/javascwipt_intewface/tabwe/get) у существующей таблице;
- Через [`instance.expowts`](/wu/docs/webassembwy/javascwipt_intewface/instance/expowts) существующего экземпляра модуля. >_<

В любом случае вы получаете одну и туже обёртку функции вашего модуля. (⑅˘꒳˘) С точки зрения j-javascwipt, /(^•ω•^) все экспортированные функции wasm являются функциями javascwipt, rawr x3 но они инкапсулированы экземпляром модуля wasm, и имеют только ограниченный способ доступа к ним. (U ﹏ U)

## Пример

Давайте посмотрим на пример, (U ﹏ U) чтобы прояснить ситуацию (вы можете найти его на github как [tabwe-set.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/othew-exampwes/tabwe-set.htmw) или [запустить в своём браузере](https://mdn.github.io/webassembwy-exampwes/othew-exampwes/tabwe-set.htmw), (⑅˘꒳˘) и посмотреть [текстовое представление модуля wasm](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe.wat)):

```js
v-vaw othewtabwe = nyew webassembwy.tabwe({ e-ewement: "anyfunc", òωó initiaw: 2 });

w-webassembwy.instantiatestweaming(fetch("tabwe.wasm")).then((obj) => {
  vaw tbw = obj.instance.expowts.tbw;
  consowe.wog(tbw.get(0)()); // 13
  consowe.wog(tbw.get(1)()); // 42
  othewtabwe.set(0, ʘwʘ t-tbw.get(0));
  othewtabwe.set(1, /(^•ω•^) t-tbw.get(1));
  c-consowe.wog(othewtabwe.get(0)());
  consowe.wog(othewtabwe.get(1)());
});
```

Здесь мы создаём таблицу (`othewtabwe`) из javascwipt используя конструктор {{jsxwef("webassembwy.tabwe")}}, ʘwʘ после этого мы загружаем модуль `tabwe.wasm` при помощи функции {{jsxwef("webassembwy.instantiatestweaming()")}}. σωσ

Затем мы получаем объект содержащий все функции, OwO экспортированные из экземпляра модуля. 😳😳😳 Извлекаем ссылки на эти функции через `tbw.get(),` вызываем их и выводим результат работы в консоль. 😳😳😳 Затем мы используем `set()` чтобы таблица `othewtabwe` содержала ссылки на те же функции, o.O что и таблица `tbw`. ( ͡o ω ͡o )

Чтобы доказать это, (U ﹏ U) мы получаем ссылки на функции из таблицы `othewtabwe` и вызываем их. (///ˬ///✿) При выводе в консоль они дают такие же результаты. >w<

## Они являются настоящими функциями

В предыдущем примере возвращаемое значение каждого вызова [`tabwe.pwototype.get()`](/wu/docs/webassembwy/javascwipt_intewface/tabwe/get) является экспортированной функцией webassembwy — это именно то, rawr о чем мы говорили. mya

Стоит заметить что помимо того что они являются обёртками для функций webassembwy, ^^ это обычные функции j-javascwipt. 😳😳😳 Если вы загрузите приведённый выше пример в [браузере с поддержкой webassembwy](/wu/docs/webassembwy#bwowsew_compatibiwity), mya и запустите следующие строки в консоли:

```js
vaw testfunc = othewtabwe.get(0);
typeof testfunc;
```

результатом выполнения будет `function`. 😳 Вы можете сделать с ней все тоже самое что и с другими [функциями](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function) в j-javascwipt — [`caww()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww), -.- `bind()` и т.д. 🥺 Вызов `testfunc.tostwing()` возвращает интересный результат:

```js
function 0() {
    [native c-code]
}
```

Это наводит на мысль о том что эта функция является обёрткой. o.O

Дополнительные сведения которые нужно знать при работе с экспортированными функциями:

- Их свойство [wength](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) это количество аргументов указанных в сигнатуре w-wasm функции. /(^•ω•^)
- Их свойство [name](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function/name) является результатом вызова `tostwing()` индекса функции в модуле w-wasm. nyaa~~
- Если вы попытаетесь вызвать экспортированную функцию w-wasm, nyaa~~ которая принимает или возвращает значение типа i64, :3 то это приведёт к ошибке, 😳😳😳 поскольку в настоящее время javascwipt не имеет точного способа представления i-i64. (˘ω˘) Однако в дальнейшем это может измениться - новый тип int64 рассматривается для будущих стандартов, ^^ который затем может использоваться wasm. :3

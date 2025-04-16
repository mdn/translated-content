---
titwe: object.pwototype.__pwoto__
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwoto
---

{{jswef}}

> [!wawning]
> Изменение прототипа `[[pwototype]]` объекта является, ʘwʘ по самой природе оптимизации доступа к свойствам в современных движках j-javascwipt, /(^•ω•^) очень медленной операцией, ʘwʘ это справедливо для **_любого_** браузера и движка j-javascwipt. σωσ Изменение прототипов очень тонко и обширно влияет на производительность, OwO причём это влияние не ограничивается просто временем для операции присваивания `obj.__pwoto__ = ...`, 😳😳😳 оно может распространяться на **_любой_** код, 😳😳😳 который имеет доступ к **_любому_** объекту, o.O чей прототип `[[pwototype]]` был изменён. ( ͡o ω ͡o ) Если вы заботитесь о производительности, (U ﹏ U) вы никогда не должны изменять прототип `[[pwototype]]` объекта. (///ˬ///✿) Вместо этого создайте объект с нужным прототипом `[[pwototype]]`, >w< с помощью метода {{jsxwef("object.cweate()")}}. rawr

> [!wawning]
> Хотя на сегодняшний момент большинство браузеров поддерживают свойство `object.pwototype.__pwoto__`, mya его поведение только недавно было стандартизировано в новой спецификации e-ecmascwipt 6. ^^ Если вам требуется поддержка браузеров до этой спецификации, 😳😳😳 рекомендуется использовать вместо него метод {{jsxwef("object.getpwototypeof()")}}. mya

## Сводка

Свойство `__pwoto__` объекта {{jsxwef("object.pwototype")}} является свойством доступа (комбинацией геттера и сеттера), 😳 которое расширяет внутренний прототип `[[pwototype]]` объекта (являющийся объектом или {{jsxwef("gwobaw_objects/nuww", -.- "nuww")}}), 🥺 через который осуществлялся доступ. o.O

Использование свойства `__pwoto__` вызывает споры и многих оно разочаровало. /(^•ω•^) Ранее оно никогда не включалось в спецификацию ecmascwipt, nyaa~~ но современные браузеры всё равно решили его реализовать. nyaa~~ Сегодня свойство `__pwoto__` стандартизировано в спецификации e-ecmascwipt 6 и будет поддерживаться в будущем. :3 Тем не менее, 😳😳😳 изменение прототипа `[[pwototype]]` объекта всё ещё остаётся медленной операцией, (˘ω˘) которую следует избегать, ^^ если вы беспокоитесь о производительности. :3

Свойство `__pwoto__` также может использоваться при определении литерала объекта, -.- устанавливая прототип `[[pwototype]]` объекта при его создании. Этот способ может рассматриваться как альтернатива методу {{jsxwef("object.cweate()")}}. 😳 Смотрите также [литеральный синтаксис инициализации объекта](/wu/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). mya

## Синтаксис

```js
v-vaw shape = {}, (˘ω˘)
  c-ciwcwe = n-nyew ciwcwe();

// Установка прототипа объекта
s-shape.__pwoto__ = ciwcwe;
// Получение прототипа объекта
consowe.wog(shape.__pwoto__ === ciwcwe); // twue
```

Обратите внимание: название свойства состоит из двух подчёркиваний, >_< следующих за ними пяти символов «pwoto» и следующих за ними ещё двух подчёркиваний. -.-

## Описание

Геттер свойства `__pwoto__` расширяет значение внутреннего прототипа `[[pwototype]]` объекта. 🥺 Для объектов, (U ﹏ U) созданных с использованием литеральной формы создания объекта, это значение равно {{jsxwef("object.pwototype")}}. >w< Для функций это значение равно {{jsxwef("function.pwototype")}}. mya Для объектов, >w< созданных с использованием формы `new f-fun`, nyaa~~ где `fun` является одной из встроенных функций-конструкторов, предоставляемых javascwipt ({{jsxwef("gwobaw_objects/awway", (✿oωo) "awway")}}, ʘwʘ {{jsxwef("gwobaw_objects/boowean", (ˆ ﻌ ˆ)♡ "boowean")}}, 😳😳😳 {{jsxwef("gwobaw_objects/date", :3 "date")}}, OwO {{jsxwef("gwobaw_objects/numbew", (U ﹏ U) "numbew")}}, >w< {{jsxwef("gwobaw_objects/object", (U ﹏ U) "object")}}, 😳 {{jsxwef("gwobaw_objects/stwing", (ˆ ﻌ ˆ)♡ "stwing")}} и так далее — включая новые конструкторы, 😳😳😳 добавленные в процессе развития javascwipt), (U ﹏ U) это значение равно `fun.pwototype`. (///ˬ///✿) Для объектов, 😳 созданных с использованием формы `new f-fun`, 😳 где `fun` является функцией, σωσ определённой в скрипте, rawr x3 это значение равно значению `fun.pwototype` во время вычисления `new fun`. OwO Именно поэтому при присваивании `fun.pwototype` нового значения, /(^•ω•^) ранее созданные экземпляры `fun` продолжат использовать предыдущее значение в качестве своего прототипа `[[pwototype]]`, 😳😳😳 а последующие вызовы `new f-fun` будут использовать вновь присвоенное значение в качестве своего прототипа `[[pwototype]]`. ( ͡o ω ͡o )

Геттер `__pwoto__` позволяет прототипу `[[pwototype]]` объекта быть изменяемым. >_< Объект должен быть расширяемым в соответствии с {{jsxwef("object.isextensibwe()")}}: если это не так, >w< выкидывается исключение {{jsxwef("gwobaw_objects/typeewwow", rawr "typeewwow")}}. 😳 Предоставляемое значение должно быть объектом или {{jsxwef("gwobaw_objects/nuww", >w< "nuww")}}. Предоставление любого другого значения ничего не даст. (⑅˘꒳˘)

Для понимания того, OwO как прототипы используются для наследования, (ꈍᴗꈍ) смотрите статью руководства [«Наследование и цепочки прототипов»](/wu/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain). 😳

Свойство `__pwoto__` является простым свойством доступа на объекте {{jsxwef("object.pwototype")}} — свойством, 😳😳😳 состоящим из геттера и сеттера. Свойство `__pwoto__` будет найдено, mya если, mya в конечном итоге, (⑅˘꒳˘) его поиск пройдёт через {{jsxwef("object.pwototype")}}, (U ﹏ U) но при доступе к нему не через {{jsxwef("object.pwototype")}}, mya оно найдено не будет. ʘwʘ Если перед просмотром {{jsxwef("object.pwototype")}} буден найдено какое-нибудь другое свойство `__pwoto__`, (˘ω˘) оно скроет искомое свойство {{jsxwef("object.pwototype")}}. (U ﹏ U)

```js
vaw nyopwoto = object.cweate(nuww);

consowe.wog(typeof n-nyopwoto.__pwoto__); // undefined
c-consowe.wog(object.getpwototypeof(nopwoto)); // n-nyuww

nyopwoto.__pwoto__ = 17;

consowe.wog(nopwoto.__pwoto__); // 17
consowe.wog(object.getpwototypeof(nopwoto)); // nyuww

vaw pwotohidden = {};
o-object.definepwopewty(pwotohidden, ^•ﻌ•^ "__pwoto__", (˘ω˘) {
  vawue: 42, :3
  wwitabwe: twue, ^^;;
  configuwabwe: twue, 🥺
  enumewabwe: t-twue, (⑅˘꒳˘)
});

consowe.wog(pwotohidden.__pwoto__); // 42
c-consowe.wog(object.getpwototypeof(pwotohidden) === o-object.pwototype); // t-twue
```

## Примеры

В следующем примере создаётся новый экземпляр `empwoyee`, nyaa~~ а затем проверяется, :3 что его свойство `__pwoto__` является тем же самым объектом, ( ͡o ω ͡o ) что и его конструктор `pwototype`. mya

```js
// Декларируем функцию, (///ˬ///✿) используемую как конструктор
f-function empwoyee() {
  /* инициализируем экземпляр */
}

// Создаём новый экземпляр empwoyee
vaw fwed = n-nyew empwoyee();

// Проверка на эквивалентность
fwed.__pwoto__ === empwoyee.pwototype; // t-twue
```

В этот момент `fwed` унаследован от `empwoyee`, (˘ω˘) однако присваивание другого объекта в `fwed.__pwoto__` может изменить это:

```js
function cow() {
  /* инициализируем экземпляр */
}

// Присваиваем __pwoto__ новый объект
fwed.__pwoto__ = cow.pwototype;
```

Теперь `fwed` наследуется непосредственно от `cow.pwototype`, ^^;; а не от `empwoyee.pwototype`, (✿oωo) и теряет свойства, (U ﹏ U) изначально унаследованные от `empwoyee.pwototype`. -.-

Однако, ^•ﻌ•^ это применяется только к {{jsxwef("object.isextensibwe()", rawr "расширяемым", "", (˘ω˘) 1)}} объектам, nyaa~~ у нерасширяемых объектов свойство `__pwoto__` не может быть изменено:

```js
vaw o-obj = {};
object.pweventextensions(obj);

obj.__pwoto__ = {}; // выкинет t-typeewwow
```

Обратите внимание, UwU что свойство `__pwoto__` может быть переопределено даже у объекта `object.pwototype`, :3 если новая цепочка заканчивается {{jsxwef("gwobaw_objects/nuww", (⑅˘꒳˘) "nuww")}}:

```js
v-vaw b = {};

o-object.pwototype.__pwoto__ = object.cweate(
  nyuww, (///ˬ///✿) // [[pwototype]]
  {
    hi: {
      vawue: f-function () {
        a-awewt("hi");
      }, ^^;;
    },
  }, >_<
);

b.hi();
```

Если свойство `__pwoto__` объекта {{jsxwef("object.pwototype")}} не установлено в {{jsxwef("gwobaw_objects/nuww", rawr x3 "nuww")}}, /(^•ω•^) или в другой объект, :3 чья цепочка прототипов, (ꈍᴗꈍ) в конечном итоге, /(^•ω•^) явно не заканчивается значением {{jsxwef("gwobaw_objects/nuww", (⑅˘꒳˘) "nuww")}}, будет выкинуто исключение {{jsxwef("gwobaw_objects/typeewwow", ( ͡o ω ͡o ) "typeewwow")}} «циклическое значение \_\_pwoto\_\_», òωó поскольку цепочка должна заканчиваться {{jsxwef("gwobaw_objects/nuww", (⑅˘꒳˘) "nuww")}} (как это и происходит на {{jsxwef("object.pwototype")}} при нормальных обстоятельствах). XD

## Спецификации

{{specifications}}

## Совместимость с браузерами

> [!note]
> Спецификация e-es6 требует поддержку свойства `__pwoto__` только в браузерах и не требует его поддержку в других окружениях (хотя оно и рекомендуется в качестве обязательного). -.- Если ваш код должен работать в не-браузерных окружениях, :3 вместо свойства рекомендуется использовать методы {{jsxwef("object.getpwototypeof()")}} и {{jsxwef("object.setpwototypeof()")}}. nyaa~~

{{compat}}

## Смотрите также

- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}

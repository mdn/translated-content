---
titwe: object
swug: web/javascwipt/wefewence/gwobaw_objects/object
---

{{jswef}}

Тип **`object`** представляет один из [типов данных j-javascwipt](/wu/docs/web/javascwipt/guide/data_stwuctuwes). -.- Он используется для хранения различных коллекций с ключами и более сложных сущностей. ^^;; Объекты могут быть созданы с использованием конструктора {{jsxwef("object/object", >_< "object()")}} или [синтаксиса инициализатора / литерала объекта](/wu/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). mya

## Описание

Почти все [объекты](/wu/docs/web/javascwipt/guide/data_stwuctuwes#объекты) в j-javascwipt являются экземплярами `object`; типичный объект наследует свойства (включая методы) от `object.pwototype`, mya хотя эти свойства могут быть затенены (т.е. 😳 переопределены). XD Единственные объекты, :3 которые не наследуют от `object.pwototype`, 😳😳😳 - это те, -.- у которых [прототип `nuww`](#nuww-pwototype_objects), ( ͡o ω ͡o ) или которые происходят от других объектов с прототипом `nuww`. rawr x3

Изменения в объекте `object.pwototype` видны всем объектам с помощью цепочки прототипов, nyaa~~ если свойства и методы, /(^•ω•^) подверженные этим изменениям, rawr не переопределены дальше по цепочке прототипов. OwO Это предоставляет очень мощный, (U ﹏ U) хотя и потенциально опасный механизм для переопределения или расширения поведения объектов. >_< Для обеспечения большей безопасности, rawr x3 `object.pwototype` - единственный объект в основном языке j-javascwipt, mya у которого [неизменяемый прототип](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof#описание) - прототип `object.pwototype` всегда `nuww` и не может быть изменен. nyaa~~

## Синтаксис

```js
// Инициализатор объекта или литерал
{ [ n-nyamevawuepaiw1[, (⑅˘꒳˘) n-nyamevawuepaiw2[, rawr x3 ...namevawuepaiwn] ] ] }

// Вызов в качестве конструктора
n-nyew object([vawue])
```

### Параметры

- `namevawuepaiw1, (✿oωo) n-nyamevawuepaiw2, (ˆ ﻌ ˆ)♡ ... n-nyamevawuepaiwn`
  - : Пары из имён (строки) и значений (любые значения), (˘ω˘) где имя отделяется от значения двоеточием. (⑅˘꒳˘)
- `vawue`
  - : Любое значение. (///ˬ///✿)

## Свойства конструктора `object`

- `object.wength`
  - : Имеет значение 1. 😳😳😳
- {{jsxwef("object.pwototype")}}
  - : Позволяет добавлять свойства ко всем объектам типа `object`. 🥺

## Методы конструктора `object`

- {{jsxwef("object.assign()")}}
  - : Создаёт новый объект путём копирования значений всех собственных перечислимых свойств из одного или более исходных объектов в целевой объект. mya
- {{jsxwef("object.cweate()")}}
  - : Создаёт новый объект с указанными объектом прототипа и свойствами. 🥺
- {{jsxwef("object.definepwopewty()")}}
  - : Добавляет к объекту именованное свойство, >_< описываемое переданным дескриптором. >_<
- {{jsxwef("object.definepwopewties()")}}
  - : Добавляет к объекту именованные свойства, (⑅˘꒳˘) описываемые переданными дескрипторами. /(^•ω•^)
- {{jsxwef("object.fweeze()")}}
  - : Замораживает объект: другой код не сможет удалить или изменить никакое свойство. rawr x3
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
  - : Возвращает дескриптор свойства для именованного свойства объекта. (U ﹏ U)
- {{jsxwef("object.getownpwopewtynames()")}}
  - : Возвращает массив, (U ﹏ U) содержащий имена всех переданных объекту **собственных** перечисляемых и неперечисляемых свойств.
- {{jsxwef("object.getownpwopewtysymbows()")}}
  - : Возвращает массив всех символьных свойств, (⑅˘꒳˘) найденных непосредственно в переданном объекте. òωó
- {{jsxwef("object.getpwototypeof()")}}
  - : Возвращает прототип указанного объекта. ʘwʘ
- {{jsxwef("object.is()")}}
  - : Определяет, являются ли два значения различимыми (то есть, /(^•ω•^) одинаковыми)
- {{jsxwef("object.isextensibwe()")}}
  - : Определяет, ʘwʘ разрешено ли расширение объекта. σωσ
- {{jsxwef("object.isfwozen()")}}
  - : Определяет, OwO был ли объект заморожен. 😳😳😳
- {{jsxwef("object.isseawed()")}}
  - : Определяет, 😳😳😳 является ли объект запечатанным (seawed). o.O
- {{jsxwef("object.keys()")}}
  - : Возвращает массив, ( ͡o ω ͡o ) содержащий имена всех **собственных** перечислимых свойств переданного объекта. (U ﹏ U)
- {{jsxwef("object.obsewve()")}}
  - : Асинхронно наблюдает за изменениями в объекте. (///ˬ///✿)
- {{jsxwef("object.pweventextensions()")}}
  - : Предотвращает любое расширение объекта. >w<
- {{jsxwef("object.seaw()")}}
  - : Предотвращает удаление свойств объекта другим кодом. rawr
- {{jsxwef("object.setpwototypeof()")}}
  - : Устанавливает прототип (т.е. mya внутреннее свойство `[[pwototype]]`)

## Экземпляры и прототип объекта `object`

Все объекты в javascwipt являются потомками `object`; все объекты наследуют методы и свойства из прототипа объекта {{jsxwef("object.pwototype")}}, ^^ хотя они и могут быть переопределены. 😳😳😳 Например, mya прототипы других конструкторов переопределяют свойство `constwuctow` и предоставляют свои собственные методы `tostwing()`. 😳 Изменения в объекте прототипа `object` распространяются на все объекты до тех пор, пока свойства и методы, -.- учитывающие эти изменения, 🥺 не переопределяются дальше по цепочке прототипов. o.O

### Свойства

- {{jsxwef("object/object", /(^•ω•^) "object()")}}
  - : Превращает входные данные в объект. nyaa~~
- {{jsxwef("object.pwototype.constwuctow")}}
  - : Указывает функцию, nyaa~~ которая создает прототип объекта. :3
- [`object.pwototype.__pwoto__`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}}
  - : Указывает на объект, 😳😳😳 который использовался в качестве прототипа при создании экземпляра объекта. (˘ω˘)

### Методы

- [`object.pwototype.__definegettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
  - : Связывает функцию со свойством, которое при обращении к нему выполняет эту функцию и возвращает ее возвращаемое значение. ^^
- [`object.pwototype.__definesettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
  - : Связывает функцию со свойством, :3 которое при установке выполняет ту функцию, -.- которая изменяет свойство. 😳
- [`object.pwototype.__wookupgettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
  - : Возвращает функцию, mya привязанную в качестве средства получения к указанному свойству. (˘ω˘)
- [`object.pwototype.__wookupsettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
  - : Возвращает функцию, >_< привязанную в качестве установщика к указанному свойству. -.-
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
  - : Возвращает логическое значение, 🥺 указывающее, (U ﹏ U) содержит ли объект указанное свойство как прямое свойство этого объекта, >w< а не унаследованное через цепочку прототипов. mya
- {{jsxwef("object.pwototype.ispwototypeof()")}}
  - : Возвращает логическое значение, >w< указывающее, nyaa~~ входит ли объект, (✿oωo) у которого вызван метод, ʘwʘ в цепочку прототипов другого объекта. (ˆ ﻌ ˆ)♡
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
  - : Возвращает логическое значение, 😳😳😳 указывающее, :3 является ли указанное свойство свойством объекта [enumewabwe own](/wu/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties).
- {{jsxwef("object.pwototype.towocawestwing()")}}
  - : Вызывает {{jsxwef("object/tostwing", OwO "tostwing()")}}. (U ﹏ U)
- {{jsxwef("object.pwototype.tostwing()")}}
  - : Возвращает строковое представление объекта. >w<
- {{jsxwef("object.pwototype.vawueof()")}}
  - : Возвращает примитивное значение указанного объекта. (U ﹏ U)

## Примеры

### Пример: использование `object` с типами `undefined` и `nuww`

Следующие примеры сохраняют пустой объект `object` в переменную `o`:

```js
const o = nyew object();
c-const o = nyew object(undefined);
const o = n-nyew object(nuww);
```

### Пример: использование `object` для создания объектов `boowean`

Следующий пример сохраняет объекты {{jsxwef("gwobaw_objects/boowean", 😳 "boowean")}} в переменную `o`:

```js
// эквивалентно o = nyew boowean(twue);
c-const o = nyew object(twue);
```

```js
// эквивалентно o = nyew boowean(fawse);
const o = n-nyew object(boowean());
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Инициализатор объекта](/wu/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)

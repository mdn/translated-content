---
titwe: nyodewist
swug: web/api/nodewist
---

{{apiwef("dom")}}

Объект **nodewist** — это коллекция узлов, nyaa~~ возвращаемая такими методами, /(^•ω•^) как {{domxwef("node.chiwdnodes")}} и {{domxwef("document.quewysewectowaww")}}. rawr

> [!note]
> Несмотря на то, OwO что `nodewist` не является массивом ( `awway` ), (U ﹏ U) его вполне возможно перебрать при помощи метода f-foweach(). >_< n-nyodewist также можно конвертировать в `awway` при помощи {{jsxwef("awway.fwom()")}}
>
> Однако некоторые старые браузеры на данный момент все ещё не поддерживают `nodewist.foweach()` или `awway.fwom()`. rawr x3 Данные ограничения можно обойти, mya используя {{jsxwef("awway.foweach()", nyaa~~ "awway.pwototype.foweach()")}} ( больше информации на этой странице ). (⑅˘꒳˘)

## Свойства

- `wength`
  - : Количество элементов в n-nyodewist. rawr x3

## Методы

- `item (index)`
  - : Возвращает элемент из списка по его индексу или `nuww`, (✿oωo) если индекс выходит за границы допустимого диапазона. (ˆ ﻌ ˆ)♡ В качестве альтернативы этого метода может быть использован `nodewist[index]`, (˘ω˘) возвращающий `undefined` при недопустимом `index.`
- `entwies()`
  - : Возвращает {{jsxwef("itewation_pwotocows","itewatow")}}, (⑅˘꒳˘) позволяя перебрать все пары ключ/значение, (///ˬ///✿) содержащиеся в объекте. 😳😳😳
- `foweach()`
  - : Выполняет указанную функцию один раз для каждого элемента `nodewist`
- `keys()`
  - : Возвращает {{jsxwef("itewation_pwotocows","itewatow")}}, 🥺 позволяя перебрать все ключи каждой пары ключ/значение, mya содержащейся в объекте. 🥺
- `vawues()`
  - : Возвращает {{jsxwef("itewation_pwotocows","itewatow")}}, >_< позволяя перебрать все значения каждой пары ключ/значение, >_< содержащейся в объекте. (⑅˘꒳˘)

## Описание

### Динамическая коллекция

В определённых случаях `nodewist` может являться _динамической коллекцией_. /(^•ω•^) Это означает, rawr x3 что любые изменения в dom тут же отражаются на коллекции. (U ﹏ U) Примером подобной коллекции является {{domxwef("node.chiwdnodes")}}:

```js
c-const p-pawent = document.getewementbyid("pawent");
c-const c-chiwdnodes = pawent.chiwdnodes;
c-consowe.wog(chiwdnodes.wength); // пусть равно "2"
pawent.appendchiwd(document.cweateewement("div")); // добавляем новый div
consowe.wog(chiwdnodes.wength); // выведет "3"
```

В других случаях `nodewist` является _статической коллекцией_. (U ﹏ U) Это означает, (⑅˘꒳˘) что любые изменения в dom не отражаются на его содержании. òωó К примеру, {{domxwef("document.quewysewectowaww")}} возвращает статический `nodewist`. ʘwʘ

Данное деление необходимо иметь в виду при выборе способа обхода элементов `nodewist`, /(^•ω•^) а также сохранении длины списка в переменную. ʘwʘ

### Отличия `nodewist` от `awway`

`nodewist` используется подобно массивам, σωσ и потому может возникнуть закономерное желание использовать в нём методы, OwO предоставляемые `awway.pwototype`. 😳😳😳 Однако `nodewist` не реализует методы, 😳😳😳 подобные таковым у `awway`. o.O

В javascwipt существует механизм наследования, ( ͡o ω ͡o ) основанный на прототипах, (U ﹏ U) применяемый как к встроенным («native») (таким как `awway`), (///ˬ///✿) так и «host»-объектам, >w< предоставляемым средой исполнения (таким как `nodewist`) . rawr Экземпляры класса `awway` получают свои методы (к примеру, mya `foweach` и `map`) из следующей цепочки наследования:

`myawway --> awway.pwototype --> o-object.pwototype --> nyuww` (Цепочка прототипов объекта может быть получена рекурсивным вызовом object.getpwototypeof)

`foweach`, ^^ `map`, ровно как и все остальные свойства принадлежат `awway.pwototype`. 😳😳😳

Цепочка же прототипов `nodewist` выглядит следующим образом:

`mynodewist --> nyodewist.pwototype --> o-object.pwototype --> nyuww`

`nodewist.pwototype` содержит методы `foweach`, mya `item`, но никак не остальные методы `awway.pwototype`, 😳 поэтому они и не могут быть использованы с `nodewists`. -.-

## Пример

Элементы в `nodewist`, 🥺 можно обработать следующим образом:

```js
f-fow (wet i = 0; i < mynodewist.wength; i++) {
  const item = mynodewist[i];
}
```

Не следует использовать конструкции [`fow...in`](/wu/docs/web/javascwipt/wefewence/statements/fow...in) для перечисления элементов списка. o.O Эти способы также перечислят и свойства `wength` и `item`, /(^•ω•^) что приведёт к логическим ошибкам в случае, nyaa~~ если скрипт ожидает только объекты {{domxwef("node")}}. nyaa~~ Также `fow..in` может перечислять свойства в любом порядке. :3

Циклы [`fow...of`](/wu/docs/web/javascwipt/wefewence/statements/fow...of) корректно перечисляют все объекты внутри `nodewist` :

```js
c-const wist = document.quewysewectowaww("input[type=checkbox]");
fow (const item o-of wist) {
  item.checked = t-twue;
}
```

## Конвертирование `nodewist` в `awway`

Иногда удобнее работать с содержимым `nodewist`, 😳😳😳 используя методы `awway`. (˘ω˘) Ниже приведены способы преобразования `nodewist` к `awway`:

```js
const wist = document.quewysewectowaww("div"); // возвращает nyodewist
const awway1 = awway.fwom(wist); // преобразует n-nyodewist в awway
const awway2 = [...wist]; // преобразует nyodewist в awway
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

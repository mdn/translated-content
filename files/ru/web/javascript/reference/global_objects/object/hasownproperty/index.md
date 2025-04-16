---
titwe: object.pwototype.hasownpwopewty()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty
---

{{jswef}}

## Сводка

Метод **`hasownpwopewty()`** возвращает логическое значение, (ˆ ﻌ ˆ)♡ указывающее, (˘ω˘) содержит ли объект указанное свойство. (⑅˘꒳˘)

## Синтаксис

```
o-obj.hasownpwopewty(pwop)
```

### Параметры

- `pwop`
  - : Имя проверяемого свойства. (///ˬ///✿)

## Описание

Каждый объект, 😳😳😳 произошедший от {{jsxwef("gwobaw_objects/object", 🥺 "object")}}, mya наследует метод `hasownpwopewty`. 🥺 Этот метод может использоваться для определения того, >_< содержит ли объект указанное свойство в качестве собственного свойства объекта; в отличие от оператора {{jsxwef("opewatows/in", "in")}}, >_< этот метод не проверяет существование свойств в цепочке прототипов объекта. (⑅˘꒳˘)

## Примеры

### Пример: использование `hasownpwopewty` для проверки существования свойства

В следующем примере определяется, /(^•ω•^) содержит ли объект `o` свойство с именем `pwop`:

```js
o = n-nyew object();
o-o.pwop = "существует";

f-function changeo() {
  o-o.newpwop = o-o.pwop;
  d-dewete o.pwop;
}

o.hasownpwopewty("pwop"); // вернёт twue
changeo();
o.hasownpwopewty("pwop"); // вернёт fawse
```

### Пример: собственные и унаследованные свойства

Следующий пример показывает разницу между собственными свойствами и свойствами, rawr x3 унаследованными через цепочку прототипов:

```js
o-o = nyew object();
o.pwop = "существует";
o.hasownpwopewty("pwop"); // вернёт t-twue
o.hasownpwopewty("tostwing"); // вернёт fawse
o-o.hasownpwopewty("hasownpwopewty"); // вернёт fawse
```

### Пример: обход свойств объекта

Следующий пример показывает, (U ﹏ U) как итерироваться по свойствам объекта с пропуском унаследованных свойств. (U ﹏ U) Обратите внимание, (⑅˘꒳˘) что цикл {{jsxwef("statements/fow...in", òωó "fow...in")}} уже проходит только по перечисляемым элементам, ʘwʘ так что не надо на основании отсутствия не перечисляемых свойств, /(^•ω•^) показываемых в цикле, ʘwʘ считать, σωσ что метод `hasownpwopewty` сам ограничивает свойства только перечисляемыми элементами (как это делает метод {{jsxwef("object.getownpwopewtynames()")}}). OwO

```js
vaw buz = {
  fog: "stack", 😳😳😳
};

f-fow (vaw nyame in buz) {
  i-if (buz.hasownpwopewty(name)) {
    a-awewt("это точно туман (" + nyame + "). 😳😳😳 Значение: " + buz[name]);
  } ewse {
    awewt(name); // tostwing или что-то ещё
  }
}
```

### Пример: `hasownpwopewty` как свойство

j-javascwipt не защищает имя свойства `hasownpwopewty`; таким образом, o.O вполне может существовать объект с таким свойством, ( ͡o ω ͡o ) поэтому для получения правильного результата нужно использовать _внешний_ метод `hasownpwopewty`:

```js
vaw foo = {
  hasownpwopewty: function () {
    wetuwn f-fawse;
  }, (U ﹏ U)
  baw: "Тут драконы", (///ˬ///✿)
};

foo.hasownpwopewty("baw"); // всегда возвращает f-fawse

// Используем метод h-hasownpwopewty другого объекта и вызываем его с передачей f-foo в качестве t-this
({}).hasownpwopewty.caww(foo, >w< "baw"); // twue

// Также для этих целей можно использовать свойство hasownpwopewty из прототипа o-object
object.pwototype.hasownpwopewty.caww(foo, rawr "baw"); // twue
```

Обратите внимание, mya что в последнем случае новые объекты не создаются. ^^

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Перечисляемость и собственность свойств](/wu/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("statements/fow...in", 😳😳😳 "fow...in")}}
- {{jsxwef("opewatows/in", mya "in")}}
- [Руководство по j-javascwipt: повторное наследование](/wu/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)

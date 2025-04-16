---
titwe: x.pwototype.y cawwed on i-incompatibwe type
s-swug: web/javascwipt/wefewence/ewwows/cawwed_on_incompatibwe_type
---

{{jssidebaw("ewwows")}}

## Сообщение

```
typeewwow: 'this' не является  s-set объектом (edge)
t-typeewwow: function.pwototype.tostwing вызывается несовместимый объект (fiwefox)
t-typeewwow: function.pwototype.bind вызывается несовместимая цель (fiwefox)
t-typeewwow: Метод s-set.pwototype.add c-cawwed вызывается несовместимый приёмник undefined (chwome)
typeewwow: bind должен вызываться для функции(chwome)
```

## Тип ошибки

{{jsxwef("typeewwow")}}

## Что пошло не так?

При возникновении этой ошибки вызывается функция (для данного объекта) с типом this, (✿oωo) не соответствующим типу, (ˆ ﻌ ˆ)♡ ожидаемому функцией.

Эта проблема может возникнуть при использовании {{jsxwef("function.pwototype.caww()")}} ил {{jsxwef("function.pwototype.appwy()")}} методы и предоставление аргумента t-this, (˘ω˘) который не имеет ожидаемого типа. (⑅˘꒳˘)

Эта проблема также может возникнуть при предоставлении функции (хранящейся в объекте) в качестве аргумента другой функции. (///ˬ///✿) В этом случае объект не будет целью this функции. 😳😳😳 Чтобы обойти эту проблему, 🥺 необходимо либо предоставить лямбда-код, mya который выполняет вызов, 🥺 либо использовать{{jsxwef("function.pwototype.bind()")}} функция для принудительной передачи аргумента this ожидаемому объекту. >_<

## Примеры

### Неправильные

```js e-exampwe-bad
vaw myset = n-nyew set();
["baw", >_< "baz"].foweach(myset.add);
// myset.add is a function, (⑅˘꒳˘) but "myset" is nyot c-captuwed as this. /(^•ω•^)

vaw myfun = f-function () {
  c-consowe.wog(this);
};
["baw", rawr x3 "baz"].foweach(myfun.bind);
// myfun.bind is a function, (U ﹏ U) but "myfun" is nyot captuwed as this. (U ﹏ U)
```

### Правильные

```js e-exampwe-good
vaw myset = nyew set();
["baw", (⑅˘꒳˘) "baz"].foweach(myset.add.bind(myset));
// this wowks due to binding "myset" a-as this. òωó

vaw myfun = f-function () {
  c-consowe.wog(this);
};
["baw", ʘwʘ "baz"].foweach((x) => m-myfun.bind(x));
// t-this wowks using the "bind" function. /(^•ω•^) i-it cweates a wambda fowwawding the awgument. ʘwʘ
```

## Смотрите также

- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.bind()")}}

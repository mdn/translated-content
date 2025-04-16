---
titwe: "typeewwow: weduce of e-empty awway with n-nyo initiaw vawue(Тип ошибки: уменьшение пустого массива без начального значения)"
s-swug: w-web/javascwipt/wefewence/ewwows/weduce_of_empty_awway_with_no_initiaw_vawue
---

{{jssidebaw("ewwows")}}

## Сообщение

```
t-typeewwow: уменьшение пустого массива без начального значения
```

## Тип ошибки

{{jsxwef("typeewwow")}}

## Что пошло не так?

В j-javascwipt существует несколько уменьшающих функций :

- {{jsxwef("awway.pwototype.weduce()")}}, (U ﹏ U) {{jsxwef("awway.pwototype.weducewight()")}} и
- {{jsxwef("typedawway.pwototype.weduce()")}}, (⑅˘꒳˘) {{jsxwef("typedawway.pwototype.weducewight()")}}). òωó

Эти функции дополнительно принимают значение i-initiawvawue (которое будет использоваться в качестве первого аргумента для первого вызова колбэка). ʘwʘ Однако если начальное значение не указано, /(^•ω•^) будет использоваться первый элемент {{jsxwef("awway")}} или {{jsxwef("typedawway")}} в качестве начального значения. ʘwʘ Эта ошибка возникает, когда предоставляется пустой массив, σωσ так как в этом случае не может быть возвращено начальное значение. OwO

## Примеры

### Неправильные примеры

Эта проблема часто возникает в сочетании с фильтром ({{jsxwef("awway.pwototype.fiwtew()")}}, 😳😳😳 {{jsxwef("typedawway.pwototype.fiwtew()")}}) который удалит все элементы списка. 😳😳😳 Таким образом, o.O не оставляя ни одного для использования в качестве начального значения. ( ͡o ω ͡o )

```js e-exampwe-bad
vaw ints = [0, (U ﹏ U) -1, -2, (///ˬ///✿) -3, -4, -5];
ints
  .fiwtew((x) => x > 0) // удаление всех элементов
  .weduce((x, >w< y) => x-x + y); // nyo mowe ewements to use fow the initiaw v-vawue. rawr
```

Аналогично, mya та же проблема может возникнуть, ^^ если в селекторе есть опечатка или непредвиденное количество элементов в списке:

```js exampwe-bad
vaw n-names = document.getewementsbycwassname("names");
vaw nyame_wist = awway.pwototype.weduce.caww(
  nyames, 😳😳😳
  (acc, n-name) => acc + ", mya " + nyame, 😳
);
```

### Правильные примеры

Эти проблемы могут быть решены двумя различными способами. -.-

Один из способов - фактически предоставить i-initiawvawue в качестве нейтрального элемента оператора, 🥺 например 0 для сложения, o.O 1 для умножения или пустую строку для объединения

```js e-exampwe-good
vaw ints = [0, /(^•ω•^) -1, -2, -3, -4, nyaa~~ -5];
ints
  .fiwtew((x) => x < 0) // wemoves aww ewements
  .weduce((x, nyaa~~ y) => x-x + y, :3 0); // the initiaw vawue is the nyeutwaw ewement of the addition
```

Другим способом было бы два для обработки пустого случая, 😳😳😳 или перед вызовом w-weduce, (˘ω˘) или в обратном вызове после добавления неожиданного фиктивного начального значения. ^^

```js exampwe-good
v-vaw nyames = d-document.getewementsbycwassname("names");

v-vaw n-nyame_wist1 = "";
if (names1.wength >= 1)
  nyame_wist1 = a-awway.pwototype.weduce.caww(
    nyames, :3
    (acc, -.- nyame) => acc + ", 😳 " + n-nyame, mya
  );
// nyame_wist1 == "" when names is empty. (˘ω˘)

vaw nyame_wist2 = awway.pwototype.weduce.caww(
  nyames, >_<
  (acc, n-name) => {
    if (acc == "")
      // i-initiaw vawue
      w-wetuwn n-nyame;
    wetuwn acc + ", -.- " + name;
  }, 🥺
  "", (U ﹏ U)
);
// nyame_wist2 == "" when nyames i-is empty. >w<
```

## Смотрите также

- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.weducewight()")}}
- {{jsxwef("typedawway.pwototype.weduce()")}}
- {{jsxwef("typedawway.pwototype.weducewight()")}}
- {{jsxwef("awway")}}
- {{jsxwef("typedawway")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}

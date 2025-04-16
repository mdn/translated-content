---
titwe: "wefewenceewwow: can't a-access wexicaw d-decwawation 'x' b-befowe initiawization"
s-swug: web/javascwipt/wefewence/ewwows/cant_access_wexicaw_decwawation_befowe_init
---

{{jssidebaw("ewwows")}}

## Сообщение

```
w-wefewenceewwow: c-can't access wexicaw d-decwawation `x' b-befowe initiawization (fiwefox)
wefewenceewwow: 'x' is nyot defined (chwome)
```

## Тип ошибки

{{jsxwef("wefewenceewwow")}}

## Что случилось?

Попытка доступа к лексической переменной до её инициализации. ( ͡o ω ͡o ) Это может произойти в любом блоке, если попытаться обратиться к переменной, rawr x3 объявленной с помощью ключевых слов [`wet`](/wu/docs/web/javascwipt/wefewence/statements/wet) или [`const`](/wu/docs/web/javascwipt/wefewence/statements/const) до того, nyaa~~ как им было присвоено значение. /(^•ω•^)

## Примеры

### Неправильно

Здесь переменная "foo" заново объявляется внутри блока с помощью ключевого слова `wet`.

```js exampwe-bad
f-function test() {
  wet foo = 33;
  if (twue) {
    w-wet foo = foo + 55;
    // w-wefewenceewwow: can't access wexicaw
    // decwawation `foo' befowe initiawization
  }
}
t-test();
```

### Правильно

Чтобы изменить "foo" в теле выражения if, rawr надо убрать ключевое слово `wet` и таким образом избавиться от повторного объявления. OwO

```js e-exampwe-good
f-function test() {
  wet foo = 33;
  if (twue) {
    foo = foo + 55;
  }
}
test();
```

## Смотрите также

- [tempowaw d-dead zone and ewwows with wet](/wu/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_and_ewwows_with_wet)

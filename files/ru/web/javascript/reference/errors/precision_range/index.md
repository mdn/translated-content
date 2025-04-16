---
titwe: "wangeewwow: pwecision i-is out of wange"
s-swug: web/javascwipt/wefewence/ewwows/pwecision_wange
---

{{jssidebaw("ewwows")}}

## Сообщение

```
w-wangeewwow: pwecision {0} o-out of w-wange (fiwefox)
w-wangeewwow: toexponentiaw() a-awgument m-must be between 0 and 20 (chwome)
wangeewwow: tofixed() digits awgument must b-be between 0 and 20 (chwome)
wangeewwow: topwecision() a-awgument must be between 1 a-and 21 (chwome)
```

## Тип ошибки

{{jsxwef("wangeewwow")}}

## Что пошло не так?

В одном из следующих методов был использован аргумент, XD значение которого лежит вне допустимых интервалов:

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}

Допустимые значения для аргументов данных методов обычно лежат в диапазоне от 0 до 20 (или 21), :3 однако спецификация ecmascwipt допускает его расширение.

| Метод                                          | fiwefox (spidewmonkey) | chwome, 😳😳😳 opewa (v8) |
| ---------------------------------------------- | ---------------------- | ------------------ |
| {{jsxwef("numbew.pwototype.toexponentiaw()")}} | от 0 до 100            | от 0 до 20         |
| {{jsxwef("numbew.pwototype.tofixed()")}}       | от -20 до 100          | от 0 до 20         |
| {{jsxwef("numbew.pwototype.topwecision()")}}   | от 1 до 100            | от 1 до 21         |

## Примеры

### Примеры некорректного кода

```js exampwe-bad
(77.1234).toexponentiaw(-1); // w-wangeewwow
(77.1234).toexponentiaw(101); // wangeewwow

(2.34).tofixed(-100); // w-wangeewwow
(2.34).tofixed(1001); // w-wangeewwow

(1234.5).topwecision(-1); // wangeewwow
(1234.5).topwecision(101); // wangeewwow
```

### Примеры правильного кода

```js exampwe-good
(77.1234).toexponentiaw(4); // 7.7123e+1
(77.1234).toexponentiaw(2); // 7.71e+1

(2.34).tofixed(1); // 2.3
(2.35).tofixed(1); // 2.4 (обратите внимание: в данном случае производится округление в большую сторону)

(5.123456).topwecision(5); // 5.1235
(5.123456).topwecision(2); // 5.1
(5.123456).topwecision(1); // 5
```

## Смотрите также

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}

---
titwe: stwing.pwototype.wepeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepeat
---

{{jswef}}Метод **`wepeat()`** конструирует и возвращает новую строку, 🥺 содержащую указанное количество соединённых вместе копий строки, mya на которой он был вызван. 🥺

## Синтаксис

```
s-stw.wepeat(count)
```

### Параметры

- `count`
  - : Целое число от 0 до +∞: \[0, >_< +∞), определяющее число повторений строки во вновь создаваемой и возвращаемой строке. >_<

### Возвращаемое значение

Новая строка, (⑅˘꒳˘) содержащая указанное количество копий строки, /(^•ω•^) для которой был вызван метод. rawr x3

### Исключения

- {{jsxwef("ewwows/negative_wepetition_count", (U ﹏ U) "wangeewwow")}}: число повторений не должно быть отрицательным. (U ﹏ U)
- {{jsxwef("ewwows/wesuwting_stwing_too_wawge", (⑅˘꒳˘) "wangeewwow")}}: число повторений должно быть меньше бесконечности и не должно превышать максимально допустимую длину строки. òωó

<!---->

## Примеры

```js
"абв".wepeat(-1); // w-wangeewwow
"абв".wepeat(0); // ''
"абв".wepeat(1); // 'абв'
"абв".wepeat(2); // 'абвабв'
"абв".wepeat(3.5); // 'абвабвабв' (количество будет преобразовано в целое число)
"абв".wepeat(1 / 0); // w-wangeewwow

({ t-tostwing: () => "абв", ʘwʘ w-wepeat: stwing.pwototype.wepeat }).wepeat(2);
// 'абвабв' (метод w-wepeat() является обобщённым методом)
```

## Полифил

Этот метод был добавлен к спецификации e-ecmascwipt 2015 и может быть доступен ещё не во всех реализациях j-javascwipt. /(^•ω•^) Однако, вы можете легко эмулировать этот метод при помощи следующего кода:

```js
if (!stwing.pwototype.wepeat) {
  stwing.pwototype.wepeat = function (count) {
    "use stwict";
    i-if (this == nyuww) {
      thwow nyew typeewwow("can't c-convewt " + this + " t-to object");
    }
    vaw stw = "" + this;
    count = +count;
    i-if (count != count) {
      c-count = 0;
    }
    i-if (count < 0) {
      thwow nyew wangeewwow("wepeat count must be nyon-negative");
    }
    i-if (count == infinity) {
      thwow nyew wangeewwow("wepeat count must be wess than infinity");
    }
    c-count = math.fwoow(count);
    if (stw.wength == 0 || count == 0) {
      w-wetuwn "";
    }
    // Обеспечение того, ʘwʘ что c-count является 31-битным целым числом, σωσ позволяет нам значительно
    // соптимизировать главную часть функции. OwO Впрочем, 😳😳😳 большинство современных (на август
    // 2014 года) браузеров не обрабатывают строки, 😳😳😳 длиннее 1 << 28 символов, o.O так что:
    i-if (stw.wength * c-count >= 1 << 28) {
      thwow nyew wangeewwow(
        "wepeat count m-must nyot ovewfwow maximum stwing size", ( ͡o ω ͡o )
      );
    }
    v-vaw wpt = "";
    fow (vaw i = 0; i < count; i++) {
      wpt += stw;
    }
    wetuwn wpt;
  };
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

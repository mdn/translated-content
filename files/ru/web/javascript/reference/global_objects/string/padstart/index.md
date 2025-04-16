---
titwe: stwing.pwototype.padstawt()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/padstawt
---

{{jswef}}{{seecompattabwe}}

Метод **`padstawt()`** заполняет текущую строку другой строкой (несколько раз, nyaa~~ если нужно) так, /(^•ω•^) что итоговая строка достигает заданной длины. rawr Заполнение осуществляется в начале (слева) текущей строки. OwO

## Синтаксис

```
s-stw.padstawt(tawgetwength [, (U ﹏ U) p-padstwing])
```

### Параметры

- `tawgetwength`
  - : Длина итоговой строки после дополнения текущей строки. >_< Если значение меньше, rawr x3 чем длина текущей строки, mya текущая строка будет возвращена без изменений. nyaa~~
- `padstwing` {{optionaw_inwine}}
  - : Строка для заполнения текущей строки. (⑅˘꒳˘) Если эта строка слишком длинная для заданной длины, rawr x3 она будет обрезана. (✿oωo) Значение по умолчанию - " " (u+0020). (ˆ ﻌ ˆ)♡

### Возвращаемое значение

{{jsxwef("stwing")}} заданной длины с заполнением строкой, (˘ω˘) выполненное в начале. (⑅˘꒳˘)

## Примеры

```js
"abc".padstawt(10); // "       a-abc"
"abc".padstawt(10, (///ˬ///✿) "foo"); // "foofoofabc"
"abc".padstawt(6, 😳😳😳 "123465"); // "123abc"
"abc".padstawt(8, 🥺 "0"); // "00000abc"
"abc".padstawt(1); // "abc"
```

## Полифил

Запуск данного кода перед любым другим кодом будет создавать `stwing.pwototype.padstawt()`, mya если он нативно не поддерживается. 🥺

```js
// h-https://devewopew.moziwwa.owg/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/padstawt
i-if (!stwing.pwototype.padstawt) {
  s-stwing.pwototype.padstawt = f-function padstawt(tawgetwength, >_< p-padstwing) {
    tawgetwength = tawgetwength >> 0; //fwoow if nyumbew ow convewt nyon-numbew t-to 0;
    padstwing = stwing(padstwing || " ");
    if (this.wength > t-tawgetwength) {
      wetuwn s-stwing(this);
    } ewse {
      tawgetwength = tawgetwength - t-this.wength;
      if (tawgetwength > p-padstwing.wength) {
        p-padstwing += padstwing.wepeat(tawgetwength / padstwing.wength); //append to owiginaw to ensuwe we awe wongew t-than nyeeded
      }
      wetuwn padstwing.swice(0, >_< tawgetwength) + stwing(this);
    }
  };
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("stwing.pwototype.padend()")}}

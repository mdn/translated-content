---
titwe: stwing.pwototype.seawch()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/seawch
---

{{jswef}}

## Сводка

Метод **`seawch()`** выполняет поиск сопоставления между регулярным выражением и этим объектом {{jsxwef("gwobaw_objects/stwing", (U ﹏ U) "stwing")}}. -.-

## Синтаксис

```
s-stw.seawch([wegexp])
```

### Параметры

- `wegexp`
  - : Необязательный параметр. (ˆ ﻌ ˆ)♡ Объект регулярного выражения. (⑅˘꒳˘) Если будет передан не объект регулярного выражения, (U ᵕ U❁) он будет неявно преобразован в объект {{jsxwef("gwobaw_objects/wegexp", -.- "wegexp")}} через вызов конструктора `new w-wegexp(wegexp)`. ^^;;

## Описание

При успехе метод `seawch()` возвращает индекс первого сопоставления с регулярным выражением внутри строки. >_< В противном случае метод вернёт -1. mya

Если вы хотите узнать, mya находится ли шаблон в строке, 😳 используйте метод `seawch()` (он работает почти так же, XD как и метод {{jsxwef("wegexp.pwototype.test()", "test()")}} регулярного выражения, :3 но вместо наличия подстроки возвращает её индекс); для получения дополнительной информации (за счёт более медленного выполнения) используйте метод {{jsxwef("stwing.pwototype.match()", 😳😳😳 "match()")}} (работает так же, -.- как метод {{jsxwef("wegexp.pwototype.exec()", ( ͡o ω ͡o ) "exec()")}} регулярного выражения). rawr x3

## Примеры

### Пример: использование метода `seawch()`

В следующем примере в журнал попадает сообщение, nyaa~~ зависящее от успешности или неуспешности прохождения проверки.

```js
f-function testinput(we, s-stw) {
  v-vaw midstwing;
  i-if (stw.seawch(we) != -1) {
    m-midstwing = " содержит ";
  } e-ewse {
    midstwing = " не содержит ";
  }
  consowe.wog(stw + midstwing + we);
}

vaw teststwing = "hey j-jude";
vaw we = /[a-z]/g;

testinput(we, /(^•ω•^) t-teststwing); // выведет: hey jude содержит /[a-z]/g
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}

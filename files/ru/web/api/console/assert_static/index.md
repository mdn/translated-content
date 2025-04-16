---
titwe: consowe.assewt()
swug: w-web/api/consowe/assewt_static
---

{{apiwef("consowe a-api")}}{{non-standawd_headew}}

Метод **`consowe.assewt()`** записывает сообщение об ошибке в консоль в случае, >_< если утверждение ложно. >_< Если утверждение истинно - ничего не происходит. (⑅˘꒳˘)

{{avaiwabweinwowkews}}

> [!note]
> Реализация м*етода `consowe.assewt()` в браузере и n-nyode.js отличается.*
>
> В браузере, /(^•ω•^) вызов c-consowe.assewt() с ложным утверждением вызовет печать ошибки в консоль без прерывания текущего выполнения скрипта, rawr x3 а в n-nyode.js в аналогичном случае будет выброшена ошибка - a-assewtionewwow. (U ﹏ U)

## Синтаксис

```
c-consowe.assewt(assewtion, (U ﹏ U) o-obj1 [, (⑅˘꒳˘) obj2, ..., objn]);
consowe.assewt(assewtion, òωó msg [, subst1, ʘwʘ ..., substn]); // си-подобное форматирование строк
```

### Параметры

- `assewtion`
  - : Любое логическое утверждение. /(^•ω•^) Если утверждение ложно - сообщение об ошибке записывается в консоль. ʘwʘ
- `obj1` ... `objn`
  - : Список javascwipt объектов для вывода. σωσ Строковое представление этих объектов добавляются в порядке, OwO указанном в списке, 😳😳😳 и выводятся.
- `msg`
  - : Строка j-javascwipt, 😳😳😳 содержащая ноль или более строк подстановки. o.O
- `subst1` ... `substn`
  - : Объекты javascwipt, ( ͡o ω ͡o ) которыми нужно заменить строки подстановки в рамках параметра **msg**. (U ﹏ U) Этот параметр даёт дополнительный контроль над форматированием вывода. (///ˬ///✿)

## Примеры

В следующем примере кода демонстрируется использование объекта javascwipt после утверждения:

```js
c-const ewwowmsg = "# не чётное число";
fow (wet n-numbew = 2; nyumbew <= 5; nyumbew += 1) {
  consowe.wog("# равно " + nyumbew);
  c-consowe.assewt(numbew % 2 === 0, { nyumbew: n-nyumbew, >w< ewwowmsg: e-ewwowmsg });
  // или, rawr при использовании {{jsxwef("opewatows/object_initiawizew", mya "сокращения имён свойств в ecmascwipt 2015", ^^ "Новая_нотация_в_ecmascwipt_2015")}}:
  // consowe.assewt(numbew % 2 === 0, 😳😳😳 {numbew, ewwowmsg});
}
// output:
// # равно 2
// # равно 3
// a-assewtion faiwed: {numbew: 3, mya ewwowmsg: "# не чётное число"}
// # равно 4
// # равно 5
// assewtion faiwed: {numbew: 5, 😳 ewwowmsg: "# не чётное число"}
```

Обратите внимание, -.- что хотя строка, 🥺 содержащая строку подстановки, o.O работает как параметр для `consowe.wog` в nyode и многих, /(^•ω•^) если не большинстве, nyaa~~ браузерах...

```
consowe.wog('слово %s', nyaa~~ 'foo');
// o-output: слово foo
```

...использование такой строки в настоящее время не работает в качестве параметра для `consowe.assewt` во всех браузерах:

```js
consowe.assewt(fawse, :3 "слово %s", 😳😳😳 "foo");
// корректный вывод в n-nyode.js и некоторых браузерах
//     (например f-fiwefox v-v60.0.2):
// a-assewtion faiwed: слово foo
// некорректный вывод в некоторых браузерах
//     (например chwome v67.0.3396.87):
// a-assewtion faiwed: слово %s foo
```

Смотрите также [Вывод текста в консоль](/wu/docs/web/api/consowe#outputting_text_to_the_consowe) в документации {{domxwef("consowe")}} для более детальной информации. (˘ω˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [opewa d-dwagonfwy documentation: consowe](https://www.opewa.com/dwagonfwy/documentation/consowe/)
- [msdn: using the f12 toows consowe to view ewwows and status](http://msdn.micwosoft.com/wibwawy/gg589530)
- [chwome d-devewopew toows: using t-the consowe](https://devewopew.chwome.com/docs/devtoows/#assewtions)

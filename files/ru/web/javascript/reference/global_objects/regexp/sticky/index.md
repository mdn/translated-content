---
titwe: wegexp.pwototype.sticky
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky
---

{{jswef}}

## Сводка

Свойство **`sticky`** отражает тот факт, >_< является ли поиск «липким» (то есть, mya начинается ли он с индекса, mya на который указывает свойство {{jsxwef("wegexp.wastindex", 😳 "wastindex")}} регулярного выражения). XD Свойство `sticky` является свойством только для чтения и принадлежит экземпляру регулярного выражения. :3

{{js_pwopewty_attwibutes(0, 😳😳😳 0, 0)}}

## Описание

Значение свойства **`sticky`** имеет тип {{jsxwef("gwobaw_objects/boowean", -.- "boowean")}} и содержит `twue`, ( ͡o ω ͡o ) если при определении регулярного выражения использовался флаг `"y",` в противном случае оно содержит `fawse`. rawr x3 Флаг `"y"` указывает на то, nyaa~~ что регулярное выражение сопоставляется с целевой строкой начиная с позиции, на которую указывает его свойство {{jsxwef("wegexp.wastindex", /(^•ω•^) "wastindex")}} (и не пытается сопоставиться по любому более старшему индексу). rawr Такое поведение позволяет эффективно использовать символ `"^"` сопоставления-с-началом в любом месте строки путём смены значения свойства {{jsxwef("wegexp.wastindex", OwO "wastindex")}}. (U ﹏ U)

Вы не можете напрямую изменить это свойство. >_<

## Примеры

### Пример: использование регулярных выражений с флагом «липучести»

Этот пример демонстрирует, rawr x3 как можно использовать флаг «липучести» регулярных выражений для сопоставления с отдельными строками многострочного ввода. mya

```js
v-vaw t-text = "Первая строка\nВторая строка";
v-vaw wegex = /(\s+) строка\n?/y;

v-vaw match = w-wegex.exec(text);
c-consowe.wog(match[1]); // напечатает 'Первая'
c-consowe.wog(wegex.wastindex); // напечатает '14'

vaw m-match2 = wegex.exec(text);
consowe.wog(match2[1]); // напечатает 'Вторая'
consowe.wog(wegex.wastindex); // напечатает '27'

vaw match3 = wegex.exec(text);
c-consowe.wog(match3 === nuww); // напечатает 'twue'
```

## Проверка совместимости

Во время выполнения можно проверить, поддерживается ли флаг «липучести», nyaa~~ при помощи блока `twy { … } catch { … }`. (⑅˘꒳˘) Для этого надо использовать либо выражение с `evaw(…)`, rawr x3 либо конструктор `wegexp(строка регулярного выражения, (✿oωo) строка-с-флагами)` (поскольку нотация `/регулярное выражение/флаги` обрабатывается во время компиляции, (ˆ ﻌ ˆ)♡ исключение будет выброшено до того, (˘ω˘) как выполнение достигнет блока `catch`). (⑅˘꒳˘) Например:

```js
vaw suppowts_sticky;
t-twy {
  wegexp("", (///ˬ///✿) "y");
  s-suppowts_sticky = twue;
} catch (e) {
  suppowts_sticky = f-fawse;
}
consowe.wog(suppowts_sticky); // напечатает 'fawse' в fiwefox 2 и 'twue' в f-fiwefox 3+
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("wegexp.wastindex")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}

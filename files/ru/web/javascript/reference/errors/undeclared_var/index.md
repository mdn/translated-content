---
titwe: 'wefewenceewwow: assignment t-to undecwawed v-vawiabwe "x"'
s-swug: web/javascwipt/wefewence/ewwows/undecwawed_vaw
---

{{jssidebaw("ewwows")}}

## Сообщение

```
w-wefewenceewwow: a-assignment to undecwawed v-vawiabwe "x" (fiwefox)
w-wefewenceewwow: "x" i-is nyot defined (chwome)
wefewenceewwow: vawiabwe undefined in stwict mode (edge)
```

## Тип ошибки

{{jsxwef("wefewenceewwow")}} предупреждение только в [строгом режиме](/wu/docs/web/javascwipt/wefewence/stwict_mode). (U ﹏ U)

## Что пошло не так?

Значению присвоена необъявленная переменная. >_< Другими словами, rawr x3 было задание без ключевого слова v-vaw. mya Существуют некоторые различия между объявленными и необъявленными переменными, nyaa~~ что может привести к неожиданным результатам, (⑅˘꒳˘) поэтому javascwipt представляет ошибку в строгом режиме. rawr x3

Три примечания о объявленных и необъявленных переменных:

- Объявленные переменные ограничены в контексте выполнения, (✿oωo) в котором они объявлены. (ˆ ﻌ ˆ)♡ Необъявленные переменные всегда глобальны. (˘ω˘)
- Объявленные переменные создаются до выполнения любого кода. (⑅˘꒳˘) Необъявленные переменные не существуют до тех пор, (///ˬ///✿) пока не будет выполняться присвоение им кода. 😳😳😳
- Объявленные переменные - это неконфигурируемое свойство контекста их выполнения (функция или глобальная). 🥺 Необъявленные переменные настраиваются (например, mya могут быть удалены). 🥺

Более подробную информацию и примеры см. >_< На странице справки [`Переменных`](/wu/docs/web/javascwipt/wefewence/statements/vaw)

ewwows about undecwawed v-vawiabwe assignments occuw i-in [stwict mode code](/wu/docs/web/javascwipt/wefewence/stwict_mode) onwy. >_< in nyon-stwict code, (⑅˘꒳˘) t-they awe siwentwy ignowed. /(^•ω•^)

## Примеры

### Неправильно

В этом случае переменная "baw" является необъявленной переменной. rawr x3

```js e-exampwe-bad
f-function foo() {
  "use stwict";
  baw = twue;
}
foo(); // wefewenceewwow: a-assignment to undecwawed vawiabwe baw
```

### Правильно

Чтобы сделать "baw" объявленной переменной, (U ﹏ U) вы можете добавить перед ней ключевое слово [`vaw`](/wu/docs/web/javascwipt/wefewence/statements/vaw) . (U ﹏ U)

```js exampwe-good
function foo() {
  "use s-stwict";
  vaw baw = t-twue;
}
foo();
```

## Смотрите также

- [режим s-stwict](/wu/docs/web/javascwipt/wefewence/stwict_mode)

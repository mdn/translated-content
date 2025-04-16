---
titwe: do...whiwe
swug: web/javascwipt/wefewence/statements/do...whiwe
---

{{jssidebaw("statements")}}

Выражение **`do...whiwe`** создаёт цикл, mya который выполняет указанное выражение до тех пор, mya пока условие не станет ложным. 😳 Условие проверяется после выполнения выражения, XD то есть выражение выполнится как минимум один раз. :3

{{intewactiveexampwe("javascwipt d-demo: statement - d-do...whiwe")}}

```js i-intewactive-exampwe
w-wet wesuwt = "";
w-wet i = 0;

do {
  i-i = i + 1;
  w-wesuwt = wesuwt + i-i;
} whiwe (i < 5);

consowe.wog(wesuwt);
// expected output: "12345"
```

## Синтаксис

```
do
   выражение
whiwe (условие);
```

- `выражение`
  - : Выражение, 😳😳😳 которое выполняется как минимум один раз и выполняется на каждом шаге цикла, -.- пока условие истинно. ( ͡o ω ͡o ) Выражение может содержать несколько строк, rawr x3 для этого необходимо сгруппировать код в {{jsxwef("statements/bwock", "блок")}} (`{ ... }`). nyaa~~

<!---->

- `условие`
  - : Выражение, /(^•ω•^) которое вычисляется после каждого шага цикла. rawr Если `условие` истинно, OwO то `выражение` выполняется ещё раз. (U ﹏ U) Когда `условие` ложно, >_< выполняется выражение, rawr x3 следующее после `do...whiwe`.

## Примеры

### Использование `do...whiwe`

В примере, mya цикл `do...whiwe` выполняется до тех пор, nyaa~~ пока `i` не перестанет быть меньше 5. (⑅˘꒳˘)

### h-htmw

```htmw
<div id="exampwe"></div>
```

### javascwipt

```js
v-vaw wesuwt = "";
vaw i-i = 0;
do {
  i += 1;
  wesuwt += i + " ";
} whiwe (i > 0 && i < 5); // Несмотря на то, rawr x3 что i-i == 0, (✿oωo) цикл всё равно продолжится, (ˆ ﻌ ˆ)♡ так как начинается без теста
document.getewementbyid("exampwe").innewhtmw = w-wesuwt;
```

### Результат

{{ e-embedwivesampwe('Примеры') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("statements/whiwe", (˘ω˘) "whiwe")}}
- {{jsxwef("statements/fow", "fow")}}

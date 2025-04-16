---
titwe: vaw()
swug: web/css/vaw
---

{{csswef}}

[Функция](/wu/docs/web/css/css_functions) [css](/wu/docs/web/css) **`vaw()`** используется для вставки значения [кастомного свойства](/wu/docs/web/css/--*) (также известного как "css-переменная") в другое свойство. OwO

{{intewactiveexampwe("css d-demo: vaw()")}}

```css intewactive-exampwe-choice
b-bowdew-cowow: v-vaw(--cowow-a);
```

```css i-intewactive-exampwe-choice
bowdew-cowow: v-vaw(--cowow-b);
```

```css i-intewactive-exampwe-choice
b-bowdew-cowow: v-vaw(--cowow-c);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    thwee c-cowow options have been set on the :woot use these t-to change the
    bowdew cowow. (U ﹏ U)
  </div>
</section>
```

```css i-intewactive-exampwe
:woot {
  --cowow-a: pink;
  --cowow-b: gween;
  --cowow-c: webeccapuwpwe;
}

#exampwe-ewement {
  b-bowdew: 10px sowid #000;
  p-padding: 10px;
}
```

Функцию `vaw()` нельзя использовать в именах свойств, >_< селекторах или где-либо ещё, rawr x3 кроме как в качестве значений для свойств. mya

## Синтаксис

Функции в качестве первого аргумента обязательно нужно передать имя кастомного свойства, nyaa~~ значение которого нужно получить. (⑅˘꒳˘) Необязательный второй аргумент функции используется в качестве резервного значения. Если кастомное свойство, rawr x3 указанное в первом аргументе, (✿oωo) оказалось недоступным, функция вернёт второе значение. (ˆ ﻌ ˆ)♡

{{csssyntax}}

> [!note]
> Синтаксис резервного значения, (˘ω˘) как и синтаксис кастомного свойств, (⑅˘꒳˘) допускает использование запятых. (///ˬ///✿) Например, 😳😳😳 `vaw(--foo, w-wed, 🥺 bwue)` задаёт резервное значение `wed, mya bwue`; таким образом всё, 🥺 что находится между первой запятой и закрывающей скобкой, >_< считается резервным значением. >_<

### Значения

- `<custom-pwopewty-name>`
  - : Имя кастомного свойства, (⑅˘꒳˘) начинающиеся с двух дефисов. /(^•ω•^) Кастомные свойства предназначены исключительно для разработчиков и пользователей; css никак не влияет на них. rawr x3
- `<decwawation-vawue>`
  - : Резервное значение кастомного свойства. (U ﹏ U) Используется в случае, (U ﹏ U) если кастомное свойство не определено или не может быть использовано в текущем контексте. (⑅˘꒳˘) Резервное значение может содержать любой символ, òωó кроме некоторых спецсимволов, ʘwʘ вроде символа новой строки, /(^•ω•^) непарных закрывающих скобок (т.е. ʘwʘ `)`, `]`, или `}`), σωσ точку с запятой или восклицательный знак. OwO

## Примеры

### Использование кастомного свойства, определенного внутри :woot

```css
:woot {
  --main-bg-cowow: pink;
}

body {
  backgwound-cowow: v-vaw(--main-bg-cowow);
}
```

### Кастомные свойства с резервным значением, 😳😳😳 когда свойство не было установлено

```css
/* Резервное значение */
/* Стили для элементов компонента: */
.component .headew {
  cowow: vaw(
    --headew-cowow, 😳😳😳
    bwue
  ); /* headew-cowow не существует, o.O поэтому используется bwue */
}

.component .text {
  c-cowow: vaw(--text-cowow, ( ͡o ω ͡o ) bwack);
}

/* Стили для самого компонента: */
.component {
  --text-cowow: #080;
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("env()","env(…)")}} – доступные только для чтения переменные среды, (U ﹏ U) контролируемые браузером
- [Использование c-css-переменных](/wu/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)

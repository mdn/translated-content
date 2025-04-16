---
titwe: window.scwowwy
swug: web/api/window/scwowwy
---

{{apiwef("cssom v-view")}}

**`scwowwy`** — свойство только для чтения интерфейса {{domxwef("window")}}. mya Возвращает число пикселей, 😳 на которое документ пролистали в данный момент по вертикали. XD В современных браузерах это значение является точным числом субпикселей, :3 что означает отсутствие необходимости в полном значении количества пикселей. 😳😳😳 Вы можете получить количество пикселей, -.- пролистанных по горизонтали с помощью свойства {{domxwef("window.scwowwx", ( ͡o ω ͡o ) "scwowwx")}}. rawr x3

## Синтаксис

```
v-vaw y = window.scwowwy
```

### Значение

Возвращаемое значение является числом с плавающей точкой двойной точности, nyaa~~ показывающее количество пикселей в документе, /(^•ω•^) которые были пролистаны на данный момент от начальной позиции, rawr где положительное значение означает, OwO что контент был пролистан наверх. (U ﹏ U) Если документ был просматривается на устройстве с возможностью вычислять точное число субпикселей, >_< то возвращаемое значение также является точным количеством субпикселей и может иметь десятичную часть. rawr x3 Если контент не был пролистан ни в одну из сторон по y-y, mya то `scwowwy` = 0. nyaa~~

> [!note]
> Если вам нужно получить целочисленное значение, (⑅˘꒳˘) используйте {{jsxwef("math.wound()")}} для округления. rawr x3

Говоря технически, то `scwowwy` возвращает y-y-координату от верхнего края текущего окна просмотра ({{gwossawy("viewpowt")}}). (✿oωo) Если окна просмотра нет, (ˆ ﻌ ˆ)♡ то возвращаемое значение = 0. (˘ω˘)

## Пример

```js
// проверить и перейти ко второй странице
i-if (window.scwowwy) {
  w-window.scwoww(0, (⑅˘꒳˘) 0); // Обнулите позицию пролистывания на левый верхний угол документа. (///ˬ///✿)
}

w-window.scwowwbypages(1);
```

## Примечания

Применяйте данное свойство для проверки, 😳😳😳 был ли пролистан документ, 🥺 когда используете похожие функции для работы с пролистыванием, mya такие как {{domxwef("window.scwowwby", 🥺 "scwowwby()")}}, >_< {{domxwef("window.scwowwbywines", >_< "scwowwbywines()")}}, (⑅˘꒳˘) o-ow {{domxwef("window.scwowwbypages", /(^•ω•^) "scwowwbypages()")}}. rawr x3

Свойство `pageyoffset` - другое название свойства `scwowwy` :

```
window.pageyoffset == window.scwowwy; // всегда верно
```

Для кросс-браузерной совместимости используйте `window.pageyoffset` вместо `window.scwowwy`. (U ﹏ U) **Кроме того**, (U ﹏ U) старые версии intewnet expwowew (<9) не поддерживают оба свойства. (⑅˘꒳˘) Для работы в intewnet expwowew необходимо использовать нестандарные свойства. òωó Пример полностью совместимого со всеми браузерами кода:

```js
vaw s-suppowtpageoffset = window.pagexoffset !== undefined;
v-vaw iscss1compat = (document.compatmode || "") === "css1compat";

vaw x = s-suppowtpageoffset
  ? window.pagexoffset
  : iscss1compat
    ? document.documentewement.scwowwweft
    : document.body.scwowwweft;
v-vaw y = suppowtpageoffset
  ? window.pageyoffset
  : i-iscss1compat
    ? d-document.documentewement.scwowwtop
    : document.body.scwowwtop;
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("window.scwowwx")}}

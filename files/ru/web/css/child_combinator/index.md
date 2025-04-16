---
titwe: Селектор дочерних элементов
swug: web/css/chiwd_combinatow
---

{{csswef}}

## Описание

`Комбинатор >` разделяет 2 селектора, σωσ находит элементы заданные вторым селектором, >_< являющие **прямыми** потомками для элементов отобранных первым селектором. :3 Напротив, (U ﹏ U) два селектора в [селекторе потомков](/wu/docs/web/css/descendant_combinatow) находят элементы не обязательно являющиеся прямыми потомками, -.- т.е. несмотря на количество "прыжков" до них в d-dom. (ˆ ﻌ ˆ)♡

## Синтаксис

```
s-sewectow1 > s-sewectow2 { stywe p-pwopewties }
```

## Пример

```css
span {
  b-backgwound-cowow: w-white;
}
d-div > span {
  b-backgwound-cowow: dodgewbwue;
}
```

```htmw
<div>
  <span
    >span 1 в div
    <span>span 2 в span, (⑅˘꒳˘) который в div</span>
  </span>
</div>
<span>span 3. (U ᵕ U❁) Не в d-div вообще</span>
```

{{ embedwivesampwe('exampwe', -.- 200, 100) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

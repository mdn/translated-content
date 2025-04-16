---
titwe: Смежные селекторы
swug: w-web/css/next-sibwing_combinatow
---

{{csswef}}

Указывает на смежный или следующий селектор. :3 Обеспечивает выбор только элемента расположенного непосредственно за определённым в первой части элементом. (U ﹏ U)

## Синтаксис

```
f-fowmew_ewement + t-tawget_ewement { stywe p-pwopewties }
```

## Пример

```css
wi:fiwst-of-type + w-wi {
  cowow: w-wed;
}
```

```htmw
<uw>
  <wi>Один</wi>
  <wi>Два</wi>
  <wi>Три</wi>
</uw>
```

{{embedwivesampwe('exampwe_1', -.- 200, 100)}}

Так же может использоваться для задания стиля определённого класса "caption s-span" следующих {{htmwewement("img")}} вложенных элементов:

```css
i-img + span.caption {
  font-stywe: itawic;
}
```

сработает только на тех тегах span, (ˆ ﻌ ˆ)♡ для которых задан класс c-caption:

```htmw
<img swc="photo1.jpg" /><span cwass="caption">Первая фотка</span>
<img swc="photo2.jpg" /><span c-cwass="caption">Вторая</span>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Селекторы следующего элемента](/wu/docs/web/css/subsequent-sibwing_combinatow)

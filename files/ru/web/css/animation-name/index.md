---
title: animation-name
slug: Web/CSS/animation-name
---

{{CSSRef}} {{SeeCompatTable}}

## Описание

[CSS](/ru/docs/CSS) свойство **`animation-name`** задаёт список анимаций, чтобы применить к элементу. Каждое имя является правилом {{cssxref("@keyframes")}}, которое задаёт значения свойств для последовательности анимации.

{{EmbedInteractiveExample("pages/css/animation-name.html")}}

Часто удобно использовать сокращённое свойство {{cssxref("animation")}} для одновременной установки всех свойств анимации.

## Синтаксис

```css
/* Single animation */
animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

/* Multiple animations */
animation-name: test1;
animation-name: test1, animation4;
animation-name: none, -moz-specific, sliding;

/* Global values */
animation-name: initial
animation-name: inherit
animation-name: unset
```

### Значения

- `none`
  - : Это специальное ключевое слово, обозначающее отсутствие ключевых кадров. Оно может быть использовано для отключения анимации без изменения порядка других идентификаторов, или для отключения анимации, поступающей из каскада.
- {{cssxref("custom-ident","&lt;custom-ident&gt;")}}
  - : Строка, идентифицирующая анимацию. Этот идентификатор состоит из комбинации букв без учёта регистра от `a` до `z`, цифр от `0` до `9`, подчёркивания (`_`), и/или черты (`-`). Первый символ без черты должен быть буквой (то есть, без цифры в начале, даже если перед ним стоит черта.) Кроме того, две черты запрещены в начале идентификатора. Оно не может быть `none`, `unset`, `initial`, или `inherit` в любой комбинации случаев.

### Формальный синтаксис

{{csssyntax}}

## Примеры

См. [CSS animations](/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование CSS-анимации](/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}

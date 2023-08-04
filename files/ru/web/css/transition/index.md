---
title: transition
slug: Web/CSS/transition
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`transition`** - это {{ cssxref("Shorthand_properties", "сокращённое свойство") }} для {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, и {{ cssxref("transition-delay") }}.

{{EmbedInteractiveExample("pages/css/transition.html")}}

Transition позволяет определять переходное состояние между двумя состояниями элемента. Различные состояния могут быть определены с помощью {{ cssxref("Псевдо-классы", "псевдоклассов") }}, таких как {{cssxref(":hover")}} или {{cssxref(":active")}} или установлены динамически с помощью JavaScript.

{{cssinfo}}

## Синтаксис

```css
/* Применить к 1 свойству */
/* имя свойства | длительность */
transition: margin-left 4s;

/* имя свойства | длительность | задержка */
transition: margin-left 4s 1s;

/* имя свойства | длительность | временная функция | задержка */
transition: margin-left 4s ease-in-out 1s;

/* Применить к 2 свойствам */
transition:
  margin-left 4s,
  color 1s;

/* Применить ко всем изменённым свойствам */
transition: all 0.5s ease-out;

/* Глобальные значения */
transition: inherit;
transition: initial;
transition: unset;
```

Свойство `transition` указывается как один или более одно-свойственных переходов (single-property transitions), разделённых запятой.

Каждый одно-свойственный transition описывает переход, который должен быть применён к одному свойству (или специальным значениям `all` и `none`). Это включает в себя:

- ноль или одно значение, представляющее свойство, к которому должен быть применён переход. Это может быть одно из:

  - ключевое слово `none`
  - ключевое слово `all`
  - {{cssxref("&lt;custom-ident&gt;")}} именование свойства CSS.

- ноль или одно {{cssxref("&lt;single-transition-timing-function&gt;")}} значение, представляющее временну́ю функцию
- ноль, одно или два {{cssxref("&lt;time&gt;")}} значения. Первое значение, которое может быть интерпретировано как время, присваивается {{cssxref("transition-duration")}}, а второе значение, которое может быть интерпретировано как время, присваивается {{cssxref("transition-delay")}}.

Посмотрите, [что предпринимается](/ru/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#Когда_у_списков_значений_свойств_разные_длины) когда у списков значений свойств разные длины. Вкратце, избыточные свойства, не подлежащие анимации, игнорируются.

### Формальное описание синтаксиса

{{csssyntax}}

## Примеры

Примеры CSS переходов включены в главную статью о [CSS переходах](/ru/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

\[2] [PPK test](http://www.quirksmode.org/css/transitions/properties.html#t031)

## Смотрите также

- [Использование CSS переходов](/ru/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}

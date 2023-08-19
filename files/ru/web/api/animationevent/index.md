---
title: AnimationEvent
slug: Web/API/AnimationEvent
---

{{SeeCompatTable}}{{APIRef("Web Animations API")}}

AnimationEvent - это интерфейс представляющий события, содержащие информацию, связанную с анимацией.

{{InheritanceDiagram}}

## Свойства

_Также свойства наследуются от родителя {{domxref("Event")}}._

- {{domxref("AnimationEvent.animationName")}} {{readonlyInline}}
  - : Является {{domxref("DOMString")}} содержащей значения {{cssxref("animation-name")}} CSS-свойств связанных с **transition.**
- {{domxref("AnimationEvent.elapsedTime")}} {{readonlyInline}}
  - : Является числом с плавающей точкой, которое задаёт количество времени от начала анимации в секундах, когда это событие отклонено, несмотря на какое-либо время анимация была остановлена.Для события "animationstart" , elapsedTime равно `0.0` если не было заданно отрицательное значение для {{cssxref("animation-delay")}}, в этом случае событие будет срабатывать с elapsedTime содержащим `(-1 * delay)`.
- {{domxref("AnimationEvent.pseudoElement")}} {{readonlyInline}}
  - : Является {{domxref("DOMString")}}, начинающийся с '::', содержащий имя [псевдо-элемента](/ru/docs/Web/CSS/Pseudo-elements),на котором работает анимация.Если анимация не работает на псевдо-элементе, но работает на элементе,значит указанна пустая строка ' '.

## Конструктор

- {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}
  - : Создаёт событие AnimationEvent с передачей параметров.

## Методы

_Также наследуют методы от родителя {{domxref("Event")}}_.

- {{domxref("AnimationEvent.initAnimationEvent()")}} {{non-standard_inline}}{{deprecated_inline}}
  - : Инициализирует AnimationEvent созданную используя резко суждённый метод {{domxref("Document.createEvent()", "Document.createEvent(\"AnimationEvent\")")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование CSS-анимации](/ru/docs/CSS/Using_CSS_animations)
- Анимация связанных CSS-свойств и по правилам: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.

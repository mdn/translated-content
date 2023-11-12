---
title: Web Animations API
slug: Web/API/Web_Animations_API
---

{{DefaultAPISidebar("Веб-анимация")}} {{SeeCompatTable()}}

API веб-анимации позволяет синхронизировать и сроки изменения представления веб-страницы, то есть анимации элементов DOM. Она делает это путём объединения двух моделей: Модель синхронизации и анимации модели.

## Основные понятия и использование API

Web Animations API (API веб-анимации) обеспечивает общий язык для браузеров и разработчиков для описания анимации элементов DOM. Для более подробной информации о концепциях, заложенных в API, и о его использовании, прочтите статью [Использование Web Animations API](/ru/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

## Интерфейсы веб-анимации

- {{Domxref("Animation")}}
  - : Обеспечивает элементы управления воспроизведением и временную шкалу для узла анимации или источника. Можно взять объект, созданный с помощью {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} конструктор.
- {{Domxref("KeyframeEffect")}}
  - : Описывает наборы анимируемых свойств и значений, называемых **ключевыми кадрами** и их [параметры синхронизации](/ru/docs/Web/API/Web_Animations_API/Animation_timing_options). Они могут затем быть воспроизведены с помощью {{domxref("Animation.Animation", " Animation()")}} конструктор.
- {{Domxref("AnimationTimeline")}}
  - : Представляет график анимации. Этот интерфейс существует, чтобы определить особенности временной шкалы (наследуемые интерфейсом {{domxref("DocumentTimeline")}} и другими интерфейсами в будущем) и не предназначен для непосредственного использования разработчиками.
- {{Domxref("DocumentTimeline")}}
  - : Представляет временные рамки анимации, в том числе временные рамки анимации по умолчанию для документа (через свойство {{domxref("Document.timeline")}}).
- {{Domxref("AnimationEffectTiming")}}
  - : Объект, содержащий временные свойства, возвращённые {{domxref("KeyframeEffect.timing", "сроки")}} атрибут {{domxref("KeyframeEffect")}}. Он наследует свои свойства от {{domxref("AnimationEffectTimingReadOnly")}}, но в не только чтение формы.
- {{Domxref("SharedKeyframeList")}}
  - : Представляет собой последовательность ключевых кадров , которые могут быть разделены между {{domxref("KeyframeEffect")}} объектов. Используя `SharedKeyframeList` объекты, несколько `KeyframeEffect` объектов могут повторно использовать одни и те же ключевые кадры , не заплатив стоимость разбора их несколько раз.
- {{domxref("AnimationEffectTimingProperties")}}
  - : {{Domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly()")}} и {{domxref("KeyframeEffect.KeyframeEffect()")}} все принимают необязательный словарь объект синхронизации свойств.

## Расширения для других интерфейсов

API веб - анимации добавляет некоторые новые функции в **{{domxref("документ")}}** и **{{domxref("элемент")}}.**

### Расширения `Document` интерфейса

- {{Domxref("document.timeline")}}
  - : `DocumentTimeline` Объект , представляющий документ по умолчанию временную шкалу.
- {{Domxref("document.getAnimations()")}}
  - : Возвращает массив {{domxref("Анимация")}} объектов в настоящее время действуют на элементах в `document`.

### Расширения `Element` интерфейса

- {{Domxref("Element.animate()")}}

  - : Способ быстрого доступа для создания и воспроизведения анимации на элементе. Она возвращает созданный {{domxref("Анимация")}} экземпляра объекта.

## Веб-анимация для чтения только интерфейсы

Следующие интерфейсы включены в спецификации для таких целей, как определение функции, используемые в нескольких других местах, или служить в качестве основы для нескольких интерфейсов, которые могут быть использованы в качестве значений одних и тех же свойств. Вы бы не напрямую использовать их в работе веб-разработки, но они могут быть интересны для авторов библиотеки, чтобы понять, как эта технология работает, так что их реализации могут быть более эффективными, или для инженеров браузеров, которые ищут более лёгкой ссылки, чем спецификация обеспечивает.

- {{Domxref("AnimationEffectTimingReadOnly")}}
  - : Словарь объект временных свойств, которые наследуются изменяемом {{domxref("AnimationEffectTiming")}} интерфейс, связанный с {{domxref("KeyframeEffect")}}.
- {{Domxref("AnimationEffectReadOnly")}}
  - : Определяет текущие и будущие "Анимационные эффекты" , как {{domxref("KeyframeEffect")}}, который может быть передан {{domxref("Анимация")}} объектов для воспроизведения, и {{domxref("KeyframeEffectReadOnly")}} который используется {{domxref("KeyframeEffect")}} (наследуется [CSS Animations](/ru/docs/Web/CSS/CSS_Animations) и [Transitions](/ru/docs/Web/CSS/CSS_Transitions) ). Все значения {{domxref("Animation.effect")}} имеют типов на основе `AnimationEffectReadOnly`.
- {{Domxref("KeyframeEffectReadOnly")}}
  - : Описывает наборы Animatable свойств и значений, которые могут быть воспроизведены с помощью {{domxref("Animation.Animation", "анимация()")}} конструктор, и которые унаследованы {{domxref("KeyframeEffect")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование веб-API Animations](/ru/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Web демки Анимации](https://mozdevs.github.io/Animation-examples/)
- [Polyfill](https://github.com/web-animations/web-animations-js)
- Текущая реализация браузера Firefox: [AreWeAnimatedYet](https://birtles.github.io/areweanimatedyet/)
- [Тест Поддержка браузеров](http://codepen.io/danwilson/pen/xGBKVq)

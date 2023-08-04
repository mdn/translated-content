---
title: EffectTiming
slug: Web/API/KeyframeEffect/KeyframeEffect
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

Словарь **`EffectTiming`**, входящий в состав [Web Animations API](/ru/docs/Web/API/Web_Animations_API), используется в {{domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly", "KeyframeEffectReadOnly()")}}, и {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} для описания временных свойств анимационных эффектов. Все эти свойства необязательные, хотя без установки `duration` анимация не будет воспроизводиться.

Проще говоря, эти свойства описывают как {{Glossary("user agent")}} должен выполнять переход от ключевого кадра к ключевому кадру, и как вести себя, когда анимация начинается и заканчивается.

## Свойства

- {{domxref("EffectTiming.delay", "delay")}} {{optional_inline}}
  - : Число миллисекунд для задержки начала анимации. По умолчанию `0`.
- {{domxref("EffectTiming.direction", "direction")}} {{optional_inline}}
  - : Указывает направление анимации. Она может выполняться вперёд (`normal`), назад (`reverse`), переключать направление после каждой итерации (`alternate`), или работать назад и переключать после каждой итерации (`alternate-reverse`). По умолчанию `"normal"`.
- {{domxref("EffectTiming.duration", "duration")}} {{optional_inline}}
  - : Число миллисекунд, в течении которых выполняется каждая итерация анимации. По умолчанию 0. Хотя это свойство технически необязательное, имейте ввиду, что ваша анимация не будет запущена, если это значение равно `0`.
- {{domxref("EffectTiming.easing", "easing")}} {{optional_inline}}
  - : Скорость изменения анимации с течением времени. Принимает заранее определённые значения `"linear"`, `"ease"`, `"ease-in"`, `"ease-out"`, и `"ease-in-out"`, или кастомное `"cubic-bezier"` со значением типа `"cubic-bezier(0.42, 0, 0.58, 1)"`. По умолчанию `"linear"`.
- {{domxref("EffectTiming.endDelay", "endDelay")}} {{optional_inline}}
  - : Число миллисекунд задержки после окончания анимации. Это в первую очередь полезно, когда последовательность действий анимации базируется на окончании другой анимации. По умолчанию `0`.
- {{domxref("EffectTiming.fill", "fill")}} {{optional_inline}}
  - : Диктует должны ли эффекты анимации отражаться элементом(ами) перед воспроизведением (`"backwards"`), сохраняться после того, как анимация завершилась (`"forwards"`), или и то и другое ("`both")`. По умолчанию `"none"`.
- {{domxref("EffectTiming.iterationStart", "iterationStart")}} {{optional_inline}}
  - : Описывает, в какой момент итерации должна начаться анимация. Например, значение 0.5 указывает на начало запуска анимации в середине первой итерации, с таким набором значений анимация с 2-мя итерациями будет закончена на полпути к третей итерации. По умолчанию `0.0`.
- {{domxref("EffectTiming.iterations", "iterations")}} {{optional_inline}}
  - : Число раз, которое анимация должна повторяться. По умолчанию `1`, может принимать значение до {{jsxref("Infinity")}}, чтобы повторять анимацию до тех пор, пока элемент существует.

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}

## Смотрите также

- [Web Animations API](/ru/docs/Web/API/Web_Animations_API)
- [Using the Web Animations API](/ru/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- {{domxref("Element.animate()")}}
- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
- {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly", "KeyframeEffectReadOnly()")}}

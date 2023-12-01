---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
---

{{APIRef("Intersection Observer API")}}

Интерфейс **`IntersectionObserver`** в составе [Intersection Observer API](/ru/docs/Web/API/Intersection_Observer_API) предоставляет возможность асинхронного наблюдения за изменением пересечения целевого элемента с вышестоящим элементом или с верхоуровневым {{Glossary('viewport')}} документа. Вышестоящий элемент или viewport считается корнем.

Когда `IntersectionObserver` создан, он настроен на отслеживание заданных соотношений видимости в корне. Конфигурация не может быть изменена после создания `IntersectionObserver`, поэтому такой объект-наблюдатель полезен только для наблюдения за определёнными изменениями в степени видимости; однако вы можете следить за несколькими целевыми элементами с одним и тем же наблюдателем.

## Constructor

- {{domxref("IntersectionObserver.IntersectionObserver()")}}
  - : Создаёт новый объект `IntersectionObserver`, который будет запускать специальную колбэк-функцию, когда обнаружит пересечение одного или нескольких пороговых значений видимостью целевого элемента.

## Properties

- {{domxref("IntersectionObserver.root")}} {{readonlyinline}}
  - : Конкретный предок наблюдаемого целевого {{domxref("element")}}. Если в конструктор не было передано значения или оно `null`, будет использован viewport документа.
- {{domxref("IntersectionObserver.rootMargin")}} {{readonlyinline}}
  - : Смещение прямоугольника (_пер._ "An offset rectangle"), применяемое к {{Glossary('bounding box')}} корня при расчёте пересечений, эффективно сжимает или увеличивает корень для целей расчёта. Возвращаемое этим свойством значение может не совпадать со значением, указанным при вызове конструктора, поскольку оно может быть изменено в соответствии с внутренними требованиями. Каждое смещение может быть выражено в пикселях (`px`) или в процентах (`%`). Значение по умолчанию "0px 0px 0px 0px".
- {{domxref("IntersectionObserver.thresholds")}} {{readonlyinline}}
  - : Список порогов, отсортированный по возрастанию, где каждый порог представляет собой отношение площади пересечения к ограничивающей области наблюдаемой цели. Уведомления для цели генерируются, когда любое из пороговых значений пересекается для этой цели. Если в конструктор не было передано значения, используется 0.

## Methods

- {{domxref("IntersectionObserver.disconnect()")}}
  - : Отключает объект `IntersectionObserver` от наблюдения любой цели.
- {{domxref("IntersectionObserver.observe()")}}
  - : Сообщает объекту `IntersectionObserver` целевой элемент для наблюдения.
- {{domxref("IntersectionObserver.takeRecords()")}}
  - : Возвращает массив из объектов {{domxref("IntersectionObserverEntry")}} для всех наблюдаемых целей.
- {{domxref("IntersectionObserver.unobserve()")}}
  - : Сообщает объекту `IntersectionObserver` прекратить наблюдение за конкретным целевым элементом.

## Examples

```js
var intersectionObserver = new IntersectionObserver(function (entries) {
  // Если intersectionRatio равен 0, цель вне зоны видимости
  // и нам не нужно ничего делать
  if (entries[0].intersectionRatio <= 0) return;

  loadItems(10);
  console.log("Loaded new items");
});
// начать наблюдение
intersectionObserver.observe(document.querySelector(".scrollerFooter"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('MutationObserver')}}
- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}

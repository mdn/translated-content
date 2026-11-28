---
title: ResizeObserver
slug: Web/API/ResizeObserver
page-type: web-api-interface
browser-compat: api.ResizeObserver
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Resize Observer API")}}

Интерфейс **`ResizeObserver`** сообщает об изменениях размеров блока содержимого (content box) или блока рамки (border box) элемента {{domxref('Element')}}, либо ограничивающего прямоугольника элемента {{domxref('SVGElement')}}.

> [!NOTE]
> Блок содержимого (content box) — это область, в которую может быть помещено содержимое, то есть блок рамки за вычетом внутренних отступов (padding) и ширины рамки. Блок рамки (border box) охватывает содержимое, внутренние отступы и рамку. Дополнительные сведения см. в статье [Блочная модель](/ru/docs/Learn_web_development/Core/Styling_basics/Box_model).

## Конструктор

- {{domxref("ResizeObserver.ResizeObserver", "ResizeObserver()")}}
  - : Создаёт и возвращает новый объект `ResizeObserver`.

## Свойства экземпляра

Нет.

## Методы экземпляра

- {{domxref('ResizeObserver.disconnect()')}}
  - : Прекращает наблюдение за всеми наблюдаемыми целевыми элементами {{domxref('Element')}} данного наблюдателя.
- {{domxref('ResizeObserver.observe()')}}
  - : Начинает наблюдение за указанным элементом {{domxref('Element')}}.
- {{domxref('ResizeObserver.unobserve()')}}
  - : Прекращает наблюдение за указанным элементом {{domxref('Element')}}.

## Примеры

В примере [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([исходный код](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) resize observer используется для изменения свойства {{cssxref("font-size")}} заголовка и абзаца при изменении значения ползунка, из-за чего меняется ширина содержащего их элемента `<div>`. Это показывает, что можно реагировать на изменения размеров элемента, даже если они никак не связаны с областью просмотра (viewport).

Также предусмотрен флажок (checkbox) для включения и выключения наблюдателя. Если он выключен, текст не будет меняться в ответ на изменение ширины `<div>`.

JavaScript выглядит следующим образом:

```js
const h1Elem = document.querySelector("h1");
const pElem = document.querySelector("p");
const divElem = document.querySelector("body > div");
const slider = document.querySelector('input[type="range"]');
const checkbox = document.querySelector('input[type="checkbox"]');

divElem.style.width = "600px";

slider.addEventListener("input", () => {
  divElem.style.width = `${slider.value}px`;
});

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      const contentBoxSize = entry.contentBoxSize[0];
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        contentBoxSize.inlineSize / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(
        1,
        contentBoxSize.inlineSize / 600,
      )}rem`;
    } else {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentRect.width / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }

  console.log("Размер изменился");
});

resizeObserver.observe(divElem);

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    resizeObserver.observe(divElem);
  } else {
    resizeObserver.unobserve(divElem);
  }
});
```

## Ошибки при наблюдении

Реализации, следующие спецификации, вызывают события изменения размера до отрисовки (paint) — то есть до того, как кадр будет показан пользователю. Если произошло хотя бы одно событие изменения размера, стили и раскладка (layout) вычисляются заново, что, в свою очередь, может вызвать новые события изменения размера. Бесконечные циклы, возникающие из-за циклических зависимостей, предотвращаются тем, что на каждой итерации обрабатываются только элементы, расположенные глубже в DOM. События изменения размера, не удовлетворяющие этому условию, откладываются до следующей отрисовки, и на объекте {{domxref('Window')}} инициируется событие error со строго определённым сообщением:

**ResizeObserver loop completed with undelivered notifications.**

Обратите внимание, что это предотвращает лишь зависание пользовательского агента, но не сам бесконечный цикл. Например, следующий код будет бесконечно увеличивать ширину `divElem`, а в консоли каждый кадр будет повторяться приведённое выше сообщение об ошибке:

```js
const divElem = document.querySelector("body > div");

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    entry.target.style.width = `${entry.contentBoxSize[0].inlineSize + 10}px`;
  }
});

resizeObserver.observe(divElem);

window.addEventListener("error", (e) => {
  console.error(e.message);
});
```

Пока событие error не возникает бесконечно, resize observer в итоге стабилизируется и создаст устойчивую и, скорее всего, корректную раскладку. Однако посетители могут заметить кратковременное «мерцание» испорченной раскладки, поскольку последовательность изменений, которые должны были произойти в одном кадре, вместо этого происходит на протяжении нескольких кадров.

Если необходимо предотвратить эти ошибки, решение зависит от того, какого эффекта вы хотите добиться. Если бесконечный цикл действительно нужен, достаточно отложить код изменения размеров в колбэке `ResizeObserver` до момента, когда браузер перерисует страницу. Его можно поместить в колбэк [`requestAnimationFrame`](/ru/docs/Web/API/Window/requestAnimationFrame).

```js
const divElem = document.querySelector("body > div");

const resizeObserver = new ResizeObserver((entries) => {
  requestAnimationFrame(() => {
    for (const entry of entries) {
      entry.target.style.width = `${entry.contentBoxSize[0].inlineSize + 10}px`;
    }
  });
});

resizeObserver.observe(divElem);

window.addEventListener("error", (e) => {
  console.error(e.message);
});
```

Если бесконечный цикл не нужен, следует убедиться, что код изменения размеров не запускает колбэк resize observer повторно. Сделать это можно многими способами, например задать «ожидаемый размер» и не изменять размер, если он уже равен этому значению.

```js
const divElem = document.querySelector("body > div");
const expectedSizes = new WeakMap();

const resizeObserver = new ResizeObserver((entries) => {
  requestAnimationFrame(() => {
    for (const entry of entries) {
      const expectedSize = expectedSizes.get(entry.target);
      if (entry.contentBoxSize[0].inlineSize === expectedSize) {
        continue;
      }
      const newSize = entry.contentBoxSize[0].inlineSize + 10;
      entry.target.style.width = `${newSize}px`;
      expectedSizes.set(entry.target, newSize);
    }
  });
});

resizeObserver.observe(divElem);

window.addEventListener("error", (e) => {
  console.error(e.message);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Изучение: блочная модель](/ru/docs/Learn_web_development/Core/Styling_basics/Box_model)
- {{domxref('PerformanceObserver')}}
- {{domxref('IntersectionObserver')}} (часть [Intersection Observer API](/ru/docs/Web/API/Intersection_Observer_API))
- Будущие [контейнерные запросы (container queries)](/ru/docs/Web/CSS/Guides/Containment/Container_queries) могут стать приемлемой альтернативой для реализации адаптивного дизайна.

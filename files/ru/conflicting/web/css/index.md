---
title: '@viewport'
slug: conflicting/Web/CSS
tags:
  - Adaptation
  - At-rule
  - CSS
  - Device
  - NeedsContent
  - NeedsTranslation
  - Reference
  - TopicStub
translation_of: Web/CSS/@viewport
original_slug: Web/CSS/@viewport
---

{{CSSRef}}{{deprecated_header}}

## Кратко

**`@viewport`** [CSS](/en/CSS) [at-rule](/en/CSS/At-rule) содержит набор вложенных дескрипторов в блоке CSS, который разделён фигурными скобками. Эти дескрипторы управляют настройками видового экрана, в первую очередь на мобильных устройствах.

## Синтаксис

Коэффициент масштабирования, равный 1,0 или 100%, соответствует отсутствию масштабирования. Увеличьте масштаб больших значений. Меньшие значения уменьшаются

### Дескриптор

Браузеры должны игнорировать непризнанные дескрипторы.

- [`min-width`](/ru/docs/Web/CSS/@viewport/min-width)
  - : Используется при определении ширины видового экрана при первом отображении документа.
- [`max-width`](/ru/docs/Web/CSS/@viewport/max-width)
  - : Используется при определении ширины видового экрана при первом отображении документа.
- [`width`](/ru/docs/Web/CSS/@viewport/width)
  - : Сокращённый дескриптор для установки как минимальной ширины(min-width), так и максимальной ширины(max-width).
- [`min-height`](/ru/docs/Web/CSS/@viewport/min-height)
  - : Используется при определении высоты видового экрана при первом отображении документа.
- [`max-height`](/ru/docs/Web/CSS/@viewport/max-height)
  - : Используется при определении высоты видового экрана при первом отображении документа.
- [`height`](/ru/docs/Web/CSS/@viewport/height)
  - : Сокращённый дескриптор для установки как минимальной высоты(min-height), так и максимальной высоты(max-height).
- [`zoom`](/ru/docs/Web/CSS/@viewport/zoom)
  - : Устанавливает начальный коэффициент масштабирования.
- [`min-zoom`](/ru/docs/Web/CSS/@viewport/min-zoom)
  - : Устанавливает минимальный коэффициент масштабирования.
- [`max-zoom`](/ru/docs/Web/CSS/@viewport/max-zoom)
  - : Устанавливает максимальный коэффициент масштабирования.
- [`user-zoom`](/ru/docs/Web/CSS/@viewport/user-zoom)
  - : Управляет тем, должен ли пользователь иметь возможность изменять коэффициент масштабирования.
- [`orientation`](/ru/docs/Web/CSS/@viewport/orientation)
  - : Управляет ориентацией документа.

### Формальный синтаксис

{{csssyntax}}

## Пример:

```css
@viewport {
  min-width: 640px;
  max-width: 800px;
}
@viewport {
  zoom: 0.75;
  min-zoom: 0.5;
  max-zoom: 0.9;
}
@viewport {
  orientation: landscape;
}
```

## Спецификация:

| Спецификация                                                                         | Статус                           | Комментарий        |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('CSS3 Device', '#the-atviewport-rule', '@viewport')}} | {{Spec2('CSS3 Device')}} | Initial definition |

## Совместимость с браузерами:

{{Compat}}

## Смотреть также

- {{HTMLElement("meta")}}, specifically `<meta name="viewport">`
- [Using the viewport meta tag to control layout on mobile browsers](/ru/docs/Mobile/Viewport_meta_tag)

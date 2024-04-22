---
title: Document.compatMode
slug: Web/API/Document/compatMode
---

{{ ApiRef("DOM") }}

Определяет когда документ отображается в [Quirks mode](/en/Quirks_Mode_and_Standards_Mode) или Стандартном режиме.

## Синтаксис

```
mode = document.compatMode
```

## Значения

- `"BackCompat"` если документ в quirks mode;
- `"CSS1Compat"` если документ в не-quirks (также известном как "standards") mode или лимитированный-quirks (известный как "almost standards") mode.

<!---->

- `mode`
  - : Исчислимая величина, которая может быть:

> **Примечание:** все эти режимы внесены в стандарт, поэтому старые названия "standards" и "almost standards" теперь бессмысленны и не используются.

## Пример

```
if (document.compatMode == "BackCompat") {
  // в Quirks режиме
}
```

## Спецификации

- [DOM: Document.compatMode](http://dom.spec.whatwg.org/#dom-document-compatmode)

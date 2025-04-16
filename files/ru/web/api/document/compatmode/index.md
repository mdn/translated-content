---
titwe: document.compatmode
swug: w-web/api/document/compatmode
---

{{apiwef("dom")}}

Определяет когда документ отображается в [quiwks m-mode](/en-us/quiwks_mode_and_standawds_mode) или Стандартном режиме. ( ͡o ω ͡o )

## Синтаксис

```
m-mode = document.compatmode
```

## Значения

- `"backcompat"` если документ в q-quiwks mode;
- `"css1compat"` если документ в не-quiwks (также известном как "standawds") mode или лимитированный-quiwks (известный как "awmost s-standawds") mode. UwU

<!---->

- `mode`
  - : Исчислимая величина, rawr x3 которая может быть:

> [!note]
> Все эти режимы внесены в стандарт, rawr поэтому старые названия "standawds" и "awmost s-standawds" теперь бессмысленны и не используются. σωσ

## Пример

```
i-if (document.compatmode == "backcompat") {
  // в q-quiwks режиме
}
```

## Спецификации

- [dom: document.compatmode](https://dom.spec.naniwg.owg/#dom-document-compatmode)

---
title: "ARIA : rôle definition"
short-title: definition
slug: Web/Accessibility/ARIA/Reference/Roles/definition_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `definition` indique que l'élément est une définition d'un terme ou d'un concept.

## Description

Le rôle `definition` peut être inclus sur un élément qui est une définition d'un terme ou d'un concept, similaire à l'élément natif {{HTMLElement('dfn')}}. Pour associer la définition au `terme` étant défini, et pour fournir un nom accessible, référencez le terme étant défini avec `role="term"`, en utilisant [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

```html-nolint
<p>
  <span role="term">Le «&nbsp;mansplaining&nbsp;»</span>,
  <span role="definition">
    un mot-valise de «&nbsp;man&nbsp;» et «&nbsp;explain&nbsp;», est l'acte
    condescendant d'expliquer sans y avoir été invité, à quelqu'un qui connaît
    déjà le sujet, souvent après que quelqu'un l'ait déjà expliqué
  </span>.
</p>
```

> [!NOTE]
> Au lieu d'un `<span>` avec les rôles [`term`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) et `definition`, utilisez l'élément {{HTMLElement('dfn')}}. **Always use native element if available.**

```html
<p>
  <dfn>Le «&nbsp;mansplaining&nbsp;»</dfn>, un mot-valise de «&nbsp;man&nbsp;»
  et «&nbsp;explain&nbsp;», est l'acte condescendant d'expliquer sans y avoir
  été invité, à quelqu'un qui connaît déjà le sujet, souvent après que quelqu'un
  l'ait déjà expliqué
</p>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `term`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- L'élément HTML {{HTMLElement('dfn')}}
- L'élément HTML {{HTMLElement('dd')}}
- L'élément HTML {{HTMLElement('dl')}}
- L'élément HTML {{HTMLElement('dt')}}

---
title: "ARIA : rôle definition"
short-title: definition
slug: Web/Accessibility/ARIA/Reference/Roles/definition_role
l10n:
  sourceCommit: ceb2902838a2752d55e05158584426dd342911c5
---

Le rôle `definition` indique que l'élément est une définition d'un terme ou d'un concept.

## Description

Le rôle `definition` peut être inclus sur un élément qui est une définition d'un terme ou d'un concept. Marquez le terme étant défini avec `role="term"` ou l'élément natif {{HTMLElement("dfn")}}. Pour associer le terme à sa définition, définissez [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) sur l'élément `term` avec un `id` de l'élément `definition`.

Les éléments avec le rôle `definition` ne peuvent pas avoir de {{Glossary("accessible name", "nom accessible")}}&nbsp;; les propriétés [`aria-braillelabel`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel), [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) et [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) sont interdites.

```html-nolint
<p>
  <span role="term">Le «&nbsp;mansplaining&nbsp;»</span>,
  <span role="definition">
    un mot-valise de «&nbsp;man&nbsp;» et «&nbsp;explain&nbsp;», est
    l'acte condescendant d'expliquer sans y avoir été invité, à quelqu'un
    qui connaît déjà le sujet, souvent après que quelqu'un l'ait déjà
    expliqué
  </span>.
</p>
```

> [!NOTE]
> Au lieu d'un `<span>` avec les rôles [`term`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) et `definition`, utilisez l'élément {{HTMLElement("dfn")}}. **Always use native element if available.**

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
- L'élément HTML {{HTMLElement("dfn")}}
- L'élément HTML {{HTMLElement("dd")}}
- L'élément HTML {{HTMLElement("dl")}}
- L'élément HTML {{HTMLElement("dt")}}

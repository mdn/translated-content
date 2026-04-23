---
title: "ARIA : rôle note"
short-title: note
slug: Web/Accessibility/ARIA/Reference/Roles/note_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `note` indique une section dont le contenu est parenthétique ou accessoire par rapport au contenu principal.

## Description

Le rôle `note` peut être ajouté à un contenu parenthétique ou accessoire si aucun autre élément natif ou rôle ne correspond à l'usage.

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) (optionnel)
  - : Nommer une note est optionnel, mais cela peut aider les utilisateur·ice·s de lecteurs d'écran à comprendre son contexte et sa fonction. Le nom peut être fourni avec `aria-labelledby` si un label visible est présent, sinon avec `aria-label`.

## Exemples

```html
<h1>Madam C. J. Walker</h1>
<p>
  Madam C.J. Walker était une entrepreneure, philanthrope et militante politique
  et sociale afro-américaine.
</p>
<h2>Jeunesse</h2>
…
<h2>Carrière</h2>
…
<p role="note" class="highlight-box">
  Au plus fort de la dépression, Madam C. J. Walker a formé 20 000 femmes à
  vendre de la pommade capillaire en porte-à-porte.
</p>
<h2>Activisme et philanthropie</h2>
…
```

Dans l'exemple ci-dessus, inspiré d'une page Wikipédia sur Madam C.J. Walker, la boîte «&nbsp;highlight-box&nbsp;» avec le rôle `note` aurait pu être un {{HTMLElement('blockquote')}} si elle contenait une citation, ou un {{HTMLElement('figcaption')}} dans un {{HTMLElement('figure')}} s'il y avait une image associée. Ici, comme aucune de ces options n'était pertinente, le rôle `note` a été utilisé pour ajouter une sémantique au contenu parenthétique.

## Spécifications

{{Specifications}}

## Voir aussi

- [Rôles de structure de document](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#1._rôles_dans_la_structure_des_documents)

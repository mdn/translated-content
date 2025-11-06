---
title: <meta name="color-scheme">
short-title: color-scheme
slug: Web/HTML/Reference/Elements/meta/name/color-scheme
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

La valeur **`color-scheme`** pour l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) de l'élément HTML {{HTMLElement("meta")}} indique un schéma de couleurs suggéré que les agents utilisateur·ice·s doivent utiliser pour une page.
Si elle est spécifiée, vous définissez le schéma de couleurs à l'aide d'un attribut [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content) dans l'élément `<meta>` avec une valeur CSS {{CSSxRef("color-scheme")}} valide.

La couleur de thème fonctionne au _niveau du document_ de la même manière que la propriété CSS {{CSSxRef("color-scheme")}} spécifie les schémas de couleurs préférés et acceptés des _éléments individuels_.
L'utilisation principale de `<meta name="color-scheme">` est d'indiquer la compatibilité et l'ordre de préférence pour les modes clair et sombre.
Par exemple, pour indiquer qu'un document préfère le mode sombre mais prend aussi en charge le mode clair&nbsp;:

```html
<meta name="color-scheme" content="dark light" />
```

Vos styles peuvent s'adapter au schéma de couleurs actuel en utilisant la fonctionnalité CSS {{CSSxRef("@media/prefers-color-scheme", "prefers-color-scheme")}}.

## Notes d'utilisation

Un élément `<meta name="color-scheme">` possède les attributs supplémentaires suivants&nbsp;:

- [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content)
  - : Un élément `<meta>` avec `name=color-scheme` doit avoir un attribut `content` qui définit le schéma de couleurs comme une valeur CSS {{CSSxRef("color-scheme")}}.
    L'attribut `content` peut être l'une des valeurs suivantes&nbsp;:
    - `normal`
      - : Le document ne gère pas les schémas de couleurs et doit être affiché avec la palette de couleurs par défaut.
    - `light`, `dark`, `light dark`, `dark light`
      - : Un ou plusieurs schémas de couleurs pris en charge par le document.
        Plusieurs schémas de couleurs indiquent que le premier est préféré par le document, mais que le second est acceptable si l'utilisateur·ice le préfère.
        Spécifier plusieurs fois le même schéma de couleurs a le même effet que de le spécifier une seule fois.
    - `only light`
      - : Indique que le document _ne prend en charge que_ le mode clair, avec un arrière-plan clair et des couleurs de premier plan foncées.
        `only dark` _n'est pas valide_, car forcer un document à s'afficher en mode sombre alors qu'il n'est pas compatible peut rendre le contenu illisible et tous les principaux navigateurs utilisent par défaut le mode clair si rien n'est configuré.
- `media` {{Optional_Inline}}
  - : Tout type ou requête média valide.
    Si fourni, les options pour le schéma de couleurs du document définies dans l'attribut `content` sont suggérées au navigateur lorsque la requête média correspond.
    Ceci est surtout utile pour la fonctionnalité CSS {{CSSxRef("@media/prefers-color-scheme", "prefers-color-scheme")}}.

## Exemples

### Utilisation d'un mot-clé color-scheme

L'exemple suivant indique au navigateur que la page prend en charge à la fois les thèmes clair et sombre.
Le schéma de couleurs utilisé dépend des préférences utilisateur·ice, comme les réglages du système d'exploitation ou du navigateur&nbsp;:

```html
<meta name="color-scheme" content="light dark" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("color-scheme")}}
- La requête média [`prefers-color-scheme`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)

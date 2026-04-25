---
title: Propriété CSS `white-space-collapse`
short-title: white-space-collapse
slug: Web/CSS/Reference/Properties/white-space-collapse
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`white-space-collapse`** contrôle la manière dont les {{Glossary("whitespace", "espaces blancs")}} à l'intérieur d'un élément sont regroupés.

> [!NOTE]
> Les propriétés `white-space-collapse` et {{CSSxRef("text-wrap-mode")}} peuvent être déclarées ensemble en utilisant la propriété raccourcie {{CSSxRef("white-space")}}.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
white-space-collapse: collapse;
white-space-collapse: preserve;
white-space-collapse: preserve-breaks;
white-space-collapse: preserve-spaces;
white-space-collapse: break-spaces;

/* Valeurs globales */
white-space-collapse: inherit;
white-space-collapse: initial;
white-space-collapse: revert;
white-space-collapse: revert-layer;
white-space-collapse: unset;
```

La propriété `white-space-collapse` est définie par un seul mot-clé choisi parmi la liste des valeurs ci-dessous.

### Valeurs

- `collapse`
  - : Les séquences d'espaces blancs sont [regroupées](/fr/docs/Web/CSS/Guides/Text/Whitespace#regroupement_et_transformation).
- `preserve`
  - : Les séquences d'espaces blancs et les caractères de saut de segment sont préservés.
- `preserve-breaks`
  - : Les séquences d'espaces blancs sont regroupées, tandis que les caractères de saut de segment sont préservés.
- `preserve-spaces` {{Experimental_Inline}}
  - : Les séquences d'espaces blancs sont préservées, tandis que les tabulations et les caractères de saut de segment sont convertis en espaces.
- `break-spaces`
  - : Le comportement est identique à `preserve`, sauf que&nbsp;:
    - Toute séquence d'espaces blancs préservés occupe toujours de l'espace, y compris à la fin de la ligne.
    - Une opportunité de retour à la ligne existe après chaque caractère d'espace blanc préservé, y compris entre les caractères d'espace blanc.
    - Les espaces préservés occupent de l'espace et ne pendent pas, affectant ainsi les tailles intrinsèques de la boîte (taille {{CSSxRef("min-content")}} et taille {{CSSxRef("max-content")}}).

> [!NOTE]
> _Les caractères de saut de segment_ sont des caractères tels que les sauts de ligne qui provoquent le passage du texte à une nouvelle ligne.

> [!NOTE]
> Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text) définit une valeur `discard` pour la propriété `white-space-collapse` afin de supprimer tous les espaces blancs dans l'élément, cependant, cela n'est pris en charge par aucun navigateur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

<!-- prettier-ignore-start -->
```html
<h2 class="collapse">Le comportement par défaut&nbsp;;
  tous  les          espaces       sont   regroupés
  dans  le           titre         .</h2>

<h2 class="preserve">Dans ce cas
  tous  les          espaces       sont   préservés
  dans  le           titre         .</h2>

<h2 class="preserve-breaks">Dans ce cas uniquement
  les   passages     à la          ligne   sont     préservés
  dans  le           titre         .</h2>

<h2 class="preserve-spaces">Dans ce cas uniquement
  les   espaces      sont          préservés
  dans  le           titre         .</h2>
```
<!-- prettier-ignore-end -->

### CSS

```css
.collapse {
  white-space-collapse: collapse;
}

.preserve {
  white-space-collapse: preserve;
}

.preserve-breaks {
  white-space-collapse: preserve-breaks;
}

.preserve-spaces {
  white-space-collapse: preserve-spaces;
}

h2 {
  font-size: 1.6rem;
  font-family: monospace;
  border-bottom: 1px dotted #cccccc;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Raccourci pour `white-space-collapse` et {{CSSxRef("text-wrap-mode")}}&nbsp;: la propriété {{CSSxRef("white-space")}}.
- Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text)
- [Gérer les espaces blancs en CSS](/fr/docs/Web/CSS/Guides/Text/Whitespace)

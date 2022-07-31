---
title: any-hover
slug: Web/CSS/@media/any-hover
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/any-hover
---
{{CSSRef}}

**`any-hover`** est une caractéristique média CSS qui permet de vérifier si un mécanisme de saisie/d'entrée permet à l'utilisateur de survoler les éléments.

## Syntaxe

La caractéristique `any-hover` est définie avec un mot-clé parmi ceux de la liste ci-après.

- `none`
  - : Parmi les mécanismes de saisi, aucun ne permet de survoler les éléments (ou il n'existe aucun dispositif de pointage).
- `hover`
  - : Un ou plusieurs mécanismes de saisie permettent de survoler le contenu simplement.

## Exemples

### HTML

```html
<a href="#">Essayez de me survoler !</a>
```

### CSS

```css
@media (any-hover: hover) {
  a:hover {
    background: yellow;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                                        | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS4 Media Queries', '#descdef-media-any-hover', 'any-hover')}} | {{Spec2('CSS4 Media Queries')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.any-hover")}}

## Voir aussi

- [La caractéristique média `hover`](/fr/docs/Web/CSS/@media/hover)

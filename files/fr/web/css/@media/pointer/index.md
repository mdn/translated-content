---
title: pointer
slug: Web/CSS/@media/pointer
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/pointer
---
{{CSSRef}}

**`pointer`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui permet de vérifier si le dispositif de saisie/d'entrée principal est un dispositif de pointage et, le cas échéant, de connaître sa précision.

> **Note :** Si on souhaite tester la précision de n'importe quel dispositif de pointage, on utilisera plutôt la caractéristique [`any-pointer`](/fr/docs/Web/CSS/@media/any-pointer).

## Syntaxe

Cette caractéristique est définie avec un mot-clé parmi les suivants :

- `none`
  - : Le mécanisme de saisie principal n'inclut pas de dispositif de pointage.
- `coarse`
  - : Le mécanisme de saisie principal inclut un dispositif de pointage dont la précision est limitée.
- `fine`
  - : Le mécanisme de saisie principal inclut un dispositif de pointage précis.

## Exemples

Dans cet exemple, on crée une petite case à cocher pour les utilisateurs qui disposent d'un pointage précis et une case à cocher plus grande lorsque le mécanisme de pointage est moins précis.

### HTML

```html
<input id="test" type="checkbox" />
<label for="test">Coucou !</label>
```

### CSS

```css
input[type="checkbox"]:checked {
  background: gray;
}

@media (pointer: fine) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (pointer: coarse) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                | État                                     | Commentaires                                                     |
| ---------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| {{SpecName('CSS4 Media Queries', '#pointer', 'pointer')}} | {{Spec2('CSS4 Media Queries')}} | Ajout dans la spécification de niveau 4 pour les requêtes média. |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.pointer")}}

## Voir aussi

- [La caractéristique média `any-pointer`](/fr/docs/Web/CSS/@media/any-pointer)

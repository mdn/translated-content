---
title: var()
slug: Web/CSS/var
tags:
  - CSS
  - Experimental
  - Fonction CSS
  - Reference
  - Variables CSS
translation_of: Web/CSS/var()
original_slug: Web/CSS/var()
---
{{CSSRef}}

La fonction **`var()`** peut être utilisée à la place d'une valeur pour n'importe quelle propriété d'un élément. Elle permet d'insérer la valeur d'[une propriété personnalisée (custom property)](/fr/docs/Web/CSS/--*).

```css
var(--header-color, blue);
```

La fonction `var()` ne peut pas être utilisée pour les noms de propriété, les sélecteurs et pour tout ce qui n'est pas une valeur de propriété.

## Syntaxe

Le premier argument de la fonction est le nom de la propriété qu'on veut substituer. Le deuxième argument, optionnel, est une valeur de recours (_fallback_) qui est utilisée au cas où la valeur de subsitution référencée par la propriété est invalide.

{{csssyntax}}

> **Note :** La syntaxe de la valeur de recours permet d'utiliser des virgules. Aussi, si on a `var(--toto, red, blue)`, la valeur de recours sera bien `red, blue` (autrement dit, tout ce qui est situé après la première virgule sert de valeur de recours).

### Valeurs

- `<custom-property-name>`
  - : Le nom d'une propriété personnalisée, représenté par un identifiant valide qui commence par deux tirets. Les propriétés personnalisées sont uniquement utilisées par les auteurs et les utilisateurs. CSS ne définit pas leur valeur ou leur sémantique.
- `<declaration-value>`
  - : Une valeur de subsitution qui peut être utilisée afin que la règle soit valide si la valeur du premier argument ne peut être utilisée ici.

## Exemples

```css
:root{
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

```css
/* On ajoute un paramètre de secours */
.component .header {
  color: var(--header-color, blue); // à ce moment header-color n'est pas définie, c'est donc le bleu qui est utilisé
}
.component .text {
  color: var(--text-color, black);
}

.component {
  --text-color: #080;
}
```

## Spécifications

| Spécification                                                                    | État                                 | Commentaires         |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS3 Variables', '#using-variables', 'var()')}} | {{Spec2('CSS3 Variables')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.properties.custom-property.var")}}

## Voir aussi

- {{cssxref("env","env(…)")}} – variables d'environnement en lecture seule, contrôlées par l'agent utilisateur.
- [Utiliser les variables CSS](/fr/docs/Web/CSS/Utiliser_les_variables_CSS)

---
title: negative
slug: Web/CSS/@counter-style/negative
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@counter-style/negative
---
{{CSSRef}}

Le descripteur **`negative`**, associé à la règle @ {{cssxref("@counter-style")}}, permet de définir la représentation du compteur lorsque la valeur est négative.

```css
/* Valeurs représentant les symboles */
negative: "-";       /* Préfixe '-' si la valeur est négative */
negative: "(" ")";   /* Entoure la valeur avec '(' et ')' si elle est négative */
```

Si la valeur du compteur est négative, le symbole fourni par le descripteur sera utilisé comme préfixe à la représentation du compteur. Un deuxième symbole peut être indiqué et est alors utilisé comme suffixe. Le descripteur `negative` n'a d'effet que si la valeur du descripteur `system` est `symbolic`, `alphabetic`, `numeric`, `additive` ou `extends` et si le compteur personnalisé utilise des indices négatifs. Dans les autres cas, si le descripteur `negative` est fourni, il est ignoré.

## Syntaxe

### Valeurs

- Premier symbole
  - : Le préfixe (type {{cssxref("&lt;symbol&gt;")}}) à ajouter à la représentation lorsque la valeur du compteur est négative.
- Deuxième symbole {{optional_inline}}
  - : Si cette valeur (type {{cssxref("&lt;symbol&gt;")}}) est présente, le symbole sera ajouté après la représentation du compteur lorsque sa valeur est négative.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
@counter-style neg {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  negative: "(-" ")";
}
.exemple {
  list-style: neg;
}
```

### HTML

```html
<ul class="exemple" start="-3">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
</ul>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                                | État                                         | Commentaires         |
| -------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('CSS3 Counter Styles', '#counter-style-system', 'system')}} | {{Spec2('CSS3 Counter Styles')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.at-rules.counter-style.negative")}}

## Voir aussi

- {{cssxref("list-style")}},
- {{cssxref("list-style-image")}},
- {{cssxref("list-style-position")}},
- {{cssxref("symbols", "symbols()")}}, la notation fonctionnelle pour créer des styles de compteur anonymes.

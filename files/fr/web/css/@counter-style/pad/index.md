---
title: pad
slug: Web/CSS/@counter-style/pad
---

{{CSSRef}}

Le descripteur **`pad`**, utilisé dans la règle @ {{cssxref("@counter-style")}} peut être utilisé pour que la représentation du marqueur pour le compteur ait une longueur minimale. Si la représentation du marqueur est plus courte que la longueur indiquée, le marqueur sera complété autant de fois que nécessaire avec le symbole indiqué. Les représentations du marqueur qui sont plus longues que la longueur minimale indiquée dans le descripteur sont construites normalement.

Le descripteur `pad` utilise deux paramètres :

- un entier indiquant la longueur minimale de la représentation du marqueur
- Le symbole utilisé pour compléter la représentation du marqueur si nécessaire.

## Syntaxe

```css
pad: 3 "0";
```

### Valeurs

- `<integer> && <symbol>`
  - : La composante `<integer>` indique la longueur minimale du marqueur. La valeur doit être positive. Si la représentation du marqueur est plus courte, elle sera complétée avec la valeur indiquée par la composante `<symbol>`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
@counter-style pad-example {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5";
  pad: 2 "0";
}
.exemple {
  list-style: pad-example;
}
```

### HTML

```html
<ul class="exemple">
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("list-style")}},
- {{cssxref("list-style-image")}},
- {{cssxref("list-style-position")}},
- {{cssxref("symbols", "symbols()")}}, la notation fonctionnelle qui permet de créer des styles de compteur anonymes.

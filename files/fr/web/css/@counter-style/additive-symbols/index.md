---
title: additive-symbols
slug: Web/CSS/@counter-style/additive-symbols
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@counter-style/additive-symbols
---
{{CSSRef}}

Le descripteur **`additive-symbols`**, utilisé pour la règle @ {{cssxref("@counter-style")}} est semblable au descripteur {{cssxref('symbols')}} et permet à l'utilisateur de définir les symboles qui doivent être utilisé pour représenter le compteur lorsque le descripteur {{cssxref('system')}} prend la valeur `additive`. Le descripteur `additive-symbols` définit des _tuples additifs_. Un tuple additif est une paire contenant un symbole et un entier positif qui représente un poids. Le système additif est utilisé afin de construire des systèmes [de notation additive](<https://fr.wikipedia.org/wiki/Notation_additive_(num%C3%A9ration)>) tels que les nombres romains.

```css
additive-symbols: 3 "0";
additive-symbols: 3 "0", 2 "\2E\20";
additive-symbols: 3 "0", 2 url(symbol.png);
```

Lorsque la valeur du descripteur `system` est `cyclic`, `numeric`, `alphabetic`, `symbolic` ou `fixed`, c'est le descripteur `symbols` qui est utilisé à la place de `additive-symbols` afin de définir les symboles utilisés pour le compteur.

## Syntaxe

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
@counter-style additive-symbols-example {
  system: additive;
  additive-symbols: V 5, IV 4, I 1;
}
.exemple {
  list-style: additive-symbols-example;
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

| Spécification                                                                                                | État                                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('CSS3 Counter Styles', '#counter-style-symbols', 'additive-symbols')}} | {{Spec2('CSS3 Counter Styles')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.at-rules.counter-style.additive-symbols")}}

## Voir aussi

- {{cssxref("list-style")}},
- {{cssxref("list-style-image")}},
- {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} : la notation fonctionnelle qui permet de créer des styles de compteur anonymes.

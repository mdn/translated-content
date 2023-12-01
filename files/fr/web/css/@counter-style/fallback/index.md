---
title: fallback
slug: Web/CSS/@counter-style/fallback
---

{{CSSRef}}

Le descripteur **`fallback`**, associé à la règle @ {{cssxref("@counter-style")}} est utilisé afin d'indiquer un style de secours au cas où le style courant ne permet pas de créer une représentation pour le marqueur du compteur pour une valeur donnée. Si le style de secours indiqué ne le permet pas non plus, ce sera le style de secours du style de secours qui sera utilisé et ainsi de suite. Si un style de secours valide n'est pas indiqué, ce sera la valeur `decimal` qui sera utilisée. Les scénarios pour lesquels ce style de secours est utilisé sont :

- Lorsque le descripteur {{cssxref('range')}} est utilisé, le style de secours est utilisé pour représenter les valeurs situées en dehors de l'intervalle.
- Lorsque le descripteur {{cssxref('system')}} vaut `fixed` et qu'il n'y a pas suffisamment de symboles pour couvrir l'ensemble des éléments de la liste, le style de secours est utilisé pour le reste des éléments de la liste.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
@counter-style fallback-example {
  system: fixed;
  symbols: "\24B6" "\24B7" "\24B8";
  fallback: upper-alpha;
}
.exemple {
  list-style: fallback-example;
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

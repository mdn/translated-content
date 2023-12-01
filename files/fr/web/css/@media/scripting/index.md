---
title: scripting
slug: Web/CSS/@media/scripting
---

{{CSSRef}}

**`scripting`** est une caractéristique média CSS qui permet de savoir si les outils de script (ex. JavaScript) sont disponibles.

## Syntaxe

La caractéristique `scripting` est définie avec un mot-clé parmi les suivants :

- `none`
  - : Les outils de script sont indisponibles pour le document courant.
- `initial-only`
  - : Les outils de script sont disponibles pendant le chargement de la page mais pas ensuite.
- `enabled`
  - : Les outils de script sont pris en charge et actifs pour le document courant.

## Exemples

### HTML

```html
<p class="script-none">Les outils de script ne sont pas disponibles. :-(</p>
<p class="script-initial-only">
  Les outils de script sont uniquement disponibles au chargement initial.
</p>
<p class="script-enabled">Les outils de script sont activés ! :-)</p>
```

### CSS

```css
p {
  color: lightgray;
}

@media (scripting: none) {
  .script-none {
    color: red;
  }
}

@media (scripting: initial-only) {
  .script-initial-only {
    color: red;
  }
}

@media (scripting: enabled) {
  .script-enabled {
    color: red;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

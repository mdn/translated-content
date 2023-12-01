---
title: ":-moz-window-inactive"
slug: Web/CSS/:-moz-window-inactive
---

{{CSSRef}}{{Non-standard_header}}

La pseudo-classe **`:-moz-window-inactive`**, spécifique à Mozilla, correspond à n'importe quel élément qui se trouve sur une fenêtre inactive.

> **Note :** Avant l'existence de cette pseudo-classe, on pouvait donner des styles différents aux fenêtres avec l'attribut `active="true"` sur la fenêtre XUL de plus haut niveau. Cet attribut n'est plus utilisé.

`:-moz-window-inactive` fonctionne également pour le contenu des documents HTML.

## Exemples

Cet exemple illustre la modification de l'apparence de l'arrière-plan d'une boîte selon que la fenêtre est active ou non.

### CSS

```css
#maboite {
  background: linear-gradient(to bottom, blue, cyan);
}

#maboite:-moz-window-inactive {
  background: cyan;
}
```

### HTML

```html
<div id="maboite" style="width:200px; height:200px;">
  <p>Une boîte :)</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples","220","220")}}

## Spécifications

Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

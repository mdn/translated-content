---
title: background-blend-mode
slug: Web/CSS/background-blend-mode
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/background-blend-mode
---
{{CSSRef}}

La propriété CSS **`background-blend-mode`** définit la façon dont les images d'arrière-plan doivent être fusionnées entre elles et avec la couleur d'arrière-plan.

{{EmbedInteractiveExample("pages/css/background-blend-mode.html")}}

Les modes de fusions (_blending modes_) doivent être définis dans le même ordre que les images sont définies avec {{cssxref("background-image")}}. Si la liste des modes de fusion et la liste des images d'arrière-plan ne sont pas de la même longueur, la première liste sera répétée ou tronquée pour que les longueurs soient égales.

## Syntaxe

```css
/* Une valeur qui s'applique à toutes les images */
background-blend-mode: normal;

/* Deux valeurs, chacune pour une image */
background-blend-mode: darken, luminosity;

/* Valeurs globales */
background-blend-mode: initial;
background-blend-mode: inherit;
background-blend-mode: unset;
```

### Valeurs

- `<blend-mode>`
  - : Une valeur décrivant un mode de fusion (type {{cssxref("&lt;blend-mode&gt;")}}) qui doit être appliqué. On peut avoir plusieurs valeurs et dans ce cas, elles doivent être séparées par des virgules.

### Syntaxe formelle

    Syntaxe Formelle: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity

## Exemples

### CSS

```css
#div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: screen;
}
```

### HTML

```html
<div id="div"></div>

<select id="select">
    <option>normal</option>
    <option>multiply</option>
    <option selected>screen</option>
    <option>overlay</option>
    <option>darken</option>
    <option>lighten</option>
    <option>color-dodge</option>
    <option>color-burn</option>
    <option>hard-light</option>
    <option>soft-light</option>
    <option>difference</option>
    <option>exclusion</option>
    <option>hue</option>
    <option>saturation</option>
    <option>color</option>
    <option>luminosity</option>
</select>
```

### JavaScript

```js
document.getElementById("select").onchange = function(event) {
    document.getElementById("div").style.backgroundBlendMode = document.getElementById("select").selectedOptions[0].innerHTML;
}
console.log(document.getElementById('div'));
```

{{EmbedLiveSample('Exemples', "330", "330")}}

## Spécifications

| Spécification                                                                                            | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('Compositing', '#background-blend-mode', 'background-blend-mode')}} | {{Spec2('Compositing')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.background-blend-mode")}}

## Voir aussi

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}

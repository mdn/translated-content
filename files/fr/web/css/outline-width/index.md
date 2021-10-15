---
title: outline-width
slug: Web/CSS/outline-width
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/outline-width
---
{{CSSRef}}

La propriété CSS **`outline-width`** est utilisée afin de définir l'épaisseur de la bordure (_outline_) d'un élément. Cette bordure est dessinée autour des éléments et délimite [la boîte de bordure](/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte). Visuellement, cela permet de faire ressortir l'élément.

{{EmbedInteractiveExample("pages/css/outline-width.html")}}

## Syntaxe

```css
/* Valeurs avec un mot clé */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* Valeurs de longueur */
/* Type <length>       */
outline-width: 1px;
outline-width: 0.1em;

/* Valeurs globales */
outline-width: inherit;
```

### Valeurs

- `thin`
  - : La largeur appliquée dépendra de l'agent utilisateur. On attend une largeur fine. Généralement, pour les navigateurs de bureau comme Firefox, cela correspondra à `1px`.
- `medium`
  - : La largeur appliquée dépendra de l'agent utilisateur. On attend une largeur moyenne. Généralement, pour les navigateurs de bureau comme Firefox, cela correspondra à `3px`.
- `thick`
  - : La largeur appliquée dépendra de l'agent utilisateur. On attend une largeur de trait prononcée. Généralement, pour les navigateurs de bureau comme Firefox, cela correspondra à `5px`.
- `<length>`
  - : Voir la page sur le type {{cssxref("&lt;length&gt;")}} pour les différentes valeurs correspondantes.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<span id="thin">thin</span>
<span id="medium">medium</span>
<span id="thick">thick</span>
<span id="deuxpixels">2px</span>
<span id="unex">1ex</span>
<span id="deuxem">2em</span>
```

### CSS

```css
span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#deuxpixels {
  outline-width: 2px;
}

#unex {
  outline-width: 1ex;
}

#deuxem {
  outline-width: 2em;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', '80')}}

## Spécifications

| Spécification                                                                                    | État                                     | Commentaires                                |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------- |
| {{SpecName('CSS3 Basic UI', '#outline-width', 'outline-width')}}             | {{Spec2('CSS3 Basic UI')}}     | Aucun changement                            |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'outline-width')}}     | {{Spec2('CSS3 Transitions')}} | `outline-width` peut désormais être animée. |
| {{SpecName('CSS2.1', 'ui.html#propdef-outline-width', 'outline-width')}} | {{Spec2('CSS2.1')}}                 | Définition initiale.                        |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.outline-width")}}

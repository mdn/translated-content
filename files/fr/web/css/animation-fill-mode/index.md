---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/animation-fill-mode
---
{{CSSRef}}

La propriété **`animation-fill-mode`** indique la façon dont une animation CSS doit appliquer les styles à sa cible avant et après son exécution.

{{EmbedInteractiveExample("pages/css/animation-fill-mode.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Gestion de plusieurs animations */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;
```

### Valeurs

- `none`
  - : L'animation n'appliquera aucun style à la cible, avant et après l'exécution. Le style utilisé sera celui défini par les autres règles CSS.
- `forwards`

  - : La cible retiendra les valeurs calculées définies lors de la dernière étape (_keyframe_). La dernière étape considérée dépend de la valeur de {{cssxref("animation-direction")}} et de {{cssxref("animation-iteration-count")}} :

    | `animation-direction` | `animation-iteration-count` | dernière _keyframe_ |
    | --------------------- | --------------------------- | ------------------- |
    | `normal`              | pair ou impair              | `100%` ou `to`      |
    | `reverse`             | pair ou impair              | `0%` ou `from`      |
    | `alternate`           | pair                        | `0%` ou `from`      |
    | `alternate`           | impair                      | `100%` ou `to`      |
    | `alternate-reverse`   | pair                        | `100%` ou `to`      |
    | `alternate-reverse`   | impair                      | `0%` ou `from`      |

- `backwards`

  - : L'animation appliquera les valeur définies par la première _keyframe_ pertinente et les retiendra pendant la durée indiquée par {{cssxref("animation-delay")}}. La première _keyframe_ pertinente dépend de la valeur de {{cssxref("animation-direction")}} :

    | `animation-direction`            | première _keyframe_ |
    | -------------------------------- | ------------------- |
    | `normal` ou `alternate`          | `0%` ou `from`      |
    | `reverse` ou `alternate-reverse` | `100%` ou `to`      |

- `both`
  - : L'animation respectera les règles qui s'appliquent à `forwards` et `backwards`, entraînant ainsi l'extension des propriétés de l'animation dans les deux directions.

> **Note :** Lorsqu'on utiliser plusieurs valeurs, séparées par des virgules, pour une propriété `animation-*`, selon leur quantité, elles seront différemment affectées aux animations définies par {{cssxref("animation-name")}}. Pour plus d'informations, voir : paramétrer [les valeurs des propriétés pour plusieurs animations](/fr/docs/Web/CSS/Animations_CSS/Utiliser_les_animations_CSS).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.demo {
  border-top: 100px solid #ccc;
  height: 300px;
  font-family: sans-serif;
}
@keyframes grow {
    0% { font-size: 0 }
    100% { font-size: 40px }
}
@-webkit-keyframes grow {
    0% { font-size: 0 }
    100% { font-size: 40px }
}
.demo:hover .grows {
    animation-name: grow;
    animation-duration: 3s;
    -webkit-animation-name: grow;
    -webkit-animation-duration: 3s;
}
.demo:hover .growsandstays {
    animation-name: grow;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    -webkit-animation-name: grow;
    -webkit-animation-duration: 3s;
    -webkit-animation-fill-mode: forwards;
}
```

### HTML

```html
<p>Déplacez votre souris sur la boîte grise.</p>
<div class="demo">
  <div class="growsandstays">La boîte grandit et s'arrête</div>
  <div class="grows">La boîte grandit</div>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples',700,300)}}

## Spécifications

| Spécification                                                                                            | État                                 | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS3 Animations', '#animation-fill-mode', 'animation-fill-mode')}} | {{Spec2('CSS3 Animations')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.animation-fill-mode")}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Utiliser_les_animations_CSS)
- {{domxref("AnimationEvent", "AnimationEvent")}}

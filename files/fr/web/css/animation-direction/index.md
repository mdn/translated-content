---
title: animation-direction
slug: Web/CSS/animation-direction
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/animation-direction
---
{{CSSRef}}

La propriété **`animation-direction`** indique si les cycles de l'animation doivent être joués dans le sens inverse et/ou de façon alternée.

{{EmbedInteractiveExample("pages/css/animation-direction.html")}}

Généralement, on passera par la propriété raccourcie {{cssxref("animation")}} qui permet de définir les différentes propriétés liées aux animations avec une déclaration.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Gestion de plusieurs animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Valeurs globales */
animation-direction: inherit;
animation-direction: initial;
animation-direction: unset;
```

### Valeurs

- `normal`
  - : L'animation est jouée dans le sens normal à chaque cycle. Autrement dit, au début de chaque cycle, l'animation est initialisée dans l'état de début. C'est le réglage par défaut.
- `reverse`
  - : L'animation est jouée dans le sens inverse à chaque cycle. Au début de chaque cycle, l'animation reprend depuis l'état de fin.
- `alternate`
  - : La lecture de l'animation se fait de façon alternée et change de sens à chaque cycle en commençant par le sens normal. Lorsque le sens est inversé, les étapes de l'animation sont effectuées de façon inversée et les fonctions de progression (_timing functions_) sont également inversées (`ease-in` sera ainsi remplacée par `ease-out`). Le premier cycle se fait dans le sens normal, le deuxième dans le sens inverse et ainsi de suite.
- `alternate-reverse`
  - : La lecture de l'animation se fait de façon alternée et change de sens à chaque cycle en commençant par le sens inverse (cf. ci-avant). Le premier cycle se fait dans le sens inverse, le deuxième dans le sens normal et ainsi de suite.

> **Note :** Lorsqu'on utiliser plusieurs valeurs, séparées par des virgules, pour une propriété `animation-*`, selon leur quantité, elles seront différemment affectées aux animations définies par {{cssxref("animation-name")}}. Pour plus d'informations, voir : paramétrer [les valeurs des propriétés pour plusieurs animations](/fr/docs/Web/CSS/Animations_CSS/Utiliser_les_animations_CSS).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
p {
  animation-duration: 5s;
  animation-name: glissement;
  animation-iteration-count: infinite;
}

.aller {
  animation-direction: normal;
}

.retour {
  animation-direction: reverse;
}
@keyframes glissement {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

### HTML

```html
<p class="aller">
  La Chenille et Alice se considérèrent un instant en silence.
  Enfin la Chenille sortit le houka de sa bouche, et lui adressa
  la parole d’une voix endormie et traînante.
</p>

<p class="retour">
  «&nbsp;Revenez,&nbsp;» lui cria la Chenille. «&nbsp;J’ai quelque chose
  d’important à vous dire&nbsp;!&nbsp;»
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","300","200")}}

## Spécifications

| Spécification                                                                                            | État                                 | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS3 Animations', '#animation-direction', 'animation-direction')}} | {{Spec2('CSS3 Animations')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.animation-direction")}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Utiliser_les_animations_CSS "Tutorial about CSS animations")
- {{domxref("AnimationEvent", "AnimationEvent")}}

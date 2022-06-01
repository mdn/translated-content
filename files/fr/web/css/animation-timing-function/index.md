---
title: animation-timing-function
slug: Web/CSS/animation-timing-function
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/animation-timing-function
---
{{CSSRef}}

La propriété **`animation-timing-function`** définit la façon dont une animation CSS doit se dérouler au fur et à mesure de chaque cycle. Cette propriété prendra comme valeurs une ou plusieurs fonctions {{cssxref("easing-function")}}.

{{EmbedInteractiveExample("pages/css/animation-timing-function.html")}}

Généralement, on pourra utiliser la propriété raccourcie {{cssxref("animation")}} pour définir l'ensemble des propriétés liées à une animation.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Valeurs fonctionnelles */
animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
animation-timing-function: steps(4, end);

/* Valeurs avec une fonction en escalier */
animation-timing-function: steps(4, jump-start);
animation-timing-function: steps(10, jump-end);
animation-timing-function: steps(20, jump-none);
animation-timing-function: steps(5, jump-both);
animation-timing-function: steps(6, start);
animation-timing-function: steps(8, end);

/* Définition de temporisations pour plusieurs animations */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);

/* Valeurs globales */
animation-timing-function: inherit;
animation-timing-function: initial;
animation-timing-function: unset;
```

Pour les animations cadencées (_keyframed_), la fonction s'applique entre chaque étape (ou [`@keyframes`](/fr/docs/Web/CSS/@keyframes)) plutôt que sur l'animation dans son ensemble. Autrement dit, la fonction de _timing_ est appliquée au début et à la fin de l'étape de l'animation.

Une fonction de progression pour une animation qui est définie pour une étape sera appliquée à cette étape en particulier. Si aucune fonction n'est définie pour l'étape, ce sera la fonction de progression de toute l'animation qui sera utilisée.

### Valeurs

- `<timing-function>`

  - : Chaque valeur {{cssxref("easing-function")}} représente une fonction temporelle à rattacher à une animation définie grâce à {{cssxref("animation-name")}}.

    Les valeurs avec des mots-clés (`ease`, `linear`, `ease-in-out`, etc.) correspondent à une courbe de Bézier cubique fixe avec quatre valeurs prédéfinies; La fonction `cubic-bezier()` permet de paramétrer une courbe spécifique. Les fonctions en escalier permettent de diviser l'animation en intervalles de même durée.

    - `ease`
      - : Correspond à `cubic-bezier(0.25, 0.1, 0.25, 1.0)` : c'est la valeur par défaut, la vitesse de l'animation augmente au milieu de celle-ci puis ralentit à la fin.
    - `linear`
      - : Correspond à `cubic-bezier(0.0, 0.0, 1.0, 1.0)` : l'animation s'effectue à vitesse constante.
    - `ease-in`
      - : Correspond à `cubic-bezier(0.42, 0, 1.0, 1.0)` : l'animation commence doucement puis la vitesse augmente jusqu'à ce qu'elle soit terminée.
    - `ease-out`
      - : Correspond à `cubic-bezier(0, 0, 0.58, 1.0)` : l'animation commence rapidement puis ralentit jusqu'à la fin.
    - `ease-in-out`
      - : Correspond à `cubic-bezier(0.42, 0, 0.58, 1.0)` : l'animation commence lentement, accèlere puis ralentit à nouveau avant la fin.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Une courbe de Bézier paramétrable à l'aide de quatre coefficient compris entre 0 et 1.
    - `steps( n, <jumpterm>)`

      - : L'animation s'effectue selon _n_ étapes de durées égales. Ainsi, si n vaut 5, l'animation se composera de cinq paliers. Selon la valeur du paramètre _jumpterm_, ces paliers se trouveront entre 0%, 20%, 40%, 60% et 80%, ou entre 20%, 40%, 60%, 80% et 100%, or ou inclueront également 0% et 100% (soit 0%, 25%, 50%, 75% et 100%) :

        - `jump-start`
          - : La fonction est continue à gauche et le premier saut se produit au début de l'animation.
        - `jump-end`
          - : La fonction est continue à droite et le dernier saut se produit à la fin de l'animation.
        - `jump-none`
          - : Il n'y a aucune rupture au début ou à la fin. Il y a un palier constant après 0% et un palier constant avant 100% (chacun durant 1/n).
        - `jump-both`
          - : Une pause est présente aux niveaux 0% et 100%, ce qui ajoute un niveau pendant l'animation.
        - `start`
          - : Identique à `jump-start.`
        - `end`
          - : Identique à `jump-end.`

    - `step-start`
      - : Synonyme de `steps(1, jump-start)`
    - `step-end`
      - : Synonyme de `steps(1, jump-end)`

> **Note :** Lorsqu'on définit plusieurs valeurs, séparées par des virgules, sur une propriété `animation-*`, elles seront affectées selon leur ordre aux différentes animations listées par  {{cssxref("animation-name")}}. Si le nombre de valeurs n'est pas le même que le nombre d'animation, voir [Paramétrer plusieurs valeurs de propriétés pour les animations](/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations#utiliser_plusieurs_valeurs_pour_diff%c3%a9rentes_animations).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Courbes de Bézier cubiques

```html hidden
<div class="parent">
  <div class="ease">ease</div>
  <div class="easein">ease-in</div>
  <div class="easeout">ease-out</div>
  <div class="easeinout">ease-in-out</div>
  <div class="linear">linear</div>
  <div class="cb">cubic-bezier(0.2,-2,0.8,2)</div>
</div>
```

```css hidden
.parent > div[class] {
    animation-name: changeme;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    margin-bottom: 4px;
}
@keyframes changeme {
   0% {
      min-width: 12em;
      width: 12em;
      background-color: black;
      border: 1px solid red;
      color: white;
   }
   100% {
      width: 90vw;
      min-width: 24em;
      background-color: magenta;
      color: yellow;
      border: 1px solid orange;
   }
}
```

```css
.ease {
   animation-timing-function: ease;
}
.easein {
   animation-timing-function: ease-in;
}
.easeout {
   animation-timing-function: ease-out;
}
.easeinout {
   animation-timing-function: ease-in-out;
}
.linear {
   animation-timing-function: linear;
}
.cb {
   animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
}
```

{{EmbedLiveSample("Courbes_de_Bézier_cubiques")}}

### Fonctions en escalier

```html hidden
<div class="parent">
  <div class="jump-start">jump-start</div>
  <div class="jump-end">jump-end</div>
  <div class="jump-both">jump-both</div>
  <div class="jump-none">jump-none</div>
  <div class="start">start</div>
  <div class="end">end</div>
  <div class="step-start">step-start</div>
  <div class="step-end">step-end</div>
</div>
```

```css hidden
.parent > div[class] {
    animation-name: changeme;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    margin-bottom: 4px;
}
@keyframes changeme {
   0% {
      min-width: 12em;
      width: 12em;
      background-color: black;
      border: 1px solid red;
      color: white;
   }
   100% {
      width: 90vw;
      min-width: 24em;
      background-color: magenta;
      color: yellow;
      border: 1px solid orange;
   }
}
```

```css
.jump-start {
   animation-timing-function: steps(5, jump-start);
}
.jump-end {
   animation-timing-function: steps(5, jump-end);
}
.jump-none {
   animation-timing-function: steps(5, jump-none);
}
.jump-both {
   animation-timing-function: steps(5, jump-both);
}
.start {
   animation-timing-function: steps(5, start);
}
.end {
   animation-timing-function: steps(5, end);
}
.step-start {
   animation-timing-function: step-start;
}
.step-end {
   animation-timing-function: step-end;
}
```

{{EmbedLiveSample("Fonctions_en_escalier")}}

## Spécifications

| Spécification                                                                                                            | État                                 | Commentaires          |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | --------------------- |
| {{SpecName('CSS3 Animations', '#animation-timing-function', 'animation-timing-function')}} | {{Spec2('CSS3 Animations')}} | Définition initiale.. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.animation-timing-function")}}

## Voir aussi

- [Utiliser les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations "CSS developer guide about CSS animations")
- {{cssxref('easing-function')}}
- L'API JavaScript {{domxref("AnimationEvent")}}

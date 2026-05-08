---
title: Propriété CSS `transition-timing-function`
short-title: transition-timing-function
slug: Web/CSS/Reference/Properties/transition-timing-function
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`transition-timing-function`** décrit la façon dont les valeurs intermédiaires des propriétés CSS affectées par un [effet de transition](/fr/docs/Web/CSS/Guides/Transitions/Using) sont calculées.

{{InteractiveExample("Démonstration CSS&nbsp;: transition-timing-function")}}

```css interactive-example-choice
transition-timing-function: linear;
```

```css interactive-example-choice
transition-timing-function: ease-in;
```

```css interactive-example-choice
transition-timing-function: steps(6, end);
```

```css interactive-example-choice
transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Survolez pour voir<br />la transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #990099;
  color: white;
  margin-right: 40%;
}
```

Cela vous permet, en substance, de définir une courbe d'accélération afin que la vitesse de la transition puisse varier au cours de sa durée.

Cette courbe d'accélération est définie à l'aide d'une {{CSSxRef("easing-function")}} pour chaque propriété à faire transiter.

Vous pouvez définir plusieurs fonctions d'accélération&nbsp;; chacune sera appliquée à la propriété correspondante telle que définie par la propriété {{CSSxRef("transition-property")}}, qui agit comme une liste de `transition-property`. Si moins de fonctions d'accélération sont définies que d'éléments dans la liste `transition-property`, l'agent utilisateur doit calculer la valeur utilisée en répétant la liste de valeurs jusqu'à ce qu'il y en ait une pour chaque propriété en transition. Si davantage de fonctions d'accélération sont définies, la liste est tronquée à la bonne taille. Dans les deux cas, la déclaration CSS reste valide.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;

/* Valeurs fonctionnelles */
transition-timing-function: steps(4, jump-end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);

/* Valeurs avec une fonction en escalier */
transition-timing-function: steps(4, jump-start);
transition-timing-function: steps(10, jump-end);
transition-timing-function: steps(20, jump-none);
transition-timing-function: steps(5, jump-both);
transition-timing-function: steps(6, start);
transition-timing-function: steps(8, end);

/* Utilisation de plusieurs fonctions */
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* Valeurs globales */
transition-timing-function: inherit;
transition-timing-function: initial;
transition-timing-function: revert;
transition-timing-function: revert-layer;
transition-timing-function: unset;
```

### Valeurs

- `<easing-function>`
  - : Chaque valeur {{CSSxRef("&lt;easing-function&gt;")}} représente une fonction temporelle à rattacher à chaque propriété de la transition définies grâce à {{CSSxRef("transition-property")}}.

    Les valeurs des mots-clés qui ne sont pas des étapes (`ease`, `linear`, `ease-in-out`, etc.) représentent chacune une courbe de Bézier cubique avec quatre points de contrôle fixes, tandis que la fonction `cubic-bezier()` permet d'utiliser une valeur non prédéfinie. Les fonctions d'accélération par étapes divisent la durée d'entrée en un nombre spécifié d'intervalles de durée égale. Elles sont définies par un nombre d'étapes et une position d'étape.
    - `ease`
      - : Correspond à `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, c'est la valeur par défaut, la vitesse de la transition augmente au milieu de celle-ci puis ralentit à la fin.
    - `linear`
      - : Correspond à `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, la transition s'effectue à vitesse constante.
    - `ease-in`
      - : Correspond à `cubic-bezier(0.42, 0, 1.0, 1.0)`, la transition commence doucement puis la vitesse augmente jusqu'à ce qu'elle soit terminée.
    - `ease-out`
      - : Correspond à `cubic-bezier(0, 0, 0.58, 1.0)`, la transition commence rapidement puis ralentit jusqu'à la fin.
    - `ease-in-out`
      - : Correspond à `cubic-bezier(0.42, 0, 0.58, 1.0)`, la transition commence lentement, accèlere puis ralentit à nouveau avant la fin.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Une courbe de Bézier paramétrable à l'aide de quatre coefficient compris entre 0 et 1.
    - `steps( n, <jumpterm>)`
      - : Affiche la transition le long de _n étapes le long de la transition, affichant chaque étape pendant_ des durées égales. Par exemple, si _n_ est 5, il y a 5 étapes. Que la transition se maintienne temporairement à 0%, 20%, 40%, 60% et 80%, ou à 20%, 40%, 60%, 80% et 100%, ou fasse 5 arrêts entre 0% et 100% le long de la transition, ou fasse 5 arrêts incluant les marques 0% et 100% (à 0%, 25%, 50%, 75% et 100%) dépend du terme de saut utilisé&nbsp;:
        - `jump-start`
          - : La fonction est continue à gauche et le premier saut se produit au début de la transition.
        - `jump-end`
          - : La fonction est continue à droite et le dernier saut se produit à la fin de la transition.
        - `jump-none`
          - : Il n'y a aucune rupture au début ou à la fin. Il y a un palier constant après 0% et un palier constant avant 100% (chacun durant 1/n).
        - `jump-both`
          - : Une pause est présente aux niveaux 0% et 100%, ce qui ajoute un niveau pendant la transition.
        - `start`
          - : Identique à `jump-start.`
        - `end`
          - : Identique à `jump-end.`

    - `step-start`
      - : Synonyme de `steps(1, jump-start)`
    - `step-end`
      - : Synonyme de `steps(1, jump-end)`

## Accessibilité

Certaines animations permettent de guider les utilisateur·ice·s vers les actions possibles et utiles, d'illustrer les relations qui existent entre les éléments d'interface et d'informer les utilisateur·ice·s quant aux actions qui se sont produites. Les animations réduisent ainsi la charge cognitive et améliorent la perception du changement.

Prévoyez un mécanisme permettant de mettre en pause ou de désactiver l'animation, ainsi que d'utiliser la [requête média sur la réduction des mouvements](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) (ou l'équivalent [à l'indication du client de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lagent_utilisateur) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) pour offrir une expérience adaptée aux utilisateur·ice·s ayant exprimé une préférence pour moins d'animations.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

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
.parent {
}
.parent > div[class] {
  width: 12em;
  min-width: 12em;
  margin-bottom: 4px;
  background-color: black;
  border: 1px solid red;
  color: white;
  transition-property: all;
  transition-duration: 7s;
}
.parent > div.box1 {
  width: 90vw;
  min-width: 24em;
  background-color: magenta;
  color: yellow;
  border: 1px solid orange;
  transition-property: all;
  transition-duration: 2s;
}
```

```js hidden
function updateTransition() {
  var els = document.querySelectorAll(".parent > div[class]");
  for (var c = els.length, i = 0; i < c; i++) {
    els[i].classList.toggle("box1");
  }
}

var intervalID = window.setInterval(updateTransition, 10000);
```

```css
.ease {
  transition-timing-function: ease;
}
.easein {
  transition-timing-function: ease-in;
}
.easeout {
  transition-timing-function: ease-out;
}
.easeinout {
  transition-timing-function: ease-in-out;
}
.linear {
  transition-timing-function: linear;
}
.cb {
  transition-timing-function: cubic-bezier(0.2, -2, 0.8, 2);
}
```

{{EmbedLiveSample("Courbes de Bézier cubiques")}}

### Fonctions en créneaux

```html hidden
<div class="parent">
  <div class="jump-start">jump-start</div>
  <div class="jump-end">jump-end</div>
  <div class="jump-both">jump-both</div>
  <div class="jump-none">jump-none</div>
  <div class="step-start">step-start</div>
  <div class="step-end">step-end</div>
</div>
```

```css hidden
.parent {
}
.parent > div[class] {
  width: 12em;
  min-width: 12em;
  margin-bottom: 4px;
  background-color: black;
  border: 1px solid red;
  color: white;
  transition-property: all;
  transition-duration: 7s;
}
.parent > div.box1 {
  width: 90vw;
  min-width: 24em;
  background-color: magenta;
  color: yellow;
  border: 1px solid orange;
  transition-property: all;
  transition-duration: 2s;
}
```

```js hidden
function updateTransition() {
  var els = document.querySelectorAll(".parent > div[class]");
  for (var c = els.length, i = 0; i < c; i++) {
    els[i].classList.toggle("box1");
  }
}

var intervalID = window.setInterval(updateTransition, 10000);
```

```css
.jump-start {
  transition-timing-function: steps(5, jump-start);
}
.jump-end {
  transition-timing-function: steps(5, jump-end);
}
.jump-none {
  transition-timing-function: steps(5, jump-none);
}
.jump-both {
  transition-timing-function: steps(5, jump-both);
}
.step-start {
  transition-timing-function: step-start;
}
.step-end {
  transition-timing-function: step-end;
}
```

{{EmbedLiveSample("Fonctions en créneaux")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using)
- Le type de donnée {{CSSxRef("&lt;easing-function&gt;")}}
- Le module [des fonctions d'accélération CSS](/fr/docs/Web/CSS/Guides/Easing_functions)
- La propriété {{CSSxRef('transition')}}
- La propriété {{CSSxRef('transition-property')}}
- La propriété {{CSSxRef('transition-duration')}}
- La propriété {{CSSxRef('transition-delay')}}
- L'interface API {{DOMxRef("TransitionEvent")}}

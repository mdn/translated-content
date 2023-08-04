---
title: transition-timing-function
slug: Web/CSS/transition-timing-function
---

{{CSSRef}}

La propriété **`transition-timing-function`** décrit la façon dont les valeurs intermédiaires des propriétés CSS affectées par un [effet de transition](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) sont calculées. Ceci permet donc de définir une courbe d'accelération, de manière à ce que la vitesse de la transition varie au cours de sa durée.

{{EmbedInteractiveExample("pages/css/transition-timing-function.html")}}

Cette courbe d'accelération est définie en utilisant une {{cssxref("&lt;timing-function&gt;")}} pour chacune des propriétés à animer.

Il est possible de définir plusieurs fonctions de temporisation dans une même déclaration ; chacune sera appliquée à la propriété correspondante listée avec la propriété {{cssxref("transition-property")}}, qui agit comme liste maîtresse :

- S'il y a moins de fonctions définies que d'éléments dans la liste, les valeurs manquantes sont remplacées par la valeur par défaut (`ease`).
- S'il y a trop de fonctions de temporisation, la liste est simplement tronquée à la bonne dimension.

Dans les deux cas, la déclaration CSS reste valide.

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
transition-timing-function: unset;
```

### Valeurs

- `<timing-function>`

  - : Chaque valeur {{cssxref("&lt;timing-function&gt;")}} représente une fonction temporelle à rattacher à chaque propriété de la transition définies grâce à {{cssxref("transition-property")}}.

    Les valeurs avec des mots-clés (`ease`, `linear`, `ease-in-out`, etc.) correspondent à une courbe de Bézier cubique fixe avec quatre valeurs prédéfinies; La fonction `cubic-bezier()` permet de paramétrer une courbe spécifique. Les fonctions en escalier permettent de diviser la transition en intervalles de même durée.

    - `ease`
      - : Correspond à `cubic-bezier(0.25, 0.1, 0.25, 1.0)` : c'est la valeur par défaut, la vitesse de la transition augmente au milieu de celle-ci puis ralentit à la fin.
    - `linear`
      - : Correspond à `cubic-bezier(0.0, 0.0, 1.0, 1.0)` : la transition s'effectue à vitesse constante.
    - `ease-in`
      - : Correspond à `cubic-bezier(0.42, 0, 1.0, 1.0)` : la transition commence doucement puis la vitesse augmente jusqu'à ce qu'elle soit terminée.
    - `ease-out`
      - : Correspond à `cubic-bezier(0, 0, 0.58, 1.0)` : la transition commence rapidement puis ralentit jusqu'à la fin.
    - `ease-in-out`
      - : Correspond à `cubic-bezier(0.42, 0, 0.58, 1.0)` : la transition commence lentement, accèlere puis ralentit à nouveau avant la fin.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Une courbe de Bézier paramétrable à l'aide de quatre coefficient compris entre 0 et 1.
    - `steps( n, <jumpterm>)`

      - : La transition s'effectue selon _n_ étapes de durées égales. Ainsi, si n vaut 5, la transition se composera de cinq paliers. Selon la valeur du paramètre _jumpterm_, ces paliers se trouveront entre 0%, 20%, 40%, 60% et 80%, ou entre 20%, 40%, 60%, 80% et 100%, or ou inclueront également 0% et 100% (soit 0%, 25%, 50%, 75% et 100%) :

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

{{EmbedLiveSample("Courbes_de_Bézier_cubiques")}}

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

{{EmbedLiveSample("Fonctions_en_créneaux")}}

## Accessibilité

Certaines animations permettent de guider les utilisateurs vers les actions possibles et utiles, d'illustrer les relations qui existent entre les éléments d'interface et d'informer les utilisateurs quant aux actions qui se sont produites. Les animations réduisent ainsi la charge cognitive et améliorent la perception du changement.

Toutefois, certaines animations s'avèrent problématiques pour les personnes souffrant de troubles cognitifs, d'épilepsie ou autre. Pour cela, on prévoira d'intégrer un mécanisme qui permette de suspendre ou de désactiver l'animation. De même, on pourra tirer parti de [la requête média sur la réduction de mouvements](/fr/docs/Web/CSS/@media/prefers-reduced-motion) afin de créer une expérience complémentaire pour les personnes ayant exprimé leur souhait d'absence d'animation.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transitions CSS](/fr/docs/Web/CSS/CSS_Transitions/Utiliser_transitions_CSS)
- {{domxref("TransitionEvent")}}

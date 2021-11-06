---
title: <easing-function>
slug: Web/CSS/easing-function
translation_of: Web/CSS/easing-function
---
{{CSSRef}}

Le [type de données](/fr/docs/Web/CSS/CSS_Types) CSS **`<easing-function>`** indique une fonction mathématique qui décrit la façon dont une valeur numérique évolue.

Cette transition entre deux valeurs peut être appliquées dans différentes situations. Elle peut être utilisée pour décrire la rapidité selon laquelle les valeurs évoluent durant les animations. Elle permet ainsi de faire varier la vitesse de l'animation au fur et à mesure de sa progression. Elle peut aussi être utilisée pour interpoler deux couleurs au sein d'un dégradé.

Les fonctions d'évolution qui appartiennent au sous ensemble des courbes de Bézier cubiques sont souvent appelées des fonctions « douces » car elles permettent d'avoir des évolutions légères en début et en fin d'interpolation. Les fonctions d'évolution relient un ratio d'entrée à un ratio de sortie, tous les deux exprimés comme des nombres ([`<number>`](/fr/docs/Web/CSS/<number>)). Pour ces valeurs, `0.0` représente l'état initial et `1.0` représente l'état final.

Selon la fonction utilisée, la sortie calculée peut parfois être supérieure à `1.0` ou être inférieure à `0.0` pendant le cours de l'animation. Cela placera la valeur plus loin que son état final puis la fera revenir. Pour les animations de certaines propriétés (comme [`left`](/fr/docs/Web/CSS/left) ou [`right`](/fr/docs/Web/CSS/right)), cela crée un effet de rebond.

![](tf_with_output_gt_than_1.png)

Toutefois, certaines propriétés restreindront la valeur de sortie au sein d'un intervalle acceptable. Ainsi, pour une valeur représentant la composante d'une couleur, celle-ci sera écrétée pour rester dans l'intervalle autorisé 0-255. Certaines courbes `cubic-bezier()` illustrent cette propriété.

![](tf_with_output_gt_than_1_clipped.png)

## Syntaxe

Il existe trois types de [fonctions de transition](#easing_functions) : linéaires, [courbes de Bézier cubiques](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B.C3.A9zier_curves) et les fonctions en escalier. Une valeur du type `<easing-function>` décrit la fonction de transition en utilisant l'un de ces trois types.

### Fonctions de transition

CSS prend en charge trois sortes de fonction de transition : les fonctions linéaires, le sous ensemble des courbes cubiques de Bézier qui sont des fonctions et les fonctions en escalier. Les fonctions les plus utiles peuvent être facilement utilisées grâce à des mots-clés.

#### Les fonctions de transition linéaires

##### linear

![Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une ligne diagonale droite par de l'origine 0 0 jusqu'à arriver à la position 1 1.](cubic-bezier-linear.png)

L'interpolation se fait à évolution constante, du début jusqu'à la fin. Ce mot-clé représente la fonction de transition décrite par `cubic-bezier(0.0, 0.0, 1.0, 1.0)`.

#### La classe des fonctions de transition cubic-bezier()

![Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une ligne courbe par de l'origine jusqu'à atteindre la position 1 1. Le point à l'origine est appelé 'P₀ = (0, 0)'. En partant de l'origine, on a une poignée de Bézier intitulée 'P₁ = (0.075, 0.75)'. Le point aux coordonnées 1 1 est intitulé 'P₃ = (1, 1)'. En partant du point 1 1, on a une poignée de Bézier intitulée 'P₂ = (0.0875, 0.36)'.](cubic-bezier-example.png)

La notation fonctionnelle `cubic-bezier()` définit [une courbe de Bézier cubique](https://fr.wikipedia.org/wiki/Courbe_de_B%C3%A9zier#Courbes_de_B%C3%A9zier_cubiques). Ces courbes étant continues, elles sont souvent utilisées afin de démarrer et de finir progressivement une interpolation. Elles sont parfois appelées _fonctions de transition_.

Une courbe de Bézier cubique est définie par quatre points P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub> et P<sub>3</sub>. P<sub>0</sub> et P<sub>3</sub> représentent les points de début et de fin de la courbe. Pour les fonctions de transition CSS, ces points sont fixes, car les coordonnées représentent des ratios (sur les abscisses, le ratio en temps et sur les ordonnées, le ratio en sortie). P<sub>0</sub> est donc situé en `(0, 0)` et représente l'état initial. P<sub>3</sub> est en `(1, 1)` et réprésente l'état final.

Toutes les courbes de Bézier cubiques ne sont pas des fonctions de transition, car toutes ne sont pas [des fonctions mathématiques](<https://fr.wikipedia.org/wiki/Fonction_(math%C3%A9matiques)>) (c'est-à-dire des courbes qui, pour une abscisse donnée, ont une seule ou zéro valeur). Avec les contraintes imposées sur P<sub>0</sub> et P<sub>3</sub> en CSS, une courbe de Bézier cubique sera une fonction mathématique et pourra être utilisée comme fonction de transition, si et seulement si les abscisses de P<sub>1</sub> et P<sub>2</sub> appartiennent, tous les deux, à l'intervalle `[0, 1]`.

Les courbes de Bézier cubiques pour lesquelles les ordonnées des points P<sub>1</sub> ou P<sub>2</sub> sont en dehors de l'intervalle `[0, 1]` pourront générer un effet de rebond.

Si on utilise une déclaration `cubic-bezier` avec une fonction invalide, CSS ignorera l'ensemble de la propriété.

##### Syntaxe

```css
cubic-bezier(x1, y1, x2, y2)
```

avec :

- **_x<sub>1</sub>_, _y<sub>1</sub>_, _x<sub>2</sub>_, _y<sub>2</sub>_**

  - : Des valeurs numériques ([`<number>`](/fr/docs/Web/CSS/<number>)) qui représentent les abscisses et ordonnées des points P

    <sub>1</sub>

    et P

    <sub>2</sub>

    qui définissent la courbe de Bézier cubique. x

    <sub>1</sub>

    et x

    <sub>2</sub>

    doivent appartenir à l'intervalle \[0, 1] afin que la valeur soit valide.

#### Mots-clés pour les fonctions de transition communes

##### ease

![Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une ligne courbe part de l'origine jusqu'au point 1 1 en démarrant rapidement et finissant par un arc plat.](cubic-bezier-ease.png)

L'interpolation démarre doucement puis accélère vivement avant de ralentir vers la fin. Ce mot-clé représente la fonction de transition `cubic-bezier(0.25, 0.1, 0.25, 1.0)`. Cette valeur est semblable à [`ease-in-out`](#ease-in-out), bien qu'elle accélère plus rapidement au début.

##### ease-in

![Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une courbe part l'origine jusqu'au point 1 1 avec une bonne partie de la courbe proche de l'origine et qui s'élève en quasi-ligne droite afin d'atteindre le point d'arrivée 1 1.](cubic-bezier-ease-in.png)

L'interpolation démarre lentement puis s'accélère progressivement jusqu'à la fin où elle s'arrête de façon abrutpe. Ce mot-clé représente la fonction de transition `cubic-bezier(0.42, 0.0, 1.0, 1.0)`.

##### `ease-in-out`

![Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une ligne courbe qui part de l'origine jusqu'à atteindre le point 1 1. La courbe est symétrique et ressemble à un S étiré](cubic-bezier-ease-in-out.png)

L'interpolation démarre lentement puis accélère avant de ralentir vers la fin. Ce mot-clé représente la fonction de transition `cubic-bezier(0.42, 0.0, 0.58, 1.0)`. Au début, elle se comporte comme [`ease-in`](#ease-in) et à la fin, elle se comporte comme [`ease-out`](#ease-out).

##### ease-out

![Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une ligne courbe part de l'origine jusqu'à atteindre le point 1 1. Cette courbe démarre comme une ligne droite en diagonale puis se courbe progressivement à l'approche de 1 1.](cubic-bezer-ease-out.png)

L'interpolation démarre abruptement puis ralentit progressivement vers la fin. Ce mot-clé correspond à la fonction de transition `cubic-bezier(0.0, 0.0, 0.58, 1.0)`.

#### Les fonctions de transition en escalier

La notation fonctionnelle `steps()` définit une fonction en escalier qui divise le domaine des valeurs de sorties en marches équidistantes.

##### Syntaxe

```css
steps(nombre_de_marches, direction)
```

avec :

- _nombre_de_marches_
  - : Un entier ([`<integer>`](/fr/docs/Web/CSS/<integer>)) strictement positif qui représente le nombre de segments équidistants qui composent la fonction en escalier.
- _direction_

  - : Un mot-clé qui indique si la fonction est continue à gauche ou continue à droite :

    - `jump-start` indique une fonction continue à gauche : le premier saut a lieu au début de l'interpolation ;
    - `jump-end` indique une fonction continue à droite : le dernier saut a lieu à la fin de l'interpolation ;
    - `jump-both` indique une fonction continue à droite et à gauche avec des pauses au début et à la fin, ce qui se traduit par l'ajout d'une étape lors de l'itération de l'interpolation ;
    - `jump-none` indique qu'il n'y a pas de saut au début ou à la fin mais une temporisation de 1/n de la durée totale à chaque extrêmité.
    - `start` est équivalent à `jump-start`
    - `end` est équivalent à `jump-end`

    `end` est la valeur par défaut.

##### steps( n, \<direction> )

- `steps(2, jump-start)`
  `steps(2, start)`

  ![Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Trois points sont affichés : le premier aux coordonnées 0 0, le deuxième aux coordonnées 0,5 0,5 et le troisième aux coordonnées 1 1. Les deuxième et troisième points sont le début de lignes horizontales qui partent vers la gauche sur 0,5 unités.](steps-2-start.png)

- `steps(4, jump-end) steps(4, end)`

  ![Quatre marches avec un saut de la quatrième à la valeur située à la fin.](steps-4-end.png)

- `steps(5, jump-none)`

  ![Cinq marches, sans saut : 20% de temps s'écoule à l'étape initiale et 20% de temps s'écoule à l'étape finale.](step5none.png)

- `steps(3, jump-both)`

  ![Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Cinq points sont affichés, respectivement aux coordonnées 0 0, 0 0,25, 0,5 0,5, 0,75 0,75, 1 1. Les deuxième, troisième et quatrième points ont des lignes qui partent vers la droite sur 0,25 unités.](step3both.png)

##### step-start

![Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Deux points sont présents, le premier situé aux coordonnées 0 0 et le second aux coordonnées 1 1. Une ligne horizontale part du deuxième point vers l'axe Y.](steps-1-start.png) L'interpolation saute directement à l'état final et reste ainsi jusqu'à la fin. Ce mot-clé correspond à la fonction de transition `steps(1, jump-start)` ou `steps(1, start)`.

##### step-end

![Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Deux points sont présents, le premier situé aux coordonnées 0 0 et le second aux coordonnées 1 1. Une ligne horizontale part du premier point et reste sur l'axe des abscisses.](steps-1-end.png) L'interpolation reste dans son état initial jusqu'à la fin où elle saute directement à l'état final. Ce mot-clé représente la fonction de transition `steps(1, jump-end)` ou `steps(1, end)`.

## Exemples

### Comparaison des fonctions de transition

Dans cet exemple, on crée une animation qui peut être démarrée ou stoppée à l'aide du bouton fourni et un menu est affiché pour choisir la fonction de transition à utiliser : différents mots-clés sont disponibles ainsi que des exemples utilisant `cubic-bezier()` et `steps()`. L'idée est de fournir un outil de comparaison simple entre ces fonctions.

#### HTML

```html
<div>
  <div></div>
</div>
<ul>
  <li>
    <button class="animation-button">Démarrer l'animation</button>
  </li>
  <li>
    <label for="easing-select">Choisir une fonction de transition :</label>
    <select id="easing-select">
      <option selected>linear</option>
      <option>ease</option>
      <option>ease-in</option>
      <option>ease-in-out</option>
      <option>ease-out</option>
      <option>cubic-bezier(0.1, -0.6, 0.2, 0)</option>
      <option>cubic-bezier(0, 1.1, 0.8, 4)</option>
      <option>steps(5, end)</option>
      <option>steps(3, start)</option>
      <option>steps(4)</option>
    </select>
  </li>
</ul>
```

#### CSS

```css
body > div {
  position: relative;
  height: 100px;
}

div > div {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: blue;
  background-image: radial-gradient(circle at 10px 10px, rgba(25,255,255,0.8),rgba(25,255,255,0.4));
  border-radius: 50%;
  top: 25px;
  animation: 1.5s infinite alternate;
}

@keyframes move-right {
  from {
    left: 10%;
  }

  to {
    left: 90%;
  }
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const startBtn = document.querySelector("button");
const divElem = document.querySelector("div > div");

startBtn.addEventListener("click", () => {
  if(startBtn.textContent === "Démarrer l'animation") {
    divElem.style.animationName = "move-right";
    startBtn.textContent = "Arrêter l'animation";
    divElem.style.animationTimingFunction = selectElem.value;
  } else {
    divElem.style.animationName = "unset";
    startBtn.textContent = "Démarrer l'animation";
  }
});

selectElem.addEventListener("change", () => {
  divElem.style.animationTimingFunction = selectElem.value;
});
```

#### Résultat

{{EmbedLiveSample('Comparaison_des_fonctions_de_transition', '100%', 300)}}

### Exemples avec cubic-bezier()

Ces courbes de Bézier cubiques sont valides pour être utilisées en CSS :

```css
/* La courbe de Bézier canonique avec quatre nombres dans l'intervalle [0,1]. */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* On peut aussi utiliser des valeurs entières (<integer>) car ce sont des nombres. */
cubic-bezier(0, 0, 1, 1)

/* Les valeurs négatives pour les ordonnées sont valides et créent un effet de rebond.*/
cubic-bezier(0.1, -0.6, 0.2, 0)

/* Les valeurs supérieures à 1.0 pour les ordonnées sont aussi valides. */
cubic-bezier(0, 1.1, 0.8, 4)
```

Ces courbes de Bézier cubiques sont invalides en CSS :

```css example-bad
/* Bien que les valeurs animées puissent être des couleurs,
   les courbes de Bézier ne fonctionnent qu'avec des ratios numériques.*/
cubic-bezier(0.1, red, 1.0, green)

/* Les abscisses doivent être dans l'intervalle [0, 1] car sinon l'intervalle
   couvert par la courbe n'est pas valide. */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* Les deux points doivent être explicitement définis, il n'y a pas de valeur
   par défaut. */
cubic-bezier(0.3, 2.1)

/* Les abscisses doivent être dans l'intervalle [0, 1], sinon la courbe
   ne représente pas une fonction du temps. */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)
```

### Exemples avec steps()

Ces fonctions de transition sont valides :

```css
/* Il y a 5 étapes, la dernière se produit juste avant
   la fin de l'animation. */
steps(5, end)

/* Un escalier à deux marches, la première se produisant
   au début de l'animation. */
steps(2, start)

/* Le deuxième paramètre est optionnel. */
steps(2)
```

> **Note :** Si l'animation contient plusieurs arrêts, les marches décrites dans la fonction `steps()` s'appliqueront à chaque section. Ainsi, pour une animation avec trois segments et `steps(2)`, on aura au total 6 étapes, 2 pour chaque segment.

Les fonctions de transitions qui suivent sont invalides :

```css example-bad
/* Le premier paramètre doit être un entier et ne peut pas être
   une valeur décimale (même si celle-ci est égale à une valeur entière). */
steps(2.0, jump-end)

/* La quantité de marches ne doit pas être négative. */
steps(-3, start)

/* Il doit y avoir au moins une marche.*/
steps(0, jump-none)
```

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS Easing 1', '#typedef-easing-function', '&lt;easing-function&gt;')}} | {{Spec2('CSS Easing 1')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.types.easing-function", 2)}}

## Voir aussi

- [CSS Animations](/fr/docs/Web/CSS/CSS_Animations)
- [CSS Transitions](/fr/docs/Web/CSS/CSS_Transitions)
- [cubic-bezier](https://cubic-bezier.com/)

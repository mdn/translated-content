---
title: <easing-function>
slug: Web/CSS/easing-function
l10n:
  sourceCommit: 803a7a460338dab4900fd44cf7ab569e3bf5799a
---

{{CSSRef}}

Le [type de données](/fr/docs/Web/CSS/CSS_Types) [CSS](/fr/docs/Web/CSS) **`<easing-function>`** représente une fonction mathématique décrivant dont une valeur numérique change.

Cette transition entre deux valeurs peut être appliquées dans différentes situations. Elle peut être utilisée pour décrire la rapidité selon laquelle les valeurs évoluent durant les animations. Elle permet ainsi de faire varier la vitesse de l'animation au fur et à mesure de sa progression. On peut utiliser une fonction d'évolution pour les [transitions](/fr/docs/Web/CSS/transition-timing-function) et [animations](/fr/docs/Web/CSS/animation-timing-function) CSS.

## Syntaxe

```css
/* fonction et mot-clé pour une évolution linéaire */
/* linear(<liste-points>) */
linear(1, -0.5, 0)
linear

/* fonction et mots-clés pour les courbes de Bézier cubiques */
/* cubic-bezier(<x1>, <y1>, <x2>, <y2>) */
cubic-bezier(0.25, 0.1, 0.25, 1)
ease
ease-in
ease-out
ease-in-out

/* fonctions et mots-clés pour les évolutions en escalier */
/* steps(<nombre-de-marches>, <direction>) */
steps(4, end)
steps(10, jump-both)
step-start
step-end
```

### Valeurs

- `linear`

  - : Indique que l'évolution a lieu à vitesse constante pendant toute la durée. Ce mot-clé est à la fois équivalent à [`cubic-bezier(0, 0, 1, 1)`](#fonction_dévolution_en_courbe_de_bézier_cubique) et à [`linear(0, 1)`](#fonction_dévolution_linéaire).

![Un graphique avec en abscisses la progression de l'entrée et en ordonnées la progression de la sortie, on voit une ligne droite entre l'origine et le point (1, 1).](linear.svg)

- `<linear-easing-function>`

  - : Specifies a `linear()` function with one or more comma-separated _linear stops_, each containing up to two optional _stop lengths_, to control the progress of an animation or transition.

    The `linear()` function specifies a `<linear-stop-list>`, a comma-separated list of points along the animation or transition progress. Each point or `<linear-stop>` in the list is specified as a {{cssxref("&lt;number&gt;")}} between `0` and `1`. By default, each stop in the `<linear-stop-list>` is equidistant. To have more control on the progress of the animation or transition, each point can include up to two optional {{cssxref("&lt;percentage&gt;")}} `<linear-stop-length>` values.

    - `<number>`: Represents a point in time along the duration of the animation or transition. The value `0` represents the start of the iteration and `1` represents the end. Values outside the 0 to 1 range are also allowed.

    - `<percentage>`: Indicates the position of a linear stop along the duration. It can take up to two values. If one value is specified, it defines the start of the associated linear stop. If two percentage values are specified, they define the length of the stop: the first percentage indicates the starting point and the second percentage indicates the ending point for that segment in the animation or transition. If no `<percentage>` value is specified, which is the default, the stops are spread evenly along the timeline.

- `<cubic-bezier-easing-function>`

  - : Specifies a [Bézier curve](/fr/docs/Glossary/Bezier_curve) to shape the progress of an animation or a transition. In CSS, Bézier curves are defined by four control points that mathematically describe the curve: a starting point, an ending point, and two control points. The cubic Bézier easing function can be defined in one of these two ways: by creating a custom curve with a four-parameter `cubic-bezier()` function call or by using one of the predefined keyword values, which map to the commonly used Bézier curve parameters. The predefined keyword values include:

    `ease`: This keyword represents the easing function `cubic-bezier(0.25, 0.1, 0.25, 1)`. It indicates that the interpolation starts slowly, accelerates sharply, and then slows gradually towards the end. It is similar to the `ease-in-out` keyword, though it accelerates more sharply at the beginning.

    `ease-in`: This keyword represents the easing function `cubic-bezier(0.42, 0, 1, 1)`. It indicates that the interpolation starts slowly, then progressively speeds up until the end, at which point it stops abruptly.

    `ease-out`: This keyword represents the easing function `cubic-bezier(0, 0, 0.58, 1)`. It indicates that the interpolation starts abruptly and then progressively slows down towards the end.

    `ease-in-out`: This keyword represents the easing function `cubic-bezier(0.42, 0, 0.58, 1)`. It indicates that the interpolation starts slowly, speeds up, and then slows down towards the end. At the beginning, it behaves like the `ease-in` keyword; at the end, it is like the `ease-out` keyword.

    ![Graphs of "Input progress" to "Output progress", of which "ease" shows a curved line quickly rising from the origin to (1, 1); "ease-in" shows a shallow curved line from the origin that straightens out as it approaches (1, 1); "ease-out" shows a straight diagonal line that slightly curves as it gets close to (1, 1); and "ease-in-out" shows a symmetrical, "S"-shaped line curving from the origin to (1, 1).](ease.svg)

    `cubic-bezier()`: This function accepts four {{cssxref("&lt;number&gt;")}} values to shape a curve.

    - {{cssxref("&lt;number&gt;")}}: Specifies the location of [P1 and P2 points](#cubic_bézier_easing_function) on the curve. `<x1>` and `<y1>` are the coordinates for point P1, and `<x2>` and `<y2>` are the coordinates for point P2. `<x1>` and `<x2>` values must be between `0` and `1`, otherwise the function will not work as expected.

- `<step-easing-function>`

  - : Specifies a `steps()` function that divides the animation into a set number of equal-length intervals or "steps", causing the animation to jump from one step to the next rather than transitioning smoothly. This parameter accepts one of the following two keyword values that map to predefined `steps()` functions or a custom `steps()` function:

    `step-start`: This keyword represents the easing function `steps(1, jump-start)` or `steps(1, start)`. It indicates that the interpolation jumps immediately to its final state, where it stays until the end.

    `step-end`: This keyword represents the easing function `steps(1, jump-end)` or `steps(1, end)`. It indicates that the interpolation stays in its initial state until the end, at which point it jumps directly to its final state.

    ![Two graphs of "Input progress" to "Output progress". In the "step-start" graph, an unfilled circle represents the origin point (0,0), with a horizontal line extending from (0, 1) to (1, 1). In the "step-end" graph, a horizontal line extends from the origin to (1, 0), with an unfilled circle at (1,0) and a solid circle at (1, 1).](step.svg)

    `steps()`: This function accepts a positive {{cssxref("&lt;integer&gt;")}} and an optional `<step-position>`.

    - `<integer>`: Represents the number of equidistant intervals or 'steps'. It must be a positive integer greater than `0` unless the second parameter is `jump-none`, in which case, it must be a positive integer greater than `1`.
    - `<step-position>`: Specifies the [timing of the jump](#steps_easing_function) to occur either at the start, at the end, at both start and end, or at neither. The possible keyword values include:

      - `jump-start` denotes that the first jump occurs right at the start, essentially at the `0` point. No time is spent at the `0%` mark.
      - `jump-end` denotes that the last jump occurs right at the end, essentially at the `1` point. No time is spent at the `100%` mark. This is the default value when no `<step-position>` is specified.
      - `jump-none` denotes that no jump occurs either at the beginning or at the end, effectively removing a step during the duration. Instead, the progress holds steady at both the `0%` mark and `100%` marks. The duration of these holds is determined by dividing the total duration by the number of steps (1/n).
      - `jump-both` denotes that jumps occur at both the beginning and the end, essentially occurring at both the `0` and `1`. Effectively, a step is added at both the ends. No time is spent at the `0%` and `100%` marks.
      - `start` is the equivalent of `jump-start`.
      - `end` is the equivalent of `jump-end`.

## Description

There are three types of easing functions:

- [Linear](#linear_easing_function)
- [Cubic Bézier](#cubic_bézier_easing_function)
- [Steps](#steps_easing_function)

### Linear easing function

The `linear()` function creates a piecewise linear easing, allowing the approximation of complex animations and transitions by interpolating linearly between the specified points. The interpolation occurs at a constant rate from beginning to end. A typical use of the `linear()` function is to provide many points to approximate any curve.

For example, the `linear(0, 0.25, 1)` function has linear stops of `0`, `0.25`, and `1` as arguments. The animation or transition starts at point `0`, moves linearly to `0.25`, and then continues linearly to point `1`. Since no `<linear-stop-length>` percentage is specified, the same duration (50%) is used to go from `0` to `0.25` and from `0.25` to `1`.

![Graphs of "Input progress" to "Output progress", of which "linear(0, 0.25, 1)" shows a broken line connecting the origin, (0.5, 0.25), and (1, 1); and "linear(0, 0.25 75%, 1)" shows a broken line connecting the origin, (0.75, 0.25), and (1, 1).](linear_function.svg)

By default, the stops are equidistant. So if there are 5 stops, they will be at 0%, 25%, 50%, 75%, and 100% of the duration. You can use optional `<linear-stop-length>` percentage values to provide finer control, defining the start and/or length of each segment, allowing for a more controlled progression of the transition.

Consider an animation with a duration time of 100 seconds and a change of 100 pixels. Let's look at an example where the easing of the animation is specified: `linear(0, 0.25 75%, 1)`. In this case, the animation progresses to 25 pixels (25% of its total change) in the first 75 seconds (75% of the duration). The last 75 pixels are applied in the remaining 25 seconds of the animation. For the same animation, suppose the easing function is given instead as `linear(0, 0.5 25% 75%, 1)`. Here, the animation reaches 50 pixels (50% of its total change) in 25 seconds (25% of the duration) and remains there for 50 seconds (75% - 25% of the duration). Then the last 50 pixels are applied in the remaining 25 seconds of the duration. Note that `linear(0, 0.5 25% 75%, 1)` is equivalent to `linear(0, 0.5 25%, 0.5 75%, 1)`.

> [!NOTE]
> The [`linear`](#linear) keyword is equivalent to the easing function `linear(0, 1)`. While the `linear` keyword is always interpreted as-is, the function `linear(0, 1)` gets interpreted as `linear(0 0%, 1 100%)`.

### Cubic Bézier easing function

The `cubic-bezier()` functional notation defines a cubic [Bézier curve](/fr/docs/Glossary/Bezier_curve). The easing functions in the cubic-bezier subset of easing functions are often called "smooth" easing functions because they can be used to smooth down the start and end of the {{Glossary("interpolation")}}. They correlate an input progress to an output progress, both expressed as {{cssxref("&lt;number&gt;")}}s. For these values, `0.0` represents the initial state, and `1.0` represents the final state.

![Graph of "Input progress" to "Output progress" showing an "S"-shaped line curving from the origin to (1, 1) with the Bezier control points P1(0.1, 0.6) and P2(0.7, 0.2).](cubic-bezier.svg)

A cubic Bézier curve is defined by four points: P0, P1, P2, and P3. The points P0 and P3 represent the start and the end of the curve. In CSS, these points are fixed as the coordinates progress (the abscissa the input progress, the ordinate the output progress). P0 is `(0, 0)` and represents the initial progress and the initial state. P3 is `(1, 1)` and represents the final progress and the final state.

Not all cubic Bézier curves are suitable as easing functions because not all are [mathematical functions](https://en.wikipedia.org/wiki/Function_%28mathematics%29); i.e., curves that for a given abscissa have zero or one value. With P0 and P3 fixed as defined by CSS, a cubic Bézier curve is a function, and is therefore valid, if and only if the abscissas of P1 and P2 are both in the `[0, 1]` range.

Cubic Bézier curves with the P1 or P2 ordinate outside the `[0, 1]` range can cause the value to go farther than the final state and then return. In animations, for some properties, such as {{cssxref("left")}} or {{cssxref("right")}}, this creates a kind of "bouncing" effect.

![Graphs of the easing function "cubic-bezier(0.3, 0.2, 0.2, 1.4)", one of which shows the output progress going above 1 starting from a certain input progress, the other shows the output progress reaching and then staying at 1.](cubic-bezier_out_of_range.svg)

However, certain properties will restrict the output if it goes outside an allowable range. For example, a color component greater than `255` or smaller than `0` in {{CSSXref("color_value/rgb", "rgb()")}} will be clipped to the closest allowed value (`255` and `0`, respectively). Some `cubic-bezier()` values exhibit this property.

When you specify an invalid cubic Bézier curve, CSS ignores the whole property.

The keywords `ease`, `ease-in`, `ease-out`, and `ease-in-out` are equivalent to a specific `cubic-bezier()` value.

### Steps easing function

The `steps()` functional notation defines a [step function](https://en.wikipedia.org/wiki/Step_function) that divides the domain of output values in equidistant steps. This subclass of step functions are sometimes also called _staircase functions_.

These are a few examples illustrating the `steps()` function:

```css
steps(2, jump-start) /* Or steps(2, start) */
steps(4, jump-end) /* Or steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![Graphs of "Input progress" to "Output progress", of which "steps(2, jump-start)" shows horizontal lines extending 0.5 unit from (0, 0.5) and (0.5, 1), respectively, with empty circles at the origin and (0.5, 0.5); "steps(4, jump-end)" shows horizontal lines extending 0.25 unit from (0, 0), (0.25, 0.25), (0.5, 0.5), and (0.75, 0.75), respectively, with unfilled circles at (0.25, 0), (0.5, 0.25), and (0.75, 0.5), and a solid circle at (1, 1); "steps(5, jump-none)" shows horizontal lines extending 0.2 unit from (0, 0), (0.2, 0.25), (0.4, 0.5), (0.6, 0.75), and (0.8, 1), respectively, with unfilled circles at (0.2, 0), (0.4, 0.25), (0.6, 0.5), and (0.8, 0.75); "steps(3, jump-both)" shows horizontal lines extending 1/3 unit from (0, 0.25), (1/3, 0.5), and (2/3, 0.75),respectively, with a solid circle at (1, 1) and unfilled circles at the origin, (1/3, 0.25), (2/3, 0.5), and (1, 0.75).](jump.svg)

The keywords `step-start` and `step-end` are equivalent to a specific `steps()` value.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Comparer les fonctions d'évolution

Cet exemple fournit un outil de comparaison entre les différentes fonctions d'évolution avec une animation. Vous pouvez sélectionner une des fonctions d'évolution depuis le menu déroulant parmi quelques mots-clés, certains exemples `cubic-bezier()` ou `steps()`. Après avoir sélectionné une option, vous pouvez lancer ou interrompre l'animation grâce au bouton correspondant.

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
    <label for="easing-select">Choisir une fonction d'évolution :</label>
    <select id="easing-select">
      <option selected>linear</option>
      <option>linear(0, 0.5 50%, 1)</option>
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
  background-image: radial-gradient(
    circle at 10px 10px,
    rgb(25 255 255 / 80%),
    rgb(25 255 255 / 40%)
  );
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
  if (startBtn.textContent === "Démarrer l'animation") {
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

{{EmbedLiveSample("", "100%", 200)}}

### Utiliser la fonction `cubic-bezier()`

Ces courbes de Bézier cubiques sont valides en CSS&nbsp;:

```css example-good
/* Une courbe de Bézier cubique canonique avec 4 nombres,
   tous dans l'intervalle [0,1]. */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* On peut utiliser des valeurs de type <integer>, car
   toute valeur <integer> est aussi de type <number>. */
cubic-bezier(0, 0, 1, 1)

/* Les ordonnées peuvent être négatives, ce qui donnera
   un effet de rebond. */
cubic-bezier(0.1, -0.6, 0.2, 0)

/* Les ordonnées peuvent aussi être supérieures à 1.0. */
cubic-bezier(0, 1.1, 0.8, 4)
```

Les définitions de ces courbes de Bézier cubiques sont invalides&nbsp;:

```css example-bad
/* Bien que la sortie de l'animation puisse être une couleur,
   les courbes de Bézier ne manipulent que des ratios numériques. */
cubic-bezier(0.1, red, 1.0, green)

/* Les abscisses doivent appartenir à l'intervalle [0, 1] et la
   courbe doit être une fonction temporelle. */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* Les deux points doivent être définis, il n'y a pas
   de valeur par défaut. */
cubic-bezier(0.3, 2.1)

/* Les abscisses doivent appartenir à l'intervalle [0, 1] et la
   courbe doit être une fonction temporelle. */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)
```

### Utiliser la fonction `steps()`

Ces fonctions d'évolution sont valides&nbsp;:

```css example-good
/* Il y a ici 5 palier et le dernier prend
   place avant la fin de l'animation. */
steps(5, end)

/* Un escalier sur deux marches, dont la première
   se produit au début de l'animation. */
steps(2, start)

/* Le second paramètre est optionnel. */
steps(2)
```

> [!NOTE]
> Si l'animation contient plusieurs arrêts, les marches définies dans la fonction `steps()` s'appliqueront à chaque section de l'animation. Ainsi, si une animation contient trois segments et qu'on utilise `steps(2)`, il y aura 6 paliers au total, 2 pour chaque segments.

Les fonctions d'évolution qui suivent sont invalides&nbsp;:

```css example-bad
/* Le premier paramètre doit être de type <integer>. Ce ne
   peut pas être une valeur réelle, même si elle est égale
  à une valeur entière. */
steps(2.0, jump-end)

/* Le nombre de marches doit être positif. */
steps(-3, start)

/* Il doit y avoir au moins un palier. */
steps(0, jump-none)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les animations CSS](/fr/docs/Web/CSS/CSS_animations)
- [Les transitions CSS](/fr/docs/Web/CSS/CSS_transitions)
- [Un site pour construire des courbes de Bézier cubiques](https://cubic-bezier.com/)
- [Un site pour générer des fonctions d'évolution `linear()`](https://linear-easing-generator.netlify.app/)

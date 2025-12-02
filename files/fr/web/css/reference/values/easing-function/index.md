---
title: <easing-function>
slug: Web/CSS/Reference/Values/easing-function
original_slug: Web/CSS/easing-function
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<easing-function>`** représente une fonction mathématique décrivant la vitesse à laquelle la valeur change.

Cette transition entre deux valeurs peut être appliquée dans différentes situations. Elle peut être utilisée pour décrire la rapidité selon laquelle les valeurs évoluent durant les animations. Elle permet ainsi de faire varier la vitesse de l'animation au fur et à mesure de sa progression. On peut utiliser une fonction d'évolution pour les [transitions](/fr/docs/Web/CSS/Reference/Properties/transition-timing-function) et [animations](/fr/docs/Web/CSS/Reference/Properties/animation-timing-function) CSS.

## Syntaxe

```css
/* Fonction d'évolution linéaire par mot-clé */
linear                /* linear(0, 1) */

/* Fonctions d'évolution linéaire personnalisées */
linear(0, 0.25, 1)
linear(0, 0.25 75%, 1)

/* Fonctions d'évolution cubique de Bézier par mot-clé */
ease                  /* cubic-bezier(0.25, 0.1, 0.25, 1) */
ease-in               /* cubic-bezier(0.42, 0, 1, 1) */
ease-out              /* cubic-bezier(0, 0, 0.58, 1) */
ease-in-out           /* cubic-bezier(0.42, 0, 0.58, 1) */

/* Fonction d'évolution cubique de Bézier personnalisée */
cubic-bezier(0.25, 0.1, 0.25, 1)

/* Fonctions d'évolution en escalier par mot-clé */
step-start            /* steps(1, jump-start) */
step-end              /* steps(1, jump-end) */

/* Fonctions d'évolution en escalier personnalisées */
steps(4, end)
steps(10, jump-both)
```

### Valeurs

Une `<easing-function>` peut être l'un des types suivants&nbsp;:

- `<linear-easing-function>`
  - : Crée des transitions qui progressent à un rythme constant. Cette fonction peut être définie de l'une des façons suivantes&nbsp;:
    - `linear`
      - : Indique une interpolation à vitesse constante, sans accélération ni décélération pendant toute la durée.
        Ce mot-clé est équivalent à `linear(0, 1)`.
        Il peut aussi être représenté par `cubic-bezier(0, 0, 1, 1)`.

        ![Graphique de la progression d'entrée vers la progression de sortie, montrant une ligne droite de l'origine à (1, 1).](linear.svg)

        > [!NOTE]
        > Le mot-clé `linear` est toujours interprété comme `linear(0, 1)`, tandis que la fonction `linear(0, 1)` est interprétée comme `linear(0 0%, 1 100%)`.

    - {{CSSxRef("easing-function/linear", "linear()")}}
      - : Définit plusieurs points de progression à l'aide de valeurs {{CSSxRef("&lt;number&gt;")}}, avec des valeurs {{CSSxRef("&lt;percentage&gt;")}} optionnelles pour contrôler leur position dans le temps.

- `<cubic-bezier-easing-function>`
  - : Crée des transitions progressives avec des vitesses variables. Cette fonction peut être spécifiée de l'une des façons suivantes&nbsp;:
    - `ease`
      - : Représente la fonction d'évolution `cubic-bezier(0.25, 0.1, 0.25, 1)`.
        L'interpolation commence lentement, accélère fortement, puis ralentit progressivement vers la fin.
        Elle est similaire au mot-clé `ease-in-out`, mais accélère plus fortement au début.

    - `ease-in`
      - : Représente la fonction d'évolution `cubic-bezier(0.42, 0, 1, 1)`.
        L'interpolation commence lentement, puis accélère progressivement jusqu'à la fin, où elle s'arrête brutalement.

    - `ease-out`
      - : Représente la fonction d'évolution `cubic-bezier(0, 0, 0.58, 1)`.
        L'interpolation commence brutalement, puis ralentit progressivement jusqu'à la fin.

    - `ease-in-out`
      - : Représente la fonction d'évolution `cubic-bezier(0.42, 0, 0.58, 1)`.
        L'interpolation commence lentement, accélère, puis ralentit à nouveau vers la fin.
        Au début, le comportement est similaire à `ease-in` et à la fin, à `ease-out`.

        ![Graphiques de la progression d'entrée vers la progression de sortie : ease montre une courbe montant rapidement de l'origine à (1, 1) ; ease-in montre une courbe peu pentue au départ qui s'accentue vers (1, 1) ; ease-out montre une diagonale qui s'incurve légèrement à l'approche de (1, 1) ; ease-in-out montre une courbe symétrique en S de l'origine à (1, 1).](ease.svg)

    - {{CSSxRef("easing-function/cubic-bezier", "cubic-bezier()")}}
      - : Définit une courbe personnalisée à l'aide de quatre valeurs {{CSSxRef("&lt;number&gt;")}} qui spécifient les coordonnées de deux points de contrôle.
        Les abscisses doivent être comprises dans l'intervalle `[0, 1]`.

- `<step-easing-function>`
  - : Crée des transitions en escalier qui divisent l'animation en un nombre d'intervalles de même longueur, provoquant un saut d'un palier à l'autre au lieu d'une transition progressive.
    Cette fonction peut être spécifiée de l'une des façons suivantes&nbsp;:
    - `step-start`
      - : Représente la fonction d'évolution `steps(1, jump-start)` ou `steps(1, start)`.
        L'interpolation saute immédiatement à l'état final et y reste jusqu'à la fin.

    - `step-end`
      - : Représente la fonction d'évolution `steps(1, jump-end)` ou `steps(1, end)`.
        L'interpolation reste dans l'état initial jusqu'à la fin, où elle passe directement à l'état final.

        ![Deux graphiques de la progression d'entrée vers la progression de sortie. Pour step-start, un cercle non rempli à l'origine (0, 0), une ligne horizontale de (0, 1) à (1, 1). Pour step-end, une ligne horizontale de l'origine à (1, 0), un cercle non rempli en (1,0) et un cercle plein en (1, 1).](step.svg)

    - {{CSSxRef("easing-function/steps", "steps()")}}
      - : Crée une courbe en escalier à l'aide d'un {{CSSxRef("&lt;integer&gt;")}} pour spécifier le nombre d'intervalles et d'un mot-clé optionnel pour contrôler le moment des sauts.

## Syntaxe formelle

{{CSSSyntax}}

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
    <label for="easing-select">Choisir une fonction d'évolution&nbsp;:</label>
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

{{EmbedLiveSample("Comparer les fonctions d'évolution", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module des [fonctions d'évolution CSS](/fr/docs/Web/CSS/CSS_easing_functions)
- Le module des [animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- Le module des [transitions CSS](/fr/docs/Web/CSS/Guides/Transitions)
- [Un site pour générer des fonctions d'évolution `linear()` <sup>(angl.)</sup>](https://linear-easing-generator.netlify.app/)
- [Un site pour construire des courbes de Bézier cubiques <sup>(angl.)</sup>](https://cubic-bezier.com/)

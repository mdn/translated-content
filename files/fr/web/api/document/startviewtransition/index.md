---
title: "Document : méthode startViewTransition()"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{APIRef("View Transition API")}}

La méthode **`startViewTransition()`** de l'interface {{DOMxRef("Document")}} démarre une nouvelle [transition de vue](/fr/docs/Web/API/View_Transition_API) dans le même document (SPA) et retourne un objet {{DOMxRef("ViewTransition")}} pour la représenter.

Lorsque `startViewTransition()` est invoqué, une séquence d'étapes est suivie comme expliqué dans [Le processus de transition de vue](/fr/docs/Web/API/View_Transition_API/Using#le_processus_de_transition_de_vue).

## Syntaxe

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### Paramètres

- `updateCallback` {{Optional_Inline}}
  - : Une fonction de rappel optionnelle généralement appelée pour mettre à jour le DOM pendant le processus de transition de vue sur des applications monopages (<abbr lang="en">SPA</abbr>, pour <i lang="en">Single Page Application</i> en anglais), qui retourne une promesse ({{JSxRef("Promise")}}). La fonction de rappel est appelée une fois que l'API a pris un instantané de la page actuelle. Lorsque la promesse retournée par la fonction de rappel est résolue, la transition de vue commence dans l'image suivante. Si la promesse retournée par la fonction de rappel est rejetée, la transition est abandonnée.
- `options` {{Optional_Inline}}
  - : Un objet contenant des options pour configurer la transition de vue. Il peut inclure les propriétés suivantes&nbsp;:
    - `update` {{Optional_Inline}}
      - : La même fonction `updateCallback` décrite ci-dessus. Par défaut&nbsp;: `null`.
    - `types` {{Optional_Inline}}
      - : Un tableau de chaînes de caractères représentant les types appliqués à la transition de vue. [Types de transition de vue](/fr/docs/Web/API/View_Transition_API/Using_types) permettent l'application sélective de styles CSS ou de logique JavaScript selon le type de transition en cours. Par défaut, une séquence vide.

### Valeur de retour

Une instance d'objet {{DOMxRef("ViewTransition")}}.

## Exemples

Voir [l'API de transition de vue > exemples](/fr/docs/Web/API/View_Transition_API#exemples) pour une liste complète d'exemples.

### Utilisation simple

Dans cette transition de vue sur le même document, nous vérifions si le navigateur prend en charge les transitions de vue.
Si ce n'est pas le cas, nous définissons la couleur d'arrière-plan à l'aide d'une méthode de secours appliquée immédiatement.
Sinon, nous pouvons appeler `document.startViewTransition()` avec des règles d'animation définies en CSS.

```html
<main>
  <section></section>
  <button id="change-color">Changer la couleur</button>
</main>
```

Nous définissons la propriété `animation-duration` à 2 secondes en utilisant le pseudo-élément CSS {{CSSxRef("::view-transition-group")}}.

```css
html {
  --bg: indigo;
}
main {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
section {
  background-color: var(--bg);
  height: 60px;
  border-radius: 5px;
}
::view-transition-group(root) {
  animation-duration: 2s;
}
```

```js
const colors = ["darkred", "darkslateblue", "darkgreen"];
const colBlock = document.querySelector("section");
let count = 0;
const updateColor = () => {
  colBlock.style = `--bg: ${colors[count]}`;
  count = count !== colors.length - 1 ? ++count : 0;
};
const changeColor = () => {
  // Méthode de secours pour les navigateurs qui ne prennent pas en charge les transitions de vue :
  if (!document.startViewTransition) {
    updateColor();
    return;
  }

  // Avec les transitions de vue :
  const transition = document.startViewTransition(() => {
    updateColor();
  });
};
const changeColorButton = document.querySelector("#change-color");
changeColorButton.addEventListener("click", changeColor);
changeColorButton.addEventListener("keypress", changeColor);
```

Si les transitions de vue sont prises en charge, cliquer sur le bouton fera passer la couleur d'une à une autre sur 2 secondes.
Sinon, la couleur d'arrière-plan est définie à l'aide d'une méthode de secours, sans animation.

{{EmbedLiveSample("color_change", "100%", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Document.activeViewTransition")}}
- La pseudo-classe CSS {{CSSxRef(":active-view-transition")}}
- La pseudo-classe CSS {{CSSxRef(":active-view-transition-type", ":active-view-transition-type()")}}
- [L'API de transition de vue](/fr/docs/Web/API/View_Transition_API)
- [Utiliser l'API de transition de vue](/fr/docs/Web/API/View_Transition_API/Using)
- [Utiliser les types de transition de vue](/fr/docs/Web/API/View_Transition_API/Using_types)
- [Transitions fluides avec l'API View Transition <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/view-transitions/)

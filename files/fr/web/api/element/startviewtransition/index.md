---
title: "Element : méthode startViewTransition()"
short-title: startViewTransition()
slug: Web/API/Element/startViewTransition
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

La méthode **`startViewTransition()`** de l'interface {{DOMxRef("Element")}} démarre une nouvelle [transition de vue](/fr/docs/Web/API/View_Transition_API) [dans la portée de l'élément](/fr/docs/Web/API/View_Transition_API/Using_element-scoped) dans le même document ({{Glossary("SPA")}}) et retourne un objet {{DOMxRef("ViewTransition")}} pour la représenter.

La séquence d'étapes suivie lorsque `startViewTransition()` est invoquée est expliquée dans la section [le processus de transition de vue](/fr/docs/Web/API/View_Transition_API/Using#le_processus_de_transition_de_vue).

## Syntaxe

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### Paramètres

- `updateCallback` {{Optional_Inline}}
  - : Une fonction de rappel invoquée pour mettre à jour l'arbre DOM de l'élément pendant le processus de transition de vue dans le même document ({{Glossary("SPA")}}). Elle retourne une promesse ({{JSxRef("Promise")}}). La fonction de rappel est invoquée une fois que l'API a pris un instantané de la page actuelle. Lorsque la promesse retournée par la fonction de rappel est remplie, la transition de vue commence dans la trame suivante. Si la promesse retournée par la fonction de rappel est rejetée, la transition est abandonnée.
- `options` {{Optional_Inline}}
  - : Un objet contenant des options pour configurer la transition de vue. Il peut inclure les propriétés suivantes&nbsp;:
    - `update` {{Optional_Inline}}
      - : La même fonction `updateCallback` décrite ci-dessus. Par défaut, `null`.
    - `types` {{Optional_Inline}}
      - : Un tableau de chaînes de caractères représentant les types appliqués à la transition de vue. Les [types de transition de vue](/fr/docs/Web/API/View_Transition_API/Using_types) permettent l'application sélective de styles CSS ou de logique JavaScript en fonction du type de transition en cours. Par défaut, un tableau vide.

### Valeur de retour

Une instance de l'objet {{DOMxRef("ViewTransition")}}.

## Description

L'appel de `Element.startViewTransition()` sur un élément crée une transition de vue limitée au sous-arbre DOM de cet élément. Les modifications du DOM effectuées à l'intérieur de la fonction de rappel `startViewTransition()` ne sont animées que si elles se produisent à l'intérieur du sous-arbre DOM de l'élément appelant. L'élément est appelé **racine** de la transition de vue, et le sous-arbre DOM est appelé **portée** de la transition de vue.

Une transition de vue limitée à un élément a son [arbre de pseudo-éléments](/fr/docs/Web/API/View_Transition_API/Using#differentes_animations_pour_different_éléments) placé à l'intérieur de l'élément racine de la transition, comme le montre l'exemple suivant, où une transition de vue est en cours sur un lien&nbsp;:

```plain
<a href="#">
  ├─ ::view-transition
  │  └─ ::view-transition-group(root)
  │     └─ ::view-transition-image-pair(root)
  │        ├─ ::view-transition-old(root)
  │        └─ ::view-transition-new(root)
  |
  |
  "Texte du lien"
</a>
```

Les transitions de vue limitées à un élément ont de nombreux avantages par rapport à leurs homologues limitées au document&nbsp;:

- Vous pouvez en exécuter plusieurs en même temps.
- Lorsqu'elle est en cours d'exécution, seule la portée de la transition de vue cesse d'être interactive jusqu'à ce que la transition soit terminée&nbsp;; le reste de la page continue d'être interactive. Les transitions de vue limitées au document rendent l'ensemble de la page non interactive jusqu'à ce que la transition soit terminée.
- L'arbre de pseudo-éléments de la transition ne se trouve que par-dessus la portée de l'élément, et non sur l'ensemble de la page, ce qui signifie que vous ne rencontrez pas les mêmes problèmes liés aux éléments empilés disparaissant sous la partie mise à jour de la page lorsqu'une animation de transition limitée au document commence.
- Si le contenu de la portée est découpé à l'aide de {{CSSxRef("overflow")}}, il reste découpé pendant la transition de vue. Les transitions de vue limitées au document débordent des conteneurs de découpe parce que leurs arbres de pseudo-éléments sont dessinés par-dessus l'ensemble de la page.

## Exemples

Voir [Utiliser les transitions de vue limitées à un élément](/fr/docs/Web/API/View_Transition_API/Using_element-scoped) pour plus d'exemples.

### Animer un diaporama

Ceci est un exemple simple d'utilisation d'une transition de vue limitée à un élément pour animer en douceur les modifications du DOM d'un diaporama lors d'un clic sur un bouton.

#### HTML

Le HTML inclut un élément HTML {{HTMLElement("section")}} pour représenter le diaporama, un élément HTML {{HTMLElement("button")}} sur lequel appuyer pour modifier le contenu de la diapositive, ainsi que du contenu {{HTMLElement("p")}} environnant.

```html live-sample___basic_usage
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus.
  Set sit amet ipsum mauris.
</p>
<section>Diapositive 1</section>
<button>Mettre à jour la diapositive</button>
<p>
  Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et
  mollis dolor.
</p>
```

#### CSS

Le CSS utilise les [boîtes flexibles](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox) pour centrer le contenu de la diapositive et définit la {{CSSxRef("animation-duration")}} de la transition de vue à `1s` au moyen du pseudo-élément {{CSSxRef("::view-transition-group")}}.

```css hidden live-sample___basic_usage
html {
  font-family: sans-serif;
}
section {
  height: 200px;
  font-size: 2rem;
  background-color: green;
}
button {
  position: absolute;
  top: 5px;
  right: 5px;
}
```

```css live-sample___basic_usage
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
::view-transition-group(root) {
  animation-duration: 1s;
}
```

#### JavaScript

Le script commence par récupérer des références aux éléments `<section>` et `<button>`, puis par ajouter un gestionnaire d'évènements `click` au bouton.

```js live-sample___basic_usage
const diapositive = document.querySelector("section");
const bouton = document.querySelector("button");
bouton.addEventListener("click", gererClic);
```

Ensuite, nous définissons une fonction nommée `mettreAJourDiapositive()`, qui alterne le contenu et la couleur d'arrière-plan de la diapositive entre deux ensembles de valeurs.

```js live-sample___basic_usage
function mettreAJourDiapositive() {
  if (diapositive.textContent === "Diapositive 1") {
    diapositive.textContent = "Diapositive 2";
    diapositive.style.backgroundColor = "orange";
  } else {
    diapositive.textContent = "Diapositive 1";
    diapositive.style.backgroundColor = "green";
  }
}
```

Enfin, nous définissons la fonction gestionnaire d'évènements `gererClic()`. Lorsque l'on clique sur le bouton, nous vérifions d'abord si `Element.startViewTransition()` existe et, dans le cas contraire, nous exécutons simplement la fonction `mettreAJourDiapositive()` et `return`. Cela garantit que la mise à jour fonctionne également dans les navigateurs qui ne prennent pas en charge cette fonctionnalité, mais sans l'animation. Si `Element.startViewTransition()` est pris en charge, nous l'appelons sur l'élément `<section>` et appelons `mettreAJourDiapositive()` dans sa fonction de rappel.

```js live-sample___basic_usage
function gererClic() {
  if (!diapositive.startViewTransition) {
    mettreAJourDiapositive();
    return;
  }

  const transition = diapositive.startViewTransition(() => {
    mettreAJourDiapositive();
  });
}
```

#### Résultat

{{EmbedLiveSample("basic_usage", "100%", "340")}}

Cliquez sur le bouton «&nbsp;Mettre à jour la diapositive&nbsp;» pour mettre à jour le DOM de l'élément de diapositive et observer la transition de vue.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.activeViewTransition")}}
- La méthode {{DOMxRef("Document.startViewTransition()")}}
- La pseudo-classe {{CSSxRef(":active-view-transition")}}
- La pseudo-classe {{CSSxRef(":active-view-transition-type", ":active-view-transition-type()")}}
- [L'API View Transition](/fr/docs/Web/API/View_Transition_API)
- [Utiliser l'API View Transition](/fr/docs/Web/API/View_Transition_API/Using)
- [Utiliser les types de transition de vue](/fr/docs/Web/API/View_Transition_API/Using_types)
- [Utiliser les transitions de vue limitées à un élément](/fr/docs/Web/API/View_Transition_API/Using_element-scoped)

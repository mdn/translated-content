---
title: "Element : méthode getAnimations()"
short-title: getAnimations()
slug: Web/API/Element/getAnimations
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("Web Animations")}}

La méthode `getAnimations()` de l'interface {{DOMxRef("Element")}} retourne un tableau de tous les objets {{DOMxRef("Animation")}} affectant cet élément, ou qui sont programmés pour le faire à l'avenir.
Elle peut éventuellement retourner des objets {{DOMxRef("Animation")}} soit pour les éléments descendants et leurs [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), soit uniquement pour le pseudo-élément défini.

> [!NOTE]
> Ce tableau inclut les [animations CSS](/fr/docs/Web/CSS/Guides/Animations), les [transitions CSS](/fr/docs/Web/CSS/Guides/Transitions) et les [animations Web](/fr/docs/Web/API/Web_Animations_API).

## Syntaxe

```js-nolint
getAnimations()
getAnimations(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet d'options contenant les propriétés suivantes&nbsp;:
    - `subtree`
      - : Une valeur booléenne qui, si elle est `true`, fait en sorte que les animations ciblant les descendants de _l'élément_ soient également retournées.
        Cela inclut les animations qui ciblent tous les [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) CSS attachés à _l'élément_ ou à l'un de ses descendants.
        Par défaut, `false`.
    - `pseudoElement`
      - : Une chaîne de caractères qui définit un [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) comme élément cible, tel que {{CSSxRef("::after")}}.

    Notez que définir à la fois `pseudoElement` et `subtree` est équivalent à ne définir que `pseudoElement`.

### Valeur de retour

Un tableau ({{JSxRef("Array")}}) d'objets {{DOMxRef("Animation")}}, chacun représentant une animation ciblant actuellement l'objet {{DOMxRef("Element")}}.

Si le paramètre `{ subtree: true }` est défini, la valeur retournée inclut également les objets d'animation ciblant les éléments descendants, y compris les pseudo-éléments.
Si `options.pseudoElement` est défini, la valeur retournée inclut uniquement les objets d'animation correspondant au pseudo-élément sélectionné.

### Exceptions

- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Un pseudo-élément invalide a été passé dans le paramètre [`options.pseudoElement`](#pseudoelement).

## Exemples

### Attendre que toutes les animations sur un élément et ses descendants soient terminées

Le code suivant attend que toutes les animations sur `elem` et ses descendants soient terminées avant de supprimer l'élément du document.

```js
Promise.all(
  elem.getAnimations({ subtree: true }).map((animation) => animation.finished),
).then(() => elem.remove());
```

### Obtenir les animations pour un pseudo-élément cible

Cet exemple affiche une barre de progression en utilisant un pseudo-élément.
Il utilise `getAnimations()` pour retourner les animations du pseudo-élément, les démarre, puis supprime la barre de progression une fois l'animation terminée.

Notez que le code utilise une approche de repli pour obtenir les animations au cas où l'option `pseudoElement` n'est pas prise en charge.
Il y a également du code caché pour afficher un bouton «&nbsp;Réinitialiser&nbsp;».

#### HTML

```html
<div class="barre-progression" id="barre"></div>
```

#### CSS

Le CSS met en forme l'élément de la barre de progression pour qu'il s'anime sur la largeur de son conteneur en 3 secondes.
L'animation est initialement en pause afin que nous puissions la démarrer en JavaScript.

```css
.barre-progression {
  width: 100%;
  height: 20px;
  background: #eeeeee;
  border-radius: 4px;
  overflow: hidden;
}

.barre-progression::after {
  content: "";
  display: block;
  height: 100%;
  width: 0%;
  background: #4f46e5;
  border-radius: 4px;
  animation: fill-progress 3s ease-in-out forwards paused;
}

@keyframes fill-progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
```

#### JavaScript

Tout d'abord, nous définissons une fonction pour obtenir les animations associées à un élément et à un pseudo-élément défini.
Elle appelle `getAnimations()` avec l'option [`pseudoElement`](#pseudoelement), et si cela ne retourne aucune animation, elle revient à filtrer les animations retournées par [`subtree`](#subtree).

```js
function obtenirAnimationsPourPseudo(element, pseudo) {
  // Tenter d'abord la méthode conforme à la spécification (Firefox)
  try {
    const anims = element.getAnimations({ pseudoElement: pseudo });
    // Si cela a retourné quelque chose, l'option est prise en charge, donc retourner le résultat
    if (anims.length > 0) return anims;
  } catch (e) {
    // sélecteur invalide, etc.
    return [];
  }

  // Solution de repli pour les navigateurs qui ne prennent en charge que subtree
  return element
    .getAnimations({ subtree: true })
    .filter((anim) => anim.effect?.pseudoElement === pseudo);
}
```

Nous utilisons cette fonction pour obtenir toutes les animations associées au pseudo-élément de la barre de progression.
Le code parcourt les animations pour les démarrer, puis supprime la barre de progression lorsque toutes les animations sont terminées.
Notez que nous exécutons le code dans `requestAnimationFrame()` pour nous assurer que l'animation est prête à s'exécuter avant que notre JavaScript ne soit exécuté.

```js
const barre = document.getElementById("barre");

requestAnimationFrame(() => {
  const anims = obtenirAnimationsPourPseudo(barre, "::after");
  anims.forEach((a) => a.play());
  Promise.all(anims.map((a) => a.finished)).then(() => barre.remove());
});
```

```html hidden
<button id="reinitialiser" type="button">Réinitialiser</button>
```

```js hidden
const recharger = document.querySelector("#reinitialiser");

recharger.addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Résultat

La barre doit progresser sur la largeur de son conteneur, puis disparaître.
Vous pouvez la réinitialiser en appuyant sur le bouton «&nbsp;Réinitialiser&nbsp;».

{{EmbedLiveSample("Obtenir les animations pour un pseudo-élément cible", "100%", 50)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Web Animations](/fr/docs/Web/API/Web_Animations_API)
- [Les animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- [Les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions)
- La méthode {{DOMxRef("Document.getAnimations()")}} - Récupère toutes les animations dans le document
- L'interface {{DOMxRef("Animation")}}

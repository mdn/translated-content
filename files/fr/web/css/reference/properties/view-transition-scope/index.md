---
title: Propriété CSS `view-transition-scope`
short-title: view-transition-scope
slug: Web/CSS/Reference/Properties/view-transition-scope
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`view-transition-scope`** permet d'isoler la détection des éléments auxquels des valeurs {{CSSxRef("view-transition-name")}} définies sur eux (et donc la création de [captures instantanées](/fr/docs/Web/API/View_Transition_API/Using#an_aside_on_snapshots) de la transition de vue) à un sous-arbre d'éléments spécifique.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
view-transition-scope: none;
view-transition-scope: all;

/* Valeurs globales */
view-transition-scope: inherit;
view-transition-scope: initial;
view-transition-scope: revert;
view-transition-scope: revert-layer;
view-transition-scope: unset;
```

### Valeurs

Cette propriété est définie comme l'un des mots-clés suivants&nbsp;:

- `none`
  - : La valeur initiale. La détection des éléments à capturer lors d'une transition de vue n'est limitée à aucun sous-arbre spécifique.
- `all`
  - : Limite la détection des éléments à capturer lors d'une transition de vue au sous-arbre de l'élément sur lequel cette propriété est définie. Seuls les éléments avec un {{CSSxRef("view-transition-name")}} qui n'est pas `none` sont pris en compte.

## Description

Lors du [processus de transition de vue](/fr/docs/Web/API/View_Transition_API/Using#the_view_transition_process), le navigateur capture des instantanés des éléments qui ont un {{CSSxRef("view-transition-name")}} non-`none` défini sur eux. Ces instantanés sont ensuite animés à l'aide des animations CSS.

Un problème qui peut survenir lors de ce processus est la collision de noms entre les éléments impliqués dans une transition de vue. Vous ne pouvez pas avoir le même {{CSSxRef("view-transition-name")}} défini sur plusieurs éléments — si vous le faites, le navigateur génère une `InvalidStateError` lorsque la méthode {{DOMxRef("Element.startViewTransition()")}} est appelée pour démarrer la transition.

Vous pouvez résoudre ce problème en définissant un `view-transition-name` de [`match-element`](/fr/docs/Web/CSS/Reference/Properties/view-transition-name#match-element) sur les éléments pour permettre au navigateur d'attribuer automatiquement des noms uniques internes. Cependant, cela ne fonctionne pas si vous incluez plusieurs composants provenant de sources différentes que vous ne contrôlez pas. Une collision de noms peut toujours se produire.

La propriété `view-transition-scope` permet aux transitions de vue d'être autonomes. Lorsque `view-transition-scope: all` est défini sur un élément, il limite la portée de la transition à cet élément et à ses descendants, ce qui peut être utilisé pour résoudre le problème ci-dessus.

Chaque fois qu'une [transition de vue dans la portée de l'élément](/fr/docs/Web/API/View_Transition_API/Using_element-scoped) est déclenchée, le navigateur définit automatiquement `view-transition-scope: all` sur l'élément racine de la transition, garantissant que seuls les éléments à l'intérieur de la portée de la transition sont capturés et animés.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser `view-transition-scope` pour isoler les captures instantanées

Cet exemple montre comment utiliser `view-transition-scope` pour isoler la portée des transitions de vue à l'échelle du document, permettant d'utiliser le même `view-transition-name` sur plusieurs éléments.

#### HTML

Le HTML inclut un élément HTML {{HTMLElement("button")}} pour contrôler la mise à jour du DOM, ainsi que plusieurs composants avec la classe `changez-moi`, dont certains sont imbriqués, le tout enveloppé dans un élément HTML {{HTMLElement("section")}}.

```html live-sample___vt-scope
<button>Mettre à jour le DOM</button>
<section>
  <div class="changez-moi"><span>Je peux changer</span></div>
  <div class="changez-moi">
    <span>Je peux changer</span>
    <div class="changez-moi"><span>Je peux changer</span></div>
  </div>
  <div class="changez-moi"><span>Je peux changer</span></div>
</section>
```

#### CSS

Nous commençons par définir le même `view-transition-name` sur tous les composants. Nous définissons ensuite `view-transition-scope: all` sur tous, afin d'isoler le processus de transition de vue pour chacun. Ensuite, nous définissons une {{CSSxRef("animation-duration")}} plus longue sur toutes les transitions de vue avec ce `view-transition-name` par le pseudo-élément {{CSSxRef("::view-transition-group()")}}.

```css hidden live-sample___vt-scope
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

section,
.changez-moi {
  border: 2px solid #666;
  padding: 10px;
}

section {
  background-color: orange;
}
```

```css live-sample___vt-scope
.changez-moi {
  background-color: white;
  view-transition-name: para-change;
  view-transition-scope: all;
}

::view-transition-group(para-change) {
  animation-duration: 1s;
}
```

#### JavaScript

Le script commence par récupérer les références au bouton et aux éléments `<div>` (nos composants).

```js live-sample___vt-scope
const btn = document.querySelector("button");
const divs = document.querySelectorAll("div");
```

Ensuite, nous définissons une fonction appelée `actualiserDivs()`, qui bascule le contenu textuel de l'élément HTML {{HTMLElement("span")}} imbriqué de chaque composant entre deux valeurs, et bascule également les couleurs de premier plan et d'arrière-plan du composant entre deux valeurs.

```js live-sample___vt-scope
function actualiserDivs() {
  divs.forEach((div) => {
    if (div.firstElementChild.textContent === "Je peux changer") {
      div.firstElementChild.textContent = "J'ai changé";
      div.style.color = "white";
      div.style.backgroundColor = "black";
    } else {
      div.firstElementChild.textContent = "Je peux changer";
      div.style.color = "black";
      div.style.backgroundColor = "white";
    }
  });
}
```

Enfin, nous ajoutons un écouteur d'évènement `click` à l'élément `<button>`. Lorsque le bouton est cliqué, nous vérifions d'abord si `startViewTransition()` existe sur l'objet `document` — si ce n'est pas le cas, nous exécutons `actualiserDivs()` puis nous utilisons `return` pour sortir de la fonction. Cette première partie permet aux navigateurs qui ne prennent pas en charge les transitions de vue de mettre à jour le DOM sans erreur. Ensuite, nous exécutons `actualiserDivs()` à l'intérieur d'un rappel `startViewTransition()` pour déclencher la transition de vue lors de la mise à jour du DOM.

```js live-sample___vt-scope
btn.addEventListener("click", handleClick);

function handleClick(e) {
  if (!document.startViewTransition) {
    actualiserDivs();
    return;
  }
  document.startViewTransition(() => {
    actualiserDivs();
  });
}
```

#### Résultat

{{EmbedLiveSample("vt-scope", "100%", 280)}}

Cliquez sur le bouton «&nbsp;Mettre à jour le DOM&nbsp;» pour voir la transition de vue. Maintenant, essayez ce qui suit&nbsp;:

1. Inspectez l'un des éléments `<div>`.
2. Dans le panneau Styles des outils de développement de votre navigateur, décochez la déclaration `view-transition-scope: all;` pour la désactiver.
3. Passez maintenant à la console JavaScript.
4. Cliquez à nouveau sur le bouton «&nbsp;Mettre à jour le DOM&nbsp;».

Vous devez voir que l'animation de transition de vue n'est pas appliquée lorsque le DOM change, et qu'une `InvalidStateError` est signalée dans la console.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("view-transition-name")}}
- [L'API View Transition](/fr/docs/Web/API/View_Transition_API)
- Le guide [Utiliser l'API View Transition](/fr/docs/Web/API/View_Transition_API/Using)
- [Utiliser les transitions de vue à portée d'élément](/fr/docs/Web/API/View_Transition_API/Using_element-scoped)

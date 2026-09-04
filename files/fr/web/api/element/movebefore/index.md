---
title: "Element : méthode moveBefore()"
short-title: moveBefore()
slug: Web/API/Element/moveBefore
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

La méthode **`moveBefore()`** de l'interface {{DOMxRef("Element")}} déplace un nœud ({{DOMxRef("Node")}}) donné à l'intérieur du nœud appelant en tant qu'enfant direct, avant un nœud de référence donné.

## Syntaxe

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Paramètres

- `movedNode`
  - : Un objet {{DOMxRef("Node")}} représentant le nœud à déplacer. Notez qu'il doit s'agir d'un nœud {{DOMxRef("Element")}} ou {{DOMxRef("CharacterData")}}.
- `referenceNode`
  - : Un objet {{DOMxRef("Node")}} devant lequel `movedNode` est déplacé, ou `null`. Si la valeur est `null`, `movedNode` est inséré à la fin des nœuds enfants du nœud appelant.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{JSxRef("TypeError")}}
  - : Levée dans l'une des situations suivantes&nbsp;:
    - Le `movedNode` défini ne fait pas partie du DOM, et vous essayez de le déplacer à l'intérieur d'un nœud qui fait partie du DOM, ou vice versa.
    - Le `movedNode` défini est un ancêtre de l'élément sur lequel `moveBefore()` est appelé.
    - Vous essayez de déplacer `movedNode` entre deux documents différents.
    - Le `movedNode` défini n'est pas un nœud {{DOMxRef("Element")}} ou {{DOMxRef("CharacterData")}}.
- `NotFoundError` {{JSxRef("TypeError")}}
  - : Le `referenceNode` défini n'est pas un enfant du nœud sur lequel vous appelez `moveBefore()`, c'est-à-dire le nœud dans lequel vous essayez de déplacer `movedNode`.
- `TypeError` {{JSxRef("TypeError")}}
  - : Le deuxième argument n'a pas été fourni.

## Description

La méthode `moveBefore()` déplace un nœud donné vers un nouvel emplacement dans le DOM. Elle fournit une fonctionnalité similaire à la méthode {{DOMxRef("Node.insertBefore()")}}, sauf qu'elle ne supprime pas puis ne réinsère le nœud. Cela signifie que l'état du nœud (qui serait réinitialisé si on le déplaçait avec `insertBefore()` et des mécanismes similaires) est préservé après le déplacement. Cela inclut&nbsp;:

- L'état [d'animation](/fr/docs/Web/CSS/Guides/Animations) et [de transition](/fr/docs/Web/CSS/Guides/Transitions).
- L'état de chargement d'un {{HTMLElement("iframe")}}.
- Les états d'interactivité (par exemple, {{CSSxRef(":focus")}} et {{CSSxRef(":active")}}).
- L'état en [plein écran](/fr/docs/Web/API/Fullscreen_API) d'un élément.
- L'état d'ouverture/fermeture des [fenêtres contextuelles](/fr/docs/Web/API/Popover_API).
- L'état bloquant des éléments {{HTMLElement("dialog")}} (les boîtes de dialogue bloquantes ne sont pas fermées).

L'état de lecture des éléments HTML {{HTMLElement("video")}} et {{HTMLElement("audio")}} n'est pas inclus dans la liste ci-dessus, car ces éléments conservent leur état lorsqu'ils sont retirés et réinsérés, quel que soit le mécanisme utilisé.

Lors de l'observation des modifications du DOM à l'aide d'un {{DOMxRef("MutationObserver")}}, les nœuds déplacés avec `moveBefore()` sont enregistrés avec un [nœud supprimé](/fr/docs/Web/API/MutationRecord/removedNodes) et un [nœud ajouté](/fr/docs/Web/API/MutationRecord/addedNodes).

### Contraintes de `moveBefore()`

Il existe certaines contraintes à connaître lors de l'utilisation de `moveBefore()`&nbsp;:

- Il ne peut fonctionner que lors du déplacement d'un nœud au sein du même document.
- Il ne fonctionne pas si vous essayez de déplacer un nœud qui n'est pas connecté au DOM vers un parent déjà connecté, ou vice versa.

Dans de tels cas, `moveBefore()` échoue avec une exception `HierarchyRequestError`. Si les contraintes ci-dessus sont des exigences pour votre cas d'utilisation particulier, vous devez utiliser {{DOMxRef("Node.insertBefore()")}} à la place, ou utiliser [`try...catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch) pour gérer les erreurs qui surviennent dans de tels cas.

### Déplacer les éléments personnalisés tout en préservant leur état

Chaque fois que la position d'un [élément personnalisé](/fr/docs/Web/API/Web_components/Using_custom_elements) dans le DOM est mise à jour avec `Element.moveBefore()`, ou des méthodes similaires telles que {{DOMxRef("Node.insertBefore()")}}, ses rappels de cycle de vie `disconnectedCallback()` et `connectedCallback()` sont déclenchés. Comme ces rappels sont généralement utilisés pour implémenter tout code d'initialisation ou de nettoyage nécessaire au début ou à la fin du cycle de vie de l'élément, les exécuter lorsque l'élément est déplacé (plutôt que supprimé ou inséré) peut poser des problèmes avec son état.

Vous pouvez utiliser le rappel `connectedMoveCallback()` pour préserver l'état d'un élément personnalisé. Lors de l'utilisation de `moveBefore()` pour déplacer un élément personnalisé, `connectedMoveCallback()` est exécuté à la place de `connectedCallback()` et `disconnectedCallback()`.

Voir [Déplacer des éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements#rappels_de_cycle_de_vie_et_déplacements_préservant_létat) pour plus d'informations.

## Exemples

### Utilisation simple de `moveBefore()`

Dans cette démonstration, nous illustrons l'utilisation de base de `moveBefore()`.

#### HTML

La fonctionnalité HTML présente un élément {{HTMLElement("article")}} contenant un élément {{HTMLElement("div")}} et deux éléments {{HTMLElement("section")}}. Le `<div>` contient un {{HTMLElement("button")}}, que nous utilisons plus tard pour le déplacer.

```html live-sample___movebefore-basic
<article id="enveloppe">
  <div id="deplace">
    <button>Déplacez-moi !</button>
  </div>
  <section id="section1">
    <h2>Section 1</h2>
  </section>
  <section id="section2">
    <h2>Section 2</h2>
  </section>
</article>
```

#### CSS

Nous fournissons un style rudimentaire pour l'apparence et l'espacement des boîtes, et utilisons [les boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) pour centrer leur contenu.

```css live-sample___movebefore-basic
#section1,
#section2,
#deplace {
  width: 200px;
  height: 80px;
  border: 5px solid rgb(0 0 0 / 0.25);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#section1,
#section2 {
  background-color: hotpink;
}

#deplace {
  background-color: orange;
}
```

#### JavaScript

Dans notre script, nous attachons un écouteur d'évènement `click` au `<button>` avec {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}. Lorsque le bouton est cliqué, nous vérifions si le {{DOMxRef("Element.nextElementSibling", "nextElementSibling")}} de notre `<div>` `deplace` est le premier élément `<section>`. Si c'est le cas, nous invoquons `moveBefore()` sur `<article>` `enveloppe` et spécifions de déplacer le `<div>` avant le deuxième `<section>`. Sinon, nous utilisons `moveBefore()` pour déplacer le `<div>` avant le premier `<section>`.

```js live-sample___movebefore-basic
const enveloppe = document.getElementById("enveloppe");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const deplace = document.getElementById("deplace");
const btnDeplacer = document.querySelector("button");

btnDeplacer.addEventListener("click", () => {
  if (deplace.nextElementSibling === section1) {
    enveloppe.moveBefore(deplace, section2);
  } else {
    enveloppe.moveBefore(deplace, section1);
  }
});
```

#### Résultat

L'exemple est rendu comme ceci&nbsp;:

{{EmbedLiveSample("movebefore-basic", "100%", 300)}}

Essayez de cliquer sur le `<button>` plusieurs fois et notez comment il bascule entre les deux positions.

### Démontrer la préservation de l'état

Dans cette démonstration, nous fournissons plusieurs mécanismes pour déplacer un élément `<div>` contenant une intégration YouTube entre deux conteneurs différents, démontrant comment `moveBefore()` préserve l'état de lecture de l'intégration, tandis que les autres mécanismes ne le font pas.

#### HTML

Le HTML présente un élément {{HTMLElement("article")}} contenant deux éléments {{HTMLElement("section")}}. Le premier élément `<section>` contient un élément {{HTMLElement("div")}} contenant le code d'intégration YouTube. Nous avons également un élément {{HTMLElement("div")}} contenant trois éléments {{HTMLElement("button")}}, auxquels nous ajoutons ultérieurement la fonctionnalité de déplacement de l'élément `<div>` d'intégration entre les sections avec JavaScript.

```html live-sample___movebefore-state
<article id="enveloppe">
  <section id="section1">
    <div id="deplace">
      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/XvoENpR9cCQ?si=o2i6MvxugD-O5yyv"
        title="Lecteur vidéo YouTube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
  </section>
  <section id="section2"></section>
</article>
<div id="controles">
  <button id="deplace-avant">déplacer avec <code>moveBefore()</code></button>
  <button id="insererAvant">déplacer avec <code>insertBefore()</code></button>
  <button id="ajouter-au-debut">déplacer avec <code>prepend()</code></button>
</div>
```

#### CSS

Nous utilisons [les boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) pour la mise en page afin de placer les deux éléments `<section>` côte à côte et d'espacer uniformément les boutons à l'intérieur du `<div>` `controles`.

```css live-sample___movebefore-state
#enveloppe,
#controles {
  width: 100%;
  display: flex;
}

#enveloppe {
  margin-bottom: 10px;
}

iframe {
  border: none;
}

section {
  flex: 1;
  padding: 10px;
}

#controles {
  display: flex;
  justify-content: space-around;
}

#section1 {
  background-color: hotpink;
}

#section2 {
  background-color: orange;
}

#deplace {
  max-width: 100%;
  background-color: black;
}
```

#### JavaScript

Dans notre script, nous attachons des écouteurs d'évènement `click` à chaque `<button>` avec {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}. Lorsque les boutons sont cliqué, nous vérifions quel élément `<section>` est le {{DOMxRef("Node.parentElement", "parentElement")}} de notre `<div>` d'intégration, puis nous utilisons la fonction appropriée (`moveBefore()`, {{DOMxRef("Node.insertBefore", "insertBefore()")}}, ou {{DOMxRef("Element.prepend", "prepend()")}}) pour le déplacer à l'intérieur de l'autre élément `<section>`.

```js live-sample___movebefore-state
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const deplace = document.getElementById("deplace");
const btnDeplaceAvant = document.getElementById("deplace-avant");
const btnInsereAvant = document.getElementById("insererAvant");
const btnAjouterAuDebut = document.getElementById("ajouter-au-debut");

btnDeplaceAvant.addEventListener("click", () => {
  if (deplace.parentElement === section1) {
    section2.moveBefore(deplace, null);
  } else {
    section1.moveBefore(deplace, null);
  }
});

btnInsereAvant.addEventListener("click", () => {
  if (deplace.parentElement === section1) {
    section2.insertBefore(deplace, null);
  } else {
    section1.insertBefore(deplace, null);
  }
});

btnAjouterAuDebut.addEventListener("click", () => {
  if (deplace.parentElement === section1) {
    section2.prepend(deplace);
  } else {
    section1.prepend(deplace);
  }
});
```

#### Résultat

L'exemple est rendu comme ceci&nbsp;:

{{EmbedLiveSample("movebefore-state", "100%", 260)}}

Essayez de lire l'intégration YouTube, puis cliquez sur chaque `<button>` plusieurs fois pour basculer la position de l'élément `<div>` à l'écran de gauche à droite. Notez comment, dans le cas de `insertBefore()` et `prepend()`, l'état de l'intégration est réinitialisé après chaque déplacement, nécessitant un redémarrage. Cependant, dans le cas de `moveBefore()`, l'état est préservé après chaque déplacement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.moveBefore()")}}
- La méthode {{DOMxRef("DocumentFragment.moveBefore()")}}
- La méthode {{DOMxRef("Node.insertBefore()")}}

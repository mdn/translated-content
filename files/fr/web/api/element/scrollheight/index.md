---
title: "Element : propriété scrollHeight"
short-title: scrollHeight
slug: Web/API/Element/scrollHeight
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("DOM")}}

La propriété en lecture seule **`scrollHeight`** de l'interface {{DOMxRef("Element")}} est une mesure de la hauteur du contenu d'un élément, y compris le contenu non visible à l'écran en raison du débordement.

![La fenêtre d'affichage de l'utilisateur·ice est un élément avec quatre zones étiquetées padding-top, border-top, border-bottom, padding-bottom. La hauteur de défilement va du padding top du conteneur jusqu'à la fin du padding bottom, bien au-delà du haut et du bas de la fenêtre d'affichage.](scrollheight.png)

La valeur de `scrollHeight` est égale à la hauteur minimale que l'élément nécessite pour que tout le contenu tienne dans la fenêtre d'affichage sans utiliser de barre de défilement verticale. La hauteur est mesurée de la même manière que {{DOMxRef("Element.clientHeight", "clientHeight")}}&nbsp;: elle inclut le remplissage de l'élément, mais pas sa bordure, sa marge ou sa barre de défilement horizontale (si présente). Elle peut également inclure la hauteur des pseudo-éléments CSS tels que {{CSSxRef("::before")}} ou {{CSSxRef("::after")}}. Si le contenu de l'élément peut tenir sans avoir besoin d'une barre de défilement verticale, son `scrollHeight` est égal à {{DOMxRef("Element.clientHeight", "clientHeight")}}.

## Valeur

Un entier.

## Problèmes et solutions

### Déterminer si un élément a complètement été défilé

`scrollTop` est un nombre qui n'est pas arrondi, tandis que `scrollHeight` et `clientHeight` sont arrondis — donc la seule façon de déterminer si la zone de défilement est en bas est de voir si la quantité de défilement est suffisamment proche d'un certain seuil (dans cet exemple `1`)&nbsp;:

```js
Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) <= 1;
```

Ce qui suit _ne_ fonctionne _pas_ tout le temps parce que `scrollTop` peut contenir des décimales&nbsp;:

```js
element.scrollHeight - Math.abs(element.scrollTop) === element.clientHeight;
```

### Déterminer si le contenu d'un élément déborde

Cette fonction retourne une valeur booléenne indiquant si le contenu d'un élément déborde de ses limites&nbsp;:

```js
function aDeborde(element) {
  return element.scrollHeight > element.clientHeight;
}
```

Ensuite, vous pouvez vérifier si l'élément est défilable dans ce cas&nbsp;:

```js
function peutDefiler(element) {
  return (
    aDeborde(element) &&
    ["scroll", "auto"].includes(window.getComputedStyle(element).overflowY)
  );
}
```

## Exemples

### Vérifier que l'utilisatrice ou l'utilisateur a lu un texte

Associé à l'évènement {{DOMxRef("Element.scroll_event", "scroll")}}, cette équivalence peut s'avérer utile pour déterminer si un·e utilisateur·ice a lu un texte ou non (voir aussi les propriétés {{DOMxRef("element.scrollTop")}} et {{DOMxRef("element.clientHeight")}}).

La case à cocher de la démo ci-dessous est désactivée et ne peut être cochée pour montrer l'accord que lorsque le contenu du paragraphe a été entièrement défilé. Une fois cochée, le bouton "Suivant" peut être cliqué pour continuer.

#### HTML

```html
<form id="form" name="inscription">
  <p id="info">Lire tout le texte pour accepter</p>
  <div id="lecture-tres-importante">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus
      vestibulum mattis. Id consectetur purus ut faucibus pulvinar elementum
      integer enim neque. Metus vulputate eu scelerisque felis imperdiet. Massa
      massa ultricies mi quis hendrerit dolor magna eget est. Rhoncus aenean vel
      elit scelerisque mauris pellentesque. Volutpat est velit egestas dui id
      ornare arcu. Id cursus metus aliquam eleifend mi in. Condimentum lacinia
      quis vel eros donec ac. Feugiat pretium nibh ipsum consequat nisl vel
      pretium lectus.
    </p>
    <p>
      Sit amet volutpat consequat mauris nunc congue nisi vitae. Viverra
      accumsan in nisl nisi scelerisque. Enim ut tellus elementum sagittis
      vitae. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Nisi
      scelerisque eu ultrices vitae. Sem fringilla ut morbi tincidunt augue
      interdum velit. Senectus et netus et malesuada fames ac turpis egestas.
      Nunc non blandit massa enim nec. At augue eget arcu dictum varius duis at.
      Dictumst quisque sagittis purus sit amet. Ut eu sem integer vitae justo.
      Mollis aliquam ut porttitor leo a diam sollicitudin. Mollis nunc sed id
      semper risus in. Eu volutpat odio facilisis mauris sit. Augue interdum
      velit euismod in pellentesque massa placerat duis. Aliquam faucibus purus
      in massa tempor nec feugiat. Nisl rhoncus mattis rhoncus urna neque
      viverra justo. Leo duis ut diam quam nulla. Ultrices dui sapien eget mi
      proin sed libero enim.
    </p>
    <p>
      Cras adipiscing enim eu turpis egestas. Est ultricies integer quis auctor
      elit. Tempor id eu nisl nunc mi ipsum. Non nisi est sit amet facilisis.
      Nisl suscipit adipiscing bibendum est ultricies integer quis. Habitant
      morbi tristique senectus et netus et malesuada. Etiam erat velit
      scelerisque in dictum non consectetur a erat. Diam sollicitudin tempor id
      eu nisl. Aenean vel elit scelerisque mauris pellentesque pulvinar
      pellentesque habitant. A pellentesque sit amet porttitor. Viverra aliquet
      eget sit amet tellus cras. Eu ultrices vitae auctor eu.
    </p>
    <p>
      Fames ac turpis egestas sed tempus. Id donec ultrices tincidunt arcu non
      sodales. Congue mauris rhoncus aenean vel elit scelerisque mauris
      pellentesque. Velit scelerisque in dictum non consectetur a erat nam.
      Auctor elit sed vulputate mi sit amet mauris commodo. Mauris ultrices eros
      in cursus turpis massa tincidunt. Dui sapien eget mi proin sed libero enim
      sed faucibus. Ipsum dolor sit amet consectetur adipiscing elit
      pellentesque habitant. Amet massa vitae tortor condimentum. Feugiat nisl
      pretium fusce id velit. Malesuada proin libero nunc consequat interdum
      varius sit. Quam nulla porttitor massa id neque aliquam vestibulum morbi
      blandit. Gravida arcu ac tortor dignissim convallis aenean et tortor at.
      Dapibus ultrices in iaculis nunc sed. Fermentum et sollicitudin ac orci
      phasellus egestas tellus. Proin libero nunc consequat interdum varius sit
      amet mattis. Sed viverra ipsum nunc aliquet bibendum.
    </p>
  </div>
  <p>
    <input type="checkbox" id="accepter" name="accept" disabled />
    <label for="accepter">J'accepte</label>
    <input type="submit" id="etape-suivante" value="Suivant" disabled />
  </p>
</form>
```

#### CSS

```css
#info {
  margin: 5px;
  display: inline-block;
  font-style: italic;
}

#lecture-tres-importante {
  height: 130px;
  padding: 5px;
  border: 2px solid #00b4c5;
  border-radius: 5px;
  overflow: scroll;
}
```

#### JavaScript

```js
const info = document.getElementById("info");
const aAccepter = document.getElementById("accepter");
const versEtapeSuivante = document.getElementById("etape-suivante");
const lectureTresImportante = document.getElementById(
  "lecture-tres-importante",
);

// Vérifie si l'utilisateur·ice a fait défiler l'élément jusqu'en bas
function estLu(element) {
  return (
    Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) <=
    1
  );
}

function verifierDefilementEnBas(element) {
  if (estLu(element)) {
    info.innerText = "Vous avez lu tout le texte. Cochez pour continuer.";
    aAccepter.disabled = false;
  }
}

aAccepter.addEventListener("change", (e) => {
  versEtapeSuivante.disabled = !e.target.checked;
});

lectureTresImportante.addEventListener("scroll", () => {
  verifierDefilementEnBas(lectureTresImportante);
});

versEtapeSuivante.addEventListener("click", () => {
  if (aAccepter.checked) {
    versEtapeSuivante.value = "Fait !";
  }
});
```

#### Résultat

{{EmbedLiveSample("Vérifier que l'utilisatrice ou l'utilisateur a lu un texte", 640, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Déterminer la taille des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- La propriété {{DOMxRef("HTMLElement.offsetHeight")}}
- La propriété {{DOMxRef("Element.clientHeight")}}
- La propriété {{DOMxRef("Element.scrollWidth")}}
- La propriété {{DOMxRef("Element.scrollLeft")}}
- La propriété {{DOMxRef("Element.scrollTop")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
- La méthode {{DOMxRef("Element.scrollTo()")}}

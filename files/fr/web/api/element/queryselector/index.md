---
title: "Element : méthode querySelector()"
short-title: querySelector()
slug: Web/API/Element/querySelector
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

{{APIRef("DOM")}}

La méthode **`querySelector()`** de l'interface {{DOMxRef("Element")}} renvoie le premier élément descendant de l'élément sur lequel elle est invoquée qui correspond au groupe de sélecteurs défini.

## Syntaxe

```js-nolint
querySelector(selectors)
```

### Paramètres

- `selectors`
  - : Une chaîne de caractères contenant un ou plusieurs sélecteurs à comparer. Cette chaîne doit être composée de sélecteurs CSS valides&nbsp;; sinon une exception `SyntaxError` est levée.

    Notez que la spécification HTML n'exige pas que les valeurs d'attribut soient des identifiants CSS valides. Si la valeur d'un attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) ou [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) n'est pas un identifiant CSS valide, vous devez l'échapper avant de l'utiliser dans un sélecteur, soit en appelant {{DOMxRef("CSS.escape_static", "CSS.escape()")}} sur la valeur, soit en utilisant l'une des techniques décrites dans [Échapper les caractères](/fr/docs/Web/CSS/Reference/Values/ident#échapper_les_caractères). Voir [Échapper les valeurs d'attribut](#échapper_les_valeurs_dattribut) pour un exemple.

### Valeur de retour

Le premier élément descendant de `baseElement` qui correspond au groupe de `selectors` «&nbsp;sélecteurs&nbsp;» défini. La hiérarchie entière des éléments est considérée lors de la mise en correspondance, y compris ceux qui sont en dehors de l'ensemble des éléments, y compris `baseElement` et ses descendants&nbsp;; En d'autres termes, les sélecteurs sont d'abord appliqués au document entier, et non à l'élément de base, pour générer une liste initiale d'éléments potentiels. Les éléments résultants sont ensuite examinés pour voir s'ils sont des descendants de `baseElement`. La première correspondance de ces éléments restants est renvoyée par la méthode `querySelector()`.

Si aucune correspondance n'est trouvée, la valeur retournée est `null`.

### Exceptions

- SyntaxError
  - : Signale que les `selectors` définis sont invalides.

## Exemple

Voyons quelques exemples.

### Trouver un élément spécifique avec des valeurs spécifiques d'un attribut

Dans ce premier exemple, est retourné le premier élément {{HTMLElement("style")}} dans le corps du document HTML qui, soit n'a pas de type, soit a le type `text/css`&nbsp;:

```js
const el = document.body.querySelector(
  "style[type='text/css'], style:not([type])",
);
```

### Obtenir les descendants directs avec la pseudo-classe `:scope`

Cet exemple utilise la pseudo-classe {{CSSxRef(":scope")}} pour récupérer les enfants directs de l'élément `parentElement`.

#### HTML

```html
<div>
  <h6>Titre de la page</h6>
  <div id="parent">
    <span>L'amour est bienveillant.</span>
    <span>
      <span>L'amour est patient.</span>
    </span>
    <span>
      <span>L'amour est altruiste.</span>
    </span>
  </div>
</div>
```

#### CSS

```css
span {
  display: block;
  margin-bottom: 5px;
}
.red span {
  background-color: red;
  padding: 5px;
}
```

#### JavaScript

```js
const parentElement = document.querySelector("#parent");
let allChildren = parentElement.querySelectorAll(":scope > span");
allChildren.forEach((item) => item.classList.add("red"));
```

#### Résultat

{{EmbedLiveSample('Obtenir les descendants directs avec la pseudo-classe `:scope`-class', 600, 160)}}

### La hiérarchie entière compte

Cet exemple montre que la hiérarchie du document entier est prise en compte lors de l'application des `selectors`, de sorte que les niveaux en dehors du `baseElement` défini sont toujours pris en compte lors de la recherche des correspondances.

#### HTML

```html
<div>
  <h5>Contenu original</h5>
  <p>
    à l'intérieur du paragraphe
    <span>à l'intérieur de la balise span</span>
    à l'intérieur du paragraphe
  </p>
</div>
<div>
  <h5>Résultat</h5>
  <div id="output"></div>
</div>
```

#### JavaScript

```js
const baseElement = document.querySelector("p");
document.getElementById("output").textContent =
  baseElement.querySelector("div span").textContent;
```

#### Résultat

Le résultat ressemble à ceci&nbsp;:

{{EmbedLiveSample('La hiérarchie entière compte', '', 200)}}

Remarquez que le sélecteur `"div span"` correspond toujours avec succès à l'élément {{HTMLElement("span")}}, même si les nœuds enfants de `baseElement` n'incluent pas l'élément {{HTMLElement("div")}} (il fait toujours partie du sélecteur défini).

### Échapper les valeurs d'attribut

Cet exemple montre que si un document HTML contient un [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) qui n'est pas un [identifiant CSS](/fr/docs/Web/CSS/Reference/Values/ident) valide, il faut échapper la valeur de l'attribut avant de l'utiliser dans `querySelector()`.

#### HTML

Dans le code suivant, un élément {{HTMLElement("div")}} a un `id` de `"this?element"`, qui n'est pas un identifiant CSS valide, car le caractère `"?"` n'est pas autorisé dans les identifiants CSS.

Nous avons également trois boutons et un élément {{HTMLElement("pre")}} pour consigner les erreurs.

```html
<div id="container">
  <div id="this?element"></div>
</div>

<button id="no-escape">Aucun échappement</button>
<button id="css-escape">CSS.escape()</button>
<button id="manual-escape">Échappement manuel</button>

<pre id="log"></pre>
```

#### CSS

```css
div {
  background-color: blue;
  margin: 1rem 0;
  height: 100px;
  width: 200px;
}
```

#### JavaScript

Les trois boutons, lorsqu'on clique dessus, essaient tous de sélectionner le `<div>`, puis définissent sa couleur de fond sur une valeur aléatoire.

- Le premier bouton utilise directement la valeur `this?element`.
- Le deuxième bouton échappe la valeur en utilisant {{DOMxRef("CSS.escape_static", "CSS.escape()")}}.
- Le troisième bouton échappe explicitement le caractère `?` à l'aide d'une barre oblique inverse. Notez qu'il faut aussi échapper la barre oblique inverse elle‑même, en utilisant une autre barre oblique inverse, par exemple&nbsp;: `\\?`.

```js
const container = document.querySelector("#container");
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const element = container.querySelector(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    element.style.backgroundColor = randomColor;
  } catch (e) {
    log.textContent = e;
  }
}

document.querySelector("#no-escape").addEventListener("click", () => {
  setBackgroundColor("this?element");
});

document.querySelector("#css-escape").addEventListener("click", () => {
  setBackgroundColor(CSS.escape("this?element"));
});

document.querySelector("#manual-escape").addEventListener("click", () => {
  setBackgroundColor("this\\?element");
});
```

#### Résultat

Cliquer sur le premier bouton génère une erreur, tandis que les deuxième et troisième boutons fonctionnent correctement.

{{EmbedLiveSample("Échapper les valeurs d'attribut", "", 200)}}

### Plus d'exemples

Voir {{DOMxRef("Document.querySelector()")}} pour des exemples supplémentaires du format approprié pour les sélecteurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Sélection et parcours de l'arbre DOM](/fr/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- Le guide des [Sélecteurs d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) CSS
- [Apprendre&nbsp;: Sélecteurs d'attribut CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
- La méthode {{DOMxRef("Element.querySelectorAll()", "querySelectorAll()")}} de l'interface `Element`
- Les méthodes {{DOMxRef("Document.querySelector()", "querySelector()")}} et {{DOMxRef("Document.querySelectorAll()", "querySelectorAll()")}} de l'interface `Document`
- Les méthodes {{DOMxRef("DocumentFragment.querySelector()", "querySelector()")}} et {{DOMxRef("DocumentFragment.querySelectorAll()", "querySelectorAll()")}} de l'interface `DocumentFragment`
- Autres méthodes qui prennent des sélecteurs&nbsp;: {{DOMxRef("element.closest()")}} et {{DOMxRef("element.matches()")}}

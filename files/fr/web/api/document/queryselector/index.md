---
title: "Document : méthode querySelector()"
short-title: querySelector()
slug: Web/API/Document/querySelector
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

{{APIRef("DOM")}}

La méthode **`querySelector()`** de l'interface {{DOMxRef("Document")}} retourne le premier élément {{DOMxRef("Element")}} du document qui correspond au sélecteur [CSS](/fr/docs/Web/CSS/Guides/Selectors) spécifié, ou à un groupe de sélecteurs CSS. Si aucune correspondance n'est trouvée, `null` est retourné.

La correspondance se fait par un parcours en profondeur (pré‑ordre) des nœuds du document, en commençant par le premier élément du balisage et en parcourant ensuite les nœuds dans l'ordre séquentiel.

Si le sélecteur correspond à un ID utilisé par erreur plusieurs fois dans le document, le premier élément portant cet ID est retourné.

Les [pseudo‑éléments CSS](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ne retournent jamais d'éléments.

## Syntaxe

```js-nolint
querySelector(selectors)
```

### Paramètres

- `selectors`
  - : Une chaîne de caractères qui contient un ou plusieurs sélecteurs à comparer. La chaîne de caractères doit être composée de sélecteurs CSS valides&nbsp;; sinon une exception `SyntaxError` est levée.

    Notez que la spécification HTML n'exige pas que les valeurs d'attribut soient des identifiants CSS valides. Si la valeur d'un attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) ou [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) n'est pas un identifiant CSS valide, vous devez l'échapper avant de l'utiliser dans un sélecteur, soit en appelant {{DOMxRef("CSS.escape_static", "CSS.escape()")}} sur la valeur, soit en utilisant l'une des techniques décrites dans [Échapper les caractères](/fr/docs/Web/CSS/Reference/Values/ident#échapper_les_caractères). Voir [Échapper des caractères spéciaux](#échapper_des_caractères_spéciaux) pour un exemple.

### Valeur de retour

Un objet {{DOMxRef("Element")}} représentant le premier élément dans le document qui corresponde au jeu de [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors) spécifié, ou `null` s'il n'y a pas de correspondances.

Si vous avez besoin d'une liste de tous les éléments correspondant aux sélecteurs spécifiés, vous devez utiliser {{DOMxRef("Document.querySelectorAll", "querySelectorAll()")}} à la place.

### Exception

- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Signale que la syntaxe du _sélecteur_ défini est invalide.

## Exemples

### Trouver le premier élément correspondant à une classe

Dans cet exemple, le premier élément dans le document qui contient la classe `maclasse` est retourné&nbsp;:

```js
const el = document.querySelector(".maclasse");
```

### Un sélecteur plus complexe

Les _sélecteurs_ peuvent également être réellement puissants comme le montre l'exemple suivant. Ici, le premier élément `<input name="identifiant"/>` dans un `<div class="panneau-utilisateur principal">` dans le document est retourné&nbsp;:

```js
const el = document.querySelector(
  "div.panneau-utilisateur.principal input[name='identifiant']",
);
```

### Négation

Comme toutes les chaînes de sélecteurs CSS sont valides, vous pouvez aussi nier des sélecteurs&nbsp;:

```js
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);
```

Cela sélectionne un input dont le parent est un div avec la classe `user-panel` mais pas la classe `main`.

### Échapper les valeurs d'attribut

Cet exemple montre que si un document HTML contient un [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) qui n'est pas un [identifiant CSS](/fr/docs/Web/CSS/Reference/Values/ident) valide, il faut échapper la valeur de l'attribut avant de l'utiliser dans `querySelector()`.

#### HTML

Dans le code suivant, un {{HTMLElement("div")}} a un `id` de `"this?element"`, qui n'est pas un identifiant CSS valide, parce que le caractère `"?"` n'est pas autorisé dans les identifiants CSS.

Nous avons également trois boutons et un élément {{HTMLElement("pre")}} pour consigner les erreurs.

```html
<div id="this?element"></div>

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
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const element = document.querySelector(`#${id}`);
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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Sélection et parcours de l'arbre DOM](/fr/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- La méthode {{DOMxRef("Element.querySelector()")}}
- La méthode {{DOMxRef("Document.querySelectorAll()")}}
- La méthode {{DOMxRef("Element.querySelectorAll()")}}

---
title: "Attribut HTML universel : `title`"
short-title: title
slug: Web/HTML/Reference/Global_attributes/title
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`title`** contient un texte d'information relatif à l'élément auquel il est rattaché.

{{InteractiveExample("Démonstration HTML&nbsp;: title", "tabbed-shorter")}}

```html interactive-example
<p>
  Utilisez l'attribut <code>title</code> sur un <code>iframe</code> pour
  identifier clairement le contenu de l'<code>iframe</code> aux lecteurs
  d'écran.
</p>

<iframe
  title="Page Wikipédia pour le langage HTML"
  src="https://fr.m.wikipedia.org/wiki/HTML"></iframe>
<iframe
  title="Page Wikipédia pour le langage CSS"
  src="https://fr.m.wikipedia.org/wiki/CSS"></iframe>
```

```css interactive-example
iframe {
  height: 200px;
  margin-bottom: 24px;
  width: 100%;
}
```

L'usage principal de l'attribut `title` est d'étiqueter les éléments {{HTMLElement("iframe")}} pour les technologies d'assistance.

L'attribut `title` peut aussi être utilisé pour étiqueter les contrôles dans les [tables de données](/fr/docs/Web/HTML/Reference/Elements/table).

L'attribut `title`, lorsqu'il est ajouté à [`<link rel="stylesheet">`](/fr/docs/Web/HTML/Reference/Elements/link), crée une feuille de style alternative. Lors de la définition d'une feuille de style alternative avec `<link rel="alternate">`, l'attribut est requis et doit être défini sur une chaîne de caractères qui n'est pas vide.

S'il est inclus sur la balise d'ouverture {{HTMLElement('abbr')}}, le `title` doit être une expansion complète de l'abréviation ou de l'acronyme. Au lieu d'utiliser `title`, lorsque c'est possible, fournir l'expansion de l'abréviation ou de l'acronyme en texte clair lors de la première utilisation, en utilisant `<abbr>` pour baliser l'abréviation. Cela permet à tous les utilisateur·ice·s de savoir quel nom ou terme l'abréviation ou l'acronyme raccourcit tout en fournissant un indice aux agents utilisateur sur la façon d'annoncer le contenu.

Bien que `title` puisse être utilisé pour fournir un label associé de manière programmatique à un élément {{HTMLElement("input")}}, ce n'est pas une bonne pratique. Utiliser un {{HTMLElement("label")}} à la place.

## Titre sur plusieurs lignes

Un attribut `title` peut contenir plusieurs lignes. Chaque caractère `U+000A LINE FEED` (`LF`) représentera un saut de ligne. Le fragment de code suivant représente donc un élément dont le titre est écrit sur deux lignes&nbsp;:

### HTML

```html
<p>
  Les sauts de ligne au sein d'un attribut <code>title</code> doivent être pris
  en compte. Cet
  <span
    title="Ceci est un
titre sur plusieurs lignes">
    exemple de span
  </span>
  a un attribut title avec un saut de ligne.
</p>
<hr />
<pre id="output"></pre>
```

### JavaScript

Nous pouvons interroger l'attribut `title` et l'afficher dans l'élément `<pre>` vide comme suit&nbsp;:

```js
const span = document.querySelector("span");
const output = document.querySelector("#output");
output.textContent = span.title;
```

### Résultat

{{EmbedLiveSample("Titre sur plusieurs lignes")}}

## Héritage de l'attribut `title`

Si un élément ne possède pas d'attribut `title`, il l'hérite de son nœud parent, qui peut à son tour l'hériter de son parent, et ainsi de suite.

Si cet attribut est défini sur la chaîne vide, cela signifie que les `title` de ses ancêtres sont sans objet et ne doivent pas être utilisés dans la bulle d'information de cet élément.

### HTML

```html
<div title="Une bubulle">
  <p>
    Si vous survolez cet élément, il y aura une bulle d'information "Une
    bubulle".
  </p>
  <p title="">Et au-dessus de celui-ci, aucune info.</p>
</div>
```

### Résultat

{{EmbedLiveSample("Héritage de l'attribut `title`")}}

## Problèmes d'accessibilité

L'attribut `title` est très problématique pour&nbsp;:

- Les personnes qui utilisent des appareils à interface tactile
- Les personnes qui naviguent au clavier
- Les personnes qui naviguent en utilisant des outils d'assistance comme des lecteurs d'écran ou des loupes logicielles
- Les personnes souffrant de troubles cognitifs

Ceci est dû à une prise en charge hétérogène des navigateurs, aggravée par le traitement supplémentaire effectué par les technologies d'assistance sur la page rendue par le navigateur. Si un effet de bulle d'information est souhaité, il est préférable [d'utiliser une technique plus accessible <sup>(angl.)</sup>](https://inclusive-components.design/tooltips-toggletips/) pouvant être utilisée avec les méthodes de navigation ci-dessus.

- [3.2.5.1. L'attribut de titre | W3C HTML 5.2&nbsp;: 3. Sémantique, structure et API des documents HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [Utiliser l'attribut HTML titre — mise à jour | Vispero <sup>(angl.)</sup>](https://vispero.com/resources/using-the-html-title-attribute-updated/)
- [Info-bulles et Toggletips - Inclusive Components <sup>(angl.)</sup>](https://inclusive-components.design/tooltips-toggletips/)
- [Les épreuves et tribulations de l'attribut de titre - 24 Accessibility <sup>(angl.)</sup>](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- La propriété {{DOMxRef("HTMLElement.title")}} qui reflète cet attribut.

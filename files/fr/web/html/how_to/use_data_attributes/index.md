---
title: Utiliser les attributs de données
slug: Web/HTML/How_to/Use_data_attributes
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

HTML est conçu pour être extensible et permettre d'associer des données à un élément particulier sans que ces données aient nécessairement une signification définie. Les [attributs `data-*`](/fr/docs/Web/HTML/Reference/Global_attributes/data-*) permettent de stocker des informations supplémentaires sur des éléments HTML standards et sémantiques, sans recourir à des astuces comme des attributs non standard ou des propriétés supplémentaires sur le DOM.

## Syntaxe HTML

La syntaxe est simple. Tout attribut d'un élément dont le nom commence par `data-` est un attribut de données (_data attribute_). Si par exemple vous avez un article pour lequel vous souhaitez stocker des informations supplémentaires et qui n'ont pas de représentation visuelle, il vous suffit d'utiliser des attributs de données pour cela&nbsp;:

```html
<main>
  <article
    id="voiture-electrique"
    data-columns="3"
    data-index-number="12314"
    data-parent="cars">
    <!-- Contenu de la voiture électrique -->
  </article>

  <article
    id="voiture-solaire"
    data-columns="3"
    data-index-number="12315"
    data-parent="cars">
    <!-- Contenu de la voiture solaire -->
  </article>

  <article
    id="voiture-volante"
    data-columns="4"
    data-index-number="12316"
    data-parent="cars">
    <!-- Contenu de la voiture volante -->
  </article>
</main>
```

## Accéder avec du JavaScript

Lire les valeurs de ces attributs avec du [JavaScript](/fr/docs/Web/JavaScript) est également très simple. Vous pourriez utiliser {{DOMxRef("Element.getAttribute", "getAttribute()")}} avec leur nom HTML complet pour les lire, mais le standard les définit d'une manière plus simple&nbsp;: un {{DOMxRef("DOMStringMap")}} peut être lu avec une propriété {{DOMxRef("HTMLElement.dataset", "dataset")}}.

Pour obtenir un attribut `data` avec l'objet `dataset`, repérez la propriété avec la partie du nom de l'attribut qui suit le préfixe `data-` (notez que les tirets sont convertis en {{Glossary("camel_case", "camel case")}}).

```js
const article = document.querySelector("#voiture-electrique");
// La ligne suivante fonctionnerait également :
// const article = document.getElementById("voiture-electrique")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Chaque propriété est une chaîne de caractères et peut être lue ou modifiée. Dans l'exemple ci-dessus, affecter `article.dataset.columns = 5` changerait la valeur de cet attribut en `"5"`.

Vous pouvez également utiliser [`document.querySelector()`](/fr/docs/Web/API/Document/querySelector) ou [`document.querySelectorAll()`](/fr/docs/Web/API/Document/querySelectorAll) avec des sélecteurs d'attributs data pour trouver un élément ou tous les éléments correspondants&nbsp;:

```js
// Trouver tous les éléments ayant un attribut data-columns
const articles = document.querySelectorAll("[data-columns]");

// Trouver tous les éléments avec data-columns="3"
const threeColumnArticles = document.querySelectorAll('[data-columns="3"]');
// Vous pouvez ensuite itérer sur les résultats
threeColumnArticles.forEach((article) => {
  console.log(article.dataset.indexNumber);
});
```

## Accéder avec du CSS

Remarquez que, dans la mesure où les attributs data sont de simples attributs HTML, vous pouvez même y accéder par les [CSS](/fr/docs/Web/CSS). Par exemple, pour afficher les données associées à l'article, vous pouvez utiliser des [contenus générés](/fr/docs/Web/CSS/Reference/Properties/content) en CSS avec la fonction {{CSSxRef("attr()")}}&nbsp;:

```css
article::before {
  content: attr(data-parent);
}
```

Vous pouvez également utiliser les [sélecteurs d'attributs](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) en CSS pour modifier les styles en fonction des données&nbsp;:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Les valeurs des données sont des chaînes de caractères. Les valeurs numériques doivent être placées entre guillemets dans le sélecteur pour que la mise en forme soit appliquée.

## Exemples

### Variantes de style

Imaginons que vous ayez une classe `callout`. Vous souhaitez maintenant implémenter différentes variantes, comme «&nbsp;note&nbsp;» et «&nbsp;attention&nbsp;». Traditionnellement, on utilise simplement des noms de classes différents.

```html
<div class="callout callout--note">...</div>
<div class="callout callout--warning">...</div>
```

```css
.callout {
  margin: 0.5em 0;
  padding: 0.5em;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
}

.callout--note {
  border-color: rgb(15 15 235);
  background-color: rgb(15 15 235 / 0.2);
}
.callout--warning {
  border-color: rgb(235 15 15);
  background-color: rgb(235 15 15 / 0.2);
}
```

Avec les attributs data, voici une alternative que vous pouvez envisager&nbsp;:

```html live-sample___callout-data-attr
<div class="callout">...</div>
<div class="callout" data-variant="note">...</div>
<div class="callout" data-variant="warning">...</div>
```

```css live-sample___callout-data-attr
.callout {
  margin: 0.5em 0;
  padding: 0.5em;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
}

/* Default style */
.callout:not([data-variant]) {
  border-color: rgb(15 15 15);
  background-color: rgb(15 15 15 / 0.2);
}
.callout[data-variant="note"] {
  border-color: rgb(15 15 235);
  background-color: rgb(15 15 235 / 0.2);
}
.callout[data-variant="warning"] {
  border-color: rgb(235 15 15);
  background-color: rgb(235 15 15 / 0.2);
}
```

{{EmbedLiveSample("callout-data-attr", "", 200)}}

Cela présente plusieurs avantages&nbsp;:

- Cela élimine de nombreux états invalides, comme appliquer `callout--note` sans ajouter aussi `callout`, ou appliquer plusieurs variantes simultanément.
- Un attribut `data-variant` séparé permet une analyse statique des valeurs valides via un linter ou une vérification de type.
- Basculer la variante est plus intuitif&nbsp;: vous pouvez utiliser `div.dataset.variant = "warning";` au lieu de manipuler la propriété [`classList`](/fr/docs/Web/API/Element/classList), ce qui nécessite plusieurs étapes.

### Associer des données arbitraires à des éléments du DOM

De nombreuses applications web utilisent des données JavaScript comme source de vérité pour l'état de leur interface. Dans ces cas, vous n'ajoutez que les attributs HTML nécessaires à l'affichage. Les attributs data sont utiles lorsque toutes les informations sont présentes dans le balisage, et que JavaScript n'est nécessaire que pour gérer les évènements, synchroniser l'état, etc.

Par exemple, dans notre exemple de [carrousel avec marge de défilement](/fr/docs/Web/API/IntersectionObserver/scrollMargin#carrousel_avec_marge_de_défilement), nous avons une page HTML déjà remplie de nombreux éléments `<img>`. La source de l'image est d'abord stockée dans `data-src` pour éviter tout chargement prématuré, et le vrai `src` n'est ajouté que lorsque l'élément `<img>` entre dans la zone d'affichage. Les données (source de l'image) sont donc associées à l'élément, et JavaScript ne sert qu'à définir le comportement.

## Problèmes

Ne stockez pas de contenu qui devrait être visible et accessible dans les attributs `data-*`, car les technologies d'assistance pourraient ne pas y avoir accès. De plus, les moteurs de recherche pourraient ne pas indexer les valeurs des attributs de données. Souvent, si vous souhaitez seulement afficher la valeur de l'attribut `data-*`, vous pouvez directement manipuler [`textContent`](/fr/docs/Web/API/Node/textContent).

## Voir aussi

- Cet article est une adaptation de [« Utiliser les attributs de données en JavaScript et CSS » <sup>(angl.)</sup>](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/) publié sur hacks.mozilla.org (en anglais).
- Les attributs personnalisés sont également pris en charge en SVG 2&nbsp;; consultez {{DOMxRef("SVGElement.dataset")}} et {{SVGAttr("data-*")}} pour davantage d'informations.
- [Comment utiliser les attributs de données HTML <sup>(angl.)</sup>](https://www.sitepoint.com/use-html5-data-attributes/) sur SitePoint

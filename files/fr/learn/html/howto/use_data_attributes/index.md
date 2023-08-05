---
title: Utiliser les attributs de données
slug: Learn/HTML/Howto/Use_data_attributes
---

{{LearnSidebar}}

[HTML5](/fr/docs/Web/Guide/HTML/HTML5) est conçu avec le souci de l'extensibilité pour les données qui doivent être associées avec un élément particulier sans qu'on leur donne une signification spécifique. [Les attributs `data-*`](/fr/docs/Web/HTML/Attributs_universels#attr-data-*) nous permettent de stocker des informations supplémentaires sur les éléments sémantiques standard sans avoir recours à des attributs non-standard ni à des propriétés supplémentaires du DOM, ni à {{domxref("Node.setUserData()")}}.

## Syntaxe HTML

La syntaxe est simple. Tout attribut d'un élément dont le nom commence par `data-` est un attribut de données (_data attribute_). Si par exemple vous avez un article pour lequel vous souhaitez stocker des informations supplémentaires et qui n'ont pas de représentation visuelle, il vous suffit d'utiliser des attributs de données pour cela&nbsp;:

```html
<article
  id="voitureelectrique"
  data-columns="3"
  data-index-number="12314"
  data-parent="voitures">
  ...
</article>
```

## Accéder via du code JavaScript

Lire les valeurs de ces attributs avec du [JavaScript](/fr/docs/Web/JavaScript) est également très simple. Vous pourriez utiliser {{domxref("Element.getAttribute", "getAttribute()")}} avec leur nom HTML complet pour les lire, mais le standard les définit d'une manière plus simple : un {{domxref("DOMStringMap")}} peut être lu via une propriété {{domxref("HTMLElement.dataset", "dataset")}}.

Pour obtenir un attribut `data` avec l'objet `dataset`, repérez la propriété avec la partie du nom de l'attribut qui suit le préfixe `data-` (notez que les tirets sont convertis en _[camelCase](https://fr.wikipedia.org/wiki/CamelCase)_).

```js
var article = document.getElementById("voitureelectrique");

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "voitures"
```

Chaque propriété est une chaîne et peut être en lecture et écriture. Dans le cas ci-dessus passer le paramètre `article.dataset.columns = 5` mettrait l'attribut à `"5"`.

## Accéder via du code CSS

Remarquez que, dans la mesure où les attributs data sont de simples attributs HTML, vous pouvez même y accéder par les [CSS](/fr/docs/Web/CSS). Par exemple, pour afficher les données associées à l'article, vous pouvez utiliser des [contenus générés](/fr/docs/Web/CSS/content) en CSS avec la fonction {{cssxref("attr")}} :

```css
article::before {
  content: attr(data-parent);
}
```

Vous pouvez également utiliser les [sélecteurs d'attributs](/fr/docs/Web/CSS/Sélecteurs_d_attribut) en CSS pour modifier les styles en fonction des données :

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Tout cela est visible dans l'exemple [JSBin](https://jsbin.com/ujiday/2/edit).

Les attributs data peuvent aussi être stockés pour inclure des informations qui changent constamment, telles que les cores dans un jeu. L'utilisation des sélecteurs CSS et de l'accès par le JavaScript permettent ici de créer des effets sympas sans avoir à écrire vos propres routines d'affichage. Regardez cet exemple de [capture vidéo d'écran](https://www.youtube.com/watch?v=On_WyUB1gOk) où sont utilisés les contenus générés et les transitions CSS ([exemple JSBin](https://jsbin.com/atawaz/3/edit)).

Comme les valeurs des données sont des chaînes, toutes les valeurs doivent être entre guillemets " " sinon le formatage de style sera inopérant.

## Problèmes

Ne stockez pas de contenu qui devrait être visible dans les attributs data, car les technologies d'assistance pourraient ne pas y avoir accès. De plus, les moteurs de recherche pourraient ne pas indexer les valeurs des attributs de données.

Les principaux problèmes à prendre en considération sont le support d'Internet Explorer et la performance. Internet Explorer 11+ prend en charge le standard, mais toutes les versions antérieures [ne prennent pas en charge le `dataset`](https://caniuse.com/#feat=dataset). Pour prendre en charge IE 10 et versions inférieures vous avez besoin d'accéder aux attributs data avec {{domxref("Element.getAttribute", "getAttribute()")}}. De plus, la [la performance de lecture des attributs de données](https://jsperf.com/data-dataset), au stockage dans des structures de données JavaScript est assez faible. Utiliser un `dataset` est même plus lent que lire les données avec `getAttribute()`.

Mais ceci dit, pour les métadonnées personnalisées associées aux éléments, c'est une excellente solution.

Avec Firefox 49.0.2 (et peut-être dans les versions antérieures ou ultérieures), les attributs data qui dépassent 1022 attributs ne seront pas lisibles par Javascript (EcmaScript 4).

## Voir aussi

- Cet article est une adaptation de [« Utiliser les attributs de données en JavaScript et CSS »](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/) publié sur hacks.mozilla.org (en anglais).
- Les attributs personnalisés sont également pris en charge en SVG 2 ; consultez {{domxref("SVGElement.dataset")}} et {{SVGAttr("data-*")}} pour davantage d'informations.
- _[How to use HTML5 data attributes](https://www.sitepoint.com/use-html5-data-attributes/)_ (Sitepoint) (en anglais)

---
title: DOMTokenList
slug: Web/API/DOMTokenList
translation_of: Web/API/DOMTokenList
---
{{APIRef("DOM")}}

L'interface **`DOMTokenList`** représente un ensemble de marques («&nbsp;<i lang="en">token</i>&nbsp;») séparées par un espace. On obtient un tel ensemble grâce aux propriétés [`Element.classList`](/fr/docs/Web/API/Element/classList), [`HTMLLinkElement.relList`](/fr/docs/Web/API/HTMLLinkElement/relList), [`HTMLAnchorElement.relList`](/fr/docs/Web/API/HTMLAnchorElement/relList) ou [`HTMLAreaElement.relList`](/fr/docs/Web/API/HTMLAreaElement/relList). Les positions de cette liste sont numérotées à partir de 0. `DOMTokenList` est toujours sensible à la casse.

## Propriétés

- {{domxref("DOMTokenList.length")}} {{ReadOnlyInline}}
  - : Un entier qui représente le nombre d'objets qui sont stockés dans l'objet.
- {{domxref("DOMTokenList.value")}} {{ReadOnlyInline}}
  - : retourne la valeur de la liste comme une {{domxref("DOMString")}}  _(chaîne de caractères)._

## Méthodes

- {{domxref("DOMTokenList.item()")}}
  - : renvoie un élément de la liste à partir de son index (ou {{jsxref("undefined")}} lorsque le nombre passé est supérieur ou égal à la longueur de la liste).
- {{domxref("DOMTokenList.contains()")}}
  - : renvoie `true` _(vrai)_ si la chaîne de caractères contient la marque _(token)_ passée en argument, `false` _(faux)_ sinon.
- {{domxref("DOMTokenList.add()")}}
  - : ajoute une marque à la chaîne sous-jacente.
- {{domxref("DOMTokenList.remove()")}}
  - : retire une marque de la chaîne sous-jacente.
- {{domxref("DOMTokenList.replace()")}}
  - : remplace une marque existant par une nouvelle.
- {{domxref("DOMTokenList.supports()")}}
  - : renvoie `true` _(vrai)_ si une marque passée en argument appartient bien aux marques prises en charge pour l'attribut correspondant.
- {{domxref("DOMTokenList.toggle()")}}
  - : retire une marque de la chaîne de caractères sous-jacente et renvoie `false`. Si la marque n'existe pas, elle est ajoutée et la méthode renvoie `true`.
- {{domxref("DOMTokenList.entries()")}}
  - : renvoie un {{jsxref("Iteration_protocols","itérateur","",1)}} qui permet de parcourir l'ensemble des clés/valeurs contenues dans cet objet.
- {{domxref("DOMTokenList.forEach()")}}
  - : exécute une fonction pour chaque élément de la `DOMTokenList`.
- {{domxref("DOMTokenList.keys()")}}
  - : renvoie un {{jsxref("Iteration_protocols", "itérateur","",1)}} qui permet de parcourir l'ensemble des clés contenues dans cet objet.
- {{domxref("DOMTokenList.values()")}}
  - : renvoie un {{jsxref("Iteration_protocols", "itérateur","",1)}} qui permet de parcourir l'ensemble des valeurs contenues dans cet objet.

## Exemples

Dans l'exemple suivant, nous récupérons la liste d'un ensemble de classes définies sur un élément [`<p>`](/fr/docs/Web/HTML/Element/p) en tant que `DOMTokenList` en utilisant [`Element.classList`](/fr/docs/Web/API/Element/classList), ajoutons une classe en utilisant [`DOMTokenList.add()`](/fr/docs/Web/API/DOMTokenList/add), puis mettons à jour le [`Node.textContent`](/fr/docs/Web/API/Node/textContent) du `<p>` pour qu'il soit égal à la `DOMTokenList`.

D'abord HTML :

```html
<p class="a b c"></p>
```

Puis Javascript :

```js
var para = document.querySelector("p");
var classes = para.classList;
para.classList.add("d");
para.textContent = 'paragraph classList is "' + classes + '"';
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Exemples', '100%', 60) }}

## Découpage des espaces et suppression des doublons

Les méthodes qui modifient la `DOMTokenList` (comme {{domxref("DOMTokenList.add()")}}) suppriment automatiquement les espaces en excès et les valeurs en double de la liste. Par exemple :

```html
<span class="    d   d e f"></span>
```

```js
var span = document.querySelector("span");
var classes = span.classList;
span.classList.add("x");
span.textContent = 'span classList is "' + classes + '"';
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Découpage_des_espaces_et_suppression_des_doublons', '100%', 60) }}

## Spécifications

| Spécification                                                                                | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("DOM WHATWG", "#interface-domtokenlist", "DOMTokenList")}} | {{Spec2("DOM WHATWG")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.DOMTokenList")}}

## Voir aussi

- {{domxref("DOMSettableTokenList")}} : un objet qui étend `DOMTokenList` avec une propriété _.value_ modifiable

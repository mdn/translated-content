---
title: Utilisation de XSLTProcessor pour les transformations XSL
slug: Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations
l10n:
  sourceCommit: 5d88855e1d963ca0b0c3c14aeaa6414f8386c64e
---

Ce document décrit l'utilisation de l'interface JavaScript [`XSLTProcessor`](/fr/docs/Web/API/XSLTProcessor) pour effectuer des transformations XSL.

## Créer une instance `XSLTProcessor`

Pour commencer, on crée un objet [`XSLTProcessor`](/fr/docs/Web/API/XSLTProcessor) à l'aide du constructeur&nbsp;:

```js
const processor = new XSLTProcessor();
```

## Indiquer la feuille de style à utiliser pour la transformation

Avant d'utiliser l'opérateur de transformation, il faut importer la feuille de style à l'aide de la méthode [`XSLTProcessor.importStylesheet()`](/fr/docs/Web/API/XSLTProcessor/importStylesheet). Cette dernière prend un seul paramètre, le nœud DOM de la feuille de style XSLT à importer.

> **Note :** L'import est dynamique. Cela signifie que si la feuille de style est modifiée après l'import, cela aura un impact sur le traitement ultérieur. Plutôt que de modifier le DOM, il est recommandé d'utiliser des paramètres, une solution souvent plus simple et qui donne de meilleures performances.

```js
const testTransform = document.implementation.createDocument("", "test", null);

// Un exemple pour obtenir une transformation dans un script
// XMLDocument.load() est asynchrone et le traitement a lieu
// dans le gestionnaire onload
testTransform.addEventListener("load", onload, false);

// On privilégiera XMLHTTPRequest ou fetch() à load()
testTransform.load("test-transform.xml");

function onload() {
  processor.importStylesheet(testTransform);
}
```

[`XSLTProcessor.importStylesheet()`](/fr/docs/Web/API/XSLTProcessor/importStylesheet) prend un argument en entrée, un nœud DOM. Si ce nœud est un document, on peut passer une transformation XSL complète ou [un élément de résultat littéral](https://www.w3.org/TR/2021/REC-xslt20-20210330/#literal-result-element), sinon, ce doit être un élément `xsl:stylesheet` ou `xsl:transform`.

## Transformer le document

On peut utiliser les méthodes [`XSLTProcessor.transformToDocument()`](/fr/docs/Web/API/XSLTProcessor/transformToDocument) ou [`XSLTProcessor.transformToFragment()`](/fr/docs/Web/API/XSLTProcessor/transformToFragment) afin de transformer un document en utilisant la feuille de style XSLT importée.

### `transformToDocument()`

[`XSLTProcessor.transformToDocument()`](/fr/docs/Web/API/XSLTProcessor/transformToDocument) prend un argument&nbsp;: le nœud source à transformer et renvoie un nouvel objet [`Document`](/fr/docs/Web/API/Document) qui est le résultat de la transformation&nbsp;:

```js
const newDocument = processor.transformToDocument(domToBeTransformed);
```

L'objet résultant dépend de [la méthode de sortie](https://www.w3.org/TR/2021/REC-xslt20-20210330/#element-output) de la feuille de style&nbsp;:

- `"html"`
  - : [`HTMLDocument`](/fr/docs/Web/API/HTMLDocument)
- `"xml"`
  - : [`XMLDocument`](/fr/docs/Web/API/XMLDocument)
- `"text"`
  - : [`XMLDocument`](/fr/docs/Web/API/XMLDocument) avec un seul élément racine, `<transformiix:result>`, dont l'enfant est le texte.

### `transformToFragment()`

Il est aussi possible d'utiliser [`XSLTProcessor.transformToFragment()`](/fr/docs/Web/API/XSLTProcessor/transformToFragment) qui renverra un nœud [`DocumentFragment`](/fr/docs/Web/API/DocumentFragment). Cette méthode est pratique, car ajouter un fragment à un autre nœud permet d'ajouter tous les enfants de ce fragment, qui n'est pas fusionné. Les fragments sont donc utiles lorsqu'on souhaite déplacer des nœuds et les stocker, sans avoir besoin d'un objet représentant un document complet.

[`XSLTProcessor.transformToFragment()`](/fr/docs/Web/API/XSLTProcessor/transformToFragment) prend deux arguments&nbsp;: le document source qu'on souhaite transformer (comme précédemment), et l'objet [`Document`](/fr/docs/Web/API/Document) qui sera le propriétaire du fragment (tout fragment doit être possédé par un document).

```js
const ownerDocument = document.implementation.createDocument("", "test", null);
const newFragment = processor.transformToFragment(
  domToBeTransformed,
  ownerDocument,
);
```

[`XSLTProcessor.transformToFragment()`](/fr/docs/Web/API/XSLTProcessor/transformToFragment) produira uniquement des objets DOM HTML si le document propriétaire est lui-même un objet [`HTMLDocument`](/fr/docs/Web/API/HTMLDocument), ou si la méthode de sortie de la feuille de style est `"html"`. Elle ne produira **pas** d'objets DOM HTML si on a uniquement l'élément de plus haut niveau du résultat qui est [`<html>`](/fr/docs/Web/HTML/Element/html) ([`XSLTProcessor.transformToFragment()`](/fr/docs/Web/API/XSLTProcessor/transformToFragment) étant rarement utilisée pour créer cet élément). Si vous souhaitez surcharger ce comportement, vous pouvez définir la méthode de sortie normalement, de façon standard.

### Transformer du HTML

La transformation de nœuds HTML à l'aide de XSLT n'est pas prise en charge. Certaines choses pourraient fonctionner en utilisant les noms des nœuds en minuscules dans les motifs et les expressions, et en les considérant comme appartenant à l'espace de noms nul. Toutefois, ce contournement n'est pas testé et pourrait ne pas fonctionner dans tous les situations.

En revanche, la transformation de documents XHTML doit fonctionner.

## Définir des paramètres

Vous pouvez contrôler [des paramètres pour la feuille de style](https://www.w3.org/TR/1999/REC-xslt-19991116/#variables) à l'aide des méthodes [`XSLTProcessor.setParameter()`](/fr/docs/Web/API/XSLTProcessor/setParameter), [`XSLTProcessor.getParameter()`](/fr/docs/Web/API/XSLTProcessor/getParameter), et [`XSLTProcessor.removeParameter()`](/fr/docs/Web/API/XSLTProcessor/removeParameter). Toutes ces méthodes prennent un URI d'un espace de noms et un nom local comme deux premiers paramètres. [`XSLTProcessor.setParameter()`](/fr/docs/Web/API/XSLTProcessor/setParameter) en prend un troisième&nbsp;: la valeur du paramètre à définir. Voir [cet article sur la définition des paramètres](/fr/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters) pour un exemple.

## Réinitialisation

L'interface [`XSLTProcessor`](/fr/docs/Web/API/XSLTProcessor) implémente également une méthode [`XSLTProcessor.reset()`](/fr/docs/Web/API/XSLTProcessor/reset), qui peut être utilisée afin de supprimer toutes les feuilles de style et paramètres passés à l'opérateur de traitement afin de le ramener dans son état initial.

## Ressources

Les fichiers suivants reflètent l'interface de l'objet [`XSLTProcessor`](/fr/docs/Web/API/XSLTProcessor)&nbsp;:

- [`XSLTProcessor.webidl`](https://dxr.mozilla.org/mozilla-central/source/dom/webidl/XSLTProcessor.webidl)
- [`txXSLTProcessor.cpp`](https://dxr.mozilla.org/mozilla-central/source/dom/xslt/xslt/txXSLTProcessor.cpp)

## Voir aussi

- [L'interface JavaScript XSLT dans Gecko](/fr/docs/Web/XSLT/XSLT_JS_interface_in_Gecko)
- [`XMLHTTPRequest`](/fr/docs/Web/API/XMLHttpRequest) ou [`fetch()`](/fr/docs/Web/API/fetch) qui doivent désormais être utilisés à la place de `XMLDocument.load()` mentionné ci-avant

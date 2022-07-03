---
title: find.find()
slug: Mozilla/Add-ons/WebExtensions/API/find/find
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - find
translation_of: Mozilla/Add-ons/WebExtensions/API/find/find
---
{{AddonSidebar()}}

Recherche du texte dans un onglet.

Vous pouvez utiliser cette fonction pour rechercher des pages Web HTTP(S) normales. Il recherche un seul onglet : vous pouvez spécifier l'ID d'un onglet particulier à rechercher, ou il recherchera l'onglet actif par défaut. Il recherche toutes les images de l'onglet..

Vous pouvez rendre la recherche sensible à la casse et la faire correspondre uniquement à des mots entiers.

Par défaut, la fonction renvoie juste le nombre de correspondances trouvées. En transmettant les options `includeRangeData` et  `includeRectData`, vous pouvez obtenir plus d'informations sur l'emplacement des correspondances dans l'onglet cible.

Cette fonction stocke les résultats en interne, donc la prochaine fois qu'une extension appelle {{WebExtAPIRef("find.highlightResults()")}}, alors les résultats de cet appel _find_ seront mis en surbrillance, jusqu'à ce que quelqu'un appelle `find()`.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
browser.find.find(
  queryphrase,       // string
  options            // optional object
)
```

### Paramètres

- `queryphrase`
  - : `string`. Le texte à rechercher
- `options`{{optional_inline}}

  - : `object`. Un objet spécifiant des options supplémentaires. Il peut prendre l'une des propriétés suivantes, toutes facultatives :

    - `tabId`
      - : `integer`. ID de l'onglet à rechercher. Par défaut à l'onglet actif
    - `caseSensitive`
      - : `boolean`. Si true, la recherche est sensible à la casse. Par défault à  `false`.
    - `entireWord`
      - : `boolean`. Comparaison seulement entre les mots entiers : ainsi "Tok" ne sera pas comparé dans "Tokyo". Par défaut à `false`.
    - `includeRangeData`
      - : `boolean`. Inclure les groupes de données dans la réponse, which describe where in the page DOM the match was found. Defaults to `false`.
    - `includeRectData`
      - : `boolean`. Inclure les données de rectangle dans la réponse, qui décrit où la correspondance a été trouvée dans la page de rendu. Par défaut à `false`.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet contenant jusqu'à trois propriétés :

- `count`
  - : `integer`. Le nombre de résultat trouvés.
- `rangeData`{{optional_inline}}

  - : `array`. Si `includeRangeData` a été donné dans le paramètre  `options`, cette propriété sera incluse. Il est fourni sous la forme d'un tableau d'objets `RangeData`, un pour chaque correspondance. Chaque objet `RangeData` décrit où la correspondance a été trouvée dans l'arborescence DOM. Cela permettrait, par exemple, une extension pour obtenir le texte entourant chaque correspondance, afin d'afficher le contexte pour les correspondances.

    Les élements correspondent aux éléments données dans `rectData`, donc `rangeData[i]` décrit la même correspondance que  `rectData[i]`.

    Chaque `RangeData` contient les propriétés suivantes :

    - `framePos`
      - : L'index de l'image contenant la correspondance. 0 correspond à une fenêtre parente. Notez que l'ordre des objets dans un tableau  `rangeData` s'alignera séquentiellement avec l'ordre des index d'images : par exemple, `framePos` pour la première séquence d'objets `rangeData` sera 0, `framePos` pour la séquence suivante sera 1, et ainsi de suite.
    - `startTextNodePos`
      - : La position ordinale du noeud de texte dans lequel la correspondance a démarrée.
    - `endTextNodePos`
      - : La position ordinale du noeud de texte dans lequel la correspondance s'est terminée.
    - `startOffset`
      - : La position de la chaîne de caractères ordinale du début du mot correspondant dans le noeud texte de début.
    - `endOffset`
      - : La position de la chaîne de caractères ordinale de la fin du mot trouvé dans le nœud de texte final.

- `rectData`{{optional_inline}}

  - : `array`. Si `includeRectData` a été donné dans les paramètres des `options`, cette propriété sera incluse. C'est un tableau d'objets `RectData` . Il contient des rectangles clients pour tout le texte correspondant à la recherche, par rapport à la partie supérieure gauche de la fenêtre. Les extensions peuvent l'utiliser pour fournir une mise en évidence personnalisée les résultats..

    Chaque objet `RectData` contient des données rectangle pour une seule correspondance. Il a deux propriétés :

    - `rectsAndTexts`

      - : Un objet contenant deux propriétés, les deux tableaux :

        - `rectList`: un tableau d'objets ayant chacun quatre propriétés entières : `top`, `left`, `bottom`, `right`. Ceux-ci décrivent un rectangle par rapport à la partie supérieure gauche de la fenêtre.
        - `textList`:  un tableau de chaînes, correspondant au tableau  `rectList`. L'entrée de `textList[i]` contient la partie du match délimitée par le rectangle de `rectList[i]`.

        Par exemple, considérons une partie d'une page Web qui ressemble à ceci :

        ![](rects-1.png)Si vous recherchez "You may", la comparaison doit être décrit par deux rectangles :

        ![](rects-2.png)Dans le cas, dans le `RectData` qui décrit cette correspondance, `rectsAndTexts.rectList` et `rectsAndTexts.textList` auront chacun 2 éléments.

        - `textList[0]` contiendra "You ", et `rectList[0]` contiendra son rectangle de délimitation.
        - `textList[1]` contiendra "may", et `rectList[1]` contiendra son rectangle de délimitation.

    - `text`
      - : Le texte complet de comparaison, "You may" dans l'exemple ci-dessus.

## Compatibilité du navigateur

{{Compat("webextensions.api.find.find", 10)}}

## Exemples

### Exemples basics

Recherchez "banana" dans l'onglet actif, log le nombre de correspondances et mettez-les en surbrillance :

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```

Rechercher "banana" dans tous les onglets (notez que cela nécessite la  [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "tabs", car il accède à `tab.url`):

```js
async function findInAllTabs(allTabs) {
  for (let tab of allTabs) {
    let results = await browser.find.find("banana", {tabId: tab.id});
    console.log(`In page "${tab.url}": ${results.count} matches.`)
  }
}

browser.tabs.query({}).then(findInAllTabs);
```

### Utilisation de rangeData

Dans cet exemple, l'extension utilise `rangeData` pour obtenir le contexte dans lequel la correspondance a été trouvée. Le contexte est le  `textContent` complet du noeud dans lequel la correspondance a été trouvée. Si la correspondance s'étend sur des noeuds, le contexte est la concaténation du `textContent` de tous les noeuds étendus.

Notez que pour des raisons de simplicité, cet exemple ne gère pas les pages contenant des cadres. Pour cela, vous devez divisez `rangeData` en groupes, un par frame, et executer le script dans chaque image.

Le script d'arrière plan :

```js
// background.js

async function getContexts(matches) {

  // get the active tab ID
  let activeTabArray = await browser.tabs.query({
    active: true, currentWindow: true
  });
  let tabId = activeTabArray[0].id;

  // execute the content script in the active tab
  await browser.tabs.executeScript(tabId, {file: "get-context.js"});
  // ask the content script to get the contexts for us
  let contexts = await browser.tabs.sendMessage(tabId, {
    ranges: matches.rangeData
  });
  for (let context of contexts) {
    console.log(context);
  }

}

browser.browserAction.onClicked.addListener((tab) => {
  browser.find.find("example", {includeRangeData: true}).then(getContexts);
});
```

Le script de contenu :

```js
/**
 * Get all the text nodes into a single array
 */
function getNodes() {
  let walker = document.createTreeWalker(document, window.NodeFilter.SHOW_TEXT, null, false);
  let nodes = [];
  while(node = walker.nextNode()) {
    nodes.push(node);
  }

  return nodes;
}

/**
 * Gets all text nodes in the document, then for each match, return the
 * complete text content of nodes that contained the match.
 * If a match spanned more than one node, concatenate the textContent
 * of each node.
 */
function getContexts(ranges) {

  let contexts = [];
  let nodes = getNodes();

  for (let range of ranges) {
    let context = nodes[range.startTextNodePos].textContent;
    let pos = range.startTextNodePos;
    while (pos < range.endTextNodePos) {
      pos++;
      context += nodes[pos].textContent;
    }
    contexts.push(context);
  }
  return contexts;
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  sendResponse(getContexts(message.ranges));
});
```

### Utiliser rectData

Dans cet exemple, l'extensions utilise `rectData` pour comparer "redact", en ajoutant des DIVs noires au dessus de leurs rectangles de délimitation :

![](redacted.png)Notez qu'il y a plusieurs façons, c'est une mauvaise façon d'atteindre les pages.

Le script d'arrière-plan :

```js
// background.js

async function redact(matches) {

  // get the active tab ID
  let activeTabArray = await browser.tabs.query({
    active: true, currentWindow: true
  });
  let tabId = activeTabArray[0].id;

  // execute the content script in the active tab
  await browser.tabs.executeScript(tabId, {file: "redact.js"});
  // ask the content script to redact matches for us
  await browser.tabs.sendMessage(tabId, {rects: matches.rectData});
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.find.find("banana", {includeRectData: true}).then(redact);
});
```

Le script de contenu :

```js
// redact.js

/**
 * Add a black DIV where the rect is.
 */
function redactRect(rect) {
  var redaction = document.createElement("div");
  redaction.style.backgroundColor = "black";
  redaction.style.position = "absolute";
  redaction.style.top = `${rect.top}px`;
  redaction.style.left = `${rect.left}px`;
  redaction.style.width = `${rect.right-rect.left}px`;
  redaction.style.height = `${rect.bottom-rect.top}px`;
  document.body.appendChild(redaction);
}

/**
 * Go through every rect, redacting them.
 */
function redactAll(rectData) {
  for (match of rectData) {
    for (rect of match.rectsAndTexts.rectList) {
      redactRect(rect);
    }
  }
}

browser.runtime.onMessage.addListener((message) => {
  redactAll(message.rects);
});
```

{{WebExtExamples}}

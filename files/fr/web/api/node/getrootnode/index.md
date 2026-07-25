---
title: "Node : méthode getRootNode()"
short-title: getRootNode()
slug: Web/API/Node/getRootNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

La méthode **`getRootNode()`** de l'interface {{DOMxRef("Node")}} retourne le contexte de la racine de l'objet, qui peut optionnellement inclure la racine d'ombre (<i lang="en">shadow root</i> en anglais) si elle est disponible.

## Syntaxe

```js-nolint
getRootNode()
getRootNode(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet qui définit les options pour obtenir le nœud racine. Les options disponibles sont&nbsp;:
    - `composed`&nbsp;: un booléen qui indique si la racine d'ombre doit être retournée (`false`, par défaut) ou un nœud racine au-delà de la racine d'ombre (`true`).

### Valeur de retour

Un objet héritant de {{DOMxRef("Node")}}. Cela varie en fonction de l'endroit où vous appelez `getRootNode()`&nbsp;; par exemple&nbsp;:

- L'appel sur un élément à l'intérieur d'une page web standard retourne un objet {{DOMxRef("HTMLDocument")}} représentant l'ensemble de la page (ou {{HTMLElement("iframe")}}).
- L'appel sur un élément à l'intérieur d'un DOM d'ombre (<i lang="en">shadow DOM</i> en anglais) retourne le {{DOMxRef("ShadowRoot")}} associé.
- L'appel sur un élément qui n'est pas attaché à un document ou à un arbre d'ombre (<i lang="en">shadow tree</i> en anglais) retourne la racine de l'arbre DOM auquel il appartient.

## Exemples

### Exemple 1

Le premier exemple simple retourne une référence au nœud HTML/document&nbsp;:

```js
const noeudRacine = node.getRootNode();
```

### Exemple 2

Cet exemple plus complexe montre la différence entre retourner une racine normale et une racine qui inclut la racine d'ombre&nbsp;:

```html
<div class="parent">
  <div class="enfant"></div>
</div>
<div class="hoteOmbre">hoteOmbre</div>
<pre id="sortie">Sortie&nbsp;: </pre>
```

```js
const parent = document.querySelector(".parent");
const enfant = document.querySelector(".enfant");
const hoteOmbre = document.querySelector(".hoteOmbre");
const sortie = document.getElementById("sortie");

sortie.innerText += `\nparent's root: ${parent.getRootNode().nodeName}\n`; // #document
sortie.innerText += `enfant's  root: ${enfant.getRootNode().nodeName}\n\n`; // #document

// créer un ShadowRoot
const racineOmbre = hoteOmbre.attachShadow({ mode: "open" });
racineOmbre.innerHTML =
  '<style>div{background:#2bb8aa;}</style><div class="enfantOmbre">enfantOmbre</div>';
const enfantOmbre = racineOmbre.querySelector(".enfantOmbre");

// La valeur par défaut de composed est false
sortie.innerText += `enfantOmbre.getRootNode() === racineOmbre: ${
  enfantOmbre.getRootNode() === racineOmbre
}\n`; // true
sortie.innerText += `enfantOmbre.getRootNode({ composed:false }) === racineOmbre: ${
  enfantOmbre.getRootNode({ composed: false }) === racineOmbre
}\n`; // true
sortie.innerText += `enfantOmbre.getRootNode({ composed:true }).nodeName: ${
  enfantOmbre.getRootNode({ composed: true }).nodeName
}\n`; // #document
```

{{EmbedLiveSample("Exemple 2", "100%", 200)}}

### Exemple 3

Cet exemple retourne la racine de l'arbre non monté.
Notez que `element` ici est la racine de l'arbre (comme il n'a pas de parent), donc par définition sa racine est lui-même&nbsp;:

```js
const element = document.createElement("p");
const enfant = document.createElement("span");

element.append(enfant);

const noeudRacine = enfant.getRootNode(); // <p><span></span></p>

element === noeudRacine; // true
element === element.getRootNode(); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

---
title: "Node : méthode cloneNode()"
short-title: cloneNode()
slug: Web/API/Node/cloneNode
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("DOM")}}

La méthode **`cloneNode()`** de l'interface {{DOMxRef("Node")}} retourne une copie du nœud sur lequel cette méthode a été appelée. Son paramètre contrôle si le sous-arbre contenu dans le nœud est également cloné ou non.

Par défaut, le clonage d'un nœud copie tous ses attributs et leurs valeurs, y compris les écouteurs d'évènements définis par des attributs. En définissant le paramètre `deep`, vous pouvez également copier le sous-arbre contenu dans le nœud. Il ne copie _pas_ d'autres données internes, telles que les écouteurs d'évènements ajoutés à l'aide de [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) ou des propriétés `onevent` (par exemple, `node.onclick = someFunction`), ou l'image peinte pour un élément HTML {{HTMLElement("canvas")}}.

La méthode {{DOMxRef("Document.importNode()")}} crée également une copie d'un nœud. La différence est que `importNode()` clone le nœud dans le contexte du document appelant, tandis que `cloneNode()` utilise le document du nœud cloné. Le contexte du document détermine le {{DOMxRef("CustomElementRegistry")}} pour la construction de tout élément personnalisé. Pour cette raison, pour cloner des nœuds à utiliser dans un autre document, utilisez `importNode()` sur le document cible. Le {{DOMxRef("HTMLTemplateElement.content")}} appartient à un document séparé, il doit donc également être cloné en utilisant `document.importNode()` afin que les descendants des éléments personnalisés soient construits en utilisant les définitions du document actuel.

> [!WARNING]
> `cloneNode()` peut entraîner des ID d'éléments en double dans un document&nbsp;! Si le nœud d'origine a un attribut `id`, et que le clone est placé dans le même document, vous devez modifier l'ID du clone pour qu'il soit unique.
>
> De même, les attributs `name` peuvent devoir être modifiés, en fonction de la manière dont les noms en double sont attendus.

## Syntaxe

```js-nolint
cloneNode()
cloneNode(deep)
```

### Paramètres

- `deep` {{Optional_Inline}}
  - : Si `true`, le nœud et tout son sous-arbre, y compris le texte qui peut se trouver dans des nœuds {{DOMxRef("Text")}} enfants, sont également copiés.

    Si `false` ou omis, seul le nœud est cloné.
    Le sous-arbre, y compris tout texte que le nœud contient, n'est pas cloné.

    Notez que `deep` n'a aucun effet sur les {{Glossary("void element", "éléments vides")}}, tels que les éléments HTML {{HTMLElement("img")}} et {{HTMLElement("input")}}.

## Exemples

### Utiliser `cloneNode()`

```js
const p = document.getElementById("para1");
const p2 = p.cloneNode(true);
```

### Utiliser `cloneNode()` avec des modèles

Évitez d'utiliser `cloneNode()` sur le contenu d'un élément HTML {{HTMLElement("template")}}, car si le modèle contient des éléments personnalisés, ils ne sont pas mis à jour tant qu'ils ne sont pas insérés dans le document.

```js
class MonElement extends HTMLElement {
  constructor() {
    super();
    console.log("MonElement créé");
  }
}
customElements.define("mon-element", MonElement);

const template = document.createElement("template");
template.innerHTML = `<mon-element></mon-element>`;

const clone = template.content.cloneNode(true);
// Pas de journalisation ici ; mon-element n'est pas défini dans le document du modèle
customElements.upgrade(clone);
// Toujours pas de journalisation ; mon-element n'est toujours pas défini dans le document du modèle
document.body.appendChild(clone);
// Journalisation "MonElement créé" ; mon-element est maintenant mis à jour
```

Au lieu de cela, utilisez `document.importNode()` pour cloner le contenu du modèle, afin que tous les éléments personnalisés soient mis à jour en utilisant les définitions du document actuel&nbsp;:

```js
const clone = document.importNode(template.content, true);
// Journalisation "MonElement créé" ; mon-element est mis à jour en utilisant les définitions du document
document.body.appendChild(clone);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

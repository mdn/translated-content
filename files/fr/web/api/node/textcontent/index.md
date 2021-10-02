---
title: element.textContent
slug: Web/API/Node/textContent
tags:
  - API
  - DOM
  - Noeuds
  - Propriétés
translation_of: Web/API/Node/textContent
---
{{APIRef("DOM")}}

La propriété **`Node.textContent`**  représente le contenu textuel d'un nœud et de ses descendants.

## Syntaxe

    var text = element.textContent;
    element.textContent = "ceci est un simple exemple de texte";

## Description

- `textContent` renvoie `null` si l'élément est un [document](/fr/docs/Web/API/document), un type de document (doctype) ou une notation. Pour saisir toutes les données textuelles et CDATA pour l'ensemble du document, on peut utiliser `document.documentElement.textContent` .
- Si le nœud est une section CDATA, un commentaire, une instruction de traitement ou un nœud texte, `textContent` renvoie le texte à l'intérieur du nœud (la valeur [nodeValue](/fr/docs/Web/API/Node/nodeValue)).
- Pour les autres types de nœuds, `textContent` renvoie la concaténation des valeurs de propriété `textContent` de chaque nœud enfant, à l'exception des commentaires et nœuds d'instructions de traitement. Si le nœud n'a pas d'enfants, il s'agira d'une chaîne vide.
- En définissant cette propriété sur un nœud, on enlève tous ses enfants et ceux-ci sont remplacés par un seul nœud texte avec la valeur donnée.

### Différences avec `innerText`

Internet Explorer a introduit une propriété {{domxref("node.innerText")}}. L'intention est similaire mais comporte les différences suivantes :

- `textContent` récupère le contenu de tous les éléments, y compris {{HTMLElement("script")}} et {{HTMLElement("style")}}, ce qui n'est pas le cas de `innerText`.
- `innerText` prend en compte le style de l'élément et ne retournera rien pour les éléments cachés. Aussi, il déclenchera un reflow à l'inverse de `textContent`.
- Comme `innerText` reconnaît le style CSS, il déclenchera une refusion (_reflow_), alors que `textContent` ne le fera pas.
- Contrairement à `textContent`, la modification `innerText` dans Internet Explorer (jusqu'à la version 11 incluse), non seulement supprime les nœuds enfants de l'élément, mais détruit aussi définitivement tout nœud de texte descendant (il est donc impossible d'insérer à nouveau des nœuds dans un autre élément ou dans le même élément) .

### Différences avec `innerHTML`

{{domxref("Element.innerHTML")}} renvoie le HTML comme son nom l'indique. Souvent, pour récupérer ou écrire du texte dans un élément, les utilisateurs utilisent `innerHTML`. Cependant, `textContent` a souvent de meilleures performances car le texte n'est pas analysé en HTML. De plus, l'utilisation de `textContent` peut empêcher les attaques XSS.

## Exemple

    // Étant donné le fragment de HTML suivant :
    //   <div id="divA">Ceci est un <span>exemple de</span> texte</div>

    // On obtient le contenu textuel :
    var text = document.getElementById("divA").textContent;
    // |text| vaut "Ceci est un exemple de texte".

    // On définit le contenu textuel :
    document.getElementById("divA").textContent = "Ceci est un exemple de texte";
    // Le HTML pour divA est à présent <div id="divA">Ceci est un exemple de texte</div>

## Polyfill pour IE8

```js
// Source: Eli Grey @ http://eligrey.com/blog/post/textcontent-in-ie8
if (Object.defineProperty
  && Object.getOwnPropertyDescriptor
  && Object.getOwnPropertyDescriptor(Element.prototype, "textContent")
  && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get) {
  (function() {
    var innerText = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
    Object.defineProperty(Element.prototype, "textContent",
     // Passing innerText or innerText.get directly does not work,
     // wrapper function is required.
     {
       get: function() {
         return innerText.get.call(this);
       },
       set: function(s) {
         return innerText.set.call(this, s);
       }
     }
   );
  })();
}
```

## Compatibilité des navigateurs

{{Compat("api.Node.textContent")}}

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaire               |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------- |
| {{SpecName('DOM WHATWG','#dom-node-textcontent','Node.textContent')}}         | {{Spec2('DOM WHATWG')}} | Pas de changement de DOM4 |
| {{SpecName('DOM4','#dom-node-textcontent','Node.textContent')}}                 | {{Spec2('DOM4')}}         |                           |
| {{SpecName('DOM3 Core','core.html#Node3-textContent','Node.textContent')}} | {{Spec2('DOM3 Core')}}     | Définition initiale.      |

## Voir aussi

- [Plus sur les différences entre `innerText` et `textContent`](http://perfectionkills.com/the-poor-misunderstood-innerText/) (blog post en)

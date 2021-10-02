---
title: Node.isConnected
slug: Web/API/Node/isConnected
tags:
  - API
  - DOM
  - Noeuds
  - Propriétés
translation_of: Web/API/Node/isConnected
---
{{APIRef("DOM")}}

La propriété en lecture seule **`isConnected`** de l'interface {{domxref("Node")}} renvoie un booléen indiquant si le noeud est connecté (directement ou indirectement) à l'objet contexte, par exemple l'objet {{domxref("Document")}} dans le cas d'un DOM normal  ou l'objet {{domxref("ShadowRoot")}} dans le cas du DOM shadow.

## Syntaxe

    var isItConnected = nodeObjectInstance.isConnected

### Renvoie la valeur

Un {{domxref("Boolean")}} (_booléen_) — `true` (_vrai_) si le noeud est connecté à son objet contextuel pertinent et `false` (_faux_) sinon.

## Exemples

Un exemple DOM standard :

```js
let test = document.createElement('p');
console.log(test.isConnected); // renvoie false (faux)
document.body.appendChild(test);
console.log(test.isConnected); // renvoie true (vrai)
```

Un exemple DOM shadow :

```js
// Crée une racine shadow
var shadow = this.attachShadow({mode: 'open'});

// Crée du CSS à appliquer au dom shadow
var style = document.createElement('style');
console.log(style.isConnected); // renvoie false (faux)

style.textContent = '.wrapper {' +
                       'position: relative;' +
                    '}' +

                     '.info {' +
                        'font-size: 0.8rem;' +
                        'width: 200px;' +
                        'display: inline-block;' +
                        'border: 1px solid black;' +
                        'padding: 10px;' +
                        'background: white;' +
                        'border-radius: 10px;' +
                        'opacity: 0;' +
                        'transition: 0.6s all;' +
                        'position: absolute;' +
                        'bottom: 20px;' +
                        'left: 10px;' +
                        'z-index: 3;' +
                      '}' +

// attache l'élément de style créé au dom shadow

shadow.appendChild(style);
console.log(style.isConnected); // renvoie true (vrai)
```



## Spécifications

| Spécification                                                                        | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG','#dom-node-isconnected','isConnected')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Node.isConnected")}}

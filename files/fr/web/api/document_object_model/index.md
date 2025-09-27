---
title: Référence du DOM
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: df2a728b3b3911a396a4b47d363e4a335a5c8065
---

{{DefaultAPISidebar("DOM")}}

Le **\*Document Object Model** (**<abbr>DOM</abbr>**) pour _Modèle Object de Document_ relie les pages web aux scripts ou aux langages de programmation en représentant la structure d'un document — comme le HTML d'une page web — en mémoire. Le terme fait généralement référence à JavaScript, même si la modélisation des documents HTML, SVG ou XML sous forme d'objets ne fait pas partie du cœur du langage JavaScript.

Le DOM représente un document sous forme d'arbre logique. Chaque branche de l'arbre se termine par un nœud, et chaque nœud contient des objets. Les méthodes du DOM permettent d'accéder à l'arbre par programmation. Elles permettent de modifier la structure, le style ou le contenu du document.

Des gestionnaires d'événements peuvent aussi être attachés aux nœuds. Lorsqu'un événement est déclenché, ces gestionnaires sont exécutés.

Pour mieux comprendre le fonctionnement du DOM, [une introduction est disponible](/fr/docs/Web/API/Document_Object_Model/Introduction).

## Interfaces du DOM

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMPoint")}}
- {{DOMxRef("DOMPointReadOnly")}}
- {{DOMxRef("DOMRect")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}

## Interfaces obsolètes du DOM

Le modèle objet de document (DOM) a été fortement simplifié. Pour cela, les interfaces suivantes, présentes dans les spécifications DOM de niveau 3 ou antérieures, ont été supprimées. Elles ne sont plus disponibles pour les développeur·euse·s web.

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## DOM HTML

Un document contenant du HTML est décrit grâce à l'interface {{DOMxRef("Document")}}, qui est étendue par la spécification HTML pour inclure différentes fonctionnalités propres au HTML. En particulier, l'interface {{domxref("Element")}} est enrichie pour devenir {{domxref("HTMLElement")}} et ses différentes sous-classes, chacune représentant un élément (ou une famille d'éléments étroitement liés).

L'API DOM HTML donne accès à diverses fonctionnalités du navigateur comme les onglets, les fenêtres, les styles CSS, les feuilles de style, l'historique de navigation, etc. Ces interfaces sont détaillées dans la documentation de l'[API DOM HTML](/fr/docs/Web/API/HTML_DOM_API).

## DOM SVG

De la même façon, un document contenant du SVG est aussi décrit grâce à l'interface {{DOMxRef("Document")}}, qui est étendue par la spécification SVG pour inclure différentes fonctionnalités propres au SVG. En particulier, l'interface {{domxref("Element")}} est enrichie pour devenir {{domxref("SVGElement")}} et ses différentes sous-classes, chacune représentant un élément ou une famille d'éléments proches. Ces interfaces sont détaillées dans la documentation de l'[API SVG](/fr/docs/Web/API/SVG_API).

## Spécifications

{{Specifications}}

## Voir aussi

- [Exemples appliqués pour le DOM](/fr/docs/Web/API/Document_Object_Model/Examples)
- [Modèle d'objet CSS (CSSOM)](/fr/docs/Web/API/CSS_Object_Model)

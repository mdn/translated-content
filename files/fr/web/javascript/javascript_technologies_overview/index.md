---
title: Survol des technologies JavaScript
slug: Web/JavaScript/JavaScript_technologies_overview
tags:
  - Beginner
  - DOM
  - JavaScript
translation_of: Web/JavaScript/JavaScript_technologies_overview
---
{{JsSidebar("Introductory")}}

## Introduction

[HTML](/fr/docs/Web/HTML) est utilisé pour définir la structure et le contenu d'une page web, [CSS](/fr/docs/Web/CSS) permet de définir la mise en forme, le style graphique avec lequel afficher le contenu. [JavaScript](/fr/docs/Web/JavaScript) permet quant à lui d'ajouter des fonctionnalités d'interaction pour créer des applications web riches en contenu.

Cependant, le terme « JavaScript » au sens large regroupe divers éléments très différents : le langage cœur (ECMAScript) d'une part et les [API Web](/fr/docs/Web/Reference/API) d'autre part et notamment le DOM (Document Object Model, ou Modèle d'Objet du Document).

## JavaScript, le langage (ECMAScript)

Le langage JavaScript (au sens strict) est standardisé par le comité ECMA TC39 sous la forme d'un langage intitulé [ECMAScript](/fr/docs/Web/JavaScript/Language_Resources).

Ce langage est aussi utilisé dans des environnements différents des navigateurs web, comme par exemple dans [node.js](https://nodejs.org/).

### Quelles sont les caractéristiques d'ECMAScript?

Entre autres choses, ECMAScript définit :

- [La syntaxe du langage](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale) (règles d'interprétation (parsing), mots-clés, flux d'instructions, initialisation littérale d'objets...)
- Le mécanisme de traitement d'erreurs ({{jsxref("Instructions/throw","throw")}}, {{jsxref("Instructions/try...catch","try...catch")}} capacité qu'a l'utilisateur de créer des types d'erreurs personnalisés)
- Les types de variables (booléen, nombre, chaîne de caractères, fonction, objet...)
- L'objet global. Dans l'environnement d'un navigateur, cet objet global est l'objet {{domxref("Window","window")}}. ECMAScript ne définit ici que les API accessibles depuis l'objet global (peu importe l'environnement qui peut être différent d'un navigateur) (par exemple {{jsxref("parseInt","parseInt()")}}, {{jsxref("parseFloat","parseFloat()")}}, {{jsxref("decodeURI","decodeURI()")}}, {{jsxref("encodeURI","encodeURI()")}}...)
- [Le mécanisme d'héritage](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) basé sur le concept de prototype
- Les objets et fonctions natifs ({{jsxref("JSON")}}, {{jsxref("Math")}}, méthodes de {{jsxref("Array.prototype")}}, méthodes d'introspection d'`Object`...)
- [Le mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

### Support des navigateurs

En octobre 2016, les versions actuelles des principaux navigateurs web supportent [ECMAScript 5.1](/fr/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) et [ECMAScript 2015 (aussi appelé ES6)](/fr/docs/Web/JavaScript/Nouveaut%C3%A9s_et_historique_de_JavaScript/Support_ECMAScript_6_par_Mozilla) mais certaines anciennes versions n'implémentent que ECMAScript 5.

### Futur

La sixième édition majeure d'ECMAScript a été officiellement approuvée et publiée en tant que standard le 17 juin 2015 par l'assemblée générale ECMA. Depuis cette édition, les éditions ECMAScript sont publiées à un rythme annuel.

### API d'internationalisation

La [spécification ECMAScript pour l'API d'internationalisation](http://ecma-international.org/ecma-402/1.0/) est un ajout à la spécification du langage ECMAScript, également standardisée par ECMA TC39. L'API d'internationalisation ajoute la collation (c'est-à-dire la comparaison entre chaînes de caractères), le formatage de nombres, dates et heures dans les applications JavaScript en prenant en compte la locale de l'utilisateur pour fournir le meilleur format. Le standard initial a été aprouvé en décembre 2012 ; le statut de son implémentation dans les différents navigateurs est disponible sur la page de l'objet {{jsxref("Intl")}}. La spécification d'internationalisation est également ratifiée annuellement et les navigateurs améliorent leur implémentation au fur et à mesure.

## Les API du DOM (_Document Object Model_)

### WebIDL

La [spécification WebIDL](http://www.w3.org/TR/WebIDL/) fournit le lien entre les technologies DOM et ECMAScript.

### Le cœur du DOM

Le Modèle d'Objet du Document (_Document Object Model_ ou DOM en anglais) est une convention multi-plateforme, indépendante du langage utilisée pour représenter et interagir avec les objets dans les documents HTML, XHTML et XML. Les objets de **l'arbre du DOM** peuvent être accédés et manipulés en utilisant des méthodes sur les objets. Les fonctionnalités principales du DOM sont standardisées par le {{Glossary("W3C")}}. Il définit les interfaces offertes par les documents HTML et XML sans cibler un langage de manipulation précis. Parmi les éléments définis par le DOM, on peut trouver:

- La structure du document, un modèle d'arbre et l'architecture d'événements DOM dans le [noyau DOM](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html) : {{domxref("Node")}}, {{domxref("Element")}}, {{domxref("DocumentFragment")}}, {{domxref("Document")}}, {{domxref("DOMImplementation")}}, {{domxref("Event")}}, {{domxref("EventTarget")}}, …
- Une définition moins rigoureuse de l'architecture d'événements DOM, ainsi que des événements spécifiques avec [les événements DOM](http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html).
- D'autres éléments tels que le [DOM Traversal](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) et le [DOM Range](http://html5.org/specs/dom-range.html).

Du point de vue d'ECMAScript, les objets définis dans la spécification DOM sont appelés des « objets hôtes ».

### Le DOM HTML

[HTML](/fr/docs/Web/HTML), le langage de balisage du Web, est spécifié en termes de DOM. Comme une couche au-dessus des concepts abstraits définis dans DOM Core, HTML définit également la _signification_ des éléments. Le DOM HTML inclut des choses telles que la propriété `className` sur des éléments HTML, or des API telles que {{domxref("document.body")}}.

La spécification HTML définit aussi les restrictions sur les documents ; par exemple, elle requiert que tous les enfants d'un élément {{HTMLRef("ul")}} (une liste non-ordonnée) soient des éléments {{HTMLRef("li")}}, puisqu'ils représentent les éléments d'une liste. En général, cela interdit aussi l'utilisation d'éléments et d'attributs qui ne sont pas définis dans un certain standard.

Si vous cherchez la documentation sur l'objet {{domxref("Document")}}, l'objet {{domxref("Window")}} ou sur les autres éléments du DOM, vous pouvez lire [la documentation relative au DOM](/fr/docs/Web/API/Référence_du_DOM_Gecko).

## D'autres API fréquemment utilisées

- Les fonctions {{domxref("WindowTimers.setTimeout", "setTimeout")}} et {{domxref("WindowTimers.setInterval", "setInterval")}} ont d'abord été spécifiées dans l'interface {{domxref("Window")}} du standard HTML.
- [XMLHttpRequest](https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html "http://dev.w3.org/2006/webapi/XMLHttpRequest-2/") : une API qui permet d'envoyer des requêtes HTTP asynchrones (voir aussi : [la page MDN sur XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest))
- [CSS Object Model](http://dev.w3.org/csswg/cssom/) : le CSSOM est utilisé pour abstraire les règles CSS sous forme d'objets. (voir aussi : [la page MDN sur CSSOM](/fr/docs/Web/API/CSS_Object_Model))
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) : une API qui permet d'effectuer des calculs parallèles (voir aussi : [la page MDN sur cette API](/fr/docs/Web/API/Web_Workers_API))
- [WebSockets](https://html.spec.whatwg.org/multipage//#network) : une API qui permet d'effectuer des communications bi-directionnelles de bas-niveau (voir aussi : [la page MDN sur cette API](/fr/docs/WebSockets))
- [`Canvas2DContext`](https://html.spec.whatwg.org/multipage/scripting.html#2dcontext) : Une API de dessin pour l'élément {{htmlelement("canvas")}}.

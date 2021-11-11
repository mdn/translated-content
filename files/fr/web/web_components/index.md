---
title: Web Components
slug: Web/Web_Components
tags:
  - Composants Web
translation_of: Web/Web_Components
---
{{DefaultAPISidebar("Web Components")}}{{ draft }}

Les Composants Web sont constitués de plusieurs technologies distinctes permettant de créer des composants d'interface graphique personnalisés et réutilisables, qui ont été créés en utilisant des technologies web libres. Ils font partie du navigateur, et donc ne nécessitent pas de bibliothèque externe comme jQuery ou Dojo. Un Composant Web existant peut être utilisé sans l'écriture de code, en ajoutant simplement une déclaration d'importation à une page HTML. Les Composants Web utilisent les nouvelles capacités standard de navigateur, ou celles en cours de développement.

## Concepts et utilisation

En tant que développeurs, nous savons tous à quel point la réutilisation de code est une bonne chose. Malgré cela, historiquement, il a toujours été difficile de réutiliser les languages balisés. Prenez par exemple tous ces éléments complexes en HTML que vous avez créés et dû répéter dans vos applications avec le risque que votre code devienne incompréhensible.

Les composants Web ont pour but de résoudre ce problème et consistent en 3 technologies qui peuvent être utilisées ensemble pour créer des éléments réutilisables, encapsulés, versatiles et sans risquer une collision avec d'autre morceaux de code.

- [Custom Elements: ](/fr/docs/Web/Web_Components/Custom_Elements)pour créer et enregistrer de nouveaux éléments HTML et les faire reconnaître par le navigateur.
- [HTML Templates: ](/fr/docs/Web/HTML/Element/template)squelette pour créer des éléments HTML instanciables.
- [Shadow DOM: ](/fr/docs/Web/Web_Components/Shadow_DOM)permet d'encapsuler le JavaScript et le CSS des éléments.

Au début de la spécification, il y avait aussi la technologie [HTML Imports](/fr/docs/Web/Web_Components/HTML_Imports). Celle-ci servait à packager ses composants (CSS, JavaScript, etc.) et permettre leur intégration dans d'autres pages. Elle a néanmoins été abandonnée au profit des imports javascript qui permettent la même chose en utilisant une syntaxe plus moderne.

La description ci-dessus fonctionne assez bien à l'heure actuelle, mais cela laisse de côté plusieurs choses pour lesquelles les Composants Web pourraient être utilisés. Avec un Composant Web, vous pouvez faire presque tout ce qui peut être fait en HTML, CSS et JavaScript, et celui-ci peut devenir un élément réutilisable facilement.

Il y a parfois une certaine confusion concernant les Composants Web et Google Polymer. Polymer est un framework qui repose sur la technologie des Composants Web. Vous pouvez faire et utiliser des Composants Web sans Polymer.

Généralement, l'approche basique pour la création d'un composant Web est la suivante:

1.  Créer une classe dans laquelle est spécifié la fonctionnalité du composant Web en utilisant la syntaxe de classe ECMAScript 2015 (voir les [Classes](/fr/docs/Web/JavaScript/Reference/Classes) pour de plus amples informations).
2.  Enregistrer le nouvel élément personnalisé en utilisant la méthode {{domxref("CustomElementRegistry.define()")}}, avec en paramètre le nom de l'élément à définir, la classe ou la fonction dans laquelle la fonctionnalité est spécifiée, et optionnellement, de quel élément celui-ci hérite-t-il.
3.  Si nécessaire, connecter un shadow DOM à l'élément personnalisé en utilisant la méthode {{domxref("Element.attachShadow()")}}. Ajouter les éléments-fils, les écouteurs d'événements, etc., au shadow DOM en utilisant les méthodes DOM usuelles.
4.  Si nécessaire, définir un template HTML en utilisant {{htmlelement("template")}} et {{htmlelement("slot")}}. Toujours en utilisant les méthodes DOM usuelles pour cloner le template et le connecter au shadow DOM.
5.  Utiliser l'élément personnalisé à l'endroit désiré sur la page, comme tous les autres éléments HTML.

> **Note :** Les Composants Web ne sont pas encore pleinement mis en œuvre dans tous les navigateurs, et pour les utiliser dès maintenant dans la plupart des navigateurs (janvier 2015), vous devrez probablement utiliser des polyfills (ce sont des bibliothèques JavaScript destinées à émuler des fonctionnalités qui ne sont pas encore implémentées nativement dans les navigateurs). Les polyfills sont disponibles dans le [projet Google Polymer](http://www.polymer-project.org/). Pour savoir quels navigateurs implémentent les Composants Web, voir [Are We Componentized Yet?](http://jonrimmer.github.io/are-we-componentized-yet/)

Les spécifications des Composants Web définissent les éléments suivants :

- De nouveaux éléments HTML : {{HTMLElement("template")}}, {{HTMLElement("content")}} et {{HTMLElement("shadow")}} ({{HTMLElement("element")}} et {{HTMLElement("decorator")}} ont été retirés).
- Les interfaces d'API associées pour les nouveaux éléments: {{domxref("HTMLTemplateElement")}}, {{domxref("HTMLContentElement")}} et {{domxref("HTMLShadowElement")}}.
- Des extensions à l'interface {{domxref("HTMLLinkElement")}} et l'élément {{HTMLElement("link")}}.
- Une API pour enregistrer les custom elements, {{domxref("Document.registerElement()")}}, et des modifications de {{domxref("Document.createElement()")}} et {{domxref("Document.createElementNS()")}}.
- De nouvelles fonctions liées au cycle de vie ("_lifecycle callbacks_") peuvent être ajoutées à un prototype sur lequel est basé un custom element.
- Une nouvelle pseudo-classe CSS pour les éléments de style par defaut, {{cssxref(":unresolved")}}.
- Le Shadow DOM : {{domxref("ShadowRoot")}} et {{domxref("Element.createShadowRoot()")}}, {{domxref("Element.getDestinationInsertionPoints()")}}, {{domxref("Element.shadowRoot")}}.
- Une extension à l'interface {{domxref("Event")}}, {{domxref("Event.path")}}.
- Une extension à l'interface {{domxref("Document")}}.
- Pour le style des Composants Web:

  - de nouvelles pseudo-classes : {{cssxref(":host")}}, {{cssxref(":host()")}}, {{cssxref(":host-context()")}}.
  - de nouveaux pseudo-elements : {{cssxref("::shadow")}} et {{cssxref("::content")}}.
  - un nouveau combinateur, `/deep/`.

## Activer les Web Components dans Firefox

Les capacités des Web Components sont désactivées par défaut dans Firefox. Pour les activer, allez sur la page `about:config` et rejetez toutes les alertes qui apparaissent. Cherchez ensuite la préférence nommée **dom.webcomponents.enabled**, et changez la à **true** par un double clic.

![Firefox enable web components](https://mdn.mozillademos.org/files/10145/enable-wc.png)

## Spécifications

| Spécification                                                                                                        | Statut                               | Commentaire         |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Custom Elements', "", "")}}                                                                 | {{Spec2('Custom Elements')}} |                     |
| {{SpecName('HTML WHATWG','/scripting-1.html#the-template-element','template element')}} | {{Spec2('HTML WHATWG')}}     | Pas de changement   |
| {{SpecName('HTML5 W3C','/scripting-1.html#the-template-element','template element')}}     | {{Spec2('HTML5 W3C')}}         | Définition initiale |
| {{SpecName('Shadow DOM', "", "")}}                                                                         | {{Spec2('Shadow DOM')}}     |                     |
| {{SpecName('HTML Imports', "", "")}}                                                                     | {{Spec2('HTML Imports')}}     |                     |
| {{SpecName("CSS Scope", "", "")}}                                                                         | {{Spec2('CSS Scope')}}         |                     |

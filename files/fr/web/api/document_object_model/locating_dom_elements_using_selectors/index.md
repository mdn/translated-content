---
title: Localisation des éléments DOM avec les sélecteurs
slug: Web/API/Document_object_model/Locating_DOM_elements_using_selectors
tags:
  - API
  - DOM
  - Débutant
  - Elements
  - Sélecteurs
translation_of: Web/API/Document_object_model/Locating_DOM_elements_using_selectors
original_slug: >-
  Web/API/Document_Object_Model/Localisation_des_éléments_DOM_avec_les_sélecteurs
---
L'API Selectors fournit des méthodes simples et rapides pour retrouver les noeuds [`Element`](/fr/docs/Web/API/element) du DOM par correspondance avec un jeu de sélecteurs. C'est beaucoup plus rapide que les techniques passées, pour lesquelles il était nécessaire, par exemple, d'utiliser une boucle en code JavaScript pour localiser l'élément spécifique que l'on devait trouver.

## L'interface NodeSelector

Cette spécification ajoute deux nouvelles méthodes à tous les objets mettant en oeuvre les interfaces [`Document`](/fr/docs/Web/API/document), [`DocumentFragment`](/fr/docs/Web/API/DocumentFragment) ou [`Element`](/fr/docs/Web/API/element) :

- `querySelector`
  - : Renvoie le premier noeud [`Element`](/fr/docs/Web/API/element) correspondant dans la sous-arborescence du noeud. Si aucun noeud correspondant n'est trouvé, `null` est renvoyé.
- `querySelectorAll`
  - : Renvoie une [`NodeList`](/fr/docs/Web/API/NodeList) (_liste de noeuds_) contenant tous les noeuds `Element` correspondants dans la sous-arborescence du noeud, ou une `NodeList` vide si aucune correspondance n'a été trouvée.

> **Note :** La [`NodeList`](/fr/docs/Web/API/NodeList) retournée par [`querySelectorAll()`](/fr/docs/Web/API/Element/querySelectorAll) n'est pas directe. À la différence des autres méthodes de requêtes DOM qui retournent une liste de noeuds directe.

Vous pouvez trouver des exemples et des détails en lisant la documentation sur les méthodes [`querySelector()`](/fr/docs/Web/API/Element/querySelector) et [`querySelectorAll()`](/fr/docs/Web/API/Element/querySelectorAll), ainsi que dans l'article [Extraits de code pour querySelector](/fr/docs/Archive/Add-ons/Code_snippets/QuerySelector).

## Sélecteurs

Les méthodes de Selector acceptent un ou plusieurs sélecteurs séparés par des virgules pour déterminer les éléments à renvoyer. Par exemple, pour sélectionner tous les éléments paragraphe (`p`) dans le document dont la classe CSS est soit `warning` soit `note`, vous pouvez utiliser ce qui suit :

    var special = document.querySelectorAll( "p.warning, p.note" );

Vous pouvez aussi interroger par l'ID (_identifiant_). Par exemple :

    var el = document.querySelector( "#main, #basic, #exclamation" );

Après l'exécution du code ci-dessus, `el` contient le premier élément dans le document dont l'ID est `main`, `basic` ou `exclamation`.

Vous pouvez utiliser tous les sélecteurs CSS avec les méthodes `querySelector()` et `querySelectorAll()`.

## Voir aussi

- [API Selectors](http://www.w3.org/TR/selectors-api/) (en)
- [`element.querySelector`](/fr/docs/Web/API/Element/querySelector)
- [`element.querySelectorAll`](/fr/docs/Web/API/Element/querySelectorAll)
- [`document.querySelector`](/fr/docs/Web/API/Document/querySelector)
- [`document.querySelectorAll`](/fr/docs/Web/API/Document/querySelectorAll)
- [Extraits de code pour querySelector](/en-US/docs/Code_snippets/QuerySelector)

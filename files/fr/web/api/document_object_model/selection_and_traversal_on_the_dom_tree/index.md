---
title: Localiser des éléments DOM avec les sélecteurs
slug: Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree
original_slug: Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{DefaultAPISidebar("DOM")}}

L'API des sélecteurs fournit des méthodes qui permettent de retrouver rapidement et facilement des nœuds {{domxref("Element")}} dans le DOM en utilisant un ensemble de [sélecteurs](/fr/docs/Web/CSS/CSS_selectors). Cela est bien plus rapide que les techniques anciennes, où il fallait, par exemple, utiliser une boucle en JavaScript pour localiser les éléments recherchés.

## L'interface NodeSelector

Cette spécification ajoute deux nouvelles méthodes à tout objet implémentant les interfaces {{domxref("Document")}}, {{domxref("DocumentFragment")}} ou {{domxref("Element")}}&nbsp;:

- {{domxref("Element.querySelector", "querySelector()")}}
  - : Retourne le premier nœud {{domxref("Element")}} correspondant dans le sous-arbre du nœud. Si aucun nœud correspondant n'est trouvé, `null` est retourné.
- {{domxref("Element.querySelectorAll", "querySelectorAll()")}}
  - : Retourne une {{domxref("NodeList")}} contenant tous les nœuds `Element` correspondants dans le sous-arbre du nœud, ou une `NodeList` vide si aucun nœud n'est trouvé.

> [!NOTE]
> La {{domxref("NodeList")}} retournée par {{domxref("Element.querySelectorAll()", "querySelectorAll()")}} n'est pas vivante, ce qui signifie que les modifications du DOM ne sont pas reflétées dans la collection. Cela diffère d'autres méthodes de requête DOM qui retournent des listes de nœuds vivantes.

Vous trouverez des exemples et des détails dans la documentation des méthodes {{domxref("Element.querySelector()")}} et {{domxref("Element.querySelectorAll()")}}.

## Sélecteurs

Les méthodes de sélection acceptent des [sélecteurs](/fr/docs/Web/CSS/CSS_selectors) pour déterminer quel ou quels éléments doivent être retournés. Cela inclut les [listes de sélecteurs](/fr/docs/Web/CSS/Selector_list), ce qui permet de regrouper plusieurs sélecteurs dans une seule requête.

Pour protéger la vie privée des utilisateur·ice·s, certaines [pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes) ne sont pas prises en charge ou se comportent différemment. Par exemple, {{cssxref(":visited")}} ne retournera aucun résultat et {{cssxref(":link")}} est traité comme {{cssxref(":any-link")}}.

Seuls les éléments peuvent être sélectionnés, donc les [pseudo-éléments](/fr/docs/Web/CSS/Pseudo-elements) ne sont pas pris en charge.

## Exemples

Pour sélectionner tous les éléments paragraphe (`p`) d'un document dont la classe inclut `warning` ou `note`, vous pouvez faire&nbsp;:

```js
const special = document.querySelectorAll("p.warning, p.note");
```

Vous pouvez aussi interroger par identifiant. Par exemple&nbsp;:

```js
const el = document.querySelector("#main, #basic, #exclamation");
```

Après l'exécution du code ci-dessus, `el` contient le premier élément du document dont l'identifiant est `main`, `basic` ou `exclamation`.

## Voir aussi

- [Spécification des sélecteurs <sup>(angl.)</sup>](https://drafts.csswg.org/selectors/)
- [Sélecteurs CSS](/fr/docs/Web/CSS/CSS_selectors)
- {{domxref("Element.querySelector()")}}
- {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}

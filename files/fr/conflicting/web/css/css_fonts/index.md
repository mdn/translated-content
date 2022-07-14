---
title: HTMLBaseFontElement
slug: conflicting/Web/CSS/CSS_Fonts
tags:
  - API
  - HTML DOM
  - Interface
  - Obsolete
  - Reference
translation_of: Web/API/HTMLBaseFontElement
original_slug: Web/API/HTMLBaseFontElement
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

L'interface **`HTMLBaseFontElement`** fournit des propriétés spéciales (au-delà de l'interface classique {{domxref("HTMLElement")}} dont elle dispose également par héritage) pour manipuler les éléments {{HTMLElement("basefont")}}.

L'élément `<basefont>` est obsolète en HTML4 et supprimé en HTML5. Cette dernière spécification exige que cet élément implémente {{domxref("HTMLUnknownElement")}} plutôt que `HTMLBaseFontElement`.

## Propriétés

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLBaseFontElement.color")}}
  - : Est un {{domxref("DOMString")}} représentant la couleur du texte en utilisant soit une couleur nommée soit une couleur spécifiée au format hexadécimal `#RRGGBB`.
- {{domxref("HTMLBaseFontElement.face")}}
  - : Est un {{domxref("DOMString")}} représentant une liste d'un ou plusieurs noms de polices. Le texte du document dans le style par défaut est rendu dans la première face de police prise en charge par le navigateur du client. Si aucune police répertoriée n'est installée sur le système local, le navigateur utilise généralement par défaut la police proportionnelle ou à largeur fixe pour ce système.
- {{domxref("HTMLBaseFontElement.size")}}
  - : Est un {{domxref("DOMString")}} représentant la taille de la police sous forme de valeur numérique ou relative. Les valeurs numériques vont de `1` à `7`, `1` étant le plus petit et `3` la valeur par défaut. La valeur relative comme par un `'+'` ou un `'-`'.

## Méthodes

_Pas de méthode spécifique; hérite des méthodes de son parent, {{domxref("HTMLElement")}}._

## Spécifications

| Spécification                                                                                            | Statut                       | Commentaire          |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("DOM2 HTML", "html.html#ID-32774408", "HTMLBaseFontElement")}}         | {{Spec2('DOM2 HTML')}} | Pas de changement.   |
| {{SpecName("DOM1", "level-one-html.html#ID-32774408", "HTMLBaseFontElement")}} | {{Spec2('DOM1')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.HTMLBaseFontElement")}}

## Voir aussi

- L'élément HTML {{HTMLElement("basefont")}} implémentait cette interface.

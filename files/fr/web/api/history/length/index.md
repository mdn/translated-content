---
title: History.length
slug: Web/API/History/length
translation_of: Web/API/History/length
---
{{APIRef("History API")}}

La propriété en lecture seule **`History.length`** retourne un entier indiquant le nombre d'élément dans l'historique de session, incluant la page courante. Par exemple, pour une page dans un nouvel onglet, la propriété retournera `1`.

## Syntaxe

    const length = history.length

## Spécification

| Spécification                                                                                                | Statuts                          | Commentaire                                                |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "history.html#dom-history-length", "History.length")}} | {{Spec2('HTML WHATWG')}} | Pas de changement depuis {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "browsers.html#dom-history-length", "History.length")}}     | {{Spec2('HTML5 W3C')}}     | Définition initiale.                                       |

## Compatibilité des navigateurs

{{Compat("api.History.length")}}

## Voir aussi

- L'interface {{domxref("History")}} auquel `length` se rattache.

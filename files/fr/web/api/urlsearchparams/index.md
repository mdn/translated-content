---
title: URLSearchParams
slug: Web/API/URLSearchParams
translation_of: Web/API/URLSearchParams
---
{{ApiRef("URL API")}}

L’interface **`URLSearchParams`** définit des méthodes utilitaires pour travailler avec la _chaîne de requête_ (les paramètres `GET`) d’une URL.

Un objet implémentant `URLSearchParams` peut être directement utilisé dans une structure {{jsxref("Statements/for...of", "for...of")}}, au lieu de {{domxref('URLSearchParams.entries()', 'entries()')}}&nbsp;: `for (var p of mySearchParams)` ou son équivalent `for (var p of mySearchParams.entries())`.

## Constructeur

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : Constructeur renvoyant un objet `URLSearchParams`.

## Propriétés

_Cette interface n’hérite d’aucune propriété._

## Méthodes

_Cette interface n’hérite d’aucune méthode._

- {{domxref("URLSearchParams.append()")}}
  - : Ajoute une paire clé / valeur spécifiée en tant que nouveau paramètre de recherche.
- {{domxref("URLSearchParams.delete()")}}
  - : Supprime le paramètre de recherche donné et sa valeur associée de la liste de tous les paramètres de recherche.
- {{domxref("URLSearchParams.entries()")}}
  - : Retourne un {{jsxref("Iteration_protocols","iterator")}} permettant de parcourir toutes les paires clé / valeur contenues dans cet objet.
- {{domxref("URLSearchParams.get()")}}
  - : Retourne la première valeur associée au paramètre de recherche donné.
- {{domxref("URLSearchParams.getAll()")}}
  - : Retourne toutes les valeurs associées au paramètre de recherche donné.
- {{domxref("URLSearchParams.has()")}}
  - : Retourne un {{jsxref("Boolean")}} indiquant si un tel paramètre de recherche existe.
- {{domxref("URLSearchParams.keys()")}}
  - : Retourne un {{jsxref("Iteration_protocols", "iterator")}} permettant de parcourir toutes les **clés** des paires clé / valeur contenues dans cet objet.
- {{domxref("URLSearchParams.set()")}}
  - : Définit la valeur associée à un paramètre de recherche donné à la valeur donnée. S’il y avait plusieurs valeurs, les autres sont supprimées.
- {{domxref("URLSearchParams.sort()")}}
  - : Trie toutes les paires clé / valeur, s’il y en a, par leurs clés.
- {{domxref("URLSearchParams.toString()")}}
  - : Retourne une chaîne contenant une chaîne de requête pouvant être utilisée dans une URL.
- {{domxref("URLSearchParams.values()")}}
  - : Retourne un {{jsxref("Iteration_protocols", "iterator")}} permettant de parcourir toutes les **valeurs** des paires clé / valeur contenues dans cet objet.

## Exemple

```js
var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

// Itère sur les paramètres de recherche.
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
```

## Spécifications

| Spécification                                                                | Statut               | Commentaire          |
| ---------------------------------------------------------------------------- | -------------------- | -------------------- |
| {{SpecName('URL', '#urlsearchparams', "URLSearchParams")}} | {{Spec2('URL')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.URLSearchParams")}}

## Voir aussi

- Autres interfaces liées aux URL&nbsp;: {{domxref("URL")}}, {{domxref("URLUtils")}}.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)

---
title: URL.search
slug: Web/API/URL/search
---

{{ApiRef("URL API")}}

La propriété **`search`** de l'interface {{domxref("URL")}} est une chaine d'interrogation, aussi appellée une chaine de recherche, c'est un {{domxref("USVString")}} contenant le caractère `'?'` suivi des paramètres de l'URL.

Les navigateurs récents fournissent la propriété {{domxref("URL.searchParams")}} qui permet d'analyser plus facilement les paramètres passés à la chaîne de recherche.

{{AvailableInWorkers}}

## Syntaxe

```js
chaineDeCaractere = objet.search;
object.search = chaineDeCaractere;
```

### Valeur

Un {{domxref("USVString")}}.

## Exemples

```js
var url = new URL(
  "https://developer.mozilla.org/fr/docs/Web/API/URL/search?q=123",
);
var queryString = url.search; // Retourne:"?q=123"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("URL")}} associée.

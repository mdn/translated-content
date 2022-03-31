---
title: 'Location : reload()'
slug: Web/API/Location/reload
translation_of: Web/API/Location/reload
browser-compat: api.Location.reload
---
{{ APIRef("HTML DOM") }}

La méthode **`Location.reload()`** recharge la ressource depuis l'URL actuelle.

Le rechargement peut être bloqué avec une exception [`DOMException`](/fr/docs/Web/API/DOMException) `SECURITY_ERROR`. Cela se produit si [l'origine](/fr/docs/Glossary/Origin) du script qui invoque `location.reload()` est différente de l'origine de la page qui possède l'objet [`Location`](/fr/docs/Web/API/Location). Voir [les règles sur l'origine](/fr/docs/Web/Security/Same-origin_policy) pour plus d'informations.

## Syntaxe

```js
location.reload();
```

## location.reload() n'a pas de paramètre

Firefox prend en charge un paramètre booléen non-standard [`forceGet`](https://searchfox.org/mozilla-central/source/dom/base/Location.cpp#551) pour la méthode `location.reload()`, qui permet à Firefox de passer outre le cache et d'effectuer un rafraîchissement forcé du document. Toutefois, pour tous les autres navigateurs, tout argument utilisé en appelant `location.reload()` sera ignoré et n'aura aucun effet.

Il est toutefois possible que vous rencontriez des occurrences de `location.reload(true)` dans du code existant basé sur l'hypothèse que ce rafraîchissement forcé aurait lieu dans tous les navigateurs. Une recherche GitHub "`location.reload(true)`" renvoie [plusieurs centaines de milliers de résultats](https://github.com/search?q=%22location.reload%28true%29%22&type=code).

Historiquement, une version de Netscape Navigator a introduit la prise en charge de cet argument et cela s'est retrouvé dans Firefox. À un moment, le groupe de travail du W3C sur les API Web [a ouvert le sujet](https://www.w3.org/2005/06/tracker/webapi/issues/69) pour étudier son ajout à la spécification pour `location.reload()`. Toutefois, il n'a jamais été ajouté formellement.

En résumé, ce paramètre booléen ne fait pas partie de la spécification actuelle `location.reload()` et n'en a en fait jamais fait partie.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`Location`](/fr/docs/Web/API/Location) à laquelle appartient cette méthode.
- Des méthodes semblables&nbsp;: [`Location.assign()`](/fr/docs/Web/API/Location/assign) et [`Location.replace()`](/fr/docs/Web/API/Location/replace).

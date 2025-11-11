---
title: Location.assign()
slug: Web/API/Location/assign
---

{{ APIRef("Location") }}

La méthode **`Location.assign()`** charge et affiche dans la fenêtre le document situé à l'URL spécifiée.

Si l'action est impossible à cause d'une violation de sécurité, une {{domxref("DOMException")}} de type `SECURITY_ERROR` est lancée. Cela se produit si l'origine du script appelant est différente de l'origine de la page initialement désignée par l'objet {{domxref("Location")}}, principalement quand le script est hébergé sur un autre domaine.

Si l'URL spécifiée n'est pas valide, une {{domxref("DOMException")}} de type `SYNTAX_ERROR` est lancée.

## Syntaxe

```js
object.assign(url);
```

### Paramètres

- _url_
  - : Une {{domxref("DOMString")}} contenant l'URL de la page vers laquelle naviguer.

## Examples

```js
// Navigue vers l'article Location.reload
document.location.assign(
  "https://developer.mozilla.org/fr/docs/Web/API/Location.reload",
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("Location")}} à laquelle appartient cette méthode.
- Méthodes similaires : {{domxref("Location.replace()")}} et {{domxref("Location.reload()")}}.

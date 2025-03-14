---
title: Location.replace()
slug: Web/API/Location/replace
---

{{APIRef("Location")}}

La méthode **`Location.replace()`** remplace la ressource actuelle par celle présente à l'URL donnée. La différence avec la méthode {{domxref("Location.assign","assign()")}} est que, après avoir utilisé `replace()`, la page actuelle ne sera pas enregistrée dans l'historique de session {{domxref("History")}}, ce qui signifie que l'utilisateur ne sera pas en mesure d'utiliser le bouton _précédent_ pour y revenir.

Si le remplacement est impossible à cause d'une violation de sécurité, une {{domxref("DOMException")}} de type `SECURITY_ERROR` est lancée. Ceci se produit si l'origine du script appelant est différente de l'origine de la page originellement désignée par l'objet {{domxref("Location")}}, principalement quand le script est hébergé sur un autre domaine.

Si l'URL donnée n'est pas valide, une {{domxref("DOMException")}} de type `SYNTAX_ERROR` est lancée.

## Syntaxe

```js
object.replace(url);
```

### Paramètres

- _url_
  - : {{domxref("DOMString")}} contenant l'URL de la page vers laquelle naviguer.

## Exemples

```js
// Navigue vers l'article Location.reload en remplaçant la page actuelle
document.location.replace(
  "https://developer.mozilla.org/fr/docs/Web/API/Location.reload",
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("Location")}} à laquelle appartient cette méthode.
- Méthodes similaires : {{domxref("Location.assign()")}} et {{domxref("Location.reload()")}}.

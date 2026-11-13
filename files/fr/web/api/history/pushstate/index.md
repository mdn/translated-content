---
title: "History : méthode pushState()"
short-title: pushState()
slug: Web/API/History/pushState
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("History API")}}

La méthode **`pushState()`** de l'interface {{DOMxRef("History")}} ajoute une entrée à la pile de l'historique de session du navigateur.

## Syntaxe

```js-nolint
pushState(state, unused)
pushState(state, unused, url)
```

### Paramètres

- `state`
  - : L'objet `state` est un objet JavaScript qui est associé à la nouvelle entrée de l'historique créée par `pushState()`. Chaque fois que l'utilisateur·ice navigue vers le nouveau `state`, un évènement {{DOMxRef("Window/popstate_event", "popstate")}} est déclenché, et la propriété `state` de l'évènement contient une copie de l'objet `state` de l'entrée de l'historique.

    L'objet `state` peut être n'importe quoi qui peut être sérialisé.

    > [!NOTE]
    > Comme certains navigateurs enregistrent les objets `state` sur le disque de l'utilisateur·ice afin qu'ils puissent être restaurés après le redémarrage du navigateur par l'utilisateur·ice, et imposent une limite de taille sur la représentation sérialisée d'un objet `state`, une exception est levée si vous passez un objet `state` dont la représentation sérialisée est plus grande que cette limite de taille. Donc, dans les cas où vous voulez vous assurer d'avoir plus d'espace que ce que certains navigateurs peuvent imposer, il est recommandé d'utiliser {{DOMxRef("Window.sessionStorage", "sessionStorage")}} et/ou {{DOMxRef("Window.localStorage", "localStorage")}}.

- `unused`
  - : Ce paramètre existe pour des raisons historiques et ne peut pas être omis&nbsp;; passer une chaîne de caractères vide est sûr par rapport aux futures modifications de la méthode.

- `url` {{Optional_Inline}}
  - : L'URL de la nouvelle entrée de l'historique. Notez que le navigateur n'essaie pas de charger cette URL après un appel à `pushState()`, mais il peut tenter de charger l'URL plus tard, par exemple après que l'utilisateur·ice ait redémarré le navigateur. La nouvelle URL n'a pas besoin d'être absolue&nbsp;: si elle est relative, elle est résolue par rapport à l'URL actuelle. La nouvelle URL doit être de la même {{Glossary("origin", "origine")}} que l'URL actuelle&nbsp;; sinon, `pushState()` lève une exception. Si ce paramètre n'est pas défini, il est défini sur l'URL actuelle du document.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si le document associé n'est pas entièrement actif, si le paramètre `url` fourni n'est pas une URL valide, ou si la méthode est appelée trop fréquemment.
- `DataCloneError` {{DOMxRef("DOMException")}}
  - : Levée si le paramètre `state` fourni ne peut pas être sérialisé.

## Description

Dans un certain sens, appeler `pushState()` est similaire à définir `window.location = "#toto"`, en ce que les deux créent et activent également une autre entrée de l'historique associée au document actuel.
Mais `pushState()` présente quelques avantages&nbsp;:

- La nouvelle URL peut être n'importe quelle URL dans la même origine que l'URL actuelle. En revanche, définir {{DOMxRef("window.location")}} vous maintient au même document uniquement si vous ne modifiez que le fragment.
- Modifier l'URL de la page est optionnel. En revanche, définir `window.location = "#toto";` ne crée une nouvelle entrée de l'historique que si le fragment actuel n'est pas `#toto`.
- Vous pouvez associer des données arbitraires à votre nouvelle entrée de l'historique. Avec l'approche basée sur le fragment, vous devez encoder toutes les données pertinentes dans une courte chaîne de caractères.

Notez que `pushState()` ne déclenche jamais un évènement {{DOMxRef("Window/hashchange_event", "hashchange")}}, même si la nouvelle URL diffère de l'ancienne URL uniquement par son fragment.

## Exemples

Cela crée une nouvelle entrée de l'historique du navigateur en définissant _l'état_ et _l'url_.

### JavaScript

```js
const etat = { page_id: 1, user_id: 5 };
const url = "bonjour-le-monde.html";

history.pushState(etat, "", url);
```

### Modifier un paramètre de requête

```js
const url = new URL(location);
url.searchParams.set("toto", "truc");
history.pushState({}, "", url);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Travailler avec l'API History](/fr/docs/Web/API/History_API/Working_with_the_History_API)
- [Window&nbsp;: évènement `popstate`](/fr/docs/Web/API/Window/popstate_event)

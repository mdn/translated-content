---
title: "History : méthode replaceState()"
short-title: replaceState()
slug: Web/API/History/replaceState
l10n:
  sourceCommit: 89c21cd5087eedee51ec415a6507e5fbfcf986e7
---

{{APIRef("History API")}}

La méthode **`replaceState()`** de l'interface {{domxref("History")}} modifie l'entrée d'historique actuelle, en la remplaçant par l'objet d'état et l'URL passés en paramètres de la méthode. Cette méthode est particulièrement utile lorsque vous souhaitez mettre à jour l'objet d'état ou l'URL de l'entrée d'historique actuelle en réponse à une action de l'utilisateur·ice.

## Syntaxe

```js-nolint
replaceState(state, unused)
replaceState(state, unused, url)
```

### Paramètres

- `state`
  - : Un objet qui est associé à l'entrée d'historique passée à la méthode `replaceState()`. L'objet d'état peut être `null`.
- `unused`
  - : Le paramètre existe pour des raisons historiques et ne peut pas être omis&nbsp;; passer la chaîne de caractères vide est traditionnel et sûr par rapport aux futures modifications de la méthode.
- `url` {{optional_inline}}
  - : L'URL de l'entrée d'historique. La nouvelle URL doit être de la même origine que l'URL actuelle&nbsp;; sinon, la méthode `replaceState()` lève une exception.

### Valeur de retour

Aucune ({{jsxref("undefined")}}).

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Levée si le document associé n'est pas entièrement actif, si le paramètre `url` fourni n'est pas une URL valide, ou si la méthode est appelée trop fréquemment.
- `DataCloneError` {{domxref("DOMException")}}
  - : Levée si le paramètre `state` fourni ne peut pas être sérialisé.

## Exemples

Supposons que `https://www.mozilla.org/toto.html` exécute le JavaScript suivant&nbsp;:

```js
const objetEtat = { toto: "truc" };
history.pushState(objetEtat, "", "truc.html");
```

Sur la page suivante, vous pouvez ensuite utiliser `history.state` pour accéder à `objetEtat` qui vient d'être ajouté.

L'explication de ces deux lignes ci-dessus peut être trouvée dans l'article [Travailler avec l'API History](/fr/docs/Web/API/History_API/Working_with_the_History_API#utiliser_pushstate). Ensuite, supposons que `https://www.mozilla.org/truc.html` exécute le JavaScript suivant&nbsp;:

```js
history.replaceState(objetEtat, "", "truc2.html");
```

Cela fait que la barre d'URL affiche `https://www.mozilla.org/truc2.html`, mais ne provoque pas le chargement de `truc2.html` par le navigateur, ni même la vérification de l'existence de `truc2.html`.

Supposons maintenant que l'utilisateur·ice navigue vers `https://www.microsoft.com`, puis clique sur le bouton Précédent. À ce stade, la barre d'URL affiche `https://www.mozilla.org/truc2.html`. Si l'utilisateur·ice clique à nouveau sur Précédent, la barre d'URL affiche `https://www.mozilla.org/toto.html`, en contournant complètement truc.html.

## Spécifications

{{Specifications}}

## Browser compatibility

{{Compat}}

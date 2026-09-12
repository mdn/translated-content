---
title: "History : méthode back()"
short-title: back()
slug: Web/API/History/back
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

La méthode **`back()`** de l'interface {{DOMxRef("History")}} fait revenir le navigateur d'une page dans l'historique de session.

Elle a le même effet que d'appeler {{DOMxRef("History.go", "history.go(-1)")}}. S'il n'y a pas de page précédente, cet appel de méthode n'a aucun effet.

Cette méthode est {{Glossary("asynchronous", "asynchrone")}}. Ajoutez un écouteur pour l'évènement {{DOMxRef("Window/popstate_event", "popstate")}} afin de déterminer quand la navigation est terminée.

## Syntaxe

```js-nolint
back()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si le document associé n'est pas entièrement actif. Les navigateurs limitent également la fréquence des navigations et peuvent lever cette erreur, générer un avertissement ou ignorer l'appel si celui-ci est effectué trop fréquemment.

## Exemples

L'exemple court suivant fait en sorte qu'un bouton sur la page navigue d'une entrée en arrière dans l'historique de session.

### HTML

```html
<button id="revenir-en-arriere">Aller en arrière&nbsp;!</button>
```

### JavaScript

```js
document.getElementById("revenir-en-arriere").addEventListener("click", () => {
  history.back();
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("History")}}
- [Travailler avec l'API History](/fr/docs/Web/API/History_API/Working_with_the_History_API)

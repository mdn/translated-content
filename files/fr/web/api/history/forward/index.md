---
title: "History : méthode forward()"
short-title: forward()
slug: Web/API/History/forward
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

La méthode **`forward()`** de l'interface {{DOMxRef("History")}} fait avancer le navigateur d'une page dans l'historique de session. Elle a le même effet que d'appeler {{DOMxRef("History.go", "history.go(1)")}}.

Cette méthode est {{Glossary("asynchronous", "asynchrone")}}. Ajoutez un écouteur pour l'évènement {{DOMxRef("Window/popstate_event", "popstate")}} afin de déterminer quand la navigation est terminée.

## Syntaxe

```js-nolint
forward()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si le document associé n'est pas entièrement actif. Les navigateurs limitent également les navigations et peuvent lever cette erreur, générer un avertissement ou ignorer l'appel s'il est appelé trop fréquemment.

## Exemples

Les exemples suivants créent un bouton qui avance d'une étape dans l'historique de session.

### HTML

```html
<button id="avancer">Aller en avant&nbsp;!</button>
```

### JavaScript

```js
document.getElementById("avancer").addEventListener("click", (e) => {
  history.forward();
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("History")}}
- L'évènement {{DOMxRef("Window/popstate_event", "popstate")}}
- [Travailler avec l'API History](/fr/docs/Web/API/History_API/Working_with_the_History_API)

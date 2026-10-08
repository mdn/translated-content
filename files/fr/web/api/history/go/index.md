---
title: "History : méthode go()"
short-title: go()
slug: Web/API/History/go
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

La méthode **`go()`** de l'interface {{DOMxRef("History")}} charge une page spécifique à partir de l'historique de session. Vous pouvez l'utiliser pour avancer et reculer dans l'historique en fonction de la valeur d'un paramètre.

Cette méthode est {{Glossary("asynchronous", "asynchrone")}}. Ajoutez un écouteur pour l'évènement {{DOMxRef("Window/popstate_event", "popstate")}} afin de déterminer quand la navigation est terminée.

## Syntaxe

```js-nolint
go()
go(delta)
```

### Paramètres

- `delta` {{Optional_Inline}}
  - : La position dans l'historique vers laquelle vous souhaitez vous déplacer, par rapport à la page actuelle.
    Une valeur négative recule, une valeur positive avance. Par exemple, `history.go(2)` avance de deux pages et `history.go(-2)` recule de deux pages. Si aucune valeur n'est passée ou si `delta` est égal à 0, cela a le même résultat que d'appeler `location.reload()`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si le document associé n'est pas entièrement actif. Les navigateurs limitent également les navigations et peuvent lever cette erreur, générer un avertissement ou ignorer l'appel s'il est appelé trop fréquemment.

## Exemples

Pour revenir d'une page (l'équivalent d'appeler {{DOMxRef("History.back", "back()")}})&nbsp;:

```js
history.go(-1);
```

Pour avancer d'une page (l'équivalent d'appeler {{DOMxRef("History.forward", "forward()")}})&nbsp;:

```js
history.go(1);
```

Pour avancer de deux pages&nbsp;:

```js
history.go(2);
```

Pour reculer de deux pages&nbsp;:

```js
history.go(-2);
```

Enfin, l'une des instructions suivantes recharge la page actuelle&nbsp;:

```js
history.go();
history.go(0);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("History")}}
- La méthode {{DOMxRef("History.back", "back()")}}
- La méthode {{DOMxRef("History.forward", "forward()")}}
- L'évènement {{DOMxRef("Window/popstate_event", "popstate")}}
- [Travailler avec l'API History](/fr/docs/Web/API/History_API/Working_with_the_History_API)

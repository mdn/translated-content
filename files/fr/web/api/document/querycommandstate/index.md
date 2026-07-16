---
title: "Document : méthode queryCommandState()"
short-title: queryCommandState()
slug: Web/API/Document/queryCommandState
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> Bien que la méthode {{DOMxRef("Document/execCommand", "execCommand()")}} soit obsolète, il existe encore des cas d'utilisation valides pour lesquels il n'existe pas encore d'alternatives viables, comme mentionné dans l'article `execCommand()`. Dans ces cas, vous pouvez trouver cette méthode utile pour implémenter une expérience utilisateur·ice complète, mais testez pour garantir la compatibilité entre les navigateurs.

La méthode **`queryCommandState()`** de l'interface {{DOMxRef("Document")}} indique si la sélection actuelle a une certaine commande {{DOMxRef("Document.execCommand()")}} appliquée.

## Syntaxe

```js-nolint
queryCommandState(command)
```

### Paramètres

- `command`
  - : Une commande de {{DOMxRef("Document.execCommand()")}}

### Valeur de retour

`queryCommandState()` peut retourner une valeur booléenne ou `null` si l'état est inconnu.

## Exemples

### HTML

```html
<div contenteditable="true">Sélectionnez une partie de ce texte&nbsp;!</div>
<button>Essayez de tester l'état de la commande 'gras'</button>
<hr />
<div id="sortie"></div>
```

```css hidden
hr,
button {
  margin: 1rem 0;
}
```

### JavaScript

```js
function mettreEnGras() {
  const state = document.queryCommandState("bold");
  let message;
  switch (state) {
    case true:
      message = "Le formatage en gras sera supprimé du texte sélectionné.";
      break;
    case false:
      message = "Le texte sélectionné sera affiché en gras.";
      break;
    default:
      message = "L'état de la commande 'gras' est indéterminable.";
      break;
  }
  document.querySelector("#sortie").textContent = `Résultat : ${message}`;
  document.execCommand("bold");
}

document.querySelector("button").addEventListener("click", mettreEnGras);
```

### Résultat

{{EmbedLiveSample("Example", 100, 180)}}

## Spécifications

Cette fonctionnalité ne fait partie d'aucune spécification actuelle. Elle n'est plus destinée à devenir un standard. Il existe un [brouillon non officiel de la spécification W3C execCommand <sup>(angl.)</sup>](https://w3c.github.io/editing/docs/execCommand/).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLElement.contentEditable")}}
- La propriété {{DOMxRef("document.designMode")}}
- La méthode {{DOMxRef("document.execCommand()")}}
- Les bogues du navigateur liés à `queryCommandState()`&nbsp;: [Scribe's "Browser Inconsistencies" documentation <sup>(angl.)</sup>](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate)

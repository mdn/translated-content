---
title: "HTMLTableElement : méthode createCaption()"
short-title: createCaption()
slug: Web/API/HTMLTableElement/createCaption
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La méthode **`createCaption()`** de l'interface {{DOMxRef("HTMLTableElement")}} crée un élément HTML {{HTMLElement("caption")}}, l'insère comme premier enfant du tableau ({{HTMLElement("table")}}) donné, et le retourne. Si le tableau a déjà un enfant `<caption>`, cette méthode retourne le premier enfant de ce type sans en créer un nouveau.

Lorsque la création est nécessaire, cette méthode crée et insère l'élément directement, sans nécessiter d'appels séparés à des méthodes telles que {{DOMxRef("Document.createElement()")}} et {{DOMxRef("Node.insertBefore()")}}.

## Syntaxe

```js-nolint
createCaption()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("HTMLTableCaptionElement")}}.

## Exemples

Cet exemple utilise JavaScript pour ajouter une légende à un tableau qui n'en possède pas initialement.

### HTML

```html
<table>
  <tbody>
    <tr>
      <td>Cellule 1.1</td>
      <td>Cellule 1.2</td>
      <td>Cellule 1.3</td>
    </tr>
    <tr>
      <td>Cellule 2.1</td>
      <td>Cellule 2.2</td>
      <td>Cellule 2.3</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
const table = document.querySelector("table");
const caption = table.createCaption();
caption.textContent = "Cette légende a été créée par JavaScript !";
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTableElement.createTBody()")}}
- La méthode {{DOMxRef("HTMLTableElement.createTFoot()")}}
- La méthode {{DOMxRef("HTMLTableElement.createTHead()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteCaption()")}}

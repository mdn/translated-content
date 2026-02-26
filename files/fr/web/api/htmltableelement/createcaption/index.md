---
title: "HTMLTableElement : méthode createCaption()"
short-title: createCaption()
slug: Web/API/HTMLTableElement/createCaption
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML DOM")}}

La méthode **`createCaption()`** de l'interface {{DOMxRef("HTMLTableElement")}} retourne l'élément HTML {{HTMLElement("caption")}} associé à un {{HTMLElement("table")}} donné. Si aucun élément `<caption>` n'existe sur le tableau, cette méthode le crée, puis le retourne.

> [!NOTE]
> Si aucune légende n'existe, `createCaption()` insère une nouvelle légende directement dans le tableau. Il n'est pas nécessaire d'ajouter la légende séparément comme cela serait le cas si {{DOMxRef("Document.createElement()")}} avait été utilisé pour créer le nouvel élément `<caption>`.

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
let table = document.querySelector("table");
let caption = table.createCaption();
caption.textContent = "Cette légende a été créée par JavaScript !";
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

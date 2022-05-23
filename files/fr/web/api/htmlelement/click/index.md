---
title: HTMLElement.click()
slug: Web/API/HTMLElement/click
translation_of: Web/API/HTMLElement/click
browser-compat: api.HTMLElement.click
---
{{APIRef("HTML DOM")}}

La méthode **`HTMLElement.click()`** simule un clic de souris sur un élément.

Lorsque `click()` est appelée sur les éléments qui la prenne en charge (par exemple un élément [`<input>`](/fr/docs/Web/HTML/Element/Input)), elle déclenche l'évènement `click` de cet élément. L'évènement remonte alors vers les éléments situés plus haut dans l'arbre du document (ou le long de la chaîne d'évènement) et déclenche leurs évènements `click` respectifs.

## Syntaxe

```js
click()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

Dans cet exemple, on simule un clic de souris lorsque le pointeur de la souris survole une case à cocher&nbsp;:

### HTML

```html
<form>
  <input type="checkbox" id="maCaseACocher" onmouseover="maFonction()" onclick="console.log('un évènement click a eu lieu')">
</form>
```

### JavaScript

```js
// Lorsque l'évènement mouseover est déclenché, exécuter maFonction
function maFonction() {
  document.getElementById('maCaseACocher').click();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les gestionnaires d'évènements associés&nbsp;:
  - [`GlobalEventHandlers.onclick`](/fr/docs/Web/API/GlobalEventHandlers/onclick)
  - [`GlobalEventHandlers.ondblclick`](/fr/docs/Web/API/GlobalEventHandlers/ondblclick)
  - [`GlobalEventHandlers.onauxclick`](/fr/docs/Web/API/GlobalEventHandlers/onauxclick)

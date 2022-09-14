---
title: HTMLElement.blur()
slug: Web/API/HTMLElement/blur
translation_of: Web/API/HTMLElement/blur
browser-compat: api.HTMLElement.blur
---
{{APIRef("HTML DOM")}}

La méthode **`HTMLElement.blur()`** retire le focus du clavier de l'élément courant.

## Syntaxe

```js
blur()
```

## Exemples

### Retirer le focus d'un champ texte

#### HTML

```html
<input type="text" id="monTexte" value="Texte d'échantillon">
<br><br>
<button type="button" onclick="focusInput()">Cliquez ici pour obtenir le focus</button>
<button type="button" onclick="blurInput()">Cliquez ici pour perdre le focus</button>
```

#### JavaScript

```js
function focusInput() {
  document.getElementById('monTexte').focus();
}
function blurInput() {
  document.getElementById('monTexte').blur();
}
```

#### Résultat

{{EmbedLiveSample('')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`HTMLElement.focus`](/fr/docs/Web/API/HTMLElement/focus)

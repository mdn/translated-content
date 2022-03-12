---
title: HTMLMediaElement.loop
slug: Web/API/HTMLMediaElement/loop
browser-compat: api.HTMLMediaElement.loop
translation_of: Web/API/HTMLMediaElement/loop
---
{{APIRef("HTML DOM")}}

La propriété **`HTMLMediaElement.loop`** reflète dans le DOM [l'attribut HTML `loop`](/fr/docs/web/html/element/video#attr-loop), qui contrôle si la lecture de l'élément multimédia doit recommencer une fois la fin du média atteinte.

## Syntaxe

```js
let loop = video.loop;
audio.loop = true;
```

### Valeur

Une valeur booléenne.

## Exemple

```js
const obj = document.createElement('video');
obj.loop = true; // vrai
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface qui porte cette propriété, [HTMLMediaElement](/fr/docs/Web/API/HTMLMediaElement).

---
title: HTMLMediaElement.loop
slug: Web/API/HTMLMediaElement/loop
browser-compat: api.HTMLMediaElement.loop
translation_of: 'Web/API/HTMLMediaElement/loop'
---
{{APIRef("HTML DOM")}}

La propriété **`HTMLMediaElement.loop`** reflète l'attribut HTML de la [boucle](/fr/docs/web/html/element/video#attr-loop), qui contrôle si l'élément multimédia doit recommencer lorsqu'il atteint la fin.

## Syntaxe

```js
var loop = video.loop;
audio.loop = true;
```

### Valeur

Une valeur booléenne.

## Exemple

```js
var obj = document.createElement('video');
obj.loop = true; // vrai
```

## Spécifications

{{Specifications}}

## Compatibilité du navigateur

{{Compat}}

## Voir aussi

- L'interface qui le définit, [HTMLMediaElement](fr/docs/web/api/htmlmediaelement).

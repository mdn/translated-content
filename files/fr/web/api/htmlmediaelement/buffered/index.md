---
title: HTMLMediaElement.buffered
slug: Web/API/HTMLMediaElement/buffered
browser-compat: api.HTMLMediaElement.buffered
translation_of: Web/API/HTMLMediaElement/buffered
---
{{APIRef("HTML DOM")}}

La propriété **`buffered`** est une propriété en lecture seule rattachée aux interfaces [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) et qui renvoie un nouvel [objet TimeRanges normalisé](/fr/docs/Web/API/TimeRanges#normalized_timeranges_objects) statique représentant les plages de la ressource média, ou dans le cas échéant, celles que l'agent utilisateur a mises en mémoire tampon au moment où la propriété `buffered` est accessible.

> **Remarque:** Cette fonctionnalité n'est pas disponible au niveau des [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
let timeRange = audioObject.buffered
```

### Valeur

Un nouvel [objet TimeRanges normalisé](/fr/docs/Web/API/TimeRanges#normalized_timeranges_objects) statique qui représente les plages de la ressource média, sinon dans le cas échéant, celles que l'agent utilisateur a mises en mémoire tampon au moment où la propriété `buffered` est accessible.

## Exemple

```js
let obj = document.createElement('video');
console.log(obj.buffered); // TimeRanges { length: 0 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface qui porte cette propriété, [HTMLMediaElement](/fr/docs/Web/API/HTMLMediaElement).

---
title: HTMLElement.title
slug: Web/API/HTMLElement/title
---

{{ APIRef("HTML DOM") }}

La propriété **`HTMLElement.title`** représente le titre de l'élément, le texte habituellement affiché dans une fenêtre contextuelle d''info-bulle' lorsque la souris survole le nœud affiché.

> **Note :** Si un nœud n'a pas d'attribut `title`, alors l'action par défaut est de l'hériter de son nœud parent, qui peut à son tour l'hériter de son nœud parent, etc..
>
> ```html
> <div title="InfoCool">
>   <div title="">le survol de la souris ici fera apparaître "InfoCool"</div>
>   <div title=" ">le survol de la souris ici ne fera rien apparaître</div>
> </div>
> ```

## Syntaxe

```js
var chn = element.title;
element.title = chn;
```

## Exemple

```js
bouton1.title = "cliquer pour rafraîchir";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML global [**title**](/fr/docs/Web/HTML/Attributs_universels/title).

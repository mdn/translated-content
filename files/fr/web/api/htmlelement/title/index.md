---
title: HTMLElement.title
slug: Web/API/HTMLElement/title
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Propriété
  - Reference
translation_of: Web/API/HTMLElement/title
---
{{ APIRef("HTML DOM") }}

La propriété **`HTMLElement.title`** représente le titre de l'élément, le texte habituellement affiché dans une fenêtre contextuelle d''info-bulle' lorsque la souris survole le nœud affiché.

> **Note :** Si un nœud n'a pas d'attribut `title`, alors l'action par défaut est de l'hériter de son nœud parent, qui peut à son tour l'hériter de son nœud parent, etc..
>
>      <div title="InfoCool">
>        <div title="">le survol de la souris ici fera apparaître "InfoCool"</div>
>        <div title=" ">le survol de la souris ici ne fera rien apparaître</div>
>      </div>

## Syntaxe

    var chn = element.title;
    element.title = chn;

## Exemple

```js
 bouton1.title = "cliquer pour rafraîchir";
```

## Spécifications

| Spécification                                                                        | Statut                           | Commentaire                                                          |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dom-title', 'title')}}                 | {{Spec2('HTML WHATWG')}} | Pas de changement par rapport à la {{SpecName('DOM2 HTML')}}. |
| {{SpecName('DOM2 HTML', 'html.html#ID-78276800', 'title')}}     | {{Spec2('DOM2 HTML')}}     | Pas de changement par rapport à la {{SpecName('DOM1')}}.     |
| {{SpecName('DOM1', 'level-one-html.html#ID-78276800', 'title')}} | {{Spec2('DOM1')}}         | Définition initiale.                                                 |

## Compatibilité des navigateurs

{{Compat("api.HTMLElement.title")}}

## Voir aussi

- L'attribut HTML global [**title**](/fr/docs/Web/HTML/Attributs_universels/title).

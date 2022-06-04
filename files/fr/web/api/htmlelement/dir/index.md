---
title: HTMLElement.dir
slug: Web/API/HTMLElement/dir
translation_of: Web/API/HTMLElement/dir
browser-compat: api.HTMLElement.dir
---
{{ApiRef("HTML DOM")}}

La propriété **`HTMLElement.dir`** permet d'obtenir ou de modifier la direction d'écriture du texte du contenu de l'élément courant.

La direction d'écriture du texte d'un élément est celle selon laquelle le texte est écrit, ce qui permet de prendre en charge différents systèmes d'écriture. Les langues arabes et hébraïques sont notamment écrites de droite à gauche.

Lorsque la propriété `dir` d'une image vaut `rtl`, ce qui indique que les attributs HTML `title` et `alt` seront mis en forme avec un mode d'écriture de droite à gauche.

Lorsque la propriété `dir` d'un tableau vaut `rtl`, l'ordre des colonnes est arrangé de droite à gauche.

Lorsqua la propriété `dir` d'un élément vaut `auto`, la direction de l'élément est déterminée selon son premier caractère de direction fort ou, par défaut, la direction d'écriture de son élément parent.

> **Note :** Les navigateurs peuvent permettre aux utilisatrices et utilisateurs de modifier la direction d'écriture des éléments [`<input>`](/fr/docs/Web/HTML/Element/input) et [`<textarea>`](/fr/docs/Web/HTML/Element/textarea) afin de faciliter l'édition du contenu. Chrome et Safari fournissent une option via le menu contextuel des champs de saisie, Internet Explorer et Edge (ancienne version) utilisent la combinaison de touches <kbd>Ctrl</kbd> + <kbd>Maj gauche</kbd> et <kbd>Ctrl</kbd> + <kbd>Maj droit</kbd>. Firefox utilise <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Maj</kbd> + <kbd>X</kbd> mais *ne* met *pas* à jour la valeur de l'attribut **`dir`**.

## Valeur

Cette propriété peut avoir une de ces valeurs&nbsp;:

- `ltr`, pour l'écriture de gauche à droite (<i lang="en">left-to-right</i> en anglais qui donne `ltr`)
- `rtl`, pour l'écriture de droite à gauche (<i lang="en">right-to-left</i> en anglais qui donne `rtl`)
- `auto` pour indiquer la direction de l'élément, telle que déterminée par le moteur selon le contenu de l'élément.

## Exemples

```js
const parg = document.getElementById('para1');
parg.dir = 'rtl';
// on modifie la direction du texte d'un paragraphe
// portant l'identifiant "para1"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`document.dir`](/fr/docs/Web/API/document/dir)
- L'attribut universel HTML [`dir`](/fr/docs/Web/HTML/Global_attributes/dir)
- La propriété CSS [`direction`](/fr/docs/Web/CSS/direction)
- La pseudo-classe CSS [`:dir`](/fr/docs/Web/CSS/:dir)

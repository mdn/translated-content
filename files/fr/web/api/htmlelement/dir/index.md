---
title: element.dir
slug: Web/API/HTMLElement/dir
tags:
  - DOM
  - Référence_du_DOM_Gecko
translation_of: Web/API/HTMLElement/dir
---
{{ ApiRef() }}

## Résumé

L'attribut **`dir`** obtient ou définit la direction d'écriture du texte pour le contenu de l'élément courant.

## Syntaxe et valeurs

```js
var DirectionActuelle = referenceElement.dir;
referenceElement.dir = NouvelleDirection;
```

_DirectionActuelle_ est une variable chaîne de caractères représentant la direction d'écriture du texte pour l'élément courant. _NouvelleDirection_ est une variable chaîne de caractères représentant la nouvelle direction d'écriture du texte souhaitée pour l'élément.

Les valeurs possibles pour **`dir`** sont **`ltr`**, pour de gauche à droite (_left-to-right_), et **`rtl`**, pour de droite à gauche (_right-to-left_).

## Exemple

```js
var para = document.getElementById("para1");
para.dir = "rtl";
// change la direction du texte sur un paragraphe identifié par "para1"
```

## Notes

La direction d'écriture du texte sur un élément est celle dans laquelle le texte est disposé (pour permettre le support de systèmes multilingues). Les langues arabes et l'hébreu sont des exemples typiques de langues qui utiliseront la direction « rtl » (de droite à gauche).

Une image peut avoir sont attribut `dir` positionné à « rtl », auquel cas les attributs `title` et `alt` seront formatés et définis comme allant de droite à gauche.

Lorsqu'un tableau a sa direction définie comme « rtl », l'ordre des colonnes va de droite à gauche.

{{ gecko_callout_heading("7.0") }}

Avant Gecko 7.0 {{ geckoRelease("7.0") }}, il était possible que la valeur renvoyée ne soit pas toujours en minuscule. A partir de Gecko 7.0, la valeur renvoyée est toujours en minuscule, comme défini dans la spécification.

## Spécification

| Spécification                                                                                                                                                                  | Statut                       | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------- |
| {{SpecName('DOM2 HTML', 'html.html#ID-52460740', 'dir')}} — [traduction](http://www.yoyodesign.org/doc/w3c/dom2-html/html.html#ID-52460740) (non normative) | {{Spec2('DOM2 HTML')}} |             |

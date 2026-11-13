---
title: Firefox 24 note de version pour les développeurs
short-title: Firefox 24
slug: Mozilla/Firefox/Releases/24
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 24 a été publié le 17 septembre 2013. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s Web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s Web

### Outils de développement

- L'inspecteur Réseau vous permet désormais de filtrer par type de contenu (CSS/Images/Polices etc.) et de voir la taille et les temps de chargement par pertinence.
- Le panneau d'options des Outils de développement vous permet de désactiver temporairement Javascript.
- Les développeur·euse·s d'extensions peuvent utiliser la nouvelle [Console Web <sup>(angl.)</sup>](https://mihai.sucan.ro/mihai/blog/the-browser-console-is-replacing-the-error-console/) pour les scripts au niveau du Chrome (Remplace la console d'erreur).
- La syntaxe des correspondances source a été modifiée pour utiliser `//#` au lieu de `//@` ([bogue Firefox 870361 <sup>(angl.)</sup>](https://bugzil.la/870361)).

### CSS

- Les deux valeurs `-moz-zoom-in` et `-moz-zoom-out` de la propriété {{CSSxRef("cursor")}} ont perdu leur préfixe pour `zoom-in` et `zoom-out` ([bogue Firefox 772153 <sup>(angl.)</sup>](https://bugzil.la/772153)).
- Pour correspondre à la spécification, les mots-clés `not`, `only`, `and` et `or` ne peuvent plus être utilisés comme un type de média ([bogue Firefox 757554 <sup>(angl.)</sup>](https://bugzil.la/757554)).

### HTML

- L'élément {{HTMLElement("track")}} a été implémenté derrière la préférence `media.webvtt.enabled` ([bogue Firefox 833385 <sup>(angl.)</sup>](https://bugzil.la/833385)).

### JavaScript

- Les [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ne sont plus automatiquement en mode strict sauf si c'est défini avec `"use strict"` ([bogue Firefox 852762 <sup>(angl.)</sup>](https://bugzil.la/852762)).
- La méthode {{JSxRef("String.prototype.repeat")}} a été implémentée ([bogue Firefox 815431 <sup>(angl.)</sup>](https://bugzil.la/815431)).
- Les méthodes {{JSxRef("Set.prototype.values()")}}, {{JSxRef("Set.prototype.keys()")}} et {{JSxRef("Set.prototype.entries()")}} de l'objet {{JSxRef("Set")}} ont été implémentées ([bogue Firefox 869996 <sup>(angl.)</sup>](https://bugzil.la/869996)).

### DOM

- La prise en charge du constructeur {{DOMxRef("Range.Range", "Range()")}} a été ajoutée ([bogue Firefox 868999 <sup>(angl.)</sup>](https://bugzil.la/868999)).
- La prise en charge du constructeur {{DOMxRef("Text.Text", "Text()")}} a été ajoutée ([bogue Firefox 869000 <sup>(angl.)</sup>](https://bugzil.la/869000)).
- La prise en charge du constructeur {{DOMxRef("Comment.Comment", "Comment()")}} a été ajoutée ([bogue Firefox 869006 <sup>(angl.)</sup>](https://bugzil.la/869006)).
- La prise en charge du constructeur {{DOMxRef("DocumentFragment.DocumentFragment", "DocumentFragment()")}} a été ajoutée ([bogue Firefox 869002 <sup>(angl.)</sup>](https://bugzil.la/869002)).
- L'interface {{DOMxRef("FocusEvent")}} a été implémentée ([bogue Firefox 855741 <sup>(angl.)</sup>](https://bugzil.la/855741)).
- La prise en charge de la méthode {{DOMxRef("Element.remove", "ChildNode.remove()")}} a été ajoutée ([bogue Firefox 856629 <sup>(angl.)</sup>](https://bugzil.la/856629)).
- Les interfaces liées à l'élément {{HTMLElement("track")}}, {{DOMxRef("HTMLTrackElement")}}, {{DOMxRef("TextTrack")}}, {{DOMxRef("TextTrackCue")}}, {{DOMxRef("TextTrackList")}} et {{DOMxRef("TextTrackCueList")}} ont été implémentées derrière la préférence `media.webvtt.enabled`, sur `false` par défaut ([bogue Firefox 833385 <sup>(angl.)</sup>](https://bugzil.la/833385)).
- L'interface {{DOMxRef("Gamepad")}} et la méthode {{DOMxRef("Navigator.getGamepads")}} ont été implémentées derrière la préférence `dom.gamepad.enabled`, sur `false` par défaut ([bogue Firefox 690935 <sup>(angl.)</sup>](https://bugzil.la/690935)).
- Sur Firefox Desktop seulement, `HTMLCanvasElement.getContext()` peut désormais prendre la valeur de `webgl`, en plus de `experimental-webgl` ([bogue Firefox 870232 <sup>(angl.)</sup>](https://bugzil.la/870232)).
- La méthode non standard `mozLoadFrom()` de {{DOMxRef("HTMLMediaElement")}} a été retirée ([bogue Firefox 877135 <sup>(angl.)</sup>](https://bugzil.la/877135)).

### MathML

- L'attribut `dir` pour contrôler le sens de lecture des formules, par ex. sur les éléments {{MathMLElement("math")}} ou {{MathMLElement("mrow")}}, est désormais équivalent à l'utilisation de la propriété CSS {{CSSxRef("direction")}}.
- Le signe égal («&nbsp;=&nbsp;») est désormais [extensible](/fr/docs/Web/MathML/Element/mo#stretchy).
- La valeur `"updiagonalarrow"` pour la notation de l'attribut `notation` sur l'élément {{MathMLElement("menclose")}} a été ajouté.

## Changements pour les développeur·euse·s Mozilla et d'extensions

- DocShell a désormais l'attribut `allowMedia` pour désactiver la lecture des médias ([bogue Firefox 759964 <sup>(angl.)</sup>](https://bugzil.la/759964)).
- Les plugins de recherche Sherlock dans le répertoire de l'application ou du profile, ne sont plus chargés ([bogue Firefox 862143 <sup>(angl.)</sup>](https://bugzil.la/862143)).

## Voir aussi

- [Notes de version de Firefox 24 Aurora <sup>(angl.)</sup>](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/24.0a2/auroranotes/)

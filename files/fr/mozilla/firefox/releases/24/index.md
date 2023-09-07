---
title: Firefox 24 pour les développeurs
slug: Mozilla/Firefox/Releases/24
---

{{FirefoxSidebar}}

## Changements pour les développeurs Web

### CSS

- Les deux valeurs `-moz-zoom-in` et `-moz-zoom-out` de la propriété {{cssxref("cursor")}} ont été dépréfixés pour `zoom-in` et `zoom-out` ([bug Firefox 772153](https://bugzil.la/772153)).
- Pour correspondre à la spécification, les mots-clés `not`, `only`, `and` et `or` ne peuvent plus être utilisés comme un type de média ([bug Firefox 757554](https://bugzil.la/757554)).

### HTML

- L'élément {{HTMLElement("track")}} a été implémenté derrière la préférence `media.webvtt.enabled` ([bug Firefox 833385](https://bugzil.la/833385)).

### JavaScript

- Les [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées) ne sont plus automatiquement en mode strict sauf si c'est spécifié avec `"use strict"` ([bug Firefox 852762](https://bugzil.la/852762)).
- La méthode [`String.prototype.repeat`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat) a été implémentée ([bug Firefox 815431](https://bugzil.la/815431)).
- Les méthodes {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}} et {{jsxref("Set.prototype.entries()")}} de l'objet {{jsxref("Set")}} ont été implémentées ([bug Firefox 869996](https://bugzil.la/869996)).

### DOM

- Le support du constructeur {{domxref("Range.Range", "Range()")}} a été ajouté ([bug Firefox 868999](https://bugzil.la/868999)).
- Le support du constructeur {{domxref("Text.Text", "Text()")}} a été ajouté ([bug Firefox 869000](https://bugzil.la/869000)).
- Le support du constructeur {{domxref("Comment.Comment", "Comment()")}} a été ajouté ([bug Firefox 869006](https://bugzil.la/869006)).
- Le support du constructeur {{domxref("DocumentFragment.DocumentFragment", "DocumentFragment()")}} a été ajouté ([bug Firefox 869002](https://bugzil.la/869002)).
- L'interface {{domxref("FocusEvent")}} a été implémentée ([bug Firefox 855741](https://bugzil.la/855741)).
- Le support de la méthode {{domxref("ChildNode.remove()")}} a été ajoutée ([bug Firefox 856629](https://bugzil.la/856629)).
- Les interfaces liées à l'élémént {{HTMLElement("track")}}, {{domxref("HTMLTrackElement")}}, {{domxref("TextTrack")}}, {{domxref("TextTrackCue")}}, {{domxref("TextTrackList")}} et {{domxref("TextTrackCueList")}} ont été implémentées derrière la préférence `media.webvtt.enabled`, sur `false` par défaut ([bug Firefox 833385](https://bugzil.la/833385)).
- L'interface {{domxref("Gamepad")}} et la méthode {{domxref("Navigator.getGamepads")}} ont été implémentées derrière la préférence `dom.gamepad.enabled`, sur `false` par défaut ([bug Firefox 690935](https://bugzil.la/690935)).
- Sur Firefox Desktop seulement, `HTMLCanvasElement.getContext()` peut désormais prendre la valeur de `webgl`, en plus de `experimental-webgl` ([bug Firefox 870232](https://bugzil.la/870232)).
- La méthode non standard `mozLoadFrom()` de {{domxref("HTMLMediaElement")}} a été retirée ([bug Firefox 877135](https://bugzil.la/877135)).

### Outils de développement

- L'inspecteur Réseau vous permet désormais de filtrer par type de contenu (CSS/Images/Polices etc.) et de voir la taille et les temps de chargement par pertinence.
- Le panneau d'options des Outils de développement vous permet de désactiver temporairement Javascript.
- Les développeurs d'extensions peuvent utiliser la nouvelle [Console Web](http://www.robodesign.ro/mihai/blog/the-browser-console-is-replacing-the-error-console) pour les scripts au niveau du Chrome (Remplace la console d'erreur).

### MathML

- L'attribut `dir` pour contrôler le sens de lecture des formules, par ex. sur les éléments {{MathMLElement("math")}} ou {{MathMLElement("mrow")}}, est désormais équivalent à l'utilisation de la propriété CSS {{cssxref("direction")}}.
- Le signe égal ("=") est désormais [extensible](/fr/docs/Web/MathML/Element/mo#attr-stretchy).
- La valeur "`updiagonalarrow`" pour la notation de l'attribut `notation` sur l'élément {{MathMLElement("menclose")}} a été ajouté.

## Changements pour les développeurs Mozilla et développeurs d'add-on

- DocShell a désormais l'attribut `allowMedia` pour désactiver la lecture des médias ([bug Firefox 759964](https://bugzil.la/759964)).
- Les plugins de recherche Sherlock dans le répertoire de l'application ou du profile, ne seront plus chargés ([bug Firefox 862143](https://bugzil.la/862143)).

## Voir aussi

- [Notes de version de Firefox 24](https://www.mozilla.org/en-US/firefox/24.0/releasenotes/)
- [Compatibilité des add-ons avec Firefox 24](https://blog.mozilla.org/addons/2013/09/03/compatibility-for-firefox-24/)

### Anciennes versions

{{Firefox_for_developers('23')}}

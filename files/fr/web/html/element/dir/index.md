---
title: "<dir> : l'élément de répertoire"
slug: Web/HTML/Element/dir
---

{{HTMLSidebar}}

> **Attention :** Cette fonctionnalité est obsolète. Bien qu'encore supportée par des navigateurs, son utilisation est découragée pour tout nouveau projet. Évitez de l'utiliser.

L'élément HTML **`<dir>`** (pour _directory_) est utilisé comme un conteneur pour un répertoire (c'est-à-dire un ensemble de fichiers). Des styles et icônes peuvent être appliqués par l'agent utilisateur. Cet élément obsolète ne doit pas être utilisé, il peut être remplacé par l'élément [`<ul>`](/fr/docs/Web/HTML/Element/ul) qui permet de représenter des listes et, entre autres, des listes de fichiers.

> **Attention :** Cet élément ne doit pas être utilisé. Bien que présent dans les premières spécifications HTML, il a été déprécié dans HTML 4, et rendu obsolète avec HTML5. Il faudra privilégier l'élément [`<ul>`](/fr/docs/Web/HTML/Element/ul). De plus, aucun navigateur majeur ne prend en charge cet élément.

## Interface DOM

Cet élément implémente l'interface [`HTMLDirectoryElement`](/fr/docs/Web/API/HTMLDirectoryElement).

## Attributs

Comme pour tous les autres éléments HTML, on peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes) sur cet élément.

- `compact`

  - : Cet attribut booléen indique que la liste doit être rendue avec un affichage compact. L'interprétation de cet attribut dépend de l'agent utilisateur. Il ne fonctionne pas dans tous les navigateurs.

    > **Attention :** Cet attribut ne doit pas être utilisé, car il a été déprécié. L'élément [`<dir>`](/fr/docs/Web/HTML/Element/dir) doit être mis en forme en utilisant [CSS](/fr/docs/Web/CSS). Pour obtenir un effect visuel similaire à l'attribut `compact`, la propriété CSS [`line-height`](/fr/docs/Web/CSS/line-height) peut être utilisé avec la valeur `80%`.

## Spécifications

Ne fait pas partie des spécifications actuelles.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments HTML utilisés pour les listes : [`<ol>`](/fr/docs/Web/HTML/Element/ol), [`<ul>`](/fr/docs/Web/HTML/Element/ul), [`<li>`](/fr/docs/Web/HTML/Element/li), and [`<menu>`](/fr/docs/Web/HTML/Element/menu);
- Les propriétés CSS qui peuvent être utilisées pour mettre en forme l'élément `<dir>` :

  - La propriété [`list-style`](/fr/docs/Web/CSS/list-style) est utile pour choisir l'apparence des puces.
  - [Les compteurs CSS](/fr/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters) sont utiles pour gérer des listes imbriquées complexes.
  - La propriété [`line-height`](/fr/docs/Web/CSS/line-height) est utile pour reproduire l'attribut déprécié [`compact`](/fr/docs/Web/HTML/Element/dir#attr-compact).
  - La propriété [`margin`](/fr/docs/Web/CSS/margin) est utile pour contrôler l'indentation de la liste.

---
title: <xmp>
slug: Web/HTML/Element/xmp
tags:
  - Element
  - HTML
  - Obsolete
  - Reference
  - Web
translation_of: Web/HTML/Element/xmp
---
{{Obsolete_header}}{{HTMLRef}}

L'élément HTML **`<xmp>`** (pour _example_) affiche le texte entre les balises d'ouverture et de fermeture sans interpréter le HTML qu'il contient et en utilisant une police à chasse fixe. La spécification HTML 2 recommande un affichage suffisamment large pour contenir 80 caractères par ligne.

> **Note :** Ne pas utiliser cet élément.
>
> - Il a été déprécié depuis HTML3.2 et n'a pas été implémenté d'une manière cohérente. Il a été complètement retiré du langage dans HTML5.
> - Utilisez l'élément {{HTMLElement("pre")}} ou, si sémantiquement approprié, l'élément {{HTMLElement("code")}}. Notez qu'il vous faudra échapper les caractères '`<`' et '`>`' pour qu'ils ne soient pas interprétés.
> - Une police à chasse fixe peut être obtenu sur n'importe quel élément en utilisant des règles [CSS](/fr/docs/CSS), par la valeur `monospace` avec la propriété {{cssxref("font-family")}}.

## Attributs

Cet élément n'a aucun autre attribut en dehors [des attributs universels](/fr/docs/Web/HTML/Attributs_universels), communs à tous les éléments.

## Interface DOM

Cet élément implémente l'interface {{domxref('HTMLElement')}}.

> **Note :** Jusqu'à Gecko 1.9.2 inclus, Firefox implémentait l'interface {{domxref('HTMLSpanElement')}} pour cet élément.

## Compatibilité des navigateurs

{{Compat("html.elements.xmp")}}

## Voir aussi

- Les éléments {{HTMLElement("pre")}} et {{HTMLElement("code")}} qui doivent être utilisés à la place.
- Les éléments {{HTMLElement("plaintext")}} et {{HTMLElement("listing")}}, similaires à {{HTMLElement("xmp")}} mais également obsolètes.

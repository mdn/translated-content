---
title: "<xmp> : l'élément de texte préformaté"
slug: Web/HTML/Reference/Elements/xmp
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<xmp>`** affiche le texte entre les balises de début et de fin sans interpréter le HTML contenu et en utilisant une police à chasse fixe. La spécification HTML2 recommandait un affichage suffisamment large pour permettre 80 caractères par ligne.

> [!NOTE]
> Ne pas utiliser cet élément.
>
> - Il est obsolète depuis HTML3.2 et n'a jamais été implémenté de façon cohérente. Il a été complètement supprimé du HTML actuel.
> - Utilisez l'élément {{HTMLElement("pre")}} ou, si cela est sémantiquement approprié, l'élément {{HTMLElement("code")}} à la place. Notez qu'il faudra échapper le caractère `<` en `&lt;` et le caractère `&` en `&amp;` pour éviter qu'ils ne soient interprétés comme du balisage.
> - Une police à chasse fixe peut aussi être obtenue sur n'importe quel élément, en appliquant un style [CSS](/fr/docs/Web/CSS) approprié utilisant `monospace` comme valeur générique pour la propriété CSS {{CSSxRef("font-family")}}.

## Attributs

Cet élément n'a aucun autre attribut en dehors [des attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes), communs à tous les éléments.

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("HTMLElement")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments {{HTMLElement("pre")}} et {{HTMLElement("code")}} qui doivent être utilisés à la place.
- L'élément {{HTMLElement("plaintext")}}, similaire à `<xmp>` mais également obsolète.

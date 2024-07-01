---
title: "<plaintext> : l'élément de texte brut (déprécié)"
slug: Web/HTML/Element/plaintext
---

{{HTMLSidebar}}{{deprecated_header}}

L'élément HTML **`<plaintext>`** permet d'afficher du texte qui n'est pas interprété comme du HTML. Il ne possède pas de balise de fermeture, car tout ce qui suit n'est plus considéré comme du HTML.

> **Note :** Ne pas utiliser cet élément.
>
> - Il est déprécié depuis HTML 2, et n'a jamais été implementé par tous les navigateurs d'une manière cohérente. De plus, il est obsolète depuis HTML5, et pourra être rendu par les agents-utilisateurs qui l'acceptent comme un élément {{HTMLElement("pre")}}, qui interprètera le HTML contenu même si ce n'est pas ce qui est souhaité !
> - Si l'élément {{HTMLElement("plaintext")}} est le premier élément de la page (sauf éléments non affichés), n'utilisez pas de HTML. Configurez votre serveur pour servir la page avec le [type MIME](/fr/docs/Properly_Configuring_Server_MIME_Types) `text/plain`.
> - Utilisez plutôt l'élément {{HTMLElement("pre")}} ou, si c'est sémantiquement approprié, l'élément {{HTMLElement("code")}}. Échappez éventuellement '`<`', '`>`' et `&` pour que le contenu ne soit pas interprété par inadvertance.
> - Une police à chasse fixe peut aussi être obtenue par un simple élément {{HTMLElement("div")}}, et en appliquant la police générique `monospace` comme valeur pour la propriété [CSS](/fr/docs/Web/CSS) {{cssxref("font-family")}}.

## Attributs

Cet élément n'a aucun autre attribut en dehors des [attributs universels](/fr/docs/Web/HTML/Attributs_universels), communs à tous les éléments.

## Interface DOM

Cet élément implémente l'interface {{domxref('HTMLElement')}}.

> **Note :** Jusqu'à Gecko 1.9.2 inclus, Firefox implémente l'interface {{domxref('HTMLSpanElement')}} pour cet élément.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("pre")}} et {{HTMLElement("code")}} qui doivent être utilisés à la place
- {{HTMLElement("listing")}} et {{HTMLElement("xmp")}}, similaires mais également obsolètes

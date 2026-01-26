---
title: "<plaintext> : l'élément de texte brut"
slug: Web/HTML/Reference/Elements/plaintext
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<plaintext>`** permet d'afficher du texte qui n'est pas interprété comme du HTML. Il ne possède pas de balise de fermeture, car tout ce qui suit n'est plus considéré comme du HTML.

> [!NOTE]
> Ne pas utiliser cet élément.
>
> - `<plaintext>` est obsolète depuis HTML 2 et tous les navigateurs ne l'ont pas implémenté. Les navigateurs qui l'ont implémenté ne l'ont pas fait de manière cohérente.
> - `<plaintext>` est obsolète&nbsp;; les navigateurs qui l'acceptent peuvent le traiter comme un élément {{HTMLElement("pre")}} qui interprète toujours le HTML à l'intérieur.
> - Si `<plaintext>` est le premier élément de la page (autre que les éléments non affichés, comme {{HTMLElement("head")}}), n'utilisez pas du tout HTML. Servez plutôt un fichier texte avec le [type MIME](/fr/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types) `text/plain`.
> - Au lieu de `<plaintext>`, utilisez l'élément {{HTMLElement("pre")}} ou, si c'est sémantiquement approprié (par exemple pour du texte en ligne), l'élément {{HTMLElement("code")}}. Échappez les caractères `<`, `>` et `&`, pour éviter que les navigateurs n'interprètent par erreur le contenu de l'élément comme du HTML.
> - Une police à chasse fixe peut être appliquée à n'importe quel élément HTML via un style [CSS](/fr/docs/Web/CSS) {{CSSxRef("font-family")}} avec la valeur générique `monospace`.

## Attributs

Cet élément n'a aucun autre attribut en dehors des [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes), communs à tous les éléments.

## Interface DOM

## Spécifications

{{Specifications}}

Cet élément implémente l'interface {{DOMxRef("HTMLElement")}}.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments {{HTMLElement("pre")}} et {{HTMLElement("code")}} qui doivent être utilisés à la place.
- L'élément {{HTMLElement("xmp")}} similaire à `<plaintext>`, mais également obsolète.

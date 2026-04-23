---
title: "<frameset> : l'élément contenant des frames"
slug: Web/HTML/Reference/Elements/frameset
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<frameset>`** est utilisé pour contenir les éléments {{HTMLElement("frame")}}.

> [!NOTE]
> L'utilisation de cadres étant désormais déconseillée au profit de l'utilisation de {{HTMLElement("iframe")}}, cet élément n'est généralement pas utilisé par les sites web modernes.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `cols` {{Deprecated_Inline}}
  - : Cet attribut définit le nombre et la taille des espaces horizontaux dans un `<frameset>`.
- `rows` {{Deprecated_Inline}}
  - : Cet attribut définit le nombre et la taille des espaces verticaux dans un `<frameset>`.

## Exemple

### Un document frameset

Un document frameset possède un élément `<frameset>` au lieu d'un élément {{HTMLElement("body")}}. Les éléments {{HTMLElement("frame")}} sont placés à l'intérieur du `<frameset>`.

```html
<!doctype html>
<html lang="fr">
  <head>
    <!-- Métadonnées du document -->
  </head>
  <frameset cols="400, 500">
    <frame
      src="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/iframe" />
    <frame
      src="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/frame" />
  </frameset>
</html>
```

Si vous souhaitez intégrer une autre page HTML dans le {{HTMLElement("body")}} d'un document, utilisez un élément {{HTMLElement("iframe")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("frame")}}
- L'élément {{HTMLElement("iframe")}}

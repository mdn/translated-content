---
title: Chargement des polices CSS
short-title: Chargement des polices
slug: Web/CSS/Guides/Font_loading
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le module de **chargement des polices CSS** décrit les évènements et les interfaces utilisés pour le chargement dynamique des ressources de polices.

## Référence

### Interfaces

- L'interface API {{DOMxRef("FontFace")}}
  - Le constructeur {{DOMxRef("FontFace.FontFace", "FontFace()")}}
  - La propriété {{DOMxRef("FontFace.family")}}
  - La propriété {{DOMxRef("FontFace.style")}}
  - La propriété {{DOMxRef("FontFace.weight")}}
  - La propriété {{DOMxRef("FontFace.stretch")}}
  - La propriété {{DOMxRef("FontFace.unicodeRange")}}
  - La propriété {{DOMxRef("FontFace.variant")}}
  - La propriété {{DOMxRef("FontFace.featureSettings")}}
  - La propriété {{DOMxRef("FontFace.variationSettings")}}
  - La propriété {{DOMxRef("FontFace.display")}}
  - La propriété {{DOMxRef("FontFace.ascentOverride")}}
  - La propriété {{DOMxRef("FontFace.descentOverride")}}
  - La propriété {{DOMxRef("FontFace.lineGapOverride")}}
  - La méthode {{DOMxRef("FontFace.load()")}} (retourne une promesse)
- L'interface API {{DOMxRef("FontFaceSet")}}
- L'évènement API {{DOMxRef("FontFaceSetLoadEvent")}}

## Guides

- [L'API de chargement des polices CSS](/fr/docs/Web/API/CSS_Font_Loading_API)
  - : Un aperçu de l'API de chargement des polices CSS, qui fournit des évènements et des interfaces pour le chargement dynamique des ressources de polices.

## Concepts associés

- La règle @ CSS {{CSSxRef("@font-face")}}
- La règle @ CSS {{CSSxRef("@font-feature-values")}}
- L'interface API {{DOMxRef("CSSFontFaceRule")}}
- La propriété {{DOMxRef("Document.fonts", "fonts")}} de `Document` (retourne l'instance de l'objet {{DOMxRef("FontFaceSet")}})
- La propriété {{DOMxRef("WorkerGlobalScope.fonts", "fonts")}} de `WorkerGlobalScope` (retourne l'instance de l'objet {{DOMxRef("FontFaceSet")}})
- L'objet JavaScript {{JSxRef("Promise")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [des polices CSS](/fr/docs/Web/CSS/Guides/Fonts)

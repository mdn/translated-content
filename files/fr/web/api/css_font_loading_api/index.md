---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
translation_of: Web/API/CSS_Font_Loading_API
---
{{DefaultAPISidebar("CSS Font Loading API")}}{{SeeCompatTable}}

L'API CSS Font Loading API fournit des évènements et interfaces pour le chargement dynamique des ressources associées aux polices.

> **Note :** cette fonctionnalité est disponible dans [l'API Web Workers](/fr/docs/Web/API/Web_Workers_API) (`self.fonts` donne accès à {{domxref('FontFaceSet')}}).

## Interfaces

- {{domxref('FontFace')}}
  - : Représente une police unique mise à disposition.
- {{domxref('FontFaceSet')}}
  - : Une interface chargeant les polices et vérifiant le statut de leur téléchargement.
- {{domxref('FontFaceSource')}}
  - : Un {{Glossary("mixin")}} fournissant toutes les polices utilisées dans les opérations liées aux polices, à moins qu'elles ne soient définies autrement. Cela définit la propriété {{domxref("FontFaceSources.fonts")}} disponible pour le {{domxref("Document")}} et le {{domxref("WorkerGlobalScope")}}.
- {{domxref('FontFaceSetLoadEvent')}}
  - : Déclenché lorsqu'un {{domxref("FontFaceSet")}} est chargé.

## Spécifications

{{Specifications("api.FontFace")}}

## Compatibilité navigateur

{{Compat("api.FontFace")}}

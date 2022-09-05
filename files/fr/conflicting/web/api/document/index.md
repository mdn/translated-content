---
title: Document.createEntityReference()
slug: conflicting/Web/API/Document
translation_of: Web/API/Document/createEntityReference
original_slug: Web/API/Document/createEntityReference
---
{{ ApiRef("DOM") }}{{deprecated_header}}

Avant {{ gecko("7.0") }} cette méthode apparaissait présente mais en raison du bogue {{bug("9850")}}, elle renvoyait toujours uniquement "null". La seule solution consiste à créer un noeud de texte, une section CDATA, une valeur de noeud d'attribut, etc., qui ont la valeur référencée par l'entité, en utilisant [Les caractères d'échappement](/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Les_caract%C3%A8res_d%27%C3%A9chappement) ou [fromCharCode()](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/fromCharCode) si nécessaire.

## Spécifications

[createEntityReference](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-392B75AE)

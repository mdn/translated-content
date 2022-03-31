---
title: XMLDocument.load()
slug: Web/API/XMLDocument/load
tags:
  - API
  - DOM
  - Deprecated
  - Experimental
  - Expérimental(2)
  - Method
  - Reference
  - Référence(2)
translation_of: Web/API/XMLDocument/load
---
{{APIRef("DOM")}}

`document.load()` fait partie d'une ancienne version du module W3C [DOM Level 3 Load & Save](http://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS). Elle peut être utilisée avec document.async pour indiquer si la requête est synchrone ou asynchrone (par défaut). À partir d'au moins Gecko 1.9, elle ne prend plus en charge le chargement inter-site de documents (utilisez [XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest) à la place).

## Exemples

    var docXml = document.implementation.createDocument("", "test", null);

    function documentCharge (e) {
      alert(new XMLSerializer().serializeToString(e.target)); // Donne le contenu de querydata.xml comme une chaîne
    }

    xmlDoc.addEventListener("load", documentCharge, false);
    xmlDoc.load('querydata.xml');

{{Source("content/xml/tests/load/", "Voir aussi l'extrait de chargement")}} dans le dossier de tests XML. (Pour tester cette fonctionnalité, créez les fichiers sur votre disque local ou sur un serveur web, plutôt que de charger le fichier load.html depuis la page générée par LXR, qui servira le fichier text.xml comme HTML.)

## Spécification

- [Old W3C Working Draft of the DOM Level 3 Load & Save module](http://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS)

## Compatibilité des navigateurs

{{Compat("api.XMLDocument.load")}}

## Voir aussi

- [document.async](/fr/docs/Web/API/Document/async)
- [XML dans Mozilla](/fr/docs/XML_dans_Mozilla)

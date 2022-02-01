---
title: Document.createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
tags:
  - API
  - Création
  - DOM
  - Méthodes
  - Noeuds
  - Reference
  - Traitement
  - instructions
translation_of: Web/API/Document/createProcessingInstruction
---
{{APIRef("DOM")}}

`createProcessingInstruction()` crée un nouveau noeud d'instruction de traitement et le renvoie.

## Syntaxe

    Processing instruction node = document.createProcessingInstruction(target, data)

### Paramètres

- `Processing Instruction node` est un noeud {{domxref("ProcessingInstruction")}}.
- `target` fait référence à la partie cible du noeud d'instructions de traitement (par exemple, \<?_target_ ... ?>).
- `data` est une string (_chaîne de caractères_) contenant les données à ajouter aux données du noeud.

### Exceptions

- `NOT_SUPPORTED_ERR`
  - : Lancée si vous tentez de créer un noeud d'instructions de traitement sur un document HTML dans Gecko 9 {{ geckoRelease("9.0") }} ou antérieurs. Dans Gecko 10.0 {{ geckoRelease("10.0") }} et ultérieurs, vous pouvez utiliser cette méthode sur des documents HTML.
- `DOM_INVALID_CHARACTER`
  - : Lancée si vous essayez d'ajouter une cible d'instruction de traitement invalide (ce devrait être le cas avec le nom XML et toutes les combinaisons des lettres "xml"), ou si la séquence d'instructions de traitement de fermeture ("?>") est ajoutée aux données. Les données fournies par l'utilisateur ne peuvent donc pas être utilisées en toute sécurité sans échappement ou autres moyens de faire face à de telles situations.

## Exemple

    var docu = new DOMParser().parseFromString('<xml></xml>',  "application/xml")

    var pi = docu.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');

    docu.insertBefore(pi, docu.firstChild);

    alert(new XMLSerializer().serializeToString(docu));
    // Affiche: <?xml-stylesheet href="mycss.css" type="text/css"?><xml/>

## Spécifications

[DOM 4: createProcessingInstruction](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-document-createprocessinginstruction)

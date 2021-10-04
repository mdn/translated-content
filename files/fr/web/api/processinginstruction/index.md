---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
tags:
  - API
  - DOM
  - Interface
  - Noeuds
  - Traitement
  - XML
  - instructions
translation_of: Web/API/ProcessingInstruction
---
{{APIRef("DOM")}}

Une **instruction de traitement** intègre des instructions spécifiques à une application en [XML](/en-US/docs/Glossary/XML) qui peuvent être ignorées par d'autres applications (ne les reconnaissant pas). Même si un processeur XML ignore les instructions de traitement, il leur donnera une place dans le DOM.

Une instruction de traitement est différente de la [déclaration XML](/en/XML/XML_Declaration), qui fournit des informations sur le document telles que le codage des caractères et ne peut apparaître que comme le premier élément d'un document.

Les instructions de traitement définies par l'utilisateur ne peuvent pas commencer par '`xml`', car ceux-ci sont réservés (par exemple [`<?xml-stylesheet ?>`](/en/XML/xml-stylesheet)).

Les instructions de traitement héritent des méthodes et propriétés de [`Node`](/fr/docs/Web/API/Node).

{{InheritanceDiagram(700,70)}}

### Attributs

- target (_cible_) (DOMString) (_chaîne de caractères_) - après le `<?` et avant un [whitespace](/fr/docs/Gestion_des_espaces_dans_le_DOM) (_espace_) le séparant des `data` (_données_)
- data (_données_) (DOMString) (_chaîne de caractères_) - premier caractère non espace après `target` et avant `?>`

### Spécification

- [DOM Level 1 Core : ProcessingInstruction interface](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-1004215813)

### Voir aussi

- [document.createProcessingInstruction](/fr/docs/Web/API/Document/createProcessingInstruction)

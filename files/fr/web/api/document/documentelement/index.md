---
title: document.documentElement
slug: Web/API/Document/documentElement
tags:
  - API
  - DOM
  - Noeud
  - Propriétés
  - Racine
  - Reference
translation_of: Web/API/Document/documentElement
---
{{ ApiRef("DOM") }}

**`Document.documentElement`**renvoie l'[`Element`](/fr/docs/Web/API/element) qui est l'élément racine du [document](/fr/docs/Web/API/document) (par exemple, l'élément `<html>` pour les documents HTML).

### Syntaxe

    var element = document.documentElement;

## Exemple

    var racine = document.documentElement;
    var premierNiveau = racine.childNodes;
    // premierNiveau est une NodeList des enfants directs de l'élément racine
    for (var i = 0; i < premierNiveau.length; i++) {
       // fait quelque chose avec chaque enfant direct de l'élément racine
       // en tant que premierNiveau[i]
    }

## Notes

Pour tout document HTML non vide, `document.documentElement` sera toujours un élément {{HTMLElement ("html")}}. Pour tout document XML non vide, `document.documentElement` sera toujours l'élément racine du document.

## Spécifications

| Spécification                                                                                                    | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('DOM2 Core','core.html#ID-87CD092','Document.documentElement')}}             | {{Spec2('DOM2 Core')}}     |             |
| {{SpecName('DOM3 Core','core.html#ID-87CD092','Document.documentElement')}}             | {{Spec2('DOM3 Core')}}     |             |
| {{SpecName('DOM4','#dom-document-documentelement','Document.documentElement')}}         | {{Spec2('DOM4')}}         |             |
| {{SpecName('DOM WHATWG','#dom-document-documentelement','Document.documentElement')}} | {{Spec2('DOM WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Document.documentElement")}}

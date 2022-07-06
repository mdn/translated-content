---
title: HTMLBaseElement
slug: Web/API/HTMLBaseElement
translation_of: Web/API/HTMLBaseElement
---
{{APIRef("HTML DOM")}}L'interface **`HTMLBaseElement`** contient l'URI de base pour un document. Cet objet hérite de toutes les propriétés et des méthodes telles quelles sont décrites dans l'interface {{domxref("HTMLElement")}}.

## Propriétés

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLBaseElement.href")}}
  - : est un {{domxref("DOMString")}} qui reflète l'attribut HTML {{htmlattrxref("href", "base")}}, contenant l'URL de base pour les URLs relatives dans le document.
- {{domxref("HTMLBaseElement.target")}}
  - : est un {{domxref("DOMString")}} qui reflète l'attribut HTML {{htmlattrxref("target", "base")}}, contenant un contexte de navigation cible par défaut ou une frame pour les éléments qui n'ont pas de cibe spécifiée.

## Methodes

_Pas de méthodes spécifiques; Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

## Spécifications

| Spécification                                                                                                        | Statut                           | Commentaire                                                                    |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "semantics.html#the-base-element", "HTMLBaseElement")}}         | {{Spec2('HTML WHATWG')}} | Aucun changement depuis le dernier snapshot, {{SpecName("HTML5.1")}}. |
| {{SpecName('HTML5.1', "document-metadata.html#the-base-element", "HTMLBaseElement")}}     | {{Spec2('HTML5.1')}}     | Aucun changement depuis {{SpecName("HTML5 W3C")}}                       |
| {{SpecName('HTML5 W3C', "document-metadata.html#the-base-element", "HTMLBaseElement")}} | {{Spec2('HTML5 W3C')}}     | Aucun changement depuis {{SpecName("DOM2 HTML")}}.                      |
| {{SpecName('DOM2 HTML', 'html.html#ID-73629039', 'HTMLBaseElement')}}                         | {{Spec2('DOM2 HTML')}}     | Aucun changement depuis {{SpecName("DOM1")}}.                          |
| {{SpecName('DOM1', 'level-one-html.html#ID-73629039', 'HTMLBaseElement')}}                 | {{Spec2('DOM1')}}         | Première définition.                                                           |

## Compatibilités navigateur

{{Compat("api.HTMLBaseElement")}}

## Voir aussi

- L'élément HTML implémentant l'interface {{ HTMLElement("base") }}

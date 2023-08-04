---
title: compositionupdate
slug: Web/API/Element/compositionupdate_event
---

L'événement **compositionupdate** est déclenché lorsqu'un caractère est ajouté à un passage de texte en train d'être composé (`démarre avec des caractères spéciaux qui nécessitent une sequence de touches et d'autres entrées telles que la reconnaissance vocale ou la suggestion de mots du mobile).`

## Informations générales

- Interface
  - : {{domxref("TouchEvent")}}
- Propagation
  - : Oui
- Annulable
  - : Non
- Cible
  - : {{domxref("Element")}}

## Propriétés

| Property                        | Type                                               | Description                                                                                      |
| ------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `target` {{ReadOnlyInline}}     | {{domxref("EventTarget")}}                         | Elément ayant le focus qui traite la composition. Nul si non-accessible.                         |
| `type` {{ReadOnlyInline}}       | {{domxref("DOMString")}}                           | Le type de l'événement.                                                                          |
| `bubbles` {{ReadOnlyInline}}    | `boolean`                                          | Est-ce qu'il se propage?                                                                         |
| `cancelable` {{ReadOnlyInline}} | `boolean`                                          | Peut-il être annulé?                                                                             |
| `view` {{ReadOnlyInline}}       | {{domxref("WindowProxy")}}                         | {{domxref("Document.defaultView")}} (fenêtre du document).                                       |
| `detail` {{ReadOnlyInline}}     | `long` (`float`)                                   | 0.                                                                                               |
| `data` {{ReadOnlyInline}}       | [`DOMString`](/fr/docs/Web/API/DOMString) (string) | La chaîne de caractères originale éditée ou une chaîne vide.                                     |
| `locale` {{ReadOnlyInline}}     | [`DOMString`](/fr/docs/Web/API/DOMString) (string) | Le code de la langue pour l'évènement de composition si disponible&nbsp;; sinon une chaîne vide. |

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`compositionstart`](/fr/docs/Web/API/Element/compositionstart_event)
- [`compositionupdate`](/fr/docs/Web/API/Element/compositionupdate_event)
- [`compositionend`](/fr/docs/Web/API/Element/compositionend_event)

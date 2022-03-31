---
title: Element.attachShadow()
slug: Web/API/Element/attachShadow
translation_of: Web/API/Element/attachShadow
---
{{APIRef('Shadow DOM')}} {{SeeCompatTable}}

La méthode **`Element.attachShadow()`** attache un arbre Shadow DOM à un élément spécifié et retourne une référence à son [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot).

## Syntaxe

    var shadowroot = element.attachShadow(shadowRootInit);

### Paramètres

- `shadowRootInit`

  - : Un dictionnaire `ShadowRootInit`, avec les propriétés suivantes :

    - `mode`&nbsp;: une chaîne de caractères spécifiant le *mode d'encapsulation* de l'arbre du Shadow DOM, parmi les options suivantes&nbsp;:
      - `open`&nbsp;: spécifie une encapsulation ouverte.
      - `closed`&nbsp;: spécifie une encapsulation fermée.

### Retour

Retourne un {{domxref("ShadowRoot")}}.

## Spécifications

| Specification                                                                                                                                                    | Status                           | Comment              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('Shadow DOM', '#widl-Element-attachShadow-ShadowRoot-ShadowRootInit-shadowRootInitDict', 'attachShadow()')}} | {{Spec2('Shadow DOM')}} | Définition initiale. |

## Browser compatibility

{{Compat("api.Element.attachShadow")}}

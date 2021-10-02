---
title: Node.innerText
slug: Web/API/HTMLElement/innerText
translation_of: Web/API/HTMLElement/innerText
original_slug: Web/API/Node/innerText
---
{{APIRef("DOM")}}

## Sommaire

**`Node.innerText`** est une propriété représentant le contenu textuel « visuellement rendu » d’un nœud. Utilisé en lecture, il renvoie une approximation du texte que l’utilisateur ou utilisatrice obtiendrait s’il ou elle sélectionnnait le contenu d’un élément avec le curseur, et le copiait dans le presse-papier.

{{domxref("Node.textContent")}} est une alternative similaire, bien qu’il y ait d’importantes différences entre les deux.

## Spécification

| Spécification                                                                                                | Statut                           | Commentaire                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'dom.html#the-innertext-idl-attribute', 'innerText')}} | {{Spec2('HTML WHATWG')}} | Introduction basée sur le [brouillon de spécification de innerText](https://github.com/rocallahan/innerText-spec). Voir [whatwg/html#465](https://github.com/whatwg/html/issues/465) et [whatwg/compat#5](https://github.com/whatwg/compat/issues/5) pour l’histoire. |

## Compatibilité des navigateurs

{{Compat("api.Node.innerText")}}

## Voir aussi

- {{domxref("HTMLElement.outerText")}}
- {{domxref("Element.innerHTML")}}

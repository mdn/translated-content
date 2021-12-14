---
title: id
slug: Web/HTML/Global_attributes/id
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/id
original_slug: Web/HTML/Attributs_universels/id
---
{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`id`** définit un identifiant qui doit être unique pour l'ensemble du document. Le but de cet attribut est de pouvoir identifier un élément lorsqu'on crée un lien, [avec un fragment](/fr/docs/Web/HTTP/Basics_of_HTTP/Identifier_des_ressources_sur_le_Web#Fragment) et qu'on souhaite le manipuler avec un script ou qu'on le met en forme avec CSS.

{{EmbedInteractiveExample("pages/tabbed/attribute-id.html","tabbed-shorter")}}

> **Attention :** La valeur de cet attribut est une chaîne de caractère « opaque ». Cela signifie que cet attribut ne doit pas être utilisé pour transporter de l'information. Les informations sur la signification de l'élément dans le document ne doivent pas être portées par la valeur de cet attribut.

La valeur de cet attribut ne doit pas contenir de blancs (espaces, tabulation, etc.). Les navigateurs interprèteront les identifiants avec des espaces comme si l'espace faisait partie de l'identifiant. Ce comportement est différent de celui de l'attribut {{htmlattrxref("class")}} qui permet d'avoir des valeurs séparées par des espaces. Les éléments ne peuvent avoir qu'un seul identifiant défini via l'attribut **`id`**.

> **Note :** L'utilisation de caractères non-ASCII ou qui ne sont pas des chiffres latins ou`'_'`, `'-'` et `'.'` peut entraîner des problèmes de compatibilité car ils n'étaient pas autorisé avec HTML 4. Bien que cette restriction n'existe plus avec HTML 5, un identifiant devrait toujours commencer par une lettre pour une meilleure compatibilité.

## Spécifications

| Spécification                                                                        | État                             | Commentaires                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "dom.html#the-id-attribute", "id")}} | {{Spec2('HTML WHATWG')}} | Aucun changement depuis la dernière dérivation, {{SpecName('HTML5.1')}}                                                                                                                                                                                                           |
| {{SpecName('HTML5.1', "dom.html#the-id-attribute", "id")}}         | {{Spec2('HTML5.1')}}     | Dérivée de {{SpecName('HTML WHATWG')}}, aucun changement depuis {{SpecName('HTML5 W3C')}}                                                                                                                                                                                  |
| {{SpecName('HTML5 W3C', "dom.html#the-id-attribute", "id")}}     | {{Spec2('HTML5 W3C')}}     | Dérivée de {{SpecName('HTML WHATWG')}}, les caractères `'_'`, `'-'` et `'.'` sont désormais acceptés s'ils ne sont pas utilisés au début de l'identifiant. Cet attribut devient un attribut global à part entière.                                                                |
| {{SpecName('HTML4.01', 'struct/global.html#adef-id', 'id')}}     | {{Spec2('HTML4.01')}}     | Pris en charge par tous les éléments sauf {{HTMLElement("base")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, et {{HTMLElement("title")}}. |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.id")}}

## Voir aussi

- {{domxref("Element.id")}} qui reflète cet attribut
- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)

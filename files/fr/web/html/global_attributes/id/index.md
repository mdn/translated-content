---
title: id
slug: Web/HTML/Global_attributes/id
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`id`** définit un identifiant qui doit être unique pour l'ensemble du document. Le but de cet attribut est de pouvoir identifier un élément lorsqu'on crée un lien, [avec un fragment](/fr/docs/Web/HTTP/Basics_of_HTTP/Identifier_des_ressources_sur_le_Web#Fragment) et qu'on souhaite le manipuler avec un script ou qu'on le met en forme avec CSS.

{{EmbedInteractiveExample("pages/tabbed/attribute-id.html","tabbed-shorter")}}

> **Attention :** La valeur de cet attribut est une chaîne de caractère « opaque ». Cela signifie que cet attribut ne doit pas être utilisé pour transporter de l'information. Les informations sur la signification de l'élément dans le document ne doivent pas être portées par la valeur de cet attribut.

La valeur de cet attribut ne doit pas contenir de blancs (espaces, tabulation, etc.). Les navigateurs interprèteront les identifiants avec des espaces comme si l'espace faisait partie de l'identifiant. Ce comportement est différent de celui de l'attribut [`class`](/fr/docs/Web/HTML/Global_attributes#class) qui permet d'avoir des valeurs séparées par des espaces. Les éléments ne peuvent avoir qu'un seul identifiant défini via l'attribut **`id`**.

> **Note :** L'utilisation de caractères non-ASCII ou qui ne sont pas des chiffres latins ou`'_'`, `'-'` et `'.'` peut entraîner des problèmes de compatibilité car ils n'étaient pas autorisé avec HTML 4. Bien que cette restriction n'existe plus avec HTML 5, un identifiant devrait toujours commencer par une lettre pour une meilleure compatibilité.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Element.id")}} qui reflète cet attribut
- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)

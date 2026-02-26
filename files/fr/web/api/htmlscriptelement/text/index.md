---
title: "HTMLScriptElement : propriété text"
short-title: text
slug: Web/API/HTMLScriptElement/text
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Cette propriété représente le contenu textuel d'un élément script, qui peut être exécutable selon le type du script.
> Les API de ce type sont appelées [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation) et peuvent constituer un vecteur d'attaques de [cross-site scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS).
>
> Vous pouvez atténuer ce risque en affectant systématiquement des objets {{DOMxRef("TrustedScript")}} plutôt que des chaînes de caractères et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_de_confiance).
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La propriété **`text`** de l'interface {{DOMxRef("HTMLScriptElement")}} représente le contenu textuel en ligne de l'élément script.
Elle agit de la même manière que les propriétés {{DOMxRef("HTMLScriptElement.textContent", "textContent")}} et {{DOMxRef("HTMLScriptElement.innerText","innerText")}}.

## Valeur

Obtenir la propriété retourne une chaîne de caractères contenant le texte de l'élément.

Définir la propriété accepte soit un objet {{DOMxRef("TrustedScript")}}, soit une une chaîne de caractères.

### Exceptions

- `TypeError`
  - : Levée si la propriété est affectée avec une chaîne de caractères lorsque les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont [appliqués par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_de_confiance) et qu'aucune politique par défaut n'est définie.

## Description

La propriété **`text`** de l'interface {{DOMxRef("HTMLScriptElement")}} représente le contenu textuel à l'intérieur de l'élément {{HTMLElement("script")}}.

Pour un script exécutable {{DOMxRef('HTMLScriptElement/type','type')}}, comme un module ou un script classique, ce texte est du code exécutable en ligne.
Pour d'autres types, il peut représenter une import map, des règles de spéculation ou un autre type de bloc de données.

Notez que si la propriété {{DOMxRef('HTMLScriptElement/src','src')}} est définie, le contenu de la propriété `text` est ignoré.

### Considérations de sécurité

Voir [considérations de sécurité](/fr/docs/Web/API/HTMLScriptElement/textContent#considérations_de_sécurité) dans {{DOMxRef("HTMLScriptElement.textContent")}} (les considérations sont les mêmes pour les propriétés `text`, `textContent` et `innerText`).

## Exemples

Voir les [exemples](/fr/docs/Web/API/HTMLScriptElement/textContent#exemples) dans {{DOMxRef("HTMLScriptElement.textContent")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLScriptElement.textContent")}}
- La propriété {{DOMxRef("HTMLScriptElement.innerText")}}

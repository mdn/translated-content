---
title: "HTMLScriptElement : propriété innerText"
short-title: innerText
slug: Web/API/HTMLScriptElement/innerText
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

La propriété **`innerText`** de l'interface {{DOMxRef("HTMLScriptElement")}} représente le contenu textuel de l'élément {{HTMLElement("script")}}.
Elle se comporte de la même manière que les propriétés {{DOMxRef("HTMLScriptElement.textContent","textContent")}} et {{DOMxRef("HTMLScriptElement.text","text")}}.

## Valeur

La lecture de la propriété retourne une chaîne de caractères contenant le texte du script.

L'affectation de la propriété accepte soit un objet {{DOMxRef("TrustedScript")}} soit une chaîne de caractères.

### Exceptions

- `TypeError`
  - : Levée si la propriété est affectée avec une chaîne de caractères lorsque les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont [appliqués par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_de_confiance) et qu'aucune politique par défaut n'est définie.

## Description

La propriété **`innerText`** de l'interface {{DOMxRef("HTMLScriptElement")}} représente le contenu textuel à l'intérieur de l'élément HTML {{HTMLElement("script")}}.

Pour un script exécutable (c'est-à-dire un script dont {{DOMxRef('HTMLScriptElement/type', 'type')}} indique qu'il s'agit d'un module ou d'un script classique), ce texte est du code exécutable en ligne.
Pour d'autres types, il peut s'agir d'une carte d'imports, de règles de spéculation ou d'un autre type de bloc de données.

Notez que si la propriété {{DOMxRef('HTMLScriptElement/src','src')}} est définie, le contenu de la propriété `innerText` est ignoré.

La propriété `innerText` est également définie sur {{DOMxRef("HTMLElement.innerText","HTMLElement")}} et peut donc être utilisée avec d'autres éléments.
Lorsqu'elle est utilisée avec d'autres éléments, la propriété n'attend pas et n'impose pas l'affectation d'un objet {{DOMxRef("TrustedScript")}}.

### Considérations de sécurité

Voir [considérations de sécurité](/fr/docs/Web/API/HTMLScriptElement/textContent#considérations_de_sécurité) dans {{DOMxRef("HTMLScriptElement.textContent")}} (les considérations sont les mêmes pour les propriétés `text`, `textContent` et `innerText`).

## Exemples

Voir les [exemples](/fr/docs/Web/API/HTMLScriptElement/textContent#exemples) dans {{DOMxRef("HTMLScriptElement.textContent")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLElement.innerText")}}

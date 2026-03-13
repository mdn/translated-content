---
title: "Document : méthode statique parseHTMLUnsafe()"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: e1d5e4480e823e863842fdb27b19f6b499ca00a0
---

{{APIRef("DOM")}}

> [!WARNING]
> Cette méthode analyse son entrée en tant que HTML, en écrivant le résultat dans le DOM.
> Les API de ce type sont connues sous le nom de [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation) et peuvent potentiellement être un vecteur pour des attaques de [script inter-sites (XSS)](/fr/docs/Web/Security/Attacks/XSS), si l'entrée provient initialement d'un·e attaquant·e.
>
> Vous pouvez atténuer ce risque en passant toujours des objets `TrustedHTML` au lieu de chaînes de caractères et en [appliquant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_des_types_de_confiances).
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

> [!NOTE]
> Il faut utiliser {{DOMxRef("Document/parseHTML_static", "Document.parseHTML()")}} à la place de cette méthode — sur les navigateurs qui la prennent en charge — car elle supprime toujours les entités HTML non sécurisées contre les XSS.

La méthode statique **`parseHTMLUnsafe()`** de l'interface {{DOMxRef("Document")}} permet d'analyser une entrée HTML, en filtrant éventuellement les éléments et attributs HTML indésirables, afin de créer une nouvelle instance de {{DOMxRef("Document")}}.

## Syntaxe

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### Paramètres

- `input`
  - : Une instance de {{DOMxRef("TrustedHTML")}} ou une chaîne de caractères définissant le HTML à analyser.
- `options` {{Optional_Inline}}
  - : Un objet d'options avec les paramètres optionnels suivants&nbsp;:
    - `sanitizer` {{Optional_Inline}}
      - : Un objet {{DOMxRef("Sanitizer")}} ou {{DOMxRef("SanitizerConfig")}} qui définit quels éléments de l'entrée seront autorisés ou supprimés.
        Cela peut également être une chaîne de caractères avec la valeur `"default"`, qui applique un `Sanitizer` avec la configuration par défaut (sécurisée contre les XSS).
        Si aucun n'est défini, aucun assainisseur n'est utilisé.

        Notez qu'en général, un `Sanitizer` est attendu pour être plus efficace qu'un `SanitizerConfig` si la configuration doit être réutilisée.

### Valeur de retour

Un objet {{DOMxRef("Document")}}.

### Exceptions

- `TypeError`
  - : Ceci est levé si&nbsp;:
    - `html` reçoit une chaîne de caractères lorsque [Trusted Types](/fr/docs/Web/API/Trusted_Types_API) sont [appliqués par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_des_types_de_confiances) et qu'aucune politique par défaut n'est définie.
    - `options.sanitizer` reçoit&nbsp;:
      - {{DOMxRef("SanitizerConfig")}} qui n'est pas [valide](/fr/docs/Web/API/SanitizerConfig#configuration_valide).
        Par exemple, une configuration qui inclut à la fois les paramètres `"allowed"` et `"removed"`.
      - une chaîne de caractères qui n'a pas la valeur `"default"`.
      - une valeur qui n'est pas un {{DOMxRef("Sanitizer")}}, {{DOMxRef("SanitizerConfig")}}, ou une chaîne de caractères.

## Description

La méthode statique **`parseHTMLUnsafe()`** peut être utilisée pour créer une nouvelle instance de {{DOMxRef("Document")}}, en filtrant éventuellement les éléments et attributs indésirables.
Le `Document` résultant aura un [type de contenu](/fr/docs/Web/API/Document/contentType) de `"text/html"`, un [encodage de caractères](/fr/docs/Web/API/Document/characterSet) UTF-8 et une URL «&nbsp;about:blank&nbsp;».

Le HTML d'entrée peut inclure des [racines d'ombre déclaratives](/fr/docs/Web/HTML/Reference/Elements/template#dom_dombre_déclaratif).
Si la chaîne HTML définit plus d'une [racine d'ombre déclarative](/fr/docs/Web/HTML/Reference/Elements/template#dom_dombre_déclaratif) dans un hôte d'ombre donné, seule la première {{DOMxRef("ShadowRoot")}} est créée — les déclarations suivantes sont analysées comme des éléments {{HTMLElement("template")}} à l'intérieur de cette racine d'ombre.

`parseHTMLUnsafe()` n'effectue aucun assainissement par défaut.
Si aucun assainisseur n'est passé en paramètre, toutes les entités HTML de l'entrée seront injectées.

### Considérations de sécurité

Le suffixe «&nbsp;Unsafe&nbsp;» dans le nom de la méthode indique qu'elle ne supprime pas toutes les entités HTML non sécurisées contre les XSS (contrairement à {{DOMxRef("Document/parseHTML_static", "Document.parseHTML()")}}).
Elle peut le faire si elle est utilisée avec un assainisseur adapté, mais elle n'est pas obligée d'utiliser un assainisseur efficace, ni même d'en utiliser un&nbsp;!
La méthode constitue donc un vecteur possible pour des attaques de [script inter-sites (XSS)](/fr/docs/Web/Security/Attacks/XSS), où des chaînes potentiellement non sécurisées fournies par un·e utilisateur·ice sont injectées dans le DOM sans être assainies au préalable.

Vous pouvez atténuer ce risque en passant toujours des objets {{DOMxRef("TrustedHTML")}} au lieu de chaînes de caractères et en [appliquant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) à l'aide de la directive CSP [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Cela garantit que l'entrée passe par une fonction de transformation, qui a la possibilité de [assainir](/fr/docs/Web/Security/Attacks/XSS#assainissement) l'entrée pour supprimer les balises potentiellement dangereuses (comme les éléments {{HTMLElement("script")}} et les attributs de gestionnaire d'évènements), avant qu'elle ne soit injectée.

L'utilisation de `TrustedHTML` permet d'auditer et de vérifier que le code d'assainissement est efficace à quelques endroits seulement, plutôt que dispersé dans tous les points d'injection.
Il n'est pas nécessaire de passer un assainisseur à la méthode lorsque vous utilisez `TrustedHTML`.

Si, pour une raison quelconque, vous ne pouvez pas utiliser `TrustedHTML` (ou mieux, `setHTML()`), l'option la plus sûre suivante consiste à utiliser `setHTMLUnsafe()` avec la configuration par défaut de {{DOMxRef("Sanitizer")}} sécurisée contre les XSS.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{DOMxRef("Document.parseHTML_static", "Document.parseHTML()")}}
- Les méthodes {{DOMxRef("Element.setHTML()")}} et {{DOMxRef("Element.setHTMLUnsafe()")}}
- Les méthodes {{DOMxRef("ShadowRoot.setHTML()")}} et {{DOMxRef("ShadowRoot.setHTMLUnsafe()")}}
- La méthode {{DOMxRef("DOMParser.parseFromString()")}} pour analyser HTML ou XML en un arbre DOM
- [L'API HTML Sanitizer](/fr/docs/Web/API/HTML_Sanitizer_API)

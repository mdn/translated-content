---
title: "Element : méthode setAttributeNS()"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("DOM")}}

> [!WARNING]
> Cette méthode peut prendre des valeurs d'attribut qui sont analysées comme du HTML, un script ou une URL de script, selon l'attribut.
> Les API de ce type sont connues sous le nom de [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_and_usage) et peuvent potentiellement être un vecteur pour des attaques de [script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS), si la valeur provient initialement d'un·e attaquant·e.
>
> Vous pouvez atténuer ce risque en passant toujours l'objet de type de confiance approprié ({{DOMxRef("TrustedHTML")}}, {{DOMxRef("TrustedScript")}} ou {{DOMxRef("TrustedScriptURL")}}) au lieu de chaînes de caractères pour les attributs qui les nécessitent, et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance).
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La méthode **`setAttributeNS()`** de l'interface {{DOMxRef("Element")}} ajoute un nouvel attribut ou modifie la valeur d'un attribut avec l'espace de noms et le nom donnés.

Si vous manipulez des documents HTML et que vous n'avez pas besoin de définir que l'attribut demandé fait partie d'un espace de noms spécifique, utilisez plutôt la méthode {{DOMxRef("Element.setAttribute()", "setAttribute()")}}.

## Syntaxe

```js-nolint
setAttributeNS(namespaceURI, qualifiedName, value)
```

### Paramètres

- `namespaceURI`
  - : Une chaîne de caractères définissant l'espace de noms de l'attribut à définir, ou la chaîne de caractères vide.

- `qualifiedName`
  - : Une chaîne de caractères identifiant l'attribut par son nom qualifié, qui a le format `prefix:localName` ou `localName`, où les parties sont définies comme suit&nbsp;:
    - `prefix`
      - : Un «&nbsp;alias court&nbsp;» pour l'espace de noms.
        Le préfixe est facultatif, mais s'il est défini, le paramètre `namespaceURI` doit également être défini.
        Si le préfixe est défini sur `xml` ou `xmlns`, le `namespaceURI` doit être défini respectivement sur `http://www.w3.org/XML/1998/namespace` ou `http://www.w3.org/2000/xmlns/`.

    - `localName`
      - : Le nom local de l'attribut.

- `value`
  - : Une chaîne de caractères ou un type de confiance contenant la valeur à attribuer à l'attribut.

    Des instances de type de confiance doivent être passées pour les attributs suivants lorsque les types de confiance sont appliqués&nbsp;:
    - Les attributs de contenu des gestionnaires d'évènements, tels que `onclick` et `onload`, nécessitent un {{DOMxRef("TrustedScript")}}.
    - {{DOMxRef("HTMLIFrameElement.srcdoc")}} nécessite une instance de {{DOMxRef("TrustedHTML")}}.
    - {{DOMxRef("HTMLScriptElement.src")}} nécessite une instance de {{DOMxRef("TrustedScriptURL")}}.
    - {{DOMxRef("SVGScriptElement.href")}} nécessite une instance de {{DOMxRef("TrustedScriptURL")}}.

    Les types de confiance ne sont pas appliqués pour les autres attributs, donc une chaîne de caractères ou tout type de confiance peut être passé.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `NamespaceError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de [`namespaceURI`](#namespaceuri) est&nbsp;:
    - n'est pas un URI d'espace de noms valide.
    - définie sur la chaîne de caractères vide lorsque `prefix` a une valeur.
    - n'est pas la valeur `http://www.w3.org/XML/1998/namespace` ou `http://www.w3.org/2000/xmlns/` lorsque [`prefix`](#prefix) est défini sur `xml` ou `xmlns`, respectivement.
- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Levée si l'un des [`prefix`](#prefix) ou [`localName`](#localname) n'est pas valide&nbsp;:
    - Le `prefix` doit contenir au moins un caractère et ne peut pas contenir d'espaces ASCII, `NULL`, `/` ou `>` (U+0000, U+002F ou U+003E, respectivement).
    - Le `localName` doit contenir au moins un caractère et ne peut pas contenir d'espaces ASCII, `NULL`, `/`, `=` ou `>` (U+0000, U+002F, U+003D ou U+003E, respectivement).

    > [!NOTE]
    > Les versions antérieures de la spécification étaient plus restrictives, exigeant que le `qualifiedName` soit un [nom XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#dt-name) valide.

- `TypeError`
  - : Levée si [`value`](#value) est passée une chaîne de caractères au lieu d'un objet de type de confiance (pour les attributs qui les nécessitent) lorsque les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont [appliqués par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) et qu'aucune politique par défaut n'est définie.

## Exemples

### Utilisation simple

```js
let d = document.getElementById("d1");
d.setAttributeNS(
  "http://www.mozilla.org/ns/specialspace",
  "spec:align",
  "center",
);
```

### Types de confiance

L'exemple [Définir des attributs non sécurisés](/fr/docs/Web/API/Element/setAttribute#définir_des_attributs_qui_ne_sont_pas_sûrs) dans `setAttribute()` montre comment vous pouvez utiliser `setAttributeNS()` avec les [types de confiance](/fr/docs/Web/API/Trusted_Types_API).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.hasAttributeNS()")}}
- La méthode {{DOMxRef("Element.getAttributeNS()")}}
- La méthode {{DOMxRef("Element.removeAttributeNS()")}}
- La méthode {{DOMxRef("Element.setAttribute()")}}

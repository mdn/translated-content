---
title: "HTMLScriptElement : propriété src"
short-title: src
slug: Web/API/HTMLScriptElement/src
l10n:
  sourceCommit: a809326f55025ca710b11e6c46414d73d031bf2b
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Cette propriété représente l'URI d'un script externe chargé dans l'élément HTML {{HTMLElement("script")}}, qui peut être exécutable selon la valeur de la propriété {{DOMxRef("HTMLScriptElement/type", "type")}}.
> Les API de ce type sont appelées [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation) et peuvent constituer un vecteur d'attaques de [cross-site scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS).
>
> Vous pouvez atténuer ce risque en définissant une [Politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP) qui restreint les emplacements d'où les scripts peuvent être chargés, et en affectant systématiquement des objets {{DOMxRef("TrustedScriptURL")}} plutôt que des chaînes, ainsi qu'en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_de_confiance).
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La propriété **`src`** de l'interface {{DOMxRef("HTMLScriptElement")}} est une chaîne de caractères qui représente l'URL d'un script externe&nbsp;; cela peut être utilisé comme alternative à l'intégration directe d'un script dans un document.

Elle reflète l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/script#src) de l'élément HTML {{HTMLElement("script")}}.

## Valeur

La lecture de la propriété retourne une chaîne contenant l'URI du script de l'élément.

L'affectation de la propriété accepte soit un objet {{DOMxRef("TrustedScriptURL")}} soit une chaîne de caractères.

### Exceptions

- `TypeError`
  - : Levée si la propriété est affectée avec une chaîne de caractères lorsque les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont appliqués par une CSP et qu'aucune politique par défaut n'est définie.
    Elle est également levée si l'URL récupérée ne peut pas être analysée correctement comme le type indiqué, par exemple un module ou un importmap.

## Description

La propriété **`src`** représente l'URL d'un script externe.
Si elle est définie, les scripts fournis via les propriétés de texte {{DOMxRef("HTMLScriptElement.text", "text")}}, {{DOMxRef("HTMLScriptElement.textContent", "textContent")}} ou {{DOMxRef("HTMLScriptElement.textContent", "innerText")}} sont ignorés.

### Considérations de sécurité

La propriété `src` est utilisée pour charger et exécuter des scripts externes.
Le script récupéré s'exécute dans le contexte de la page courante et peut donc faire tout ce que peut faire le code de votre site (même si l'URL n'est pas de la même origine que votre site).
Si l'entrée est fournie par un·e utilisateur·ice, cela constitue un vecteur possible d'attaques de [cross-site scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS).

Il est extrêmement risqué d'accepter et d'exécuter des URL arbitraires provenant d'origines non fiables.
Un site Web doit contrôler les scripts autorisés à s'exécuter en définissant une [Politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP) avec la directive `script-src` (ou un repli défini dans `default-src`).
Cela permet de restreindre les scripts à ceux provenant de l'origine courante, d'un ensemble spécifique d'origines, ou même de fichiers particuliers.

Si vous utilisez cette propriété et que vous [appliquez les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_de_confiance) (en utilisant la directive CSP `require-trusted-types-for`), vous devrez toujours affecter des objets {{DOMxRef("TrustedScriptURL")}} plutôt que des chaînes.
Cela garantit que la valeur passe par une fonction de transformation, qui a la possibilité de rejeter ou de modifier l'URL avant son injection.

Même si la ressource est approuvée par votre site, elle peut toujours être compromise lors d'une [attaque contre la chaîne d'approvisionnement](/fr/docs/Web/Security/Attacks/Supply_chain_attacks).
Pour vous protéger contre ce type d'attaque, vous devez utiliser la fonctionnalité [subresource integrity](/fr/docs/Web/Security/Attacks/Supply_chain_attacks#utiliser_lintégrité_des_sous-ressources).

## Exemples

### Utiliser TrustedScriptURL

Pour atténuer le risque d'XSS, vous devez toujours affecter des instances de `TrustedScriptURL` à la propriété `src`.
Vous devez également le faire si vous appliquez les types de confiance pour d'autres raisons et que vous souhaitez autoriser certaines sources de scripts qui ont été permises (par `CSP: script-src`).

Les types de confiance ne sont pas encore pris en charge par tous les navigateurs, donc définissons d'abord le [tinyfill des types de confiance](/fr/docs/Web/API/Trusted_Types_API#tinyfill_des_types_de_confiance).
Cela agit comme un remplacement transparent de l'API JavaScript des types de confiance&nbsp;:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Ensuite, nous créons une {{DOMxRef("TrustedTypePolicy")}} qui définit une méthode {{DOMxRef("TrustedTypePolicy/createScriptURL", "createScriptURL()")}} pour transformer des chaînes de caractères en instances de {{DOMxRef("TrustedScriptURL")}}.

Dans cet exemple, supposons que vous souhaitiez autoriser un ensemble prédéfini d'URL dans le tableau `scriptAllowList` et consigner les autres scripts.

```js
const scriptAllowList = [
  // Liste d'URL autorisées
];
const policy = trustedTypes.createPolicy("script-url-policy", {
  createScriptURL(input) {
    if (scriptAllowList.includes(input)) {
      return input; // autorise le script
    }
    console.log(`Script pas présent dans scriptAllowList : ${input}`);
    return ""; // Bloque le script
  },
});
```

Ensuite, créez l'élément script auquel vous assignerez la valeur et obtenez une référence à cet élément.

```html
<script id="el"></script>
```

```js
// Récupère l'élément script dans lequel nous injectons le code
const el = document.getElementById("el");
```

Ensuite, nous utilisons l'objet `policy` pour créer une instance de `trustedScriptURL` à partir de la chaîne de caractères potentiellement non sécurisée, puis nous assignons le résultat à l'élément&nbsp;:

```js
// Chaîne potentiellement malveillante
// Nous n'inclurons pas untrustedScriptURL dans notre tableau scriptAllowList
const untrustedScriptURL = "https://evil.example.com/naughty.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScriptURL);

// Injecte le TrustedScriptURL (qui contient une URL approuvée)
el.src = trustedScriptURL;
```

### Lire la propriété `src`

Supposons que le code s'exécute sur un site dont l'URL est «&nbsp;https://exemple.com&nbsp;».

```html
<script id="script-with-src" type="module" src="/main.js"></script>
<script id="script-without-src" type="module"></script>
```

```js
const script_with_src = document.getElementById("script-with-src");
console.log(script_with_src.src); // Affiche : "https://example.com/main.js"
const script_without_src = document.getElementById("script-without-src");
console.log(script_without_src.src); // Affiche : ""
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

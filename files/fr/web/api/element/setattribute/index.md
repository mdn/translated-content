---
title: "Element : méthode setAttribute()"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{APIRef("DOM")}}

> [!WARNING]
> Cette méthode peut prendre des valeurs d'attribut qui sont analysées comme du HTML, un script ou une URL de script, selon l'attribut.
> Les API de ce type sont connues sous le nom de [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_and_usage) et peuvent potentiellement être un vecteur pour des attaques de [script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS), si la valeur provient initialement d'un·e attaquant·e.
>
> Vous pouvez atténuer ce risque en passant toujours l'objet de type de confiance approprié ({{DOMxRef("TrustedHTML")}}, {{DOMxRef("TrustedScript")}} ou {{DOMxRef("TrustedScriptURL")}}) au lieu de chaînes de caractères pour les attributs qui les nécessitent, et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance).
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La méthode **`setAttribute()`** de l'interface {{DOMxRef("Element")}} définit la valeur d'un attribut sur l'élément défini.
Si l'attribut existe déjà, sa valeur est mise à jour&nbsp;; sinon, un nouvel attribut est ajouté avec le nom et la valeur définis.

Si vous devez travailler avec le nœud {{DOMxRef("Attr")}} (par exemple en le clonant à partir d'un autre élément) avant de l'ajouter, vous pouvez utiliser la méthode {{DOMxRef("Element.setAttributeNode()", "setAttributeNode()")}} à la place.

## Syntaxe

```js-nolint
setAttribute(qualifiedName, value)
```

### Paramètres

- `qualifiedName`
  - : Une chaîne de caractères contenant le nom qualifié de l'attribut dont la valeur doit être définie.
    Le nom de l'attribut est automatiquement converti en minuscules lorsque `setAttribute()` est appelée sur un élément HTML dans un document HTML.

    Le format du nom qualifié est `prefix:localName` ou `localName`, où les parties sont définies comme suit&nbsp;:
    - `prefix` {{Optional_Inline}}
      - : Un «&nbsp;alias court&nbsp;» pour l'espace de noms, tel que retourné par la propriété {{DOMxRef("Attr.prefix", "prefix")}}.
    - `localName`
      - : Le nom local de l'attribut, tel que retourné par la propriété {{DOMxRef("Attr.localName", "localName")}}.

- `value`
  - : Un type de confiance ou une chaîne de caractères contenant la valeur à attribuer à l'attribut.

    Des instances de type de confiance doivent être passées pour les attributs suivants lorsque les types de confiance sont appliqués&nbsp;:
    - Les attributs de contenu des gestionnaires d'évènements, tels que `onclick` et `onload`, nécessitent un {{DOMxRef("TrustedScript")}}.
    - {{DOMxRef("HTMLIFrameElement.srcdoc")}} nécessite une instance de {{DOMxRef("TrustedHTML")}}.
    - {{DOMxRef("HTMLScriptElement.src")}} nécessite une instance de {{DOMxRef("TrustedScriptURL")}}.
    - {{DOMxRef("SVGScriptElement.href")}} nécessite une instance de {{DOMxRef("TrustedScriptURL")}}.

    Les types de confiance ne sont pas appliqués pour les autres attributs, donc une chaîne de caractères ou tout type de confiance peut être passé.

    Une valeur qui n'est pas une chaîne de caractères définie est automatiquement convertie en chaîne de caractères.

    Les attributs booléens sont considérés comme `true` s'ils sont présents sur l'élément.
    Vous devez définir `value` sur la chaîne de caractères vide (`""`) ou sur le nom de l'attribut, sans espace blanc au début ou à la fin.
    Voir [l'exemple](#exemples) ci-dessous pour une démonstration pratique.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Levée si l'un des [`prefix`](#prefix) ou [`localName`](#localname) n'est pas valide&nbsp;:
    - Le `prefix` doit comporter au moins un caractère et ne peut pas contenir d'espaces ASCII, `NULL`, `/` ou `>` (U+0000, U+002F ou U+003E, respectivement).
    - Le `localName` doit comporter au moins un caractère et ne peut pas contenir d'espaces ASCII, `NULL`, `/`, `=` ou `>` (U+0000, U+002F, U+003D ou U+003E, respectivement).

    > [!NOTE]
    > Les versions antérieures de la spécification étaient plus restrictives et exigeaient que le `qualifiedName` soit un [nom XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#dt-name) valide.

- `TypeError`
  - : Levée si [`value`](#value) est une chaîne de caractères au lieu d'un objet de type de confiance (pour les attributs qui les nécessitent) lorsque les [Trusted Types](/fr/docs/Web/API/Trusted_Types_API) sont [appliqués par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) et qu'aucune politique par défaut n'est définie.

## Description

**`setAttribute()`** définit la valeur d'un attribut sur l'élément défini.
Si l'attribut existe déjà, sa valeur est mise à jour&nbsp;; sinon, un nouvel attribut est ajouté avec le nom et la valeur définis.

Pour définir la valeur d'un attribut booléen, tel que `disabled`, vous pouvez définir n'importe quelle valeur.
Peu importe la valeur que vous utilisez&nbsp;; si l'attribut est présent, sa valeur est considérée comme `true`.
Par convention, nous activons les attributs booléens en définissant leur valeur sur le nom de l'attribut ou sur la chaîne de caractères vide (`""`).
L'absence d'un attribut booléen signifie que sa valeur est `false`&nbsp;; vous devez appeler {{DOMxRef("Element.removeAttribute()")}} pour «&nbsp;annuler&nbsp;» l'effet de l'activation d'un attribut booléen.

Pour obtenir la valeur actuelle d'un attribut, utilisez {{DOMxRef("Element.getAttribute", "getAttribute()")}}&nbsp;; pour supprimer un attribut, appelez {{DOMxRef("Element.removeAttribute", "removeAttribute()")}}.

### Considérations de sécurité

[Certains attributs](#value) peuvent être utilisés comme vecteur pour des attaques de [script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS), où des chaînes de caractères potentiellement non sécurisées fournies par un·e utilisateur·ice sont injectées dans le DOM sans être d'abord assainies, ou des scripts sont exécutés qui peuvent contenir du code malveillant.

Par exemple, le code suivant montre comment une chaîne de caractères potentiellement non sécurisée fournie par un·e utilisateur·ice est exécutée lorsque le bouton est pressé.

```js
const bouton = document.querySelector("button");
const chainePotentiellementMalveillante = "alert(1)";
bouton.setAttribute("onclick", chainePotentiellementMalveillante);
```

De même, vous pouvez injecter du HTML potentiellement non sécurisé dans le DOM en définissant l'attribut {{DOMxRef("HTMLIFrameElement.srcdoc")}}, ou en fournissant une URL potentiellement non sécurisée aux attributs {{DOMxRef("HTMLScriptElement.src")}} ou {{DOMxRef("SVGScriptElement.href")}}.

Vous pouvez atténuer ces problèmes en passant toujours l'objet de type de confiance approprié ({{DOMxRef("TrustedHTML")}}, {{DOMxRef("TrustedScript")}} ou {{DOMxRef("TrustedScriptURL")}}) pour chaque propriété au lieu de chaînes de caractères, et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) à l'aide de la directive CSP {{CSP("require-trusted-types-for")}}.
Cela garantit que l'entrée est passée par une fonction de transformation qui peut, par exemple, supprimer les balises potentiellement dangereuses du HTML avant qu'il ne soit injecté.

## Exemples

### Définir des attributs sûrs

Cet exemple utilise `setAttribute()` pour définir les attributs `name` et `disabled` sur un {{HTMLElement("button")}}.
Ces attributs sont tous deux sûrs vis-à-vis des XSS.
Comme leurs valeurs ne sont pas exécutées ni analysées en tant que HTML dans le DOM, nous n'avons pas besoin de passer des types de confiance.

#### HTML

```html
<div>
  <button id="reintialiser" type="button">Réinitialiser</button>
  <button id="basculer_desactivation">Basculer</button>
</div>
<button id="bouton_bonjour">Du texte</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

#### JavaScript

D'abord, nous obtenons l'élément bouton et définissons son attribut `name` sur «&nbsp;boutonBonjour&nbsp;» en utilisant `setAttribute()`.
Pour démontrer que le nom de l'attribut a bien changé, nous récupérons ensuite le texte de l'attribut et l'affichons sur le bouton.

```js
const boutonBonjour = document.querySelector("#bouton_bonjour");
boutonBonjour.setAttribute("name", "boutonBonjour");

// Définir le texte du bouton sur le nom pour montrer que l'attribut a changé
boutonBonjour.innerText = boutonBonjour.getAttribute("name");
```

Ce code est pour le bouton de réinitialisation.
Il recharge simplement la page.

```js
const boutonReinitialiser = document.querySelector("#reintialiser");
boutonReinitialiser.addEventListener("click", () => document.location.reload());
```

Ensuite, nous montrons comment définir et réinitialiser un attribut booléen.
Lorsque le bouton bascule est cliqué, nous vérifions si la propriété booléenne `disabled` est définie (cette propriété reflète l'attribut `disabled`, et est `true` si le bouton est désactivé et `false` sinon).
Si le bouton est désactivé, nous appelons {{DOMxRef("Element.removeAttribute()")}} pour supprimer l'attribut, ce qui active le bouton.
Si le bouton est activé, nous désactivons le bouton en définissant l'attribut `disabled` sur `"disabled"`.

```js
const boutonBasculerDesactivation = document.querySelector(
  "#basculer_desactivation",
);

boutonBasculerDesactivation.addEventListener("click", () => {
  if (boutonBasculerDesactivation.disabled) {
    // Le bouton est désactivé. Activer en supprimant l'attribut
    boutonBasculerDesactivation.removeAttribute("disabled");
  } else {
    // Le bouton est activé. Désactiver en définissant la valeur sur n'importe quoi
    // (normalement "" ou "disabled")
    boutonBasculerDesactivation.setAttribute("disabled", "disabled");
  }
});
```

#### Résultats

L'exemple en cours d'exécution est montré ci-dessous.
Vous pouvez voir que le texte du bouton du bas est «&nbsp;boutonBonjour&nbsp;», car nous avons défini la propriété name et l'avons ensuite utilisée pour définir le texte du bouton.
Vous pouvez appuyer sur le bouton «&nbsp;Basculer&nbsp;» pour désactiver et activer le «&nbsp;boutonBonjour&nbsp;».

{{EmbedLiveSample("Définir des attributs sûrs", 300, 150)}}

### Définir des attributs qui ne sont pas sûrs

Dans cet exemple, nous allons montrer comment vous pouvez atténuer les risques liés à l'appel de `setAttribute()` pour définir l'attribut {{DOMxRef("HTMLIFrameElement.srcdoc", "srcdoc")}} sur un {{HTMLElement("iframe")}}.
Cet attribut définit le HTML source d'un cadre, et peut donc injecter du code potentiellement non sécurisé ou non fiable dans le DOM.

L'approche est similaire pour définir {{DOMxRef("HTMLScriptElement.src", "src")}} sur des éléments de script HTML, {{DOMxRef("SVGScriptElement.href", "href")}} sur des éléments de script SVG, et les attributs de gestionnaire d'évènements `onXxxx`&nbsp;: la principale différence est que vous leur passez différents objets de type de confiance.

Les types de confiance ne sont pas encore pris en charge par tous les navigateurs, nous définissons donc d'abord la [petite prothèse d'émulation des types de confiances](/fr/docs/Web/API/Trusted_Types_API#petite_prothèse_démulation_des_types_de_confiances).
Celle-ci agit comme un remplacement transparent pour l'API JavaScript des types de confiance&nbsp;:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, regles) => regles };
```

Ensuite, nous créons une {{DOMxRef("TrustedTypePolicy")}} qui définit une {{DOMxRef("TrustedTypePolicy.createHTML", "createHTML()")}} pour transformer une chaîne de caractères en entrée en instances de {{DOMxRef("TrustedHTML")}}.
En général, les implémentations de `createHTML()` utilisent une bibliothèque telle que [DOMPurify <sup>(angl.)</sup>](https://github.com/cure53/DOMPurify) pour assainir l'entrée, comme indiqué ci-dessous&nbsp;:

```js
const politique = trustedTypes.createPolicy("ma-politique", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Ensuite, nous utilisons cet objet `politique` pour créer un objet `TrustedHTML` à partir de la chaîne de caractères potentiellement non sécurisée, et assignons le résultat à l'élément&nbsp;:

```js
// La chaîne de caractères potentiellement non sécurisée
const chaineMalveillante =
  "<p>Je peux être un XSS</p><img src='x' onerror='alert(1)'>";

// Crée une instance de TrustedHTML en utilisant la politique
const HTMLDeConfiance = politique.createHTML(chaineMalveillante);

// Injecter le TrustedHTML (qui contient une chaîne de caractères de confiance)
const elementCadreIntegre = document.querySelector("#un_cadre_integre");
elementCadreIntegre.setAttribute("srcdoc", HTMLDeConfiance);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.hasAttribute()")}}
- La méthode {{DOMxRef("Element.getAttribute()")}}
- La méthode {{DOMxRef("Element.removeAttribute()")}}
- La méthode {{DOMxRef("Element.toggleAttribute()")}}

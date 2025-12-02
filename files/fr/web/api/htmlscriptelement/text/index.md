---
title: "HTMLScriptElement : propriété text"
short-title: text
slug: Web/API/HTMLScriptElement/text
l10n:
  sourceCommit: 1d2dd9c951674bf559b9b6d5223704ea3d8d8269
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Cette propriété représente le contenu textuel d'un élément script, qui peut être exécutable selon le type de script.
> Les API de ce type sont appelées [puits d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation) et peuvent constituer un vecteur d'attaques de [cross-site-scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS).
>
> Vous pouvez atténuer ce risque en assignant toujours des objets {{DOMxRef("TrustedScript")}} au lieu de chaînes de caractères et en [imposant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_approuvés).
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La propriété **`text`** de l'interface {{DOMxRef("HTMLScriptElement")}} représente le contenu textuel en ligne de l'élément script.
Elle agit de la même manière que la propriété {{DOMxRef("HTMLScriptElement.textContent", "textContent")}}.

## Valeur

Obtenir la propriété retourne une chaîne de caractères contenant le texte de l'élément.

Définir la propriété accepte soit un objet {{DOMxRef("TrustedScript")}}, soit une une chaîne de caractères.

## Description

La propriété **`text`** de l'interface {{DOMxRef("HTMLScriptElement")}} représente le contenu textuel à l'intérieur de l'élément {{HTMLElement("script")}}.

Pour un script exécutable {{DOMxRef('HTMLScriptElement/type','type')}}, comme un module ou un script classique, ce texte est du code exécutable en ligne.
Pour d'autres types, il peut représenter une import map, des règles de spéculation ou un autre type de bloc de données.

Notez que si la propriété {{DOMxRef('HTMLScriptElement/src','src')}} est définie, le contenu de la propriété `text` est ignoré.

### Différences entre `text`, `textContent` et `innerText`

Les propriétés `text` et {{DOMxRef("HTMLScriptElement.textContent", "textContent")}} de `HTMLScriptElement` sont équivalentes&nbsp;: les deux peuvent être définies avec une chaîne de caractères ou un type `TrustedScript` et retournent une chaîne de caractères représentant le contenu de l'élément script.
La principale différence est que {{DOMxRef("Node.textContent", "textContent")}} est aussi définie sur {{DOMxRef("Node")}} et peut être utilisée avec d'autres éléments pour définir leur contenu avec une chaîne de caractères.

{{DOMxRef("HTMLScriptElement.innerText", "innerText")}} va généralement définir et exécuter le texte de la même manière que les autres méthodes, mais peut retourner une valeur légèrement différente.
Cela s'explique par le fait que cette propriété est conçue pour obtenir le texte rendu d'une une chaîne de caractères de balisage HTML.
Lors de la définition de la valeur, le texte est traité comme un nœud texte, ce qui normalise la chaîne de caractères comme s'il s'agissait d'un texte visible (regroupement des espaces et conversion des `\n` en sauts de ligne).
Cela ne change pas l'exécution du texte, mais modifie le texte stocké et retourné.

### Considérations de sécurité

La propriété `text` est un vecteur possible d'attaques de [Cross-site-scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS), où une chaîne de caractères potentiellement non sûre fournie par un·e utilisateur·ice est exécutée.
Par exemple, l'exemple suivant suppose que `scriptElement` est un élément `<script>` exécutable, et que `untrustedCode` a été fourni par un·e utilisateur·ice&nbsp;:

```js
const untrustedCode = "alert('Code potentiellement malveillant !');";
scriptElement.text = untrustedCode; // affiche l'alerte
```

Vous pouvez atténuer ces problèmes en assignant toujours des objets {{DOMxRef("TrustedScript")}} au lieu d'une chaîne de caractères, et en [imposant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_approuvés) à l'aide de la directive CSP [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for). Cela garantit que l'entrée est transmise à une fonction de transformation, qui a la possibilité de [nettoyer](/fr/docs/Web/Security/Attacks/XSS#assainissement) ou de rejeter le texte avant qu'il ne soit injecté.

Le comportement de la fonction de transformation dépendra du cas d'utilisation spécifique qui nécessite un script fourni par un·e utilisateur·ice. Si cela n'est pas possible, vous pouvez autoriser ou bloquer l'utilisation de certaines fonctions dans une chaîne de caractères fournie.

## Exemples

### Utilisation de TrustedScript

Pour atténuer le risque de XSS, il convient d'assigner systématiquement des instances de `TrustedScript` à la propriété `text`.

Les types de confiance ne sont pas encore pris en charge par tous les navigateurs. Nous définissons donc d'abord le [tinyfill des types de confiance](/fr/docs/Web/API/Trusted_Types_API#tinyfill_des_types_de_confiance).
Cela agit comme un remplacement transparent pour l'API JavaScript des types de confiance&nbsp;:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Ensuite, nous créons une {{DOMxRef("TrustedTypePolicy")}} qui définit une méthode {{DOMxRef("TrustedTypePolicy/createScript", "createScript()")}} pour transformer une chaîne de caractères en une instance de {{DOMxRef("TrustedScript")}}.
Dans cet exemple, nous n'autorisons que le script exact dont nous avons besoin.

```js
const policy = trustedTypes.createPolicy("inline-script-policy", {
  createScript(input) {
    // Ici, spécifiez les scripts autorisés
    if (input === "const num = 10;\nconsole.log(num)") {
      return input; // autoriser ce script exact
    }
    throw new TypeError(`Script non approuvé bloqué&nbsp;: ${input}`);
  },
});
```

Ensuite, nous créons l'élément script auquel nous allons assigner la valeur et obtenons une référence à cet élément.

```html
<script id="el" type="text/javascript"></script>
```

```js
// Récupérer l'élément script dans lequel nous injectons le code
const el = document.getElementById("el");
```

Nous utilisons ensuite l'objet `policy` pour créer un objet `trustedScript` à partir d'une chaîne de caractères potentiellement non sûre, puis nous assignons le résultat à l'élément&nbsp;:

```js
// La chaîne de caractères potentiellement malveillante
const untrustedScriptOne = "const num = 10;\nconsole.log(num)";

// Créer une instance TrustedScript à l'aide de la policy
const trustedScript = policy.createScript(untrustedScriptOne);

// Injecter le TrustedScript (qui contient une chaîne de caractères de confiance)
el.text = trustedScript;
```

### Comparaison entre `text` et `textContent`

Dans cet exemple, nous définissons la valeur d'un élément script en assignant une chaîne de caractères de code aux propriétés `text` et `textContent` de l'élément, puis nous lisons le résultat pour montrer que les résultats sont équivalents.

Notez que dans ce cas, nous n'utilisons pas la policy pour créer des scripts de confiance (par souci de concision, nous supposons que les chaînes de caractères fournies sont de confiance).

```js
// Définir la propriété text
el.text = "const num = 10;\nconsole.log(num)";
console.log(el.text); // Affiche : "const num = 10;\nconsole.log(num);"
console.log(el.textContent); // Affiche : "const num = 10;\nconsole.log(num);"

// Définir la propriété textContent
el.textContent = "console.log(10);";
console.log(el.text); // Affiche : "console.log(10);"
console.log(el.textContent); // Affiche : "console.log(10);"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLScriptElement.textContent")}}
- La propriété {{DOMxRef("HTMLScriptElement.innerText")}}

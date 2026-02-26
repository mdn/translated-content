---
title: "HTMLScriptElement : propriété textContent"
short-title: textContent
slug: Web/API/HTMLScriptElement/textContent
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOM")}}

> [!WARNING]
> Cette propriété représente le contenu textuel d'un élément script, qui peut être exécutable selon le type du script.
> Les API de ce type sont appelées [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation) et peuvent constituer un vecteur d'attaques de [cross-site scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS).
>
> Vous pouvez atténuer ce risque en affectant systématiquement des objets {{DOMxRef("TrustedScript")}} plutôt que des chaînes de caractères et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_de_confiance).
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La propriété **`textContent`** de l'interface {{DOMxRef("HTMLScriptElement")}} représente le contenu textuel en ligne de l'élément HTML {{HTMLElement("script")}}.
Elle se comporte de la même manière que les propriétés {{DOMxRef("HTMLScriptElement.text","text")}} et {{DOMxRef("HTMLScriptElement.innerText","innerText")}}.

## Valeur

La lecture de la propriété retourne une chaîne de caractères contenant le texte du script.

L'affectation de la propriété accepte soit un objet {{DOMxRef("TrustedScript")}} soit une chaîne de caractères.

### Exceptions

- `TypeError`
  - : Levée si la propriété est affectée avec une chaîne de caractères lorsque les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont [appliqués par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_de_confiance) et qu'aucune politique par défaut n'est définie.

## Description

La propriété **`textContent`** de l'interface {{DOMxRef("HTMLScriptElement")}} représente le contenu textuel à l'intérieur de l'élément {{HTMLElement("script")}}.

Pour un script exécutable (c'est-à-dire un script dont {{DOMxRef('HTMLScriptElement/type','type')}} indique qu'il s'agit d'un module ou d'un script classique), ce texte est du code exécutable en ligne.
Pour d'autres types, il peut s'agir d'une carte d'imports, de règles de spéculation ou d'un autre type de bloc de données.

Notez que si la propriété {{DOMxRef('HTMLScriptElement/src','src')}} est définie, le contenu de la propriété `textContent` est ignoré.

La propriété `textContent` est également définie sur {{DOMxRef("Node.textContent", "Node")}} et peut donc être utilisée avec d'autres nœuds (et éléments).
Lorsqu'elle est utilisée avec d'autres éléments, la propriété n'attend pas et n'impose pas l'affectation d'un objet {{DOMxRef("TrustedScript")}}.

### Considérations de sécurité

La propriété `textContent` — ainsi que les propriétés identiques `text` et `innerText` — peut constituer un vecteur d'attaques de [cross-site scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS), où des chaînes de caractères potentiellement non sécurisées fournies par un·e utilisateur·ice sont exécutées.
Par exemple, l'exemple suivant suppose que `scriptElement` est un élément `<script>` exécutable, et que `untrustedCode` a été fourni par un·e utilisateur·ice&nbsp;:

```js
const untrustedCode = "alert('Code potentiellement malveillant !');";
scriptElement.textContent = untrustedCode; // affiche l'alerte
```

Vous pouvez atténuer ces problèmes en affectant systématiquement des objets {{DOMxRef("TrustedScript")}} plutôt que des chaînes de caractères, et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_de_confiance) à l'aide de la directive CSP [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Cela garantit que la valeur passe par une fonction de transformation, qui a la possibilité de [nettoyer](/fr/docs/Web/Security/Attacks/XSS#nettoyage) ou de rejeter le texte avant son injection.

Le comportement de la fonction de transformation dépendra du cas d'utilisation spécifique nécessitant un script fourni par un·e utilisateur·ice.
Si possible, vous devez restreindre les scripts autorisés exactement au code que vous souhaitez exécuter.
Si cela n'est pas possible, vous pouvez autoriser ou bloquer l'utilisation de certaines fonctions dans la chaîne de caractères fournie.

## Exemples

### Utiliser TrustedScript

Pour atténuer le risque d'XSS, vous devez toujours affecter des instances de `TrustedScript` à la propriété `textContent`.

Les types de confiance ne sont pas encore pris en charge par tous les navigateurs, donc définissons d'abord le [tinyfill des types de confiance](/fr/docs/Web/API/Trusted_Types_API#tinyfill_des_types_de_confiance).
Cela agit comme un remplacement transparent de l'API JavaScript Trusted Types&nbsp;:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Ensuite, nous créons une {{DOMxRef("TrustedTypePolicy")}} qui définit une méthode {{DOMxRef("TrustedTypePolicy/createScript", "createScript()")}} pour transformer des chaînes de caractères en instances de {{DOMxRef("TrustedScript")}}.
Pour cet exemple, nous n'autoriserons que le script exact dont nous avons besoin.

```js
const policy = trustedTypes.createPolicy("inline-script-policy", {
  createScript(input) {
    // Ici, définissez les scripts autorisés
    if (input === "const num = 10;\nconsole.log(num)") {
      return input; // autorise ce script exact
    }
    throw new TypeError(`Script non approuvé bloqué : ${input}`);
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

Ensuite, utilisez l'objet `policy` pour créer un objet `trustedScript` à partir de la chaîne de caractères potentiellement non sécurisée, puis assignez le résultat à l'élément&nbsp;:

```js
// Chaîne potentiellement malveillante
const untrustedScriptOne = "const num = 10;\nconsole.log(num)";

// Crée une instance de TrustedScript en utilisant la politique
const trustedScript = policy.createScript(untrustedScriptOne);

// Injecte le TrustedScript (qui contient une chaîne de caractères approuvée)
el.textContent = trustedScript;
```

### Comparaison entre `textContent`, `text` et `innerText`

Cet exemple montre qu'affecter un script à chacune des propriétés textuelles, comme `textContent`, donne la même valeur lue depuis toutes les propriétés textuelles.

Notez que dans ce cas, nous n'utilisons pas la politique pour créer des scripts approuvés (par souci de concision, nous supposerons que les chaînes fournies sont approuvées).

```js
// Affecte la propriété textContent
el.textContent = "console.log(10);";

console.log(`textContent: ${el.textContent}`);
// "textContent: console.log(10);"

console.log(`text: ${el.text}`);
// "text: console.log(10);"

console.log(`innerText: ${el.innerText}`);
// "innerText: console.log(10);"

// Affecte la propriété text
el.text = "const num = 10;\nconsole.log(num)";

console.log(`textContent: ${el.textContent}`);
// textContent: const num = 10; console.log(num)"

console.log(`text: ${el.text}`);
// "text: const num = 10; console.log(num)"

console.log(`innerText: ${el.innerText}`);
// "innerText: const num = 10; console.log(num)"

// Affecte la propriété innerText
el.innerText = "const num = 10;alert('Aide')";

console.log(`textContent: ${el.textContent}`);
// textContent: const num = 10;alert('Aide')"

console.log(`text: ${el.text}`);
// "text: const num = 10;alert('Aide')"

console.log(`innerText: ${el.innerText}`);
// "innerText: const num = 10;alert('Aide')"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLScriptElement.text", "text")}}
- La propriété {{DOMxRef("HTMLScriptElement.innerText", "innerText")}}

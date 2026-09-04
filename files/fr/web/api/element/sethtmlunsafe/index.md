---
title: "Element : méthode setHTMLUnsafe()"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("DOM")}}

> [!WARNING]
> Cette méthode peut prendre des valeurs d'attribut qui sont analysées comme du HTML, un script ou une URL de script, selon l'attribut.
> Les API de ce type sont connues sous le nom de [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation) et peuvent potentiellement être un vecteur pour des attaques de [script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS), si la valeur provient initialement d'un·e attaquant·e.
>
> Vous pouvez atténuer ce risque en passant toujours des objets `TrustedHTML` au lieu de chaînes de caractères et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance).
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

> [!NOTE]
> {{DOMxRef("Element.setHTML()")}} peut presque toujours être utilisé à la place de cette méthode — sur les navigateurs où il est pris en charge — puisqu'il supprime toujours les entités HTML non sécurisées pour le XSS.

La méthode **`setHTMLUnsafe()`** de l'interface {{DOMxRef("Element")}} est utilisée pour analyser une entrée HTML en un {{DOMxRef("DocumentFragment")}}, en filtrant éventuellement les éléments et attributs indésirables, ainsi que ceux qui n'appartiennent pas au contexte, puis en l'utilisant pour remplacer le sous-arbre de l'élément dans le DOM.

## Syntaxe

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Paramètres

- `input`
  - : Une instance de {{DOMxRef("TrustedHTML")}} ou une chaîne de caractères définissant le HTML à analyser.
- `options` {{Optional_Inline}}
  - : Un objet d'options avec les paramètres optionnels suivants&nbsp;:
    - `sanitizer` {{Optional_Inline}}
      - : Un objet {{DOMxRef("Sanitizer")}} ou {{DOMxRef("SanitizerConfig")}} qui définit quels éléments de l'entrée sont autorisés ou supprimés.
        Il peut également s'agir d'une chaîne de caractères avec la valeur `"default"`, qui applique un `Sanitizer` avec la [configuration de désinfection par défaut](/fr/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) (sécurisée contre le XSS).
        Si aucun n'est défini, aucun désinfecteur n'est utilisé.

        Notez que si vous utilisez la même configuration plusieurs fois, il est généralement plus efficace d'utiliser un `Sanitizer` et de le modifier lorsque vous en avez besoin.

### Valeur de retour

Aucune (`undefined`).

### Exceptions

- `TypeError`
  - : Ceci est levé si&nbsp;:
    - `input` reçoit une chaîne de caractères alors que les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont [appliqués par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) et qu'aucune politique par défaut n'est définie.
    - `options.sanitizer` reçoit&nbsp;:
      - {{DOMxRef("SanitizerConfig")}} qui n'est pas [valide](/fr/docs/Web/API/SanitizerConfig#configuration_valide).
        Par exemple, une configuration qui inclut à la fois les paramètres de configuration «&nbsp;allowed&nbsp;» et «&nbsp;removed&nbsp;».
      - une chaîne de caractères qui n'a pas la valeur `"default"`.
      - une valeur qui n'est ni un {{DOMxRef("Sanitizer")}}, ni un {{DOMxRef("SanitizerConfig")}}, ni une chaîne de caractères.

## Description

La méthode **`setHTMLUnsafe()`** est utilisée pour analyser une entrée HTML en un {{DOMxRef("DocumentFragment")}}, en filtrant éventuellement les éléments et attributs indésirables, ainsi que ceux qui n'appartiennent pas au contexte, puis en l'utilisant pour remplacer le sous-arbre de l'élément dans le DOM.

Contrairement à {{DOMxRef("Element.innerHTML")}}, les [racines d'ombre déclaratives](/fr/docs/Web/HTML/Reference/Elements/template#dom_dombre_déclaratif) dans l'entrée sont analysées dans le DOM.
Si la chaîne de caractères HTML définit plus d'une [racine d'ombre déclarative](/fr/docs/Web/HTML/Reference/Elements/template#dom_dombre_déclaratif) dans un hôte d'ombre particulier, seule la première {{DOMxRef("ShadowRoot")}} est créée — les déclarations suivantes sont analysées comme des éléments `<template>` dans cette racine d'ombre.

`setHTMLUnsafe()` ne réalise aucun assainissement par défaut.
Si aucun désinfecteur n'est passé en paramètre, toutes les entités HTML de l'entrée sont injectées.
Il est donc potentiellement encore moins sûr que {{DOMxRef("Element.innerHTML")}}, qui désactive l'exécution de {{HTMLElement("script")}} lors de l'analyse.

### Considérations de sécurité

Le suffixe «&nbsp;Unsafe&nbsp;» dans le nom de la méthode indique qu'elle n'impose pas la suppression de toutes les entités HTML dangereuses pour le XSS, contrairement à {{DOMxRef("Element.setHTML()")}}.
Bien qu'elle puisse le faire si elle utilise un assainisseur approprié, elle n'est pas obligée d'utiliser un assainisseur efficace, ni même un assainisseur quelconque&nbsp;!
La méthode peut donc être un vecteur pour des attaques de [script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS), au cours desquelles des chaînes de caractères potentiellement dangereuses fournies par une personne sont injectées dans le DOM sans être préalablement assainies.

Vous devez atténuer ce risque en transmettant toujours des objets {{DOMxRef("TrustedHTML")}} plutôt que des chaînes de caractères et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) avec la directive CSP {{CSP("require-trusted-types-for")}}.
Cela garantit que l'entrée passe par une fonction de transformation qui peut [assainir](/fr/docs/Web/Security/Attacks/XSS#assainissement) l'entrée afin de supprimer les balises potentiellement dangereuses, comme les éléments HTML {{HTMLElement("script")}} et les attributs de gestionnaires d'évènements, avant son injection.

L'utilisation de `TrustedHTML` permet d'auditer et de vérifier l'efficacité du code d'assainissement à quelques endroits seulement, plutôt que de le disperser dans tous vos points d'injection.
Vous n'avez pas à transmettre un assainisseur à la méthode lorsque vous utilisez `TrustedHTML`.

Si, pour une raison quelconque, vous ne pouvez pas utiliser `TrustedHTML` (ou, mieux encore, `setHTML()`), l'option suivante la plus sûre consiste à utiliser `setHTMLUnsafe()` avec la [configuration de désinfection par défaut](/fr/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).

### Quand `setHTMLUnsafe()` peut-il être utilisé ?

`setHTMLUnsafe()` ne doit presque jamais être utilisée si {{DOMxRef("Element.setHTML()")}} est disponible, car il existe très peu de cas, voire aucun, où une entrée HTML fournie par une personne inclut des éléments dangereux pour le XSS.
`setHTML()` est non seulement sûre, mais elle évite aussi d'avoir à prendre en compte les types de confiance.

L'utilisation de `setHTMLUnsafe()` peut être appropriée dans les cas suivants&nbsp;:

- Vous ne pouvez pas utiliser `setHTML()` ou les types de confiance, pour une raison quelconque, et vous voulez appliquer le filtrage le plus sûr possible.
  Dans ce cas, vous pouvez utiliser `setHTMLUnsafe()` avec {{DOMxRef("Sanitizer")}} par défaut pour filtrer tous les éléments dangereux pour le XSS.
- Vous ne pouvez pas utiliser `setHTML()` et l'entrée peut contenir des racines d'ombre déclaratives, de sorte que vous ne pouvez pas utiliser {{DOMxRef("Element.innerHTML")}}.
- Vous devez traiter un cas particulier où vous devez autoriser une entrée HTML qui contient un ensemble connu d'entités HTML dangereuses.

  Vous ne pouvez pas utiliser `setHTML()` dans ce cas, car elle supprime toutes les entités dangereuses.
  Vous pouvez utiliser `setHTMLUnsafe()` sans assainisseur ou `innerHTML`, mais cela autorise toutes les entités dangereuses.

  Une meilleure option consiste ici à appeler `setHTMLUnsafe()` avec un assainisseur qui autorise uniquement les éléments et attributs dangereux dont vous avez réellement besoin.
  Bien que cette solution reste dangereuse, elle est plus sûre que de tous les autoriser.

Pour le dernier point, imaginez une situation où votre code dépend de la possibilité d'utiliser des gestionnaires `onclick` dangereux.
Le code suivant montre l'effet des différentes méthodes et des différents assainisseurs dans ce cas.

```js
const cible = document.querySelector("#cible");

const champ = "<img src=x onclick=alert('onclick') onerror=alert('onerror')>";

// Sûr — supprime toutes les entités non sécurisées pour le XSS.
cible.setHTML(champ);

// Ne supprime aucun attribut de gestionnaire d'évènements
cible.setHTMLUnsafe(champ);
cible.innerHTML = champ;

// Sûr — supprime toutes les entités non sécurisées pour le XSS.
const configurationSure = new Sanitizer();
cible.setHTMLUnsafe(champ, { sanitizer: configurationSure });

// Supprime toutes les entités non sécurisées pour le XSS sauf `onclick`
const configurationMoinsSure = new Sanitizer();
configurationMoinsSure.allowAttribute("onclick");
cible.setHTMLUnsafe(champ, { sanitizer: configurationMoinsSure });
```

## Exemples

### Utiliser setHTMLUnsafe() avec les types de confiance

Pour atténuer le risque de XSS, nous créons d'abord un objet `TrustedHTML` à partir de la chaîne de caractères contenant le HTML, puis nous transmettons cet objet à `setHTMLUnsafe()`.
Comme les types de confiance ne sont pas encore pris en charge par tous les navigateurs, nous définissons la [prothèse minimale des types de confiance](/fr/docs/Web/API/Trusted_Types_API#petite_prothèse_démulation_des_types_de_confiance).
Elle remplace de manière transparente l'API JavaScript des types de confiance&nbsp;:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, regles) => regles };
```

Nous créons ensuite une politique {{DOMxRef("TrustedTypePolicy")}} qui définit un {{DOMxRef("TrustedTypePolicy/createHTML", "createHTML()")}} pour transformer une chaîne de caractères d'entrée en instances de {{DOMxRef("TrustedHTML")}}.
Les implémentations de `createHTML()` utilisent généralement une bibliothèque telle que [DOMPurify <sup>(angl.)</sup>](https://github.com/cure53/DOMPurify) pour assainir l'entrée comme suit&nbsp;:

```js
const politique = trustedTypes.createPolicy("ma-politique", {
  createHTML: (entree) => DOMPurify.sanitize(entree),
});
```

Nous utilisons ensuite cet objet `politique` pour créer un objet `TrustedHTML` à partir de la chaîne de caractères d'entrée potentiellement dangereuse&nbsp;:

```js
// La chaîne de caractères potentiellement malveillante
const chaineNonFiable = "abc <script>alert(1)<" + "/script> def";
// Crée une instance de TrustedHTML avec la politique
const htmlDeConfiance = politique.createHTML(chaineNonFiable);
```

Maintenant que nous avons `htmlDeConfiance`, le code ci-dessous montre comment l'utiliser avec `setHTMLUnsafe()`.
L'entrée est passée par la fonction de transformation, nous ne transmettons donc pas d'assainisseur à la méthode.

```js
// Obtient l'élément cible dont l'identifiant est "cible"
const cible = document.getElementById("cible");

// setHTMLUnsafe() sans assainisseur
cible.setHTMLUnsafe(htmlDeConfiance);
```

### Utiliser `setHTMLUnsafe()` sans les types de confiance

Cet exemple montre le cas où nous n'utilisons pas les types de confiance et où nous transmettons donc des arguments d'assainissement.

Le code crée une chaîne de caractères non fiable et montre plusieurs façons de transmettre un assainisseur à la méthode.

```js
// La chaîne de caractères potentiellement malveillante
const chaineMalveillante = "abc <script>alert(1)<" + "/script> def";

// Obtient l'élément cible dont l'identifiant est "cible"
const cible = document.getElementById("cible");

// Définit un assainisseur personnalisé et l'utiliser dans setHTMLUnsafe()
// Cela autorise uniquement les éléments suivants : div, p, button, script
const assainisseur1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
cible.setHTMLUnsafe(chaineMalveillante, { sanitizer: assainisseur1 });

// Définit un SanitizerConfig personnalisé dans setHTMLUnsafe()
// Supprime l'élément <script>, mais autorise les autres entités potentiellement dangereuses.
cible.setHTMLUnsafe(chaineMalveillante, {
  sanitizer: { removeElements: ["script"] },
});
```

### Exemple interactif de `setHTMLUnsafe()`

Cet exemple fournit une démonstration «&nbsp;interactive&nbsp;» de la méthode appelée avec différents assainisseurs.
Le code définit des boutons sur lesquels vous pouvez cliquer pour injecter une chaîne de caractères HTML.
Un bouton injecte le HTML sans l'assainir, tandis que le second utilise un assainisseur personnalisé qui autorise les éléments `<script>` mais pas les autres éléments dangereux.
La chaîne de caractères originale et le HTML injecté sont consignés afin que vous puissiez examiner les résultats dans chaque cas.

> [!NOTE]
> Comme nous voulons montrer comment l'argument d'assainisseur est utilisé, le code suivant injecte une chaîne de caractères plutôt qu'un type de confiance.
> Vous ne devez pas faire cela dans du code de production.

#### HTML

Le HTML définit deux éléments HTML {{HTMLElement("button")}} pour appeler la méthode avec différents assainisseurs, un autre bouton pour réinitialiser l'exemple et un élément HTML {{HTMLElement("div")}} dans lequel injecter la chaîne de caractères.

```html
<button id="boutonPasAssainisseur" type="button">Aucun</button>
<button id="boutonAllowScript" type="button">allowScript</button>

<button id="recharger" type="button">Recharger</button>
<div id="cible">Contenu original de l'élément cible</div>
```

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 320px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  margin: 5px;
}
```

#### JavaScript

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.textContent += texte;
}
```

```js hidden
if ("Sanitizer" in window) {
```

Nous définissons d'abord la chaîne de caractères à assainir, qui est la même dans tous les cas.
Elle contient l'élément HTML {{HTMLElement("script")}} et le gestionnaire `onclick`, tous deux considérés comme dangereux pour le XSS.
Nous définissons également le gestionnaire du bouton de rechargement.

```js
// Définit une chaîne de caractères HTML dangereuse
const chaineNonAssainie = `
  <div>
    <p>Paragraphe à injecter dans le DOM d'ombre.
      <button onclick="alert('Vous avez cliqué sur le bouton !')">Cliquez ici</button>
    </p>
    <script src="path/to/a/module.js" type="module"><\/script>
    <p data-id="123">Paragraphe avec un attribut <code>data-</code></p>
  </div>
`;

const recharger = document.querySelector("#recharger");
recharger.addEventListener("click", () => document.location.reload());
```

Nous définissons ensuite le gestionnaire de clic du bouton qui définit le HTML sans assainisseur.
En général, nous nous attendons à ce que la méthode supprime de la chaîne de caractères les éléments qui ne sont pas autorisés dans le contexte, comme les éléments propres aux tableaux dans un élément `<div>`, mais qu'elle corresponde sinon à la chaîne de caractères d'entrée.
Dans ce cas, les chaînes de caractères correspondent.

```js
const boutonPasAssainisseur = document.querySelector("#boutonPasAssainisseur");
boutonPasAssainisseur.addEventListener("click", () => {
  // Définit le HTML dangereux sans définir d'assainisseur
  cible.setHTMLUnsafe(chaineNonAssainie);

  // Journalise le HTML avant l'assainissement et après l'injection
  elementJournal.textContent =
    "Aucun assainisseur : la chaîne de caractères doit être injectée sans filtrage\n\n";
  journaliser(`\nchaîne de caractères non assainie : ${chaineNonAssainie}`);
  journaliser(`\n\nchaîne de caractères assainie : ${cible.innerHTML}`);
});
```

Le gestionnaire de clic suivant définit le HTML cible à l'aide d'un assainisseur personnalisé qui autorise uniquement les éléments HTML {{HTMLElement("div")}}, {{HTMLElement("p")}} et {{HTMLElement("script")}}.
Notez que, comme nous utilisons la méthode `setHTMLUnsafe()`, les éléments `<script>` ne sont pas supprimés&nbsp;!

```js
const boutonAutoriserScripts = document.querySelector(
  "#boutonAutoriserScripts",
);
boutonAutoriserScripts.addEventListener("click", () => {
  // Définit le contenu de l'élément avec un assainisseur personnalisé
  const assainisseur1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  cible.setHTMLUnsafe(chaineNonAssainie, { sanitizer: assainisseur1 });

  // Journalise le HTML avant l'assainissement et après l'injection
  elementJournal.textContent =
    "Assainisseur : {elements: ['div', 'p', 'script']}\n";
  journaliser(`\nchaîne de caractères non assainie : ${chaineNonAssainie}`);
  journaliser(`\n\nchaîne de caractères assainie : ${cible.innerHTML}`);
});
```

```js hidden
} else {
  journaliser("L'API HTML Sanitizer n'est PAS prise en charge par ce navigateur.");
  // Fournit un comportement de remplacement ou une solution alternative
}
```

#### Résultats

Cliquez sur les boutons «&nbsp;Aucun&nbsp;» et «&nbsp;allowScript&nbsp;» pour voir respectivement les effets de l'absence d'assainisseur et d'un assainisseur personnalisé.

Lorsque vous cliquez sur le bouton «&nbsp;Aucun&nbsp;», vous constatez que l'entrée et la sortie correspondent, car aucun assainisseur n'est appliqué.
Lorsque vous cliquez sur le bouton «&nbsp;allowScript&nbsp;», l'élément `<script>` est toujours présent, mais l'élément `<button>` est supprimé.
Cette approche vous permet de créer du HTML sûr, mais ne vous y oblige pas.

{{EmbedLiveSample("Exemple interactif de `setHTMLUnsafe()`", 100, 450)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("ShadowRoot.setHTMLUnsafe()")}}
- La propriété {{DOMxRef("Element.innerHTML")}}
- Les méthodes {{DOMxRef("Document.parseHTML_static", "Document.parseHTML()")}} et {{DOMxRef("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}

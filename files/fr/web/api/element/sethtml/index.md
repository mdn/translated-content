---
title: "Element : méthode setHTML()"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("HTML Sanitizer API")}}

La méthode **`setHTML()`** de l'interface {{DOMxRef("Element")}} fournit une méthode sécurisée contre les XSS pour analyser et assainir une chaîne de caractères HTML et l'insérer dans le DOM en tant que sous-arbre de l'élément.

La méthode supprime tous les éléments et attributs considérés comme dangereux pour les XSS, même s'ils sont autorisés par un assainisseur passé en paramètre.
Notamment, les éléments suivants sont toujours supprimés&nbsp;: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}}, et les attributs de gestionnaire d'évènements.

Il est recommandé (si pris en charge) comme remplacement direct de {{DOMxRef("Element.innerHTML")}} lors de la définition d'une chaîne de caractères HTML fournie par l'utilisateur·ice.

## Syntaxe

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Paramètres

- `input`
  - : Une chaîne de caractères définissant le HTML à assainir et à injecter dans l'élément.
- `options` {{Optional_Inline}}
  - : Un objet d'options avec les paramètres optionnels suivants&nbsp;:
    - `sanitizer`
      - : Un objet {{DOMxRef("Sanitizer")}} ou {{DOMxRef("SanitizerConfig")}} qui définit quels éléments de l'entrée sont autorisés ou supprimés, ou la chaîne de caractères `"default"` pour la configuration par défaut.
        La méthode supprime tous les éléments et attributs considérés comme dangereux pour les XSS, même s'ils sont autorisés par l'assainisseur.
        Si non défini, la [configuration par défaut de l'assainisseur](/fr/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) est utilisée.

        Notez que si vous utilisez la même configuration plusieurs fois, il est prévu qu'il soit plus efficace d'utiliser un `Sanitizer` et de le modifier lorsque vous en avez besoin.

### Valeur de retour

Aucune (`undefined`).

### Exceptions

- `TypeError`
  - : C'est levé si `options.sanitizer` reçoit&nbsp;:
    - {{DOMxRef("SanitizerConfig")}} qui n'est pas [valide](/fr/docs/Web/API/SanitizerConfig#configuration_valide).
      Par exemple, une configuration qui inclut à la fois les paramètres de configuration «&nbsp;<i lang="en">allowed</i>&nbsp;» et «&nbsp;<i lang="en">removed</i>&nbsp;».
    - une chaîne de caractères qui n'a pas la valeur `"default"`.
    - une valeur qui n'est ni un {{DOMxRef("Sanitizer")}}, ni un {{DOMxRef("SanitizerConfig")}}, ni une chaîne de caractères.

## Description

La méthode **`setHTML()`** fournit une méthode sécurisée contre les XSS pour analyser et assainir une chaîne de caractères HTML en un {{DOMxRef("DocumentFragment")}}, puis l'insérer dans le DOM en tant que sous-arbre de l'élément.

La méthode **`setHTML()`** supprime tous les éléments de la chaîne de caractères HTML qui sont invalides dans le contexte de l'élément actuel, comme un élément HTML {{HTMLElement("col")}} en dehors d'un tableau {{HTMLElement("table")}}.
Elle supprime ensuite toutes les entités HTML qui ne sont pas autorisées par la configuration de l'assainisseur, et supprime en outre tous les éléments ou attributs dangereux pour les XSS — qu'ils soient autorisés ou non par l'assainisseur.

Si aucun assainisseur n'est défini dans le paramètre `options.sanitizer`, **`setHTML()`** utilise la [configuration par défaut de l'assainisseur](/fr/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
Cette configuration convient à la majorité des cas d'utilisation, car elle empêche les attaques XSS, ainsi que d'autres attaques comme l'usurpation de clics et l'usurpation d'identité.

Un assainisseur `Sanitizer` ou une configuration `SanitizerConfig` personnalisée peut être défini pour choisir quels éléments, attributs et commentaires sont autorisés ou supprimés.
Notez que même si des options non sécurisées sont autorisées par l'assainisseur, elles sont tout de même supprimées lors de l'utilisation de cette méthode (elle supprime les mêmes éléments qu'un assainisseur sur lequel {{DOMxRef("Sanitizer.removeUnsafe()")}} a été appelé).

`setHTML()` peut être utilisé à la place de {{DOMxRef("Element.innerHTML")}} pour insérer des chaînes de caractères HTML non fiables dans un élément.
Il doit également être utilisé à la place de {{DOMxRef("Element.setHTMLUnsafe()")}}, sauf s'il y a un besoin spécifique d'autoriser des éléments et attributs non sécurisés.

Notez que puisque cette méthode assainit toujours les chaînes de caractères HTML contenant des entités non sécurisées pour les XSS, elle n'est pas sécurisée ou validée en utilisant [l'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API).

### Ré-analyse et XSS muté (mXSS)

Même après avoir assaini une entrée HTML avec `setHTML()`, il n'est toujours pas sûr de sérialiser le HTML et de le réanalyser en utilisant `innerHTML`.
Par exemple, le code suivant est dangereux.

```js example-bad
div.setHTML(chainePotentiellementMalveillante); // sûr
const HTMLserialise = div.innerHTML; // N'est plus assaini !
autreElement.innerHTML = HTMLserialise;
```

La raison en est que l'assainissement est contextuel.
Lorsque vous appelez `setHTML()` sur un élément particulier, les éléments et attributs non sécurisés pour ce contexte sont supprimés.
Si vous sérialisez le HTML et l'utilisez directement dans un autre élément, il peut encore contenir des éléments qui sont non sécurisés dans cet élément.

C'est sûr (même si inutile)&nbsp;:

```js example-good
div.setHTML(chainePotentiellementMalveillante); // sûr
const HTMLserialise = div.innerHTML; // Sérialisé en tant que chaîne de caractères simple
autreElement.setHTML(HTMLserialise); // sûr — ré-assaini par setHTML()
```

Il existe une classe d'attaques qui tirent parti de cette faille, appelée [XSS par mutation <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#sanitizer-security-mxss).
La règle simple pour éviter ce problème est de n'injecter des chaînes de caractères HTML qu'en utilisant des méthodes sûres telles que `setHTML()`.

## Exemples

### Utilisation simple

Cet exemple montre certaines des façons dont vous pouvez utiliser `setHTML()` pour assainir et injecter une chaîne de caractères HTML.

```js
// Définit une chaîne de caractères HTML non assainie
const chainePotentiellementMalveillante =
  "abc <script>alert(1)<" + "/script> def";
// Obtient l'élément cible avec l'id "cible"
const cible = document.getElementById("cible");

// setHTML() avec l'assainisseur par défaut
cible.setHTML(chainePotentiellementMalveillante);

// Définit un assainisseur personnalisé et l'utilise dans setHTML()
// Cela n'autorise que les éléments : div, p, button (script est non sécurisé et est supprimé)
const assainisseur1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
cible.setHTML(chainePotentiellementMalveillante, { sanitizer: assainisseur1 });

// Définit une configuration personnalisée de SanitizerConfig dans setHTML()
// Cela supprime les éléments div, p, button, script, et tout autre élément/attribut non sécurisé
cible.setHTML(chainePotentiellementMalveillante, {
  sanitizer: { removeElements: ["div", "p", "button", "script"] },
});
```

### Exemple interactif de `setHTML()`

Cet exemple fournit une démonstration «&nbsp;interactive&nbsp;» de la méthode lorsqu'elle est appelée avec différents assainisseurs.
Le code définit des boutons sur lesquels vous pouvez cliquer pour assainir et injecter une chaîne de caractères HTML en utilisant respectivement un assainisseur par défaut et un assainisseur personnalisé.
La chaîne de caractères originale et le HTML assaini sont enregistrés afin que vous puissiez inspecter les résultats dans chaque cas.

#### HTML

Le HTML définit deux éléments HTML {{HTMLElement("button")}} pour appliquer différents assainisseurs, un autre bouton pour réinitialiser l'exemple, et un élément HTML {{HTMLElement("div")}} pour injecter la chaîne de caractères.

```html
<button id="boutonParDefaut" type="button">Défaut</button>
<button id="boutonAutoriserScript" type="button">allowScript</button>

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

Tout d'abord, nous définissons la chaîne de caractères à assainir, qui est la même pour tous les cas.
Celle-ci contient l'élément HTML {{HTMLElement("script")}} et le gestionnaire `onclick`, tous deux considérés comme non sécurisés pour les XSS.
Nous définissons également le gestionnaire pour le bouton de rechargement.

```js
// Définit une chaîne de caractères HTML non assainie
const chainePotentiellementMalveillante = `
  <div>
    <p>Paragraphe à injecter dans le DOM d'ombre.
      <button onclick="alert('Vous avez cliqué sur le bouton !')">Cliquez sur moi</button>
    </p>
    <script src="path/to/a/module.js" type="module"><\/script>
    <p data-id="123">Paragraphe avec l'attribut <code>data-</code></p>
  </div>
`;

const recharger = document.querySelector("#recharger");
recharger.addEventListener("click", () => document.location.reload());
```

Ensuite, nous définissons le gestionnaire de clic pour le bouton qui définit le HTML avec l'assainisseur par défaut.
Cela doit supprimer toutes les entités non sécurisées avant d'insérer la chaîne de caractères HTML.
Notez que vous pouvez voir exactement quels éléments sont supprimés dans les [exemples du constructeur `Sanitizer()`](/fr/docs/Web/API/Sanitizer/Sanitizer#créer_lassainisseur_par_défaut).

```js
const boutonAssainisseurParDefaut = document.querySelector("#boutonParDefaut");
boutonAssainisseurParDefaut.addEventListener("click", () => {
  // Définit le contenu de l'élément en utilisant l'assainisseur par défaut
  cible.setHTML(chainePotentiellementMalveillante);

  // Journalise le HTML avant l'assainissement et après son injection
  elementJournal.textContent =
    "Assainisseur par défaut : suppression de l'élément script, de l'attribut onclick, de l'attribut data-\n\n";
  journaliser(`\nnon assaini : ${chainePotentiellementMalveillante}`);
  journaliser(`\n\nassaini : ${cible.innerHTML}`);
});
```

Le gestionnaire du clic suivant définit le HTML cible avec un assainisseur personnalisé qui autorise uniquement les éléments HTML {{HTMLElement("div")}}, {{HTMLElement("p")}} et {{HTMLElement("script")}}.
Notez que puisque nous utilisons la méthode `setHTML`, `<script>` est également supprimé&nbsp;!

```js
const boutonAutoriserScript = document.querySelector("#boutonAutoriserScript");
boutonAutoriserScript.addEventListener("click", () => {
  // Définit le contenu de l'élément avec un assainisseur personnalisé
  const assainisseur1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  cible.setHTML(chainePotentiellementMalveillante, {
    sanitizer: assainisseur1,
  });

  // Journalise le HTML avant l'assainissement et après son injection
  elementJournal.textContent =
    "Assainisseur : {elements: ['div', 'p', 'script']}\n Élément script supprimé malgré son autorisation\n";
  journaliser(`\nnon assaini : ${chainePotentiellementMalveillante}`);
  journaliser(`\n\nassaini : ${cible.innerHTML}`);
});
```

```js hidden
} else {
  journaliser("L'API HTML Sanitizer n'est PAS prise en charge par ce navigateur.");
  // Fournit un comportement de remplacement ou une solution alternative
}
```

#### Résultats

Cliquez sur les boutons «&nbsp;Défaut&nbsp;» et «&nbsp;allowScript&nbsp;» pour voir respectivement les effets de l'assainisseur par défaut et de l'assainisseur personnalisé.

Notez que puisque nous utilisons une méthode d'assainissement sûre, l'élément `<script>` et le gestionnaire `onclick` sont supprimés dans les deux cas, même si l'assainisseur les autorise explicitement.
Cependant, l'attribut `data-` est supprimé avec l'assainisseur par défaut, mais il est autorisé lorsque nous transmettons un assainisseur.

{{EmbedLiveSample("Exemple interactif de `setHTML()`", 100, 450)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.setHTMLUnsafe()")}}
- Les méthodes {{DOMxRef("ShadowRoot.setHTML()")}} et {{DOMxRef("ShadowRoot.setHTMLUnsafe()")}}
- Les méthodes {{DOMxRef("Document.parseHTML_static", "Document.parseHTML()")}} et {{DOMxRef("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- [L'API HTML Sanitizer](/fr/docs/Web/API/HTML_Sanitizer_API)

---
title: "Element : méthode insertAdjacentHTML()"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOM")}}

> [!WARNING]
> Cette méthode analyse son entrée en tant que HTML ou XML, écrivant le résultat dans le DOM.
> Les API de ce type sont connues sous le nom de [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation) et constituent potentiellement un vecteur pour les attaques de [scripts inter-sites (XSS)](/fr/docs/Web/Security/Attacks/XSS), si l'entrée provient à l'origine d'un·e attaquant·e.
>
> Vous pouvez réduire le risque en assignant des objets {{DOMxRef("TrustedHTML")}} au lieu de chaînes de caractères, et en [appliquant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_les_types_de_confiance) en utilisant la directive CSP {{CSP("require-trusted-types-for")}}.
> Cela garantit que l'entrée est passée par une fonction de transformation, qui a la possibilité [d'assainir](/fr/docs/Web/Security/Attacks/XSS#assainissement) l'entrée pour supprimer les balises potentiellement dangereuses, telles que les éléments HTML {{HTMLElement("script")}} et les attributs de gestionnaire d'évènements.

La méthode **`insertAdjacentHTML()`** de l'interface {{DOMxRef("Element")}} analyse l'entrée définie en tant que HTML ou XML et insère les nœuds résultants dans l'arbre DOM à une position définie.

## Syntaxe

```js-nolint
insertAdjacentHTML(position, input)
```

### Paramètres

- `position`
  - : Une chaîne de caractères représentant la position relative à l'élément. Doit être l'une des chaînes de caractères suivantes&nbsp;:
    - `"beforebegin"`
      - : Avant l'élément. Valide uniquement si l'élément est dans l'arbre DOM et a un élément parent.
    - `"afterbegin"`
      - : Juste à l'intérieur de l'élément, avant son premier enfant.
    - `"beforeend"`
      - : Juste à l'intérieur de l'élément, après son dernier enfant.
    - `"afterend"`
      - : Après l'élément. Valide uniquement si l'élément est dans l'arbre DOM et a un élément parent.
- `input`
  - : Une instance de {{DOMxRef("TrustedHTML")}} ou une chaîne de caractères définissant le HTML ou XML à analyser.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

Cette méthode peut lever une {{DOMxRef("DOMException")}} de l'un des types suivants&nbsp;:

- `NoModificationAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si `position` est `"beforebegin"` ou `"afterend"` et que l'élément n'a pas de parent ou que son parent est l'objet `Document`.
- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - `position` n'est pas l'une des quatre valeurs listées.
    - L'entrée est du XML qui n'est pas bien formé.
- `TypeError`
  - : Levée si la propriété est définie sur une chaîne de caractères lorsque les [Trusted Types](/fr/docs/Web/API/Trusted_Types_API) sont [appliqués par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_les_types_de_confiance) et qu'aucune politique par défaut n'est définie.

## Description

La méthode `insertAdjacentHTML()` ne réanalyse pas l'élément sur lequel elle est utilisée, et ne corrompt donc pas les éléments existants à l'intérieur de cet élément. Cela évite l'étape supplémentaire de sérialisation, ce qui la rend beaucoup plus rapide que la manipulation directe de {{DOMxRef("Element.innerHTML", "innerHTML")}}.

Lorsque `<p>` est l'élément, nous pouvons visualiser les positions possibles pour le contenu inséré "toto" comme suit&nbsp;:

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  toto
  <!-- beforeend -->
</p>
<!-- afterend -->
```

La méthode ne prévoit aucun traitement particulier pour les éléments {{HTMLElement("template")}}.
Dans la plupart des cas, les développeur·euse·s doivent utiliser la fonction `insertAdjacentHTML()` sur la propriété {{DOMxRef("HTMLTemplateElement/content","content")}} du modèle, plutôt que de manipuler directement les nœuds enfants d'un élément de modèle.

### Considérations de sécurité

La méthode n'effectue aucun assainissement visant à supprimer les éléments présentant un risque de XSS, tels que {{HTMLElement("script")}} ou les attributs de contenu des gestionnaires d'évènements.

Lorsque vous insérez du code HTML dans une page à l'aide de `insertAdjacentHTML()`, vous devez passer des objets {{DOMxRef("TrustedHTML")}} plutôt que des chaînes de caractères, et [imposer des types fiables](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_les_types_de_confiance) à l'aide de la directive CSP {{CSP("require-trusted-types-for")}}.
Cela garantit que les données sont transmises par une fonction de transformation, qui a la possibilité [d'assainir](/fr/docs/Web/Security/Attacks/XSS#assainissement) les données afin de supprimer tout balisage potentiellement dangereux avant leur injection.

La méthode {{DOMxRef("Element.insertAdjacentText()")}} ou {{DOMxRef("Node.textContent")}} doit être utilisée lorsque vous savez que le contenu fourni par l'utilisateur·ice doit être du texte brut.
Cela permet d'insérer les données sous forme de texte brut au lieu de les analyser en HTML.

## Exemples

### Insérer du HTML

Cet exemple démontre les quatre positions d'insertion.
Tout le texte inséré est en gras, tandis que le texte inséré à l'intérieur de l'élément est en plus mis en forme en monotype rouge (code).

#### HTML

```html
<select id="position">
  <option>beforebegin</option>
  <option>afterbegin</option>
  <option>beforeend</option>
  <option>afterend</option>
</select>

<button id="inserer">Insérer du HTML</button>
<button id="reinitialiser">Réinitialiser</button>

<p>
  Du texte, avec un <code id="sujet">élément mis en forme en code</code>
  à l'intérieur.
</p>
```

#### CSS

```css
code {
  color: red;
}
```

#### JavaScript

Les types de confiance ne sont pas pris en charge par tous les navigateurs, nous allons donc commencer par définir une [prothèse d'émulation des types de confiance](/fr/docs/Web/API/Trusted_Types_API#petite_prothèse_démulation_des_types_de_confiance).
Celle-ci sert de remplacement transparent à l'API JavaScript des types de confiance&nbsp;:

```js
if (typeof typesDeConfiance === "undefined")
  typesDeConfiance = { createPolicy: (n, regles) => regles };
```

Ensuite, nous définissons une politique nommée `contenu-de-la-politique` pour créer des objets {{DOMxRef("TrustedHTML")}} à partir de l'entrée (nous devons également appliquer la `contenu-de-la-politique` en utilisant CSP).
Le code implémente une politique sans effet afin de permettre à cet exemple de fonctionner sans dépendance tierce.
Votre propre code applicatif doit utiliser une bibliothèque tierce telle que la bibliothèque «&nbsp;DOMPurify&nbsp;» pour retourner un contenu assaini à partir de l'entrée non fiable.

```js
const politique = trustedTypes.createPolicy("contenu-de-la-politique", {
  createHTML(input) {
    return input; // Ne faites pas cela dans votre propre code !
    // À la place, faites quelque chose comme :
    // return DOMPurify.sanitize(input);
  },
});

const texteNonSecure = "<strong>texte inséré</strong>";
const HTMLDeConfiance = politique.createHTML(texteNonSecure);
```

Le code restant insère le HTML de confiance à la position sélectionnée par rapport à l'élément ayant l'id `sujet`.

```js
const inserer = document.querySelector("#inserer");
inserer.addEventListener("click", () => {
  const sujet = document.querySelector("#sujet");
  const positionSelect = document.querySelector("#position");
  sujet.insertAdjacentHTML(positionSelect.value, HTMLDeConfiance);
});

const reinitialiser = document.querySelector("#reinitialiser");
reinitialiser.addEventListener("click", () => {
  document.location.reload();
});
```

#### Résultat

{{EmbedLiveSample("Insérer du HTML", 100, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.insertAdjacentElement()")}}
- La méthode {{DOMxRef("Element.insertAdjacentText()")}}
- L'interface {{DOMxRef("XMLSerializer")}}&nbsp;: Sérialise un arbre DOM en une chaîne de caractères XML
- [L'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API)

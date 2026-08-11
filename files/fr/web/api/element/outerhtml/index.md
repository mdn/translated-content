---
title: "Element : propriété outerHTML"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOM")}}

> [!WARNING]
> Cette propriété analyse son entrée comme du HTML, écrivant le résultat dans le DOM.
> Les API de ce type sont connues sous le nom de [puits d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation), et sont potentiellement un vecteur pour les attaques de [script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS), si l'entrée provient initialement d'un·e attaquant·e.
>
> Vous pouvez atténuer ce risque en attribuant toujours des objets `TrustedHTML` au lieu de chaînes de caractères et en [appliquant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_les_types_de_confiance).
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La propriété **`outerHTML`** de l'interface {{DOMxRef("Element")}} obtient ou définit le code HTML ou XML de l'élément et de ses descendants, en omettant toutes {{Glossary("shadow tree", "racines d'ombre")}} dans les deux cas.

Pour obtenir ou définir le contenu d'un élément, utilisez plutôt la propriété {{DOMxRef("Element.innerHTML", "innerHTML")}}.

## Valeur

L'obtention de cette propriété retourne une chaîne de caractères contenant une sérialisation HTML d'un `element` et de ses descendants.

La définition de cette propriété accepte soit un objet {{DOMxRef("TrustedHTML")}}, soit une chaîne de caractères.
L'entrée est analysée comme du HTML et remplace l'élément et tous ses descendants par le résultat.
Lorsqu'elle est définie sur la valeur `null`, cette valeur `null` est convertie en chaîne de caractères vide (`""`), donc `element.outerHTML = null` est équivalent à `element.outerHTML = ""`.

### Exceptions

- `NoModificationAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si une tentative a été faite pour définir `outerHTML` sur un élément qui est un enfant direct d'un {{DOMxRef("Document")}}, comme {{DOMxRef("Document.documentElement")}}.
- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Levée si une tentative a été faite pour définir `outerHTML` en utilisant une entrée XML qui n'est pas bien formée.
- `TypeError`
  - : Levée si la propriété est définie sur une chaîne de caractères lorsque les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont [imposés par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_les_types_de_confiance) et qu'aucune politique par défaut n'est définie.

## Description

`outerHTML` obtient une sérialisation de l'élément, ou définit du HTML ou XML qui doit être analysé pour le remplacer dans le parent de l'élément.

Si l'élément n'a pas de nœud parent, définir sa propriété `outerHTML` ne le modifie pas, ni ses descendants.
Par exemple&nbsp;:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // sortie : "<div></div>"
```

De plus, bien que l'élément soit remplacé dans le document, la variable dont la propriété `outerHTML` a été définie contient toujours une référence à l'élément original&nbsp;:

```js
const p = document.querySelector("p");
console.log(p.nodeName); // affiche : "P"
p.outerHTML = "<div>Ce div remplace un p.</div>";
console.log(p.nodeName); // toujours "P";
```

### Valeurs d'attribut échappées

La valeur retournée échappe certaines valeurs dans les attributs HTML.
Ici, nous voyons que le caractère `&` est échappé&nbsp;:

```js
const ancre = document.createElement("a");
ancre.href = "https://developer.mozilla.org?a=b&c=d";
console.log(ancre.outerHTML); // sortie : "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
```

Certains navigateurs sérialisent également les caractères `<` et `>` sous forme de `&lt;` et `&gt;` lorsqu'ils apparaissent dans les valeurs d'attribut (voir [Compatibilité des navigateurs](#compatibilité_des_navigateurs)).
Ceci permet de prévenir une vulnérabilité potentielle ([mutation XSS <sup>(angl.)</sup>](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) dans laquelle un·e attaquant·e peut créer une entrée contournant une [fonction d'assainissement](/fr/docs/Web/Security/Attacks/XSS#assainissement), permettant une attaque de type script inter-site (XSS).

### Considérations du DOM d'ombre

La sérialisation de l'arborescence DOM lue à partir de la propriété n'inclut pas les {{Glossary("shadow tree", "racines d'ombre")}}.
Si vous souhaitez obtenir une sérialisation HTML d'un élément incluant les racines d'ombre, vous devez utiliser à la place la méthode {{DOMxRef("Element.getHTML()")}}.
Notez que cela obtient le _contenu_ de l'élément.

De même, lorsque vous définissez le contenu d'un élément en utilisant `outerHTML`, l'entrée HTML est analysée en éléments DOM qui ne contiennent pas de racines d'ombre.
Par exemple, {{HTMLElement("template")}} est analysé en tant que {{DOMxRef("HTMLTemplateElement")}}, que l'attribut [`shadowrootmode`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootmode) soit défini ou non.
Si vous souhaitez définir le _contenu_ d'un élément à partir d'une entrée HTML incluant des racines d'ombre déclaratives, vous devez utiliser à la place {{DOMxRef("Element.setHTMLUnsafe()")}} ou {{DOMxRef("ShadowRoot.setHTMLUnsafe()")}}.

### Considérations de sécurité

La propriété `outerHTML` est un vecteur possible pour les attaques de [script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS), car elle peut être utilisée pour injecter dans le DOM des chaînes de caractères potentiellement non sécurisées fournies par un·e utilisateur·ice.
Bien que la propriété empêche les éléments {{HTMLElement("script")}} de s'exécuter lorsqu'ils sont injectés, elle est susceptible à de nombreuses autres façons dont les attaquant·e·s peuvent créer du HTML pour exécuter du JavaScript malveillant.
Par exemple, l'exemple suivant exécute le code dans le gestionnaire d'évènements `error`, car la valeur `src` de {{HTMLElement("img")}} n'est pas une URL d'image valide&nbsp;:

```js
const nom = "<img src='x' onerror='alert(1)'>";
element.outerHTML = nom; // affiche l'alerte
```

Vous pouvez atténuer ces problèmes en attribuant toujours des objets {{DOMxRef("TrustedHTML")}} au lieu de chaînes de caractères et en [appliquant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_les_types_de_confiance) à l'aide de la directive CSP {{CSP("require-trusted-types-for")}}.
Ceci garantit que l'entrée est passée par une fonction de transformation, qui a la possibilité [d'assainir](/fr/docs/Web/Security/Attacks/XSS#assainissement) l'entrée pour supprimer les balises potentiellement dangereuses avant qu'elles ne soient injectées.

## Exemples

### Obtenir la sérialisation d'un élément

La lecture de `outerHTML` provoque la sérialisation de l'élément par l'agent utilisateur.

Étant donné le HTML suivant&nbsp;:

```html
<div id="exemple">
  <p>Contenu</p>
  <p>Plus élaboré</p>
</div>
```

Vous pouvez obtenir et enregistrer le balisage pour le {{HTMLElement("div")}} comme suit&nbsp;:

```js
const monElement = document.querySelector("#exemple");
const contenu = monElement.outerHTML;
console.log(contenu);
// '<div id="exemple">\n  <p>Contenu</p>\n  <p>Plus élaboré</p>\n</div>'
```

### Remplacer l'élément

Dans cet exemple, nous allons remplacer un élément dans le DOM en attribuant du HTML à la propriété `outerHTML` de l'élément.
Pour atténuer le risque de XSS, nous allons d'abord créer un objet `TrustedHTML` à partir de la chaîne de caractères contenant le HTML, puis attribuer cet objet à `outerHTML`.

Les types de confiance ne sont pas encore pris en charge par tous les navigateurs, nous définissons donc d'abord la [petite prothèse d'émulation des types de confiance](/fr/docs/Web/API/Trusted_Types_API#petite_prothèse_démulation_des_types_de_confiance).
Ceci agit comme un remplacement transparent pour l'API JavaScript Trusted Types&nbsp;:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, regles) => regles };
```

Ensuite, nous créons une {{DOMxRef("TrustedTypePolicy")}} qui définit une {{DOMxRef("TrustedTypePolicy/createHTML", "createHTML()")}} pour transformer une chaîne de caractères d'entrée en instances de {{DOMxRef("TrustedHTML")}}.
Les implémentations courantes de `createHTML()` utilisent une bibliothèque telle que [DOMPurify <sup>(angl.)</sup>](https://github.com/cure53/DOMPurify) pour assainir l'entrée comme indiqué ci-dessous&nbsp;:

```js
const politique = trustedTypes.createPolicy("ma-politique", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Ensuite, nous utilisons cet objet `politique` pour créer un objet `TrustedHTML` à partir de la chaîne de caractères potentiellement non sécurisée, et attribuons le résultat à l'élément&nbsp;:

```js
// La chaîne de caractères potentiellement malveillante
const chaineDeCaraMalveillante =
  "<p>Je pourrais être un XSS</p><img src='x' onerror='alert(1)'>";

// Créez une instance TrustedHTML en utilisant la politique
const HTMLDeConfiance = politique.createHTML(chaineDeCaraMalveillante);

// Injectez le TrustedHTML (qui contient une chaîne de caractères de confiance)
const element = document.querySelector("#conteneur");
element.outerHTML = HTMLDeConfiance; // Remplace l'élément avec l'id "conteneur"

// Notez que le div #conteneur ne fait plus partie de l'arborescence du document,
```

> [!WARNING]
> Bien que vous puissiez attribuer directement une chaîne de caractères à `outerHTML`, cela constitue un [risque de sécurité](#considérations_de_sécurité) si la chaîne de caractères à insérer peut contenir du contenu potentiellement malveillant.
> Vous devez utiliser `TrustedHTML` pour vous assurer que le contenu est assaini avant d'être inséré, et vous devez définir un en-tête CSP pour [imposer les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_les_types_de_confiance).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Sérialisation de l'arborescence DOM en XML ou HTML&nbsp;: {{DOMxRef("XMLSerializer")}}
- Analyse XML ou HTML dans l'arborescence DOM&nbsp;: {{DOMxRef("DOMParser")}}
- La propriété {{DOMxRef("HTMLElement.outerText")}}

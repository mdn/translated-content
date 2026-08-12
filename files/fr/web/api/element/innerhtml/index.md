---
title: "Element : propriété innerHTML"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOM")}}

> [!WARNING]
> Cette propriété analyse son entrée comme du HTML, écrivant le résultat dans le DOM.
> Les API de ce type sont connues sous le nom de [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation), et sont potentiellement un vecteur pour des attaques de [script inter-sites (XSS)](/fr/docs/Web/Security/Attacks/XSS), si l'entrée provient à l'origine d'un·e attaquant·e.
>
> Vous pouvez atténuer ce risque en assignant toujours des objets `TrustedHTML` au lieu de chaînes de caractères et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_les_types_de_confiance).
> Consultez la section [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La propriété **`innerHTML`** de l'interface {{DOMxRef("Element")}} obtient ou définit le balisage HTML ou XML contenu dans l'élément, en omettant toute {{Glossary("shadow tree", "racines d'ombre")}} dans les deux cas.

Pour insérer le HTML dans le document plutôt que de remplacer le contenu d'un élément, utilisez la méthode {{DOMxRef("Element.insertAdjacentHTML", "insertAdjacentHTML()")}}.

### Valeur

La lecture de la propriété retourne une chaîne de caractères contenant la sérialisation HTML des descendants de l'élément.

La définition de la propriété accepte soit un objet {{DOMxRef("TrustedHTML")}}, soit une chaîne de caractères. Elle analyse cette valeur comme du HTML et remplace tous les descendants de l'élément par le résultat.
Lorsqu'elle est définie sur la valeur `null`, cette valeur `null` est convertie en chaîne de caractères vide (`""`), donc `elt.innerHTML = null` est équivalent à `elt.innerHTML = ""`.

### Exceptions

- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Levé si une tentative a été faite de définir la valeur de `innerHTML` en utilisant une chaîne de caractères qui n'est pas correctement formée HTML.
- `TypeError`
  - : Levé si la propriété est définie sur une chaîne de caractères lorsque les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont [appliqués par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_les_types_de_confiance) et qu'aucune politique par défaut n'est définie.
- `NoModificationAllowedError` {{DOMxRef("DOMException")}}
  - : Levé si une tentative a été faite d'insérer le code HTML dans un nœud dont le parent est un {{DOMxRef("Document")}}.

## Description

`innerHTML` obtient une sérialisation des éléments DOM enfants imbriqués dans l'élément, ou définit du HTML ou XML qui doit être analysé pour remplacer l'arbre DOM à l'intérieur de l'élément.

Notez que certains navigateurs sérialisent les caractères `<` et `>` en tant que `&lt;` et `&gt;` lorsqu'ils apparaissent dans les valeurs d'attribut (voir [Compatibilité des navigateurs](#compatibilité_des_navigateurs)).
Ceci est pour prévenir une vulnérabilité de sécurité potentielle ([mutation XSS <sup>(angl.)</sup>](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) dans laquelle un·e attaquant·e peut créer une entrée qui contourne une [fonction d'assainissement](/fr/docs/Web/Security/Attacks/XSS#assainissement), permettant une attaque de type script inter-sites (XSS).

### Considérations sur le DOM d'ombre

La sérialisation de l'arbre DOM lu à partir de la propriété n'inclut pas les {{Glossary("shadow tree", "racines d'ombre")}} — si vous voulez obtenir une chaîne de caractères HTML qui inclut les racines d'ombre, vous devez utiliser à la place les méthodes {{DOMxRef("Element.getHTML()")}} ou {{DOMxRef("ShadowRoot.getHTML()")}}.

De même, lorsque vous définissez le contenu d'un élément en utilisant `innerHTML`, la chaîne de caractères HTML est analysée en éléments DOM qui ne contiennent pas de racines d'ombre.
Ainsi, par exemple, {{HTMLElement("template")}} est analysé en tant que {{DOMxRef("HTMLTemplateElement")}}, que l'attribut [`shadowrootmode`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootmode) soit défini ou non.
Pour définir le contenu d'un élément à partir d'une chaîne de caractères HTML qui inclut des racines d'ombre déclaratives, vous devez utiliser à la place {{DOMxRef("Element.setHTMLUnsafe()")}} ou {{DOMxRef("ShadowRoot.setHTMLUnsafe()")}}.

### Considérations de sécurité

La propriété `innerHTML` est probablement le vecteur le plus courant pour les attaques de [script inter-sites (XSS)](/fr/docs/Web/Security/Attacks/XSS), où des chaînes de caractères potentiellement non sécurisées fournies par un·e utilisateur·ice sont injectées dans le DOM sans être d'abord assainies.
Bien que la propriété empêche les éléments {{HTMLElement("script")}} de s'exécuter lorsqu'ils sont injectés, elle est vulnérable à de nombreuses autres façons dont les attaquant·e·s peuvent créer du HTML pour exécuter du JavaScript malveillant.
Par exemple, l'exemple suivant exécute le code dans le gestionnaire d'évènements `error`, car la valeur `src` de {{HTMLElement("img")}} n'est pas une URL d'image valide&nbsp;:

```js
const nom = "<img src='x' onerror='alert(1)'>";
el.innerHTML = nom; // affiche l'alerte
```

Vous pouvez atténuer ces problèmes en assignant toujours des objets {{DOMxRef("TrustedHTML")}} au lieu de chaînes de caractères, et en [appliquant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_les_types_de_confiance) en utilisant la directive CSP {{CSP("require-trusted-types-for")}}.
Ceci garantit que l'entrée est passée par une fonction de transformation, qui a la possibilité [d'assainir](/fr/docs/Web/Security/Attacks/XSS#assainissement) l'entrée pour supprimer les balises potentiellement dangereuses avant qu'elle ne soit injectée.

> [!NOTE]
> {{DOMxRef("Node.textContent")}} doit être utilisé lorsque vous savez que le contenu fourni par l'utilisateur·ice doit être du texte brut.
> Cela empêche qu'il soit analysé comme du HTML.

## Exemples

### Lire le contenu HTML d'un élément

La lecture de `innerHTML` amène l'agent utilisateur à sérialiser les descendants de l'élément.

Étant donné le HTML suivant&nbsp;:

```html
<div id="exemple">
  <p>Mon nom est Joe</p>
</div>
```

Vous pouvez obtenir et enregistrer le balisage pour le contenu du {{HTMLElement("div")}} externe comme suit&nbsp;:

```js
const monElement = document.querySelector("#exemple");
const contenu = monElement.innerHTML;
console.log(contenu); // "\n  <p>Mon nom est Joe</p>\n"
```

### Remplacer le contenu d'un élément

Dans cet exemple, nous allons remplacer le DOM d'un élément en assignant du HTML à la propriété `innerHTML` de l'élément.
Pour atténuer le risque de XSS, nous allons d'abord créer un objet `TrustedHTML` à partir de la chaîne de caractères contenant le HTML, puis assigner cet objet à `innerHTML`.

Les types de confiance ne sont pas encore pris en charge par tous les navigateurs, nous définissons donc d'abord la [petite prothèse d'émulation des types de confiance](/fr/docs/Web/API/Trusted_Types_API#petite_prothèse_démulation_des_types_de_confiance).
Ceci agit comme un remplacement transparent pour l'API JavaScript des types de confiance&nbsp;:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Ensuite, nous créons une {{DOMxRef("TrustedTypePolicy")}} qui définit une {{DOMxRef("TrustedTypePolicy/createHTML", "createHTML()")}} pour transformer une chaîne de caractères d'entrée en instances de {{DOMxRef("TrustedHTML")}}.
Les implémentations courantes de `createHTML()` utilisent une bibliothèque telle que [DOMPurify <sup>(angl.)</sup>](https://github.com/cure53/DOMPurify) pour assainir l'entrée comme indiqué ci-dessous&nbsp;:

```js
const politique = trustedTypes.createPolicy("ma-politique", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Ensuite, nous utilisons cet objet `policy` pour créer un objet `TrustedHTML` à partir de la chaîne de caractères potentiellement non sécurisée, puis nous assignons le résultat à l'élément&nbsp;:

```js
// La chaîne de caractères potentiellement malveillante
const chaineMalveillante =
  "<p>Je pourrais être du XSS</p><img src='x' onerror='alert(1)'>";

// Crée une instance TrustedHTML en utilisant la politique
const HTMLDeConfiance = politique.createHTML(chaineMalveillante);

// Injecte le TrustedHTML (qui contient une chaîne de caractères de confiance)
const element = document.querySelector("#container");
element.innerHTML = HTMLDeConfiance;
```

> [!WARNING]
> Bien que vous puissiez assigner directement une chaîne de caractères à `innerHTML`, cela constitue un [risque de sécurité](#considérations_de_sécurité) si la chaîne de caractères à insérer peut contenir du contenu potentiellement malveillant.
> Vous devez utiliser `TrustedHTML` pour vous assurer que le contenu est assaini avant d'être inséré, et vous devez définir un en-tête CSP pour [appliquer les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_les_types_de_confiance).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{DOMxRef("Node.textContent")}} et {{DOMxRef("HTMLElement.innerText")}}
- La méthode {{DOMxRef("Element.insertAdjacentHTML()")}}
- La propriété {{DOMxRef("Element.outerHTML")}}
- Analyse HTML ou XML dans une arborescence DOM&nbsp;: {{DOMxRef("DOMParser")}}
- Sérialisation d'une arborescence DOM dans une chaîne de caractères XML&nbsp;: {{DOMxRef("XMLSerializer")}}
- La méthode {{DOMxRef("Element.getHTML()")}}
- La méthode {{DOMxRef("ShadowRoot.getHTML()")}}
- La méthode {{DOMxRef("Element.setHTMLUnsafe()")}}
- La méthode {{DOMxRef("ShadowRoot.setHTMLUnsafe()")}}
- [L'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API)

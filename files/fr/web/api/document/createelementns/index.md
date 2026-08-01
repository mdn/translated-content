---
title: "Document : méthode createElementNS()"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("DOM")}}

La méthode **`createElementNS()`** de l'interface {{DOMxRef("Document")}} crée un nouvel élément avec l'URI de l'espace de noms défini et un nom qualifié.

C'est utile dans les documents à espaces de noms mixtes, tels que SVG ou MathML intégrés dans HTML, où l'analyseur ne peut pas déduire de manière fiable l'espace de noms.

La méthode {{DOMxRef("Document.createElement()", "createElement()")}} est plus simple si vous souhaitez créer un élément HTML simple.

## Syntaxe

```js-nolint
createElementNS(namespaceURI, qualifiedName)
createElementNS(namespaceURI, qualifiedName, options)
```

### Paramètres

- `namespaceURI`
  - : Une chaîne de caractères qui définit un {{DOMxRef("element.namespaceURI", "namespaceURI")}} à associer à l'élément. Certains d'espaces de noms d'URI importants sont&nbsp;
    - [HTML](/fr/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/fr/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/fr/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`

- `qualifiedName`
  - : Une chaîne de caractères contenant le nom qualifié du nouvel élément.
    La propriété {{DOMxRef("node.nodeName", "nodeName")}} de l'élément créé est initialisée avec cette valeur.

    Le format du nom qualifié est `prefix:localName` ou `localName`, où les parties sont définies comme suit&nbsp;:
    - `prefix` {{Optional_Inline}}
      - : Un «&nbsp;alias court&nbsp;» pour l'espace de noms.
        Le préfixe est facultatif, mais s'il est défini, le paramètre `namespaceURI` doit également être défini.
        Si le préfixe est défini sur `xml` ou `xmlns`, le `namespaceURI` doit être défini respectivement sur `http://www.w3.org/XML/1998/namespace` ou `http://www.w3.org/2000/xmlns/`.

        La valeur est utilisée pour initialiser la nouvelle propriété {{DOMxRef("Element/prefix", "prefix")}} de l'élément.
        Par défaut, elle vaut `null`.

    - `localName`
      - : Le nom local de l'élément.
        La valeur est utilisée pour initialiser la nouvelle propriété {{DOMxRef("Element.localName", "localName")}} de l'élément.

- `options` {{Optional_Inline}}
  - : Un objet avec les propriétés optionnelles suivantes (notez que seule l'une des propriétés `is` et `customElementRegistry` peut être définie)&nbsp;:
    - `is` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le nom de balise d'un élément personnalisé précédemment défini à l'aide de {{DOMxRef("CustomElementRegistry/define", "customElements.define()")}}.
        Le nouvel élément reçoit un attribut `is` dont la valeur est le nom de la balise de l'élément personnalisé.
    - `customElementRegistry` {{Optional_Inline}}
      - : Un {{DOMxRef("CustomElementRegistry")}} qui définit le [registre d'éléments personnalisés à portée locale](/fr/docs/Web/API/Web_components/Using_custom_elements#registres_déléments_personnalisés_avec_portée) d'un élément personnalisé.

    Pour la rétrocompatibilité, certains navigateurs permettent de passer une chaîne de caractères ici à la place d'un objet, où la valeur de la chaîne de caractères est le nom de la balise de l'élément personnalisé.
    Voir [Étendre les éléments HTML natifs <sup>(angl.)</sup>](https://web.dev/articles/web-components) pour plus d'informations sur l'utilisation de ce paramètre.

### Valeur de retour

L'objet {{DOMxRef("Element")}} nouvellement créé.

### Exceptions

- `NamespaceError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de [`namespaceURI`](#namespaceuri) est&nbsp;:
    - pas un URI d'espace de noms valide.
    - défini sur la chaîne de caractères vide lorsque `prefix` a une valeur.
    - pas la valeur `http://www.w3.org/XML/1998/namespace` ou `http://www.w3.org/2000/xmlns/` lorsque [`prefix`](#prefix) est défini sur `xml` ou `xmlns`, respectivement.
- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Levée si `prefix` ou `localName` n'est pas valide&nbsp;:
    - Le `prefix` doit contenir au moins un caractère et ne peut pas contenir d'espaces ASCII, `NULL`, `/` ou `>` (U+0000, U+002F ou U+003E, respectivement).
    - Le `localName` est un nom d'élément valide s'il a une longueur d'au moins 1 et&nbsp;:
      - il commence par un caractère alphabétique et ne contient pas d'espaces ASCII, `NULL`, `/` ou `>` (U+0000, U+002F ou U+003E, respectivement).
      - il commence par `:` (U+003A), `_` (U+005F) ou tout caractère dans la plage U+0080 à U+10FFFF (inclus), _et_ les points de code restants ne contiennent que ces mêmes caractères ainsi que les caractères alphanumériques ASCII, `-` (U+002D) et `.` (U+002E),

    > [!NOTE]
    > Les versions antérieures de la spécification étaient plus restrictives, exigeant que le `qualifiedName` soit un [nom XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#dt-name) valide.

- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Levée si les options [`is`](#is) et [`customElementRegistry`](#customelementregistry) sont toutes deux définies.

## Exemples

### Utilisation simple

Voici comment créer un nouvel élément `<div>` dans l'espace de noms {{Glossary("XHTML")}}.

```js
const divElementXHTML = document.createElementNS(
  "http://www.w3.org/1999/xhtml",
  "div",
);

// Ceci est équivalent !
const divElementHTML = document.createElement("div");
```

### Créer un élément SVG

Voici comment créer un élément SVG ({{DOMxRef("SVGSVGElement")}}) et l'ajouter à l'élément HTML `<body>`.

L'utilisation de `createElementNS()` avec l'espace de noms SVG est nécessaire lorsqu'on travaille avec un document HTML.
Si vous appeliez {{DOMxRef("Document.createElement()", "createElement(\"svg\")")}}, un objet {{DOMxRef("HTMLUnknownElement")}} est retourné, et le SVG n'est pas rendu.

```js
const svgNS = "http://www.w3.org/2000/svg";

const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", "100");
svg.setAttribute("height", "100");

const circle = document.createElementNS(svgNS, "circle");
circle.setAttribute("cx", "50");
circle.setAttribute("cy", "50");
circle.setAttribute("r", "40");
circle.setAttribute("fill", "steelblue");

svg.appendChild(circle);
document.body.appendChild(svg);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("document.createElement()")}}
- La méthode {{DOMxRef("document.createTextNode()")}}
- La propriété {{DOMxRef("Element.namespaceURI")}}

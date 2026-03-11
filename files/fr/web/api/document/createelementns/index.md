---
title: "Document : méthode createElementNS()"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

La méthode **`createElementNS()`** de l'interface {{DOMxRef("Document")}} crée un élément avec l'URI de l'espace de noms défini et un nom qualifié.

Pour créer un élément sans définir d'URI d'espace de noms, utilisez la méthode {{DOMxRef("Document.createElement()", "createElement()")}}.

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
  - : Une chaîne de caractères qui définit le type d'élément à créer.
    La propriété {{DOMxRef("node.nodeName", "nodeName")}} de l'élément créé est initialisée avec la valeur de _qualifiedName_.
- `options` {{Optional_Inline}}
  - : Un objet `ElementCreationOptions` optionnel contenant une seule propriété nommée `is`, dont la valeur est le nom de balise d'un élément personnalisé précédemment défini à l'aide de `customElements.define()`.
    Pour la rétrocompatibilité, certains navigateurs permettent de passer une chaîne de caractères ici à la place d'un objet, où la valeur de la chaîne de caractères est le nom de la balise de l'élément personnalisé.
    Voir [Étendre les éléments HTML natifs <sup>(angl.)</sup>](https://web.dev/articles/web-components) pour plus d'informations sur l'utilisation de ce paramètre.

    Le nouvel élément recevra un attribut `is` dont la valeur est le nom de la balise de l'élément personnalisé. Les éléments personnalisés sont une fonctionnalité expérimentale disponible uniquement dans certains navigateurs.

### Valeur de retour

L'objet {{DOMxRef("Element")}} nouvellement créé.

### Exceptions

- `NamespaceError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de [`namespaceURI`](#namespaceuri) n'est pas un URI d'espace de noms valide.
- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de [`qualifiedName`](#qualifiedname) n'est pas un [nom XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#dt-name) valide&nbsp;; par exemple, si elle commence par un chiffre, un tiret ou un point, ou contient des caractères autres que des caractères alphanumériques, des tirets bas (`_`), des tirets (`-`) ou des points (`.`).

## Exemples

Cet exemple crée un nouvel élément `<div>` dans l'espace de noms {{Glossary("XHTML")}} et l'ajoute à l'élément vbox. Bien que ce ne soit pas un document XUL très utile, cela montre l'utilisation d'éléments de deux espaces de noms différents au sein d'un même document&nbsp;:

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script><![CDATA[
let container;
let newDiv;
let textNode;

function init() {
  container = document.getElementById("ContainerBox");
  newDiv = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
  textNode = document.createTextNode(
    "Ce texte a été construit dynamiquement avec createElementNS et createTextNode, puis inséré dans le document en utilisant appendChild.",
  );
  newDiv.appendChild(textNode);
  container.appendChild(newDiv);
}
]]></script>

 <vbox id="ContainerBox" flex="1">
  <html:div>
   Le script sur cette page ajoutera du contenu dynamique ci-dessous :
  </html:div>
 </vbox>

</page>
```

> [!NOTE]
> L'exemple donné ci-dessus utilise un script en ligne qui n'est pas recommandé dans les documents XHTML. Cet exemple particulier est en fait un document XUL intégrant du XHTML. Cependant, la recommandation s'applique quand même.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("document.createElement()")}}
- La méthode {{DOMxRef("document.createTextNode()")}}
- La propriété {{DOMxRef("Element.namespaceURI")}}

---
title: "Document : méthode createAttributeNS()"
short-title: createAttributeNS()
slug: Web/API/Document/createAttributeNS
l10n:
  sourceCommit: 80058a757e45377c0b06e782a9618da65c7ced5a
---

{{APIRef("DOM")}}

La méthode **`createAttributeNS()`** de l'interface {{DOMxRef("Document")}} crée un nouveau nœud d'attribut avec l'URI de l'espace de noms et le nom qualifié définis.

L'objet créé est un nœud implémentant l'interface {{DOMxRef("Attr")}}.
Le DOM n'impose pas le type d'attribut à ajouter à un élément particulier de cette manière.

## Syntaxe

```js-nolint
createAttributeNS(namespaceURI, qualifiedName)
```

### Paramètres

- `namespaceURI`
  - : Une chaîne de caractères qui définit le {{DOMxRef("Attr.namespaceURI", "namespaceURI")}} à associer à l'attribut, ou la chaîne de caractères vide.
    Dans les documents HTML, la plupart des attributs sont dans le **espace de noms null** — utilisez la chaîne de caractères vide pour ceux-ci.
    Utilisez un URI d'espace de noms spécifique uniquement lors de la création d'un attribut avec espace de noms, tel que `xml:lang` ou `xml:space`.
    Certains URI d'espace de noms sont&nbsp;:
    - XML&nbsp;: `http://www.w3.org/XML/1998/namespace` (pour `xml:lang`, `xml:space`)
    - XMLNS&nbsp;: `http://www.w3.org/2000/xmlns/` (pour `xmlns`, `xmlns:*`)
    - XLink&nbsp;: `http://www.w3.org/1999/xlink` (pour `xlink:href`, `xlink:title`, etc.)
- `qualifiedName`
  - : Une chaîne de caractères contenant le nom qualifié du nouvel attribut.
    La propriété {{DOMxRef("Attr.name", "name")}} de l'attribut créé est initialisée avec cette valeur.

    Le format du nom qualifié est `prefix:localName` ou `localName`, où les parties sont définies comme suit&nbsp;:
    - `prefix` {{Optional_Inline}}
      - : Un "alias court" pour l'espace de noms.
        Le préfixe est optionnel, mais s'il est défini, le paramètre `namespaceURI` doit également être défini.
        Si le préfixe est défini sur `xml` ou `xmlns`, le `namespaceURI` doit être défini sur `http://www.w3.org/XML/1998/namespace` ou `http://www.w3.org/2000/xmlns/`, respectivement.

        La valeur est utilisée pour initialiser la propriété {{DOMxRef("Attr.prefix", "prefix")}} du nouvel attribut.
        Par défaut, `null`.

    - `localName`
      - : Le nom local de l'attribut.
        La valeur est utilisée pour initialiser la propriété {{DOMxRef("Attr.localName", "localName")}} du nouvel attribut.

### Valeur de retour

Le nouveau nœud {{DOMxRef("Attr")}}.

### Exceptions

- `NamespaceError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de [`namespaceURI`](#namespaceuri) est&nbsp;:
    - pas un URI d'espace de noms valide.
    - définie sur la chaîne de caractères vide lorsque `prefix` a une valeur.
    - différente de `http://www.w3.org/XML/1998/namespace` ou `http://www.w3.org/2000/xmlns/` lorsque [`prefix`](#prefix) est défini sur `xml` ou `xmlns`, respectivement.
- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Levée si l'un des deux, `prefix` ou `localName`, n'est pas valide&nbsp;:
    - Le `prefix` doit contenir au moins un caractère et ne peut pas contenir d'espaces ASCII, `NULL`, `/` ou `>` (U+0000, U+002F ou U+003E, respectivement).
    - Le `localName` doit contenir au moins un caractère et ne peut pas contenir d'espaces ASCII, `NULL`, `/`, `=` ou `>` (U+0000, U+002F, U+003D ou U+003E, respectivement).

    > [!NOTE]
    > Les versions antérieures de la spécification étaient plus restrictives, exigeant que le `localName` soit un [nom XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#dt-name) valide.

## Exemples

### Créer un attribut avec espace de noms

Cet exemple crée un attribut `xml:lang` avec l'espace de noms XML et l'attache à un élément de paragraphe.
Cet attribut définit la langue du contenu de l'élément pour le traitement XML.

```html
<p id="salutation">Bonjour !</p>
```

```js
const el = document.getElementById("salutation");
const attr = document.createAttributeNS(
  "http://www.w3.org/XML/1998/namespace",
  "xml:lang",
);
attr.value = "fr";
el.setAttributeNode(attr);
```

### Créer un attribut sans préfixe

Dans les documents HTML, les attributs sans préfixe (comme les attributs de présentation SVG tels que `viewBox`) sont dans l'espace de noms nul.
Utilisez la chaîne de caractères vide pour le paramètre `namespaceURI` afin de correspondre à cela.

```html
<svg id="svg"></svg>
```

```js
const svg = document.getElementById("svg");
const attr = document.createAttributeNS("", "viewBox");
attr.value = "0 0 100 100";
svg.setAttributeNode(attr);
console.log(svg.getAttribute("viewBox")); // "0 0 100 100"
```

Notez que, dans la plupart des cas, vous pouvez utiliser {{DOMxRef("Element.setAttribute()")}} au lieu de `createAttributeNS()` pour les attributs sans préfixe&nbsp;:

```js
svg.setAttribute("viewBox", "0 0 100 100");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createAttribute()")}}
- La méthode {{DOMxRef("Document.createElementNS()")}}
- La méthode {{DOMxRef("Element.setAttributeNS()")}}
- La méthode {{DOMxRef("Element.setAttributeNode()")}}
- La méthode {{DOMxRef("Element.setAttributeNodeNS()")}}

---
title: "Element : méthode getAttributeNames()"
short-title: getAttributeNames()
slug: Web/API/Element/getAttributeNames
l10n:
  sourceCommit: d93e5a0bca36d745734e46c0cd55f40cda28e221
---

{{APIRef("DOM")}}

La méthode **`getAttributeNames()`** de l'interface {{domxref("Element")}} retourne les noms des attributs de l'élément sous la forme d'un (tableau) {{jsxref("Array")}} de chaînes de caractères. Si l'élément n'a pas d'attributs, elle retourne un tableau vide.

Utiliser `getAttributeNames()` avec {{domxref("Element.getAttribute","getAttribute()")}} est une alternative efficiente et performante pour accéder à {{domxref("Element.attributes")}}.

Les noms retournés par **`getAttributeNames()`** sont des noms d'attributs _qualifiés_, ce qui signifie que les attributs avec un préfixe d'espace de noms ont leurs noms retournés avec ce préfixe d'espace de noms (_et non_ l'espace de noms réel), suivi d'un deux-points, suivi du nom de l'attribut (par exemple, **`xlink:href`**), tandis que les attributs sans préfixe d'espace de noms ont leurs noms retournés tels quels (par exemple, **`href`**).

## Syntaxe

```js-nolint
getAttributeNames()
```

### Paramètres

Aucun.

### Valeur de retour

Un tableau ({{jsxref("Array")}}) de chaînes de caractères.

## Exemples

L'exemple suivant montre comment&nbsp;:

- Pour un attribut qui a un préfixe d'espace de noms, `getAttributeNames()` retourne ce préfixe d'espace de noms ainsi que le nom de l'attribut.
- Pour un attribut qui n'a pas de préfixe d'espace de noms, `getAttributeNames()` retourne juste le nom de l'attribut, tel quel.

Il est important de comprendre que&nbsp;:

1. Un attribut peut être présent dans le DOM avec un espace de noms mais sans préfixe d'espace de noms.
2. Pour un attribut dans le DOM qui a un espace de noms mais sans préfixe d'espace de noms, `getAttributeNames()` retourne juste le nom de l'attribut, sans indication que l'attribut est dans un espace de noms.

L'exemple ci-dessous inclut un cas «&nbsp;d'attribut avec un espace de noms mais sans préfixe d'espace de noms&nbsp;».

```js
const element = document.createElement("a");

// définit l'attribut "href" sans espace de noms et sans préfixe d'espace de noms
element.setAttribute("href", "https://example.com");
// définit l'attribut "href" avec un espace de noms et aussi le préfixe d'espace de noms "xlink"
element.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "https://example.com",
);
// définit l'attribut "show" avec un espace de noms mais sans préfixe d'espace de noms
element.setAttributeNS("http://www.w3.org/1999/xlink", "show", "new");

// Parcourt les attributs de l'élément
for (const nom of element.getAttributeNames()) {
  const valeur = element.getAttribute(nom);
  console.log(nom, valeur);
}

// journaux :
// href https://example.com
// xlink:href https://example.com
// show new
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

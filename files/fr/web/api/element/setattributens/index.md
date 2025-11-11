---
title: "Element : méthode setAttributeNS()"
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`setAttributeNS()`**, rattachée à l'interface [`Element`](/fr/docs/Web/API/Element), ajoute à l'élément courant un nouvel attribut ou modifie la valeur d'un attribut existant avec l'espace de noms et le nom indiqués en arguments.

Si vous manipulez des documents HTML et n'avez pas besoin d'utiliser d'espace de noms, vous pouvez utiliser la méthode [`setAttribute()`](/fr/docs/Web/API/Element/setAttribute) à la place.

## Syntaxe

```js-nolint
setAttributeNS(namespace, name, value)
```

### Paramètres

- `namespace`
  - : Une chaîne de caractères spécifiant l'espace de noms de l'attribut.
- `name`
  - : Une chaîne de caractères indiquant le nom qualifié de l'attribut, c'est-à-dire un préfixe d'espace de noms suivi d'un deux-points suivi d'un nom local.
- `value`
  - : La valeur à utiliser pour le nouvel attribut, exprimée avec une chaîne de caractères.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

```js
let d = document.getElementById("d1");
d.setAttributeNS(
  "http://www.mozilla.org/ns/specialspace",
  "spec:align",
  "center",
);
```

## Notes

`setAttributeNS()` est la seule méthode pour les attributs d'espace nom qui attend le nom qualifié complet de l'attribut, c'est-à-dire `"namespace:localname"`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.setAttribute()`](/fr/docs/Web/API/Element/setAttribute)
- [`Element.hasAttributeNS()`](/fr/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/fr/docs/Web/API/Element/getAttributeNS)
- [`Element.removeAttributeNS()`](/fr/docs/Web/API/Element/removeAttributeNS)
- [`Element.setAttributeNode()`](/fr/docs/Web/API/Element/setAttributeNode)

---
title: "JSON : méthode statique isRawJSON()"
short-title: isRawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`JSON.isRawJSON()`** vérifie si une valeur est un objet retourné par {{JSxRef("JSON.rawJSON()")}}.

## Syntaxe

```js-nolint
JSON.isRawJSON(value)
```

### Paramètres

- `value`
  - : La valeur à tester.

### Valeur de retour

`true` si `value` a été créé par la méthode {{JSxRef("JSON.rawJSON()")}}&nbsp;; sinon `false`.

## Description

Les objets «&nbsp;raw JSON&nbsp;», lorsqu'ils sont sérialisés en JSON, sont traités comme s'ils étaient déjà une portion de JSON. De plus, du fait du fonctionnement de {{JSxRef("JSON.rawJSON()")}}, le JSON brut est garanti être un JSON syntaxiquement valide. Pour plus d'informations sur la forme et le comportement des objets JSON brut, voir {{JSxRef("JSON.rawJSON()")}}. Cette méthode existe pour permettre à d'autres bibliothèques de sérialisation d'implémenter un comportement similaire à `JSON.stringify()` pour les objets JSON brut.

## Exemples

### Utiliser la méthode `isRawJSON()`

L'exemple suivant montre comment utiliser `JSON.isRawJSON()` pour tester si un objet a été retourné par `JSON.rawJSON()`. Il implémente un sérialiseur personnalisé qui produit un format semblable à YAML.

```js
function mySerializer(value, indent = "") {
  if (typeof value !== "object" || value === null) {
    return JSON.stringify(value);
  }
  if (JSON.isRawJSON(value)) {
    return value.rawJSON;
  }
  const subIndent = `${indent}  `;
  if (Array.isArray(value)) {
    return `- ${value.map((v) => mySerializer(v, subIndent)).join(`\n${indent}- `)}`;
  }
  return Object.entries(value)
    .map(([key, value]) => {
      const subValue = mySerializer(value, subIndent);
      if (subValue.includes("\n")) {
        return `${key}:\n${subIndent}${subValue}`;
      }
      return `${key}: ${subValue}`;
    })
    .join(`\n${indent}`);
}

console.log(
  mySerializer({
    name: "Josh",
    userId: JSON.rawJSON("12345678901234567890"),
    friends: [
      { name: "Alice", userId: JSON.rawJSON("9876543210987654321") },
      { name: "Bob", userId: JSON.rawJSON("56789012345678901234") },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567890
// friends:
//   - name: "Alice"
//     userId: 9876543210987654321
//   - name: "Bob"
//     userId: 56789012345678901234
```

Si, dans l'exemple ci‑dessus, les valeurs `userId` n'avaient pas été créées par `JSON.rawJSON()` mais passées directement comme nombres, alors nous subirions une perte de précision en raison des limites de précision des nombres à virgule flottante en JS.

```js
console.log(
  mySerializer({
    name: "Josh",
    userId: 12345678901234567890,
    friends: [
      { name: "Alice", userId: 9876543210987654321 },
      { name: "Bob", userId: 56789012345678901234 },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567000
// friends:
//   - name: "Alice"
//     userId: 9876543210987655000
//   - name: "Bob"
//     userId: 56789012345678900000
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `JSON.isRawJSON` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- L'objet {{JSxRef("JSON")}}
- La méthode {{JSxRef("JSON.stringify()")}}
- La méthode {{JSxRef("JSON.rawJSON()")}}

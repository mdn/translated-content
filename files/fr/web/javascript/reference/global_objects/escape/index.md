---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{Deprecated_Header}}

> [!NOTE]
> `escape()` est une fonction non standard implémentée par les navigateurs et n'a été standardisée que pour la compatibilité inter-moteurs. Elle n'est pas requise dans tous les moteurs JavaScript et peut ne pas fonctionner partout. Utilisez {{JSxRef("encodeURIComponent()")}} ou {{JSxRef("encodeURI()")}} si possible.

La fonction **`escape()`** calcule une nouvelle chaîne de caractères dans laquelle certains caractères ont été remplacés par des séquences d'échappement hexadécimales.

## Syntaxe

```js-nolint
escape(str)
```

### Paramètres

- `str`
  - : Une chaîne de caractères à encoder.

### Valeur de retour

Une nouvelle chaîne de caractères dont certains caractères ont été échappés.

## Description

`escape()` est une propriété fonction de l'objet global.

La fonction `escape()` remplace tous les caractères par des séquences d'échappement, à l'exception des caractères de mot {{Glossary("ASCII")}} (A—Z, a—z, 0—9, \_) et `@\*_+-./`. Les caractères sont échappés par unités de code UTF-16. Si la valeur de l'unité de code est inférieure à 256, elle est représentée par un nombre hexadécimal à deux chiffres au format `%XX`, complété à gauche par 0 si nécessaire. Sinon, elle est représentée par un nombre hexadécimal à quatre chiffres au format `%uXXXX`, complété à gauche par 0 si nécessaire.

> [!NOTE]
> Cette fonction était principalement utilisée pour {{Glossary("Percent-encoding", "l'encodage en pourcent")}} et est en partie basée sur le format d'échappement de {{RFC(1738)}}. Le format d'échappement n'est _pas_ une [séquence d'échappement](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#séquences_déchappement) dans les littéraux de chaîne. Vous pouvez remplacer `%XX` par `\xXX` et `%uXXXX` par `\uXXXX` pour obtenir une chaîne contenant de véritables séquences d'échappement de littéraux de chaîne.

## Exemples

### Utiliser la fonction `escape()`

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// caractères spéciaux
escape("@*_+-./"); // "@*_+-./"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `escape` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- La fonction {{JSxRef("encodeURI()")}}
- La fonction {{JSxRef("encodeURIComponent()")}}
- La fonction {{JSxRef("unescape()")}} {{Deprecated_Inline}}

---
title: Objets globaux
slug: Web/JavaScript/Reference/Global_Objects
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Ce chapitre documente tous les objets standards intégrés de JavaScript, y compris leurs méthodes et propriétés.

Le terme «&nbsp;objets globaux&nbsp;» (ou objets standards intégrés) ne doit pas être confondu avec **l'objet global**. Ici, «&nbsp;objets globaux&nbsp;» fait référence aux **objets dans la portée globale**.

L'**objet global** lui-même peut être accédé à l'aide de l'opérateur {{jsxref("Operators/this", "this")}} dans la portée globale. En fait, la portée globale **est constituée** des propriétés de l'objet global, y compris les propriétés héritées, le cas échéant.

Les autres objets dans la portée globale sont soit [créés par le script utilisateur](/fr/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects), soit fournis par l'application hôte. Les objets hôtes disponibles dans les contextes de navigateur sont documentés dans la [référence des API](/fr/docs/Web/API).

Pour plus d'informations sur la distinction entre le [DOM](/fr/docs/Web/API/Document_Object_Model) et le cœur de [JavaScript](/fr/docs/Web/JavaScript), voir la [vue d'ensemble des technologies JavaScript](/fr/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Objets standards par catégorie

### Propriétés de valeur

Ces propriétés globales renvoient une valeur simple. Elles n'ont ni propriétés ni méthodes.

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### Propriétés de fonction

Ces fonctions globales — fonctions appelées globalement, et non sur un objet — renvoient directement leur résultat à l'appelant.

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("isFinite()")}}
- {{jsxref("isNaN()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("escape()")}} {{deprecated_inline}}
- {{jsxref("unescape()")}} {{deprecated_inline}}

### Objets fondamentaux

Ces objets représentent les constructions fondamentales du langage.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### Objets d'erreur

Les objets d'erreur sont un type particulier d'objet fondamental. Ils incluent le type de base {{jsxref("Error")}}, ainsi que plusieurs types d'erreurs spécialisés.

- {{jsxref("Error")}}
- {{jsxref("AggregateError")}}
- {{jsxref("EvalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SuppressedError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}
- {{jsxref("InternalError")}} {{non-standard_inline}}

### Nombres et dates

Ce sont les objets de base représentant les nombres, les dates et les calculs mathématiques.

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}
- {{jsxref("Temporal")}}

### Traitement du texte

Ces objets représentent les chaînes de caractères et permettent de les manipuler.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Collections indexées

Ces objets représentent des collections de données ordonnées par une valeur d'index. Cela inclut les tableaux (typés) et les structures similaires aux tableaux.

- {{jsxref("Array")}}
- {{jsxref("TypedArray")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### Collections avec clés

Ces objets représentent des collections utilisant des clés. Les collections itérables ({{jsxref("Map")}} et {{jsxref("Set")}}) contiennent des éléments facilement itérables dans l'ordre d'insertion.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Données structurées

Ces objets représentent et manipulent des tampons de données structurées et des données encodées en JSON (JavaScript Object Notation).

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### Gestion de la mémoire

Ces objets interagissent avec le mécanisme de collecte des ordures (garbage collection).

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### Objets de contrôle d'abstraction

Les abstractions de contrôle aident à structurer le code, en particulier le code asynchrone (sans utiliser de callbacks profondément imbriqués, par exemple).

- {{jsxref("Iterator")}}
- {{jsxref("AsyncIterator")}}
- {{jsxref("Promise")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Generator")}}
- {{jsxref("AsyncGenerator")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("DisposableStack")}}
- {{jsxref("AsyncDisposableStack")}}

### Introspection

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Internationalisation

Ajouts au cœur d'ECMAScript pour les fonctionnalités sensibles à la langue.

- {{jsxref("Intl")}}
- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.Segmenter")}}

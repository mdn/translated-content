---
title: Objets natifs standards
slug: Web/JavaScript/Reference/Global_Objects
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Ce chapitre documente tous les objets standards intégrés de JavaScript, y compris leurs méthodes et propriétés.

Le terme «&nbsp;objets globaux&nbsp;» (ou objets natifs standards) ne doit pas être confondu avec **l'objet global**. Ici, «&nbsp;objets globaux&nbsp;» fait référence aux **objets dans la portée globale**.

L'**objet global** lui-même peut être accédé à l'aide de l'opérateur {{JSxRef("Operators/this", "this")}} dans la portée globale. En fait, la portée globale **est constituée** des propriétés de l'objet global, y compris les propriétés héritées, le cas échéant.

Les autres objets dans la portée globale sont soit [créés par le script utilisateur](/fr/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects), soit fournis par l'application hôte. Les objets hôtes disponibles dans les contextes de navigateur sont documentés dans la [référence des API](/fr/docs/Web/API).

Pour plus d'informations sur la distinction entre le [DOM](/fr/docs/Web/API/Document_Object_Model) et le cœur de [JavaScript](/fr/docs/Web/JavaScript), voir la [vue d'ensemble des technologies JavaScript](/fr/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Objets standards par catégorie

### Propriétés de valeur

Ces propriétés globales renvoient une valeur simple. Elles n'ont ni propriétés ni méthodes.

- {{JSxRef("globalThis")}}
- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}

### Propriétés de fonction

Ces fonctions globales — fonctions appelées globalement, et non sur un objet — renvoient directement leur résultat à l'appelant.

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("isFinite()")}}
- {{JSxRef("isNaN()")}}
- {{JSxRef("parseFloat()")}}
- {{JSxRef("parseInt()")}}
- {{JSxRef("decodeURI()")}}
- {{JSxRef("decodeURIComponent()")}}
- {{JSxRef("encodeURI()")}}
- {{JSxRef("encodeURIComponent()")}}
- {{JSxRef("escape()")}} {{Deprecated_Inline}}
- {{JSxRef("unescape()")}} {{Deprecated_Inline}}

### Objets fondamentaux

Ces objets représentent les constructions fondamentales du langage.

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### Objets d'erreur

Les objets d'erreur sont un type particulier d'objet fondamental. Ils incluent le type de base {{JSxRef("Error")}}, ainsi que plusieurs types d'erreurs spécialisés.

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SuppressedError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}
- {{JSxRef("InternalError")}} {{Non-standard_Inline}}

### Nombres et dates

Ce sont les objets de base représentant les nombres, les dates et les calculs mathématiques.

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}
- {{JSxRef("Temporal")}}

### Traitement du texte

Ces objets représentent les chaînes de caractères et permettent de les manipuler.

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### Collections indexées

Ces objets représentent des collections de données ordonnées par une valeur d'index. Cela inclut les tableaux (typés) et les structures similaires aux tableaux.

- {{JSxRef("Array")}}
- {{JSxRef("TypedArray")}}
- {{JSxRef("Int8Array")}}
- {{JSxRef("Uint8Array")}}
- {{JSxRef("Uint8ClampedArray")}}
- {{JSxRef("Int16Array")}}
- {{JSxRef("Uint16Array")}}
- {{JSxRef("Int32Array")}}
- {{JSxRef("Uint32Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}
- {{JSxRef("Float16Array")}}
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}

### Collections avec clés

Ces objets représentent des collections utilisant des clés. Les collections itérables ({{JSxRef("Map")}} et {{JSxRef("Set")}}) contiennent des éléments facilement itérables dans l'ordre d'insertion.

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### Données structurées

Ces objets représentent et manipulent des tampons de données structurées et des données encodées en JSON (JavaScript Object Notation).

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("DataView")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("JSON")}}

### Gestion de la mémoire

Ces objets interagissent avec le mécanisme de collecte des ordures (garbage collection).

- {{JSxRef("WeakRef")}}
- {{JSxRef("FinalizationRegistry")}}

### Objets de contrôle d'abstraction

Les abstractions de contrôle aident à structurer le code, en particulier le code asynchrone (sans utiliser de callbacks profondément imbriqués, par exemple).

- {{JSxRef("Iterator")}}
- {{JSxRef("AsyncIterator")}}
- {{JSxRef("Promise")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("Generator")}}
- {{JSxRef("AsyncGenerator")}}
- {{JSxRef("AsyncFunction")}}
- {{JSxRef("DisposableStack")}}
- {{JSxRef("AsyncDisposableStack")}}

### Introspection

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### Internationalisation

Ajouts au cœur d'ECMAScript pour les fonctionnalités sensibles à la langue.

- {{JSxRef("Intl")}}
- {{JSxRef("Intl.Collator")}}
- {{JSxRef("Intl.DateTimeFormat")}}
- {{JSxRef("Intl.DisplayNames")}}
- {{JSxRef("Intl.DurationFormat")}}
- {{JSxRef("Intl.ListFormat")}}
- {{JSxRef("Intl.Locale")}}
- {{JSxRef("Intl.NumberFormat")}}
- {{JSxRef("Intl.PluralRules")}}
- {{JSxRef("Intl.RelativeTimeFormat")}}
- {{JSxRef("Intl.Segmenter")}}

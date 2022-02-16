---
title: Objets globaux
slug: Web/JavaScript/Reference/Global_Objects
tags:
  - Aperçu
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects
original_slug: Web/JavaScript/Reference/Objets_globaux
---
{{jsSidebar("Objects")}}

Cette partie référence tous les objets natifs standards JavaScript, avec leurs propriétés et méthodes.

Le terme « objets globaux » (ou objets natifs standards) ne doit pas ici être confondu avec l*'objet global*. Ici, « objets globaux » se réfère aux _objets de portée globale_. L'objet global lui-même peut être accédé en utilisant {{jsxref("Opérateurs/L_opérateur_this", "this")}} dans la portée globale (uniquement lorsque [le mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) n'est pas utilisé, sinon, il renvoie {{jsxref("undefined")}}). En réalité, la portée globale _consiste des_ propriétés de l'objet global (avec ses propriétés héritées, s'il en a).

> **Note :** En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), la portée globale représentée par `this` sera {{jsxref("undefined")}}.

Les autres objets de la portée globale sont [créés par les scripts utilisateurs](/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#Cr.C3.A9er_de_nouveaux_objets) ou fournis par l'application hôte dans laquelle s'exécute JavaScript. Les objets mis à disposition par les navigateurs web sont documentés dans la [référence API](/fr/docs/Web/API). Pour plus d'informations sur la distinction entre le [DOM](/fr/docs/Web/API/R%C3%A9f%C3%A9rence_du_DOM_Gecko) et JavaScript, voir [l'aperçu des technologies JavaScript](/fr/docs/Web/JavaScript/JavaScript_technologies_overview).

## Objets globaux standards (par catégorie)

### Propriétés - valeurs

Les propriétés globales renvoient une valeur simple, elles ne possèdent aucune propriété ou méthode :

- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}
- le littéral {{jsxref("null")}}
- {{JSxRef("globalThis")}}

### Propriétés - fonctions

Les fonctions globales, appelées globalement (et non par rapport à un objet), renvoient directement leur résultat à l'objet appelant.

- {{jsxref("Objets_globaux/eval", "eval()")}}
- {{jsxref("Objets_globaux/uneval", "uneval()")}} {{non-standard_inline()}}
- {{jsxref("Objets_globaux/isFinite", "isFinite()")}}
- {{jsxref("Objets_globaux/isNaN", "isNaN()")}}
- {{jsxref("Objets_globaux/parseFloat", "parseFloat()")}}
- {{jsxref("Objets_globaux/parseInt", "parseInt()")}}
- {{jsxref("Objets_globaux/decodeURI", "decodeURI()")}}
- {{jsxref("Objets_globaux/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Objets_globaux/encodeURI", "encodeURI()")}}
- {{jsxref("Objets_globaux/encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("Objets_globaux/escape", "escape()")}} {{deprecated_inline()}}
- {{jsxref("Objets_globaux/unescape", "unescape()")}} {{deprecated_inline()}}

### Objets fondamentaux

Ces objets sont les objets fondamentaux de JavaScript. Parmi ces objets, on retrouve les objets génériques, les fonctions et les erreurs.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}
- {{jsxref("Error")}}
- {{jsxref("EvalError")}}
- {{jsxref("InternalError")}} {{Non-standard_Inline}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("StopIteration")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}

### Nombres et dates

Ces objets permettent de manipuler les nombres, dates et calculs mathématiques.

- {{jsxref("Number")}}
- {{JSxRef("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### Manipulation de textes

Ces objets permettent de manipuler des chaînes de caractères.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Collections indexées

Ces objets sont des collections ordonnées par un index. Cela inclut les tableaux (typés) et les objets semblables aux tableaux.

- {{jsxref("Array")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}

### Collections avec clefs

Ces objets représentent des collections d'objets avec clefs. Ils contiennent des éléments itérables, dans leur ordre d'insertion.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Données structurées

Ces objets permettent de représenter et de manipuler des tampons de données (_buffers_) et des données utilisant la notation JSON (**J**ava**S**cript **O**bject **N**otation).

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}} {{experimental_inline}}
- {{jsxref("Atomics")}} {{experimental_inline}}
- {{jsxref("DataView")}}
- {{jsxref("JSON")}}

### Objets de contrôle d'abstraction

- {{jsxref("Promise")}}
- {{jsxref("Generator")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncFunction")}}{{experimental_inline}}

### Introspection

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Internationalisation

Ces objets ont été ajoutés à ECMAScript pour des traitements dépendants de particularités linguistiques. Ils possèdent leur propre spécification.

- {{jsxref("Intl")}}
- {{jsxref("Objets_globaux/Collator", "Intl.Collator")}}
- {{jsxref("Objets_globaux/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{JSxRef("Global_Objects/ListFormat", "Intl.ListFormat")}}
- {{jsxref("Objets_globaux/NumberFormat", "Intl.NumberFormat")}}
- {{JSxRef("Global_Objects/PluralRules", "Intl.PluralRules")}}
- {{jsxref("Objets_globaux/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
- {{jsxref("Objets_globaux/Locale", "Intl.Locale")}}

### WebAssembly

- {{jsxref("WebAssembly")}}
- {{jsxref("WebAssembly.Module")}}
- {{jsxref("WebAssembly.Instance")}}
- {{jsxref("WebAssembly.Memory")}}
- {{jsxref("WebAssembly.Table")}}
- {{jsxref("WebAssembly.CompileError")}}
- {{jsxref("WebAssembly.LinkError")}}
- {{jsxref("WebAssembly.RuntimeError")}}

### Autres

- {{JSxRef("Fonctions/arguments", "arguments")}}

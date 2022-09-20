---
title: Constructeur pour WebAssembly.Tag()
slug: WebAssembly/JavaScript_interface/Tag/Tag
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag/Tag
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag/Tag
browser-compat: javascript.builtins.WebAssembly.Tag.Tag
---
{{JSRef}}

Le constructeur **`WebAssembly.Tag()`** crée un nouvel objet [`WebAssembly.Tag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag).

## Syntaxe

```js
new WebAssembly.Tag(type)
```

### Paramètres

- `type`

  - : Un objet qui peut contenir la propriété suivante&nbsp;:

    - `parameters`
      - : Un tableau de [types de données](/fr/docs/WebAssembly/Understanding_the_text_format#types) (`"i32"`, `"i64"`, `"f32"`, `"f64"`, `"v128"`, `"externref"`, `"anyfunc"`).

### Exceptions

- `TypeError`
  - : L'argument `type.parameters` n'est pas fourni, ne contient pas de valeur ou contient un descripteur de balise non pris en charge.

## Exemples

Ici, on crée une balise avec deux valeurs.

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Aperçu général de WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)

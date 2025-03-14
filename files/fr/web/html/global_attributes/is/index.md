---
title: is
slug: Web/HTML/Global_attributes/is
---

{{HTMLSidebar("Global_attributes")}}

L'attribut **`is`** est un [attribut universel](/fr/docs/Web/HTML/Global_attributes) qui indique qu'un élément HTML standard devrait se comporter comme un élément natif personnalisé (_custom element_) défini (voir [Manipuler les _custom elements_](/fr/docs/Web/API/Web_components/Using_custom_elements) pour plus de détails).

Cet attribut peut uniquement être utilisé si l'élément personnalisé indiqué a été correctement [défini](/fr/docs/Web/API/CustomElementRegistry/define) dans le document courant et qu'il étend le type d'élément sur lequel il est appliqué.

## Exemples

Cet exemple est tiré de l'exemple [`word-count-web-component`](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) ([voir le résultat en _live_](https://mdn.github.io/web-components-examples/word-count-web-component/)).

```js
// On crée une classe pour l'élément
class WordCount extends HTMLParagraphElement {
  constructor() {
    // On appelle super() pour récupérer l'initialisation
    // des classes parentes
    super();

    // Le contenu du constructeur, etc.
    ...

  }
}

// On définit le nouvel élément.
customElements.define('word-count', WordCount, { extends: 'p' });
```

```html
<p is="word-count"></p>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les différents [attributs universels](/fr/docs/Web/HTML/Global_attributes)

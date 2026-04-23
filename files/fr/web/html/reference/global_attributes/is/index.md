---
title: "Attribut HTML universel : `is`"
short-title: is
slug: Web/HTML/Reference/Global_attributes/is
l10n:
  sourceCommit: 1bc1971a1265d1792c94b99b736c5accec1fec6d
---

> [!NOTE]
> [Safari ne prévoit pas de prendre en charge les éléments personnalisés intégrés <sup>(angl.)</sup>](https://github.com/WebKit/standards-positions/issues/97) et [les éditeurs de navigateurs explorent des solutions alternatives pour personnaliser les éléments intégrés <sup>(angl.)</sup>](https://github.com/WICG/webcomponents/issues/1029). Consultez la section [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour obtenir des informations sur la prise en charge.

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`is`** permet de définir qu'un élément HTML standard doit se comporter comme un élément intégré personnalisé défini (voir [Utilisation des éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) pour plus de détails).

Cet attribut ne peut être utilisé que si le nom de l'élément personnalisé défini a été correctement [défini](/fr/docs/Web/API/CustomElementRegistry/define) dans le document courant, et qu'il étend le type d'élément auquel il est appliqué.

## Exemples

Le code suivant est tiré de notre exemple [word-count-web-component <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) ([voir le résultat en direct <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/word-count-web-component/)).

```js
// Création d'une classe pour l'élément
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Toujours appeler super() en premier dans le constructeur
    super();

    // Contenu du constructeur omis pour plus de concision
    // …
  }
}

// Définir le nouvel élément
customElements.define("word-count", WordCount, { extends: "p" });
```

```html
<p is="word-count"></p>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)

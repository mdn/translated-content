---
title: Utiliser les éléments template et slot
slug: Web/API/Web_components/Using_templates_and_slots
---

{{DefaultAPISidebar("Web Components")}}

Cet article explique comment utiliser les éléments [`<template>`](/fr/docs/Web/HTML/Element/template) et [`<slot>`](/fr/docs/Web/HTML/Element/slot) pour créer un modèle (<i lang="en">template</i>) flexible qui peut ensuite être utilisé pour alimenter le Shadow DOM d'un composant web.

## La vérité sur les modèles

Lorsqu'une structure de balises se répète sur une page web, il est judicieux d'utiliser un modèle plutôt que d'écrire cette même structure encore et encore. Il était déjà possible de le faire, mais l'élément HTML [`<template>`](/fr/docs/Web/HTML/Element/template) (pris en charge par les navigateurs modernes) nous facilite la tâche. Cet élément et ce qu'il renferme n'est pas directement retranscrit dans le DOM, mais peut par contre toujours être manipulé avec JavaScript.

Voyons un exemple simple&nbsp;:

```html
<template id="my-paragraph">
  <p>My paragraph</p>
</template>
```

Ceci restera invisible sur la page tant qu'aucune référence n'y sera faite dans le code JavaScript puis ajouté au DOM, en utilisant par exemple&nbsp;:

```js
let template = document.getElementById("my-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Quoique trivial, cet exemple vous permet d'entrevoir l'interêt d'utiliser des modèles.

## Accorder modèles et composants web

Les modèles sont utiles en eux-mêmes, mais ils fonctionnent encore mieux avec des composants web. Créons un composant web qui utilise notre modèle comme contenu de son Shadow DOM. Nous l'appellerons `<my-paragraph>`&nbsp;:

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true),
      );
    }
  },
);
```

Le point important à noter est que l'on ajoute un clone du contenu du modèle à la racine du DOM, créé à l'aide de la méthode [`Node.cloneNode()`](/fr/docs/Web/API/Node/cloneNode).

Et parce que nous ajoutons son contenu à un Shadow DOM, on peut inclure des informations de mise en forme à l'intérieur de l'élément `<template>` dans un élément [`<style>`](/fr/docs/Web/HTML/Element/style), qui est ensuite encapsulé à l'intérieur de l'élément personnalisé. Cette procédure n'aurait pas fonctionné si on avait ajouté le contenu à un DOM standard.

Par exemple&nbsp;:

```html
<template id="my-paragraph">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>My paragraph</p>
</template>
```

On peut maintenant utiliser le modèle dans le document HTML:

```html
<my-paragraph></my-paragraph>
```

> **Note :** Les modèles sont bien pris en charge par les navigateurs&nbsp;; l'API Shadow DOM est pris en charge par défaut dans Firefox (à partir de la version 63), Chrome, Opera, Safari et Edge (à partir de la version 70).

## Plus de flexibilité avec les slots

Jusque-là, nous avons vu une première utilisation de l'élément `<template>`. Cette implémentation n'est pas très flexible&nbsp;; elle ne permet d'afficher que du texte, c'est-à-dire qu'il est aussi utile qu'un paragraphe classique&nbsp;! Il est possible d'insérer du texte dans chaque instance d'élément de façon déclarative grâce à [`<slot>`](/fr/docs/Web/HTML/Element/slot). Cette fonction est moins bien prise en charge que [`<template>`](/fr/docs/Web/HTML/Element/template), disponible sur Chrome 53, Opera 40, Safari 10, Firefox 59 et Edge 79.

Les emplacements (<i lang="en">slots</i>) sont identifiés par leur attribut `name`, et permettent de définir des emplacements dans le modèle qui peuvent être alimentés avec n'importe quelle structure HTML.

Donc, si on souhaite ajouter un emplacement dans le précédent exemple, on peut modifier l'élément de cette façon&nbsp;:

```html
<p><slot name="my-text">Texte par défaut</slot></p>
```

Si le contenu de l'emplacement n'est pas défini quand l'élément est inclus dans la page, ou si les emplacements ne sont pas pris en charge par le navigateur, `<my-paragraph>` contiendra simplement le texte statique précisé dans le modèle.

Pour définir le contenu de l'emplacement, on insère une structure HTML dans `<my-paragraph>` avec un attribut [`slot`](/fr/docs/Web/HTML/Global_attributes#slot) dont la valeur est égale au nom de l'emplacement que l'on veut alimenter. Comme précédemment, on peut utiliser n'importe quelle structure HTML, par exemple&nbsp;:

```html
<my-paragraph>
  <span slot="my-text">Voici un autre texte&nbsp;!</span>
</my-paragraph>
```

ou

```html
<my-paragraph>
  <ul slot="my-text">
    <li>Voici un autre texte&nbsp;!</li>
    <li>dans une liste!</li>
  </ul>
</my-paragraph>
```

> **Note :** Un élément [`<slot>`](/fr/docs/Web/HTML/Element/slot) sans nom sera rempli avec l'ensemble des nœuds-fils de plus haut niveau de l'élément personnalisé qui n'ont pas d'attribut [`slot`](/fr/docs/Web/HTML/Global_attributes#slot). Cela inclut les nœuds texte.

Et c'est tout pour ce premier exemple. Si vous souhaitez manipuler les emplacements, vous pouvez [voir la page sur GitHub](https://github.com/mdn/web-components-examples/tree/master/simple-template) (voir aussi [le résultat](https://mdn.github.io/web-components-examples/simple-template/)).

## Un exemple plus complexe

Pour finir, voyons un exemple un peu moins trivial.

L'ensemble de fragments de code qui suit illustre comment utiliser [`<slot>`](/fr/docs/Web/HTML/Element/slot) avec [`<template>`](/fr/docs/Web/HTML/Element/template) et un peu de JavaScript afin de&nbsp;:

- Créer un élément **`<element-details>`** avec des [emplacements nommés](/fr/docs/Web/HTML/Element/slot#named-slot) à [la racine virtuelle (`ShadowRoot`)](/fr/docs/Web/API/ShadowRoot)
- Concevoir l'élément **`<element-details>`** afin que, lorsqu'il est utilisé dans les documents, il soit rendu en composant le contenu de l'élément avec le contenu de [la racine virtuelle](/fr/docs/Web/API/ShadowRoot). Autrement dit, les parties du contenu de l'élément seront utilisées afin de remplir [les emplacements nommés](/fr/docs/Web/HTML/Element/slot#named-slot) dans sa [racine virtuelle](/fr/docs/Web/API/ShadowRoot)

Il est techniquement possible d'utiliser un élément [`<slot>`](/fr/docs/Web/HTML/Element/slot) sans élément [`<template>`](/fr/docs/Web/HTML/Element/template) (par exemple au sein d'un [`<div>`](/fr/docs/Web/HTML/Element/div) classique) tout en tirant parti des fonctionnalités d'emplacement fournies par [`<slot>`](/fr/docs/Web/HTML/Element/slot) pour le contenu du Shadow DOM. On peut ainsi éviter d'avoir à d'abord accéder à la propriété `content` du modèle (et de la cloner). Toutefois, il est souvent plus pratique d'ajouter des emplacements au sein d'un élément [`<template>`](/fr/docs/Web/HTML/Element/template), car il est peu probable de définir un composant à partir d'un élément déjà rendu.

De plus, même si l'élément n'est pas déjà rendu, le rôle de conteneur porté par le modèle sera sémantiquement plus clair en utilisant [`<template>`](/fr/docs/Web/HTML/Element/template). De plus, [`<template>`](/fr/docs/Web/HTML/Element/template) peut avoir des éléments qui lui sont directement rattachés comme [`<td>`](/fr/docs/Web/HTML/Element/td). Ce même élément disparaîtrait s'il était ajouté à un élément [`<div>`](/fr/docs/Web/HTML/Element/div).

> **Note :** Vous pourrez retrouver l'exemple complet sur [le dépôt GitHub pour element-details](https://github.com/mdn/web-components-examples/tree/master/element-details) (voir également [le résultat en action](https://mdn.github.io/web-components-examples/element-details/)).

### Créer un modèle avec des emplacements

Tout d'abord, on utilise l'élément [`<slot>`](/fr/docs/Web/HTML/Element/slot) au sein d'un élément [`<template>`](/fr/docs/Web/HTML/Element/template) afin de créer notre nouveau [fragment de document](/fr/docs/Web/API/DocumentFragment) "element-details-template" qui contient quelques [emplacements nommés](/fr/docs/Web/HTML/Element/slot#named-slot)&nbsp;:

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
    }
    h4 span {
      background: #217ac0;
      padding: 2px 6px 2px 6px;
    }
    h4 span {
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    h4 span {
      color: white;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <span>
        <code class="name"
          >&lt;<slot name="element-name">BESOIN D'UN NOM</slot>&gt;</code
        >
        <i class="desc"
          ><slot name="description">BESOIN D'UNE DESCRIPTION</slot></i
        >
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Attributs</span></h4>
      <slot name="attributes"><p>Aucun</p></slot>
    </div>
  </details>
  <hr />
</template>
```

Voyons les caractéristiques de cet élément [`<template>`](/fr/docs/Web/HTML/Element/template)&nbsp;:

- Ce [`<template>`](/fr/docs/Web/HTML/Element/template) contient un élément [`<style>`](/fr/docs/Web/HTML/Element/style) avec un ensemble de règles CSS dont la portée est celle du fragment de document créé par l'élément [`<template>`](/fr/docs/Web/HTML/Element/template).
- Ce [`<template>`](/fr/docs/Web/HTML/Element/template) utilise un élément [`<slot>`](/fr/docs/Web/HTML/Element/slot) et l'attribut [`name`](/fr/docs/Web/HTML/Element/slot#attr-name) correspondant afin d'avoir trois [emplacements nommés](/fr/docs/Web/HTML/Element/slot#named-slot)&nbsp;:

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- L'élément [`<template>`](/fr/docs/Web/HTML/Element/template) intègre les [emplacements nommés slots](/fr/docs/Web/HTML/Element/slot#named-slot) dans un élément [`<details>`](/fr/docs/Web/HTML/Element/details).

### Créer un nouvel élément element-details avec le modèle

Ensuite, voyons comment créer un nouvel élément personnalisé, intitulé **`<element-details>`**, et comment utiliser [`Element.attachShadow`](/fr/docs/Web/API/Element/attachShadow) pour lui rattacher, comme [racine virtuelle](/fr/docs/Web/API/ShadowRoot), le fragment de document créé avec l'élément [`<template>`](/fr/docs/Web/HTML/Element/template) ci-dessus. Pour cela, on utilisera la même méthode qu'avec notre exemple plus simple.

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true),
      );
    }
  },
);
```

### Utiliser l'élément element-details avec les emplacements nommés

Prenons maintenant un élément **`<element-details>`** et utilisons le dans notre document&nbsp;:

```html
<element-details>
  <span slot="element-name">slot</span>
  <span slot="description"
    >Un emplacement dans un composant web que les utilisateurs pourront remplir
    avec leur propre contenu pour composer plusieurs arbres DOM ensemble.</span
  >
  <dl slot="attributes">
    <dt>name</dt>
    <dd>Le nom de l'emplacement.</dd>
  </dl>
</element-details>

<element-details>
  <span slot="element-name">template</span>
  <span slot="description"
    >Un mécanisme pour stocker du contenu côté client qui n'est pas affiché
    lorsque la page est chargée mais lors de l'exécution avec du code
    JavaScript.</span
  >
</element-details>
```

En voyant ce fragment, notons quelques points&nbsp;:

- Ce fragment contient deux exemplaires **`<element-details>`** qui utilisent tous les deux l'attribut [`slot`](/fr/docs/Web/HTML/Global_attributes#slot) afin de référencer [les emplacements nommés](/fr/docs/Web/HTML/Element/slot#named-slot) `"element-name"` et `"description"` qui sont inscrits dans [la racine virtuelle](/fr/docs/Web/API/ShadowRoot) `<element-details>`.
- Seul le premier élément **`<element-details>`** fait référence à [l'emplacement nommé](/fr/docs/Web/HTML/Element/slot#named-slot) `"attributes"`. Le deuxième élément `<element-details>` n'y fait pas référence.
- Le premier élément `<element-details>` fait référence à [l'emplacement nommé](/fr/docs/Web/HTML/Element/slot#named-slot) `"attributes"` en utilisant un élément [`<dl>`](/fr/docs/Web/HTML/Element/dl) contenant comme enfants un élément [`<dt>`](/fr/docs/Web/HTML/Element/dt) et un élément [`<dd>`](/fr/docs/Web/HTML/Element/dd).

### Mettre le tout en forme

Pour finir, ajoutons un peu de CSS pour les éléments [`<dl>`](/fr/docs/Web/HTML/Element/dl), [`<dt>`](/fr/docs/Web/HTML/Element/dt) et [`<dd>`](/fr/docs/Web/HTML/Element/dd) de notre document&nbsp;:

```css
dl {
  margin-left: 6px;
}
dt {
  font-weight: bold;
  color: #217ac0;
  font-size: 110%;
}
dt {
  font-family: Consolas, "Liberation Mono", Courier;
}
dd {
  margin-left: 16px;
}
```

```css hidden
body {
  margin-top: 47px;
}
```

### Résultat

Assemblons l'ensemble des fragments pour voir le résultat final.

{{ EmbedLiveSample('Un_exemple_plus_complexe', '300','400','element-details.png','') }}

Quelques notes à propos du résultat affiché&nbsp;:

- Bien que les exemplaires des éléments **`<element-details>`** du document n'utilisent pas directement d'élément [`<details>`](/fr/docs/Web/HTML/Element/details), ils sont rendus comme celui-ci, car [`<details>`](/fr/docs/Web/HTML/Element/details) [la racine virtuelle](/fr/docs/Web/API/ShadowRoot) les peuple avec ceci.
- Au sein de l'élément [`<details>`](/fr/docs/Web/HTML/Element/details) affiché, le contenu des éléments **`<element-details>`** remplit [les emplacements nommés](/fr/docs/Web/HTML/Element/slot#named-slot) de [la racine virtuelle](/fr/docs/Web/API/ShadowRoot). Autrement dit, l'arbre du DOM pour les éléments **`<element-details>`** est composé avec le contenu [de la racine virtuelle](/fr/docs/Web/API/ShadowRoot).
- Pour les deux éléments **`<element-details>`**, un titre **Attributs** est automatiquement ajouté à partir de [la racine virtuelle](/fr/docs/Web/API/ShadowRoot) avant la position de l'emplacement nommé `"attributes"`.
- Étant donné que le premier élément **`<element-details>`** possède un élément [`<dl>`](/fr/docs/Web/HTML/Element/dl) qui référence explicitement [l'emplacement nommé](/fr/docs/Web/HTML/Element/slot#named-slot) `"attributes"` depuis [sa racine virtuelle](/fr/docs/Web/API/ShadowRoot), les contenus de [`<dl>`](/fr/docs/Web/HTML/Element/dl) remplacent l'emplacement nommé `"attributes"` de [la racine virtuelle](/fr/docs/Web/API/ShadowRoot).
- Comme le second élément **`<element-details>`** ne fait pas explicitement référence à l'emplacement nommé `"attributes"` depuis [sa racine virtuelle](/fr/docs/Web/API/ShadowRoot), le contenu de cet [emplacement nommé](/fr/docs/Web/HTML/Element/slot#named-slot) est rempli avec le contenu par défaut fourni par [la racine virtuelle](/fr/docs/Web/API/ShadowRoot).

##### Exemple complet

```html
<!doctype html>
<html>
  <head>
    <title>slot example</title>
    <style>
      dl {
        margin-left: 6px;
      }
      dt {
        font-weight: bold;
        color: #217ac0;
        font-size: 110%;
      }
      dt {
        font-family: Consolas, "Liberation Mono", Courier;
      }
      dd {
        margin-left: 16px;
      }
    </style>
  </head>
  <body>
    <template id="element-details-template">
      <style>
        details {
          font-family: "Open Sans Light", Helvetica, Arial;
        }
        .name {
          font-weight: bold;
          color: #217ac0;
          font-size: 120%;
        }
        h4 {
          margin: 10px 0 -8px 0;
        }
        h4 span {
          background: #217ac0;
          padding: 2px 6px 2px 6px;
        }
        h4 span {
          border: 1px solid #cee9f9;
          border-radius: 4px;
        }
        h4 span {
          color: white;
        }
        .attributes {
          margin-left: 22px;
          font-size: 90%;
        }
        .attributes p {
          margin-left: 16px;
          font-style: italic;
        }
      </style>
      <details>
        <summary>
          <span>
            <code class="name"
              >&lt;<slot name="element-name">BESOIN D'UN NOM</slot>&gt;</code
            >
            <i class="desc"
              ><slot name="description">BESOIN D'UNE DESCRIPTION</slot></i
            >
          </span>
        </summary>
        <div class="attributes">
          <h4><span>Attributs</span></h4>
          <slot name="attributes"><p>Aucun</p></slot>
        </div>
      </details>
      <hr />
    </template>

    <element-details>
      <span slot="element-name">slot</span>
      <span slot="description"
        >Un emplacement dans un composant web que les utilisateurs pourront
        remplir avec leur propre contenu pour composer plusieurs arbres DOM
        ensemble.</span
      >
      <dl slot="attributes">
        <dt>name</dt>
        <dd>Le nom de l'emplacement.</dd>
      </dl>
    </element-details>

    <element-details>
      <span slot="element-name">template</span>
      <span slot="description"
        >Un mécanisme pour stocker du contenu côté client qui n'est pas affiché
        lorsque la page est chargée mais lors de l'exécution avec du code
        JavaScript.</span
      >
    </element-details>

    <script>
      customElements.define(
        "element-details",
        class extends HTMLElement {
          constructor() {
            super();
            const template = document.getElementById(
              "element-details-template",
            ).content;
            const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
              template.cloneNode(true),
            );
          }
        },
      );
    </script>
  </body>
</html>
```

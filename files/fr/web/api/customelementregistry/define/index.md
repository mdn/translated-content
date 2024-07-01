---
title: CustomElementRegistry.define()
slug: Web/API/CustomElementRegistry/define
l10n:
  sourceCommit: a160395a1e4baa10be746c56ec2f25e9d902e5cd
---

{{APIRef("CustomElementRegistry")}}

La méthode **`define()`**, rattachée à l'interface [`CustomElementRegistry`](/fr/docs/Web/API/CustomElementRegistry), permet de définir un nouvel élément personnalisé.

Il existe deux types d'éléments personnalisés qu'on peut créer&nbsp;:

- **Les éléments personnalisés autonomes**
  - : Il s'agit d'éléments autonomes à part entière. Ils n'héritent en rien des éléments HTML natifs.
- **Les éléments personnalisés natifs**
  - : Ces éléments héritent des éléments HTML natifs et les étendent.

## Syntaxe

```js-nolint
define(name, constructor)
define(name, constructor, options)
```

### Parameters

- `name`
  - : Le nom du nouvel élément personnalisé. On notera que le nom d'un élément personnalisé doit contenir un tiret.
- `constructor`
  - : Le constructeur du nouvel élément personnalisé.
- `options` {{optional_inline}}
  - : Un objet contrôlant la façon dont l'élément est défini. Il a les propriétés suivantes&nbsp;:
    - `extends`
      - : Une chaîne de caractères indiquant le nom de l'élément HTML natif à étendre. On l'utilisera pour créer un _élément personnalisé natif_.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined).

### Exceptions

- `NotSupportedError` [`DOMException`](/fr/docs/Web/API/DOMException)
  - : Exception levée&nbsp;:
    - Si l'objet [`CustomElementRegistry`](/fr/docs/Web/API/CustomElementRegistry) contient déjà une entrée avec le même nom ou le même constructeur (plus généralement si une telle entrée est déjà définie)
    - Ou si `extends` est fournie et est [un nom valide d'un élément personnalisé](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
    - Ou si `extends` est fournie mais que l'élément indiqué est inconnu.
- `SyntaxError` [`DOMException`](/fr/docs/Web/API/DOMException)
  - : Exception levée si le nom fourni n'est pas [un nom valide pour un élément personnalisé](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name).
- [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Exception levée si le deuxième argument passé n'est pas un constructeur.

> **Note :** Si vous rencontrez l'exception `NotSupportedError` lors d'un appel à `define()`, cela ne signifie pas nécessairement que c'est cette méthode qui échoue. Il s'agit plutôt généralement d'un problème lié à [`Element.attachShadow()`](/fr/docs/Web/API/Element/attachShadow).

## Exemples

### Élément personnalisé autonome

Le code suivant est tiré de notre exemple [`popup-info-box-web-component`](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component) (vous pouvez [voir le résultat de l'exemple ici](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)).

#### JavaScript

```js
// On crée une classe pour l'élément
class PopUpInfo extends HTMLElement {
  constructor() {
    // On appelle super pour commencer dans le constructeur
    super();

    // On crée une racine sombre
    const shadow = this.attachShadow({ mode: "open" });

    // On crée quelques éléments <span>
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // On prend le contenu de l'attribut et on le place
    // dans le fragment d'informations
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // On insère l'icône
    const img = document.createElement("img");
    img.src = this.hasAttribute("img")
      ? this.getAttribute("img")
      : "img/default.png";
    icon.appendChild(img);

    // On met en forme
    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }
      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }
      img {
        width: 1.2rem;
      }
      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // On attache les éléments créés au DOM sombre
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// On définit le nouvel élément
customElements.define("popup-info", PopUpInfo);
```

#### HTML

```html
<popup-info
  img="img/alt.png"
  data-text="Le cryptogramme visuel de votre carte permet une meilleure sécurité. Il s'agit d'une séquence de 3 ou 4 chiffres au dos de votre carte."></popup-info>
```

> **Note :** Les constructeurs pour les éléments personnalisés autonomes doivent étendre [`HTMLElement`](/fr/docs/Web/API/HTMLElement).

### Élément personnalisé natif

Le code qui suit est tiré de l'exemple [`word-count-web-component`](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) (vous pouvez [voir le résultat de l'exemple ici](https://mdn.github.io/web-components-examples/word-count-web-component/)).

#### JavaScript

```js
// On crée une classe pour l'élément
class WordCount extends HTMLParagraphElement {
  constructor() {
    // On appelle super pour commencer le constructeur
    super();

    // On compte les mots dans l'élément parent
    const wcParent = this.parentNode;

    function countWords(node) {
      const text = node.innerText || node.textContent;
      return text
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0).length;
    }

    const count = `Mots : ${countWords(wcParent)}`;

    // On crée une racine sombre
    const shadow = this.attachShadow({ mode: "open" });

    // On crée un nœud texte et on y inscrit le nombre de mot
    const text = document.createElement("span");
    text.textContent = count;

    // On l'ajoute à la racine sombre
    shadow.appendChild(text);

    // On met à jour le compteur lorsque le contenu de l'élément
    // change
    setInterval(() => {
      const count = `Mots : ${countWords(wcParent)}`;
      text.textContent = count;
    }, 200);
  }
}

// On définit le nouvel élément
customElements.define("word-count", WordCount, { extends: "p" });
```

#### HTML

```html
<p is="word-count"></p>
```

### Créer un élément empêchant l'attachement à une racine sombre

Si la classe utilisée pour l'élément contient une propriété statique nommée `disabledFeatures` et qui contient la chaîne de caractères `shadow`, la méthode [`Element.attachShadow()`](/fr/docs/Web/API/Element/attachShadow) renverra une exception [`DOMException`](/fr/docs/Web/API/DOMException)de type `NotSupportedError`.

```js
class PopUpInfo extends HTMLElement {
  static get disabledFeatures() {
    return ["shadow"];
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    // Cela entraînera une erreur lors de la définition de
    // l'élément.
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

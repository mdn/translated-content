---
title: "Element : méthode attachShadow()"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("Shadow DOM")}}

La méthode **`attachShadow()`** de l'interface {{DOMxRef("Element")}} attache un arbre de DOM d'ombre à l'élément défini et retourne une référence à son {{DOMxRef("ShadowRoot")}}.

## Syntaxe

```js-nolint
attachShadow(options)
```

### Paramètres

- `options`
  - : Un objet qui contient les champs suivants&nbsp;:
    - `mode`
      - : Une chaîne de caractères définissant le _mode d'encapsulation_ pour l'arbre de DOM d'ombre.
        Cela peut être l'une des valeurs suivantes&nbsp;:
        - `open`
          - : Les éléments à l'intérieur de la racine d'ombre sont accessibles depuis JavaScript avec la propriété {{DOMxRef("Element.shadowRoot","shadowRoot")}} de l'élément.
        - `closed`
          - : Les éléments à l'intérieur de la racine d'ombre ne peuvent pas être accessibles depuis JavaScript avec la propriété {{DOMxRef("Element.shadowRoot","shadowRoot")}}, qui est définie sur `null`.

    - `clonable` {{Optional_Inline}}
      - : Un booléen qui définit si la racine d'ombre peut être clonée&nbsp;: lorsqu'il est défini sur `true`, l'élément hôte d'ombre cloné à l'aide de {{DOMxRef("Node.cloneNode()")}} ou {{DOMxRef("Document.importNode()")}} inclut la racine d'ombre dans la copie. Sa valeur par défaut est `false`.

    - `customElementRegistry` {{Optional_Inline}}
      - : Un objet {{DOMxRef('CustomElementRegistry')}} qui est utilisé comme [registre d'éléments personnalisés avec portée](/fr/docs/Web/API/Web_components/Using_custom_elements#registres_des_éléments_personnalisés_avec_portée) de la racine d'ombre attachée.
        Si `null` ou `undefined`, la racine d'ombre utilise le registre global référencé par {{DOMxRef("Window.customElements")}}.

    - `delegatesFocus` {{Optional_Inline}}
      - : Un booléen qui, lorsqu'il est défini sur `true`, définit un comportement qui atténue les problèmes de focalisation des éléments personnalisés.
        Lorsqu'une partie non sélectionnable du DOM d'ombre est cliqué, la première partie sélectionnable reçoit la sélection, et l'hôte d'ombre reçoit tout style `:focus` disponible. Sa valeur par défaut est `false`.

    - `referenceTarget` {{Optional_Inline}} {{Experimental_Inline}}
      - : Une chaîne de caractères qui indique la cible effective de toute référence à un élément faite contre l'hôte d'ombre depuis l'extérieur de l'élément hôte. La valeur doit être l'ID d'un élément à l'intérieur du DOM d'ombre. Si elle est définie, les références à l'élément hôte depuis l'extérieur du DOM d'ombre font en sorte que l'élément cible référencé devienne la cible effective de la référence à l'élément hôte.

    - `serializable` {{Optional_Inline}}
      - : Un booléen qui, lorsqu'il est défini sur `true`, indique que la racine d'ombre est mise en sérialisation.
        Si défini, la racine d'ombre peut être sérialisée en appelant les méthodes {{DOMxRef('Element.getHTML()')}} ou {{DOMxRef('ShadowRoot.getHTML()')}} avec le paramètre `options.serializableShadowRoots` défini sur `true`.
        Sa valeur par défaut est `false`.

    - `slotAssignment` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le _mode d'assignation des emplacements_ pour l'arbre DOM d'ombre. Cela peut être l'une des valeurs suivantes&nbsp;:
        - `named`
          - : Les éléments sont automatiquement assignés aux éléments HTML {{HTMLElement("slot")}} dans cette racine d'ombre.
            Tous les enfants de premier niveau de l'hôte avec un attribut `slot` correspondant à l'attribut `name` d'un `<slot>` dans cette racine d'ombre sont assignés à cet emplacement.
            Tous les enfants de premier niveau de l'hôte sans attribut `slot` sont assignés au premier `<slot>` sans attribut `name` («&nbsp;l'emplacement par défaut&nbsp;»), si un tel emplacement est présent.
            C'est la valeur par défaut.
        - `manual`
          - : Les éléments sont assignés manuellement à des éléments HTML {{HTMLElement("slot")}} particuliers à l'aide de {{DOMxRef("HTMLSlotElement.assign()")}}.
            Aucune assignation automatique n'a lieu.

### Valeur de retour

Retourne un objet {{DOMxRef("ShadowRoot")}}.

### Exceptions

- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Cette erreur peut être levée lorsque vous essayez d'attacher une racine d'ombre à un élément&nbsp;:
    - en dehors de l'espace de noms HTML ou qui ne peut pas avoir d'ombre attachée.
    - lorsque la propriété statique de définition de l'élément `disabledFeatures` a reçu la valeur `"shadow"`.
    - qui a déjà une racine d'ombre qui n'a pas été créée de manière déclarative.
    - qui a une [racine d'ombre déclarative](/fr/docs/Web/HTML/Reference/Elements/template#dom_dombre_déclaratif) mais dont le `mode` définit ne correspond pas au mode existant.
    - lors du passage d'une valeur `customElementRegistry` qui n'est ni `null` ni un registre à portée locale (que vous avez créé en utilisant `new CustomElementRegistry()`).
      L'erreur est levée si vous passiez le registre global.

## Description

La méthode **`Element.attachShadow()`** attache un arbre DOM d'ombre à l'élément défini et retourne une référence à sa racine d'ombre ({{DOMxRef("ShadowRoot")}}).

C'est le mécanisme programmatique pour créer un `ShadowRoot`, qui est le nœud racine d'un [DOM d'ombre](/fr/docs/Web/API/Web_components/Using_shadow_DOM) attaché à un élément hôte (il est également possible de créer un `ShadowRoot` de manière déclarative en utilisant l'attribut [`shadowrootmode`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootmode) de l'élément HTML {{HTMLElement("template")}}).
Il est utilisé pour créer des [éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements).

### Éléments auxquels vous pouvez attacher un DOM d'ombre

Notez que vous ne pouvez pas attacher une racine d'ombre à tous les types d'éléments.
Il y en a certains qui ne peuvent pas avoir de DOM d'ombre pour des raisons de sécurité (par exemple {{HTMLElement("a")}}).

La liste suivante présente les éléments auxquels vous _pouvez_ attacher une racine d'ombre&nbsp;:

- Tout élément personnalisé autonome avec un [nom valide <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("blockquote")}}
- {{HTMLElement("body")}}
- {{HTMLElement("div")}}
- {{HTMLElement("footer")}}
- `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}`
- `{{HTMLElement("Heading_Elements", "&lt;h2&gt;")}}`
- `{{HTMLElement("Heading_Elements", "&lt;h3&gt;")}}`
- `{{HTMLElement("Heading_Elements", "&lt;h4&gt;")}}`
- `{{HTMLElement("Heading_Elements", "&lt;h5&gt;")}}`
- `{{HTMLElement("Heading_Elements", "&lt;h6&gt;")}}`
- {{HTMLElement("header")}}
- {{HTMLElement("main")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("p")}}
- {{HTMLElement("section")}}
- {{HTMLElement("span")}}

### Appeler cette méthode sur un élément qui est déjà un hôte d'ombre

Cette méthode peut être appelée sur un élément disposant déjà d'une [racine d'ombre déclarative](/fr/docs/Web/HTML/Reference/Elements/template#dom_dombre_déclaratif), à conditions que le mode définit dans `mode` corresponde au mode existant.
Dans ce cas, le {{DOMxRef("ShadowRoot")}} déjà présent est effacé puis retourné.
Cela permet de gérer les cas où, par exemple, le rendu côté serveur a déjà créé de manière déclarative une racine d'ombre, puis où le code côté client tente de rattacher à nouveau cette racine.

Dans le cas contraire, l'appel de `attachShadow()` sur un élément disposant déjà d'une racine d'ombre lève une exception.

### Racines d'ombre ouvertes et fermées

Une racine d'ombre peut être attachée avec un [mode](#mode) d'encapsulation, qui est défini comme étant soit `open` (ouverte) soit `closed` (fermée).

Si l'argument `{mode: "open"}` est passé, la propriété {{DOMxRef("Element.shadowRoot", "shadowRoot")}} de l'élément hôte peut ensuite être utilisée pour obtenir la racine d'ombre attachée.
Cela peut être utilisé pour accéder aux éléments dans le DOM d'ombre&nbsp;:

```js
element.attachShadow({ mode: "open" });
element.shadowRoot; // Retourne un objet ShadowRoot
```

Si l'argument `{mode: "closed"}` est passé, la propriété {{DOMxRef("Element.shadowRoot", "shadowRoot")}} de l'élément est définie sur `null`.
Notez que JavaScript peut toujours accéder à une racine d'ombre fermée en stockant la valeur retournée par la fonction.

```js
element.attachShadow({ mode: "closed" });
element.shadowRoot; // Retourne null
```

## Exemples

### Élément personnalisé de comptage de mots

L'exemple suivant est tiré de notre démo [word-count-web-component <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) ([à découvrir également en direct <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/word-count-web-component/)).
Vous pouvez constater que nous utilisons `attachShadow()` au milieu du code pour créer une racine fantôme, à laquelle nous attachons ensuite le contenu de notre élément personnalisé.

```js
// Crée une classe pour l'élément
class CompteurMot extends HTMLParagraphElement {
  constructor() {
    // Toujours appeler super en premier dans le constructeur
    super();

    // compter le nombre de mots dans l'élément parent de l'élément
    const wcParent = this.parentNode;

    function compteurMots(noeud) {
      const texte = noeud.innerText || noeud.textContent;
      return texte
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0).length;
    }

    const compte = `Mots : ${compteurMots(wcParent)}`;

    // Crée une racine d'ombre
    const ombre = this.attachShadow({ mode: "open" });

    // Crée un nœud de texte et y ajoute le nombre de mots
    const texte = document.createElement("span");
    texte.textContent = compte;

    // L'ajouter à la racine d'ombre
    ombre.appendChild(texte);

    // Met à jour le compte lorsque le contenu de l'élément change
    this.parentNode.addEventListener("input", () => {
      texte.textContent = `Mots : ${compteurMots(wcParent)}`;
    });
  }
}

// Définir le nouvel élément
customElements.define("compteur-mot", CompteurMot, { extends: "p" });
```

### Désactiver le DOM d'ombre

Si l'élément a une propriété statique nommée `fonctionnalitesDesactivees`, qui est un tableau contenant la chaîne de caractères `"shadow"`, alors l'appel à `attachShadow()` lève une exception.

Par exemple&nbsp;:

```js
class MonElementPersonnalise extends HTMLElement {
  // Désactiver le DOM d'ombre pour cet élément.
  static fonctionnalitesDesactivees = ["shadow"];

  constructor() {
    super();
  }

  connectedCallback() {
    // Crée une racine d'ombre.
    // Cela lève une exception.
    const ombre = this.attachShadow({ mode: "open" });
  }
}

// Définir le nouvel élément
customElements.define("mon-element-personnalise", MonElementPersonnalise);
```

### Attribuer un emplacement nommé

Cet exemple illustre l'attribution d'un emplacement nommé.

#### Créer un composant web

Ce code crée un composant web comportant trois emplacements nommés pour le titre, les métadonnées et le corps d'un article.

Le `ShadowRoot` est associé dans le constructeur de l'élément personnalisé.
Nous n'avons pas besoin de définir explicitement l'option `slotAssignment: "named"`, car c'est la valeur par défaut.

```js
class MonArticle extends HTMLElement {
  constructor() {
    super();
    // Attacher la racine d'ombre
    this.attachShadow({ mode: "open" /* , slotAssignment: "named" */ });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Définir la structure interne et les styles
    this.shadowRoot.innerHTML = `
      <style>
        .entete {
          background-color: plum;
        }
        .meta {
          background-color: green;
        }
        .corps {
          background-color: lightblue;
        }
      </style>

      <h2 class="entete">
        <slot name="titre"></slot>
      </h2>

      <div class="meta">
        <slot name="meta"></slot>
      </div>

      <div class="corps">
        <slot></slot>
      </div>
    `;
  }
}

// Définir le composant
customElements.define("mon-article", MonArticle);
```

#### Utiliser le composant web

Le HTML ci-dessous utilise le composant web `<mon-article>` que nous venons de créer.
Les éléments imbriqués sont rendus dans les emplacements du composant en fonction de la correspondance des noms.
Les éléments non nommés sont rendus dans l'emplacement non nommé (le corps).

```html
<mon-article>
  <span slot="titre">Texte pour l'emplacement du titre</span>
  <span slot="meta">Texte pour l'emplacement des métadonnées</span>

  <p>
    Texte 1 sans attribut slot. Va dans l'emplacement par défaut (non nommé) à
    l'intérieur d'un div «&nbsp;corps&nbsp;».
  </p>
  <p>
    Texte 2 sans attribut slot. Va également dans l'emplacement par défaut (non
    nommé) à l'intérieur d'un div «&nbsp;corps&nbsp;».
  </p>
</mon-article>
```

#### Résultats

Cet exemple doit montrer le contenu des emplacements affichés dans les sections appropriées.

{{EmbedLiveSample("Attribuer un emplacement nommé", 100, 220)}}

### Attribuer un emplacement qui n'est pas nommé

Cet exemple montre [l'attribution manuelle d'un emplacement](/fr/docs/Web/API/HTMLSlotElement/assign).
Avec cette approche, chaque élément doit être attribué manuellement à un emplacement particulier à l'aide de {{DOMxRef("HTMLSlotElement.assign()")}}.
Il n'y a pas d'attribution par défaut, donc tout emplacement non attribué est vide.

#### HTML

Tout d'abord, nous avons un avertissement de support caché, affiché avec JavaScript si le navigateur ne prend pas en charge `slotAssignment: "manual"`.

```html
<p id="support-warning" hidden>
  ⛔ Votre navigateur ne prend pas en charge l'attribution manuelle
  d'emplacement (l'attribution nommée est utilisée).
</p>
```

Ensuite, nous définissons notre élément personnalisé `<mon-article>` avec des éléments enfants pour le titre, les métadonnées et le contenu du corps.
Chaque enfant est identifié par `id`&nbsp;; contrairement à l'attribution d'emplacement nommée, aucun attribut `slot` n'est nécessaire.

```html
<mon-article>
  <span id="texte_titre">Texte pour l'emplacement du titre</span>
  <span id="texte_meta">Texte pour l'emplacement des métadonnées</span>
  <p id="texte_corps_1">Texte 1 pour l'emplacement du corps.</p>
  <p id="texte_corps_2">Texte 2 pour l'emplacement du corps.</p>
</mon-article>
```

#### JavaScript

L'élément personnalisé attache une racine d'ombre avec `slotAssignment: "manual"`.
Le DOM d'ombre contient des emplacements non nommés identifiés par `id`.
La méthode `assignSlots()` attribue manuellement les éléments du DOM visible aux emplacements.
Notez que plusieurs nœuds peuvent être attribués à un seul emplacement — l'ordre dans lequel ils sont définis contrôle l'ordre de rendu.

```js
class MonArticle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open", slotAssignment: "manual" });
  }

  connectedCallback() {
    this.render();
    this.assignSlots();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .entete {
          background-color: plum;
        }
        .meta {
          background-color: green;
        }
        .corps {
          background-color: lightblue;
        }
      </style>

      <h2 class="entete">
        <slot id="titreEmplacement"></slot>
      </h2>

      <div class="meta">
        <slot id="metaEmplacement"></slot>
      </div>

      <div class="corps">
        <slot id="corpsEmplacement"></slot>
      </div>
    `;
  }

  assignSlots() {
    // 1. Cibler vos emplacements
    const titreEmplacement = this.shadowRoot.querySelector("#titreEmplacement");
    const metaEmplacement = this.shadowRoot.querySelector("#metaEmplacement");
    const corpsEmplacement = this.shadowRoot.querySelector("#corpsEmplacement");

    // 2. Cibler vos éléments du DOM visible
    const texteTitre = this.querySelector("#texte_titre");
    const texteMeta = this.querySelector("#texte_meta");
    const texteCorps1 = this.querySelector("#texte_corps_1");
    const texteCorps2 = this.querySelector("#texte_corps_2");

    // 3. Attribuer manuellement les éléments
    titreEmplacement.assign(texteTitre);
    metaEmplacement.assign(texteMeta);
    corpsEmplacement.assign(texteCorps2, texteCorps1);
  }
}

customElements.define("mon-article", MonArticle);
```

Ce code teste si la propriété {{DOMxRef("ShadowRoot.slotAssignment")}} est définie et affiche l'avertissement si ce n'est pas le cas.

```js
const isSlotAssignmentSupported = Object.hasOwn(
  ShadowRoot.prototype,
  "slotAssignment",
);

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isSlotAssignmentSupported);
```

#### Résultats

L'exemple ci-dessous doit afficher le contenu des emplacements dans les sections appropriées.

{{EmbedLiveSample("Attribuer un emplacement qui n'est pas nommé", 100, 220)}}

> [!NOTE]
> Si l'attribution manuelle des emplacements n'est pas prise en charge, un avertissement est affiché et le navigateur utilise l'attribution `named`.
> Cependant, comme aucun des éléments du DOM clair n'a d'attribut `slot`, ils sont tous insérés dans le premier emplacement non nommé (l'emplacement du titre).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("ShadowRoot.mode")}}
- La propriété {{DOMxRef("ShadowRoot.delegatesFocus")}}
- La propriété {{DOMxRef("ShadowRoot.slotAssignment")}}
- Attacher de manière déclarative une racine d'ombre avec l'attribut [`shadowrootmode`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootmode) de l'élément [`<template>`](/fr/docs/Web/HTML/Reference/Elements/template)
- [DOM d'ombre déclaratif <sup>(angl.)</sup>](https://web.dev/articles/declarative-shadow-dom) sur web.dev (2023)

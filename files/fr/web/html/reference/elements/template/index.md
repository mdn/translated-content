---
title: "<template> : l'élément de modèle de contenu"
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: 6991c03349b4916c90ab113cc464788fb72a1f84
---

L'élément [HTML](/fr/docs/Web/HTML) **`<template>`** sert de mécanisme pour contenir des fragments {{Glossary("HTML")}}, qui peuvent être utilisés plus tard via JavaScript ou générés immédiatement dans le DOM d'ombre.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `shadowrootmode`
  - : Crée une [racine d'ombre](/fr/docs/Glossary/Shadow_tree) pour l'élément parent.
    Il s'agit d'une version déclarative de la méthode {{DOMxRef("Element.attachShadow()")}} et accepte les mêmes valeurs {{Glossary("enumerated", "énumérées")}}.
    - `open`
      - : Expose le DOM interne de la racine d'ombre pour JavaScript (recommandé pour la plupart des cas d'usage).

    - `closed`
      - : Masque le DOM interne de la racine d'ombre pour JavaScript.

    > [!NOTE]
    > L'analyseur HTML crée un objet {{DOMxRef("ShadowRoot")}} dans le DOM pour le premier `<template>` d'un nœud dont cet attribut est défini sur une valeur autorisée.
    > Si l'attribut n'est pas défini, ou n'est pas défini sur une valeur autorisée — ou si une `ShadowRoot` a déjà été créée de manière déclarative dans le même parent — alors un {{DOMxRef("HTMLTemplateElement")}} est construit.
    > Un {{DOMxRef("HTMLTemplateElement")}} ne peut pas être transformé en racine d'ombre après l'analyse, par exemple, en définissant {{DOMxRef("HTMLTemplateElement.shadowRootMode")}}.

    > [!NOTE]
    > Vous pouvez rencontrer l'attribut non standard `shadowroot` dans d'anciens tutoriels et exemples qui étaient pris en charge dans Chrome 90-110. Cet attribut a depuis été supprimé et remplacé par l'attribut standard `shadowrootmode`.

- `shadowrootclonable`
  - : Définit la valeur de la propriété {{DOMxRef("ShadowRoot.clonable", "clonable")}} d'un objet {{DOMxRef("ShadowRoot")}} créé avec cet élément à `true`.
    Si défini, un clone de l'hôte d'ombre (l'élément parent de ce `<template>`) créé avec {{DOMxRef("Node.cloneNode()")}} ou {{DOMxRef("Document.importNode()")}} inclura une racine d'ombre dans la copie.

- `shadowrootdelegatesfocus`
  - : Définit la valeur de la propriété {{DOMxRef("ShadowRoot.delegatesFocus")}} d'un objet {{DOMxRef("ShadowRoot")}} créé avec cet élément à `true`.
    Si cela est défini et qu'un élément non sélectionnable dans l'arbre d'ombre est sélectionné, la sélection est déléguée au premier élément sélectionnable de l'arbre.
    La valeur par défaut est `false`.

- `shadowrootreferencetarget` {{Experimental_Inline}}
  - : Définit la valeur de la propriété `referenceTarget` d'un objet {{DOMxRef("ShadowRoot")}} créé avec cet élément. La valeur doit être l'identifiant d'un élément à l'intérieur du DOM d'ombre. Si défini, les références ciblant l'élément hôte depuis l'extérieur du DOM d'ombre feront que l'élément cible référencé deviendra la cible effective de la référence à l'élément hôte.

- `shadowrootserializable`
  - : Définit la valeur de la propriété {{DOMxRef("ShadowRoot.serializable")}} d'un objet {{DOMxRef("ShadowRoot")}} créé avec cet élément à `true`.
    Si défini, la racine d'ombre peut être sérialisée en appelant les méthodes {{DOMxRef("Element.getHTML()")}} ou {{DOMxRef("ShadowRoot.getHTML()")}} avec le paramètre `options.serializableShadowRoots` défini à `true`.
    La valeur par défaut est `false`.

## Notes d'utilisation

Cet élément n'a pas de contenu autorisé, car tout ce qui est imbriqué à l'intérieur dans le code source HTML ne devient pas réellement enfant de l'élément `<template>`. La propriété {{DOMxRef("Node.childNodes")}} de l'élément `<template>` est toujours vide, et vous ne pouvez accéder à ce contenu imbriqué que via la propriété spéciale {{DOMxRef("HTMLTemplateElement.content", "content")}}. Cependant, si vous appelez {{DOMxRef("Node.appendChild()")}} ou des méthodes similaires sur l'élément `<template>`, vous insérerez des enfants dans l'élément `<template>` lui-même, ce qui viole son modèle de contenu et ne met pas à jour le {{DOMxRef("DocumentFragment")}} retourné par la propriété `content`.

En raison de la façon dont l'élément `<template>` est analysé, toutes les balises `<html>`, `<head>` et `<body>` ouvrantes et fermantes à l'intérieur du template sont des erreurs de syntaxe et sont ignorées par l'analyseur, donc `<template><head><title>Test</title></head></template>` équivaut à `<template><title>Test</title></template>`.

Il existe deux principales façons d'utiliser l'élément `<template>`.

### Fragment de document de template

Par défaut, le contenu de l'élément n'est pas affiché.
L'interface {{DOMxRef("HTMLTemplateElement")}} correspondante inclut une propriété standard {{DOMxRef("HTMLTemplateElement.content", "content")}} (sans attribut de contenu/marquage équivalent). Cette propriété `content` est en lecture seule et contient un {{DOMxRef("DocumentFragment")}} qui inclut le sous-arbre DOM représenté par le template.

Les méthodes {{DOMxRef("Node.cloneNode()")}} et {{DOMxRef("Document.importNode()")}} créent toutes deux une copie d'un nœud. La différence est que `importNode()` clone le nœud dans le contexte du document appelant, tandis que `cloneNode()` utilise le document du nœud cloné. Le contexte du document détermine le {{DOMxRef("CustomElementRegistry")}} pour la construction de tout élément personnalisé. Pour cette raison, utilisez `document.importNode()` pour cloner le fragment `content` afin que les descendants d'éléments personnalisés soient construits selon les définitions du document courant, plutôt que du document séparé qui possède le contenu du template. Voir les exemples de la page {{DOMxRef("Node.cloneNode()")}} pour plus de détails.

Notez que le conteneur `DocumentFragment` lui-même ne doit pas contenir de données. Voir l'exemple [Les données sur le DocumentFragment ne sont pas clonées](#les_données_sur_le_documentfragment_ne_sont_pas_clonées) pour plus de détails.

### DOM d'ombre déclaratif

Si l'élément `<template>` contient l'attribut [`shadowrootmode`](#shadowrootmode) avec la valeur `open` ou `closed`, l'analyseur HTML génère immédiatement un DOM d'ombre. L'élément est remplacé dans le DOM par son contenu enveloppé dans un {{DOMxRef("ShadowRoot")}}, qui est attaché à l'élément parent.
C'est l'équivalent déclaratif de l'appel à {{DOMxRef("Element.attachShadow()")}} pour attacher une racine d'ombre à un élément.

Si l'élément a une autre valeur pour `shadowrootmode`, ou n'a pas l'attribut `shadowrootmode`, l'analyseur génère un {{DOMxRef("HTMLTemplateElement")}}.
De même, s'il y a plusieurs racines d'ombre déclaratives, seule la première est remplacée par un {{DOMxRef("ShadowRoot")}} — les suivantes sont analysées comme des objets {{DOMxRef("HTMLTemplateElement")}}.

## Exemples

### Générer des lignes de tableau

Nous commençons d'abord par la partie HTML de l'exemple.

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- des données existantes pourraient éventuellement être incluses
         ici -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

Au début, on a un tableau HTML pour lequel on insèrera du contenu plus tard grâce à l'aide d'un script JavaScript. Ensuite, on a le _template_ qui décrit la structure du fragment HTML représentant une ligne de tableau.

Avec le tableau créé et le template défini, on utilise JavaScript pour insérer des lignes dans le tableau dont chacune est construite à partir du _template_.

```js
// On vérifie si le navigateur prend en charge
// l'élément HTML template en vérifiant la présence
// de l'attribut content pour l'élément template.
if ("content" in document.createElement("template")) {
  // On prépare une ligne pour le tableau
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#productrow");

  // On clone la ligne et on l'insère dans le tableau
  const clone = document.importNode(template.content, true);
  let td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Pistolet à portails";

  tbody.appendChild(clone);

  // On fait de même pour une autre ligne
  const clone2 = document.importNode(template.content, true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Compagnon cube";

  tbody.appendChild(clone2);
} else {
  // Une autre méthode pour ajouter les lignes
  // car l'élément HTML n'est pas pris en charge.
}
```

Le résultat correspond au tableau HTML original avec deux lignes supplémentaires qui ont été ajoutées grâce au code JavaScript&nbsp;:

```css hidden
table {
  background: black;
}
table td {
  background: white;
}
```

{{EmbedLiveSample("Générer des lignes de tableau", 500, 120)}}

### Implémentation d'un DOM d'ombre déclaratif

Dans cet exemple, un avertissement de compatibilité caché est inclus au début du balisage. Cet avertissement est ensuite affiché via JavaScript si le navigateur ne prend pas en charge l'attribut `shadowrootmode`. Ensuite, il y a deux éléments {{HTMLElement("article")}}, chacun contenant des éléments {{HTMLElement("style")}} imbriqués avec des comportements différents. Le premier élément `<style>` est global à tout le document. Le second est limité à la racine d'ombre générée à la place de l'élément `<template>` grâce à la présence de l'attribut `shadowrootmode`.

```html
<p hidden>
  ⛔ Votre navigateur ne prend pas encore en charge l'attribut
  <code>shadowrootmode</code>.
</p>
<article>
  <style>
    p {
      padding: 8px;
      background-color: wheat;
    }
  </style>
  <p>Je suis dans le DOM.</p>
</article>
<article>
  <template shadowrootmode="open">
    <style>
      p {
        padding: 8px;
        background-color: plum;
      }
    </style>
    <p>Je suis dans le DOM d'ombre.</p>
  </template>
</article>
```

```js
const isShadowRootModeSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootMode",
);

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootModeSupported);
```

{{EmbedLiveSample("Implémentation d'un DOM d'ombre déclaratif", "", 120)}}

### DOM d'ombre déclaratif avec délégation de sélection

Cet exemple montre comment `shadowrootdelegatesfocus` est appliqué à une racine d'ombre créée de manière déclarative, et l'effet que cela a sur la sélection.

Le code commence par déclarer une racine d'ombre à l'intérieur d'un élément `<div>`, en utilisant l'élément `<template>` avec l'attribut `shadowrootmode`.
Cela affiche à la fois un `<div>` non sélectionnable contenant du texte et un élément `<input>` sélectionnable.
Il utilise également du CSS pour mettre en forme les éléments avec {{CSSxRef(":focus")}} en bleu, et pour définir la mise en forme normale de l'élément hôte.

```html
<div>
  <template shadowrootmode="open">
    <style>
      :host {
        display: block;
        border: 1px dotted black;
        padding: 10px;
        margin: 10px;
      }
      :focus {
        outline: 2px solid blue;
      }
    </style>
    <div>Texte cliquable dans le DOM d'ombre</div>
    <input type="text" placeholder="Entrée dans le DOM d'ombre" />
  </template>
</div>
```

Le second bloc de code est identique, à ceci près qu'il définit l'attribut `shadowrootdelegatesfocus`, qui délègue la sélection au premier élément sélectionnable de l'arbre si un élément non sélectionnable est sélectionné.

```html
<div>
  <template shadowrootmode="open" shadowrootdelegatesfocus>
    <style>
      :host {
        display: block;
        border: 1px dotted black;
        padding: 10px;
        margin: 10px;
      }
      :focus {
        outline: 2px solid blue;
      }
    </style>
    <div>Texte cliquable dans le DOM d'ombre</div>
    <input type="text" placeholder="Entrée dans le DOM d'ombre" />
  </template>
</div>
```

Enfin, on utilise le CSS suivant pour appliquer une bordure rouge à l'élément parent `<div>` lorsqu'il est sélectionné.

```css
div:focus {
  border: 2px solid red;
}
```

Les résultats sont affichés ci-dessous.
Lorsque le HTML est d'abord rendu, les éléments n'ont aucune mise en forme, comme le montre la première image.
Pour la racine d'ombre qui n'a pas l'attribut `shadowrootdelegatesfocus` défini, vous pouvez cliquer n'importe où sauf sur l'élément `<input>` et la sélection ne change pas (si vous sélectionnez l'élément `<input>`, il ressemblera à la seconde image).

![Capture d'écran du code sans sélection](template_with_no_focus.png)

Pour la racine d'ombre avec l'attribut `shadowrootdelegatesfocus` défini, cliquer sur le texte (qui n'est pas sélectionnable) sélectionne l'élément `<input>`, car c'est le premier élément sélectionnable de l'arbre.
Cela sélectionne également l'élément parent comme illustré ci-dessous.

![Capture d'écran du code où l'élément est sélectionné](template_with_focus.png)

## Les données sur le DocumentFragment ne sont pas clonées

Lorsqu'une valeur {{DOMxRef("DocumentFragment")}} est transmise, {{DOMxRef("Node.appendChild")}} et des méthodes similaires déplacent uniquement les _nœuds enfants_ de cette valeur dans le nœud cible. Il est donc généralement préférable d'attacher les gestionnaires d'évènements aux enfants d'un `DocumentFragment`, plutôt qu'au `DocumentFragment` lui-même.

Considérez l'exemple HTML et JavaScript suivant&nbsp;:

### HTML

```html
<div id="container"></div>

<template id="template">
  <div>Cliquez sur moi</div>
</template>
```

### JavaScript

```js
const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  event.target.append(" — Div cliqué");
}

const firstClone = document.importNode(template.content, true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = document.importNode(template.content, true);
secondClone.children[0].addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

### Résultat

Comme `firstClone` est un `DocumentFragment`, seuls ses enfants sont ajoutés à `container` lorsque `appendChild` est appelé&nbsp;; les gestionnaires d'évènements de `firstClone` ne sont pas copiés. En revanche, comme un gestionnaire d'évènements est ajouté au premier _nœud enfant_ de `secondClone`, le gestionnaire est copié lors de l'appel à `appendChild`, et le clic fonctionne comme attendu.

{{EmbedLiveSample("Les données sur le DocumentFragment ne sont pas clonées")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_méta-données"
          >Contenu de méta-données</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#éléments_supports_de_script"
          >élément destiné aux scripts</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucune (voir les <a href="#notes_dutilisation">Notes d'utilisation</a>).</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_méta-données"
          >Contenu de méta-données</a
        >, du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, ou
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#éléments_supports_de_script"
          >des éléments destinés aux scripts</a
        >. L'élément {{HTMLElement("colgroup")}} est également autorisé
        s'il n'a pas l'attribut
        <a href="/fr/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLTemplateElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les attributs HTML [`part`](/fr/docs/Web/HTML/Reference/Global_attributes/part) et [`exportparts`](/fr/docs/Web/HTML/Reference/Global_attributes/exportparts)
- L'élément {{HTMLElement("slot")}}
- Les pseudo-classes CSS {{CSSxRef(":has-slotted")}}, {{CSSxRef(":host")}}, {{CSSxRef(":host_function", ":host()")}} et {{CSSxRef(":host-context", ":host-context()")}}
- Les pseudo-éléments CSS {{CSSxRef("::part")}} et {{CSSxRef("::slotted")}}
- L'interface API {{DOMxRef("ShadowRoot")}}
- [Utilisation des modèles et des emplacements](/fr/docs/Web/API/Web_components/Using_templates_and_slots)
- Le module [de délimitation de CSS](/fr/docs/Web/CSS/Guides/Scoping)
- [DOM d'ombre déclaratif (avec html)](/fr/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) dans _Utiliser le DOM d'ombre_
- [DOM d'ombre déclaratif <sup>(angl.)</sup>](https://web.dev/articles/declarative-shadow-dom) sur web.dev (2023)

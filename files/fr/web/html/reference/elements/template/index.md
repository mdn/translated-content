---
title: "Élément HTML `<template>` : l'élément de modèle de contenu"
short-title: <template>
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: a447d93f8c264d39c49e9f465ad780a81e92ed71
---

L'élément [HTML](/fr/docs/Web/HTML) **`<template>`** sert de mécanisme pour contenir des fragments {{Glossary("HTML")}}, qui peuvent être utilisés plus tard avec JavaScript, générés immédiatement et insérés dans un DOM d'ombre, ou utilisés dans le cadre de {{Glossary("Out_of_order_patching", "la mise à jour hors séquence")}} avec `<template for="...">`.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `for` {{Experimental_Inline}}
  - : L'attribut `for` est utilisé pour la mise à jour hors séquence avec `<template for="...">`, correspondant à un marqueur équivalent `<?start id="...">` ou `<?marker "...">`. Voir la [section sur la mise à jour hors séquence](#mettre_à_jour_hors_séquence) et la [section des exemples](#exemples).

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
    Si défini, un clone de l'hôte d'ombre (l'élément parent de ce `<template>`) créé avec {{DOMxRef("Node.cloneNode()")}} ou {{DOMxRef("Document.importNode()")}} inclut une racine d'ombre dans la copie.

- `shadowrootcustomelementregistry` {{Experimental_Inline}}
  - : Définit la propriété [`customElementRegistry`](/fr/docs/Web/API/ShadowRoot/customElementRegistry) d'une [`ShadowRoot`](/fr/docs/Web/API/ShadowRoot) créée avec cet élément à `null`, plutôt que celle du registre d'éléments personnalisés du document [registre d'éléments personnalisés](/fr/docs/Web/API/Document/customElementRegistry).
    Cela permet d'attacher ultérieurement un {{DOMxRef("CustomElementRegistry")}} à portée locale en utilisant {{DOMxRef("CustomElementRegistry.initialize()")}}.

- `shadowrootdelegatesfocus`
  - : Définit la valeur de la propriété {{DOMxRef("ShadowRoot.delegatesFocus")}} d'un objet {{DOMxRef("ShadowRoot")}} créé avec cet élément à `true`.
    Si c'est défini et qu'un élément non sélectionnable dans l'arbre d'ombre est sélectionné, la sélection est déléguée au premier élément sélectionnable de l'arbre.
    La valeur par défaut est `false`.

- `shadowrootreferencetarget` {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Définit la valeur de la propriété `referenceTarget` d'un objet {{DOMxRef("ShadowRoot")}} créé avec cet élément. La valeur doit être l'identifiant d'un élément à l'intérieur du DOM d'ombre. Si défini, les références ciblant l'élément hôte depuis l'extérieur du DOM d'ombre font que l'élément cible référencé devient la cible effective de la référence à l'élément hôte.

- `shadowrootserializable`
  - : Définit la valeur de la propriété {{DOMxRef("ShadowRoot.serializable")}} d'un objet {{DOMxRef("ShadowRoot")}} créé avec cet élément à `true`.
    Si défini, la racine d'ombre peut être sérialisée en appelant les méthodes {{DOMxRef("Element.getHTML()")}} ou {{DOMxRef("ShadowRoot.getHTML()")}} avec le paramètre `options.serializableShadowRoots` défini à `true`.
    La valeur par défaut est `false`.

- `shadowrootslotassignment` {{Experimental_Inline}}
  - : Définit la propriété [`slotAssignment`](/fr/docs/Web/API/ShadowRoot/slotAssignment) d'un objet [`ShadowRoot`](/fr/docs/Web/API/ShadowRoot) créé avec cet élément.
    Il s'agit de l'équivalent déclaratif de l'option [`slotAssignment`](/fr/docs/Web/API/Element/attachShadow#slotassignment) de la méthode {{DOMxRef("Element.attachShadow()")}}.
    - `named`
      - : Les éléments sont automatiquement assignés aux éléments {{HTMLElement("slot")}} à l'intérieur de cette racine d'ombre.
        C'est la valeur par défaut.

        Les éléments avec l'attribut [`slot`](/fr/docs/Web/API/Element/slot) sont assignés au premier {{HTMLElement("slot")}} dans le template qui a l'attribut `name` correspondant.
        Si plusieurs éléments définissent le même nom de slot, ils sont tous ajoutés au premier slot dans le template qui a ce nom, et rendus dans l'ordre dans lequel ils sont déclarés.
        Tous les éléments non nommés — les éléments qui ne définissent pas d'attribut `slot` — sont assignés au slot par défaut dans l'ordre dans lequel ils sont déclarés.
        Il s'agit du premier `<slot>` non nommé dans le template.

    - `manual`
      - : Les éléments sont assignés manuellement à des éléments de slot particuliers en utilisant {{DOMxRef("HTMLSlotElement.assign()")}}.
        Aucune assignation automatique n'a lieu.

## Notes d'utilisation

Cet élément n'a pas de contenu autorisé, car tout ce qui est imbriqué à l'intérieur dans le code source HTML ne devient pas réellement enfant de l'élément `<template>`. La propriété {{DOMxRef("Node.childNodes")}} de l'élément `<template>` est toujours vide, et vous ne pouvez accéder à ce contenu imbriqué que avec la propriété spéciale {{DOMxRef("HTMLTemplateElement.content", "content")}}. Cependant, si vous appelez {{DOMxRef("Node.appendChild()")}} ou des méthodes similaires sur l'élément `<template>`, vous insérez des enfants dans l'élément `<template>` lui-même, ce qui viole son modèle de contenu et ne met pas à jour le {{DOMxRef("DocumentFragment")}} retourné par la propriété `content`.

En raison de la façon dont l'élément `<template>` est analysé, toutes les balises `<html>`, `<head>` et `<body>` ouvrantes et fermantes à l'intérieur du template sont des erreurs de syntaxe et sont ignorées par l'analyseur, donc `<template><head><title>Test</title></head></template>` équivaut à `<template><title>Test</title></template>`.

Il existe trois principales façons d'utiliser l'élément `<template>`.

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

D'autres attributs préfixés par `shadowroot` permettent une personnalisation déclarative du `ShadowRoot`, comme le contrôle de l'affectation des emplacements.

### Mettre à jour hors séquence

> [!NOTE]
> Ce cas d'utilisation est encore expérimental et bénéficie d'une prise en charge limitée dans les navigateurs.
> Consultez le tableau de [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus d'informations sur la prise en charge par les navigateurs.

De manière traditionnelle, le HTML est livré dans l'ordre et lu, traité et affiché de haut en bas. Pour changer cet ordre, vous pouvez soit masquer ou réorganiser les éléments avec CSS, soit mettre à jour le DOM produit par le HTML par la suite avec JavaScript. Cependant, de nombreuses pages sont composées de plusieurs parties qui peuvent être prêtes à être rendues à différents moments, ou qui peuvent être plus importantes à livrer à l'utilisateur·ice plus tôt.

L'élément `<template>` permet de livrer du HTML {{Glossary("Out_of_order_patching", "hors séquence")}}, ce qui implique de remplacer les marqueurs [d'instruction de traitement](/fr/docs/Web/API/ProcessingInstruction) par le contenu de l'élément `<template>` (également appelé **correction**).

Par exemple, un marqueur d'instruction de traitement `<?marker name="my-identifier">` peut être corrigé avec le contenu d'un élément `<template for="my-identifier">` fourni beaucoup plus tard dans le HTML. Voir l'exemple [Utiliser `<template for>` pour la correction](#utiliser_template_for_pour_la_correction).

Tout comme le marqueur d'instruction de traitement `<?marker>`, une paire `<?start>` et `<?end>` peut être utilisée pour contenir du contenu temporaire (par exemple, `<?start name="my-identifier">Chargement...<?end>`), qui est affiché temporairement jusqu'à ce que le `<template for="my-identifier">` soit traité et que toute la section soit remplacée. Voir l'exemple [Utiliser `<template for>` pour la correction de plage](#utiliser_template_for_pour_la_correction_de_plage).

Lorsqu'elles sont écrites en HTML, les instructions de traitement peuvent être fournies avec ou sans le `?` final, et le navigateur l'ajoute si ce n'est pas le cas lors de l'analyse du DOM. Les deux formes `<?start?>` et `<?start>` sont donc valides et analysées comme `<?start?>`. XML est plus strict et exige le `?` final.

Si l'attribut `for` ne correspond à aucun `name` d'instruction de traitement, le contenu de l'élément `<template>` reste caché dans le DOM et n'est utilisé dans aucune correction.

Pour empêcher les composants de mettre à jour des parties non liées du DOM, les éléments `<template for="...">` ne peuvent corriger que les marqueurs à l'intérieur de l'arbre DOM du parent `<template>`. La seule exception est les éléments `<template>` qui sont des enfants directs de l'élément `<body>` — ils peuvent également corriger les éléments `<head>` pour permettre la mise à jour de `<title>` et d'autres éléments `<head>`.

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
    <!-- des données existantes peuvent éventuellement être incluses
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

Au début, on a un tableau HTML pour lequel on insère du contenu plus tard grâce à l'aide d'un script JavaScript. Ensuite, on a le _template_ qui décrit la structure du fragment HTML représentant une ligne de tableau.

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
  // Une autre méthode pour ajouter les lignes,
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

Dans cet exemple, un avertissement de compatibilité caché est inclus au début du balisage. Cet avertissement est ensuite affiché avec JavaScript si le navigateur ne prend pas en charge l'attribut `shadowrootmode`. Ensuite, il y a deux éléments {{HTMLElement("article")}}, chacun contenant des éléments {{HTMLElement("style")}} imbriqués avec des comportements différents. Le premier élément `<style>` est global à tout le document. Le second est limité à la racine d'ombre générée à la place de l'élément `<template>` grâce à la présence de l'attribut `shadowrootmode`.

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
Pour la racine d'ombre qui n'a pas l'attribut `shadowrootdelegatesfocus` défini, vous pouvez cliquer n'importe où sauf sur l'élément `<input>` et la sélection ne change pas (si vous sélectionnez l'élément `<input>`, il ressemble à la seconde image).

![Capture d'écran du code sans sélection](template_with_no_focus.png)

Pour la racine d'ombre avec l'attribut `shadowrootdelegatesfocus` défini, cliquer sur le texte (qui n'est pas sélectionnable) sélectionne l'élément `<input>`, car c'est le premier élément sélectionnable de l'arbre.
Cela sélectionne également l'élément parent comme illustré ci-dessous.

![Capture d'écran du code où l'élément est sélectionné](template_with_focus.png)

### DOM d'ombre déclaratif avec attribution d'emplacements nommés

Cet exemple montre comment les éléments peuvent être attribués à des emplacements dans un DOM d'ombre en fonction de leur [`attribut slot`](/fr/docs/Web/API/Element/slot) (correspondant à l'attribut `name` de l'emplacement).

#### HTML

Tout d'abord, nous définissons un élément {{HTMLElement("article")}} qui présente le titre, les métadonnées et le corps de l'article.

L'article contient un élément `<template>` qui devient une racine d'ombre, en raison de la présence de l'attribut `shadowrootmode`.
Nous n'avons pas besoin de définir son attribut `shadowrootslotassignment`, car l'attribution d'emplacements nommés est la valeur par défaut.

Le modèle définit des éléments qui ont des emplacements nommés pour les informations `"header"` et `"meta"`, et un emplacement non nommé pour les informations `"body"`.
Les éléments sont mis en forme différemment afin qu'il soit facile de les différencier.

```html
<article id="host">
  <template shadowrootmode="open" shadowrootslotassignment="named">
    <style>
      .header {
        background-color: plum;
      }
      .meta {
        background-color: green;
      }
      .body {
        background-color: lightblue;
      }
    </style>

    <h2 class="header">
      <slot name="title"></slot>
    </h2>

    <div class="meta">
      <slot name="meta"></slot>
    </div>

    <div class="body">
      <slot></slot>
    </div>
  </template>

  <p>
    Texte 1 sans attribut de slot. Va dans l'emplacement par défaut (non nommé)
    à l'intérieur de la div "body".
  </p>
  <span slot="title">Texte pour l'emplacement du titre</span>
  <span slot="meta">Texte pour l'emplacement des métadonnées</span>
  <p>
    Texte 2 sans attribut de slot. Va également dans l'emplacement par défaut
    (non nommé) à l'intérieur de la div "body".
  </p>
</article>
```

À l'intérieur du même hôte, sous le modèle, nous avons quatre éléments pour remplir les emplacements.
Les éléments {{HTMLElement("span")}} ont des attributs `slot` qui correspondent aux attributs `name` des emplacements dans le modèle, et remplissent les emplacements correspondants.
Les deux éléments {{HTMLElement("p")}} n'ont pas de nom, ils sont donc tous deux insérés dans l'emplacement non nommé `<slot>` dans l'élément "body".

#### Résultats

L'exemple ci-dessous doit montrer le contenu des emplacements affiché dans les sections appropriées.

{{EmbedLiveSample("DOM d'ombre déclaratif avec attribution d'emplacements nommés", 100, 220)}}

### DOM d'ombre déclaratif avec attribution manuelle d'emplacements

Cet exemple montre comment les éléments peuvent être attribués à des emplacements dans un DOM d'ombre en utilisant une attribution manuelle des emplacements.

Avec cette approche, chaque élément doit être attribué manuellement à un emplacement particulier.
Il n'y a pas d'attribution par défaut, donc tout emplacement non attribué reste vide.

#### HTML

Tout d'abord, nous avons un avertissement de support caché.
Cet avertissement est ensuite affiché avec JavaScript si le navigateur ne prend pas en charge l'attribut `shadowrootslotassignment`.

```html
<p id="support-warning" hidden>
  ⛔ Votre navigateur ne prend pas encore en charge l'attribut
  <code>shadowrootslotassignment</code>.
</p>
```

Ensuite, nous définissons un élément {{HTMLElement("article")}} qui présente les informations de titre, de métadonnées et de corps de l'article.
Cela contient un élément `<template>` qui devient une racine d'ombre, en raison de la présence de l'attribut `shadowrootmode`, et utilise une attribution manuelle des emplacements, car `shadowrootslotassignment="manual"` est défini.

Le modèle définit des éléments qui ont des emplacements pour les informations `"header"`, `"meta"` et `"body"`, qui peuvent être référencés séparément par leur attribut `id`.
Les éléments sont mis en forme différemment afin qu'il soit facile de les différencier.

```html
<article id="host">
  <template shadowrootmode="open" shadowrootslotassignment="manual">
    <style>
      .header {
        background-color: plum;
      }
      .meta {
        background-color: green;
      }
      .body {
        background-color: lightblue;
      }
    </style>

    <h2 class="header">
      <slot id="titleSlot"></slot>
    </h2>

    <div class="meta">
      <slot id="metaSlot"></slot>
    </div>

    <div class="body">
      <slot id="bodySlot"></slot>
    </div>
  </template>

  <span id="text_title">Texte pour l'emplacement du titre</span>
  <span id="text_meta">Texte pour l'emplacement des métadonnées</span>
  <p id="text_body_1">Texte 1 pour l'emplacement du corps.</p>
  <p id="text_body_2">Texte 2 pour l'emplacement du corps.</p>
</article>
```

À l'intérieur du même hôte, sous le modèle, nous avons quatre éléments pour remplir les emplacements.
Ces éléments sont également identifiés par leur identifiant.

#### JavaScript

Le JavaScript pour l'attribution manuelle des emplacements est montré ci-dessous.
Tout d'abord, le code obtient les emplacements dans la racine d'ombre, puis le texte à insérer, et enfin attribue le texte à l'emplacement.
Notez que vous ne pouvez attribuer un nœud qu'une seule fois à un emplacement particulier, et que si vous attribuez plusieurs nœuds à un seul emplacement en utilisant {{DOMxRef("HTMLSlotElement.assign()")}}, l'ordre dans lequel ils sont définis contrôle l'ordre dans lequel ils sont ajoutés.

```js
const host = document.querySelector("#host");
const shadow = host.shadowRoot;

// 1. Ciblez vos emplacements
const titleSlot = shadow.querySelector("#titleSlot");
const metaSlot = shadow.querySelector("#metaSlot");
const bodySlot = shadow.querySelector("#bodySlot");

// 2. Ciblez les éléments à insérer dans les emplacements
const body1Text = document.querySelector("#text_body_1");
const body2Text = document.querySelector("#text_body_2");
const titleText = document.querySelector("#text_title");
const metaText = document.querySelector("#text_meta");

// 3. Attribuez-les manuellement
titleSlot.assign(titleText);
metaSlot.assign(metaText);
bodySlot.assign(body2Text, body1Text);
```

Le code affiche l'avertissement de support caché si l'attribution des emplacements n'est pas prise en charge.

```js
const isShadowRootSlotAssignmentSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootSlotAssignment",
);

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootSlotAssignmentSupported);
```

#### Résultats

L'exemple ci-dessous doit afficher le contenu des emplacements dans les sections appropriées.

{{EmbedLiveSample("DOM d'ombre déclaratif avec attribution manuelle d'emplacements", 100, 220)}}

> [!NOTE]
> Si l'attribut `shadowrootslotassignment` n'est pas pris en charge, une note d'avertissement est affichée et le navigateur utilise l'attribution `named`.
> Cependant, comme aucun des emplacements ou des éléments à insérer n'est nommé, tous les éléments sont insérés dans l'emplacement du titre (car c'est le premier emplacement non nommé, et donc l'emplacement "par défaut").

### Les données sur le DocumentFragment ne sont pas clonées

Lorsqu'une valeur {{DOMxRef("DocumentFragment")}} est transmise, {{DOMxRef("Node.appendChild")}} et des méthodes similaires déplacent uniquement les _nœuds enfants_ de cette valeur dans le nœud cible. Il est donc généralement préférable d'attacher les gestionnaires d'évènements aux enfants d'un `DocumentFragment`, plutôt qu'au `DocumentFragment` lui-même.

Considérez l'exemple HTML et JavaScript suivant&nbsp;:

#### HTML

```html
<div id="container"></div>

<template id="template">
  <div>Cliquez sur moi</div>
</template>
```

#### JavaScript

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

#### Résultat

Comme `firstClone` est un `DocumentFragment`, seuls ses enfants sont ajoutés à `container` lorsque `appendChild` est appelé&nbsp;; les gestionnaires d'évènements de `firstClone` ne sont pas copiés. En revanche, comme un gestionnaire d'évènements est ajouté au premier _nœud enfant_ de `secondClone`, le gestionnaire est copié lors de l'appel à `appendChild`, et le clic fonctionne comme attendu.

{{EmbedLiveSample("Les données sur le DocumentFragment ne sont pas clonées")}}

### Utiliser `<template for>` pour la correction

Cet exemple utilise l'instruction de traitement `<?marker name="placeholder">` comme espace réservé et remplit ensuite le contenu à l'aide de `<template for="placeholder">`.

```html-nolint
<body>
  <div>
    <?marker name="placeholder">
  </div>
  …
  <template for="placeholder">Lorem Ipsum…</template>
  …
</body>
```

Initialement, cela entraîne le rendu d'un `<div>` vide. Il est ensuite mis à jour comme suit après l'analyse et le traitement de l'élément `<template>`&nbsp;:

```html-nolint
  <div>
    Lorem Ipsum…
  </div>
```

### Utiliser `<template for>` pour la correction de plage

Cet exemple utilise les instructions de traitement `<?start>` et `<?end>` pour contenir le contenu de l'espace réservé, qui est initialement affiché puis remplacé par le contenu de `<template for>` ultérieurement.

```html-nolint
<body>
  <div>
    <?start name="placeholder">
    Chargement…
    <?end>
  </div>
  …
  <template for="placeholder">Lorem Ipsum…</template>
  …
</body>
```

Initialement, le `<div>` est rendu avec le contenu de l'espace réservé `Chargement…`. Il est ensuite mis à jour comme suit après l'analyse et le traitement de l'élément `<template>`&nbsp;:

```html-nolint
  <div>
    Lorem Ipsum…
  </div>
```

Cet exemple démontre également l'absence d'enfants et d'imbrication des instructions de traitement. Les instructions de traitement `<?start>` et `<?end>`, bien que liées en termes de leur relation avec `<template for>`, sont des [nœuds](/fr/docs/Web/API/Node) distincts et non des balises ouvrantes et fermantes. Elles ne contiennent donc pas le contenu `Chargement…` en tant qu'enfant (comme le montre l'absence d'indentation).

### Utiliser `<template for>` pour la correction des éléments `<head>`

Cet exemple montre que les éléments `<template for>` qui sont des enfants directs de l'élément `<body>` peuvent corriger les marqueurs `<head>`.

```html-nolint
<head>
  …
  <?start name="title"><title>Chargement…</title><?end>
  <?start name="meta-description"><meta name="description" contents="Chargement…"><?end>
  …
</head>
<body>
  …
  <template for="title"><title>Le titre réel de la page</title></template>
  <template for="meta-description"><meta name="description" contents="Ceci est une description significative…"></template>
  …
</body>
```

Le résultat suivant apparaît une fois que les éléments `<template>` ont été analysés&nbsp;:

```html-nolint
<head>
  …
  <title>Le titre réel de la page</title>
  <meta name="description" contents="Ceci est une description significative…">
  …
</head>
<body>
  …
</body>
```

### Inclure des marqueurs dans `<template for>` pour permettre de modifier à nouveau le contenu ultérieurement

Vous pouvez également insérer des marqueurs à l'intérieur des éléments `<template for>`, créant ainsi de nouveaux espaces réservés pour permettre la mise à jour du même contenu à plusieurs reprises. Vous pouvez réutiliser les attributs `name` existants.

Par exemple, si vous créez une {{Glossary("SPA", "application monopage")}} avec `<template for>`, vous souhaitez peut-être permettre la mise à jour de `<title>` à chaque mise à jour de route, ce qui peut être réalisé comme suit&nbsp;:

```html-nolint
<head>
  …
  <?start name="title">
  <title>Chargement…</title>
  <?end>
  …
</head>
<body>
  …
  <template for="title"><?start name="title"><title>Le titre réel de la page</title><?end></template>
  …
</body>
```

Une fois l'élément `<template>` analysé, cela donne le résultat suivant&nbsp;:

```html-nolint
<head>
  …
  <?start name="title"><title>Le titre réel de la page</title><?end>
  …
</head>
<body>
  …
</body>
```

Par la suite, un nouveau `<template for="title">` peut être inséré dans le DOM pour remplacer à nouveau le `<title>`.

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

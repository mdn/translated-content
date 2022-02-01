---
title: '<dfn> : l''élément de définition'
slug: Web/HTML/Element/dfn
tags:
  - Definition
  - Definitions
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Semantic Markup
  - Web
  - dfn
translation_of: Web/HTML/Element/dfn
browser-compat: html.elements.dfn
---
{{HTMLRef}}

L'élément HTML **`<dfn>`** (aussi nommé « définition ») est utilisé pour indiquer le terme défini dans le contexte d'une expression ou d'une phrase de définition. L'élément [`<p>`](/fr/docs/Web/HTML/Element/p), le couple [`<dt>`](/fr/docs/Web/HTML/Element/dt)/[`<dd>`](/fr/docs/Web/HTML/Element/dd) ou l'élément [`<section>`](/fr/docs/Web/HTML/Element/section) qui est le plus proche ancêtre de `<dfn>` est considéré comme la définition du terme.

{{EmbedInteractiveExample("pages/tabbed/dfn.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Contenu phrasé</a
        >
        mais sans élément <code>&#x3C;dfn></code> qui soit un descendant.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/aria/#term"><code>term</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme pour tous les éléments, on peut appliquer [les attributs universels](/fr/docs/Web/HTML/Global_attributes) sur `<dfn>`.

Pour cet élément, l'attribut **`title`** possède un sens particulier noté ci-après.

## Notes d'utilisation

L'utilisation de l'élément `<dfn>` présente certains aspects peu évidents. Nous les examinons ici.

### Spécifier le terme à définir

Le terme à définir est identifié selon ces règles :

1.  Si l'élément `<dfn>` possède un attribut [`title`](/fr/docs/Web/HTML/Global_attributes#attr-title), la valeur de l'attribut `title` est considérée comme étant le terme défini. L'élément doit toujours contenir du texte, mais ce texte peut être une abréviation (peut-être en utilisant [`<abbr>`](/fr/docs/Web/HTML/Element/abbr)) ou une autre forme du terme.
2.  Si le `<dfn>` contient un seul élément enfant et n'a pas de contenu textuel propre, et que l'élément enfant est un élément [`<abbr>`](/fr/docs/Web/HTML/Element/abbr) avec un attribut `title` lui-même, alors la valeur exacte du `<abbr>` de l'élément `title` est le terme défini.
3.  Sinon, le contenu textuel de l'élément `<dfn>` est le terme défini. Ceci est illustré [dans le premier exemple ci-dessous](#basic_identification_of_a_term).

> **Note :** Si l'élément `<dfn>` possède un attribut `title`, il _doit_ contenir le terme défini et aucun autre texte.

### Liens vers des éléments de type `<dfn>`

Si vous incluez un attribut [`id`](/fr/docs/Web/HTML/Global_attributes#attr-id) sur l'élément `<dfn>`, vous pouvez ensuite créer un lien vers celui-ci en utilisant des éléments [`<a>`](/fr/docs/Web/HTML/Element/a). Ces liens doivent être des utilisations du terme, l'objectif étant que le lecteur puisse accéder rapidement à la définition du terme s'il ne la connaît pas déjà, en cliquant sur le lien du terme.

C'est ce que montre l'exemple sous [Liens vers les définitions](#links_to_definitions) ci-dessous.

## Exemples

Voyons quelques exemples de divers scénarios d'utilisation.

### Identification simple d'un terme

Dans cet exemple, on utilise simplement l'élément `<dfn>` afin d'identifier l'emplacement du terme défini au sein de sa définition.

#### HTML

```html
<p>
  L'élément HTML de définition
  (<strong><dfn>&lt;dfn&gt;</dfn></strong>) est
  utilisé afin d'indiquer le terme en cours de
  définition dans la phrase.
</p>
```

L'élément `<dfn>` n'ayant ici pas d'attribut `title`, c'est le contenu textuel qui représente le terme que l'on définit.

#### Résultat

{{EmbedLiveSample("Identification_simple_d'un_terme", "", 120)}}

### Liens vers des définitions

Il est possible d'utiliser l'attribut `id` afin de créer des liens avec des éléments [`<a>`](/fr/docs/Web/HTML/Element/a) qui pointent vers la définition.

#### HTML

```html
<p>L'élément de définition
(<strong><dfn id="definition-dfn">&lt;dfn&gt;</dfn></strong>) est
utilisé afin d'indiquer le terme en train d'être défini dans le
contexte d'une phrase.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graece
donan, Latine voluptatem vocant. Confecta res esset. Duo Reges:
constructio interrete. Scrupulum, inquam, abeunti; </p>

<p>Negare non possum. Dat enim intervalla et relaxat. Quonam modo?
Equidem e Cn. Quid de Pythagora? In schola desinis. </p>

<p>Ubi ut eam caperet aut quando? Cur iustitia laudatur? Aperiendum
est igitur, quid sit voluptas; Quid enim? Non est igitur voluptas
bonum. Urgent tamen et nihil remittunt. Quid enim possumus hoc
agere divinius? </p>

<p>C'est pourquoi nous avons décidé d'utiliser l'élément
<code><a href="#definition-dfn">&lt;dfn&gt;</a></code> pour
ce projet.</p>
```

On voit ici que l'élément possède désormais un attribut [`id`](/fr/docs/Web/HTML/Global_attributes#attr-id) avec la valeur `"definition-dfn"`. Cet attribut permet d'utiliser l'élément comme cible d'un lien. Plus bas, on crée un tel lien avec un élément [`<a>`](/fr/docs/Web/HTML/Element/a) dont l'attribut [`href`](/fr/docs/Web/HTML/Element/a#attr-href) vaut `"#definition-dfn"`, ce qui permet de remonter à la définition.

#### Résultat

{{EmbedLiveSample("Liens_vers_des_définitions", "", 350)}}

### Utiliser les abréviations et les définitions

Dans certains cas, on souhaite utiliser l'abréviation d'un terme lorsqu'on le définit. Pour cela, on peut utiliser `<dfn>` et [`<abbr>`](/fr/docs/Web/HTML/Element/abbr) de la façon suivante :

#### HTML

```html
<p>Le <dfn><abbr title="Télescope Spatial Hubble">TSH</abbr></dfn>
est l'un des instruments scientifiques les plus productifs jamais
construits. Il est en orbite depuis plus de 20 ans, scrutant le ciel
et renvoyant des données et des photographies d'une qualité et d'un
niveau de détail sans précédent.</p>

<p>En effet, le <abbr title="Télescope Spatial Hubble">TSH</abbr> a sans
doute fait plus pour faire avancer la science que tout autre appareil
jamais construit.</p>
```

On notera que l'élément `<abbr>` est imbriqué dans l'élément `<dfn>`. L'élément `<abbr>` indique que le terme est une abréviation ("HST") et indique le détail de cette abrévation ("Hubble Space Telescope") grâce à son attribut `title`. L'élément `<dfn>` indique quant à lui que c'est bien ce terme abrégé qu'on est en train de définir.

#### Résultat

{{EmbedLiveSample("Utiliser_les_abréviations_et_les_définitions", "", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Éléments liés aux listes de définitions : [`<dl>`](/fr/docs/Web/HTML/Element/dl), [`<dt>`](/fr/docs/Web/HTML/Element/dt), [`<dd>`](/fr/docs/Web/HTML/Element/dd)
- L'élément [`<abbr>`](/fr/docs/Web/HTML/Element/abbr)

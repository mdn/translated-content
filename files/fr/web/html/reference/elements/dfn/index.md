---
title: "<dfn> : l'élément de définition"
slug: Web/HTML/Reference/Elements/dfn
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<dfn>`** indique un terme à définir. L'élément `<dfn>` doit être utilisé dans une phrase de définition complète, où la définition du terme peut être l'une des suivantes&nbsp;:

- Le paragraphe ancêtre (un bloc de texte, parfois marqué par un élément {{HTMLElement("p")}}).
- L'association {{HTMLElement("dt")}}/{{HTMLElement("dd")}}.
- L'ancêtre de type [section](/fr/docs/Web/HTML/Guides/Content_categories#contenu_sectionnant) le plus proche de l'élément `<dfn>`.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;dfn&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Un <dfn id="def-validator">validateur</dfn> est un programme qui vérifie les
  erreurs de syntaxe dans du code ou des documents.
</p>
```

```css interactive-example
dfn {
  /* Ajoutez vos styles ici */
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

L'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) possède un sens particulier, comme noté ci-après.

## Notes d'utilisation

L'utilisation de l'élément `<dfn>` présente certains aspects peu évidents. Nous les examinons ici.

### Indiquer le terme à définir

Le terme à définir est identifié selon ces règles&nbsp;:

1. Si l'élément `<dfn>` possède un attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title), la valeur de l'attribut `title` est considérée comme étant le terme défini. L'élément doit toujours contenir du texte, mais ce texte peut être une abréviation (peut-être en utilisant {{HTMLElement("abbr")}}) ou une autre forme du terme.
2. Si le `<dfn>` contient un seul élément enfant et n'a pas de contenu textuel propre, et que l'élément enfant est un élément {{HTMLElement("abbr")}} avec un attribut `title` lui-même, alors la valeur exacte du `<abbr>` de l'élément `title` est le terme défini.
3. Sinon, le contenu textuel de l'élément `<dfn>` est le terme défini. Ceci est illustré [dans le premier exemple ci-dessous](#basic_identification_of_a_term).

> [!NOTE]
> Si l'élément `<dfn>` possède un attribut `title`, il _doit_ contenir le terme défini et aucun autre texte.

### Liens vers des éléments de type `<dfn>`

Si vous incluez un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) sur l'élément `<dfn>`, vous pouvez ensuite créer un lien vers celui-ci en utilisant des éléments {{HTMLElement("a")}}. Ces liens doivent être des utilisations du terme, l'objectif étant que le lecteur puisse accéder rapidement à la définition du terme s'il ne la connaît pas déjà, en cliquant sur le lien du terme.

C'est ce que montre l'exemple sous [Liens vers les définitions](#liens_vers_des_définitions) ci-dessous.

## Exemples

Voyons quelques exemples de divers scénarios d'utilisation.

### Identification simple d'un terme

Dans cet exemple, on utilise simplement l'élément `<dfn>` afin d'identifier l'emplacement du terme défini au sein de sa définition.

#### HTML

```html
<p>
  L'élément HTML de définition (<strong><dfn>&lt;dfn&gt;</dfn></strong
  >) est utilisé afin d'indiquer le terme en cours de définition dans la phrase.
</p>
```

L'élément `<dfn>` n'ayant ici pas d'attribut `title`, c'est le contenu textuel qui représente le terme que l'on définit.

#### Résultat

{{EmbedLiveSample("Identification simple d'un terme'un_terme", 650, 120)}}

### Liens vers des définitions

Pour ajouter des liens vers les définitions, créez le lien comme d'habitude, avec l'élément {{HTMLElement("a")}}.

#### HTML

```html
<p>
  L'élément de définition (<strong
    ><dfn id="definition-dfn">&lt;dfn&gt;</dfn></strong
  >) est utilisé afin d'indiquer le terme en train d'être défini dans le
  contexte d'une phrase.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graece donan, Latine
  voluptatem vocant. Confecta res esset. Duo Reges: constructio interrete.
  Scrupulum, inquam, abeunti;
</p>

<p>
  C'est pourquoi nous avons décidé d'utiliser l'élément
  <code><a href="#definition-dfn">&lt;dfn&gt;</a></code> pour ce projet.
</p>
```

On voit ici que l'élément possède désormais un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) avec la valeur `"definition-dfn"`. Cet attribut permet d'utiliser l'élément comme cible d'un lien. Plus bas, on crée un tel lien avec un élément `<a>` dont l'attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/a#href) vaut `"#definition-dfn"`, ce qui permet de remonter à la définition.

#### Résultat

{{EmbedLiveSample("Liens vers des définitions", 650, 300)}}

### Utiliser les abréviations et les définitions

Dans certains cas, on souhaite utiliser l'abréviation d'un terme lorsqu'on le définit. Pour cela, on peut utiliser `<dfn>` et {{HTMLElement("abbr")}} de la façon suivante&nbsp;:

#### HTML

```html
<p>
  Le <dfn><abbr title="Télescope Spatial Hubble">TSH</abbr></dfn> est l'un des
  instruments scientifiques les plus productifs jamais construits. Il est en
  orbite depuis plus de 20 ans, scrutant le ciel et renvoyant des données et des
  photographies d'une qualité et d'un niveau de détail sans précédent.
</p>

<p>
  En effet, le <abbr title="Télescope Spatial Hubble">TSH</abbr> a sans doute
  fait plus pour faire avancer la science que tout autre appareil jamais
  construit.
</p>
```

On notera que l'élément `<abbr>` est imbriqué dans l'élément `<dfn>`. L'élément `<abbr>` indique que le terme est une abréviation («&nbsp;HST&nbsp;») et indique le détail de cette abrévation («&nbsp;Hubble Space Telescope&nbsp;») grâce à son attribut `title`. L'élément `<dfn>` indique quant à lui que c'est bien ce terme abrégé qu'on est en train de définir.

#### Résultat

{{EmbedLiveSample("Utiliser les abréviations et les définitions", 650, 200)}}

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/term_role"><code>term</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments liés aux listes de définitions&nbsp;: {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, {{HTMLElement("dd")}}
- L'élément {{HTMLElement("abbr")}}

---
title: '<abbr> : l''élément d''abréviation'
slug: Web/HTML/Element/abbr
tags:
  - Acronym
  - Definitions
  - Element
  - HTML
  - HTML text-level semantics
  - HTML:Flow content
  - HTML:Palpable Content
  - HTML:Phrasing content
  - Reference
  - Web
  - abbr
  - abbreviation
  - semantics
translation_of: Web/HTML/Element/abbr
browser-compat: html.elements.abbr
---
{{HTMLRef}}

L'élément HTML **`<abbr>`** (**abréviation** en français) représente une abréviation ou un acronyme ; l'attribut facultatif [`title`](/fr/docs/Web/HTML/Global_attributes#attr-title) peut fournir une explication ou une description de l'abréviation. S'il est présent, `title` doit contenir cette description complète et rien d'autre.

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/Guide/HTML/Content_categories"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phras.c3.a9"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Contenu autorisé</dfn></th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phras.c3.a9"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omission de balises</dfn></th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Parents autorisés</dfn></th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phras.c3.a9"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément n'a pas d'autres attributs que les [attributs universels](/fr/docs/Web/HTML/Global_attributes).

On notera que l'attribut **`title`** possède ici une sémantique spécifique et il représente la description complète de l'abréviation. Souvent, mais pas nécessairement, il s'affiche comme une info-bulle au survol de la souris.

Chaque élément `<abbr>` est indépendant, rattacher un titre à l'un ne l'associe pas aux abréviations identiques qui suivent.

## Notes d'utilisation

### Cas d'usage généraux

Il n'est pas obligatoire d'utiliser `<abbr>` pour toutes les abréviations d'un document mais voici quelques cas où cet élément s'avère pertinent :

- Lorsqu'une abréviation est utilisée et qu'on souhaite fournir une définition ou une explication en dehors du contenu du document, on utilisera `<abbr>` avec un attribut [`title`](/fr/docs/Web/HTML/Global_attributes#attr-title) adéquat.
- Lorsqu'une abréviation fait partie d'un jargon ou d'un vocabulaire qui risque d'être inconnu du lecteur, un élément `<abbr>` avec un attribut `title` explicatif pourra être utilisé.
- Lorsqu'on souhaite bénéficier de la sémantique liée à l'abréviation (par exemple pour les manipuler en script ou les mettre en forme avec des feuilles de style), on pourra utiliser `<abbr>` pour identifier ces contenus.
- Lorsqu'on souhaite définir des termes qui sont des abréviations, on pourra utiliser une combinaison de `<abbr>` et de [`<dfn>`](/fr/docs/Web/HTML/Element/dfn). Voir ci-après pour un exemple.

### Grammaire

Lorsqu'il est présent, le nombre (grammatical) du texte de l'attribut **`title`** devrait correspondre à celui du contenu de l'élément `abbr`. C'est également le cas dans les langues avec plus de deux genres grammaticaux (par exemple, l'arabe, en plus des catégories pour le singulier et le pluriel, possède également une catégorie double).

## Mise en forme par défaut

Le but de cet élément est purement explicatif. Tous les navigateurs l'affichent en ligne (`display: inline`) par défaut mais le reste de la mise en forme par défaut peut varier d'un navigateur à l'autre :

- Certains navigateurs tels qu'Internet Explore lui appliquent la même mise en forme qu'à un élément [`<span>`](/fr/docs/Web/HTML/Element/span).
- Opera, Firefox et d'autres navigateurs souligne l'abréviation avec une ligne de points.
- D'autres navigateurs ne soulignent pas le texte mais l'écrivent en petites majuscules. Pour éviter ce comportement, on pourra utiliser la règle CSS `font-variant: none`.

## Exemples

### Baliser une abréviation pour marquer la sémantique

On peut baliser une abréviation sans fournir de description ou de définition, il suffit d'utiliser `<abbr>` sans attribut.

#### HTML

```html
<p>
  Nous allons voir le <abbr>HTML</abbr> qui sert à construire
  des pages web.
</p>
```

#### Résultat

{{EmbedLiveSample("Baliser_une_abréviation_pour_marquer_la_sémantique", "100%", 80)}}

### Mettre en forme des abréviations

CSS peut être utilisé pour appliquer une mise en forme particulière sur les abréviations.

#### HTML

```html
<p>Avec <abbr>CSS</abbr>, on peut mettre en forme les éléments.</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### Résultat

{{EmbedLiveSample("Mettre_en_forme_des_abréviations", "100%", 80)}}

### Fournir une description

On peut ajouter un attribut [`title`](/fr/docs/Web/HTML/Global_attributes#attr-title) afin de fournir une description de l'abréviation ou de l'acronyme.

#### HTML

```html
<p>Et là je lui ai répondu <abbr title="Laugh Out Loud">LOL</abbr>.</p>
```

#### Résultat

{{EmbedLiveSample("Fournir_une_description", "100%", 80)}}

### Définir une abréviation

Il est possible d'utiliser l'élément `<abbr>` avec [`<dfn>`](/fr/docs/Web/HTML/Element/dfn) afin de formellement définir une abréviation.

#### HTML

```html
<p><dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr>
</dfn> est un langage de balise qui permet de créer la structure
et d'organiser la sémantique d'une page web.</p>

<p>Une <dfn id="spec">spécification</dfn>
(<abbr title="spécification">spec</abbr>) est un document qui décrit,
de façon détaillée comme une technologie ou une API fonctionne et comment
l'utiliser.</p>
```

#### Résultat

{{EmbedLiveSample("Définir_une_abréviation", "100%", 160)}}

## Accessibilité

C'est une bonne pratique que d'épeler l'acronyme ou l'abréviation lorsqu'elle est utilisée pour la première fois. Cela permet au lecteur de mieux comprendre le terme, notamment si celui-ci est technique ou appartient à un jargon spécifique.

#### Exemple

```html
<p>JavaScript Object Notation (<abbr>JSON</abbr>) est un format léger
  d'échange de données.</p>
```

Cela peut servir aux personnes qui découvrent ces concepts pour la première fois ou pour les personnes souffrant de troubles cognitifs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'élément `<abbr>`](/fr/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations)

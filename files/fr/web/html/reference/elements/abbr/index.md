---
title: "<abbr> : l'élément d'abréviation"
slug: Web/HTML/Reference/Elements/abbr
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<abbr>`** représente une abréviation ou un acronyme.

Lors de l'inclusion d'une abréviation ou d'un acronyme, fournissez le développement complet du terme en texte clair lors de la première occurrence, accompagnée du `<abbr>` pour baliser l'abréviation. Cela informe l'utilisateur·ice de la signification de l'abréviation ou de l'acronyme.

L'attribut optionnel [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) peut fournir le développement de l'abréviation ou de l'acronyme lorsqu'un développement complet n'est pas présent. Cela donne un indice aux agents utilisateurs sur la façon d'annoncer/afficher le contenu tout en informant tous les utilisateur·ice·s de la signification de l'abréviation. Si présent, `title` doit contenir cette description complète et rien d'autre.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;abbr&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Vous pouvez utiliser <abbr>CSS</abbr> (Cascading Style Sheets) pour mettre en
  forme votre <abbr>HTML</abbr> (HyperText Markup Language). En utilisant des
  feuilles de style, vous pouvez séparer la couche de présentation
  <abbr>CSS</abbr> et la couche de contenu <abbr>HTML</abbr>. On appelle cela la
  «&nbsp;séparation des préoccupations&nbsp;».
</p>
```

```css interactive-example
abbr {
  font-style: italic;
  color: chocolate;
}
```

## Attributs

Cet élément ne prend en charge que les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes). L'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) a une signification sémantique particulière lorsqu'il est utilisé avec l'élément `<abbr>`&nbsp;; il _doit_ contenir une description complète lisible par un·e humain·e ou le développement de l'abréviation. Ce texte est souvent présenté par les navigateurs sous forme d'infobulle lorsque le curseur de la souris survole l'élément.

Chaque élément `<abbr>` que vous utilisez est indépendant des autres&nbsp;; fournir un `title` pour l'un ne rattache pas automatiquement le même texte d'expansion aux autres éléments ayant le même contenu.

## Notes d'utilisation

### Cas d'usage généraux

Il n'est pas obligatoire de baliser toutes les abréviations avec `<abbr>`. Cependant, il existe quelques cas où cela s'avère utile&nbsp;:

- Lorsqu'une abréviation est utilisée et que vous souhaitez fournir un développement ou une définition en dehors du flux du contenu du document, utilisez `<abbr>` avec un attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) approprié.
- Pour définir une abréviation qui pourrait être inconnue du lecteur, présentez le terme avec `<abbr>` et un texte en ligne fournissant la définition. N'ajoutez un attribut `title` que si le développement ou la définition n'est pas disponible en ligne.
- Lorsque la présence d'une abréviation dans le texte doit être notée sémantiquement, l'élément `<abbr>` est utile. Cela peut ensuite servir à la mise en forme ou à des scripts.
- Vous pouvez utiliser `<abbr>` conjointement avec {{HTMLElement("dfn")}} pour établir des définitions de termes qui sont des abréviations ou des acronymes. Voir l'exemple [Définir une abréviation](#définir_une_abréviation) ci-dessous.

### Grammaire

Dans les langues qui possèdent la notion de [nombre grammatical](<https://fr.wikipedia.org/wiki/Nombre_(linguistique)>) (c'est-à-dire où le nombre d'éléments influence la grammaire de la phrase), il convient d'utiliser le même nombre grammatical dans l'attribut `title` que dans le contenu de l'élément `<abbr>`. Ceci est particulièrement important dans les langues qui comportent plus de deux formes de nombre, comme l'arabe, mais cela reste pertinent en français et en anglais.

## Mise en forme par défaut

Le but de cet élément est purement d'apporter une commodité à l'auteur·ice et tous les navigateurs l'affichent en ligne ({{CSSxRef("display", "display: inline")}}) par défaut, même si la mise en forme par défaut varie d'un navigateur à l'autre&nbsp;:

Certains navigateurs ajoutent un soulignement en pointillés au contenu de l'élément. D'autres ajoutent ce soulignement tout en convertissant le contenu en petites majuscules. D'autres encore n'appliquent pas de style particulier, l'affichant comme un élément {{HTMLElement("span")}}. Pour contrôler cette mise en forme, utilisez les propriétés CSS {{CSSxRef('text-decoration')}} et {{CSSxRef('font-variant')}}.

## Accessibilité

Écrire l'acronyme ou l'abréviation en toutes lettres lors de sa première utilisation sur une page est bénéfique pour la compréhension, en particulier si le contenu est technique ou utilise un jargon spécifique.

N'ajoutez un attribut `title` que si le développement de l'abréviation ou de l'acronyme dans le texte n'est pas possible. Une différence entre le mot ou la phrase annoncée et ce qui est affiché à l'écran, surtout s'il s'agit d'un jargon technique peu familier pour un·e lecteur·ice, peut être déroutante.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) est un format léger d'échange
  de données.
</p>
```

{{EmbedLiveSample("Accessibilité")}}

Ceci est particulièrement utile pour les personnes qui ne sont pas familières avec la terminologie ou les concepts abordés dans le contenu, les personnes qui apprennent la langue, ainsi que les personnes ayant des troubles cognitifs.

## Exemples

### Baliser une abréviation pour marquer la sémantique

On peut baliser une abréviation sans fournir de description ou de définition, il suffit d'utiliser `<abbr>` sans attribut.

#### HTML

```html
<p>Utiliser <abbr>HTML</abbr> est amusant et facile&nbsp;!</p>
```

#### Résultat

{{EmbedLiveSample("Baliser une abréviation pour marquer la sémantique", "100%", 80)}}

### Mettre en forme des abréviations

CSS peut être utilisé pour appliquer une mise en forme particulière sur les abréviations.

#### HTML

```html
<p>
  En utilisant <abbr>CSS</abbr>, vous pouvez mettre en forme vos
  abréviations&nbsp;!
</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### Résultat

{{EmbedLiveSample("Mettre en forme des abréviations", "100%", 80)}}

### Fournir une description

Ajouter un attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) permet de fournir un développement ou une définition pour l'abréviation ou l'acronyme.

#### HTML

```html
<p>Et là je lui ai répondu <abbr title="Laugh Out Loud">LOL</abbr>.</p>
```

#### Résultat

{{EmbedLiveSample("Fournir une description", "100%", 80)}}

### Définir une abréviation

Vous pouvez utiliser `<abbr>` avec {{HTMLElement("dfn")}} pour définir plus formellement une abréviation, comme montré ici.

#### HTML

```html
<p>
  <dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr> est
  un langage de balise qui permet de créer la structure et d'organiser la
  sémantique d'une page web.
</p>

<p>
  Une <dfn id="spec">spécification
  (<abbr title="spécification">spec</abbr>) est un document qui décrit, de façon
  détaillée comme une technologie ou une API fonctionne et comment l'utiliser.
</p>
```

#### Résultat

{{EmbedLiveSample("Définir une abréviation", "100%", 160)}}

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
          >Contenu du flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >.
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
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Aucun rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
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

- [Utiliser l'élément `<abbr>`](/fr/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abréviations)

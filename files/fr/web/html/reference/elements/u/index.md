---
title: "<u> : l'élément d'annotation non textuelle"
slug: Web/HTML/Reference/Elements/u
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

L'élément [HTML](/fr/docs/Web/HTML) **`<u>`** représente une portion de texte en ligne devant être rendue de manière à indiquer qu'elle comporte une annotation non textuelle. Par défaut, il est affiché avec un unique soulignement continu, mais cela peut être modifié via CSS.

> [!WARNING]
> Cet élément était auparavant appelé _underline_ pour les anciennes versions des spécifications HTML. Si on souhaite simplement souligner du texte, il ne faudra pas utiliser cet élément mais la propriété CSS {{CSSxRef("text-decoration")}} avec la valeur `"underline"`.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;u&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Vous pouvez utiliser cet élément pour signaler des fautes d'orthographe, par
  exemple <u>épèlé</u>, afin que le rédacteur puisse les <u>corig</u>.
</p>
```

```css interactive-example
p {
  margin: 0;
}

u {
  text-decoration: red wavy underline;
}
```

Voir la section [Notes d'utilisation](#notes_dutilisation) pour plus de détails sur le moment où il est approprié d'utiliser `<u>` et quand ce n'est pas le cas.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

Comme d'autres éléments purement liés à la mise en forme, l'élément HTML d'origine `<u>` (soulignement) a été déprécié dans HTML 4&nbsp;; cependant, `<u>` a été réintroduit dans HTML5 avec une nouvelle signification sémantique&nbsp;: marquer un texte comme ayant une annotation non textuelle appliquée.

> [!NOTE]
> Évitez d'utiliser l'élément `<u>` avec sa mise en forme par défaut (texte souligné) d'une manière qui pourrait être confondue avec un lien hypertexte, également souligné par défaut.

### Cas d'utilisation

Les cas d'utilisation valides de l'élément `<u>` incluent l'annotation des erreurs d'orthographe, l'application d'une [marque de nom propre <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Proper_name_mark) pour indiquer les noms propres dans un texte chinois, et d'autres formes d'annotation.

Vous ne devez _pas_ utiliser `<u>` pour souligner du texte à des fins de présentation, ni pour indiquer des titres de livres.

### Autres éléments pouvant être utilisés

Dans la plupart des cas, il faudra utiliser un autre élément que `<u>`&nbsp;:

- {{HTMLElement("em")}} afin d'indiquer une emphase
- {{HTMLElement("b")}} afin d'indiquer une attention particulière
- {{HTMLElement("mark")}} afin de marquer certains mots-clés ou phrases
- {{HTMLElement("strong")}} afin d'indiquer que le texte a une importance particulière
- {{HTMLElement("cite")}} afin d'indiquer le titre d'une œuvre ou d'une publication
- {{HTMLElement("i")}} afin d'indiquer un terme technique, des noms de navires, des pensées ou des translitérations au sein d'un texte occidental.

Pour fournir des annotations textuelles (par opposition aux annotations non textuelles créées avec `<u>`), utilisez l'élément {{HTMLElement("ruby")}}.

Pour appliquer une apparence soulignée sans signification sémantique, utilisez la valeur `underline` de la propriété CSS {{CSSxRef("text-decoration")}}.

## Exemples

### Indiquer une erreur d'orthographe

Dans cet exemple, on utilise `<u>` et des règles CSS pour afficher un paragraphe qui contient une coquille. L'erreur est indiquée avec une ligne ondulée rouge sous le texte.

#### HTML

```html
<p>
  Ce paragraphe contient un mot mal
  <u class="spelling">rothografié</u>.
</p>
```

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

#### Résultat

{{EmbedLiveSample("Indiquer une erreur d'orthographe", 650, 80)}}

### Éviter `<u>`

La plupart du temps, ce n'est pas l'élément `<u>` qu'il faut utiliser. Voici quelques exemples de ces cas et les méthodes à privilégier.

#### Souligner pour la simple mise en forme

Pour souligner du texte sans que cela ait une quelconque portée sémantique, on utilisera un élément {{HTMLElement("span")}} qu'on mettra en forme avec la propriété CSS {{CSSxRef("text-decoration")}} et la valeur `"underline"`&nbsp;:

##### HTML

```html
<span class="underline">Le plat du jour</span>
<br />
Soupe de potiron avec un soupçon de noix de muscade
```

##### CSS

```css
.underline {
  text-decoration: underline;
}
```

##### Résultat

{{EmbedLiveSample("Souligner pour la simple mise en forme", 650, 80)}}

#### Indiquer le titre pour un livre

Les titres de livres doivent être indiqués avec un élément {{HTMLElement("cite")}} et non avec `<u>` ou `<i>`.

##### HTML

```html
<p>
  Nous avons lu <cite>La Horde du Contrevent</cite>
  au cours du premier trimestre.
</p>
```

##### Résultat

{{EmbedLiveSample("Indiquer le titre pour un livre", 650, 80)}}

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
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
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

- Les éléments {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}} et {{HTMLElement("cite")}} qui, selon les cas, peuvent être utilisés à la place de `<u>`.
- La propriété CSS {{CSSxRef("text-decoration")}} qui permet d'obtenir un effet stylistique semblable à la mise en forme par défaut d'un élément `<u>`.

---
title: "<u> : l'élément d'annotation non textuelle"
slug: Web/HTML/Element/u
---

{{HTMLSidebar}}

L'élément HTML **`<u>`** permet d'afficher un fragment de texte qui est annoté avec des éléments non textuels. Par défaut, le contenu de l'élément est souligné. Cela pourra par exemple être le cas pour marquer un texte comme étant un nom propre chinois, ou pour marquer un texte qui a été mal orthographié.

> **Attention :** Cet élément était auparavant appelé _underline_ pour les anciennes versions des spécifications HTML. Si on souhaite simplement souligner du texte, il ne faudra pas utiliser cet élément mais la propriété CSS {{cssxref("text-decoration")}} avec la valeur `"underline"`.

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes d'utilisation

Étant seulement un élément de mise en forme, l'élément {{HTMLElement("u")}} a été déprécié en HTML 4 et XHTML 1. Il a été ré-introduit en HTML5 avec une autre signification : le contenu de l'élément est annoté avec une annotation non-textuelle.

La spécification rappelle que dans la majorité des cas, d'autres éléments que `<u>` doivent être utilisés.

> **Note :** Attention à la mise en forme par défaut d'un élément `<u>` qui le souligne. Cela peut être source de confusion entre un tel texte et un lien hypertexte (également souligné par défaut).

### Cas d'utilisation

L'élément `<u>` peut être utilisé afin d'indiquer des erreurs d'orthographe ou de grammaire, afin d'indiquer des noms propres au sein d'un texte écrit en chinois ou afin d'annoter un texte de façon visuelle.

L'élément `<u>` ne doit pas être utilisé afin de simplement souligner un texte ou afin d'indiquer le titre d'une œuvre.

### Autres éléments pouvant être utilisés

Dans la plupart des cas, il faudra utiliser un autre élément que `<u>` :

- {{HTMLElement("em")}} afin d'indiquer une emphase
- {{HTMLElement("b")}} afin d'indiquer une attention particulière
- {{HTMLElement("mark")}} afin de marquer certains mots-clés ou phrases
- {{HTMLElement("strong")}} afin d'indiquer que le texte a une importance particulière
- {{HTMLElement("cite")}} afin d'indiquer le titre d'une œuvre ou d'une publication
- {{HTMLElement("i")}} afin d'indiquer un terme technique, des noms de navires, des pensées ou des translitérations au sein d'un texte occidental.

Afin de fournir une annotation textuelle, on pourra utiliser l'élément {{HTMLElement("ruby")}}.

Afin de modifier la mise en forme, sans apporter de modification sémantique, on utilisera la propriété {{cssxref("text-decoration")}} avec la valeur `"underline"`.

## Exemples

### Indiquer une erreur

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

{{EmbedLiveSample("Indiquer_une_erreur", 650, 80)}}

### Éviter `<u>`

La plupart du temps, ce n'est pas l'élément `<u>` qu'il faut utiliser. Voici quelques exemples de ces cas et les méthodes à privilégier.

#### Souligner pour la simple mise en forme

Pour souligner du texte sans que cela ait une quelconque portée sémantique, on utilisera un élément {{HTMLElement("span")}} qu'on mettra en forme avec la propriété CSS {{cssxref("text-decoration")}} et la valeur `"underline"` :

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

{{EmbedLiveSample("Souligner_pour_la_simple_mise_en_forme", 650, 80)}}

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

{{EmbedLiveSample("Indiquer_le_titre_pour_un_livre", 650, 80)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}} et {{HTMLElement("cite")}} qui, selon les cas, peuvent être utilisés à la place de `<u>`.
- La propriété CSS {{cssxref("text-decoration")}} qui permet d'obtenir un effet stylistique semblable à la mise en forme par défaut d'un élément `<u>`.

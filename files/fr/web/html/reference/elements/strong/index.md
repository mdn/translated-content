---
title: "<strong> : l'élément de haute importance"
slug: Web/HTML/Reference/Elements/strong
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<strong>`** indique que le texte a une importance particulière ou un certain sérieux voire un caractère urgent. Cela se traduit généralement par un affichage en gras.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;strong&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  ... la règle la plus importante, la règle que vous ne devez jamais oublier,
  peu importe combien il pleure, peu importe combien il supplie&nbsp;:
  <strong>ne le nourrissez jamais après minuit</strong>.
</p>
```

```css interactive-example
p {
  font-size: 1rem;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

L'élément `<strong>` indique un contenu de haute importance, y compris lorsqu'il s'agit de choses graves ou urgentes (telles que des messages d'avertissement par exemple). Il peut s'agir d'une certaine phrase au sein d'une page ou bien de quelques mots d'une importance particulière par rapport au contenu environnant.

Cet élément se traduit généralement par l'affichage du texte en gras. Toutefois, il ne doit pas être utilisé à des fins stylistiques. Pour cela, on pourra utiliser la propriété CSS {{CSSxRef("font-weight")}}. De plus, on pourra utiliser l'élément {{HTMLElement("b")}} afin d'attirer l'attention sur une portion de texte qui ne possède pas un niveau d'importance particulier ou l'élément {{HTMLElement("em")}} si on souhaite marquer un texte avec de l'emphase.

Il est également possible d'utiliser `<strong>` pour les en-têtes de paragraphes qui représentent des notes ou des avertissements au sein d'une page.

### `<b>` ou `<strong>` ?

Il est souvent déroutant pour les nouveaux·elles développeur·euse·s de comprendre pourquoi il existe autant de façons d'exprimer la même chose sur un site web affiché. {{HTMLElement("b")}} et `<strong>` sont peut-être l'une des sources de confusion les plus courantes, causant les développeur·euse·s à se demander «&nbsp;Dois-je utiliser `<b>` ou `<strong>`&nbsp;? Ne font-ils pas tous les deux la même chose&nbsp;?&nbsp;»

Pas exactement. L'élément `<strong>` sert à du contenu de plus grande importance, tandis que l'élément `<b>` est utilisé pour attirer l'attention sur du texte sans indiquer qu'il est plus important.

Il peut être utile de comprendre que les deux sont des éléments valides et sémantiques en HTML et que c'est une coïncidence s'ils ont le même style par défaut (gras) dans la plupart des navigateurs (certains anciens navigateurs soulignaient même `<strong>`). Chaque élément est destiné à être utilisé dans certains types de situations, et si vous souhaitez mettre du texte en gras à des fins décoratives, il vaut mieux utiliser la propriété CSS {{CSSxRef("font-weight")}}.

Le sens ou l'objectif du texte concerné doit déterminer l'élément à utiliser. Communiquer le sens, c'est tout l'enjeu de la sémantique.

### `<em>` ou `<strong>` ?

Ce qui ajoute à la confusion est le fait qu'en HTML 4, `<strong>` était défini comme indiquant une emphase plus forte, alors qu'en HTML 5, `<strong>` représente «&nbsp;une importance forte pour son contenu&nbsp;». Il s'agit d'une distinction importante à faire.

Alors que `<em>` est utilisé pour changer le sens d'une phrase comme le fait l'emphase à l'oral («&nbsp;J'_adore_ les carottes&nbsp;» et «&nbsp;J'adore les _carottes_&nbsp;»), `<strong>` sert à donner à certaines parties d'une phrase une importance supplémentaire (par exemple «&nbsp;**Attention&nbsp;!** C'est **très dangereux.**&nbsp;»). `<strong>` et `<em>` peuvent être imbriqués pour augmenter respectivement le degré relatif d'importance ou d'emphase.

## Exemples

### Exemple simple

```html
<p>
  Avant de faire le truc X il est
  <strong>nécessaire</strong> de faire le truc Y avant.
</p>
```

#### Résultat

{{EmbedLiveSample("Exemple simple", 650, 80)}}

### Étiqueter des avertissements

```html
<p>
  <strong>Important&nbsp;:</strong> Avant de continuer, assurez-vous d'ajouter
  beaucoup de beurre.
</p>
```

#### Résultat

{{EmbedLiveSample("Étiqueter des avertissements", 650, 80)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Guides/Content_categories"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, cet élément doit avoir une balise ouvrante et une balise
        fermante.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >
        ou tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#rôles_structurels_avec_équivalents_html">strong</a
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

- L'élément {{HTMLElement("b")}}
- L'élément {{HTMLElement("em")}}
- La propriété CSS {{CSSxRef("font-weight")}}

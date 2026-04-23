---
title: "<var> : l'élément de variable"
slug: Web/HTML/Reference/Elements/var
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<var>`** représente une variable dans une expression mathématique ou un texte lié à la programmation. Son contenu est généralement représenté avec une version italique de la police environnante utilisée, toutefois, ce comportement peut dépendre du navigateur utilisé.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;var&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Le volume d'une boîte est <var>l</var> × <var>w</var> × <var>h</var>, où
  <var>l</var> représente la longueur, <var>w</var> la largeur et
  <var>h</var> la hauteur de la boîte.
</p>
```

```css interactive-example
var {
  font-weight: bold;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

### Éléments associés

Voici d'autres éléments qui sont fréquemment utilisés dans les contextes où `<var>` est utilisé&nbsp;:

- {{HTMLElement("code")}}&nbsp;: l'élément de code
- {{HTMLElement("kbd")}}&nbsp;: l'élément de saisie au clavier
- {{HTMLElement("samp")}}&nbsp;: l'élément de sortie d'exemple

Si vous trouvez du code qui utilise `<var>` par erreur à des fins de mise en forme plutôt que pour des raisons sémantiques, vous devriez utiliser un {{HTMLElement("span")}} avec la CSS appropriée ou un élément sémantique approprié parmi les suivants&nbsp;:

- {{HTMLElement("em")}}
- {{HTMLElement("i")}}
- {{HTMLElement("q")}}

### Mise en forme par défaut

La plupart des navigateurs appliquent la propriété {{CSSxRef("font-style")}} avec la valeur `"italic"` lors de l'affichage d'un élément `<var>`. Ce comportement peut être surchargé par la feuille de style CSS du site&nbsp;:

```css
var {
  font-style: normal;
}
```

## Exemples

### Exemple simple

Voici un exemple simple, utilisant `<var>` pour indiquer des noms de variables dans une équation mathématique.

```html
<p>Une équation simple&nbsp;: <var>x</var> = <var>y</var> + 2</p>
```

#### Résultat

{{EmbedLiveSample("Exemple simple", 650, 80)}}

### Surcharger la mise en forme par défaut

À l'aide de CSS, vous pouvez surcharger le style par défaut de l'élément `<var>`. Dans cet exemple, les noms de variables sont affichés en gras, en utilisant Courier si disponible, sinon la police monospace par défaut est utilisée.

#### CSS

```css
var {
  font:
    bold 15px "Courier",
    "Courier New",
    monospace;
}
```

#### HTML

```html
<p>
  Les variables <var>minSpeed</var> et <var>maxSpeed</var> contrôlent les
  vitesses minimale et maximale de l'appareil et sont exprimées en tours par
  minute.
</p>
```

Cet exemple HTML utilise `<var>` pour entourer les noms de deux variables.

#### Résultat

{{EmbedLiveSample("Surcharger la mise en forme par défaut", 650, 140)}}

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
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
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

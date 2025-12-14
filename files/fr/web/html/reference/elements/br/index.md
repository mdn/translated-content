---
title: "<br> : l'élément de saut de ligne"
slug: Web/HTML/Reference/Elements/br
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<br>`** crée un saut de ligne dans le texte (retour à la ligne). Il est utile pour écrire un poème ou une adresse, lorsque la division des lignes est significative.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;br&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  Sur toutes les collines<br />
  Tout est calme maintenant,<br />
  Dans tous les arbres<br />
  Tu n'entends<br />
  Presque aucun souffle&nbsp;;<br />
  Les oiseaux dorment dans les arbres&nbsp;:<br />
  Attends, bientôt comme eux<br />
  Toi aussi tu reposeras.
</p>
```

```css interactive-example
p {
  font-size: 1rem;
  font-family: sans-serif;
  margin: 20px;
}
```

Comme vous pouvez le voir dans l'exemple ci-dessus, un élément `<br>` est inclus à chaque endroit où l'on souhaite que le texte soit coupé. Le texte après le `<br>` recommence au début de la ligne suivante du bloc de texte.

> [!NOTE]
> N'utilisez pas `<br>` pour créer des marges entre les paragraphes&nbsp;; entourez-les d'éléments {{HTMLElement("p")}} et utilisez la propriété [CSS](/fr/docs/Web/CSS) {{CSSxRef('margin')}} pour contrôler leur taille.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

### Attributs obsolètes

- `clear` {{Deprecated_Inline}}
  - : Cet attribut indique où commencer la prochaine ligne après le saut de ligne.

## Mise en forme avec CSS

L'élément `<br>` a un seul objectif bien défini — créer un saut de ligne dans un bloc de texte. Il n'a donc pas de dimensions ni de rendu visuel propre, et il y a très peu de possibilités de lui appliquer une mise en forme.

Vous pouvez appliquer une marge ({{CSSxRef("margin")}}) sur les éléments `<br>` eux-mêmes pour augmenter l'espacement entre les lignes de texte du bloc, mais ce n'est pas une bonne pratique — il vaut mieux utiliser la propriété {{CSSxRef("line-height")}} prévue à cet effet.

## Accessibilité

Créer des paragraphes séparés à l'aide de `<br>` n'est pas seulement une mauvaise pratique, c'est aussi problématique pour les personnes qui naviguent avec une technologie d'assistance. Les lecteurs d'écran peuvent annoncer la présence de l'élément, mais pas le contenu associé aux `<br>`. Cela peut être source de confusion et de frustration pour la personne utilisant le lecteur d'écran.

Utilisez des éléments `<p>`, et des propriétés CSS comme {{CSSxRef("margin")}} pour contrôler leur espacement.

## Exemples

### Simple rupture de ligne

Dans l'exemple suivant, nous utilisons des éléments `<br>` pour créer des sauts de ligne entre les différentes lignes d'une adresse postale&nbsp;:

```html
Mozilla<br />
331 E. Evelyn Avenue<br />
Mountain View, CA<br />
94041<br />
USA<br />
```

#### Résultat

{{EmbedLiveSample('Simple rupture de ligne', 640, 120)}}

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
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Aucun, c'est un
        {{Glossary("void element", "élément vide")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        Cet élément doit avoir une balise de début et ne doit pas avoir de
        balise de fin. Pour les documents XHTML, on écrira cet élément
        <code>&#x3C;br/></code>.
      </td>
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
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLBRElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("address")}}
- L'élément HTML {{HTMLElement("p")}}
- L'élément HTML {{HTMLElement("wbr")}}

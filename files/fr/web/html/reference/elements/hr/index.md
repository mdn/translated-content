---
title: "Élément HTML `<hr>` : l'élément de rupture thématique (règle horizontale)"
short-title: <hr>
slug: Web/HTML/Reference/Elements/hr
l10n:
  sourceCommit: 1fc07c825d3f214516420cf0e986853a66deb426
---

L'élément [HTML](/fr/docs/Web/HTML) **`<hr>`** représente une rupture thématique entre des éléments&nbsp;: par exemple, un changement de décor dans un récit ou un changement de sujet au sein d'une section.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;hr&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  §1&nbsp;: La première règle du Fight Club est&nbsp;: vous ne parlez pas du
  Fight Club.
</p>

<hr />

<p>
  §2&nbsp;: La deuxième règle du Fight Club est&nbsp;: apportez toujours des
  cupcakes.
</p>
```

```css interactive-example
hr {
  border: none;
  border-top: 3px double #333333;
  color: #333333;
  overflow: visible;
  text-align: center;
  height: 5px;
}

hr::after {
  background: white;
  content: "§";
  padding: 0 4px;
  position: relative;
  top: -13px;
}
```

Historiquement, l'élément `<hr>` a toujours été présenté comme une règle horizontale ou une ligne. Bien qu'il puisse encore être affiché comme une règle horizontale dans les navigateurs visuels, cet élément est désormais défini en termes sémantiques plutôt qu'en termes présentatifs. Par conséquent, si vous souhaitez tracer une ligne horizontale, faites-le en ajoutant une bordure à un élément existant à l'aide de CSS.

Les propriétés `border-*` (par exemple, {{CSSxRef("border-style")}} et {{CSSxRef("border-color")}}) vous permettent de personnaliser de manière significative l'apparence d'une ligne, que vous personnalisiez un élément `<hr>` ou la bordure d'un autre élément.

## Attributs

Cet élément prend en charge les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

### Attributs obsolètes ou non-standard

- `align` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Définit l'alignement de la ligne horizontale sur la page. Si aucune valeur n'est renseignée, la valeur prise par défaut est `left`.
- `color` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Définit la couleur à utiliser pour la ligne horizontale, grâce à un nom de couleur SVG ou à un code hexadécimal (précédé d'un #).
- `noshade` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Avec cet attribut, la ligne horizontale n'a pas d'ombre.
- `size` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Définit la hauteur de la ligne, exprimée en pixels.
- `width` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Définit la longueur de la ligne, exprimée par une valeur en pixels ou en pourcents.

## Exemples

### Rupture thématique entre paragraphes

L'exemple suivant ajoute une rupture thématique entre des éléments de niveau paragraphe.

#### HTML

```html
<article>
  <p>
    C'est le premier paragraphe de texte. C'est le premier paragraphe de texte.
    C'est le premier paragraphe de texte. C'est le premier paragraphe de texte.
  </p>
  <hr />
  <p>
    C'est le deuxième paragraphe de texte. C'est le deuxième paragraphe de
    texte. C'est le deuxième paragraphe de texte. C'est le deuxième paragraphe
    de texte.
  </p>
</article>
```

#### Résultat

{{EmbedLiveSample("Rupture thématique entre paragraphes")}}

### Rupture thématique entre éléments de liste

La balise `<hr>` peut être placée à l'intérieur d'un élément de liste pour une séparation visuelle, afin de créer un séparateur entre les sections d'une liste.

#### HTML

```html
<ul>
  <li>Couper</li>
  <li>Copier</li>
  <li>Coller</li>
  <li role="presentation"><hr /></li>
  <li>Supprimer</li>
</ul>
```

```css hidden
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100px;
  margin: 0.75rem;
  padding: 0.75rem;
  border: 1px solid lightgrey;
}
hr {
  margin-block: 0.2rem;
  color: lightgrey;
}
```

#### Résultat

{{EmbedLiveSample("Rupture thématique entre éléments de liste")}}

### Rupture thématique entre de options de sélecteur

L'élément `<hr>` est autorisé dans un élément `<select>` pour créer une séparation visuelle entre deux éléments `<option>`.

#### HTML

```html
<select>
  <option value="">--Choisissez une option--</option>
  <hr />
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <hr />
  <option value="option3">Option 3</option>
  <option value="option4">Option 4</option>
</select>
```

#### Résultat

{{EmbedLiveSample("Rupture thématique entre de options de sélecteur")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, c'est un {{Glossary("void element", "élément vide")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Cet élément doit avoir une balise ouvrante mais ne doit pas avoir de
        balise fermante.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        <ul>
          <li>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">contenu de flux</a></li>
          <li>L'élément {{HTMLElement("select")}}</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> ou <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
      </td>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("p")}}
- [`<hr>` dans `<select>`](/fr/docs/Web/HTML/Reference/Elements/select#sélecteur_avec_options_groupées)

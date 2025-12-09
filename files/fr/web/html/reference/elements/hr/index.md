---
title: "<hr> : l'élément de rupture thématique (règle horizontale)"
slug: Web/HTML/Reference/Elements/hr
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

L'élément [HTML](/fr/docs/Web/HTML) **`<hr>`** représente une rupture thématique entre des éléments de niveau paragraphe&nbsp;: par exemple, un changement de décor dans un récit ou un changement de sujet au sein d'une section.

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

Historiquement, il était présenté comme une règle ou une ligne horizontale. Bien qu'il puisse encore être affiché comme une règle horizontale par les navigateurs visuels, cet élément est désormais défini en termes sémantiques plutôt qu'en termes de présentation&nbsp;; si vous souhaitez tracer une ligne horizontale, faites‑le à l'aide du CSS approprié.

## Attributs

Cet élément prend en charge [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

### Attributs dépréciés, obsolètes ou non-standard

- `align` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Définit l'alignement de la ligne horizontale sur la page. Si aucune valeur n'est renseignée, la valeur prise par défaut est `left`.
- `color` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Définit la couleur à utiliser pour la ligne horizontale, grâce à un nom de couleur SVG ou à un code hexadécimal (précédé d'un #).
- `noshade` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Avec cet attribut, la ligne horizontale n'aura pas d'ombre.
- `size` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Définit la hauteur de la ligne, exprimée en pixels.
- `width` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Définit la longueur de la ligne, exprimée par une valeur en pixels ou en pourcents.

## Exemples

### HTML

```html
<p>
  Ceci est le premier paragraphe du texte. Les pandas roux sont géniaux. C'est
  mignon et c'est tout doux.
</p>

<hr />

<p>
  Ceci est le deuxième paragraphe du texte. Les poneys ne sont pas pareils. Ils
  sont plus grands et moins exotiques.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

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
- [`<hr>` dans `<select>`](/fr/docs/Web/HTML/Reference/Elements/select#select_with_grouping_options)

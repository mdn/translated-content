---
title: "<pre> : l'élément de texte préformaté"
slug: Web/HTML/Element/pre
l10n:
  sourceCommit: 6aa2d63aef51ada47960f4754b601af66a99d63c
---

{{HTMLSidebar}}

L'élément [HTML](/fr/docs/Web/HTML) **`<pre>`** représente du texte préformaté, généralement écrit avec une [police à chasse fixe](https://fr.wikipedia.org/wiki/Police_d%27écriture_à_chasse_fixe). Le texte est affiché tel quel, les espaces utilisés dans le document HTML seront retranscrits.

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

Il est nécessaire d'échapper les caractères `<`, `>`, `&`, et `"` afin de s'assurer que le code écrit entre les éléments ne soit pas interprété de façon involontaire, l'échappement se fait en utilisant [l'entité HTML](/fr/docs/Glossary/Entity) correspondante.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_tangible">contenu tangible</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasé">Contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Aucun rôle correspondant</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLPreElement"><code>HTMLPreElement</code></a></td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- `cols` {{non-standard_inline}} {{deprecated_inline}}
  - : Cet attribut contient le nombre _préféré_ de caractères qu'une ligne devrait avoir. Cet attribut était un synonyme non-standard de l'attribut `width` (voir ci-après). Afin d'obtenir cet effet, il est plutôt conseillé d'utiliser la propriété CSS [`width`](/fr/docs/Web/CSS/width).
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Cet attribut contient le nombre _préféré_ de caractères qu'une ligne devrait avoir. Bien qu'implémenté, cet attribut n'a aucun effet visuel. Pour obtenir cet effet, il est plutôt conseillé d'utiliser la propriété CSS [`width`](/fr/docs/Web/CSS/width).
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Cet attribut est une indication sur la façon de gérer le dépassement d'une ligne. Les navigateurs modernes ignorent cette indication et cet attribut n'engendre aucun effet visuel. Pour obtenir cet effet, il faut utiliser la propriété CSS [`white-space`](/fr/docs/Web/CSS/white-space).

## Accessibilité

Il est important de fournir une description alternative pour toute image ou diagramme créé avec du texte préformaté. Cette description alternative devrait décrire clairement, et de façon concise, le contenu du diagramme.

Les personnes souffrant de troubles de la vision et/ou navigant à l'aide d'outils d'assistance comme des lecteurs d'écran peuvent ne pas comprendre le diagramme si celui-ci est construit avec des lettres et symboles et lu dans le désordre.

Pour légender un tel diagramme, on pourra utiliser une combinaison d'éléments [`<figure>`](/fr/docs/Web/HTML/Element/figure) et [`<figcaption>`](/fr/docs/Web/HTML/Element/figcaption) complétée par les attributs [ARIA](/fr/docs/Web/Accessibility/ARIA) `role` et [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-label) sur l'élément `<pre>` afin que le dessin en ASCII préformaté puisse être énoncé comme une image avec un texte alternatif, `<figcaption>` servant alors de légende à l'image.

### Exemple

```html
<figure>
  <pre role="img" aria-label="Vache en ASCII">
      ___________________________
  &lt; Je suis la meuhieure. &gt;
      ---------------------------
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
  </pre>
  <figcaption id="cow-caption">
    Une vache qui dit "Je suis la meuhieure.". La vache est illustrée à l'aide
    de caractères préformatés.
  </figcaption>
</figure>
```

- [Comprendre les règles WCAG 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Techniques H86&nbsp;: fournir des alternatives textuelles pour les dessins ASCII, les émoticônes, et le <i lang="en">leetspeak</i> | Techniques W3C pour WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## Exemples

### Exemple simple

#### HTML

```html
<p>On peut utiliser CSS pour changer la couleur d'une police.</p>
<pre>
body {
  color: red;
}
</pre>
```

#### Résultat

{{EmbedLiveSample("")}}

### Échapper des caractères réservés

#### HTML

```html
<pre>
let i = 5;

if (i &lt; 10 &amp;&amp; i &gt; 0) {
  return &quot;Nombre à un seul chiffre&quot;;
}
</pre>
```

#### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés CSS&nbsp;
  - [`white-space`](/fr/docs/Web/CSS/white-space)
  - [`word-break`](/fr/docs/Web/CSS/word-break)
- [Les entités HTML](/fr/docs/Glossary/Entity)
- L'élément HTML [`<code>`](/fr/docs/Web/HTML/Element/code)

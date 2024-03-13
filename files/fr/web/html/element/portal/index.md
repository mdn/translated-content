---
title: "<portal> : l'élément de portail"
slug: Web/HTML/Element/portal
---

{{HTMLSidebar}}

L'élément [HTML](/fr/docs/Web/HTML) **`<portal>`** permet d'embarquer une autre page HTML à l'intérieur de la page courante afin de permettre une navigation plus souple vers de nouvelles pages.

Un élément `<portal>` est semblable à un élément `<iframe>`. Un élément `<iframe>` permet d'embarquer un [contexte de navigation](/fr/docs/Glossary/Browsing_context) séparé. Toutefois, le contenu embarqué dans un élément `<portal>` est plus limité que celui embarqué dans un élément `<iframe>`. En effet, on ne peut pas interagir avec et il ne permet donc pas d'embarquer des éléments d'interface utilisateur. `<portal>` agit comme la prévisualisation du contenu de l'autre page et on peut s'en servir pour naviguer jusqu'à cette page, ce qui permet une transition douce vers le contenu embarqué.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLPortalElement"><code>HTMLPortalElement</code></a></td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément utilise [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- [`referrerpolicy`](#attr-referrerpolicy)
  - : Voir la page de l'en-tête [`Referrer-Policy`](/fr/docs/Web/HTTP/Headers/Referrer-Policy) pour les valeurs. La valeur utilisée sera fournie lors de la requête vers la page située à l'URL fournie par l'attribut `src`.
- [`src`](#attr-src)
  - : L'URL de la page à embarquer.

## Exemples

### Exemple simple

L'exemple suivant embarque le contenu de `https://example.com` pour le prévisualiser.

```html
<portal id="exempleportal" src="https://example.com/"></portal>
```

## Accessibilité

La prévisualisation fournie par `<portal>` n'est pas interactive et ne peut donc pas recevoir d'évènements de saisie ou le focus. Aussi, les contenus embarqués via le portail ne sont pas exposés comme des éléments de [l'arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree). Il est possible de naviguer vers le portail ou de l'activer comme pour un bouton. Le comportement par défaut du portail, lorsqu'on clique dessus, est de s'activer.

Par défaut, les portails reçoivent un libellé par défaut qui est le titre de la page embarquée. Si aucun titre n'est présent, le texte visible dans la prévisualisation est concaténé afin de créer un libellé. L'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-label) peut être utilisé afin de surcharger ce comportement.

Les portails utilisés à des seules fins de prérendu devraient être masqués avec l'attribut HTML `hidden` ou avec la propriété CSS [`display`](/fr/docs/Web/CSS/display) valant `none`.

Lorsqu'on utilise des animations pour l'activation du portail, la [caractéristique média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries#caractéristiques_média_media_features) [`prefers-reduced-motion`](/fr/docs/Web/CSS/@media/prefers-reduced-motion) devrait être respectée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

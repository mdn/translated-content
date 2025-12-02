---
title: "<bdo> : l'élément de remplacement bidirectionnelle"
slug: Web/HTML/Reference/Elements/bdo
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<bdo>`** force la direction courante du texte, de sorte que le texte à l'intérieur est affiché dans une direction différente.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;bdo&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Famous seaside songs</h1>

<p>The English song "Oh I do like to be beside the seaside"</p>

<p>
  Looks like this in Hebrew:
  <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  In the computer's memory, this is stored as
  <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```css interactive-example
html {
  font-family: sans-serif;
}

bdo {
  /* Add your styles here */
}
```

Les caractères du texte sont dessinés à partir du point de départ dans la direction donnée ; l'orientation des caractères individuels n'est pas affectée (les caractères ne sont donc pas dessinés vers l'arrière, par exemple).

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- **`dir`**
  - : La direction du texte au sein de l'élément. Cet attribut peut valoir&nbsp;:
    - `ltr`&nbsp;: pour un texte allant de gauche à droite (<i lang="en">left-to-right</i>).
    - `rtl`&nbsp;: pour un texte allant de droite à gauche (<i lang="en">right-to-left</i>).

## Exemples

```html
<!-- Change la direction du texte -->
<p>Ce texte se lit de gauche à droite.</p>
<p><bdo dir="rtl">Ce texte se lit de droite à gauche.</bdo></p>
```

### Résultat

{{EmbedLiveSample("","100%")}}

## Notes

La spécification HTML 4 ne définissait pas d'évènement pour cet élément. Ils ont été ajoutés en XHTML. Ceci était probablement un oubli de la spécification HTML 4.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
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
      <td>
        {{DOMxRef("HTMLElement")}}. Auparavant et jusqu'à Gecko 1.9.2 (Firefox 4) inclus, Firefox
        implémente l'interface
        {{DOMxRef("HTMLSpanElement")}} pour cet élément.
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("bdi")}}

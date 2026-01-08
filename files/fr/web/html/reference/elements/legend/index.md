---
title: "<legend> : l'élément de légende de groupe de champs"
slug: Web/HTML/Reference/Elements/legend
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

L'élément [HTML](/fr/docs/Web/HTML) **`<legend>`** représente une légende pour le contenu de son parent {{HTMLElement("fieldset")}}.

Dans les [éléments `<select>` personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select), l'élément `<legend>` est autorisé comme enfant de `<optgroup>`, afin de fournir un libellé facile à cibler et à mettre en forme. Cela remplace tout texte défini dans l'attribut `label` de l'élément `<optgroup>`, et possède la même sémantique.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;legend&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>Choose your favorite monster</legend>

  <input type="radio" id="kraken" name="monster" value="K" />
  <label for="kraken">Kraken</label><br />

  <input type="radio" id="sasquatch" name="monster" value="S" />
  <label for="sasquatch">Sasquatch</label><br />

  <input type="radio" id="mothman" name="monster" value="M" />
  <label for="mothman">Mothman</label>
</fieldset>
```

```css interactive-example
legend {
  background-color: black;
  color: white;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

Voir {{HTMLElement("form")}} pour des exemples utilisant `<legend>`.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >
        et
        <a href="/fr/docs/Web/HTML/Reference/Elements/Heading_Elements">titres</a>
        (éléments h1 à h6).
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise ouvrante et la balise fermante doivent être présentes.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("fieldset")}} dont le premier élément
        fils est cet élément <code>&#x3C;legend></code>.
        In <a href="/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select">éléments sélection personnalisables</a>, un élément <code>&#x3C;legend></code> est autorisé comme enfant de {{HTMLElement("optgroup")}}.
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
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLLegendElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: le rôle `form`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)

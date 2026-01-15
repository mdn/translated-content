---
title: "<dt> : l'élément pour le terme d'une description"
slug: Web/HTML/Reference/Elements/dt
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<dt>`** identifie un terme dans une liste de descriptions ou de définitions et, de ce fait, doit être utilisé à l'intérieur d'un élément HTML {{HTMLElement("dl")}}. Il est généralement suivi d'un élément {{HTMLElement("dd")}}&nbsp;; toutefois, plusieurs éléments `<dt>` successifs indiquent plusieurs termes qui sont tous définis par le {{HTMLElement("dd")}} immédiatement suivant.

L'élément {{HTMLElement("dd")}} suivant (élément **Détails de la description**, <i lang="en">Description Details</i> en anglais) fournit la définition ou tout autre texte associé au terme spécifié à l'aide de `<dt>`.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;dt&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  Veuillez utiliser les teintes de peinture suivantes pour la nouvelle
  maison&nbsp;:
</p>

<dl>
  <dt>Denim (finition semi-brillante)</dt>
  <dd>Plafond</dd>

  <dt>Denim (finition coquille d'oeuf)</dt>
  <dt>Evening Sky (finition coquille d'oeuf)</dt>
  <dd>Appliqué sur les murs</dd>
</dl>
```

```css interactive-example
p,
dl {
  font:
    1rem "Fira Sans",
    sans-serif;
}

dl > dt {
  font-weight: normal;
  font-style: oblique;
}

dd {
  margin-bottom: 1rem;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

Pour des exemples, voir les [exemples fournis pour l'élément `<dl>`](/fr/docs/Web/HTML/Reference/Elements/dl#exemples).

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#content_de_flux"
          >Contenu de flux</a
        >, sans élément {{HTMLElement("header")}},
        {{HTMLElement("footer")}}, sans contenu sectionnant et sans titre parmi les descendants.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Cet élément doit avoir une balise ouvrante. La balise de fin peut être
        omise si l'élément est immédiatement suivi par un autre élément
        <code>&#x3C;dt></code> ou par un élément {{HTMLElement("dd")}} ou s'il
        n'y a plus de contenu au sein de l'élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un {{HTMLElement("dl")}} ou (dans le {{Glossary("WHATWG")}} HTML, {{Glossary("W3C")}}
        HTML 5.2 et versions ultérieures) un
        {{HTMLElement("div")}} enfant d'un {{HTMLElement("dl")}}.<br />Cet
        élément peut être utilisé avant un {{HTMLElement("dd")}} ou un
        autre élément <code>&lt;dt&gt;</code>.
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
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role"
            >listitem</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        {{DOMxRef("HTMLElement")}}.
        Jusqu'à Gecko 1.9.2 inclus (Firefox 4), Firefox implémentait l'interface {{DOMxRef("HTMLSpanElement")}}
        pour cet élément.
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatiblité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("dl")}}
- L'élément {{HTMLElement("dd")}}

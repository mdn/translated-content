---
title: <legend>
slug: Web/HTML/Element/Legend
tags:
  - Element
  - Formulaires
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/legend
---
{{HTMLRef}}

L'élément HTML **\<legend>** représente une légende pour le contenu de son élément parent {{HTMLElement("fieldset")}}.

{{EmbedInteractiveExample("pages/tabbed/legend.html", "tabbed-standard")}}

## Attributs

Cet élément contient uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

### HTML

```html
<form action="" method="post">
  <fieldset>
    <legend>Un champ pour le choix de la radio</legend>
    <input type="radio" name="radio" id="radio">
    <label for="radio">Cliquez ici</label>
  </fieldset>
</form>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

> **Note :** Voir la page sur {{HTMLElement("form")}} pour d'autres exemples qui utilisent `<legend>`.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
        >.
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
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLLegendElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                            | État                             | Commentaires                      |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------- |
| {{SpecName("HTML WHATWG", "forms.html#the-legend-element", "&lt;legend&gt;")}} | {{Spec2("HTML WHATWG")}} | Définition de l'élément `legend`. |
| {{SpecName("HTML5 W3C", "forms.html#the-legend-element", "&lt;legend&gt;")}}     | {{Spec2("HTML5 W3C")}}     |                                   |
| {{SpecName("HTML4.01", "interact/forms.html#h-17.10", "&lt;legend&gt;")}}         | {{Spec2("HTML4.01")}}     | Définition initiale.              |

## Compatibilité des navigateurs

{{Compat("html.elements.legend")}}

## Voir aussi

- Les autres éléments relatifs aux formulaires : {{HTMLElement("form")}}, {{HTMLElement("option")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} et {{HTMLElement("meter")}}.
- [ARIA : le rôle `form`](/fr/docs/Web/Accessibility/ARIA/Roles/Form_Role)

---
title: <option>
slug: Web/HTML/Element/option
---

{{HTMLSidebar}}

L'élément HTML **`<option>`**, utilisé dans un formulaire, permet de représenter un contrôle au sein d'un élément {{HTMLElement("select")}}, {{HTMLElement("optgroup")}} ou {{HTMLElement("datalist")}}. Cet élément peut donc représenter des éléments d'un menu dans un document HTML.

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `disabled`
  - : Si cet attribut booléen est défini, l'option ne peut pas être sélectionnée. Généralement, les navigateurs affichent l'option grisée et celle-ci ne reçoit pas les évènements de navigation (liés aux clics ou au focus par exemple). Si cet attribut n'est pas défini, l'élément peut tout de même être désactivé si un de ses ancêtres est un élément {{HTMLElement("optgroup")}} désactivé.
- `label`
  - : La valeur de cet attribut correspond au texte affiché pour expliquer l'option. Si cet attribut n'est pas défini, sa valeur correspondra à celle du texte contenu dans l'élément.
- `selected`
  - : S'il est présent, cet attribut booléen indique que l'option est sélectionnée à l'état initial. Si l'élément `<option>` est un élément descendant d'un élément {{HTMLElement("select")}} dont l'attribut [`multiple`](/fr/docs/Web/HTML/Element/select#multiple) n'est pas activé, seul une `<option>` de cet élément {{HTMLElement("select")}} peut être sélectionnée de cette façon.
- `value`
  - : Le contenu de cet attribut représente la valeur qu'on souhaite envoyer au formulaire lorsque l'option est sélectionnée. Si cet attribut n'est pas défini, la valeur sera le contenu texuel de l'élément `<option>`.

## Exemples

### HTML

```html
<select name="select">
  Elle est où la poulette ?
  <option value="value1">Avec les lapins</option>
  <option value="value2" selected>Avec les canards</option>
  <option value="value3">Pas là</option>
</select>
```

### Résultat

{{EmbedLiveSample("Exemples","320","50")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Du texte qui contient éventuellement des caractères échappés (par
        exemple <code>&#x26;eacute;</code>).
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin est optionnelle si
        l'élément est immédiatement suivi par un autre élément
        <code>&#x3C;option></code> ou {{HTMLElement("optgroup")}} ou si
        l'élément parent n'a plus d'autre contenu.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("select")}},
        {{HTMLElement("optgroup")}} ou
        {{HTMLElement("datalist")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles autorisés</th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLOptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments relatifs aux formulaires : {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} et {{HTMLElement("meter")}}.

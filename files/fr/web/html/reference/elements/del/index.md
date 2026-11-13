---
title: "Élément HTML `<del>` : l'élément de texte supprimé"
short-title: <del>
slug: Web/HTML/Reference/Elements/del
l10n:
  sourceCommit: 32eceacf42b6bff41d9605298eba143cb7e199a1
---

L'élément [HTML](/fr/docs/Web/HTML) **`<del>`** représente une portion de texte qui a été supprimée d'un document. Cela peut être utilisé, par exemple, pour afficher le «&nbsp;suivi des modifications&nbsp;» ou des informations sur les différences dans le code source. L'élément HTML {{HTMLElement("ins")}} peut être utilisé pour l'effet inverse&nbsp;: indiquer le texte qui a été ajouté au document.

Cet élément est souvent (mais pas nécessairement) rendu en appliquant un style barré au texte.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;del&gt;", "tabbed-standard")}}

```html interactive-example
<blockquote>
  Il n'y a <del>rien</del> <ins>aucun code</ins> de bon ou de mauvais, mais
  <del>penser</del> <ins>l'exécuter</ins> le rend ainsi.
</blockquote>
```

```css interactive-example
del {
  text-decoration: line-through;
  background-color: #ffbbbb;
  color: #555555;
}

ins {
  text-decoration: none;
  background-color: #d4fcbc;
}

blockquote {
  padding-left: 15px;
  border-left: 3px solid #d7d7db;
  font-size: 1rem;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Une URL pour une ressource expliquant le changement (cela peut être un procès verbal d'une réunion par exemple).
- `datetime`
  - : Cet attribut indique l'heure et la date du changement et doit être une chaîne de caractères représentant une date valide, avec une heure facultative. Si la valeur ne peut pas être analysée comme telle, l'élément n'a pas d'information temporelle associée. Voir [l'article sur les formats](/fr/docs/Web/HTML/Guides/Date_and_time_formats) pour la représentation [d'une date seule](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_dates) ou [d'une date avec une heure](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_dates_et_heures_locales).

## Exemples

```html
<p><del>Ce texte a été supprimé.</del> mais pas celui-ci</p>
<del><p>Ce paragraphe a été supprimé.</p></del>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >
        ou
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#modèle_de_contenu_transparent"
          >Transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune balise manquante n'est autorisée.</td>
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
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#rôles_structurels_avec_équivalents_html">deletion</a
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
      <td>{{DOMxRef("HTMLModElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("ins")}} permet de représenter les insertions dans un texte
- L'élément {{HTMLElement("s")}} permet de représenter des portions de texte qui ne sont plus pertinentes (elles sont généralement barrées)

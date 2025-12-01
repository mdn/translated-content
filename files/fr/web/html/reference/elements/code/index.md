---
title: "<code> : l'élément de code en ligne"
slug: Web/HTML/Reference/Elements/code
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

L'élément [HTML](/fr/docs/Web/HTML) **`<code>`** affiche son contenu avec une mise en forme destinée à indiquer qu'il s'agit d'un court fragment de code informatique. Par défaut, le texte est affiché avec la police monospace par défaut de l'{{Glossary("user agent", "agent utilisateur")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;code&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  La méthode <code>push()</code> ajoute un ou plusieurs éléments à la fin d'un
  tableau et retourne la nouvelle longueur du tableau.
</p>
```

```css interactive-example
code {
  background-color: #eeeeee;
  border-radius: 3px;
  font-family: "Courier New", monospace;
  padding: 0 3px;
}
```

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

Un paragraphe de texte qui contient `<code>`&nbsp;:

```html
<p>
  La fonction <code>selectAll()</code> met en évidence tout le texte du champ de
  saisie afin que l'utilisateur·ice puisse, par exemple, le copier ou le
  supprimer.
</p>
```

### Résultat

{{EmbedLiveSample('Exemples', 640, 70)}}

## Notes

Pour représenter plusieurs lignes de code, enveloppez l'élément `<code>` dans un élément {{HTMLElement("pre")}}. L'élément `<code>` en lui-même ne représente qu'une seule phrase de code ou ligne de code.

Une règle CSS peut être définie pour le sélecteur `code` afin de remplacer la police par défaut du navigateur. Les préférences définies par l'utilisateur·ice peuvent prévaloir sur la règle CSS définie.

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
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
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#rôles_structurels_avec_équivalents_html">code</a
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
        {{DOMxRef("HTMLElement")}}. Jusqu'à Gecko 1.9.2 (Firefox 4) inclus, Firefox implémentait
        l'interface {{DOMxRef("HTMLSpanElement")}}
        pour cet élément.
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("samp")}}
- L'élément {{HTMLElement("kbd")}}
- L'élément {{HTMLElement("var")}}
- L'élément {{HTMLElement("pre")}}

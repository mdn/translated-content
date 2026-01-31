---
title: "<ins> : l'élément de texte inséré"
slug: Web/HTML/Reference/Elements/ins
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

L'élément [HTML](/fr/docs/Web/HTML) **`<ins>`** représente une portion de texte qui a été ajoutée à un document. Vous pouvez utiliser l'élément {{HTMLElement("del")}} de la même manière pour indiquer une portion de texte qui a été supprimée du document.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;ins&gt;", "tabbed-standard")}}

```html interactive-example
<p>&ldquo;Vous êtes en retard&nbsp;!&rdquo;</p>
<del>
  <p>&ldquo;Je suis désolé pour le retard.&rdquo;</p>
</del>
<ins cite="../howtobeawizard.html" datetime="2018-05">
  <p>&ldquo;Un sorcier n'est jamais en retard&hellip;&rdquo;</p>
</ins>
```

```css interactive-example
del,
ins {
  display: block;
  text-decoration: none;
  position: relative;
}

del {
  background-color: #ffbbbb;
}

ins {
  background-color: #d4fcbc;
}

del::before,
ins::before {
  position: absolute;
  left: 0.5rem;
  font-family: monospace;
}

del::before {
  content: "−";
}

ins::before {
  content: "+";
}

p {
  margin: 0 1.8rem;
  font-family: "Georgia", serif;
  font-size: 1rem;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Cet attribut définit l'URI d'une ressource qui explique la modification (par exemple un lien vers le compte rendu d'une réunion ou un ticket dans un système de suivi).
- `datetime`
  - : Cet attribut indique la date et l'heure de la modification et doit être une date valide avec une chaîne horaire optionnelle. Si la valeur ne peut pas être analysée comme une date avec une chaîne horaire optionnelle, l'élément n'a pas d'horodatage associé. Pour le format de la chaîne sans heure, voir [Format d'une chaîne de date valide](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_dates). Le format de la chaîne incluant la date et l'heure est décrit dans [Format d'une chaîne de date et heure locales valides](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_dates_et_heures_locales).

## Accessibilité

Par défaut, la plupart des outils d'assistance n'annoncent pas la présence de l'élément `ins`. On peut le rendre annonçable via la propriété CSS {{CSSxRef("content")}} et grâce aux pseudo-éléments {{CSSxRef("::before")}} et {{CSSxRef("::after")}}.

```css
ins::before,
ins::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

ins::before {
  content: " [Début de l'insertion]";
}

ins::after {
  content: " [Fin de l'insertion] ";
}
```

Certaines personnes qui utilisent des lecteurs d'écran désactivent sciemment ces annonces pour éviter une verbosité trop importante. Il est donc important de ne pas abuser de cette technique et de ne l'appliquer qu'à des situations où il est nécessaire de comprendre que du contenu a été inséré.

- [Brève note pour rendre vos marques plus accessibles | The Paciello Group <sup>(angl.)</sup>](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Ajuster les styles au niveau du texte | Adrian Roselli <sup>(angl.)</sup>](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Exemples

### HTML

```html
<p>Le texte <ins>Ce texte a été ajouté</ins> original.</p>
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
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
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
          >Contenu transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        Aucune, la balise ouvrante et la balise fermante doivent être présentes.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#rôles_structurels_avec_équivalents_html">insertion</a
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

- {{HTMLElement("del")}} qui permet d'indiquer la suppression d'un fragment dans un document.

---
title: "<footer> : l'élément de pied de page"
slug: Web/HTML/Reference/Elements/footer
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

L'élément [HTML](/fr/docs/Web/HTML) **`<footer>`** représente un pied de page pour sa [section de contenu](/fr/docs/Web/HTML/Guides/Content_categories#contenu_sectionnant) ou [racine de sectionnement](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements#libeller_le_contenu_des_sections) la plus proche. Un `<footer>` contient généralement des informations sur l'auteur·ice de la section, des données de droit d'auteur ou des liens vers des documents associés.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;footer&gt;", "tabbed-standard")}}

```html interactive-example
<article>
  <h1>Comment devenir magicien</h1>
  <ol>
    <li>Faites pousser une longue barbe majestueuse.</li>
    <li>Portez un grand chapeau pointu.</li>
    <li>Avez-vous mentionné la barbe&nbsp;?</li>
  </ol>
  <footer>
    <p>© 2018 Gandalf</p>
  </footer>
</article>
```

```css interactive-example
article {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

footer {
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: #45a1ff;
  color: white;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

- Les informations sur l'autrice ou l'auteur doivent être placées dans un élément {{HTMLElement("address")}} et incluses dans l'élément `<footer>`.
- Lorsque l'élément de sectionnement ou la racine de sectionnement ancêtre la plus proche est l'élément body, le footer s'applique à toute la page.
- L'élément `<footer>` n'a pas de contenu sectionnant et ne peut donc pas introduire une nouvelle section dans le [plan](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements).

## Accessibilité

Avant la publication de Safari 13, le [rôle de repère](/fr/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks) `contentinfo` n'était pas correctement exposé par [VoiceOver <sup>(angl.)</sup>](https://help.apple.com/voiceover/info/guide/). Si vous devez prendre en charge les anciens navigateurs Safari, ajoutez `role="contentinfo"` à l'élément `footer` pour vous assurer que le landmark sera correctement exposé.

- En rapport&nbsp;: [WebKit Bugzilla&nbsp;: 146930 - AX : Les éléments natifs HTML (header, footer, main, aside, nav) devraient fonctionner de la même manière que les points de repère ARIA, parfois ce n'est pas le cas <sup>(angl.)</sup>](https://webkit.org/b/146930)

## Exemples

```html
<body>
  <h3>Les écrivains français du XIX<sup>ème</sup> siècle</h3>
  <ul>
    <li>Hugo</li>
    <li>Flaubert</li>
    <li>Zola</li>
    <li>Maupassant</li>
  </ul>

  <footer>
    <small>Copyright © 2023 Littérature.com. Tous droits réservés.</small>
  </footer>
</body>
```

```css
footer {
  text-align: center;
  padding: 5px;
  background-color: #abbaba;
  color: black;
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#content_de_flux"
          >Contenu de flux</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#content_de_flux"
          >Contenu de flux</a
        >
        sans élément descendant qui soit <code>&#x3C;footer></code> ou {{HTMLElement("header")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise ouvrante et la balise fermante sont toutes les deux
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#content_de_flux"
          >contenu de flux</a
        >. Un élément <code>&#x3C;footer></code> ne doit pas descendre d'un
        élément {{HTMLElement("address")}}, {{HTMLElement("header")}}
        ou d'un autre élément <code>&#x3C;footer></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role"><code>contentinfo</code></a> ou
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
        si descendant d'un élément
        <a href="/fr/docs/Web/HTML/Reference/Elements/article">article</a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/aside">aside</a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/main">main</a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/nav">nav</a> ou
        <a href="/fr/docs/Web/HTML/Reference/Elements/section">section</a> ou
        d'un élément avec le rôle
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role">article</a></code>,
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role">complementary</a></code>,
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role">main</a></code>,
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role">navigation</a></code>
        ou
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role">region</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> ou
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres éléments liés à la section&nbsp;: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}
- [Utilisation des sections et des plans HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Le rôle ARIA `contentinfo`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)

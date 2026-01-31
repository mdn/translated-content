---
title: "<q> : l'élément de citation en incise"
slug: Web/HTML/Reference/Elements/q
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<q>`** indique que le texte qu'il contient est une citation en incise. La plupart des navigateurs modernes entoure le texte de cet élément avec des marques de citation. Cet élément est destiné aux citations courtes qui ne nécessitent pas de sauts de paragraphe. Pour les plus grandes citations, on utilisera l'élément {{HTMLElement("blockquote")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;q&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Quand Dave demande à HAL d'ouvrir la porte de la baie des modules, HAL
  répond&nbsp;:
  <q
    cite="https://www.imdb.com/title/tt0062622/quotes/?item=qt0396921&ref_=ext_shr_lnk">
    Je suis désolé, Dave. J'ai bien peur de ne pas pouvoir faire cela.
  </q>
</p>
```

```css interactive-example
q {
  font-style: italic;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : La valeur de cet attribut est une URL désignant la source du message ou de l'information citée. Cet attribut est prévu pour fournir des renseignements concernant le contexte ou la référence de cette citation.

## Exemples

```html
<p>
  Chaque fois que Kenny est tué, Stan dira
  <q cite="https://fr.wikipedia.org/wiki/Kenny_McCormick#Le_dialogue_rituel">
    Oh mon Dieu, ils ont tué Kenny !
  </q>
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Guides/Content_categories"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
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
      <td>{{DOMxRef("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("blockquote")}} pour les citations longues.
- L'élément {{HTMLElement("cite")}} pour les citations de sources.

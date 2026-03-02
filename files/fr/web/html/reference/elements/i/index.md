---
title: "<i> : l'élément de texte idiomatic"
slug: Web/HTML/Reference/Elements/i
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<i>`** représente une portion de texte mise à part du texte normal pour une raison donnée, comme du texte idiomatique, des termes techniques ou des désignations taxonomiques, entre autres. Historiquement, ces contenus étaient présentés en italique, ce qui explique la désignation `<i>` de cet élément.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;i&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Je l'ai regardé et j'ai pensé <i>Cela ne peut pas être réel&nbsp;!</i></p>

<p>
  <i>Musa</i> est l'un des deux ou trois genres de la famille
  <i>Musaceae</i>&nbsp;; il comprend les bananes et les plantains.
</p>

<p>
  Le terme <i>bandwidth</i> décrit la mesure de la quantité d'informations
  pouvant transiter par une connexion de données pendant une durée donnée.
</p>
```

```css interactive-example
i {
  /* Ajoutez vos styles ici */
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

- Utilisez l'élément `<i>` pour du texte mis à part de la prose normale pour des raisons de lisibilité. Il s'agit d'une portion de texte ayant une signification sémantique différente du texte environnant. Parmi les cas d'utilisation de l'élément `<i>` figurent des passages de texte représentant une qualité ou un mode de texte différent, tels que&nbsp;:
  - Voix ou ton alternatifs
  - Désignations taxonomiques (par exemple le genre et l'espèce «&nbsp;_Homo sapiens_&nbsp;»)
  - Expressions idiomatiques d'une autre langue (par exemple «&nbsp;_et cetera_&nbsp;»)&nbsp;; celles‑ci doivent inclure l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) pour identifier la langue
  - Termes techniques
  - Translittérations
  - Pensées (par exemple «&nbsp;Elle se demandait, _De quoi parle cet auteur, au juste&nbsp;?_&nbsp;»)
  - Noms de navires ou d'embarcations dans les systèmes d'écriture occidentaux (par exemple «&nbsp;Ils ont fouillé les quais pour trouver l'_Empress of the Galaxy_&nbsp;», le navire auquel ils étaient affectés.)

- Dans les versions antérieures de la spécification HTML, l'élément `<i>` n'était qu'un élément de présentation utilisé pour afficher le texte en italique, de la même façon que l'élément `<b>` était utilisé pour afficher le texte en gras. Ce n'est plus le cas, ces balises définissent désormais la sémantique plutôt que l'apparence typographique. Un navigateur affichera généralement toujours le contenu de l'élément `<i>` en italique, mais n'y est, par définition, plus obligé. Pour afficher du texte en italique, les auteur·ice·s doivent utiliser la propriété CSS {{CSSxRef("font-style")}}.
- Assurez‑vous que le texte en question n'est pas en réalité plus approprié à être balisé avec un autre élément.
  - Utilisez {{HTMLElement("em")}} pour indiquer l'emphase.
  - Utilisez {{HTMLElement("strong")}} pour indiquer l'importance, la gravité ou l'urgence.
  - Utilisez {{HTMLElement("mark")}} pour indiquer la pertinence.
  - Utilisez {{HTMLElement("cite")}} pour marquer le nom d'une œuvre, comme un livre, une pièce ou une chanson.
  - Utilisez {{HTMLElement("dfn")}} pour marquer l'occurrence définitoire d'un terme.

## Exemples

Cet exemple montre l'utilisation de l'élément `<i>` pour marquer du texte dans une autre langue.

```html
<p>
  La phrase latine <i class="latin">Veni, vidi, vici</i> est souvent employée en
  littérature.
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
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
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
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("em")}}
- Autres éléments en italique&nbsp;: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}

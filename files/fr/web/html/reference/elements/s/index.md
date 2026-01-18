---
title: "<s> : l'élément de texte barré"
slug: Web/HTML/Reference/Elements/s
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<s>`** affiche du texte barré. Utilisez l'élément `<s>` pour représenter des choses qui ne sont plus pertinentes ou plus exactes. Cependant, `<s>` n'est pas approprié pour indiquer les modifications d'un document&nbsp;; pour cela, utilisez les éléments {{HTMLElement("del")}} et {{HTMLElement("ins")}}, selon le cas.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;s&gt;", "tabbed-shorter")}}

```html interactive-example
<p><s>Quelques billets sont disponibles à la billetterie ce soir.</s></p>

<p>ÉPUISÉ&nbsp;!</p>
```

```css interactive-example
s {
  /* Ajoutez vos styles ici */
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Accessibilité

Par défaut, la plupart des outils d'assistance n'annoncent pas la présence de l'élément `s`. On peut le rendre annonçable via la propriété CSS {{CSSxRef("content")}} et grâce aux pseudo-éléments {{CSSxRef("::before")}} et {{CSSxRef("::after")}}.

```css
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [Début du texte rayé]";
}

s::after {
  content: " [Fin du texte rayé] ";
}
```

Certaines personnes qui utilisent des lecteurs d'écran désactivent sciemment ces annonces pour éviter une verbosité trop importante. Il est donc important de ne pas abuser de cette technique et de ne l'appliquer qu'à des situations où il est nécessaire de comprendre que du contenu a été rayé.

- [Note brève sur la manière de rendre votre marque plus accessible | The Paciello Group <sup>(angl.)</sup>](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Ajuster les styles au niveau du texte | Adrian Roselli <sup>(angl.)</sup>](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Exemples

```css
.sold-out {
  text-decoration: line-through;
}
```

```html
<s>Le plat du jour&nbsp;: Saumon</s> ÉPUISÉ<br />
<span class="sold-out">Le plat du jour&nbsp;: Saumon</span> ÉPUISÉ
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
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("strike")}}, alter ego de l'élément `<s>`, est obsolète et ne doit plus être utilisé sur les sites Web.
- L'élément {{HTMLElement("del")}} doit être utilisé à la place si les données ont été _supprimées_.
- La propriété CSS {{CSSxRef("text-decoration-line")}} doit être utilisée pour reproduire l'aspect visuel antérieur de l'élément `<s>`.

---
title: <small>
slug: Web/HTML/Element/small
---

{{HTMLSidebar}}

L'élément HTML **`<small>`** permet de représenter des commentaires ou des textes à écrire en petits caractères (des termes d'un contrat, des mentions relatives au droit d'auteur, etc.) quelle que soit la présentation.

{{EmbedInteractiveExample("pages/tabbed/small.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

### HTML

```html
<p>
  Voici une phrase avant des infos à présenter en plus petit.
  <small>© tous droits réservés</small>
</p>
```

### Résultat

{{EmbedLiveSample("","100%",'')}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Catégories de contenu</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise ouvrante et la balise fermante doivent toutes les deux
        être présentes.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >
        ou tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Notes

Bien que l'élément `<small>` et les éléments `<b>` et `<i>` soient souvent considérés comme allant à l'encontre du découpage structure/présentation, ils sont tous valides en HTML5. Les auteurs doivent appliquer leur esprit critique afin de déterminer s'il est préférable d'employer `<small>` ou des règles CSS.

## Voir aussi

- {{HTMLElement("b")}}
- {{HTMLElement("font")}}
- {{HTMLElement("style")}}

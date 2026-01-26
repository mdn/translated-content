---
title: "<noscript> : l'élément de repli des scripts"
slug: Web/HTML/Reference/Elements/noscript
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<noscript>`** définit une section HTML à insérer si un type de script sur la page n'est pas pris en charge ou si l'exécution des scripts est actuellement désactivée dans le navigateur.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

```html
<noscript>
  <!-- élément d'ancre qui mène à un fichier externe -->
  <a href="https://www.mozilla.org/">Lien externe</a>
</noscript>
<p>Elle est où, la poulette&nbsp;?</p>
```

### Résultat avec JavaScript activé

Elle est où, la poulette&nbsp;?

### Résultat avec JavaScript désactivé

[Lien externe](https://www.mozilla.org/)

Elle est où, la poulette&nbsp;?

## Notes d'utilisation

L'élément `<noscript>` représente ses enfants différemment selon que le script est activé ou non&nbsp;:

- Si le script est désactivé, l'élément `<noscript>` représente ses enfants comme du [contenu HTML](/fr/docs/Web/API/HTMLElement).
- Si le script est activé, l'élément `<noscript>` représente ses enfants comme du [texte](/fr/docs/Web/API/Text).

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
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_méta-données"
          >Contenu de métadonnées</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Lorsque les fonctionnalités de script sont désactivées et que l'élément
        est un descendant d'un élément {{HTMLElement("head")}}&nbsp;: zéro
        ou plusieurs éléments {{HTMLElement("link")}},
        {{HTMLElement("style")}},{{HTMLElement("meta")}}.<br />Lorsque
        les fonctionnalités de script sont désactivées et que cet élément n'est
        pas un descendant d'un élément {{HTMLElement("head")}}&nbsp;: du
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#modèle_de_contenu_transparent"
          >contenu transparent</a
        >
        mais sans élément <code>&#x3C;noscript></code> parmi les descendants.<br />Sinon
       &nbsp;: du contenu de flux ou du contenu phrasé.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        <p>
          Tout élément qui accepte du
          <a
            href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
            >contenu phrasé</a
          >
          et qui n'a pas d'ancêtre qui soit un élément
          <code>&#x3C;noscript></code>, ou s'il s'agit d'un document HTML, un
          élément {{HTMLElement("head")}} (seulement pour un document HTML),
          là encore s'il n'y a pas d'ancêtre <code>&#x3C;noscript></code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
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

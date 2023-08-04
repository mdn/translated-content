---
title: <noscript>
slug: Web/HTML/Element/noscript
---

{{HTMLSidebar}}

L'élément HTML **`<noscript>`** définit un fragment HTML qui doit être affiché si les fonctionnalités de script ne sont pas prises en charge ou si elles sont désactivées.

## Attributs

On peut uniquement utiliser [les attributs universels](/fr/docs/Web/HTML/Attributs_universels) sur cet élément.

## Exemples

### HTML

```html
<noscript>
  <!-- élément d'ancre qui mène à un fichier externe  -->
  <a href="https://www.mozilla.org/">Lien externe</a>
</noscript>
<p>Elle est où, la poulette ?</p>
```

### Résultat avec JavaScript activé

Elle est où, la poulette&nbsp;?

### Résultat avec JavaScript désactivé

[Lien externe](https://www.mozilla.org/)

Elle est où, la poulette&nbsp;?

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_méta-données"
          >Contenu de métadonnées</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Lorsque les fonctionnalités de script sont désactivées et que l'élément
        est un descendant d'un élément {{HTMLElement("head")}} : zéro
        ou plusieurs éléments {{HTMLElement("link")}},
        {{HTMLElement("style")}},{{HTMLElement("meta")}}.<br />Lorsque
        les fonctionnalités de script sont désactivées et que cet élément n'est
        pas un descendant d'un élément {{HTMLElement("head")}} : du
        <a
          href="/fr/docs/Web/Guide/HTML/Catégories_de_contenu#Modèle_de_contenu_transparent"
          >contenu transparent</a
        >
        mais sans élément <code>&#x3C;noscript></code> parmi les descendants.<br />Sinon
        : du contenu de flux ou du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        <p>
          Tout élément qui accepte du
          <a
            href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
            >contenu phrasé</a
          >
          et qui n'a pas d'ancêtre qui soit un élément
          <code>&#x3C;noscript></code> ; ou, s'il s'agit d'un document HTML, un
          élément {{HTMLElement("head")}} (sans ancêtre
          <code>&#x3C;noscript></code>).
        </p>
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

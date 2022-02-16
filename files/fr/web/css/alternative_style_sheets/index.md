---
title: Feuilles de style alternatives
slug: Web/CSS/Alternative_style_sheets
tags:
  - CSS
  - NeedsCompatTable
  - Reference
translation_of: Web/CSS/Alternative_style_sheets
original_slug: Web/CSS/Feuilles_de_style_alternatives
---
{{CSSRef}}

En proposant **des feuilles de style alternatives**, une page web permet à ses utilisateurs de pouvoir choisir parmi différentes version d'une page selon leurs besoins ou leurs préférences.

Firefox permet à l'utilisateur de sélectionner le style de la page en utilisant le menu « Affichage > Style de la page », Internet Explorer possède également cette fonctionnalité (depuis IE8), accesssible via « Affichage > Style de la page ». Pour Chrome, il est nécessaire d'utiliser une extension afin de pouvoir utiliser cette fonctionnalité. La page web peut également fournir un élément d'interface utilisateur afin de permettre à l'utilisateur de passer d'un style à un autre.

## Exemple d'application : définir des feuilles de style alternatives

Pour indiquer des feuilles de style alternatives, on utilisera un élément {{HTMLElement("link")}} avec les attributs `rel="stylesheet alternate"` et `title="..."`. Ainsi :

```html
<link href="reset.css" rel="stylesheet" type="text/css">

<link href="default.css" rel="stylesheet" type="text/css" title="Style par défaut">
<link href="joli.css" rel="alternate stylesheet" type="text/css" title="Joli">
<link href="basique.css" rel="alternate stylesheet" type="text/css" title="Basique">
```

Dans cet exemple, les styles « Style par défaut », « Joli » et « Basique » seront listés dans le menu « Style de la page ». C'est le style par défaut (il n'y a pas de composante `alternate` pour l'attribut `rel`) qui sera sélectionné. Lorsque l'utilisateur choisit un autre style, la page est alors immédiatement affichée avec cette feuille de style.

Quel que soit la mise en forme choisie, les règles provenant de la feuille `reset.css` seront toujours appliquées.

## Détails

Une feuille de style fera partie d'une de ces trois catégories :

- **Persistante** (aucun `rel="alternate"`, aucun `title=""`) : la feuille de style s'applique au document quoi qu'il arrive
- **Préférée** (aucun `rel="alternate"`, un attribut `title="..."` défini) : la feuille de style est appliquée par défaut mais est désactivée si une autre feuille de style est sélectionnée. **Il ne peut y avoir qu'une seule feuille de style préférée**. Si plusieurs feuilles de style sont fournies avec différentes valeurs pour l'attribut `title`, certaines seront ignorées.
- **Alternative** (`rel="stylesheet alternate"`, un attribut `title="..."` défini) : la feuille de style est désactivée par défaut mais peut être sélectionnée.

Lorsqu'une feuille de style contient un attribut `title` sur l'élément {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} ou sur l'élément {{HTMLElement("style")}}, ce titre est l'une des options proposées à l'utilisateur. Les feuilles de style qui contiennent le même titre (`title` a la même valeur) s'appliqueront toutes pour ce choix. Enfin, les feuilles de style qui n'ont aucun attribut `title` seront toujours appliquées.

On utilisera `rel="stylesheet"` pour pointer vers la feuille de style par défaut et `rel="alternate stylesheet"` pour pointer vers les feuilles de style alternatives. Cela permet à l'agent utilisateur de savoir quelle feuille doit être appliquée par défaut ; c'est aussi cette valeur qui sera utilisée pour les navigateurs qui ne prennent pas en charge cette fonctionnalité.

## Spécifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">État</th>
      <th scope="col">Commentaires</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('CSSOM', '#css-style-sheet-collections', 'CSS Style Sheet Collections')}}
      </td>
      <td>{{Spec2('CSSOM')}}</td>
      <td>
        La spécification CSS OM définit les concepts de
        <strong>nom d'ensemble de feuilles de style</strong>, le
        <strong>marqueur « désactivé »</strong> et le
        <strong>nom d'ensemble de feuilles de style CSS préférées</strong
        >.<br />Cette spécification définit comment ces concepts sont
        déterminés, elle laisse à la spécification HTML le soin de définir les
        comportements spécifiques à HTML qui doit notamment définir
        <strong><dfn>quand est créée une feuille de style CSS</dfn></strong
        >.
      </td>
    </tr>
    <tr>
      <td>
        <p>
          {{SpecName('HTML WHATWG', 'semantics.html#link-type-stylesheet', 'Link type "stylesheet"')}}<br />{{SpecName('HTML WHATWG', 'semantics.html#attr-style-title', 'The style element')}}<br />{{SpecName('HTML WHATWG', 'semantics.html#attr-meta-http-equiv-default-style', 'Default style state (http-equiv="default-style")')}}
        </p>
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td>
        La spécification HTML définit quand et comment
        <strong
          ><dfn
            >créer un algorithme déterminant la feuille de style CSS</dfn
          ></strong
        ><dfn>
          et qui gère les éléments <code>&#x3C;link></code> et
          <code>&#x3C;style></code>. Elle définit également le comportement de
          <code>&#x3C;meta </code></dfn
        ><code>http-equiv="default-style"></code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("HTML4.01", "present/styles.html#h-14.3", "Alternative style sheets")}}
      </td>
      <td>{{Spec2("HTML4.01")}}</td>
      <td>
        La spécification HTML définit le concept de feuilles de style préférées
        et alternatives.
      </td>
    </tr>
  </tbody>
</table>

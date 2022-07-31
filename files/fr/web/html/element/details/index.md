---
title: '<details> : l''élément de divulgation des détails'
slug: Web/HTML/Element/details
tags:
  - Disclosure Box
  - Disclosure Widget
  - Element
  - HTML
  - HTML interactive elements
  - Reference
  - Web
  - details
translation_of: Web/HTML/Element/details
browser-compat: html.elements.details
---
{{HTMLRef}}

L'élément HTML **`<details>`** est utilisé comme un outil permettant de révéler une information. Un résumé ou un intitulé peuvent être fournis grâce à un élément [`<summary>`](/fr/docs/Web/HTML/Element/summary).

La plupart du temps, le contrôle utilisé pour cet élément est un triangle qui est tourné ou tordu afin d'indiquer si l'élément est révélé ou non. Si le premier élément fils de l'élément `<details>` est un élément `<summary>`, c'est le contenu de ce dernier qui est utilisé comme intitulé pour le contenu à révéler (l'intitulé est donc toujours visible).

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-standard")}}

> **Note :** L'utilisation courante d'un triangle qui tourne ou s'enroule pour représenter l'ouverture ou la fermeture du widget explique pourquoi on les appelle parfois « twisties » en anglais.

Un widget `<details>` peut être dans l'un des deux états suivants. L'état par défaut _fermé_ affiche uniquement le triangle et l'étiquette à l'intérieur du `<summary>` (ou une chaîne par défaut définie par [l'agent utilisateur](/fr/docs/Glossary/User_agent) si aucun `<summary>`).

Lorsque l'utilisateur clique sur le widget ou le met au point, puis appuie sur la barre d'espacement, il s'ouvre par "torsion", révélant son contenu :

À partir de là, vous pouvez utiliser les feuilles de style en cascade pour donner un style au widget de divulgation, et vous pouvez ouvrir et fermer le widget de façon programmatique en définissant ou en supprimant son attribut [`open`](/fr/docs/Web/HTML/Element/details#attr-open).

Par défaut, lorsqu'il est fermé, le widget est seulement assez haut pour afficher le triangle de divulgation et le résumé. Lorsqu'il est ouvert, il s'étend pour afficher les détails qu'il contient.

> **Note :** Malheureusement, à l'heure actuelle, il n'existe aucun moyen intégré d'animer la transition entre l'ouverture et la fermeture.

Les implémentations entièrement conformes aux normes appliquent automatiquement le code CSS `display: list-item` à l'élément [`<summary>`](/fr/docs/Web/HTML/Element/summary). Vous pouvez l'utiliser pour personnaliser davantage son apparence. Voir [personnaliser le marqueur de révélation](#customizing_the_disclosure_widget) pour plus de détails.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >, racine de section,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >contenu interactif</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Un élément
        <a href="/fr/docs/Web/HTML/Element/summary"
          ><code>&#x3C;summary></code></a
        >
        suivi par du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu de flux</a
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
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://w3c.github.io/aria/#group">group</a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLDetailsElement"
          ><code>HTMLDetailsElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme tous les éléments HTML, cet élément accepte les [attributs universels](/fr/docs/Web/HTML/Global_attributes).

- `open`

  - : Cet attribut booléen indique si les détails — c'est-à-dire le contenu de l'élément `<details>` — sont actuellement visibles ou non. Les détails sont affichés lorsque cet attribut existe, ou cachés lorsque cet attribut est absent. Par défaut, cet attribut est absent, ce qui signifie que les détails ne sont pas visibles.

    > **Note :** Vous devez supprimer entièrement cet attribut pour que les détails soient cachés. Attention, `open="false"` rend les détails visibles, car cet attribut est booléen.

## Évènements

En plus des évènements classiques pris en charge par les éléments HTML, l'élément `<details>` prend en charge l'évènement [toggle](/fr/docs/Web/API/HTMLDetailsElement/toggle_event) qui est envoyé sur l'élément lorsque son état change entre ouvert et fermé (que ce soit dans un sens ou dans l'autre). L'évènement est envoyé après que l'état ait été changé et si plusieurs changements d'état ont eu lieu avant que le navigateur envoie l'évènement, le navigateur fusionnera ces évènements en un seul.

On peut alors écouter cet évènement en JavaScript afin de détecter le changement d'état du contrôle :

```js
details.addEventListener("toggle", function(evt){
  if(details.open) {
    /* l'état est passé en "ouvert" */
  } else {
    /* l'état est passé en "fermé" */
  }
}, false);
```

## Exemples

### Un exemple simple

Dans cet exemple, on utilise un élément `<details>` sans résumé/intitulé.

```html
<details>
  <p>Il faut un ordinateur équipé d'un système d'exploitation.
  L'ordinateur doit disposer d'une mémoire et, idéalement, d'une sorte
  de stockage à long terme. Un dispositif d'entrée et un dispositif de
  sortie sont recommandés.</p>
</details>
```

Ici, le navigateur utilisera alors un intitulé par défaut (généralement, ce sera "Détails").

{{EmbedLiveSample("Un_exemple_simple", "", 100)}}

### Créer un contrôle déjà ouvert

Pour obtenir une boîte `<details>` dans un état ouvert, il suffit d'ajouter l'attribut booléen `open` :

```html
<details open>
  <summary>Configuration requise</summary>
  <p>Il faut un ordinateur équipé d'un système d'exploitation.
  L'ordinateur doit disposer d'une mémoire et, idéalement, d'une sorte
  de stockage à long terme. Un dispositif d'entrée et un dispositif de
  sortie sont recommandés.</p>
</details>
```

Cela se traduit par :

{{EmbedLiveSample("Créer_un_contrôle_déjà_ouvert", "", 130)}}

### Personnaliser l'apparence

Utilisons un peu de CSS afin de personnaliser l'apparence du contrôle fourni par `<details>`.

#### CSS

```css
details {
  font: 16px "Open Sans", Calibri, sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details[open] > summary {
  background-color: #ccf;
}
```

Ce fragment de feuille de style CSS crée une apparence similaire à un onglet où, lorsqu'on clique sur l'onglet, il s'étend et révèle le contenu.

Le sélecteur `details[open]` peut être utilisé pour donner un style à l'élément qui est ouvert.

#### HTML

```html
<details open>
  <summary>Configuration requise</summary>
  <p>Il faut un ordinateur équipé d'un système d'exploitation.
  L'ordinateur doit disposer d'une mémoire et, idéalement, d'une sorte
  de stockage à long terme. Un dispositif d'entrée et un dispositif de
  sortie sont recommandés.</p>
</details>
```

#### Résultat

{{EmbedLiveSample("Personnaliser_l'apparence", "", 120)}}

### Personnaliser le marqueur de révélation

Le triangle généralement utilisé peut également être personnalisé. Toutefois, cette fonctionnalité a été standardisée récemment et n'est pas encore largement prise en charge. De plus, la méthode de prise en charge varie encore d'un navigateur à un autre.

L'élément [`<summary>`](/fr/docs/Web/HTML/Element/summary) prend en charge la propriété raccourcie [`list-style`](/fr/docs/Web/CSS/list-style) et ses propriétés longues, comme [`list-style-type`](/fr/docs/Web/CSS/list-style-type), pour changer le triangle de divulgation en ce que vous choisissez (généralement avec [`list-style-image`](/fr/docs/Web/CSS/list-style-image)). Par exemple, nous pouvons supprimer l'icône du widget de divulgation en définissant `list-style : none`.

Actuellement, Chrome ne prend pas en charge cette fonctionnalité et il faut utiliser [le pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) spécifique `::-webkit-details-marker` afin de personnaliser l'apparence.

#### CSS

```css
details {
  font: 16px "Open Sans", "Arial", sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  list-style: none;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}
```

Ce CSS crée un aspect similaire à celui d'une interface à onglets, où l'activation de l'onglet le développe et l'ouvre pour révéler son contenu.

#### HTML

```html
<details open>
  <summary>Configuration requise</summary>
  <p>Il faut un ordinateur équipé d'un système d'exploitation.
  L'ordinateur doit disposer d'une mémoire et, idéalement, d'une sorte
  de stockage à long terme. Un dispositif d'entrée et un dispositif de
  sortie sont recommandés.</p>
</details>
```

#### Résultat

{{EmbedLiveSample("Personnaliser_le_marqueur_de_révélation", "", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<summary>`](/fr/docs/Web/HTML/Element/summary)

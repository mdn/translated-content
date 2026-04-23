---
title: "<details> : l'élément de divulgation des détails"
slug: Web/HTML/Reference/Elements/details
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

L'élément [HTML](/fr/docs/Web/HTML) **`<details>`** crée un composant de divulgation dans lequel l'information n'est visible que lorsque le composant est ouvert. Un résumé ou une étiquette doit être fourni·e à l'aide de l'élément HTML {{HTMLElement("summary")}}.

Un composant de divulgation est généralement présenté à l'écran avec un petit triangle qui pivote (ou se tord) pour indiquer l'état ouvert/fermé, avec une étiquette à côté du triangle. Le contenu de l'élément `<summary>` sert d'étiquette pour le composant de divulgation. Le contenu de `<details>` fournit la {{Glossary("accessible description", "description accessible")}} pour le `<summary>`.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;details&gt;", "tabbed-standard")}}

```html interactive-example
<details>
  <summary>Détails</summary>
  Quelque chose d'assez discret pour passer inaperçu.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaaaaa;
  margin-bottom: 0.5em;
}
```

Un composant `<details>` peut être dans l'un des deux états. L'état par défaut _fermé_ affiche uniquement le triangle et l'étiquette à l'intérieur de `<summary>` (ou une chaîne par défaut définie par {{Glossary("user agent", "agent utilisateur")}} si aucun `<summary>` n'est présent).

Lorsque l'utilisateur·ice clique sur le composant ou le sélectionne puis appuie sur la barre d'espace, il s'ouvre par «&nbsp;torsion&nbsp;», révélant son contenu. L'utilisation courante d'un triangle qui pivote ou se tord pour représenter l'ouverture ou la fermeture du composant explique pourquoi on les appelle parfois «&nbsp;twisty&nbsp;» en anglais.

Vous pouvez utiliser du CSS pour mettre en forme le composant de divulgation, et vous pouvez l'ouvrir ou le fermer de façon programmatique en définissant ou en supprimant son attribut [`open`](#open). Malheureusement, il n'existe actuellement aucun moyen intégré d'animer la transition entre l'ouverture et la fermeture.

Par défaut, lorsqu'il est fermé, le composant n'est assez haut que pour afficher le triangle de divulgation et le résumé. Lorsqu'il est ouvert, il s'étend pour afficher les détails qu'il contient.

Les implémentations entièrement conformes aux normes appliquent automatiquement le CSS `{{CSSxRef("display")}}: list-item` à l'élément {{HTMLElement("summary")}}. Vous pouvez utiliser cela ou le pseudo-élément {{CSSxRef("::marker")}} pour [personnaliser le composant de divulgation](/fr/docs/Web/HTML/Reference/Elements/summary#changer_licône_du_résumé).

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `open`
  - : Cet attribut booléen indique si les détails — c'est-à-dire le contenu de l'élément `<details>` — sont actuellement visibles ou non. Les détails sont affichés lorsque cet attribut existe, ou cachés lorsque cet attribut est absent. Par défaut, cet attribut est absent, ce qui signifie que les détails ne sont pas visibles.

    > [!NOTE]
    > Vous devez supprimer entièrement cet attribut pour que les détails soient cachés. Attention, `open="false"` rend les détails visibles, car cet attribut est booléen.

- `name`
  - : Cet attribut permet de relier plusieurs éléments `<details>` pour qu'un seul soit ouvert à la fois. Cela permet aux développeur·euse·s de créer facilement des composants d'interface comme des accordéons sans script.

    L'attribut `name` définit un nom de groupe — donnez la même valeur `name` à plusieurs éléments `<details>` pour les regrouper. Un seul des éléments `<details>` du groupe peut être ouvert à la fois — ouvrir l'un fermera l'autre. Si plusieurs éléments `<details>` du groupe ont l'attribut `open`, seul le premier dans l'ordre du code source sera affiché ouvert.

    > [!NOTE]
    > Les éléments `<details>` n'ont pas besoin d'être adjacents dans le code source pour faire partie du même groupe.

## Évènements

En plus des évènements classiques pris en charge par les éléments HTML, l'élément `<details>` prend en charge l'évènement {{DOMxRef("HTMLElement/toggle_event", "toggle")}}, qui est envoyé à l'élément `<details>` chaque fois que son état change entre ouvert et fermé. Il est envoyé _après_ que l'état a changé, mais si l'état change plusieurs fois avant que le navigateur puisse envoyer l'évènement, les évènements sont regroupés et un seul est envoyé.

Vous pouvez utiliser un écouteur d'évènement pour `toggle` afin de détecter quand le composant change d'état&nbsp;:

```js
details.addEventListener(
  "toggle",
  (event) => {
    if (details.open) {
      /* l'état est passé en "ouvert" */
    } else {
      /* l'état est passé en "fermé" */
    }
  },
  false,
);
```

## Exemples

### Un exemple simple de divulgation

Cet exemple montre un élément `<details>` de base avec un `<summary>`.

```html
<details>
  <summary>Configuration requise</summary>
  <p>
    Nécessite un ordinateur équipé d'un système d'exploitation. L'ordinateur
    doit disposer d'une mémoire et, idéalement, d'un stockage à long terme. Un
    dispositif d'entrée ainsi qu'un dispositif de sortie sont recommandés.
  </p>
</details>
```

#### Résultat

{{EmbedLiveSample("Un exemple simple de divulgation", 650, 150)}}

### Créer une boîte de divulgation ouverte

Pour obtenir une boîte `<details>` dans un état ouvert, ajoutez l'attribut booléen `open`&nbsp;:

```html
<details open>
  <summary>Configuration requise</summary>
  <p>
    Nécessite un ordinateur équipé d'un système d'exploitation. L'ordinateur
    doit disposer d'une mémoire et, idéalement, d'un stockage à long terme. Un
    dispositif d'entrée ainsi qu'un dispositif de sortie sont recommandés.
  </p>
</details>
```

#### Résultat

{{EmbedLiveSample("Créer une boîte de divulgation ouverte", 650, 150)}}

### Plusieurs boîtes de divulgation nommées

Voici plusieurs boîtes `<details>`, toutes avec le même nom pour qu'une seule puisse être ouverte à la fois&nbsp;:

```html
<details name="requirements">
  <summary>Conditions d'obtention du diplôme</summary>
  <p>
    Nécessite 40 crédits, dont une note suffisante en santé, géographie,
    histoire, économie et menuiserie.
  </p>
</details>
<details name="requirements">
  <summary>Configuration requise</summary>
  <p>
    Nécessite un ordinateur équipé d'un système d'exploitation. L'ordinateur
    doit disposer d'une mémoire et, idéalement, d'un stockage à long terme. Un
    dispositif d'entrée ainsi qu'un dispositif de sortie sont recommandés.
  </p>
</details>
<details name="requirements">
  <summary>Exigences pour le poste</summary>
  <p>
    Nécessite des connaissances en HTML, CSS, JavaScript, accessibilité,
    performance web, confidentialité, sécurité, internationalisation, ainsi
    qu'une aversion pour le brocoli.
  </p>
</details>
```

#### Résultat

{{EmbedLiveSample("Plusieurs boîtes de divulgation nommées", 650, 150)}}

Essayez d'ouvrir tous les widgets de divulgation. Lorsque vous en ouvrez un, tous les autres se ferment automatiquement.

### Personnaliser l'apparence

Appliquons maintenant un peu de CSS pour personnaliser l'apparence de la boîte de divulgation.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    "Calibri",
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #dddddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #dddddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details:open > summary {
  background-color: #ccccff;
}
```

Ce CSS crée une apparence similaire à une interface à onglets, où cliquer sur l'onglet l'ouvre pour révéler son contenu.

> [!NOTE]
> Dans les navigateurs qui ne prennent pas en charge la pseudo-classe {{CSSxRef(":open")}}, vous pouvez utiliser le sélecteur d'attributs `details[open]` pour mettre en forme l'élément `<details>` lorsqu'il est ouvert.

#### HTML

```html
<details>
  <summary>Configuration requise</summary>
  <p>
    Nécessite un ordinateur équipé d'un système d'exploitation. L'ordinateur
    doit disposer d'une mémoire et, idéalement, d'un stockage à long terme. Un
    dispositif d'entrée ainsi qu'un dispositif de sortie sont recommandés.
  </p>
</details>
```

#### Résultat

{{EmbedLiveSample("Personnaliser l'apparence", 650, 150)}}

Voir la page {{HTMLElement("summary")}} pour [un exemple de personnalisation du widget de divulgation](/fr/docs/Web/HTML/Reference/Elements/summary#changer_licône_du_résumé).

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >, racine de section, contenu interactif, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Un élément {{HTMLElement("summary")}} suivi par du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLDetailsElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("summary")}}
- Le pseudo-élément CSS {{CSSxRef("::details-content")}}

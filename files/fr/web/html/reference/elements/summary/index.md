---
title: "<summary> : l'élément de révélation d'un résumé"
slug: Web/HTML/Reference/Elements/summary
original_slug: Web/HTML/Element/summary
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

L'élément [HTML](/fr/docs/Web/HTML) **`<summary>`** représente une boîte permettant de révéler le contenu d'un résumé ou d'une légende pour le contenu d'un élément {{HTMLElement("details")}}. En cliquant sur l'élément `<summary>`, on passe de l'état affiché à l'état masqué (et vice versa) de l'élément `<details>` parent.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;summary&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>
    J'ai des clés mais pas de portes. J'ai de l'espace mais pas de pièce. Vous
    pouvez entrer mais ne pouvez pas sortir. Qui suis-je ?
  </summary>
  Un clavier.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaa;
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
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

Un élément `<summary>` peut contenir des éléments de titre, du texte simple ou tout contenu HTML pouvant être placé au sein d'un paragraphe.

Un élément `<summary>` peut uniquement être utilisé comme le premier élément fils d'un élément `<details>`. Lorsque l'utilisateur clique sur le résumé, l'élément `<details>` parent change d'état (affiché ou masqué) et un évènement {{domxref("HTMLElement/toggle_event", "toggle")}} est envoyé à l'élément `<details>` (ce qui permet de détecter un changement d'état via un script).

Le contenu de l'élément `<details>` fournit la {{glossary("accessible description", "description accessible")}} pour l'élément `<summary>`.

### Libellé par défaut

Si le premier enfant d'un élément `<details>` n'est pas un élément `<summary>`, l'{{Glossary("user agent", "agent utilisateur")}} utilisera une chaîne de caractères par défaut (généralement «&nbsp;Détails&nbsp;») comme libellé pour la boîte de révélation.

### Mise en forme par défaut

Conformément à la spécification HTML, le style par défaut pour les éléments `<summary>` inclut `display: list-item`. Cela permet de changer ou de supprimer l'icône affichée comme widget à côté du libellé, qui est généralement un triangle.

Vous pouvez aussi changer le style en `display: block` pour supprimer le triangle.

Voir la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails, car tous les navigateurs ne prennent pas encore en charge toutes les fonctionnalités de cet élément.

Pour les navigateurs basés sur WebKit, comme Safari, il est possible de contrôler l'affichage de l'icône via le pseudo-élément CSS non standard `::-webkit-details-marker`. Pour supprimer le triangle, utilisez `summary::-webkit-details-marker { display: none }`.

## Exemples

Voici quelques exemples montrant l'utilisation de `<summary>`. Vous pouvez trouver d'autres exemples dans la documentation de l'élément {{HTMLElement("details")}}.

### Exemple simple

Un exemple simple montrant l'utilisation de `<summary>` dans un élément {{HTMLElement("details")}}&nbsp;:

#### HTML

```html
<details open>
  <summary>Détails produit</summary>
  <ol>
    <li>Date de fabrication&nbsp;: 01 janvier 2018</li>
    <li>Numéro de lot&nbsp;: LMA2542501</li>
    <li>Date limite de consommation&nbsp;: 31 août 2018</li>
  </ol>
</details>
```

#### Résultat

{{EmbedLiveSample("exemple_simple", 650, 120)}}

### Utilisation de titres

Il est possible d'utiliser des titres au sein d'un résumé.

#### HTML

```html
<details open>
  <summary><h4>Détails produit</h4></summary>
  <ol>
    <li>Date de fabrication&nbsp;: 01 janvier 2018</li>
    <li>Numéro de lot&nbsp;: LMA2542501</li>
    <li>Date limite de consommation&nbsp;: 31 août 2018</li>
  </ol>
</details>
```

#### Résultat

{{EmbedLiveSample("utilisation_de_titres", 650, 200)}}

Il existe actuellement quelques problèmes d'espacement qui peuvent être corrigés à l'aide de CSS.

> [!WARNING]
> Le rôle attribué à l'élément `<summary>` varie selon les navigateurs. Certains lui attribuent encore par défaut le rôle [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role), ce qui supprime tous les rôles de ses enfants. Cette incohérence peut poser des problèmes aux utilisateur·ice·s de technologies d'assistance telles que les lecteurs d'écran (`<h4>` dans l'exemple précédent verra son rôle supprimé et ne sera pas traité comme un titre pour ces utilisateur·ice·s). Vous devez tester votre implémentation de `<summary>` sur plusieurs plateformes afin de garantir une prise en charge de l'accessibilité cohérente.

### Utiliser des éléments HTML dans un résumé

Cet exemple ajoute une certaine sémantique à l'élément `<summary>` pour indiquer que le libellé est important&nbsp;:

#### HTML

```html
<details open>
  <summary><strong>Détails</strong></summary>
  <ol>
    <li>Date de fabrication&nbsp;: 01 janvier 2018</li>
    <li>Numéro de lot&nbsp;: LMA2542501</li>
    <li>Date limite de consommation&nbsp;: 31 août 2018</li>
  </ol>
</details>
```

#### Résultat

{{EmbedLiveSample("utiliser_des_éléments_html_dans_un_résumé", 650, 120)}}

### Changer l'icône du résumé

Le marqueur de l'élément `<summary>`, c'est-à-dire le triangle de révélation, peut être personnalisé avec CSS. Le marqueur peut être ciblé à l'aide du pseudo-élément {{cssxref("::marker")}}, qui accepte la propriété abrégée {{cssxref("list-style")}} ainsi que ses propriétés détaillées, comme {{cssxref("list-style-type")}}. Cela permet de remplacer le triangle par une image (généralement avec {{cssxref("list-style-image")}}) ou une chaîne de caractères (y compris des émojis). Dans cet exemple, nous remplaçons le contenu d'un widget de révélation et supprimons l'icône d'un autre en appliquant `list-style: none` avant d'ajouter une icône personnalisée via du contenu généré.

#### CSS

Dans le premier widget de révélation, nous mettons en forme le `::marker`, en modifiant la propriété {{cssxref("content")}} selon l'attribut `[open]` de l'élément `<details>`. Pour le second widget, nous supprimons le marqueur avec les propriétés `list-style`, puis nous ajoutons un contenu généré stylisé avec le pseudo-élément {{cssxref("::after")}}. Nous incluons également des styles pour `::-webkit-details-marker` afin de cibler Safari. Le sélecteur pour le pseudo-élément spécifique au navigateur est inclus dans une pseudo-classe {{cssxref(":is()")}} afin de ne pas invalider la liste des sélecteurs.

```css
details {
  font-size: 1rem;
  font-family: "Open Sans", Calibri, sans-serif;
  border: solid;
  padding: 2px 6px;
  margin-bottom: 1em;
}

details:first-of-type summary::marker,
:is(::-webkit-details-marker) {
  content: "+ ";
  font-family: monospace;
  color: red;
  font-weight: bold;
}

details[open]:first-of-type summary::marker {
  content: "− ";
}

details:last-of-type summary {
  list-style: none;
  &::after {
    content: "+";
    color: white;
    background-color: darkgreen;
    border-radius: 1em;
    font-weight: bold;
    padding: 0 5px;
    margin-inline-start: 5px;
  }
  [open] &::after {
    content: "−";
  }
}
details:last-of-type summary::-webkit-details-marker {
  display: none;
}
```

Le CSS inclut le [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[open]`, qui ne correspond que lorsque l'attribut `open` est présent (c'est-à-dire lorsque l'élément `<details>` est ouvert). Les pseudo-classes {{cssxref(":first-of-type")}} et {{cssxref(":last-of-type")}} ciblent respectivement le premier et le dernier élément du même type. Nous avons inclus le pseudo-élément préfixé `-webkit-` dans une pseudo-classe {{cssxref(":is()")}} car elle accepte une [liste de sélecteurs tolérante](/fr/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list)&nbsp;: si le pseudo-élément préfixé est invalide dans un navigateur, tout le bloc de sélecteurs ne sera pas invalidé. Nous avons aussi utilisé la [syntaxe imbriquée de CSS](/fr/docs/Web/CSS/Nesting_selector). Voir le module [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors).

#### HTML

```html-nolint
<h1>Citations d'Helen Keller</h1>

<details>
  <summary>Sur les droits des femmes</summary>
  <p>
    <q>Nous avons prié, nous avons supplié, nous avons imploré pour obtenir le droit de vote, dans l'espoir que les hommes, par chevalerie, accorderaient l'égalité des droits aux femmes et les associeraient aux affaires de l'État. Nous espérions que leur bon sens l'emporterait sur les préjugés et la stupidité. Nous pensions que leur sens tant vanté de la justice surmonterait les erreurs qui entravent si souvent l'esprit humain&nbsp;; mais nous sommes toujours reparties les mains vides. Nous ne supplierons plus.</q>
  </p>
</details>

<details>
  <summary>Sur l'optimisme</summary>
  <p>
    <q>L'optimisme est la foi qui mène à la réussite&nbsp;; rien ne peut être accompli sans espoir.</q>
  </p>
</details>
```

#### Résultat

{{EmbedLiveSample("changer_licône_du_résumé", 650, 400)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_phrasé"
          >Contenu phrasé</a
        >
        ou un élément décrivant du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_de_titre"
          >contenu de titre</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise ouvrante et la balise fermante sont obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément {{HTMLElement("details")}}.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td> <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Aucun rôle correspondant <sup>(angl.)</sup></a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé.</td>
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

## Voir aussi

- {{HTMLElement("details")}}

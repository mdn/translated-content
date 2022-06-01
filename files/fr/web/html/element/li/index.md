---
title: <li>
slug: Web/HTML/Element/li
tags:
  - Contenu de groupage HTML
  - Element
  - HTML
  - Reference
translation_of: Web/HTML/Element/li
---
{{HTMLRef}}

L'élément HTML **`<li>`** est utilisé pour représenter un élément dans une liste. Il doit être contenu dans un élément parent : une liste ordonnée ({{HTMLElement("ol")}}), une liste non ordonnée ({{HTMLElement("ul")}}) ou un menu ({{HTMLElement("menu")}}). Dans les menus et les listes non ordonnées, les éléments de liste sont habituellement affichés en utilisant des puces. Dans les listes ordonnées, ils sont habituellement affichés avec compteur croissant à gauche, tel qu'un nombre ou une lettre.

{{EmbedInteractiveExample("pages/tabbed/li.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- {{htmlattrdef("value")}}

  - : Cette valeur entière indique la valeur ordinale en cours de l'élément de liste tel que défini par l'élément {{HTMLElement("ol")}}. La seule valeur autorisée pour cet attribut est un nombre, même si la liste est affichée avec des chiffres romains ou des lettres. Les éléments de la liste qui suivent celui-ci continueront la numérotation à partir de la valeur indiquée. L'attribut **value** n'a pas de signification pour les listes non ordonnées ({{HTMLElement("ul")}}) ou pour les menus ({{HTMLElement("menu")}}).

    > **Note :** Cet attribut a été déprécié en HTML4 mais a été réintroduit en HTML5.

    > **Note :** Avant {{Gecko("9.0")}}, des valeurs négatives étaient incorrectement converties en 0. A partir de {{Gecko("9.0")}}, toutes les valeurs entières ont été correctement analysées.

- {{htmlattrdef("type")}} {{Deprecated_inline}}

  - : Cet attribut de caractère indique le type de numérotation utilisé pour la liste :

    - `a` : lettres minuscules
    - `A` : lettres majuscules
    - `i` : chiffres romains en minuscules
    - `I` : chiffres romains en majuscules
    - `1` : nombres

    Ce type surcharge celui utilisé par son élément parent {{HTMLElement("ol")}} si présent.

    > **Note :** Cet attribut a été déprécié : utilisez la propriété CSS {{cssxref("list-style-type")}} à la place.

## Exemples

### Liste ordonnée

#### HTML

```html
<ol>
  <li>premier article</li>
  <li>second article</li>
  <li>troisième article</li>
</ol>
```

#### Résultat

{{EmbedLiveSample("Liste_ordonnée")}}

### Liste ordonnée démarrant avec un indice donné

#### HTML

```html
<ol type="I">
  <li value="3">troisième article</li>
  <li>quatrième article</li>
  <li>cinquième article</li>
</ol>
```

#### Résultat

{{EmbedLiveSample("Liste_ordonnée_démarrant_avec_un_indice_donné")}}

### Liste non ordonnée

#### HTML

```html
<ul>
  <li>premier article</li>
  <li>second article</li>
  <li>troisième article</li>
</ul>
```

#### Résultat

{{EmbedLiveSample("Liste_non_ordonnée")}}

> **Note :** Pour d'autres exemples plus détaillés, voir les pages {{HTMLElement("ol")}} et {{HTMLElement("ul")}}.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de fin peut être absente si l'élément est immédiatement suivi
        par un autre élément {{HTMLElement("li")}} ou s'il n'y a plus
        d'autre contenu dans son élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("ul")}}, {{HTMLElement("ol")}} ou
        {{HTMLElement("menu")}}. Bien que ce ne soit pas un usage
        conforme, l'élément obsolète {{HTMLElement("dir")}} peut également
        être un parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        {{ARIARole("menuitem")}},
        {{ARIARole("menuitemcheckbox")}},
        {{ARIARole("menuitemradio")}}, {{ARIARole("option")}},
        {{ARIARole("presentation")}}, {{ARIARole("radio")}},
        {{ARIARole("separator")}}, {{ARIARole("tab")}},
        {{ARIARole("treeitem")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLLIElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                            | Statut                           | Commentaire                       |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-li-element', '&lt;li&gt;')}}     | {{Spec2('HTML WHATWG')}} |                                   |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-li-element', '&lt;li&gt;')}} | {{Spec2('HTML5 W3C')}}     |                                   |
| {{SpecName('HTML4.01', 'struct/lists.html#h-10.2', '&lt;li&gt;')}}                 | {{Spec2('HTML4.01')}}     | L'attribut `type` a été déprécié. |

## Compatibilité des navigateurs

{{Compat("html.elements.li")}}

## Voir aussi

- Les autres éléments liés aux listes : {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}} et {{HTMLElement("dir")}} (obsolète) ;
- Les propriétés CSS qui peuvent être particulièrement utiles pour mettre en forme l'élément `<li>` :

  - la propriété {{cssxref("list-style")}}, pour choisir la manière d'afficher l'ordinal,
  - les [compteurs CSS](/fr/docs/Web/CSS/Compteurs_CSS), pour gérer des listes imbriquées complexes,
  - la propriété {{cssxref("margin")}}, pour contrôler l'indentation de l'élément de liste.

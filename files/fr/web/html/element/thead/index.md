---
title: <thead>
slug: Web/HTML/Element/thead
tags:
  - Element
  - HTML
  - Reference
  - Tableaux
  - Web
translation_of: Web/HTML/Element/thead
---
{{HTMLRef}}

L'élément **`<thead>`** définit un ensemble de lignes qui définit l'en-tête des colonnes d'un tableau.

{{EmbedInteractiveExample("pages/tabbed/thead.html","tabbed-taller")}}

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

### Attributs dépréciés ou obsolètes

- {{htmlattrdef("align")}} {{Deprecated_inline}} en {{HTMLVersionInline("4")}}, {{deprecated_inline}} en {{HTMLVersionInline("5")}}

  - : Cet attribut à valeurs définit l'alignement horizontal pour le contenu de chaque cellule. Les valeurs possibles sont :

    - `left`&nbsp;: le contenu de la cellule est alligné à gauche de la cellule
    - `center` : le contenu de la cellule est centré horizontalement
    - `right` : le contenu de la cellule est aligné à droite de la cellule
    - `justify` : insert des espaces dans le contenu textuel afin que le contenu de la cellule soit justifié
    - `char` : aligne le contenu textuel de la cellule selon un caractère spécial avec un décalage minimum définis par les attributs  {{htmlattrxref("char", "thead")}} et {{htmlattrxref("charoff", "thead")}} {{unimplemented_inline(2212)}}.

    Si cet attribut n'est pas renseigné, la valeur `left` est prise par défaut.

    > **Note :** Cet attribut est devenu obsolète dans le dernier standard.
    >
    > - Pour réaliser le même effet qu'avec les valeurs left, center, right ou justify, utilisez la propriété CSS {{cssxref("text-align")}} sur cet élément.
    > - Pour réaliser le même effet qu'avec char, vous pouvez, en CSS3, utiliser la valeur de {{htmlattrxref("char", "thead")}} comme valeur pour la propriété {{cssxref("text-align")}} {{unimplemented_inline}}.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : Cet attribut définit la couleur d'arrière-plan de toutes les cellules. C'est un code à 6 chiffres hexadécimaux comme défini par le [sRGB](https://www.w3.org/Graphics/Color/sRGB). Il est précédé d'un '#'. Un des [mots-clés préfédinis pour les couleurs](/fr/docs/Web/CSS/color_value#color_keywords) peut également être utilisé.

    > **Note :** Il est fortement conseillé de ne pas utiliser cet attribut car celui-ci n'est pas un attribut standard et n'a été implémentée que sous certaines versions d'Internet Explorer. L'élément {{HTMLElement("thead")}} doit être mis en forme grâce au [CSS](/fr/docs/CSS). Pour fournir un effet semblable à celui achevé par l'attribut **bgcolor**, il est possible d'utiliser la propriété CSS {{cssxref("background-color")}} sur les éléments  {{HTMLElement("td")}} ou {{HTMLElement("th")}} souhaités.

- {{htmlattrdef("char")}} {{Deprecated_inline}} en {{HTMLVersionInline("4")}}, {{deprecated_inline}} en {{HTMLVersionInline("5")}}

  - : Cet attribut est utilisé pour définir le caractère sur lequel aligner les cellules d'une colonne. Les valeurs de cet attribut contiennent généralement un point (.) pour aligner des nombres ou des valeurs monétaires. Si l'attribut {{htmlattrxref("align", "thead")}} ne vaut pas `char`, l'attribut est ignoré.

    > **Note :** Cet attribut est obsolète et il est donc fortement déconseillé de l'utiliser. De fait, il n'est pas supporté par le dernier standard. Pour réaliser le même effet qu'avec {{htmlattrxref("char", "thead")}}, on peut utiliser CSS3 en attribuant la même valeur à la propriété {{cssxref("text-align")}}.{{unimplemented_inline}}.

- {{htmlattrdef("charoff")}} {{Deprecated_inline}} en {{HTMLVersionInline("4")}}, {{deprecated_inline}} en {{HTMLVersionInline("5")}}

  - : Cet attribut est utilisé pour indiquer le décalage, en nombre de caractères, depuis le caractère définit par l'attribut **char** à appliquer au contenu des cellules.

    > **Note :** Cet attribut ne doit plus être utilisé car il est maintenant obsolète et n'est plus supporté dans le dernier standard.

- {{htmlattrdef("valign")}} {{Deprecated_inline}} en {{HTMLVersionInline("4")}}, {{deprecated_inline}} en {{HTMLVersionInline("5")}}

  - : Cet attribut définit l'alignement vertical du texte des cellules de la colonne. Les valeurs possibles de cet attribut sont :

    - `baseline` qui alignera le texte à la ligne la plus basse possible en utilisant la [ligne de base](https://fr.wikipedia.org/wiki/Ligne_de_base_%28typographie%29) des caractères. Si les caractères ont tous la même taille, cela aura le même effet que la valeur `bottom`.
    - `bottom` qui placera le texte au plus bas de la cellule
    - `middle` qui centrera verticalement le texte dans la cellule
    - `top` qui placera le texte au plus haut de la cellule.

    > **Note :** Cet attribut étant maintenant obsolète (et n'étant plus supporté), il est fortement déconseillé de l'utiliser. La propriété CSS {{cssxref("vertical-align")}} doit être utilisée à la place.

## Exemples

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Contenu d'en-tête 1</th>
      <th>Contenu d'en-tête 2</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Pied de tableau 1</td>
      <td>Pied de tableau 2</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Contenu interne 1</td>
      <td>Contenu interne 2</td>
    </tr>
  </tbody>
</table>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","150")}}

> **Note :** Consulter la page {{HTMLElement("table")}} pour plus d'exemples sur `<thead>`.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Zéro ou plusieurs éléments {{HTMLElement("tr")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin peut être absente
        si l'élément {{HTMLElement("thead")}} est immédiatement suivi
        par un élément {{HTMLElement("tbody")}} ou par un élément
        {{HTMLElement("tfoot")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("table")}}. L'élément
        {{HTMLElement("thead")}} doit apparaître après tout élément
        {{HTMLElement("caption")}} ou
        {{HTMLElement("colgroup")}} (même si ce dernier est défini
        implicitement), il doit apparaître avant tout élément
        {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} ou
        {{HTMLElement("tr")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                            | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG','tables.html#the-thead-element','thead element')}}     | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C','tabular-data.html#the-thead-element','thead element')}} | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.thead")}}

## Voir aussi

- Les autres éléments HTML liés aux tableaux : {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}.
- Les propriétés et pseudo-classes CSS particulièrement utiles pour mettre en forme l'élément `<thead>` :

  - La pseudo-classe {{cssxref(":nth-child")}} qui permet de définir l'alignement des cellules de la colonne
  - La propriété {{cssxref("text-align")}} qui permet d'aligner le contenu des différentes cellules par rapport à un même caractère (par exemple le point ou la virgule).

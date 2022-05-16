---
title: '<tbody> : l''élément de corps d''un tableau'
slug: Web/HTML/Element/tbody
tags:
  - Element
  - HTML
  - Reference
  - Tableaux
  - Web
translation_of: Web/HTML/Element/tbody
---
{{HTMLRef}}

L'élément HTML **`<tbody>`** permet de regrouper un ou plusieurs éléments {{HTMLElement("tr")}} afin de former le corps d'un tableau HTML ({{HTMLElement("table")}}).

{{EmbedInteractiveExample("pages/tabbed/tbody.html","tabbed-taller")}}

L'élément `<tbody>`, ainsi que les éléments {{HTMLElement("thead")}} et {{HTMLElement("tfoot")}}, fournit des informations sémantiques qui sont utilisées pour l'affichage à l'écran, l'impression et l'accessibilité.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

### Attributs dépréciés ou obsolètes

- {{htmlattrdef("align")}} {{Deprecated_inline}} en {{HTMLVersionInline(4.01)}}, {{deprecated_inline}} en {{HTMLVersionInline(5)}}

  - : Cet attribut à valeurs définit l'alignement horizontal pour le contenu de chaque cellule de la colonne. Les valeurs possibles sont :

    - `left` : le contenu de la cellule est alligné à gauche de la cellule ;
    - `center` : le contenu de la cellule est centré horizontalement ;
    - `right` : le contenu de la cellule est aligné à droite de la cellule ;
    - `justify` : ajuste la largeur des espaces du contenu texte afin que le contenu de la cellule soit justifié ;
    - `char` : aligne le contenu texte de la cellule selon un caractère spécial avec un décalage minimum défini par les attributs {{htmlattrxref("char", "tbody")}} et {{htmlattrxref("charoff", "tbody")}} {{unimplemented_inline(2212)}}.

    Si cet attribut n'est pas renseigné, la valeur `left` est prise par défaut.

    > **Note :** cet attribut est devenu obsolète dans le dernier standard.
    >
    > - Pour réaliser le même effet qu'avec les valeurs `left`, `center`, `right` ou `justify`, utilisez la propriété CSS {{cssxref("text-align")}} sur cet élément.
    > - Pour réaliser le même effet qu'avec `char`, vous pouvez, en CSS3, utiliser la valeur de {{htmlattrxref("char", "tbody")}} comme valeur pour la propriété {{cssxref("text-align")}} {{unimplemented_inline}}.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : Cet attribut définit la couleur d'arrière-plan de toutes les cellules. C'est un code hexadécimal à 6 chiffres comme défini par le [sRGB](http://www.w3.org/Graphics/Color/sRGB). Il est précédé d'un `#`. Un des [mots-clés préfédinis pour les couleurs](/fr/docs/Web/CSS/color_value#color_keywords) peut également être utilisé.

    > **Note :** il est fortement conseillé de ne pas utiliser cet attribut car il n'est pas standard et n'a été implémenté que sous certaines versions d'Internet Explorer. L'élément {{HTMLElement("tbody")}} doit être mis en forme grâce aux propriétés [CSS](/fr/docs/CSS). Pour fournir un effet semblable à celui produit par l'attribut **`bgcolor`**, il est possible d'utiliser la propriété CSS {{cssxref("background-color")}} sur les éléments {{HTMLElement("td")}} ou {{HTMLElement("th")}} souhaités.

- {{htmlattrdef("char")}} {{Deprecated_inline}} en {{HTMLVersionInline(4.01)}}, {{deprecated_inline}} en {{HTMLVersionInline(5)}}

  - : Cet attribut est utilisé pour définir le caractère sur lequel aligner les cellules d'une colonne. Les valeurs de cet attribut contiennent généralement un point (.) pour aligner des nombres ou des valeurs monétaires. Si l'attribut {{htmlattrxref("align", "tbody")}} ne vaut pas `char`, l'attribut est ignoré.

    > **Note :** cet attribut est obsolète et son utilisation est donc fortement déconseillé. De fait, il n'est pas pris en charge par la dernière recommandation. Pour réaliser le même effet qu'avec {{htmlattrxref("char", "tbody")}}, en utilisant CSS3 en attribuant la même valeur à la propriété {{cssxref("text-align")}}.{{unimplemented_inline}}.

- {{htmlattrdef("charoff")}} {{Deprecated_inline}} en {{HTMLVersionInline(4.01)}}, {{deprecated_inline}} en {{HTMLVersionInline(5)}}

  - : Cet attribut est utilisé pour indiquer le décalage, en nombre de caractères, depuis le caractère définit par l'attribut **char** à appliquer au contenu des cellules.

    > **Note :** Cet attribut ne doit plus être utilisé car il est maintenant obsolète et n'est plus supporté dans le dernier standard.

- {{htmlattrdef("valign")}} {{Deprecated_inline}} en {{HTMLVersionInline(4.01)}}, {{deprecated_inline}} en {{HTMLVersionInline(5)}}

  - : Cet attribut définit l'alignement vertical du texte des cellules de la colonne. Les valeurs possibles de cet attribut sont :

    - `baseline` qui alignera le texte sur la ligne la plus basse possible en utilisant la [ligne de base](http://fr.wikipedia.org/wiki/Ligne_de_base_%28typographie%29) des caractères. Si les caractères ont tous la même taille, cela aura le même effet que la valeur `bottom` ;
    - `bottom` qui placera le texte au plus bas de la cellule ;
    - `middle` qui centrera verticalement le texte dans la cellule ;
    - `top` qui placera le texte au plus haut de la cellule.

    > **Note :** cet attribut étant maintenant obsolète (et n'étant plus pris en charge), il est fortement déconseillé de l'utiliser. La propriété CSS {{cssxref("vertical-align")}} doit être utilisée à la place.

## **Notes d'utilisation**

- Lorsque le tableau contient un élément {{HTMLElement("thead")}} (qui identifie les lignes d'en-tête), l'élément `<tbody>` doit apparaître après.
- Si on utilise `<tbody>`, il faudra alors que celui-ci contienne toutes les lignes qui ne sont pas des lignes d'en-tête ou de pied de tableau. Autrement dit, il n'est pas possible d'avoir des éléments {{HTMLElement("tr")}} qui soient des éléments fils directs de {{HTMLElement("table")}} si on utilise `<tbody>`.
- Utilisé à la suite d'un élément {{HTMLElement("thead")}} et/ou {{HTMLElement("tfoot")}}, l'élément `<tbody>` fournit des informations sémantiques supplémentaires pour les appareils d'affichage ou d'impression.
- Lorsqu'il est imprimé, `<tbody>` représente le contenu qui, lorsqu'il est plus long qu'une page, sera différent sur chaque page. En revanche, {{HTMLElement("thead")}} et {{HTMLElement("tfoot")}} seront les mêmes ou seront semblables sur chacune des pages.
- `<tbody>` permet d'obtenir un défilement séparé pour les éléments {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} et {{HTMLElement("caption")}} d'un même élément {{HTMLElement("table")}}.
- À la différence des éléments `<thead>`, `<tfoot>` et `<caption>`, on peut utiliser plusieurs éléments `<tbody>` (à la suite). Cela permet de répartir les lignes des grands tableaux en différentes sections, chacune pouvant être mise en forme distinctement.

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

### CSS

```css
table {
  border: 2px solid #555;
  border-collapse: collapse;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","150")}}

> **Note :** Consulter la page {{HTMLElement("table")}} pour plus d'exemples sur `<tbody>`.

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
      <td>Zéro ou plusieurs éléments {{HTMLElement("tr")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        L'élément {{HTMLElement("tbody")}} n'est pas un élément fils
        obligatoire de {{HTMLElement("table")}}. Cependant, il ne doit
        pas être présent si l'élément parent {{HTMLElement("table")}}
        possède un élément {{HTMLElement("tr")}} comme élément fils.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        L'élément <code>&#x3C;tbody></code> doit être au sein d'un élément
        {{HTMLElement("table")}} et peut être ajouté après un élément
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}
        ou {{HTMLElement("tfoot")}}.
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
| {{SpecName('HTML WHATWG','tables.html#the-tbody-element','tbody element')}}     | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C','tabular-data.html#the-tbody-element','tbody element')}} | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.tbody")}}

## Voir aussi

- Les autres éléments HTML relatifs aux tableaux : {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}} ;
- Les propriétés et pseudo-classes CSS qui sont particulièrement utiles pour mettre en forme l'élément `<tbody>` :

  - La pseudo-classe {{cssxref(":nth-child")}} qui permet de paramétrer l'alignement des cellules d'une colonne ;
  - La propriété {{cssxref("text-align")}} qui permet d'aligner le contenu des cellules par rapport à un même caractère (par exemple « . »).

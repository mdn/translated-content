---
title: '<td> : l''élément de cellule de tableau'
slug: Web/HTML/Element/td
tags:
  - Element
  - HTML
  - Reference
  - Tableaux
  - Web
translation_of: Web/HTML/Element/td
---
{{HTMLRef}}

L'élément HTML **`<td>`** définit une cellule d'un tableau qui contient des données. Cet élément fait partie du _modèle de tableau_.

{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- {{htmlattrdef("colspan")}}

  - : Cet attribut contient un entier positif indiquant le nombre de colonnes sur lesquelles s'étend la cellule. La valeur par défaut est 1, si la valeur est 0, la cellule s'étend jusqu'à la fin du  {{HTMLElement("colgroup")}} auquel appartient la cellule, même si celui-ci est défini implicitement. Des valeurs supérieures à 1000 peuvent être considérées comme incorrectes et seront interprétées comme valant la valeur par défaut (1).

    > **Note :** En {{HTMLVersionInline(5)}} cet attribut ne peut valoir qu'un nombre strictement positif car [il ne doit pas être utilisé pour faire chevaucher des cellules](https://dev.w3.org/html5/spec/single-page.html#attr-tdth-colspan). Par ailleurs, Firefox est le seul navigateur supportant la valeur 0 définie par la spécification {{HTMLVersionInline(4.01)}}.

- {{htmlattrdef("headers")}}
  - : Cet attribut est une liste de chaînes de caractères séparées par des espace. Chacune correspond à l'attribut **id** de l'élément {{HTMLElement("th")}} qui s'applique à la cellule courante.
- {{htmlattrdef("rowspan")}}
  - : Cet attribut contient un entier positif indiquant sur combien de lignes s'étend la cellule. La valeur par défaut est 1. Si cet attribut vaut 0, la cellule s'étend jusqu'à la fin de la section ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} du tableau à laquelle appartient la cellule même si cette section est définie implicitement. Les valeurs supérieures à 65534 sont ramenées à 65534.

### Attributs obsolètes

- {{htmlattrdef("abbr")}} {{deprecated_inline}}

  - : Cet attribut contient une description courte et abrégée du contenu de la cellule. Certains outils utilisateurs, comme la synthèse vocale, peuvent décrire cette information avant le contenu lui-même.

    > **Note :** Cet attribut est obsolète dans le dernier standard et ne doit donc plus être utilisé. Il faut dans ces cas introduire la description au sein de la cellule comme un élément {{HTMLElement("abbr")}} indépendant ou utiliser l'attribut **`title`** de la cellule pour représenter le contenu et la cellule elle-même pour représenter le contenu abrégé.

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : Cet attribut à valeurs définit l'alignement horizontal pour le contenu de chaque cellule de la colonne. Les valeurs possibles sont :

    - `left`&nbsp;: le contenu de la cellule est alligné à gauche de la cellule
    - `center` : le contenu de la cellule est centré horizontalement
    - `right` : le contenu de la cellule est aligné à droite de la cellule
    - `justify` : insert des espaces dans le contenu textuel afin que le contenu de la cellule soit justifié
    - `char` : aligne le contenu textuel de la cellule selon un caractère spécial avec un décalage minimum définis par les attributs  {{htmlattrxref("char", "td")}} et {{htmlattrxref("charoff", "td")}} {{unimplemented_inline(2212)}}.

    Si cet attribut n'est pas renseigné, la valeur `left` est prise par défaut.

    > **Note :** Cet attribut est devenu obsolète dans le dernier standard et ne doit donc plus être utilisé.
    >
    > - Pour réaliser les mêmes effets que les valeurs `left`, `center`, `right` ou `justify`, il faut utiliser la propriété CSS {{cssxref("text-align")}} sur l'élément
    > - Pour réaliser le même effet qu'avec la valeur `char`. Il est possible, en CSS3, d'utiliser la valeur de l'attribut {{htmlattrxref("char", "td")}} comme valeur de la propriété {{cssxref("text-align")}}. {{unimplemented_inline}}.

- {{htmlattrdef("axis")}} {{deprecated_inline}}

  - : Cet attribut contient une liste de chaîne de caractères (séparées par des espaces). Chaque chaîne de caractère est l'identifiant d'un groupe de cellule auquel cet en-tête s'applique.

    > **Note :** Cet attribut est obsolète dans le dernier standard et ne doit donc plus être utilisé. L'attribut {{htmlattrxref("scope", "td")}} doit être utilisé pour le remplacer.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : Cet attribut définit la couleur d'arrière-plan de toutes les cellules de la colonne. C'est un code à 6 chiffres hexadécimaux comme défini par le [sRGB](https://www.w3.org/Graphics/Color/sRGB). Il est précédé d'un '#'. Un de ces seize mot-clé peut également être utilisé.

    <table>
      <tbody>
        <tr>
          <td></td>
          <td><code>black</code> = "#000000"</td>
          <td></td>
          <td><code>green</code> = "#008000"</td>
        </tr>
        <tr>
          <td></td>
          <td><code>silver</code> = "#C0C0C0"</td>
          <td></td>
          <td><code>lime</code> = "#00FF00"</td>
        </tr>
        <tr>
          <td></td>
          <td><code>gray</code> = "#808080"</td>
          <td></td>
          <td><code>olive</code> = "#808000"</td>
        </tr>
        <tr>
          <td></td>
          <td><code>white</code> = "#FFFFFF"</td>
          <td></td>
          <td><code>yellow</code> = "#FFFF00"</td>
        </tr>
        <tr>
          <td></td>
          <td><code>maroon</code> = "#800000"</td>
          <td></td>
          <td><code>navy</code> = "#000080"</td>
        </tr>
        <tr>
          <td></td>
          <td><code>red</code> = "#FF0000"</td>
          <td></td>
          <td><code>blue</code> = "#0000FF"</td>
        </tr>
        <tr>
          <td></td>
          <td><code>purple</code> = "#800080"</td>
          <td></td>
          <td><code>teal</code> = "#008080"</td>
        </tr>
        <tr>
          <td></td>
          <td><code>fuchsia</code> = "#FF00FF"</td>
          <td></td>
          <td>
            <p><code>aqua</code> = "#00FFFF"</p>
          </td>
        </tr>
      </tbody>
    </table>

    > **Note :** Il est fortement conseillé de ne pas utiliser cet attribut car celui-ci n'est pas un attribut standard et n'a été implémentée que sous certaines versions d'Internet Explorer. L'élément {{HTMLElement("td")}} doit être mis en forme grâce au [CSS](/fr/docs/CSS). Pour fournir un effet semblable à celui achevé par l'attribut **`bgcolor`**, il est possible d'utiliser la propriété CSS {{cssxref("background-color")}}.

- {{htmlattrdef("char")}} {{deprecated_inline}}

  - : Cet attribut est utilisé pour définir le caractère sur lequel aligner les cellules d'une colonne. Les valeurs de cet attribut contiennent généralement un point (.) pour aligner des nombres ou des valeurs monétaires. Si l'attribut {{htmlattrxref("align", "td")}} ne vaut pas `char`, l'attribut est ignoré.

    > **Note :** Cet attribut est obsolète et il est donc fortement déconseillé de l'utiliser. De fait, il n'est pas supporté par le dernier standard. Pour réaliser le même effet qu'avec {{htmlattrxref("char", "td")}}, il faut utiliser CSS3 en attribuant la même valeur à la propriété {{cssxref("text-align")}}.{{unimplemented_inline}}.

- {{htmlattrdef("charoff")}} {{deprecated_inline}}

  - : Cet attribut est utilisé pour indiquer le décalage, en nombre de caractères, depuis le caractère définit par l'attribut **char** à appliquer au contenu des cellules.

    > **Note :** Cet attribut ne doit plus être utilisé car il est maintenant obsolète et n'est plus supporté dans le dernier standard.

- {{htmlattrdef("valign")}} {{deprecated_inline}}

  - : Cet attribut définit l'alignement vertical du texte des cellules de la colonne. Les valeurs possibles de cet attribut sont :

    - `baseline` qui alignera le texte à la ligne la plus basse possible en utilisant la [ligne de base](https://fr.wikipedia.org/wiki/Ligne_de_base_%28typographie%29) des caractères. Si les caractères ont tous la même taille, cela aura le même effet que la valeur `bottom`.
    - `bottom` qui placera le texte au plus bas de la cellule
    - `middle` qui centrera verticalement le texte dans la cellule
    - `top` qui placera le texte au plus haut de la cellule.

    > **Note :** Cet attribut est obsolète dans le dernier standard, la propriété CSS {{cssxref("vertical-align")}} doit être utilisée à la place.

- {{htmlattrdef("width")}} {{deprecated_inline}}

  - : Cet attribut est utilisé afin de définir la largeur recommandée pour une cellule. Les propriétés [`cellspacing`](/fr/docs/Web/API/HTMLTableElement/cellSpacing) et [`cellpadding`](/fr/docs/Web/API/HTMLTableElement/cellPadding) peuvent être utilisées pour ajouter un espace supplémentaire et la largeur de l'élément {{HTMLElement("col")}} peut avoir un effet. En général, si la largeur d'une colonne est trop étroite pour afficher une cellule correctement, elle sera élargie lors de l'affichage.

    > **Note :** Cet attribut est obsolète dans le dernier standard, la propriété CSS {{cssxref("width")}} doit être utilisée à la place.

## Exemples

### HTML

```html
<table>
  <tr>
    <th>Prénom</th><th>Nom</th>
  </tr>
  <tr>
    <td>Jean</td> <td>Biche</td>
  </tr>
  <tr>
    <td>Marcel</td> <td>Patulacci</td>
  </tr>
</table>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

> **Note :** Pour plus d'exemples, voir la page {{HTMLElement("table")}}.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>Racine de section.</td>
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
        La balise de début est obligatoire. La balise de fin peut être absente
        si l'élément est immédiatement suivi par un élément
        {{HTMLElement("th")}} ou un élément {{HTMLElement("td")}}
        ou s'il n'y a plus aucune donnée dans l'élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément {{HTMLElement("tr")}}.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTableDataCellElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                    | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG','tables.html#the-td-element','td element')}}     | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C','tabular-data.html#the-td-element','td element')}} | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.td")}}

## Voir aussi

- Les autres éléments HTML relatifs aux tableaux : {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}.

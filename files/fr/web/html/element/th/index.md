---
title: <th>
slug: Web/HTML/Element/th
tags:
  - Element
  - HTML
  - Reference
  - Tableaux
  - Web
translation_of: Web/HTML/Element/th
---
{{HTMLRef}}

L'élément HTML **`<th>`** définit une cellule d'un tableau comme une cellule d'en-tête pour un groupe de cellule. La nature de ce groupe est définie grâce aux attributs {{htmlattrxref("scope", "th")}} et {{htmlattrxref("headers", "th")}}.

{{EmbedInteractiveExample("pages/tabbed/th.html","tabbed-taller")}}

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- {{htmlattrdef("abbr")}}
  - : Cet attribut contient une description courte et abrégée du contenu de la cellule. Certains outils utilisateurs, comme la synthèse vocale, peuvent décrire cette information avant le contenu lui-même.
- {{htmlattrdef("colspan")}}
  - : Cet attribut contient un entier positif indiquant le nombre de colonnes sur lesquelles s'étend la cellule. La valeur par défaut est 1. Si cet attribut vaut 0, la cellule s'étend jusqu'à la fin du  {{HTMLElement("colgroup")}} auquel appartient la cellule, même si celui-ci est défini implicitement. Des valeurs supérieures à 1000 peuvent être considérées comme incorrectes et seront écrétées à 1000.
- {{htmlattrdef("headers")}}
  - : Cet attribut est une liste de chaînes de caractères séparées par des espace. Chacune correspond à l'attribut `id` de l'élément {{HTMLElement("th")}} qui s'applique à cet élément.
- {{htmlattrdef("rowspan")}}
  - : Cet attribut contient un entier positif indiquant sur combien de lignes s'étend la cellule. La valeur par défaut est 1. Si cet attribut vaut 0, la cellule s'étend jusqu'à la fin de la section ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} du tableau à laquelle appartient la cellule même si cette section est définie implicitement. Les valeurs supérieures à 65534 seront ramenées à 65534.
- {{htmlattrdef("scope")}}

  - : Cet attribut référence les cellules auxquelles l'élément \<th> est lié. Cet attribut est un attribut à valeur contrainte qui peut prendre les valeurs suivantes :

    - `row`, ce qui signifie que l'en-tête s'applique à toutes les cellules de la ligne à laquelle appartient cet élément
    - `col`, ce qui signifie que l'en-tête s'applique à toutes les cellules de la colonne à laquelle appartient cet élément
    - `rowgroup`, ce qui signifie que l'en-tête s'applique à toutes les cellules restantes dans la ligne à laquelle appartient cet élément. Les cellules restants sont soit celles à droite de l'élément, soit celles à gauche selon la valeur de l'attribut {{htmlattrxref("dir", "table")}}
    - `colgroup`, ce qui signifie que l'en-tête s'applique à toutes les cellules restantes dans la colonne à laquelle appartient cet élément.
    - _auto_

### Attributs dépréciés ou obsolètes

- {{htmlattrdef("align")}} {{deprecated_inline}} {{HTMLVersionInline("5")}}

  - : Cet attribut à valeurs définit l'alignement horizontal pour le contenu de chaque cellule de la colonne. Les valeurs possibles sont :

    - `left`&nbsp;: le contenu de la cellule est alligné à gauche de la cellule (la valeur par défaut de cet attribut)
    - `center` : le contenu de la cellule est centré horizontalement
    - `right` : le contenu de la cellule est aligné à droite de la cellule
    - `justify` : insert des espaces dans le contenu textuel afin que le contenu de la cellule soit justifié
    - `char` : aligne le contenu textuel de la cellule selon un caractère spécial avec un décalage minimum définis par les attributs  {{htmlattrxref("char", "th")}} et {{htmlattrxref("charoff", "th")}} {{unimplemented_inline(2212)}}.

    Si cet attribut n'est pas renseigné, la valeur `left` est prise par défaut.

    > **Note :** Cet attribut est devenu obsolète dans le dernier standard et ne doit donc plus être utilisé.
    >
    > - Pour réaliser les mêmes effets que les valeurs `left`, `center`, `right` ou `justify`, il faut utiliser la propriété CSS {{cssxref("text-align")}} sur l'élément
    > - Pour réaliser le même effet qu'avec la valeur `char`. Il est possible, en CSS3, d'utiliser la valeur de l'attribut {{htmlattrxref("char", "th")}} comme valeur de la propriété {{cssxref("text-align")}}. {{unimplemented_inline}}.

- {{htmlattrdef("axis")}} {{deprecated_inline}} en {{HTMLVersionInline("5")}}

  - : Cet attribut contient une liste de chaîne de caractères (séparées par des espaces). Chaque chaîne de caractère est l'identifiant d'un groupe de cellule auquel cet en-tête s'applique.

    > **Note :** Cet attribut est obsolète dans le dernier standard et ne doit donc plus être utilisé. L'attribut {{htmlattrxref("scope", "td")}} doit être utilisé pour le remplacer.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : Cet attribut définit la couleur d'arrière-plan de toutes les cellules de la colonne. C'est un code à 6 chiffres hexadécimaux comme défini par le [sRGB](https://www.w3.org/Graphics/Color/sRGB). Il est précédé d'un '#'. Un des [mots-clés préfédinis pour les couleurs](/fr/docs/Web/CSS/color_value#color_keywords) peut également être utilisé.

    > **Note :** Il est fortement conseillé de ne pas utiliser cet attribut car celui-ci n'est pas un attribut standard et n'a été implémentée que sous certaines versions d'Internet Explorer. L'élément {{HTMLElement("th")}} doit être mis en forme grâce au [CSS](/fr/docs/CSS). Pour fournir un effet semblable à celui achevé par l'attribut **`bgcolor`**, il est possible d'utiliser la propriété CSS {{cssxref("background-color")}}.

- {{htmlattrdef("char")}} {{deprecated_inline}} {{HTMLVersionInline("5")}}

  - : Cet attribut est utilisé pour définir le caractère sur lequel aligner les cellules d'une colonne. Les valeurs de cet attribut contiennent généralement un point (.) pour aligner des nombres ou des valeurs monétaires. Si l'attribut {{htmlattrxref("align", "th")}} ne vaut pas `char`, l'attribut est ignoré.

    > **Note :** Cet attribut est obsolète et il est donc fortement déconseillé de l'utiliser. De fait, il n'est pas supporté par le dernier standard. Pour réaliser le même effet qu'avec {{htmlattrxref("char", "th")}}, on peut utiliser CSS3 en attribuant la même valeur à la propriété {{cssxref("text-align")}}.{{unimplemented_inline}}.

- {{htmlattrdef("charoff")}} {{deprecated_inline}} {{HTMLVersionInline("5")}}

  - : Cet attribut est utilisé pour indiquer le décalage, en nombre de caractères, depuis le caractère définit par l'attribut **char** à appliquer au contenu des cellules.

    > **Note :** Cet attribut ne doit plus être utilisé car il est maintenant obsolète et n'est plus supporté dans le dernier standard.

- {{htmlattrdef("valign")}} {{Deprecated_inline}} en {{HTMLVersionInline("4")}}, {{deprecated_inline}} en {{HTMLVersionInline("5")}}

  - : Cet attribut définit l'alignement vertical du texte des cellules de la colonne. Les valeurs possibles de cet attribut sont :

    - `baseline` qui alignera le texte à la ligne la plus basse possible en utilisant la [ligne de base](https://fr.wikipedia.org/wiki/Ligne_de_base_%28typographie%29) des caractères. Si les caractères ont tous la même taille, cela aura le même effet que la valeur `bottom`.
    - `bottom` qui placera le texte au plus bas de la cellule
    - `middle` qui centrera verticalement le texte dans la cellule
    - `top` qui placera le texte au plus haut de la cellule.

    > **Note :** Cet attribut est obsolète dans le dernier standard, la propriété CSS {{cssxref("vertical-align")}} doit être utilisée à la place.

## Exemples

### HTML

```html
<table>
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
  </tr>
  <tr>
   <td>WHATWG</td>
   <td>Colorad</td>
  </tr>
  <tr>
   <td>W3C</td>
   <td>Wisconsin</td>
  </tr>
 </tbody>
</table>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","220")}}

> **Note :** Voir la page {{HTMLElement("table")}} pour d'autres exemples.

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
        <div class="content-models">
          <div>
            <a
              href="/fr/docs/Web/Guide/HTML/Catégories_de_contenu#Contenu_de_flux"
              >Contenu de flux</a
            >
            sans titre, pied de page, contenu sectionnant ou descendants d'un
            élément de titre.
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin peut être absente
        si l'élément est immédiatement suivi par un élément
        {{HTMLElement("th")}} ou par un élément
        {{HTMLElement("td")}} ou s'il n'y a plus de contenu au sein de
        l'élément parent.
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
      <td>{{domxref("HTMLTableHeaderCellElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                    | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG','tables.html#the-th-element','th element')}}     | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C','tabular-data.html#the-th-element','th element')}} | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.th")}}

## Voir aussi

- Les autres éléments HTML relatifs aux tableaux : {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}.

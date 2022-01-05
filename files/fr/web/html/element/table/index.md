---
title: '<table> : l''élément de tableau'
slug: Web/HTML/Element/table
tags:
  - Element
  - HTML
  - Reference
  - Tableaux
  - Web
translation_of: Web/HTML/Element/table
---
{{HTMLRef}}

L'élément HTML **`<table>`** permet de représenter un tableau de données, c'est-à-dire des informations exprimées sur un tableau en deux dimensions.

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-standard")}}

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels). Les attributs listés ci-après sont désormais tous dépréciés.

### Attributs dépréciés

- {{htmlattrdef("align")}} {{Deprecated_inline}}

  - : Cet attribut énumérée indique la manière dont la table doit être aligné en regard du document qui la contient. Ile peut prendre les valeurs suivantes :

    - `left`, signifiant que la table doit être affichée à la gauche du document ;
    - `center`, signifiant que la table doit être affichée centrée dans le document ;
    - `right`, signifiant que la table doit être affichée à droite du document.

    > **Note :**
    >
    > - **Cet attribut ne doit pas être utilisé** car il a été déprécié : l'élément {{HTMLElement("table")}} devrait être stylisé en utilisant [CSS](/fr/docs/CSS). Pour obtenir un effet similaire à celui réalisé par l'attribut align, les propriétés [CSS](/fr/docs/CSS) {{cssxref("text-align")}} et {{cssxref("vertical-align")}} devraient être utilisées.
    > - Avant Firefox 4, Firefox supportait également, en mode quirks uniquement, les valeurs `middle`, `absmiddle`, et `abscenter` comme synonymes de `center`_._

- {{htmlattrdef("bgcolor")}} {{Deprecated_inline}}

  - : Cet attribut définit la couleur d'arrière-plan de toutes les cellules. C'est un code à 6 chiffres hexadécimaux comme défini par le [sRGB](https://www.w3.org/Graphics/Color/sRGB). Il est précédé d'un '#'. Un des [mots-clés préfédinis pour les couleurs](/fr/docs/Web/CSS/color_value#color_keywords) peut également être utilisé.

    > **Note :** Il est fortement conseillé de ne pas utiliser cet attribut car celui-ci a été déprécié. La mise en forme d'un tableau doit se faire en utilisant CSS. Il est possible d'utiliser la propriété CSS {{cssxref("background-color")}} pour cet effet.

- {{htmlattrdef("border")}} {{Deprecated_inline}}

  - : Cet attribut entier définit, en pixels, la taille de la bordure entourant le tableau. S'il vaut 0, cela implique que l'attribut {{htmlattrxref("frame", "table")}} est vide.

    > **Note :** Cet attribut ayant été déprécié, il ne doit pas être utilisé. La mise en forme d'un tableau doit s'effectuer en utilisant CSS. Les propriétés CSS {{cssxref("border")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}} et {{cssxref("border-style")}} devraient être utilisées à la place.

- {{htmlattrdef("cellpadding")}} {{Deprecated_inline}}

  - : Cet attribut définit la taille de l'espace entre le contenu d'une cellule et sa bordure, qu'lle soit affichée ou non. Si cet attribut est exprimé en pixels, le décalage sera appliqué sur les quatre côtés. S'il est exprimé en pourcents, le contenu sera centré verticalement et la somme des espaces en haut et en bas représentera le pourcentage, il en va de même pour l'espace horizontal (droite et gauche).

    > **Note :** Cet attribut ayant été déprécié, il ne doit pas être utilisé. La mise en forme d'un tableau doit s'effectuer en utilisant CSS. Pour réaliser un effet similaire, la propriété {{cssxref("border-collapse")}} avec la valeur collapse doit être utilisée sur l'élément {{HTMLElement("table")}} et la propriété {{cssxref("padding")}} sur l'élément {{HTMLElement("td")}}.

- {{htmlattrdef("cellspacing")}} {{Deprecated_inline}}

  - : Cet attribut définit la taille (en pourcents ou pixels) de l'espace (vertical et horizontal) entre deux cellules, entre la haut du tableau et les cellules de la première ligne, la gauche du tableau et les cellules de la première colonne, puis de la même manière pour le bas et le côté droit du tableau.

    > **Note :** Cet attribut ayant été déprécié, il ne doit pas être utilisé. La mise en forme d'un tableau doit s'effectuer en utilisant CSS. Pour réaliser un effet similaire, la propriété {{cssxref("border-collapse")}} avec la valeur collapse doit être utilisée sur l'élément {{HTMLElement("table")}} et la propriété {{cssxref("margin")}} sur l'élément {{HTMLElement("td")}}.

<!---->

- {{htmlattrdef("frame")}} {{Deprecated_inline}}

  - : Cet attribut à valeurs multiples définit les côtés du tableau sur lesquels dessiner une bordure. Il peut prendre les valeurs suivantes : `above, hsides, lhs, border, void, below, vsides, rhs, box`.

    > **Note :** Cet attribut ayant été déprécié, il ne doit pas être utilisé. La mise en forme d'un tableau doit s'effectuer en utilisant CSS. Pour réaliser un effet similaire, les propriétés {{cssxref("border-style")}} et {{cssxref("border-width")}} doivent être utilisées.

<!---->

- {{htmlattrdef("rules")}} {{Deprecated_inline}}

  - : Cet attribut à valeurs multiples définit la manière dont les traits doivent apparaître au sein du tableau. Il peut avoir les valeurs suivantes :

    - `none`, les traits ne doivent pas être affichés, c'est la valeur par défaut
    - `groups`, les traits sont uniquement affichés entre les groupes de lignes du tableau (définis par les éléments {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} et {{HTMLElement("tfoot")}})  et entre les groupes de colonnes (définis par les éléments {{HTMLElement("col")}} et {{HTMLElement("colgroup")}})
    - `rows`, les traits seront affichées entre les lignes du tableau
    - `columns`, les lignes seront affichées entre les colonnes du tableau
    - `all`, tous les traits seront affichés (entre les lignes et entre les colonnes).

    > **Note :**
    >
    > - L'apparence de ces traits dépend du navigateur utilisé et ne peut être modifiée.
    > - Cet attribut ayant été déprécié, il ne doit pas être utilisé. La propriété CSS {{cssxref("border")}} doit être appliquée sur les éléments {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("col")}} ou {{HTMLElement("colgroup")}} adéquats.

<!---->

- {{htmlattrdef("summary")}} {{Deprecated_inline}}

  - : Cet attribut définit un texte alternatif à utiliser afin de décrire le tableau. Un tel texte peut être utilisé par un agent utilisateur qui ne pourrait pas afficher le tableau. Il est généralement utilisé pour les personnes souffrant d'une déficience visuelle, comme par exemple les aveugles qui navigueront sur des pages web en utilisant un écran Braille. Si l'information contenue dans cet attribut serait également utile aux autres utilisateurs, il faudra plutôt utiliser l'élément {{HTMLElement("caption")}}. L'attribut **`summary`** n'est pas obligatoire et peut être omis lorsqu'un élément {{HTMLElement("caption")}} remplit ce rôle.

    > **Note :** Cet attribut ayant été déprécié, il ne doit pas être utilisé. Les façons suivantes peuvent être envisagées pour cette expression :
    >
    > - Grâce à un texte entourant le tableau, cette manière est la plus faible du point de vue de la sémantique
    > - Grâce à l'élément {{HTMLElement("caption")}}
    > - Dans un élément {{HTMLElement("details")}} inclus dans l'élément {{HTMLElement("caption")}} du tableau.
    > - En insérant l'élément {{HTMLElement("table")}} dans un élément {{HTMLElement("figure")}} et en ajoutant la description textuelle à côté du tableau.
    > - En insérant l'élément {{HTMLElement("table")}} dans un élément {{HTMLElement("figure")}} et en ajoutant la description textuelle dans un élément {{HTMLElement("figcaption")}}.
    > - En modifiant le tableau afin qu'aucune description supplémentaire ne soit nécessaire : par exemple en utilisant des éléments {{HTMLElement("th")}} et {{HTMLElement("thead")}}.

<!---->

- {{htmlattrdef("width")}} {{Deprecated_inline}}

  - : Cet attribut définit la largeur du tableau. Elle peut être exprimée en pixels ou en pourcent (représentant alors la fraction du conteneur que le tableau peut occuper).

    > **Note :** Cet attribut ayant été déprécié, il ne doit pas être utilisé. La propriété CSS {{cssxref("width")}} doit être utilisée à la place.

## Exemples

{{EmbedInteractiveExample("pages/tabbed/table.html")}}

### Tableau simple

#### HTML

```html
<table>
  <tr>
    <td>Jean</td>
    <td>Biche</td>
  </tr>
  <tr>
    <td>Jeanne</td>
    <td>Biche</td>
  </tr>
</table>
```

#### Résultat

{{EmbedLiveSample("Tableau_simple","100%","140")}}

### Autres exemples

#### HTML

```html
<!-- Tableau simple avec en-tête -->
<table>
  <tr>
    <th>Prénom</th>
    <th>Nom</th>
  </tr>
  <tr>
    <td>Jean</td>
    <td>Dupont</td>
  </tr>
  <tr>
    <td>Marion</td>
    <td>Duval</td>
  </tr>
</table>

<!-- Tableau utilisant thead, tfoot, et tbody -->
<table>
  <thead>
    <tr>
      <th>Contenu d'en-tête 1</th>
      <th>Contenu d'en-tête 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Contenu interne 1</td>
      <td>Contenu interne 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Pied de tableau 1</td>
      <td>Pied de tableau 2</td>
    </tr>
  </tfoot>
</table>

<!-- Tableau utilisant colgroup -->
<table>
  <colgroup span="4" class="columns"></colgroup>
  <tr>
    <th>Pays</th>
    <th>Capitales</th>
    <th>Population</th>
    <th>Langue</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington D.C.</td>
    <td>309 millions</td>
    <td>Anglais</td>
  </tr>
  <tr>
    <td>Suède</td>
    <td>Stockholm</td>
    <td>9 millions</td>
    <td>Suédois</td>
  </tr>
</table>

<!-- Tableau utilisant colgroup et col -->
<table>
  <colgroup>
    <col class="column1">
    <col class="columns2plus3" span="2">
  </colgroup>
  <tr>
    <th>Citron vert</th>
    <th>Citron</th>
    <th>Orange</th>
  </tr>
  <tr>
    <td>Vert</td>
    <td>Jaune</td>
    <td>Orange</td>
  </tr>
</table>

<!-- Tableau simple avec une légende -->
<table>
  <caption>Super légende</caption>
  <tr>
    <td>Données géniales</td>
  </tr>
</table>
```

#### Résultat

{{EmbedLiveSample("Autres_exemples","100%","230")}}

## Accessibilité

### Légendes

Fournir un élément {{HTMLElement("caption")}} pour légender le tableau avec une description claire et concise permet aux utilisateurs de décider s'ils doivent lire le contenu du tableau ou le passer.

Une telle légende fournit une aide pour les personnes qui naviguent avec des outils d'assistance comme des lecteurs d'écran.

- [Ajouter une légende à un tableau grâce à `<caption>`](/fr/Apprendre/HTML/Tableaux/Advanced)
- [Légendes et résumés • Tableaux • Tutoriels d'accessibilité du W3C WAI (en anglais)](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Portées des lignes et des colonnes

L'attribut {{htmlattrxref("scope","th")}} peut être redondant dans certains contextes où la portée peut être déterminée avec les autres éléments. Toutefois de nombreux lecteurs d'écran utilisent cet attribut pour répliquer l'organisation générale du tableau. Dans les tableaux plus complexes, `scope` pourra être utilisé afin de fournir les informations nécessaires à l'organisation (tant au moteur HTML qu'aux outils d'assistance).

#### Exemple

```html
<table>
  <caption>Noms et valeurs des couleurs</caption>
  <tbody>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Hexadécimal</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">Turquoise</th>
      <td><code>#51F6F6</code></td>
      <td><code>hsla(180, 90%, 64%, 1)</code></td>
      <td><code>rgba(81, 246, 246, 1)</code></td>
    </tr>
    <tr>
      <th scope="row">Ocre</th>
      <td><code>#F6BC57</code></td>
      <td><code>hsla(38, 90%, 65%, 1)</code></td>
      <td><code>rgba(246, 188, 87, 1)</code></td>
    </tr>
  </tbody>
</table>
```

Ajouter `scope="col"` sur un élément {{HTMLElement("th")}} permettra d'aider à décrire le fait que la cellule est en haut de la colonne. Indiquer `scope="row"` sur un élément {{HTMLElement("td")}} permettra d'indiquer que la cellule est la première de la ligne.

- [Utiliser les tableaux HTML pour les personnes souffrant de troubles de la vision](/fr/Apprendre/HTML/Tableaux/Advanced#Tableaux_pour_des_utisateurs_malvoyants)
- [Les tableaux avec deux en-têtes • Tutoriels d'accessibilité web W3C WAI (en anglais)](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Les tableaux avec des en-têtes hétérogènes • Tutoriels d'accessibilité web W3C WAI (en anglais)](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63 : Utiliser l'attribut `scope` afin d'associer les cellules de l'en-tête et celles des données dans les tableaux de données | Techniques W3C pour WCAG 2.0 (en anglais)](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Tableaux complexes

Les technologies d'assistance telles que les lecteurs d'écran peuvent rencontrer des difficultés lors de l'analyse de tableaux complexes où les cellules d'en-tête ne sont pas associées aux données de façon clairement verticale ou horizontale. Généralement, cela se traduit par la présence des attributs {{htmlattrxref("colspan","td")}} et {{htmlattrxref("rowspan","td")}}.

Si possible, on présentera le tableau différemment, en le divisant en plusieurs tableaux simples qui ne nécessitent pas l'utilisation des atttributs `colspan` et `rowspan`. En plus d'aider à la compréhension pour les personnes qui utilisent des outils d'assistance, cela pourra bénéficier aux personnes souffrant de troubles cognitifs.

Si le tableau ne peut pas être subdivisé, on pourra utiliser les attributs {{htmlattrxref("id")}} et {{htmlattrxref("headers","td")}} afin d'associer « informatiquement » les cellules du tableaux avec les en-têtes correspondantes.

- [Utiliser les tableaux HTML pour les personnes souffrant de troubles de la vision](/fr/Apprendre/HTML/Tableaux/Advanced#Tableaux_pour_des_utisateurs_malvoyants)
- [Les tableaux avec des en-têtes sur plusieurs niveaux • Tutoriels d'accesibilité web W3C WAI (en anglais)](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43 : Utiliser les attributs `id` et `headers` afin d'associer les cellules de données et les cellules d'en-tête dans les tableaux | Techniques W3C pour  WCAG 2.0 (en anglais)](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Contenu autorisé</dfn></th>
      <td>
        <p>Dans cet ordre :</p>
        <ul>
          <li>Un élément facultatif {{HTMLElement("caption")}}</li>
          <li>
            Zéro ou plusieurs éléments {{HTMLElement("colgroup")}}
          </li>
          <li>Un élément {{HTMLElement("thead")}} facultatif</li>
          <li>
            L'un ou l'autre de ces deux cas de figure :
            <ul>
              <li>
                zéro ou plusieurs éléments  {{HTMLElement("tbody")}}
              </li>
              <li>un ou plusieurs éléments {{HTMLElement("tr")}}</li>
            </ul>
          </li>
          <li>un élément {{HTMLElement("tfoot")}} optionnel</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du contenu de flux.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTableElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                            | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG','tables.html#the-table-element','table element')}}     | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C','tabular-data.html#the-table-element','table element')}} | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.table")}}

## Voir aussi

- Les autres éléments HTML relatifs aux tableaux : {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
- Les propriétés CSS qui peuvent être utilisées pour mettre en forme l'élément `<table>` :

  - {{cssxref("width")}} qui permet de contrôler la largeur du tableau ;
  - {{cssxref("border")}}, {{cssxref("border-style")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}} qui permettent de contrôler l'aspect des bordures pour les cellules et le contour du tableau ;
  - {{cssxref("margin")}} et {{cssxref("padding")}} qui s'appliquent sur le contenu d'une cellule individuelle ;
  - {{cssxref("text-align")}} et {{cssxref("vertical-align")}} qui permettent de définir l'alignement du texte et du contenu de la cellule.

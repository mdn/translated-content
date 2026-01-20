---
title: "<table> : l'élément de tableau"
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

L'élément [HTML](/fr/docs/Web/HTML) **`<table>`** représente des données tabulaires, c'est-à-dire des informations présentées dans un tableau à deux dimensions composé de lignes et de colonnes de cellules contenant des données.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;table&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Formation développeur·euse front-end 2021
  </caption>
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Principal intérêt</th>
      <th scope="col">Âge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>Tables HTML</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Dennis</th>
      <td>Accessibilité web</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>Frameworks JavaScript</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Performance web</td>
      <td>36</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Âge moyen</th>
      <td>33</td>
    </tr>
  </tfoot>
</table>
```

```css interactive-example
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}

thead,
tfoot {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

### Attributs obsolètes

Les attributs suivants sont obsolètes et ne doivent pas être utilisés. Ils sont documentés ci-dessous à titre de référence pour la mise à jour de code existant et pour l'intérêt historique uniquement.

- `align` {{Deprecated_Inline}}
  - : Définit l'alignement horizontal du tableau à l'intérieur de son élément parent. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `left`, `center` et `right`. Utilisez plutôt les propriétés CSS {{CSSxRef("margin-inline-start")}} et {{CSSxRef("margin-inline-end")}}, car cet attribut est obsolète.

- `bgcolor` {{Deprecated_Inline}}
  - : Définit la couleur d'arrière-plan du tableau. La valeur est une couleur HTML&nbsp;; soit un [code hexadécimal RGB à 6 chiffres](/fr/docs/Web/CSS/Reference/Values/hex-color), précédé d'un `#`, ou un [mot-clé de couleur](/fr/docs/Web/CSS/Reference/Values/named-color). Les autres valeurs CSS {{CSSxRef("&lt;color&gt;")}} ne sont pas prises en charge. Utilisez la propriété CSS {{CSSxRef("background-color")}} à la place, car cet attribut est obsolète.

- `border` {{Deprecated_Inline}}
  - : Définit, en tant que valeur entière non négative (en pixels), la taille de la bordure entourant le tableau. Si la valeur est `0`, l'attribut [`frame`](#frame) est défini sur void. Utilisez plutôt la propriété CSS {{CSSxRef("border")}}, car cet attribut est obsolète.

- `cellpadding` {{Deprecated_Inline}}
  - : Définit l'espace entre le contenu d'une cellule et sa bordure. Cet attribut est obsolète&nbsp;: au lieu de l'utiliser, appliquez la propriété CSS {{CSSxRef("padding")}} aux éléments {{HTMLElement("th")}} et {{HTMLElement("td")}}.

- `cellspacing` {{Deprecated_Inline}}
  - : Définit la taille de l'espace entre deux cellules. Cet attribut est obsolète&nbsp;: au lieu de l'utiliser, définissez la propriété CSS {{CSSxRef("border-spacing")}} sur l'élément `<table>`. Notez que cela n'a aucun effet si la propriété CSS {{CSSxRef("border-collapse")}} de l'élément `<table>` est définie sur `collapse`.

- `frame` {{Deprecated_Inline}}
  - : Définit quels côtés de la bordure entourant le tableau doivent être affichés. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` et `border`. Utilisez plutôt les propriétés CSS {{CSSxRef("border-style")}} et {{CSSxRef("border-width")}}, car cet attribut est obsolète.

- `rules` {{Deprecated_Inline}}
  - : Définit où les traits (bordures) sont affichés dans le tableau. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `none` (valeur par défaut), `groups` (éléments {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} et {{HTMLElement("tfoot")}}), `rows` (lignes horizontales), `cols` (lignes verticales) et `all` (bordure autour de chaque cellule). Utilisez plutôt la propriété CSS {{CSSxRef("border")}} sur les éléments liés au tableau appropriés ainsi que sur l'élément `<table>`, car cet attribut est obsolète.

- `summary` {{Deprecated_Inline}}
  - : Définit un texte alternatif qui résume le contenu du tableau. Utilisez plutôt l'élément {{HTMLElement("caption")}}, car cet attribut est obsolète.

- `width` {{Deprecated_Inline}}
  - : Cet attribut définit la largeur du tableau. Elle peut être exprimée en pixels ou en pourcent (représentant alors la fraction du conteneur que le tableau peut occuper).

    > [!NOTE]
    > Cet attribut ayant été déprécié, il ne doit pas être utilisé. La propriété CSS {{CSSxRef("width")}} doit être utilisée à la place.

## Présentation visuelle du contenu d'un tableau

Les éléments suivants font partie de la structure d'un tableau&nbsp;:

- {{HTMLElement("caption")}}
- {{HTMLElement("thead")}}
- {{HTMLElement("colgroup")}}
- {{HTMLElement("col")}}
- {{HTMLElement("th")}}
- {{HTMLElement("tbody")}}
- {{HTMLElement("tr")}}
- {{HTMLElement("td")}}
- {{HTMLElement("tfoot")}}

Le bloc `<table>` établit un contexte de mise en forme de tableau. Les éléments à l'intérieur de `<table>` génèrent des boîtes rectangulaires. Chaque boîte occupe un certain nombre de cellules selon les règles suivantes&nbsp;:

1. Les boîtes de ligne remplissent le tableau dans l'ordre du code source, de haut en bas. Chaque boîte de ligne occupe une ligne de cellules.
2. Une boîte de groupe de lignes occupe une ou plusieurs boîtes de ligne.
3. Les boîtes de colonne sont placées côte à côte dans l'ordre du code source. Selon la valeur de l'attribut [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir), les colonnes sont disposées de gauche à droite ou de droite à gauche. Une boîte de colonne occupe une ou plusieurs colonnes de cellules.
4. Une boîte de groupe de colonnes occupe une ou plusieurs boîtes de colonne.
5. Une boîte de cellule peut s'étendre sur plusieurs lignes et colonnes. Les agents utilisateur ajustent les cellules pour qu'elles tiennent dans le nombre de lignes et de colonnes disponibles.

Les cellules de tableau ont un remplissage. Les boîtes qui composent un tableau n'ont pas de marges.

### Couches du tableau et transparence

Pour la mise en forme, on peut considérer que les éléments du tableau sont placés sur six couches superposées&nbsp;:

![Couches d'éléments de tableau](table_element_layers.png)

L'arrière-plan défini sur un élément d'une couche ne sera visible que si les couches au-dessus ont un arrière-plan transparent. Une cellule manquante est rendue comme si une boîte de cellule de tableau anonyme occupait cet emplacement.

## Accessibilité

### Légendes

Fournir un élément {{HTMLElement("caption")}} pour légender le tableau avec une description claire et concise permet aux utilisateur·ice·s de décider s'ils doivent lire le contenu du tableau ou le passer.

Une telle légende fournit une aide pour les personnes qui naviguent avec des outils d'assistance comme des lecteurs d'écran.

- [Ajouter une légende à un tableau grâce à `<caption>`](/fr/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Légendes et résumés • Tableaux • Tutoriels d'accessibilité du W3C WAI <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Portées des lignes et des colonnes

L'attribut [`scope`](/fr/docs/Web/HTML/Reference/Elements/th#scope) sur les cellules d'en-tête (éléments {{HTMLElement("th")}}) est redondant dans les contextes simples, car la portée est déduite. Cependant, certaines technologies d'assistance peuvent ne pas en déduire correctement la portée, donc définir explicitement la portée de l'en-tête peut améliorer l'expérience utilisateur. Dans les tableaux complexes, [`scope`](/fr/docs/Web/HTML/Reference/Elements/th#scope) peut être défini pour fournir les informations nécessaires sur les cellules associées à un en-tête.

- [Utiliser les tableaux HTML pour les personnes souffrant de troubles de la vision](/fr/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#tableaux_pour_des_utisateurs_malvoyants)
- [Les tableaux avec deux en-têtes • Tutoriels d'accessibilité web W3C WAI <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Les tableaux avec des en-têtes hétérogènes • Tutoriels d'accessibilité web W3C WAI <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63&nbsp;: Utiliser l'attribut `scope` afin d'associer les cellules de l'en-tête et celles des données dans les tableaux de données | Techniques W3C pour WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Tableaux complexes

Les technologies d'assistance telles que les lecteurs d'écran peuvent avoir des difficultés à analyser les tableaux si complexes que les cellules d'en-tête ne peuvent pas être associées de manière strictement horizontale ou verticale. Cela est généralement indiqué par la présence des attributs [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#colspan) et [`rowspan`](/fr/docs/Web/HTML/Reference/Elements/td#rowspan).

Idéalement, envisagez d'autres façons de présenter le contenu du tableau, notamment en le divisant en une collection de tableaux plus petits et liés qui n'ont pas besoin d'utiliser les attributs [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#colspan) et [`rowspan`](/fr/docs/Web/HTML/Reference/Elements/td#rowspan). En plus d'aider les personnes utilisant des technologies d'assistance à comprendre le contenu du tableau, cela peut aussi bénéficier aux personnes ayant des troubles cognitifs qui pourraient avoir du mal à comprendre les associations décrites par la présentation du tableau.

Si le tableau ne peut pas être divisé, utilisez une combinaison des attributs [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) et [`headers`](/fr/docs/Web/HTML/Reference/Elements/td#headers) pour associer informatiquement chaque cellule du tableau aux cellules d'en-tête (éléments {{HTMLElement("th")}}) auxquelles elle est associée.

- [Utiliser les tableaux HTML pour les personnes souffrant de troubles de la vision](/fr/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#tableaux_pour_des_utisateurs_malvoyants)
- [Les tableaux avec des en-têtes sur plusieurs niveaux • Tutoriels d'accesibilité web W3C WAI <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43&nbsp;: Utiliser les attributs `id` et `headers` afin d'associer les cellules de données et les cellules d'en-tête dans les tableaux | Techniques W3C pour WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Exemples

Les exemples ci-dessous incluent des tableaux d'une complexité croissante. Consultez aussi notre guide pour débutant·e·s sur la [mise en forme des tableaux](/fr/docs/Learn_web_development/Core/Styling_basics/Tables) pour des informations sur la mise en forme des tableaux, incluant des techniques courantes et utiles.

La structure d'un tableau (`<table>`) implique l'utilisation de plusieurs éléments HTML liés aux tableaux ainsi que divers attributs associés. Les exemples suivants visent à fournir une explication simplifiée qui couvre les bases et les standards courants. Des informations supplémentaires et plus détaillées sont disponibles sur les pages liées correspondantes.

Ces exemples de tableaux montrent comment créer un tableau {{Glossary("accessibility", "accessible")}} structuré avec HTML et mis en forme avec [CSS](/fr/docs/Web/CSS).

En raison de la structure des tableaux HTML, le {{Glossary("markup", "marquage")}} peut rapidement devenir volumineux. Pour cette raison, il est important de définir clairement l'objectif et l'apparence finale du tableau afin de créer la structure appropriée. Une structure logique développée avec un marquage {{Glossary("semantics", "sémantique")}} est non seulement plus facile à mettre en forme, mais permet de créer des tableaux utiles et accessibles qui peuvent être compris et parcourus par tout le monde, y compris les moteurs de recherche et les utilisateur·ice·s de technologies d'assistance.

Le premier exemple est basique, les exemples suivants gagnent en complexité. Nous allons d'abord développer une structure de tableau HTML très simple. Les deux premiers exemples ne contiennent aucun groupe de sections de tableau comme une tête, un corps ou un pied défini, et n'impliquent aucun étalement de cellule ni relation de cellule explicitement définie. Même une légende n'est pas fournie. Au fil des exemples, ils seront progressivement enrichis pour inclure toutes les fonctionnalités qu'un tableau de données complexe doit posséder.

### Tableau simple

Cet exemple présente un tableau _très_ basique avec trois lignes et deux colonnes. Pour montrer les styles de tableau par défaut du navigateur, aucun CSS n'est inclus dans cet exemple.

#### HTML

Les lignes du tableau sont définies avec des éléments {{HTMLElement("tr")}}, et les colonnes sont définies avec des cellules d'en-tête et de données à l'intérieur. La première ligne contient les cellules d'en-tête (éléments {{HTMLElement("th")}}) qui servent d'en-têtes de colonne pour les cellules de données (éléments {{HTMLElement("td")}}). Chaque élément ({{HTMLElement("th")}} ou {{HTMLElement("td")}}) par ligne est dans sa colonne respective — c'est-à-dire que le premier élément d'une ligne est dans la première colonne, et le second élément de cette ligne est dans la seconde colonne.

```html
<table>
  <tr>
    <th>Nom</th>
    <th>Âge</th>
  </tr>
  <tr>
    <td>Sandra Smith</td>
    <td>28</td>
  </tr>
  <tr>
    <td>Jean Biche</td>
    <td>34</td>
  </tr>
</table>
```

#### Résultat

Il n'y a aucune [mise en forme CSS](/fr/docs/Web/CSS) personnalisée ni aucune [feuille de style utilisateur·ice](/fr/docs/Web/CSS/Guides/Cascade/Introduction#feuilles_de_style_du_site) appliquée à ce tableau. La mise en forme provient uniquement de la [feuille de style de l'agent utilisateur](/fr/docs/Web/CSS/Guides/Cascade/Introduction#feuilles_de_style_de_lagent_utilisateur).

{{EmbedLiveSample("Tableau simple", 650, 80)}}

### Tableau étendu avec cellules d'en-tête

Cet exemple étend le [tableau simple](#tableau_simple), en ajoutant du contenu et des styles CSS de base.

#### HTML

Le tableau comporte désormais quatre lignes (éléments {{HTMLElement("tr")}}), chacune avec quatre colonnes. La première ligne est une ligne de cellules d'en-tête (elle ne contient que des éléments {{HTMLElement("th")}}). Les lignes suivantes incluent une colonne d'en-tête (éléments {{HTMLElement("th")}} comme premier enfant de chaque ligne) et trois colonnes de données (éléments {{HTMLElement("td")}}). Comme les éléments de section de tableau ne sont pas utilisés, le navigateur définit automatiquement la structure du groupe de contenu, c'est-à-dire que toutes les lignes sont englobées dans le corps du tableau d'un élément {{HTMLElement("tbody")}} implicite.

```html
<table>
  <tr>
    <th>Nom</th>
    <th>ID</th>
    <th>Membre depuis</th>
    <th>Solde</th>
  </tr>
  <tr>
    <th>Margaret Nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">3 juin 2010</time></td>
    <td>0.00</td>
  </tr>
  <tr>
    <th>Edvard Galinski</th>
    <td>533175</td>
    <td><time datetime="2011-01-13">13 janvier 2011</time></td>
    <td>37.00</td>
  </tr>
  <tr>
    <th>Hoshi Nakamura</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">23 juillet 2012</time></td>
    <td>15.00</td>
  </tr>
</table>
```

#### CSS

Avec CSS, nous appliquons une mise en forme de base pour créer des lignes autour des composants du tableau afin de rendre la structure des données plus claire. Le CSS ajoute une bordure pleine autour du `<table>` et autour de chaque cellule du tableau, y compris celles définies avec les éléments {{HTMLElement("th")}} et {{HTMLElement("td")}}, délimitant chaque cellule d'en-tête et de données.

```css
table {
  border: 2px solid rgb(140 140 140);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Résultat

{{EmbedLiveSample("Tableau étendu avec cellules d'en-tête", 650, 110)}}

### Définir les relations entre les cellules du tableau

Avant d'étendre le tableau de manière plus avancée, il est conseillé d'améliorer {{Glossary("accessibility", "l'accessibilité")}} en définissant les relations entre les cellules d'en-tête et de données (éléments {{HTMLElement("th")}} et {{HTMLElement("td")}}).

#### HTML

Ceci s'accomplit en ajoutant l'attribut [`scope`](/fr/docs/Web/HTML/Reference/Elements/th#scope) sur les éléments {{HTMLElement("th")}} et en définissant les valeurs correspondantes `col` (colonne) ou `row` (ligne).

```html
<table>
  <tr>
    <th scope="col">Nom</th>
    <th scope="col">ID</th>
    <th scope="col">Membre depuis</th>
    <th scope="col">Solde</th>
  </tr>
  <tr>
    <th scope="row">Margaret Nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">3 juin 2010</time></td>
    <td>0.00</td>
  </tr>
  <tr>
    <th scope="row">Edvard Galinski</th>
    <td>533175</td>
    <td><time datetime="2011-01-13">13 janvier 2011</time></td>
    <td>37.00</td>
  </tr>
  <tr>
    <th scope="row">Hoshi Nakamura</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">23 juillet 2012</time></td>
    <td>15.00</td>
  </tr>
</table>
```

Le CSS et le rendu visuel restent inchangés — cette adaptation fournit des informations contextuelles précieuses pour les technologies d'assistance comme les lecteurs d'écran afin d'aider à identifier à quelles cellules les en-têtes sont liés.

> [!NOTE]
> Si la structure du tableau est encore plus complexe, l'utilisation (supplémentaire) de l'attribut [`headers`](/fr/docs/Web/HTML/Reference/Elements/th#headers) sur les éléments {{HTMLElement("th")}} et {{HTMLElement("td")}} peut améliorer l'accessibilité et aider les technologies d'assistance à identifier les relations entre les cellules&nbsp;; voir [Tableaux complexes](#tableaux_complexes).

### Définir explicitement les groupes de sections du tableau

En plus d'améliorer l'accessibilité en [définissant les relations entre les cellules](#définir_les_relations_entre_les_cellules_du_tableau), la {{Glossary("semantics", "sémantique")}} du tableau peut être améliorée en introduisant des groupes de sections de tableau.

#### HTML

Comme la première ligne (élément {{HTMLElement("tr")}}) ne contient que des cellules d'en-tête de colonne et fournit l'en-tête pour le reste du contenu du tableau, elle peut être placée dans l'élément {{HTMLElement("thead")}} pour indiquer explicitement que cette ligne constitue la section d'en-tête du tableau. De plus, ce que le navigateur accomplit automatiquement peut aussi être défini explicitement — la section corps du tableau, qui contient les données principales du tableau, est définie en englobant les lignes correspondantes dans l'élément {{HTMLElement("tbody")}}. L'utilisation explicite de l'élément {{HTMLElement("tbody")}} aide le navigateur à créer la structure de tableau souhaitée, évitant ainsi des résultats inattendus.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">ID</th>
      <th scope="col">Membre depuis</th>
      <th scope="col">Solde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3 juin 2010</time></td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">13 janvier 2011</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23 juillet 2012</time></td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

Encore une fois, le CSS et le rendu visuel restent inchangés — le fait de définir de tels groupes de sections de tableau fournit des informations contextuelles précieuses pour les technologies d'assistance, y compris les lecteurs d'écran et les moteurs de recherche, ainsi que pour la mise en forme en CSS, qui sera illustrée dans un exemple ultérieur.

### Fusion de colonnes et de lignes

Dans cet exemple, nous étendons encore le tableau en ajoutant une colonne et en introduisant une section d'en-tête sur plusieurs lignes.

#### HTML

En partant du tableau créé jusqu'ici, une nouvelle colonne pour une «&nbsp;date de fin d'adhésion&nbsp;» est ajoutée dans chaque ligne du corps avec l'élément {{HTMLElement("td")}}. Une ligne supplémentaire (élément {{HTMLElement("tr")}}) est également ajoutée dans la section d'en-tête (élément {{HTMLElement("thead")}}) pour introduire un en-tête «&nbsp;Périodes d'adhésion&nbsp;» servant de titre pour les colonnes «&nbsp;Adhésion&nbsp;» et «&nbsp;Annulation&nbsp;».

La création de la seconde ligne d'en-tête implique l'ajout des attributs [`colspan`](/fr/docs/Web/HTML/Reference/Elements/th#colspan) et [`rowspan`](/fr/docs/Web/HTML/Reference/Elements/th#rowspan) sur les éléments {{HTMLElement("th")}} afin d'attribuer les cellules d'en-tête aux bonnes colonnes et lignes.

```html
<table>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Nom</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Périodes d'adhésion</th>
      <th scope="col" rowspan="2">Solde</th>
    </tr>
    <tr>
      <th scope="col">Adhésion</th>
      <th scope="col">Annulation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3 juin 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">13 janvier 2011</time></td>
      <td><time datetime="2017-04-08">8 avril 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23 juillet 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border: 2px solid rgb(140 140 140);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Résultat

{{EmbedLiveSample("Fusion de colonnes et de lignes", 650, 130)}}

La section d'en-tête comporte désormais deux lignes, l'une avec les en-têtes (éléments {{HTMLElement("th")}}) «&nbsp;Nom&nbsp;», «&nbsp;ID&nbsp;», «&nbsp;Périodes d'adhésion&nbsp;» et «&nbsp;Solde&nbsp;», et un en-tête «&nbsp;Périodes d'adhésion&nbsp;» avec deux sous-en-têtes dans une seconde ligne&nbsp;: «&nbsp;Adhésion&nbsp;» et «&nbsp;Annulation&nbsp;». Cela est réalisé par&nbsp;:

- Les cellules d'en-tête «&nbsp;Nom&nbsp;», «&nbsp;ID&nbsp;» et «&nbsp;Solde&nbsp;» de la première ligne s'étendent sur les deux lignes d'en-tête du tableau grâce à l'attribut [`rowspan`](/fr/docs/Web/HTML/Reference/Elements/th#rowspan), ce qui les rend chacune hautes de deux lignes.
- La cellule d'en-tête «&nbsp;Périodes d'adhésion&nbsp;» de la première ligne s'étend sur deux colonnes grâce à l'attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/th#colspan), ce qui la rend large de deux colonnes.
- La seconde ligne ne contient que les deux cellules d'en-tête «&nbsp;Adhésion&nbsp;» et «&nbsp;Annulation&nbsp;» car les trois autres colonnes sont fusionnées avec les cellules de la première ligne qui s'étendent sur deux lignes. Les deux cellules d'en-tête sont correctement positionnées sous l'en-tête «&nbsp;Périodes d'adhésion&nbsp;».

### Légende de tableau et résumé de colonne

Il est courant et recommandé de fournir un résumé du contenu du tableau, permettant aux utilisateur·ice·s de déterminer rapidement la pertinence du tableau. De plus, la colonne «&nbsp;Solde&nbsp;» est résumée en affichant la somme des soldes des membres individuels.

#### HTML

Un résumé de tableau est ajouté en utilisant une [légende](#légendes) (élément {{HTMLElement("caption")}}) comme premier enfant de l'élément `<table>`. La légende fournit le {{Glossary("accessible name", "nom accessible")}} ou la {{Glossary("accessible description", "description accessible")}} du tableau.

Enfin, une section de pied de tableau (élément {{HTMLElement("tfoot")}}) est ajoutée sous le corps, avec une ligne qui résume la colonne «&nbsp;Solde&nbsp;» en affichant une somme. Les éléments et attributs introduits précédemment sont appliqués.

```html
<table>
  <caption>
    État des membres du club 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Nom</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Périodes d'adhésion</th>
      <th scope="col" rowspan="2">Solde</th>
    </tr>
    <tr>
      <th scope="col">Adhésion</th>
      <th scope="col">Annulation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3 juin 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">13 janvier 2011</time></td>
      <td><time datetime="2017-04-08">8 avril 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23 juillet 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Solde total</th>
      <td>52.00</td>
    </tr>
  </tfoot>
</table>
```

```css hidden
table {
  border: 2px solid rgb(140 140 140);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Résultat

{{EmbedLiveSample("Légende de tableau et résumé de colonne", 650, 180)}}

### Mise en forme de base du tableau

Appliquons une mise en forme de base au tableau pour ajuster la police et ajouter un {{CSSxRef("background-color")}} aux lignes d'en-tête et de pied. Le HTML reste inchangé cette fois, passons donc directement au CSS.

```html hidden
<table>
  <caption>
    État des membres du club 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Nom</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Périodes d'adhésion</th>
      <th scope="col" rowspan="2">Solde</th>
    </tr>
    <tr>
      <th scope="col">Adhésion</th>
      <th scope="col">Annulation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3 juin 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">13 janvier 2011</time></td>
      <td><time datetime="2017-04-08">8 avril 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23 juillet 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Solde total</th>
      <td>52.00</td>
    </tr>
  </tfoot>
</table>
```

#### CSS

Ici, une propriété CSS {{CSSxRef("font")}} est ajoutée à l'élément `<table>` pour définir une police plus agréable visuellement (ou une abominable police sans empattement, selon votre opinion). L'aspect intéressant est la seconde règle, où les éléments {{HTMLElement("tr")}} situés dans {{HTMLElement("thead")}} et {{HTMLElement("tfoot")}} sont mis en forme avec un {{CSSxRef("background-color")}} bleu clair. Cela permet d'appliquer rapidement une couleur de fond à toutes les cellules de sections spécifiques simultanément.

```css
table {
  border: 2px solid rgb(140 140 140);
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
}

thead > tr,
tfoot > tr {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Résultat

{{EmbedLiveSample("Mise en forme de base du tableau", 650, 180)}}

### Mise en forme avancée du tableau

Nous allons maintenant aller plus loin, avec des styles appliqués aux lignes de l'en-tête et du corps, incluant des couleurs de lignes alternées, des cellules avec des couleurs différentes selon leur position dans la ligne, etc. Regardons d'abord le résultat.

#### Résultat

Voici a quoi ressemblera le tableau final&nbsp;:

{{EmbedLiveSample("Mise en forme avancée du tableau", 650, 210)}}

Il n'y a encore aucun changement dans le HTML. Voyez ce qu'une bonne préparation de la structure HTML permet d'obtenir&nbsp;!

```html hidden
<table>
  <caption>
    État des membres du club 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Nom</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Dates d'adhésion</th>
      <th scope="col" rowspan="2">Solde</th>
    </tr>
    <tr>
      <th scope="col">Adhéré</th>
      <th scope="col">Annulé</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3 juin 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">13 janvier 2011</time></td>
      <td><time datetime="2017-04-08">8 avril 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23 juillet 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Solde total</th>
      <td>52.00</td>
    </tr>
  </tfoot>
</table>
```

#### CSS

Le CSS est cette fois beaucoup plus fourni. Il n'est pas compliqué, mais il y a beaucoup d'éléments à prendre en compte. Détaillons-les.

Ici, les propriétés CSS {{CSSxRef("border-collapse")}} et {{CSSxRef("border-spacing")}} sont ajoutées pour éliminer l'espacement entre les cellules et fusionner les bordures qui se touchent afin qu'elles ne forment qu'une seule bordure au lieu de se retrouver avec des bordures doubles. De plus, l'élément {{HTMLElement("caption")}} est placé en bas du tableau grâce à la propriété {{CSSxRef("caption-side")}}&nbsp;:

```css
table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 2px solid rgb(140 140 140);
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}
```

Ensuite, la propriété CSS {{CSSxRef("padding")}} est utilisée pour donner à toutes les cellules du tableau de l'espace autour de leur contenu. La propriété CSS {{CSSxRef("vertical-align")}} aligne le contenu des cellules d'en-tête en bas de la cellule, ce qui est visible sur les cellules de l'en-tête qui s'étendent sur deux lignes&nbsp;:

```css
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 6px;
}

th {
  vertical-align: bottom;
}
```

La règle CSS suivante définit le {{CSSxRef("background-color")}} de tous les éléments {{HTMLElement("tr")}} dans l'en-tête du tableau (défini avec {{HTMLElement("thead")}}). Ensuite, la bordure inférieure de l'en-tête est définie comme une ligne de deux pixels de large. Remarquez cependant que nous utilisons le sélecteur CSS {{CSSxRef(":nth-of-type")}} pour appliquer la propriété CSS {{CSSxRef("border-bottom")}} à la _deuxième_ ligne de l'en-tête. Pourquoi&nbsp;? Parce que l'en-tête est composé de deux lignes dont certaines cellules sont fusionnées. Il y a donc réellement deux lignes&nbsp;; appliquer le style à la première ligne ne donnerait pas le résultat attendu&nbsp;:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Stylisons les deux cellules d'en-tête «&nbsp;Adhéré&nbsp;» et «&nbsp;Annulé&nbsp;» avec des teintes vertes et rouges pour représenter le «&nbsp;positif&nbsp;» d'un nouveau membre et le «&nbsp;négatif&nbsp;» d'une adhésion annulée. Ici, nous ciblons la dernière ligne de la section d'en-tête du tableau à l'aide du sélecteur CSS {{CSSxRef(":last-of-type")}} et appliquons une couleur verdâtre à la première cellule d'en-tête («&nbsp;Adhéré&nbsp;») et une teinte rougeâtre à la seconde («&nbsp;Annulé&nbsp;»)&nbsp;:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Comme la première colonne doit également ressortir, une mise en forme personnalisée est ajoutée ici aussi. Cette règle CSS applique la propriété CSS {{CSSxRef("text-align")}} à la première cellule d'en-tête de chaque ligne du corps du tableau pour aligner à gauche les noms des membres, ainsi qu'une {{CSSxRef("background-color")}} différente&nbsp;:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Il est courant d'améliorer la lisibilité des données d'un tableau en alternant les couleurs des lignes — on parle parfois de «&nbsp;zébrage&nbsp;». Ajoutons un peu de {{CSSxRef("background-color")}} à chaque ligne paire&nbsp;:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Comme il est d'usage d'aligner à droite les valeurs monétaires dans les tableaux, faisons-le ici. Cela définit simplement la propriété CSS {{CSSxRef("text-align")}} pour la dernière cellule {{HTMLElement("td")}} de chaque ligne du corps sur `right`&nbsp;:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Enfin, une mise en forme similaire à celle de l'en-tête est appliquée à la section de pied du tableau pour la faire ressortir également&nbsp;:

```css
tfoot > tr {
  border-top: 2px dashed rgb(140 140 140);
  background-color: rgb(228 240 245);
}

tfoot th,
tfoot td {
  text-align: right;
  font-weight: bold;
}
```

### Affichage de grands tableaux dans de petits espaces

Un problème courant avec les tableaux sur le web est qu'ils ne fonctionnent pas naturellement très bien sur les petits écrans lorsque la quantité de contenu est importante, et la manière de les rendre défilants n'est pas évidente, surtout lorsque le balisage provient d'un CMS et ne peut pas être modifié pour ajouter un conteneur.

Cet exemple propose une façon d'afficher des tableaux dans de petits espaces. Le contenu HTML a été masqué car il est très volumineux et il n'y a rien de particulier à signaler. Le CSS est plus intéressant à examiner dans cet exemple.

```html hidden
<table>
  <thead>
    <tr>
      <th>1<sup>3</sup> égal&nbsp;:</th>
      <th>2<sup>3</sup> égal&nbsp;:</th>
      <th>3<sup>3</sup> égal&nbsp;:</th>
      <th>4<sup>3</sup> égal&nbsp;:</th>
      <th>5<sup>3</sup> égal&nbsp;:</th>
      <th>6<sup>3</sup> égal&nbsp;:</th>
      <th>7<sup>3</sup> égal&nbsp;:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ligne 1&nbsp;: 1</td>
      <td>ligne 1&nbsp;: 8</td>
      <td>ligne 1&nbsp;: 27</td>
      <td>ligne 1&nbsp;: 64</td>
      <td>ligne 1&nbsp;: 125</td>
      <td>ligne 1&nbsp;: 216</td>
      <td>ligne 1&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 2&nbsp;: 1</td>
      <td>ligne 2&nbsp;: 8</td>
      <td>ligne 2&nbsp;: 27</td>
      <td>ligne 2&nbsp;: 64</td>
      <td>ligne 2&nbsp;: 125</td>
      <td>ligne 2&nbsp;: 216</td>
      <td>ligne 2&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 3&nbsp;: 1</td>
      <td>ligne 3&nbsp;: 8</td>
      <td>ligne 3&nbsp;: 27</td>
      <td>ligne 3&nbsp;: 64</td>
      <td>ligne 3&nbsp;: 125</td>
      <td>ligne 3&nbsp;: 216</td>
      <td>ligne 3&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 4&nbsp;: 1</td>
      <td>ligne 4&nbsp;: 8</td>
      <td>ligne 4&nbsp;: 27</td>
      <td>ligne 4&nbsp;: 64</td>
      <td>ligne 4&nbsp;: 125</td>
      <td>ligne 4&nbsp;: 216</td>
      <td>ligne 4&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 5&nbsp;: 1</td>
      <td>ligne 5&nbsp;: 8</td>
      <td>ligne 5&nbsp;: 27</td>
      <td>ligne 5&nbsp;: 64</td>
      <td>ligne 5&nbsp;: 125</td>
      <td>ligne 5&nbsp;: 216</td>
      <td>ligne 5&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 6&nbsp;: 1</td>
      <td>ligne 6&nbsp;: 8</td>
      <td>ligne 6&nbsp;: 27</td>
      <td>ligne 6&nbsp;: 64</td>
      <td>ligne 6&nbsp;: 125</td>
      <td>ligne 6&nbsp;: 216</td>
      <td>ligne 6&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 7&nbsp;: 1</td>
      <td>ligne 7&nbsp;: 8</td>
      <td>ligne 7&nbsp;: 27</td>
      <td>ligne 7&nbsp;: 64</td>
      <td>ligne 7&nbsp;: 125</td>
      <td>ligne 7&nbsp;: 216</td>
      <td>ligne 7&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 8&nbsp;: 1</td>
      <td>ligne 8&nbsp;: 8</td>
      <td>ligne 8&nbsp;: 27</td>
      <td>ligne 8&nbsp;: 64</td>
      <td>ligne 8&nbsp;: 125</td>
      <td>ligne 8&nbsp;: 216</td>
      <td>ligne 8&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 9&nbsp;: 1</td>
      <td>ligne 9&nbsp;: 8</td>
      <td>ligne 9&nbsp;: 27</td>
      <td>ligne 9&nbsp;: 64</td>
      <td>ligne 9&nbsp;: 125</td>
      <td>ligne 9&nbsp;: 216</td>
      <td>ligne 9&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 10&nbsp;: 1</td>
      <td>ligne 10&nbsp;: 8</td>
      <td>ligne 10&nbsp;: 27</td>
      <td>ligne 10&nbsp;: 64</td>
      <td>ligne 10&nbsp;: 125</td>
      <td>ligne 10&nbsp;: 216</td>
      <td>ligne 10&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 11&nbsp;: 1</td>
      <td>ligne 11&nbsp;: 8</td>
      <td>ligne 11&nbsp;: 27</td>
      <td>ligne 11&nbsp;: 64</td>
      <td>ligne 11&nbsp;: 125</td>
      <td>ligne 11&nbsp;: 216</td>
      <td>ligne 11&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 12&nbsp;: 1</td>
      <td>ligne 12&nbsp;: 8</td>
      <td>ligne 12&nbsp;: 27</td>
      <td>ligne 12&nbsp;: 64</td>
      <td>ligne 12&nbsp;: 125</td>
      <td>ligne 12&nbsp;: 216</td>
      <td>ligne 12&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 13&nbsp;: 1</td>
      <td>ligne 13&nbsp;: 8</td>
      <td>ligne 13&nbsp;: 27</td>
      <td>ligne 13&nbsp;: 64</td>
      <td>ligne 13&nbsp;: 125</td>
      <td>ligne 13&nbsp;: 216</td>
      <td>ligne 13&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 14&nbsp;: 1</td>
      <td>ligne 14&nbsp;: 8</td>
      <td>ligne 14&nbsp;: 27</td>
      <td>ligne 14&nbsp;: 64</td>
      <td>ligne 14&nbsp;: 125</td>
      <td>ligne 14&nbsp;: 216</td>
      <td>ligne 14&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 15&nbsp;: 1</td>
      <td>ligne 15&nbsp;: 8</td>
      <td>ligne 15&nbsp;: 27</td>
      <td>ligne 15&nbsp;: 64</td>
      <td>ligne 15&nbsp;: 125</td>
      <td>ligne 15&nbsp;: 216</td>
      <td>ligne 15&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 16&nbsp;: 1</td>
      <td>ligne 16&nbsp;: 8</td>
      <td>ligne 16&nbsp;: 27</td>
      <td>ligne 16&nbsp;: 64</td>
      <td>ligne 16&nbsp;: 125</td>
      <td>ligne 16&nbsp;: 216</td>
      <td>ligne 16&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 17&nbsp;: 1</td>
      <td>ligne 17&nbsp;: 8</td>
      <td>ligne 17&nbsp;: 27</td>
      <td>ligne 17&nbsp;: 64</td>
      <td>ligne 17&nbsp;: 125</td>
      <td>ligne 17&nbsp;: 216</td>
      <td>ligne 17&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 18&nbsp;: 1</td>
      <td>ligne 18&nbsp;: 8</td>
      <td>ligne 18&nbsp;: 27</td>
      <td>ligne 18&nbsp;: 64</td>
      <td>ligne 18&nbsp;: 125</td>
      <td>ligne 18&nbsp;: 216</td>
      <td>ligne 18&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 19&nbsp;: 1</td>
      <td>ligne 19&nbsp;: 8</td>
      <td>ligne 19&nbsp;: 27</td>
      <td>ligne 19&nbsp;: 64</td>
      <td>ligne 19&nbsp;: 125</td>
      <td>ligne 19&nbsp;: 216</td>
      <td>ligne 19&nbsp;: 343</td>
    </tr>
    <tr>
      <td>ligne 20&nbsp;: 1</td>
      <td>ligne 20&nbsp;: 8</td>
      <td>ligne 20&nbsp;: 27</td>
      <td>ligne 20&nbsp;: 64</td>
      <td>ligne 20&nbsp;: 125</td>
      <td>ligne 20&nbsp;: 216</td>
      <td>ligne 20&nbsp;: 343</td>
    </tr>
  </tbody>
</table>
```

#### CSS

En regardant ces styles, vous remarquerez que la propriété CSS {{CSSxRef("display")}} du tableau a été définie sur `block`. Cela permet le défilement, mais le tableau perd une partie de son intégrité et les cellules tentent de devenir aussi petites que possible. Pour atténuer ce problème, nous avons appliqué {{CSSxRef("white-space")}} à `nowrap` sur le {{HTMLElement("tbody")}}. Cependant, nous ne le faisons pas pour le {{HTMLElement("thead")}} afin d'éviter que des titres longs n'obligent les colonnes à être plus larges que nécessaire pour afficher les données.

Pour garder les en-têtes du tableau visibles lors du défilement, nous avons appliqué {{CSSxRef("position")}} à sticky sur les éléments {{HTMLElement("th")}}. Notez que nous n'avons **pas** défini {{CSSxRef("border-collapse")}} à `collapse`, car sinon l'en-tête ne pourrait pas être séparé correctement du reste du tableau.

Étant donné que le `<table>` a une taille fixe, le paramètre {{CSSxRef("overflow")}} à `auto` est la partie importante ici, car il rend le tableau défilant.

```css
table,
th,
td {
  border: 1px solid black;
}

table {
  overflow: auto;
  width: 100%;
  max-width: 400px;
  height: 240px;
  display: block;
  margin: 0 auto;
  border-spacing: 0;
}

tbody {
  white-space: nowrap;
}

th,
td {
  padding: 5px 10px;
  border-top-width: 0;
  border-left-width: 0;
}

th {
  position: sticky;
  top: 0;
  background: white;
  vertical-align: bottom;
}

th:last-child,
td:last-child {
  border-right-width: 0;
}

tr:last-child td {
  border-bottom-width: 0;
}
```

#### Résultat

{{EmbedLiveSample("Affichage de grands tableaux dans de petits espaces", "100%", 240)}}

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
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <p>Dans cet ordre&nbsp;:</p>
        <ul>
          <li>Un élément facultatif {{HTMLElement("caption")}}</li>
          <li>
            Zéro ou plusieurs éléments {{HTMLElement("colgroup")}}
          </li>
          <li>Un élément {{HTMLElement("thead")}} facultatif</li>
          <li>
            L'un ou l'autre de ces deux cas de figure&nbsp;:
            <ul>
              <li>
                zéro ou plusieurs éléments {{HTMLElement("tbody")}}
              </li>
              <li>un ou plusieurs éléments {{HTMLElement("tr")}}</li>
            </ul>
          </li>
          <li>un élément {{HTMLElement("tfoot")}} facultatif</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du contenu de flux.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role"
            >table</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLTableElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: bases des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- Les autres éléments associés&nbsp;: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
- {{CSSxRef("background-color")}}&nbsp;: Propriété CSS pour définir la couleur de fond du tableau
- {{CSSxRef("border")}}, {{CSSxRef("border-collapse")}}, {{CSSxRef("border-spacing")}}&nbsp;: Propriétés CSS pour contrôler l'aspect des bordures des cellules, des règles et du cadre
- {{CSSxRef("margin")}}, {{CSSxRef("padding")}}&nbsp;: Propriétés CSS pour aligner le tableau et définir l'espacement du contenu des cellules
- {{CSSxRef("text-align")}}&nbsp;: Propriété CSS pour aligner horizontalement le contenu des cellules du tableau
- {{CSSxRef("vertical-align")}}&nbsp;: Propriété CSS pour aligner verticalement le contenu des cellules du tableau
- {{CSSxRef("width")}}&nbsp;: Propriété CSS pour contrôler la largeur du tableau

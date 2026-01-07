---
title: "<colgroup> : l'élément regroupant des colonnes"
slug: Web/HTML/Reference/Elements/colgroup
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

L'élément [HTML](/fr/docs/Web/HTML) **`<colgroup>`** définit un groupe de colonnes au sein d'un tableau.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;colgroup&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Super-héros et acolytes
  </caption>
  <colgroup>
    <col />
    <col span="2" class="batman" />
    <col span="2" class="flash" />
  </colgroup>
  <thead>
    <tr>
      <td></td>
      <th scope="col">Batman</th>
      <th scope="col">Robin</th>
      <th scope="col">Flash</th>
      <th scope="col">Kid Flash</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Compétence</th>
      <td>Intelligence, force</td>
      <td>Dextérité, acrobate</td>
      <td>Super vitesse</td>
      <td>Super vitesse</td>
    </tr>
  </tbody>
</table>
```

```css interactive-example
.batman {
  background-color: #d7d9f2;
}

.flash {
  background-color: #ffe8d4;
}

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
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 6px;
}

td {
  text-align: center;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `span`
  - : Cet attribut contient un nombre entier positif indiquant le nombre de colonnes consécutives que l'élément `<colgroup>` couvre. S'il n'est pas présent, sa valeur par défaut est `1`.

    > [!NOTE]
    > L'attribut `span` n'est pas autorisé s'il y a un ou plusieurs éléments {{HTMLElement("col")}} dans le `<colgroup>`.

### Attributs obsolètes

Les attributs suivants sont obsolètes et ne doivent pas être utilisés. Ils sont documentés ci-dessous à titre de référence lors de la mise à jour du code existant et uniquement pour des raisons historiques.

- `align` {{Deprecated_Inline}}
  - : Définit l'alignement horizontal de chaque cellule du groupe de colonnes. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `left`, `center`, `right`, `justify` et `char`. Lorsque pris en charge, la valeur `char` aligne le contenu textuel sur le caractère défini dans l'attribut [`char`](#char) et sur le décalage défini par l'attribut [`charoff`](#charoff). Notez que les éléments descendants {{HTMLElement("col")}} peuvent remplacer cette valeur en utilisant leur propre attribut [`align`](/fr/docs/Web/HTML/Reference/Elements/col#align). Utilisez plutôt la propriété CSS {{CSSxRef("text-align")}} sur les éléments {{HTMLElement("td")}} et {{HTMLElement("th")}}, car cet attribut est obsolète.

    > [!NOTE]
    > L'application de `text-align` sur l'élément `<colgroup>` n'a aucun effet, car les éléments {{HTMLElement("td")}} et {{HTMLElement("th")}} ne sont pas des descendants de l'élément `<colgroup>` et n'en héritent donc pas.
    >
    > Si le tableau n'utilise pas d'attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#colspan), utilisez le sélecteur CSS `td:nth-of-type(an+b)`. Définissez `a` à zéro et `b` à la position de la colonne dans le tableau, par exemple `td:nth-of-type(2) { text-align: right; }` pour aligner à droite les cellules de la deuxième colonne.
    >
    > Si le tableau utilise un attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#colspan), l'effet peut être obtenu en combinant des sélecteurs d'attributs CSS adéquats comme `[colspan=n]`, bien que cela ne soit pas trivial.

- `bgcolor` {{Deprecated_Inline}}
  - : Définit la couleur de fond de chaque cellule de colonne. La valeur est une couleur HTML&nbsp;; soit un [code RVB hexadécimal à 6 chiffres](/fr/docs/Web/CSS/Reference/Values/hex-color), préfixé par un «&nbsp;#&nbsp;», ou un [mot-clé de couleur](/fr/docs/Web/CSS/Reference/Values/named-color). Les autres valeurs CSS {{CSSxRef("color_value", "&lt;color&gt;")}} ne sont pas prises en charge. Utilisez plutôt la propriété CSS {{CSSxRef("background-color")}}, car cet attribut est obsolète.

- `char` {{Deprecated_Inline}}
  - : Ne fait rien. Il était initialement prévu pour définir l'alignement du contenu sur un caractère de chaque cellule du groupe de colonnes. Les valeurs typiques incluent un point (`.`) lorsqu'on tente d'aligner des nombres ou des valeurs monétaires. Si [`align`](#align) n'est pas défini sur `char`, cet attribut est ignoré, mais il remplacera tout de même la valeur [`align`](/fr/docs/Web/HTML/Reference/Elements/col#align) des éléments {{HTMLElement("col")}} membres de ce groupe de colonnes.

- `charoff` {{Deprecated_Inline}}
  - : Ne fait rien. Il était initialement prévu pour définir le nombre de caractères pour décaler le contenu de la cellule de colonne par rapport au caractère d'alignement défini par l'attribut [`char`](#char).

- `valign` {{Deprecated_Inline}}
  - : Définit l'alignement vertical de chaque cellule du groupe de colonnes. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `baseline`, `bottom`, `middle` et `top`. Notez que les éléments descendants {{HTMLElement("col")}} peuvent remplacer cette valeur en utilisant leur propre attribut [`valign`](/fr/docs/Web/HTML/Reference/Elements/col#valign). Utilisez plutôt la propriété CSS {{CSSxRef("vertical-align")}} sur les éléments {{HTMLElement("td")}} et {{HTMLElement("th")}}, car cet attribut est obsolète.

    > [!NOTE]
    > L'application de `vertical-align` sur l'élément `<colgroup>` n'a aucun effet, car les éléments {{HTMLElement("td")}} et {{HTMLElement("th")}} ne sont pas des descendants de l'élément `<colgroup>` et n'en héritent donc pas.
    >
    > Si le tableau n'utilise pas d'attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#colspan), utilisez le sélecteur CSS `td:nth-of-type(an+b)`. Définissez `a` à zéro et `b` à la position de la colonne dans le tableau, par exemple `td:nth-of-type(2) { vertical-align: middle; }` pour centrer verticalement les cellules de la deuxième colonne.
    >
    > Si le tableau utilise un attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#colspan), l'effet peut être obtenu en combinant des sélecteurs d'attributs CSS adéquats comme `[colspan=n]`, bien que cela ne soit pas trivial.

- `width` {{Deprecated_Inline}}
  - : Définit une largeur par défaut pour chaque colonne du groupe de colonnes courant. En plus des valeurs standard en pixels et en pourcentage, cet attribut peut prendre la forme spéciale `0*`, ce qui signifie que la largeur de chaque colonne couverte doit être la largeur minimale nécessaire pour contenir le contenu de la colonne. Des largeurs relatives telles que `5*` peuvent également être utilisées. Notez que les éléments descendants {{HTMLElement("col")}} peuvent remplacer cette valeur en utilisant leur propre attribut [`width`](/fr/docs/Web/HTML/Reference/Elements/col#width). Utilisez plutôt la propriété CSS {{CSSxRef("width")}}, car cet attribut est obsolète.

## Exemples

Voir {{HTMLElement("table")}} pour un exemple complet de tableau présentant les standards et bonnes pratiques courantes.

Cet exemple montre un tableau à huit colonnes divisé en trois éléments `<col>`.

### HTML

Un élément `<colgroup>` est utilisé pour structurer un tableau de base en créant des groupes de colonnes. Le nombre de colonnes dans chaque groupe est défini par l'attribut [`span`](#span).

```html
<table>
  <caption>
    Activités hebdomadaires personnelles
  </caption>
  <colgroup>
    <col />
    <col span="5" class="weekdays" />
    <col span="2" class="weekend" />
  </colgroup>
  <thead>
    <tr>
      <th>Période</th>
      <th>Lun</th>
      <th>Mar</th>
      <th>Mer</th>
      <th>Jeu</th>
      <th>Ven</th>
      <th>Sam</th>
      <th>Dim</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Matin</th>
      <td>Nettoyer la chambre</td>
      <td>Entraînement de football</td>
      <td>Cours de danse</td>
      <td>Cours d'histoire</td>
      <td>Acheter des boissons</td>
      <td>Heure d'étude</td>
      <td>Temps libre</td>
    </tr>
    <tr>
      <th>Après-midi</th>
      <td>Yoga</td>
      <td>Club d'échecs</td>
      <td>Voir des ami·e·s</td>
      <td>Gymnastique</td>
      <td>Fête d'anniversaire</td>
      <td>Partie de pêche</td>
      <td>Temps libre</td>
    </tr>
  </tbody>
</table>
```

### CSS

Nous utilisons le CSS, au lieu des attributs HTML obsolètes, pour fournir une couleur de fond aux colonnes et aligner le contenu des cellules&nbsp;:

```css
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 6px;
  text-align: center;
}

.weekdays {
  background-color: #d7d9f2;
}

.weekend {
  background-color: #ffe8d4;
}
```

```css hidden
table {
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
```

#### Résultat

{{EmbedLiveSample('Exemples', 650, 170)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Si l'attribut <a href="#span"><code>span</code></a> est présent&nbsp;:
        aucun car c'est un élément vide.<br />Si l'attribut n'est pas présent,
        zéro ou plusieurs éléments {{HTMLElement("col")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début peut être absente si le premier élément fils est
        {{HTMLElement("col")}} et
        que celui-ci n'est pas précédé par un élément
        <code>&lt;colgroup&gt;</code>
        dont la balise de fin est absente.<br />La balise de fin peut être absente
        s'il n'est pas suivi par un blanc ou par un commentaire.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("table")}}. Le
        <code>&lt;colgroup&gt;</code> doit apparaître après tout élément
        {{HTMLElement("caption")}}, mais avant tout élément
        {{HTMLElement("thead")}}, {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} et
        {{HTMLElement("tr")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLTableColElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Bases des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- Autres éléments liés aux tableaux&nbsp;: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
- {{CSSxRef("background-color")}}&nbsp;: propriété CSS pour définir la couleur de fond de chaque cellule du groupe de colonnes
- {{CSSxRef("border")}}&nbsp;: propriété CSS pour contrôler les bordures des cellules du groupe de colonnes
- {{CSSxRef("text-align")}}&nbsp;: propriété CSS pour aligner horizontalement le contenu de chaque cellule du groupe de colonnes
- {{CSSxRef("vertical-align")}}&nbsp;: propriété CSS pour aligner verticalement le contenu de chaque cellule du groupe de colonnes
- {{CSSxRef("visibility")}}&nbsp;: propriété CSS pour masquer (ou afficher) les cellules d'un groupe de colonnes
- {{CSSxRef("width")}}&nbsp;: propriété CSS pour contrôler la largeur par défaut de chaque colonne d'un groupe de colonnes
- {{CSSxRef(":nth-of-type")}}, {{CSSxRef(":first-of-type")}}, {{CSSxRef(":last-of-type")}}&nbsp;: pseudo-classes CSS pour sélectionner les cellules de colonne souhaitées

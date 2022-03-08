---
title: Table de compatibilité des propriétés pour les widgets de formulaire
slug: Learn/Forms/Property_compatibility_table_for_form_controls
tags:
  - Avancé
  - CSS
  - Formulaires
  - Guide
  - HTML
  - Indésirables
  - Mises à jour
  - Web
translation_of: Learn/Forms/Property_compatibility_table_for_form_controls
original_slug: Web/Guide/HTML/Formulaires/Property_compatibility_table_for_form_widgets
---
{{learnsidebar}}{{PreviousMenu("Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms", "Web/Guide/HTML/Formulaires")}}

Les tables de compatibilité suivantes tentent de résumer l'état de la prise en charge des CSS par les formulaires HTML. Eu égard à la complexité des CSS et des formulaires HTML, ces tables ne peuvent pas être considérées comme un élément de référence parfait. Toutefois, elles vous donneront un bon aperçu de ce qui peut et de ce qui ne peut pas être fait, ce qui vous aidera à apprendre comment faire les choses.

## Comment lire les tables

### Valeurs

Pour chaque propriété, il y a quatre valeurs possibles :

- OUI
  - : La prise en charge de la propriété est raisonnablement cohérente d'un navigateur à l'autre. Il se peut que vous soyez encore confronté à des effets collatéraux étranges dans certains cas limites.
- PARTIEL
  - : Bien que la propriété soit acceptée, vous pouvez fréquemment être confronté à des effets collatéraux bizarres ou à des incohérences. Vous devriez probablement éviter ces propriétés si vous n'avez pas d'abord maîtrisé ces effets secondaires.
- NON
  - : La propriété ne fonctionne tout simplement pas ou est si incohérente qu'elle n'est pas fiable.
- N.A.
  - : La propriété n'a aucune signification pour ce type de widget.

### Rendu

Pour chaque propriété il y a deux rendus possibles :

- N (Normal)
  - : Indique que la propriété est appliquée telle quelle.
- A (Altéré)
  - : Indique que la propriété est appliquée avec la règle supplémentaire ci-dessous :

```css
* {
/* Ceci désactive l'aspect et le comportement natif des navigateurs basés sur WebKit. */
  -webkit-appearance: none;

/* Ceci désactive l'aspect et le comportement natif des navigateurs basés sur Gecko. */
  -moz-appearance: none;

/* Ceci désactive l'aspect et le comportement natif sur plusieurs divers navigateurs
   y compris Opera, Internet Explorer et Firefox */
  background: none;
}
```

## Tables de compatibilité

### Comportements globaux

Certains comportements sont communs à de nombreux navigateurs au niveau global :

- {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("border-radius")}}, {{cssxref("height")}}
  - : L'utilisation de l'une de ces propriétés peut désactiver partiellement ou totalement l'aspect natif des widgets sur certains navigateurs. Prudence lorsque vous les utilisez.
- {{cssxref("line-height")}}
  - : Cette propriété est prise en charge de manière non cohérente d'un navigateur à l'autre et vous devriez l'éviter.
- {{cssxref("text-decoration")}}
  - : Cette propriété n'est pas prise en charge par Opera sur les widgets de formulaire.
- {{cssxref("text-overflow")}}
  - : Opera, Safari et IE9 ne prennent pas en charge cette propriété sur les widgets de formulaire.
- {{cssxref("text-shadow")}}
  - : Opera ne prend pas en charge {{cssxref("text-shadow")}} sur les widgets de formulaire et IE9 ne le prend pas du tout en charge.

### Champs texte

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td>
        <ol>
          <li>
            Les navigateurs WebKit (principalement sur Mac OSX et iOS) utilisent
            apparence et comportement natifs pour les champs de recherche. Par
            conséquent, il est nécessaire d'utiliser
            <code>-webkit-appearance:none</code> pour pouvoir appliquer cette
            propriété aux champs de recherche.
          </li>
          <li>
            Sous Windows 7, Internet Explorer 9 n'applique pas la bordure à
            moins que <code>background:none</code> ne soit utilisé.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td>
        <ol>
          <li>
            Les navigateurs WebKit (principalement sur Mac OSX et iOS) utilisent
            apparence et comportement natifs pour les champs de recherche. Par
            conséquent, il est nécessaire d'utiliser
            <code>-webkit-appearance:none</code> pour pouvoir appliquer cette
            propriété aux champs de recherche.
          </li>
          <li>
            Sous Windows 7, Internet Explorer 9 n'applique pas la bordure à
            moins que <code>background:none</code> ne soit utilisé.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td>
        <ol>
          <li>
            Les navigateurs WebKit (principalement sur Mac OSX et iOS) utilisent
            apparence et comportement natifs pour les champs de recherche. Par
            conséquent, il est nécessaire d'utiliser
            <code>-webkit-appearance:none</code> pour pouvoir appliquer cette
            propriété aux champs de recherche.
          </li>
          <li>
            Sous Windows 7, Internet Explorer 9 n'applique pas la bordure à
            moins que <code>background:none</code> ne soit utilisé.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td>
        <ol>
          <li>
            Si la propriété {{cssxref("border-color")}} n'est pas
            mentionnée, certains navigateurs fondés sur WebKit appliqueront la
            propriété {{cssxref("color")}} aussi bien à la bordure qu'à
            la police avec l'élément {{HTMLElement("textarea")}}.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td>Voir la note à propos de {{cssxref("line-height")}}</td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>Voir la note à propos de Opera</td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            IE9 prend en charge cette propriété uniquement sur les éléments
            {{HTMLElement("textarea")}}, alors que Opera ne la prend en
            charge que sur les champs texte sur une ligne.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td>
        <ol>
          <li>
            Les navigateurs WebKit (principalement sur Mac OSX et iOS) utilisent
            apparence et comportement natifs pour les champs de recherche. Par
            conséquent, il est nécessaire d'utiliser<code>
              -webkit-appearance:none</code
            >
            pour pouvoir appliquer cette propriété aux champs de recherche. Sous
            Windows 7, Internet Explorer 9 n'applique pas la bordure à moins que
            <code>background:none</code> ne soit utilisé.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td>
        <ol>
          <li>
            Les navigateurs WebKit (principalement sur Mac OSX et iOS) utilisent
            apparence et comportement natifs pour les champs de recherche. Par
            conséquent, il est nécessaire d'utiliser<code>
              -webkit-appearance:none</code
            >
            pour pouvoir appliquer cette propriété aux champs de recherche. Sous
            Windows 7, Internet Explorer 9 n'applique pas la bordure à moins que
            <code>background:none</code> ne soit utilisé.
          </li>
          <li>
            Sur Opera la propriété {{cssxref("border-radius")}} n'est
            appliquée que si une bordure est explicitement définie.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>Non</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>IE9 ne prend pas en charge cette propriété.</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### Boutons

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td>
        <ol>
          <li>
            Cette propriété n'est pas appliquée sur les navigateurs fondés sur
            WebKit sur Mac OSX ou iOS.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td>
        <ol>
          <li>
            Cette propriété n'est pas appliquée sur les navigateurs fondés sur
            WebKit sur Mac OSX ou iOS.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td>Voir la note à propos de {{cssxref("line-height")}}.</td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>Yes</td>
      <td>Yes</td>
      <td>
        <ol>
          <li>
            Sur Opera la propriété {{cssxref("border-radius")}} n'est
            appliquée que si une bordure est explicitement définie.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>Non</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>IE9 ne prend pas en charge cette propriété.</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### Widget `number`

Sur les navigateurs qui implémentent le widget `number`, il n'y a pas de méthode standard pour changer le style des roulettes utilisées pour changer la valeur du champ. Il est à noter que les roulettes de Safari sont en dehors du champ.

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            Sur Opera, les roulettes sont zoomés, ce qui peut masquer le contenu
            du champ.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            Sur Opera, les roulettes sont zoomés, ce qui peut masquer le contenu
            du champ.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td>Voir la note à propos de {{cssxref("line-height")}}.</td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière‑plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td colspan="1" rowspan="3">
        <p>
          Pris en charge mais il y a trop d'incohérence entre les navigateurs
          pour que ce soit fiable.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>Non</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>Non</td>
      <td>Non</td>
    </tr>
  </tbody>
</table>

### Cases à cocher et boutons radio

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td>
        <ol>
          <li>
            Certains navigateurs ajoutent des marges supplémentaires et d'autres
            étirent le widget.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td>
        <ol>
          <li>
            Certains navigateurs ajoutent des marges supplémentaires et d'autres
            étirent le widget.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
  </tbody>
</table>

### Boîtes à sélection (ligne unique)

Firefox ne fournit aucun moyen de changer la flèche vers le bas sur l'élément {{HTMLElement("select")}}.

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            Cette propriété est correcte sur l'élément
            {{HTMLElement("select")}}, mais cela peut ne pas être le cas
            sur les éléments {{HTMLElement("option")}} ou
            {{HTMLElement("optgroup")}}.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Non</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Non</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            La propriété est appliquée, mais de manière incohérente entre
            navigateurs sous Mac OSX.
          </li>
          <li>
            La propriété est bien appliquée sur l'élément
            {{HTMLElement("select")}}, mais est traitée de manière
            incohérente sur les éléments {{HTMLElement("option")}} et
            {{HTMLElement("optgroup")}}.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            Sur Mac OSX, les navigateurs fondés sur WebKit ne prennent pas en
            charge cette propriété sur les widgets natifs et, avec Opera, ils ne
            la prennent pas du tout en charge sur les éléments
            {{HTMLElement("option")}} et
            {{HTMLElement("optgroup")}}.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            Sur Mac OSX, les navigateurs fondés sur WebKit ne prennent pas en
            charge cette propriété sur les widgets natifs et, avec Opera, ils ne
            la prennent pas du tout en charge sur les éléments
            {{HTMLElement("option")}} et
            {{HTMLElement("optgroup")}}.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            IE9 ne prend pas en charge cette propriété sur les éléments
            {{HTMLElement("select")}}, {{HTMLElement("option")}},
            et {{HTMLElement("optgroup")}} ; les navigateurs fondés sur
            WebKit sur Mac OSX ne prennent pas en charge cette propriété sur les
            éléments {{HTMLElement("option")}} et
            {{HTMLElement("optgroup")}}.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td>No</td>
      <td>No</td>
      <td>
        <ol>
          <li>
            IE9 sous Windows 7 et les navigateurs fondés sur WebKit sous Mac OSX
            ne prennent pas en charge cette propriété pour ce widget.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            Seul Firefox fournit une prise en charge totale de cette propriété.
            Opera ne la prend pas du tout en charge et d'autres navigateur ne le
            font que pour l'élément  {{HTMLElement("select")}}.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            La plupart des navigateurs ne prennent en charge cette propriété que
            pour l'élément {{HTMLElement("select")}}.
          </li>
          <li>IE9 ne prend pas en charge cette propriété.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            La plupart des navigateurs ne prennent en charge cette propriété que
            pour l'élément {{HTMLElement("select")}}.
          </li>
          <li>IE9 ne prend pas en charge cette propriété.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            La plupart des navigateurs ne prennent en charge cette propriété que
            pour l'élément {{HTMLElement("select")}}.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td colspan="1" rowspan="3">
        <ol>
          <li>
            La plupart des navigateurs ne prennent en charge cette propriété que
            pour l'élément {{HTMLElement("select")}}.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>Non</td>
      <td>Partiel</td>
    </tr>
  </tbody>
</table>

### Boîtes à sélection (multilignes)

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            Opera ne prend pas en charge {{cssxref("padding-top")}} et
            {{cssxref("padding-bottom")}} sur l'élément
            {{HTMLElement("select")}}.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td>Voir la note à propos de {{cssxref("line-height")}}.</td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            IE9 ne prend pas en charge cette propriété sur les éléments
            {{HTMLElement("select")}}, {{HTMLElement("option")}},
            et {{HTMLElement("optgroup")}} ; les navigateurs fondés sur
            WebKit sur Mac OSX ne prennent pas en charge cette propriété sur les
            éléments {{HTMLElement("option")}} et
            {{HTMLElement("optgroup")}}.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td>No</td>
      <td>No</td>
      <td>
        <ol>
          <li>
            IE9 sous Windows 7 et les navigateurs fondés sur WebKit sous Mac OSX
            ne prennent pas en charge cette propriété sur ce widget.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td>No</td>
      <td>No</td>
      <td>
        <ol>
          <li>Uniquement pris en charge par Firefox et IE9+.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            La plupart des navigateurs ne prennent en charge cette propriété que
            pour l'élément {{HTMLElement("select")}}.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>Yes</td>
      <td>Yes</td>
      <td>
        <ol>
          <li>
            Sur Opera la propriété {{cssxref("border-radius")}} n'est
            appliquée que si une bordure est explicitement définie.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>Non</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>IE9 ne prend pas en charge cette propriété.</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### Datalist

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
  </tbody>
</table>

### Sélecteur de fichiers

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td>No</td>
      <td>No</td>
      <td>
        <ol>
          <li>
            Pris en charge mais il y a trop d'incohérence entre les navigateurs
            pour que ce soit fiable.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            Beaucoup de navigateurs appliquent cette propriété sur le bouton de
            sélection.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            Agit plus ou moins comme une marge supplementaire en dehors du
            widget.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>No</td>
      <td>No</td>
      <td>
        <ol>
          <li>
            Pris en charge mais il y a trop d'incohérence entre les navigateurs
            pour que ce soit fiable.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>Non</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>IE9 ne prend pas en charge cette propriété.</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### Sélecteurs de date

Beaucoup de propriétés sont prises en charge mais il y a trop d'incohérence entre les navigateurs pour que ce soit fiable.

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>Non</td>
      <td>Non</td>
      <td> </td>
    </tr>
  </tbody>
</table>

### Sélecteurs de couleurs

Il n'y a pas actuellement suffisamment d'implémentation pour obtenir des comportements fiables.

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>No</td>
      <td>Oui</td>
      <td>
        <ol>
          <li>
            Opera gère cette propriété comme pour un widget
            <code>select </code>avec les mêmes restrictions.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>No</td>
      <td>Oui</td>
      <td>
        <ol>
          <li>
            Opera gère cette propriété comme pour un widget
            <code>select </code>avec les mêmes restrictions.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>No</td>
      <td>No</td>
      <td colspan="1" rowspan="3">
        <ol>
          <li>
            Pris en charge mais il y a trop d'incohérence entre les navigateurs
            pour que ce soit fiable.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>No</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

### Widgets `meter` et `progress`

Il n'y a pas actuellement suffisemment d'implémentation pour obtenir des comportements fiables.

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Oui</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            Chrome cache les éléments {{HTMLElement("progress")}} et
            {{HTMLElement("meter")}} quand la propriété
            {{cssxref("padding")}} est appliquée sur un élément altéré.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>No</td>
      <td>No</td>
      <td colspan="1" rowspan="3">
        <ol>
          <li>
            Pris en charge mais il y a trop d'incohérence entre les navigateurs
            pour que ce soit fiable.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>No</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

### Widget `range`

Il n'y a pas de méthode standard pour changer le style de la poignée de `range` et Opera n'a aucun moyen de modifier le rendu par défaut du widget `range`.

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td>
        <ol>
          <li>
            Chrome et Opera ajoutent quelque espace supplémentaire autour du
            widget, alors que Opera sous Windows 7 réduit la poignée de
            <code>range</code>.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Non</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Partiel</td>
      <td>Oui</td>
      <td>
        <ol>
          <li>
            La propriété {{cssxref("padding")}} est appliquée, mais elle
            n'a aucun effet visible.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>No</td>
      <td>No</td>
      <td colspan="1" rowspan="3">
        <ol>
          <li>
            Pris en charge mais il y a trop d'incohérence entre les navigateurs
            pour que ce soit fiable.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>No</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

### Boutons image

<table>
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">A</th>
      <th scope="col">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Modèle de boîte CSS</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("width")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("height")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("margin")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("padding")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Texte et polices</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("color")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("font")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("letter-spacing")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-align")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-decoration")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-indent")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-overflow")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-shadow")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("text-transform")}}</th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td> </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Bordure et arrière-plan</em></th>
    </tr>
    <tr>
      <th scope="row">{{cssxref("background")}}</th>
      <td>Oui</td>
      <td>Oui</td>
      <td colspan="1"> </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("border-radius")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td colspan="1">
        <ol>
          <li>IE9 ne prend pas en charge cette propriété.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">{{cssxref("box-shadow")}}</th>
      <td>Partiel</td>
      <td>Partiel</td>
      <td colspan="1">
        <ol>
          <li>IE9 ne prend pas en charge cette propriété.</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

{{PreviousMenu("Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms", "Web/Guide/HTML/Formulaires")}}

## Dans ce module

- [Mon premier formulaire HTML](/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML)
- [Comment structurer un formulaire HTML](/fr/docs/Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML)
- [Les widgets natifs pour formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs)
- [Envoi des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires)
- [Validation des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire)
- [Comment construire des widgets personnalisés pour formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés)
- [Envoi de formulaires à l'aide du JavaScript](/fr/docs/Web/Guide/HTML/Formulaires/Sending_forms_through_JavaScript)
- [Formulaires HTML dans les navigateurs anciens](/fr/docs/Web/Guide/HTML/Formulaires/HTML_forms_in_legacy_browsers)
- [Mise en forme des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Apparence_des_formulaires_HTML)
- [Mise en forme avancée des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms)
- Table de compatibilité des propriétés pour les widgets de formulaire

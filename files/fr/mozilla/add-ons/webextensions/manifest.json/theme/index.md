---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
---

{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"theme": {
  "images": {
    "theme_frame": "images/sun.jpg"
  },
  "colors": {
    "frame": "#CF723F",
    "tab_background_text": "#000"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Utilisez la clé du thème pour définir un thème statique à appliquer à Firefox.

> **Note :** Si vous voulez inclure un thème avec une extension, veuillez voir l'API {{WebExtAPIRef("theme")}}.

> **Note :** Depuis mai 2019, les thèmes doivent être signés pour être installés ([bug Firefox 1545109](https://bugzil.la/1545109)). Voir [Signature et distribution votre extension](/fr/docs/Mozilla/Add-ons/Distribution) pour plus de détails.

> **Note :** Prise en charge des thèmes dans Firefox pour Android : Une nouvelle version de Firefox pour Android, basée sur GeckoView, est en cours de développement. Une [pré-version](https://play.google.com/store/apps/details?id=org.mozilla.fenix) ne support pas les thèmes.

## Formats des images

Les formats d'image suivants sont pris en charge dans toutes les propriétés de l'image du thème :

- JPEG
- PNG
- APNG
- SVG (SVG animé est pris en charge à partir de Firefox 59)
- GIF (Le GIF animé n'est pas supporté)

## Syntaxe

La clé du thème est un objet qui prend les propriétés suivantes:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>images</code></td>
      <td><code>Objet</code></td>
      <td>
        <p>Facultatif à partir de Firefox 60. Obligatoire avant Firefox 60.</p>
        <p>
          Un objet JSON dont les propriétés représentent les images à afficher
          dans différentes parties du navigateur. Voir les
          <code
            ><a href="/fr/Add-ons/WebExtensions/manifest.json/theme#images"
              >images</a
            ></code
          >
          pour plus de détails sur les propriétés que cet objet peut contenir.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Objet</code></td>
      <td>
        <p>Obligatoire.</p>
        <p>
          Un objet JSON dont les propriétés représentent les couleurs de
          différentes parties du navigateur. Voir
          <code
            ><a href="/fr/Add-ons/WebExtensions/manifest.json/theme#couleurs"
              >couleurs</a
            ></code
          >
          pour plus de détails sur les propriétés que cet objet peut contenir.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Objet</code></td>
      <td>
        <p>Optionnel</p>
        <p>
          This object has two properties that affect how the
          <code>"additional_backgrounds"</code> images are displayed. See
          <code
            ><a href="/fr/Add-ons/WebExtensions/manifest.json/theme#properties"
              >properties</a
            ></code
          >
          for details on the properties that this object can contain.
        </p>
        <ul>
          <li>
            <code>"additional_backgrounds_alignment":</code> un tableau
            énumérant les valeurs définissant l'alignement des éléments
            correspondants du tableau
            <code>"additional_backgrounds":</code>.<br />Les options
            d'alignement comprennent : <code>"bottom" <em>(bas)</em></code
            >, <code>"center" <em>(centre)</em></code
            >, <code>"left" <em>(gauche)</em></code
            >, <code>"right" <em>(droite)</em></code
            >, <code>"top" <em>(haut)</em></code
            >, <code>"</code><code>center bottom</code><code>"</code
            ><em>(centre bas)</em>,
            <code>"center center" <em>(centre milieu)</em></code
            >, <code>"center top" <em>(centre haut)</em></code
            >, <code>"left bottom" <em>(gauche bas)</em></code
            >, <code>"left center" <em>(gauche milieu)</em></code
            >, <code>"left top" <em>(gauche haut)</em></code
            >, <code>"right bottom" <em>(droite bas)</em></code
            >, <code>"right center" <em>(droite milieu)</em></code
            >, et <code>"right top" <em>(droite haut)</em></code
            >. Si elle n'est pas spécifiée, par défaut,
            <code>"right top"</code>.<br />Facultatif
          </li>
          <li>
            <code>"additional_backgrounds_tiling":</code> un tableau énumérant
            les valeurs de répétition des éléments correspondants du tableau
            <code>"additional_backgrounds":</code>, avec le support de
            <code>"no-repeat" <em>(pas de répétition)</em></code
            >, <code>"repeat" <em>(répétition)</em></code
            >, <code>"repeat-x"</code> et <code>"repeat-y"</code>. Si elle n'est
            pas spécifiée, par défaut, "<code>no-repeat"</code>.<br />Facultatif
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### images

Toutes les URL sont relatives au fichier manifest.json et ne peuvent pas référencer une URL externe.

Les images doivent avoir une hauteur de 200 pixels pour garantir qu'elles remplissent toujours l'espace d'en-tête verticalement.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p>headerURL <code>{{Deprecated_Inline}}</code></p>
      </td>
      <td><code>String</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Attention :</strong> <code>headerURL</code> a été supprimé
            dans Firefox 70. Vous commencerez à recevoir des avertissements dans
            Firefox 65 et plus tard si vous chargez un thème qui utilise cette
            propriété. Utilisez <code>theme_frame</code> à la place.
          </p>
        </div>
        <p>
          L'URL d'une image de premier plan doit être ajoutée à la zone
          d'en-tête et ancrée dans le coin supérieur droit de la zone d'en-tête.
        </p>
        <p>
          En option à partir de Firefox 60. Un de <code>theme_frame</code> ou
          <code>headerURL</code> devait être spécifié avant Firefox 60. Notez
          également que dans Firefox 60 et suivants, tout
          {{cssxref("text-shadow")}} appliqué au texte d'en-tête est
          supprimé si aucun <code>headerURL</code> n'est spécifié (voir
          [bug Firefox 1404688](https://bugzil.la/1404688)).
        </p>
        <p>
          Dans Firefox pour Android, <code>headerURL</code> ou
          <code>theme_frame</code> doit être spécifié.
        </p>
        <ul></ul>
      </td>
    </tr>
    <tr>
      <td><code>theme_frame</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          L'URL d'une image de premier plan doit être ajoutée à la zone
          d'en-tête et ancrée dans le coin supérieur droit de la zone d'en-tête.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> L'ancre de l'image en haut à gauche de
            l'en-tête pour Chrome et si l'image ne remplit pas la zone de
            l'en-tête, l'image sera en mosaïque.
          </p>
        </div>
        <p>
          Optionnel à partir de Firefox 60. Un de <code>theme_frame</code> ou
          <code>headerURL</code> devait être spécifié avant Firefox 60.
        </p>
        <p>
          Dans Firefox pour Android, <code>headerURL</code> ou
          <code>theme_frame</code> doit être spécifié.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array </code>de <code>String</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Attention :</strong> La propriété
            <code>additional_backgrounds</code> est experimentale. Il est
            actuellement accepté dans les versions finale de Firefox, mais son
            comportement est sujet à changement.
          </p>
        </div>
        <p>
          Un tableau d'URLs pour les images de fond supplémentaires à ajouter à
          la zone d'en-tête et à afficher derrière l'image
          <code>"theme_frame"</code> : Ces images superposent la première image
          du tableau en haut, la dernière image du tableau en bas.
        </p>
        <p>Optionel.</p>
        <p>
          Par défaut, toutes les images sont ancrées dans le coin supérieur
          droit de la zone d'en-tête, mais leur alignement et leur comportement
          répété peuvent être contrôlés par les propriétés des
          <code>"properties"</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Couleurs

Ces propriétés définissent les couleurs utilisées pour les différentes parties du navigateur. Ils sont tous facultatifs (mais notez que `"accentcolor"` et `"textcolor"` étaient obligatoires dans Firefox avant la version 63). L'effet de ces propriétés sur l'interface utilisateur de Firefox est présenté ici:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <p><img src="themes_components_annotations.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

> **Note :** Lorsqu'un composant est affecté par plusieurs propriétés de couleur, les propriétés sont listées par ordre de priorité.

Toutes ces propriétés peuvent être spécifiées sous la forme d'une chaîne contenant un [code de couleur CSS](/fr/docs/Web/CSS/color_value), ou un tableau RVB tel que `"tab_background_text": [ 107 , 99 , 23 ]`, ou en héxadécimal, tel que `"tab_background_text": #6b6317`.

> **Note :** [Dans Chrome, les couleurs ne peuvent être spécifiées que sous forme de tableau RVB](/fr/Add-ons/WebExtensions/manifest.json/theme#Chrome_compatibility).
>
> Dans Firefox pour Android, les couleurs peuvent être spécifiées en utilisant:
>
> - La notation hexadecimale complète, c'est à dire #RRGGBB uniquement. Les syntaxes _alpha_ et abrégée, comme dans #RGB\[A], ne sont pas supportées.
> - [Notation fonctionnelle](/fr/docs/Web/CSS/Type_color#Syntaxe) (tableau RVB) pour les thèmes ciblant Firefox 68.2 ou supérieur.
>
> Les couleurs pour les thèmes Firefox pour Android ne peuvent pas être spécifiées à l'aide des noms de couleurs.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>accentcolor</code><code> {{Deprecated_Inline}}</code>
      </td>
      <td>
        <div class="warning">
          <p>
            <strong>Attention :</strong> <code>accentcolor</code> a été supprimé
            dans Firefox 70. Vous commencerez à recevoir des avertissements dans
            Firefox 65 et plus tard si vous chargez un thème qui utilise cette
            propriété. Utilisez <code>frame</code> à la place.
          </p>
        </div>
        <p>
          La couleur de l'arrière-plan de la zone d'en-tête, affichée dans
          l'en-tête quand il n'est pas couvert ou reste visible à travers les
          images spécifiées dans <code>"headerURL"</code> et
          <code>"additional_backgrounds"</code>.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "red",
     "tab_background_text": "white"
  }
}</pre
        >
        <p><img alt="" src="theme-accentcolor.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>bookmark_text</code></td>
      <td>
        <p>
          La couleur du texte et des icônes dans le signet et les barres de
          recherche. De plus, si <code>tab_text</code> n'est pas défini, il
          définit la couleur du texte de l'onglet actif et si les
          <code>icons</code> ne sont pas définies, la couleur des icônes de la
          barre d'outils. Fourni en tant qu'alias compatible Chrome pour
          l'outils <code>toolbar_text</code>.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Assurez-vous que toute couleur utilisée
            contraste bien avec celles utilisées dans <code>frame</code> et
            <code>frame_inactive</code> ou <code>toolbar</code> si vous utilisez
            cette propriété.
          </p>
          <p>
            Là où les <code>icons</code> ne sont pas définis, assurez-vous
            également d'un bon contraste avec
            <code>button_background_active</code> et
            <code>button_background_hover</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "bookmark_text": "red"
  }
}</pre
        >
        <p><img src="theme-bookmark_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>La couleur de l'arrière-plan des boutons de la barre d'outils.</p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_active": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>
          La couleur de l'arrière-plan des boutons de la barre d'outils au
          survol.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_hover": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>
          La couleur des icônes de la barre d'outils, à l'exclusion de celles de
          la barre d'outils de recherche.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Assurez-vous que la couleur utilisée
            contraste bien avec celles utilisées dans <code>frame</code>,
            <code>frame_inactive</code>, <code>button_background_active</code>,
            et <code>button_background_hover</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          La couleur des icônes de la barre d'outils dans l'état d'attention
          comme l'icône de signet étoilé ou l'icône de téléchargement terminé.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Assurez-vous que la couleur utilisée
            contraste bien avec celles utilisées dans <code>frame</code>,
            <code>frame_inactive</code>, <code>button_background_active</code>,
            et <code>button_background_hover</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons_attention": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          La couleur de l'arrière-plan de la zone d'en-tête, affichée dans la
          partie de l'en-tête non couverte ou visible à travers les images
          spécifiées dans <code>"theme_frame"</code> et
          <code>"additional_backgrounds"</code>.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "tab_background_text": "white"
  }
}</pre
        >
        <p><img alt="" src="theme-accentcolor.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          La couleur de l'arrière-plan de la zone d'en-tête quand la fenêtre du
          navigateur est inactive, affichée dans la partie de l'en-tête non
          couverte ou visible à travers les images spécifiées dans
          <code>"theme_frame"</code> et <code>"additional_backgrounds"</code>.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "frame_inactive": "gray",
     "tab_text": "white"
  }
}</pre
        >
        <p><img src="theme-frame_inactive.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_background</code></td>
      <td>
        <p>La nouvelle couleur d'arrière-plan de la page à onglet.</p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_background": "red",
     "ntp_text": "white"
  }
}</pre
        >
        <p><img src="ntp_colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>La couleur du texte de la page nouvel onglet.</p>
        <div class="note">
          <p>
            <strong>Note :</strong> Assurez-vous que la couleur utilisée
            contraste bien avec celle utilisée dans
            <code>ntp_background</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_background": "red",
     "ntp_text": "white"
  }
}</pre
        >
        <p><img src="ntp_colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          La couleur d'arrière-plan des popups (telles que la liste déroulante
          de la barre d'adresse et les menus avec une flèche)
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "red"
  }
}</pre
        >
        <p><img src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>La couleur de la bordure des popups.</p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "black",
     "popup_text": "white",
     "popup_border": "red"
  }
}</pre
        >
        <p><img src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          La couleur d'arrière-plan des éléments mis en surbrillance à l'aide du
          clavier dans les fenêtre contextuelles (tel que l'élément sélectionné
          dans le menu déroulant de la barre d'URL).
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Il est recommandé de définir
            <code>popup_highlight_text</code> pour remplacer la couleur de texte
            par défaut du navigateur sur différentes plateformes.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup_highlight": "red",
     "popup_highlight_text": "white",
  }
}</pre
        >
        <p><img src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>
          La couleur du texte des éléments mis en surbrillance dans les fenêtres
          contextuelles.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> S'assurer que la couleur utilisée contraste
            bien avec celle utilisée dans <code>popup_highlight</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup_highlight": "black",
     "popup_highlight_text": "red"
  }
}</pre
        >
        <p><img src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>La couleur du texte des popups.</p>
        <div class="note">
          <p>
            <strong>Note :</strong> S'assurer que la couleur utilisée contraste
            bien avec celle utilisée dans <code>popup</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "black",
     "popup_text": "red"
  }
}</pre
        >
        <p><img src="popup_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar</code></td>
      <td>
        <p>La couleur de fond des barres latérales intégrées.</p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "red",
     "sidebar_highlight": "white",
     "sidebar_highlight_text": "green",
     "sidebar_text": "white"
  }
}</pre
        >
        <p><img alt="" src="sidebar_colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>
          La couleur de la bordure et du séparateur de la barre latérale du
          navigateur.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_border": "red"
  }
}</pre
        >
        <p><img alt="" src="screen_shot_2018-09-16_at_6.13.31_pm.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>
          La couleur d'arrière-plan des lignes en surbrillance dans les barres
          latérales intégrées.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_highlight": "red",
     "sidebar_highlight_text": "white"
  }
}</pre
        >
        <p><img src="screen_shot_2018-10-04_at_11.15.46_am.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>
          La couleur du texte des lignes en surbrillance dans les barres
          latérales intégrées.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> S'assurer que la couleur utilisée contraste
            bien avec celle utilisée dans <code>sidebar_highlight</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
    "sidebar_highlight": "pink",
    "sidebar_highlight_text": "red",
  }
}</pre
        >
        <p><img src="screen_shot_2018-10-04_at_11.22.41_am.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>La couleur du texte des barres latérales intégrées.</p>
        <div class="note">
          <p>
            <strong>Note :</strong> S'assurer que la couleur utilisée contraste
            bien avec celle utilisée dans <code>sidebar</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "red",
     "sidebar_highlight": "white",
     "sidebar_highlight_text": "green",
     "sidebar_text": "white"
  }
}</pre
        >
        <p><img alt="" src="sidebar_colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_separator</code></td>
      <td>
        <p>La couleur du séparateur vertical des onglets d'arrière-plan.</p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_background_separator": "red"
  }
}</pre
        >
        <p><img src="theme-tab-background-separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          La couleur du texte affiché dans les onglets des pages inactives. Si
          <code>tab_text</code> ou <code>bookmark_text</code> n'est pas
          spécifié, s'applique au texte de l'onglet actif.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Assurez-vous que la couleur utilisée
            contraste bien avec celles utilisées dans
            <code>tab_selected</code> ou <code>frame</code> et
            <code>frame_inactive</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "white",
    "tab_background_text": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-textcolor.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>La couleur de la ligne de l'onglet sélectionnée.</p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_bckground_text": "white",
     "tab_line": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>
          La couleur de l'indicateur de chargement de l'onglet et de l'effet de
          vague.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_loading": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          La couleur de fond de l'onglet sélectionné. Lorsqu'elle n'est pas
          utilisée, la couleur de l'onglet sélectionné est définie par
          <code>frame</code> et <code>frame_inactive</code>.
        </p>
        <pre class="brush: json">
"theme": {
  "images": {
  "theme_frame": "weta.png"
},
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_selected": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Depuis Firefox 59, il représente la couleur du texte de l'onglet
          sélectionné. Si <code>tab_line</code> n'est pas spécifié, il définit
          également la couleur de la ligne de tabulation sélectionnée.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Assurez-vous que la couleur utilisée
            contraste bien avec celles utilisées dans
            <code>tab_selected</code> ou <code>frame</code> et
            <code>frame_inactive</code>.
          </p>
        </div>
        <p>
          De Firefox 55 à 58, il est incorrectement implémenté comme alias pour
          <code>"textcolor"</code>
        </p>
        <pre class="brush: json">
"theme": {
  "images": {
  "theme_frame": "weta.png"
},
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_selected": "white",
     "tab_text": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>textcolor {{Deprecated_Inline}}</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Attention :</strong> <code>textcolor</code> a été supprimé
            dans Firefox 70. Vous commencerez à recevoir des avertissements dans
            Firefox 65 et plus tard si vous chargez un thème qui utilise cette
            propriété. Utilisez <code>tab_text</code> à la place.
          </p>
        </div>
        <p>La couleur du texte affiché dans la zone d'en-tête.</p>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "white",
    "textcolor": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-textcolor.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          La couleur de fond de la barre de navigation, de la barre de signets
          et de l'onglet sélectionné.
        </p>
        <p>
          Ceci définit également la couleur de fond de la barre "Rechercher".
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "red",
    "tab_background_text": "white"
  }
}</pre
        >
        <p><img alt="" src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          La couleur de la ligne séparant le bas de la barre d'outils de la
          région en dessous.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_bottom_separator": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          La couleur d'arrière-plan des champs de la barre d'outils, comme la
          barre URL.
        </p>
        <p>
          Ceci définit également la couleur de fond du champ Rechercher dans la
          page.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_field": "red"
  }
}</pre
        >
        <p><img alt="" src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>La couleur de la bordure des champs de la barre d'outils.</p>
        <p>
          Ceci définit également la couleur de fond du champ Rechercher dans la
          page.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_border": "red"
  }
}</pre
        >
        <p><img alt="" src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>
          La couleur de bordure pour les champs de la barre d'outils qui ont le
          focus.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_border_focus": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          La couleur de fond pour les champs de la barre d'outils qui ont le
          focus, tels que la barre d'URL.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_focus": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        La couleur d'arrière-plan utilisée pour indiquer la sélection actuelle
        du texte dans la barre URL (et la barre de recherche, si elle est
        configurée pour être séparée).
        <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgba(255, 255, 255, 0.91)",
    "toolbar_field_text": "rgb(0, 100, 0)",
    "toolbar_field_highlight": "rgb(180, 240, 180, 0.9)",
    "toolbar_field_highlight_text": "rgb(0, 80, 0)"
  }
}</pre
        >
        <p><img src="toolbar_field_highlight.png" /></p>
        <p>
          Ici, le champ <code>toolbar_field_highlight</code> spécifie que la
          couleur de surbrillance est un vert clair, alors que le texte est
          réglé sur un vert foncé à vert moyen en utilisant le texte
          <code>toolbar_field_highlight_text</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          La couleur utilisée pour dessiner le texte actuellement sélectionné
          dans la barre d'URL (et la barre de recherche, si elle est configurée
          comme boîte séparée).
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> S'assurer que la couleur utilisée contraste
            bien avec celles utilisées dans
            <code>toolbar_field_highlight</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgba(255, 255, 255, 0.91)",
    "toolbar_field_text": "rgb(0, 100, 0)",
    "toolbar_field_highlight": "rgb(180, 240, 180, 0.9)",
    "toolbar_field_highlight_text": "rgb(0, 80, 0)"
  }
}</pre
        >
        <p><img src="toolbar_field_highlight.png" /></p>
        <p>
          Ici, le champ <code>toolbar_field_highlight_text</code> permet de
          régler la couleur du texte sur un vert foncé moyen foncé, tandis que
          la couleur de surbrillance est un vert clair.
        </p>
      </td>
    </tr>
    <tr></tr>
    <tr>
      <td><code>toolbar_field_separator</code></td>
      <td>
        <p>
          La couleur des séparateurs à l'intérieur de la barre d'URL. Dans
          Firefox 58, cela a été implémenté en tant que
          <code>toolbar_vertical_separator</code>.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field_separator": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-toolbar_field_separator.png" /></p>
        <p>
          Dans cette capture d'écran,
          <code>"toolbar_vertical_separator"</code> est la ligne verticale
          blanche dans la barre URL qui sépare l'icône du mode lecture des
          autres icônes.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          La couleur du texte dans les champs de la barre d'outils, comme la
          barre URL. Ceci définit également la couleur du texte dans le champ
          Rechercher dans la page.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Assurez-vous que la couleur utilisée
            contraste bien avec celles utilisées dans
            <code>toolbar_field</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "red"
  }
}</pre
        >
        <p><img alt="" src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          La couleur du texte dans les champs de la barre d'outils qui ont le
          focus, tels que la barre d'URL.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Assurez-vous que la couleur utilisée
            contraste bien avec celles utilisées dans
            <code>toolbar_field_focus</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_text_focus": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          La couleur du texte de la barre d'outils. Ceci définit également la
          couleur du texte dans la barre "Rechercher".
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Pour la compatibilité avec Chrome, utilisez
            l'alias <code>bookmark_text</code>.
          </p>
        </div>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_text": "red"
  }
}</pre
        >
        <p><img alt="" src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          La couleur de la ligne séparant le bas de la barre d'outils de la
          région en dessous.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_top_separator": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          La couleur du séparateur à côté de l'icône du menu d'application. Dans
          Firefox 58, il correspond à la couleur des séparateurs dans la barre
          d'URL.
        </p>
        <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_vertical_separator": "red"
  }
}</pre
        >
        <p><img alt="" src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliases

En outre, cette clé accepte diverses propriétés qui sont des alias pour l'une des propriétés ci-dessus. Ceux-ci sont fournis pour la compatibilité avec Chrome. Si un alias est donné et que la version non-alias est également donnée, alors la valeur sera tirée de la version non-alias.

> **Attention :** A partir de Firefox 70, les propriétés suivantes sont supprimées : `accentcolor` et `textcolor`. Utilisez à la place `frame` et `tab_background_text`. L'utilisation de ces valeurs dans des thèmes chargés dans Firefox 65 ou une version ultérieure augmentera les avertissements.

| Nom                   | Alias pour                           |
| --------------------- | ------------------------------------ |
| `bookmark_text`       | `toolbar_text {{Deprecated_Inline}}` |
| `frame`               | `accentcolor {{Deprecated_Inline}}`  |
| `frame_inactive`      | `accentcolor {{Deprecated_Inline}}`  |
| `tab_background_text` | `textcolor {{Deprecated_Inline}}`    |

### properties

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>additional_backgrounds_alignment</code></td>
      <td>
        <p><code>Array</code> of <code>String</code></p>
      </td>
      <td>
        <p>Optionel.</p>
        <p>
          Un tableau de valeurs d'énumération définissant l'alignement de
          l'élément <code>"additional_backgrounds":</code> élément de
          tableau.<br />Les options d'alignement comprennent:
        </p>
        <ul>
          <li><code>"bottom"</code></li>
          <li><code>"center"</code></li>
          <li><code>"left"</code></li>
          <li><code>"right"</code></li>
          <li><code>"top"</code></li>
          <li><code>"center bottom"</code></li>
          <li><code>"center center"</code></li>
          <li><code>"center top"</code></li>
          <li><code>"left bottom"</code></li>
          <li><code>"left center"</code></li>
          <li><code>"left top"</code></li>
          <li><code>"right bottom"</code></li>
          <li><code>"right center"</code></li>
          <li><code>"right top"</code>.</li>
        </ul>
        <p>Si non spécifié, par default <code>"right top"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_tiling</code></td>
      <td>
        <p><code>Array</code> of <code>String</code></p>
      </td>
      <td>
        <p>Optional.</p>
        <p>
          Un tableau de valeurs d'énumérations définissant, comme l'élément de
          tableau <code>"additional_backgrounds":</code> correspondant de
          répétition. Les options comprennent :
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>Si non spécifié, par default <code>"no-repeat"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Un thème de base doit définir une image à ajouter à l'en-tête, la couleur d'accent à utiliser dans l'en-tête et la couleur du texte utilisée dans l'en-tête:

```json
 "theme": {
   "images": {
     "theme_frame": "images/sun.jpg"
   },
   "colors": {
     "frame": "#CF723F",
     "tab_background_text": "#000"
   }
 }
```

Plusieurs images peuvent être utilisées pour remplir l'en-tête, en utilisant une image d'en-tête vierge/transparente pour donner le contrôle de l'emplacement à chaque image visible:

```json
 "theme": {
   "images": {
     "headerURL": "images/blank.png",
     "additional_backgrounds": [ "images/left.png" , "images/middle.png", "images/right.png"]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "left top" , "top", "right top"]
   },
   "colors": {
     "frame": "blue",
     "tab_background_text": "#ffffff"
   }
 }
```

Vous pouvez également remplir l'en-tête avec une image répétée, ou des images, dans ce cas, une seule image ancrée dans le milieu du haut de l'en-tête et répétée sur le reste de l'en-tête:

```json
 "theme": {
   "images": {
     "additional_backgrounds": [ "images/logo.png"]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "top" ],
     "additional_backgrounds_tiling": [ "repeat"  ]
   },
   "colors": {
     "frame": "green",
     "tab_background_text": "#000"
   }
 }
```

L'exemple suivant utilise la plupart des différentes valeurs de `"theme.colors"`:

```json
  "theme": {
    "images": {
      "theme_frame": "weta.png"
    },

    "colors": {
       "accentcolor": "darkgreen",
       "tab_background_text": "white",
       "toolbar": "blue",
       "bookmark_text": "cyan",
       "toolbar_field": "orange",
       "toolbar_field_border": "white",
       "toolbar_field_text": "green",
       "toolbar_top_separator": "red",
       "toolbar_bottom_separator": "white",
       "toolbar_vertical_separator": "white"
    }
  }
```

Il vous donnera un navigateur qui ressemble à ceci :

![](theme.png)

Dans cette capture d'écran, `"toolbar_vertical_separator"` est la ligne verticale blanche dans la barre d'URL divisant l'icône du mode Lecteur des autres icônes.

## Compatibilité des navigateurs

{{Compat}}

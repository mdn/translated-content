---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: 03cb7e674d176cbb03bef39afa55e23f9f193e5a
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"theme": {
  "images": {
    "theme_frame": "images/sun.jpg"
  },
  "colors": {
    "frame": "#CF723F",
    "tab_background_text": "black"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Utilisez la clé `theme` pour définir un thème statique à appliquer à Firefox. Lorsqu'elle est fournie seule, elle définit le thème utilisé lorsque Firefox utilise les schémas de couleurs claires ou sombres. Si la clé [`dark_theme`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme) est fournie, cette clé définit le thème utilisé lorsque Firefox utilise le schéma de couleurs clair.

> [!NOTE]
> Si vous voulez inclure un thème avec une extension, veuillez voir l'API {{WebExtAPIRef("theme")}}.

> [!NOTE]
> Depuis mai 2019, les thèmes doivent être signés pour être installés ([bogue Firefox 1545109 <sup>(angl.)</sup>](https://bugzil.la/1545109)). Voir [Signature et distribution de votre extension <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon) pour plus de détails.

## Formats des images

Les formats d'image suivants sont pris en charge dans toutes les propriétés de l'image du thème&nbsp;:

- JPEG
- PNG
- APNG
- SVG (SVG animé est pris en charge à partir de Firefox 59)
- GIF (Le GIF animé n'est pas supporté)

## Syntaxe

La clé du thème est un objet qui prend les propriétés suivantes&nbsp;:

<table class="fullwidth-table standard-table">
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
          Un objet JSON dont les propriétés représentent les images à afficher dans différentes parties du navigateur. Voir les <code><a href="#images">images</a></code> pour plus de détails sur les propriétés que cet objet peut contenir.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Objet</code></td>
      <td>
        <p>Obligatoire.</p>
        <p>
          Un objet JSON dont les propriétés représentent les couleurs de différentes parties du navigateur. Voir <code><a href="#colors">colors</a></code> pour plus de détails sur les propriétés que cet objet peut contenir.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Objet</code></td>
      <td>
        <p>Optionnel</p>
        <p>
          Cet objet possède des propriétés qui affectent la manière dont les éléments <code>"additional_backgrounds"</code> sont affichés et comment les schémas de couleurs sont appliqués. Voir <code><a href="#properties">properties</a></code> pour plus de détails sur les propriétés que cet objet peut contenir.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### `images`

Toutes les URL sont relatives au fichier manifest.json et ne peuvent pas référencer une URL externe.

Les images doivent avoir une hauteur de 200 pixels pour garantir qu'elles remplissent toujours l'espace d'en-tête verticalement.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>theme_frame</code></td>
      <td><code>String</code> ou <code>Object</code></td>
      <td>
        <p>
          Une image de premier plan de l'UA (définie par le chemin vers un actif d'image inclus dans l'extension) ou un <a href="#syntaxe_de_dégradé_css">dégradé CSS</a> à ajouter à la zone d'en-tête et ancrée dans le coin supérieur droit de la zone d'en-tête. Les dégradés CSS sont pris en charge à partir de Firefox 153.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Chrome ancre l'image dans le coin supérieur gauche de l'en-tête et si l'image ne remplit pas la zone de l'en-tête, l'image est en mosaïque.
          </p>
        </div>
        <p>
          Optionnel dans Firefox pour ordinateur de bureau à partir de la version 60.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array</code> de <code>String</code> ou <code>Object</code></td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Attention&nbsp;:</strong> La propriété <code>additional_backgrounds</code> est expérimentale. Il est actuellement accepté dans les versions finale de Firefox, mais son comportement est sujet à changement.
          </p>
        </div>
        <p>
          Un tableau d'éléments d'arrière-plan supplémentaires, chacun étant soit le chemin vers un actif d'image inclus dans l'extension, soit un <a href="#syntaxe_de_dégradé_css">dégradé CSS</a>, à ajouter à la zone d'en-tête et affiché derrière l'élément <code>"theme_frame":</code>. Ces éléments d'arrière-plan supplémentaires superposent le premier élément du tableau en haut et le dernier élément en bas. Les dégradés CSS sont pris en charge à partir de Firefox 153.
        </p>
        <p>Optionnel</p>
        <p>
          Par défaut, tous les éléments sont ancrés dans le coin supérieur droit de la zone d'en-tête, mais leur alignement, leur répétition et leur comportement de taille, ainsi que la zone de la fenêtre du navigateur dans laquelle ils sont dessinés, peuvent être contrôlés par <a href="#properties"><code>"properties":</code></a>.
        </p>
        <p>
          Comme les éléments d'arrière-plan supplémentaires s'affichent derrière l'élément <code>theme_frame</code>, si <code>theme_frame</code> est défini comme un dégradé CSS, tous les éléments d'arrière-plan supplémentaires sont masqués.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Syntaxe de dégradé CSS

Un dégradé CSS est défini sous forme d'objet de la manière suivante `{ "GRADIENT_TYPE": "GRADIENT_PARAMS" }`, où&nbsp;:

- `GRADIENT_TYPE` est une valeur&nbsp;:
  - `linear-gradient`
  - `radial-gradient`
  - `conic-gradient`
  - `repeating-linear-gradient`
  - `repeating-radial-gradient`
  - `repeating-conic-gradient`
- `GRADIENT_PARAMS` contient les paramètres de cette fonction de dégradé CSS, comme décrit dans [valeurs de dégradé CSS](/fr/docs/Web/CSS/Reference/Values/gradient).

### `colors`

Ces propriétés définissent les couleurs utilisées pour les différentes parties du navigateur. Elles sont toutes facultatives. Voici comment ces propriétés influencent l'interface utilisateur de Firefox&nbsp;:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Aperçu des propriétés de couleur et de leur application aux composants de l'interface utilisateur de Firefox"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Lorsqu'un composant est affecté par plusieurs propriétés de couleur, les propriétés sont listées par ordre de priorité.

Toutes ces propriétés peuvent être définies soit sous forme de chaîne de caractères contenant une [valeur de couleur CSS](/fr/docs/Web/CSS/Reference/Values/color_value) valide (y compris hexadécimale), soit sous forme de tableau RVB, par exemple `"tab_background_text": [ 107 , 99 , 23 ]`.

> [!NOTE]
> [Dans Chrome, les couleurs ne peuvent être définies que sous forme de tableau RVB](#compatibilité_avec_chrome).

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
      <td><code>bookmark_text</code></td>
      <td>
        <p>
          La couleur du texte et des icônes dans le signet et les barres de recherche. De plus, si <code>tab_text</code> n'est pas défini, il définit la couleur du texte de l'onglet actif et si les <code>icons</code> ne sont pas définies, la couleur des icônes de la barre d'outils. Fourni en tant qu'alias compatible Chrome pour l'outils <code>toolbar_text</code>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Assurez-vous que toute couleur utilisée contraste bien avec celles utilisées dans <code>frame</code> et <code>frame_inactive</code> ou <code>toolbar</code> si vous utilisez cette propriété.
          </p>
          <p>
            Là où les <code>icons</code> ne sont pas définis, assurez-vous également d'un bon contraste avec <code>button_background_active</code> et <code>button_background_hover</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "tab_text": "white",
    "toolbar": "black",
    "bookmark_text": "red"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Le navigateur Firefox est noir. L'onglet du navigateur est noir avec du texte blanc. La barre d'URL et la barre de recherche dans la page sont blanches avec du texte noir mais toutes les icônes du navigateur et de la barre de recherche dans la page sont rouges."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>La couleur de l'arrière-plan des boutons de la barre d'outils.</p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_active": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'URL du navigateur sont gris avec du texte blanc. L'icône de personnalisation de la barre d'outils dans la barre d'URL est blanche avec un arrière-plan rouge est enfoncée et une fenêtre intrusive est ouverte affichant une courte liste de choses à ajouter à la barre d'outils telles que la bibliothèque du navigateur et les barres latérales." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>
          La couleur de l'arrière-plan des boutons de la barre d'outils au survol.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_hover": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'URL du navigateur sont gris avec du texte blanc. L'icône pour revenir à la page précédente est blanche avec un arrière-plan rouge." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>
          La couleur des icônes de la barre d'outils, à l'exclusion de celles de la barre d'outils de recherche.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Assurez-vous que la couleur utilisée contraste bien avec celles utilisées dans <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code>, et <code>button_background_hover</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'adresse sont gris avec du texte blanc. La barre d'adresse et les icônes permettant d'ouvrir un nouvel onglet sont rouges. Les icônes rouges contrastent bien avec la couleur noire de l'en-tête." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          La couleur des icônes de la barre d'outils dans l'état d'attention comme l'icône de signet étoilé ou l'icône de téléchargement terminé.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Assurez-vous que la couleur utilisée contraste bien avec celles utilisées dans <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code>, et <code>button_background_hover</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons_attention": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'adresse sont gris avec du texte blanc. L'icône permettant d'ajouter cette page aux favoris est rouge et enfoncée, une fenêtre contextuelle ouverte nommée modifier ce favori est affichée. Lorsque l'état d'attention est activé, les icônes de la barre d'outils contrastent bien avec le fond noir de la zone d'en-tête." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          La couleur de l'arrière-plan de la zone d'en-tête, affichée dans la partie de l'en-tête non couverte ou visible à travers les images définies dans <code>"theme_frame"</code> et <code>"additional_backgrounds"</code>.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "tab_background_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Le navigateur Firefox est rouge avec du texte blanc. Les onglets du navigateur sont d'un rouge plus clair, également avec du texte blanc. La barre d'adresse est d'un rouge très clair avec du texte noir." src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          La couleur de l'arrière-plan de la zone d'en-tête quand la fenêtre du navigateur est inactive, affichée dans la partie de l'en-tête non couverte ou visible à travers les images définies dans <code>"theme_frame"</code> et <code>"additional_backgrounds"</code>.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "frame_inactive": "gray",
     "tab_text": "white"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Le navigateur Firefox est gris. Les onglets et la barre d'adresse du navigateur sont d'un gris plus clair. Le texte des onglets est blanc et les icônes de la barre d'adresse sont d'un gris plus foncé."
            src="theme-frame_inactive.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_background</code></td>
      <td>
        <p>La couleur d'arrière-plan de la page du nouvel onglet.</p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_background": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox affiche la page d'un nouvel onglet. L'arrière-plan de la page est rouge." src="ntp-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>La couleur d'arrière-plan de la carte de la page du nouvel onglet.</p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_card_background": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox affiche la page d'un nouvel onglet. Sur la page, l'arrière-plan de la barre de recherche et des boutons de raccourci est rouge." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>La couleur du texte de la page du nouvel onglet.</p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Assurez-vous que la couleur utilisée contraste bien avec celle utilisée dans <code>ntp_background</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox affiche la page d'un nouvel onglet. Sur la page, le texte est en rouge." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          La couleur d'arrière-plan des fenêtres intrusives (telles que la liste déroulante de la barre d'adresse et les menus avec une flèche)
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'URL du navigateur sont gris plus clair avec des icônes et du texte en blanc. L'icône « Ajouter aux marque-pages » est bleue et enfoncée, une fenêtre intrusive ouverte nommée « Modifier ce marque-page » est affichée avec un arrière-plan rouge. La couleur d'arrière-plan de la fenêtre intrusive est rouge." src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>La couleur de la bordure des fenêtres intrusives.</p>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'adresse du navigateur sont d'un gris plus clair, avec des icônes et du texte en blanc. L'icône permettant d'ajouter cette page aux marque-pages est bleue et, lorsqu'on clique dessus, une fenêtre intrusive intitulée « Modifier ce marque-page » s'affiche, avec un contour rouge et un fond noir. La bordure de la fenêtre intrusive est rouge." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          La couleur d'arrière-plan des éléments mis en surbrillance à l'aide du clavier dans les fenêtre intrusives (tel que l'élément sélectionné dans le menu déroulant de la barre d'URL).
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Il est recommandé de définir <code>popup_highlight_text</code> pour remplacer la couleur de texte par défaut du navigateur sur différentes plateformes.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup_highlight": "red",
     "popup_highlight_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Capture d'écran avec Firefox en noir. Les onglets et la barre d'adresse du navigateur sont d'un gris plus clair, avec des icônes et du texte en blanc. Une fenêtre intrusive de résultats de recherche s'affiche, avec l'arrière-plan de l'élément sélectionné en rouge. La couleur d'arrière-plan de l'élément sélectionné à l'intérieur de la fenêtre intrusive est rouge." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>
          La couleur du texte des éléments mis en surbrillance dans les fenêtres intrusives.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> S'assurer que la couleur utilisée contraste bien avec celle utilisée dans <code>popup_highlight</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'adresse du navigateur sont d'un gris plus clair, avec des icônes et du texte en blanc. Une fenêtre intrusive de résultats de recherche s'affiche, dans laquelle le texte de l'élément sélectionné apparaît en rouge sur fond noir. La couleur du texte de l'élément sélectionné offre un bon contraste avec la couleur de fond noire de cet élément." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>La couleur du texte des fenêtres intrusives.</p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> S'assurer que la couleur utilisée contraste bien avec celle utilisée dans <code>popup</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'adresse du navigateur sont d'un gris plus clair, avec des icônes et du texte en blanc. Une fenêtre intrusive de résultats de recherche s'affiche, dans laquelle le texte des éléments apparaît en rouge sur fond noir. La couleur du texte contraste bien avec la couleur de fond noire de la fenêtre intrusive." src="popup_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar</code></td>
      <td>
        <p>La couleur de fond des barres latérales intégrées.</p>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Une capture d'écran en gros plan de la barre latérale ouverte d'une fenêtre de navigateur. La couleur de fond de la barre latérale est rouge." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>
          La couleur de la bordure et du séparateur de la barre latérale du navigateur.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Une capture d'écran en gros plan de la barre latérale des favoris du navigateur Firefox avec un séparateur horizontal rouge entre le titre de la barre latérale et le menu de la barre latérale. La couleur de la bordure et du séparateur de la barre latérale est rouge." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>
          La couleur d'arrière-plan des lignes en surbrillance dans les barres latérales intégrées.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_highlight": "red",
     "sidebar_highlight_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Gros plan sur la barre latérale des favoris du navigateur Firefox, avec un élément mis en évidence. La couleur d'arrière-plan d'une ligne mise en évidence dans la barre latérale est rouge, avec du texte blanc." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>
          La couleur du texte des lignes en surbrillance dans les barres latérales intégrées.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> S'assurer que la couleur utilisée contraste bien avec celle utilisée dans <code>sidebar_highlight</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "sidebar_highlight": "pink",
    "sidebar_highlight_text": "red",
  }
}</pre
          >
        </details>
        <p><img alt="Gros plan sur la barre latérale des favoris du navigateur Firefox avec un élément mis en évidence. La couleur du texte d'une ligne mise en évidence dans la barre latérale est rouge. La couleur du texte contraste bien avec la couleur d'arrière-plan rose de la ligne mise en évidence." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>La couleur du texte des barres latérales intégrées.</p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> S'assurer que la couleur utilisée contraste bien avec celle utilisée dans <code>sidebar</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Une capture d'écran en gros plan de la barre latérale ouverte d'une fenêtre de navigateur. Le texte affiché dans la barre latérale est blanc. La couleur du texte contraste bien avec le fond rouge de la barre latérale." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td>
        <code>tab_background_separator</code> {{Deprecated_Inline}}
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Attention&nbsp;:</strong> <code>tab_background_separator</code> n'est pas pris en charge à partir de Firefox 89.
          </p>
        </div>
        <p>La couleur du séparateur vertical des onglets d'arrière-plan.</p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_background_separator": "red"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Un gros plan sur les onglets du navigateur pour mettre en évidence le séparateur."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          La couleur du texte affiché dans les onglets des pages inactives. Si <code>tab_text</code> ou <code>bookmark_text</code> n'est pas définit, s'applique au texte de l'onglet actif.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Assurez-vous que la couleur utilisée contraste bien avec celles utilisées dans <code>tab_selected</code> ou <code>frame</code> et <code>frame_inactive</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "white",
    "tab_background_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Une capture d'écran d'une fenêtre de navigateur avec un onglet ouvert. Le navigateur est noir. Les onglets et la barre d'URL du navigateur sont blancs avec des icônes rouges et du texte rouge. La couleur du texte dans l'onglet ouvert est rouge. La couleur du texte contraste bien avec la couleur de fond noire de l'onglet." src="theme-tab_background_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>La couleur de la ligne de l'onglet sélectionnée.</p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_line": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'URL du navigateur sont gris plus foncé avec des icônes gris plus clair et du texte blanc. L'onglet sélectionné a un contour rouge." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>
          La couleur de l'indicateur de chargement de l'onglet et de l'effet de vague.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_loading": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Capture d'écran d'une fenêtre de navigateur comportant un onglet ouvert. Le navigateur est noir. Les onglets et la barre d'adresse du navigateur sont gris foncé, avec des icônes et du texte en blanc. À l'intérieur de l'onglet sélectionné, un indicateur de chargement animé est rouge." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          La couleur de fond de l'onglet sélectionné. Lorsqu'elle n'est pas utilisée, la couleur de l'onglet sélectionné est définie par <code>frame</code> et <code>frame_inactive</code>.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Capture d'écran d'une fenêtre de navigateur comportant un onglet ouvert. Le navigateur est noir. Les onglets et la barre d'adresse du navigateur sont gris foncé, avec des icônes et du texte en blanc. L'onglet sélectionné présente un fond rouge et du texte en blanc." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Depuis Firefox 59, il représente la couleur du texte de l'onglet sélectionné. Si <code>tab_line</code> n'est pas défini, il définit également la couleur de la ligne de tabulation sélectionnée.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Assurez-vous que la couleur utilisée contraste bien avec celles utilisées dans <code>tab_selected</code> ou <code>frame</code> et <code>frame_inactive</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Le navigateur Firefox présente un thème illustré d'un insecte. La barre d'adresse est d'un gris plus clair, avec des icônes blanches. Le texte de l'onglet sélectionné est rouge sur fond blanc." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          La couleur de fond de la barre de navigation, de la barre de signets et de l'onglet sélectionné.
        </p>
        <p>
          Ceci définit également la couleur de fond de la barre «&nbsp;Rechercher&nbsp;».
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "red",
    "tab_background_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Le navigateur Firefox est noir. L'onglet du navigateur, la barre Rechercher dans la page et la barre d'adresse sont rouges avec du texte et des icônes blancs, sauf pour la barre Rechercher dans la page où le texte et l'icône sont noirs." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          La couleur de la ligne séparant le bas de la barre d'outils de la région en dessous.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_bottom_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'adresse du navigateur sont d'un gris plus clair, avec du texte et des icônes blancs. Une ligne rouge horizontale sépare le bas de la barre d'outils et le début de l'affichage de la page Web." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          La couleur d'arrière-plan des champs de la barre d'outils, comme la barre URL.
        </p>
        <p>
          Ceci définit également la couleur de fond du champ <strong>Rechercher dans la page</strong>.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_field": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets du navigateur, la barre de recherche dans la page et la barre d'adresse sont d'un gris plus clair, avec du texte et des icônes blancs. La couleur d'arrière-plan de la barre d'adresse est rouge. La barre de recherche dans la page est blanche avec du texte noir. Le champ de recherche dans la page est rouge avec du texte noir." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>La couleur de la bordure des champs de la barre d'outils.</p>
        <p>
          Ceci définit également la couleur de fond du champ <strong>Rechercher dans la page</strong>.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets du navigateur, la recherche dans la page et la barre d'adresse sont noirs, avec du texte et des icônes blancs. La barre d'adresse et le champ de recherche dans la page sont soulignés en rouge." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>
          La couleur de bordure pour les champs de la barre d'outils qui ont la sélection.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'adresse du navigateur sont noirs, avec du texte et des icônes blancs. Le champ de la barre d'adresse est sélectionné et entouré d'un contour rouge." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          La couleur de fond pour les champs de la barre d'outils qui ont la sélection, tels que la barre d'URL.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets du navigateur, la recherche dans la page et la barre d'adresse sont noirs, avec du texte et des icônes blancs. Le champ de la barre d'adresse est sélectionné et a un fond rouge avec du texte blanc." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        La couleur d'arrière-plan utilisée pour indiquer la sélection actuelle du texte dans la barre URL (et la barre de recherche, si elle est configurée pour être séparée).
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgb(255 255 255 / 91%)",
    "toolbar_field_text": "rgb(0 100 0)",
    "toolbar_field_highlight": "rgb(180 240 180 / 90%)",
    "toolbar_field_highlight_text": "rgb(0 80 0)"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Le navigateur Firefox est blanc. Les onglets du navigateur et la barre d'URL sont blancs avec du texte et des icônes en noir. Le champ de la barre d'URL est sélectionné et entouré en bleu et le texte de la barre d'URL est sélectionné."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Ici, le champ <code>toolbar_field_highlight</code> définit que la couleur de surbrillance est un vert clair, alors que le texte est réglé sur un vert foncé à vert moyen en utilisant le texte <code>toolbar_field_highlight_text</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          La couleur utilisée pour dessiner le texte actuellement sélectionné dans la barre d'URL (et la barre de recherche, si elle est configurée comme boîte séparée).
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> S'assurer que la couleur utilisée contraste bien avec celles utilisées dans <code>toolbar_field_highlight</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgb(255 255 255 / 91%)",
    "toolbar_field_text": "rgb(0 100 0)",
    "toolbar_field_highlight": "rgb(180 240 180 / 90%)",
    "toolbar_field_highlight_text": "rgb(0 80 0)"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Le navigateur Firefox est blanc. Les onglets du navigateur et la barre d'URL sont blancs avec du texte et des icônes en noir. Le champ de la barre d'URL est sélectionné et entouré en bleu et le texte de la barre d'URL est sélectionné."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Ici, le champ <code>toolbar_field_highlight_text</code> permet de régler la couleur du texte sur un vert foncé moyen foncé, tandis que la couleur de surbrillance est un vert clair.
        </p>
      </td>
    </tr>
    <tr></tr>
    <tr>
      <td><code>toolbar_field_separator</code> {{Deprecated_Inline}}</td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Attention&nbsp;:</strong> <code>toolbar_field_separator</code> n'est pas pris en charge à partir de Firefox 89.
          </p>
        </div>
        <p>
          La couleur des séparateurs à l'intérieur de la barre d'URL. Dans Firefox 58, cela a été implémenté en tant que <code>toolbar_vertical_separator</code>.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Une capture d'écran d'une fenêtre de navigateur avec un onglet ouvert. Le navigateur Firefox est noir. Les onglets du navigateur et la barre d'URL sont noirs avec du texte et des icônes en blanc. À l'intérieur du champ de la barre d'URL blanc, après l'icône du mode lecture, une ligne verticale rouge sépare le reste des icônes de la barre d'URL. La couleur de la ligne de séparation verticale à l'intérieur de la barre d'URL est rouge." src="theme-toolbar_field_separator.png" /></p>
        <p>
          Dans cette capture d'écran, <code>"toolbar_vertical_separator"</code> est la ligne verticale blanche dans la barre URL qui sépare l'icône du mode lecture des autres icônes.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          La couleur du texte dans les champs de la barre d'outils, comme la barre URL. Ceci définit également la couleur du texte dans le champ <strong>Rechercher dans la page</strong>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Assurez-vous que la couleur utilisée contraste bien avec celles utilisées dans <code>toolbar_field</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Une capture d'écran d'une fenêtre de navigateur avec un onglet ouvert. Le navigateur est noir. Les onglets du navigateur et la barre d'URL sont noirs avec du texte et des icônes en blanc. Le texte à l'intérieur de la barre d'URL est rouge. Les icônes et le champ de recherche dans la page ont du texte rouge sur fond noir." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          La couleur du texte dans les champs de la barre d'outils qui ont la sélection, tels que la barre d'URL.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Assurez-vous que la couleur utilisée contraste bien avec celles utilisées dans <code>toolbar_field_focus</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Le navigateur Firefox est noir. Les onglets et la barre d'adresse du navigateur sont noirs, avec du texte et des icônes blancs. Le champ de la barre d'adresse est sélectionné et entouré d'un contour rouge." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          La couleur du texte de la barre d'outils. Ceci définit également la couleur du texte dans la barre «&nbsp;Rechercher&nbsp;».
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Pour la compatibilité avec Chrome, utilisez l'alias <code>bookmark_text</code>.
          </p>
        </div>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Capture d'écran d'une fenêtre de navigateur comportant un onglet ouvert. Le navigateur est noir. L'onglet du navigateur, la barre de recherche et la barre d'adresse sont noirs, avec du texte et des icônes rouges. Le texte affiché dans l'onglet actif, la barre de navigation et la barre de recherche est rouge." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          La couleur de la ligne séparant le bas de la barre d'outils de la région en dessous.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Capture d'écran d'une fenêtre de navigateur comportant un onglet ouvert. Le navigateur est noir. L'onglet du navigateur et la barre d'adresse sont noirs, avec du texte et des icônes blancs. Une ligne rouge sépare le haut de la barre d'adresse du navigateur." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          La couleur du séparateur à côté de l'icône du menu d'application. Dans Firefox 58, il correspond à la couleur des séparateurs dans la barre d'URL.
        </p>
        <details open>
          <summary>Voir l'exemple</summary>
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
        </details>
        <p><img alt="Capture d'écran d'une fenêtre de navigateur comportant un onglet ouvert. Le navigateur est noir. L'onglet du navigateur et la barre d'adresse sont noirs, avec du texte et des icônes blancs. La couleur de la ligne verticale séparant la barre d'outils des favoris du contenu à droite est rouge." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliases

De plus, cette clé accepte diverses propriétés qui sont des alias de l'une des propriétés ci-dessus. Celles-ci sont fournies à des fins de compatibilité avec Chrome. Si un alias est définit et que la version non alias est également définie, la valeur est alors extraite de la version sans alias.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Alias pour</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bookmark_text</code></td>
      <td><code>toolbar_text</code></td>
    </tr>
  </tbody>
</table>

### `properties`

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>additional_backgrounds_alignment</code></td>
      <td>
        <p><code>Array</code> et <code>String</code></p>
      </td>
      <td>
        <p>Optionnel.</p>
        <p>
          Un tableau de valeurs d'énumération définissant l'alignement de l'élément <code>"additional_backgrounds":</code> élément de tableau.<br />Les options d'alignement comprennent&nbsp;:
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
        <p>
        Si le tableau contient moins d'éléments que le tableau <code>additional_backgrounds</code>, celui-ci est réutilisé pour les valeurs manquantes. Par exemple, si <code>additional_backgrounds</code> contient 5 valeurs et que <code>additional_backgrounds_alignment</code> contient <code>["left", "top"]</code>, le troisième élément d'arrière-plan est aligné à l'aide de <code>"left"</code>, le quatrième à l'aide de <code>"top"</code> et le cinquième à l'aide de <code>"left"</code>.
        </p>
        <p>Si pas défini, par défaut <code>"right top"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_tiling</code></td>
      <td>
        <p><code>Array</code> de <code>String</code></p>
      </td>
      <td>
        <p>Optionnel</p>
        <p>
          Un tableau de valeurs d'énumérations définissant, comme l'élément de tableau <code>"additional_backgrounds":</code> correspondant de répétition. Les options comprennent&nbsp;:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>
        Si le tableau contient moins d'éléments que le tableau <code>additional_backgrounds</code>, celui-ci est réutilisé pour les valeurs manquantes. Par exemple, si <code>additional_backgrounds</code> contient 5 valeurs et que <code>additional_backgrounds_tiling</code> contient <code>["no-repeat", "repeat-x"]</code>, le troisième élément d'arrière-plan est répété à l'aide de <code>"no-repeat"</code>, le quatrième à l'aide de <code>"repeat-x"</code> et le cinquième à l'aide de <code>"no-repeat"</code>. </p> <p>Si pas défini, par défaut <code>"no-repeat"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_size</code></td>
      <td>
        <p><code>Array</code> de <code>String</code></p>
      </td>
      <td>
        <p>Optionnel</p>
        <p>
          Un tableau de valeurs définissant la taille de l'élément de tableau correspondant <code>"additional_backgrounds":</code>. Accepte les mêmes valeurs que la propriété CSS <a href="/fr/docs/Web/CSS/Reference/Properties/background-size"><code>background-size</code></a>, telles que <code>"auto"</code>, <code>"cover"</code>, <code>"contain"</code>, ou des valeurs explicites de largeur et de hauteur (par exemple, <code>"100px 200px"</code>).
        </p>
        <p>
        Si le tableau contient moins d'éléments que le tableau <code>additional_backgrounds</code>, celui-ci est réutilisé pour les valeurs manquantes. Par exemple, si <code>additional_backgrounds</code> contient 5 valeurs et que <code>additional_backgrounds_size</code> contient <code>["auto", "100px 100px"]</code>, le troisième élément d'arrière-plan est dimensionné à l'aide de <code>"auto"</code>, le quatrième à l'aide de <code>"100px 100px"</code> et le cinquième à l'aide de <code>"auto"</code>.
        </p>
        <p>Si pas défini, par défaut <code>"auto"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>backgrounds_area</code></td>
      <td>
        <p><code>String</code></p>
      </td>
      <td>
        <p>Optionnel</p>
        <p>
          Détermine la zone de la fenêtre du navigateur où les images d'arrière-plan et les dégradés du thème sont dessinés. Les options comprennent&nbsp;:
        </p>
        <ul>
          <li>
            <code>"auto"</code> — Firefox choisit la zone en fonction de <code>additional_backgrounds_alignment</code>. Si une valeur d'alignement positionne une image d'arrière-plan au centre vertical ou en bas de la zone d'en-tête, les arrière-plans sont dessinés dans les barres d'outils supérieures. Sinon, ils sont dessinés dans la fenêtre.
          </li>
          <li>
            <code>"window"</code> — les arrière-plans sont dessinés dans toute la fenêtre du navigateur et s'étendent ainsi derrière l'interface verticale, comme la barre latérale et les onglets verticaux.
          </li>
          <li>
            <code>"top_toolbars"</code> — les arrière-plans sont dessinés uniquement dans les barres d'outils horizontales en haut de la fenêtre, c'est-à-dire la barre de menus, la barre d'onglets, la barre de navigation et la barre des marque-pages. L'interface verticale, comme la barre latérale, utilise plutôt la couleur <code>frame</code>.
          </li>
        </ul>
        <p>Si pas défini, par défaut <code>"auto"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>color_scheme</code></td>
      <td>
        <p><code>String</code></p>
      </td>
      <td>
        <p>Optionnel</p>
        <p>
          Détermine le schéma de couleurs appliqué à l'interface du navigateur (par exemple, aux menus contextuels) et au contenu (par exemple, aux pages intégrées et au schéma de couleurs préféré pour les pages web). Les options comprennent&nbsp;:
        </p>
        <ul>
          <li><code>"auto"</code> — un schéma clair ou sombre déterminé automatiquement selon le thème.</li>
          <li><code>"light"</code> — un schéma clair.</li>
          <li><code>"dark"</code> — un schéma sombre.</li>
          <li><code>"system"</code> — utilise le schéma du système.</li>
        </ul>
        <p>Si pas défini, par défaut <code>"auto"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>content_color_scheme</code></td>
      <td>
        <p><code>String</code></p>
      </td>
      <td>
        <p>Optionnel</p>
        <p>
          Détermine le schéma de couleurs appliqué au contenu (par exemple, aux pages intégrées et au schéma de couleurs préféré pour les pages web). Cette propriété remplace <code>color_scheme</code>. Les options comprennent&nbsp;:
        </p>
        <ul>
          <li><code>"auto"</code> — un schéma clair ou sombre déterminé automatiquement selon le thème.</li>
          <li><code>"light"</code> — un schéma clair.</li>
          <li><code>"dark"</code> — un schéma sombre.</li>
          <li><code>"system"</code> — le schéma du système.</li>
        </ul>
        <p>Si pas défini, par défaut <code>"auto"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Un thème de base doit définir une image à ajouter à l'en-tête, la couleur d'accent à utiliser dans l'en-tête et la couleur du texte utilisée dans l'en-tête&nbsp;:

```json
 "theme": {
   "images": {
     "theme_frame": "images/sun.jpg"
   },
   "colors": {
     "frame": "#CF723F",
     "tab_background_text": "black"
   }
 }
```

Plusieurs éléments peuvent être utilisés pour remplir l'en-tête. Avant la version 60 de Firefox, utilisez une image d'en-tête vierge ou transparente pour contrôler l'emplacement de chaque élément supplémentaire&nbsp;:

```json
 "theme": {
   "images": {
     "additional_backgrounds": [ "images/left.png", "images/middle.png", "images/right.png" ]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "left top", "top", "right top" ]
   },
   "colors": {
     "frame": "blue",
     "tab_background_text": "white"
   }
 }
```

Vous pouvez également remplir l'en-tête avec une image répétée, ou des images, dans ce cas, une seule image ancrée dans le milieu du haut de l'en-tête et répétée sur le reste de l'en-tête&nbsp;:

```json
 "theme": {
   "images": {
     "additional_backgrounds": [ "images/logo.png" ]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "top" ],
     "additional_backgrounds_tiling": [ "repeat" ]
   },
   "colors": {
     "frame": "green",
     "tab_background_text": "black"
   }
 }
```

L'exemple suivant utilise la plupart des différentes valeurs de `"theme.colors"`&nbsp;:

```json
  "theme": {
    "images": {
      "theme_frame": "weta.png"
    },

    "colors": {
       "frame": "darkgreen",
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

Cela vous donne un navigateur qui ressemble à ceci&nbsp;:

![Une fenêtre de navigateur comportant deux onglets ouverts et dont la zone d'en-tête présente un fond vert foncé. L'onglet inactif affiche du texte en blanc. L'onglet actif et la barre d'outils ont un fond bleu avec du texte de couleur cyan. La barre d'adresse présente un fond orange avec des bordures blanches, du texte vert et une ligne de séparation verticale blanche. Une ligne rouge sépare les onglets en haut de la fenêtre, tandis qu'une ligne blanche sépare les onglets du contenu situé en dessous.](theme.png)

Dans cette capture d'écran, `"toolbar_vertical_separator"` est la ligne verticale blanche dans la barre d'URL divisant l'icône du mode Lecteur des autres icônes.

Le exemple suivant (Firefox 153+) mélange des arrière-plans d'images avec un dégradé linéaire CSS&nbsp;:

```json
"theme": {
  "images": {
    "additional_backgrounds": [
      "background-image1.svg",
      "background-image2.svg",
      { "linear-gradient": "to bottom, #FF6BBA -20%, #FFC999 50%" }
    ]
  },
  "properties": {
    "additional_backgrounds_alignment": ["right top", "left top", "right top"],
    "additional_backgrounds_tiling": ["no-repeat", "no-repeat", "repeat-x"],
    "additional_backgrounds_size": ["auto", "auto", "auto 144px"]
  }
}
```

Cela donne&nbsp;:

- `background-image1.svg` affichée en haut à droite, à sa taille naturelle.
- `background-image2.svg` affichée en haut à gauche, à sa taille naturelle.
- Le `linear-gradient` affiché depuis le coin supérieur droit, répété horizontalement sur l'en-tête (`repeat-x`), et dimensionné à 144px de hauteur (la largeur est automatique). Le dégradé passe du rose (`#FF6BBA`) en haut au pêche (`#FFC999`) en bas.

Le exemple suivant (Firefox 156+) restreint le dégradé d'arrière-plan aux barres d'outils horizontales en haut de la fenêtre, de sorte qu'il ne s'étende pas derrière la barre latérale ou les onglets verticaux. Sans `backgrounds_area`, l'alignement `"right top"` fait que Firefox dessine le dégradé sur toute la fenêtre&nbsp;:

```json
"theme": {
  "images": {
    "additional_backgrounds": [
      { "linear-gradient": "to bottom, rgb(255, 0, 128), rgb(0, 128, 255)" }
    ]
  },
  "colors": {
    "frame": "#000080",
    "tab_background_text": "#ffffff"
  },
  "properties": {
    "additional_backgrounds_alignment": ["right top"],
    "additional_backgrounds_tiling": ["no-repeat"],
    "additional_backgrounds_size": ["100% 100%"],
    "backgrounds_area": "top_toolbars"
  }
}
```

Avec `backgrounds_area` défini sur `"top_toolbars"`, la barre latérale utilise la couleur `frame`. Changer `backgrounds_area` en `"window"` dessine le dégradé sur toute la fenêtre, y compris derrière la barre latérale.

## Compatibilité des navigateurs

{{Compat}}

### Compatibilité avec Chrome

Dans Chrome&nbsp;:

- `colors/toolbar_text` n'est pas utilisé, utilisez `colors/bookmark_text` à la place.
- `images/theme_frame` ancre l'image en haut à gauche de l'en-tête et si l'image ne remplit pas la zone de l'en-tête, elle est répétée.
- toutes les couleurs doivent être définies sous forme de tableau de valeurs RVB, comme ceci&nbsp;:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

  À partir de Firefox 59, les deux formes, tableau et couleur CSS, sont acceptées pour toutes les propriétés. Avant cela, `colors/frame` et `colors/tab_background_text` nécessitaient la forme tableau, tandis que les autres propriétés nécessitaient la forme couleur CSS.

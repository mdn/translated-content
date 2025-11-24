---
title: <system-color>
slug: Web/CSS/Reference/Values/system-color
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<system-color>`** reflète généralement les choix de couleurs par défaut utilisés pour les différentes parties d'une page web.

Cependant, les agents utilisateur peuvent fournir une fonctionnalité d'accessibilité appelée _mode couleurs forcées_, dans lequel les couleurs sont limitées à une palette définie par l'utilisateur·ice et l'agent utilisateur, remplaçant le choix de couleurs de l'auteur·ice dans certaines propriétés. En mode couleurs forcées, `<system-color>` expose les couleurs choisies, afin que le reste de la page puisse s'y intégrer. Un exemple de mode couleurs forcées est le [mode contraste élevé de Windows <sup>(angl.)</sup>](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

En mode couleurs forcées, les auteur·ice·s doivent utiliser les couleurs du type `<system-color>` pour toutes les propriétés qui ne font pas partie de l'ensemble des propriétés dont les couleurs sont remplacées. Cela garantit que la page utilise de manière cohérente la même palette de couleurs pour toutes les propriétés.

Les auteur·ice·s peuvent détecter le mode couleurs forcées à l'aide de la fonctionnalité média {{CSSxRef("@media/forced-colors", "forced-colors")}}.

Une valeur `<system-color>` peut être utilisée partout où une valeur {{CSSxRef("&lt;color&gt;")}} peut l'être.

## Syntaxe

Notez que ces mots-clés sont _insensibles à la casse_, mais sont listés ici avec une casse mixte pour la lisibilité.

Selon vos paramètres, les couleurs d'exemple affichées dans le tableau peuvent changer. Vous pouvez également consulter cette page avec différents navigateurs, systèmes d'exploitation et paramètres système pour vérifier les différences.

<table>
  <thead>
    <tr>
      <th>Mot-clé</th>
      <th>Description</th>
      <th>Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>AccentColor</code></td>
      <td>Arrière-plan des contrôles d'interface utilisateur accentués.</td>
      <td style="background-color: AccentColor;"></td>
    </tr>
    <tr>
      <td><code>AccentColorText</code></td>
      <td>Texte des contrôles d'interface utilisateur accentués.</td>
      <td style="background-color: AccentColorText;"></td>
    </tr>
    <tr>
      <td><code>ActiveText</code></td>
      <td>Texte des liens actifs.</td>
      <td style="background-color: ActiveText;"></td>
    </tr>
    <tr>
      <td><code>ButtonBorder</code></td>
      <td>Couleur de bordure de base des contrôles.</td>
      <td style="background-color: ButtonBorder;"></td>
    </tr>
    <tr>
      <td><code>ButtonFace</code></td>
      <td>Couleur d'arrière-plan des contrôles.</td>
      <td style="background-color: ButtonFace;"></td>
    </tr>
    <tr>
      <td><code>ButtonText</code></td>
      <td>Couleur du texte des contrôles.</td>
      <td style="background-color: ButtonText;"></td>
    </tr>
    <tr>
      <td><code>Canvas</code></td>
      <td>Arrière-plan du contenu de l'application ou des documents.</td>
      <td style="background-color: Canvas;"></td>
    </tr>
    <tr>
      <td><code>CanvasText</code></td>
      <td>Couleur du texte dans le contenu de l'application ou des documents.</td>
      <td style="background-color: CanvasText;"></td>
    </tr>
    <tr>
      <td><code>Field</code></td>
      <td>Arrière-plan des champs de saisie.</td>
      <td style="background-color: Field;"></td>
    </tr>
    <tr>
      <td><code>FieldText</code></td>
      <td>Texte dans les champs de saisie.</td>
      <td style="background-color: FieldText;"></td>
    </tr>
    <tr>
      <td><code>GrayText</code></td>
      <td>Couleur du texte pour les éléments désactivés (par exemple, un contrôle désactivé).</td>
      <td style="background-color: GrayText;"></td>
    </tr>
    <tr>
      <td><code>Highlight</code></td>
      <td>Arrière-plan des éléments sélectionnés.</td>
      <td style="background-color: Highlight;"></td>
    </tr>
    <tr>
      <td><code>HighlightText</code></td>
      <td>Couleur du texte des éléments sélectionnés.</td>
      <td style="background-color: HighlightText;"></td>
    </tr>
    <tr>
      <td><code>LinkText</code></td>
      <td>Texte des liens non actifs et non visités.</td>
      <td style="background-color: LinkText;"></td>
    </tr>
    <tr>
      <td><code>Mark</code></td>
      <td>Arrière-plan du texte spécialement marqué (par exemple, par l'élément HTML <code>mark</code>).</td>
      <td style="background-color: Mark;"></td>
    </tr>
    <tr>
      <td><code>MarkText</code></td>
      <td>Texte spécialement marqué (par exemple, par l'élément HTML <code>mark</code>).</td>
      <td style="background-color: MarkText;"></td>
    </tr>
    <tr>
      <td><code>SelectedItem</code></td>
      <td>Arrière-plan des éléments sélectionnés, par exemple, une case à cocher sélectionnée.</td>
      <td style="background-color: SelectedItem;"></td>
    </tr>
    <tr>
      <td><code>SelectedItemText</code></td>
      <td>Texte des éléments sélectionnés.</td>
      <td style="background-color: SelectedItemText;"></td>
    </tr>
    <tr>
      <td><code>VisitedText</code></td>
      <td>Texte des liens visités.</td>
      <td style="background-color: VisitedText;"></td>
    </tr>
  </tbody>
</table>

### Mots-clés de couleurs système obsolètes

Les mots-clés suivants étaient définis dans les versions antérieures du module de couleur CSS. Ils sont désormais obsolètes pour une utilisation sur des pages web publiques.

<table>
  <thead>
    <tr>
      <th>Mot-clé</th>
      <th>Description</th>
      <th>Remplacement</th>
      <th>Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ActiveBorder</code></td>
      <td>Bordure de la fenêtre active</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ActiveBorder;"></td>
    </tr>
    <tr>
      <td><code>ActiveCaption</code></td>
      <td>Légende de la fenêtre active. À utiliser avec <code>CaptionText</code> comme couleur de premier plan.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: ActiveCaption;"></td>
    </tr>
    <tr>
      <td><code>AppWorkspace</code></td>
      <td>Couleur d'arrière-plan de l'interface à documents multiples.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: AppWorkspace;"></td>
    </tr>
    <tr>
      <td><code>Background</code></td>
      <td>Arrière-plan du bureau.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Background;"></td>
    </tr>
    <tr>
      <td><code>ButtonHighlight</code></td>
      <td>Couleur de la bordure exposée à la lumière pour les éléments 3D qui paraissent en relief grâce à cette couche de bordure.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonHighlight;"></td>
    </tr>
    <tr>
      <td><code>ButtonShadow</code></td>
      <td>Couleur de la bordure opposée à la lumière pour les éléments 3D qui paraissent en relief grâce à cette couche de bordure.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonShadow;"></td>
    </tr>
    <tr>
      <td><code>CaptionText</code></td>
      <td>Texte dans la légende, la zone de taille et la flèche de la barre de défilement. À utiliser avec la couleur d'arrière-plan <code>ActiveCaption</code>.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: CaptionText;"></td>
    </tr>
    <tr>
      <td><code>InactiveBorder</code></td>
      <td>Bordure de la fenêtre inactive.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: InactiveBorder;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaption</code></td>
      <td>Légende de la fenêtre inactive. À utiliser avec la couleur de premier plan <code>InactiveCaptionText</code>.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InactiveCaption;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaptionText</code></td>
      <td>Couleur du texte dans une légende inactive. À utiliser avec la couleur d'arrière-plan <code>InactiveCaption</code>.</td>
      <td><code>GrayText</code></td>
      <td style="background-color: InactiveCaptionText;"></td>
    </tr>
    <tr>
      <td><code>InfoBackground</code></td>
      <td>Couleur d'arrière-plan des info-bulles. À utiliser avec la couleur de premier plan <code>InfoText</code>.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InfoBackground;"></td>
    </tr>
    <tr>
      <td><code>InfoText</code></td>
      <td>Couleur du texte des info-bulles. À utiliser avec la couleur d'arrière-plan <code>InfoBackground</code>.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: InfoText;"></td>
    </tr>
    <tr>
      <td><code>Menu</code></td>
      <td>Arrière-plan du menu. À utiliser avec la couleur de premier plan <code>MenuText</code> ou <code>-moz-MenuBarText</code>.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Menu;"></td>
    </tr>
    <tr>
      <td><code>MenuText</code></td>
      <td>Texte dans les menus. À utiliser avec la couleur d'arrière-plan <code>Menu</code>.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: MenuText;"></td>
    </tr>
    <tr>
      <td><code>Scrollbar</code></td>
      <td>Arrière-plan des barres de défilement.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Scrollbar;"></td>
    </tr>
    <tr>
      <td><code>ThreeDDarkShadow</code></td>
      <td>Couleur de la bordure la plus sombre (généralement extérieure) des deux, opposée à la lumière, pour les éléments 3D qui paraissent en relief grâce à deux couches concentriques de bordure.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDDarkShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDFace</code></td>
      <td>Couleur de fond de la face des éléments 3D qui paraissent en relief grâce à deux couches concentriques de bordure. À utiliser avec la couleur de premier plan <code>ButtonText</code>.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ThreeDFace;"></td>
    </tr>
    <tr>
      <td><code>ThreeDHighlight</code></td>
      <td>Couleur de la bordure la plus claire (généralement extérieure) exposée à la lumière, pour les éléments 3D qui paraissent en relief grâce à deux couches concentriques de bordure.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDHighlight;"></td>
    </tr>
    <tr>
      <td><code>ThreeDLightShadow</code></td>
      <td>Couleur de la bordure la plus sombre (généralement intérieure) exposée à la lumière, pour les éléments 3D qui paraissent en relief grâce à deux couches concentriques de bordure.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDLightShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDShadow</code></td>
      <td>Couleur de la bordure la plus claire (généralement intérieure) opposée à la lumière, pour les éléments 3D qui paraissent en relief grâce à deux couches concentriques de bordure.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDShadow;"></td>
    </tr>
    <tr>
      <td><code>Window</code></td>
      <td>Arrière-plan de la fenêtre. À utiliser avec la couleur de premier plan <code>WindowText</code>.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Window;"></td>
    </tr>
    <tr>
      <td><code>WindowFrame</code></td>
      <td>Cadre de la fenêtre.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: WindowFrame;"></td>
    </tr>
    <tr>
      <td><code>WindowText</code></td>
      <td>Texte dans les fenêtres. À utiliser avec la couleur d'arrière-plan <code>Window</code>.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: WindowText;"></td>
    </tr>
  </tbody>
</table>

## Exemples

### Utilisation des couleurs système

Dans cet exemple, nous avons un bouton qui obtient normalement son contraste à l'aide de la propriété box-shadow. En mode couleurs forcées, `box-shadow` est forcé à `none`, donc l'exemple utilise la fonctionnalité média `forced-colors` pour s'assurer qu'il y a une bordure de la couleur appropriée (`ButtonBorder` dans ce cas).

#### HTML

```html
<button class="button">Appuyez sur moi&nbsp;!</button>
```

#### CSS

```css
.button {
  border: 0;
  padding: 10px;
  box-shadow:
    -2px -2px 5px gray,
    2px 2px 5px gray;
}

@media (forced-colors: active) {
  .button {
    /* Utilisez une bordure à la place, car box-shadow
    est forcé à 'none' en mode couleurs forcées */
    border: 2px ButtonBorder solid;
  }
}
```

#### Résultat

{{EmbedLiveSample("Utilisation des couleurs système")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("&lt;color&gt;")}}&nbsp;: le type de donnée auquel appartiennent ces mots-clés

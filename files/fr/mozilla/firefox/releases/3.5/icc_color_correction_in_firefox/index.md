---
title: Correction de couleur ICC dans Firefox
slug: Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Bien que la prise en charge de la correction des couleurs a été introduite dans Firefox 3, elle a été désactivée par défaut, ce qui nécessite quelques manipulations dans la fenêtre about:config pour l'activer. Firefox 3.5 corrige les problèmes qui ont conduit à sa désactivation par défaut dans la version précédente, et désormais, les images comportant des balises [International Color Consortium <sup>(angl.)</sup>](https://www.color.org/index.xalter) (ICC) sont, par défaut, corrigées en termes de couleurs.

L'image ci-dessous est divisée en trois sections. Le coin supérieur gauche montre l'image telle qu'elle est affichée par Firefox 2. Le coin supérieur droit montre comment l'image s'affiche dans Firefox 3. La partie inférieure montre l'image telle qu'elle est affichée dans Photoshop.

![Une fleur violette telle qu'elle est affichée par Firefox 2, Firefox 3 et Photoshop.](iccsample.jpg)

Comme vous pouvez le constater, Firefox 3 et Photoshop affichent l'image de manière identique, car les deux prennent en charge le profil de correction des couleurs intégré. Firefox 2 ignore le profil, ce qui entraîne un décalage des couleurs.

## Configurer la correction des couleurs

La correction des couleurs peut être contrôlée en définissant la valeur de la préférence `gfx.color_management.mode`, comme suit&nbsp;:

<table>
  <tbody>
    <tr>
      <td>Valeur</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        Gestion des couleurs désactivée. <strong>(Par défaut dans Firefox 3.)</strong>
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>Gestion complète des couleurs.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Gestion des couleurs appliquée uniquement aux images avec balises.
        <strong>(Par défaut dans Firefox 3.5.)</strong>
      </td>
    </tr>
  </tbody>
</table>

La gestion complète des couleurs signifie que tout ce qui est rendu par Firefox, à l'exception des plugins, voit ses couleurs corrigées.

### Définir un profil de couleur

Vous pouvez également définir un profil de couleur particulier à utiliser pour votre matériel en configurant la valeur de la préférence `gfx.color_management.display_profile` avec le chemin d'accès au profil de couleur souhaité.

Si aucun chemin d'accès n'est défini pour le profil de couleur, Firefox interroge le système d'exploitation et utilise le profil de couleur configuré par celui-ci.

### Définir une intention de rendu par défaut

De plus, vous pouvez choisir de définir la valeur de la préférence `gfx.color_management.rendering_intent` pour définir une intention de rendu par défaut. Par défaut, l'intention définie par les images est ignorée, sauf si vous attribuez la valeur -1 à cette préférence.

Le tableau suivant répertorie les valeurs possibles.

<table>
  <tbody>
    <tr>
      <td>Valeur</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>-1</td>
      <td>
        Utiliser l'intention intégrée. Par défaut, l'intention intégrée sur les images est ignorée.
      </td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        Perceptuel. Indique à Firefox d'afficher l'image de manière à préserver les détails sur toute la gamme tonale de l'image. Utile pour l'affichage général des images dans la plupart des cas, en particulier pour les photographies et autres images.
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        Colorimétrie relative au support. Cela redimensionne le spectre des couleurs de manière à ce que le point blanc du support de rendu (comme l'écran) soit mappé au point blanc du support de référence. C'est particulièrement utile pour les couleurs qui ont été mappées sur un support avec un gamut plus petit que celui du support de référence.
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Saturation. Cela préserve la vivacité des couleurs au détriment de la précision de la teinte. C'est particulièrement utile pour les graphiques et les diagrammes, ainsi que pour d'autres médias dont les couleurs doivent «&nbsp;ressortir&nbsp;» tandis que la duplication précise de la teinte est moins importante.
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        Colorimétrie absolue ICC. Ceci est particulièrement utile pour les couleurs directes et lors de la simulation d'un support sur un autre, car elle n'altère pas les couleurs dans le gamut.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dans Firefox 3.5, les intentions perceptuelle, colorimétrique relative au média, et saturation rendent toutes de la même manière.

### Mises en garde

Le nouveau système de gestion des couleurs QCMS introduit dans Firefox 3.5 ne prend actuellement en charge que les profils de couleurs ICC version 2, et non la version 4. Cela peut entraîner un affichage trop sombre des images. Voir [le bogue 488800 <sup>(angl.)</sup>](https://bugzil.la/488800) et le [test des profils ICC version 4 <sup>(angl.)</sup>](https://www.color.org/version4html.xalter).

## Voir aussi

- [Tellement de couleurs <sup>(angl.)</sup>](https://bholley.wordpress.com/2008/09/12/so-many-colors/) (article de blog)
- [Profils de couleurs dans Firefox 3 <sup>(angl.)</sup>](https://johnresig.com/blog/color-profiles/) (article de blog)
- [Consortium international de la couleur <sup>(angl.)</sup>](https://www.color.org/index.xalter)

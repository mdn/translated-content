---
title: <meta name="viewport">
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

La valeur **`viewport`** pour l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) d'un élément HTML {{HTMLElement("meta")}} donne des indications sur la façon dont la {{Glossary("viewport", "zone d'affichage")}} doit être dimensionnée.

Si elle est spécifiée, vous définissez les comportements liés à la zone d'affichage à l'aide de l'attribut [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content) dans l'élément HTML `<meta>`, sous la forme d'une liste séparée par des virgules d'une ou plusieurs valeurs.

## Notes d'utilisation

Un élément `<meta name="viewport">` possède les attributs supplémentaires suivants&nbsp;:

- [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content)
  - : L'attribut `content` doit être défini et sa valeur détermine divers comportements liés à la zone d'affichage.
    Sa valeur est une liste séparée par des virgules d'une ou plusieurs paires clé-valeur sous la forme `clé=valeur`. Les clés suivantes sont définies&nbsp;:
    - `width`
      - : Contrôle la largeur (minimale) en pixels de la zone d'affichage (voir [largeur de la zone d'affichage et largeur de l'écran](#largeur_de_la_zone_daffichage_et_largeur_de_lécran)). Elle peut être définie sur un nombre entier positif de pixels entre 1 et 10 000 (par exemple `width=600`) ou sur la valeur spéciale `device-width`, qui correspond à la taille physique de l'écran de l'appareil en pixels CSS. Cette valeur définit la valeur de l'unité [`vw`](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_relatives_à_la_zone_daffichage).
    - `height`
      - : Contrôle la hauteur (minimale) en pixels de la zone d'affichage (voir [largeur de la zone d'affichage et largeur de l'écran](#largeur_de_la_zone_daffichage_et_largeur_de_lécran)). Elle peut être définie sur un nombre entier positif de pixels entre 1 et 10 000 (par exemple `height=400`) ou sur la valeur spéciale `device-height`, qui correspond à la taille physique de l'écran de l'appareil en pixels CSS. Cette valeur définit la valeur de l'unité [`vh`](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_relatives_à_la_zone_daffichage).
    - `initial-scale`
      - : Définit le ratio entre la largeur de l'appareil (`device-width` en mode portrait ou `device-height` en mode paysage) et la taille de la zone d'affichage. Elle peut être un nombre compris entre `0.0` et `10.0`.
    - `maximum-scale`
      - : Définit le niveau de zoom maximal. Il doit être supérieur ou égal à `minimum-scale`, sinon le comportement est indéfini. Les paramètres du navigateur peuvent ignorer cette règle, et iOS 10+ l'ignore par défaut. Elle peut être un nombre compris entre `0.0` et `10.0`.
    - `minimum-scale`
      - : Définit le niveau de zoom minimal. Il doit être inférieur ou égal à `maximum-scale`, sinon le comportement est indéfini. Les paramètres du navigateur peuvent ignorer cette règle, et iOS 10+ l'ignore par défaut. Elle peut être un nombre compris entre `0.0` et `10.0`.
    - `user-scalable`
      - : Un booléen indiquant si l'utilisateur·ice peut zoomer la page web. Les paramètres du navigateur peuvent ignorer cette règle, et iOS 10+ l'ignore par défaut. Elle peut être soit `yes`, soit `no`, la valeur par défaut étant `yes`.
        > [!WARNING]
        > Désactiver la possibilité de zoomer en définissant `user-scalable` à `no` empêche les personnes ayant une basse vision de lire et comprendre le contenu de la page. De plus, la WCAG exige un zoom minimal de 2×&nbsp;; la meilleure pratique est de permettre un zoom de 5×. Pour plus d'informations, voir&nbsp;:
        >
        > - [MDN Comprendre la WCAG, explications de la directive 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
        > - [Comprendre le critère de succès 1.4.4 | W3C Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `interactive-widget`
      - : Définit l'effet des widgets d'interface interactifs, comme les claviers virtuels, sur la zone d'affichage de la page. Elle peut prendre les mots-clés `resizes-visual`, `resizes-content` ou `overlays-content`.
        - `resizes-visual`&nbsp;: La {{Glossary("visual viewport", "zone d'affichage visuelle")}} est redimensionnée par le widget interactif. C'est la valeur par défaut.
        - `resizes-content`&nbsp;: La {{Glossary("viewport", "zone d'affichage")}} est redimensionnée par le widget interactif.
        - `overlays-content`&nbsp;: Ni la zone d'affichage ni la zone d'affichage visuelle ne sont redimensionnées par le widget interactif.

        Lorsque la {{Glossary("viewport", "zone d'affichage")}} est redimensionnée, le [bloc englobant initial](/fr/docs/Web/CSS/Guides/Display/Containing_block) est également redimensionné, ce qui affecte la taille calculée des [unités de la zone d'affichage](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_relatives_à_la_zone_daffichage).

    - `viewport-fit`
      - : Définit les portions visibles de la page web. Elle peut prendre comme valeur `auto`, `contain` ou `cover`.
        - `auto`&nbsp;: N'affecte pas la zone d'affichage initiale, et l'ensemble de la page web est visible.
        - `contain`&nbsp;: La zone d'affichage est ajustée pour s'adapter au plus grand rectangle inscrit dans l'écran.
        - `cover`&nbsp;: La zone d'affichage est ajustée pour remplir l'écran de l'appareil. Il est fortement recommandé d'utiliser les variables [`safe-area-inset-*`](/fr/docs/Web/CSS/Reference/Values/env) pour s'assurer que le contenu important ne se retrouve pas hors de l'affichage.

### Largeur de la zone d'affichage et largeur de l'écran

La {{Glossary("viewport", "zone d'affichage")}} du navigateur est la zone de la fenêtre dans laquelle le contenu web est visible. La taille de la zone d'affichage doit être calculée avant que le contenu de la page puisse être mis en page&nbsp;: la page peut déborder de la zone d'affichage, auquel cas le navigateur fournit des barres de défilement pour permettre à l'utilisateur·ice de parcourir et d'accéder à tout le contenu, mais la taille de la zone d'affichage sert de référence pour l'espace dans lequel le contenu doit s'adapter, en particulier horizontalement.

Certains appareils mobiles et autres écrans étroits affichent les pages dans une fenêtre ou une zone d'affichage virtuelle plus large que l'écran, puis réduisent le résultat pour l'adapter à la taille de l'écran. Les utilisateur·ice·s peuvent alors zoomer et se déplacer pour examiner de plus près différentes parties de la page. Par exemple, si un écran mobile a une largeur de 640px, les pages peuvent être affichées dans une zone d'affichage virtuelle de 980px, puis réduites pour s'adapter à l'espace de 640px. Cela est fait parce que toutes les pages ne sont pas optimisées pour le mobile et peuvent mal s'afficher (ou au moins sembler inadaptées) lorsqu'elles sont rendues avec une petite largeur de zone d'affichage. Cette zone d'affichage virtuelle permet d'améliorer l'apparence générale des sites non optimisés pour le mobile sur les appareils à écran étroit. Cependant, ce mécanisme n'est pas idéal pour les pages optimisées pour les écrans étroits à l'aide de [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries)&nbsp;: si la zone d'affichage virtuelle est de 980px, les requêtes média qui s'activent à 640px ou 480px ou moins ne seront jamais utilisées, ce qui limite l'efficacité de ces techniques de conception réactive. L'élément `<meta>` viewport permet d'atténuer ce problème de zone d'affichage virtuelle sur les appareils à écran étroit.

Le paramètre le plus courant est le suivant, qui définit la zone d'affichage pour qu'elle corresponde à la largeur de l'appareil et affiche le contenu à un zoom de 100%&nbsp;:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Les sites peuvent définir leur zone d'affichage sur une taille spécifique. Par exemple, la définition `"width=320, initial-scale=1"` peut être utilisée pour s'adapter précisément à un petit écran de téléphone en mode portrait. Cela peut poser problème lorsque le navigateur affiche une page à une taille plus grande. Pour résoudre ce problème, les navigateurs élargiront la largeur de la zone d'affichage si nécessaire pour remplir l'écran à l'échelle demandée. Cela est particulièrement utile sur les appareils à grand écran.

Pour les pages qui définissent une échelle initiale ou maximale, cela signifie que la propriété `width` correspond en réalité à une largeur minimale de zone d'affichage. Par exemple, si votre mise en page nécessite au moins 500 pixels de largeur, vous pouvez utiliser le balisage suivant. Lorsque l'écran fait plus de 500 pixels de large, le navigateur élargira la zone d'affichage (plutôt que de zoomer) pour remplir l'écran&nbsp;:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

### Densité d'écran

Les résolutions d'écran ont tellement augmenté que les pixels individuels sont devenus indiscernables à l'œil nu. Par exemple, les smartphones ont souvent de petits écrans avec des résolutions supérieures à 1920×1080 pixels (≈400dpi). Pour cette raison, de nombreux navigateurs peuvent afficher leurs pages dans une taille physique plus petite en traduisant plusieurs pixels matériels pour chaque «&nbsp;pixel&nbsp;» CSS. Initialement, cela a posé des problèmes d'utilisabilité et de lisibilité sur de nombreux sites optimisés pour le tactile.

Sur les écrans à haute densité de pixels (<i lang="en">high dpi</i>), les pages avec `initial-scale=1` seront effectivement agrandies par les navigateurs. Le texte sera net et lisse, mais les images bitmap peuvent ne pas profiter de toute la résolution de l'écran. Pour obtenir des images plus nettes sur ces écrans, les développeur·euse·s web peuvent concevoir des images — ou des mises en page entières — à une échelle supérieure à leur taille finale, puis les réduire à l'aide du CSS ou des propriétés de la zone d'affichage (<i lang="en">viewport</i> en anglais).

Le ratio de pixels par défaut dépend de la densité d'affichage. Sur un écran avec une densité inférieure à 200dpi, le ratio est de 1,0. Sur les écrans avec une densité comprise entre 200 et 300dpi, le ratio est de 1,5. Pour les écrans avec une densité supérieure à 300dpi, le ratio est l'entier inférieur de (_densité_/150dpi). Notez que ce ratio par défaut n'est valable que lorsque l'échelle de la zone d'affichage est égale à 1. Sinon, la relation entre les pixels CSS et les {{Glossary("device pixel", "pixels physiques")}} dépend du niveau de zoom actuel.

## Exemples

### Utiliser une taille de zone d'affichage meta

L'exemple suivant indique au navigateur que la page doit être affichée à la largeur de l'appareil&nbsp;:

```html
<meta name="viewport" content="width=device-width" />
```

### Utiliser une requête média avec une meta viewport

La valeur de `content` suivante utilise plusieurs mots-clés qui suggèrent au navigateur d'utiliser le mode plein écran, ainsi que `viewport-fit`, ce qui permet d'éviter les découpes d'affichage comme les encoches des appareils mobiles&nbsp;:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

### Effet des widgets d'interface interactifs

Les widgets d'interface interactifs du navigateur peuvent influencer la taille des zones d'affichage de la page. Le widget le plus courant est le clavier virtuel. Pour contrôler le comportement de redimensionnement utilisé par le navigateur, définissez la propriété `interactive-widget`.

Par défaut, le clavier virtuel ne redimensionne que la zone d'affichage visuelle, ce qui n'affecte pas la mise en page de la page. Vous pouvez adapter la mise en page à la présence du clavier virtuel en définissant la propriété `interactive-widget` à `resizes-content`&nbsp;:

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'entrée de glossaire de {{Glossary("viewport", "zone d'affichage")}}
- [Préparez-vous aux changements de comportement du redimensionnement de la zone d'affichage à venir dans Chrome sur Android <sup>(angl.)</sup>](https://developer.chrome.com/blog/viewport-resize-behavior/) sur developer.chrome.com
- [Zones d'affichage mobiles pour des expériences réactives <sup>(angl.)</sup>](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports) sur Adobe Experience League

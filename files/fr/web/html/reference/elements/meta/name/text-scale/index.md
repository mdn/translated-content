---
title: Valeur d'attribut HTML `<meta name="text-scale">`
short-title: text-scale
slug: Web/HTML/Reference/Elements/meta/name/text-scale
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{SeeCompatTable}}

La valeur **`text-scale`** pour attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta#name) de l'élément HTML {{HTMLElement("meta")}} permet de configurer la page de manière à ce que la {{CSSxRef("font-size")}} initiale de l'élément racine {{HTMLElement("html")}} soit proportionnelle aux paramètres d'échelle du texte définis au niveau du système d'exploitation et du navigateur.

> [!WARNING]
> Si vous incluez `<meta name="text-scale" content="scale" />` sur votre site Web pour activer ce comportement de mise à l'échelle du texte, vous devez tester qu'il prend en charge les tailles de texte jusqu'au facteur de mise à l'échelle maximale pour vos plateformes cibles. Cela varie généralement de 200% à plus de 300% sur les plateformes mobiles, certaines fonctionnalités d'accessibilité permettant même une mise à l'échelle du texte encore plus grande. Assurez-vous que votre site Web ne semble pas cassé pour les utilisateur·ice·s définissant des préférences de taille de police du système d'exploitation plus grandes ou plus petites.

## Notes d'utilisation

Un élément `<meta name="text-scale">` possède les attributs supplémentaires suivants&nbsp;:

- [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content)
  - : Définit le comportement d'activation de la mise à l'échelle de la {{CSSxRef("font-size")}}.
    Sa valeur est un mot-clé, qui peut être l'un des suivants&nbsp;:
    - `scale`
      - : Active la mise à l'échelle de la {{CSSxRef("font-size")}} de l'élément racine {{HTMLElement("html")}} en fonction des paramètres de mise à l'échelle du texte au niveau du système d'exploitation et du navigateur. Cela désactive également les mécanismes et euristiques existants basés sur le navigateur (par exemple, le redimensionnement automatique du texte sur mobile).
    - `legacy`
      - : Valeur par défaut. La page n'est pas configurée pour que la propriété `font-size` de l'élément racine s'adapte proportionnellement aux paramètres d'échelle du texte au niveau du système d'exploitation et du navigateur. Cela revient à ne pas inclure du tout l'élément `<meta>` (les préférences de police au niveau du système d'exploitation sont ignorées).

## Description

L'élément `<meta name="text-scale" content="scale" />` peut être inclus dans le {{HTMLElement("head")}} d'un document pour indiquer au navigateur que la page est dimensionnée de manière à bien s'adapter aux différentes préférences de taille de police définies par l'utilisateur·ice&nbsp;; il désactive également les mécanismes et euristiques existants basés sur le navigateur.

Plus précisément, il définit la valeur de la `font-size` initiale de l'élément racine {{HTMLElement("html")}} pour qu'elle soit mise à l'échelle en fonction des paramètres de taille de police définis par l'utilisateur·ice au niveau du système d'exploitation et du navigateur. La valeur {{CSSxRef("initial")}} de la {{CSSxRef("font-size")}} de l'élément racine est `medium`, ce qui définit la valeur de l'unité [`rem`](/fr/docs/Web/CSS/Reference/Values/length#rem). À condition de définir ou de laisser la `font-size` de l'élément racine par défaut sur une unité [locale ou relative à la police racine `<length>`](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#longueurs_relatives_à_la_police_locale), tout mot-clé ultérieur (comme `medium`) ou longueur relative à la police (comme `em` et `rem`) est mis à l'échelle en fonction des paramètres de taille de police du système d'exploitation ou du navigateur.

Par exemple, avec `<meta name="text-scale" content="scale">` inclus sur la page, la règle suivante&nbsp;:

```css
p {
  font-size: medium;
}
```

Cela entraîne tous les éléments {{HTMLElement("p")}} à recevoir une taille de police mise à l'échelle. Vous pouvez également définir `font-size` sur `initial` pour obtenir le même effet.

Sur les plateformes mobiles, ce n'est pas le cas par défaut. `<meta name="text-scale" content="scale" />` active cette mise à l'échelle. Sur les plateformes de bureau, l'effet est que la variable d'environnement [`env(preferred-text-scale)`](/fr/docs/Web/CSS/Reference/Values/env#preferred-text-scale) reflète le multiplicateur correspondant aux paramètres de taille de police du navigateur, mais en dehors de cela, elle n'a aucun avantage discernable.

### Résumé de l'utilisation

Pour résumer, définissez `scale` uniquement si votre application est conçue pour prendre en charge la mise à l'échelle des polices. L'utilisation recommandée est la suivante&nbsp;:

1. Incluez `<meta name="text-scale" content="scale" />` dans le `<head>` de votre page.
2. Ne remplacez pas la `font-size` initiale de {{CSSxRef(":root")}} par une valeur de [longueur absolue](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_absolues) (comme `16px`).
3. Utilisez uniquement des [unités relatives à la police](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_relatives_basées_sur_la_police) telles que `em`/`rem` ou des mots-clés tels que `small`, `x-large`, etc. pour dimensionner le contenu.

### `<meta name="text-scale">` contre `env(preferred-text-scale)`

L'utilisation de `<meta name="text-scale" />` pour dimensionner les éléments en fonction des paramètres de mise à l'échelle du texte du système d'exploitation est recommandée par rapport à la variable d'environnement [`env(preferred-text-scale)`](/fr/docs/Web/CSS/Reference/Values/env#preferred-text-scale). Ils ont des effets similaires sur les appareils mobiles, mais `<meta>` offre également des améliorations pour les navigateurs de bureau (et est plus facile à utiliser).

Évitez d'utiliser les deux fonctionnalités ensemble, car la mise à l'échelle du texte peut être appliquée deux fois, rendant les petites dimensions relatives à la police plus petites et les grandes dimensions relatives à la police plus grandes.

## Exemples

### Démonstration de la mise à l'échelle du texte avec la meta-donnée `viewport`

Cet exemple démontre l'effet de `<meta name="text-scale" content="scale">`.

#### HTML

Nous incluons l'élément `<meta name="text-scale" content="scale">` dans le `<head>` du document, ainsi qu'un élément [`<meta name="viewport">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport) pour garantir un affichage correct sur les appareils mobiles. Nous incluons également du contenu textuel à l'intérieur des éléments {{HTMLElement("p")}} avec différents attributs `class` définis sur eux pour nous permettre de les cibler avec différents styles.

```html live-sample___text-scale
<!doctype html>
<html lang="fr">
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p class="text-scale">
      Cette taille de police respecte les préférences de l'utilisateur·ice, que
      ces préférences soient définies au niveau du système d'exploitation ou du
      navigateur.
    </p>
    <p class="fixed">
      Cette taille de police ne respecte PAS les préférences de
      l'utilisateur·ice, même avec text-scale activé.
      <span class="text-scale">
        Mais cette taille de police le fait&nbsp;!
      </span>
    </p>
  </body>
</html>
```

```html hidden live-sample___no-text-scale
<!doctype html>
<html lang="fr">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p class="text-scale">
      Cette taille de police ne respecte PAS les préférences de
      l'utilisateur·ice, que ces préférences soient définies au niveau du
      système d'exploitation ou du navigateur.
    </p>
    <p class="fixed">
      Cette taille de police ne respecte PAS les préférences de
      l'utilisateur·ice, même avec text-scale activé.
      <span class="text-scale">
        Mais cette taille de police le fait&nbsp;!
      </span>
    </p>
  </body>
</html>
```

#### CSS

Les conteneurs de texte avec une `class` de `text-scale` se voient attribuer une {{CSSxRef("font-size")}} de `1rem`, ce qui signifie que dans les navigateurs qui prennent en charge `<meta name="text-scale" content="scale">`, ce texte s'adapte aux paramètres de police du système d'exploitation ou du navigateur. Les conteneurs de texte avec une `class` de `fixed` se voient attribuer une `font-size` de `20px`, ce qui signifie que ce texte reste à une taille fixe lorsque les paramètres de police du système d'exploitation ou du navigateur sont modifiés.

```css live-sample___text-scale live-sample___no-text-scale
.text-scale {
  font-size: 1rem;
}

.fixed {
  font-size: 20px;
}
```

#### Résultat

Cette version inclut l'élément `<meta name="text-scale">`&nbsp;:

{{EmbedLiveSample("text-scale", "100%", 200)}}

Cette version n'inclut PAS l'élément `<meta name="text-scale">`&nbsp;:

{{EmbedLiveSample("no-text-scale", "100%", 200)}}

Testez ces exemples dans un navigateur mobile. Modifiez la taille de police préférée dans les paramètres d'affichage ou d'accessibilité de l'appareil mobile. Remarquez comment, dans le premier exemple, lorsque `<meta name="text-scale">` est inclus, les lignes de texte en haut et en bas s'adaptent proportionnellement aux paramètres du système d'exploitation, tandis que la ligne du milieu, avec la `font-size` définie en unités absolues, ne change pas de taille. Sans l'élément `<meta name="text-scale">`, le texte ne s'adapte pas proportionnellement aux paramètres du système d'exploitation.

Pour faciliter les tests, vous pouvez ouvrir les deux versions en plein écran dans un onglet séparé en utilisant les liens ci-dessous&nbsp;:

- {{LiveSampleLink("text-scale", "Exemple avec <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>")}}
- {{LiveSampleLink("no-text-scale", "Exemple sans <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>")}}

### Une mise en page réactive à l'échelle du texte

Cet exemple montre qu'avec `<meta name="text-scale">` appliqué à une page, des tailles de police relatives peuvent être utilisées à l'intérieur des requêtes {{CSSxRef("@media")}} pour permettre aux navigateurs mobiles d'ajuster automatiquement les points de rupture lorsque la taille du texte du système d'exploitation est modifiée.

#### HTML

Comme dans l'exemple précédent, notre balisage inclut à nouveau les éléments `<meta name="text-scale">` et `<meta name="viewport">` dans le `<head>`. Dans cette démonstration, le contenu du corps contient deux éléments — {{HTMLElement("main")}} et {{HTMLElement("aside")}} — pour représenter une colonne de contenu principal et une barre latérale.

```html live-sample___text-scale-layout
<!doctype html>
<html>
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <main>Contenu principal</main>
    <aside>Contenu de la barre latérale</aside>
  </body>
</html>
```

#### CSS

Par défaut, le contenu principal et la barre latérale sont disposés l'un en dessous de l'autre. Nous incluons une requête {{CSSxRef("@media")}} qui dispose les éléments côte à côte en utilisant [la grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) lorsque la largeur de la fenêtre devient supérieure à `35rem`.

```css hidden live-sample___text-scale-layout
body {
  margin: 0;
}

main,
aside {
  background-color: silver;
  padding: 24px;
  font-size: 1.5rem;
}
```

```css live-sample___text-scale-layout
@media (width > 35rem) {
  body {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 18.75rem;
  }
}
```

#### Résultat

{{EmbedLiveSample("text-scale-layout", "100%", 200)}}

Testez ces exemples dans un navigateur mobile. Vous pouvez voir que, lorsque la taille de police du système d'exploitation est augmentée, la taille du point de rupture augmente proportionnellement. À des tailles de police plus grandes, le contenu principal et la barre latérale commencent à apparaître l'un au-dessus de l'autre alors qu'auparavant, ils apparaissaient côte à côte. Vous devez regarder en orientation paysage pour voir l'effet.

Vous pouvez ouvrir la démonstration dans un onglet séparé en utilisant le lien ci-dessous pour faciliter les tests&nbsp;:

{{LiveSampleLink("text-scale-layout", "Exemple de mise en page réactive")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`env(preferred-text-scale)`](/fr/docs/Web/CSS/Reference/Values/env#preferred-text-scale)
- [Prise en charge de [meta text-scale] pour WebView <sup>(angl.)</sup>](https://chromium.googlesource.com/chromium/src/+/b29d63222d10f4c7e620d057578d737969eb7ae3) sur chromium.googlesource.com (2026)

---
title: prefers-color-scheme
slug: Web/CSS/Reference/At-rules/@media/prefers-color-scheme
original_slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`prefers-color-scheme`** permet de détecter si un·e utilisateur·ice a demandé un thème clair ou sombre.
L'utilisateur·ice indique sa préférence via un réglage du système d'exploitation (par exemple, mode clair ou sombre) ou via un paramètre de l'agent utilisateur·ice.

## Éléments embarqués

Pour les SVG et les iframes, `prefers-color-scheme` permet de définir un style CSS pour le SVG ou l'iframe en fonction du [`color-scheme`](/fr/docs/Web/CSS/Reference/Properties/color-scheme) de l'élément parent dans la page web.
Les SVG doivent être utilisés en tant qu'éléments embarqués (c'est-à-dire `<img src="circle.svg" alt="circle" />`) et non [intégrés en HTML](/fr/docs/Web/SVG/Guides/SVG_in_HTML#basic_example).
Un exemple d'utilisation de `prefers-color-scheme` dans des SVG se trouve dans la section [Héritage du schéma de couleurs dans les éléments embarqués](#héritage_du_schéma_de_couleurs_dans_les_éléments_embarqués).

L'utilisation de `prefers-color-scheme` est autorisée dans les éléments `<svg>` et `<iframe>` avec [cross-origin](/fr/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access). Les éléments cross-origin sont des éléments récupérés depuis un autre hôte que la page qui les référence.
Pour en savoir plus sur les SVG, consultez la [documentation SVG](/fr/docs/Web/SVG) et pour plus d'informations sur les iframes, consultez la [documentation iframe](/fr/docs/Web/HTML/Reference/Elements/iframe).

## Syntaxe

- `light`
  - : Indique que l'utilisateur·ice a exprimé le choix d'utiliser une interface à dominante claire, ou qu'il·elle n'a pas exprimé de préférence.
- `dark`
  - : Indique que l'utilisateur·ice a exprimé le choix d'utiliser une interface à dominante sombre.

## Exemples

### Détecter un thème sombre ou clair

L'usage courant consiste à utiliser un thème clair par défaut, puis à utiliser `prefers-color-scheme: dark` pour appliquer des couleurs plus sombres. Il est aussi possible de faire l'inverse.

Cet exemple montre les deux options&nbsp;: le thème A utilise des couleurs claires par défaut, mais peut être remplacé par des couleurs sombres. Le thème B utilise des couleurs sombres par défaut, mais peut être remplacé par des couleurs claires. Au final, si le navigateur prend en charge `prefers-color-scheme`, les deux thèmes seront soit clairs, soit sombres.

#### HTML

```html
<div class="box theme-a">Thème A (initial)</div>
<div class="box theme-a adaptive">
  Thème A (change si mode sombre à favoriser)
</div>
<br />

<div class="box theme-b">Thème B (initial)</div>
<div class="box theme-b adaptive">
  Thème B (change si mode clair à favoriser)
</div>
```

#### CSS

```css hidden
div.box {
  display: inline-block;
  padding: 1em;
  margin: 6px;
  outline: 2px solid black;
  width: 12em;
  height: 2em;
  vertical-align: middle;
}
```

Le thème A (marron) utilise un schéma de couleurs clair par défaut, mais bascule vers un schéma sombre selon la requête média&nbsp;:

```css
.theme-a {
  background: #ddccaa;
  color: #773311;
}
@media (prefers-color-scheme: dark) {
  .theme-a.adaptive {
    background: #775533;
    color: #ddccbb;
    outline: 5px dashed black;
  }
}
```

Le thème B (bleu) utilise un schéma de couleurs sombre par défaut, mais bascule vers un schéma clair selon la requête média&nbsp;:

```css
.theme-b {
  background: #444477;
  color: #bbbbdd;
}
@media (prefers-color-scheme: light) {
  .theme-b.adaptive {
    background: #bbccdd;
    color: #333344;
    outline: 5px dotted black;
  }
}
```

#### Résultat

Les boîtes de gauche montrent le thème A et le thème B tels qu'ils apparaîtraient sans la requête média `prefers-color-scheme`. Les boîtes de droite montrent les mêmes thèmes, mais l'un d'eux sera modifié en version sombre ou claire selon le schéma de couleurs actif de l'utilisateur·ice. Le contour d'une boîte sera en pointillés ou en tirets si le changement dépend de votre navigateur ou du système d'exploitation.

{{EmbedLiveSample("détecter_un_thème_sombre_ou_clair", "100%", "200px")}}

### Héritage du schéma de couleurs dans les éléments embarqués

L'exemple suivant montre comment utiliser la caractéristique média `prefers-color-scheme` dans un élément embarqué pour hériter d'un schéma de couleurs depuis un élément parent.
Un script est utilisé pour définir la source des éléments `<img>` et leurs attributs `alt`. Normalement, cela se ferait en HTML avec `<img src="circle.svg" alt="circle" />`.

Vous devriez voir trois cercles, dont un dessiné dans une couleur différente.
Le premier cercle hérite du `color-scheme` du système d'exploitation et peut être modifié via le sélecteur de thème du système.

Le deuxième et le troisième cercle héritent du `color-scheme` de l'élément parent&nbsp;; la requête `@media` permet de définir les styles du contenu SVG en fonction du `color-scheme` de l'élément parent.
Dans ce cas, l'élément parent avec la propriété CSS `color-scheme` est un `<div>`.

```html
<div>
  <img />
</div>
<div class="light">
  <img />
</div>
<div class="dark">
  <img />
</div>
```

```css
.light {
  color-scheme: light;
}

.dark {
  color-scheme: dark;
}
```

```js
// Intègre un SVG pour chaque élément <img>
for (let img of document.querySelectorAll("img")) {
  img.alt = "cercle";
  img.src = `data:image/svg+xml;base64,${window.btoa(`
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <style>
        :root { color: blue }
        @media (prefers-color-scheme: dark) {
          :root { color: purple }
        }
      </style>
      <circle fill="currentColor" cx="16" cy="16" r="16"/>
    </svg>
  `)}`;
}
```

{{EmbedLiveSample("héritage_du_schéma_de_couleurs_dans_les_éléments_embarqués")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{cssxref("color-scheme")}}
- [L'élément `<meta name="color-scheme">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
- L'en-tête HTTP {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} [Indication client de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#indication_client_de_lagent_utilisateur)
- [Simuler prefers-color-scheme dans Firefox <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Vidéo&nbsp;: coder un mode sombre pour votre site <sup>(angl.)</sup>](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Adapter votre produit ou site au mode sombre <sup>(angl.)</sup>](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- [Changer le schéma de couleurs dans Windows <sup>(angl.)</sup>](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS <sup>(angl.)</sup>](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android <sup>(angl.)</sup>](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019) ou [autres plateformes <sup>(angl.)</sup>](https://support.mozilla.org/en-US/questions/1271928).

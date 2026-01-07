---
title: <meta name="theme-color">
short-title: theme-color
slug: Web/HTML/Reference/Elements/meta/name/theme-color
original_slug: Web/HTML/Element/meta/name/theme-color
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

La valeur de **`theme-color`** comme attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta#attr-name) de l'élément HTML {{HTMLElement("meta")}}, indique une suggestion de couleur que les agents utilisateur devraient utiliser pour personnaliser l'affichage de la page ou l'interface utilisateur environnante. Si elle est utilisée, l'attribut [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content) devra avoir une valeur CSS de type {{CSSxRef("&lt;color&gt;")}}.

Par exemple, pour indiquer qu'un document doit utiliser `cornflowerblue` comme couleur de thème, définissez la balise `<meta>` ainsi&nbsp;:

```html
<meta name="theme-color" content="cornflowerblue" />
```

Pour définir le média auquel la métadonnée de couleur de thème s'applique, ajoutez l'attribut [`media`](/fr/docs/Web/HTML/Reference/Elements/meta#media) avec une liste de requêtes média valide (voir l'[exemple de requête média pour `theme-color`](#utilisation_dune_requête_média_avec_theme-color)).

## Notes d'utilisation

Un élément `<meta name="theme-color">` possède les attributs supplémentaires suivants&nbsp;:

- [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content)
  - : Un élément `<meta>` avec `name=theme-color` doit avoir un attribut `content` qui définit la couleur de thème.
    La valeur de l'attribut `content` est la suivante&nbsp;:
    - valeur {{CSSxRef("&lt;color&gt;")}}
      - : Une valeur de couleur valide, comme un hexadécimal, RGB, nom de couleur, etc.
- `media` {{Optional_Inline}}
  - : Tout type ou requête média valide.
    Si fourni, les options pour la couleur de thème du document définies dans l'attribut `content` sont suggérées au navigateur lorsque la requête média correspond.

## Exemple

### Définir une valeur de couleur

Considérez le code suivant qui utilise `<meta>` pour définir une couleur de thème&nbsp;:

```html
<meta name="theme-color" content="#4285f4" />
```

L'image qui suit illustre l'effet de l'élément {{HTMLElement("meta")}} avec `theme-color` pour un document affiché dans Chrome sur Android.

![Image illustrant l'effet de `theme-color`](theme-color.png)

_Crédits image&nbsp;: [Couleurs des icônes et du navigateur <sup>(angl.)</sup>](https://web.dev/icons-and-browser-colors), créée et partagée par Google et utilisée selon la [licence Creative Commons 4.0 avec attribution <sup>(angl.)</sup>](https://creativecommons.org/licenses/by/4.0/)._

### Utilisation d'une requête média avec `theme-color`

Il est possible de fournir un type de média ou une requête média avec l'attribut [`media`](/fr/docs/Web/HTML/Reference/Elements/meta#attr-media) afin que la couleur soit utilisée pour une condition donnée.
Par exemple&nbsp;:

```html
<meta
  name="theme-color"
  content="cornflowerblue"
  media="(prefers-color-scheme: light)" />
<meta
  name="theme-color"
  content="dimgray"
  media="(prefers-color-scheme: dark)" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La valeur [`color-scheme`](/fr/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) de l'attribut `name` de `<meta>`
- La propriété CSS {{CSSxRef("color-scheme")}}
- La requête média [`prefers-color-scheme`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)

---
title: Window.open()
slug: Web/API/Window/open
---

{{APIRef}}

La méthode **`open()`**, rattachée à l'interface [`Window`](/fr/docs/Web/API/Window), charge une ressource indiquée dans un contexte de navigation (onglet, fenêtre ou [`<iframe>`](/fr/docs/Web/HTML/Element/iframe)) nouveau ou existant, avec un nom donné.

## Syntaxe

```js
open();
open(url);
open(url, target);
open(url, target, windowFeatures);
```

### Paramètres

- `url` {{optional_inline}}

  - : Une chaîne de caractères indiquant l'URL ou le chemin de la ressource à charger. S'il s'agit d'une chaîne de caractères vide (`""`) ou que ce paramètre est absent, une page blanche est chargée dans le contexte de navigation ciblé.

- `target` {{optional_inline}}

  - : Une chaîne de caractères sans espace qui indique le nom ([`Window.name`](/fr/docs/Web/API/Window/name)) du contexte de navigation dans lequel la ressource est chargée. Si le nom ne correspond pas à un contexte déjà existant, un nouveau contexte est créé avec ce nom. [Les mots-clés spécifiques pour `target`](/fr/docs/Web/HTML/Element/a#attr-target), `_self`, `_blank`, `_parent`, et `_top`, peuvent également être utilisés.

    Le nom pourra être utilisé comme valeur pour l'attribut `target` d'un élément [`<a>`](/fr/docs/Web/HTML/Element/a#attr-target) ou [`<form>`](/fr/docs/Web/HTML/Element/Form#attr-target).

- `windowFeatures` {{optional_inline}}

  - : Une chaîne de caractères contenant une liste de fonctionnalités de fenêtre, séparées par des virgules, de la forme `nom=valeur`, ou pour les fonctionnalités booléennes `nom` uniquement. Ces fonctionnalités incluent des options comme la taille et le positionnement par défaut de la fenêtre, s'il faut ouvrir une fenêtre popup minimale, etc. Les options suivantes sont prises en charge&nbsp;:

    - `popup`

      - : Si cette fonctionnalité est activée, il est demandé au navigateur d'ouvrir la fenêtre sous forme d'une popup minimale. Les fonctionnalités offertes par l'interface utilisateur du navigateur seront choisies par ce dernier (on y trouve généralement seulement la barre d'adresse).

        Si `popup` n'est pas activée et qu'il n'y a pas d'autres fonctionnalités déclarées avec ce paramètre, le nouveau contexte de navigation sera un onglet.

        > **Note :** Indiquer n'importe quelle fonctionnalité avec `windowFeatures`, en dehors de `noopener` ou `noreferrer`, aura pour effet de demander l'ouverture d'une popup.

        Pour activer cette fonctionnalité, on indiquera simplement le nom `popup` sans valeur ou avec les valeurs `yes`, `1`, ou `true`.

        Par exemple&nbsp;: `popup=yes`, `popup=1`, `popup=true`, et `popup` produiront le même résultat.

        > **Note :** [La valeur `true` a été introduite en mars 2022](https://github.com/whatwg/html/pull/7425). Pour une meilleure compatibilité avec les anciens navigateurs, on utilisera une des autres valeurs.

    - `width` ou `innerWidth`

      - : Indique la largeur de la zone de contenu, incluant les barres de défilement. La valeur minimale requise est 100.

    - `height` ou `innerHeight`

      - : Indique la hauteur de la zone de contenu, incluant les barres de défilement. La valeur minimale requise est 100.

    - `left` ou `screenX`

      - : Indique la distance, exprimée en pixels, depuis le bord gauche de la zone de travail définie par le système d'exploitation, à laquelle la fenêtre sera ouverte.

    - `top` ou `screenY`

      - : Indique la distance, exprimée en pixels, depuis le bord haut de la zone de travail définie par le système d'exploitation, à laquelle la fenêtre sera ouverte.

    - `noopener`

      - : Si cette fonctionnalité est utilisée, la nouvelle fenêtre n'aura pas accès à la fenêtre d'origine avec [`Window.opener`](/fr/docs/Web/API/Window/opener) (qui renverra alors `null`).

        Lorsque `noopener` est utilisé, les noms de cibles qui ne sont pas vides et qui ne sont pas `_top`, `_self`, et `_parent`, sont traités comme `_blank` lorsqu'il s'agit de décider s'il faut ouvrir un nouveau contexte de navigation.

    - `noreferrer`
      - : Si cette fonctionnalité est utilisée, le navigateur ne fournira pas d'en-tête [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) et fixera d'office `noopener` à `true`. Voir [`rel="noreferrer"`](/fr/docs/Web/HTML/Link_types#noreferrer) pour plus d'informations.

### Valeur de retour

Un objet [WindowProxy](/fr/docs/Glossary/WindowProxy). La référence renvoyée peut être utilisée afin d'accéder aux propriétés et méthodes de la nouvelle fenêtre tant que les prérequis concernant [la règle de même origine](/fr/docs/Web/Security/Same-origin_policy) sont respectés.

## Description

La méthode `open()` de l'interface [`Window`](/fr/docs/Web/API/Window) prend comme paramètre une URL et charge la ressource correspondante dans un onglet ou une fenêtre (nouveau ou existant). Le paramètre `target` détermine la fenêtre ou l'onglet dans lequel charger la ressource et le paramètre `windowFeatures` peut être utilisé afin de contrôler la taille et la position de la nouvelle fenêtre, ou pour ouvrir la fenêtre comme une popup, dotée d'une interface utilisateur minimale.

On notera que les URL distantes ne sont pas chargées immédiatement. Lorsque `window.open()` fournit sa valeur de retour, la nouvelle fenêtre contiendra encore `about:blank`. La récupération effective de la page démarre après que le bloc du script courant a fini son exécution. La création de la fenêtre et le chargement de la ressource référencée sont réalisés de façon asynchrone.

## Exemples

L'exemple qui suit illustre comment exploiter la fonctionnalité `popup`.

```js
let windowObjectReference;
let windowFeatures = "popup";

function openRequestedPopup() {
  windowObjectReference = window.open(
    "https://www.mozilla.org/",
    "mozillaWindow",
    windowFeatures,
  );
}
```

On peut également contrôler la taille et la position de la nouvelle fenêtre.

```js
let windowObjectReference;
let windowFeatures = "left=100,top=100,width=320,height=320";

function openRequestedPopup() {
  windowObjectReference = window.open(
    "https://www.mozilla.org/",
    "mozillaWindow",
    windowFeatures,
  );
}
```

On peut aussi ouvrir un nouvel _onglet_ sans utiliser les fonctionnalités de fenêtre.

```js
let windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open("https://www.mozilla.org/", "mozillaTab");
}
```

## Bonnes pratiques

```html
<script type="text/javascript">
  var windowObjectReference = null; // variable globale
  function openMozillaPopup() {
    if (windowObjectReference == null || windowObjectReference.closed) {
      /* si le pointeur vers l'objet window n'existe pas
     ou s'il existe mais que la fenêtre a été fermée */
      windowObjectReference = window.open(
        "https://www.mozilla.org/",
        "MozillaWindowName",
        "popup",
      );
      /* on le crée. La nouvelle fenêtre sera créée et affichée
       par-dessus les éventuelles autres fenêtres. */
    } else {
      windowObjectReference.focus();
      /* sinon la référence existe et la fenêtre n'est pas fermée
       on peut donc l'amener devant avec la méthode focus()
       sans avoir à recréer la fenêtre ou à recharger la 
       ressource référencée. */
    }
  }
</script>
(...)
<p>
  <a
    href="https://www.mozilla.org/"
    target="MozillaWindowName"
    onclick="openMozillaPopup(); return false;"
    title="Ce lien créera une nouvelle fenêtre ou réutilisera une fenêtre déjà ouverte"
    >Site Mozilla</a
  >
</p>
```

Le fragment de code qui précède corrige certains problèmes relatifs aux liens ouvrants des fenêtres secondaires. L'instruction `return false;` présente dans l'attribut `onclick` permet d'annuler l'action par défaut du lien. Toutefois, si la prise en charge de JavaScript est désactivée ou inexistante, ce gestionnaire d'évènement est ignoré et le navigateur charge la ressource référencée avec le nom "MozillaWindowName" si elle existe ou, dans le cas contraire, crée une nouvelle fenêtre et l'appelle "MozillaWindowName".

Pour en savoir plus sur l'attribut `target`, voir&nbsp;:

- [La page de référence pour l'élément `<a>`](/fr/docs/Web/HTML/Element/a#target)
- [La page de référence pour l'élément `<form>`](/fr/docs/Web/HTML/Element/Form#target)

La fonction présentée ci-avant peut être réécrite pour qu'on puisse la réutiliser dans plusieurs situations&nbsp;:

```html
<script type="text/javascript">
  var windowObjectReference = null; // variable globale
  function openRequestedPopup(url, windowName) {
    if (windowObjectReference == null || windowObjectReference.closed) {
      windowObjectReference = window.open(url, windowName, "popup");
    } else {
      windowObjectReference.focus();
    }
  }
</script>
(...)
<p>
  <a
    href="https://www.mozilla.org/"
    target="MozillaWindowName"
    onclick="openRequestedPopup(this.href, this.target); return false;"
    title="Ce lien créera une nouvelle fenêtre ou réutilisera une fenêtre déjà ouverte"
    >Site Mozilla</a
  >
</p>
```

On peut aussi n'utiliser qu'une seule fenêtre secondaire et la réutiliser pour les autres liens&nbsp;:

```html
<script type="text/javascript">
  var windowObjectReference = null; // variable globale
  var PreviousUrl; /* une variable globale qui stockera l'URL
                    courante de la fenêtre secondaire */
  function openRequestedSinglePopup(url) {
    if (windowObjectReference == null || windowObjectReference.closed) {
      windowObjectReference = window.open(
        url,
        "SingleSecondaryWindowName",
        "popup",
      );
    } else if (PreviousUrl != url) {
      windowObjectReference = window.open(
        url,
        "SingleSecondaryWindowName",
        "popup",
      );
      /* Si la ressource à charger est différente, on la charge dans
       la fenêtre secondaire déjà ouverte puis on place la nouvelle
       fenêtre au premier plan */
      windowObjectReference.focus();
    } else {
      windowObjectReference.focus();
    }
    PreviousUrl = url;
    /* On stocke l'URL courante afin de pouvoir la comparer dans 
     le cas d'un autre appel à cette fonction. */
  }
</script>
(...)
<p>
  <a
    href="https://www.mozilla.org/"
    target="SingleSecondaryWindowName"
    onclick="openRequestedSinglePopup(this.href); return false;"
    title="Ce lien créera une nouvelle fenêtre ou réutilisera une fenêtre déjà ouverte"
    >Site Mozilla</a
  >
</p>
<p>
  <a
    href="https://support.mozilla.org/fr/products/firefox"
    target="SingleSecondaryWindowName"
    onclick="openRequestedSinglePopup(this.href); return false;"
    title="Ce lien créera une nouvelle fenêtre ou réutilisera une fenêtre déjà ouverte"
    >Assistance Firefox</a
  >
</p>
```

## FAQ

- Comment empêcher le message de confirmation demandant si on veut fermer la fenêtre&nbsp;?

  - : Ce n'est pas possible. **Les nouvelles fenêtres qui ne sont pas ouvertes par JavaScript ne peuvent pas être fermées par JavaScript.** Pour Firefox, la console JavaScript affichera le message d'avertissement suivant&nbsp;: `"Scripts may not close windows that were not opened by script."`. Dans le cas contraire, il serait trop facile de manipuler l'historique des sites visités.

    Voir la documentation de la méthode [`window.close()`](/fr/docs/Web/API/Window/close) pour en savoir plus.

- Comment ramener la fenêtre au premier plan si elle est minimisée ou derrière une autre fenêtre&nbsp;?
  - : Tout d'abord on vérifiera l'existence de la référence à un objet `window` pour cette fenêtre, et si elle existe et qu'elle n'a pas été fermée, on utilisera la méthode [`window.focus()`](/fr/docs/Web/API/Window/focus). Pour un exemple, voir [la section précédente](#bonnes_pratiques).
- Comment forcer l'apparition de la fenêtre maximisée&nbsp;?
  - : Ce n'est pas possible. Les éditeurs de navigateur font le nécessaire pour que l'ouverture d'une nouvelle fenêtre secondaire soit visible et claire afin d'éviter toute confusion pour les utilisatrices et utilisateurs.
- Comment désactiver la possibilité de redimensionner la fenêtre ou comment masquer les barres d'outils&nbsp;?
  - : Il n'est pas possible de forcer ce comportement. Ce sont les utilisatrices et utilisateurs du navigateur qui contrôlent ces fonctionnalités. Aussi, il est recommandé de toujours activer (si besoin) la possibilité de redimensionner et la présence des barres de défilement afin de respecter l'accessibilité du contenu et l'utilisabilité des fenêtres, dans l'intérêt de tout le monde.
- Comment redimensionner une fenêtre afin que sa taille corresponde à celle de son contenu&nbsp;?

  - : On ne peut pas être certain que cela fonctionne, car les utilisatrices et utilisateurs peuvent empêcher le redimensionnement de la fenêtre (par exemple dans Firefox, la préférence `dom.disable_window_move_resize` vaut `true` par défaut).

- Comment savoir qu'une fenêtre précédemment ouverte est toujours ouverte&nbsp;?
  - : On peut tester l'existence de la référence objet à la fenêtre avec la valeur renvoyée par l'appel à `window.open()` s'il a réussi et vérifier sur cet objet que `windowObjectReference.closed` a la valeur `false`.
- Comment savoir si la fenêtre a été bloquée par un bloqueur de popup&nbsp;?
  - : En raison de la présence de bloqueurs de popups natifs, on vérifiera la valeur de retour de `window.open()`. Si celle-ci vaut `null`, cela indique que la fenêtre n'a pu être ouverte. Si le blocage a lieu d'une autre façon, il n'existe pas de méthode garantie.
- Quelle relation JavaScript existe-t-il entre la fenêtre principale et la fenêtre secondaire&nbsp;?
  - : La méthode `window.open()` fournit à la fenêtre principale une référence vers la fenêtre secondaire. La propriété [`opener`](/fr/docs/Web/API/Window/opener) fournit à la fenêtre secondaire une référence vers la fenêtre principale.
- Impossible d'accéder aux propriétés de la fenêtre secondaire en raison d'une exception JavaScript "Error: uncaught exception: Permission denied to get property blablabla". Pourquoi&nbsp;?

  - : Des raisons de sécurité, en l'occurrence la règle de même origine, empêche un script chargé dans une fenêtre depuis une autre origine **d'accéder ou de modifier** les propriétés d'une autre fenêtre ou les propriétés des objets HTML provenant d'une autre origine. Avant d'exécuter un script ciblant une fenêtre secondaire, le navigateur vérifiera depuis la fenêtre principale que la fenêtre secondaire partage bien la même origine.

    Pour en savoir plus, voir [la page de documentation quant à la règle de même origine](/fr/docs/Web/Security/Same-origin_policy)

## Problèmes d'utilisabilité

### Éviter d'utiliser `window.open()`

De façon générale, il est préférable d'éviter d'utiliser `window.open()`, et ce pour plusieurs raisons&nbsp;:

- La plupart des navigateurs modernes permettent de naviguer avec des onglets et les personnes qui les utilisent privilégient l'ouverture de nouveaux onglets à l'ouverture de nouvelles fenêtres dans la majorité des situations.
- La plupart des navigateurs modernes fournissent des fonctionnalités pour bloquer les popups. De fait, on ne peut pas être certain que l'ouverture d'une nouvelle fenêtre de cette façon réussisse et, dans le cas contraire, cela ennuiera une majorité de personnes.
- Les nouvelles fenêtres peuvent ne pas avoir de barres de menu, de barres de défilement, de barres de statut, la possibilité d'être redimensionnées. Ce n'est pas le cas pour les nouveaux onglets (au moins pour les barres d'outils présentes par défaut). Aussi, la navigation avec les onglets est privilégiée par de nombreuses personnes.
- Ouvrir de nouvelles fenêtres, même avec des fonctionnalités réduites, utilise considérablement de ressources système (processeur, mémoire vive) et sollicite du code plus complexe côté navigateur. Ouvrir de nouveaux onglets est plus simple et plus efficace que d'ouvrir de nouvelles fenêtres.

### Permettre d'ouvrir un lien vers une nouvelle fenêtre, en utilisant ces lignes directrices

Si vous souhaitez permettre d'ouvrir un lien dans une nouvelle fenêtre, nous vous invitons à suivre les conseils suivants, testés et recommandés en termes d'utilisabilité et d'accessibilité.

#### Ne jamais utiliser `<a href="javascript:window\.open(…)" …>`

Les liens de la forme `"javascript:"` cassent l'accessibilité et l'utilisabilité des pages web dans chaque navigateur.

- Les pseudo-liens `"javascript:"` ne fonctionnent plus lorsque JavaScript est désactivé ou pas pris en charge.
- Ces liens interfèrent avec les fonctionnalités avancées des navigateurs pour les onglets comme clic-milieu sur les liens, <kbd>Ctrl</kbd>+clic sur les liens, etc.
- Ces liens interfèrent avec le processus d'indexation des pages web par les moteurs de recherche.
- Ces liens interfèrent avec les technologies d'assistance (outils de lecture d'écran) et mobiles.
- Le protocole "javascript:" sera marqué en erreur par les validateurs et vérificateurs de liens.

#### Ne jamais utiliser `<a href="#" onclick="window.open(…);">`

De tels liens cassent l'accessibilité des liens. **On utilisera toujours une URL réelle pour l'attribut `href`** pour bien gérer le cas de JavaScript est désactivé ou le cas où l'agent utilisateur ne prend pas en charge les fenêtres secondaires. Cette forme interfère également avec les fonctionnalités avancées des navigateurs pour les onglets comme clic-milieu sur les liens, <kbd>Ctrl</kbd>+clic sur les liens, etc.

#### Toujours identifier les liens créant (ou réutilisant) une nouvelle fenêtre secondaire

On identifiera de façon notable les liens qui ouvrent une nouvelle fenêtre, par exemple en ajoutant une icône supplémentaire à la fin du lien.

Cela permet d'avertir correctement les personnes qui utilisent le site et de réduire l'éventuelle confusion créée par l'ouverture d'une fenêtre. Elles peuvent ainsi choisir d'ouvrir ou non un tel lien.

À ce sujet, on pourra lire&nbsp;:

- [La section Accessibilité de la page de référence sur `<a>`](/fr/docs/Web/HTML/Element/a#accessibilité)
- [G200 : Ouvrir de nouvelles fenêtres et onglets à partir d'un lien lorsque c'est strictement nécessaire - WCAG 2.0 (en anglais)](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201 : Fournir un avertissement aux utilisateurs lorsqu'ils ouvrent une nouvelle fenêtre WCAG 2.0 (en anglais)](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

#### Toujours utiliser l'attribut `target`

Si JavaScript n'est pas pris en charge ou est désactivé, l'agent utilisateur pourra se reposer sur l'attribut `target` pour créer le nouveau contexte de navigation.

L'idée est de fournir (et non d'imposer) une méthode pour ouvrir la ressource référencée et de ne pas interférer avec les fonctionnalités et les réglages du navigateur.

#### Ne pas utiliser `target="_blank"`

Utiliser un nom significatif pour la cible permet de la réutiliser au cas où un autre lien pointe également vers celle-ci. Cela permet d'accélérer le processus car la page est déjà chargée et aussi d'économiser les ressources du système (on ne charge qu'une seule fois.

En revanche, utiliser `\_blank` comme valeur pour l'attribut `target` créera à chaque fois une nouvelle fenêtre anonyme qui ne pourra pas être réutilisée.

## Glossaire

- Fenêtre ouvrante, fenêtre parente, fenêtre principale, fenêtre initiale
  - : Les termes généralement utilisés pour décrire ou identifier la fenêtre à partir de laquelle la nouvelle fenêtre est créée. Il s'agit de la fenêtre dans laquelle on a cliqué sur un lien qui a entraîné la création de la nouvelle fenêtre.
- Fenêtre enfant, fenêtre secondaire, deuxième fenêtre
  - : Les termes généralement utilisés pour faire référence à la fenêtre qui vient d'être créée.
- Popup indésirable
  - : Une fenêtre s'ouvrant automatiquement depuis un script, sans consentement préalable.

## Notes

### Conditions pour déterminer l'ouverture d'une popup

La plupart des navigateurs web récents, ne permettent pas au contenu web de contrôler la visibilité des éléments de l'interface utilisateur&nbsp;:

- Firefox 76 ou ultérieur
- Google Chrome
- Safari
- Chromium Edge

Les valeurs relatives à l'interface utilisateurs qui sont passées via `windowFeatures` servent uniquement à déterminer si le nouveau contexte s'ouvre dans une popup, un onglet ou une fenêtre. Les éléments de l'interface utilisateur pour chacun de ses modes sont exclusivement déterminés par le navigateur.

Pour plus de détails sur la détermination, voir [la section correspondante de la spécification](https://html.spec.whatwg.org/multipage/window-object.html#popup-window-is-requested).

### Notes sur les barres de défilement

Lorsque le contenu dépasse de la zone d'affichage (<i lang="en">viewport</i>), des barres de défilement sont nécessaires pour s'assurer que le contenu puisse être accessible. Le contenu peut dépasser des dimensions de la fenêtre pour plusieurs raisons. Pour plus de détails, voir [le dépassement du contenu](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content).

### Note sur les corrections de position et de dimensions

La position et les dimensions demandées via la liste des fonctionnalités **sera corrigée** par le navigateur si une des valeurs demandée empêche que la fenêtre du navigateur soit affichée complètement dans la zone de travail des applications fournies par le système d'exploitation.

**Aucune partie de la nouvelle fenêtre ne pourra être initialement située en dehors de l'écran (il s'agit du comportement par défaut pour Firefox).**

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

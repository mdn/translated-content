---
title: "Window : méthode open()"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef}}

La méthode **`open()`** de l'interface {{DOMxRef("Window")}} charge une ressource indiquée dans un contexte de navigation (onglet, fenêtre ou {{HTMLElement("iframe")}}) nouveau ou existant, avec un nom donné.

## Syntaxe

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Paramètres

- `url` {{Optional_Inline}}
  - : Une chaîne de caractères indiquant l'URL ou le chemin de la ressource à charger. S'il s'agit d'une chaîne de caractères vide (`""`) ou que ce paramètre est absent, une page blanche est chargée dans le contexte de navigation ciblé.

- `target` {{Optional_Inline}}
  - : Une chaîne de caractères sans espace qui indique le [nom](/fr/docs/Web/API/Window/name) du contexte de navigation dans lequel la ressource est chargée. Si le nom ne correspond pas à un contexte déjà existant, un nouveau contexte est créé avec ce nom. [Les mots-clés spécifiques pour `target`](/fr/docs/Web/HTML/Reference/Elements/a#target), `_self`, `_blank` (par défaut), `_parent`, `_top` et `_unfencedTop` peuvent également être utilisés. `_unfencedTop` est uniquement pertinent pour les [cadres protégés](/fr/docs/Web/API/Fenced_frame_API).

    Le nom pourra être utilisé comme valeur pour l'attribut `target` d'un élément [`<a>`](/fr/docs/Web/HTML/Reference/Elements/a#target) ou [`<form>`](/fr/docs/Web/HTML/Reference/Elements/form#target).

- `windowFeatures` {{Optional_Inline}}
  - : Une chaîne de caractères contenant une liste de fonctionnalités de fenêtre, séparées par des virgules, de la forme `nom=valeur`. Les valeurs booléennes peuvent être définies sur true en utilisant l'une des options suivantes&nbsp;: `nom`, `nom=yes`, `nom=true` ou `nom=n` où `n` est un entier non nul. Ces fonctionnalités incluent des options telles que la taille et le positionnement par défaut de la fenêtre, s'il faut ouvrir une fenêtre popup minimale, etc. Les options suivantes sont prises en charge&nbsp;:
    - `attributionsrc` {{Experimental_Inline}}
      - : Indique que vous souhaitez que le navigateur envoie un en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} avec l'appel à `open()`. Cet appel doit être effectué avec une {{Glossary("Transient_activation", "activation transitoire")}} (c'est-à-dire à l'intérieur d'un gestionnaire d'évènements d'interaction utilisateur·ice tel que `click`), dans les cinq secondes suivant l'interaction de l'utilisateur·ice. Côté serveur, cela est utilisé pour déclencher l'envoi d'un en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} dans la réponse pour compléter l'enregistrement d'une source d'attribution.

        De plus, le navigateur est également déclenché pour stocker les données de source associées (telles que fournies dans l'en-tête de réponse {{HTTPHeader("Attribution-Reporting-Register-Source")}}) lorsque la méthode `open()` est terminée.

        Consultez [l'API de rapport d'attribution](/fr/docs/Web/API/Attribution_Reporting_API) pour plus de détails.

        > [!NOTE]
        > Les appels à `open()` ne peuvent pas être utilisés pour enregistrer un déclencheur d'attribution.

    - `popup`
      - : Par défaut, `window.open` ouvre la page dans un nouvel onglet. Si `popup` est défini sur true, il est demandé d'utiliser une fenêtre popup minimale. Les fonctionnalités de l'interface utilisateur incluses dans la fenêtre popup seront automatiquement décidées par le navigateur, généralement en incluant uniquement une barre d'adresse. Si `popup` est présent et défini sur faux, un nouvel onglet est toujours ouvert.

        Il existe quelques fonctionnalités héritées, qui contrôlaient autrefois les fonctionnalités de l'interface utilisateur de la fenêtre ouverte. Dans les navigateurs modernes, elles n'ont pour effet que de demander une popup. Si `popup` n'est pas défini, et que `windowFeatures` contient des fonctionnalités (y compris non reconnues) autres que `noopener`, `noreferrer` ou `attributionsrc`, la fenêtre est également ouverte en tant que popup si l'une des conditions suivantes s'applique&nbsp;:
        - `location` et `toolbar` sont tous deux faux ou absents
        - `menubar` est faux ou absent
        - `resizable` est faux
        - `scrollbars` est faux ou absent
        - `status` est faux ou absent

        Sinon, la fenêtre est ouverte en tant qu'onglet.

    - `width` ou `innerWidth`
      - : Définit la largeur de la zone de contenu, incluant les barres de défilement. La valeur minimale requise est 100.

    - `height` ou `innerHeight`
      - : Définit la hauteur de la zone de contenu, incluant les barres de défilement. La valeur minimale requise est 100.

    - `left` ou `screenX`
      - : Définit la distance, exprimée en pixels, depuis le bord gauche de la zone de travail définie par le système d'exploitation, à laquelle la fenêtre sera ouverte.

    - `top` ou `screenY`
      - : Définit la distance, exprimée en pixels, depuis le bord haut de la zone de travail définie par le système d'exploitation, à laquelle la fenêtre sera ouverte.

    - `noopener`
      - : Si cette fonctionnalité est utilisée, la nouvelle fenêtre n'aura pas accès à la fenêtre d'origine avec {{DOMxRef("Window.opener")}} (qui renverra alors `null`).

        Lorsque `noopener` est utilisé, les noms de cibles qui ne sont pas vides et qui ne sont pas `_top`, `_self`, et `_parent`, sont traités comme `_blank` lorsqu'il s'agit de décider s'il faut ouvrir un nouveau contexte de navigation.

    - `noreferrer`
      - : Si cette fonctionnalité est utilisée, le navigateur ne fournira pas d'en-tête {{HTTPHeader("Referer")}} et fixera d'office `noopener` à `true`. Voir [`rel="noreferrer"`](/fr/docs/Web/HTML/Reference/Attributes/rel#noreferrer) pour plus d'informations.

    Une valeur {{JSxRef("Operators/null", "null")}} est traitée de la même manière que la chaîne de caractères vide (`""`).

> [!NOTE]
> Les valeurs de position demandées (`top`, `left`) et de dimension demandées (`width`, `height`) dans `windowFeatures` **seront corrigées** si l'une de ces valeurs demandées ne permet pas à la popup du navigateur d'être entièrement rendue dans la zone de travail des applications du système d'exploitation de l'utilisateur·ice. En d'autres termes, aucune partie de la nouvelle popup ne peut être initialement positionnée hors écran.

### Valeur de retour

Si le navigateur ouvre avec succès le nouveau contexte de navigation, un objet `{{Glossary("WindowProxy")}}` est retourné.
La référence retournée peut être utilisée pour accéder aux propriétés et méthodes du nouveau contexte tant qu'elle respecte les exigences de sécurité de la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy).

Si l'en-tête HTTP {{HTTPHeader("Cross-Origin-Opener-Policy")}} est utilisé et que les politiques du document sont telles que le document est ouvert dans un nouveau {{Glossary("Browsing context", "groupe de contextes de navigation")}}, les références à la fenêtre ouverte sont rompues et l'objet retourné indiquera que la fenêtre ouverte est fermée ({{DOMxRef("Window.closed", "closed")}} est `true`).

`null` est retourné si le navigateur échoue à ouvrir le nouveau contexte de navigation, par exemple parce qu'il a été bloqué par un bloqueur de fenêtres affichées par dessus le contenu (<i lang="en">popups</i> en anglais) du navigateur.

## Description

La méthode `open()` de l'interface {{DOMxRef("Window")}} prend comme paramètre une URL et charge la ressource correspondante dans un onglet ou une fenêtre (nouveau ou existant). Le paramètre `target` détermine la fenêtre ou l'onglet dans lequel charger la ressource et le paramètre `windowFeatures` peut être utilisé pour controller l'ouverture d'un nouvelle fenêtre affichée par dessus le contenu existant, avec une interface utilisateur minimale, et pour contrôler sa taille et sa position.

Les URL distantes ne sont pas chargées immédiatement. Lorsque `window.open()` retourne, la fenêtre contient toujours `about:blank`. La récupération effective de l'URL est différée et commence après que le bloc de script courant a terminé son exécution. La création de la fenêtre et le chargement de la ressource référencée sont effectués de manière asynchrone.

Les navigateurs modernes ont des politiques strictes de blocage des fenêtres contextuelles. Les fenêtres contextuelles doivent être ouvertes en réponse directe à une action de l'utilisateur·ice, et un événement de geste utilisateur distinct est requis pour chaque appel à `Window.open()`. Cela empêche les sites de spammer les utilisateur·ice·s avec de nombreuses fenêtres. Cependant, cela pose un problème pour les applications multi-fenêtres. Pour contourner cette limitation, vous pouvez concevoir vos applications de manière à&nbsp;:

- Ouvrir au maximum une nouvelle fenêtre à la fois.
- Réutiliser les fenêtres existantes pour afficher différentes pages.
- Conseiller aux utilisateur·ice·s comment mettre à jour les paramètres de leur navigateur pour autoriser plusieurs fenêtres.

## Exemples

### Ouvrir un nouvel onglet

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Ouvrir une fenêtre affichée par dessus le contenu

De manière similaire, l'exemple suivant montre comment ouvrir une fenêtre affichée par dessus le contenu en utilisant la fonctionnalité `popup`.

```js
window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
```

Il est possible de contrôler la taille et la position de la nouvelle fenêtre affichée par dessus le contenu&nbsp;:

```js
const windowFeatures = "left=100,top=100,width=320,height=320";
const handle = window.open(
  "https://www.mozilla.org/",
  "mozillaWindow",
  windowFeatures,
);
if (!handle) {
  // La fenêtre n'a pas été autorisée à s'ouvrir
  // Cela est probablement dû aux bloqueurs de fenêtres contextuelles
  // intégrés.
  // …
}
```

## Amélioration progressive

Dans certains cas, JavaScript est désactivé ou indisponible et `window.open()` ne fonctionnera pas. Au lieu de se fier uniquement à la présence de cette fonctionnalité, nous pouvons fournir une solution alternative afin que le site ou l'application continue de fonctionner.

### Fournir des alternatives lorsque JavaScript est désactivé

Si le support de JavaScript est désactivé ou inexistant, l'agent utilisateur créera une fenêtre secondaire en conséquence ou rendra la ressource référencée selon sa gestion de l'attribut `target`. L'objectif et l'idée sont de fournir (et _non d'imposer_) à l'utilisateur·ice un moyen d'ouvrir la ressource référencée.

#### HTML

```html
<a href="https://www.wikipedia.org/" target="OpenWikipediaWindow">
  Wikipedia, une encyclopédie libre (s'ouvre dans un autre onglet,
  éventuellement déjà existant)
</a>
```

#### JavaScript

```js
let windowObjectReference = null; // variable globale
function openRequestedTab(url, windowName) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, windowName);
  } else {
    windowObjectReference.focus();
  }
}

const link = document.querySelector("a[target='OpenWikipediaWindow']");
link.addEventListener("click", (event) => {
  openRequestedTab(link.href);
  event.preventDefault();
});
```

Le code ci-dessus résout quelques problèmes d'utilisabilité liés aux liens ouvrant des fenêtres contextuelles. L'objectif de `event.preventDefault()` dans le code est d'annuler l'action par défaut du lien&nbsp;: si le gestionnaire d'évènements pour `click` est exécuté, il n'est pas nécessaire d'exécuter l'action par défaut du lien. Mais si le support de JavaScript est désactivé ou inexistant sur le navigateur de l'utilisateur·ice, alors le gestionnaire d'évènements pour `click` est ignoré, et le navigateur charge la ressource référencée dans le cadre ou la fenêtre cible qui porte le nom `"WikipediaWindowName"`. Si aucun cadre ni fenêtre ne porte le nom `"WikipediaWindowName"`, alors le navigateur créera une nouvelle fenêtre et la nommera `"WikipediaWindowName"`.

> [!NOTE]
> Pour plus de détails sur l'attribut `target`, voir [`<a>`](/fr/docs/Web/HTML/Reference/Elements/a#target) ou [`<form>`](/fr/docs/Web/HTML/Reference/Elements/form#target).

### Réutiliser les fenêtres existantes et éviter `target="_blank"`

Utiliser `"_blank"` comme valeur de l'attribut de cible créera plusieurs nouvelles fenêtres non nommées sur le bureau de l'utilisateur·ice, qui ne peuvent pas être recyclées ou réutilisées. Essayez de fournir un nom significatif à votre attribut `target` et réutilisez cet attribut `target` sur votre page afin qu'un clic sur un autre lien puisse charger la ressource référencée dans une fenêtre déjà créée et rendue (ce qui accélère le processus pour l'utilisateur·ice) et justifie ainsi la raison (et les ressources système de l'utilisateur·ice, le temps passé) de créer une fenêtre secondaire en premier lieu. L'utilisation d'une seule valeur d'attribut `target` et sa réutilisation dans les liens est beaucoup plus respectueuse des ressources utilisateur, car elle ne crée qu'une seule fenêtre secondaire, qui est recyclée.

Ceci est un exemple où une fenêtre secondaire peut être ouverte et réutilisée pour d'autres liens&nbsp;:

#### HTML

```html
<p>
  <a href="https://www.wikipedia.org/" target="SingleSecondaryWindowName">
    Wikipedia, une encyclopédie libre (s'ouvre dans un autre onglet,
    éventuellement déjà existant)
  </a>
</p>
<p>
  <a
    href="https://support.mozilla.org/products/firefox"
    target="SingleSecondaryWindowName">
    FAQ de Firefox (s'ouvre dans un autre onglet, éventuellement déjà existant)
  </a>
</p>
```

#### JavaScript

```js
let windowObjectReference = null; // variable globale
let previousURL; /* variable globale qui stockera l'URL
                    actuellement dans la fenêtre secondaire */
function openRequestedSingleTab(url) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
  } else if (previousURL !== url) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
    /* si la ressource à charger est différente,
       alors nous la chargeons dans la fenêtre secondaire déjà ouverte
       et ensuite nous ramenons cette fenêtre au premier plan/devant sa
       fenêtre parente. */
    windowObjectReference.focus();
  } else {
    windowObjectReference.focus();
  }
  previousURL = url;
  /* explication : nous stockons l'URL actuelle afin de pouvoir la
     comparer en cas d'appel ultérieur de cette fonction. */
}

const links = document.querySelectorAll(
  "a[target='SingleSecondaryWindowName']",
);
for (const link of links) {
  link.addEventListener("click", (event) => {
    openRequestedSingleTab(link.href);
    event.preventDefault();
  });
}
```

## Politique de même origine

Si le contexte de navigation nouvellement ouvert ne partage pas la même {{Glossary("Origin", "origine")}}, le script d'ouverture ne pourra pas interagir (lecture ou écriture) avec le contenu du contexte de navigation.

```js example-bad
// Script depuis exemple.com
const otherOriginContext = window.open("https://exemple.org");
// exemple.com et exemple.org n'ont pas la même origine

console.log(otherOriginContext.origin);
// DOMException: Permission denied to access property "origin" on cross-origin object
```

```js example-good
// Script depuis exemple.com
const sameOriginContext = window.open("https://exemple.com");
// Cette fois, le nouveau contexte de navigation a la même origine

console.log(sameOriginContext.origin);
// https://exemple.com
```

Pour plus d'informations, consultez l'article [Politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy).

## Problèmes d'accessibilité

### Éviter de recourir à `window.open()`

Il est préférable d'éviter de recourir à `window.open()` pour plusieurs raisons&nbsp;:

- Les navigateurs modernes proposent une fonctionnalité de blocage des fenêtres affichées par dessus le contenu.
- Les navigateurs modernes proposent la navigation par onglets, et les utilisateur·ice·s de navigateurs prenant en charge les onglets préfèrent ouvrir de nouveaux onglets plutôt que de nouvelles fenêtres dans la plupart des situations.
- Les utilisateur·ice·s peuvent utiliser les fonctionnalités intégrées du navigateur ou des extensions pour choisir d'ouvrir un lien dans une nouvelle fenêtre, dans la même fenêtre, dans un nouvel onglet, dans le même onglet ou en arrière-plan. Forcer l'ouverture à se produire d'une manière spécifique, en utilisant `window.open()`, risque de les perturber et de ne pas respecter leurs habitudes.
- Les fenêtres affichées par dessus le contenu n'ont pas de barre de menus, alors que les nouveaux onglets utilisent l'interface utilisateur de la fenêtre du navigateur&nbsp;; ainsi, de nombreux utilisateur·ice·s préfèrent la navigation par onglets car l'interface reste stable.

### Ne jamais utiliser `window.open()` en ligne dans le HTML

Évitez `<a href="#" onclick="window.open(…);">` ou `<a href="javascript:window\.open(…)" …>`.

Ces valeurs `href` incorrectes provoquent un comportement inattendu lors de la copie/déplacement de liens, de l'ouverture de liens dans un nouvel onglet/fenêtre, de la mise en favori, ou lorsque JavaScript est en cours de chargement, en erreur ou désactivé. Elles transmettent également des sémantiques incorrectes aux technologies d'assistance, comme les lecteurs d'écran.

Si nécessaire, utilisez un élément HTML {{HTMLElement("button")}} à la place. En général, _vous ne devriez utiliser un lien que pour la navigation vers une URL réelle_.

### Toujours identifier les liens menant à une fenêtre secondaire

Identifiez les liens qui ouvriront de nouvelles fenêtres d'une manière qui aide à la navigation pour les utilisateur·ice·s.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (s'ouvre dans un nouvel onglet)
</a>
```

Le but est d'avertir les utilisateur·ice·s des changements de contexte afin de minimiser la confusion&nbsp;: changer la fenêtre actuelle ou ouvrir de nouvelles fenêtres peut être très déstabilisant pour les utilisateur·ice·s (dans le cas d'une fenêtre contextuelle, aucune barre d'outils ne fournit de bouton «&nbsp;Précédent&nbsp;» pour revenir à la fenêtre précédente).

Lorsques des changements extrêmes de contexte sont explicitement identifiés avant qu'ils ne se produisent, les utilisateur·ice·s peuvent déterminer s'ils souhaitent continuer ou se préparer au changement&nbsp;: non seulement ils ne seront pas confus ou désorientés, mais les utilisateur·ice·s plus expérimenté·e·s peuvent mieux décider comment ouvrir de tels liens (dans une nouvelle fenêtre ou non, dans la même fenêtre, dans un nouvel onglet ou non, en «&nbsp;arrière-plan&nbsp;» ou non).

- [WebAIM&nbsp;: Liens et hypertexte - Liens hypertextes <sup>(angl.)</sup>](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Comprendre le WCAG, Règle 3.2](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#règle_3.2_—_prévisible_rendre_les_pages_web_prévisibles_dans_leur_apparence_et_leur_fonctionnement)
- [G200&nbsp;: Ouvrir de nouvelles fenêtres et onglets à partir d'un lien uniquement lorsque nécessaire <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201&nbsp;: Avertir les utilisateur·ice·s à l'avance lors de l'ouverture d'une nouvelle fenêtre <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Documentation de l'attribut `target`&nbsp;:
  - [`<a>`](/fr/docs/Web/HTML/Reference/Elements/a#target)
  - [`<form>`](/fr/docs/Web/HTML/Reference/Elements/form#target)
- La méthode {{DOMxRef("window.close()")}}
- La propriété {{DOMxRef("window.closed")}}
- La méthode {{DOMxRef("window.focus()")}}
- La propriété {{DOMxRef("window.opener")}}
- [`rel="opener"`](/fr/docs/Web/HTML/Reference/Attributes/rel#opener) et [`rel="noopener"`](/fr/docs/Web/HTML/Reference/Attributes/rel#noopener)
- [Politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy)

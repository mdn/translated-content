---
title: FAQ Applications Web et ARIA
slug: Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ
tags:
  - ARIA
  - Accessibilité
  - Développement Web
  - À relire
translation_of: Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ
original_slug: Accessibilité/ARIA/FAQ_Applications_Web_et_ARIA
---
## Qu’est-ce qu’ARIA&nbsp;?

WAI-ARIA est la spécification [Applications Internet Riches Accessibles](http://www.w3.org/WAI/intro/aria.php) de la [Web Accessibility Initiative](http://www.w3.org/WAI/) (Initiative pour l’accessibilité du Web) du [W3C](http://www.w3.org/). ARIA fournit des moyens de rendre plus accessible les applications Web et les composants dynamiques à une plus grande part des utilisateurs, y compris ceux utilisant des technologies d’assistance telles que les lecteurs d’écrans ou les agrandisseurs.

ARIA fournit des éléments sémantiques additionnels afin de décrire les rôles, les états et la fonction de nombreux contrôles d’interfaces utilisateurs répandus, tels que les menus, les curseurs, les arbres et les dialogues. Il fournit également des informations structurelles supplémentaires, permettant aux auteurs d’identifier des points de repère, des zones et des grilles dans leurs pages Web. ARIA permet aux applications et aux composants JavaScript dynamiques d’interagir avec une grande variété de technologies d’assistance de bureau.

Pour plus d’informations sur la création de composants dynamiques accessibles avec ARIA, lire l’article [Aperçu d’applications Web et de composants dynamiques accessibles](/fr/docs/Accessibilité/Aperçu_d_applications_Web_et_de_composants_dynamiques_accessibles).

## Où ARIA est-il pris en charge&nbsp;?

ARIA est une spécification relativement récente, mais son implémentation se développe. Une large variété de navigateurs communément utilisés, de technologies d’assistance, de kits de développements JavaScript et d’applications prennent maintenant en charge ARIA. Toutefois, de nombreux utilisateurs peuvent encore utiliser d’anciennes versions de ces technologies. Vous devrez sans doute considérer l’implémentation d’ARIA à l’aide des techniques d’améliorations progressives – telle qu’ajouter ARIA en utilisant JavaScript, mais pas directement dans votre balisage – afin de prendre en charge de manière plus élégante les vieux navigateurs et les anciennes technologies d’assistance.

### Navigateurs

ARIA est pris en charge dans les navigateurs suivants&nbsp;:

| Navigateur                                                                                       | Version minimale | Notes                                                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox                                                                                          | 3.0+             | Fonctionne avec NVDA, JAWS 10+ et Orca                                                                                                             |
| [Chrome](http://dev.chromium.org/developers/design-documents/accessibility#TOC-WAI-ARIA-Support) | Dernière         | Prise en charge encore expérimentale des lecteurs d’écran jusqu’à Chrome 15                                                                        |
| Safari                                                                                           | 4+               | La prise en charge par Safari 5 est grandement améliorée. La prise en charge des zones live requiert Safari 5 avec VoiceOver sur iOS5 ou OS X Lion |
| [Opera](http://www.opera.com/docs/specs/presto28/wai-aria/roleattributes/)                       | 9.5+             | Requiert VoiceOver sous OS X. À définir&nbsp;: comment cela fonctionne-t-il actuellement&nbsp;?                                                              |
| [Internet Explorer](http://msdn.microsoft.com/en-us/library/cc891505%28v=vs.85%29.aspx)          | 8+               | Fonctionne avec JAWS 10+ et NVDA. Pas de prise en charge des zones live dans NVDA. La prise en charge dans IE9 est grandement améliorée.           |

Dans certains cas, les versions les plus jeunes peuvent prendre en charge certaines fonctionnalités d’ARIA. Des tableaux de compatibilité des navigateurs peuvent être consultés depuis différentes sources&nbsp;:

- [caniuse.com](http://caniuse.com/wai-aria)
- [Le groupe Paciello](http://www.paciellogroup.com/blog/aria-tests/ARIA-SafariaOperaIEFF-update2.html)

### Technologies d’assistance

Les technologies d’assistance adoptent de plus en plus ARIA. Certaines d’entre elles sont&nbsp;:

| Technologies d’assistance | Version minimale pour un ARIA de base                     | Version minimale pour la prise en charge des zones live et des alertes           |
| ------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------- |
| NVDA                      | 2010.2 (NVDA propose toujours des mises à jour gratuites) | 2011.1 pour Firefox, pas de prise en charge des zones live dans IE avant 2011.2. |
| Orca                      | ? (À définir)                                             | ? (À définir)                                                                    |
| VoiceOver                 | OSX 10.5, iOS 4                                           | OS X 10.7 iOS 5                                                                  |
| JAWS                      | 8                                                         | 10                                                                               |
| Window-Eyes               | 7                                                         | Pas de prise en charge des zones live                                            |
| ZoomText                  | ?                                                         | Pas de prise en charge des zones live                                            |

Note&nbsp;: Les versions antérieures de ces outils ont souvent des implémentation d’ARIA partielles et défaillantes.

For notes on JAWS support for ARIA as of JAWS 10, lire cet article du *groupe Paciello*&nbsp;: [JAWS Support for ARIA](http://www.paciellogroup.com/blog/2010/10/jaws-support-for-aria/).

### Kits de développement JavaScript

Les rôles, les états et les propriétés ARIA ont été ajoutées à de nombreux kits de développements d’interfaces utilisateur JavaScript, y compris&nbsp;:

- Dojo/Dijit
- jQuery UI
- Fluid Infusion
- Google Closure
- Google Web Toolkit
- BBC Glow
- Yahoo! User Interface Library (YUI)

Pour plus d’informations sur l’accessibilité des kits de développement JavaScript&nbsp;:

- [WAI-ARIA Implementation in JavaScript UI Libraries](http://www.paciellogroup.com/blog/2009/07/wai-aria-implementation-in-javascript-ui-libraries/) (Implémentation de WAI-ARIA dans les bibliothèques JavaScript d’UI) de Steve Faulkner

## Pouvez-vous me montrez un exemple d’ARIA en action&nbsp;?

Voici le code HTML pour une barre de progression&nbsp;:

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
```

Cette barre de progression est construite à l’aide de l’élément `<div>`, qui n’est pas des plus descriptif. Malheureusement, en HTML4 il n’existe pas de balise plus sémantique pour les développeurs, aussi avons nous besoin d’inclure les rôles et les propriétés ARIA. Ils sont spécifiés en ajoutant des attributs à l’élément `<div>`. Dans cet exemple, l’attribut `role="progressbar"` informe le navigateur que cet élément est actuellement un composant de barre de progression codé en JavaScript. Les attributs `aria-valuemin` et `aria-valuemax` spécifient les valeurs limites de la barre de progression, et `aria-valuenow` décrit a valeur courante.

Plutôt que de les intégrer directement dans le balisage, les attributs ARIA sont généralement ajoutés à l’élément et dynamiquement actualisés à l’aide de code JavaScript tel que celui-ci&nbsp;:

```js
// Trouver le <div> de la barre de progression dans le DOM.
var progressBar = document.getElementById("percent-loaded");

// Définition de ses rôles et états ARIA,
// pour que les technologies d’assistance sachent quel type de composant il s’agit.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Création d’une fonction qui peut être appelée à n’importe quel moment
// pour actualiser la valeur de la barre de progression.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

## L’ajout d’ARIA changera-t-il le style ou le comportement de mes pages&nbsp;?

Non, ARIA n’est rendu disponible que pour les APIs des technologies d’assistance, et n’affecte pas les fonctionnalités natives du navigateur en respectant le DOM ou les styles. Du point de vue des navigateurs, le HTML natif définit le sens et le comportement sémantique d’un élément, et les attributs ARIA agissent comme une surcouche permettant de prendre en charge les APIs des technologies d’assistance. Bien qu’ARIA ne modifiera aucun style par lui-même, comme pour tous les attributs HTML les CSS peuvent profiter des attributs ARIA comme sélecteurs d’élément. Ceci peut fournir un mécanisme pratique pour styles les composants intégrant ARIA.

```css
.tab-panel[aria-hidden="true"] {
  display: none;
  }

.tab-panel[aria-hidden="false"] {
  display: block;
  }
```

## Qu'en est-il de la validation&nbsp;?

Les nouveaux attributs introduits dans ARIA, tels que les **`role`** et ceux préfixés avec **`aria-`**, ne font pas officiellement partie des spécification HTML 4 ou XHTML 4. À ce titre, les pages comportant des éléments ARIA peuvent ne pas être valides lorsqu’on les soumet au [validateur du W3C](http://validator.w3.org/).

La première solution possible à ce problème est d’éviter de placer les rôles et les états ARIA directement dans le code HTML. À la place, il faut utiliser JavaScript pour ajouter dynamiquement ARIA à votre page, tel que montré dans la réponse à la question Pouvez-vous me montrez un exemple d’ARIA en action&nbsp;? ci-dessus. Votre page sera toujours théoriquement invalide, mais elle passera correctement toutes les contrôles de validation statiques.

Une autre alternative est l’utilisation d’un _doctype_ HTML5, qui prend nativement en charge . Le validateur HTML5 du W3C trouvera même pour vous les utilisations non valides d’ARIA dans les pages HTML5.

## Comment HTML5 s’associe-t-il avec ARIA&nbsp;?

HTML5 introduit de nombreuses nouvelles balises sémantiques. Certaines d’entre elles recoupent les rôles ARIA, tel que le nouvelle élément `<progress>`. Dans le cas où le navigateur prend en charge une balise HTML5 qui existe également dans ARIA, il n’est généralement pas nécessaire d’ajouter les rôles et les états ARIA à l’élément. ARIA comprend de nombreux rôles, états et propriétés qui ne sont pas disponibles en HTML5, aussi continueront-ils d’être utiles aux développeurs HTML5. Pour plus d’informations, Steve Faulkner a écrit un très bon [aperçu des relations entre HTML5 et ARIA](http://www.paciellogroup.com/blog/2010/04/html5-and-the-myth-of-wai-aria-redundance/).

#### Dégradation élégante de HTML5 vers ARIA

Pour fournir du contenu aux navigateurs qui n’implémentent pas HTML5, vous pouvez considérer une dégradation élégante de l’utilisation d’ARIA là où c’est nécessaire. Ainsi, en utilisant l’exemple de la barre de progression, vous pouvez dégrader élégamment un `role="progressbar"` pour les cas où la balise `<progressbar>` n’est pas prise en charge.

Voici un exemple de code utilisé pour une barre de progression en HTML5&nbsp;:

```html
<!DOCTYPE html>
<html>
  <head><title>Dégrader élégamment la barre de progression</title></head>
  <body>
    <progress id="progress-bar" value="0" max="100">0% complété(s)</progress>
    <button id="update-button">Actualiser</button>
 </body>
</html>
```

… et voici le code JavaScript qui assurera le fonctionnement de la barre de progression même dans les navigateurs les plus anciens&nbsp;:

```js
var progressBar = document.getElementById("progress-bar");

// Vérifions que le navigateur implémente la balise HTML5 <progress>.
var supportsHTML5Progress = (typeof (HTMLProgressElement) !== "undefined");

function setupProgress() {
  if (!supportsHTML5Progress) {
    // HTML5 <progress> n’est pas implémenté dans ce navigateur, aussi
    // avons-nous besoin d’ajouter des rôles et des états ARIA à l’élément.
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 100);
  }
}

function updateProgress(percentComplete) {
  if (!supportsHTML5Progress) {
    // HTML5 <progress> n’est pas implémenté dans ce navigateur,
    // aussi avons-nous besoin de mettre à jour l’attribut aria-valuenow
    progressBar.setAttribute("aria-valuenow", percentComplete);
  } else {
    // HTML5 <progress> is supported, so update the value attribute instead.
    progressBar.setAttribute("value", percentComplete);
  }

  progressBar.textContent = percentComplete + "% complété(s)";
}

function initDemo() {
  setupProgress(); // Setup the progress bar.

  // Lier un événement clic au bouton, ce qui actualisera la barre de progression à 75%.
  document.getElementById("update-button").addEventListener("click", function (e) {
    updateProgress(75);
    e.preventDefault();
  }, false);
}
initDemo();
```

## Comment fonctionnent les technologies d’assistance&nbsp;?

Les technologies d’assistance utilisent une API intégrée à chaque système d’exploitation spécifiquement conçue pour décrire les rôles, les états et la structure de l’interface utilisateur d’une application. Par exemple, un lecteur d’écran utilise cette API pour lire l’interface utilisateur avec un moteur de synthèse vocale (text-to-speech), une loupe l’utilise pour mettre en évidence les zones importantes ou actives de l’écran et un clavier virtuel peut s’en servir pour fournir la disposition de clavier la plus efficace dans un contexte donné ou au contrôle d’une interface utilisateur. Les technologies d’assistance accèdent souvent au DOM d’une page au travers de cette API afin de comprendre la sémantique et les attributs de la page.

ARIA fournit un pont entre le monde du DOM et le bureau. Les navigateurs exposent les éléments ARIA aux API des technologies d’assistance comme s’ils étaient des composants natifs. En conséquence, l’utilisateur a potentiellement une expérience plus cohérente là où les composants dynamiques JavaScript sont comparables sur le Web à leurs équivalents bureau.

## Comment tester mon utilisation d’ARIA&nbsp;? Existe-t-il des outils libres ou gratuits&nbsp;?

Il existe plusieurs outils d’inspection et de débogage pour vous aider à tester le comportement d’ARIA&nbsp;:

- _Object Inspector_ sur Windows
- _Accessibility Inspector_ sur Mac OS X
- _AccProbe_ sur Linux
- _Inspecteur DOM_ de Firebug
- L’[_Inspecteur d’accessibilité_ de Firebug](http://code.google.com/p/ainspector/)

Il existe plusieurs lecteurs d’écran gratuits voire libre qui peuvent être utilisés pour mener des tests sur ARIA. On trouve&nbsp;:

- [Orca](http://live.gnome.org/Orca) pour Linux
- [NVDA](http://www.nvda-project.org/) pour Windows
- [VoiceOver](http://www.apple.com/accessibility/voiceover/) est intégré à Mac OS X

Lorsque vous effectuez des tests avec un lecteur d’écran, gardez deux points importants en tête&nbsp;:

1.  Les tests occasionnels avec un lecteur d’écran ne pourront jamais remplacer les retours d’expérience, les tests ou l’aide de véritables utilisateurs au quotidien.
2.  L’accessibilité est plus vaste que la simple prise en charge des lecteurs d’écran. Essayez de mener des tests avec divers cas d’utilisation et techniques d’accessibilité.

Autres techniques et outils de tests pratiques pour les applications et les composants intégrant ARIA&nbsp;:

- [Yahoo!'s ARIA bookmarklets](http://yaccessibilityblog.com/library/test-aria-focus-bookmarklets.html)
- [simple accessibility evaluation techniques](http://wiki.fluidproject.org/display/fluid/Simple+Accessibility+Review+Protocol) du _Fluid Project_ (techniques simples d’évaluation de l’accessibilité)

## Où se tiennent les discussion concernant ARIA&nbsp;?

- [Liste de diffusion Wai-xtech](http://lists.w3.org/Archives/Public/wai-xtech/) – Discussions sur les spécification d’ARIA.
- [groupe Google Free-ARIA](http://groups.google.com/group/free-aria) – pour les développeurs et les utilisateurs d’outils et de ressources libres.

## Où peut-on en apprendre davantage à propos d’ARIA&nbsp;?

- [Aperçu d’applications Web et de composants dynamiques accessibles](/fr/docs/Accessibilité/Aperçu_d_applications_Web_et_de_composants_dynamiques_accessibles)
- [Formulaires accessibles](/fr/docs/Accessibilité/Formulaires_accessibles)
- La [FAQ WAI-ARIA](http://www.w3.org/WAI/aria/faq) du W3C.
- [Accessibility of Rich Internet Applications](http://webaim.org/techniques/aria/) (Accessibilité des applications Internet riches) de WebAIM.

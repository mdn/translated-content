---
title: Firefox 159 note de version pour les développeurs
short-title: Firefox 159
slug: Mozilla/Firefox/Releases/159
l10n:
  sourceCommit: 521fe7795f4dbfa723d800a94884d7608fa0e17e
---

Cet article présente les informations concernant les changements de Firefox 159 qui concernent les développeur·euse·s.
Firefox 159 est sorti le [27 octobre 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=159).

## Changements pour les développeur·euse·s web

### HTML

Pas de changements notables.

### CSS

- [Les animations pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations) sont désormais activées par défaut. Elles permettent d'animer les valeurs des propriétés le long d'une chronologie basée sur le défilement (c'est-à-dire en faisant défiler un conteneur de défilement) plutôt que le long de la chronologie par défaut basée sur le temps du document.
  ([bogue Firefox 1324602 <sup>(angl.)</sup>](https://bugzil.la/1324602)).

#### Suppressions

- La disposition en maçonnerie héritée a été supprimée&nbsp;: la valeur `masonry` des propriétés {{CSSxRef("grid-template-columns")}} et {{CSSxRef("grid-template-rows")}}, ainsi que la propriété `masonry-auto-flow`. Cette syntaxe n'était activée par défaut que dans Nightly, derrière la préférence `layout.css.grid-template-masonry-value.enabled`. Elle est remplacée par la [disposition en voies de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_lanes), qui utilise les valeurs `grid-lanes` et `inline-grid-lanes` de la propriété {{CSSxRef("display")}}. ([bogue Firefox 2077170 <sup>(angl.)</sup>](https://bugzil.la/2077170)).

### JavaScript

Pas de changements notables.

### APIs

- Les méthodes qui assainissent le HTML avec [l'API HTML Sanitizer](/fr/docs/Web/API/HTML_Sanitizer_API), telles que {{DOMxRef("Element.setHTML()")}}, suppriment désormais les éléments et attributs indésirables au fur et à mesure de l'analyse du balisage, au lieu d'analyser d'abord tout le balisage puis de nettoyer ensuite l'arbre DOM résultant. Le résultat est le même, sauf que le texte voisin se retrouve maintenant dans un seul nœud de texte au lieu d'être réparti sur plusieurs. ([bogue Firefox 2070498 <sup>(angl.)</sup>](https://bugzil.la/2070498)).
- L'extension [WebGL](/fr/docs/Web/API/WebGL_API) {{DOMxRef("EXT_clip_control")}} est désormais disponible sur les appareils dont le pilote graphique la prend en charge. Sa méthode {{DOMxRef("EXT_clip_control.clipControlEXT()", "clipControlEXT()")}} modifie la manière dont les coordonnées de l'espace de découpe sont mappées aux coordonnées de la fenêtre&nbsp;: elle peut déplacer l'origine de découpe dans le coin supérieur gauche et définir la plage de profondeur dans les coordonnées normalisées de l'appareil de 0 à 1 au lieu de la plage par défaut de -1 à 1, conformément aux conventions de Direct3D et WebGPU. La plage de profondeur de 0 à 1 rend également efficace la technique du Z inversé, ce qui améliore la précision de la profondeur avec un tampon de profondeur en virgule flottante. ([bogue Firefox 1885031 <sup>(angl.)</sup>](https://bugzil.la/1885031)).
- L'extension [WebGL](/fr/docs/Web/API/WebGL_API) {{DOMxRef("EXT_texture_mirror_clamp_to_edge")}} est désormais disponible sur les appareils dont le pilote graphique la prend en charge. Elle ajoute le mode d'enveloppement de texture `MIRROR_CLAMP_TO_EDGE_EXT`&nbsp;: les coordonnées de texture de -1 à 0 échantillonnent une image miroir de la texture, et les coordonnées inférieures à -1 ou supérieures à 1 se fixent à son bord. Cela permet de stocker une image symétrique, telle qu'une lueur, comme une texture ne contenant que la moitié de celle-ci. ([bogue Firefox 1908749 <sup>(angl.)</sup>](https://bugzil.la/1908749)).
- L'extension [WebGL 2](/fr/docs/Web/API/WebGL2RenderingContext) {{DOMxRef("EXT_texture_norm16")}} est désormais activée par défaut sur les appareils dont le pilote graphique prend en charge les formats normalisés sur 16 bits. Elle ajoute des formats de texture et de tampon de rendu normalisés sur 16 bits, qui stockent des données telles que des cartes d'élévation et des images médicales avec plus de précision que les formats sur 8 bits. ([bogue Firefox 1735401 <sup>(angl.)</sup>](https://bugzil.la/1735401)).

#### DOM

- Les [registres d'éléments personnalisés à portée limitée](/fr/docs/Web/API/Web_components/Using_custom_elements#registres_déléments_personnalisés_à_portée_limitée) sont désormais pris en charge, ce qui permet à un arbre d'ombre de créer un {{DOMxRef("CustomElementRegistry")}} indépendant dont les définitions ne s'appliquent qu'à ce sous-arbre DOM spécifique. Cela peut être utilisé pour éviter les collisions lorsque plusieurs composants web déclarent des éléments portant le même nom. La propriété `customElementRegistry` peut être utilisée sur {{DOMxRef("Document")}}, {{DOMxRef("Element")}} et {{DOMxRef("ShadowRoot")}}. Le [constructeur `CustomElementRegistry()`](/fr/docs/Web/API/CustomElementRegistry/CustomElementRegistry) crée un nouvel objet `CustomElementRegistry` pour une utilisation à portée limitée. ([bogue Firefox 2070506 <sup>(angl.)</sup>](https://bugzil.la/2070506))

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Les préférences recommandées sont désormais définies comme valeurs par défaut au lieu de valeurs utilisateur·ice, elles ne restent donc plus dans `prefs.js` après un arrêt non propre. ([bogue Firefox 2074275 <sup>(angl.)</sup>](https://bugzil.la/2074275)).
- L'argument de ligne de commande `--remote-allow-system-access` a été supprimé. Pour activer l'accès au système, définissez plutôt la variable d'environnement `MOZ_REMOTE_ALLOW_SYSTEM_ACCESS` sur `1`. ([bogue Firefox 2054896 <sup>(angl.)</sup>](https://bugzil.la/2054896)).
- Correction d'une fuite de mémoire où les opérations de sondage internes continuaient de s'exécuter jusqu'à l'arrêt après un dépassement de délai avec une erreur. Cela pouvait affecter diverses commandes (par exemple, `browsingContext.traverseHistory` de WebDriver BiDi). ([bogue Firefox 2079758 <sup>(angl.)</sup>](https://bugzil.la/2079758)).

#### WebDriver BiDi

- Implémentation de la commande `emulation.setMediaFeaturesOverride`, qui permet aux clients de remplacer les valeurs des fonctionnalités CSS. Actuellement seule [`prefers-color-scheme`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) est prise en charge. ([bogue Firefox 2064354 <sup>(angl.)</sup>](https://bugzil.la/2064354)).
- Ajout d'un [fichier CDDL (Concise Data Definition Language) lisible par machine <sup>(angl.)</sup>](https://searchfox.org/firefox-main/rev/2d5c2a4eb5d99a92249ec13370b1de9c1a77c0f8/remote/webdriver-bidi/cddl/Fields.cddl) pour les extensions spécifiques à Firefox de WebDriver BiDi. ([bogue Firefox 2057588 <sup>(angl.)</sup>](https://bugzil.la/2057588)).

## Fonctionnalités web expérimentales

Ces fonctionnalités sont disponibles dans Firefox 159 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Fonctions d'usine numériques CSS exposées dans les workers et worklets**&nbsp;: `layout.css.namespace.exposed-in-workers-and-worklets`

  Les [fonctions d'usine numériques](/fr/docs/Web/API/CSS/factory_functions_static) de l'espace de noms {{DOMxRef("CSS")}}, telles que `CSS.px()`, sont désormais exposées dans les workers et les paint worklets, et pas seulement sur `Window`. Elles font partie de [l'API CSS Typed Object Model](/fr/docs/Web/API/CSS_Typed_OM_API), donc en dehors de Nightly, il est également nécessaire de définir la préférence `layout.css.typed-om.enabled` sur `true`. ([bogue Firefox 2079188 <sup>(angl.)</sup>](https://bugzil.la/2079188)).

- **Nouvelles propriétés `MathMLAnchorElement`**&nbsp;: `mathml.a.element.enabled`

  L'interface {{DOMxRef("MathMLAnchorElement")}} prend désormais en charge les propriétés {{DOMxRef("MathMLAnchorElement.download", "download")}}, {{DOMxRef("MathMLAnchorElement.ping", "ping")}}, {{DOMxRef("MathMLAnchorElement.rel", "rel")}}, {{DOMxRef("MathMLAnchorElement.relList", "relList")}} et {{DOMxRef("MathMLAnchorElement.referrerPolicy", "referrerPolicy")}}. ([bogue Firefox 2064612 <sup>(angl.)</sup>](https://bugzil.la/2064612)).

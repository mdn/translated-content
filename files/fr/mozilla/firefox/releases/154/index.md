---
title: Firefox 154 note de version pour les développeurs
short-title: Firefox 154
slug: Mozilla/Firefox/Releases/154
l10n:
  sourceCommit: 2ad62b2e8cb4dbd6305f23fda33d800e218d8aef
---

Cet article présente les informations concernant les changements de Firefox 154 qui concernent les développeur·euse·s.
Firefox 154 est sorti le [18 août 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=154).

## Changements pour les développeur·euse·s web

### HTML

Pas de changements notables.

### APIs

#### Média, WebRTC et Web Audio

- La méthode {{DOMxRef("RTCIceTransport.getSelectedCandidatePair()")}} et l'évènement {{DOMxRef("RTCIceTransport/selectedcandidatepairchange_event", "selectedcandidatepairchange")}} sont désormais pris en charge pour obtenir la {{DOMxRef("RTCIceCandidatePair")}} actuelle pour le transport.
  ([bogue Firefox 2019332 <sup>(angl.)</sup>](https://bugzil.la/2019332)).
- L'évènement {{DOMxRef("RTCDtlsTransport/error_event", "error")}} est désormais déclenché sur {{DOMxRef("RTCDtlsTransport")}} pour signaler les erreurs DTLS et de l'empreinte.
  ([bogue Firefox 1805447 <sup>(angl.)</sup>](https://bugzil.la/1805447)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Amélioration de la gestion des propriétés `deltaX` et `deltaY` pour les évènements de défilement de la molette des composants asynchrones en tenant compte de la fenêtre d'affichage de la mise en page. ([bogue Firefox 1971979 <sup>(angl.)</sup>](https://bugzil.la/1971979)).
- Correction d'un bogue où une navigation se résout prématurément pour les sous-cadres lors de l'appel de `history.replaceState` ou lors de la navigation vers une page d'erreur (par exemple, bloquée par `X-Frame-Options`). ([bogue Firefox 2051908 <sup>(angl.)</sup>](https://bugzil.la/2051908)).

#### WebDriver BiDi

- Ajout d'un identifiant de téléchargement aux évènements `browsingContext.downloadWillBegin` et `browsingContext.downloadEnd` pour faciliter l'identification des évènements appartenant au même téléchargement. ([bogue Firefox 2040936 <sup>(angl.)</sup>](https://bugzil.la/2040936)).
- Ajout de la prise en charge d'un état `ignore` pour la propriété `unhandledPromptBehavior` des sélecteurs de fichiers lors de la création d'une nouvelle session avec la commande `session.new`. Dans cet état, les sélecteurs de fichiers ne sont pas gérés automatiquement par le protocole. ([bogue Firefox 1999693 <sup>(angl.)</sup>](https://bugzil.la/1999693)).
- Ajout d'un champ `userContext` (alias conteneur Firefox) au payload de plusieurs évènements et commandes WebDriver BiDi, ce qui facilite le filtrage des données entrantes pour les clients s'abonnant aux évènements par identifiant de contexte utilisateur. ([bogue Firefox 2018611 <sup>(angl.)</sup>](https://bugzil.la/2018611)).
- Intégration des commandes `browsingContext.startScreencast` et `browsingContext.stopScreencast`, qui enregistrent un contexte de navigation et sauvegardent le résultat sous forme de fichier vidéo. ([bogue Firefox 2042671 <sup>(angl.)</sup>](https://bugzil.la/2042671)).
- Mise à jour de la commande `emulation.setLocaleOverride` pour permettre de remplacer l'en-tête `Accept-Language` pour les requêtes de récupération et `WebSocket` dans les travailleurs (<i lang="en">workers</i> en anglais). ([bogue Firefox 2052932 <sup>(angl.)</sup>](https://bugzil.la/2052932)).
- Correction d'un bogue où l'évènement `script.realmDestroyed` manque pour un travailleur après une navigation inter-processus. ([bogue Firefox 2018154 <sup>(angl.)</sup>](https://bugzil.la/2018154)).

## Changements pour les développeur·euse·s d'extensions

- Ajout de la prise en charge de la clé de manifeste [`sandbox`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox), permettant aux extensions de désigner des pages qui se chargent avec une origine opaque, sans accès direct aux API d'extension. Une page en bac à sable peut utiliser `eval()` et des constructions similaires qui sont autrement bloquées par la [politique de sécurité du contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) de l'extension. ([bogue Firefox 1685123 <sup>(angl.)</sup>](https://bugzil.la/1685123))

## Fonctionnalités web expérimentales

Ces fonctionnalités sont disponibles dans Firefox 154 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Tronquer le contenu avec `line-clamp`**&nbsp;: `layout.css.line-clamp.enabled`

  La propriété CSS {{CSSxRef("line-clamp")}} fonctionne désormais sans le préfixe fournisseur `-webkit-`, bien qu'à ce stade, elle ne prenne pas en charge les valeurs `no-ellipsis` et `<string>`. ([bogue Firefox 2042986 <sup>(angl.)</sup>](https://bugzil.la/2042986)).

- **Valeurs en pourcentage pour `text-decoration-inset`**&nbsp;: `layout.css.text-decoration-inset-percentage.enabled`

  La propriété CSS {{CSSxRef("text-decoration-inset")}} prend désormais en charge les pourcentages comme valeurs. La valeur en pourcentage spécifie la taille de l'indentation en pourcentage de la {{CSSxRef("font-size")}}. ([bogue Firefox 2044602 <sup>(angl.)</sup>](https://bugzil.la/2044602)).

- **Calculer une valeur basée sur `progress()`**&nbsp;: `layout.css.progress-function.enabled`

  La fonction CSS {{CSSxRef("progress()")}} est désormais prise en charge. Cela permet à l'utilisateur·ice de calculer un {{CSSxRef("&lt;number&gt;")}} basé sur une valeur (ou progression) comprise entre une valeur minimale et une valeur maximale. ([bogue Firefox 2047015 <sup>(angl.)</sup>](https://bugzil.la/2047015)).

- **CSS Typed Object Model Level 1** (Nightly)&nbsp;: `layout.css.typed-om.enabled`

  [L'API CSS Typed Object Model API](/fr/docs/Web/API/CSS_Typed_OM_API) (telle que définie dans la spécification CSS Typed Object Model Level 1) est désormais implémentée.
  Cela simplifie la manipulation des propriétés CSS en exposant les valeurs CSS sous forme d'objets JavaScript typés plutôt que de chaînes de caractères. ([bogue Firefox 2051047 <sup>(angl.)</sup>](https://bugzil.la/2051047)).

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

### Outils de développement

- [L'observateur JSON <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) affiche désormais un fil d'Ariane en bas du panneau indiquant l'emplacement de l'entrée sélectionnée dans la structure JSON.
  ([bogue Firefox 1850288 <sup>(angl.)</sup>](https://bugzil.la/1850288)).

### HTML

Pas de changements notables.

### CSS

- Les fonctions {{CSSxRef("sibling-count()")}} et {{CSSxRef("sibling-index()")}} sont désormais prises en charge. La fonction `sibling-count()` retourne le nombre d'éléments voisins ainsi que l'élément lui-même. La fonction `sibling-index()` retourne le numéro d'index de l'élément par rapport à ses voisins. L'index commence à `1`, et non à `0`. ([bogue Firefox 2045706 <sup>(angl.)</sup>](https://bugzil.la/2045706)).
- Les propriétés {{CSSxRef("text-box-edge")}} et {{CSSxRef("text-box-trim")}} ainsi que le raccourci {{CSSxRef("text-box")}} sont désormais pris en charge. Ces propriétés facilitent le contrôle de l'espacement du texte dans la direction du bloc, en particulier lorsqu'un bloc contient plusieurs polices. La propriété `text-box-edge` permet de définir la quantité d'espace à découper à partir du conteneur de bloc de l'élément texte. La propriété `text-box-trim` permet de définir quels bords découper&nbsp;: le bord supérieur, le bord inférieur, les deux ou aucun. Le raccourci `text-box` combine ces deux propriétés. ([bogue Firefox 2050141 <sup>(angl.)</sup>](https://bugzil.la/2050141)).

### JavaScript

- La méthode {{JSxRef("Iterator.prototype.includes()")}} est désormais prise en charge, permettant aux développeur·euse·s de vérifier si un itérateur contient une valeur donnée.
  ([bogue Firefox 2034104 <sup>(angl.)</sup>](https://bugzil.la/2034104)).
- La méthode {{JSxRef("Iterator.prototype.join()")}} est désormais prise en charge, retournant une chaîne de caractères qui est la concaténation de tous les éléments produits par l'itérateur, séparés par des virgules ou par une chaîne de caractères de séparation définie.
  Cela est similaire à {{JSxRef("Array.prototype.join()")}}.
  ([bogue Firefox 2047995 <sup>(angl.)</sup>](https://bugzil.la/2047995)).
- Les méthodes {{JSxRef("Iterator.prototype.chunks()")}} et {{JSxRef("Iterator.prototype.windows()")}} sont désormais prises en charge.
  Ces deux méthodes retournent un [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur) qui peut être itéré pour produire un certain nombre d'éléments de l'itérateur d'origine sous forme de tableau.
  La différence entre les méthodes est que l'aide `chunks()` divise les éléments de l'itérateur d'origine en morceaux de tableau consécutifs, tandis que l'aide `windows()` retourne un tableau qui est une fenêtre glissante sur l'itérateur d'origine (chaque itération produit un tableau qui avance d'un élément&nbsp;: en supprimant le premier élément de l'itération précédente et en récupérant un nouvel élément de l'itérateur d'origine).
  ([bogue Firefox 2047997 <sup>(angl.)</sup>](https://bugzil.la/2047997)).

### APIs

#### Média, WebRTC et Web Audio

- La méthode {{DOMxRef("RTCIceTransport.getSelectedCandidatePair()")}} et l'évènement {{DOMxRef("RTCIceTransport/selectedcandidatepairchange_event", "selectedcandidatepairchange")}} sont désormais pris en charge pour obtenir la {{DOMxRef("RTCIceCandidatePair")}} actuelle pour le transport.
  ([bogue Firefox 2019332 <sup>(angl.)</sup>](https://bugzil.la/2019332)).
- L'évènement {{DOMxRef("RTCDtlsTransport/error_event", "error")}} est désormais déclenché sur {{DOMxRef("RTCDtlsTransport")}} pour signaler les erreurs DTLS et de l'empreinte.
  ([bogue Firefox 1805447 <sup>(angl.)</sup>](https://bugzil.la/1805447)).
- La propriété `rtcp` est désormais incluse dans l'objet retourné par {{DOMxRef("RTCRtpReceiver.getParameters()")}} et {{DOMxRef("RTCRtpSender.getParameters()")}}, et peut être définie dans l'objet passé à {{DOMxRef("RTCRtpSender.setParameters()")}}.
  Cela fournit les paramètres de configuration {{Glossary("RTCP")}} pour la connexion.
  ([bogue Firefox 1584318 <sup>(angl.)</sup>](https://bugzil.la/1584318)).
- Firefox signale désormais toutes les statistiques `certificate` de WebRTC définies dans le dictionnaire {{DOMxRef("RTCCertificateStats")}}, ainsi que les statistiques `transport` supplémentaires de WebRTC définies dans le dictionnaire {{DOMxRef("RTCTransportStats")}}&nbsp;: {{DOMxRef("RTCTransportStats/remoteCertificateId", "remoteCertificateId")}}, {{DOMxRef("RTCTransportStats/localCertificateId", "localCertificateId")}}, {{DOMxRef("RTCTransportStats/packetsSent", "packetsSent")}}, {{DOMxRef("RTCTransportStats/packetsReceived", "packetsReceived")}}, {{DOMxRef("RTCTransportStats/bytesSent", "bytesSent")}} et {{DOMxRef("RTCTransportStats/bytesReceived", "bytesReceived")}}.
  ([bogue Firefox 2019349 <sup>(angl.)</sup>](https://bugzil.la/2019349) et [bogue Firefox 2019333 <sup>(angl.)</sup>](https://bugzil.la/2019333)).

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

  La propriété CSS {{CSSxRef("text-decoration-inset")}} prend désormais en charge les pourcentages comme valeurs. La valeur en pourcentage définit la taille de l'indentation en pourcentage de la {{CSSxRef("font-size")}}. ([bogue Firefox 2044602 <sup>(angl.)</sup>](https://bugzil.la/2044602)).

- **Calculer une valeur basée sur `progress()`**&nbsp;: `layout.css.progress-function.enabled`

  La fonction CSS {{CSSxRef("progress()")}} est désormais prise en charge. Cela permet à l'utilisateur·ice de calculer un {{CSSxRef("&lt;number&gt;")}} basé sur une valeur (ou progression) comprise entre une valeur minimale et une valeur maximale. ([bogue Firefox 2047015 <sup>(angl.)</sup>](https://bugzil.la/2047015)).

- **CSS Typed Object Model Level 1** (Nightly)&nbsp;: `layout.css.typed-om.enabled`

  [L'API CSS Typed Object Model API](/fr/docs/Web/API/CSS_Typed_OM_API) (telle que définie dans la spécification CSS Typed Object Model Level 1) est désormais implémentée.
  Cela simplifie la manipulation des propriétés CSS en exposant les valeurs CSS sous forme d'objets JavaScript typés plutôt que de chaînes de caractères. ([bogue Firefox 2051047 <sup>(angl.)</sup>](https://bugzil.la/2051047)).

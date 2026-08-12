---
title: Modules
slug: Mozilla/Add-ons
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Les modules complémentaires (<i lang="en">add-ons</i> en anglais) permettent aux développeur·euse·s d'étendre et de modifier les fonctionnalités de Firefox. Ils s'écrivent avec les technologies Web standard — JavaScript, HTML et CSS — ainsi qu'avec quelques API JavaScript dédiées.

Entre autres, un module complémentaire peut&nbsp;:

- Modifier l'apparence ou le contenu de certains sites web
- Modifier l'interface utilisateur de Firefox
- Ajouter de nouvelles fonctionnalités à Firefox

Il existe plusieurs types de modules complémentaires, mais le type le plus courant est celui des extensions.

## Développer des modules complémentaires

Plusieurs ensembles d'outils servent à développer des extensions Firefox, mais depuis novembre 2017, les extensions doivent être conçues avec les [API WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions). Les autres ensembles d'outils, comme les modules complémentaires avec superposition, les modules complémentaires amorçables et le SDK des modules complémentaires, ne sont plus pris en charge.

Les extensions écrites avec les API WebExtensions pour Firefox sont conçues pour être compatibles entre les navigateurs. Dans la plupart des cas, elles fonctionnent dans Chrome, Edge et Opera avec peu de modifications, voire aucune. Elles sont également entièrement compatibles avec Firefox utilisant plusieurs processus. Consultez [les API actuellement prises en charge dans Firefox et les autres navigateurs](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).

### Atelier des extensions

[L'atelier d'extensions Firefox <sup>(angl.)</sup>](https://extensionworkshop.com/) vous aide à développer des extensions pour Firefox et offre à vos utilisateur·ice·s des moyens simples mais puissants de personnaliser leur expérience de navigation. Vous y trouvez&nbsp;:

- [Présentation des fonctionnalités des extensions Firefox <sup>(angl.)</sup>](https://extensionworkshop.com/#about)
- [Outils et processus de développement et de test <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/)
- [Publier votre extension sur addons.mozilla.org ou la distribuer vous-même <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/publish/)
- [Gérer votre extension publiée <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/manage/)
- [Guide destiné aux entreprises pour développer et utiliser des extensions <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/enterprise/)
- [Développer des thèmes pour Firefox <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/themes/)
- [Communautés de développement Firefox <sup>(angl.)</sup>](https://extensionworkshop.com/community/)

### Les extensions pour Firefox pour Android

En 2020, Mozilla propose une nouvelle expérience Firefox pour Android. Ce navigateur Android hautes performances est entièrement reconstruit avec GeckoView, le moteur de navigateur mobile de Mozilla. Nous développons actuellement la prise en charge de l'API WebExtensions dans GeckoView.

## Publier des modules complémentaires

[Addons.mozilla.org <sup>(angl.)</sup>](https://addons.mozilla.org/), communément appelé «&nbsp;AMO&nbsp;», est le site officiel de Mozilla qui permet aux développeur·euse·s de répertorier leurs modules complémentaires et aux utilisateur·ice·s de les découvrir. En téléversant votre module complémentaire sur AMO, vous participez à notre communauté d'utilisateur·ice·s et de créateur·ice·s et trouvez un public pour votre module complémentaire.

Vous n'êtes pas obligé·e de répertorier votre module complémentaire sur AMO, mais Mozilla doit le signer, sinon les utilisateur·ice·s ne peuvent pas l'installer.

Pour une présentation du processus de publication de votre module complémentaire, consultez [Signer et distribuer votre module complémentaire <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/).

## Autres types de modules complémentaires

En plus des extensions, quelques autres types de modules complémentaires permettent aux utilisateur·ice·s de personnaliser Firefox. Ces modules complémentaires comprennent&nbsp;:

- [Dictionnaires utilisateur <sup>(angl.)</sup>](https://support.mozilla.org/en-US/kb/how-do-i-use-firefox-spell-checker) permettent d'effectuer une vérification orthographique dans différentes langues.
- [Les modules linguistiques <sup>(angl.)</sup>](https://support.mozilla.org/en-US/kb/use-firefox-another-language) permettent de disposer de davantage de langues dans l'interface utilisateur de Firefox.

## Nous contacter

Consultez la page [nous contacter](/fr/docs/Mozilla/Add-ons/Contact_us) pour découvrir comment obtenir de l'aide, rester au courant de l'actualité des modules complémentaires et nous transmettre vos commentaires.

---
title: Bugs importants corrigés dans Firefox 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Cet article propose une liste des corrections de bugs importantes apportées par Firefox 3, qui ne sont pas nécessairement évidentes dans la documentation.

- Si une erreur se produit lors de l'analyse d'une superposition, la superposition n'est pas appliquée. Les erreurs d'analyse sont enregistrées dans la console d'erreurs. ([bogue Firefox 335755 <sup>(angl.)</sup>](https://bugzil.la/335755))
- Bogue corrigé où les éléments `<menupopup>` peuvent être placés à l'intérieur d'un binding lorsqu'ils sont attachés à un menu ou à un élément de type menu. ([bogue Firefox 345896 <sup>(angl.)</sup>](https://bugzil.la/345896))
- La propriété `dlgType` du bouton fonctionne désormais correctement. ([bogue Firefox 308591 <sup>(angl.)</sup>](https://bugzil.la/308591))
- L'argument `canBubble` de {{DOMxRef("event.initEvent")}} fonctionne désormais correctement afin que des évènements puissent être déclenchés sans se propager. ([bogue Firefox 330190 <sup>(angl.)</sup>](https://bugzil.la/330190))
- L'évènement `DOMAttrModified` gère désormais correctement les attributs avec espace de noms. ([bogue Firefox 362391 <sup>(angl.)</sup>](https://bugzil.la/362391))
- Les instructions de traitement XML, telles que `<?xml-stylesheet ?>`, sont désormais ajoutées au DOM d'un document XUL. Cela signifie que {{DOMxRef("Node.firstChild", "document.firstChild")}} n'est pas garanti d'être l'élément racine, utilisez plutôt {{DOMxRef("document.documentElement")}}. De plus, les instructions de traitement `<?xml-stylesheet ?>` et `<?xul-overlay ?>` n'ont désormais aucun effet en dehors du prologue du document. ([bogue Firefox 319654 <sup>(angl.)</sup>](https://bugzil.la/319654))
- La fonction [`getElementsByAttributeNS()` <sup>(angl.)</sup>](https://web.archive.org/web/20201210015651/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Method/getElementsByAttributeNS) a été ajoutée aux éléments et documents XUL. ([bogue Firefox 239976 <sup>(angl.)</sup>](https://bugzil.la/239976))
- Les écouteurs d'évènements sont maintenus lors du déplacement ou de la suppression d'un élément d'un document XUL. ([bogue Firefox 286619 <sup>(angl.)</sup>](https://bugzil.la/286619))
- Les évènements de mutation sont désormais déclenchés pour les documents non affichés. ([bogue Firefox 201236 <sup>(angl.)</sup>](https://bugzil.la/201236))
- Divers problèmes liés au dessin des éléments dans le mauvais ordre sont corrigés. ([bogue Firefox 317375 <sup>(angl.)</sup>](https://bugzil.la/317375))
- {{DOMxRef("Element.getElementsByTagName", "getElementsByTagName()")}} a été corrigé pour fonctionner correctement sur les sous-arbres contenant des éléments avec des préfixes d'espace de noms dans leurs noms de balises ([bogue Firefox 206053 <sup>(angl.)</sup>](https://bugzil.la/206053)).
- Les évènements `DOMNodeInserted` et `DOMNodeRemoved` s'appliquent désormais correctement aux nœuds appropriés ([bogue Firefox 367164 <sup>(angl.)</sup>](https://bugzil.la/367164)).
- `\d`, l'un des caractères spéciaux dans les expressions régulières, a été corrigé pour correspondre uniquement aux chiffres de l'alphabet latin de base (équivalent à `[0-9]`). ([bogue Firefox 378738 <sup>(angl.)</sup>](https://bugzil.la/378738))
- La catégorie des services de détection d'images permet aux décodeurs d'images implémentés en tant qu'extensions de décoder correctement les images envoyées avec des types MIME incorrects. ([bogue Firefox 391667 <sup>(angl.)</sup>](https://bugzil.la/391667))
- Les clics droits sur les contrôles de formulaire n'affichent plus de menu contextuel par défaut ([bogue Firefox 404536 <sup>(angl.)</sup>](https://bugzil.la/404536)). Voir [Offrir un menu contextuel pour les contrôles de formulaire <sup>(angl.)</sup>](https://web.archive.org/web/20210612231358/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Offering_a_context_menu_for_form_controls) pour savoir comment l'activer au cas par cas.

## Voir aussi

- [Firefox 3 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/3)

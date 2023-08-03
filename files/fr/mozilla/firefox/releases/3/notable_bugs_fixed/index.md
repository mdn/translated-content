---
title: Bugs importants corrigés dans Firefox 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
---

{{FirefoxSidebar}}

Cet article fait la liste des corrections importantes faisant partie de Firefox 3 qui ne sont pas nécessairement évidentes à trouver dans la documentation.

- Si une erreur se produit à l'analyse d'un overlay, l'overlay n'est pas appliqué. Les erreurs d'analyse apparaissent dans la console d'erreurs. ([bug Firefox 355755](https://bugzil.la/355755))
- Des `<menupopup>` peuvent être placés dans une liaison XBL et être attachés à un élément de menu ou apparenté. ([bug Firefox 345896](https://bugzil.la/345896))
- La propriété `dlgType` des éléments `button` fonctionne correctement. ([bug Firefox 308591](https://bugzil.la/308591))
- Le paramètre `canBubble` de {{ Domxref("event.initEvent") }} fonctionne correctement et des évènements peuvent être déclenchés sans se propager. ([bug Firefox 330190](https://bugzil.la/330190))
- L'évènement `DOMAttrModified` gère les attributs avec espace de noms correctement. ([bug Firefox 247095](https://bugzil.la/247095))
- Les instructions de traitement XML, comme `<?xml-stylesheet ?>`, sont maintenant ajoutés au DOM des documents XUL. Cela signifie que {{ Domxref("document.firstChild") }} n'est pas forcément l'élément racine, utilisez plutôt {{ Domxref("document.documentElement") }}. Par ailleurs, les instructions de traitement `<?xml-stylesheet ?>` et `<?xul-overlay ?>` n'ont maintenant plus d'effet en dehors du prologue du document. ([bug Firefox 319654](https://bugzil.la/319654))
- Les fonctions `getElementsByAttributeNS()` ont été ajoutées aux éléments et documents XUL. ([bug Firefox 239976](https://bugzil.la/239976))
- Les gestionnaires d'évènements sont conservés lorsque des éléments sont déplacés dans ou retirés d'un document XUL. ([bug Firefox 286619](https://bugzil.la/286619))
- Les évènements de mutation sont déclenchés aussi pour les documents non affichés. ([bug Firefox 201238](https://bugzil.la/201238))
- Divers problèmes dans l'ordre d'affichage des éléments ont été corrigés. ([bug Firefox 317375](https://bugzil.la/317375))
- [`getElementsByTagName()`](/fr/DOM/element.getElementsByTagName) a été corrigé pour fonctionner correctement sur les sous-arbres dont des éléments ont des préfixes d'espaces de noms dans leur nom de balise ([bug Firefox 206053](https://bugzil.la/206053)).
- Les évènements `DOMNodeInserted` et `DOMNodeRemoved` s'appliquent à présent aux bons nœuds ([bug Firefox 367164](https://bugzil.la/367164)).
- `\d`, un des caractères spéciaux dans les expressions rationnelles, a été corrigé pour correspondre uniquement aux chiffres de base de l'alphabet latin (équivalent à `[0-9]`). ([bug Firefox 378738](https://bugzil.la/378738))
- La catégorie image-sniffing-services permet aux décodeurs d'images implémentés comme des extensions de décoder correctement des images envoyées avec des types MIME incorrects. ([bug Firefox 391667](https://bugzil.la/391667))

### Voir aussi

- [Firefox 3 pour les développeurs](/fr/Firefox_3_pour_les_développeurs)

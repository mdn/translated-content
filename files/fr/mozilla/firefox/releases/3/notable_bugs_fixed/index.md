---
title: Bugs importants corrigés dans Firefox 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
translation_of: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
original_slug: Bugs_importants_corrigés_dans_Firefox_3
---
{{FirefoxSidebar}}

Cet article fait la liste des corrections importantes faisant partie de Firefox 3 qui ne sont pas nécessairement évidentes à trouver dans la documentation.

- Si une erreur se produit à l'analyse d'un overlay, l'overlay n'est pas appliqué. Les erreurs d'analyse apparaissent dans la console d'erreurs. ({{ Bug(355755) }})
- Des `<menupopup>` peuvent être placés dans une liaison XBL et être attachés à un élément de menu ou apparenté. ({{ Bug(345896) }})
- La propriété `dlgType` des éléments `button` fonctionne correctement. ({{ Bug(308591) }})
- Le paramètre `canBubble` de {{ Domxref("event.initEvent") }} fonctionne correctement et des évènements peuvent être déclenchés sans se propager. ({{ Bug(330190) }})
- L'évènement `DOMAttrModified` gère les attributs avec espace de noms correctement. ({{ Bug(247095) }})
- Les instructions de traitement XML, comme `<?xml-stylesheet ?>`, sont maintenant ajoutés au DOM des documents XUL. Cela signifie que {{ Domxref("document.firstChild") }} n'est pas forcément l'élément racine, utilisez plutôt {{ Domxref("document.documentElement") }}. Par ailleurs, les instructions de traitement `<?xml-stylesheet ?>` et `<?xul-overlay ?>` n'ont maintenant plus d'effet en dehors du prologue du document. ({{ Bug(319654) }})
- Les fonctions `getElementsByAttributeNS()` ont été ajoutées aux éléments et documents XUL. ({{ Bug(239976) }})
- Les gestionnaires d'évènements sont conservés lorsque des éléments sont déplacés dans ou retirés d'un document XUL. ({{ Bug(286619) }})
- Les évènements de mutation sont déclenchés aussi pour les documents non affichés. ({{ Bug(201238) }})
- Divers problèmes dans l'ordre d'affichage des éléments ont été corrigés. ({{ Bug(317375) }})
- [`getElementsByTagName()`](fr/DOM/element.getElementsByTagName) a été corrigé pour fonctionner correctement sur les sous-arbres dont des éléments ont des préfixes d'espaces de noms dans leur nom de balise ({{ Bug(206053) }}).
- Les évènements `DOMNodeInserted` et `DOMNodeRemoved` s'appliquent à présent aux bons nœuds ({{ Bug(367164) }}).
- `\d`, un des caractères spéciaux dans les expressions rationnelles, a été corrigé pour correspondre uniquement aux chiffres de base de l'alphabet latin (équivalent à `{{ mediawiki.external('0-9') }}`). ({{ Bug(378738) }})
- La catégorie image-sniffing-services permet aux décodeurs d'images implémentés comme des extensions de décoder correctement des images envoyées avec des types MIME incorrects. ({{ Bug(391667) }})

### Voir également

- [Firefox 3 pour les développeurs](fr/Firefox_3_pour_les_d%c3%a9veloppeurs)

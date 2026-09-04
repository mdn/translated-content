---
title: Mise à jour des modules complémentaires pour Firefox 10
slug: Mozilla/Firefox/Releases/10/Updating_add-ons
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Bien que de nombreux changements aient eu lieu dans Firefox 10, qui, en théorie, pourraient provoquer des problèmes de compatibilité des modules complémentaires, la plupart d'entre eux sont relativement obscurs, il est donc peu probable qu'ils vous affectent. Cet article vous aide à mettre à jour votre module complémentaire.

## Compatible par défaut

La première chose à noter est qu'à partir de Firefox 10, les modules complémentaires sont considérés comme compatibles par défaut. À moins que vous n'utilisiez le drapeau [`<em:strictCompatibility>` <sup>(angl.)</sup>](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests#strictcompatibility) dans votre manifeste, Firefox ne marque plus votre module complémentaire comme incompatible après une mise à jour vers Firefox 10 ou une version ultérieure. Vous pouvez utiliser ce drapeau pour vous assurer qu'un module complémentaire susceptible de se casser ne tente pas de s'exécuter dans des copies mises à jour de Firefox. Il convient de noter que les modules complémentaires contenant des composants binaires sont toujours strictement vérifiés pour la compatibilité, car les composants binaires doivent toujours être recompilés pour chaque version majeure de Firefox.

> [!NOTE]
> Vous devez toujours tester votre module complémentaire sur Firefox 10, même dans le monde de la compatibilité par défaut. Lisez le reste de cet article pour voir s'il y a quelque chose que vous devez changer.

## Changements du DOM

Certaines API obsolètes ont été supprimées du DOM&nbsp;:

- {{DOMxRef("Node.isSameNode()")}}
  - : Cette suppression est celle qui est la plus susceptible d'affecter les développeur·euse·s de modules complémentaires, car elle était assez couramment utilisée. Vous pouvez maintenant utiliser l'opérateur JavaScript `===` pour comparer les nœuds au lieu de cette méthode obsolète. Cette méthode a été rendue obsolète par la spécification DOM4.
- `text.isElementContentWhitespace`, `text.replaceWholeText()`
  - : Ces API ont été rendues obsolètes par la spécification DOM4.

- {{DOMxRef("Document.xmlEncoding")}}, `Document.xmlStandalone`, {{DOMxRef("Document.xmlVersion")}}
  - : Toutes ces API ont été rendues obsolètes par la spécification DOM4. Elles étaient le plus souvent utilisées pour détecter si le document affiché était HTML ou XML. Consultez l'article sur {{DOMxRef("Document.xmlVersion")}} pour connaître la méthode recommandée pour tester cela à l'avenir.

## Changements de XPCOM et d'interface

Le changement le plus significatif est que partout où le type de données [`PRBool` <sup>(angl.)</sup>](https://web.archive.org/web/20210224213411/https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSPR/Reference/PRBool) était utilisé auparavant, le type standard C++ `bool` est désormais utilisé à la place.

### Interfaces supprimées

Les interfaces suivantes ont été supprimées&nbsp;:

- `nsIDOMNSHTMLFrameElement`
  - : Cette interface a été fusionnée avec l'interface `nsIDOMHTMLFrameElement`.
- `nsIDOMNSHTMLElement`
  - : Cette interface a été fusionnée avec `nsIDOMHTMLElement`.
- `nsIDocumentViewer`
  - : Cette interface a été fusionnée avec `nsIContentViewer`.

### Autres changements d'interface

- `nsNavHistory` ne met plus en œuvre l'interface `nsICharsetResolver`. **Notez que `nsICharsetResolver` n'est plus utilisé et sera supprimé dans Firefox 11.0**.
- Les interfaces `mozISpellCheckingEngine` et `nsIEditorSpellCheck` ont été mises à jour pour permettre aux modules complémentaires sans redémarrage d'ajouter des dictionnaires au vérificateur orthographique. Voir [Utilisation d'un vérificateur orthographique externe](/fr/docs/Mozilla/Firefox/Releases/3/Using_an_external_spell_checker) pour plus de détails (notez que cet article n'a pas encore été mis à jour, mais le sera bientôt).
- L'attribut `nsIBrowserHistory.lastPageVisited` a été supprimé, car il n'était plus pris en charge depuis un certain temps.
- Plusieurs interfaces internes [IndexedDB](/fr/docs/Web/API/IndexedDB_API) ont été modifiées pour prendre en charge les API révisées. Cela ne doit pas vous affecter, mais il est utile de le noter au cas où vous faites quelque chose d'inhabituel.

## Autres changements dignes de mention

- Tous les composants binaires sous Windows doivent être compilés avec le support ASLR (pour «&nbsp;<i lang="en">address space layout randomization</i>&nbsp;» en anglais) activé. Bien que cela ne soit pas **encore** obligatoire, cela peut l'être à l'avenir, et ne pas l'activer entraîne une pénalité de performance.
- Un bogue dans la gestion des expressions régulières introduit dans Firefox 7 a été corrigé. Cela peut changer le résultat de certaines expressions régulières, soyez donc vigilant.
- Vous pouvez maintenant [charger et décharger dynamiquement des fichiers chrome.manifest dans les modules complémentaires amorçables <sup>(angl.)</sup>](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).
- Les évènements `mouseenter` et `mouseleave` sont désormais pris en charge.

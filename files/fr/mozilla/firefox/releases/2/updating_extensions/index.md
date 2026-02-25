---
title: Mise à jour des extensions pour Firefox 2
slug: Mozilla/Firefox/Releases/2/Updating_extensions
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Cet article s'adresse aux développeurs qui souhaitent mettre à jour leur extension pour qu'elle fonctionne correctement avec Firefox 2.

## Étape 1 : Mise à jour du manifeste d'installation

La première étape - pour de nombreuses extensions, la seule nécessaire - est de mettre à jour le fichier du [manifeste d'installation <sup>(angl.)</sup>](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests), install.rdf, pour annoncer la compatibilité avec Firefox 2.

Trouvez la ligne indiquant la plus récente version de Firefox compatible. Pour Firefox 1.5, elle serait&nbsp;:

```xml
<em:maxVersion>1.5.0.*</em:maxVersion>
```

Et remplacez-la par celle-ci&nbsp;:

```xml
<em:maxVersion>2.0.0.*</em:maxVersion>
```

Réinstallez ensuite votre extension.

## Étape 2 : Mise à jour des calques XUL

Firefox 2 apporte des changements au thème par défaut, et certains éléments de l'interface utilisateur ont été modifiés ou déplacés. Cela peut affecter votre extension, selon les actions de vos calques XUL.

Référez-vous à l'article [Changements dans les thèmes graphiques pour Firefox 2 <sup>(angl.)</sup>](https://web.archive.org/web/20191005020825/https://developer.mozilla.org/en-US/Add-ons/Themes/Obsolete/Theme_changes_in_Firefox_2) pour déterminer les modifications qui pourraient avoir un effet sur votre extension.

## Étape 3 : Test

Assurez-vous de tester en profondeur votre extension sous Firefox 2 avant de la publier. Vous ne désirez sûrement pas que votre extension soit la cause d'un déferlement de rapports de bogues avec la toute dernière version de Firefox...

## Étape 4 : Publication

Mettez à jour la description de votre extension sur <https://addons.mozilla.org>, pour vous assurez que les utilisateur·ice·s la retrouveront.

De plus, si le manifeste d'installation contient une [`updateURL` <sup>(angl.)</sup>](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests#updateurl), vérifiez qu'elle est valide pour que Firefox puisse automatiquement trouver les nouvelles versions de votre extension. De cette manière, Firefox proposera de l'installer automatiquement au premier lancement de l'extension après le passage à Firefox 2.

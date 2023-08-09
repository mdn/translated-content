---
title: Mise à jour des extensions pour Firefox 2
slug: Mozilla/Firefox/Releases/2/Updating_extensions
---

{{FirefoxSidebar}}

Cet article s'adresse aux développeurs qui souhaitent mettre à jour leur extension pour qu'elle fonctionne correctement avec Firefox 2.

## Étape 1&nbsp;: Mise à jour du manifeste d'installation

La première étape - pour de nombreuses extensions, la seule nécessaire - est de mettre à jour le fichier du [manifeste d'installation](/fr/Manifestes_d'installation), install.rdf, pour annoncer la compatibilité avec Firefox 2.

Trouvez la ligne indiquant la plus récente version de Firefox compatible. Pour Firefox 1.5, elle serait&nbsp;:

```xml
<em:maxVersion>1.5.0.*</em:maxVersion>
```

Et remplacez-la par celle-ci&nbsp;:

```xml
<em:maxVersion>2.0.0.*</em:maxVersion>
```

Réinstallez ensuite votre extension.

## Étape 2&nbsp;: Mise à jour des calques XUL

Firefox 2 apporte des changements au thème par défaut, et certains éléments de l'interface utilisateur ont été modifiés ou déplacés. Cela peut affecter votre extension, selon les actions de vos calques XUL.

Référez-vous à l'article [Changements dans les thèmes graphiques pour Firefox 2](/fr/Changements_dans_les_thèmes_graphiques_pour_Firefox_2) pour déterminer les modifications qui pourraient avoir un effet sur votre extension.

## Étape 3&nbsp;: Test

Assurez-vous de tester en profondeur votre extension sous Firefox 2 avant de la publier. Vous ne désirez sûrement pas que votre extension soit la cause d'un déferlement de rapports de bogues avec la toute dernière version de Firefox...

## Étape 4&nbsp;: Publication

Mettez à jour la description de votre extension sur <http://addons.mozilla.org>, pour vous assurez que les utilisateurs la retrouveront.

De plus, si le manifeste d'installation contient une [`URL de mise à jour`](/fr/Manifestes_d'installation#updateURL), vérifiez qu'elle est valide pour que Firefox puisse automatiquement trouver les nouvelles versions de votre extension. De cette manière, Firefox proposera de l'installer automatiquement au premier lancement de l'extension après le passage à Firefox 2.

---
title: Approvisionnement PKCS
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11
---

{{AddonSidebar}}

L'API `pkcs11` permet à une extension d'énumérer les modules de sécurité [PKCS #11](https://en.wikipedia.org/wiki/PKCS_11), et de rendre accessibles au navigateur en tant que sources clés et de certificats.

Pour utiliser cette API, vous devez avoir la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "pkcs11".

## Utilisation de la boîte de dialogue Préférences Firefox pour installer les modules PKCS #11

Effectuez les étapes suivantes :

1. Sauvegardez le module PKCS #11 dans un emplacement permanent sur votre ordinateur local
2. Sélectonnez **Outils > Options** ou sélectionnez le **menu Firefox** puis **Options**
3. Une fois la page Options ouverte, sélectionnez **Vie privée & Sécurité**
4. Faites défiler vers le bas de la page et sous **Certificats** ou tapez sur **Dispositifs de sécurité...
   ![](device_manager.png)**
5. Cliquez ou appuyez sur le bouton **Charger**
   ![](load_device_driver.png)
6. Entrez un nom pour le module de sécurité, tel que "_Ma Base de données Client_"

   > **Attention :** il y a actuellement un bogue dans Firefox où les caractères internationaux peuvent causer des problèmes.

7. Choisir **Parcourir...** pour trouver l'emplacement du module PKCS #11 sur votre ordinateur local, puis cliquez ou appuyez sur **OK** pour confirmer.

<!---->

## Provisionnement des modules PKCS #11

> **Note :** A partir de Firefox 58, les extensions peuvent utiliser l'API [pkcs11](/fr/Add-ons/WebExtensions/API/pkcs11) pour énumérer les modules PKCS #11 et les rendre accessibles au navigateur comme sources de clés et certificats.

Il y a 2 pré-requis pour pouvoir utiliser cette API:

- un ou plusieurs modules PKCS # 11 doivent être installés sur l'ordinateur de l'utilisateur
- pour chaque module PKCS # 11 installé, il doit y avoir un fichier [manifest natif](/fr/Add-ons/WebExtensions/manifests_native) qui permet au navigateur de localiser le module.

Très probablement, l'utilisateur ou l'administrateur du périphérique installerait le module `PKCS #11`, et son installateur installerait le fichier de manifeste natif en même temps.

Cependant, le module et le manifeste ne peuvent pas être installés dans le cadre du processus d'installation de l'extension.

Pour plus de détails sur le contenu et l'emplacement du fichier de manifeste, voir [Manifest natifs](/fr/Add-ons/WebExtensions/Native_manifests).

## Fonctions

- {{WebExtAPIRef("pkcs11.getModuleSlots()")}}
  - : Pour chaque emplacement dans un module, obtenez son nom et s'il contient un jeton.
- {{WebExtAPIRef("pkcs11.installModule()")}}
  - : Installe le module PKCS # 11 nommé
- {{WebExtAPIRef("pkcs11.isModuleInstalled()")}}
  - : Vérifie si le module PKCS # 11 nommé est installé.
- {{WebExtAPIRef("pkcs11.uninstallModule()")}}
  - : Désinstalle le module PKCS # 11 nommé.

## Compatibilité des navigateurs

{{Compat}} {{WebExtExamples("h2")}}

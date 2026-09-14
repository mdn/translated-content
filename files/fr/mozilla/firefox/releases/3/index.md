---
title: Firefox 3 note de version pour les développeurs
short-title: Firefox 3
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Si vous êtes un·e développeur·euse cherchant à comprendre toutes les nouvelles fonctionnalités de Firefox 3, c'est l'endroit idéal pour commencer. Cet article fournit une liste des nouveaux articles couvrant les fonctionnalités ajoutées à Firefox 3. Bien qu'il ne couvre pas nécessairement chaque petite modification, il vous aide à découvrir les améliorations majeures.

## Nouvelles fonctionnalités pour les développeur·euse·s dans Firefox 3

### Pour les développeur·euse·s de sites et d'applications Web

- [Mettre à jour les applications Web pour Firefox 3](/fr/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Fournit des informations sur les modifications que vous pourriez devoir apporter à votre site Web ou à votre application Web pour tirer parti des nouvelles fonctionnalités de Firefox 3.
- [Évènements en ligne et hors ligne](/fr/docs/Web/API/Navigator/onLine)
  - : Firefox 3 prend en charge les évènements en ligne et hors ligne du WHATWG, qui permettent aux applications et aux extensions de détecter s'il y a une connexion Internet active, ainsi que de détecter lorsque la connexion est établie ou interrompue.
- [Gestionnaires de protocoles basés sur le Web](/fr/docs/Web/API/Navigator/registerProtocolHandler)
  - : Vous pouvez désormais enregistrer des applications Web en tant que gestionnaires de protocoles en utilisant la méthode `navigator.registerProtocolHandler()`.
- [Dessiner du texte sur un canvas](/fr/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Vous pouvez désormais dessiner du texte dans un canvas en utilisant une API non standardisée prise en charge par Firefox 3.
- [Prise en charge des transformations pour le canvas](/fr/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox prend désormais en charge les méthodes `transform()` et `setTransform()` sur les canvas.
- [Utilisation des microformats](/fr/docs/Web/HTML/Guides/Microformats)
  - : Firefox prend désormais en charge les API pour travailler avec les microformats.
- [Évènements de glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 prend en charge de nouveaux évènements qui sont envoyés au nœud source d'une opération de glisser-déposer lorsque le glissement commence et se termine.
- [Gestion du focus dans HTML](/fr/docs/Web/API/Document/hasFocus)
  - : Les nouveaux attributs HTML 5 `activeElement` et `hasFocus` sont pris en charge.
- Ressources hors ligne dans Firefox
  - : Firefox 3 permet désormais aux applications Web de demander la mise en cache des ressources afin que l'application puisse être utilisée hors ligne.
- [Améliorations CSS dans Firefox 3 <sup>(angl.)</sup>](https://web.archive.org/web/20210224062716/https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/releases/3/CSS_improvements)
  - : Firefox 3 offre un certain nombre d'améliorations dans sa prise en charge du CSS.
- [Améliorations du DOM dans Firefox 3](/fr/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 propose un certain nombre de nouvelles fonctionnalités dans l'implémentation du DOM, y compris la prise en charge de plusieurs extensions Internet Explorer au DOM.
- [Prise en charge de JavaScript 1.8 <sup>(angl.)</sup>](https://web.archive.org/web/20210224081539/https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8)
  - : Firefox 3 prend en charge JavaScript 1.8.
- [Prise en charge d'EXSLT](/fr/docs/Web/XML/EXSLT)
  - : Firefox 3 fournit une prise en charge d'un sous-ensemble substantiel des extensions [EXSLT](/fr/docs/Web/XML/EXSLT) pour [XSLT](/fr/docs/Web/XML/XSLT).
- [Améliorations SVG dans Firefox 3](/fr/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : La prise en charge de SVG dans Firefox 3 a été considérablement améliorée, avec la prise en charge de plus de deux douzaines de nouveaux filtres, plusieurs nouveaux éléments et attributs, et d'autres améliorations.
- [Graphiques PNG animés](/fr/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 prend en charge le format d'image PNG animé (APNG).

### Pour les développeur·euse·s XUL et d'extensions

#### Améliorations et modifications notables

- [Mise à jour des extensions pour Firefox 3](/fr/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Fournit un guide sur les actions à entreprendre pour mettre à jour votre extension afin qu'elle fonctionne avec Firefox 3.
- [Améliorations de XUL dans Firefox 3](/fr/docs/Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3)
  - : Firefox 3 offre un certain nombre de nouveaux éléments XUL, y compris de nouvelles échelles coulissantes, les sélecteurs de date et d'heure, et les boutons de sélection.
- [Modèles dans Firefox 3](/fr/docs/Mozilla/Firefox/Releases/3/Templates)
  - : Les modèles ont été considérablement améliorés dans Firefox 3. L'amélioration clé permet l'utilisation de processeurs de requêtes personnalisés pour permettre l'utilisation de sources de données autres que RDF.
- [Sécuriser les mises à jour <sup>(angl.)</sup>](https://web.archive.org/web/20201031093738/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Afin de fournir un chemin de mise à jour des extensions plus sécurisé pour les utilisateur·ice·s, les extensions doivent désormais fournir une méthode sécurisée pour obtenir les mises à jour avant de pouvoir être installées. Les extensions hébergées sur [AMO <sup>(angl.)</sup>](https://addons.mozilla.org/) fournissent automatiquement cette méthode. Toute extension installée qui ne fournit pas de méthode de mise à jour sécurisée lorsque l'utilisateur·ice passe à Firefox 3 est automatiquement désactivée. Firefox continue cependant à vérifier les mises à jour de l'extension par le chemin non sécurisé et tente d'installer toute mise à jour proposée (l'installation échoue si la mise à jour ne fournit pas non plus une méthode de mise à jour sécurisée).
- [Guide de migration vers Places <sup>(angl.)</sup>](https://web.archive.org/web/20200621121524/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/Places/Places_Developer_Guide)
  - : Un article sur la manière de mettre à jour une extension existante pour utiliser l'API Places.
- [Améliorations du gestionnaire de téléchargements dans Firefox 3 <sup>(angl.)</sup>](https://web.archive.org/web/20191009203342/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Download_Manager_improvements_in_Firefox_3)
  - : Le gestionnaire de téléchargements de Firefox 3 propose de nouvelles API améliorées, y compris la prise en charge de plusieurs écouteurs de progression.
- Utiliser nsILoginManager
  - : Le gestionnaire de mot de passe a été remplacé par le nouveau gestionnaire de connexion.
- [Intégration des liaisons XBL <sup>(angl.)</sup>](https://web.archive.org/web/20190710111835/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XBL/XBL_1.0_Reference/Elements#binding)
  - : Vous pouvez maintenant utiliser le schéma d'URL `data:` à partir du code chrome pour intégrer directement les liaisons XBL au lieu de les avoir dans des fichiers XML séparés.
- [Traduire les descriptions d'extensions <sup>(angl.)</sup>](https://web.archive.org/web/20210126131244/https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localizing_extension_descriptions)
  - : Firefox 3 offre une nouvelle méthode pour localiser les métadonnées des extensions. Cela permet aux détails localisés d'être disponibles dès que l'extension a été téléchargée, ainsi que lorsque l'extension est désactivée.
- [Traduction et pluriels <sup>(angl.)</sup>](https://web.archive.org/web/20210619213040/https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals)
  - : Firefox 3 ajoute le nouveau module PluralForm, qui fournit des outils pour aider à correctement pluraliser les mots dans plusieurs localisations.
- [Changements de thème dans Firefox 3 <sup>(angl.)</sup>](https://web.archive.org/web/20210518052656/https://developer.mozilla.org/en-US/docs/Archive/Themes/Theme_changes_in_Firefox_3)
  - : Notes et informations utiles pour les personnes souhaitant créer des thèmes pour Firefox 3.

#### Nouveaux composants et fonctionnalités

- [Bibliothèque FUEL <sup>(angl.)</sup>](https://web.archive.org/web/20210516092241/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/Toolkit_API/FUEL)
  - : FUEL vise à faciliter la productivité des développeur·euse·s d'extensions en minimisant certaines formalités XPCOM et en ajoutant quelques idées «&nbsp;modernes&nbsp;» de JavaScript.
- [Places <sup>(angl.)</sup>](https://web.archive.org/web/20210620103113/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/Places)
  - : Les API d'historique et de signets ont été complètement remplacées par la nouvelle API Places.
- [Service d'inactivité <sup>(angl.)</sup>](https://web.archive.org/web/20210511041145/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIIdleService)
  - : Firefox 3 offre la nouvelle interface `nsIIdleService`, qui permet aux extensions de déterminer depuis combien de temps l'utilisateur·ice n'a pas appuyé sur une touche ou déplacé sa souris.
- [Écrire des archives ZIP <sup>(angl.)</sup>](https://web.archive.org/web/20210619003034/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIZipWriter)
  - : La nouvelle interface `nsIZipWriter` permet aux extensions de créer des archives ZIP.
- [Zoom sur toute la page](/fr/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 améliore l'expérience utilisateur en offrant un zoom sur toute la page en plus du zoom sur le texte uniquement.
- [Interfaçage avec le collecteur de cycles XPCOM <sup>(angl.)</sup>](https://web.archive.org/web/20210620195127/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Interfacing_with_the_XPCOM_cycle_collector)
  - : Le code XPCOM peut désormais tirer parti du collecteur de cycles, ce qui permet de s'assurer que la mémoire inutilisée est libérée au lieu de fuir.
- [Le gestionnaire de processus <sup>(angl.)</sup>](https://web.archive.org/web/20210419232321/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/The_Thread_Manager)
  - : Firefox 3 fournit la nouvelle interface `nsIThreadManager`, ainsi que de nouvelles interfaces pour les processus et les évènements de processus, ce qui offre un moyen pratique de créer et de gérer des processus dans votre code.
- [Les modules JavaScript <sup>(angl.)</sup>](https://web.archive.org/web/20210531090101/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules)
  - : Firefox 3 propose désormais un nouveau mécanisme de module de code partagé qui vous permet de créer facilement des modules en JavaScript pouvant être chargés par des extensions et des applications, un peu comme des bibliothèques partagées.
- [L'interface `nsIJSON` <sup>(angl.)</sup>](https://web.archive.org/web/20210514110540/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIJSON)
  - : Firefox 3 offre la nouvelle interface `nsIJSON`, qui permet un encodage et un décodage performants des chaînes de caractères [JSON](/fr/docs/Glossary/JSON).
- [L'interface `nsIParentalControlsService` <sup>(angl.)</sup>](https://web.archive.org/web/20210514110540/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIParentalControlsService)
  - : Firefox 3 prend désormais en charge la fonctionnalité de contrôle parental de Microsoft Windows Vista et permet au code d'interagir avec elle.
- [Utiliser les préférences de contenu <sup>(angl.)</sup>](https://web.archive.org/web/20210314182749/https://developer.mozilla.org/en-US/docs/Archive/Misc_top_level/Using_content_preferences)
  - : Firefox 3 inclut un nouveau service pour obtenir et définir des préférences spécifiques à un site que les extensions ainsi que le code principal peuvent utiliser pour suivre les préférences de leurs utilisateur·ice·s pour chaque site.
- [Surveillance des plug-ins <sup>(angl.)</sup>](https://web.archive.org/web/20160617124200/https://developer.mozilla.org/en-US/Add-ons/Plugins/Monitoring_plugins)
  - : Un nouveau composant du système de plug-ins est désormais disponible pour mesurer le temps nécessaire à l'exécution des appels des plug-ins (par exemple, Macromedia Flash).

#### Bugs corrigés

- [Bugs importants corrigés dans Firefox 3](/fr/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Cet article fournit des informations concernant les bugs corrigés dans Firefox 3.

## Nouvelles fonctionnalités pour les utilisateur·ice·s

### Expérience utilisateur·ice

- **Gestion simplifiée des mots de passe.** Une barre d'information apparaît en haut de la fenêtre du navigateur pour permettre d'enregistrer le mot de passe après une identification réussie.
- **Installation de modules simplifiée.** Il est à présent possible d'installer des extensions depuis des sites tiers en un nombre réduit de clics, grâce au retrait de la liste blanche des sites de téléchargement de modules.
- **Nouveau gestionnaire de téléchargement.** Le gestionnaire de téléchargement permet de retrouver plus facilement vos fichiers téléchargés.
- **Reprise des téléchargements.** Il est à présent possible de reprendre des téléchargements après le redémarrage du navigateur ou la réinitialisation de votre connexion au réseau.
- **Zoom pleine page.** Depuis le menu Affichage et à l'aide de raccourcis clavier, il est à présent possible d'agrandir et de réduire le contenu de pages entières — il ne s'agit plus simplement du texte mais également de la mise en page et des images.
- **Défilement des onglets et menu rapide.** Les onglets sont plus faciles à identifier avec le nouveau défilement des onglets et leur menu rapide.
- **Enregistrement de votre session.** Firefox 3 vous demande si vous désirez enregistrer vos onglets ouverts lorsque vous quittez Firefox.
- **Comportement d'ouverture dans des onglets optimisé.** L'ouverture d'un dossier de marque-pages dans des onglets ajoute une série de nouveaux onglets au lieu de remplacer les onglets existants.
- **Barres d'adresse et de recherche plus faciles à redimensionner.** Il est à présent aisé de redimensionner les barres d'adresse et de recherche grâce à une poignée de redimensionnement située entre les deux.
- **Améliorations dans la sélection de texte.** Il est à présent possible de sélectionner plusieurs sections de texte à l'aide de la touche Ctrl (Command sur Macintosh). Un double clic avec déplacement sélectionne en mode «&nbsp;mot à mot&nbsp;». Un triple clic sélectionne tout le paragraphe.
- **Barre de recherche.** La barre de recherche dans la page s'ouvre avec le contenu de la sélection courante.
- **Gestion des plugins.** Les utilisateur·ice·s peuvent désactiver des plugins particuliers dans le gestionnaire de modules complémentaires.
- **Intégration dans Windows Vista.** Les menus de Firefox s'affichent à présent avec le thème natif de Vista.
- **Intégration dans Mac OS X.** Firefox utilise le correcteur orthographique de Mac OS X et gère [Growl <sup>(anhl.)</sup>](https://growl.github.io/growl/) pour les notifications de téléchargements terminés et de mises à jour disponibles.
- **Bouton «&nbsp;Star&nbsp;».** Le nouveau bouton en forme d'étoile dans la Barre d'adresse permet d'ajouter rapidement un marque-page en un clic. Un second clic permet de ranger et de mettre des étiquettes sur le nouveau marque-page.
- **Étiquettes.** Vous pouvez associer des étiquettes à vos marque-pages pour les trier facilement par sujet.
- **Barre d'adresse et autocomplétion.** Entrez le titre ou l'étiquette d'une page dans la Barre d'adresse pour retrouver rapidement le site que vous cherchez dans votre historique et vos marque-pages. Des indicateurs reprenant l'icône du site, le marque-page et les étiquettes associés vous aident à savoir d'où viennent les résultats.
- **Dossier de marque-pages intelligent.** Le nouveau Classeur de Firefox permet d'accéder rapidement à vous pages récemment marquées et étiquetées, ainsi qu'aux pages que vous visitez fréquemment.
- **Organiseur de marque-pages et d'historique.** La nouvelle gestion unifiée des marque-pages et de l'historique vous permet d'y effectuer rapidement des recherches avec des vues multiples et des dossier dynamiques permettant de conserver vos recherches les plus fréquentes.
- **Gestionnaire de protocoles Web.** Des applications Web, comme les webmails, peuvent à présent être utilisées comme des applications de bureau pour gérer les liens `mailto:` venant d'autres sites. Une gestion similaire est fournie pour d'autres protocoles. (Notez que les applications Web doivent s'enregistrer elles-mêmes dans Firefox avant que cela fonctionne.)
- **Actions de téléchargement faciles à utiliser.** Un nouveau panneau de préférences d'applications fournit une interface améliorée pour la configuration de gestionnaires pour différents types de fichiers et de protocoles.
- **Apparence visuelle améliorée.** La gestion des images et des polices a été améliorée pour permettre aux sites d'être mieux rendus sur votre écran, avec un rendu des polices plus précis et une meilleure gestion des polices avec des ligatures et des écritures complexes. En outre, les utilisateur·ice·s de Mac et Linux (Gnome) remarquent que Firefox se comporte plus que jamais comme une application native sur leur plateforme, avec une nouvelle apparence.
- **Gestion des couleurs.** En définissant la préférence `gfx.color_management.enabled` dans `about:config`, vous pouvez demander à Firefox d'utiliser les profils de couleur intégrés dans les images afin d'ajuster la représentation des couleurs à votre écran d'affichage.
- **Fonctionnement hors ligne.** Les applications Web peuvent bénéficier de nouvelles fonctionnalités leur permettant d'être utilisées même sans connexion Internet active.

### Sécurité et vie privée

- **Informations sur un site en un clic.** Vous voulez en savoir plus sur le site affiché&nbsp;? Cliquez sur son icône dans la Barre d'adresse pour en connaître le propriétaire. Les informations d'identité sont affichées plus clairement et plus faciles à comprendre.
- **Protection contre les logiciels malveillants.** Firefox 3 vous avertit si vous vous rendez sur un site connu pour installer des virus, spywares, troyens ou d'autres logiciels dangereux. Vous pouvez voir à quoi cet avertissement ressemble en [visitant cette page](https://www.mozilla.com/firefox/its-an-attack.html).
- **Protection contre les sites contrefaits améliorée.** Lorsque vous visitez une page suspectée d'être une contrefaçon, une page spéciale s'affiche au lieu du contenu de la page avec un avertissement. [Visitez cette page](https://www.mozilla.com/firefox/its-a-trap.html) pour voir à quoi elle ressemble.
- **Erreurs SSL plus faciles à comprendre.** Les erreurs présentées lorsqu'un certificat SSL invalide est rencontré ont été clarifiées pour qu'il soit plus facile de comprendre la nature du problème.
- **Protection contre les modules non à jour.** Firefox 3 vérifie automatiquement les versions des modules et plugins et désactive les versions anciennes et non sûres.
- **Mise à jour sécurisée des modules.** La sécurité des mises à jour des modules a été améliorée en désactivant ceux qui ne fournissent pas un mécanisme de mise à jour sécurisé.
- **Intégration des antivirus.** Firefox 3 informe les logiciels antivirus lorsque des fichiers exécutables ont été téléchargés.
- **Gestion du contrôle parental de Windows Vista.** Firefox 3 prend en compte le paramètre système de contrôle parentale de Vista pour désactiver les téléchargements de fichiers.

### Performances

- **Fiabilité.** Firefox 3 conserve à présent les marque-pages, l'historique, les cookies et les préférences dans une base de données sûre au niveau transactionnel. Cela signifie que vos données sont protégés contre la perte même si votre système se plante.
- **Vitesse.** Firefox 3 dispose d'une amélioration des performances grâce au remplacement de la partie s'occupant de l'affichage à l'écran, ainsi que la gestion de la disposition du contenu.
- **Utilisation mémoire.** Firefox 3 utilise la mémoire de manière plus efficiente avec plus de 300 bugs concernant des fuites mémoire corrigées et de nouvelles fonctionnalités aidant à identifier et libérer automatiquement les blocs mémoire qui ne sont plus utilisés.

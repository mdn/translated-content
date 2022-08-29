---
title: Firefox 3 pour les développeurs
slug: Mozilla/Firefox/Releases/3
tags:
  - Firefox
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3
original_slug: Mozilla/Firefox/Versions/3
---
{{FirefoxSidebar}}

Pour les développeurs qui désirent prendre connaissance de toutes les nouvelles fonctionnalités de Firefox 3, c'est ici qu'il convient de commencer. Cet article fournit la liste des nouveaux articles couvrant les fonctionnalités qui ont été ajoutées à Firefox 3. Même s'il ne couvre pas nécessairement chaque petite modification, il vous aidera à découvrir les améliorations majeures.

## Nouvelles fonctionnalités pour les développeurs dans Firefox 3

### Pour les développeurs de sites et d'applications Web

- [Mise à jour des applications Web pour Firefox 3](/fr/Mise_%C3%A0_jour_des_applications_Web_pour_Firefox_3)
  - : Fournit des informations concernant les changements que vous devrez éventuellement prendre en compte pour permettre à votre site ou application Web de profiter des nouvelles fonctionnalités de Firefox 3.

<!---->

- [Évènements online et offline](/fr/%C3%89v%C3%A8nements_online_et_offline)
  - : Firefox 3 gère les évènements online et offline définis par le WHATWG, qui permettent aux applications et extensions de détecter si une connexion Internet active est disponible, ainsi que de détecter l'activation et la désactivation de la connexion.

<!---->

- [Gestionnaires de protocoles web](/fr/Gestionnaires_de_protocoles_web)
  - : Il est à présent possible d'enregistrer des applications Web en tant que gestionnaires de protocoles à l'aide de la méthode `navigator.registerProtocolHandler()`.

<!---->

- [Dessin de texte avec canvas](/fr/Dessin_de_texte_avec_canvas)
  - : Il est possible de dessiner du texte dans un élément canvas dans Firefox 3 avec une API non normalisée.

<!---->

- [Support des transformations pour canvas](/fr/Tutoriel_canvas/Transformations#Transformations)
  - : Firefox gère à présent les méthodes `transform()` et `setTransform()` sur les éléments canvas.

<!---->

- [Utilisation de microformats](/fr/Utilisation_de_microformats)
  - : Firefox dispose à présent d'API permettant de travailler avec des microformats.

<!---->

- [Évènements de glisser-déposer](/fr/%C3%89v%C3%A8nements_de_glisser-d%C3%A9poser)
  - : Firefox 3 gère de nouveaux évènements envoyés au nœud source d'une opération de glisser-déposer lorsque le glisser débute et se termine.

<!---->

- [Gestion du focus en HTML](/fr/Gestion_du_focus_en_HTML)
  - : Les nouveaux attributs `activeElement` et `hasFocus` de HTML 5 sont gérés.

<!---->

- [Ressources hors ligne dans Firefox](/fr/Ressources_hors_ligne_dans_Firefox)
  - : Firefox permet applications Web de demander que des ressources soient mises en cache pour permettre leur utilisation en mode hors ligne.

<!---->

- [Améliorations CSS dans Firefox 3](/fr/Am%C3%A9liorations_CSS_dans_Firefox_3)
  - : Firefox 3 propose un certain nombre d'améliorations dans son support CSS.

<!---->

- [Améliorations DOM dans Firefox 3](/fr/Am%C3%A9liorations_DOM_dans_Firefox_3)
  - : Firefox 3 propose un certain nombre de nouvelles fonctionnalités dans son implémentation DOM, comme la gestion de plusieurs extensions d'Internet Explorer au DOM.

<!---->

- [Support de JavaScript 1.8](/fr/Nouveaut%C3%A9s_dans_JavaScript_1.8)
  - : JavaScript 1.8 est fourni avec Firefox 3.

<!---->

- [Support d'EXSLT](/fr/EXSLT)
  - : Firefox 3 permet d'utiliser une partie importante des extensions [EXSLT](/fr/EXSLT) à [XSLT](/fr/XSLT).

<!---->

- [Améliorations SVG dans Firefox 3](/fr/Am%C3%A9liorations_SVG_dans_Firefox_3)
  - : La gestion du SVG dans Firefox 3 a été mise à jour de manière substantielle, avec plus d'une vingtaine de nouveaux filtres, plusieurs nouveaux éléments et attributs, et quelques autres améliorations.

<!---->

- [Images PNG animées](/fr/Images_PNG_anim%C3%A9es)
  - : Firefox 3 gère le format d'images PNG animées (APNG).

### Pour les développeurs XUL et d'extensions

#### Améliorations et modifications notables

- [Mise à jour des extensions pour Firefox 3](/fr/Mise_%C3%A0_jour_des_extensions_pour_Firefox_3)
  - : Un guide fournissant tout ce qu'il faut savoir pour mettre à jour une extension afin de la faire fonctionner avec Firefox 3.

<!---->

- [Améliorations XUL dans Firefox 3](/fr/Am%C3%A9liorations_XUL_dans_Firefox_3)
  - : Firefox 3 offre un certain nombre de nouveaux éléments XUL, dont de nouvelles échelles coulissantes, des sélecteurs de date et d'heure, et des boîtes d'incrément (spin buttons).

<!---->

- [Templates dans Firefox 3](/fr/Templates_dans_Firefox_3)
  - : Les templates ont été notablement améliorés dans Firefox 3. Le plus remarquable est la possibilité d'utiliser des processeur de requêtes personnalisés permettant d'utiliser d'autres sources de données que RDF.

<!---->

- [Mises à jour sécurisées](/fr/Versions_d'une_extension,_mise_%C3%A0_jour_et_compatibilit%C3%A9#Mises_.C3.A0_jour_s.C3.A9curis.C3.A9es)
  - : Afin que le processus de mise à jour soit plus sûr pour les utilisateurs, les modules complémentaires doivent à présent fournir une méthode sécurisée de distribution des mises à jour avant de pouvoir être installés. Les modules hébergés sur [AMO](http://addons.mozilla.org) fournissent ceci automatiquement. Tout module installé ne fournissant pas une méthode de mise à jour sécurisée lorsque l'utilisateur migrera vers Firefox 3 sera désactivé automatiquement. Firefox continuera cependant à vérifier si des mises à jour sont disponibles au travers du chemin non sécurisé et essayera d'installer toute mise à jour proposée (l'installation échouera si la mise à jour ne propose pas non plus de méthode de mise à jour sécurisée).

<!---->

- [Guide de migration vers Places](/fr/Guide_de_migration_vers_Places)
  - : Un article concernant la migration d'une application existante pour utiliser l'API Places.

<!---->

- [Améliorations du gestionnaire de téléchargement dans Firefox 3](/fr/Am%C3%A9liorations_du_gestionnaire_de_t%C3%A9l%C3%A9chargement_dans_Firefox_3)
  - : Le gestionnaire de téléchargement de Firefox 3 comprend de nouvelles API et d'autres améliorations, comme la gestion de plusieurs écouteurs de progression.

<!---->

- [Utilisation de nsILoginManager](/fr/Utilisation_de_nsILoginManager)
  - : Le gestionnaire de mots de passe a été remplacé par le nouveau gestionnaire d'identification.

<!---->

- [Intégration de liaisons XBL](/fr/XBL/R%C3%A9f%C3%A9rence_XBL_1.0/%C3%89l%C3%A9ments#binding)
  - : Il est à présent possible d'utiliser le schéma d'URL `data:` depuis du code chrome pour intégrer des liaisons XBL directement au lieu de devoir les placer dans des fichiers XML séparés.

<!---->

- [Localisation des descriptions d'extensions](/fr/Localisation_des_descriptions_d'extensions)
  - : Firefox 3 propose une nouvelle méthode de localisation des métadonnées des modules complémentaires. Ceci permet de disposer des détails localisés dès le téléchargement du module, et même s'il est désactivé.

<!---->

- [Localisation et pluriels](/fr/Localisation_et_pluriels)
  - : Firefox 3 ajout un nouveau module PluralForm fournissant des outils pour aider à mettre des mots correctement au pluriel dans diverses localisations.

<!---->

- [Changements dans les thèmes pour Firefox 3](/fr/Changements_dans_les_th%C3%A8mes_pour_Firefox_3)
  - : Notes et informations pour ceux qui voudraient créer des thèmes pour Firefox 3.

#### Nouveaux composants et fonctionnalités

- [Bibliothèque FUEL](/fr/FUEL)
  - : FUEL sert à améliorer la productivité des développeurs d'extensions en minimisant certaines des formalités XPCOM et en ajoutant certaines idées «&nbsp;modernes&nbsp;» de JavaScript.

<!---->

- [Places](/fr/Places)
  - : Les API d'historique et de marque-pages ont été entièrement remplacés par la nouvelle API [Places](/fr/Places).

<!---->

- [Service Idle](/fr/nsIIdleService)
  - : Firefox 3 propose une nouvelle interface `nsIIdleService` qui permet aux extensions de savoir depuis quand l'utilisateur n'a plus appuyé sur une touche ou déplacé la souris.

<!---->

- [ZIP writer](/fr/NsIZipWriter)
  - : La nouvelle interface `nsIZipWriter` permet aux extensions de pouvoir créer des archives ZIP.

<!---->

- [Zoom pleine page](/fr/Zoom_pleine_page)
  - : Firefox 3 améliore l'expérience utilisateur en offrant un zoom complet des pages en plus du simple zoom de texte.

<!---->

- [Interfaçage avec le collecteur de cycles XPCOM](/fr/Interfa%C3%A7age_avec_le_collecteur_de_cycles_XPCOM)
  - : XPCOM peut à présent bénéficier du collecteur de cycles, qui permet de s'assurer que la mémoire inutilisée est libérée et d'éviter les fuites mémoire.

<!---->

- [Le gestionnaire de threads](/fr/Le_gestionnaire_de_threads)
  - : Firefox 3 propose une nouvelle interface `nsIThreadManager`, accompagnée de nouvelles interfaces pour les threads et les évènements liés, qui offre une manière pratique de créer et gérer des threads dans votre code.

<!---->

- [Modules JavaScript](/fr/Modules_JavaScript)
  - : Firefox 3 offre un mécanisme de modules de code partagés permettant de créer facilement des modules en JavaScript qui pourront être chargés par des extensions et applications, de manière similaire à des bibliothèques partagées.

<!---->

- [L'interface `nsIJSON`](/fr/NsIJSON)
  - : Firefox 3 propose la nouvelle interface `nsIJSON`, qui offre des chaînes de caractères [JSON](/fr/JSON) de codage et décodage en haute performance.

<!---->

- [L'interface nsIParentalControlsService](/fr/NsIParentalControlsService)
  - : Firefox 3 gère à présent la fonctionnalité de contrôle parental de Microsoft Windows Vista, et permet au code d'interagir directement avec elle.

<!---->

- [Utilisation des préférences de contenu](/fr/Utilisation_des_pr%C3%A9f%C3%A9rences_de_contenu)
  - : Firefox 3 fournit un nouveau service permettant de définir et de lire des préférences particulières à un site, que des extensions ou le programme peuvent utiliser pour conserver des informations sur les préférences de l'utilisateur concernant certains sites.

<!---->

- [Surveillance des plugins](/fr/Surveillance_des_plugins)
  - : Un nouveau composant du système de plugins est à présent disponible pour mesurer le temps mis par les plugins (par exemple Macromedia Flash) pour exécuter leurs appels.

#### Bugs corrigés

- [Bugs importants corrigés dans Firefox 3](/fr/Bugs_importants_corrig%C3%A9s_dans_Firefox_3)
  - : Cet article fournit des informations concernant les bugs corrigés dans Firefox 3.

## Nouvelles fonctionnalités pour les utilisateurs

### Expérience utilisateur

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
- **Gestion des plugins.** Les utilisateurs peuvent désactiver des plugins particuliers dans le gestionnaire de modules complémentaires.
- **Intégration dans Windows Vista.** Les menus de Firefox s'affichent à présent avec le thème natif de Vista.
- **Intégration dans Mac OS X.** Firefox utilise le correcteur orthographique de Mac OS X et gère [Growl](http://growl.info/) pour les notifications de téléchargements terminés et de mises à jour disponibles.
- **Bouton «&nbsp;Star&nbsp;».** Le nouveau bouton en forme d'étoile dans la Barre d'adresse permet d'ajouter rapidement un marque-page en un clic. Un second clic permet de ranger et de mettre des étiquettes sur le nouveau marque-page.
- **Étiquettes.** Vous pouvez associer des étiquettes à vos marque-pages pour les trier facilement par sujet.
- **Barre d'adresse et autocomplétion.** Entrez le titre ou l'étiquette d'une page dans la Barre d'adresse pour retrouver rapidement le site que vous cherchez dans votre historique et vos marque-pages. Des indicateurs reprenant l'icône du site, le marque-page et les étiquettes associés vous aident à savoir d'où viennent les résultats.
- **Dossier de marque-pages intelligent.** Le nouveau Classeur de Firefox permet d'accéder rapidement à vous pages récemment marquées et étiquetées, ainsi qu'aux pages que vous visitez fréquemment.
- **Organiseur de marque-pages et d'historique.** La nouvelle gestion unifiée des marque-pages et de l'historique vous permet d'y effectuer rapidement des recherches avec des vues multiples et des dossier dynamiques permettant de conserver vos recherches les plus fréquentes.
- **Gestionnaire de protocoles Web.** Des applications Web, comme les webmails, peuvent à présent être utilisées comme des applications de bureau pour gérer les liens `mailto:` venant d'autres sites. Une gestion similaire est fournie pour d'autres protocoles. (Notez que les applications Web doivent s'enregistrer elles-mêmes dans Firefox avant que cela fonctionne.)
- **Actions de téléchargement faciles à utiliser.** Un nouveau panneau de préférences d'applications fournit une interface améliorée pour la configuration de gestionnaires pour différents types de fichiers et de protocoles.
- **Apparence visuelle améliorée.** La gestion des images et des polices a été améliorée pour permettre aux sites d'être mieux rendus sur votre écran, avec un rendu des polices plus précis et une meilleure gestion des polices avec des ligatures et des écritures complexes. En outre, les utilisateurs de Mac et Linux (Gnome) remarqueront que Firefox se comporte plus que jamais comme une application native sur leur plateforme, avec une nouvelle apparence.
- **Gestion des couleurs.** En définissant la préférence `gfx.color_management.enabled` dans `{{ mediawiki.external('about:config') }}`, vous pouvez demander à Firefox d'utiliser les profils de couleur intégrés dans les images afin d'ajuster la représentation des couleurs à votre écran d'affichage.
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

## Voir également

{{Firefox_for_developers('2')}}

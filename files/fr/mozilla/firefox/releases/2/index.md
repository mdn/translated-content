---
title: Firefox 2 pour les développeurs
slug: Mozilla/Firefox/Releases/2
---

{{FirefoxSidebar}}

## Nouvelles fonctionnalités pour les développeurs dans Firefox 2

Firefox 2 propose un grand nombre de nouvelles fonctionnalités et de nouvelles possibilités. Cet article fournit des liens vers des articles couvrant les nouvelles fonctionnalités.

### Pour les développeurs Web et les développeurs d'applications

- [Microrésumés](http://wiki.mozilla.org/Microsummaries)
  - : Les microrésumés sont de courtes compilations, régulièrement mises à jour, des plus importantes informations présentes sur des pages Web. Ils peuvent être fournis tant par les sites eux-mêmes que par des développeurs tiers. Lorsque les utilisateurs marquent des pages présentant des microrésumés, ils peuvent choisir d'afficher ceux-ci en lieu et place de titres statiques.

<!---->

- [Création d'un générateur de microrésumé](/fr/Création_d'un_générateur_de_microrésumé)
  - : Un tutoriel sur la création d'un générateur de microrésumés.

<!---->

- [Référence grammaticale XML d'un microrésumé](/fr/Référence_grammaticale_XML_d'un_microrésumé)
  - : Un guide de référence sur la grammaire XML utilisée pour la création de générateurs de microrésumés.

<!---->

- [Création de plugins MozSearch](/fr/Création_de_plugins_MozSearch)
  - : Firefox 2 utilise MozSearch, un format de plugins de recherche basé sur OpenSearch.

<!---->

- [Création de plugins OpenSearch pour Firefox](/fr/Création_de_plugins_OpenSearch_pour_Firefox)
  - : Firefox 2 support le format de moteur de recherche OpenSearch.

<!---->

- [Gestion de suggestions dans les plugins de recherche](/fr/Gestion_de_suggestions_dans_les_plugins_de_recherche)
  - : Comment permettre à votre plugin MozSearch de proposer des suggestions, qui apparaîtront dans une liste déroulante au fur et à mesure de la frappe dans la Barre de recherche.

<!---->

- [Nouveautés dans JavaScript 1.7](/fr/Nouveautés_dans_JavaScript_1.7)
  - : Firefox 2 fournit JavaScript 1.7, qui comprend de nouvelles fonctionnalités comme `let`, des assignations déstructurantes, des générateurs et itérateurs, et la définition de tableaux par compréhension.

<!---->

- [WHATWG Client-side session and persistent storage (ou DOM Storage)](/fr/DOM/Storage)
  - : Le stockage de session et le stockage persistant côté client permet aux applications Web de conserver des données structurées du côté du client.

<!---->

- [SVG dans Firefox](/fr/SVG_dans_Firefox)
  - : Firefox 2 améliore le support du SVG (_Scalable Vector Graphics_) en implémentant l'élément `<textPath>` et en ajoutant le support de quelques attributs non encore supportés.

<!---->

- [Contrôle du correcteur d'orthographe dans les formulaires HTML](/fr/Contrôle_du_correcteur_d'orthographe_dans_les_formulaires_HTML)
  - : Firefox 2 contient un correcteur d'orthographe des zones de texte et des champs de saisie. Cet article décrit comment écrire votre HTML pour activer et désactiver ce correcteur d'orthographe sur des éléments individuels de formulaires.

<!---->

- [La sécurité dans Firefox 2](/fr/La_sécurité_dans_Firefox_2)
  - : Firefox 2 a modifié les protocoles de sécurité activés par défaut.

## Pour les développeurs XUL et les développeurs d'extensions

- [Mise à jour des extensions pour Firefox 2](/fr/Mise_à_jour_des_extensions_pour_Firefox_2)
  - : Comment migrer vos extensions existantes pour qu'elles fonctionnent avec Firefox 2.

<!---->

- [API de restauration de session](/fr/API_de_restauration_de_session)
  - : Ajout d'élément à enregistrer et à restaurer d'une session à l'autre dans Firefox.

<!---->

- [API d'accès au contenu de flux](/fr/API_d'accès_au_contenu_de_flux)
  - : API permettant aux développeurs d'accéder et de traiter des flux RSS et Atom.

<!---->

- [Support SAX](/fr/SAX)
  - : API de parcours XML basé sur les évènements.

<!---->

- [Ajout de moteurs de recherche depuis des pages Web](/fr/Ajout_de_moteurs_de_recherche_depuis_des_pages_Web)
  - : Un code JavaScript peut demander à Firefox d'installer un nouveau plugin de moteur de recherche, qui peut être fourni au format OpenSearch ou au format Sherlock.

<!---->

- [Utilisation du correcteur orthographique dans XUL](/fr/Utilisation_du_correcteur_orthographique_dans_XUL)
  - : Explique comment vérifier l'orthographe de certains mots et comment obtenir une liste de suggestions de corrections depuis le code.

<!---->

- [Ajout de fournisseurs de données de protection anti-phishing](/fr/Ajout_de_fournisseurs_de_données_de_protection_anti-phishing)
  - : Il est possible d'améliorer la protection de Firefox contre le phishing (hameçonnage) en ajoutant des fournisseurs de données pour le système de navigation sécurisée.

<!---->

- [Storage](/fr/Storage)
  - : Firefox 2 propose mozStorage, une architecture de base de données basée sur sqlite.

<!---->

- [Changements dans les thèmes graphiques pour Firefox 2](/fr/Changements_dans_les_thèmes_graphiques_pour_Firefox_2)
  - : Discussion autour des changements à apporter au thèmes graphiques existants pour qu'ils fonctionnent avec Firefox 2.

<!---->

- Améliorations de Textbox (à partir de Firefox 2.0.0.1 uniquement)

  - : L'élément `<textbox>` dispose à présent d'une méthode `reset()` pour réinitialiser la valeur de la boîte de texte à sa valeur par défaut. La propriété `defaultValue` peut être utilisée pour récupérer et modifier cette valeur par défaut ([bug Firefox 312867](https://bugzil.la/312867)).

    Support d'une propriété `editor` permettant d'obtenir l'interface interne [nsIEditor](/fr/NsIEditor) pour le champ texte ([bug Firefox 312867](https://bugzil.la/312867)).

## Nouvelles fonctionnalités pour les utilisateurs

Firefox 2 offre une version améliorée de l'agréable interface utilisateur par rapport à ses versions précédentes, avec un niveau accru de sécurité pour rendre votre expérience de navigation encore plus sûre et plus pratique que jamais.

### Apparence et comportement

- La **vérification orthographique des zones de texte** qui permet de remplir les formulaires Web en confiance.
- Les **microrésumés** qui permettent de créer des marque-pages affichant des informations provenant du site auxquels ils sont liés, mises à jour automatiquement. Très utile pour suivre le cours d'une action, d'un enchère, etc.
- **L'interface utilisateur du gestionnaire d'extensions** a été améliorée.
- Les **moteurs de recherche** peuvent être réarrangés et supprimés dans la barre de recherche.
- La **navigation par onglets** a été améliorée, avec l'ajout de boutons de fermeture pour chaque onglet, un meilleur choix de l'onglet à afficher après la fermeture du précédent et des options simplifiées.
- La **découverte automatique des moteurs de recherche** permet aux moteurs de recherche fournissant des plugins pour la barre de recherche de Firefox de vous proposer l'installation directe de ceux-ci.
- Les **suggestions de recherche** permettent aux moteurs de recherche de vous proposer des termes de recherche suivant ce que vous avez commencé à saisir dans la barre de recherche.

### Sécurité et vie privée

- **Fonctionnalité anti-phishing** pour vous avertir lorsque vous consultez un site qui semble être une imitation frauduleuse.

## Voir aussi

{{Firefox_for_developers('1')}}

---
title: 'Django Didactique: Site web "Bibliothèque locale"'
slug: Learn/Server-side/Django/Tutorial_local_library_website
tags:
  - Apprentissage
  - Article
  - Didacticiel
  - Débutant
  - Guide
  - django
translation_of: Learn/Server-side/Django/Tutorial_local_library_website
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}

Le premier article de cette série didactique explique ce que vous apprendrez et donne un aperçu du site Web "Bibliothèque locale", un exemple, qui va être utiliser et évoluer dans les articles suivants.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        La lecture de
        <a href="/fr/docs/Learn/Server-side/Django/Introduction"
          >l'introduction</a
        >. Pour les articles suivants avoir mis à jour l'environnement comme
        décrit précédemment.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs:</th>
      <td>
        Présenter l'application à venir et les thèmes qui seront abordés dans
        cette série didactique.
      </td>
    </tr>
  </tbody>
</table>

## Vue d'ensemble

La série didactique MDN "Bibliothèque locale" va vous permettre de développer un site web destiné à gérer le catalogue d'une bibliothèque.

Dans les articles qui suivent, vous allez apprendre à :

- Utiliser les outils de Django pour créer le squelette d'un site web et d'applications
- Démarrer et arrêter le serveur de développement.
- Créer les modèles de données utilisés par les applications.
- Utiliser les outils d'administration Django du site web pour y enregsitrer et y peupler les données.
- Créer des vues pour exploiter en fonction de demandes particulières et restituer à l'aide de modèles les informations dans des documents HTML affichés par votre navigateur.
- Créer les chemins pour associer des URL avec des vues particulières.
- Ajouter et gérer les autorisations et le contrôle d'accès au site des utilisateurs.
- Manipuler les formulaires.
- Ecrire des jeux de test pour votre application.
- Utiliser les moyens de sécurité de Django.
- Déployer en production vote application.

Que vous ayez déjà des connaissance sur le sujet ou que vous ayez aborder succinctement ce quadriciel, à la fin de cette série didactique, vous serez suffisamment autonome pour développer vos propres applications avec Django.

## Le site web de la "Bibliothèque locale"

La _LocalLibrary_ (Bibliothèque locale) est le nom du site web qui va être créer et qui évoluera tout au long de cette série didatcique. La finalité de ce site web est de diffuser un catalogue des livres en ligne et de permettre aux utilisateurs de le parcourir et de gérer leur propre compte.

Cet exemple a été soigneusement choisi car il permet de progresser en montrant nombre de détails et abordre presque toutes les fonctionnalités de Django. De plus, cet exemple permet d'appréhender progressivement les fonctionnalités les plus importantes du quadriciel :

- Une première étape consistera à définir un catalogue simple qui permet aux utilisateurs de consulter les ouvrages disponibles. Cela combine les schémas classiques et les opérations communes à la plupart de ce type de sites : lire et afficher le contenu d'une base de données...
- La progression des différents articles permettra d'étudier des fonctions plus avancées du quadriciel. Par exemple, utiliser des formulaires et permettre aux utilisateurs de réserver leurs ouvrages, ceci conduit à mettre en place et utiliser la gestion des utilisateurs et de l'authentification.

Même s'il s'agit d'un sujet extensible, son sujet de *Bibliothèque **locale*** est volontaire. Il s'agit d'aborder rapidement de nombreux sujets de Django en manipulant un minimum d'information. Il s'agit d'enregistrer localement les informations fictives sur les livres, copies, auteurs, etc. Il ne s'agit en aucun cas d'élaborer un produit qui gère, comme pourrait le faire une bibliothèque classique d'autres informations, ni gérer un réseau de bibliothèques comme cela pourrait être le cas avec une _**grande** biblothèque_.

## Je suis coincé, où puis-je trouver les sources ?

Au fur et à mesure, les codes et commandes à écrire seront fournis. Ils peuvent être copiés et collés à chaque étapes. Il y aura aussi des codes que vous pourrez compléter avec quelques conseils.

Si vous êtes coincé, vous pourrez trouver une version totalement développée du site sur [GitHub](https://github.com/mdn/django-locallibrary-tutorial) (**Anglais**).

## Résumé

Vous en savez plus sur le projet _LocalLibrary_ et ce que vous allez progressivement apprendre, il est désormais temps de créer le [squellette du projet](/fr/docs/Learn/Server-side/Django/skeleton_website) qui hébergera la bibliothèque.

{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}

## Dans ce module

- [Django introduction](/fr/docs/Learn/Server-side/Django/Introduction)
- [Setting up a Django development environment](/fr/docs/Learn/Server-side/Django/development_environment)
- [Django Didactique: Site web "Bibliothèque locale"](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website)
- [Django didactique Section 2: Créer le squelette du site web](/fr/docs/Learn/Server-side/Django/skeleton_website)
- [Django didactique Section 3: Utilisation des modèles de données](/fr/docs/Learn/Server-side/Django/Models)
- [Django didactique Section 4 : Site d'administration de Django](/fr/docs/Learn/Server-side/Django/Admin_site)
- [Django didactique Section 5: Créer la page d'accueil](/fr/docs/Learn/Server-side/Django/Home_page)
- [Django Tutorial Part 6: Generic list and detail views](/fr/docs/Learn/Server-side/Django/Generic_views)
- [Django Tutorial Part 7: Sessions framework](/fr/docs/Learn/Server-side/Django/Sessions)
- [Django Tutorial Part 8: User authentication and permissions](/fr/docs/Learn/Server-side/Django/Authentication)
- [Django Tutorial Part 9: Working with forms](/fr/docs/Learn/Server-side/Django/Forms)
- [Django Tutorial Part 10: Testing a Django web application](/fr/docs/Learn/Server-side/Django/Testing)
- [Django Tutorial Part 11: Deploying Django to production](/fr/docs/Learn/Server-side/Django/Deployment)
- [Django web application security](/fr/docs/Learn/Server-side/Django/web_application_security)
- [DIY Django mini blog](/fr/docs/Learn/Server-side/Django/django_assessment_blog)

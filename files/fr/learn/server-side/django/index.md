---
title: Django Web Framework (Python)
slug: Learn/Server-side/Django
---

{{LearnSidebar}}

Django est une infrastructure d'application (aussi appelé framework) côté serveur extremement populaire et dotée de beaucoup de fonctionnalités, écrite en Python. Ce module vous montrera pourquoi Django fait partie des frameworks web les plus populaires ainsi que comment l'installer, le mettre en place, et s'en servir afin de créer vos propres applications web.

## Prerequis

Aucune connaissance sur ce framework n'est requise. Il vous faudra seulement comprendre ce qu'est la programmation web côté serveur ainsi que les frameworks web, notamment en lisant les sujets sur notre [module d'initiation à la programmation web coté serveur](/fr/docs/Learn/Server-side/First_steps).

Une connaissance générale en programmation et plus précisement en [Python](/fr/docs/Glossaire/Python) est recommandée, mais pas nécessaire pour comprendre la majeure partie de ce module.

> **Note :** Python est un des languages les plus faciles à apprendre, lire et comprendre pour les novices. Ceci dit, si vous voulez mieux comprendre ce module, il existe beaucoup de livres gratuits et de tutoriaux sur internet (les nouveaux programmeurs pourraient être intéressés par la page du [Python pour les non-programmeurs](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) dans la documentation sur le site officiel de Python: python.org).

## Guides

- [Introduction à Django](/fr/docs/Learn/Server-side/Django/Introduction)
  - : Dans ce premier article, nous répondrons aux questions "qu'est ce que Django ?" et vous donner un aperçu rapide de ce qu'un framework peut vous apporter. Nous survolerons les fonctionnalités principales ainsi que quelques fonctionnalités avancées que nous ne pouvons pas détailler en l'espace d'un seul module. Nous vous montrerons aussi les blocs principaux de Django ce qui vous donnera un aperçu de ce qui est faisable avant de commencer.
- [Installer un environnement de développement pour Django](/fr/docs/Learn/Server-side/Django/development_environment)
  - : Maintenant que vous savez ce qu'est Django, nous allons nous attaquer à la partie installation, comment l'installer sous Windows, Linux(Ubuntu), et Mac OS X — tant que vous utilisez un système d'exploitation commun, cet article devrait vous donner le nécessaire afin de commencer à développer des applications avec Django.
- [Tutoriel Django: Le site web d'une librairie](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website)
  - : Le premier article de cette série de tutoriels explique ce que vous aurez à apprendre autour d'un site que nous allons programmer pour une bibliothèque, site web dans lequel nous allons travailler et évoluer à travers plusieurs articles.
- [Tutoriel Django Partie 2: Créer un squelette d'un site web](/fr/docs/Learn/Server-side/Django/skeleton_website)
  - : Cet article vous montrera comment créer le "squelette" d'un site web auquel vous pourrez ajouter de quoi le personnaliser avec des paramètres spécifiques, des URLs, des modèles et des templates.
- [Tutoriel Django Partie 3: Utilisation des modèles](/fr/docs/Learn/Server-side/Django/Models)
  - : Cet article montre comment définir des modèles pour le site web que nous appelleront _LocalLibrary_ — les modèles représentent la façon dont sont structurées nos données dans nos applications, nous autoriserons aussi Django à stocker des données dans une base de données pour nous (et modifier cela plus tard). Cet article explique en somme ce qu'un modèle est, comment le déclarer et les champs principaux. Il décrit aussi brièvement comment accéder aux données d'un modèle.
- [Tutoriel Django Partie 4: L'administration d'un site sous Django](/fr/docs/Learn/Server-side/Django/Admin_site)
  - : Maintenant que nous avons créé quelques modèles pour le site web _LocalLibrary_ , nous allons utiliser Django Admin afin d'ajouter quelques "réelles" tables de données. Premièrement, nous allons vous montrer comment enregistrer des modèles avec la partie Admin, ensuite nous allons vous montrer comment se connecter et créer des informations. A la fin, nous allons vous montrer quelques moyens d'améliorer la présentation de la partie Admin.
- [Tutoriel Django Partie 5: Céez votre page d'accueil.](/fr/docs/Learn/Server-side/Django/Home_page)
  - : Nous sommes fin prêts à ajouter le code afin d'afficher notre première page entièremement — une page d'accueil pour le site web _LocalLibrary_ qui montre combien d'enregistrements nous avons de chaque types de modèles et fournis une barre de navigation avec des liens menant à d'autres pages. Au fur et à mesure, nous gagnerons de l'expérience en écrivant du mapping d'URLs, en obtenant des enregistrements de la base de données et en utilisant des templates.
- [Tutoriel Django Partie 6: Listes génériques et détails des pages](/fr/docs/Learn/Server-side/Django/Generic_views)
  - : Ce tutoriel viens étendre notre site _LocaLibrary_ en y ajoutant des listes et des détails pour les auteurs et les livres. Ici nous allons tout vous apprendre sur les classes et vous montrer comment elles peuvent réduire la quantité de code que vous avez à écrire dans des situations communes. Nous allons aussi vous apprendre comment manipuler les URL plus en détail, ainsi que la réalisation basique d'un moteur de recherche.
- [Tutoriel Django Partie 7: Les sessions de framework](/fr/docs/Learn/Server-side/Django/Sessions)
  - : Ce tutoriel viens compléter le site _LocalLibrary_, en ajoutant un compteur de visiteurs basé sur un principe de session sur la page principale C'est un exemple relativement simple, mais il vous permettra de vous apprendre comment utiliser le système de session en fournissant un comportement persistant aux utilisateurs anonyme de votre site.
- [Tutoriel Django Partie 8: L'authentification de l'utilisateur ainsi que les permissions](/fr/docs/Learn/Server-side/Django/Authentication)
  - : Dans ce tutoriel, nous allons vous montrer comment autoriser les utilisateurs à se connecter à votre site avec leurs propres comptes, et comment contrôler ce qu'ils peuvent faire et voir en fonction des _permissions_ accordées et de s'ils sont connectés ou non. Comme partie de cette démonstration, nous allons étendre le site _LocalLibrary_ en ajoutant une page de connexion, de déconnexion et d'utilisateur - ainsi que des pages dédiées aux membres de la librairie afin de voir quel livre a été emprunté.
- [Tutoriel Django Partie 9: Travailler avec les formulaires](/fr/docs/Learn/Server-side/Django/Forms)
  - : Dans ce tutoriel, nous allons vous montrer comment travailler avec [les formulaires en HTML](/fr/docs/Web/Guide/HTML/Forms) avec Django, et plus particulièrement la façon la plus facile d'écrire, créer, mettre à jour et supprimer les formulaires. Pour cela, nous allons devoir étendre le site _LocalLibrary_ afin que les libraires puissent changer les livres, et créer, mettre à jour, et supprimer les auteurs en utilisant nos propres formulaires (au lieu de passer par Django Admin).
- [Tutoriel Django Partie 10: Tester une application Django](/fr/docs/Learn/Server-side/Django/Testing)
  - : Plus les sites s'agrandissent, plus il devient dur de les tester manuellement — pas seulement parce que il y a plus de contenu à tester mais aussi parce que les intéractions entre les éléments deviennent plus complexes, un petit changement dans une partie du site peut nécessiter de nombreux tests afin de vérifier que ce changement n'a pas impacté les autres parties du site. La solution à ce problème est de programmer des tests automatiques, qui peuvent facilement et fiablement être executés à chaque changements. Ce tutoriel montre comment automatiser vos tests sur votre site web en utilisant le module de test du framework Django.
- [Tutoriel Django Partie 11: Déployer son site fait avec Django](/fr/docs/Learn/Server-side/Django/Deployment)
  - : Vous avez créé (et testé) un incroyable site web _LocalLibray_, vous allez maintenant l'installer sur un serveur public ce qui le rendra accessible aux membres de la librairie à travers internet. Cet article fournis un aperçu de comment vous pourriez trouver un hébergeur pour déployer votre site et de ce dont vous avez besoin pour rendre votre site pleinement fonctionnel.
- [Le module de sécurité de Django](/fr/docs/Learn/Server-side/Django/web_application_security)
  - : Protéger les données de l'utilisateur est essentiel dans la conception d'un site web, nous avons précédemment expliqué quel pouvaient être les menaces principales dans l'article sur la [sécurité web](/fr/docs/Web/Security) — cet article fournis une démonstration pratique des réaction des protections incluse de Django face à ce genre de menaces ainsi que la façon dont elles sont traitées.

## Evaluation

L'évaluation suivante va tester votre compréhension à créer un site web avec Django comme décris dans la liste des guides ci-dessous.

- [Mini blog avec Django](/fr/docs/Learn/Server-side/Django/django_assessment_blog)
  - : Dans ce devoir, vous utiliserez les connaissances que vous venez d'acquérir, afin de créer votre propre blog.

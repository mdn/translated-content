---
title: Détournement de session
slug: Glossary/Session_Hijacking
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Le **détournement de session** (<i lang="en">Session hijacking</i> en anglais) se produit lorsqu'un attaquant prend le contrôle d'une session valide entre deux ordinateurs. L'attaquant vole un identifiant de session valide afin de pénétrer dans le système et de fouiller les données.

Le plus souvent, l'authentification se produit seulement au début d'une session {{Glossary("TCP")}}. Dans un détournement de session TCP, un attaquant obtient l'accès en prenant en charge une session TCP entre deux machines en milieu de session.

![L'attaquant·e intercepte et accède à un identifiant de session légitime d'un·e utilisateur·ice interagissant avec un serveur web, puis utilise cet identifiant de session pour usurper la session entre l'utilisateur·ice et le serveur afin d'exploiter la session de l'utilisateur·ice et d'accéder directement au serveur.](session_hijacking_3.jpg)

## Le piratage de session se produit parce que

- pas de verrouillage de compte pour les ID de session non valides
- faible algorithme de génération d'ID de session
- manipulation insécurisée
- temps d'expiration de session indéfini
- ID de session courte
- transmission en texte clair

## Le processus de piratage de session

1. **Sniffez**, c'est-à-dire effectuez une attaque d'homme-dans-le-milieu (MitM), placez-vous entre la victime et le serveur.
2. **Surveillez** les paquets circulant entre le serveur et l'utilisateur.
3. **Brisez** la connexion de la machine victime.
4. **Prenez le contrôle** de la session.
5. **Injectez** de nouveaux paquets au serveur en utilisant l'ID de session de la victime.

## Protection contre le détournement de session

- créer un canal de communication sécurisé avec SSH (shell sécurisé)
- passer les cookies d'authentification sur une connexion HTTPS
- implémenter la fonctionnalité de déconnexion afin que l'utilisateur puisse terminer la session
- générer l'ID de session après la réussire de la connexion
- transmettre des données chiffrées entre les utilisateur·ice·s et le serveur web
- utiliser une chaîne ou un long nombre aléatoire comme clé de session

## Voir aussi

- [<i lang="en">Hijacking</i>](https://fr.wikipedia.org/wiki/Hijacking) sur Wikipédia

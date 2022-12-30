---
title: Network throttling
slug: Glossary/Network_throttling
tags:
  - Glossary
  - RUM
  - Reference
  - Synthetic monitoring
  - Web Performance
---
**L'étranglement du réseau** est un ralentissement intentionnel de la vitesse d'Internet. Dans les performances Web, la limitation du réseau ou l'émulation de l'état du réseau, cela est utilisé afin d'émuler les conditions de faible bande passante probablement rencontrées par une large part des utilisateurs cibles d'un site.

Il est important de ne pas négliger les conditions du réseau rencontrées par les utilisateurs sur leur mobile. La vitesse du réseau Internet  est souvent très rapide pour les développeurs qui créent des applications Web sur un ordinateur puissant dans un immeuble de bureaux. En tant que développeur, rédacteur technique ou concepteur, c'est probablement votre expérience. La vitesse du réseau d'un utilisateur mobile accédant à cette application Web, éventuellement en voyage ou dans une région éloignée avec une mauvaise couverture ou un faible forfait de données, sera probablement très lente, s'il est en mesure de se connecter. La limitation du réseau permet à un développeur d'émuler l'expérience d'un utilisateur. La plupart des outils de développement de navigateur, tels que l'inspecteur de navigateur, fournissent une fonction permettant d'émuler différentes conditions de réseau. En émulant l'expérience de votre utilisateur via la limitation du réseau, vous pouvez identifier et résoudre plus facilement les problèmes de temps de chargement.

Les outils de développement du navigateur ont généralement des options de limitation du réseau, pour vous permettre de tester votre application dans des conditions de réseau lentes. Les outils de développement de Firefox, par exemple, ont un menu déroulant disponible à la fois dans le [Moniteur Réseau](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) et la [Vue Adaptative](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) (en anglais) contenant les options de vitesse du réseau (par exemple Wi-Fi, bon 3G, 2G)

## Voir aussi

- [Surveillance synthétique](/en-US/docs/Glossary/Synthetic_monitoring) (en anglais)

---
title: Paquet
slug: Glossary/Packet
tags:
  - Glossaire
  - Paquet
  - Paquet réseau
  - Performance Web
  - Reference
  - TCP
  - charge utile
  - payload
translation_of: Glossary/Packet
original_slug: Glossaire/Paquet
---
Un paquet, ou paquet réseau, est un bloc de données formaté envoyé sur un réseau. Les principaux composants d'un paquet réseau sont les données utilisateur et les informations de contrôle. Les données utilisateur sont appelées _payload ou charge utile_. Les informations de contrôle sont les informations de livraison du payload. Il se compose d'adresses réseau pour la source et la destination, des informations de séquencement et des codes de détection d'erreur et se trouve généralement dans les en-têtes et le pied de page des paquets.

## Ce qu'un paquet contient

### Limite de saut

Un saut se produit lorsqu'un paquet est passé d'un réseau au réseau suivant. C'est un champ qui diminue de un à chaque fois qu'un paquet passe, une fois qu'il atteint 0, il a échoué et le paquet est rejeté.

Au fil du temps, le nombre de paquets peut provoquer une traversée dans des circuits fermés, le nombre de paniers en circulation s'accumulerait et conduirait finalement à l'échec du réseau.

### Détection et correction des erreurs

La détection et la correction d'erreurs sont ds codes utilisés pour détecter et appliquer des corrections aux erreurs qui se produisent lorsque les données sont transmises au récepteur. Il existe deux types de corrections d'erreurs en amont et en aval. La correction d'erreur vers l'arrière est lorsque le récepteur demande à l'expéditeur de retransmettre l'unité de données entière. La correction d'erreur directe est lorsque le récepteur utilise le code de correction d'erreur qui corrige automatiquement les erreurs.

Au niveau de l'émetteur, le calcul est effectué avant l'envoi du paquet. Lorsqu'elle est reçue à la destination, la somme de contrôle est recalculée et comparée à celle du paquet.

### Priorité

Ce champ indique quel paquet doit avoir une priorité plus élevée sur les autres. La file d'attente de priorité élevée est vidée plus rapidement que les files d'attente de priorité inférieure lorsque le réseau est congestionné.

### Adresses

Lors du routage de paquets réseau, deux adresses réseau sont nécessaires: l'adresse source de l'hôte émetteur et l'adresse de destination de l'hôte récepteur.

### Données utilisateur - Payload

Le payload correspond aux données transportées pour le compte d'une application. Il est généralement de longueur variable, jusqu'à un maximum qui est fixé par le protocole réseau et parfois l'équipement sur l'itinéraire.

## Références utilisées

- <https://en.wikipedia.org/wiki/Network_packet>
- [https://en.m.wikipedia.org/wiki/Hop\_(networking)](<https://en.wikipedia.org/wiki/Hop_(networking)>)
- <https://www.techradar.com/news/computing/how-error-detection-and-correction-works-1080736>

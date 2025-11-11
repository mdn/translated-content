---
title: ICE
slug: Glossary/ICE
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**ICE** (pour <i lang="en">Interactive Connectivity Establishment</i> en anglais) est un framework utilisé par {{Glossary("WebRTC")}} (parmi d'autres technologies) pour connecter deux pairs ensemble, indépendamment de la topologie réseau (en général pour des conversations audio et/ou vidéo). Ce protocole laisse les deux pairs chercher et établir une connexion avec l'autre même s'ils utilisent tous les deux de la translation d'adresses ({{Glossary("NAT")}}) pour partager une adresse IP globale avec d'autres périphériques sur leurs réseaux locaux respectifs.

L'algorithme du framework recherche le chemin avec la plus faible latence pour connecter les deux pairs, en essayant ces possibilités dans cet ordre :

1. Connexion UDP directe (dans ce cas—et uniquement dans ce cas—un serveur {{Glossary("STUN")}} sert à trouver l'adresse de réseau du pair opposé
2. Connexion TCP directe, via le port HTTP
3. Connexion TCP directe, via le port HTTPS
4. Connexion indirecte via un serveur {{Glossary("TURN")}}/relais (si une connexion directe échoue, e.g. si un des pairs est situé derrière un pare-feu qui empêche la traversée du NAT)

## Voir aussi

- [WebRTC](/fr/docs/Web/API/WebRTC_API), le principal protocole relatif au web qui utilise ICE
- [Protocoles WebRTC](/fr/docs/Web/API/WebRTC_API/Protocols)
- {{RFC("5245")}}, la spécification IETF pour ICE
- {{DOMxRef("RTCIceCandidate")}}, l'interface représentant un candidat ICE

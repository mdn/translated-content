---
title: Jitter
slug: Glossary/Jitter
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

Une **gigue** (ou <i lang="en">jitter</i> en anglais) est le terme utilisé en réseau informatique pour désigner la [variation du délai des paquets](<https://fr.wikipedia.org/wiki/Gigue_(informatique)>)&nbsp;: il s'agit de la variance du rythme auquel les paquets arrivent à destination (la moyenne des carrés de l'écart par rapport au rythme moyen d'arrivée des paquets).

Une «&nbsp;gigue élevée&nbsp;» indique que les paquets arrivent à des rythmes très variables, possiblement en raison d'une congestion du réseau, de pertes de paquets ou du routage des paquets d'un flux par différents chemins.
Une gigue élevée peut fortement dégrader les performances des applications web en temps réel, notamment le streaming audio/vidéo et les jeux en ligne.

## Tampon de gigue

Les protocoles réseau et applications, comme WebRTC, utilisent un «&nbsp;tampon de gigue&nbsp;» (<i lang="en">jitter buffer</i> en anglais) pour atténuer les effets de la variation du délai des paquets.
Les tampons de gigue stockent temporairement les paquets entrants puis les libèrent à un rythme régulier et synchronisé.
Ils peuvent aussi utiliser la correction d'erreurs directe pour réparer les paquets corrompus, redemander les paquets manquants, [insérer des échantillons audio pour masquer les pertes de paquets <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Packet_loss_concealment), ralentir ou accélérer la lecture des échantillons, etc.
Ce processus permet de lisser les temps d'arrivée des paquets et d'assurer une lecture plus régulière de l'audio et de la vidéo en temps réel.

## Voir aussi

- [Comment le tampon de gigue NetEQ de WebRTC assure un son fluide <sup>(angl.)</sup>](https://webrtchacks.com/how-webrtcs-neteq-jitter-buffer-provides-smooth-audio/#post-4560-_mv3ivinthkf5) (webrtchacks.com, juin 2025)

---
title: TCP slow start
slug: Glossary/TCP_slow_start
---

Le démarrage lent, ou _TCP slow start_, permet d'accumulez la vitesse de transmission des capacités du réseau sans savoir initialement quelles sont ces capacités et sans créer de congestion. {{glossary('TCP')}} slow start est un algorithme utilisé pour détecter la bande passante disponible pour la transmission par paquets. Il empêche l'apparition d'une congestion du réseau dont les capacités sont initialement inconnues.

Pour implémenter un démarrage lent de TCP, la fenêtre d'encombrement (_cwnd_) fixe une limite supérieure à la quantité de données qu'une source peut transmettre sur le réseau avant de recevoir un accusé de réception (ACK). Le seuil de démarrage lent (_ssthresh_) détermine l'activation / désactivation du démarrage lent. Quand une nouvelle connexion est établie, _cwnd_ est initialisé à un paquet de données ou d'accusé de réception TCP et attend un accusé de réception ou ACK. Lorsque cet ACK est reçu, la fenêtre d'encombrement est incrémentée jusqu'à ce que la valeur de _cwnd_ soit inférieure à _ssthresh_. Le démarrage lent se termine également en cas de congestion.

## Contrôle congestion

Lorsque le serveur envoie des données dans des paquets TCP, le client de l'utilisateur confirme la livraison en renvoyant des accusés de réception, ou ACK. La connexion a une capacité limitée en fonction des conditions matérielles et du réseau. Si le serveur envoie trop de paquets trop rapidement, ils seront supprimés. Cela veut dire, il n'y aura pas de reconnaissance. Le serveur l'enregistre comme ACK manquant. Les algorithmes de contrôle d'encombrement utilisent ce flux de paquets envoyés et d'accusés de réception pour déterminer un débit d'envoi.

## Voir aussi

- [Remplir la page: comment fonctionnent les navigateurs](/fr/docs/Learn/Performance/Populating_the_page:_how_browsers_work)
- [http overview](/fr/docs/Web/HTTP/Overview)

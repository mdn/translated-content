---
title: QUIC
slug: Glossary/QUIC
l10n:
  sourceCommit: 30d3d33b476209c803c07316eaa580474addfff2
---

**QUIC** est un protocole de transport multiplexé implémenté sur {{Glossary("UDP")}}. Il est utilisé à la place de {{Glossary("TCP")}} comme couche de transport dans {{Glossary("HTTP 3", "HTTP/3")}}.

QUIC a été conçu pour permettre une mise en place plus rapide et une {{Glossary("latency", "latence")}} plus faible pour les connexions {{Glossary("HTTP")}}. Plus précisément&nbsp;:

- Avec TCP, la poignée de main initiale TCP est éventuellement suivie d'une poignée de main TLS, qui doit être terminée avant que les données puissent être transmises. Comme TLS est désormais presque omniprésent, QUIC intègre la poignée de main TLS dans la poignée de main initiale QUIC, réduisant ainsi le nombre de messages à échanger lors de la mise en place.

- HTTP/2 est un protocole multiplexé, permettant plusieurs transactions HTTP simultanées. Cependant, les transactions sont multiplexées sur une seule connexion TCP, ce qui signifie qu'une perte de paquet et les retransmissions qui s'ensuivent au niveau TCP peuvent bloquer toutes les transactions. QUIC évite cela en fonctionnant sur UDP et en implémentant la détection de perte de paquets et la retransmission séparément pour chaque flux, ce qui signifie qu'une perte de paquet ne bloque que le flux dont les paquets ont été perdus.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("HTTP")}}, {{Glossary("HTTP 2", "HTTP/2")}}, {{Glossary("HTTP 3", "HTTP/3")}}
  - {{Glossary("TCP")}}, {{Glossary("UDP")}}
  - {{Glossary("Latency", "Latence")}}, {{Glossary("head of line blocking", "Blocage en tête de ligne")}}
- {{RFC("9000", "La spécification QUIC")}}
- {{RFC("9114", "La spécification HTTP/3")}}

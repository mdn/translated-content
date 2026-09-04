---
title: "Window : propriété originAgentCluster"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{APIRef}}

La propriété en lecture seule **`originAgentCluster`** de l'interface {{DOMxRef("Window")}} retourne `true` si cette fenêtre appartient à un _[groupe d'agents <sup>(angl.)</sup>](https://tc39.es/ecma262/#sec-agent-clusters) indexé par origine_&nbsp;: cela signifie que le système d'exploitation a fourni des ressources dédiées (par exemple un processus du système d'exploitation) à l'origine de cette fenêtre, qui ne sont pas partagées avec les fenêtres d'autres origines.

Sinon, cette propriété retourne `false`.

Les fenêtres qui font partie d'un groupe d'agents indexé par origine sont soumises à certaines restrictions supplémentaires, par rapport aux fenêtres qui n'en font pas partie. En particulier, elles ne peuvent pas&nbsp;:

- Définir {{DOMxRef("Document.domain")}}, qui est une fonctionnalité héritée permettant normalement aux pages inter-origine d'un même site d'accéder de façon synchrone à l'arbre DOM de l'autre.
- Envoyer des objets [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module) à d'autres pages inter-origine d'un même site via {{DOMxRef("Window.postMessage()")}}.
- Envoyer des objets {{JSxRef("SharedArrayBuffer")}} ou [`WebAssembly.Memory`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory) à d'autres pages inter-origine d'un même site.

Pour demander au navigateur d'attribuer cette fenêtre à un groupe d'agents indexé par origine, le serveur doit envoyer l'en-tête de réponse {{HTTPHeader("Origin-Agent-Cluster")}}.

Notez que la fonctionnalité de groupe d'agents indexé par origine n'est prise en charge que dans les {{Glossary("Secure Context", "contextes sécurisés")}}. Si un site n'est pas un contexte sécurisé, `window.originAgentCluster` retournera toujours `false`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête de réponse HTTP {{HTTPHeader("Origin-Agent-Cluster")}}
- [Demander l'isolation des performances avec l'en-tête `Origin-Agent-Cluster` <sup>(angl.)</sup>](https://web.dev/articles/origin-agent-cluster)

---
title: En-tête Origin-Agent-Cluster
short-title: Origin-Agent-Cluster
slug: Web/HTTP/Reference/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Origin-Agent-Cluster`** sert à demander que le {{DOMxRef("Document")}} associé soit placé dans un [groupe d'agents indexé par origine](/fr/docs/Web/JavaScript/Reference/Execution_model#communication_inter-agents_et_modèle_mémoire).
Cela signifie que les ressources du système d'exploitation (par exemple, le processus du système d'exploitation) utilisées pour évaluer le document ne doivent être partagées qu'avec d'autres documents de la même {{Glossary("origin", "origine")}}.

L'effet de ceci est qu'un document gourmand en ressources aura moins de chances de dégrader les performances des documents provenant d'autres origines.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Origin-Agent-Cluster: <boolean>
```

### Directives

- `<boolean>`
  - : `?1` indique que le {{DOMxRef("Document")}} associé doit être placé dans un groupe d'agents indexé par origine.
    Les valeurs autres que `?1` sont ignorées (par exemple, le champ structuré `?0` pour faux).

## Description

Les navigateurs web modernes ont une architecture multiprocessus dans laquelle les pages de différentes origines peuvent s'exécuter dans différents processus du système d'exploitation. Cela est important pour les performances, car cela signifie qu'une page gourmande en ressources n'aura pas autant d'impact sur les autres pages ouvertes par l'utilisateur·ice.

Cependant, les navigateurs ne peuvent pas, en règle générale, exécuter les pages {{Glossary("site", "de même site")}}, {{Glossary("origin", "d'origine croisée")}} dans des processus différents, en raison de certaines API DOM qui dépendent de la communication entre pages de même site mais d'origines différentes. Par exemple, par défaut, les pages des deux origines suivantes partageront les mêmes ressources du système d'exploitation&nbsp;:

```plain
https://apples.example.org
https://oranges.example.org
```

En définissant l'en-tête `Origin-Agent-Cluster`, une page peut demander au navigateur d'allouer des ressources dédiées à cette origine qui ne sont partagées avec aucune autre origine.

Le navigateur n'est pas obligé d'honorer la demande. S'il le fait, la propriété {{DOMxRef("Window.originAgentCluster")}} retourne `true`, et la fenêtre ne pourra pas effectuer les actions suivantes, qui dépendent toutes de la communication entre pages de même site mais d'origines différentes&nbsp;:

- Utiliser {{DOMxRef("Document.domain")}}.
- Envoyer des objets [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module) à d'autres pages de même site mais d'origine croisée à l'aide de {{DOMxRef("Window.postMessage()", "postMessage()")}}.
- Envoyer des objets {{JSxRef("SharedArrayBuffer")}} ou [`WebAssembly.Memory`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory) à d'autres pages de même site mais d'origine croisée.

Les groupes d'agents indexés par origine ne doivent pas être considérés comme une fonctionnalité de sécurité&nbsp;: les navigateurs peuvent ignorer la demande pour diverses raisons, ou choisir de l'implémenter d'une manière qui ne fournit pas de protection mémoire (par exemple, en utilisant des threads séparés au lieu de processus séparés). Cette fonctionnalité est plutôt une indication que l'expérience utilisateur·ice serait améliorée si cette origine se voyait attribuer des ressources dédiées.

Par exemple, supposons que votre site inclut une page d'une origine qui intègre un cadre intégré de même site mais d'origine croisée exécutant un jeu gourmand en ressources. En définissant `Origin-Agent-Cluster` sur le document de la balise, vous pouvez empêcher le jeu d'affecter les performances de la page principale.

Le navigateur veillera à ce que toutes les pages d'une même origine soient soit indexées par origine, soit non indexées. Cela signifie que&nbsp;:

- Si la première page d'une origine ne définit pas l'en-tête, alors aucune autre page de cette origine ne sera indexée par origine, même si ces autres pages définissent l'en-tête.
- Si la première page d'une origine définit l'en-tête et est indexée par origine, alors toutes les autres pages de cette origine seront indexées par origine, qu'elles le demandent ou non.

Pour éviter ce genre de situation imprévisible, vous devez définir cet en-tête pour toutes les pages d'une même origine, ou pour aucune d'entre elles.

## Exemples

```http
Origin-Agent-Cluster: ?1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{DOMxRef("Window.originAgentCluster")}}
- [Groupes d'agents et partage de mémoire](/fr/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) dans le _modèle d'exécution JavaScript_
- [Demander l'isolation des performances avec l'en-tête Origin-Agent-Cluster <sup>(angl.)</sup>](https://web.dev/articles/origin-agent-cluster) sur web.dev

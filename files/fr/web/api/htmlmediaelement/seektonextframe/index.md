---
title: "HTMLMediaElement : méthode seekToNextFrame()"
short-title: seekToNextFrame()
slug: Web/API/HTMLMediaElement/seekToNextFrame
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

La méthode **`seekToNextFrame()`** de l'interface {{DOMxRef("HTMLMediaElement")}} avance de manière asynchrone la position de lecture actuelle vers l'image suivante dans le média.

> [!WARNING]
> Cette méthode non standard fait partie d'un processus d'expérimentation autour du support de l'accès aux médias en dehors du temps réel pour des tâches telles que le filtrage, l'édition, etc.
> Vous ne devez _pas_ utiliser cette méthode dans du code de production, car son implémentation peut changer ou être supprimée sans préavis. Vous êtes cependant invité à l'expérimenter.

Cette méthode permet d'accéder aux images d'un média vidéo sans que le média ne soit lu en temps réel. Elle permet également d'accéder au média en utilisant les images comme unité de recherche plutôt que les codes temporels (bien que seulement en recherchant une image à la fois jusqu'à atteindre l'image souhaitée). Les utilisations possibles de cette méthode incluent le filtrage et l'édition de contenu vidéo.

Cette méthode retourne immédiatement une promesse ({{JSxRef("Promise")}}), dont le gestionnaire de résolution est appelé lorsque l'opération de recherche est terminée. De plus, un évènement {{DOMxRef("HTMLMediaElement/seeked_event", "seeked")}} est envoyé pour informer les parties intéressées qu'une recherche a eu lieu. Si la recherche échoue parce que le média est déjà à la dernière image, un évènement {{DOMxRef("HTMLMediaElement/seeked_event", "seeked")}} se produit, suivi immédiatement d'un évènement {{DOMxRef("HTMLMediaElement/ended_event", "ended")}}.

Si aucun média vidéo n'est présent sur l'élément média, ou si le média n'est pas consultable, rien ne se passe.

## Syntaxe

```js-nolint
seekToNextFrame()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui est remplie une fois que l'opération de recherche est terminée.

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

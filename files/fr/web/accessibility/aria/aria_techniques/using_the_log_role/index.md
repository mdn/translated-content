---
title: Utiliser le rôle log
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role
tags:
  - ARIA
  - Accessibilité
  - Rôle
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_role_log
---
### Description

Cette technique présente l’utilisation du rôle [`log`](http://www.w3.org/TR/wai-aria/roles#log) et décrit les effets produits sur les navigateurs et les technologies d’assistance.

Le rôle `log` est utilisé pour identifier un élément qui crée [une zone live](http://www.w3.org/WAI/PF/aria/terms#def_liveregion) où de nouvelles informations sont ajoutées dans un ordre significatif et où les anciennes informations peuvent être supprimées. Par exemple, un journal de salon de discussion, l’historique d’une messagerie ou un fichier d’erreurs. Contrairement aux autres types de zones live, ce rôle est ordonné de façon séquentielle et les nouvelles informations sont uniquement ajoutées à la fin de l’enregistrement. Lorsque ce rôle est ajouté à un élément, le navigateur émettra un événement `log` accessible aux produits de technologie d’assistance qui pourront alors le notifier à l’utilisateur.

Par défaut, les mises à jour ne contiennent que les changements apportés à la zone live et elles sont annoncées à l'utilisateur lorsqu'il est inactif. Si l'utilisateur a besoin d'entendre l'ensemble de la zone live lorsqu'un changement se produit, il faut utiliser `aria-atomic="true"`. Pour faire les annonces le plus tôt possible et lorsque l'utilisateur peut être interrompu, `aria-live="assertive"` peut être défini pour lancer des mises à jour plus agressives.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Lorsque le rôle `log` est ajouté à un élément, ou qu’un tel élément devient visible, l’agent utilisateur devrait suivre les étapes suivantes&nbsp;:

- Présenter l’élément ayant un rôle de journal à l’API d’accessibilité du système d’exploitation&nbsp;;
- Déclencher un événement journal accessible à l’aide de l’API d’accessibilité du système d’exploitation si elle le prend en charge.

Les technologies d’assistance devraient être à l’écoute de tels événements et les notifier à l’utilisateur en conséquence&nbsp;:

- Les lecteurs d'écran devraient annoncer les changements intervenus dans le fichier de journalisation lorsque l'utilisateur est inactif, à moins que `aria-live="assertive"` soit défini, dans quel cas l'utilisateur peut être interrompu.
- Les loupes d'écran devraient indiquer visuellement la disponibilité d'une mise à jour du fichier de journalisation.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;: Ajout du rôle dans du code HTML

L’extrait de code ci-dessous montre comment le rôle `log` est ajouté directement dans le code source HTML.

```html
<div id=”liveregion” class=”region” role=”log”></div>
```

#### Exemple 2&nbsp;: Extrait d’un exemple d’application

Cet extrait de code crée le journal dans une application de chat AJAX.

```html
<div id="chatArea" role="log">
  <ul id="chatRegion" aria-live="polite" aria-atomic="false">
    <li>Veuillez choisir un pseudo pour commencer à utiliser AJAX Chat.</li>
  </ul>

  <ul id="userListRegion" aria-live="off" aria-relevant="additions removals text">
  </ul>
</div>
```

Voir l’[exemple](http://codetalks.org/source/live/chat.html) sur CodeTalks pour plus d’informations.

#### Exemples concrets&nbsp;:

- <http://test.cita.illinois.edu/aria/live/live1.php>&nbsp;;
- <http://websiteaccessibility.donaldevans.com/2011/07/12/aria-log/>&nbsp;;
- <http://codetalks.org/source/live/chat.html> \[[notes](http://codetalks.org/source/live/chat_notes.html)].

### Notes

- L'utilisation du rôle `log` sur un élément implique que cet élément possède l'attribut `aria-live="polite"`.
- Pour une zone avec un défilement de texte, comme un bandeau défilant, il est préférable d'utiliser le rôle `marquee`.

### Attributs ARIA utilisés

- [log](http://www.w3.org/TR/wai-aria/roles#log).

### Techniques ARIA connexes

- Rôle [marquee](http://www.w3.org/TR/wai-aria/roles#marquee).

### Autres ressources

- Bonnes pratiques ARIA – Implémentation des zones live&nbsp;: [#LiveRegions](http://www.w3.org/TR/wai-aria-practices/#LiveRegions).

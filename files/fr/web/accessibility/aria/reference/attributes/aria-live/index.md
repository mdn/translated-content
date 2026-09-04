---
title: "ARIA : attribut aria-live"
short-title: aria-live
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-live
l10n:
  sourceCommit: 93e3c303704c560ce28cc7764ff0069e67c48e79
---

L'attribut global `aria-live` indique qu'un élément sera mis à jour et décrit le type de mises à jour que les agents utilisateurs, les technologies d'assistance et les utilisateur·ice·s peuvent attendre de la région dynamique.

## Description

Lorsque le contenu change après le chargement initial, les utilisateur·ice·s de technologies d'assistance (<abbr>TA</abbr>) peuvent ne pas «&nbsp;voir&nbsp;» ces changements. Certains changements sont importants, d'autres non. L'attribut `aria-live` permet aux développeur·euse·s d'informer l'utilisateur·ice des mises à jour et de choisir, selon l'importance et l'urgence, s'il faut informer immédiatement, de façon proactive ou passive les utilisateur·ice·s de technologies d'assistance des changements de contenu.

Si une section de l'écran est mise à jour et qu'elle est mise en forme pour être visible, la plupart des utilisateur·ice·s voyants remarqueront généralement les mises à jour en direct. Les lecteurs d'écran, en revanche, ne se concentrent que sur une partie de la page à la fois, et cette partie n'est pas forcément celle où la mise à jour a lieu. L'attribut `aria-live` permet aux développeur·euse·s d'annoncer ces changements aux TA en fonction des événements définis par le développeur·euse, et non par des actions de l'utilisateur·ice, afin qu'ils soient informés que le contenu a changé.

```html
<div id="announce" aria-live="polite"></div>
```

L'attribut `aria-live` est appliqué à un élément **vide**. Lorsqu'une mise à jour de la page se produit, l'élément vide avec cet attribut `aria-live` doit être mis à jour avec une annonce brève informant l'utilisateur·ice qu'une mise à jour a eu lieu.

```html
<div id="announce" aria-live="polite">
  <p>Ce message est annoncé.</p>
</div>
```

Lorsque l'API d'accessibilité détecte un changement dans la région dynamique ci-dessus, elle annonce le contenu de cette région en fonction de la valeur de l'attribut. L'élément **n'obtient pas** la sélection.

Si vous souhaitez que tout le contenu de la région dynamique soit lu, utilisez [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic). Utilisez [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) pour définir uniquement les parties d'une mise à jour qui doivent être relues à l'utilisateur·ice. Utilisez [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) pour empêcher les annonces tant que les mises à jour ne sont pas terminées.

### Choisir la valeur de `aria-live`

Certain·e·s utilisateur·ice·s de technologies d'assistance ne peuvent pas «&nbsp;voir&nbsp;» les mises à jour dynamiques, l'attribut `aria-live` sert à définir quelles informations mises à jour doivent être&nbsp;:

- Signalées immédiatement,
- Annoncées si l'occasion se présente,
- Annoncées de façon proactive mais lues lorsque l'utilisateur·ice choisit de se concentrer sur la zone mise à jour.

La valeur de `aria-live` décrit le type de mises à jour que les agents utilisateurs, les technologies d'assistance et l'utilisateur·ice peuvent attendre de la région dynamique, et sert à exprimer le degré d'importance.

Quand l'attribut `aria-live` est défini sur `polite`, les technologies d'assistance informent les utilisateur·ice·s des mises à jour mais n'interrompent généralement pas la tâche en cours, les mises à jour ayant une faible priorité. Quand il est défini sur `assertive`, les technologies d'assistance informent immédiatement l'utilisateur·ice, pouvant effacer la file d'attente des annonces précédentes.

Les lecteurs d'écran mettent en mémoire tampon le contenu lors du chargement de la page. Ainsi, le contenu ajouté après la construction initiale de l'arbre d'accessibilité peut ne pas être remarqué, car les utilisateur·ice·s commencent à consommer le contenu avant que les widgets dynamiques ne soient remplis. Les utilisateur·ice·s peuvent ne pas savoir que la page ou la vue se met à jour à mesure que les widgets se chargent. Dans ce cas, vous pouvez signaler que la page a été mise à jour en définissant `aria-live="polite"`.

Les pages entièrement chargées peuvent aussi être mises à jour. Par exemple, des scores sportifs en temps réel, des bandeaux d'actualités, des tickers boursiers. Sauf si ces mises à jour sont la fonction principale de la page, vous ne souhaitez probablement pas informer l'utilisateur·ice à chaque mise à jour, mais vous voulez signaler que le widget est mis à jour. Ici, vous pouvez définir `aria-live="off"`. Dans ces scénarios, il n'est pas nécessaire d'informer l'utilisateur·ice des mises à jour sauf s'il·elle se concentre sur la région dynamique.

Certaines mises à jour sont importantes et sensibles au temps. Par exemple, si vous vendez des billets de concert et que l'utilisateur·ice a un temps limité pour acheter, il ne faut pas attendre une pause pour l'informer que son temps est presque écoulé (ou déjà terminé). Si l'information doit être donnée dès que possible, définissez `aria-live="assertive"`. Si l'information mise à jour est une [`alerte`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role), l'attribut `aria-live` n'est pas nécessaire.

Dans ce scénario de limite de temps, pour être accessible, vous devez aussi [proposer un moyen à l'utilisateur·ice de prolonger le temps disponible ou de désactiver complètement le minuteur <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html).

### Utilisation de `aria-live`

Une région dynamique inclut l'élément et tous ses descendants. Si l'attribut n'est pas défini sur le contenu mis à jour, la valeur de `aria-live` provient de l'ancêtre le plus proche ayant une valeur valide pour cet attribut. Si la valeur est `off`, ou si l'attribut est omis sur l'élément mis à jour et tous ses ancêtres dans l'arbre DOM, l'utilisateur·ice n'est pas informé·e. Les utilisateur·ice·s pourront toujours entendre les mises à jour s'ils naviguent vers la région dynamique.

> [!WARNING]
> Une interruption peut désorienter les utilisateur·ice·s ou les empêcher de terminer leur tâche en cours. N'utilisez la valeur `assertive` que si l'interruption est impérative.

## Valeurs

- `assertive`
  - : Indique que les mises à jour de la région ont la priorité la plus élevée et doivent être présentées immédiatement à l'utilisateur·ice.
- `off` (valeur par défaut)
  - : Indique que les mises à jour de la région ne doivent **pas** être présentées à l'utilisateur·ice sauf si celui·celle-ci est actuellement concentré·e sur cette région.
- `polite`
  - : Indique que les mises à jour de la région doivent être présentées à la prochaine occasion appropriée, par exemple à la fin d'une phrase ou lors d'une pause de saisie.

## Interfaces associées

- {{DOMxRef("Element.ariaLive")}}
  - : La propriété [`ariaLive`](/fr/docs/Web/API/Element/ariaLive), qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-live`.
- {{DOMxRef("ElementInternals.ariaLive")}}
  - : La propriété [`ariaLive`](/fr/docs/Web/API/ElementInternals/ariaLive), qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-live`.

## Rôles associés

Utilisé dans **TOUS** les rôles.

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- L'attribut ARIA [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- L'attribut ARIA [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- Le rôle ARIA [`alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- {{DOMxRef("Document.ariaNotify")}}, {{DOMxRef("Element.ariaNotify")}}

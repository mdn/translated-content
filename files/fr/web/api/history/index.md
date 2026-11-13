---
title: History
slug: Web/API/History
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("History API")}}

L'interface **`History`** de {{DOMxRef("History API", "l'API History", "", "nocode")}} permet de manipuler l'historique de navigation du navigateur, soit la liste des pages visitées au sein de l'onglet ou fenêtre ou cadre dans lesquels la page actuelle est ouverte.

Il n'existe qu'une seule instance de `history` (C'est un _singleton_.) accessible avec l'objet global {{DOMxRef("Window.history", "history")}}.

> [!NOTE]
> Cette interface n'est disponible que sur le fil d'exécution principal ({{DOMxRef("Window")}}). Elle ne peut pas être accédée dans les contextes {{DOMxRef("Worker")}} ou {{DOMxRef("Worklet")}}.

## Propriétés d'instance

_L'interface `History` n'hérite d'aucune propriété._

- {{DOMxRef("History.length", "length")}} {{ReadOnlyInline}}
  - : Retourne un entier (`Integer`) représentant le nombre d'éléments dans l'historique de session, y compris la page actuellement chargée. Par exemple, pour une page chargée dans un nouvel onglet, cette propriété retourne `1`.
- {{DOMxRef("History.scrollRestoration", "scrollRestoration")}}
  - : Permet aux applications web de définir explicitement le comportement par défaut de la restauration du défilement lors de la navigation dans l'historique. Cette propriété peut être soit `auto`, soit `manual`.
- {{DOMxRef("History.state", "state")}} {{ReadOnlyInline}}
  - : Retourne une valeur `any` représentant l'état au sommet de la pile d'historique. C'est une manière de consulter l'état sans avoir à attendre un évènement {{DOMxRef("Window/popstate_event", "popstate")}}.

## Méthodes d'instance

_L'interface `History` n'hérite d'aucune méthode._

- {{DOMxRef("History.back", "back()")}}
  - : Cette méthode asynchrone accède à la page précédente de l'historique de session, comme lorsque l'utilisateur·ice clique sur le bouton <kbd>Précédent</kbd> du navigateur. Elle est équivalente à `history.go(-1)`.

    Appeler cette méthode pour revenir au-delà de la première page de l'historique de session n'a aucun effet et ne déclenche pas d'exception.

- {{DOMxRef("History.forward", "forward()")}}
  - : Cette méthode asynchrone accède à la page suivante de l'historique de session, comme lorsque l'utilisateur·ice clique sur le bouton <kbd>Suivant</kbd> du navigateur&nbsp;; elle est équivalente à `history.go(1)`.

    Appeler cette méthode pour avancer au-delà de la page la plus récente de l'historique de session n'a aucun effet et ne déclenche pas d'exception.

- {{DOMxRef("History.go", "go()")}}
  - : Charge de manière asynchrone une page de l'historique de session, identifiée par sa position relative à la page actuelle, par exemple `-1` pour la page précédente ou `1` pour la page suivante. Si vous définissez une valeur hors limites (par exemple `-1` lorsqu'il n'existe aucune page précédemment visitée dans l'historique de session), cette méthode n'a aucun effet et ne génère aucun message. Appeler `go()` sans paramètre ou avec la valeur `0` recharge la page actuelle.
- {{DOMxRef("History.pushState", "pushState()")}}
  - : Ajoute les données fournies à la pile de l'historique de session avec le titre défini (et, si elle est fournie, l'URL). Le DOM traite les données comme opaques&nbsp;; vous pouvez définir n'importe quel objet JavaScript qui peut être sérialisé. Notez que tous les navigateurs, à l'exception de Safari, ignorent actuellement le paramètre _title_. Pour plus d'informations, consultez [Travailler avec l'API History](/fr/docs/Web/API/History_API/Working_with_the_History_API).
- {{DOMxRef("History.replaceState", "replaceState()")}}
  - : Met à jour l'entrée la plus récente de la pile de l'historique avec les données et le titre définis et, si elle est fournie, l'URL. Le DOM traite les données comme opaques&nbsp;; vous pouvez définir n'importe quel objet JavaScript qui peut être sérialisé. Notez que tous les navigateurs, à l'exception de Safari, ignorent actuellement le paramètre _title_. Pour plus d'informations, consultez [Travailler avec l'API History](/fr/docs/Web/API/History_API/Working_with_the_History_API).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet global {{DOMxRef("Window.history", "history")}}

---
title: Bannières et avis
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 1717097c927b0399fd143a6ab22631245e9da1cd
---

Bannières et avis sont affichés sur certaines pages, en particulier dans la référence des API, afin de mettre en avant des éléments importants qui influencent la façon dont le contenu décrit sera utilisé.
Par exemple, les bannières servent à signaler lorsqu'une interface, une méthode ou une propriété est obsolète et ne doit pas être utilisée en production, ou n'est disponible que dans un contexte sécurisé.

Les bannières sont générées à l'aide de macros dans le contenu de la page.
Certaines macros de bannière sont ajoutées automatiquement à la page, tandis que d'autres sont ajoutées manuellement.

Cet article décrit les bannières les plus importantes et comment elles sont ajoutées.

## Où les macros de bannière sont-elles ajoutées

Les bannières sont ajoutées à l'aide de macros qui sont généralement insérées sous les métadonnées de la page, à côté de la macro d'encadré latéral. Par exemple, dans le bloc ci-dessous, la macro `\{{SecureContext_Header}}` a été utilisée pour indiquer que l'interface {{DOMxRef("AudioDecoder")}} n'est disponible que dans un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts), la macro `\{{AvailableInWorkers}}` a été utilisée pour indiquer que l'interface {{DOMxRef("AudioDecoder")}} n'est disponible que dans le [contexte window](/fr/docs/Web/API/Window) et le [contexte dedicated worker](/fr/docs/Web/API/DedicatedWorkerGlobalScope), et `\{{SeeCompatTable}}` a été ajoutée pour indiquer que l'interface est expérimentale.

```md
---
title: AudioDecoder
slug: Web/API/AudioDecoder
l10n:
  sourceCommit: hash
---

\{{APIRef("WebCodecs API")}} \{{SeeCompatTable}} \{{SecureContext_Header}} \{{AvailableInWorkers("window_and_dedicated")}}
```

## Bannières à ajouter manuellement

Vous devez ajouter manuellement les macros suivantes&nbsp;:

- `\{{SecureContext_Header}}` — génère une bannière **Contexte sécurisé** qui indique que la technologie n'est disponible que dans un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts).
- `\{{AvailableInWorkers}}` — génère une note **Disponible dans les workers** qui indique que la technologie est disponible dans le [contexte worker](/fr/docs/Web/API/Web_Workers_API).

## Bannières ajoutées automatiquement

Les macros suivantes sont ajoutées automatiquement au contenu afin de refléter les statuts stockés dans le dépôt [browser compat data <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data)&nbsp;:

- `\{{SeeCompatTable}}` — génère une bannière **Cette technologie est expérimentale** qui indique que la technologie est [expérimentale](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#expérimental).
- `\{{Deprecated_Header}}` — génère une bannière **Obsolète** qui indique que l'utilisation de la technologie est [dépréciée](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#déprécié).
- `\{{Non-standard_Header}}` — génère une bannière **Non standard** qui indique que l'utilisation de la technologie ne fait pas partie d'une spécification officielle, même si elle est implémentée dans plusieurs navigateurs.

[Mettez à jour le statut de la fonctionnalité dans le dépôt browser-compat-data](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_mettre_a_jour_le_statut_dune_fonctionnalite) pour modifier ces valeurs.

> [!NOTE]
> Même si vous pouvez ajouter ou modifier ces macros manuellement dans le contenu, les valeurs qui ne correspondent pas aux données de compatibilité des navigateurs seront remplacées ou supprimées.

> [!NOTE]
> Les pages qui comportent les bannières `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` ou `\{{Non-standard_Header}}` auront aussi les statuts correspondants `experimental`, `deprecated` et `non-standard` dans les métadonnées de la page.
> Les métadonnées sont automatiquement mises à jour en même temps que les en-têtes.
> Les macros de bannière ne dépendent pas de ces métadonnées de statut (mais pourraient un jour en être générées).

## Expérimental : bannière « Positions des standards »

Il arrive que des éditeur·ice·s de navigateurs ne soient pas d'accord sur l'évolution d'une fonctionnalité, et certain·e·s peuvent s'y opposer dans sa forme actuelle. Dans des cas exceptionnels, MDN documente des technologies dans cet état afin d'encourager la communauté du Web à les expérimenter, à donner leur avis et à aider les éditeur·ice·s de navigateurs à parvenir à un consensus.

Il est important de clarifier le statut de normalisation actuel de ces fonctionnalités auprès des lecteur·ice·s. Bien qu'une solution à long terme pour représenter cette information ne soit pas encore finalisée, nous procédons ainsi pour certaines technologies majeures afin d'éviter toute confusion&nbsp;:

- Ajouter cette bannière à la page d'accueil de la fonctionnalité (pas à chaque sous-page de la fonctionnalité)&nbsp;:

  ```md
  > [!WARNING]
  > Cette fonctionnalité est actuellement contestée par <nombre> éditeur·ice·s de navigateurs. Voir la section [Positions des standards](#positions_des_standards) ci-dessous pour plus de détails sur l'opposition.
  ```

  - Remplacez `<nombre>` par le nombre d'éditeur·ice·s de navigateurs qui s'opposent à la fonctionnalité.
  - Utilisez «&nbsp;éditeur·ice&nbsp;» ou «&nbsp;éditeur·ice·s&nbsp;» selon le cas.

- Ajouter une section «&nbsp;Positions des standards&nbsp;» sur la même page que la bannière ci-dessus, en tant que sous-section de la section standard «&nbsp;Spécifications&nbsp;».

> [!NOTE]
> Voir [Ensembles de sites web associés](/fr/docs/Web/API/Storage_Access_API/Related_website_sets) pour un exemple de section «&nbsp;Positions des standards&nbsp;» et de bannière sur la page d'accueil.

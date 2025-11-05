---
title: Tableaux de compatibilité des navigateurs et données de compatibilité des navigateurs (BCD)
short-title: Tableaux de compatibilité et BCD
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

MDN utilise un format standard pour les tableaux qui illustrent la compatibilité des technologies partagées entre tous les navigateurs, comme DOM, HTML, CSS, JavaScript, SVG, etc.
Pour rendre ces données disponibles dans plusieurs projets de façon programmatique, un package Node.js est construit à partir du [dépôt browser-compat-data <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data) et publié sur npm.

Pour modifier les données de ces tableaux, la documentation complète ainsi que les détails les plus récents sur les conventions et les schémas JSON utilisés pour représenter les données se trouvent dans le [guide de contribution du dépôt <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) ainsi que dans le [guide des règles de données <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines).
Si vous avez des questions ou rencontrez des problèmes, vous pouvez [demander de l'aide](/fr/docs/MDN/Community/Communication_channels).

## Utiliser les données BCD dans les pages MDN

Une fois les données incluses dans le [dépôt browser-compat-data <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data), vous pouvez commencer à inclure dynamiquement des tableaux de compatibilité des navigateurs et des tableaux de spécifications basés sur ces données dans les pages MDN.

Pour commencer à utiliser les données BCD dans les pages MDN, utilisez la chaîne de requête spécifiée dans le fichier source BCD pour les données que vous souhaitez inclure.
Par exemple&nbsp;:

- Les données de compatibilité de {{DOMxRef("AbortController")}} sont définies dans [api/AbortController.json <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) et peuvent être interrogées avec `api.AbortController`.
- Les données de compatibilité de l'en-tête HTTP {{HTTPHeader("Content-Type")}} sont définies dans [http/headers/content-type.json <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/blob/main/http/headers/Content-Type.json) et la requête est `http.headers.Content-Type`.
- Les données de compatibilité de la propriété {{DOMxRef("VRDisplay.capabilities")}} sont définies dans [api/VRDisplay.json <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) et la requête est `api.VRDisplay.capabilities`.

La requête de compatibilité doit être spécifiée dans le front-matter de la page sous la clé `browser-compat`.
Par exemple, {{DOMxRef("AbortController")}} serait ajoutée comme ci-dessous&nbsp;:

> [!WARNING]
> Cela ne concerne que les pages anglaises.

```md
---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---
```

Les tableaux de compatibilité et de spécifications correspondant à la clé sont alors automatiquement affichés à la place des macros `\{{Compat}}` et `\{{Specifications}}` dans la source.

Si plusieurs tableaux de compatibilité ou de spécifications sont nécessaires sur la même page, vous pouvez spécifier la valeur de `browser-compat` comme un tableau. Par exemple, pour la [Channel Messaging API](/fr/docs/Web/API/Channel_Messaging_API), cela serait ajouté comme ci-dessous&nbsp;:

> [!WARNING]
> Cela ne concerne que les pages anglaises.

```md
---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
page-type: web-api-overview
browser-compat:
  - api.MessageChannel
  - api.MessagePort
---
```

Les appels de macro génèrent les tableaux suivants (et l'ensemble des notes associées)&nbsp;:

### Exemple de tableau de compatibilité

{{Compat}}

### Exemples de tableaux de spécifications

{{Specifications}}

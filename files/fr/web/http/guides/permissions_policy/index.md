---
title: Politique de permission
slug: Web/HTTP/Guides/Permissions_Policy
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{SeeCompatTable}}

Les **politiques de permission** fournissent des mécanismes permettant aux développeur·euse·s web de déclarer explicitement quelles fonctionnalités peuvent ou ne peuvent pas être utilisées sur un site web. Vous définissez un ensemble de «&nbsp;politiques&nbsp;» qui restreignent les API auxquelles le code du site peut accéder ou modifient le comportement par défaut du navigateur pour certaines fonctionnalités. Cela vous permet de faire respecter les bonnes pratiques, même lorsque la base de code évolue — ainsi que de composer plus sûrement du contenu tiers.

La politique de permission est similaire à la {{Glossary("CSP", "Politique de sécurité du contenu")}} mais contrôle les fonctionnalités plutôt que le comportement de sécurité.

Exemples de ce que vous pouvez faire avec la politique de permission&nbsp;:

- Modifier le comportement par défaut de la lecture automatique sur mobile et pour les vidéos de source externe.
- Restreindre l'utilisation par un site des appareils sensibles comme l'appareil photo, le microphone ou les haut-parleurs.
- Autoriser les cadres intégrés à utiliser [l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API).
- Empêcher la possibilité d'exécuter des scripts sur des éléments qui ne sont pas visibles dans la zone d'affichage, afin d'améliorer les performances.

> [!NOTE]
> Les politiques de permission étaient auparavant appelées «&nbsp;politiques de fonctionnalités&nbsp;». Le nom a changé, tout comme la syntaxe de l'en-tête HTTP, donc gardez cela à l'esprit si vous avez utilisé Feature Policy dans le passé, et consultez les tableaux de compatibilité des navigateurs. La syntaxe `<iframe allow=" … ">` est restée la même.

## Concepts et utilisation

Le web fournit des fonctionnalités et des API qui peuvent présenter des risques pour la vie privée ou la sécurité si elles sont mal utilisées. Dans de tels cas, vous pouvez souhaiter limiter strictement l'utilisation des fonctionnalités sur un site web. Dans chaque cas, il doit y avoir un moyen intuitif ou non perturbateur pour les développeur·euse·s web de détecter et de gérer les cas où une fonctionnalité est désactivée.

Quelques approches incluent&nbsp;:

- «&nbsp;Permission refusée&nbsp;» est retournée pour les API JavaScript qui nécessitent l'octroi de permissions de l'utilisateur·ice.
- Les API JavaScript qui fournissent l'accès aux fonctionnalités retournent des valeurs `false` ou déclenchent une erreur.
- Les API ne sont même pas exposées, comme si elles n'existent pas.
- Les options qui contrôlent le comportement de la fonctionnalité ont des valeurs par défaut différentes.

> [!NOTE]
> Les fonctionnalités nouvellement introduites peuvent avoir une API explicite pour signaler l'état. Les fonctionnalités existantes qui s'intègrent ultérieurement à la politique de permissions utilisent généralement les mécanismes existants.

La politique de permissions vous permet de contrôler quelles origines peuvent utiliser quelles fonctionnalités, à la fois sur la page de niveau supérieur et dans les {{HTMLElement("iframe")}} intégrés. L'objectif est de faire respecter les bonnes pratiques pour de bonnes expériences utilisateur et de fournir un contrôle granulaire sur les fonctionnalités _sensibles_ ou _puissantes_ (c'est-à-dire les fonctionnalités pour lesquelles un·e utilisateur·ice doit donner une permission explicite avant que le code associé puisse être exécuté).

La politique de permissions fournit deux manières de définir les politiques&nbsp;:

- L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}}, pour contrôler l'utilisation des fonctionnalités dans les réponses reçues et tout contenu intégré dans la page (ce qui inclut les {{HTMLElement("iframe")}}).
- L'attribut [`allow`](/fr/docs/Web/HTML/Reference/Elements/iframe#attributes) du {{HTMLElement("iframe")}}, pour contrôler l'utilisation des fonctionnalités uniquement dans des {{HTMLElement("iframe")}} spécifiques.

Ces deux mécanismes sont séparés mais liés — voir [Héritage des politiques pour le contenu intégré](#héritage_des_politiques_pour_le_contenu_embarqué) pour plus de détails.

> [!NOTE]
> Les scripts peuvent interroger de manière programmatique des informations sur la politique de permissions avec l'objet {{DOMxRef("FeaturePolicy")}} situé soit à {{DOMxRef("Document.featurePolicy")}}, soit à {{DOMxRef("HTMLIFrameElement.featurePolicy")}}.

Pour contrôler chaque fonctionnalité, vous devez rédiger une politique composée des éléments suivants&nbsp;:

- Une **directive** qui identifie le nom de la fonctionnalité à contrôler. Consultez la [liste des différentes directives disponibles](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Une **liste de permissions**, qui est une liste des origines pour lesquelles la fonctionnalité doit être contrôlée. Vous pouvez activer une fonctionnalité pour toutes les origines ou pour des origines spécifiques, ou bloquer son utilisation pour toutes les origines.

Vous trouvez ci-dessous plusieurs exemples.

## Relation avec l'API Permissions

La politique de permissions et {{DOMxRef("Permissions API", "l'API Permissions", "", "nocode")}} sont étroitement liées, mais distinctes. Les fonctionnalités dont les permissions sont contrôlées par ces deux technologies se recoupent.

- La politique de permissions permet à un serveur de déterminer si une fonctionnalité peut être utilisée dans un document particulier (ou dans des éléments HTML `<frame>` qui y sont intégrés). On parle alors de fonctionnalités **contrôlées par la politique** — voir la [liste des directives de la politique de permissions](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- L'API Permissions contrôle l'accès aux fonctionnalités en fonction des permissions accordées par l'utilisateur·ice. Ces fonctionnalités sont répertoriées dans le [registre des permissions <sup>(angl.)</sup>](https://w3c.github.io/permissions-registry/).

La chaîne de caractères d'identification utilisée pour chaque fonctionnalité est la même dans les deux cas, par exemple `geolocation` pour {{DOMxRef("Geolocation API", "l'API Geolocation", "", "nocode")}}. La plupart des fonctionnalités de l'API répertoriées dans le registre des permissions disposent également d'une directive correspondante dans la politique de permissions. Une exception est {{DOMxRef("Notifications API", "l'API Notifications", "", "nocode")}}.

En règle générale, lorsqu'une politique de permissions bloque l'utilisation d'une fonctionnalité avancée, l'utilisateur·ice n'est même pas invité·e à donner son autorisation pour l'utiliser, et la méthode {{DOMxRef("Permissions.query", "query()")}} de l'API des permissions retourne une valeur {{DOMxRef("PermissionStatus.state", "state")}} égale à `denied`.

Voir aussi [Permissions > Relation avec la spécification de la politique de permissions <sup>(angl.)</sup>](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Listes de permissions

Une liste de permissions est une liste d'origines qui prend une ou plusieurs des valeurs suivantes contenues entre parenthèses, séparées par des espaces&nbsp;:

- `*`&nbsp;: La fonctionnalité est autorisée dans ce document et dans tous les contextes de navigation imbriqués (`<iframe>`) quelle que soit leur origine.
- `()` (liste de permissions vide)&nbsp;: La fonctionnalité est désactivée dans les contextes de navigation de premier niveau et imbriqués. L'équivalent pour l'attribut `allow` de `<iframe>` est `'none'`.
- `self`&nbsp;: La fonctionnalité est autorisée dans ce document, et dans tous les contextes de navigation imbriqués (`<iframe>`) de la même origine uniquement. La fonctionnalité n'est pas autorisée dans les documents inter-origines dans les contextes de navigation imbriqués. `self` peut être considéré comme un raccourci pour `https://votre-site.example.com`. L'équivalent pour l'attribut `allow` de `<iframe>` est `'self'`.
- `'src'`&nbsp;: La fonctionnalité est autorisée dans cet `<iframe>`, tant que le document chargé dans celui-ci provient de la même origine que l'URL de son attribut `{{HTMLElement("iframe#attributs", "src")}}`. Cette valeur n'est utilisée que dans l'attribut `allow` de `<iframe>`, et est la valeur de la liste de permissions _par défaut_ dans les `<iframe>`.
- `"<origin>"`&nbsp;: La fonctionnalité est autorisée pour des origines spécifiques (par exemple, `"https://a.example.com"`). Les origines doivent être séparées par des espaces. Notez que les origines dans les attributs `allow` de `<iframe>` ne sont pas entre guillemets.

Les valeurs `*` et `()` ne peuvent être utilisées que seules, tandis que `self` et `src` peuvent être utilisées en combinaison avec une ou plusieurs origines.

> [!NOTE]
> Les directives ont une liste de permissions par défaut, qui est toujours l'une des valeurs `*`, `self` ou `none` pour l'en-tête HTTP `Permissions-Policy`, et qui régit le comportement par défaut si elles ne sont pas explicitement listées dans une politique. Celles-ci sont définies sur les [pages de référence des directives](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives). Pour les attributs `allow` de `<iframe>`, le comportement par défaut est toujours `src`.

Lorsque c'est pris en charge, vous pouvez inclure des jokers dans les origines de la politique de permissions. Cela signifie qu'au lieu de devoir définir explicitement plusieurs sous-domaines différents dans une liste de permissions, vous pouvez tous les définir dans une seule origine avec un joker.

Donc au lieu de

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Vous pouvez définir

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` ne correspond pas à `"https://example.com"`.

exemples de listes de permissions&nbsp;:

- `*`
- `()`
- `(self)`
- `(src)`
- `("https://a.example.com")`
- `("https://a.example.com" "https://b.example.com")`
- `(self "https://a.example.com" "https://b.example.com")`
- `(src "https://a.example.com" "https://b.example.com")`
- `("https://*.example.com")`

## Syntaxe de l'en-tête `Permissions-Policy`

La syntaxe générale est la suivante&nbsp;:

```http
Permissions-Policy: <directive>=<allowlist>
```

Par exemple, pour bloquer tout accès à la géolocalisation, vous faites ceci&nbsp;:

```http
Permissions-Policy: geolocation=()
```

Ou pour autoriser l'accès à un sous-ensemble d'origines, vous faites ceci&nbsp;:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Plusieurs fonctionnalités peuvent être contrôlées en même temps en envoyant l'en-tête avec une liste de politiques séparées par des virgules, ou en envoyant un en-tête distinct pour chaque politique.

Par exemple, les deux exemples suivants sont équivalents&nbsp;:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Syntaxe des cadres embarqués

Pour qu'un {{HTMLElement("iframe")}} ait une fonctionnalité activée, son origine autorisée doit également figurer dans la liste de permissions de la page parente. En raison de ce [comportement d'héritage](#héritage_des_politiques_pour_le_contenu_embarqué), il est conseillé de définir le support le plus large acceptable pour une fonctionnalité dans l'en-tête HTTP, puis de définir le sous-ensemble de support dont vous avez besoin dans chaque `<iframe>`.

La syntaxe générale se présente comme suit&nbsp;:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

Ainsi, par exemple, pour bloquer tout accès à la géolocalisation, vous devez procéder comme suit&nbsp;:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

Pour appliquer une règle à la source actuelle et aux autres, procédez comme suit&nbsp;:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Point important&nbsp;: par défaut, si un `<iframe>` redirige vers une autre origine, la politique n'est pas appliquée à l'origine vers laquelle le `<iframe>` redirige. En indiquant l'origine vers laquelle le `<iframe>` redirige dans l'attribut `allow`, la politique dee permissions qui s'applique à un `<iframe>` d'origine s'applique alors à l'origine vers laquelle un `<iframe>` redirige.

Il est possible de contrôler plusieurs fonctionnalités à la fois en incluant une liste de directives de stratégie séparées par des points-virgules dans l'attribut `allow`.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Il convient de mentionner tout particulièrement la valeur `src`. Nous avons mentionné plus haut que l'utilisation de cette valeur de `allowlist` signifie que la fonctionnalité associée est autorisée dans cet élément HTML `<iframe>`, à condition que le document qui y est chargé provienne de la même origine que l'URL indiquée dans son attribut `{{HTMLElement("iframe#attributs", "src")}}`. Cette valeur est la valeur _par défaut_ de `allowlist` pour les fonctionnalités répertoriées dans `allow`, ainsi, les éléments suivants sont équivalents&nbsp;:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

> [!NOTE]
> Comme vous pouvez le remarquer, la syntaxe des politiques pour `<iframe>` est un peu différente de celle des en-têtes `Permissions-Policy`. La première utilise toujours la même syntaxe que l'ancienne spécification Feature Policy, qui a été remplacée par la politique de permissions.

### Les cadres protégés et la politique de permissions

Les {{HTMLElement("fencedframe")}} interagissent avec les politiques de permissions de la même manière que les `<iframe>`, mais dans une capacité beaucoup plus restreinte. Seules les fonctionnalités spécifiques conçues pour être utilisées dans les `<fencedframe>` peuvent être activées avec les politiques de permissions définies sur eux&nbsp;; les autres fonctionnalités contrôlées par la politique ne sont pas disponibles dans ce contexte.

Voir [Politiques de permissions disponibles pour les cadres protégés](/fr/docs/Web/HTML/Reference/Elements/fencedframe#politiques_de_permissions_disponibles_pour_les_cadres_protégés) pour plus de détails.

## Héritage des politiques pour le contenu embarqué

Les scripts héritent de la politique de leur contexte de navigation, quelle que soit leur origine. Cela signifie que les scripts de niveau supérieur héritent de la politique du document principal.

Tous les éléments `<iframe>` héritent de la politique de leur page parente. Si l'élément `<iframe>` possède un attribut `allow` et que la page parente comporte une {{HTTPHeader("Permissions-Policy")}}, les politiques de la page parente et de l'attribut `allow` sont combinées, en retenant le sous-ensemble le plus restrictif. Pour qu'une fonctionnalité soit activée dans un `<iframe>`, l'origine doit figurer dans la liste blanche à la fois de la page parente et de l'attribut `allow`.

La désactivation d'une fonctionnalité dans une politique est irréversible. Si une fonctionnalité a été désactivée pour un cadre enfant par son cadre parent, l'enfant ne peut pas la réactiver, pas plus que ses descendants.

## Exemples

### Combiner l'en-tête HTTP et les politiques `<iframe>`

Par exemple, supposons que nous voulons activer l'utilisation de la géolocalisation sur notre propre origine, ainsi que dans le contenu intégré provenant de notre réseau publicitaire de confiance. Nous pourrions configurer la politique de permissions à l'échelle de la page comme suit&nbsp;:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

Dans nos `<iframe>` publicitaires, nous pourrions définir l'accès à l'origine `https://trusted-ad-network.com` comme suit&nbsp;:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Si une origine différente finit par être chargée dans un `<iframe>`, elle n'a pas accès à la géolocalisation&nbsp;:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}}
- L'attribut HTML `{{HTMLElement("iframe#attributs", "allow")}}` des cadres intégrés
- [Contrôler les fonctionnalités du navigateur avec la politique de permissions <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/permissions-policy)&nbsp;: guide d'utilisation qui contient également plusieurs liens vers des démonstrations.
- [Politiques de permissions/fonctionnalités sur chromestatus.com <sup>(angl.)</sup>](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Vie privée, permissions et sécurité de l'information](/fr/docs/Web/Privacy)

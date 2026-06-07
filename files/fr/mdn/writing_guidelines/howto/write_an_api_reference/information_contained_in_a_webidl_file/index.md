---
title: Information contenue dans un fichier WebIDL
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 0d155984425e8964c889efb63ec39593e11bbc14
---

Lors de la rédaction de la documentation sur une API, les sources d'information sont nombreuses&nbsp;: les spécifications décrivent ce qui doit être implémenté ainsi que le modèle, et les implémentations décrivent ce qui a réellement été mis en place dans les navigateurs. Les fichiers WebIDL sont un moyen très condensé de fournir beaucoup, mais pas toutes, les informations sur l'API. Ce document fournit une référence pour aider à comprendre la syntaxe WebIDL.

IDL signifie **<i lang="en">Interface Definition Language</i>** (pour _Langage de Définition d'Interface_ en français) et il est conçu pour décrire les API. Dans le monde informatique en général, il existe plusieurs types d'IDL. Dans le monde des navigateurs, l'IDL que nous utilisons s'appelle _WebIDL_. Deux types de WebIDL sont disponibles&nbsp;: celui donné dans la spécification WebIDL, et celui implémenté dans les navigateurs. La spécification est la référence canonique, et le WebIDL du navigateur décrit ce qui est réellement implémenté dans un navigateur particulier, et contient des éléments supplémentaires tels que des annotations, des informations sur les éléments non standard et des extensions spécifiques au navigateur à la spécification IDL.

## Où trouver les fichiers WebIDL

Les fichiers WebIDL peuvent être trouvés à plusieurs endroits&nbsp;:

- Chaque spécification contient du WebIDL dans le texte&nbsp;: c'est un moyen très pratique de fournir une définition précise. Bien que ce soit la référence canonique, il faut garder à l'esprit qu'ils peuvent différer de l'implémentation réelle. Sur MDN, nous voulons être pratiques et documenter ce qu'est réellement la plateforme Web, et non ce qu'elle doit idéalement être. Donc, vérifiez bien ce qui est présent dans les implémentations (et n'hésitez pas à signaler des bugs si vous découvrez des incohérences).
- Trois moteurs de navigateur utilisent (modifié) WebIDL dans le cadre de leur chaîne d'outils&nbsp;: Gecko, Chromium/Blink et WebCore/WebKit. Les versions pré-Chromium d'Edge l'utilisaient en interne, mais elles ne sont malheureusement pas publiques.
  - Pour Gecko, tous les fichiers WebIDL sont regroupés dans un seul répertoire&nbsp;: <https://searchfox.org/firefox-main/source/dom/webidl/> <sup>(angl.)</sup>. Leur extension est `.webidl`. Il existe d'autres fichiers `*.idl` dans l'arborescence source de Gecko, mais ce ne sont pas des WebIDL, vous pouvez donc les ignorer. Les anciennes versions de Gecko ont certains de leurs WebIDL dispersés, et peuvent même utiliser l'IDL de Mozilla au lieu de WebIDL pour décrire certaines interfaces Web, mais cela ne pose pas de problème dans un code Gecko récent.
  - Pour Chromium, ils se trouvent à deux endroits, tous deux sous-arborescences du répertoire [`renderer/` <sup>(angl.)</sup>](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/) du code source&nbsp;: [`core/` <sup>(angl.)</sup>](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) et [`modules/` <sup>(angl.)</sup>](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Le code source de Chromium contient des fichiers IDL à d'autres endroits, mais ils font partie du système de test et ne sont pas pertinents pour les implémentations d'API.
  - Pour WebCore, ils sont dispersés dans le code source, donc vous devez creuser un peu plus&nbsp;: par exemple <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl> <sup>(angl.)</sup>

## Différents dialectes de WebIDL

WebIDL est défini dans [sa spécification <sup>(angl.)</sup>](https://webidl.spec.whatwg.org/). Mais il a été conçu pour être étendu afin de transmettre plus d'informations, et les fournisseurs de navigateurs l'ont fait&nbsp;:

- Pour Gecko, Mozilla a créé la [documentation <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) de son WebIDL dialectal.
- Pour Chromium, Google a également créé un [document <sup>(angl.)</sup>](https://www.chromium.org/blink/webidl/) pour décrire ses extensions.
- Pour WebCore, Apple a également mis à disposition une [page <sup>(angl.)</sup>](https://docs.webkit.org/Deep%20Dive/Architecture/JSWrappers.html) pour son dialecte.

> [!NOTE]
> Nous décrivons ici uniquement le sous-ensemble de WebIDL le plus utile lors de la rédaction de documentation. Il existe de nombreuses autres annotations utiles pour les gestionnaires d'implémentation&nbsp;; consultez les quatre documents liés ci-dessus pour avoir une vue d'ensemble complète.

## Interfaces

Cette section explique la syntaxe WebIDL qui décrit les fonctionnalités globales de l'API.

### Nom de l'interface

Le nom de l'interface est la chaîne de caractères qui apparaît après le mot-clé `interface` et avant la prochaine accolade ouvrante (`'{'`) ou deux-points (`':'`).

```webidl
interface URL {};
```

Chaque interface WebIDL, qu'il s'agisse d'une véritable interface ou d'une composition, possède sa propre page dans la documentation, répertoriant chaque constructeur, propriété et méthode définis pour celle-ci.

### Chaîne d'héritage

Le parent, le cas échéant, d'une interface donnée est défini après le nom de l'interface, suivant un deux-points (`':'`). Il ne peut y avoir qu'un seul parent par interface.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

La chaîne d'héritage est listée automatiquement dans la barre latérale (en utilisant la macro \\{{APIRef}}). Elle peut également être ajoutée sous forme d'image SVG avec la macro \\{{InheritanceDiagram}}.

### Compositions

Certaines propriétés ou méthodes sont disponibles pour plusieurs interfaces. Pour éviter la redéfinition, elles sont définies dans des interfaces WebIDL spéciales appelées _compositions_.

À partir de septembre 2019, la syntaxe des compositions a été mise à jour. Dans la nouvelle syntaxe, vous utilisez `interface mixin` pour définir une interface de composition, comme ceci&nbsp;:

```webidl
interface MyInterface {};

interface mixin MaComposante {
  void quelqueChoseCompose();
}
```

Vous utilisez ensuite le mot-clé `includes` pour indiquer que les propriétés définies à l'intérieur d'une composition sont disponibles sur une interface&nbsp;:

```webidl
MyInterface includes MaComposante;
```

Les compositions n'ont pas d'héritage et ne peuvent pas inclure d'autres compositions. Elles prennent cependant en charge les interfaces partielles, vous pouvez voir donc des choses comme ceci&nbsp;:

```webidl
interface MyInterface {};
interface mixin MaComposante {};

partial interface mixin MaComposante {
  void quelqueChoseCompose();
};

MyInterface includes MaComposante;
```

Pour des raisons de documentation, MDN masque les compositions. Ce sont des constructions abstraites et réservées aux spécifications.
Vous ne pouvez pas les voir dans la console du navigateur et il est plus utile de savoir sur quelles interfaces réelles les méthodes et propriétés sont implémentées.

Si vous rencontrez une composition dans l'IDL, comme [HTMLHyperlinkElementUtils <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils),
recherchez les interfaces qui implémentent la composition, par exemple
[HTMLAnchorElement <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), et documentez les membres de la composition directement sur ces interfaces.

En pratique, cela signifie qu'au lieu de documenter `HTMLHyperlinkElementUtils`,
les documents sont ajoutés aux interfaces concrètes, comme [`HTMLAnchorElement`](/fr/docs/Web/API/HTMLAnchorElement)
et [`HTMLAreaElement`](/fr/docs/Web/API/HTMLAreaElement).

Consultez les deux pages suivantes qui documentent `HTMLHyperlinkElementUtils.hash` en conséquence&nbsp;:

- [`HTMLAnchorElement.hash`](/fr/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/fr/docs/Web/API/HTMLAreaElement/hash)

Pour les données de compatibilité, consultez la [directive sur les données pour les compositions dans BCD <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines).

### Ancienne syntaxe des compositions

Dans l'ancienne syntaxe WebIDL des compositions, que vous pouvez encore rencontrer dans certains endroits, les compositions sont préfixées en utilisant l'annotation `[NoInterfaceObject]`&nbsp;:

```webidl
[NoInterfaceObject]
   interface MaComposition {…}
```

Dans l'ancienne syntaxe, les compositions implémentées sur une interface sont définies en utilisant le mot-clé `implements`.

```webidl
MyInterface implements MaComposition;
```

### Disponibilité dans la fenêtre et les workers

La disponibilité dans les Web workers (de tout type) et dans la portée de la fenêtre est définie à l'aide d'une annotation&nbsp;: `[Exposed=(Window,Worker)]`. L'annotation s'applique à l'interface partielle avec laquelle elle est listée.

```webidl
[Exposed=(Window,Worker)]
interface Performance {
   [DependsOn=DeviceState, Affects=Nothing]
   DOMHighResTimeStamp now();
};

[Exposed=Window]
partial interface Performance {
   [Constant]
   readonly attribute PerformanceTiming timing;
   [Constant]
   readonly attribute PerformanceNavigation navigation;

   jsonifier;
};
```

Dans ce cas, `Performance.now()` est disponible dans la portée de la `Window` et pour tout worker, tandis que `Performance.timing`, `Performance.navigation` et `Performance.toJSON()` ne sont pas disponibles pour les Web workers.

Les valeurs les plus courantes pour `[Exposed]` sont&nbsp;:

- `Window`
  - : L'interface partielle est disponible dans la portée globale de {{DOMxRef('Window')}}.
- `Worker`
  - : L'interface partielle est disponible pour tout type de worker, c'est-à-dire si la portée globale est un descendant de {{DOMxRef('WorkerGlobalScope')}} — {{DOMxRef('DedicatedWorkerGlobalScope')}}, {{DOMxRef('SharedWorkerGlobalScope')}}, ou {{DOMxRef('ServiceWorkerGlobalScope')}} (Elle est également disponible pour `ChromeWorker`, mais nous ne documentons pas cela, car ils ne sont pas visibles sur le Web et sont internes à Firefox.)
- `DedicatedWorker`
  - : L'interface partielle est disponible uniquement pour le {{DOMxRef('DedicatedWorkerGlobalScope')}}.
- `SharedWorker`
  - : L'interface partielle est disponible uniquement pour le {{DOMxRef('SharedWorkerGlobalScope')}}.
- `ServiceWorker`
  - : L'interface partielle est disponible uniquement pour le {{DOMxRef('ServiceWorkerGlobalScope')}}.

Une autre valeur est possible, comme `System`, mais cela a une [signification spéciale <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) et n'a pas besoin d'être documentée.

Notez que ces valeurs possibles sont elles-mêmes définies dans des fichiers WebIDL. Les interfaces peuvent avoir une annotation `[Global=xyz]`. Cela signifie que lorsqu'un objet de ce type est utilisé comme portée globale, toute interface, propriété ou méthode, avec `xyz` comme valeur de `[Exposed]` est disponible.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Ici, il est défini que lorsque la portée globale est de type `DedicatedWorkerGlobalScope`, c'est-à-dire si nous sommes dans un worker dédié, toute interface, propriété ou méthode exposée — en utilisant l'annotation `[Exposed]` — à `Worker` ou `DedicatedWorker` est disponible.

### Préférences

> [!NOTE]
> Cette information est spécifique à Gecko et ne doit être utilisée que dans la section Compatibilité des navigateurs.

Dans Gecko, la disponibilité d'une interface partielle, y compris son constructeur, ses propriétés et ses méthodes, peut être contrôlée par une préférence (généralement appelée «&nbsp;pref&nbsp;»). C'est également indiqué dans le WebIDL.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Ici, `media.webspeech.synth.enabled` contrôle l'interface `SpeechSynthesis` et ses propriétés (la liste complète en compte plus de 3).

> [!NOTE]
> La valeur par défaut de la préférence n'est pas disponible directement dans le WebIDL (elle peut être différente d'un produit utilisant Gecko à un autre.)

### Disponible uniquement dans le code système

Certaines fonctionnalités d'interface peuvent n'être disponibles que dans le code système interne du navigateur, ou dans le code chrome. Pour le signifier, dans Gecko, nous utilisons \[ChromeOnly], par exemple la propriété propName dans l'exemple suivant n'est appelable que avec le code chrome&nbsp;:

```webidl
interface MonInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Propriétés

Vous pouvez reconnaître la définition d'une propriété par la présence du mot-clé `attribute`.

### Nom de la propriété

```webidl
readonly attribute MediaError? error;
```

Dans l'exemple ci-dessus, le nom de la propriété est `error`&nbsp;; dans la documentation, nous nous y référons comme `HTMLMediaElement.error`, car elle appartient à l'interface `HTMLMediaElement`. Le lien vers la page se fait soit **avec** le préfixe de l'interface en utilisant \\{{DOMxRef("HTMLMediaElement.error")}} soit **sans** le préfixe en utilisant \\{{DOMxRef("HTMLMediaElement.error", "error")}} lorsque le contexte est évident et non ambigu.

### Type de la propriété

```webidl
readonly attribute MediaError? error;
```

La valeur de la propriété est un objet de type `MediaError`. Le point d'interrogation (`'?'`) indique qu'elle peut prendre la valeur `null`, et la documentation doit expliquer _quand_ cela peut se produire. Si aucun point d'interrogation n'est présent, la propriété `error` ne peut pas être `null`.

Le type de la propriété peut être précédé d'un _attribut étendu_, une chaîne de caractères entre crochets (comme `[LegacyNullToEmptyString]`). Ces attributs étendus indiquent des comportements spéciaux qui doivent être décrits dans le texte. Voici une liste des attributs étendus standard des types, et l'ajout qui doit être fait&nbsp;:

- `[LegacyNullToEmptyString]`
  - : La valeur `null` est convertie en chaîne de caractères de manière non standard. La manière standard est de la convertir en chaîne de caractères `"null"`, mais dans ce cas, elle est convertie en `""`.

    Ajoutez la phrase suivante à la fin de la section _Valeur_ de l'article&nbsp;:

    _Lorsque la valeur est définie sur `null`, cette valeur `null` est convertie en chaîne de caractères vide (`""`), donc `elt.innerHTML = null` est équivalent à `elt.innerHTML = ""`._

    Le petit exemple en ligne doit être adapté pour chaque propriété.

### Permissions d'écriture sur la propriété

```webidl
readonly attribute MediaError? error;
```

Si le mot-clé `readonly` est présent, la propriété ne peut pas être modifiée. Elle doit être marquée comme en lecture seule&nbsp;:

- Dans l'interface, en ajoutant la macro \\{{ReadOnlyInline}} à côté de son terme de définition.
- Dans la première phrase de sa propre page, en commençant la description par&nbsp;: _La propriété en lecture seule **`HTMLMediaElement.error`**…_
- En commençant sa description dans la page de l'interface par _Retourne…_

> [!NOTE]
> Seules les propriétés en lecture seule peuvent être décrites comme «&nbsp;retournant&nbsp;» une valeur. Les propriétés non en lecture seule peuvent également être utilisées pour définir une valeur.

Certaines propriétés ont l'annotation `[PutForwards=xyz]`. Cela signifie que la propriété est une référence à un autre objet, et lorsqu'une nouvelle valeur est assignée, l'assignation est transmise à la propriété `xyz` de l'objet référencé.

Ajoutez un paragraphe similaire au suivant à la fin de la section _Valeur_ de l'article&nbsp;:

_Bien que la propriété `style` soit en lecture seule, en ce sens qu'il n'est pas possible de remplacer l'objet `CSSStyleDeclaration`, vous pouvez toujours assigner directement à la propriété `style`, ce qui équivaut à assigner à sa propriété {{DOMxRef("CSSStyleDeclaration/cssText", "cssText")}}. Vous pouvez également modifier l'objet `CSSStyleDeclaration` en utilisant les méthodes {{DOMxRef("CSSStyleDeclaration/setProperty", "setProperty()")}} et {{DOMxRef("CSSStyleDeclaration/removeProperty", "removeProperty()")}}._

### Lever des exceptions

```webidl
[SetterThrows]
            attribute DOMString src;
```

Dans certains cas, comme lorsque certaines valeurs sont illégales, la définition d'une nouvelle valeur peut entraîner le déclenchement d'une exception. C"est indiqué à l'aide de l'annotation `[SetterThrows]`. Lorsque cela se produit, la section Syntaxe de la page de la propriété _doit_ comporter une sous-section Exceptions. La liste des exceptions et les conditions pour les déclencher sont indiquées, sous forme de texte, dans la spécification de cette API.

Notez que certaines exceptions ne sont pas explicitement marquées mais sont définies par les liaisons JavaScript. [Essayer de définir une valeur énumérée illégale <sup>(angl.)</sup>](https://webidl.spec.whatwg.org/#es-enumeration) (mappée à un {{JSxRef('String')}} JavaScript) déclenche une exception {{JSxRef('TypeError')}}. Cela doit être documenté, mais n'est marqué que de manière implicite dans le document WebIDL.

Il est rare que les accesseurs déclenchent des exceptions, bien que cela se produise dans quelques cas. Dans ce cas, l'annotation `[GetterThrows]` est utilisée. Ici aussi, la section Syntaxe de la page de la propriété _doit_ comporter une sous-section Exceptions.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Ne pas lever d'exceptions

Lorsque la sémantique de WebIDL n'est pas respectée, une exception est souvent levée, même sans que `[SetterThrows]` ou `[GetterThrows]` ne soit défini. Par exemple, en mode strict, si nous essayons de définir une propriété en lecture seule à une nouvelle valeur, c'est-à-dire appeler son mutateur implicite, une propriété en lecture seule lève une exception en mode strict.

Principalement pour des raisons de compatibilité, ce comportement est parfois gênant. Pour l'éviter en créant un mutateur sans effet (c'est-à-dire en ignorant silencieusement toute tentative de définir la propriété à une nouvelle valeur), l'annotation `[LenientSetter]` peut être utilisée.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

Dans ces cas, une phrase supplémentaire est ajoutée à la description de la propriété. Par exemple&nbsp;:

_Avec cette propriété en lecture seule, elle ne lève pas d'exception si elle est modifiée (même en mode strict)&nbsp;; le mutateur est une opération nulle et est ignoré._

### Nouveaux objets ou références

La valeur de retour d'une propriété peut être soit une copie d'un objet interne, un objet synthétique nouvellement créé, ou une référence à un objet interne.

Les objets de base avec des types comme {{JSxRef("String")}} (étant un IDL `DOMString`, ou autre), {{JSxRef("Number")}} (étant un IDL `byte`, `octet`, `unsigned int`, ou autre), et {{JSxRef("Boolean")}} sont toujours copiés et rien de spécial n'a besoin d'être noté à leur sujet (c'est un comportement naturel attendu par un·e développeur·euse JavaScript.)

Pour les objets d'interface, la valeur par défaut est de retourner une _référence_ à l'objet interne. Cela doit être mentionné à la fois dans la description courte de la page de l'interface et dans la description des sous-pages spécifiques.

> [!NOTE]
> Le mot-clé `readonly` utilisé avec une propriété retournant un objet s'applique à la référence (l'objet interne ne peut pas être modifié). Les propriétés de l'objet retourné peuvent être modifiées, même si elles sont marquées comme en lecture seule dans l'interface pertinente.

Parfois, une API doit retourner un _nouvel_ objet, ou une _copie_ d'un objet interne. Ce cas est indiqué dans le WebIDL en utilisant l'annotation `[NewObject]`.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

Dans ce cas, chaque appel à `buffered` retourne un objet différent&nbsp;: le modifier ne change pas la valeur interne, et un changement de la valeur interne n'affecte pas chaque instance d'objet. Dans la documentation, nous le marquons en utilisant l'adjectif _nouveau_ à côté de l'objet&nbsp;:

_La propriété en lecture seule **`HTMLMediaElement.buffered`** retourne un nouvel objet \\{{DOMxRef("TimeRanges")}} qui…_

et

- _\\{{DOMxRef("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Retourne un nouvel objet \\{{DOMxRef("TimeRanges")}} qui …_

Dans le cas d'une référence à un objet de collection (comme `HTMLCollection`, `HTMLFormElementsCollection` ou `HTMLOptionsCollection`, toujours sans `[NewObject]`), nous précisons que les modifications apportées à l'objet sous-jacent sont disponibles avec la référence retournée. Pour le marquer, nous qualifions la collection comme une **collection en direct** `HTMLCollection` (ou `HTMLFormElementsCollections`, ou `HTMLOptionsCollection`), à la fois dans la description de l'interface et dans la sous-page.

par exemple&nbsp;:

- \\{{DOMxRef("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Retourne une **collection en direct** \\{{DOMxRef("HTMLFormControlsCollection")}} contenant…

### Disponibilité dans les workers

La disponibilité des propriétés individuelles dans les workers se trouve également dans le WebIDL. Pour une propriété, la valeur par défaut est la même disponibilité que l'`interface` (c'est-à-dire disponible dans le contexte {{DOMxRef('Window')}} uniquement si rien de spécial n'est marqué) ou que l'`interface partielle` dans laquelle elle est définie.

Pour la documentation, la sous-page doit contenir une phrase indiquant si elle est disponible ou non dans les Web workers, juste avant la section «&nbsp;Syntaxe&nbsp;».

### Préférences

> [!NOTE]
> Ces informations sont spécifiques à Gecko et ne doivent être utilisées que dans la section Compatibilité des navigateurs.

Dans Gecko, la disponibilité de certaines propriétés peut être contrôlée par une préférence. C'est également indiqué dans le WebIDL.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Ici, `media.webvtt.enabled` contrôle la propriété `textTracks`.

> [!NOTE]
> La valeur par défaut de la préférence n'est pas disponible directement dans le WebIDL (elle peut être différente d'un produit utilisant Gecko à un autre).

## Méthodes

Vous pouvez reconnaître la définition d'une méthode par la présence de parenthèses après le nom.

### Nom de la méthode

```webidl
DOMString canPlayType(DOMString type);
```

Le nom de la méthode est `canPlayType`, et nous nous y référons comme `HTMLMediaElement.canPlayType()` (avec les parenthèses qui indiquent qu'il s'agit d'une méthode) dans la documentation, car elle appartient à l'interface `HTMLMediaElement`. Le lien vers la page se fait soit **avec** le préfixe de l'interface en utilisant \\{{DOMxRef("HTMLMediaElement.canPlayType()")}}, soit **sans** le préfixe en utilisant \\{{DOMxRef("HTMLMediaElement.canPlayType", "canPlayType()")}} lorsque le contexte est évident et non ambigu. Les parenthèses doivent toujours être incluses.

### Paramètres

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Les paramètres d'une méthode sont listés dans la section Syntaxe de la sous-page de la méthode. Ils sont listés dans le WebIDL dans l'ordre, entre les parenthèses, sous forme de liste séparée par des virgules. Chaque paramètre a un nom (indiqué ci-dessus) et un type (par exemple, un `'?'` signifie que la valeur `null` est valide). Si marqué `optional`, le paramètre est optionnel à inclure dans un appel de méthode et doit avoir le drapeau \\{{Optional_Inline}} inclus lorsqu'il est listé dans la section Syntaxe. La valeur par défaut du paramètre est indiquée après le signe égal (`'='`).

Les types de paramètres peuvent avoir des comportements spéciaux décrits à l'aide d'attributs étendus (comme `[LegacyNullToEmptyString]`). Voici la liste de ces attributs, et l'ajout que vous devez faire dans le texte&nbsp;:

- `[LegacyNullToEmptyString]`
  - : Ajoutez la phrase suivante à la fin de la description du paramètre&nbsp;: _Une valeur [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) est traitée de la même manière que la chaîne de caractères vide (`""`)._

### Type de la valeur de retour

```webidl
DOMString canPlayType(DOMString type);
```

Le type de la valeur de retour est indiqué avant le nom de la méthode — dans l'exemple ci-dessus, la valeur est un objet de type `DOMString`. Si le type de retour est suivi d'un point d'interrogation (`'?'`), une valeur `null` peut également être renvoyée, et la documentation doit expliquer _quand_ cela peut se produire. Si aucun point d'interrogation n'est présent, comme ici, la valeur de retour ne peut pas être `null`.

Si la valeur de retour est le mot-clé `void`, cela signifie qu'il n'y a pas de valeur de retour. Ce n'est pas un type de valeur de retour. Si l'entrée WebIDL indique `void`, la section _Valeur de retour_ dans la documentation doit simplement indiquer «&nbsp;Aucune (\{{JSxRef("undefined")}}).&nbsp;».

### Lever des exceptions

```webidl
[Throws]
   void fastSeek(double time);
```

Certaines méthodes peuvent lever des exceptions. C'est indiqué à l'aide de l'annotation `[Throws]`. Lorsque cela se produit, la section Syntaxe de la page de la méthode _doit_ comporter une sous-section Exceptions. La liste des exceptions et les conditions pour les déclencher sont indiquées, sous forme de texte, dans la spécification de cette API.

Notez que certaines exceptions ne sont pas explicitement marquées mais sont définies par les liaisons JavaScript. [Essayer de définir une valeur énumérée illégale <sup>(angl.)</sup>](https://webidl.spec.whatwg.org/#es-enumeration) (mappée à un {{JSxRef("String")}} JavaScript) en tant que paramètre déclenche une exception {{JSxRef("TypeError")}}. Cela doit être documenté, mais il n'est marqué que de manière implicite dans le document WebIDL.

Consultez l'une de ces [sections _d'Exceptions_](/fr/docs/Web/API/SubtleCrypto/importKey#exceptions).

### Disponibilité dans les workers

La disponibilité individuelle des méthodes dans les workers se trouve également dans le WebIDL. Pour une méthode, la valeur par défaut est la même disponibilité qu'une `interface` (c'est-à-dire disponible dans le contexte {{DOMxRef('Window')}} uniquement si rien de spécial n'est marqué) ou qu'une `partial interface` dans laquelle elle est définie.

Pour la documentation, la sous-page doit contenir une phrase indiquant si elle est disponible dans les Web workers, juste avant la section Syntaxe.

### Préférences

> [!NOTE]
> Cette information est spécifique à Gecko et ne doit être utilisée que dans la section Compatibilité des navigateurs.

Dans Gecko, la disponibilité de certaines méthodes peut être contrôlée par une préférence. C'est également indiqué dans le WebIDL.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Ici, `media.webvtt.enabled` contrôle la méthode `addTextTrack()`.

> [!NOTE]
> La valeur par défaut de la préférence n'est pas disponible directement dans le WebIDL (elle peut être différente d'un produit utilisant Gecko à un autre.)

## Méthodes spéciales

Certaines méthodes ne sont pas listées comme des méthodes régulières dans le WebIDL, mais plutôt comme des mots-clés spéciaux, qui se traduisent par des méthodes JavaScript standard spécifiques.

### `toString()` et `toJSON()`

Un convertisseur en chaîne de caractères définit comment un objet basé sur une interface est résolu dans des contextes où une chaîne de caractères est attendue. (Voir la section [convertir en chaîne de caractères](#convertir_en_chaîne_de_caractères).) De plus, le mot-clé correspond à `toString()` et défini comme suit&nbsp;:

```webidl
stringifier;
```

La méthode `toString()` est listée comme toute autre méthode de l'interface et possède sa propre sous-page (par exemple, {{DOMxRef("Range.toString()")}}).

Un convertisseur en JSON correspond à `toJSON()` et défini comme suit&nbsp;:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

La méthode `toJSON()` est listée comme toute autre méthode de l'interface et possède sa propre sous-page (par exemple, {{DOMxRef("Performance.toJSON()")}}).

> [!NOTE]
> La spécification WebIDL utilise `serializer` au lieu de `jsonifier`. Cela n'est pas utilisé dans Gecko — seule la proposition non standard probablement précoce `jsonifier` se trouve dans mozilla-central.

### Méthodes de type itérateur

Une interface peut être définie comme _itérable_, ce qui signifie qu'elle a les méthodes suivantes&nbsp;: `entries()`, `keys()`, `values()` et `forEach()`. Elle prend également en charge l'utilisation de {{JSxRef("Statements/for...of", "for...of")}} sur un objet implémentant cette interface.

Il existe deux types d'itération possibles&nbsp;: _l'itérateur de valeurs_ et _l'itérateur de paires_.

#### Itérateur de valeurs

```webidl
iterable<valueType>
```

L'itérateur parcourt les valeurs de type _valueType_. Les méthodes générées sont les suivantes&nbsp;:

- `entries()`, qui retourne un [`iterator`](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) sur les index (qui sont de type `unsigned long`).
- `values()`, qui retourne un [`iterator`](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) sur les valeurs.
- `keys()`, qui retourne un [`iterator`](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) sur les clés, qui sont ses index (qui sont de type `unsigned long`). Dans le cas des itérateurs de valeurs, `keys()` et `entries()` sont identiques.
- `forEach()`, qui exécute une fonction de rappel donnée une fois pour chaque entrée dans la liste.

Un tel itérateur permet d'utiliser la syntaxe `for (const p in object)` comme un raccourci de `for (const p in object.entries())`. Nous ajoutons une phrase à ce sujet dans la description de l'interface.

Les valeurs à itérer peuvent être définies de l'une des manières suivantes&nbsp;:

- Dans le fichier WebIDL, en utilisant la notation `iterable<valueType>`. Par exemple, voir {{DOMxRef('DOMTokenList')}}.
- Implicitement dans le fichier WebIDL, si l'interface prend en charge les propriétés indexées. C'est indiqué lorsque l'interface inclut des méthodes `getter` avec un paramètre de type `unsigned long`.
- En dehors du fichier WebIDL, dans le texte accompagnant. Un tel texte se trouve généralement dans la spécification et commence généralement par&nbsp;: _«&nbsp;La [valeurs à itérer <sup>(angl.)</sup>](https://webidl.spec.whatwg.org/#dfn-value-iterator)…&nbsp;»_.

#### Itérateur de paires

```webidl
iterable<keyType, valueType>
```

L'itérateur parcourt les valeurs de type _valueType_ avec des clés de type _keyType_, c'est-à-dire les paires de valeurs. Les méthodes générées sont les suivantes&nbsp;:

- `entries()`, qui retourne un [`iterator`](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) sur les paires de valeurs. Par exemple, voir {{DOMxRef("FormData.entries()")}}.
- `values()`, qui retourne un [`iterator`](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) sur les valeurs. Par exemple, voir {{DOMxRef("FormData.values()")}}.
- `keys()`, qui retourne un [`iterator`](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) sur les clés. Par exemple, voir {{DOMxRef("FormData.keys()")}}.
- `forEach()`, qui exécute une fonction de rappel donnée une fois pour chaque entrée dans la liste. Par exemple, voir {{DOMxRef("Headers.forEach()")}}.

Un tel itérateur permet d'utiliser la syntaxe `for (const p in object)` comme un raccourci de `for (const p in object.entries())`. Nous ajoutons une phrase à ce sujet dans la description de l'interface. Par exemple, voir {{DOMxRef("FormData")}}.

Les paires de valeurs à itérer peuvent être définies de l'une des manières suivantes&nbsp;:

- Dans le fichier WebIDL, en utilisant la notation `iterable<keyType, valueType>`. Par exemple, voir {{DOMxRef("FormData")}}.
- En dehors du fichier WebIDL, dans le texte accompagnant. Un tel texte se trouve généralement dans la spécification et commence généralement par&nbsp;: _«&nbsp;La [paires de valeurs à itérer <sup>(angl.)</sup>](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…&nbsp;»_.

### Méthodes de type Set

Une interface peut être définie comme _de type set_, ce qui signifie qu'elle représente un _ensemble ordonné de valeurs_ et a les méthodes suivantes&nbsp;: `entries()`, `keys()`, `values()`, `forEach()`, et `has()` (elle possède également la propriété `size`). Elle prend également en charge l'utilisation de {{JSxRef("Statements/for...of", "for...of")}} sur un objet implémentant cette interface. Le type set peut être préfixé par `readonly` ou non. Si ce n'est pas en lecture seule, les méthodes pour modifier l'ensemble sont également implémentées&nbsp;: `add()`, `clear()`, et `delete()`.

```webidl
setlike<valueType>
```

Les propriétés générées sont&nbsp;:

- `entries()`, qui retourne un [`iterator`](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) sur les index. Par exemple, voir {{DOMxRef("NodeList.entries()")}}.
- `values()`, qui retourne un [`iterator`](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) sur les valeurs. Par exemple, voir {{DOMxRef("NodeList.values()")}}.
- `keys()`, qui retourne un [`iterator`](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) sur les clés. Par exemple, voir {{DOMxRef("NodeList.keys()")}}.
- `forEach()`, qui exécute une fonction de rappel donnée une fois pour chaque entrée dans la liste. Par exemple, voir {{DOMxRef("NodeList.forEach()")}}.

Dans le cas où la déclaration de type set n'est pas préfixée par `readonly`, les méthodes suivantes sont également générées&nbsp;:

- `add()` qui ajoute une entrée. Par exemple, la méthode `.add()` de {{DOMxRef("FontFaceSet")}}.
- `clear()` qui vide la structure de type set. Par exemple, la méthode `.clear()` de {{DOMxRef("FontFaceSet")}}.
- `delete()` qui supprime une entrée. Par exemple, la méthode `.delete()` de {{DOMxRef("FontFaceSet")}}.

Une telle interface de type set permet également d'utiliser la syntaxe `for (const p in object)` comme un raccourci de `for (const p in object.entries())`.

## Comportements spéciaux

Certains membres IDL indiquent des comportements spéciaux qui doivent être notés sur les pages appropriées.

### Convertisseurs en chaîne de caractères

En plus d'ajouter la méthode `toString()` à une interface comme décrit dans [toString() et toJSON()](#tostring_and_tojson), les convertisseurs en chaîne de caractères indiquent également qu'une instance d'objet, lorsqu'elle est utilisée comme une chaîne de caractères, retourne une chaîne de caractères autre que celle par défaut. (La valeur par défaut est généralement une représentation JSON de l'objet). La manière exacte dépend de la façon dont elle est définie dans l'IDL. Quelle que soit la manière, le comportement non par défaut doit être décrit sur la page de l'interface.

Lorsque le mot-clé `stringifier` accompagne un nom d'attribut, référencer le nom de l'objet a le même résultat que référencer le nom de l'attribut. Considérons l'IDL suivant&nbsp;:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Pour une classe basée sur cette interface, les lignes de code suivantes sont équivalentes. Le comportement doit être noté sur la page de la propriété en plus de la page de l'interface.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Lorsque le mot-clé `stringifier` est utilisé seul, un objet de l'interface peut être utilisé comme ci-dessus, mais le comportement est défini dans le code source.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Pour savoir ce qu'une référence d'interface fait réellement, consultez la spécification de l'interface ou expérimentez avec l'interface pour déterminer son comportement.

## Constructeurs

Les constructeurs sont un peu cachés dans WebIDL&nbsp;: ils sont listés comme des annotations de l'interface principale.

### Constructeurs sans nom

C'est le cas le plus courant pour les constructeurs. Le constructeur d'une interface donnée A peut être utilisé comme `a = new A(parameters);`

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Un constructeur avec la même interface est défini en utilisant l'annotation `Constructor` sur l'interface. Il peut y avoir des parenthèses et une liste de paramètres ou non (comme dans l'exemple ci-dessus). Nous documentons tous les constructeurs sans nom sur une sous-page — par exemple, l'exemple ci-dessus est donné le chemin _Web/API/MessageChannel/MessageChannel_ et le titre `MessageChannel()`.

Un autre exemple de constructeur sans nom, avec des paramètres&nbsp;:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Il peut également y avoir plusieurs constructeurs sans nom, différant par leurs listes de paramètres. Toute la syntaxe est documentée sur une seule sous-page.

```webidl
[Constructor(DOMString url, URL base),
 Constructor(DOMString url, optional DOMString base),
 Exposed=(Window,Worker)]
    interface URL {};
```

### Constructeurs nommés

```webidl
[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
    interface HTMLImageElement : HTMLElement {…
```

Un constructeur nommé est un constructeur qui a un nom différent de celui de son interface. Par exemple, `new Image(…)` crée un nouvel objet `HTMLImageElement`. Ils sont définis dans le WebIDL en utilisant l'annotation `NamedConstructor` sur l'interface, suivie du nom du constructeur après le signe égal (`'='`) et des paramètres à l'intérieur des parenthèses, dans le même format que celui que vous pouvez voir pour les méthodes.

Il peut y avoir plusieurs constructeurs nommés pour une interface spécifique, mais c'est extrêmement rare&nbsp;; dans ce cas, nous incluons une sous-page par nom.

### Nouvelle syntaxe des constructeurs

Depuis septembre 2019, la syntaxe des constructeurs WebIDL a été mise à jour. La syntaxe des constructeurs n'implique plus un attribut étendu sur l'interface&nbsp;:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Les nouvelles spécifications utilisent plutôt une syntaxe de type méthode nommée `constructor` sans type de retour explicitement défini, écrite comme suit&nbsp;:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Cela signifie que les attributs étendus peuvent maintenant être définis sur le constructeur, et il n'est plus supposé que tous les constructeurs lancent des exceptions. Si un constructeur lance une exception, `[Throws]` est utilisé pour l'indiquer&nbsp;:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Il est peu probable que _toutes_ les spécifications soient mises à jour pour utiliser la nouvelle syntaxe, vous rencontrez donc probablement les deux dans la nature. Nous continuons donc à couvrir les deux types de syntaxe ici.

### Disponibilité dans les workers

Les constructeurs ont la même disponibilité que l'interface, ou l'interface partielle, sur laquelle ils sont définis. La sous-page fournit cette information de la même manière que pour une méthode.

### Préférences

Les constructeurs sont contrôlés par la même préférence que l'interface, ou l'interface partielle, sur laquelle ils sont définis. La sous-page fournit cette information de la même manière que pour une méthode.

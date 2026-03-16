---
title: "Window : méthode matchMedia()"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

La méthode **`matchMedia()`** de l'interface {{DOMxRef("Window")}} retourne un nouvel objet {{DOMxRef("MediaQueryList")}} qui peut ensuite être utilisé pour déterminer si le {{DOMxRef("document")}} correspond à la chaîne de caractères de la [requête média](/fr/docs/Web/CSS/Guides/Media_queries/Using), ainsi que pour surveiller le document afin de détecter quand il correspond (ou cesse de correspondre) à cette requête média.

## Syntaxe

```js-nolint
matchMedia(mediaQueryString)
```

### Paramètres

- `mediaQueryString`
  - : Une chaîne de caractères définissant la requête média à analyser en un objet {{DOMxRef("MediaQueryList")}}.

    Comme en CSS, toute [fonctionnalité média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) doit être entourée de parenthèses dans l'expression. Par exemple&nbsp;: `matchMedia("(width <= 600px)")` ou `matchMedia("(orientation: landscape)")` fonctionnent, tandis que `matchMedia("width < 600px")` ou `matchMedia("orientation: landscape")` ne fonctionnent pas. Les mots-clés pour les types de média (`all`, `print`, `screen`) et les opérateurs logiques (`and`, `or`, `not`, `only`) n'ont pas besoin d'être entourés de parenthèses.

### Valeur de retour

Un nouvel objet {{DOMxRef("MediaQueryList")}} pour la requête média. Utilisez les propriétés et les évènements de cet objet pour détecter les correspondances et surveiller les changements de ces correspondances au fil du temps.

## Notes d'utilisation

Vous pouvez utiliser la requête média retournée pour effectuer des vérifications instantanées et basées sur des évènements afin de voir si le document correspond à la requête média.

Pour effectuer une vérification instantanée unique afin de voir si le document correspond à la requête média, regardez la valeur de la propriété {{DOMxRef("MediaQueryList.matches", "matches")}}, qui sera `true` si le document répond aux exigences de la requête média.

Si vous avez besoin de savoir en permanence si le document correspond ou non à la requête média, vous pouvez plutôt surveiller l'évènement {{DOMxRef("MediaQueryList.change_event", "change")}} pour qu'il soit envoyé à l'objet. Il y a [un bon exemple de cela](/fr/docs/Web/API/Window/devicePixelRatio#surveiller_les_changements_de_résolution_ou_de_niveau_de_zoom) dans l'article sur {{DOMxRef("Window.devicePixelRatio")}}.

## Exemples

Cet exemple exécute la requête média `(width <= 600px)` et affiche la valeur de la propriété `matches` de l'objet `MediaQueryList` résultant dans un {{HTMLElement("span")}}&nbsp;; en conséquence, la sortie indiquera `"true"` si la largeur de la fenêtre est inférieure ou égale à 600 pixels, et `"false"` si la fenêtre est plus large.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Le code JavaScript passe la requête media à `matchMedia()` pour la compiler, puis définit la propriété {{DOMxRef("HTMLElement.innerText", "innerText")}} du `<span>` sur la valeur de la propriété {{DOMxRef("MediaQueryList.matches", "matches")}} des résultats, afin d'indiquer si le document correspond ou non à la requête media au moment où la page a été chargée.

### HTML

```html
<span class="mq-value"></span>
```

Un simple `<span>` pour recevoir la sortie.

```css hidden
.mq-value {
  font:
    18px "Arial",
    sans-serif;
  font-weight: bold;
  color: #8888ff;
  padding: 0.4em;
  border: 1px solid #ddddee;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 60)}}

Voir [Tester les requêtes media par programme](/fr/docs/Web/CSS/Guides/Media_queries/Testing) pour des exemples de code supplémentaires.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les requêtes media](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- [Utiliser les requêtes media depuis le code](/fr/docs/Web/CSS/Guides/Media_queries/Testing)
- L'interface {{DOMxRef("MediaQueryList")}}

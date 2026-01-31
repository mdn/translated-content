---
title: Fragments de texte
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: b2a6a2d255b792532d1cd3edf224f204d1ab2251
---

Les **fragments de texte** permettent de lier directement un texte spécifique d'une page web, sans que l'auteur·ice de la page ait besoin d'ajouter un ID. Ils utilisent une syntaxe spéciale dans le fragment d'URL. Cette fonctionnalité permet de créer des liens profonds vers du contenu que vous ne contrôlez pas et qui peut ne pas avoir d'ID associé. Elle rend aussi le partage de liens plus utile en pointant directement d'autres personnes vers des mots précis. Les navigateurs peuvent différer dans la façon de mettre en évidence le texte lié — en général, le texte est fait défiler dans la vue et surligné en couleur.

## Concepts et utilisation

Historiquement, l'une des caractéristiques clés du web a toujours été sa capacité à fournir des liens entre différents documents — c'est ce qui fait du _web_ un réseau&nbsp;:

- Vous pouvez lier le haut d'un document en pointant vers son URL, par exemple&nbsp;:
  - [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a](/fr/docs/Web/HTML/Reference/Elements/a).
- Vous pouvez lier une section spécifique d'un document en pointant vers son URL plus le _fragment de document_ (ID) de cette section, par exemple&nbsp;:
  - [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a#compatibilité_des_navigateur](/fr/docs/Web/HTML/Reference/Elements/a#compatibilité_des_navigateur).

Le problème avec les liens vers des fragments de document spécifiques est que l'auteur·ice de la page liée doit placer une ancre pour que le lien fonctionne réellement. Le second exemple ci-dessus pointe vers un élément {{HTMLElement("Heading_Elements", "h2")}} avec un ID `compatibilité_des_navigateur`&nbsp;:

```html
<h2 id="compatibilité_des_navigateur">
  <a href="#compatibilité_des_navigateur">Compatibilité des navigateurs</a>
</h2>
```

Tous les documents ne possèdent pas de telles ancres, et même s'ils en ont, lier un titre peut être bien moins précis que de lier directement le texte cité. C'est là que les fragments de texte sont utiles&nbsp;: ils permettent à l'auteur·ice du lien de contrôler exactement le texte à cibler, sans nécessiter de balisage particulier dans le document cible. Par exemple, un moteur de recherche peut référencer une phrase précise dans ses résultats, et cliquer sur le lien amènera directement à cette phrase.

Cependant, les fragments de texte ont aussi une limite&nbsp;: le texte d'un document est moins stable que sa structure. Si le texte du document lié est modifié, le fragment ne correspond plus et le navigateur va en haut de la page. Cela convient pour des liens temporaires comme ceux des résultats de recherche, mais si vous souhaitez que le lien fonctionne dans le temps, les fragments de document sont plus fiables.

## Syntaxe

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Les fragments de texte sont un type de fragment d'URL, et s'écrivent après le `#`. Les éléments clés à comprendre sont les suivants&nbsp;:

- `:~:`
  - : Aussi appelée _directive de fragment_, cette séquence de caractères indique au navigateur que ce qui suit est une ou plusieurs instructions à destination de l'agent utilisateur, qui sont retirées de l'URL lors du chargement afin que les scripts de l'auteur·ice ne puissent pas y accéder directement. Les instructions d'agent utilisateur sont aussi appelées directives.
- `text=`
  - : Une directive de texte. Elle fournit un fragment de texte au navigateur, définissant le texte à cibler dans le document lié.
- `textStart`
  - : Une chaîne de caractères définissant le début du texte ciblé.
- `textEnd` {{Optional_Inline}}
  - : Une chaîne de caractères définissant la fin du texte ciblé.
- `prefix-` {{Optional_Inline}}
  - : Une chaîne de caractères suivie d'un tiret, définissant le texte qui doit précéder immédiatement le texte ciblé (en autorisant uniquement des espaces entre les deux). Cela aide le navigateur à sélectionner le bon texte ciblé en cas de correspondances multiples.
- `-suffix` {{Optional_Inline}}
  - : Un tiret suivi d'une chaîne de caractères, définissant le texte qui doit suivre immédiatement le texte ciblé (en autorisant uniquement des espaces entre les deux). Cela aide le navigateur à sélectionner le bon texte ciblé en cas de correspondances multiples.

Les navigateurs compatibles feront défiler la page et surligneront le premier fragment de texte du document lié qui correspond à la directive spécifiée. Il est possible de définir plusieurs fragments de texte à surligner dans la même URL en les séparant par des esperluettes (`&`).

### Notes d'utilisation

- Les chaînes de caractères utilisées pour les valeurs `textStart`, `textEnd`, `prefix-` et `-suffix` doivent être [encodées en pourcentage](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent). De plus, [la norme <sup>(angl.)</sup>](https://wicg.github.io/scroll-to-text-fragment/#syntax) exige que le tiret sûr pour les URLs `'-'` soit également encodé en pourcentage.
- Les correspondances ne tiennent pas compte de la casse.
- Chaque chaîne de caractères `textStart`, `textEnd`, `prefix-` et `-suffix` doit se trouver entièrement dans le même [élément de niveau bloc](/fr/docs/Glossary/Block-level_content), mais les correspondances complètes peuvent s'étendre sur plusieurs éléments.
- Pour des raisons de sécurité, lors de la création d'un lien vers une page d'un autre site avec cette fonctionnalité, il faut ouvrir le lien dans un contexte `noopener` — ajoutez `rel="noopener"` à vos éléments HTML {{HTMLElement("a")}}, et ajoutez `noopener` à vos appels {{DOMxRef("window.open()")}} lors de l'utilisation de cette fonctionnalité.
- Les fragments de texte ne sont invoqués que lors de navigations initiées par l'utilisateur·ice.
- Les fragments de texte ne s'appliquent qu'à la trame principale&nbsp;: le texte ne sera pas recherché dans les {{HTMLElement("iframe")}}, et la navigation dans un `iframe` n'invoquera pas de fragment de texte.
- Pour les sites qui souhaitent se désengager, les navigateurs basés sur Chromium prennent en charge une valeur d'en-tête [Document Policy <sup>(angl.)</sup>](https://wicg.github.io/document-policy/) que l'on peut envoyer pour que les agents utilisateur n'interprètent pas les fragments de texte&nbsp;:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Si le fragment de texte fourni ne correspond à aucun texte dans le document lié, ou si le navigateur ne prend pas en charge les fragments de texte, tout le fragment de texte est ignoré et le haut du document est ciblé.

## Exemples

### Fragment de texte avec `textStart`

- [https://example.com/#:~:text=use](https://example.com/#:~:text=use) fait défiler et surligne la première occurrence du texte `use` dans le document.
- [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a#:~:text=human](/fr/docs/Web/HTML/Reference/Elements/a#:~:text=human) fait défiler et surligne la première occurrence du texte `human` dans le document.
- [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL](/fr/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL) fait défiler et surligne la première occurrence du texte `linked URL` dans le document.

### `textStart` et `textEnd`

- [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a#:~:text=human,URL](/fr/docs/Web/HTML/Reference/Elements/a#:~:text=human,url) scrolls to and highlights the first instance of a text string starting with `human` and ending with `URL`.
- [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value](/fr/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value) scrolls to and highlights the first instance of a text string starting with `linked URL` and ending with `defining a value`. Note how the highlighted text spans across multiple block-level elements.

### Exemples avec `prefix-` et/ou `-suffix`

- [https://example.com/#:~:text=avoid-,use](https://example.com/#:~:text=avoid-,use) fait défiler et surligne la deuxième occurrence du texte `use` dans le document.
- [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer](/fr/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer) fait défiler et surligne la première occurrence du texte `referrer` précédée directement du texte `sent`. Il s'agit de la 5<sup>e</sup> occurrence de `referrer` dans le document&nbsp;; sans le préfixe, la première occurrence serait surlignée.
- [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format](/fr/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format) fait défiler et surligne la première occurrence du texte `linked URL` suivie directement du texte `'s format`. Il s'agit de la 5<sup>e</sup> occurrence de `linked URL` dans le document&nbsp;; sans le suffixe, la première occurrence serait surlignée.
- [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/fr/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) fait défiler et surligne l'occurrence du texte `The Referer ... be sent` précédée de `downgrade:` et suivie de `to origins`. Cela illustre un exemple plus complexe où le préfixe/suffixe sont utilisés pour cibler précisément l'occurrence souhaitée. Essayez de retirer le préfixe, par exemple, pour voir ce qui est alors surligné.

### URLs avec plusieurs fragments de texte

Vous pouvez définir plusieurs fragments de texte à surligner dans la même URL en les séparant par des esperluettes (`&`). Voici quelques exemples&nbsp;:

- [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a#:~:text=Causes&text=linked](/fr/docs/Web/HTML/Reference/Elements/a#:~:text=causes&text=linked) fait défiler et surligne les premières occurrences des chaînes de caractères `Causes` et `linked`.
- [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/fr/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) fait défiler et surligne deux occurrences de texte&nbsp;:
  - La première occurrence du texte `linked URL` suivie directement du texte `'s format`.
  - La première occurrence d'une chaîne de caractères commençant par `attributes` et se terminant par `attribute`, précédée de `Deprecated`.

Si vous ne voyez pas un ou plusieurs de vos fragments de texte surlignés alors que vous êtes certain·e d'avoir la bonne syntaxe, il se peut que ce soit une autre occurrence que celle attendue. Elle peut être surlignée, mais hors écran.

### Mise en forme des fragments de texte surlignés

Les navigateurs sont libres de styliser le texte surligné comme ils le souhaitent par défaut. Le [module CSS Pseudo-Elements Level 4 <sup>(angl.)</sup>](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) définit un pseudo-élément, {{CSSxRef("::target-text")}}, qui permet de personnaliser la mise en forme.

Par exemple, dans notre [démo scroll-to-text <sup>(angl.)</sup>](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance), nous avons le CSS suivant&nbsp;:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Essayez de suivre le lien ci-dessus dans un navigateur compatible pour voir l'effet obtenu.

### Détection de la fonctionnalité

L'objet {{DOMxRef("FragmentDirective")}}, accessible via la propriété {{DOMxRef("Document.fragmentDirective")}}, permet de tester si les fragments de texte sont pris en charge dans un navigateur.

Essayez d'exécuter ce qui suit dans les outils de développement d'un navigateur compatible, dans un onglet avec un ou plusieurs fragments de texte surlignés&nbsp;:

```js
document.fragmentDirective;
// retourne un objet FragmentDirective vide, si pris en charge
// undefined sinon
```

Cette fonctionnalité sert principalement à la détection de prise en charge pour l'instant. À l'avenir, l'objet `FragmentDirective` pourrait inclure des informations supplémentaires.

## Référence

### API

- {{DOMxRef("FragmentDirective")}}
  - : Un objet représentant les fragments de texte. Actuellement vide et principalement destiné à la détection de fonctionnalité.
- {{DOMxRef("Document.fragmentDirective")}}
  - : Retourne l'objet {{DOMxRef("FragmentDirective")}} du document courant.

### CSS

- {{CSSxRef("::target-text")}}
  - : Représente les fragments de texte surlignés dans le document courant. Permet aux auteur·ice·s de personnaliser la mise en forme des fragments de texte.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Créer des liens profonds vers du texte&nbsp;: Text Fragments <sup>(angl.)</sup>](https://web.dev/articles/text-fragments)

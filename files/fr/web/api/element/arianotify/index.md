---
title: "Element : méthode ariaNotify()"
short-title: ariaNotify()
slug: Web/API/Element/ariaNotify
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{APIRef("DOM")}}

La méthode **`ariaNotify()`** de l'interface {{DOMxRef("Element")}} permet de mettre en file d'attente une chaîne de caractères du texte à annoncer par un {{Glossary("screen reader", "lecteur d'écran")}}.

## Syntaxe

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Paramètres

- `announcement`
  - : Une chaîne de caractères définissant le texte à annoncer.
- `options` {{Optional_Inline}}
  - : Un objet d'options contenant les propriétés suivantes&nbsp;:
    - `priority`
      - : Une valeur énumérée définissant la priorité de l'annonce.
        Les valeurs possibles sont&nbsp;:
        - `normal`
          - : L'annonce a une priorité normale.
            Elle est lue après toute annonce qu'un lecteur d'écran est en train de faire.
            C'est la valeur par défaut.
        - `high`
          - : L'annonce a une priorité élevée.
            Elle est lue immédiatement, interrompant toute annonce qu'un lecteur d'écran est en train de faire.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Description

La méthode **`ariaNotify()`** peut être utilisée pour déclencher programmatiquement une annonce pour un lecteur d'écran. Cette méthode offre une fonctionnalité similaire à celle des [régions ARIA dynamiques](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions), avec certains avantages&nbsp;:

- Les régions dynamiques ne peuvent faire des annonces qu'après des modifications du DOM, tandis qu'une annonce `ariaNotify()` peut être faite à tout moment.
- Les annonces des régions dynamiques impliquent la lecture du contenu mis à jour du nœud DOM modifié, tandis que le contenu de l'annonce `ariaNotify()` peut être défini indépendamment du contenu du DOM.

Les développeur·euse·s contournent souvent les limitations des régions dynamiques en utilisant des nœuds DOM cachés avec des régions dynamiques définies dessus, dont le contenu est mis à jour avec le contenu à annoncer. C'est inefficace et sujet aux erreurs, et `ariaNotify()` offre un moyen d'éviter de tels problèmes.

Certains lecteurs d'écran lisent plusieurs annonces `ariaNotify()` dans l'ordre, mais cela ne peut pas être garanti sur tous les lecteurs d'écran et toutes les plateformes. Normalement, seule l'annonce la plus récente est lue. Il est plus fiable de combiner plusieurs annonces en une seule.

Par exemple, les appels suivants&nbsp;:

```js
elemRef.ariaNotify("Bonjour.");
elemRef.ariaNotify("Il est actuellement 8 heures.");
```

peut être mieux combiné&nbsp;:

```js
elemRef.ariaNotify("Bonjour. Il est actuellement 8 heures.");
```

Un appel à `ariaNotify()` peut être effectué sur n'importe quel élément du DOM, sauf pour ceux que le navigateur ne considère pas comme «&nbsp;intéressants&nbsp;» pour l'accessibilité et ignore lors de la construction de l'arbre d'accessibilité. Les éléments ignorés varient selon le navigateur, mais la liste inclut généralement les éléments conteneurs de peu ou pas de valeur sémantique, tels que les éléments {{HTMLElement("html")}} et {{HTMLElement("body")}}.

Les annonces `ariaNotify()` ne nécessitent pas {{Glossary("transient activation", "d'activation transitoire")}}&nbsp;; vous devez veiller à ne pas inonder les utilisateur·ice·s de lecteurs d'écran avec trop de notifications, car cela peut créer une mauvaise expérience utilisateur.

### Priorités des annonces

Une annonce `ariaNotify()` avec `priority: high` de définie est annoncée avant une annonce `ariaNotify()` avec `priority: normal` de définie.

Les annonces `ariaNotify()` sont approximativement équivalentes aux annonces de régions ARIA live comme suit&nbsp;:

- `ariaNotify()` `priority: high`&nbsp;: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`&nbsp;: `aria-live="polite"`.

Cependant, les annonces `aria-live` ont la priorité sur les annonces `ariaNotify()`.

### Sélection de la langue

Les lecteurs d'écran choisissent une voix appropriée pour lire les annonces `ariaNotify()` (en termes d'accent, de prononciation, etc.) en fonction de la langue définie dans l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) de l'élément ou, si l'élément n'a pas d'attribut `lang` défini, de l'attribut `lang` défini sur son ancêtre le plus proche. Si aucun attribut `lang` n'est défini dans le HTML, la langue par défaut de l'agent utilisateur est utilisée.

### Intégration de la politique de permissions

L'utilisation de `ariaNotify()` dans un document ou un {{HTMLElement("iframe")}} peut être contrôlée par une [politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/aria-notify", "aria-notify")}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation, toutes les annonces créées à l'aide de `ariaNotify()` échouent silencieusement (elles ne sont pas envoyées).

## Exemples

Pour un exemple plus substantiel, voir [l'exemple de liste de courses accessible](/fr/docs/Web/API/Document/ariaNotify#accessible_shopping_list_example) sur la page {{DOMxRef("Document.ariaNotify()")}}. L'exemple fonctionne de la même manière si vous appeliez `ariaNotify()` sur une référence d'élément plutôt que sur l'objet `Document`.

### Utilisation simple de `ariaNotify()`

Cet exemple inclut un {{HTMLElement("button")}} qui déclenche une annonce pour le lecteur d'écran lorsqu'il est cliqué.

```html live-sample___basic-arianotify
<button>Appuyez</button>
```

```css hidden live-sample___basic-arianotify
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```js live-sample___basic-arianotify
document.querySelector("button").addEventListener("click", () => {
  document
    .querySelector("button")
    .ariaNotify("Vous ne m'avez pas vu, n'est-ce pas ?");
});
```

#### Résultat

Le résultat est le suivant&nbsp;:

{{EmbedLiveSample("basic-arianotify", "100%", 60, , , , "aria-notify")}}

Essayez d'activer un lecteur d'écran, puis appuyez sur le bouton. Vous devez entendre «&nbsp;Vous ne m'avez pas vu, n'est-ce pas&nbsp;?&nbsp;» prononcé par le lecteur d'écran.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.ariaNotify()")}}
- [Régions ARIA dynamiques](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions)

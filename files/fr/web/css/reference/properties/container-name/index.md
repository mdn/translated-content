---
title: Propriété CSS `container-name`
short-title: container-name
slug: Web/CSS/Reference/Properties/container-name
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

La propriété [CSS](/fr/docs/Web/CSS) **`container-name`** définit une liste de noms de conteneurs de requête utilisée par la règle {{CSSxRef("@container")}} dans une [requête de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_queries).

## Syntaxe

```css
container-name: none;

/* Un seul nom */
container-name: mon-calque;

/* Plusieurs noms */
container-name: mon-calque-page ma-bibliotheque-de-composants;

/* Valeurs globales */
container-name: inherit;
container-name: initial;
container-name: revert;
container-name: revert-layer;
container-name: unset;
```

### Valeurs

- `none`
  - : La valeur par défaut. Le conteneur de requête n'a pas de nom.

- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Une chaîne de caractères sensible à la casse utilisée pour identifier le conteneur.
    Les conditions suivantes s'appliquent&nbsp;:
    - Le nom ne doit pas être égal à `or`, `and`, `not` ou `default`.
    - La valeur du nom ne doit pas être entre guillemets.
    - L'identifiant commençant par un tiret destiné à désigner les identifiants définis par le site (par exemple, `--nom-conteneur`) est autorisé.
    - Une liste de plusieurs noms séparés par un espace est autorisée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Description

Sans nom défini, une requête de conteneur applique des styles aux éléments en fonction d'attributs tels que la [taille](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#requêtes_de_taille_de_conteneur) ou [l'état de défilement](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) de l'ancêtre le plus proche avec un [contexte de compartimentation](/fr/docs/Web/CSS/Guides/Containment/Container_queries#nommer_les_contextes_de_confinement).

> [!NOTE]
> Les descendants des conteneurs de taille peuvent être dimensionnés en utilisant les [unités de longueur des requêtes de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_queries#unités_de_longueur_de_requête_de_conteneur).

Lorsqu'un contexte de compartimentation reçoit un nom, il peut être ciblé spécifiquement en définissant ce nom dans une règle {{CSSxRef("@container")}}.

Il est possible de créer une requête de conteneur en attribuant un `container-name` à un élément, puis en interrogeant uniquement l'existence de ce nom dans la règle `@container` associée, sans expression de requête définie. Ces soi-disant [**requêtes de conteneur uniquement par un nom**](/fr/docs/Web/CSS/Guides/Containment/Container_queries#requêtes_de_conteneur_uniquement_par_un_nom) permettent d'appliquer sélectivement des styles aux éléments uniquement en fonction de la présence d'un ancêtre avec un `container-name` spécifique défini.

## Exemples

### Utiliser un nom de conteneur

L'exemple HTML ci-dessous est un composant de type carte contenant un titre et du texte&nbsp;:

```html
<div class="carte">
  <div class="donnees-publication">
    <h2>Titre de la carte</h2>
    <p>Mes détails de publication.</p>
  </div>
  <div class="extrait-article">
    <p>
      Un aperçu de mon <a href="https://example.com">article de blog</a> sur les
      chats.
    </p>
  </div>
</div>
```

Pour créer un contexte de compartimentation, ajouter la propriété `container-type` à un élément en CSS.
L'exemple suivant crée deux contextes de compartimentation, l'un pour les informations méta de la carte et l'autre pour l'extrait de l'article&nbsp;:

> [!NOTE]
> Une syntaxe raccourcie pour ces déclarations est décrite dans la page {{CSSxRef("container")}}.

```css
.donnees-publication {
  container-type: inline-size;
}

.extrait-article {
  container-type: inline-size;
  container-name: extrait;
}
```

L'écriture d'une requête de conteneur avec la règle {{CSSxRef("@container")}} applique des styles aux éléments du conteneur lorsque la requête est vraie.
L'exemple suivant comporte deux requêtes de conteneur, l'une s'applique uniquement au contenu de l'élément `.extrait-article` et l'autre s'applique aux contenus de `.donnees-publication` et de `.extrait-article`&nbsp;:

```css
@container extrait (width >= 400px) {
  p {
    visibility: hidden;
  }
}

@container (width >= 400px) {
  p {
    font-size: 2rem;
  }
}
```

Pour plus d'informations sur l'écriture des requêtes de conteneur, consulter la page [Les requêtes de conteneur CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries).

### Utiliser plusieurs noms de conteneur

Vous pouvez également fournir plusieurs noms à un contexte de conteneur séparés par un espace&nbsp;:

```css
.donnees-publication {
  container-type: inline-size;
  container-name: meta carte;
}
```

Cela vous permet de cibler le conteneur en utilisant l'un ou l'autre des noms dans la règle {{CSSxRef("@container")}}.
Ceci est utile si vous souhaitez cibler le même conteneur avec plusieurs requêtes de conteneur où l'une ou l'autre des conditions peut être vraie&nbsp;:

```css
@container meta (width <= 500px) {
  p {
    visibility: hidden;
  }
}

@container carte (width <= 200px) {
  h2 {
    font-size: 1.5em;
  }
}
```

### Utiliser une requête de conteneur uniquement par un nom

Cet exemple montre comment utiliser une [requête de conteneur uniquement par un nom](/fr/docs/Web/CSS/Guides/Containment/Container_queries#requêtes_de_conteneur_uniquement_par_un_nom).

#### HTML

Nous incluons un {{HTMLElement("div")}} avec un `id` de `conteneur`, et trois {{HTMLElement("p")}} éléments, deux à l'intérieur du conteneur, et un à l'extérieur du conteneur&nbsp;:

```html live-sample_name-only
<div id="conteneur">
  <p>Je suis dans le conteneur.</p>
  <p>Je suis également dans le conteneur.</p>
</div>
<p>Je ne suis pas dans le conteneur.</p>
```

#### CSS

Nous attribuons un nom au conteneur&nbsp;:

```css live-sample_name-only
#conteneur {
  container-name: mon-conteneur;
}
```

Nous pouvons ensuite appliquer des styles uniquement aux éléments à l'intérieur des conteneurs avec ce nom défini, comme montré dans l'extrait suivant.

```css live-sample_name-only
@container mon-conteneur {
  p {
    background-color: lime;
    font-size: 1.3rem;
    width: 50vw;
    padding: 0.5rem;
    font-family: sans-serif;
  }
}
```

#### Résultat

{{EmbedLiveSample("name-only", "100%", 300)}}

Les styles définis doivent être appliqués uniquement aux premier et deuxième {{HTMLElement("p")}} éléments, mais pas au troisième.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les requêtes de conteneur CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries)
- [Utiliser les requêtes de taille et de style de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Utiliser les requêtes d'état de défilement du conteneur](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- La règle {{CSSxRef("@container")}}
- La propriété raccourcie {{CSSxRef("container")}}
- La propriété {{CSSxRef("container-type")}}
- La propriété {{CSSxRef("content-visibility")}}

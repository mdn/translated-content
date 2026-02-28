---
title: container-name
slug: Web/CSS/Reference/Properties/container-name
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`container-name`** définit une liste de noms de conteneurs de requête utilisée par la règle {{CSSxRef("@container")}} dans une [requête de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_queries).
Une requête de conteneur applique des styles aux éléments en fonction de la [taille](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#taille_du_conteneur_de_requête) ou de [l'état de défilement](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) de l'ancêtre le plus proche disposant d'un contexte de compartimentation.
Lorsqu'un contexte de compartimentation reçoit un nom, il peut être ciblé spécifiquement en utilisant la règle {{CSSxRef("@container")}} au lieu de l'ancêtre le plus proche possédant la compartimentation.

## Syntaxe

```css
container-name: none;

/* Un seul nom */
container-name: my-layout;

/* Plusieurs noms */
container-name: my-page-layout my-component-library;

/* Valeurs globales */
container-name: inherit;
container-name: initial;
container-name: revert;
container-name: revert-layer;
container-name: unset;
```

### Valeurs

- `none`
  - : Valeur par défaut. Le conteneur de requête n'a pas de nom.

- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Une chaîne sensible à la casse utilisée pour identifier le conteneur.
    Les conditions suivantes s'appliquent&nbsp;:
    - Le nom ne doit pas être égal à `or`, `and`, `not` ou `default`.
    - La valeur du nom ne doit pas être entre guillemets.
    - L'identifiant commençant par un tiret destiné à désigner les identifiants définis par l'auteur (par exemple, `--container-name`) est autorisé.
    - Une liste de plusieurs noms séparés par un espace est autorisée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser un nom de conteneur

L'exemple HTML ci-dessous est un composant de type carte contenant un titre et du texte&nbsp;:

```html
<div class="card">
  <div class="post-meta">
    <h2>Titre de la carte</h2>
    <p>Mes détails de publication.</p>
  </div>
  <div class="post-excerpt">
    <p>
      Un aperçu de mon <a href="https://exemple.com">article de blog</a> sur les
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
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

L'écriture d'une requête de conteneur via la règle {{CSSxRef("@container")}} applique des styles aux éléments du conteneur lorsque la requête est vraie.
L'exemple suivant comporte deux requêtes de conteneur, l'une s'applique uniquement au contenu de l'élément `.post-excerpt` et l'autre s'applique aux contenus de `.post-meta` et de `.post-excerpt`&nbsp;:

```css
@container excerpt (width >= 400px) {
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
.post-meta {
  container-type: inline-size;
  container-name: meta card;
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

@container card (width <= 200px) {
  h2 {
    font-size: 1.5em;
  }
}
```

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

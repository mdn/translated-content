---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/grid-template-areas
---
{{CSSRef}}

La propriété **`grid-template-areas`** permet de définir des zones de grille nommées.

{{EmbedInteractiveExample("pages/css/grid-template-areas.html")}}

Ces zones ne sont pas associées à un objet de la grille mais peuvent être utilisées avec les propriétés de placement : {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}} et les méthodes de raccourci correspondantes {{cssxref("grid-row")}}, {{cssxref("grid-column")}}, and {{cssxref("grid-area")}}.

## Syntaxe

```css
/* Valeur avec un mot-clé */
grid-template-areas: none;

/* Valeurs de chaînes */
/* Type <string>      */
grid-template-areas: "a b";
grid-template-areas: "a b b"
                     "a c d";

/* Valeurs globales */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: unset;
```

### Valeurs

- `none`
  - : Le conteneur de grille ne définit aucune zone de grille nommée.
- `<string>+`
  - : Un ligne est créée pour chaque chaîne. Une colonne est créée pour chaque composant de la chaîne de caractères. Si on a un même composant réutilisé sur différentes lignes, cela créera une cellule sur les différentes lignes et colonnes. Il est nécessaire que ces cellules forment un rectangle, sinon, la déclaration est invalide. Voir {{cssxref("&lt;string&gt;")}} pour plus d'informations sur les valeurs de ce type.

### Syntaxe formelle

{{csssyntax}}

## Exemple

### HTML

```html
<section id="page">
  <header>En-tête</header>
  <nav>Navigation</nav>
  <main>Zone principale</main>
  <footer>Pied de page</footer>
</section>
```

### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas: "head head"
                       "nav main"
                       "nav foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

### Résultat

{{EmbedLiveSample("Exemple", "100%", "250px")}}

## Spécifications

| Spécification                                                                                                | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName("CSS3 Grid", "#propdef-grid-template-areas", "grid-template-areas")}} | {{Spec2("CSS3 Grid")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.grid-template-areas")}}

## Voir aussi

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template")}}
- [Guide : les zones des grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Définir_des_zones_sur_une_grille)
- Tutoriel vidéo : [les zones des grilles CSS (en anglais)](http://gridbyexample.com/video/grid-template-areas/)

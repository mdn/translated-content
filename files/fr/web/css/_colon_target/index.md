---
title: ":target"
slug: Web/CSS/:target
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:target`** permet de cibler l'unique élément (s'il existe) dont l'attribut [`id`](/fr/docs/Web/HTML/Global_attributes#id) correspond au fragment d'identifiant de l'URI du document.

```css
/* Cible un élément dont l'identifiant      */
/* correspond au fragment de l'URL courante */
:target {
  border: 2px solid black;
}
```

Les URI comportant des fragments d'identifiant peuvent être utilisées pour créer des liens vers un élément donné d'un document qu'on appellera l'élément cible (_target element_). Voici un exemple d'URI qui pointe vers une _ancre_ intitulée `section2` :

```
http://exemple.com/chemin/document.html#section2
```

L'élément suivant sera donc ciblé par le sélecteur `:target` avec l'URL précédente :

```html
<section id="section2">Exemple</section>
```

> **Note :** L'attribut `id` a été ajouté avec HTML 4 (décembre 1997). Dans les anciennes versions de HTML, `<a>` était nécessairement l'élément cible. La pseudo-classe `:target` permet également de gérer ces cibles.

## Syntaxe

{{csssyntax}}

## Exemples

### Exemples simples

```css
/* Exemple de code pouvant être utilisé dans une feuille
   de style utilisateur. Une flèche rouge/jaune indique
   l'élément cible. */

:target {
  box-shadow: 0.2em 0.2em 0.3em #888;
}

:target:before {
  font:
    70% Arial,
    "Nimbus Sans L",
    sans-serif !important;
  content: "\25ba"; /* ► */
  color: red;
  background: gold;
  border: solid thin;
  padding-left: 1px;
  display: inline-block;
  margin-right: 0.13em;
  vertical-align: 20%;
}
```

### Manipuler les éléments avec `display: none`

La pseudo-classe `:target` s'accommode également des éléments qui ne sont pas affichés.

#### CSS

```css
#newcomment {
  display: none;
}

#newcomment:target {
  display: block;
}
```

#### HTML

```html
<p><a href="#newcomment">Ajouter un commentaire</a></p>
<div id="newcomment">
  <form>
    <p>
      Saisir un commentaire :<br />
      <textarea></textarea>
    </p>
  </form>
</div>
```

#### Résultat

{{EmbedLiveSample("Manipuler_les_éléments_avec_display:_none")}}

### Révéler des éléments

`:target` peut être utile afin de révéler/masquer certains éléments invisibles.

#### CSS

```css
div.lightbox {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

div.lightbox:target {
  display: table;
}

div.lightbox figure {
  display: table-cell;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

div.lightbox figure figcaption {
  display: block;
  margin: auto;
  padding: 8px;
  background-color: #ddbbff;
  height: 250px;
  position: relative;
  overflow: auto;
  border: 1px #000000 solid;
  border-radius: 10px;
  text-align: justify;
  font-size: 14px;
}

div.lightbox figure .closemsg {
  display: block;
  margin: auto;
  height: 0;
  overflow: visible;
  text-align: right;
  z-index: 2;
  cursor: default;
}

div.lightbox figure .closemsg,
div.lightbox figure figcaption {
  width: 300px;
}

.closemsg::after {
  content: "\00D7";
  display: inline-block;
  position: relative;
  right: -20px;
  top: -10px;
  z-index: 3;
  color: #ffffff;
  border: 1px #ffffff solid;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  line-height: 18px;
  text-align: center;
  margin: 0;
  background-color: #000000;
  font-weight: bold;
  cursor: pointer;
}

.closemsg::before {
  content: "";
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.85;
}
```

#### HTML

```html
<p>Un texte pour l'exemple&hellip;</p>
<p>
  [ <a href="#exemple1">Ouvrir l'exemple n°1</a> |
  <a href="#exemple2"> Ouvrir l'exemple n°2</a> ]
</p>
<p>Un autre texte pour l'exemple&hellip;</p>
<div class="lightbox" id="exemple1">
  <figure>
    <a href="#" class="closemsg"></a>
    <figcaption>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis enim,
      placerat id eleifend eu, semper vel sem. Sed interdum commodo enim
      venenatis pulvinar. Proin mattis lorem vitae diam scelerisque hendrerit.
      Fusce cursus imperdiet mauris, vitae hendrerit velit dignissim a.
      Suspendisse potenti. Aenean feugiat facilisis diam, in posuere sapien
      mattis vel. Proin molestie rutrum diam, pharetra feugiat ligula
      sollicitudin sed. Etiam cursus diam quis tellus aliquam gravida. Aliquam
      erat volutpat.<br />
      Etiam varius adipiscing mi eget imperdiet. Nulla quis vestibulum leo.
      Integer molestie massa ut massa commodo in blandit purus aliquam. Mauris
      sit amet posuere massa. Ut a eleifend augue. Proin sodales mauris nec
      tellus pharetra dictum.
    </figcaption>
  </figure>
</div>

<div class="lightbox" id="exemple2">
  <figure>
    <a href="#" class="closemsg"></a>
    <figcaption>
      Cras risus odio, pharetra nec ultricies et, mollis ac augue. Nunc et diam
      quis sapien dignissim auctor. Quisque quis neque arcu, nec gravida magna.
      Etiam ullamcorper augue quis orci posuere et tincidunt augue semper.
      Maecenas varius augue eu orci auctor bibendum tristique ligula egestas.
      Morbi pharetra tortor iaculis erat porta id aliquam leo cursus. Ut nec
      elit vel mauris dapibus lacinia eget sed odio.
    </figcaption>
  </figure>
</div>
```

#### Résultat

{{EmbedLiveSample("Révéler_des_éléments")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la pseudo-classe `:target` dans les sélecteurs](/fr/docs/Web/CSS/CSS_Selectors/Using_the_%3Atarget_pseudo-class_in_selectors)
- [Un exemple d'utilisation de `:target` pour un système de diapositives, sur GitHub](https://madmurphy.github.io/takefive.css/)

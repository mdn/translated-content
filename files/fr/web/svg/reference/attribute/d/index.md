---
title: d
slug: Web/SVG/Reference/Attribute/d
original_slug: Web/SVG/Attribute/d
l10n:
  sourceCommit: 1a26583f60bdceece64347bf967d0653fe8df288
---

{{SVGRef}}

L'attribut **`d`** définit un tracé à dessiner.

La définition d'un tracé est une liste de [commandes de tracé](#commandes_de_tracé) où chaque commande est composée d'une lettre pour la commande, et de nombres qui représentent les paramètres de la commande. Les commandes sont détaillées [ci-dessous](#commandes_de_tracé).

Cet attribut peut être utilisé sur les éléments SVG suivants&nbsp;: [`<path>`](#path), [`<glyph>`](#glyph), [`<missing-glyph>`](#missing-glyph).

`d` est un attribut de présentation et peut donc [être utilisé comme propriété CSS](#utilisation_comme_propriété_css).

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,30
       A 20, 20 0, 0, 1 50, 30
       A 20, 20 0, 0, 1 90, 30
       Q 90, 60 50, 90
       Q 10, 60 10, 30 z" />
</svg>
```

{{EmbedLiveSample('', '100%', 200)}}

## `<path>`

Pour un [`<path>`](/fr/docs/Web/SVG/Reference/Element/path), `d` est une chaîne de caractères qui contient une série de commandes de tracé qui définissent le tracé à dessiner.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <a href="/fr/docs/Web/SVG/Content_type#string"><code>&lt;string&gt;</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Animable</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<glyph>`

> [!WARNING]
> Depuis SVG2, [`<glyph>`](/fr/docs/Web/SVG/Element/glyph) est déprécié et ne doit plus être utilisé.

Pour un élément [`<glyph>`](/fr/docs/Web/SVG/Element/glyph), `d` est une chaîne de caractères qui contient une série de commandes de tracé qui définissent la forme du contour du glyphe.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <a href="/fr/docs/Web/SVG/Content_type#string"><code>&lt;string&gt;</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Animable</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Le point d'origine (situé aux coordonnées `0, 0`) correspond généralement au _coin en haut à gauche_ du contexte. Néanmoins, pour l'élément [`<glyph>`](/fr/docs/Web/SVG/Element/glyph), l'origine se situe dans le coin en bas à gauche de son enveloppe.

## `<missing-glyph>`

> [!WARNING]
> Depuis SVG2, [`<missing-glyph>`](/fr/docs/Web/SVG/Element/missing-glyph) est déprécié et ne doit plus être utilisé.

Pour un élément [`<missing-glyph>`](/fr/docs/Web/SVG/Element/missing-glyph), `d` est une chaîne de caractères qui contient une série de commandes de tracé qui définissent la forme du contour du glyphe.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <a href="/fr/docs/Web/SVG/Content_type#string"><code>&lt;string&gt;</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Animable</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Utilisation comme propriété CSS

`d` est un attribut de présentation et peut donc être modifié à l'aide de CSS. La propriété peut prendre [`path()`](/fr/docs/Web/CSS/Reference/Values/basic-shape/path) ou `none` comme valeur.

Dans l'exemple qui suit, on illustre comment appliquer un nouveau tracé au survol d'un élément. Le nouveau tracé est le même que le précédent, mais ajoute une ligne sur le cœur.

```css
html,
body,
svg {
  height: 100%;
}

/* Ce tracé est affiché au survol */
#svg_css_ex1:hover path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90"
  );
}
```

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z
       " />
</svg>
```

{{EmbedLiveSample('', '100%', 200)}}

## Commandes de tracé

Les commandes de tracé sont des instructions qui définissent un tracé à dessiner. Chaque commande est composée d'une lettre de commande et de nombres qui représentent les paramètres de la commande.

SVG définit 6 types de commandes, pour un total de 20 commandes&nbsp;:

- `MoveTo` (commande de déplacement)&nbsp;: `M`, `m`
- `LineTo` (commande pour tracer une ligne)&nbsp;: `L`, `l`, `H`, `h`, `V`, `v`
- Courbe de Bézier cubique&nbsp;: `C`, `c`, `S`, `s`
- Courbe de Bézier quadratique&nbsp;: `Q`, `q`, `T`, `t`
- Courbe d'arc elliptique&nbsp;: `A`, `a`
- `ClosePath` (commande pour fermer le tracé): `Z`, `z`

> [!NOTE]
> Les commandes sont sensibles à la casse&nbsp;; une commande en majuscule attend des positions absolues en arguments, alors qu'une commande en minuscule attend des points relatifs à la position actuelle du point.

Il est toujours possible de spécifier une valeur négative en argument d'une commande&nbsp;:

- Des angles négatifs iront dans le sens inverse des aiguilles d'une montre
- Des positions _absolues_ négatives `x` et `y` seront interprétées comme des coordonnées négatives
- Pour les valeurs _relatives_, une valeur de `x` négative ira vers la gauche, et une valeur de `y` négative ira vers le haut.

### `MoveTo` (déplacement)

Cette instruction peut être vue comme un déplacement du pinceau à une position donnée sans rien tracer. Autrement dit, on déplace _le point courant_ (_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}) et on ne trace pas de ligne entre _P<sub>o</sub>_ et le nouveau _point courant_ (_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}).

Une bonne pratique consiste à commencer tous ses chemins par une instruction `MoveTo` car, sans un positionnement initial, les instructions du chemin commenceront à un point quelconque, ce qui peut donner des résultats non désirés.

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Commande</th>
      <th scope="col">Paramètres</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">M</th>
      <td>
        (<code><var>x</var></code>, <code><var>y</var></code>)+
      </td>
      <td>
        <p>
          Déplace <em>le point courant</em> aux coordonnées <code><var>x</var></code>,<code><var>y</var></code>. Les éventuelles paires de coordonnées qui suivent sont interprétées comme des paramètres absolus fournis à une commande <code>LineTo</code> (<code>L</code>) implicite (voir ci-après).
        </p>
        <p>
          <strong>Formule&nbsp;:</strong> <var>P<sub>n</sub></var> = {<code><var>x</var></code>, <code><var>y</var></code>}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">m</th>
      <td>
        (<code><var>dx</var></code>, <code><var>dy</var></code>)+
      </td>
      <td>
        <p>
          Déplace <em>le point courant</em> en décalant la dernière position connue du tracé de <code><var>dx</var></code> sur l'axe horizontal et de <code><var>dy</var></code> sur l'axe vertical. Les éventuelles paires de coordonnées qui suivent sont interprétées comme des paramètres relatifs fournis à une commande <code>LineTo</code> (<code>l</code>) implicite (voir ci-après).
        </p>
        <p>
          <strong>Formule&nbsp;:</strong> <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var>+ <code><var>dx</var></code>, <var>y<sub>o</sub></var> + <code><var>dy</var></code>}
        </p>
      </td>
    </tr>
  </tbody>
</table>

#### Exemples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 40,20 h 10
       m  0,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 50,50 h 10
       m-20,10 h 10
       m-20,10 h 10
       m-20,10 h 10" />
</svg>
```

{{EmbedLiveSample('', '100%', 200)}}

### `LineTo` (tracé d'une ligne)

Les instructions `LineTo` permettent de dessiner une ligne droite à partir du _point courant_ (_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}) et jusqu'au _point final_ (_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}), selon les paramètres indiqués. _Le point final_ (_P<sub>n</sub>_) devient alors _le point courant_ pour la prochaine commande (_P<sub>o</sub>′_).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Commande</th>
      <th scope="col">Paramètres</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">L</th>
      <td>(<code>x</code>, <code>y</code>)+</td>
      <td>
        <p>Dessine une ligne à partir du <em>point courant</em> jusqu'au <em>point final</em> indiqué par <code><var>x</var></code>,<code><var>y</var></code>. Les éventuelles paires de coordonnées qui suivent sont interprétées comme des paramètres pour une commande <code>LineTo</code> absolue (<code>L</code>) implicite.
        </p>
        <p>
          <strong>Formule&nbsp;:</strong> <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code><var>x</var></code>, <code><var>y</var></code>}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">l</th>
      <td>
        (<code><var>dx</var></code>, <code><var>dy</var></code>)+
      </td>
      <td>
        <p>
          Dessine une ligne à partir du <em>point courant</em> jusqu'au <em>point final</em>, déterminé par le décalage horizontal <code><var>dx</var></code> et le décalage vertical <code><var>dy</var></code> du <em>point courant</em>. Les éventuelles paires de coordonnées qui suivent sont interprétées comme des paramètres pour une commande <code>LineTo</code> relative (<code>l</code>) implicite.
        </p>
        <p>
          <strong>Formule&nbsp;:</strong> <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> + <code><var>dx</var></code>, <var>y<sub>o</sub></var> + <code><var>dy</var></code>}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">H</th>
      <td>
        <code><var>x</var></code>+
      </td>
      <td>
        <p>
          Dessine une ligne horizontale à partir du <em>point courant</em> et jusqu'au <em>point final</em>, déterminé par la coordonnée <code><var>x</var></code> fournie en paramètre et l'ordonnée <code>y</code> du <em>point courant</em>. Les éventuelles valeurs suivantes sont interprétées comme des paramètres pour des appels <code>LineTo</code> (<code>H</code>) implicites.
        </p>
        <p>
          <strong>Formule&nbsp;:</strong> <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code><var>x</var></code>, <var>y<sub>o</sub></var>}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">h</th>
      <td>
        <code><var>dx</var></code>+
      </td>
      <td>
        <p>
          Dessine une ligne horizontale à partir du <em>point courant</em>, jusqu'au <em>point final</em> dont l'abscisse est celle du point courant décalée de <code><var>dx</var></code> et dont l'ordonnée est celle du point courant. Les éventuelles valeurs suivantes sont interprétées comme des paramètres pour des appels <code>LineTo</code> (<code>h</code>) implicites.
        </p>
        <p>
          <strong>Formule&nbsp;:</strong> <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> + <code><var>dx</var></code>, <var>y<sub>o</sub></var>}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">V</th>
      <td>
        <code><var>y</var></code>+
      </td>
      <td>
        <p>
          Dessine une ligne verticale à partir du <em>point courant</em>, jusqu'au <em>point final</em>, dont l'ordonnée est indiquée par le paramètre <code><var>y</var></code> et dont l'abscisse est celle du point courant. Les éventuelles valeurs suivantes sont interprétées comme des paramètres pour des appels <code>LineTo</code> (<code>V</code>) implicites.
        </p>
        <p>
          <strong>Formule&nbsp;:</strong> <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var>, <code><var>y</var></code>}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">v</th>
      <td>
        <code><var>dy</var></code>+
      </td>
      <td>
        <p>
          Dessine une ligne verticale à partir du <em>point courant</em>, jusqu'au <em>point final</em> dont l'ordonnée est celle du point courant décalée de <code><var>dy</var></code> et dont l'abscisse est celle du point courant. Les éventuelles valeurs suivantes sont interprétées comme des paramètres pour des appels <code>LineTo</code> (<code>v</code>) implicites.
        </p>
        <p>
          <strong>Formule&nbsp;:</strong> <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var>, <var>y<sub>o</sub></var> + <code><var>dy</var></code>}
        </p>
      </td>
    </tr>
  </tbody>
</table>

#### Exemples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Commandes LineTo avec coordonnées absolues -->
  <path
    fill="none"
    stroke="red"
    d="M 10,10
           L 90,90
           V 10
           H 50" />

  <!-- Commandes LineTo avec coordonnées relatives -->
  <path
    fill="none"
    stroke="red"
    d="M 110,10
           l 80,80
           v -80
           h -40" />
</svg>
```

{{EmbedLiveSample('', '100%', 200)}}

### Courbes de Bézier cubiques

[Les courbes de Bézier](/fr/docs/Glossary/Bezier_curve) définissent des courbes douces à l'aide de quatre points&nbsp;:

- Le point de départ (le point courant)
  - : (_P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_})
- Le point final
  - : (_P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_})
- Le point de contrôle initial
  - : (_P<sub>cs</sub>_ = {_x<sub>cs</sub>_, _y<sub>cs</sub>_})
    (il contrôle la courbure au début de la courbe)
- Le point de contrôle final
  - : (_P<sub>ce</sub>_ = {_x<sub>ce</sub>_, _y<sub>ce</sub>_})
    (il contrôle la courbure vers la fin de la courbe)

Après le tracé, _le point final_ (_P<sub>n</sub>_) devient _le point courant_ pour la prochaine commande (_P<sub>o</sub>′_).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Commande</th>
      <th scope="col">Paramètres</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>
        (<code><var>x1</var></code>,<code><var>y1</var></code>, <code><var>x2</var></code>,<code><var>y2</var></code>, <code><var>x</var></code>,<code><var>y</var></code>)+
      </td>
      <td>
        <p>
          Dessine une courbe de Bézier cubique à partir du <em>point courant</em> jusqu'au <em>point final</em> indiqué par <code><var>x</var></code>,<code><var>y</var></code>. Le <em>point de contrôle initial</em> est indiqué par les paramètres <code><var>x1</var></code>,<code><var>y1</var></code>, et le <em>point de contrôle final</em> est indiqué par <code><var>x2</var></code>,<code><var>y2</var></code>. Les éventuels triplets de paires de coordonnées sont interprétés comme des paramètres pour des appels implicites à une commande de courbe de Bézier cubique (<code>C</code>) absolue.
        </p>
        <dl>
          <dt>Formules&nbsp;:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code><var>x</var></code>, <code><var>y</var></code>} ;<br /><var>P<sub>cs</sub></var> = {<code><var>x1</var></code>, <code><var>y1</var></code>} ;<br /><var>P<sub>ce</sub></var> = {<code><var>x2</var></code>, <code><var>y2</var></code>}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">c</th>
      <td>
        (<code><var>dx1</var></code>,<code><var>dy1</var></code>, <code><var>dx2</var></code>,<code><var>dy2</var></code>, <code><var>dx</var></code>,<code><var>dy</var></code>)+
      </td>
      <td>
        <p>
          Dessine une courbe de Bézier cubique à partir du <em>point courant</em>, jusqu'au <em>point final</em>, déterminé par le décalage horizontal <code><var>dx</var></code> et le décalage vertical <code><var>dy</var></code> du point courant. Le <em>point de contrôle initial</em> correspond au <em>point courant</em> (le point de départ de la courbe) décalé de <code><var>dx1</var></code> sur l'axe horizontal et de <code><var>dy1</var></code> sur l'axe vertical. Le <em>point de contrôle final</em> correspond au <em>point courant</em> (le point de départ de la courbe) décalé de <code><var>dx2</var></code> le long de l'axe horizontal et de <code><var>dy2</var></code> le long de l'axe vertical. Les éventuels triplets de paires de coordonnées sont interprétés comme des paramètres pour des appels implicites à une commande de courbe de Bézier cubique (<code>c</code>) relative.
        </p>
        <dl>
          <dt>Formules&nbsp;:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> + <code><var>dx</var></code>, <var>y<sub>o</sub></var> + <code><var>dy</var></code>} ;<br /><var>P<sub>cs</sub></var> = {<var>x<sub>o</sub></var> + <code><var>dx1</var></code>, <var>y<sub>o</sub></var> + <code><var>dy1</var></code>} ;<br /><var>P<sub>ce</sub></var> = {<var>x<sub>o</sub></var> + <code><var>dx2</var></code>, <var>y<sub>o</sub></var> + <code><var>dy2</var></code>}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">S</th>
      <td>
        (<code><var>x2</var></code>,<code><var>y2</var></code>, <code><var>x</var></code>,<code><var>y</var></code>)+
      </td>
      <td>
        Dessine une courbe de Bézier lisse allant du <em>point courant</em> au <em>point final</em> indiqué par les coordonnées <code><var>x</var></code>,<code><var>y</var></code>. Le <em>point de contrôle final</em> est indiqué par <code><var>x2</var></code>,<code><var>y2</var></code>. Le <em>point de contrôle initial</em> est le symétrique du <em>point de contrôle final</em> de la précédente commande de courbe par rapport au <em>point courant</em>. Si la commande précédente n'était pas une courbe de Bézier cubique, le <em>point de contrôle initial</em> correspondra au point de départ de la courbe (c'est-à-dire le point courant). Les éventuelles paires de coordonnées qui suivent sont interprétées comme des paramètres pour des commandes de courbe de Bézier cubique lisse absolue (<code>S</code>) implicites.
      </td>
    </tr>
    <tr>
      <th scope="row">s</th>
      <td>
        (<code><var>dx2</var></code>,<code><var>dy2</var></code>, <code><var>dx</var></code>,<code><var>dy</var></code>)+
      </td>
      <td>
        Dessine une courbe de Bézier cubique lisse allant du <em>point courant</em> au <em>point final</em>, qui est déterminé par le décalage du <em>point courant</em> de <code><var>dx</var></code> sur l'axe horizontal et de <code><var>dy</var></code> sur l'axe vertical. Le <em>point de contrôle final</em> correspond au <em>point courant</em> (le point de départ de la courbe) décalé de <code><var>dx2</var></code> sur l'axe horizontal et décalé de <code><var>dy2</var></code> le long de l'axe vertical. Le <em>point de contrôle initial</em> est le symétrique du <em>point de contrôle final</em> de la commande de courbe précédente par rapport au <em>point courant</em>. Si la commande précédente n'était pas une courbe de Bézier cubique, le <em>point de contrôle initial</em> correspondra au point de départ de la courbe (<em>point courant</em>). Les éventuelles paires de coordonnées qui suivent sont interprétées comme des paramètres pour des commandes de courbe de Bézier cubique lisse relative (<code>s</code>) implicites.
      </td>
    </tr>
  </tbody>
</table>

#### Exemples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 200 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Courbe de Bézier cubique avec des coordonnées absolues -->
  <path
    fill="none"
    stroke="red"
    d="M 10,90
           C 30,90 25,10 50,10
           S 70,90 90,90" />

  <!-- Courbe de Bézier cubique avec des coordonnées relatives -->
  <path
    fill="none"
    stroke="red"
    d="M 110,90
           c 20,0 15,-80 40,-80
           s 20,80 40,80" />

  <!-- Met en évidence le sommet de la courbe et les points de contrôle -->
  <g id="ControlPoints">
    <!-- Points de contrôles initiaux -->
    <line x1="10" y1="90" x2="30" y2="90" stroke="lightgrey" />
    <circle cx="30" cy="90" r="1.5" />

    <line x1="50" y1="10" x2="25" y2="10" stroke="lightgrey" />
    <circle cx="25" cy="10" r="1.5" />

    <!-- Deuxième ensemble de points de contrôle (où le premier est implicite) -->
    <line
      x1="50"
      y1="10"
      x2="75"
      y2="10"
      stroke="lightgrey"
      stroke-dasharray="2" />
    <circle cx="75" cy="10" r="1.5" fill="lightgrey" />

    <line x1="90" y1="90" x2="70" y2="90" stroke="lightgrey" />
    <circle cx="70" cy="90" r="1.5" />

    <!-- Sommets de la courbe -->
    <circle cx="10" cy="90" r="1.5" />
    <circle cx="50" cy="10" r="1.5" />
    <circle cx="90" cy="90" r="1.5" />
  </g>
  <use href="#ControlPoints" x="100" />
</svg>
```

{{EmbedLiveSample('', '100%', 200)}}

### Courbe de Bézier quadratique

_[Les courbes de Bézier quadratiques](/fr/docs/Glossary/Bezier_curve)_ définissent des courbes douces à l'aide de trois points&nbsp;:

- Le point de départ (point courant)
  - : _P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_}
- Le point final
  - : _P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_}
- Le point de contrôle
  - : _P<sub>c</sub>_ = {_x<sub>c</sub>_, _y<sub>c</sub>_}
    (qui contrôle la courbure)

Après le tracé, _le point final_ (_P<sub>n</sub>_) devient _le point courant_ de la prochaine commande (_P<sub>o</sub>′_).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Commande</th>
      <th scope="col">Paramètres</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">Q</th>
      <td>
        (<code><var>x1</var></code>,<code><var>y1</var></code>, <code><var>x</var></code>,<code><var>y</var></code>)+
      </td>
      <td>
        <p>
          Dessine une courbe de Bézier quadratique à partir du <em>point courant</em> jusqu'au <em>point final</em> situé aux coordonnées <code><var>x</var></code>,<code><var>y</var></code>. Le <em>point de contrôle</em> est aux coordonnées <code><var>x1</var></code>,<code><var>y1</var></code>. Les éventuelles paires de coordonnées qui suivent sont interprétées comme des paramètres pour des commandes de courbe de Bézier quadratique absolue (<code>Q</code>) implicites.
        </p>
        <dl>
          <dt><strong>Formules&nbsp;:</strong></dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code><var>x</var></code>, <code><var>y</var></code>} ;<br /><var>P<sub>c</sub></var> = {<code><var>x1</var></code>, <code><var>y1</var></code>}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">q</th>
      <td>
        (<code><var>dx1</var></code>,<code><var>dy1</var></code>, <code><var>dx</var></code>,<code><var>dy</var></code>)+
      </td>
      <td>
        <p>
          Dessine une courbe de Bézier quadratique à partir du <em>point courant</em> jusqu'au <em>point final</em>, calculé en décalant le <em>point courant</em> de <code><var>dx</var></code> sur l'axe horizontal et de <code><var>dy</var></code> sur l'axe vertical. Le <em>point de contrôle</em> correspond au <em>point courant</em> (le point de départ de la courbe) décalé de <code><var>dx1</var></code> le long de l'axe horizontal et de <code><var>dy1</var></code> le long de l'axe vertical. Les éventuelles paires de coordonnées qui suivent sont interprétées comme des paramètres pour des commandes de courbe de Bézier quadratique relative (<code>q</code>) implicites.
        </p>
        <dl>
          <dt>Formules&nbsp;:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var>+ <code><var>dx</var></code>, <var>y<sub>o</sub></var> + <code><var>dy</var></code>} ;<br /><var>P<sub>c</sub></var> = {<var>x<sub>o</sub></var> + <code><var>dx1</var></code>, <var>y<sub>o</sub></var> + <code><var>dy1</var></code>}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">T</th>
      <td>
        (<code><var>x</var></code>,<code><var>y</var></code>)+
      </td>
      <td>
        <p>
          Dessine une courbe de Bézier quadratique lisse à partir du <em>point courant</em>, jusqu'au <em>point final</em> situé aux coordonnées <code><var>x</var></code>,<code><var>y</var></code>. Le <em>point de contrôle</em> est le symétrique du <em>point de contrôle</em> de la précédente commande de courbe par rapport au <em>point courant</em>. Si la commande précédente n'était pas une courbe de Bézier quadratique, le <em>point de contrôle</em> sera identique au point de départ de la courbe (c'est-à-dire le <em>point courant</em>). Les éventuelles paires de coordonnées qui suivent sont interprétées comme des paramètres pour des commandes de courbe de Bézier quadratique lisse absolue (<code>T</code>) implicites.
        </p>
        <dl>
          <dt>Formula:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code><var>x</var></code>, <code><var>y</var></code>}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">t</th>
      <td>
        (<code><var>dx</var></code>,<code><var>dy</var></code>)+
      </td>
      <td>
        <p>
          Dessine une courbe de Bézier quadratique lisse à partir du <em>point courant</em>, jusqu'au <em>point final</em> qui correspond au décalage du <em>point courant</em> de <code><var>dx</var></code> sur l'axe horizontal et de <code><var>dy</var></code> sur l'axe vertical. Le <em>point de contrôle</em> est le symétrique du <em>point de contrôle</em> de la précédente commande de courbe par rapport au <em>point courant</em>. Si la précédente commande n'était pas une courbe de Bézier quadratique, le <em>point de contrôle</em> correspondra alors au point de départ de la courbe (c'est-à-dire le <em>point courant</em>). Les éventuelles paires de coordonnées qui suivent sont interprétées comme des paramètres pour des commandes de courbe de Bézier quadratique lisse relative (<code>t</code>) implicites.
        </p>
        <dl>
          <dt>Formules&nbsp;:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> + <code><var>dx</var></code>, <var>y<sub>o</sub></var> + <code><var>dy</var></code>}
          </dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

#### Exemples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 200 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Courbe de Bézier quadratique avec répétition implicite -->
  <path
    fill="none"
    stroke="red"
    d="M 10,50
           Q 25,25 40,50
           t 30,0 30,0 30,0 30,0 30,0" />

  <!-- Met en évidence le sommet de la courbe et les points de contrôle -->
  <g>
    <polyline
      points="10,50 25,25 40,50"
      stroke="rgb(0 0 0 / 20%)"
      fill="none" />
    <circle cx="25" cy="25" r="1.5" />

    <!-- Sommets de la courbe -->
    <circle cx="10" cy="50" r="1.5" />
    <circle cx="40" cy="50" r="1.5" />

    <g id="SmoothQuadraticDown">
      <polyline
        points="40,50 55,75 70,50"
        stroke="rgb(0 0 0 / 20%)"
        stroke-dasharray="2"
        fill="none" />
      <circle cx="55" cy="75" r="1.5" fill="lightgrey" />
      <circle cx="70" cy="50" r="1.5" />
    </g>

    <g id="SmoothQuadraticUp">
      <polyline
        points="70,50 85,25 100,50"
        stroke="rgb(0 0 0 / 20%)"
        stroke-dasharray="2"
        fill="none" />
      <circle cx="85" cy="25" r="1.5" fill="lightgrey" />
      <circle cx="100" cy="50" r="1.5" />
    </g>

    <use href="#SmoothQuadraticDown" x="60" />
    <use href="#SmoothQuadraticUp" x="60" />
    <use href="#SmoothQuadraticDown" x="120" />
  </g>
</svg>
```

{{EmbedLiveSample('', '100%', 200)}}

### Courbe d'arc elliptique

_Les courbes d'arc elliptique_ sont des courbes définies comme une portion d'ellipse. Certaines courbes régulières sont parfois plus facilement obtenues avec des portions d'ellipses qu'avec des courbes de Bézier.

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Commande</th>
      <th scope="col">Paramètres</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">A</th>
      <td>
        (<code><var>rx</var></code> <code><var>ry</var></code> <code><var>angle</var></code> <code><var>large-arc-flag</var></code> <code><var>sweep-flag</var></code> <code><var>x</var></code> <code><var>y</var></code>)+
      </td>
      <td>
        <p>
          Dessine un arc à partir du point courant jusqu'aux coordonnées <code><var>x</var></code>,<code><var>y</var></code>. Le centre de l'ellipse utilisé pour dessiner l'arc est déterminé automatiquement en fonction des paramètres de la commande&nbsp;:
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> et <code><var>ry</var></code> sont les deux rayons de l'ellipse&nbsp;;
          </li>
          <li>
            <code><var>angle</var></code> représente une rotation (exprimée en degrés) de l'ellipse par rapport à l'axe horizontal&nbsp;;
          </li>
          <li>
            <code><var>large-arc-flag</var></code> et <code><var>sweep-flag</var></code> permettent de choisir l'arc à dessiner parmi les 4 arcs possibles.
            <ul>
              <li>
                <code><var>large-arc-flag</var></code> permet de choisir entre le grand (<code>1</code>) ou le petit (<code>0</code>) arc,
              </li>
              <li>
                <code><var>sweep-flag</var></code> permet de choisir entre l'arc dans le sens horaire (<code>1</code>) ou celui dans le sens anti-horaire (<code>0</code>)
              </li>
            </ul>
          </li>
        </ul>
        Les coordonnées <code><var>x</var></code>,<code><var>y</var></code> sont celles du nouveau point courant pour la prochaine commande. Les éventuels paramètres suivants sont considérés comme des paramètres à passer à des commandes d'arc absolu (<code>A</code>) implicites.
      </td>
    </tr>
    <tr>
      <th scope="row">a</th>
      <td>
        (<code><var>rx</var></code> <code><var>ry</var></code> <code><var>angle</var></code> <code><var>large-arc-flag</var></code> <code><var>sweep-flag</var></code> <code><var>dx</var></code> <code><var>dy</var></code>)+
      </td>
      <td>
        <p>
          Dessine un arc à partir du point courant jusqu'au point dont les coordonnées sont celles du point courant décalées de <code><var>dx</var></code> horizontalement et de <code><var>dy</var></code> verticalement. Le centre de l'ellipse utilisé pour dessiner l'arc est déterminé automatiquement en fonction des paramètres de la commande&nbsp;:
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> et <code><var>ry</var></code> sont les deux rayons de l'ellipse&nbsp;;
          </li>
          <li>
            <code><var>angle</var></code> exprime la rotation (en degrés) de l'ellipse par rapport à l'axe horizontal&nbsp;;
          </li>
          <li>
            <code><var>large-arc-flag</var></code> et <code><var>sweep-flag</var></code> permettent de choisir l'arc à dessiner parmi les 4 arcs possibles.
            <ul>
              <li>
                <code><var>large-arc-flag</var></code> permet de choisir entre le grand (<code>1</code>) ou le petit (<code>0</code>) arc,
              </li>
              <li>
                <code><var>sweep-flag</var></code> permet de choisir entre l'arc dans le sens horaire (<code>1</code>) ou celui dans le sens anti-horaire (<code>0</code>)
              </li>
            </ul>
          </li>
        </ul>
        En prenant le point courant et en le décalant de <code><var>dx</var></code> et <code><var>dy</var></code> sur les axes respectifs, on obtient le point courant de la prochaine commande. Les éventuels paramètres suivants sont considérés comme des paramètres à passer à des commandes d'arc relatif (<code>a</code>) implicites.
      </td>
    </tr>
  </tbody>
</table>

#### Exemples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <!-- Les paramètres d'arc permettent de choisir celui qui est dessiné -->
  <path
    fill="none"
    stroke="red"
    d="M 6,10
           A 6 4 10 1 0 14,10" />

  <path
    fill="none"
    stroke="lime"
    d="M 6,10
           A 6 4 10 1 1 14,10" />

  <path
    fill="none"
    stroke="purple"
    d="M 6,10
           A 6 4 10 0 1 14,10" />

  <path
    fill="none"
    stroke="pink"
    d="M 6,10
           A 6 4 10 0 0 14,10" />
</svg>
```

{{EmbedLiveSample('', '100%', 200)}}

### `ClosePath` (fermeture du tracé)

Les instructions `ClosePath` permettent de dessiner une ligne droite entre _la position courante_ et le premier point du tracé.

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Commande</th>
      <th scope="col">Paramètres</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">Z, z</th>
      <td></td>
      <td>
        Ferme le chemin courant en connectant le dernier point du chemin au point initial. Si les deux points sont situés à différentes coordonnées, une ligne droite est tracée entre les deux points.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> L'apparence d'une forme fermée à l'aide de `ClosePath` peut être différente de celle d'une forme fermée en traçant une ligne jusqu'à l'origine selon la commande, car les fins de lignes sont jointes (selon l'attribut [`stroke-linejoin`](/fr/docs/Web/SVG/Reference/Attribute/stroke-linejoin)), plutôt que d'être placées aux mêmes coordonnées.

#### Exemples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 30 11" xmlns="http://www.w3.org/2000/svg">
  <!--
  Une forme ouverte où le dernier point
  du tracé est différent du premier
  -->
  <path
    stroke="red"
    d="M 5,1
           l -4,8 8,0" />

  <!--
  Une forme ouverte où le dernier point du
  tracé correspond au premier
  -->
  <path
    stroke="red"
    d="M 15,1
           l -4,8 8,0 -4,-8" />

  <!--
  Une forme fermée où le dernier point du
  tracé est différent du premier
  -->
  <path
    stroke="red"
    d="M 25,1
           l -4,8 8,0
           z" />
</svg>
```

{{EmbedLiveSample('', '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

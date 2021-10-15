---
title: SVGMatrix
slug: Web/API/SVGMatrix
tags:
  - Matrice
  - Reference
translation_of: Web/API/SVGMatrix
---
## Interface SVG matrix

Beaucoup d'opération graphiques de SVG utilisent des matrices 2x3 de la forme :

    [a c e]
    [b d f]

laquelle, quand étendue en une matrice 3x3 à des fins d'arithmétique matricielle, devient :

    [a c e]
    [b d f]
    [0 0 1]

Un objet `SVGMatrix` peut être marqué en lecture-seule, ce qui signifie que les tentatives de modification sur cet objet entraîneront un lancement d'exception.

### Vue d'ensemble de l'interface

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Implémente aussi</th>
      <td><em>Aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Méthodes</th>
      <td>
        <ul>
          <li>
            {{ domxref("SVGMatrix") }}
            <code
              >multiply(in {{ domxref("SVGMatrix") }}
              <em>secondMatrix</em>)</code
            >
          </li>
          <li>{{ domxref("SVGMatrix") }} <code>inverse()</code></li>
          <li>
            {{ domxref("SVGMatrix") }}
            <code>translate(in float <em>x</em>, in float <em>y</em>)</code>
          </li>
          <li>
            {{ domxref("SVGMatrix") }}
            <code>scale(in float <em>scaleFactor</em>)</code>
          </li>
          <li>
            {{ domxref("SVGMatrix") }}
            <code
              >scaleNonUniform(in float scaleFactorX, in float
              <em>scaleFactorY</em>)</code
            >
          </li>
          <li>
            {{ domxref("SVGMatrix") }}
            <code
              >rotate(in float<code> <em>angle</em>)</code></code
            >
          </li>
          <li>
            {{ domxref("SVGMatrix") }}
            <code
              >rotateFromVector(in float <em>x</em>, in float <em>y</em>)</code
            >
          </li>
          <li>{{ domxref("SVGMatrix") }} <code>flipX()</code></li>
          <li>{{ domxref("SVGMatrix") }} <code>flipY()</code></li>
          <li>
            {{ domxref("SVGMatrix") }}
            <code>skewX(in float <em>angle</em>)</code>
          </li>
          <li>
            {{ domxref("SVGMatrix") }}
            <code>skewY(in float <em>angle</em>)</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Propriétés</th>
      <td>
        <ul>
          <li>float <code>a</code></li>
          <li>float <code>b</code></li>
          <li>float <code>c</code></li>
          <li>float <code>d</code></li>
          <li>float <code>e</code></li>
          <li>float <code>f</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Document normatif</th>
      <td>
        <a href="http://www.w3.org/TR/SVG/coords.html#InterfaceSVGMatrix"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Propriétés

| Nom | Type  | Description                     |
| --- | ----- | ------------------------------- |
| `a` | float | Le composant _a_ de la matrice. |
| `b` | float | Le composant _b_ de la matrice. |
| `c` | float | Le composant c de la matrice.   |
| `d` | float | Le composant _d_ de la matrice. |
| `e` | float | Le composant _e_ de la matrice. |
| `f` | float | Le composant _f_ de la matrice. |

Une {{ domxref("DOMException") }} avec le code `NO_MODIFICATION_ALLOWED_ERR` est levée lors d'une tentative de modification d'un attribut en lecture-seule ou quand l'objet lui-même est en lecture-seule.

## Méthodes

<table class="standard-table">
  <thead>
    <tr>
      <th>Nom &#x26; Arguments</th>
      <th>Retourne</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><strong>multiply</strong>(in {{ domxref("SVGMatrix") }}
          <em>secondMatrix</em>)</code
        >
      </td>
      <td>{{ domxref("SVGMatrix") }}</td>
      <td>
        Effectue une multiplication de matrices. Cette matrice est multipliée
        par une autre matrice, retournant la nouvelle matrice résultante.
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>inverse</strong>()</code>
      </td>
      <td>{{ domxref("SVGMatrix") }}</td>
      <td>
        <p>Retourne la matrice inverse.</p>
        <p><strong>Exceptions :</strong></p>
        <ul>
          <li>
            une {{ domxref("DOMException") }} avec le code
            <code>SVG_MATRIX_NOT_INVERTABLE</code> est levée si la matrice n'est
            pas inversible.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>translate</strong>(in float <em>x</em>, in float
          <em>y</em>)</code
        >
      </td>
      <td>{{ domxref("SVGMatrix") }}</td>
      <td>
        <div>
          Effectue une translation sur la matrice courante et retourne la
          matrice résultante.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>scale</strong>(in float <em>scaleFactor</em>)</code>
      </td>
      <td>{{ domxref("SVGMatrix") }}</td>
      <td>
        <div>
          Effectue une mise à l'échelle uniforme sur la matrice courante et
          retourne la matrice résultante.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>scaleNonUniform</strong>(in float <em>scaleFactorX</em>, in
          float <em>scaleFactorY</em>)</code
        >
      </td>
      <td>{{ domxref("SVGMatrix") }}</td>
      <td>
        <div>
          Effectue une mise à l'échelle non-uniforme sur la matrice courante et
          retourne la matrice résultante.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>rotate</strong>(in float <em>angle</em>)</code>
      </td>
      <td>{{ domxref("SVGMatrix") }}</td>
      <td>
        <div>
          Effectue une rotation sur la matrice courante et retourne la matrice
          résultante.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>rotateFromVector</strong>(in float <em>x</em>, in float
          <em>y</em>)</code
        >
      </td>
      <td>{{ domxref("SVGMatrix") }}</td>
      <td>
        <p>
          Effectue une rotation sur la matrice courante et retourne la matrice
          résultante. L'angle de rotation est déterminé en prenant (+/-)
          atan(y/x). La direction du vecteur (x, y) détermine si la valeur
          négative ou positive de l'angle est utilisée.
        </p>
        <p><strong>Exceptions :</strong></p>
        <ul>
          <li>
            une {{ domxref("DOMException") }} avec le code
            <code>SVG_INVALID_VALUE_ERR </code>est levée si un de ces paramètres
            a une valeur invalide.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>flipX</strong>()</code>
      </td>
      <td>{{ domxref("SVGMatrix") }}</td>
      <td>
        <div>
          Effectue une transformation [-1 0 0 1 0 0] et retourne la matrice
          résultante.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>flipY</strong>()</code>
      </td>
      <td>{{ domxref("SVGMatrix") }}</td>
      <td>
        <div>
          Effectue une transformation [1 0 0 -1 0 0] et retourne la matrice
          résultante.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>skewX</strong>(in float <em>angle</em>)</code>
      </td>
      <td>{{ domxref("SVGMatrix") }}</td>
      <td>
        <div>
          Effectue une transformation de skewX sur la matrice courante et
          retourne la matrice résultante.
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>skewY</strong>(in float <em>angle</em>)</code>
      </td>
      <td>{{ domxref("SVGMatrix") }}</td>
      <td>
        <div>
          Effectue une transformation de skewY sur la matrice courante et
          retourne la matrice résultante.
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Exceptions

Une {{domxref("DOMException")}} avec le code `NO_MODIFICATION_ALLOWED_ERR` est levée lors d'une tentative de mise à jour d'un attribut en lecture seule ou lorsque l'objet lui-même est en lecture seule.

## Spécifications

| Spécification                                                                                | Statut                   | Commentaire         |
| -------------------------------------------------------------------------------------------- | ------------------------ | ------------------- |
| {{SpecName("SVG1.1", "coords.html#InterfaceSVGMatrix", "SVGMatrix")}} | {{Spec2("SVG1.1")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.SVGMatrix")}}

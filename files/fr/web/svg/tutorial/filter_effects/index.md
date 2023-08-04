---
title: Filtres
slug: Web/SVG/Tutorial/Filter_effects
---

{{ PreviousNext("Web/SVG/Tutoriel/Contenu_embarque_SVG", "Web/SVG/Tutoriel/polices_SVG") }}

Dans certaines situations, les formes de base n'offrent pas la flexibilité nécessaire pour obtenir un certain effet. Par exemple, les ombres portées ne peuvent raisonnablement pas être crées avec des gradients. Les filtres sont des mécanismes SVG qui permettent de créer effets plus sophistiqués.

Un exemple de base consiste à ajouter un effet de flou au contenu du SVG. Bien que des effets de flou simples peuvent être obtenus avec les gradients, le filtre est nécessaire pour quelque chose de plus complexe.

## Exemple

Les filtres sont définis par l'élément {{SVGElement('filter')}}, qui doit ête placé dans la section `<defs>` de votre fichier SVG. Entre les balises du filtre, se placent une liste de _primitives_, des opérations basiques qui s'ajoutent aux opérations précédentes (tel que du flou, de la lumière, etc). Pour appliquer le filtre créé sur un élément graphique, on définit l'attribut {{SVGAttr('filter')}}.

```html
<svg
  width="250"
  viewBox="0 0 200 85"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <defs>
    <!-- Déclaration du filtre -->
    <filter
      id="MyFilter"
      filterUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="200"
      height="120">
      <!-- offsetBlur -->
      <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
      <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />

      <!-- litPaint -->
      <feSpecularLighting
        in="blur"
        surfaceScale="5"
        specularConstant=".75"
        specularExponent="20"
        lighting-color="#bbbbbb"
        result="specOut">
        <fePointLight x="-5000" y="-10000" z="20000" />
      </feSpecularLighting>
      <feComposite
        in="specOut"
        in2="SourceAlpha"
        operator="in"
        result="specOut" />
      <feComposite
        in="SourceGraphic"
        in2="specOut"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litPaint" />

      <!-- fusionne offsetBlur + litPaint -->
      <feMerge>
        <feMergeNode in="offsetBlur" />
        <feMergeNode in="litPaint" />
      </feMerge>
    </filter>
  </defs>

  <!-- Éléments graphiques -->
  <g filter="url(#MyFilter)">
    <path
      fill="none"
      stroke="#D90000"
      stroke-width="10"
      d="M50,66 c-50,0 -50,-60 0,-60 h100 c50,0 50,60 0,60z" />
    <path
      fill="#D90000"
      d="M60,56 c-30,0 -30,-40 0,-40 h80 c30,0 30,40 0,40z" />
    <g fill="#FFFFFF" stroke="black" font-size="45" font-family="Verdana">
      <text x="52" y="52">SVG</text>
    </g>
  </g>
</svg>
```

{{ EmbedLiveSample('Exemple', '100%', 120) }}

### Étape 1

```html
<feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
```

{{SVGElement('feGaussianBlur')}} prend en entrée (`in`) "SourceAlpha", qui est la couche alpha de l'élément source, applique un flou de 4, et stocke le résultat (`result`) dans un buffer temporaire nommé "blur".

### Étape 2

```html
<feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
```

{{SVGElement('feOffset')}} prend en entrée (`in`) "blur", qu'on a crée précedemment, le décale de 4 vers la droite et 4 vers le bas, et stocke le résultat (`result`) dans le buffer "offsetBlur". Les deux premières primitives viennent de créer une ombre portée.

### Étape 3

```html
<feSpecularLighting
  in="blur"
  surfaceScale="5"
  specularConstant=".75"
  specularExponent="20"
  lighting-color="#bbbbbb"
  result="specOut">
  <fePointLight x="-5000" y="-10000" z="20000" />
</feSpecularLighting>
```

{{SVGelement('feSpecularLighting')}} prend en entrée (`in`) "blur", génère un effet d'éclairage, et stocke le résultat (`result`) dans le buffer "specOut".

### Étape 4

```html
<feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
```

Le premier {{SVGElement('feComposite')}} prend en entrée (`in`, `in2`) "specOut" et "SourceAlpha", masque le résultat de "specOut" de telle sorte qu'il ne soit pas plus grand que "SourceAlpha" (l'élément graphique d'origine), et remplace le résultat (`result`) "specOut".

### Étape 5

```html
<feComposite
  in="SourceGraphic"
  in2="specOut"
  operator="arithmetic"
  k1="0"
  k2="1"
  k3="1"
  k4="0"
  result="litPaint" />
```

Le second {{SVGElement('feComposite')}} prend en entrée (`in`, `in2`) "SourceAlpha" et "specOut", ajoute le résultat "specOut" au-dessus de "SourceAlpha", et stocke le résultat (`result`) dans "litPaint".

### Étape 6

```html
<feMerge>
  <feMergeNode in="offsetBlur" />
  <feMergeNode in="litPaint" />
</feMerge>
```

Finalement, {{SVGElement('feMerge')}} fusionne ensemble "offsetBlur", qui est l'ombre portée, et "litPaint", qui est l'élément d'origine avec l'effet d'éclairage.

![graphique source](filters01-0.png)

Graphique source

![Primitive 1](filters01-1.png)

Primitive 1

![Primitive 2](filters01-2.png)

Primitive 2

![Primitive 3](filters01-3.png)

Primitive 3

![Primitive 4](filters01-4.png)

Primitive 4

![Primitive 5](filters01-5.png)

Primitive 5

![Primitive 6](filters01-6.png)

Primitive 6

{{ PreviousNext("Web/SVG/Tutoriel/Contenu_embarque_SVG", "Web/SVG/Tutoriel/polices_SVG") }}

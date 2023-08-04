---
title: Compartimentation CSS (CSS Containment)
slug: Web/CSS/CSS_containment
---

{{CSSRef}}
L'objectif du module de spécification _CSS Containment_ (pour Compartimentation CSS) consiste à améliorer les performances des pages web en permettant aux développeurs d'isoler un sous-ensemble de la page. Si le navigateur sait que cette partie est indépendante, le rendu peut être optimisé et les performances améliorées. Ce module de spécification définit une seule propriété CSS : {{cssxref("contain")}}. Dans cet article, nous verrons les objectifs principaux de cette spécification.

## Exemple simple

De nombreuses pages web disposent de plusieurs sections qui sont indépendantes les unes des autres. Voici une liste d'articles avec leurs titres et leurs contenus.

```html
<h1>Mon blog</h1>
<article>
  <h2>Titre d'un article sympa</h2>
  <p>Un peu de contenu.</p>
</article>
<article>
  <h2>Un autre titre pour un autre article</h2>
  <p>Un peu plus de contenu ici.</p>
</article>
```

Pour chaque article, on applique la propriété {{cssxref("contain")}} avec la valeur `content`.

```css
article {
  contain: content;
}
```

Chaque article est indépendant des autres articles de la page et on fournit `contain: content` afin d'indiquer cette indépendance au navigateur. Ce dernier peut alors prendre des décisions quant au rendu du contenu (par exemple, ne pas travailler sur le rendu d'articles qui ne sont pas sur la zone visible).

Si on fournit `contain: content` pour chaque `<article>`, lorsque de nouveaux éléments sont insérés, le navigateur comprendra qu'il n'est pas nécessaire de tout repeindre/redisposer à l'intérieur de l'arbre de l'élément. Toutefois, si `<article>` est mis en forme de telle façon que sa forme dépend de son contenu (ex. `height: auto`), le navigateur devra prendre en compte le redimensionnement.

La valeur `content` est une valeur synthétique pour `contain: layout paint`. Elle indique au navigateur que la disposition de l'élément est complètement séparée de celle du reste de la page et que tout ce qui concerne l'élément est peint à l'intérieur de son cadre et que rien ne peut dépasser.

Cette information est parfois connue voire évidente pour la ou les personnes qui construisent la page. Toutefois, les navigateurs ne peuvent pas simplement deviner cette intention et partir du principe que chaque article ne débordera pas. Cette propriété permet ainsi d'expliquer la situation au navigateur afin que celui-ci puisse en tirer parti et optimiser ce qu'il peut grâce à cette hypothèse.

## Concepts et terminologie

Cette spécification ne définit qu'une seule propriété : {{cssxref("contain")}}. Les valeurs fournies à cette propriété indiquent le type de compartimentation qu'on souhaite appliquer à l'élément.

### Compartimentation de la disposition

```css
article {
  contain: layout;
}
```

La disposition porte normalement sur l'intégralité d'un document et si on déplace un élément, c'est tout le document qui doit être reconsidéré car tout peut avoir bougé. Avec `contain: layout`, on indique au navigateur qu'il est uniquement nécessaire de vérifier cet élément et son contenu : tout ce qu'il contient n'affecte pas le reste de la page et la boîte englobante crée un contexte de formatage indépendant.

De plus :

- Les dispositions flottantes (avec `display: float`) seront traitées indépendamment.
- Les marges ne fusionneront pas en dehors des limites du bloc englobant ainsi compartimenté
- Le conteneur de la disposition sera un bloc englobant pour les éléments descendants avec des positions `absolute`/`fixed`.
- La boîte englobante crée un contexte d'empilement et on peut donc utiliser {{cssxref("z-index")}}.

### Compartimentation pour la peinture

```css
article {
  contain: paint;
}
```

La compartimentation avec `paint` limite/rogne la boîte jusqu'à la limite de la zone de remplissage (_padding_) de la boîte principale. Autrement dit, il ne peut pas y avoir de chevauchement visible. On a également les mêmes règles qu'avec `layout` (voir ci-avant).

De plus, lorsque la boîte englobante est hors de l'écran, le navigateur n'a pas besoin de peindre ses éléments (car ceux-ci sont contenus dans cette boîte au sens géométrique).

### Compartimentation pour le dimensionnement

```css
article {
  contain: size;
}
```

La compartimentation du dimensionnement, utilisée seule, n'offre pas un grand intérêt quant aux performances. Cette valeur signifie que la taille des éléments fils ne doit pas affecter la taille de l'élément ciblé — sa taille est calculée comme si l'élément n'avait pas de fils.

Si on active `contain: size`, il faut alors définir la taille de l'élément sur lequel on l'applique. Sinon, dans la plupart des cas, l'élément aura des dimensions nulles.

### Compartimentation pour le style

```css
article {
  contain: style;
}
```

Malgré son nom, cette valeur ne fournit pas un style compartimenté comme on pourrait l'avoir avec un [_Shadow_ DOM](/fr/docs/Web/Web_Components/Using_shadow_DOM). Cette valeur sert principlament pour les [compteurs CSS](/fr/docs/Web/CSS/CSS_Lists/Compteurs_CSS) qui pourraient changer sur un élément et affecter le reste de l'arborescence.

En utilisant `contain: style`, on s'assure que les propriétés {{cssxref("counter-increment")}} et {{cssxref("counter-set")}} créent de nouveaux compteurs limités à ce sous-arbre.

> **Note :** La valeur `style` est considérée comme « à risque » dans la spécification actuelle et pourrait ne pas être prise en charge partout (elle n'est actuellement pas prise en charge dans Firefox - novembre 2019).

### Valeurs spéciales

La propriété `contain` possède deux valeurs spéciales :

- `content`
- `strict`

La première (vue dans le premier exemple) est un synonyme pour la conjonction de `layout` et `paint`. La spécification décrit cette valeur comme pouvant « raisonnablement être appliquée largement de façon saine ». Elle n'applique pas la compartimentation pour le dimensionnement (`size`) donc on ne risque pas d'avoir une boîte avec une taille nulle en raison de la taille de ses enfants.

Pour obtenir la compartimentation la plus forte, on utilisera `contain: strict` qui est synonyme de `contain: size layout paint` voire on ajoutera ensuite la compartimentation du style pour les navigateurs qui la prennent en charge :

```css
contain: strict;
contain: strict style;
```

## Référence

### Propriétés CSS

- {{cssxref("contain")}}

## Ressources externes

- [Une introduction à la compartimentation CSS](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/)

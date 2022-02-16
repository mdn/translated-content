---
title: Pseudo-classes
slug: Web/CSS/Pseudo-classes
tags:
  - CSS
  - Intermédiaire
  - Pseudo-classe
  - Reference
  - Sélecteur
translation_of: Web/CSS/Pseudo-classes
---
{{CSSRef}}

Une **pseudo-classe** est un mot-clé qui peut être ajouté à un sélecteur afin d'indiquer l'état spécifique dans lequel l'élément doit être pour être ciblé par la déclaration. La pseudo-classe {{cssxref(":hover")}}, par exemple, permettra d'appliquer une mise en forme spécifique lorsque l'utilisateur survole l'élément ciblé par le sélecteur (changer la couleur d'un bouton par exemple).

```css
div:hover {
  background-color: #F89B4D;
}
```

Les pseudo-classes permettent d'appliquer un style à un élément non seulement en fonction de son contenu dans l'arbre du document mais aussi en fonction de facteurs externes (l'historique de navigation par exemple avec {{cssxref(":visited")}} ; le statut du contenu avec {{cssxref(":checked")}} ; la position de la souris {{cssxref(":hover")}}).

> **Note :** À la différence des pseudo-classes, [les pseudo-éléments](/fr/docs/Web/CSS/Pseudo-%C3%A9l%C3%A9ments) peuvent être utilisés afin d'appliquer un style sur une certaine partie d'un élément.

## Syntaxe

    sélecteur:pseudo-classe {
      propriété: valeur;
    }

À l'instar des classes, on peut chaîner plusieurs pseudo-classes au sein d'un sélecteur.

## Liste des pseudo-classes standards

- {{CSSxRef(":active")}}
- {{CSSxRef(":any-link")}} {{Experimental_Inline}}
- {{CSSxRef(":blank")}} {{Experimental_Inline}}
- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}
- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}} {{Experimental_Inline}}
- {{CSSxRef(":disabled")}}
- {{CSSxRef(":drop")}} {{Experimental_Inline}}
- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}
- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":fullscreen")}} {{Experimental_Inline}}
- {{CSSxRef(":future")}} {{Experimental_Inline}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
- {{CSSxRef(":focus-within")}}
- {{CSSxRef(":has", ":has()")}} {{Experimental_Inline}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host()")}}
- {{CSSxRef(":host-context()")}} {{Experimental_Inline}}
- {{CSSxRef(":hover")}}
- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":in-range")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is")}} {{Experimental_inline}}
- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}
- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-col", ":nth-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-col", ":nth-last-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}
- {{CSSxRef(":past")}} {{Experimental_Inline}}
- {{CSSxRef(":placeholder-shown")}} {{Experimental_Inline}}
- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}
- {{CSSxRef(":scope")}}
- {{CSSxRef(":target")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}
- {{CSSxRef(":user-invalid")}} {{Experimental_Inline}}
- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}}

## Exemples

### CSS

```css
.survol:hover {
  background-color: palegreen;
}

p:nth-child(2n+1) {
  background-color: lime;
}
```

### HTML

```html
<div>
  <p class="survol">
    La Reine devint pourpre de colère ; et après
    l’avoir considérée un moment avec des yeux
    flamboyants comme ceux d’une bête fauve, elle
    se mit à crier : « Qu’on lui coupe la tête ! »
  </p>
  <p>
    « Quelle idée ! » dit Alice très-haut et d’un
    ton décidé. La Reine se tut.
  </p>
  <p>
    Le Roi lui posa la main sur le bras, et lui
    dit timidement : « Considérez donc, ma chère
    amie, que ce n’est qu’une enfant. »
  </p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples","250","350")}}

## Spécifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">État</th>
      <th scope="col">Commentaires</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('Fullscreen')}}</td>
      <td>{{Spec2('Fullscreen')}}</td>
      <td>Définition de <code>:fullscreen</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML WHATWG', '#pseudo-classes')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td>
        Définit lorsque des sélecteurs particuliers correspondent à des éléments
        HTML.
      </td>
    </tr>
    <tr>
      <td>{{SpecName('CSS4 Selectors')}}</td>
      <td>{{Spec2('CSS4 Selectors')}}</td>
      <td>
        <p>
          Définition de <code>:any-link</code>, <code>:local-link</code>,
          <code>:scope</code>, <code>:active-drop-target</code>,
          <code>:valid-drop-target</code>, <code>:invalid-drop-target</code>,
          <code>:current</code>, <code>:past</code>, <code>:future</code>,
          <code>:placeholder-shown</code>, <code>:user-error</code>,
          <code>:blank</code>, <code>:nth-match()</code>,
          <code>:nth-last-match()</code>, <code>:nth-column()</code>,
          <code>:nth-last-column()</code> et <code>:matches()</code>.
        </p>
        <p>
          Changement afin que <code>:empty</code> se comporte comme
          {{CSSxRef(":-moz-only-whitespace")}} {{Non-standard_Inline}}.
        </p>
        <p>
          Aucune modification significative pour les pseudo-classes définies
          avec {{SpecName('CSS3 Selectors')}} et
          {{SpecName('HTML5 W3C')}}.
        </p>
      </td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5 W3C')}}</td>
      <td>{{Spec2('HTML5 W3C')}}</td>
      <td>Copie les éléments pertinents de la spécification HTML WHATWG</td>
    </tr>
    <tr>
      <td>{{SpecName('CSS3 Basic UI')}}</td>
      <td>{{Spec2('CSS3 Basic UI')}}</td>
      <td>
        Définition de <code>:default</code>, <code>:valid</code>,
        <code>:invalid</code>, <code>:in-range</code>,
        <code>:out-of-range</code>, <code>:required</code>,
        <code>:optional</code>, <code>:read-only</code> et
        <code>:read-write</code>, mais sans la sémantique associée.
      </td>
    </tr>
    <tr>
      <td>{{SpecName('CSS3 Selectors')}}</td>
      <td>{{Spec2('CSS3 Selectors')}}</td>
      <td>
        Définition de <code>:target</code>, <code>:root</code>,
        <code>:nth-child()</code>, <code>:nth-last-of-child()</code>,
        <code>:nth-of-type()</code>, <code>:nth-last-of-type()</code>,
        <code>:last-child</code>, <code>:first-of-type</code>,
        <code>:last-of-type</code>, <code>:only-child</code>,
        <code>:only-of-type</code>, <code>:empty</code> et
        <code>:not()</code>.<br />Définition de la syntaxe pour
        <code>:enabled</code>, <code>:disabled</code>, <code>:checked</code> et
        <code>:indeterminate</code>, mais sans la sémantique associée.<br />Pas
        de modification significative pour les pseudo-classes définies avec
        {{SpecName('CSS2.1')}}.
      </td>
    </tr>
    <tr>
      <td>{{SpecName('CSS2.1')}}</td>
      <td>{{Spec2('CSS2.1')}}</td>
      <td>
        Définition de <code>:lang()</code>, <code>:first-child</code>,
        <code>:hover</code> et <code>:focus</code>.<br />Aucune modification
        significative pour les pseudo-classes définies avec 
        {{SpecName('CSS1')}}.
      </td>
    </tr>
    <tr>
      <td>{{SpecName('CSS1')}}</td>
      <td>{{Spec2('CSS1')}}</td>
      <td>
        Définition de <code>:link</code>, <code>:visited</code> et
        <code>:active</code>, mais sans la sémantique associée.
      </td>
    </tr>
  </tbody>
</table>

## Voir aussi

- [Les pseudo-éléments](/fr/docs/Web/CSS/Pseudo-%C3%A9l%C3%A9ments)

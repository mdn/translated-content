---
title: :target
slug: Web/CSS/Reference/Selectors/:target
original_slug: Web/CSS/:target
l10n:
  sourceCommit: b460458fa125f4ee252d01466c1390d16ba19215
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:target`** permet de cibler l'unique élément (s'il existe) dont l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes#id) correspond au fragment d'identifiant de l'URI du document.

```css
/* Cible un élément dont l'identifiant      */
/* correspond au fragment de l'URL courante */
:target {
  border: 2px solid black;
}
```

Par exemple, l'URL suivante comporte un identifiant de fragment (indiqué par le signe _#_) qui marque l'élément avec l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) de `section2` comme élément cible du document&nbsp;:

```
https://exemple.fr/chemin/document.html#section2
```

L'élément suivant sera donc ciblé par le sélecteur `:target` avec l'URL précédente&nbsp;:

```html
<section id="section2">Exemple</section>
```

## Syntaxe

```css
:target {
  /* ... */
}
```

## Description

Quand un document HTML est chargé, le navigateur définit son élément cible. L'élément est identifié à l'aide de l'identifiant de fragment d'URL. Sans l'identifiant de fragment d'URL, le document n'a pas d'élément cible. La pseudo-classe `:target` permet de mettre en forme l'élément cible du document. L'élément peut être mis au point, mis en évidence, animé, etc.

L'élément cible est défini au chargement du document et lors des appels de méthodes [`history.back()`](/fr/docs/Web/API/History/back), [`history.forward()`](/fr/docs/Web/API/History/forward) et [`history.go()`](/fr/docs/Web/API/History/forward). Mais il n'est _pas_ modifié lorsque les méthodes [`history.pushState()`](/fr/docs/Web/API/History/pushState) et [`history.replaceState()`](/fr/docs/Web/API/History/replaceState) sont appelées.

> [!NOTE]
> En raison d'un [bug possible dans la spécification CSS <sup>(angl.)</sup>](https://discourse.wicg.io/t/target-css-does-not-work-because-shadowroot-does-not-set-a-target-element/2070/), `:target` ne fonctionne pas dans un [composant web](/fr/docs/Web/API/Web_components) car [la racine fantôme](/fr/docs/Web/API/ShadowRoot) ne transmet pas l'élément cible à l'arbre fantôme.

## Exemples

### Une table des matières

La pseudo-classe `:target` peut être utilisée pour mettre en évidence la partie d'une page qui a été liée à partir d'une table des matières.

#### HTML

```html
<h3>Table des matières</h3>
<ol>
  <li><a href="#p1">Aller au premier paragraphe&nbsp;!</a></li>
  <li><a href="#p2">Aller au deuxième paragraphe&nbsp;!</a></li>
  <li>
    <a href="#nowhere">
      Ce lien ne mène nulle part, car la cible n'existe pas.
    </a>
  </li>
</ol>

<h3>Mon article amusant</h3>
<p id="p1">
  Vous pouvez cibler <i>ce paragraphe</i> en utilisant un fragment d'URL.
  Cliquez sur le premier lien ci-dessus pour essayer&nbsp;!
</p>
<p id="p2">
  Ceci est <i>un autre paragraphe</i>, également accessible depuis le deuxième
  lien ci-dessus. N'est-ce pas génial&nbsp;?
</p>
```

#### CSS

```css
p:target {
  background-color: gold;
}

/* Ajoute un pseudo-élément à l'intérieur de l'élément cible */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* Met en évidence les éléments en italique dans l'élément cible */
p:target i {
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('une_table_des_matières', 500, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la pseudo-classe `:target` dans les sélecteurs](/fr/docs/Web/CSS/Guides/Selectors/Using_:target)
- {{cssxref("::target-text")}} (pour mettre en évidence les fragments de texte)

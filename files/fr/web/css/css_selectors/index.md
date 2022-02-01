---
title: Sélecteurs CSS
slug: Web/CSS/CSS_Selectors
tags:
  - Aperçu
  - CSS
  - CSS Selectors
  - Reference
  - Sélecteur
translation_of: Web/CSS/CSS_Selectors
original_slug: Web/CSS/Sélecteurs_CSS
---
{{CSSRef}}

**Les sélecteurs** définissent les éléments sur lesquelles s'applique un ensemble de règles CSS.

## Les sélecteurs simples

- [Les sélecteurs de type](/fr/docs/Web/CSS/Type_selectors)
  - : Ce sélecteur simple permet de cibler les éléments qui correspondent au nom indiqué.
    **Syntaxe :** `nomelement`
    **Exemple :** `input` permettra de cibler n'importe quel élément {{HTMLElement('input')}}.
- [Les sélecteurs de classe](/fr/docs/Web/CSS/Class_selectors)
  - : Ce sélecteur simple permet de cibler les éléments en fonction de la valeur de leur attribut `class`.
    **Syntaxe :** `.nomclasse`
    **Exemple :** `.index` permettra de cibler n'importe quel élément qui possède la classe `index` (vraisemblablement définie avec un attribut `class="index"`).
- [Les sélecteurs d'identifiant](/fr/docs/Web/CSS/ID_selectors)
  - : Ce sélecteur simple permet de cibler un élément d'un document en fonction de la valeur de son attribut `id`. Dans un document, il ne doit y avoir qu'un seul élément pour un identifiant donné.
    **Syntaxe :** `#valeurid`
    **Exemple :** `#toc` permettra de cibler l'élément qui possède l'identifiant `toc` (vraisemblablement défini avec un attribut `id="toc"`).
- [Le sélecteur universel](/fr/docs/Web/CSS/Universal_selectors)
  - : Ce sélecteur permet de cibler tous les nœuds d'un document. Il existe également une variante pour ne cibler qu'un seul espace de noms et une variante pour cibler tous les espaces de noms.
    **Syntaxe :** `*` `ns|*` `*|*`
    **Exemple :** `*` permettra de cibler tous les éléments du document.
- [Les sélecteurs d'attribut](/fr/docs/Web/CSS/Attribute_selectors)
  - : Ce sélecteur simple permet de cibler des éléments d'un document en fonction de la valeur d'un de leurs attributs.
    **Syntaxe :** `[attr]` `[attr=valeur]` `[attr~=valeur]` `[attr|=valeur] [attr^=valeur]` `[attr$=valeur]` `[attr*=valeur]`
    **Exemple :** `[autoplay]` permettra de cibler tous les éléments qui possède l'attribut `autoplay` défini (quelle que soit sa valeur).

## Les combinateurs

- [Les sélecteurs de voisin direct](/fr/docs/Web/CSS/Adjacent_sibling_combinator)
  - : Le combinateur `'+'` permet de sélectionner les nœuds qui suivent immédiatement un élément donné.
    **Syntaxe :** `A + B`
    **Exemple :** `div + p` permettra de cibler n'importe quel élément {{HTMLElement('p')}} qui suit immédiatement un élément {{HTMLElement('div')}}.
- [Les sélecteurs de voisins](/fr/docs/Web/CSS/General_sibling_combinator)
  - : Le combinateur `'~'` permet de sélectionner les nœuds qui suivent un élément et qui ont le même parent.
    **Syntaxe :** `A ~ B`
    **Exemple :** `p ~ span` permettra de cibler les éléments {{HTMLElement('span')}} qui suivent (immédiatement ou non) un élément {{HTMLElement('p')}} et qui ont le même élément parent.
- [Les sélecteurs d'éléments enfants](/fr/docs/Web/CSS/Child_combinator)
  - : Le combinateur `'>'` permet de sélectionner les nœuds qui sont des enfants directs d'un élément donné.
    **Syntaxe :** `A > B`
    **Exemple :** `ul > li` permettra de cibler tous les éléments {{HTMLElement('li')}} qui sont directement situés sous un élément {{HTMLElement('ul')}}.
- [Les sélecteurs d'éléments descendants](/fr/docs/Web/CSS/Descendant_combinator)
  - : Le combinateur ` ` (espace) permet de sélectionner les nœuds qui sont des descendants (pas nécessairement des enfants directs) d'un élément donné.
    **Syntaxe :** `A B`
    **Exemple :** `div span` permettra de cibler n'importe quel élément {{HTMLElement('span')}} situé à l'intérieur d'un élément {{HTMLElement('div')}}.
- [Le combinateur de colonne](/fr/docs/Web/CSS/Column_combinator){{experimental_inline}}
  - : Le combinateur `||` sélectionne les nœuds qui appartiennent à une colonne. **Syntaxe :** `A || B`
    **Exemple :** `col || td` permettra de cibler n'importe quel élément {{HTMLElement('td')}} sous la portée d'une colonne {{HTMLElement('col')}}.

## Les pseudo-classes

- [Les pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes) permettent de cibler des éléments selon une information d'état qui n'est pas stockée dans l'arbre du document.
  - : **Exemple:** `a:visited` permettra de cibler l'ensemble des éléments {{HTMLElement('a')}} (des liens) ayant déjà été visités par l'utilisateur.

## Les pseudo-éléments

- [Les pseudo-éléments](/fr/docs/Web/CSS/Pseudo-elements) représentent des entités du document qui ne sont pas décrites en HTML.
  - : **Exemple :** `p::first-line` permettra de cibler la première ligne de chacun des éléments {{HTMLElement('p')}} (les paragraphes) du document.

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
      <td>{{SpecName('CSS4 Selectors')}}</td>
      <td>{{Spec2('CSS4 Selectors')}}</td>
      <td>
        Ajout du combinateur de colonne (<code>||</code>), des sélecteurs
        structurels pour la  grille, des combinateurs logiques, des
        pseudo-classes pour la localisation, la temporisation, les états de
        ressources, les éléments linguistiques et les éléments relatifs à
        l'interface utilisateur. Ajout du modificateur de sensibilité à la casse
        pour les caractèes ASCII et du ciblage des attributs insensible à la
        casse.
      </td>
    </tr>
    <tr>
      <td>{{SpecName('CSS3 Selectors')}}</td>
      <td>{{Spec2('CSS3 Selectors')}}</td>
      <td>
        Ajout du combinateur de voisin <code>~</code>. Les pseudo-éléments
        utilisent désormais un préfixe avec deux fois deux-points
        (<code>::</code>)
      </td>
    </tr>
    <tr>
      <td>{{SpecName('CSS2.1', 'selector.html')}}</td>
      <td>{{Spec2('CSS2.1')}}</td>
      <td>
        <p>
          Ajout des combinateurs pour les enfants (<code>></code>) et voisins
          adjacents (<code>+</code>).<br />Ajout du sélecteur universel et du
          sélecteur d'attribut.
        </p>
      </td>
    </tr>
    <tr>
      <td>{{SpecName('CSS1')}}</td>
      <td>{{Spec2('CSS1')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

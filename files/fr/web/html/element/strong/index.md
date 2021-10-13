---
title: '<strong> : l''élément de haute importance'
slug: Web/HTML/Element/strong
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/strong
---
{{HTMLRef}}

L'élément HTML **`<strong>`** indique que le texte a une importance particulière ou un certain sérieux voire un caractère urgent. Cela se traduit généralement par un affichage en gras.

{{EmbedInteractiveExample("pages/tabbed/strong.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes d'utilisation

L'élément `<strong>` indique un contenu de haute importance, y compris lorsqu'il s'agit de choses graves ou urgentes (telles que des messages d'avertissement par exemple). Il peut s'agir d'une certaine phrase au sein d'une page ou bien de quelques mots d'une importance particulière par rapport au contenu environnant.

Cet élément se traduit généralement par l'affichage du texte en gras. Toutefois, il ne doit pas être utilisé à des fins stylistiques. Pour cela, on pourra utiliser la propriété CSS {{cssxref("font-weight")}}. De plus, on pourra utiliser l'élément {{HTMLElement("b")}} afin d'attirer l'attention sur une portion de texte qui ne possède pas un niveau d'importance particulier ou l'élément {{HTMLElement("em")}} si on souhaite marquer un texte avec de l'emphase.

Il est également possible d'utiliser `<strong>` pour les en-têtes de paragraphes qui représentent des notes ou des avertissements au sein d'une page.

### `<b>` ou `<strong>` ?

Les développeurs qui débutent se demandent souvent pourquoi il y a autant de manières pour s'exprimer alors que cela aura le même rendu final. Les éléments bold (`<b>`) et `<strong>` sont peut-être les plus difficiles à distinguer. Il est vrai que taper `<b> </b>` est beaucoup plus rapide et permet d'arriver exactement au même résultat…

Sauf que ce n'est pas le même résultat ! `<strong>` représente une logique (apporte une différence sémantique), alors que `<bold>` ne représente qu'une mise en forme (l'apparence). Séparer la forme de la sémantique est important et permet éventuellement de représenter cette même sémantique d'une certaine manière, que ce soit en gras, en rouge, souligné ou encore avec une autre taille de police. Changer le style (la présentation) de `<strong>` est pertinent, contrairement à `<b>`. `<b>` représente un élément de présentation et représente du texte en gras, changer son style pour que le texte apparaisse en autre chose qu'en gras serait illogique et source de confusions.

Il est important de savoir que `<b></b>` ne doit pas être utilisé, à part dans le cas où l'on souhaite attirer l'attention du lecteur sans pour autant augmenter l'importance du texte.

### `<em>` ou `<strong>` ?

En HTML 4, `<strong>` indiquait simplement une emphase plus forte. En HTML5, l'élément représente une « importance forte » de son contenu. Il est important de faire la différence. L'emphase (`<em>` étant l'élément HTML équivalent) permet de changer le sens d'une phrase : par exemple :  « J'_adore_ les licornes » et « J'adore les _licornes_ ». `<strong>` est utilisé pour augmenter l'importance de certaines portions de phrases : « **Attention !** C'est **très dangereux** ».  `<strong>` et `<em>` peuvent être imbriqués pour augmenter relativement l'importance ou l'emphase d'un texte.

## Exemples

### HTML

```html
<p>
  Avant de faire le truc X il est
  <strong>nécessaire</strong> de
  faire le truc Y avant.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","150")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, cet élément doit avoir une balise ouvrante et une balise
        fermante.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >
        ou tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        {{domxref("HTMLElement")}}. Auparavant et jusqu'à Gecko 1.9.2
        (Firefox 4) inclus, Firefox implémente l'interface
        {{domxref("HTMLSpanElement")}} pour cet élément
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                            | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'semantics.html#the-strong-element', '&lt;strong&gt;')}}             | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-strong-element', '&lt;strong&gt;')}} | {{Spec2('HTML5 W3C')}}     |              |
| {{SpecName('HTML4.01', 'struct/text.html#edef-STRONG', '&lt;strong&gt;')}}                     | {{Spec2('HTML4.01')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.strong")}}

## Voir aussi

- {{HTMLElement("b")}}
- {{HTMLElement("em")}}
- La propriété {{cssxref("font-weight")}}

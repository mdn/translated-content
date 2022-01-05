---
title: Composition avancée des formulaires HTML
slug: Learn/Forms/Advanced_form_styling
translation_of: Learn/Forms/Advanced_form_styling
original_slug: Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms
---
{{LearnSidebar}}{{PreviousMenuNext("Web/Guide/HTML/Formulaires/Apparence_des_formulaires_HTML", "Web/Guide/HTML/Formulaires/Property_compatibility_table_for_form_widgets", "Web/Guide/HTML/Formulaires")}}

Dans cet article, nous verrons comment utiliser les [CSS](/fr/docs/Learn/CSS) avec les formulaires [HTML](/fr/docs/Glossary/HTML) pour modifier le style de certains widgets difficiles à personnaliser. Comme nous l'avons vu dans l'[article précédent](/fr/docs/Learn/Forms/Styling_web_forms), les champs texte et les boutons sont parfaitement compatibles avec les CSS. Maintenant, nous allons approfondir la part sombre de la composition stylistique des formulaires HTML.

Avant d'aller plus loin, faisons un rappel pour deux types de widgets de formulaires :

- la brute
  - : Éléments, dont le style n'est que difficilement modifiable, demandant des astuces complexes, nécessitant parfois de faire appel à une connaissance avancée des CSS3.
- le truand
  - : Oubliez l'emploi des CSS pour modifier le style de ces éléments. Au mieux, vous pourrez faire des petites choses, mais elle ne seront pas reproductibles sur d'autres navigateurs ; il ne sera jamais possible de prendre un contrôle total de leur apparence.

## Possibilités d'expression avec les CSS

Le problème fondamental avec les widgets de formulaire, autres que champs de texte et boutons, est que dans de nombreux cas, le CSS ne possède pas assez d'expressions pour styliser correctement les widgets complexes.

L'évolution récente du HTML et des CSS a étendu l'expressivité des CSS :

- [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes) était très limité et n'offrait que trois pseudo-classes :

  - {{cssxref(":active")}}
  - {{cssxref(":focus")}}
  - {{cssxref(":hover")}}

- [CSS Selector Level 3](https://www.w3.org/TR/css3-selectors/) a ajouté quelques nouvelles pseudo-classes relatives aux formulaires HTML :

  - {{cssxref(":enabled")}}
  - {{cssxref(":disabled")}}
  - {{cssxref(":checked")}}
  - {{cssxref(":indeterminate")}}

- [CSS Basic UI Level 3](https://dev.w3.org/csswg/css3-ui/#pseudo-classes) a ajouté quelques autres pseudo-classes pour décrire l'état du widget :

  - {{cssxref(":default")}}
  - {{cssxref(":valid")}}
  - {{cssxref(":invalid")}}
  - {{cssxref(":in-range")}}
  - {{cssxref(":out-of-range")}}
  - {{cssxref(":required")}}
  - {{cssxref(":optional")}}
  - {{cssxref(":read-only")}}
  - {{cssxref(":read-write")}}

- [CSS Selector Level 4](https://dev.w3.org/csswg/selectors4/) actuellement en développement actif et objet de grandes discussions ne prévoit pas d'ajouter grand‑chose pour améliorer les formulaires :

  - {{cssxref(":user-error")}} qui est juste une amélioration de la pseudo‑classe {{cssxref(":invalid")}}.

Voilà un bon début, mais il y a deux problèmes. Primo, certains navigateurs ne mettent pas en œuvre des fonctionnalités au-delà de CSS 2.1. Secundo, ils ne sont tout simplement pas assez perfectionnés pour styliser des widgets complexes, comme les sélecteurs de date.

Il y a quelques expérimentations par les fournisseurs de navigateurs pour étendre l'expressivité des CSS sur les formulaires ; dans certains cas, il est bon de savoir ce qui est disponible..

> **Attention :** Même si ces expérimentations sont intéressantes, **elles ne sont pas normées, ce qui signifie qu'elles ne sont pas fiables**. Si vous les utilisez (et vous ne devriez probablement pas le faire souvent), vous le faites à vos propres risques et périls ; [vous faites quelque chose qui peut être mauvais pour le Web](https://www.alistapart.com/articles/every-time-you-call-a-proprietary-feature-css3-a-kitten-dies/) en utilisant des propriétés non standard.

- [Extensions des CSS Mozilla](/fr/docs/CSS/CSS_Reference/Mozilla_Extensions "/en-US/docs/CSS/CSS_Reference/Mozilla_Extensions")

  - {{cssxref(":placeholder-shown")}}
  - {{cssxref(":-moz-submit-invalid")}}
  - {{cssxref(":user-invalid")}}
  - {{cssxref(":-moz-ui-valid")}}

- [Extensions des CSS WebKit](/fr/docs/CSS/CSS_Reference/Webkit_Extensions "/en-US/docs/CSS/CSS_Reference/Webkit_Extensions")

  - {{cssxref("::-webkit-input-placeholder")}}
  - [et beaucoup d'autres](http://trac.webkit.org/wiki/Styling%20Form%20Controls)

- [Extensions des CSS Microsoft](http://msdn.microsoft.com/en-us/library/ie/hh869403%28v=vs.85%29.aspx)

  - [`:-ms-input-placeholder`](http://msdn.microsoft.com/en-us/library/ie/hh772745%28v=vs.85%29.aspx)

### Contrôle du style des éléments de formulaire

Les navigateurs fondés sur WebKit- (Chrome, Safari) et Gecko- (Firefox) offrent les meilleures possibilités de personnalisation des widgets HTML. Ils sont aussi disponibles sur plateforme croisées, et donc ils nécessitent un mécanisme de bascule entre les widgets de « look and feel » natif  et widget stylistiquement composables par l'utilisateur.

À cette fin, ils utilisent une propriété propriétaire : {{cssxref("-webkit-appearance")}} ou {{cssxref("appearance")}}. **Ces propriétés ne sont pas normées et ne doivent pas être utilisées**. En fait, elles se comportent même différemment entre WebKit et Gecko. Cependant, il y a une valeur qu'il est bon de connaître : `none`. Avec cette valeur, vous êtes en mesure d'obtenir un contrôle (presque total) sur le style des widgets donnés.

Donc, si vous avez du mal à appliquer un style à un élément, essayez d'utiliser ces propriétés propriétaires. Nous verrons quelques exemples ci-dessous, mais le cas d'utilisation le plus connu de cette propriété est relatif au style des champs de recherche sur les navigateurs WebKit :

```html
<style>
input[type=search] {
    border: 1px dotted #999;
    border-radius: 0;

    -webkit-appearance: none;
}
</style>

<form>
    <input type="search">
</form>
```

{{EmbedLiveSample("Contrôle_du_style_des_éléments_de_formulaire", 250, 40)}}

> **Note :** Il est toujours difficile de prédire l'avenir, quand on parle de techniques Web. L'extension des possibilités d'expression des CSS est difficile ; il y a un travail exploratoire avec d'autres spécifications, telles que [Shadow DOM](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/shadow/index.html) qui offrent certaines perspectives. La quête du formulaire de style totalement composable est loin d'être terminée.

## Exemples

### Cases à cocher et boutons radio

Composer le style d'une case à cocher ou d'un bouton radio conduit à un certain désordre en soi. Par exemple, la taille des cases à cocher et des boutons radio n'est pas vraiment destinée à être modifiée et les navigateurs peuvent réagir très différemment, si vous essayez de le faire.

#### Une simple case à cocher

Considérons la case à cocher suivante :

```html
<span><input type="checkbox"></span>
```

```css
span {
    display: inline-block;
    background: red;
}

input[type=checkbox] {
    width : 100px;
    height: 100px;
}
```

Voici les différentes façons dont divers navigateurs gèrent cela :

| Navigateur                        | Rendu                             |
| --------------------------------- | --------------------------------- |
| Firefox 57 (Mac OSX)              | ![](firefox-mac-checkbox.png)     |
| Firefox 57 (Windows 10)           | ![](firefox-windows-checkbox.png) |
| Chrome 63 (Mac OSX)               | ![](chrome-mac-checkbox.png)      |
| Chrome 63 (Windows 10)            | ![](chrome-windows-checkbox.png)  |
| Opera 49 (Mac OSX)                | ![](opera-mac-checkbox.png)       |
| Internet Explorer 11 (Windows 10) | ![](ie11-checkbox.png)            |
| Edge 16 (Windows 10)              | ![](edge-checkbox.png)            |

#### Un exemple un peu plus compliqué

Comme Opera et Internet Explorer n'ont pas de fonctionnalités telles que {{cssxref("-webkit-appearance")}} ou {{cssxref("appearance")}}, leur utilisation n'est pas appropriée. Heureusement, nous sommes dans un cas où les CSS disposent d'assez d'expressions pour trouver des solutions. Prenons un exemple courant :

```html
<form>
  <fieldset>
    <p>
      <input type="checkbox" id="first" name="fruit-1" value="cerise">
      <label for="first">J'aime les cerises</label>
    </p>
    <p>
      <input type="checkbox" id="second" name="fruit-2" value="banane" disabled>
      <label for="second">Je ne peux pas aimer la banane</label>
    </p>
    <p>
      <input type="checkbox" id="third" name="fruit-3" value="fraise">
      <label for="third">J'aime les fraises</label>
    </p>
  </fieldset>
</form>
```

avec une composition stylistique élémentaire :

```css
body {
  font: 1em sans-serif;
}

form {
  display: inline-block;

  padding: 0;
  margin : 0;
}

fieldset {
  border : 1px solid #CCC;
  border-radius: 5px;
  margin : 0;
  padding: 1em;
}

label {
  cursor : pointer;
}

p {
  margin : 0;
}

p+p {
  margin : .5em 0 0;
}
```

Maintenant composons pour avoir une case à cocher personnalisée.

Le plan consiste à remplacer la case à cocher native par une image de notre choix. Tout d'abord, nous devons préparer une image avec tous les états requis pour une case à cocher. Ces états sont : non coché, coché, non coché désactivé et coché désactivé. Cette image sera utilisée comme fantôme des CSS :

![Check box CSS Sprite](checkbox-sprite.png)

Commençons par masquer les cases à cocher d'origine. Nous les déplacerons simplement à l'extérieur de la fenêtre de visualisation de la page. Il y a deux choses importantes à considérer ici :

- N'utilisez pas `display:none` pour masquer la case à cocher, car comme nous le verrons ci-dessous, nous avons besoin que la case à cocher soit disponible pour l'utilisateur. Avec `display:none`, la case à cocher n'est plus accessible à l'utilisateur, ce qui signifie qu'il est impossible de la cocher ou de la décocher.
- Nous utiliserons quelques sélecteurs CSS3 pour réaliser notre style. Afin de prendre en charge les navigateurs existants, nous pouvons préfixer tous nos sélecteurs avec la pseudo-classe {{cssxref(":root")}}. Dans l'état actuel des implémentations, tous les navigateurs prenant en charge ce dont nous avons besoin prenent en charge également la pseudo-classe {{cssxref(":root")}}, mais d'autres ne le font pas. Ceci est un exemple de moyen pratique pour filtrer l'ancien Internet Explorer. Ces anciens navigateurs verront la case à cocher normale tandis que les navigateurs modernes verront la case à cocher personnalisée.

```css
:root input[type=checkbox] {
  /* les cases à cocher d'origine sont placées en dehors de la vue */
  position: absolute;
  left: -1000em;
}
```

Maintenant que nous sommes débarrassés des cases à cocher natives, ajoutons la nôtre. Pour cela, nous utiliserons le pseudo élément {{cssxref("::before")}} de l'élément {{HTMLElement("label")}} qui suit la case à cocher originale. Ainsi, dans le sélecteur suivant, nous utilisons le sélecteur d'attributs pour cibler la case à cocher, puis nous utilisons le sélecteur de parents adjacent pour cibler le `label` suivant la case à cocher originale. Enfin, nous accédons au pseudo-élément {{cssxref("::before")}} et le styliser pour qu'il affiche notre case à cocher personnalisée non cochée.

```css
:root input[type=checkbox] + label:before {
  content: "";
  display: inline-block;
  width  : 16px;
  height : 16px;
  margin : 0 .5em 0 0;
  background: url("https://developer.mozilla.org/files/4173/checkbox-sprite.png") no-repeat 0 0;

/* Ce qui suit est utilisé pour ajuster la position des cases à cocher
   sur la ligne de base suivante */

  vertical-align: bottom;
  position: relative;
  bottom: 2px;
}
```

Nous utilisons les pseudo-classes {{cssxref(":checked")}} et {{cssxref(":disabled")}} sur la case à cocher d'origine pour changer l'état de notre case à cocher personnalisée en conséquence. Comme nous utilisons un fantôme des CSS, tout ce que nous avons à faire est de changer la position de l'arrière-plan.

```css
:root input[type=checkbox]:checked + label:before {
  background-position: 0 -16px;
}

:root input[type=checkbox]:disabled + label:before {
  background-position: 0 -32px;
}

:root input[type=checkbox]:checked:disabled + label:before {
  background-position: 0 -48px;
}
```

Une dernière chose (mais très importante) : lorsqu'un utilisateur utilise le clavier pour naviguer d'un widget à un autre, chaque widget qui reçoit le focus doit être marqué visuellement. Comme nous cachons les cases à cocher natives, nous devons implémenter cette fonctionnalité nous-mêmes : l'utilisateur doit pouvoir voir où elles se trouvent dans le formulaire. Le CSS suivant met en œuvre le focus sur les cases à cocher personnalisées.

```css
:root input[type=checkbox]:focus + label:before {
  outline: 1px dotted black;
}
```

Voyez directement ici le résultat :

{{EmbedLiveSample("Un_exemple_un_peu_plus_compliqué", 250, 130)}}

### Gérer le cauchemar \<select>

L'élément {{HTMLElement("select")}} est considéré comme un widget « truand », car il est impossible de lui composer un style cohérent entre les plateformes. Toutefois, certaines choses restent possibles. Plutôt qu'une longue explication, voyons un exemple :

```html
<select>
  <option>Cerise</option>
  <option>Banane</option>
  <option>Fraise</option>
</select>
```

```css
select {
  width   : 80px;
  padding : 10px;
}

option {
  padding : 5px;
  color   : red;
}
```

Le tableau suivant montre comment divers navigateurs gèrent cela, dans deux cas. Les deux premières colonnes ne sont que l'exemple ci-dessus. Les deux colonnes suivantes utilisent des CSS personnalisés supplémentaires, pour avoir plus de contrôle sur l'apparence du widget :

```css
select, option {
  -webkit-appearance : none; /* Pour avoir le contrôle de l'apparence sur WebKit/Chromium */
  -moz-appearance : none; /* Pour avoir le contrôle sur l'apparence sur Gecko */

  /* Pour avoir le contrôle sur l'apparence et sur Trident (IE)
     Notez que cela fonctionne aussi sur Gecko et a des effets limités sur WebKit */
  background : none;
}
```

<table class="standard-table">
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="col">Navigateur</th>
      <th colspan="2" scope="col" style="text-align: center">
        Rendu classique
      </th>
      <th colspan="2" scope="col" style="text-align: center">
        Rendu travaillé
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: center">fermé</th>
      <th scope="col" style="text-align: center">ouvert</th>
      <th scope="col" style="text-align: center">fermé</th>
      <th scope="col" style="text-align: center">ouvert</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Firefox 57 (Mac OSX)</td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="firefox-mac-select-1-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="firefox-mac-select-1-open.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="firefox-mac-select-2-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="firefox-mac-select-2-open.png" />
      </td>
    </tr>
    <tr>
      <td>Firefox 57 (Windows 10)</td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="firefox-windows-select-1-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="firefox-windows-select-1-open.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="firefox-windows-select-2-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="firefox-windows-select-2-open.png" />
      </td>
    </tr>
    <tr>
      <td>Chrome 63 (Mac OSX)</td>
      <td style="vertical-align: top; text-align: center">
        <img alt="" src="chrome-mac-select-1-closed.png" />
      </td>
      <td style="vertical-align: top; text-align: center">
        <img alt="" src="chrome-mac-select-1-open.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="chrome-windows-select-2-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="chrome-mac-select-2-open.png" />
      </td>
    </tr>
    <tr>
      <td>Chrome 63 (Windows 10)</td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="chrome-windows-select-1-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="chrome-windows-select-1-open.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="chrome-windows-select-2-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="chrome-windows-select-2-open.png" />
      </td>
    </tr>
    <tr>
      <td>Opera 49 (Mac OSX)</td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="opera-mac-select-1-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="opera-mac-select-1-open.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="opera-mac-select-2-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="opera-mac-select-2-open.png" />
      </td>
    </tr>
    <tr>
      <td>IE11 (Windows 10)</td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="ie11-select-1-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="ie11-select-1-open.png" />
      </td>
      <td style="text-align: center; vertical-align: middle">
        <img alt="" src="ie11-select-2-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: middle">
        <img alt="" src="ie11-select-2-open.png" />
      </td>
    </tr>
    <tr>
      <td>Edge 16 (Windows 10)</td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="edge-select-1-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: top">
        <img alt="" src="edge-select-1-open.png" />
      </td>
      <td style="text-align: center; vertical-align: middle">
        <img alt="" src="edge-select-2-closed.png" />
      </td>
      <td style="text-align: center; vertical-align: middle">
        <img alt="" src="edge-select-2-open.png" />
      </td>
    </tr>
  </tbody>
</table>

Comme vous pouvez le voir, malgré l'aide des propriétés `-*-appearance`, il reste quelques problèmes :

- La propriété {{cssxref("padding")}} est gérée de manière incohérente entre les divers systèmes d'exploitation et navigateurs.
- Internet Explorer ancien ne permet pas un style sans à-coups.
- Firefox ne dispose d'aucun moyen pour rendre la flèche de déroulement.
- Si vous voulez donner un style aux éléments {{HTMLElement("option")}} dans la liste déroulante, le comportement de Chrome et Opera varie d'un système à l'autre.

De plus, avec notre exemple, nous n'utilisons que trois propriétés CSS. Imaginez le désordre quand on considère encore plus de propriétés CSS. Comme vous pouvez le voir, les CSS ne sont pas adaptées pour changer l'apparence et la convivialité de ces widgets de manière cohérente, mais elles vous permettent quand même d'ajuster certaines choses. Pour autant que vous soyez prêt à vivre avec des différences d'un navigateur et d'un système d'exploitation à l'autre.

Nous vous aiderons à comprendre quelles sont les propriétés qui conviennent dans l'article suivant : [Tableau de compatibilité des propriétés entre les widgets de formulaire](/fr/docs/Properties_compatibility_table_for_forms_widgets "/en-US/docs/Properties_compatibility_table_for_forms_widgets").

## Vers des formulaires plus sympas : bibliothèques utiles et\*\* **« **polyfill » (prothèses d'émulation)\*\*

Bien que les CSS soient assez expressives pour les cases à cocher et les boutons radio, c'est loin d'être vrai pour les widgets plus avancés. Même si certaines choses sont possibles avec l'élément {{HTMLElement("select")}}, le widget `file` ne peut pas être stylisé du tout. Il en est de même pour le sélecteur de date, etc.

Si vous souhaitez avoir un contrôle total sur les widgets de formulaire, vous n'avez pas d'autre choix que de compter sur JavaScript. Dans l'article[ Comment créer des widgets de formulaires personnalisés](/fr/docs/HTML/Forms/How_to_build_custom_form_widgets), nous voyons comment le faire nous-mêmes, mais il existe des bibliothèques très utiles pouvant vous aider :

- [Uni-form](http://sprawsm.com/uni-form/) est un canevas de standardisation du balisage des formulaires, en le composant stylistiquement avec des CSS. Il offre également quelques fonctionnalités supplémentaires lorsqu'il est utilisé avec jQuery, mais c'est optionnel.
- [Formalize](http://formalize.me/) est une extension des canevas JavaScript courants (tels que jQuery, Dojo, YUI, etc.) aidant à rationaliser et personnaliser les formulaires.
- [Niceforms](http://www.emblematiq.com/lab/niceforms/) est une méthode JavaScript autonome fournissant une personnalisation complète des formulaires Web. Vous pouvez utiliser certains thèmes intégrés ou créer les vôtres.

Les bibliothèques suivantes ne visent pas seulement les formulaires, mais elles ont des fonctionnalités très intéressantes pour les traiter :

- [jQuery UI](http://jqueryui.com/) offre des widgets avancés et personnalisables très intéressants, comme les sélecteurs de date (avec une attention particulière pour l'accessibilité).
- [Twitter Bootstrap](http://twitter.github.com/bootstrap/base-css.html#forms) peut être très utile si vous voulez normaliser vos formulaires.
- [WebShim](https://afarkas.github.io/webshim/demos/) est un énorme outil pouvant vous aider à gérer la prise en charge des navigateurs HTML5. La partie formulaires Web peut être très utile.

Rappelez-vous que lier CSS et JavaScript peut avoir des effets collatéraux. Donc, si vous choisissez d'utiliser l'une de ces bibliothèques, vous devez toujours prévoir des solutions de repli dans les feuilles de style en cas d'échec du script. Il y a de nombreuses raisons pour lesquelles les scripts peuvent échouer, surtout dans le monde des mobiles et vous devez concevoir votre site Web ou votre application pour traiter ces cas le mieux possible.

## Conclusion



Bien qu'il y ait encore des points noirs avec l'utilisation des CSS dans les formulaires HTML, il y a souvent moyen de les contourner. Il n'existe pas de solution générale et nette, mais les navigateurs modernes offrent de nouvelles possibilités. Pour l'instant, la meilleure solution est d'en savoir plus sur la façon dont les divers navigateurs prennent en charge les CSS, telles qu'appliquées aux widgets de formulaires HTML.

Dans le prochain article de ce guide, nous explorerons comment les différents widgets de formulaire HTML prennent en charge  les plus importantes propriétés des CSS : [Tableau de compatibilité des propriétés entre widgets de formulaire](/fr/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets).

## Voir aussi

- [Dive into HTML5: Forms ](http://diveintohtml5.info/forms.html)(en anglais)
- [Idées utiles et lignes‑guides pour un bon design des formulaires Web](http://www.smashingmagazine.com/2011/06/27/useful-ideas-and-guidelines-for-good-web-form-design/) (en anglais)

{{PreviousMenuNext("Web/Guide/HTML/Formulaires/Apparence_des_formulaires_HTML", "Web/Guide/HTML/Formulaires/Property_compatibility_table_for_form_widgets", "Web/Guide/HTML/Formulaires")}}

## Dans ce module

- [Mon premier formulaire HTML](/fr/docs/Learn/Forms/Your_first_form)
- [Comment structurer un formulaire HTML](/fr/docs/Learn/Forms/How_to_structure_a_web_form)
- [Les widgets natifs pour formulaire](/fr/docs/Learn/Forms/Basic_native_form_controls)
- [Envoi des données de formulaire](/fr/docs/Learn/Forms/Sending_and_retrieving_form_data)
- [Validation des données de formulaire](/fr/docs/Learn/Forms/Form_validation)
- [Comment construire des widgets personnalisés pour formulaire](/fr/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Envoi de formulaires à l'aide du JavaScript](/fr/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Formulaires HTML dans les navigateurs anciens](/fr/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Mise en forme des formulaires HTML](/fr/docs/Learn/Forms/Styling_web_forms)
- Mise en forme avancée des formulaires HTML
- [Table de compatibilité des propriétés pour les widgets de formulaire](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)

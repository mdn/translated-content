---
title: Formulaires HTML dans les navigateurs historiques
slug: Learn/Forms/HTML_forms_in_legacy_browsers
translation_of: Learn/Forms/HTML_forms_in_legacy_browsers
original_slug: Web/Guide/HTML/Formulaires/HTML_forms_in_legacy_browsers
---
{{LearnSidebar}}

Tout développeur apprend très rapidement (parfois difficilement) que le Web est un endroit assez inconfortable. Le pire des fléaux est le «&nbsp;navigateur historique&nbsp;». Oui, admettons‑le, si on dit «&nbsp;navigateur historique&nbsp;», nous pensons tous aux anciennes versions d'Internet Explorer ... mais elles sont loin d'être les seules. Les premières versions de Firefox, comme la [version ESR,](http://www.mozilla.org/en-US/firefox/organizations/) sont aussi des «&nbsp;navigateurs historiques&nbsp;». Et dans le monde du mobile ? Quand ni le navigateur ni l'OS ne peut être mis à jour? Oui, il y a beaucoup de vieux smartphones Android ou des iPhones dont le navigateur par défaut n'est pas à jour. Ceux-ci sont aussi des «&nbsp;navigateurs historiques&nbsp;».

Malheureusement, parcourir cette jungle est une facette du métier. Mais opportunément, il existe quelques astuces pour nous aider à résoudre 80 % des problèmes causés par ces vieilles versions de navigateur.

## S'informer sur les difficultés

En fait, lire la documentation sur ces navigateurs est la chose la plus importante pour essayer de comprendre les modèles communs. Par exemple, la prise en charge des CSS est un problème majeur du formulaire HTML dans la plupart des cas. Vous êtes au bon endroit pour commencer. Il suffit de vérifier la prise en charge des éléments (ou interface DOM) que vous voulez utiliser. MDN dispose de tables de compatibilité pour de nombreux éléments, propriétés ou API pouvant être utilisées dans une page Web. Mais il existe d'autres ressources étonnamment utiles :

### Documentation du fournisseur du navigateur

- Mozilla&nbsp;: vous êtes au bon endroit, explorez juste MDN
- Microsoft&nbsp;: [Documentation sur la prise en charge de la norme par Internet Explorer](http://msdn.microsoft.com/en-us/library/ff410218%28v=vs.85%29.aspx)
- WebKit&nbsp;: comme il y a plusieurs versions de ce moteur, les choses se compliquent&nbsp;:

  - [le Blog WebKit](https://www.webkit.org/blog/) et [Planet WebKit](http://planet.webkit.org/) rassemblent les meilleurs articles par les déveoppeurs WebKit.
  - [l](https://www.chromestatus.com/features)e site État de la p[lateforme Chrome](https://www.chromestatus.com/features) est aussi importante.
  - ainsi que le [site web Apple](https://developer.apple.com/technologies/safari/).

### Documentation indépendante

- [Can I Use](http://caniuse.com) a des informations sur la prise en charge des techniques avancées.
- [Quirks Mode](http://www.quirksmode.org) est une surprenante ressource sur la compatibilité des divers navigateurs. [La partie sur les mobiles](http://www.quirksmode.org/mobile/) est la meilleure actuellement disponible.
- [Position Is Everything](http://positioniseverything.net/) est la meilleure ressource disponible sur les bogues de rendu dans les navigateurs historiques et leur solution de contournement (le cas échéant).
- [Mobile HTML5](http://mobilehtml5.org) dispose d'informations de compatibilité pour une large gamme de navigateurs pour mobiles, et pas seulement pour le «&nbsp;top 5&nbsp;» (y compris Nokia, Amazon et Blackberry).

## Rendre les choses simples



Comme les [formulaires HTML](/fr/docs/Learn/Forms) impliquent des interactions complexes, une règle empirique&nbsp;: [restez aussi simple que possible](https://fr.wikipedia.org/wiki/Principe_KISS). Il y a tant de cas où nous voudrions que des formulaires soient  «&nbsp;plus beaux » ou «&nbsp;avec des fonctionnalités avancées&nbsp;»&nbsp;! Mais construire des formulaires HTML efficaces n'est pas une question de design ou de technique. Pour rappel, prenez le temps de lire cet article sur l'[ergonomie des formulaires sur UX For The Masses](http://www.uxforthemasses.com/forms-usability/) (en anglais).

### La simplification élégante est la meilleure amie du développeur Web

[Une simplification élégante et des améliorations progressives](http://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sont des modèles de développement qui permettent de construire des grands projets prenant en charge une large gamme de navigateurs simultanément. Quand vous créez quelque chose pour un navigateur moderne, et que vous voudriez être sûrs que, l'un l'autre, il fonctionne sur des navigateurs historiques, vous faites de la simplification élégante.

Voyons quelques exemples relatifs aux formulaires en HTML.

#### Types d'entrées en HTML

Les nouveaux types d'entrées amenés par HTML5 sont très sympas car la façon dont ils simplifient est grandement prévisible. Si un navigateur ne connaît pas la valeur de l'attribut {{htmlattrxref("type","input")}} d'un élément {{HTMLElement("input")}}, il prendra une valeur `text` en recours.

```html
<label for="myColor">
 Choisir une couleur
  <input type="color" id="myColor" name="color">
</label>
```

<table>
  <thead>
    <tr>
      <th scope="col" style="text-align: center">Chrome 24</th>
      <th scope="col" style="text-align: center">Firefox 18</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th style="text-align: center">
        <img
          alt="Capture d&#x27;écran de l&#x27;entrée de couleur sur Chrome pour Mac OSX"
          src="choix_chrome.png"
        />
      </th>
      <th style="text-align: center">
        <img
          alt="Capture d&#x27;écran de l&#x27;entrée de couleur sur Firefox"
          src="choix_firefox.png"
        />
      </th>
    </tr>
  </tbody>
</table>

#### Sélecteurs d'attributs CSS

Les [sélecteurs d'attributs CSS](/fr/docs/Web/CSS/Sélecteurs_d_attribut "/en-US/docs/CSS/Attribute_selectors") sont très utiles avec les [formulaires HTML](/fr/docs/Learn/Forms), mais certains navigateurs historiques ne les prennent pas en charge. Dans ce cas, il est courant de doubler le type avec une classe équivalente&nbsp;:

```html
<input type="number" class="number">
```

```css
input[type=number] {
  /* Ceci peut échouer avec certains navigateurs */
}

input.number {
  /* Ceci fonctionne partout */
}
```

Notez que ce qui suit n'est pas utile (car redondant) et peut échouer dans certains navigateurs&nbsp;:

```css
input[type=number],
input.number {
  /* Ceci peut échouer dans certains navigateurs ; s'il ne comprennent pas
     l'un des sélecteurs, il sautent la totalité de la règle */
}
```

#### Boutons et formulaires

Il y a deux manières de définir un bouton dans un formulaire HTML&nbsp;:

- un élément {{HTMLElement("input")}} avec un attribut {htmlattrxref("type","input")}} défini avec une des valeurs `button`, `submit`, `reset` ou `image`
- un élément {{HTMLElement("button")}}

L'élément {{HTMLElement("input")}} peut rendre les choses compliquées si vous voulez appliquer des CSS avec un sélecteur d'élément&nbsp;:

```html
<input type="button" class="button" value="Cliquez‑moi">
```

```css
input {
  /* Cette règle annule le rendu par défaut défini avec un élément input */
  border: 1px solid #CCC;
}

input.button {
  /* Le rendu par défaut N'EST PAS restauré avec ceci */
  border: none;
}

input.button {
  /* Avec ceci non plus&nbsp;! En fait, il n'y a pas de méthode standard pour
     le faire quel que soit le navigateur */
  border: auto;
}
```

L'élément {{HTMLElement("button")}} présente deux problèmes potentiels&nbsp;:

- un bogue dans certaines anciennes versions d'Internet Explorer. Lorsque l'utilisateur clique sur le bouton, ce n'est pas le contenu de l'attribut {{htmlattrxref("value", "button")}} qui est envoyé, mais le contenu HTML disponible entre balises de début et de fin de l'élément {{HTMLElement("button")}}. Ce n'est un problème que si vous voulez envoyer une telle valeur, par exemple si le traitement des données dépend du bouton sur lequel l'utilisateur clique.
- certains navigateurs très anciens n'utilisent pas `submit` comme valeur par défaut pour l'attribut {{htmlattrxref("type","button")}}, donc il est recommandé de toujours définir l'attribut {{htmlattrxref("type","button")}} pour les éléments {{HTMLElement("button")}}.

```html
<!-- Cliquer sur ce boutton envoie «&nbsp;<em>Do A</em>&nbsp;» au lieu de «&nbsp;A&nbsp;» dans certains cas -->
<button type="submit" name="IWantTo" value="A">
  <em>Do A</em>
</button>
```

Le choix de l'une ou l'autre solution vous appartient, selon les contraintes du projet.

### Laissez tomber les CSS

Le plus gros problème avec les formulaires HTML et les navigateurs historiques est la prise en charge des CSS. Comme vous pouvez le constater, vu la complexité de la [Table de compatibilité des propriétés pour les widgets de formulaire](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_widgets), c'est très difficile. Même s'il est toujours possible de faire quelques ajustements sur les éléments de texte (comme la taille ou la couleur de police), il y a toujours des effets secondaires. La meilleure approche reste de ne faire aucune composition des widgets de formulaire HTML. Mais vous pouvez toujours appliquer des styles à tous les éléments environnants. Si vous êtes un professionnel et que votre client le réclame, dans ce cas, vous pouvez étudier certaines techniques difficiles telles que la [construction de widgets avec JavaScript](/fr/docs/Learn/Forms/Comment_construire_des_widgets_de_formulaires_personnalisés). Mais dans ce cas, n'hésitez pas à facturer votre client pour ce caprice.

## Détection de fonctionnalité et prothèses d'émulation (_polyfills_)

Bien que JavaScript soit un langage de programmation remarquable pour les navigateurs modernes, les navigateurs historiques ont de nombreux problèmes avec cette technique.

### JavaScript non obstructif

Un des plus gros problèmes est la disponibilité des API. Pour cette raison, il est considéré comme de bonne pratique de travailler avec du JavaScript «&nbsp;non obstructif&nbsp;». C'est un modèle de développement défini par deux obligations&nbsp;:

- une séparation stricte entre structure et comportement.
- si le fil du code casse, le contenu et les fonctionnalités de base doivent rester accessibles et utilisables.

[Les principes d'un JavaScript non obstructif](http://docs.webplatform.org/wiki/concepts/programming/the_principles_of_unobtrusive_javascript) (écrit à l'origine par Peter-Paul Koch pour Dev.Opera.com et maintenant mis sur Docs.WebPlatform.org) descrit très bien ces idées.

### La bibliothèque Modernizr

Dans de nombreux cas, une bonne prothèse d'émulation («&nbsp;polyfill&nbsp;») peut aider en fournissant une API manquante. Un «&nbsp;[polyfill »](http://remysharp.com/2010/10/08/what-is-a-polyfill/) est un petit morceau de JavaScript qui «&nbsp;remplit un trou&nbsp;» dans les fonctionnalités des navigateurs historiques. Bien qu'ils puissent être utilisés pour améliorer la prise en charge de n'importe quelle fonctionnalité, leur utilisation dans le JavaScript est moins risquée que dans les CSS ou le HTML ; il existe de nombreux cas où JavaScript peut casser (problèmes de réseau, conflits de script, etc.). Mais avec le JavaScript, à condition de travailler avec un JavaScript non obstructif, si les polyfills manquent, ce ne sera pas grave.

La meilleure façon de remplir un trou d'API manquante consiste à utiliser la bibliothèque [Modernizr](http://modernizr.com) et son projet dérivé&nbsp;: [YepNope](http://yepnopejs.com). Modernizr est une bibliothèque qui vous permet de tester la disponibilité d'une fonctionnalité pour une action en accord. YepNope est une bibliothèqe de chargements conditionnels.

Voici un exemple&nbsp;:

```js
Modernizr.load({
  // Cette ligne teste si le navigateur prend en charge l'API
  // de validation de formulaires HTML5
  test : Modernizr.formvalidation,

  // Si ce n'est pas le cas, le polyfill suivant sera chargé
  nope : form-validation-API-polyfill.js,

  // En tout cas, le fichier au cœur de l'application, et dont elle dépend,
  // est chargé
  both : app.js,

  // Une fois les deux fichiers chargés, cette fonction est appelée
  // dans le but d'initialiser l'application
  complete : function () {
    app.init();
  }
});
```

L'équipe de Modernizr fait une maintenance opportune de grande liste de «&nbsp;[polyfills »](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills). Prenez celui dont vous avez besoin.

> **Note :** Modernizr a d'autres fonctionnalités remarquables pour faciliter le traitement du JavaScript non obstructif et les tecniques de simplifications élégantes. Prenez connaissance de [la documentation de Modernizr](http://modernizr.com/docs/).

### Faites attention aux performances

Même si des scripts comme Modernizr sont très attentifs aux performances, le chargement d'un polyfill de 200 kilooctets peut affecter les performances de votre application.  Ceci est particulièrement critique avec les navigateurs historiques ; beaucoup d'entre eux ont un moteur JavaScript très lent qui peut rendre l'exécution de tous vos polyfills pénibles pour l'utilisateur. La performance est un sujet en soi&nbsp;; les navigateurs historiques y sont très sensibles : fondamentalement, ils sont lents et ils ont plus besoin de polyfills, et donc ils ont besoin de traiter encore plus de JavaScript. Ils sont donc doublement surchargés par rapport aux navigateurs modernes. Testez votre code avec les navigateurs historiques pour voir comment leur fonctionnement en conditions réelles. Parfois, l'abandon de certaines fonctionnalités amène un meilleur ressenti pour l'utilisateur que d'avoir exactement la même fonctionnalité dans tous les navigateurs. Dernier rappel&nbsp;: pensez toujours à l'utilisateur final.

## Conclusion

Comme vous pouvez le constater, opérer avec des navigateurs historiques n'est pas qu'une question de formulaires. C'est tout un ensemble de techniques&nbsp;; mais les maîtriser toutes dépasserait le cadre de cet article.

Si vous avez lu tous les articles de ce [guide à propos des formulaires en HTML](/fr/docs/Learn/Forms), vous devriez maintenant être à l'aise avec leur utilisation. Si vous trouvez de nouvelles techniques ou de nouvelles astuces, aidez‑nous à [améliorer ce guide](/fr/docs/MDN/Débuter_sur_MDN).

## Dans ce module

- [Mon premier formulaire HTML](/fr/docs/Learn/Forms/Mon_premier_formulaire_HTML)
- [Comment structurer un formulaire HTML](/fr/docs/Learn/Forms/Comment_structurer_un_formulaire_HTML)
- [Les widgets natifs pour formulaire](/fr/docs/Learn/Forms/Les_blocs_de_formulaires_natifs)
- [Envoi des données de formulaire](/fr/docs/Learn/Forms/Envoyer_et_extraire_les_données_des_formulaires)
- [Validation des données de formulaire](/fr/docs/Learn/Forms/Validation_donnees_formulaire)
- [Comment construire des widgets personnalisés pour formulaire](/fr/docs/Learn/Forms/Comment_construire_des_widgets_de_formulaires_personnalisés)
- [Envoi de formulaires à l'aide du JavaScript](/fr/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Formulaires HTML dans les navigateurs anciens](/fr/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Mise en forme des formulaires HTML](/fr/docs/Learn/Forms/Apparence_des_formulaires_HTML)
- [Mise en forme avancée des formulaires HTML](/fr/docs/Learn/Forms/Advanced_styling_for_HTML_forms)
- [Table de compatibilité des propriétés pour les widgets de formulaire](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_widgets)

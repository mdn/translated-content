---
title: <input type="email">
slug: Web/HTML/Reference/Elements/input/email
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Les éléments {{HTMLElement("input")}} de type **`email`** permettent à l'utilisateur·ice de saisir et d'éditer une adresse électronique ou, si l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Attributes/multiple) est indiqué, une liste d'adresses électroniques.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;email&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="email">Entrez votre email exemple.com&nbsp;:</label>

<input type="email" id="email" pattern=".+@exemple\.com" size="30" required />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

La valeur saisie dans le champ est automatiquement validée pour vérifier s'il s'agit d'une chaîne de caractères vide ou d'une adresse mail valide (ou une liste de telles adresses) avant que le formulaire soit envoyé. Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}} sont automatiquement appliquées selon la validité des champs afin d'indiquer visuellement si la valeur courante du champ est une adresse mail valide ou non.

## Valeur

La valeur d'un tel élément {{HTMLElement("input")}}, contenue dans l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value), contient une chaîne de caractères qui est automatiquement validée afin de vérifier que c'est une adresse électronique valide. Pour être plus précis, trois formes sont considérées valides&nbsp;:

1. Une chaîne de caractères vide (`""`) qui indique que l'utilisateur·ice n'a saisi aucune valeur ou que la valeur a été retirée.
2. Une adresse électronique bien formée. Cela ne signifie pas que l'adresse en question existe mais qu'elle est correctement formatée. Autrement dit, elle respecte une structure `"nom@domaine.tld"`. Cette règle est un peu plus complexe (cf. la section [Validation](#validation) pour l'algorithme exact).
3. Si et seulement si l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Elements/input#multiple) est indiqué, la valeur peut être une liste d'adresses électroniques correctes, séparées par des virgules. Chaque blanc situé avant et après chaque adresse sera retiré.

Pour plus de détails, se référer à la section [Validation](#validation) sur la façon dont les adresses mails sont validées.

## Attributs supplémentaires

En plus des [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes), et des attributs qui s'appliquent à tous les éléments {{HTMLElement("input")}} quel que soit leur type, les champs de saisie de type `email` prennent en charge les attributs suivants&nbsp;:

> [!NOTE]
> L'attribut universel [`autocorrect`](/fr/docs/Web/HTML/Reference/Global_attributes/autocorrect) peut être ajouté aux champs de saisie d'adresse électronique, mais son état enregistré est toujours `off`.

### `list`

La valeur de l'attribut de liste est l'{{DOMxRef("Element.id", "id")}} d'un élément {{HTMLElement("datalist")}} situé dans le même document. L'élément {{HTMLElement("datalist")}} fournit une liste de valeurs prédéfinies à suggérer à l'utilisateur·ice pour ce champ. Toute valeur de la liste qui n'est pas compatible avec le [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) n'est pas incluse dans les options suggérées. Les valeurs fournies sont des suggestions, pas des exigences&nbsp;: l'utilisateur·ice peut sélectionner dans cette liste prédéfinie ou saisir une valeur différente.

### `maxlength`

Le nombre maximum de caractères (exprimé en {{Glossary("UTF-16", "nombre de points de code UTF-16")}}) que l'utilisateur·ice peut saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du texte dépasse `maxlength` en {{Glossary("UTF-16", "nombre de points de code UTF-16")}}. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur·ice.

### `minlength`

Le nombre minimal de caractères (exprimé en {{Glossary("UTF-16", "nombre de points de code UTF-16")}}) que l'utilisateur·ice peut saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille minimale. La valeur indiquée par cet attribut doit être inférieure à `maxlength`.

Le champ [ne sera pas valide](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du texte est inférieure à `minlength` en {{Glossary("UTF-16", "nombre de points de code UTF-16")}}. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur·ice.

### `multiple`

Un attribut booléen qui indique, s'il est présent, que plusieurs adresses électroniques peuvent être saisies en étant séparées par des virgules (et éventuellement des espaces). Voir la section sur [la saisie de plusieurs adresses](#gérer_plusieurs_adresses_mail) ci-après.

> [!NOTE]
> Normalement, lorsque l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) est indiqué, la personne remplissant le formulaire doit saisir une adresse mail valide pour que le champ soit considéré valide. Toutefois, si l'attribut `multiple` est ajouté, une liste de zéro adresses (une chaîne de caractères vide ou un texte constitué uniquement d'espaces) sera une valeur valide. Autrement dit, la personne remplissant le formulaire n'est pas obligée de saisir une adresse lorsque `multiple` est présent, quelle que soit la valeur de `required`.

### `pattern`

L'attribut `pattern` est une expression régulière que doit respecter la valeur du champ afin d'être [valide](/fr/docs/Web/HTML/Guides/Constraint_validation). Cette expression régulière doit être une expression régulière valide pour JavaScript (telle qu'utilisée par [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) et telle que documentée dans [ce guide](/fr/docs/Web/JavaScript/Guide/Regular_expressions)). Le marqueur `'u'` est fourni par le navigateur lors de la compilation de l'expression régulière afin que le motif soit traité comme une séquence de points de code Unicode plutôt que comme des caractères {{Glossary("ASCII")}}. Aucune barre oblique (`/`) ne devrait être utilisée autour du motif.

Si l'expression régulière est invalide ou que cet attribut n'est pas défini, l'attribut est ignoré.

> [!NOTE]
> L'attribut [`title`](/fr/docs/Web/HTML/Reference/Elements/input#title) pourra être utilisé afin d'afficher une bulle d'informations qui explique les conditions à respecter. Il est également conseillé d'inclure un texte explicatif à proximité du champ.

Voir [la section sur l'utilisation de cet attribut ci-après](#validation_grâce_à_une_expression_régulière) pour plus d'exemples.

### `placeholder`

L'attribut `placeholder` est une chaîne de caractères fournissant une courte indication à l'utilisateur·ice quant à l'information attendue dans le champ. Cet attribut devrait être un mot ou une phrase courte qui illustre le type de donnée attendu plutôt qu'un message explicatif. Le texte ne doit pas contenir de saut à la ligne.

Si le contenu du contrôle respecte une directionnalité donnée ([LTR](/fr/docs/Glossary/LTR) ou [RTL](/fr/docs/Glossary/RTL)) et que le texte indicatif doit être présenté dans l'autre sens, il est possible d'utiliser l'algorithme de formatage bidirectionnel Unicode&nbsp;: voir [Comment utiliser les contrôles Unicode pour le texte bidirectionnel (en anglais)](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> On évitera, tant que faire se peut, d'utiliser l'attribut `placeholder`, car il n'est pas sémantiquement très utile pour expliquer le formulaire, et car il peut causer certains problèmes avec le contenu. Voir [la page sur `<input>`](/fr/docs/Web/HTML/Reference/Elements/input) pour plus d'informations.

### `readonly`

Un attribut booléen qui, lorsqu'il est présent, indique que le champ ne peut pas être édité par l'utilisateur·ice. Toutefois, la valeur de l'attribut `value` peut toujours être modifiée via du code JavaScript, qui définirait la propriété `value` rattachée à [l'interface `HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement).

> [!NOTE]
> Un champ en lecture seule ne pouvant pas avoir de valeur, l'attribut `required` n'aura pas d'effet si l'attribut `readonly` est également présent.

### `size`

L'attribut `size` est un nombre positif qui indique le nombre de caractères affichés à l'écran et qui définit donc la largeur du champ. La valeur par défaut de cet attribut est 20. Étant donné que la largeur des caractères peut varier cet attribut ne permet de définir une largeur exacte mais approximative.

Cet attribut ne définit pas la limite du nombre de caractères saisissables dans le champ mais uniquement, et approximativement, le nombre de caractères qui peuvent être affichés à l'écran simultanément. Pour fixer une taille maximale sur la valeur du champ, on utilisera plutôt l'attribut `maxlength`.

## Utiliser les champs de saisie d'adresses électroniques

Les adresses mails font partie des informations les plus fréquentes dans les formulaires web&nbsp;: elles sont utilisées pour se connecter, demander des informations, confirmer une commande, envoyer un email, etc. Le type `email` permet de simplifier le travail de construction de l'interface utilisateur et la logique associée pour les adresses électroniques. Lorsqu'on crée un champ dont l'attribut `type` vaut `email`, le navigateur valide ou non le texte saisi afin de vérifier qu'il s'agit d'une adresse correcte. Cela permet d'éviter les cas où la personne remplissant le formulaire a fait une faute de saisie ou lorsqu'elle a fourni une adresse invalide.

On notera toutefois que le navigateur ne vérifie pas si l'adresse saisie existe réellement ou correspond à un·e utilisateur·ice existant·e du site, ou si elle respecte quelque autre critère. Autrement dit, le navigateur vérifie uniquement que l'adresse fournie est bien formée.

> [!NOTE]
> Il est également important de rappeler qu'un·e utilisateur·ice peut modifier le HTML de la page grâce aux outils de développement. Votre site _ne doit pas_ reposer sur les mécanismes de validation du navigateur. Il est crucial de vérifier l'adresse électronique _côté serveur_ dès que le texte fournit est impliqué, d'une façon ou d'une autre, dans une fonctionnalité sensible (par exemple la connexion à un site, un achat, etc.).

### Un champ `email` simple

À l'heure actuelle, l'ensemble des navigateurs qui implémentent cet élément le gèrent comme un champ texte standard auquel certaines fonctionnalités de validation sont ajoutées. La spécification laisse toutefois une marge de manœuvre pour cette validation (l'élément pourrait, par exemple, consulter le répertoire de l'appareil pour choisir une adresse parmi cette liste). Dans sa forme la plus simple, un champ `email` peut être écrit de cette façon&nbsp;:

```html
<input id="emailAddress" type="email" />
```

{{EmbedLiveSample('Un champ `email` simple', 600, 40)}}

Un tel champ est considéré comme valide lorsqu'il est vide ou lorsqu'une adresse électronique bien formée est saisie. Dans les autres cas, la valeur est considérée comme invalide. Si on ajoute l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required), seules les adresses électroniques bien formées sont autorisées, il n'est plus possible de laisser la valeur vide.

### Gérer plusieurs adresses mail

Grâce à l'attribut booléen [`multiple`](/fr/docs/Web/HTML/Reference/Attributes/multiple), on peut configurer le champ afin de saisir plusieurs adresses mail.

```html
<input id="emailAddress" type="email" multiple />
```

{{EmbedLiveSample('Gérer plusieurs adresses mail', 600, 40)}}

Avec cet attribut, la valeur saisie est valide quand on saisit zéro, une ou plusieurs adresses électroniques bien formées, séparées par des virgules et éventuellement entourées de blancs.

> [!NOTE]
> Lorsque `multiple` est utilisé, la valeur _peut_ être vide.

Voici certains exemples de chaînes de caractères valides lorsque `"multiple"` est utilisé&nbsp;:

- `""`
- `"me@exemple"`
- `"me@exemple.org"`
- `"me@exemple.org,you@exemple.org"`
- `"me@exemple.org, you@exemple.org"`
- `"me@exemple.org,you@exemple.org, us@exemple.org"`

En revanche, les exemples suivants sont considérés invalides&nbsp;:

- `","`
- `"me"`
- `"me@exemple.org you@exemple.org"`

### Textes indicatifs

Il est parfois utile de fournir une indication contextuelle sur la forme que doit prendre la donnée saisie. Cela peut être particulièrement important si la page ne propose pas d'étiquettes descriptives pour chaque {{HTMLElement("input")}}. C'est là qu'interviennent les **textes indicatifs** (<i lang="en">placeholder</i> en anglais). Un texte indicatif est une valeur qui montre la forme que doit prendre la `value` en présentant un exemple de valeur valide, affiché dans la zone d'édition lorsque la `value` de l'élément est `""`. Dès qu'une donnée est saisie dans la zone, le texte indicatif disparaît&nbsp;; si la zone est vidée, le texte indicatif réapparaît.

Dans l'exemple qui suit, on utilise un élément `<input>` de type `email` avec le texte indicatif `sophie@exemple.com`. Vous pouvez manipuler l'exemple afin de voir comment ce texte disparaît/réapparaît lorsqu'on édite la valeur du champ.

```html
<input type="email" placeholder="sophie@exemple.com" />
```

{{EmbedLiveSample('Textes indicatifs', 600, 40)}}

### Contrôler la taille du champ

Il est possible de contrôler la taille physique de la boîte de saisie et également la longueur minimale/maximale de la valeur qu'il est possible de saisir.

#### Contrôler la taille physique

La taille physique de la boîte de saisie peut être paramétrée grâce à l'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size). Grâce à cet attribut, on peut indiquer le nombre de caractères que le champ peut afficher. Dans l'exemple qui suit, la boîte d'édition pourra contenir jusqu'à 15 caractères&nbsp;:

```html
<input type="email" size="15" />
```

{{EmbedLiveSample('Contrôler la taille physique', 600, 40)}}

#### Contrôler la taille de la valeur

L'attribut `size` ne contraint pas la longueur de l'adresse qu'on pourra saisir. On peut donc avoir de petits champs qui permettent de saisir de longues adresses. Pour borner la taille de l'adresse mail à saisir, on pourra utiliser l'attribut [`minlength`](/fr/docs/Web/HTML/Reference/Elements/input#minlength) pour indiquer le nombre minimal de caractères et l'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength) pour indiquer le nombre maximal de caractères contenus dans l'adresse électronique.

Dans l'exemple qui suit, on affiche une boîte de saisie qui mesure 32 caractères de large et dans laquelle on ne peut saisir des adresses qui ont au moins 3 caractères et au plus 64 caractères.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Contrôler la taille de la valeur", 600, 40)}}

### Fournir des options par défaut

#### Fournir une seule option par défaut avec value

Comme toujours, vous pouvez fournir une valeur par défaut pour une boîte de saisie `email` en définissant son attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value)&nbsp;:

```html
<input type="email" value="default@exemple.com" />
```

{{EmbedLiveSample("Fournir une seule option par défaut avec value", 600, 40)}}

#### Proposer des suggestions

Pour aller plus loin, vous pouvez fournir une liste d'options par défaut parmi lesquelles l'utilisateur·ice peut choisir en définissant l'attribut [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list). Cela ne limite pas l'utilisateur·ice à ces options, mais lui permet de sélectionner plus rapidement des adresses électroniques courantes. Cela fournit aussi des suggestions à [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/input#autocomplete). L'attribut `list` définit l'identifiant d'un {{HTMLElement("datalist")}}, qui contient à son tour un élément {{HTMLElement("option")}} par valeur suggérée&nbsp;; chaque `value` d'`option` correspond à la valeur suggérée pour la boîte de saisie d'adresse électronique.

```html
<input type="email" size="40" list="defaultEmails" />

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk"></option>
  <option value="jbourne@unknown.net"></option>
  <option value="nfury@shield.org"></option>
  <option value="tony@starkindustries.com"></option>
  <option value="hulk@grrrrrrrr.arg"></option>
</datalist>
```

{{EmbedLiveSample("Proposer des suggestions", 600, 40)}}

Avec l'élément {{HTMLElement("datalist")}} et ses {{HTMLElement("option")}}, le navigateur proposera les valeurs définies comme suggestions pour l'adresse électronique&nbsp;; cela se présente généralement sous la forme d'une fenêtre contextuelle ou d'un menu déroulant contenant les suggestions. L'expérience utilisateur peut varier selon le navigateur, mais en général, cliquer dans la zone d'édition affiche un menu déroulant des adresses électroniques suggérées. Ensuite, au fur et à mesure que l'utilisateur·ice saisit du texte, la liste est filtrée pour n'afficher que les valeurs correspondantes. Chaque caractère saisi réduit la liste jusqu'à ce que l'utilisateur·ice fasse une sélection ou saisisse une valeur personnalisée.

## Validation

Il existe deux niveaux de validation de contenu pour les champs `email`. D'abord, il y a le niveau standard de validation proposé à tous les {{HTMLElement("input")}}, qui vérifie automatiquement que le contenu respecte les exigences d'une adresse électronique valide. Mais il y a aussi la possibilité d'ajouter un filtrage supplémentaire pour s'assurer que vos besoins spécifiques sont satisfaits, si besoin.

> [!WARNING]
> La validation HTML des formulaires _ne remplace pas_ les scripts qui garantissent que les données saisies sont au bon format. Il est bien trop facile pour quelqu'un de modifier le HTML afin de contourner la validation ou de la supprimer complètement. Il est aussi possible de contourner totalement votre HTML et d'envoyer les données directement à votre serveur. Si votre code côté serveur ne valide pas les données reçues, cela peut entraîner des problèmes graves lorsque des données mal formatées (ou trop volumineuses, du mauvais type, etc.) sont insérées dans votre base de données.

### Validation simple

Les navigateurs fournissent automatiquement une validation afin de s'assurer que seul un texte correspondant au format standard d'une adresse électronique Internet est saisi dans le champ. Les navigateurs utilisent un algorithme équivalent à l'expression régulière suivante&nbsp;:

```js
/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
```

Pour en savoir plus sur le fonctionnement de la validation des formulaires et sur la manière d'utiliser les propriétés CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}} pour mettre en forme le champ selon que la valeur courante est valide ou non, voir [Validation des données de formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> La spécification comporte certains problèmes relatifs aux noms de domaines internationaux et à la validation des adresses électroniques en HTML. Pour plus d'informations, voir [le bug 15489 du W3C <sup>(angl.)</sup>](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489).

### Validation grâce à une expression régulière

Si vous avez besoin que l'adresse électronique saisie soit restreinte à autre chose que «&nbsp;une chaîne de caractères qui ressemble à une adresse électronique&nbsp;», vous pouvez utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) pour définir une {{Glossary("regular expression", "expression régulière")}} à laquelle la valeur doit correspondre pour être valide. Si l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Elements/input#multiple) est défini, chaque élément individuel de la liste séparée par des virgules doit correspondre à {{Glossary("regular expression", "l'expression régulière")}}.

Par exemple, supposons que vous créez une page pour les employé·e·s de Best Startup Ever, Inc. qui leur permet de contacter leur service informatique en cas de besoin. Dans notre formulaire simplifié, l'utilisateur·ice doit saisir son adresse électronique et un message décrivant le problème rencontré. Nous voulons nous assurer que non seulement l'utilisateur·ice fournit une adresse électronique valide, mais aussi, pour des raisons de sécurité, que l'adresse soit une adresse interne à l'entreprise.

Comme les champs de type `email` sont validés à la fois selon la validation standard d'adresse électronique _et_ selon le [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) défini, cela peut être mis en place facilement. Voyons comment&nbsp;:

```css hidden
body {
  font: 16px sans-serif;
}

.emailBox {
  padding-bottom: 20px;
}

.messageBox {
  padding-bottom: 20px;
}

label {
  line-height: 22px;
}

label::after {
  content: " :";
}
```

```html
<form>
  <div class="emailBox">
    <label for="emailAddress">Votre adresse mail</label><br />
    <input
      id="emailAddress"
      type="email"
      size="64"
      maxlength="64"
      required
      placeholder="nomutilisateur@beststartupever.com"
      pattern=".+@beststartupever.com"
      title="Merci de fournir uniquement une adresse Best Startup Ever" />
  </div>

  <div class="messageBox">
    <label for="message">Requête</label><br />
    <textarea
      id="message"
      cols="80"
      rows="8"
      required
      placeholder="Mes chaussures sont trop petites, et j'ai oublié comment danser."></textarea>
  </div>
  <input type="submit" value="Envoyer la requête" />
</form>
```

{{EmbedLiveSample("", 700, 275)}}

Le formulaire ({{HTMLElement("form")}}) contient un élément {{HTMLElement("input")}} de type `email` pour saisir l'adresse de l'utilisateur·ice, un élément {{HTMLElement("textarea")}} permettant de saisir le message et un élément `<input>` de type [`"submit"`](/fr/docs/Web/HTML/Reference/Elements/input/submit) qui formera un bouton permettant d'envoyer le formulaire. Chaque champ possède un élément {{HTMLElement("label")}} associé qui permet d'indiquer ce qui est attendu.

Si on regarde le champ de saisie pour l'adresse électronique, on voit que les deux attributs [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size) et [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength) ont la valeur 64 (on affiche une boîte de saisie large de 64 caractères et on ne peut saisir une adresse électronique d'au plus 64 caractères). L'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) est présent et l'adresse électronique est donc obligatoire pour l'envoi du formulaire.

L'attribut [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/input#placeholder) indique qu'une valeur semblable à `"nomutilisateur@beststartupever.com"` est attendue. L'intérêt de cette valeur est double&nbsp;: on indique qu'il faut saisir une adresse mail et on suggère que cette adresse provient d'un compte `beststartupever.com`. Le type `email` permet de valider le texte saisi afin de vérifier qu'il s'agit d'une adresse électronique valide. Si la valeur saisie n'est pas une adresse valide, un message d'erreur sera affiché&nbsp;:

![Adresse électronique invalide en état d'erreur avec une info-bulle affichant « veuillez saisir une adresse électronique ».](enter-valid-email-address.png)

Si on utilise uniquement les attributs qu'on vient de décrire, on restreint les valeurs saisissables aux adresses électroniques valides de 64 caractères. Or, on veut également valider le fait que l'adresse respecte le format `[nomutilisateur]@beststartupever.com`. C'est pourquoi on utilise l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) avec la valeur `".+@beststartupever.com"`. Cette valeur est une expression régulière qui permet de vérifier que la chaîne de caractère contient un ou plusieurs caractères quelconques, ensuite suivi d'une arobase (`@`) puis du nom de domaine `beststartupever.com`.

On notera que cette expression régulière ne permet pas de vérifier que l'adresse électronique est valide (on pourra par exemple avoir `@beststartupever.com` (avec une espace en début de chaîne) ou encore `@@beststartupever.com` qui ne sont pas valides). En fait, le navigateur vérifie que l'adresse respecte l'expression régulière fournie **et** que l'adresse est valide. Autrement dit, avec le type `email` et cette valeur pour l'attribut `pattern`, on s'assure que l'adresse est une adresse électronique valide et que c'est une bien une adresse avec le nom de domaine `beststartupever.com`.

Lorsqu'on utilise l'attribut `pattern`. il est conseillé d'utiliser l'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) afin de décrire le motif de l'expression régulière. Autrement dit, dans ce cas, l'attribut `title` doit décrire le format souhaité plutôt que contenir une autre information. En effet, cet attribut sera affiché ou prononcé en cas d'erreur. Par exemple, le navigateur pourrait afficher le message «&nbsp;Le texte saisi ne correspond pas au motif requis.&nbsp;» suivi du texte indiqué dans la valeur de `title`. Par exemple si l'attribut `title` vaut «&nbsp;Adresse mail&nbsp;», le message affiché serait «&nbsp;Le texte saisi ne correspond pas au motif requis. Adresse mail&nbsp;» ce qui n'est pas correct.

C'est pour cela qu'on indique la chaîne de caractères «&nbsp;Merci de fournir uniquement une adresse Best Startup Ever&nbsp;». Le message complet obtenu sera donc&nbsp;: «&nbsp;Le texte saisi ne correspond pas au motif requis. Merci de fournir uniquement une adresse Best Startup Ever.&nbsp;»

![Une adresse électronique valide, mais le champ est en état d'erreur avec une info-bulle affichant « Le texte saisi ne correspond pas au motif requis. Merci de fournir uniquement une adresse Best Startup Ever d'entreprise. »](email-pattern-match-bad.png)

> [!NOTE]
> Si vous rencontrez des problèmes à propos de l'expression régulière, n'hésitez pas à ouvrir la console du navigateur. Cette dernière peut contenir des messages d'erreur aidant à diagnostiquer et résoudre le problème.

## Exemples

Voici un champ de saisie d'adresse électronique avec l'identifiant `emailAddress` qui peut contenir jusqu'à 256 caractères. La boîte de saisie mesure physiquement 64 caractères de large et affiche le texte `user@exemple.gov` comme indication lorsque le champ est vide. De plus, grâce à l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Attributes/multiple), la boîte permet à l'utilisateur·ice de saisir zéro ou plusieurs adresses électroniques, séparées par des virgules, comme décrit dans la section [autoriser plusieurs adresses électroniques](#autoriser_plusieurs_adresses_électroniques). Enfin, l'attribut [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list) contient l'identifiant d'un {{HTMLElement("datalist")}} dont les {{HTMLElement("option")}} déterminent un ensemble de valeurs suggérées parmi lesquelles l'utilisateur·ice peut choisir.

En complément, l'élément {{HTMLElement("label")}} est utilisé pour associer une étiquette à la boîte de saisie d'adresse électronique, avec son attribut [`for`](/fr/docs/Web/HTML/Reference/Elements/label#for) qui fait référence à l'identifiant `emailAddress` de l'élément {{HTMLElement("input")}}. Grâce à cette association, cliquer sur l'étiquette placera la sélection sur le champ de saisie.

```html
<label for="emailAddress">Adresse mail</label><br />
<input
  id="emailAddress"
  type="email"
  placeholder="user@exemple.gov"
  list="defaultEmails"
  size="64"
  maxlength="256"
  multiple />

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk"></option>
  <option value="jbourne@unknown.net"></option>
  <option value="nfury@shield.org"></option>
  <option value="tony@starkindustries.com"></option>
  <option value="hulk@grrrrrrrr.arg"></option>
</datalist>
```

{{EmbedLiveSample('Exemples', 600, 80)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères représentant une adresse électronique, ou vide.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{DOMxRef("HTMLElement/change_event", "change")}} et
        {{DOMxRef("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#multiple"><code>multiple</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#name"><code>name</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a> et
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a> et
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{DOMxRef("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td>
        Sans attribut <code>list</code>&nbsp;:
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        avec l'attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le guide relatif aux formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- L'élément {{HTMLElement("input")}}
- L'élément [`<input type="tel">`](/fr/docs/Web/HTML/Reference/Elements/input/tel)
- L'élément [`<input type="url">`](/fr/docs/Web/HTML/Reference/Elements/input/url)
- Les attributs&nbsp;:
  - [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list)
  - [`minlength`](/fr/docs/Web/HTML/Reference/Attributes/minlength)
  - [`maxlength`](/fr/docs/Web/HTML/Reference/Attributes/maxlength)
  - [`multiple`](/fr/docs/Web/HTML/Reference/Attributes/multiple)
  - [`pattern`](/fr/docs/Web/HTML/Reference/Attributes/pattern)
  - [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/input#placeholder)
  - [`readonly`](/fr/docs/Web/HTML/Reference/Attributes/readonly)
  - [`size`](/fr/docs/Web/HTML/Reference/Attributes/size)

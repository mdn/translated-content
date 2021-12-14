---
title: 'Attribut HTML : autocomplete'
slug: Web/HTML/Attributes/autocomplete
tags:
  - Addresses
  - Attribute
  - Email addresses
  - Forms
  - HTML
  - Input
  - Phone Numbers
  - Reference
  - Select
  - Text
  - Usernames
  - autocomplete
  - form
  - passwords
  - textarea
translation_of: Web/HTML/Attributes/autocomplete
original_slug: Web/HTML/Attributs/autocomplete
---
{{HTMLSidebar}}

L'attribut `autocomplete` est disponible sur les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) qui prennent une valeur textuelle ou numérique en entrée, mais aussi pour les éléments [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea), [`<select>`](/fr/docs/Web/HTML/Element/select) et [`<form>`](/fr/docs/Web/HTML/Element/Form). `autocomplete` permet aux développeuses et développeurs web de spécifier quelle est l'autorisation éventuelle, pour l'[agent utilisateur](/fr/docs/Glossary/User_agent), de fournir une assistance automatisée afin de remplir les valeurs des champs de formulaire, ainsi que des indications au navigateur quant au type d'informations attendues dans le champ.

La source fournissant les valeurs suggérées pour l'autocomplétion dépend du navigateur. Généralement, celle-ci est constituée des valeurs saisies précédemment par l'utilisateur. Des valeurs préconfigurées peuvent aussi être utilisées. Ainsi, un navigateur pourra permettre à un utilisateur d'enregistrer son nom, son adresse, son numéro de téléphone et des adresses électroniques pour l'aider lors de l'autocomplétion. Le navigateur pourrait également fournir le stockage chiffré des informations de cartes bancaires et déclencher une procédure d'authentification lorsque ces informations doivent être récupérées pour être utilisées.

Si les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input), [`<select>`](/fr/docs/Web/HTML/Element/select) ou [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) ne possèdent pas d'attribut `autocomplete`, le navigateur utilisera l'attribut `autocomplete` du formulaire associé (c-à-d. l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) qui est l'ancêtre de l'élément `<input>` ou l'élément `<form>` dont la valeur de l'attribut `id` correspond à celle indiquée, dans l'attribut [`form`](/fr/docs/Web/HTML/Element/Input#attr-form) de l'élément `<input>`).

Pour plus d'informations, voir la documentation de l'attribut [`autocomplete`](/fr/docs/Web/HTML/Element/Form#attr-autocomplete) pour l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form).

> **Note :** Afin de fournir des fonctionnalités d'autocomplétion, un agent utilisateur pourra utiliser les prérequis suivants quant aux éléments `<input>`/`<select>`/`<textarea>`:
>
> 1.  Que ceux-ci aient un attribut `name` et/ou `id`
> 2.  Que ceux-ci descendent d'un élément `<form>`
> 3.  Que le formulaire associé ait un bouton [submit](/fr/docs/Web/HTML/Element/Input/submit)

## Valeurs

- `off`

  - : Le navigateur n'est pas autorisé à saisir automatiquement des valeurs pour ce champ. Cette valeur peut être utilisée lorsque le document ou l'application fournit son propre mécanisme d'autocomplétion ou lorsque des raisons de sécurité imposent de ne pas pouvoir saisir la valeur automatiquement.

    > **Note :** Pour la plupart des navigateurs modernes, utiliser `autocomplete="off"` n'empêchera pas un gestionnaire de mots de passe de demander à l'utilisateur s'il souhaite sauvegarder le nom d'utilisateur et le mot de passe ou de renseigner automatiquement les informations pour un formulaire de connexion. Voir [l'article sur l'attribut `autocomplete` et les champs des formulaires de connexion](/fr/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#the_autocomplete_attribute_and_login_fields).

- `on`
  - : Le navigateur est autorisé à compléter automatiquement le champ. Aucune indication supplémentaire n'est fournie quant au type de donnée attendu et c'est donc au navigateur d'utiliser une heuristique pour proposer des valeurs pertinentes.
- `name`

  - : Le champ correspondant doit recevoir le nom complet de la personne. Utiliser cette valeur plutôt que les différents composants est une méthode souvent privilégiée car on évite ainsi de gérer les différentes structures des différentes locales. Toutefois, on peut utiliser les composants suivants si on souhaite décomposer l'identité de la personne :

    - `honorific-prefix`
      - : Le préfixe ou le titre, par exemple « M. », « Mme. », « Me. » , etc.
    - `given-name`
      - : Le prénom.
    - `additional-name`
      - : Le deuxième prénom.
    - `family-name`
      - : Le nom de famille.
    - `honorific-suffix`
      - : Un suffixe (par exemple "Jr.").
    - `nickname`
      - : Un surnom.

- `email`
  - : Une adresse électronique.
- `username`
  - : Un nom de compte ou un nom d'utilisateur.
- `new-password`
  - : Un nouveau mot de passe. Lors de la création d'un compte ou lors d'un changement de mot de passe, cette valeur pourra être utilisée pour le champ où saisir le nouveau mot de passe. Ainsi, on évitera au navigateur de saisir automatiquement le mot de passe actuel ou le navigateur pourra même proposer un outil permettant de créer un mot de passe sécurisé (voir aussi [Empêcher le remplissage automatique avec autocomplete="new-password"](/fr/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#preventing_autofilling_with_autocompletenew-password)).
- `current-password`
  - : Le mot de passe actuel de l'utilisateur.
- `one-time-code`
  - : Un code à usage unique, utilisé pour vérifier l'identité de l'utilisateur.
- `organization-title`
  - : Un titre de poste tel que « Directeur général », « Assistant technique » ou « Ingénieur ».
- `organization`
  - : Le nom d'une entreprise ou d'une organisation.
- `street-address`
  - : Une adresse postale. Cette adresse peut être un texte sur plusieurs lignes et devrait permettre d'identifier complètement l'emplacement de l'adresse au sein d'une ville. Cette valeur n'inclut pas le nom de la ville, le code postal ou le nom du pays.
- `address-line1`, `address-line2`, `address-line3`
  - : Des lignes individuelles pour décrire l'adresse postale. Ces valeurs peuvent être utilisées seulement lorsque la valeur `street-address` est absente.
- `address-level4`
  - : Le niveau d'adresse le plus fin ([niveau administratif](#administrative_levels_in_addresses)) lorsque les adresses ont quatre niveaux.
- `address-level3`
  - : Le troisième niveau de précision d'une adresse de [niveau administratif](#administrative_levels_in_addresses) lorsque les adresses ont au moins trois niveaux administratifs.
- `address-level2`
  - : Le deuxième niveau de précision d'une adresse de [niveau administratif](#administrative_levels_in_addresses) lorsque les adresses ont au moins deux niveaux administratifs. Pour les pays avec deux niveaux administratifs, cela correspond généralement à la ville, au village ou à la localité de l'adresse.
- `address-level1`
  - : Le premier niveau de précision d'une adresse de [niveau administratif](#administrative_levels_in_addresses). C'est généralement la région ou l'état dans lequel se situe l'adresse.
- `country`
  - : Un code de pays.
- `country-name`
  - : Un nom de pays.
- `postal-code`
  - : Un code postal.
- `cc-name`
  - : Le nom complet tel qu'indiqué sur une carte bancaire. On préfèrera généralement utiliser le nom complet plutôt que de le décomposer en fragments.
- `cc-given-name`
  - : Le prénom tel qu'indiqué sur une carte bancaire.
- `cc-additional-name`
  - : Le deuxième prénom tel qu'indiqué sur une carte bancaire.
- `cc-family-name`
  - : Le nom de famille tel qu'indiqué sur une carte bancaire.
- `cc-number`
  - : Le numéro de la carte bancaire ou tout autre numéro identifiant une méthode de paiement (ce peut être un numéro de compte par exemple).
- `cc-exp`
  - : La date d'expiration de la méthode de paiement telle qu'indiquée sur une carte bancaire (généralement sous la forme MM/YY ou sous la forme MM/YYYYY où MM correspond aux deux chiffres du mois et où YY ou YYYY correspondent aux chiffres de l'année).
- `cc-exp-month`
  - : Le mois d'expiration du moyen de paiement tel qu'indiqué sur une carte bancaire.
- `cc-exp-year`
  - : L'année d'expiration du moyen de paiement tel qu'indiqué sur une carte bancaire.
- `cc-csc`
  - : Le cryptogramme du moyen de paiement tel qu'indiqué sur une carte bancaire. Il s'agit généralement du code à trois chiffres de vérification situé au dos de la carte bancaire.
- `cc-type`
  - : Le type de moyen de paiement ("Visa" ou "Master Card").
- `transaction-currency`
  - : La devise utilisée pour la transaction courante.
- `transaction-amount`
  - : Le montant de la transaction, pour un formulaire de paiement, exprimé dans la devise fournie par `transaction-currency`.
- `language`
  - : La langue préférée, indiquée sous la forme [d'une balise de langue valide selon BCP 47](https://fr.wikipedia.org/wiki/%C3%89tiquette_d%27identification_de_langues_IETF).
- `bday`
  - : Une date de naissance complète.
- `bday-day`
  - : Le jour du mois de la date de naissance.
- `bday-month`
  - : Le mois de l'année de la date de naissance.
- `bday-year`
  - : L'année de la date de naissance.
- `sex`
  - : Un genre (tel que « femme », « homme », « Fa'afafine » etc.) sous la forme d'un texte libre sans passage à la ligne.
- `tel`

  - : Un numéro de téléphone complet qui inclut l'identifiant du pays. Si le numéro de téléphone doit être décomposé en composants, on pourra utiliser les valeurs suivantes :

    - `tel-country-code`
      - : L'indicateur du pays pour le numéro de téléphone (33 pour la France ou 1 pour les États-Unis par exemple).
    - `tel-national`
      - : Le numéro de téléphone complet sans l'indicateur du pays.
    - `tel-area-code`
      - : Le code de la zone pour le numéro de téléphone avec un préfixe interne au pays si nécessaire.
    - `tel-local`
      - : Le numéro de téléphone sans l'indicateur de pays ni l'indicateur de zone.

- `tel-extension`
  - : Une extension au numéro de téléphone qui permet par exemple d'indiquer le numéro de chambre dans un hôtel ou le numéro d'un bureau au sein d'une entreprise.
- `impp`
  - : Une URL pour un protocole de messagerie instantannée (par exemple "xmpp:username\@example.net").
- `url`
  - : Une URL, pertinente dans le contexte du formulaire.
- `photo`
  - : L'URL d'une image représentant la personne, l'entreprise ou l'information de contact pour ce formulaire.

Voir [la spécification WHATWG](https://html.spec.whatwg.org/multipage/forms.html#autofill) pour plus de détails.

> **Note :** À la différence des autres navigateurs, pour Firefox, l'attribut `autocomplete` contrôlera également si [l'état de désactivation ou de coche dynamique persiste lors d'un rechargement de la page](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) pour un champ `<input>`. Par défaut, un élément reste désactivé ou coché/décoché lors des rechargements. En utilisant l'attribut `autocomplete` avec la valeur `off`, on désactive cette fonctionnalité. Cela fonctionne, y compris lorsque l'attribut `autocomplete` ne devrait pas s'appliquer à l'élément `<input>` d'après son type. Voir [bug 654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072).

## Exemples

```html
<div>
  <label for="cc-number">Entrez votre numéro de carte de crédit</label>
  <input name="cc-number" id="cc-number" autocomplete="off">
</div>
```

## Les niveaux administratifs pour les adresses

Les quatre niveaux administratifs pour les adresses (`address-level1` jusqu'à `address-level4`) décrivent l'adresse avec un niveau de précision croissant au sein du pays dans lequel l'adresse est situé. Chaque pays possède son propre système de division administrative et peut donc organiser les niveaux selon un ordre différent pour l'écriture des adresses.

`address-level1` représente toujours le niveau le plus large : c'est la composante la moins spécifique de l'adresse après la maille du pays.

### Disposition du formulaire

Étant donné qu'une adresse s'écrit différemment selon le pays, il peut être utile, si possible, de fournir différentes dispositions de formulaires pour les utilisateurs (éventuellement en fonction de leur locale) pour faciliter la saisie de leur adresse pour leur pays.

### Variations

La façon d'utiliser les niveaux administratifs varie d'un pays à l'autre. Voici quelques exemples non exhaustifs.

#### États-Unis

Aux États-Unis, une adresse s'écrit généralement comme suit :

432 Anywhere St
Exampleville CA 95555

Dans ce cas, la portion la moins précise est le code "CA" (qui correspond au code postal pour l'état de Californie) et on a donc `address-level1` qui correspond à ce niveau (ici l'état et plus particulièrement : "CA").

La deuxième partie de l'adresse la moins précise est le nom de la ville et c'est donc cette information (ici "Exampleville") qui sera utilisée pour `address-level2`.

Les niveaux 3 et 4 ne sont pas utilisés aux États-Unis.

#### Royaume-Uni

Le Royaume-Uni utilise un ou deux niveaux d'adresse selon l'adresse. Il s'agit de la ville postale et, dans certains cas, de la localité. Une adresse complète ressemblerait à ceci :

103 Frogmarch Street
Upper-Wapping
Winchelsea
TN99 8ZZ

Les niveaux d'adresse sont les suivants :

- `address-level1` : La ville postale — "Winchelsea" dans ce cas.
- `address-line2` : La localité — "Upper-Wapping" dans ce cas.
- `address-line1` : Les détails de la maison/rue — "103 Frogmarch Street"

Le code postal est séparé. Notez que vous pouvez en fait utiliser uniquement le code postal et `address-line1` pour réussir à distribuer du courrier au Royaume-Uni, ils devraient donc être les seuls éléments obligatoires, mais les gens ont généralement tendance à fournir plus de détails.

#### Chine

La Chine utilise jusqu'à trois niveaux administratifs : la province, la ville et le district.

Le code postal à 6 chiffres n'est pas toujours nécessaire mais lorsqu'il est fourni, il est placé séparément avec une étiquette pour plus de clarté. Par exemple :

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japon

Une adresse au Japon est généralement **écrite sur une ligne**, dans un ordre allant des parties les moins spécifiques aux plus spécifiques (dans **l'ordre inverse des États-Unis**). Il y a deux ou trois niveaux administratifs dans une adresse. Une ligne supplémentaire peut être utilisée pour indiquer les noms des bâtiments et les numéros des pièces. Le code postal est séparé. Par exemple :

〒 381-0000
長野県長野市某町 123

« 〒 » et les sept chiffres suivants indiquent le code postal.

`address-level1` est utilisé pour les préfectures ou la métropole de Tokyo ; « 長野県 » (préfecture de Nagano) dans ce cas. `address-level2` est généralement utilisé pour les villes, les comtés, les communes et les villages ; « 長野市 » (ville de Nagano) dans ce cas. « 某町 123 » est`address-line1` qui se compose d'un nom de zone et d'un numéro de colis.

## Spécifications

| Spécification                                                                                |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "#attr-fe-autocomplete", "autocomplete")}} |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.autocomplete")}}

## Voir aussi

- L'élément HTML [`<input>`](/fr/docs/Web/HTML/Element/Input)
- L'élément HTML [`<select>`](/fr/docs/Web/HTML/Element/select)
- L'élément HTML [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea)
- L'élément HTML [`<form>`](/fr/docs/Web/HTML/Element/Form)
- [Les formulaires HTML](/fr/docs/Learn/Forms)
- [Les attributs universels](/fr/docs/Web/HTML/Global_attributes).

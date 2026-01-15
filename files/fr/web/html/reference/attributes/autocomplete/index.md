---
title: "Attribut HTML : autocomplete"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
original_slug: Web/HTML/Attributes/autocomplete
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

L'attribut `autocomplete` permet aux développeur·euse·s web de définir si, et dans quelle mesure, l'{{Glossary("user agent", "agent utilisateur")}} est autorisé à fournir une aide automatisée pour remplir les champs d'un formulaire, ainsi que d'indiquer au navigateur le type d'information attendu dans le champ.

Il est disponible sur les éléments HTML {{HTMLElement("input")}} qui acceptent une valeur textuelle ou numérique, sur les éléments HTML {{HTMLElement("textarea")}}, {{HTMLElement("select")}} et {{HTMLElement("form")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: autocomplete", "tabbed-shorter")}}

```html interactive-example
<label for="firstName">Prénom&nbsp;:</label>
<input name="firstName" id="firstName" type="text" autocomplete="given-name" />

<label for="lastName">Nom de famille&nbsp;:</label>
<input name="lastName" id="lastName" type="text" autocomplete="family-name" />

<label for="email">E-mail&nbsp;:</label>
<input name="email" id="email" type="email" autocomplete="off" />
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}
```

## Description

L'attribut `autocomplete` fournit une indication à l'agent utilisateur sur la façon de préremplir (ou non) un contrôle de formulaire. Sa valeur peut être le mot-clé `off` ou `on`, ou une liste ordonnée de jetons séparés par des espaces.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<input autocomplete="shipping street-address" />
<input autocomplete="section-user1 billing postal-code" />
```

Si un élément {{HTMLElement("input")}}, {{HTMLElement("select")}} ou {{HTMLElement("textarea")}} ne possède pas d'attribut `autocomplete`, le navigateur utilisera l'[attribut `autocomplete` du **formulaire propriétaire** de l'élément](/fr/docs/Web/HTML/Reference/Elements/form#autocomplete). Le formulaire propriétaire est soit l'élément {{HTMLElement("form")}} dont l'attribut `id` correspond à la valeur de l'attribut [`form`](/fr/docs/Web/HTML/Reference/Attributes/form) de l'élément (si présent), soit, plus couramment, le `<form>` dans lequel l'élément est imbriqué.

> [!NOTE]
> Pour que l'autocomplétion fonctionne, les agents utilisateurs peuvent exiger que les éléments `<input>`/`<select>`/`<textarea>`
>
> 1. aient un attribut `name` et/ou `id`
> 2. soient descendants d'un élément `<form>`
> 3. appartiennent à un formulaire ayant un bouton {{HTMLElement("input/submit", "submit")}}

Si la même liste de jetons est utilisée dans plusieurs contrôles de formulaire, l'agent utilisateur remplira automatiquement toutes les occurrences de la même valeur `autocomplete` avec la même donnée.

Certains jetons peuvent être utilisés plusieurs fois avec des valeurs attendues différentes, comme le jeton `zip-code` dans un formulaire contenant à la fois une adresse de livraison et de facturation. Inclure plusieurs jetons différents dans une liste séparée par des espaces permet d'attribuer des valeurs d'autocomplétion uniques&nbsp;: par exemple, `autocomplete="shipping zip-code"` et `autocomplete="billing zip-code"`.

Certaines valeurs d'autocomplétion peuvent devoir être réutilisées plusieurs fois. Par exemple, un formulaire peut contenir plusieurs adresses de livraison et donc plusieurs occurrences de `"shipping zip-code"` tout en attendant des valeurs différentes. Pour rendre la valeur unique, le premier jeton de la liste peut être un jeton `section-*`, où les huit premiers caractères sont toujours "section-", suivis d'une chaîne alphanumérique. Tous les champs de formulaire ayant le même jeton `section-*` appartiennent au même **groupe nommé**.

Si vous ajoutez l'attribut `autocomplete` sur un champ {{HTMLElement("input/hidden", "hidden")}} (`<input type="hidden">`), sa valeur doit être une liste ordonnée de jetons séparés par des espaces&nbsp;; les mots-clés `on` et `off` ne sont pas autorisés.

La source des valeurs suggérées dépend généralement du navigateur&nbsp;: il s'agit en général des valeurs précédemment saisies par l'utilisateur·rice, mais elles peuvent aussi provenir de valeurs préconfigurées. Par exemple, un navigateur peut permettre à l'utilisateur·rice d'enregistrer son nom, son adresse, son numéro de téléphone et ses adresses e-mail pour l'autocomplétion. Il peut aussi proposer d'enregistrer des informations de carte bancaire chiffrées, pour un remplissage automatique après authentification.

> [!NOTE]
> L'attribut `autocomplete` contrôle aussi, dans Firefox (contrairement aux autres navigateurs), [la persistance de l'état désactivé ou coché d'un champ `<input>`, `<textarea>` ou d'un `<form>` entier lors d'un rechargement de page <sup>(angl.)</sup>](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). Cette fonctionnalité est activée par défaut. Définir `autocomplete="off"` la désactive, même si l'attribut ne devrait normalement pas s'appliquer selon le type de champ. Voir [bug 654072 de Firefox <sup>(angl.)</sup>](https://bugzil.la/654072).

## Valeurs

La valeur de l'attribut est soit le mot-clé `off` ou `on`, soit une `<token-list>` (liste de jetons) séparée par des espaces qui décrit la signification de la valeur d'autocomplétion.

- `off`
  - : Le navigateur n'est pas autorisé à saisir automatiquement des valeurs pour ce champ. Cette valeur peut être utilisée lorsque le document ou l'application fournit son propre mécanisme d'autocomplétion ou lorsque des raisons de sécurité imposent de ne pas pouvoir saisir la valeur automatiquement.

    > [!NOTE]
    > Dans la plupart des navigateurs modernes, définir `autocomplete` à `"off"` n'empêchera pas un gestionnaire de mots de passe de demander à l'utilisateur·rice s'il·elle souhaite enregistrer le nom d'utilisateur et le mot de passe, ou de remplir automatiquement ces informations dans un formulaire de connexion. Voir [l'article sur l'autoremplissage des champs de connexion](/fr/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#the_autocomplete_attribute_and_login_fields).

- `on`
  - : Le navigateur est autorisé à compléter automatiquement le champ. Aucune indication supplémentaire n'est fournie quant au type de donnée attendu et c'est donc au navigateur d'utiliser une heuristique pour proposer des valeurs pertinentes.

- `<token-list>`
  - : Un ensemble ordonné de [jetons séparés par des espaces](#jetons_de_la_liste_de_jetons) composé de jetons de détail d'autoremplissage, précédés éventuellement de jetons de section et de regroupement «&nbsp;billing&nbsp;» (facturation) ou «&nbsp;shipping&nbsp;» (livraison). Les numéros de téléphone, adresses e-mail et protocoles de messagerie sont précédés d'un jeton identifiant le type de destinataire.

Voir [la spécification WHATWG](https://html.spec.whatwg.org/multipage/forms.html#autofill) pour plus de détails.

### Jetons de la liste de jetons

Les options de `<token-list>` incluent, dans l'ordre&nbsp;:

1. [Jeton de nommage de groupe](#groupes_nommés)
2. [Identifiant de regroupement](#identifiant_de_regroupement)
3. [Jetons de détail](#jetons_de_détail)
4. [Jeton d'autorisation web](#jeton_dautorisation_web)

#### Groupes nommés

Pour créer un groupe nommé de champs de formulaire, on peut utiliser le jeton optionnel `section-*`. S'il est présent, ce jeton doit être le premier de la liste de jetons séparés par des espaces.

- `section-*`
  - : Définit le nom d'un groupe de contrôles de formulaire. Il s'agit d'un jeton dont les huit premiers caractères sont la chaîne «&nbsp;section-&nbsp;» (insensible à la casse), suivie de caractères supplémentaires. Tous les contrôles de formulaire commençant par le même jeton appartiennent au même groupe nommé.

#### Identifiant de regroupement

Un identifiant de regroupement optionnel `shipping` ou `billing`

- `shipping`
  - : Le champ identifié par les jetons suivants fait partie de l'adresse ou des informations de contact de livraison.
- `billing`
  - : Le champ identifié par les jetons suivants fait partie de l'adresse ou des informations de contact de facturation.

#### Jetons de détail

Chaque liste de jetons de détail séparés par des espaces inclut soit un type de destinataire avec des informations de contact numériques (dans cet ordre), soit une liste de jetons d'autres types.

##### Type de destinataire

Les jetons qui identifient le type de destinataire incluent&nbsp;:

- `home`
  - : Le type de contact identifié par les jetons suivants sert à contacter le·la destinataire à son domicile.
- `work`
  - : Le type de contact identifié par les jetons suivants sert à contacter le·la destinataire sur son lieu de travail.
- `mobile`
  - : Le type de contact identifié par les jetons suivants sert à contacter le·la destinataire quel que soit l'endroit.
- `fax`
  - : Le destinataire identifié par les jetons suivants est un télécopieur.
- `page`
  - : Le destinataire identifié par les jetons suivants est un téléavertisseur ou un bip.

##### Jetons de contact numérique

Le jeton ou groupe de jetons pour les numéros de téléphone ou leurs composants, les extensions téléphoniques, les adresses e-mail ou les protocoles de messagerie instantanée.

- `tel`
  - : Un numéro de téléphone complet, incluant l'indicatif du pays. Si vous devez décomposer le numéro en plusieurs champs, vous pouvez utiliser les valeurs suivantes&nbsp;:
    - `tel-country-code`
      - : L'indicatif du pays, par exemple «&nbsp;33&nbsp;» pour la France ou «&nbsp;1&nbsp;» pour les États-Unis, le Canada et d'autres régions d'Amérique du Nord et des Caraïbes.
    - `tel-national`
      - : Le numéro de téléphone complet sans l'indicatif du pays, incluant un préfixe interne au pays. Pour le numéro «&nbsp;1-855-555-6502&nbsp;», la valeur de ce champ serait «&nbsp;855-555-6502&nbsp;».
    - `tel-area-code`
      - : L'indicatif régional, avec tout préfixe interne au pays si nécessaire.
    - `tel-local`
      - : Le numéro de téléphone sans l'indicatif de pays ni l'indicatif régional. Celui-ci peut être encore divisé en deux parties, pour les numéros qui comportent un préfixe d'échange et un numéro dans l'échange. Pour le numéro «&nbsp;555-6502&nbsp;», utilisez `tel-local-prefix` pour «&nbsp;555&nbsp;» et `tel-local-suffix` pour «&nbsp;6502&nbsp;».

- `tel-extension`
  - : Un code d'extension téléphonique, comme un numéro de chambre dans un hôtel ou une extension de bureau dans une entreprise.
- `email`
  - : Une adresse e-mail.
- `impp`
  - : Une URL pour un point de terminaison de protocole de messagerie instantanée, par exemple `xmpp:username@example.net`.

##### Autres jetons

Lorsque le champ de formulaire n'est pas un numéro de téléphone, une adresse e-mail ou un protocole de messagerie instantanée, la liste de jetons séparés par des espaces n'est pas précédée d'un type de contact&nbsp;:

- `name`
  - : Le champ attend la valeur du nom complet d'une personne. Utiliser `name` plutôt que de décomposer le nom en ses composants est généralement préférable, car cela évite de devoir gérer la diversité des noms humains et leur structure. Cependant, vous pouvez utiliser les valeurs suivantes pour `autocomplete` si vous souhaitez décomposer le nom&nbsp;:
    - `honorific-prefix`
      - : Le préfixe ou le titre, par exemple «&nbsp;Mme&nbsp;», «&nbsp;M.&nbsp;», «&nbsp;Dr&nbsp;», «&nbsp;Mlle&nbsp;», etc.
    - `given-name`
      - : Le prénom.
    - `additional-name`
      - : Le deuxième prénom.
    - `family-name`
      - : Le nom de famille.
    - `honorific-suffix`
      - : Le suffixe, par exemple «&nbsp;Jr.&nbsp;», «&nbsp;B.Sc.&nbsp;», «&nbsp;PhD.&nbsp;», «&nbsp;IV&nbsp;», etc.
    - `nickname`
      - : Un surnom ou pseudonyme.

- `username`
  - : Un nom d'utilisateur ou de compte.
- `new-password`
  - : Un nouveau mot de passe. Lors de la création d'un compte ou d'un changement de mot de passe, cela doit être utilisé pour un champ «&nbsp;Saisissez votre nouveau mot de passe&nbsp;» ou «&nbsp;Confirmez le nouveau mot de passe&nbsp;», par opposition à un champ général «&nbsp;Saisissez votre mot de passe actuel&nbsp;». Cela peut être utilisé par le navigateur pour éviter de remplir accidentellement un mot de passe existant et pour proposer une aide à la création d'un mot de passe sécurisé.
- `current-password`
  - : Le mot de passe actuel de l'utilisateur·rice.
- `one-time-code`
  - : Un mot de passe à usage unique (OTP) pour vérifier l'identité de l'utilisateur·rice, utilisé comme facteur supplémentaire lors d'une connexion. Il s'agit le plus souvent d'un code reçu par un canal externe, comme un SMS, un e-mail ou une application d'authentification.
- `organization-title`
  - : Un intitulé de poste ou le titre d'une personne au sein d'une organisation, par exemple «&nbsp;Directeur technique&nbsp;», «&nbsp;Président·e&nbsp;», «&nbsp;Responsable d'équipe&nbsp;», etc.
- `organization`
  - : Le nom d'une entreprise ou d'une organisation, par exemple «&nbsp;Acme Widget Company&nbsp;» ou «&nbsp;Scouts et Guides de France&nbsp;».
- `street-address`
  - : Une adresse postale. Elle peut comporter plusieurs lignes de texte et doit permettre d'identifier complètement l'emplacement de l'adresse au sein de son deuxième niveau administratif (généralement une ville ou un village), mais ne doit pas inclure le nom de la ville, le code postal ou le nom du pays.
    - `address-line1`, `address-line2`, `address-line3`
      - : Chaque ligne individuelle de l'adresse postale. Ces champs ne doivent être présents que si `street-address` n'est pas utilisé.
- `address-level4`
  - : Le niveau administratif le plus fin ([niveau administratif](#les_niveaux_administratifs_pour_les_adresses)), pour les adresses comportant quatre niveaux.
- `address-level3`
  - : Le troisième niveau administratif ([niveau administratif](#les_niveaux_administratifs_pour_les_adresses)), pour les adresses comportant au moins trois niveaux.
- `address-level2`
  - : Le deuxième niveau administratif ([niveau administratif](#les_niveaux_administratifs_pour_les_adresses)), pour les adresses comportant au moins deux niveaux. Pour les pays à deux niveaux administratifs, cela correspond généralement à la ville, au village ou à la localité où se situe l'adresse.
- `address-level1`
  - : Le premier niveau administratif ([niveau administratif](#les_niveaux_administratifs_pour_les_adresses)) de l'adresse. Il s'agit généralement de la région ou de la province où se situe l'adresse. Aux États-Unis, il s'agit de l'État. En Suisse, du canton. Au Royaume-Uni, du comté.
- `country`
  - : Un code de pays ou de territoire.
- `country-name`
  - : Un nom de pays ou de territoire.
- `postal-code`
  - : Un code postal (aux États-Unis, il s'agit du code ZIP).

- `cc-name`
  - : Le nom complet tel qu'il apparaît sur un moyen de paiement (carte bancaire, etc.). Il est généralement préférable d'utiliser un champ de nom complet plutôt que de le décomposer.
    - `cc-given-name`
      - : Le prénom tel qu'il apparaît sur un moyen de paiement comme une carte bancaire.
    - `cc-additional-name`
      - : Le deuxième prénom tel qu'il apparaît sur un moyen de paiement ou une carte bancaire.
    - `cc-family-name`
      - : Le nom de famille tel qu'il apparaît sur une carte bancaire.
- `cc-number`
  - : Un numéro de carte bancaire ou tout autre numéro identifiant un moyen de paiement (par exemple un numéro de compte).
- `cc-exp`
  - : La date d'expiration du moyen de paiement, généralement sous la forme «&nbsp;MM/AA&nbsp;» ou «&nbsp;MM/AAAA&nbsp;&nbsp;».
    - `cc-exp-month`
      - : Le mois d'expiration du moyen de paiement.
    - `cc-exp-year`
      - : L'année d'expiration du moyen de paiement.
- `cc-csc`
  - : Le code de sécurité du moyen de paiement&nbsp;; pour les cartes bancaires, il s'agit du code de vérification à trois chiffres au dos de la carte.
- `cc-type`
  - : Le type de moyen de paiement (par exemple «&nbsp;Visa&nbsp;» ou «&nbsp;Master Card&nbsp;»).
- `transaction-currency`
  - : La devise dans laquelle la transaction doit être effectuée.
- `transaction-amount`
  - : Le montant, exprimé dans la devise spécifiée par `transaction-currency`, de la transaction pour un formulaire de paiement.
- `language`
  - : Une langue préférée, indiquée sous la forme d'une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} valide.
- `bday`
  - : Une date de naissance complète.
    - `bday-day`
      - : Le jour du mois de la date de naissance.
    - `bday-month`
      - : Le mois de l'année de la date de naissance.
    - `bday-year`
      - : L'année de la date de naissance.
- `sex`
  - : Une identité de genre (par exemple «&nbsp;Femme&nbsp;», «&nbsp;Fa'afafine&nbsp;», «&nbsp;Hijra&nbsp;», «&nbsp;Homme&nbsp;», «&nbsp;Non-binaire&nbsp;»), sous forme de texte libre sans retour à la ligne.
- `url`
  - : Une URL, comme une page d'accueil ou l'adresse d'un site web d'entreprise, selon le contexte des autres champs du formulaire.
- `photo`
  - : L'URL d'une image représentant la personne, l'entreprise ou les informations de contact fournies dans les autres champs du formulaire.

#### Jeton d'autorisation web

Avec {{HTMLElement("input")}} et {{HTMLElement("textarea")}}, le jeton `webauthn` peut être inclus en dernier pour indiquer à l'agent utilisateur d'afficher les identifiants à clé publique lorsque l'utilisateur·rice interagit avec le contrôle.

- `webauthn`
  - : Les clés d'accès générées par l'[API Web Authentication](/fr/docs/Web/API/Web_Authentication_API), comme demandé par un appel conditionnel à {{DOMxRef("CredentialsContainer.get()", "navigator.credentials.get()")}} (c'est-à-dire un appel incluant `mediation: 'conditional'`). Si ce jeton est inclus, il doit être le dernier de la liste de jetons séparés par des espaces. Voir [Se connecter avec une clé d'accès via l'autoremplissage de formulaire <sup>(angl.)</sup>](https://web.dev/articles/passkey-form-autofill) pour plus de détails.

## Exemples

```html
<div>
  <label for="cc-number">Entrez votre numéro de carte de crédit</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

## Les niveaux administratifs pour les adresses

Les quatre niveaux administratifs pour les adresses (`address-level1` jusqu'à `address-level4`) décrivent l'adresse avec un niveau de précision croissant au sein du pays dans lequel l'adresse est situé. Chaque pays possède son propre système de division administrative et peut donc organiser les niveaux selon un ordre différent pour l'écriture des adresses.

`address-level1` représente toujours le niveau le plus large&nbsp;: c'est la composante la moins spécifique de l'adresse après la maille du pays.

### Disposition du formulaire

Étant donné qu'une adresse s'écrit différemment selon le pays, il peut être utile, si possible, de fournir différentes dispositions de formulaires pour les utilisateurs (éventuellement en fonction de leur locale) pour faciliter la saisie de leur adresse pour leur pays.

### Variations

La façon d'utiliser les niveaux administratifs varie d'un pays à l'autre. Voici quelques exemples non exhaustifs.

#### États-Unis

Aux États-Unis, une adresse s'écrit généralement comme suit&nbsp;:

432 Anywhere St
Exampleville CA 95555

Dans ce cas, la portion la moins précise est le code "CA" (qui correspond au code postal pour l'état de Californie) et on a donc `address-level1` qui correspond à ce niveau (ici l'état et plus particulièrement&nbsp;: "CA").

La deuxième partie de l'adresse la moins précise est le nom de la ville et c'est donc cette information (ici "Exampleville") qui sera utilisée pour `address-level2`.

Les niveaux 3 et 4 ne sont pas utilisés aux États-Unis.

#### Royaume-Uni

Le Royaume-Uni utilise un ou deux niveaux d'adresse selon l'adresse. Il s'agit de la ville postale et, dans certains cas, de la localité. Une adresse complète ressemblerait à ceci&nbsp;:

103 Frogmarch Street
Upper-Wapping
Winchelsea
TN99 8ZZ

Les niveaux d'adresse sont les suivants&nbsp;:

- `address-level1`&nbsp;: La ville postale — "Winchelsea" dans ce cas.
- `address-line2`&nbsp;: La localité — "Upper-Wapping" dans ce cas.
- `address-line1`&nbsp;: Les détails de la maison/rue — "103 Frogmarch Street"

Le code postal est séparé. Notez que vous pouvez en fait utiliser uniquement le code postal et `address-line1` pour réussir à distribuer du courrier au Royaume-Uni, ils devraient donc être les seuls éléments obligatoires, mais les gens ont généralement tendance à fournir plus de détails.

#### Chine

La Chine utilise jusqu'à trois niveaux administratifs&nbsp;: la province, la ville et le district.

Le code postal à 6 chiffres n'est pas toujours nécessaire mais lorsqu'il est fourni, il est placé séparément avec une étiquette pour plus de clarté. Par exemple&nbsp;:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japon

Une adresse au Japon est généralement **écrite sur une ligne**, dans un ordre allant des parties les moins spécifiques aux plus spécifiques (dans **l'ordre inverse des États-Unis**). Il y a deux ou trois niveaux administratifs dans une adresse. Une ligne supplémentaire peut être utilisée pour indiquer les noms des bâtiments et les numéros des pièces. Le code postal est séparé. Par exemple&nbsp;:

〒 381-0000
長野県長野市某町 123

«&nbsp;〒&nbsp;» et les sept chiffres suivants indiquent le code postal.

`address-level1` est utilisé pour les préfectures ou la métropole de Tokyo&nbsp;; «&nbsp;長野県&nbsp;» (préfecture de Nagano) dans ce cas. `address-level2` est généralement utilisé pour les villes, les comtés, les communes et les villages&nbsp;; «&nbsp;長野市&nbsp;» (ville de Nagano) dans ce cas. «&nbsp;某町 123&nbsp;» est `address-line1` qui se compose d'un nom de zone et d'un numéro de colis.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("select")}}
- L'élément HTML {{HTMLElement("textarea")}}
- L'élément HTML {{HTMLElement("form")}}
- [Les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- [Les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)

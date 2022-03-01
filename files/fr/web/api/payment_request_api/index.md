---
title: Payment Request API
slug: Web/API/Payment_Request_API
translation_of: Web/API/Payment_Request_API
---
{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

L'API *Payment Request* fournit une expérience utilisateur cohérente à la fois pour les acheteurs et pour les vendeurs. Ce n'est pas une nouvelle façon de payer ses achats, c'est plutôt une façon pour les utilisateurs de sélectionner leur moyen de paiement privilégié et de rendre cete information disponible pour le marchand.

## Concepts et usages de l'API _Payment Request_

De nombreux problèmes concernant l'abandon du panier d'achat en ligne peuvent découler de formulaires de validation finale longs et difficiles à remplir, et nécessitant souvent plusieurs étapes. L'**API <i lang="en">Payment Request</i>** a pour vocation de réduire le nombre d'étapes nécessaires pour terminer un paiement en ligne, faisant potentiellement ainsi disparaître les formulaires de validation finale. Elle vise à rendre le processus de validation final plus facile en conservant les informations de l'utilisatrice ou l'utilisateur, qui sont transmises au marchand sans nécessiter de formulaire HTML.

Les avantages de l'utilisation de l'API *Payment Request* avec des règlements par cartes ("basic-card") :

- **Une expérience d'achat rapide** : les utilisateurs renseignent leurs informations une fois dans le navigateur et sont alors prêts pour payer des biens et services en ligne. Ils n'ont plus besoin de renseigner les mêmes informations à chaque fois sur différents sites.
- **Une expérience cohérente sur chaque site qui fonctionne avec l'API :** dans la mesure où l'affichage des informations de paiement est contrôlé par le navigateur, celui-ci peut adapter l'expérience de l'utilisateur. Ceci peut impliquer d'afficher l'interface utilisateur dans le langage favori de l'utilisateur.
- **L'accessibilité** : dans la mesure où le navigateur contrôle les éléments à renseigner concernant le paiment, il peut garantir une accessibilité du clavier et de l'écran sur chaque site sans intervention des développeurs. Un navigateur pourrait aussi adapter la taille de la fonte ou le contraste de couleur de la page de paiement,  pour la rendre plus agréable d'utilisation.
- **La gestion des indentificants** : les utilisateurs peuvent gérer leurs cartes de crédit ou leurs adresses de livraison directement dans le navigateur. Un navigateur peut aussi synchroniser ces identifiants avec d'autres appareils, permettant ainsi au utilisateurs d'aller d'un appareil à l'autre lorsqu'ils font leurs achats.
- **Une gestion des erreurs cohérente :** le navigateur peut vérifier la validité des numéros de carte et peut indiquer si la carte de l'utilisateur a expiré ou est sur le point de l'être. Le navigateur peut automatiquement suggérer quelle carte utiliser sur la base des utilisations précédentes ou les restrictions du marchant (par exemple : "Nous n'acceptions que les cartes Visa et Mastercard"), ou encore permettre à l'utilisateur d'indiquer quelle est leur carte par défault.

Pour demander un paiement, une page web crée un {{domxref("PaymentRequest")}} objet en réponse à une action de l'utilisateur qui initie un paiement, comme cliquer sur un bouton "Achat". Le `PaymentRequest` permet à la page web d'interagir avec l'utilisateur prendant qu'il donne les information pour terminer la transaction.

Vous pouvez trouver un guide complet dans l'article [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API).

> **Note :** L'API est disponible à l'intérieur des éléments cross-origin {{htmlelement("iframe")}} seulement si on leur a affecté l'attribut  {{htmlattrxref("allowpaymentrequest","iframe")}}.

## Interfaces

- {{domxref('PaymentAddress')}}
  - : Un objet qui contient l'information "adresse". Utilisé par exemple pour les adresses de facturation et d'expédition.
- {{domxref('PaymentRequest')}}
  - : Un objet qui fournit l'API pour créer et gérer l'interface de paiement de {{Glossary("user agent", "l'agent utilisateur")}}.
- {{domxref('PaymentRequestEvent')}}
  - : Un événement fourni au gestionnaire de paiement lorsque un {{domxref("PaymentRequest")}} est fait.
- {{domxref('PaymentRequestUpdateEvent')}}
  - : Permet à la page web de mettre à jour les détails de la requête de paiement en réponse à une action de l'utilisateur.
- {{domxref('PaymentMethodChangeEvent')}}
  - : Représente une modification du moyen de paiement effectuée par l'utilisateur (par exemple, remplacer une carte de crédit par une autre ou par un autre moyen de paiement en ligne).
- {{domxref('PaymentResponse')}}
  - : Un objet renvoyé après que l'utilisateur ait sélectionné un moyen de paiement et approuvé une demande de paiement.
- {{domxref('MerchantValidationEvent')}}
  - : Correspond à la demande effectuée par le navigateur vers le site marchand afin de valider le fait qu'il a la possibilité/permission d'utiliser un gestionnaire de paiement spécifique (par exemple, enregistré/validé pour utiliser Apple Pay).

<!---->

## Dictionnaires

- {{domxref("AddressErrors")}}
  - : Un dictionnaire contenant des chaînes de caractère qui fournissent des explications concernant toutes les erreurs dans toutes les entrées {{domxref("PaymentAddress")}} qui contiennent des erreurs.
- {{domxref("PayerErrors")}}
  - : Un dictionnaire contenant des chaînes de caractère qui fournissent des explications concernant toutes les erreurs en relations avec les attributs email, téléphone et nom de {{domxref("PaymentResponse")}}.
- {{domxref("PaymentDetailsUpdate")}}
  - : Un objet qui décrit les changements qui doivent être apportés aux détails du paiement dans l'événement dont le serveur à besoin pour mettre à jour l'information à la suite de l'instanciation de l'interface de paiment mais avant que l'utilisateur ne commence à interagir avec.

### Dictionnaires connexes pour la specification *Basic Card*

- {{domxref("BasicCardChangeDetails")}}
  - : Un objet qui donne l'information "_redacted_ address" qui est fournie comme {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} dans l'événement {{event("paymentmethodchange")}} envoyé à {{domxref("PaymentRequest")}} lorsque l'utilisateur modifie les informations de paiement.
- {{domxref("BasicCardErrors")}}
  - : Un message qui fournit tous les messages d'erreur associés avec les champs qui ne sont pas valides dans l'objet {{domxref("BasicCardResponse")}}. Il est utilisé comme valeur de la propriété {{domxref("PaymentValidationErrors.paymentMethod", "paymentMethod")}} dans l'objet {{domxref("PaymentValidationErrors")}} envoyé au {{domxref("PaymentRequest")}} lorsqu'une erreur se produit.
- {{domxref('BasicCardRequest')}}
  - : Définit une structure d'objet pour contenir les détails d'une requête de paiement, par exemple le type de carte de paiement.
- {{domxref('BasicCardResponse')}}
  - : Définit une structure d'objet pour les détails de la réponse de paiement tels que le numéro ou la date d'expiration d'une carte utilisée pour faire le paiement, et l'adresse de facturation.

## Spécifications

| Specification                                            | Status                                               | Comment                                                                                                                                                       |
| -------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Payment')}}                         | {{Spec2('Payment')}}                         | Initial definition.                                                                                                                                           |
| {{SpecName('Basic Card Payment')}}             | {{Spec2('Basic Card Payment')}}             | Defines {{domxref("BasicCardRequest")}} and {{domxref("BasicCardResponse")}}, among other things needed for handling credit card payment |
| {{SpecName('Payment Method Identifiers')}} | {{Spec2('Payment Method Identifiers')}} | Defines payment method identifiers and how they are validated, and, where applicable, minted and formally registered with the W3C.                            |

## Browser compatibility

### PaymentRequest interface

{{Compat("api.PaymentRequest", 0)}}

## See also

- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
- [W3C Payment Request API FAQ](https://github.com/w3c/payment-request-info/wiki/FAQ)

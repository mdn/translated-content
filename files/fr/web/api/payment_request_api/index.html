---
title: Payment Request API
slug: Web/API/Payment_Request_API
translation_of: Web/API/Payment_Request_API
---
<div>{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}</div>

<p>L'API <em>Payment Request</em> fournit une expérience utilisateur cohérente à la fois pour les acheteurs et pour les vendeurs. Ce n'est pas une nouvelle façon de payer ses achats, c'est plutôt une façon pour les utilisateurs de sélectionner leur moyen de paiement privilégié et de rendre cete information disponible pour le marchand.</p>

<h2 id="Concepts_et_usages_de_l'API_Payment_Request">Concepts et usages de l'API <em>Payment Request</em></h2>

<p>De nombreux problèmes concernant l'abandon du panier d'achat en ligne peuvent découler de formulaires de validation finale longs et difficiles à remplir, et nécessitant souvent plusieurs étapes. L'<strong>API <em>Payment Request</em> </strong>a pour vocation de réduire le nombre d'étapes nécessaires pour terminer un paiement en ligne, faisant potentiellement ainsi diparaître les formulaires de validation finale. Elle vise à rendre le processus de validation final plus facile en conservant les informations de l'utilisateur, qui sont transmises au marchant sans nécessiter de formulaire HTML.</p>

<p>Les avantages de l'utilisation de l'API <em>Payment Request</em> avec des règlements par cartes ("basic-card") :</p>

<ul>
 <li><strong>Une expérience d'achat rapide </strong>: les utilisateurs renseignent leurs informations une fois dans le navigateur et sont alors prêts pour payer des biens et services en ligne. Ils n'ont plus besoin de renseigner les mêmes informations à chaque fois sur différents sites.</li>
 <li><strong>Une expérience cohérente sur chaque site qui fonctionne avec l'API :</strong> dans la mesure où l'affichage des informations de paiement est contrôlé par le navigateur, celui-ci peut adapter l'expérience de l'utilisateur. Ceci peut impliquer d'afficher l'interface utilisateur dans le langage favori de l'utilisateur.</li>
 <li><strong>L'accessibilité </strong>: dans la mesure où le navigateur contrôle les éléments à renseigner concernant le paiment, il peut garantir une accessibilité du clavier et de l'écran sur chaque site sans intervention des développeurs. Un navigateur pourrait aussi adapter la taille de la fonte ou le contraste de couleur de la page de paiement,  pour la rendre plus agréable d'utilisation.</li>
 <li><strong>La gestion des indentificants </strong>: les utilisateurs peuvent gérer leurs cartes de crédit ou leurs adresses de livraison directement dans le navigateur. Un navigateur peut aussi synchroniser ces identifiants avec d'autres appareils, permettant ainsi au utilisateurs d'aller d'un appareil à l'autre lorsqu'ils font leurs achats.</li>
 <li><strong>Une gestion des erreurs cohérente :</strong> le navigateur peut vérifier la validité des numéros de carte et peut indiquer si la carte de l'utilisateur a expiré ou est sur le point de l'être. Le navigateur peut automatiquement suggérer quelle carte utiliser sur la base des utilisations précédentes ou les restrictions du marchant (par exemple : "Nous n'acceptions que les cartes Visa et Mastercard"), ou encore permettre à l'utilisateur d'indiquer quelle est leur carte par défault.</li>
</ul>

<p>Pour demander un paiement, une page web crée un {{domxref("PaymentRequest")}} objet en réponse à une action de l'utilisateur qui initie un paiement, comme cliquer sur un bouton "Achat". Le <code>PaymentRequest</code> permet à la page web d'interagir avec l'utilisateur prendant qu'il donne les information pour terminer la transaction.</p>

<p>Vous pouvez trouver un guide complet dans l'article <a href="/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API">Using the Payment Request API</a>.</p>

<div class="note">
  <p><strong>Note :</strong> L'API est disponible à l'intérieur des éléments cross-origin {{htmlelement("iframe")}} seulement si on leur a affecté l'attribut  {{htmlattrxref("allowpaymentrequest","iframe")}}.</p>
</div>

<h2 id="Interfaces">Interfaces</h2>

<dl>
 <dt>{{domxref('PaymentAddress')}}</dt>
 <dd>Un objet qui contient l'information "adresse". Utilisé par exemple pour les adresses de facturation et d'expédition.</dd>
 <dt>{{domxref('PaymentRequest')}}</dt>
 <dd>Un objet qui fournit l'API pour créer et gérer l'interface de paiement de {{Glossary("user agent", "l'agent utilisateur")}}.</dd>
 <dt>{{domxref('PaymentRequestEvent')}}</dt>
 <dd>Un événement fourni au gestionnaire de paiement lorsque un {{domxref("PaymentRequest")}} est fait.</dd>
 <dt>{{domxref('PaymentRequestUpdateEvent')}}</dt>
 <dd>Permet à la page web de mettre à jour les détails de la requête de paiement en réponse à une action de l'utilisateur.</dd>
 <dt>{{domxref('PaymentMethodChangeEvent')}}</dt>
 <dd>Représente une modification du moyen de paiement effectuée par l'utilisateur (par exemple, remplacer une carte de crédit par une autre ou par un autre moyen de paiement en ligne).</dd>
 <dt>{{domxref('PaymentResponse')}}</dt>
 <dd>Un objet renvoyé après que l'utilisateur ait sélectionné un moyen de paiement et approuvé une demande de paiement.</dd>
 <dt>{{domxref('MerchantValidationEvent')}}</dt>
 <dd>Correspond à la demande effectuée par le navigateur vers le site marchand afin de valider le fait qu'il a la possibilité/permission d'utiliser un gestionnaire de paiement spécifique (par exemple, enregistré/validé pour utiliser Apple Pay).</dd>
</dl>

<dl>
</dl>

<h2 id="Dictionnaires">Dictionnaires</h2>

<dl>
 <dt>{{domxref("AddressErrors")}}</dt>
 <dd>Un dictionnaire contenant des chaînes de caractère qui fournissent des explications concernant toutes les erreurs dans toutes les entrées {{domxref("PaymentAddress")}} qui contiennent des erreurs.</dd>
 <dt>{{domxref("PayerErrors")}}</dt>
 <dd>Un dictionnaire contenant des chaînes de caractère qui fournissent des explications concernant toutes les erreurs en relations avec les attributs email, téléphone et nom de {{domxref("PaymentResponse")}}.</dd>
 <dt>{{domxref("PaymentDetailsUpdate")}}</dt>
 <dd>Un objet qui décrit les changements qui doivent être apportés aux détails du paiement dans l'événement dont le serveur à besoin pour mettre à jour l'information à la suite de l'instanciation de l'interface de paiment mais avant que l'utilisateur ne commence à interagir avec.</dd>
</dl>

<h3 id="Dictionnaires_connexes_pour_la_specification_Basic_Card">Dictionnaires connexes pour la specification <em>Basic Card</em></h3>

<dl>
 <dt>{{domxref("BasicCardChangeDetails")}}</dt>
 <dd>Un objet qui donne l'information "<em>redacted</em> address" qui est fournie comme {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} dans l'événement {{event("paymentmethodchange")}} envoyé à {{domxref("PaymentRequest")}} lorsque l'utilisateur modifie les informations de paiement.</dd>
 <dt>{{domxref("BasicCardErrors")}}</dt>
 <dd>Un message qui fournit tous les messages d'erreur associés avec les champs qui ne sont pas valides dans l'objet {{domxref("BasicCardResponse")}}. Il est utilisé comme valeur de la propriété {{domxref("PaymentValidationErrors.paymentMethod", "paymentMethod")}} dans l'objet {{domxref("PaymentValidationErrors")}} envoyé au {{domxref("PaymentRequest")}} lorsqu'une erreur se produit.</dd>
 <dt>{{domxref('BasicCardRequest')}}</dt>
 <dd>Définit une structure d'objet pour contenir les détails d'une requête de paiement, par exemple le type de carte de paiement.</dd>
 <dt>{{domxref('BasicCardResponse')}}</dt>
 <dd>Définit une structure d'objet pour les détails de la réponse de paiement tels que le numéro ou la date d'expiration d'une carte utilisée pour faire le paiement, et l'adresse de facturation.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Payment')}}</td>
   <td>{{Spec2('Payment')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('Basic Card Payment')}}</td>
   <td>{{Spec2('Basic Card Payment')}}</td>
   <td>Defines {{domxref("BasicCardRequest")}} and {{domxref("BasicCardResponse")}}, among other things needed for handling credit card payment</td>
  </tr>
  <tr>
   <td>{{SpecName('Payment Method Identifiers')}}</td>
   <td>{{Spec2('Payment Method Identifiers')}}</td>
   <td>Defines payment method identifiers and how they are validated, and, where applicable, minted and formally registered with the W3C.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>
<h3 id="PaymentRequest_interface">PaymentRequest interface</h3>

<div>


<p>{{Compat("api.PaymentRequest", 0)}}</p>
</div>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API">Using the Payment Request API</a></li>
 <li><a href="/en-US/docs/Web/API/Payment_Request_API/Concepts">Payment processing concepts</a></li>
 <li><a href="https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/">Introducing the Payment Request API for Apple Pay</a></li>
 <li><a href="https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial">Google Pay API PaymentRequest Tutorial</a></li>
 <li><a href="https://github.com/w3c/payment-request-info/wiki/FAQ">W3C Payment Request API FAQ</a></li>
</ul>

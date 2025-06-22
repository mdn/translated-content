---
title: API de Solicitud de Pago
slug: Web/API/Payment_Request_API
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

El API de solicitud de pago provee una experiencia consistente tanto para comerciantes, como para usuarios. No es una nueva forma de pagar; más bien, es una manera para que los usuarios puedan seleccionar su forma de pago preferida para pagar por cosas, y que esa información esté disponible para el comerciante.

## Solicitud de pago conceptos y uso

Muchos problemas relacionados con el abandono de carros de compras en línea pueden deberse a los formularios de pago, los cuales pueden ser complicados y consumir demasiado tiempo para llenarse y a veces requieren muchos pasos para completarse. El API de Petición de Pago intenta reducir el número de pasos necesarios para completar un pago en línea, potencialmente haciendo a un lado los formularios de pago. Hace el proceso de pago mucho más fácil recordando los datos del usuario, los cuales son entregados al comerciante ojalá sin requerid un formulario HTML.

Ventajas de usar la API de Solicitud de Pago con "basic-card" (pagos basados en cartas):

- **Experiencia de compra rápida**: Los usuarios ingresan sus datos una vez en el navegador y luego ya están listos para pagar por productos y servicios en la web. Ellos ya no tienen que llenar los mismos datos repetidamente a través de los diferetes sitios.
- **Experiencia consistente en todos los sitios (que soporten la API):** Como la hoja de pago es controlada por el navegador, puede adaptar la experiencia al usuario. Esta puede incluir la localización de la UI en el lenguaje preferido del usuario.
- **Accesibilidad**: Como el navegador controla los elementos de entrada de la hoja de pago, puede garantizar una accesibilidad uniforme al teclado y al lector de pantalla en cada sitio web sin necesidad de que los desarrolladores hagan algo. Un navegador web puede incluso ajustar el tamaño de la fuente o el color de contraste de la hoja de pago, haciéndola más confortable para el usuario al momento de realizar el pago.
- **Administración de credenciales**: Los usuarios pueden administrar sus tarjetas de crédito y direcciones de envío directamente en el navegador. Un navegador puede incluso sincronizar estas "credenciales" a través de los dispositivos, haciendo más fácil a los usuarios ir de un computador de escritorio a un dispositivo móvil y de vuelta otra vez para realizar compras.
- **Manejo constante de Errores:** El navegador puede checkear la validez de los números de tarjetas, y puede indicarle al usuario si una tarjeta ha expirado (o si está cerca de hacerlo). El navegador puede automáticamente sugerir que tarjeta usar basado en los patrones de uso anteriores o las restricciones del comerciante (p.e., "sólo aceptamos Visa o Mastercard"), o permitir al usuario definir cual de ellas es su tarjeta favorita o por defecto.

Para solicitar un pago, a página web crea un objeto {{domxref("PaymentRequest")}} en respuesta a una acción del usuario que inicia el pago, como hacer click en un botón "Comprar". El `PaymentRequest` permite a la página web intercambiar información agente de usuario (user agent) mientras que el usuario provee los datos para completar la transacción.

Puedes encontrar una guía completa en [Usando la API de Solicitud de Pago](/es/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API).

> [!NOTE]
> La API solo está disponibledentro de elementos {{htmlelement("iframe")}} cross-origin si tienen el atributo [`allowpaymentrequest`](/es/docs/Web/HTML/Reference/Elements/iframe#allowpaymentrequest).

## Interfaces

- {{domxref('PaymentAddress')}}
  - : Un objeto que contiene la dirección; usada para facturación y despacho, por ejemplo.
- {{domxref('PaymentRequest')}}
  - : Un objeto que provee la API para crear y administrar la interfaz de pago del {{Glossary("user agent", "user agent's")}}.
- {{domxref('PaymentRequestEvent')}}
  - : Un evento entregado a un manejador de pagos cuando un {{domxref("PaymentRequest")}} es realizado.
- {{domxref('PaymentRequestUpdateEvent')}}
  - : Permite que la página web actualice los detalles de la solicitud de pago en respuesta a una acción del usuario.
- {{domxref('PaymentMethodChangeEvent')}}
  - : Representa al usuario cambiando el instrumento de pago (por ejemplo, cambiando de una tarjeta de crédito a una tarjeta de débito).
- {{domxref('PaymentResponse')}}
  - : Objeto devuelto después de que el usuario selecciona un método de pago y aprueba una solicitud de pago.
- {{domxref('MerchantValidationEvent')}}
  - : Representa el navegador que requiere que el comerciante (sitio web) se valide a sí mismo como autorizado para usar un manejador de pagos en particular (por ejemplo, registrado como autorizado para usar Apple Pay).

<!---->

## Diccionarios

- {{domxref("AddressErrors")}}
  - : Un diccionario que contiene cadenas que proporcionan explicaciones descriptivas de cualquier error en cualquier entrada de {{domxref ("PaymentAddress")}} que tenga errores.
- {{domxref("PayerErrors")}}
  - : Un diccionario que contiene cadenas que proporcionan explicaciones descriptivas de cualquier error relacionado con los atributos de correo electrónico, teléfono y nombre de {{domxref ("PaymentResponse")}}.
- {{domxref("PaymentDetailsUpdate")}}
  - : Un objeto que describe los cambios que deben realizarse en los detalles del pago en caso de que el servidor necesite actualizar la información después de la instanciación de la interfaz de pago, pero antes de que el usuario comience a interactuar con ella.

### Diccionarios relacionados para la especificación Basic Card

- {{domxref("BasicCardChangeDetails")}}
  - : Un objeto que proporciona información de dirección redactada que se proporciona como {{domxref ("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} en el evento [`paymentmethodchange`](/es/docs/Web/Reference/Events/paymentmethodchange) enviado al {{domxref ("PaymentRequest" )}} cuando el usuario cambia la información de pago.
- {{domxref("BasicCardErrors")}}
  - : Un objeto que proporciona mensajes de error asociados con los campos del objeto {{domxref ("BasicCardResponse")}} que no son válidos. Esto se usa como el valor de la propiedad {{domxref ("PaymentValidationErrors.paymentMethod", "paymentMethod")}} en el objeto {{domxref ("PaymentValidationErrors")}} enviado al {{domxref ("PaymentRequest")}} cuando ocurre un error.
- {{domxref('BasicCardRequest')}}
  - : Define una estructura de objeto para contener detalles de la solicitud de pago, como el tipo de tarjeta.
- {{domxref('BasicCardResponse')}}
  - : Define una estructura de objeto para los detalles de la respuesta de pago, como el número o la fecha de vencimiento de la tarjeta utilizada para realizar el pago y la dirección de facturación.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Using the Payment Request API](/es/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/es/docs/Web/API/Payment_Request_API/Concepts)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
- [W3C Payment Request API FAQ](https://github.com/w3c/payment-request-info/wiki/FAQ)
- Feature Policy directive {{httpheader("Feature-Policy/payment", "payment")}}

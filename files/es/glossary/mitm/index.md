---
title: MitM
slug: Glossary/MitM
---

{{GlossarySidebar}}

Un ataque de Intermediario \[**Man-in-the-middle attack** (MitM)] intercepta una comunicación entre dos sistemas. Por ejemplo, un router Wi-Fi puede estar en peligro.

Comparémoslo con un correo físico: si usted está escribiendo una carta a una persona, el cartero puede interceptar cada carta que envíe. Ellos la abren, la leen y finalmente la modifican, y entonces la reempaquetan y solamente entonces la envían a los destinatarios que usted pretendió. El receptor original podría entonces contestarle y el cartero abriría de nuevo la carta, la leería y finalmente la modificaria, la reempaquetaría y se la da. Usted ignoraría que hay un hombre en medio de su canal de comunicación – el cartero es invisible para usted y para su destinatario.

En el correo físico y en la comunicación online, los ataques MITM son difíciles de defender. Unos pocos consejos:

- No ignore los certificados de advertencia. Podría estar conectándose a un servidor de _phising_ o a un servidor falso.
- Los sitios confidenciales sin encriptación HTTPS en redes públicas Wi-Fi no son dignas de confianza.
- Compruebe que aparece HTTPS en su barra de direcciones y asegúrese de que la encriptación está activa antes de hacer _log-in_.

## Saber más

- OWASP Article: [Man-in-the-middle attack](https://www.owasp.org/index.php/Man-in-the-middle_attack)
- Wikipedia: [Man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
- El encabezamiento {{HTTPHeader("Public-Key-Pins")}} ({{Glossary("HPKP")}}) pude reducir considerablemente el riesgo de MITM pidiendo a los buscadores que requieran un certificado de lista blanca a las siguientes conexiones a esa website.

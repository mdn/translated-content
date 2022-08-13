---
title: MitM
slug: Glossary/MitM
tags:
  - Glosario
  - Seguridad
translation_of: Glossary/MitM
---
<p>Un ataque de Intermediario [<strong>Man-in-the-middle attack</strong> (MitM)] intercepta una comunicación entre dos sistemas. Por ejemplo, un router Wi-Fi puede estar en peligro.</p>

<p>Comparémoslo con un correo físico: si usted está escribiendo una carta a una persona, el cartero puede interceptar cada carta que envíe. Ellos la abren, la leen y finalmente la modifican, y entonces la reempaquetan y solamente entonces la envían a los destinatarios que usted pretendió. El receptor original podría entonces contestarle y el cartero abriría de nuevo la carta, la leería y finalmente la modificaria, la reempaquetaría y se la da. Usted ignoraría que hay un hombre en medio de su canal de comunicación – el cartero es invisible para usted y para su destinatario.</p>

<p>En el correo físico y en la comunicación online, los ataques MITM son difíciles de defender. Unos pocos consejos:</p>

<ul>
 <li>No ignore los certificados de advertencia. Podría estar conectándose a un servidor de <em>phising</em> o a un servidor falso.</li>
 <li>Los sitios confidenciales sin encriptación HTTPS en redes públicas Wi-Fi no son dignas de confianza.</li>
 <li>Compruebe que aparece HTTPS en su barra de direcciones y asegúrese de que la encriptación está activa antes de hacer <em>log-in</em>.</li>
</ul>

<div>
<h2 id="Saber_más">Saber más</h2>

<ul>
 <li>OWASP Article: <a href="https://www.owasp.org/index.php/Man-in-the-middle_attack">Man-in-the-middle attack</a></li>
 <li>Wikipedia: <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack">Man-in-the-middle attack</a></li>
 <li>El encabezamiento {{HTTPHeader("Public-Key-Pins")}} ({{Glossary("HPKP")}}) pude reducir considerablemente el riesgo de MITM pidiendo a los buscadores que requieran un certificado de lista blanca a las siguientes conexiones a esa website.</li>
</ul>
</div>

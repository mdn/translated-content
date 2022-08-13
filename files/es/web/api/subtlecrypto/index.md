---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
tags:
  - API
  - Interfaz
  - Referencia
  - SubtleCrypto
  - Web Crypto API
translation_of: Web/API/SubtleCrypto
---
<div>{{APIRef("Web Crypto API")}}</div>

<p>La interfaz <code><strong>SubtleCrypto</strong></code> de la <a href="/en-US/docs/Web/API/Web_Crypto_API">Web Crypto API</a> provee una serie de funciones criptográficas de bajo nivel. Se accede a ella a través de las propiedades {{domxref("Crypto.subtle")}} disponible en un contexto de la ventana (via {{domxref("Window.crypto")}}).</p>

<div class="warning">
<p><strong>Advertencia:</strong> Esta API proporciona una serie de primitivos criptográficos de bajo nivel. Es muy fácil hacer un mal uso de ellos, y las trampas involucradas pueden ser muy sutiles.</p>

<p>Incluso suponiendo que se utilicen correctamente las funciones criptográficas básicas, la gestión segura de las claves y el diseño general del sistema de seguridad son extremadamente difíciles de conseguir correctamente, y generalmente son el dominio de expertos en seguridad especializados.</p>

<p>Los errores en el diseño e implementación del sistema de seguridad pueden hacer que la seguridad del sistema sea completamente ineficaz.</p>

<p><strong>Si no estás seguro de saber lo que estás haciendo, probablemente no deberías usar esta API.</strong></p>
</div>

<h2 id="Descripción_general">Descripción general</h2>

<p>Podemos dividir las funciones implementadas por esta API en dos grupos: funciones criptográficas y funciones de administración de claves.</p>

<h3 id="Funciones_criptográficas">Funciones criptográficas</h3>

<p>Estas son las funciones que puedes utilizar para implementar características de seguridad como la privacidad y la autenticación en un sistema. El API de <code>SubtleCrypto</code> proporciona las siguientes funciones criptográficas:</p>

<p>* {{DOMxRef("SubtleCrypto.sign","sign()")}} y {{DOMxRef("SubtleCrypto.verify","verify()")}}: crea y verifica las firmas digitales.<br>
 * {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}} y {{DOMxRef("SubtleCrypto.decrypt","decrypt()")}}: encripta y desencripta datos.<br>
 * {{DOMxRef("SubtleCrypto.digest","digest()")}}: crea un digest de longitud fija y resistente a colisiones de algunos datos.</p>

<h3 id="Funciones_de_gestión_clave">Funciones de gestión clave</h3>

<p>Excepto para {{DOMxRef("SubtleCrypto.digest","digest()")}}, todas las funciones de criptografía de la API utilizan claves criptográficas. En la API <code>SubtleCrypto</code> una clave criptográfica se representa usando un objeto {{DOMxRef("CryptoKey","CryptoKey")}}. Para realizar operaciones como firmado y encriptación, provee un objeto {{DOMxRef("CryptoKey","CryptoKey")}} a la función {{DOMxRef("SubtleCrypto.sign","sign()")}} o {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}}.</p>

<h4 id="Generando_y_derivando_claves">Generando y derivando claves</h4>

<p>Las funciones {{DOMxRef("SubtleCrypto.generateKey","generateKey()")}} y {{DOMxRef("SubtleCrypto.deriveKey","deriveKey()")}} ambos crean un nuevo objeto {{DOMxRef("CryptoKey")}}.</p>

<p>La diferencia es que <code>generateKey()</code> generará un nuevo valor clave distinto cada vez que lo llames, mientras que <code>deriveKey()</code> deriva una llave de algún material inicial de claves. Si proporcionas el mismo material de claves a dos llamadas separadas a <code>deriveKey()</code>, obtendrás dos objetos  <code>CryptoKey</code> que tienen el mismo valor de base. Esto es útil si, por ejemplo, se quiere derivar una clave de cifrado de una contraseña y luego derivar la misma clave de la misma contraseña para descifrar los datos.</p>

<h4 id="Importación_y_exportación_de_claves">Importación y exportación de claves</h4>

<p>Para hacer que las claves estén disponibles fuera de tu aplicación, necesitas exportar la clave, y para eso sirve {{DOMxRef("SubtleCrypto.exportKey","exportKey()")}}.Puedes elegir uno de varios formatos de exportación.</p>

<p>El inverso de <code>exportKey()</code> es {{DOMxRef("SubtleCrypto.importKey","importKey()")}}. Puedes importar claves de otros sistemas, y la compatibilidad con formatos estándar como <a href="https://tools.ietf.org/html/rfc5208">PKCS #8</a> y <a href="https://tools.ietf.org/html/rfc7517">JSON Web Key</a> te ayudan a hacer esto. La función <code>exportKey()</code> exporta la clave en un formato no codificado.</p>

<p>Si la clave es sensible, deberías usar {{DOMxRef("SubtleCrypto.wrapKey","wrapKey()")}}, que exporta la clave y luego la encripta usando otra clave; el API llama a una "llave de envoltura".</p>

<p>El inverso de <code>wrapKey()</code> es {{DOMxRef("SubtleCrypto.unwrapKey","unwrapKey()")}}, que descifra y luego importa la llave.</p>

<h4 id="Almacenamiento_de_claves">Almacenamiento de claves</h4>

<p>Epecification objetos <code>CryptoKey</code> pueden ser almacenados usando el <a href="/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">structured clone algorithm</a>, lo que significa que puedes almacenarlos y recuperarlos usando las API de almacenamiento web estándar. La especificación espera que la mayoría de los desarrolladores usen el <a href="/en-US/docs/Web/API/IndexedDB_API">IndexedDB API</a> para almacenar objetos <code>CryptoKey</code>.</p>

<h3 id="Algoritmos_Suportados">Algoritmos Suportados</h3>

<p>Las funciones criptográficas que proporciona la Web Crypto API pueden ser realizadas por uno o más <em>algoritmos criptográficos </em>diferentes: El argumento <code>algorithm</code> de la función indica el algoritmo a utilizar. Algunos algoritmos necesitan parámetros adicionales: en estos casos el argumento <code>algorithm</code> es un objeto de diccionario que incluye los parámetros adicionales.</p>

<p>En el cuadro que figura a continuación se resume qué algoritmos son adecuados para cada operación criptográfica:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row"></th>
   <th scope="col">
    <p><a href="/en-US/docs/Web/API/SubtleCrypto/sign">sign()</a></p>

    <p><a href="/en-US/docs/Web/API/SubtleCrypto/verify">verify()</a></p>
   </th>
   <th scope="col">
    <p><a href="/en-US/docs/Web/API/SubtleCrypto/encrypt">encrypt()</a></p>

    <p><a href="/en-US/docs/Web/API/SubtleCrypto/decrypt">decrypt()</a></p>
   </th>
   <th scope="col"><a href="/en-US/docs/Web/API/SubtleCrypto/digest">digest()</a></th>
   <th scope="col">
    <p><a href="/en-US/docs/Web/API/SubtleCrypto/deriveBits">deriveBits()</a></p>

    <p><a href="/en-US/docs/Web/API/SubtleCrypto/deriveKey">deriveKey()</a></p>
   </th>
   <th scope="col">
    <p><a href="/en-US/docs/Web/API/SubtleCrypto/wrapKey">wrapKey()</a></p>

    <p><a href="/en-US/docs/Web/API/SubtleCrypto/unwrapKey">unwrapKey()</a></p>
   </th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">RSASSA-PKCS1-v1_5</th>
   <td>✓</td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">RSA-PSS</th>
   <td>✓</td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">ECDSA</th>
   <td>✓</td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">HMAC</th>
   <td>✓</td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">RSA-OAEP</th>
   <td></td>
   <td>✓</td>
   <td></td>
   <td></td>
   <td>✓</td>
  </tr>
  <tr>
   <th scope="row">AES-CTR</th>
   <td></td>
   <td>✓</td>
   <td></td>
   <td></td>
   <td>✓</td>
  </tr>
  <tr>
   <th scope="row">AES-CBC</th>
   <td></td>
   <td>✓</td>
   <td></td>
   <td></td>
   <td>✓</td>
  </tr>
  <tr>
   <th scope="row">AES-GCM</th>
   <td></td>
   <td>✓</td>
   <td></td>
   <td></td>
   <td>✓</td>
  </tr>
  <tr>
   <th scope="row">SHA-1</th>
   <td></td>
   <td></td>
   <td>✓</td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">SHA-256</th>
   <td></td>
   <td></td>
   <td>✓</td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">SHA-384</th>
   <td></td>
   <td></td>
   <td>✓</td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">SHA-512</th>
   <td></td>
   <td></td>
   <td>✓</td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">ECDH</th>
   <td></td>
   <td></td>
   <td></td>
   <td>✓</td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">HKDF</th>
   <td></td>
   <td></td>
   <td></td>
   <td>✓</td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">PBKDF2</th>
   <td></td>
   <td></td>
   <td></td>
   <td>✓</td>
   <td></td>
  </tr>
  <tr>
   <th scope="row">AES-KW</th>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td>✓</td>
  </tr>
 </tbody>
</table>

<h2 id="Propiedades">Propiedades</h2>

<p><em>Esta interfaz no hereda ni implementa ninguna propiedad.</em></p>

<h2 id="Métodos">Métodos</h2>

<p><em>Esta interfaz no hereda ningún método.</em></p>

<dl>
 <dt>{{domxref("SubtleCrypto.encrypt()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con los datos codificados correspondientes al texto sin cifrar, el algoritmo y la clave dados como parámetros.</dd>
 <dt>{{domxref("SubtleCrypto.decrypt()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con los datos claros correspondientes al texto encriptado, el algoritmo y la clave dados como parámetros.</dd>
 <dt>{{domxref("SubtleCrypto.sign()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con la firma correspondiente al texto, algoritmo y clave dados como parámetros.</dd>
 <dt>{{domxref("SubtleCrypto.verify()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con un valor {{jsxref("Boolean")}} indicando si la firma dada como parámetro coincide con el texto, el algoritmo y la clave que también se dan como parámetros.</dd>
 <dt>{{domxref("SubtleCrypto.digest()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con digest generado a partir del algoritmo y el texto dados como parámetros.</dd>
 <dt>{{domxref("SubtleCrypto.generateKey()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con un recién generado {{domxref("CryptoKey")}}, para algoritmos simétricos, o un {{domxref("CryptoKeyPair")}}, que contiene dos claves recién generadas, para algoritmos asimétricos. Estas coincidirán con el algoritmo, usos y extraíbles dados como parámetros.</dd>
 <dt>{{domxref("SubtleCrypto.deriveKey()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con un recién generado {{domxref("CryptoKey")}} derivado de la clave maestra y el algoritmo específico dados como parámetros.</dd>
 <dt>{{domxref("SubtleCrypto.deriveBits()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con un recién generado buffer de bits pseudo-aleatorios derivado de la clave maestra y el algoritmo específico dados como parámetros.</dd>
 <dt>{{domxref("SubtleCrypto.importKey()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con un {{domxref("CryptoKey")}} correspondiente al formato, el algoritmo, los datos clave en bruto, los usos y la extraíbilidad dados como parámetros.</dd>
 <dt>{{domxref("SubtleCrypto.exportKey()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con un buffer que contiene la clave en el formato solicitado.</dd>
 <dt>{{domxref("SubtleCrypto.wrapKey()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con una llave simétrica envuelta para su uso (transferencia y almacenamiento) en entornos inseguros. La llave envuelta coincide con el formato especificado en los parámetros dados, y la envoltura se hace con la llave envuelta dada, usando el algoritmo especificado.</dd>
 <dt>{{domxref("SubtleCrypto.unwrapKey()")}}</dt>
 <dd>Retorna un {{jsxref("Promise")}} que se completa con un {{domxref("CryptoKey")}} correspondiente a la llave envuelta dada en el parámetro.</dd>
</dl>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{ SpecName('Web Crypto API', '#subtlecrypto-interface', 'SubtleCrypto') }}</td>
   <td>{{ Spec2('Web Crypto API') }}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_navegador">Compatibilidad del navegador</h2>



<p>{{Compat("api.SubtleCrypto")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{domxref("Crypto")}} and {{domxref("Crypto.subtle")}}.</li>
 <li><a href="https://www.crypto101.io/">Crypto 101</a>: un curso de introducción a la criptografía (en inglés).</li>
</ul>

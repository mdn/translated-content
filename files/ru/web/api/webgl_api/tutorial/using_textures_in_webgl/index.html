---
title: Using textures in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
translation_of: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
---
<p>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}</p>

<p>Сейчас наша программа рисует вращающийся объёмный куб - давайте натянем на него текстуру вместо заливки граней одним цветом.</p>

<h2 id="Загрузка_текстур">Загрузка текстур</h2>

<p>Сначала нужно добавить код для загрузки текстур. В нашем случае мы будем использовать одну текстуру, натянутую на все шесть граней вращающегося куба, но этот подход может быть использован для загрузки любого количества текстур.</p>

<div class="note">
<p><strong>Обратите внимание:</strong> Важно помнить, что загрузка текстур следует <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS">правилам кросс-доменности</a>, что означает, что вы можете загружать текстуры только с сайтов, для которых ваш контент является CORS доверенным. См. подробности в секции "Кросс-доменные текстуры" ниже.</p>
</div>

<p>Код для загрузки текстур выглядит так::</p>

<pre><code>//
// Инициализация текстуры и загрузка изображения.
// Когда загрузка изображения завершена - копируем его в текстуру.
//
function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Так как изображение будет загружено из интернета,
  // может потребоваться время для полной загрузки.
  // Поэтому сначала мы </code>помещаем <code>в текстуру единственный пиксель, чтобы
  // её можно было использовать сразу. После завершения загрузки
  // изображения мы обновим текстуру.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]);  // непрозрачный синий
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                width, height, border, srcFormat, srcType,
                pixel);

  const image = new Image();
  image.onload = function() {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                  srcFormat, srcType, image);

    // У WebGL1 иные требования к изображениям, имеющим размер степени 2,
    // и к не имеющим размер степени 2, поэтому проверяем, что изображение
    // имеет размер степени 2 в обеих измерениях.
    if (isPowerOf2(image.width) &amp;&amp; isPowerOf2(image.height)) {
       // Размер соответствует степени 2. Создаём MIP'ы.
       gl.generateMipmap(gl.TEXTURE_2D);
    } else {
       // Размер не соответствует степени 2.
       // Отключаем MIP'ы и устанавливаем натяжение по краям
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value &amp; (value - 1)) == 0;
}</code></pre>

<p>Функция <code>loadTexture()</code> начинается с создания объекта WebGL <code>texture</code> вызовом функции {{domxref("WebGLRenderingContext.createTexture()", "createTexture()")}}. Сначала функция создаёт текстуру из единственного голубого пикселя, используя {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}}. Таким образом текстура может быть использована сразу (как сплошной голубой цвет) при том, что загрузка изображения может занять некоторое время.</p>

<p>Чтобы загрузить текстуру из файла изображения, функция создаёт объект <code>Image</code> и присваивает атрибуту <code>src</code> адрес, с которого мы хотим загрузить текстуру. Функция, которую мы назначили на событие <code>image.onload</code>,будет вызвана после завершения загрузки изображения. В этот момент мы вызываем {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}}, используя загруженное изображение как исходник для текстуры. Затем мы устанавливаем фильтрацию и натяжение, исходя из того, является ли размер изображения степенью 2 или нет.</p>

<p>В WebGL1 изображения размера, не являющегося степенью 2, могут использовать только <code>NEAREST</code> или <code>LINEAR</code> фильтрацию, и для них нельзя создать mipmap. Также для таких изображений мы должны установить натяжение <code>CLAMP_TO_EDGE</code>. С другой стороны, если изображение имеет размер степени 2 по обеим осям, WebGL может производить более качественную фильтрацию, использовать mipmap и режимы натяжения <code>REPEAT</code> или <code>MIRRORED_REPEAT</code>.</p>

<p>Примером повторяющейся текстуры является изображение нескольких кирпичей, которое размножается для покрытия поверхности и создания изображения кирпичной стены.</p>

<p>Мипмаппинг и UV-повторение могут быть отключены с помощью {{domxref("WebGLRenderingContext.texParameter()", "texParameteri()")}}. Так вы сможете использовать текстуры с размером, не являющимся степенью 2 (NPOT - non-power-of-two), ценой отключения мипмаппинга, UV-натяжения, UV-повторения, и вам самому придётся контролировать, как именно устройство будет обрабатывать текстуру.</p>

<pre><code>// также разрешено gl.NEAREST вместо gl.LINEAR, но не mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Не допускаем повторения по s-координате.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Не допускаем повторения по t-координате.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);</code></pre>

<p>Повторим, что с этими параметрами совместимые WebGL устройства будут допускать использование текстур с любым разрешением (вплоть до максимального). Без подобной настройки WebGL потерпит неудачу при загрузке NPOT-текстур, и вернёт прозрачный чёрный цвет <code>rgba(0,0,0,0)</code>.</p>

<p>Для загрузки изображения добавим вызов <code>loadTexture()</code> в функцию <code>main()</code>. Код можно разместить после вызова <code>initBuffers(gl)</code>.</p>

<pre><code>// Загрузка текстуры
const texture = loadTexture(gl, 'cubetexture.png');</code></pre>

<h2 id="Отображение_текстуры_на_гранях">Отображение текстуры на гранях</h2>

<p>Сейчас текстура загружена и готова к использованию. Но сначала мы должны установить соответствие между координатами текстуры и гранями нашего куба. Нужно заменить весь предыдущий код, который устанавливал цвета граней в <code>initBuffers()</code>.</p>

<pre><code>  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Front
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Back
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Top
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Bottom
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Right
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Left
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                gl.STATIC_DRAW);

...
  return {
    position: positionBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  };</code></pre>

<p>Сначала мы создаём WebGL буфер, в котором сохраняем координаты текстуры для каждой грани, затем связываем его с массивом, в который будем записывать значения.</p>

<p>Массив <code>textureCoordinates</code> определяет координаты текстуры, соответствующие каждой вершине каждой грани. Заметьте, что координаты текстуры лежат в промежутке между 0.0 и 1.0. Размерность текстуры нормализуется в пределах между 0.0 и 1.0, независимо от реального размера изображения.</p>

<p>После определения массива координат текстуры, мы копируем его в буфер, и теперь WebGL имеет данные для отрисовки.</p>

<h2 id="Обновление_шейдеров">Обновление шейдеров</h2>

<p>Мы должны обновить шейдерную программу, чтобы она использовала текстуру, а не цвета.</p>

<h3 id="Вершинный_шейдер">Вершинный шейдер</h3>

<p>Заменяем вершинный шейдер, чтобы он получал координаты текстуры вместо цвета.</p>

<pre><code>  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;</code></pre>

<p>Ключевое изменение в том, что вместо получения цвета вершины, мы получаем координаты текстуры и передаём их в вершинный шейдер, сообщая положение точки внутри текстуры, которая соответствует вершине.</p>

<h3 id="Фрагментный_шейдер">Фрагментный шейдер</h3>

<p>Также нужно обновить фрагментный шейдер:</p>

<pre><code>  const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;</code></pre>

<p>Вместо задания цветового значения цвету фрагмента, цвет фрагмента рассчитывается из <strong>текселя</strong> (пикселя внутри текстуры), основываясь на значении <code>vTextureCoord</code>, которое интерполируется между вершинами (как ранее интерполировалось значение цвета).</p>

<h3 id="Атрибуты_и_uniform-переменные">Атрибуты и uniform-переменные</h3>

<p>Так как мы изменили атрибуты и добавили uniform-переменные, нам нужно получить их расположение</p>

<pre><code>  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
    },
  };</code></pre>

<h2 id="Рисование_текстурированного_куба">Рисование текстурированного куба</h2>

<p>Сделаем несколько простых изменений в функции <code>drawScene()</code>.</p>

<p>Во-первых, удаляем код, который определял цветовые буферы, и заменяем его на:</p>

<pre><code>// Указываем WebGL, как извлечь текстурные координаты из буффера
{
    const num = 2; // каждая координата состоит из 2 значений
    const type = gl.FLOAT; // данные в буфере имеют тип 32 bit float
    const normalize = false; // не нормализуем
    const stride = 0; // сколько байт между одним набором данных и следующим
    const offset = 0; // стартовая позиция в байтах внутри набора данных
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
    gl.vertexAttribPointer(programInfo.attribLocations.textureCoord, num, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
}</code></pre>

<p>Затем добавляем код, который отображает текстуру на гранях, прямо перед отрисовкой:</p>

<pre><code>  // Указываем WebGL, что мы используем текстурный регистр 0
  gl.activeTexture(gl.TEXTURE0);

  // Связываем текстуру с регистром 0
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Указываем шейдеру, что мы связали текстуру с текстурным регистром 0
  gl.uniform1i(programInfo.uniformLocations.uSampler, 0);</code></pre>

<p>WebGL имеет минимум 8 текстурных регистров; первый из них <code>gl.TEXTURE0</code>. Мы указываем, что хотим использовать регистр 0. Затем мы вызываем функцию {{domxref("WebGLRenderingContext.bindTexture()", "bindTexture()")}}, которая связывает текстуру с <code>TEXTURE_2D</code> регистра 0. Наконец мы сообщаем шейдеру, что для <code>uSampler</code> используется текстурный регистр 0.</p>

<p>В завершение, добавляем аргумент <code>texture</code> в функцию <code>drawScene()</code>.</p>

<pre><code>drawScene(gl, programInfo, buffers, texture, deltaTime);
...
function drawScene(gl, programInfo, buffers, texture, deltaTime) {</code></pre>

<p>Сейчас вращающийся куб должен иметь текстуру на гранях.</p>



<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample6/index.html', 670, 510) }}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample6">Посмотреть код примера полностью</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample6/">Открыть демо в новом окне</a></p>

<h2 id="Кросс-доменные_текстуры">Кросс-доменные текстуры</h2>

<p>Загрузка кросс-доменных текстур контролируется правилами кросс-доменного доступа. Чтобы загрузить текстуру с другого домена, она должна быть CORS доверенной. См. детали в статье <a href="https://developer.mozilla.org/ru/docs/Web/HTTP/CORS">HTTP access control</a>.</p>

<p><a href="http://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/">В статье на hacks.mozilla.org</a> есть объяснение с <a href="http://people.mozilla.org/~bjacob/webgltexture-cors-js.html">примером</a>, как использовать изображения CORS для создания WebGL текстур.</p>

<div class="note">
<p><strong>Обратите внимание:</strong> Поддержка CORS для текстур WebGL и атрибут <code>crossOrigin</code> для элементов изображений реализованы в {{Gecko("8.0")}}.</p>
</div>

<p>Tainted (только-для-записи) 2D canvas нельзя использовать в качестве текстур WebGL. Например, 2D {{ HTMLElement("canvas") }} становится "tainted", когда на ней отрисовано кросс-доменное изображение.</p>

<div class="note">
<p><strong>Обратите внимание:</strong> Поддержка CORS для Canvas 2D <code>drawImage</code> реализована в  {{Gecko("9.0")}}. Это значит, что использование CORS доверенных кросс-доменных изображений больше не делает 2D canvas "tained" (только-для-записи),  и вы можете использовать такую 2D canvas как исходник для текстур WebGL.</p>
</div>

<div class="note">
<p><strong>Обратите внимание:</strong> Поддержка CORS для кросс-доменного видео и атрибут <code>crossorigin</code> для HTML-элемента {{ HTMLElement("video") }} реализованы в {{Gecko("12.0")}}.</p>
</div>

<p>{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}</p>

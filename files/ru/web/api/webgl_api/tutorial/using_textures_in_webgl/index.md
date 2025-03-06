---
title: Using textures in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Сейчас наша программа рисует вращающийся объёмный куб - давайте натянем на него текстуру вместо заливки граней одним цветом.

## Загрузка текстур

Сначала нужно добавить код для загрузки текстур. В нашем случае мы будем использовать одну текстуру, натянутую на все шесть граней вращающегося куба, но этот подход может быть использован для загрузки любого количества текстур.

> [!NOTE]
> Важно помнить, что загрузка текстур следует [правилам кросс-доменности](/ru/docs/Web/HTTP/CORS), что означает, что вы можете загружать текстуры только с сайтов, для которых ваш контент является CORS доверенным. См. подробности в секции "Кросс-доменные текстуры" ниже.

Код для загрузки текстур выглядит так::

```
//
// Инициализация текстуры и загрузка изображения.
// Когда загрузка изображения завершена - копируем его в текстуру.
//
function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Так как изображение будет загружено из интернета,
  // может потребоваться время для полной загрузки.
  // Поэтому сначала мы помещаем в текстуру единственный пиксель, чтобы
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
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
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
  return (value & (value - 1)) == 0;
}
```

Функция `loadTexture()` начинается с создания объекта WebGL `texture` вызовом функции {{domxref("WebGLRenderingContext.createTexture()", "createTexture()")}}. Сначала функция создаёт текстуру из единственного голубого пикселя, используя {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}}. Таким образом текстура может быть использована сразу (как сплошной голубой цвет) при том, что загрузка изображения может занять некоторое время.

Чтобы загрузить текстуру из файла изображения, функция создаёт объект `Image` и присваивает атрибуту `src` адрес, с которого мы хотим загрузить текстуру. Функция, которую мы назначили на событие `image.onload`,будет вызвана после завершения загрузки изображения. В этот момент мы вызываем {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}}, используя загруженное изображение как исходник для текстуры. Затем мы устанавливаем фильтрацию и натяжение, исходя из того, является ли размер изображения степенью 2 или нет.

В WebGL1 изображения размера, не являющегося степенью 2, могут использовать только `NEAREST` или `LINEAR` фильтрацию, и для них нельзя создать mipmap. Также для таких изображений мы должны установить натяжение `CLAMP_TO_EDGE`. С другой стороны, если изображение имеет размер степени 2 по обеим осям, WebGL может производить более качественную фильтрацию, использовать mipmap и режимы натяжения `REPEAT` или `MIRRORED_REPEAT`.

Примером повторяющейся текстуры является изображение нескольких кирпичей, которое размножается для покрытия поверхности и создания изображения кирпичной стены.

Мипмаппинг и UV-повторение могут быть отключены с помощью {{domxref("WebGLRenderingContext.texParameter()", "texParameteri()")}}. Так вы сможете использовать текстуры с размером, не являющимся степенью 2 (NPOT - non-power-of-two), ценой отключения мипмаппинга, UV-натяжения, UV-повторения, и вам самому придётся контролировать, как именно устройство будет обрабатывать текстуру.

```
// также разрешено gl.NEAREST вместо gl.LINEAR, но не mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Не допускаем повторения по s-координате.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Не допускаем повторения по t-координате.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

Повторим, что с этими параметрами совместимые WebGL устройства будут допускать использование текстур с любым разрешением (вплоть до максимального). Без подобной настройки WebGL потерпит неудачу при загрузке NPOT-текстур, и вернёт прозрачный чёрный цвет `rgba(0,0,0,0)`.

Для загрузки изображения добавим вызов `loadTexture()` в функцию `main()`. Код можно разместить после вызова `initBuffers(gl)`.

```
// Загрузка текстуры
const texture = loadTexture(gl, 'cubetexture.png');
```

## Отображение текстуры на гранях

Сейчас текстура загружена и готова к использованию. Но сначала мы должны установить соответствие между координатами текстуры и гранями нашего куба. Нужно заменить весь предыдущий код, который устанавливал цвета граней в `initBuffers()`.

```
  const textureCoordBuffer = gl.createBuffer();
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
  };
```

Сначала мы создаём WebGL буфер, в котором сохраняем координаты текстуры для каждой грани, затем связываем его с массивом, в который будем записывать значения.

Массив `textureCoordinates` определяет координаты текстуры, соответствующие каждой вершине каждой грани. Заметьте, что координаты текстуры лежат в промежутке между 0.0 и 1.0. Размерность текстуры нормализуется в пределах между 0.0 и 1.0, независимо от реального размера изображения.

После определения массива координат текстуры, мы копируем его в буфер, и теперь WebGL имеет данные для отрисовки.

## Обновление шейдеров

Мы должны обновить шейдерную программу, чтобы она использовала текстуру, а не цвета.

### Вершинный шейдер

Заменяем вершинный шейдер, чтобы он получал координаты текстуры вместо цвета.

```
  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;
```

Ключевое изменение в том, что вместо получения цвета вершины, мы получаем координаты текстуры и передаём их в вершинный шейдер, сообщая положение точки внутри текстуры, которая соответствует вершине.

### Фрагментный шейдер

Также нужно обновить фрагментный шейдер:

```
  const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;
```

Вместо задания цветового значения цвету фрагмента, цвет фрагмента рассчитывается из **текселя** (пикселя внутри текстуры), основываясь на значении `vTextureCoord`, которое интерполируется между вершинами (как ранее интерполировалось значение цвета).

### Атрибуты и uniform-переменные

Так как мы изменили атрибуты и добавили uniform-переменные, нам нужно получить их расположение

```
  const programInfo = {
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
  };
```

## Рисование текстурированного куба

Сделаем несколько простых изменений в функции `drawScene()`.

Во-первых, удаляем код, который определял цветовые буферы, и заменяем его на:

```
// Указываем WebGL, как извлечь текстурные координаты из буффера
{
    const num = 2; // каждая координата состоит из 2 значений
    const type = gl.FLOAT; // данные в буфере имеют тип 32 bit float
    const normalize = false; // не нормализуем
    const stride = 0; // сколько байт между одним набором данных и следующим
    const offset = 0; // стартовая позиция в байтах внутри набора данных
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
    gl.vertexAttribPointer(programInfo.attribLocations.textureCoord, num, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
}
```

Затем добавляем код, который отображает текстуру на гранях, прямо перед отрисовкой:

```
  // Указываем WebGL, что мы используем текстурный регистр 0
  gl.activeTexture(gl.TEXTURE0);

  // Связываем текстуру с регистром 0
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Указываем шейдеру, что мы связали текстуру с текстурным регистром 0
  gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
```

WebGL имеет минимум 8 текстурных регистров; первый из них `gl.TEXTURE0`. Мы указываем, что хотим использовать регистр 0. Затем мы вызываем функцию {{domxref("WebGLRenderingContext.bindTexture()", "bindTexture()")}}, которая связывает текстуру с `TEXTURE_2D` регистра 0. Наконец мы сообщаем шейдеру, что для `uSampler` используется текстурный регистр 0.

В завершение, добавляем аргумент `texture` в функцию `drawScene()`.

```
drawScene(gl, programInfo, buffers, texture, deltaTime);
...
function drawScene(gl, programInfo, buffers, texture, deltaTime) {
```

Сейчас вращающийся куб должен иметь текстуру на гранях.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[Посмотреть код примера полностью](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [Открыть демо в новом окне](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## Кросс-доменные текстуры

Загрузка кросс-доменных текстур контролируется правилами кросс-доменного доступа. Чтобы загрузить текстуру с другого домена, она должна быть CORS доверенной. См. детали в статье [HTTP access control](/ru/docs/Web/HTTP/CORS).

[В статье на hacks.mozilla.org](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/) есть объяснение с [примером](https://people.mozilla.org/~bjacob/webgltexture-cors-js.html), как использовать изображения CORS для создания WebGL текстур.

> [!NOTE]
> Поддержка CORS для текстур WebGL и атрибут `crossOrigin` для элементов изображений реализованы в Gecko 8.0.

Tainted (только-для-записи) 2D canvas нельзя использовать в качестве текстур WebGL. Например, 2D {{ HTMLElement("canvas") }} становится "tainted", когда на ней отрисовано кросс-доменное изображение.

> [!NOTE]
> Поддержка CORS для Canvas 2D `drawImage` реализована в Gecko 9.0. Это значит, что использование CORS доверенных кросс-доменных изображений больше не делает 2D canvas "tained" (только-для-записи), и вы можете использовать такую 2D canvas как исходник для текстур WebGL.

> [!NOTE]
> Поддержка CORS для кросс-доменного видео и атрибут `crossorigin` для HTML-элемента {{ HTMLElement("video") }} реализованы в Gecko 12.0.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

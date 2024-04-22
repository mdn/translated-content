---
title: WebGL에서 조명 효과 적용하기
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}

WebGL은 OpenGL 표준과는 다르게 자체적인 조명 효과를 제공하지 않습니다. 따라서 WebGL에서의 조명 효과는 개발자 스스로 만들어야 합니다. 다행스럽게도 조명 효과를 만드는 것이 아주 어려운 일은 아니며, 이 글을 통해 몇 가지 기초적인 부분을 이해할 수 있을 것입니다.

## 3D에서의 조명 시뮬레이션과 명암 효과

3D 그래픽의 조명 시뮬레이션에 대한 이론적 바탕에 대해 상세하게 알아보는 것은 이 글의 범위를 많이 벗어난다고 할 수 있지만, 그 동작 원리에 대해서는 조금이나마 알아볼 필요가 있습니다. 먼저 가장 널리 사용되는 조명 모델인 [퐁 셰이딩(Phong shading)에 대한 위키피디아 자료](http://en.wikipedia.org/wiki/Phong_shading)를 한 번 읽어보시기 바랍니다.

조명에는 세 가지 기본 타입이 있습니다:

**주변광**(**Ambient light**)은 장면(scene) 전반에 걸쳐 스며드는 빛으로, 방향성이 없으며 장면 내에 있는 모든 표면을 그 표면의 방향과 관계없이 동일한 밝기로 비춰줍니다.

**방향광**(**Directional light**)은 특정한 방향으로만 비춰지는 빛입니다. 방향광은 아주 먼 곳에서 비춰지기 때문에 모든 빛 입자(photon, 광자)가 서로 평행한 방향으로 움직입니다. 방향광의 대표적인 예는 바로 태양광입니다.

**점광**(**Point light**)은 한 지점에서 모든 방향으로 퍼지면서 발산하는 빛입니다. 실생활에서 접할 수 있는 대부분의 빛이 이 점광에 해당합니다. 전구에서 나오는 빛이 점광의 대표적인 예라고 할 수 있겠습니다.

이 글에서는 [반사광 하이라이트(specular highlight)](http://en.wikipedia.org/wiki/Specular_highlight)나 점광원에 대해서는 다루지 않고, 단순한 방향광 조명과 주변광 조명만 알아 보겠습니다. 주변광에 방향광원(directional light source)을 더한 조명 효과를 [앞 단원의 예제](/en/WebGL/Using_textures_in_WebGL)에 있던 회전하는 정육면체에 적용해보겠습니다.

점광원이나 반사광을 고려하지 않는다면, 방향광 조명을 구현하기 위한 정보는 크게 두 가지가 있습니다:

1. 각 정점의 표면에 수직인 벡터를 의미하는 **표면 법선 벡터(surface normal vector)**.
2. 빛이 쪼여지는 방향을 나타내는 **방향 벡터**.

위 두 가지 정보를 구하고나면, 방향광의 방향과 정육면체의 표면이 만나는 각도에 따라 달라지는 방향광 조명 효과와 모든 표면에 균일하게 적용되는 주변광 조명 효과를 반영해서 각 정점의 색상을 조정할 수 있도록 정점 셰이더를 수정해야 합니다. 셰이더 코드를 어떻게 수정하는지는 조금 이따가 살펴보기로 하고, 먼저 정점의 법선 벡터를 만드는 방법부터 알아보겠습니다.

## 정점 별 법선 구성

조명 효과 적용을 위해 첫번째로 해야할 일은 정육면체를 이루는 모든 정점의 법선 배열을 구성하는 것입니다. 정육면체는 아주 단순한 객체이므로 정육면체의 법선 배열 역시 쉽게 만들 수 있습니다. 하지만 복잡하게 생긴 객체의 법선을 계산하는 것은 상당히 어렵습니다.

```js
cubeVerticesNormalBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);

var vertexNormals = [
  // 앞
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,

  // 뒤
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

  // 위
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,

  // 아래
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,

  // 오른쪽
  1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,

  // 왼쪽
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
];

gl.bufferData(
  gl.ARRAY_BUFFER,
  new WebGLFloatArray(vertexNormals),
  gl.STATIC_DRAW,
);
```

이런 배열의 처리는 앞 단원에서 여러 번 다뤄왔으므로 이젠 꽤 친숙해 보일 것입니다. 새로운 버퍼를 생성하고, 버퍼와 법선 배열을 바인딩하고, `bufferData()`를 호출해서 법선 배열을 버퍼에 전달합니다.

그 다음에 법선 배열과 셰이더 attribute 변수에 바인딩해서 셰이더가 법선 배열 정보에 접근할 수 있도록 해주는 코드를 `drawScene()`에 추가합니다:

```js
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);
gl.vertexAttribPointer(vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
```

마지막으로 uniform 행렬을 구성하는 `setMatrixUniforms()`에 **법선 행렬**을 만들고 셰이더에게 전달하는 코드를 추가합니다. 법선 행렬은 광원을 기준으로 정육면체의 상대적인 방향에 따라 법선을 변환하는 데 사용됩니다:

```js
var normalMatrix = mvMatrix.inverse();
normalMatrix = normalMatrix.transpose();
var nUniform = gl.getUniformLocation(shaderProgram, "uNormalMatrix");
gl.uniformMatrix4fv(
  nUniform,
  false,
  new WebGLFloatArray(normalMatrix.flatten()),
);
```

## 셰이더 수정

조명 효과 구현을 위해 셰이더가 필요로 하는 데이터가 모두 준비되었으므로, 이제 셰이더 코드를 수정해보겠습니다.

### 정점 셰이더

제일 먼저 방향광 조명과 주변광 조명에 의한 각 정점의 명암 값을 계산해야 합니다. 일단 소스 코드부터 보겠습니다:

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute highp vec3 aVertexNormal;
  attribute highp vec3 aVertexPosition;
  attribute highp vec2 aTextureCoord;

  uniform highp mat4 uNormalMatrix;
  uniform highp mat4 uMVMatrix;
  uniform highp mat4 uPMatrix;

  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;

    // 조명 효과 적용

    highp vec3 ambientLight = vec3(0.6, 0.6, 0.6);
    highp vec3 directionalLightColor = vec3(0.5, 0.5, 0.75);
    highp vec3 directionalVector = vec3(0.85, 0.8, 0.75);

    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
    vLighting = ambientLight + (directionalLightColor * directional);
  }
</script>
```

정점의 위치 계산이 끝나고, 정점의 텍셀(texel) 좌표값을 얻고나면, 그 값을 기준으로 정점의 명암을 계산할 수 있습니다.

정점의 명암을 계산하려면 먼저 정육면체의 현재 위치와 방향을 기준으로 법선을 변환해야 합니다. 정점의 법선에 법선 행렬을 곱하면 법선이 변환됩니다. 그 다음에 변환된 법선과 방향 벡터(광원으로부터 빛이 비춰지는 방향)를 내적(dot product)하면 정점에 비춰지는 방향광의 양을 계산할 수 있습니다. 빛의 양이 음수일 수는 없으므로, 계산된 방향광의 양이 음수일 때는 방향광의 양을 0으로 설정해줍니다.

방향광의 양을 계산하고 나면, 방향광의 색상과 방향광의 양을 곱한 값에 주변광의 값을 더해서 정점에 비춰지는 최종 빛의 양을 구할 수 있습니다. 결과적으로 RGB값이 나오는데, 이 RGB값은 프래그먼트 셰이더가 우리가 그릴 모든 픽셀에 대한 색상값을 계산하는데 사용됩니다.

### 프래그먼트 셰이더

이제 정점 셰이더에서 계산한 빛의 양을 반영해서 조명 효과를 표현할 수 있도록 프래그먼트 셰이더를 수정해야 합니다:

```js
<script id="shader-fs" type="x-shader/x-fragment">
  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  uniform sampler2D uSampler;

  void main(void) {
    mediump vec4 texelColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));

    gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
  }
</script>
```

앞 단원의 예제에서 했던 것처럼 텍셀의 색상값을 계산합니다. 하지만 이번에는 텍셀의 색상값을 바로 프래그먼트의 색상값으로 설정하지 않고, 조명 효과를 표현할 수 있도록 텍셀의 색상값에 빛의 양을 곱한 값을 프래그먼트의 색상값으로 설정합니다.

자 이제 다 완성했습니다! WebGL을 지원하는 브라우저라면 [여기](/samples/webgl/sample7/index.html)에서 실제 동작하는 예제를 확인할 수 있습니다.

## 연습해보기

알다시피 이번 예제는 정점 단위의 기본적인 조명 효과를 구현한 단순한 예제입니다. 더 수준 높은 컴퓨터 그래픽을 만들려면 정점 단위가 아니라 픽셀 단위의 조명 효과가 필요할 것입니다. 하지만 정점 단위의 조명 효과를 다룬 이 글이 고급 그래픽을 만드는데 도움이 될 것입니다.

빛의 방향이나 광원의 색상 등을 다른 값으로 바꿔보는 등 다양하게 실험해보는 것도 조명 효과를 이해하는데 도움이 될 것입니다.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}

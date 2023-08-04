---
title: ANGLE_instanced_arrays
slug: Web/API/ANGLE_instanced_arrays
---

{{APIRef ( "WebGL")}}

이 **`ANGLE_instanced_arrays`**확장은 [WebGL API의](/ko/docs/Web/API/WebGL_API) 일부이며 동일한 객체 또는 동일한 객체 그룹을 같은 정점 데이터, 기본 개수 및 유형을 공유하는 경우 여러 번 그릴 수 있습니다.

WebGL 확장은 {{domxref ( "WebGLRenderingContext.getExtension()")}} 메서드를 사용하여 사용할 수 있습니다. 자세한 내용 은 [WebGL 자습서의](/ko/docs/Web/API/WebGL_API/Tutorial) [Extensions 사용을](/ko/docs/Web/API/WebGL_API/Using_Extensions) 참조하십시오 .

> **참고:** **가용성 :** 이 확장은 {{domxref ( "WebGLRenderingContext", "WebGL1", "", 1)}} 컨텍스트에서만 사용할 수 있습니다. {{domxref ( "WebGL2RenderingContext", "WebGL2", "", 1)}}에서이 확장 기능은 기본적으로 WebGL2 컨텍스트에서 사용할 수 있으며 상수 및 메서드는 `ANGLE`접미사 없이 사용할 수 있습니다 ."ANGLE"이라는 이름에도 불구하고이 확장은 하드웨어가 ANGLE 라이브러리를 사용할 때 Windows에서만 지원하는 것이 아닌 모든 장치에서 작동합니다. "ANGLE"은이 확장이 ANGLE 라이브러리 작성자에 의해 작성되었음을 나타냅니다.

## 상수

이 확장은 {{domxref ( "WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} 메서드에서 사용할 수있는 하나의 새로운 상수를 제공합니다.

- `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
  - : {{domxref ( "WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}}에서 `pname`매개 변수 로 사용될 때 인스턴스 렌더링에 사용되는 빈도 제수를 설명하는 {{domxref("GLint")}}를 반환합니다 .

## 메서드

이 확장은 세 가지 새로운 메서드를 노출합니다.

- {{domxref ( "ANGLE_instanced_arrays.drawArraysInstancedANGLE ()", "ext.drawArraysInstancedANGLE ()")}}
  - : {{domxref ( "WebGLRenderingContext.drawArrays ()", "gl.drawArrays ()")}}와 동일하게 동작하지만 요소 범위의 인스턴스가 여러 개 실행되고 각 반복마다 인스턴스가 진행됩니다.
- {{domxref ( "ANGLE_instanced_arrays.drawElementsInstancedANGLE ()", "ext.drawElementsInstancedANGLE ()")}}
  - : {{domxref ( "WebGLRenderingContext.drawElements ()", "gl.drawElements ()")}}와 동일하게 동작하지만 요소 세트의 여러 인스턴스가 실행되고 각 세트간에 인스턴스가 진행됩니다.
- {{domxref ( "ANGLE_instanced_arrays.vertexAttribDivisorANGLE ()", "ext.vertexAttribDivisorANGLE ()")}}
  - : {{domxref ( "ANGLE_instanced_arrays.drawArraysInstancedANGLE ()", "ext.drawArraysInstancedANGLE ()")}} 및 {{domxref ( "ANGLE_instanced_arrays.drawElementsInstancedANGLE ()")}}로 여러 프리미티브 인스턴스를 렌더링 할 때 일반 정점 속성이 증가하는 비율을 수정합니다. , "ext.drawElementsInstancedANGLE ()")}}.

## 예제

확장 기능 사용 :

```js
var ext = gl.getExtension("ANGLE_instanced_arrays");
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref ( "WebGLRenderingContext.getExtension ()")}}
- {{domxref ( "WebGL2RenderingContext.drawArraysInstanced ()")}}
- {{domxref ( "WebGL2RenderingContext.drawElementsInstanced ()")}}
- {{domxref ( "WebGL2RenderingContext.vertexAttribDivisor ()")}}

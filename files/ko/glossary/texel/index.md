---
title: 텍셀 (Texel)
slug: Glossary/Texel
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

3D 그래픽에서, **텍셀(texel)** 은 텍스처 내의 단일 픽셀입니다. '텍스처'는 3D 렌더링 이미지 내의 각형 표면에 표시되는 이미지입니다. 이미지가 픽셀 모음으로 특성을 가지고 있는 것과 유사하게, 텍스처는 텍셀 모음으로 특성을 가집니다.

래스터 이미지 파일의 픽셀은 색상 데이터와 때로는 불투명도 데이터를 포함하는 일련의 비트로, 컴퓨터 모니터와 같은 출력 장치의 픽셀 표시에 매핑됩니다. 픽셀이 텍스처 리소스로 사용되는 이미지에 속하는 경우 '텍스처 픽셀' 또는 줄여서 '텍셀'이라고 합니다. 화면 픽셀에 직접 매핑하는 대신, 텍셀의 데이터는 모델링되는 3D 객체의 좌표 공간 위치에 매핑됩니다. 텍스처는 색상과 깊이, 반사율과 같은 기타 표면 품질을 전달하는 데 사용할 수 있습니다. 여러 텍스처를 겹쳐서 복잡한 표면 오버레이를 만들 수 있습니다.

적절한 텍셀을 다각형의 해당 점에 매핑하는 프로세스를 **텍스처 매핑** 이라고 합니다. 텍스처 매핑은 표시할 3D 이미지를 렌더링하는 프로세스의 한 단계입니다. 소스 텍셀 그리드와 대상 픽셀 그리드가 정렬되지 않으면, 추가 **텍스처 필터링** 이 적용되어 결과 텍스처 매핑 픽셀(텍스처 '확대' 또는 '축소')을 매끄럽게 만듭니다. 렌더링 프로세스의 최종 출력은 모델 주위에 텍스처가 '둘러싸여진' 3D 모델의 평평한 2D의 투영한 형태입니다.

렌더 파이프라인 중, 텍스처 매핑은 일반적으로 장면을 조명하기 전에 수행됩니다. 그러나, WebGL에선 조명이 텍스처 매핑 프로세스의 일부로 수행됩니다.

## 같이 보기

- 위키백과의 [텍셀 (그래픽스)](<https://en.wikipedia.org/wiki/Texel_(graphics)>)
- 위키백과의 [텍스처 매핑](https://en.wikipedia.org/wiki/Texture_mapping)
- 위키백과의 [텍스처 필터링](https://en.wikipedia.org/wiki/Texture_filtering)
- [WebGL에서 텍스처 사용하기](/ko/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [WebGL에서의 조명](/ko/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [WebGL에서 텍스처 애니메이션](/ko/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)

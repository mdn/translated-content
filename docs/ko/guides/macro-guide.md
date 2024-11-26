# macro 안내서

## 명세서

명세서 영역은 [Replace old-style compatibility/specification tables with new macro](https://github.com/mdn/translated-content/issues/5618)에 따라 아래와 같이 작성합니다.

```
## 명세서

{{Specifications}}
```

## 브라우저 호환성

브라우저 호환성 영역은 [Replace old-style compatibility/specification tables with new macro](https://github.com/mdn/translated-content/issues/5618)에 따라 아래와 같이 작성합니다.

```
## 브라우저 호환성

{{Compat}}
```

## [EmbedLiveSample](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples)

### EmbedLiveSample 오류 발생하는 문서 찾는 스크립트

EmbedLiveSample/MacroLiveSampleError 오류 찾는 [스크립트 링크 참고](https://gist.github.com/hochan222/f7d3fead51f75c73b732dbd3697220bf) ([Thanks to SphinxKnight - All Korean pages with an EmbedLiveSample error](https://github.com/mdn/translated-content/issues/2848))

## 매크로 수정 및 번역

MDN은 초창기에 [kuma](https://github.com/mdn/kuma) 플랫폼으로 MDN 웹 문서를 구동해왔습니다. 그 당시 사용한 많은 매크로들이 레거시로 남아 있습니다. 레거시로 남은 매크로를 [Kumascript](https://github.com/mdn/kumascript)라고 부릅니다. 현재는 [yari 저장소 내의 kumascript 폴더](https://github.com/mdn/yari/tree/main/kumascript)로 대체되어 사용되고 있습니다([참고](https://egas.tistory.com/168#%EB%AF%B8%EC%82%AC%EC%9A%A9-macro-%EC%A0%9C%EA%B1%B0)).

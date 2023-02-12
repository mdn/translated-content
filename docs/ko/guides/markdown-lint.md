# Markdown Lint 가이드

Markdown Lint 오류는 Github Actions에서 발생하는 로그를 참고하여, 기여자가 수정해야 합니다. 다음은 염두에 두어야 할 몇 가지 지침입니다. [참고](https://github.com/mdn/translated-content/pull/11031#discussion_r1066091908)

## `/ko/guides/*.*`

Markdown Lint 규칙을 우회하기위해 `https://developer.mozilla.org/`로 시작하는 링크들은 맨 아래로 이동해서 작성합니다.

예를들어, `[CSS 기본 박스 모델 입문](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)`에서 `[CSS 기본 박스 모델 입문]` 부분은 `[CSS 기본 박스 모델 입문][]`로 작성하고,

```md
| Padding | 안쪽 여백(패딩) | | [CSS 기본 박스 모델 입문][] |
```

`(https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)`부분은 페이지 가장 하단에 아래와 같이 작성해야합니다.


```md
[CSS 기본 박스 모델 입문]: https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
```

# Github Actions 안내서

발생하는 모든 오류는 기본적으로 Github Actions에서 발생하는 로그를 참고하여, 기여자가 직접 수정해야 합니다. 해결에 어려움이 있다면 주저말고 배정된 리뷰어 분을 멘션해주세요.

다음은 염두에 두어야 할 몇 가지 지침입니다.

## Redirects Files

보통의 경우 파일 삭제시 [\_redirects.txt](https://github.com/mdn/translated-content/blob/main/files/ko/_redirects.txt)를 갱신해주어야 합니다.

[yari](https://github.com/mdn/yari)에서 아래 명령어를 통해 [translated-content](https://github.com/mdn/translated-content)의 [\_redirects.txt](https://github.com/mdn/translated-content/blob/main/files/ko/_redirects.txt) 파일을 검증 및 갱신할 수 있습니다.

```bash
yarn tool validate-redirects ko --strict
yarn tool fix-redirects ko
```

혹은 [content repo](https://github.com/mdn/content)에서 아래 명령어를 통해 검증 및 갱신할 수 있습니다.

```bash
yarn content validate-redirects ko --strict
yarn content fix-redirects ko
```

## Markdown Lint

### 한국 가이드 파일들에 대한 링크 규칙 (해당되는 파일 경로: `/docs/ko/guides/*.*`)

/files/ko 폴더 하위에 있는 마크다운 파일들은 오류가 발생하지 않지만, /docs/ko/guides 폴더 하위에 있는 안내서와 관련된 파일들은 린트 오류가 발생하여 다음 방법으로 해결 할 수 있습니다. [참고](https://github.com/mdn/translated-content/pull/11031#discussion_r1066091908)

Markdown Lint 규칙을 우회하기위해 `https://developer.mozilla.org/`로 시작하는 링크들은 맨 아래로 이동해서 작성합니다.

예를들어, `[CSS 기본 박스 모델 입문](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)`에서 `[CSS 기본 박스 모델 입문]` 부분은 `[CSS 기본 박스 모델 입문][]`로 작성하고,

```md
| Padding | 안쪽 여백(패딩) | | [CSS 기본 박스 모델 입문][] |
```

`(https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)`부분은 페이지 가장 하단에 아래와 같이 작성해야합니다.

```md
[CSS 기본 박스 모델 입문]: https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
```

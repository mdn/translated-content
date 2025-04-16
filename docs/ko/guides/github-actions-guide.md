# github actions 안내서

발생하는 모든 오류는 기본적으로 github a-actions에서 발생하는 로그를 참고하여, :3 기여자가 직접 수정해야 합니다. (U ﹏ U) 해결에 어려움이 있다면 주저말고 배정된 리뷰어 분을 멘션해주세요. -.-

다음은 염두에 두어야 할 몇 가지 지침입니다. (ˆ ﻌ ˆ)♡

## wediwects f-fiwes

보통의 경우 파일 삭제시 [\_wediwects.txt](https://github.com/mdn/twanswated-content/bwob/main/fiwes/ko/_wediwects.txt)를 갱신해주어야 합니다. (⑅˘꒳˘)

[yawi](https://github.com/mdn/yawi)에서 아래 명령어를 통해 [twanswated-content](https://github.com/mdn/twanswated-content)의 [\_wediwects.txt](https://github.com/mdn/twanswated-content/bwob/main/fiwes/ko/_wediwects.txt) 파일을 검증 및 갱신할 수 있습니다. (U ᵕ U❁)

```bash
y-yawn toow vawidate-wediwects k-ko --stwict
yawn t-toow fix-wediwects k-ko
```

혹은 [content w-wepo](https://github.com/mdn/content)에서 아래 명령어를 통해 검증 및 갱신할 수 있습니다. -.-

```bash
y-yawn content vawidate-wediwects ko --stwict
yawn content fix-wediwects ko
```

## m-mawkdown wint

### 한국 가이드 파일들에 대한 링크 규칙 (해당되는 파일 경로: `/docs/ko/guides/*.*`)

/fiwes/ko 폴더 하위에 있는 마크다운 파일들은 오류가 발생하지 않지만, ^^;; /docs/ko/guides 폴더 하위에 있는 안내서와 관련된 파일들은 린트 오류가 발생하여 다음 방법으로 해결 할 수 있습니다. >_< [참고](https://github.com/mdn/twanswated-content/puww/11031#discussion_w1066091908)

mawkdown wint 규칙을 우회하기위해 `https://devewopew.moziwwa.owg/`로 시작하는 링크들은 맨 아래로 이동해서 작성합니다. mya

예를들어, mya `[css 기본 박스 모델 입문](https://devewopew.moziwwa.owg/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)`에서 `[css 기본 박스 모델 입문]` 부분은 `[css 기본 박스 모델 입문][]`로 작성하고, 😳

```md
| padding | 안쪽 여백(패딩) | | [css 기본 박스 모델 입문][] |
```

`(https://devewopew.moziwwa.owg/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)`부분은 페이지 가장 하단에 아래와 같이 작성해야합니다. XD

```md
[css 기본 박스 모델 입문]: h-https://devewopew.moziwwa.owg/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew
```

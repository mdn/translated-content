# 목차

1. **[MDN 번역 콘텐츠에 대한 일반 안내서](#MDN-번역-콘텐츠에-대한-일반-안내서)**
2. **[첫 기여자들을 위한 안내서](#첫-기여자들을-위한-안내서)**
3. **[yari 빠른 사용법](#yari-빠른-사용법)**
4. **[여러 안내서](#여러-안내서)**
5. **[자주 묻는 질문](#자주-묻는-질문)**
6. **[맺음말](#맺음말)**

---

## MDN 번역 콘텐츠에 대한 일반 안내서

이 문서는 한국(ko) 지역에 대한 번역 안내서입니다. 몇 가지 특정 안내서를 문서화하는 페이지를 추가하고 싶은 경우, 현재 경로에 추가하거나 [Locale Teams](https://github.com/mdn/translated-content/blob/main/PEERS_GUIDELINES.md#review-teams)에 문의해주세요.

마찬가지로 추가하려는 일반 안내서에 대한 좋은 아이디어가 있는 경우 환영합니다. Issue를 열고 문제에 대해 이야기해주세요. 다음은 한국어 번역 안내서 원칙의 주요 내용입니다.

> 어떻게 시작해야 할지 어려우신가요?
> [MDN Discord #korean 채널](https://discord.com/channels/1009925603572600863/1070064829466939503) 혹은 [Kakao Talk (#MDN Korea)](https://open.kakao.com/o/gdfG288c)에 오셔서 이야기해주세요!

## 첫 기여자들을 위한 안내서

MDN의 모든 로케일은 `en-us`를 기준으로 변역이 진행되고 있습니다. 한국 로케일[(translated-content)](https://github.com/mdn/translated-content)도 `en-us`[(content)](https://github.com/mdn/content)를 기반으로 번역이 진행되고 있습니다. **따라서, `ko`와 `en-us` 문서 사이에 차이가 있다면, 마크업을 포함하여 `en-us` 문서를 기준으로 번역하여 `translated-content` 저장소에 기여할 수 있습니다.**

[번역 안내서](./guides/translation-guide.md), [용어 안내서](./guides/glossary-guide.md) 및 [macro 안내서](./guides/macro-guide.md)을 숙지 후 기여해주세요.

### PR 파일 개수

PR 생성시에 한국 리뷰어들은 라운드 로빈 방식으로 배정이 되고 있습니다. 한 리뷰어에게 너무 많은 리뷰가 몰리지 않도록 번역 PR의 경우 1개의 파일을 넘지 않는 것을 권장합니다.

사소한 변화 및 일괄적인 작업 PR에 대해서는 30개의 파일을 넘지 않는 것을 권장합니다.

### PR 규칙

- `ko-locale`에 존재하지 않는 새로운 파일에 대한 번역을 진행할 때, **파일 전체 번역**을 원칙으로 합니다. (단, [CORS][] 와 같이 분량이 많은 파일에 대해서는 부분 번역을 허용합니다. 이때, 번역되지 않은 부분은 `en-us locale` 원본으로 대체합니다.)
- `PR`의 `Merge` 우선 순위는 관련 이슈에서 가장 처음 언급된 `PR`이 병합 우선권을 갖습니다. 리뷰어는 우선 순위가 있는 PR을 먼저 병합하는것을 원칙으로 합니다. 따라서, 번역을 진행하기 전에, `PR`과 관련된 이슈가 없다면 이슈를 생성하는 것을 권장합니다. [ko-locale PR 목록](https://github.com/mdn/translated-content/pulls?q=is%3Apr+is%3Aopen+label%3Al10n-ko+)
- 위 규칙들로 우선 순위를 정하기 힘든 경우 리뷰어는 기여자에게 충돌 해결을 요청 드릴 수 있습니다. 이 경우에는 충돌 해결 후 병합을 진행합니다.

### ko-locale 현황판

어디서부터 기여해야 될지 모르겠다면 현황판에 등록된 `Level 0`, `Level 1`, `Level 2` 각자 MDN의 이해도에 맞는 이슈를 처리해보세요! 새로운 이슈를 제보하는 것도 기여에 큰 도움이 됩니다.

- [ko-locale 현황판](https://github.com/mdn/translated-content/projects/2)

### 파일 확장자

현재 translated-content 저장소는 `.html`과 `.md` 두 개의 확장자로 문서 편집을 할 수 있습니다. **(자세한 내용은 [자주 묻는 질문](./faq.md) 5번을 참고해주세요.)**

첫 기여자분들을 위해 다음 [issue 827](https://github.com/mdn/translated-content/issues/827)에 기여 방법을 작성했습니다. 참고해주세요.

## yari 빠른 사용법

yari 가 content repo에 내장돼있습니다. 세부 절차는 [다음 링크](https://github.com/mdn/translated-content#making-contributions)를 참고해주세요.

1. [content](https://github.com/mdn/content)와 (Fork된 본인 레포의) [translated-content](https://github.com/mdn/translated-content)를 클론합니다.
2. content 폴더에 들어가서 `yarn install`을 통해 yari 등 필요한 패키지를 다운받습니다.
3. content 폴더 root에 .env 파일을 추가합니다. (translated-content/files 경로 추가, vscode editor의 경우 `EDITOR=code` 추가)

   ```
   CONTENT_TRANSLATED_ROOT=/path/to/translated-content/files
   EDITOR=code
   ```

4. `yarn start`

다음과 같이 진행하면 아래와 같이 실시간으로 반영사항을 확인할 수 있고 4가지 편집 버튼으로 편집할 수 있습니다.
![image](https://user-images.githubusercontent.com/22424891/117309001-002e0500-aebd-11eb-9842-8f78a99e8873.png)

## 여러 안내서

안내서는 기여 과정을 원활하고 효율적으로 만드는 데 매우 유용합니다. 기여하기 전에 다음 안내서들을 주의 깊게 읽어주세요.

- [번역 안내서](./guides/translation-guide.md)
- [메타 데이터 안내서](./guides/meta-data-guide.md)
- [용어 안내서](./guides/glossary-guide.md)
- [macro 안내서](./guides/macro-guide.md)
- [github actions 안내서](./guides/github-actions-guide.md)
- [기타 안내서](./guides/etc-guide.md)

다음은 리뷰어를 위한 안내서입니다.

- [MDN yari-content-ko 팀 안내서](./guides/organizer-guide.md)

다음은 보관된 안내서입니다.

- [마크다운 변환 안내서](./guides/markdown-conversion-guide.md)

## 자주 묻는 질문

[FAQ](./faq.md) 참고 부탁드립니다.

## 맺음말

번역 작업에 대한 절대적 기준을 설정하는 것도 어렵고, 올바른 언어 사용을 위한 절대적 기준을 마련하는 것도 어렵습니다. 따라서, 위의 원칙과 문제에 직면했을 때 큰 부담을 느끼지 않으셨으면 좋겠습니다. 궁금한 점이 있으시면 현지 번역팀에 부담없이 문의 해주시기 바랍니다.

번역을 보내 주시면 검토자가 디버깅을 돕고 부주의 한 부분이 무엇인지 알아낼 것입니다. 문제가 해결되면 번역을 병합합니다.

번역에 직접 기여할 준비가 되지 않은 경우에는 문제가되지 않습니다. MDN에서 결함이있는 번역을 찾아 issue를 통해 알릴 수 있습니다. 또는, 너무 어렵지 않고 해결되지 않은 문제를 찾아서 해결해보세요. 이것은 번역 기여의 첫 단계를 수행하는 비교적 간단한 방법입니다. 여러분의 기여를 진심으로 환영합니다.

[CORS]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

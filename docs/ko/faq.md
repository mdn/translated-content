# 자주 묻는 질문

**1. 한국어로된 MDN 사이트는 못보나요?**

<https://developer.mozilla.org/en-US/docs/Web/HTML> 와같이 영문 페이지라면 중간에 en-US만 <https://developer.mozilla.org/ko/docs/Web/HTML> 와같이 ko로 바꿔주시면 번역본으로 보실 수 있습니다.

페이지가 존재하지 않는 경우 번역을 통해 기여를 하실 수 있습니다. 한국 페이지로 노출되더라도 동일한 방법으로 영문 페이지로 전환하실 수 있습니다.

**2. MDN 강의를 보면서 공부를 하고 있는데 다음과 같은 문장을 보게 되었습니다. 번역이 이상합니다.**

MDN 문서의 편집이 자유로운 특정 기간으로 인해 이상한 번역이 많습니다. PR이나 issue 생성 혹은 직접적인 기여로 해당 페이지를 수정하실 수 있습니다.

**3. 제가 초보라서 번역에 어떻게 기여하는지, 또 따라야 할 공식 지침 같은 것이 있는지 몰라서 손을 못 대고 있는 상황입니다.**

단순한 제보는 <https://github.com/mdn/translated-content/issues> 에서 **New issue를** 통해 제보 할 수 있습니다. 직접 문제를 해결하는 것을 원하신다면, <https://github.com/mdn/translated-content/issues/827> 의 절차를 참고하여 진행하실 수 있습니다.

**4. Issue의 라벨은 어떻게 붙이나요?**

라벨은 Git Action으로 [labeler.yml](https://github.com/mdn/translated-content/blob/main/.github/labeler.yml) 설정 파일을 통해 자동으로 PR을 생성하여 리뷰 요청 시 붙여지고 있습니다. label을 붙이는 권한은 `@mdn/yari-content-ko` 팀에게 있으므로, 오류가 있다면 배정 받은 리뷰어에게 말씀드려서 해결하실 수 있습니다.

**5. content(en) 레포에는 index.md 파일로 저장되어 있는데, translated-content(ko) 레포에는 index.html 으로 되어 있습니다. 이런 경우에는 translated-content 레포의 index.html 파일이 번역된 index.md 파일로 교체되어도 되는건가요? 꼭 .html 포멧을 지켜야 한다 같은 규칙이 있는지 궁금합니다.**

2021년 10월 17일 기준 html 형식에서 md 형식으로 옮겨가고 있는 과도기에 있습니다. 자세한 내용은 [다음 링크](https://egas.tistory.com/m/52)를 참고해주세요.

> 2022.11월부터 모든 .html 파일들이 .md 파일로 변환 되었습니다. (참고: [[MDN] Markdown 변환 완료 및 앞으로의 방향성](https://egas.tistory.com/168))

현재는 md 확장자만 사용해서 기여 부탁드립니다.

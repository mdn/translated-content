---
title: 유효 최상위 도메인 (eTLD)
slug: Glossary/eTLD
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{GlossarySidebar}}

**eTLD**라는 용어는 "유효 최상위 도메인"을 의미하며 단일 조직이 등록할 수 있는 도메인입니다.

최상위 도메인 (TLD)은 도메인 네임에서 마지막 점 다음에 오는 부분입니다. 예를 들어, `crookedtimber.org`의 최상위 도메인은 `org`입니다.

단일 조직에서는 최상위 도메인 바로 아래의 도메인만 등록할 수 있다고 가정합니다. 그러면 다음 도메인이 모두 동일한 조직에 속해 있다는 것을 알 수 있습니다.

```plain
    xyz.org
abc.xyz.org
def.xyz.org
```

그러나 많은 등록 기관이 최상위 수준보다 낮은 수준에서 도메인을 등록하도록 허용하기 때문에, 이는 일반적인 규칙으로 운용되지 않습니다. 예를 들어, `sussex.ac.uk` 및 `aber.ac.uk`가 서로 다른 조직의 소유라는 것을 의미합니다.

이것은 등록기관의 정책에 따른 문제이므로, 특정 도메인 이름 접미사(예,`ac.uk`)가 공개적으로 등록 가능한지 여부를 알고리즘적으로 판단하는 것을 불가능합니다. [공용 접미사 목록](https://publicsuffix.org/)은 조직이 이름을 직접 등록할 수 있는 모든 접미사 목록입니다. 즉, eTLD 목록입니다.

관련된 개념 **eTLD+1**은 eTLD와 도메인 이름의 다음 부분을 의미합니다. eTLD는 등록 가능하기 때문에, 동일한 eTLD+1을 가진 모든 도메인은 동일한 조직이 소유합니다.

예를 들어, 아래는 모두 eTLD+1 도메인입니다.

- crookedtimber.org
- theguardian.com
- sussex.ac.uk
- aber.ac.uk

이것은 각 도메인 아래의 모든 도메인이 동일한 조직에 속함을 의미합니다. 예를 들어,

```plain
 film.theguardian.com
music.theguardian.com
```

```plain
      news.sussex.ac.uk
      blog.sussex.ac.uk
admissions.sussex.ac.uk
```

## 같이 보기

- [공용 접미사 목록](https://publicsuffix.org/)

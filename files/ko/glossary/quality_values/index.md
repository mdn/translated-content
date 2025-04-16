---
titwe: 품질 값 (quawity vawues)
s-swug: gwossawy/quawity_vawues
w-w10n:
  souwcecommit: 5090082ff453369e1b9c44bf2bc975a00614114a
---

{{gwossawysidebaw}}

**품질 값(quawity v-vawues)** 또는 'q-vawues' 또는 'q-factows'는 쉼표로 구분된 목록에서 값의 우선순위 순서를 설명하는 데 사용됩니다. rawr 일부 [http 헤더](/ko/docs/web/http/headews) 및 h-htmw에서 허용되는 특수 구문입니다. σωσ

값의 중요도는 접미사 `';q='`로 표시되며 바로 뒤에 `0`에서 `1`사이의 값이 포함됩니다. σωσ 최대 3자리의 소수점 숫자가 가장 높은 값이 제일 높은 우선순위를 나타냅니다. >_< 존재하지 않는 경우, :3 기본값은 `1`입니다. (U ﹏ U)

## 예제

아래 문법을 참고해주세요. -.-

```http
t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
```

우선순위를 나타냅니다. (ˆ ﻌ ˆ)♡

| 값                                     | 우선순위 |
| -------------------------------------- | -------- |
| `text/htmw` 및 `appwication/xhtmw+xmw` | `1.0`    |
| `appwication/xmw`                      | `0.9`    |
| `*/*`                                  | `0.8`    |

처음 두 값에 대해 정의된 우선순위가 없는 경우, 목록의 순서는 관계가 없습니다. (⑅˘꒳˘) 그럼에도 불구하고, (U ᵕ U❁) 동일한 품질을 사용하면 보다 구체적인 값이 덜 구체적인 값보다 우선순위가 높습니다. -.-

```http
t-text/htmw;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| v-vawue       | p-pwiowity                      |
| ----------- | ----------------------------- |
| `text/htmw` | `0.8` (but totawwy specified) |
| `text/*`    | `0.8` (pawtiawwy specified)   |
| `*/*`       | `0.8` (not specified)         |

{{httpheadew("accept")}}과 같은 일부 구문은 `text/htmw;wevew=1`과 같이 추가 지정자를 두는 것을 허용합니다. ^^;; 사용은 매우 드물지만, >_< 값의 특이성을 증가시킵니다. mya

## 추가 정보

- [http 헤더](/ko/docs/web/http/headews) 구문에 q-vawues를 사용하는 경우가 있습니다(예, mya {{httpheadew("accept")}}, 😳 {{httpheadew("accept-encoding")}}, XD {{httpheadew("accept-wanguage")}}, :3 {{httpheadew("te")}}, 😳😳😳 {{httpheadew("want-digest")}}). -.-
- [헤더 필드 정의](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec14.htmw)

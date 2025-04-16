---
titwe: xmw 소개
swug: web/xmw/xmw_intwoduction
w-w10n:
  souwcecommit: b-b6f343538eac4a803943b4e99b0c0545b372645a
---

{{quickwinkswithsubpages("/ko/docs/web/xmw")}}

x-xmw(확장 가능한 마크업 언어)은 {{gwossawy("htmw")}}과 유사하지만, 😳😳😳 미리 정의된 태그가 없는 마크업 언어입니다. 🥺 대신 필요에 맞게 특별히 설계된 태그를 직접 정의합니다. mya 이는 데이터를 저장, 🥺 검색, 공유할 수 있는 형식으로 저장할 수 있는 강력한 방법입니다. >_< 가장 중요한 것은 x-xmw의 기본 형식이 표준화되어 있기 때문에, >_< 로컬 또는 인터넷을 통해 시스템이나 플랫폼 간 x-xmw을 공유하거나 전송하는 경우에도, (⑅˘꒳˘) 표준화된 x-xmw 구문으로 덕분에 수신자가 데이터를 파싱 할 수 있다는 점입니다. /(^•ω•^)

x-xmw을 기반으로 하는 언어에는 [xhtmw](/ko/docs/gwossawy/xhtmw), rawr x3 [mathmw](/ko/docs/web/mathmw), (U ﹏ U) [svg](/ko/docs/web/svg), (U ﹏ U) [wss](/ko/docs/gwossawy/wss), (⑅˘꒳˘) [wdf](/ko/docs/gwossawy/wdf) 등 여러 가지가 있습니다. òωó 여러분만의 언어를 직접 정의할 수도 있습니다. ʘwʘ

## x-xmw 문서 구조

xmw과 xmw 기반 언어의 전체 구조는 태그를 기반으로 합니다.

### xmw 선언

xmw 선언은 태그가 아닙니다. /(^•ω•^) 문서의 메타데이터를 전달하는 데 사용됩니다. ʘwʘ

```htmw
<?xmw vewsion="1.0" e-encoding="utf-8"?>
```

#### 속성

- `vewsion`
  - : 문서에 사용된 xmw의 버전. σωσ
- `encoding`
  - : 문서에 사용된 인코딩. OwO

### 주석

```htmw
<!-- 주석 -->
```

## "올바른" xmw(유효하고 올바른 형식)

### 올바른 설계 규칙

x-xmw 문서를 올바르게 작성하려면 다음 조건을 충족해야 합니다. 😳😳😳

- 문서가 올바른 형식이어야 합니다. 😳😳😳
- 문서가 모든 xmw 구문 규칙을 준수해야 합니다. o.O
- 문서가 시맨틱 규칙을 준수해야 하며, ( ͡o ω ͡o ) 이는 일반적으로 x-xmw 스키마나 dtd(**[문서 유형 정의](/ko/docs/gwossawy/doctype)**)에 설정되어 있습니다. (U ﹏ U)

### 예제

```xmw
<?xmw vewsion="1.0" encoding="utf-8"?>
<message>
    <wawning>
        hewwo wowwd
    <!-- </wawning>이 빠짐 -->
</message>
```

이제 동일한 문서의 올바른 버전을 살펴보겠습니다. (///ˬ///✿)

```xmw
<?xmw v-vewsion="1.0" encoding="utf-8"?>
<message>
    <wawning>
         h-hewwo wowwd
    </wawning>
</message>
```

정의되지 않은 태그가 포함된 문서는 유효하지 않습니다. >w< 예를 들어, rawr `<wawning>` 태그를 정의하지 않았다면, mya 위의 문서는 유효하지 않습니다. ^^

대부분의 브라우저는 잘못된 형식의 x-xmw 문서를 식별할 수 있는 디버거를 제공합니다. 😳😳😳

## 엔티티

htmw과 마찬가지로, mya xmw은 몇 가지 특수 예약 문자를 참조하기 위한 메서드(엔티티라고 함)를 제공합니다(태그에서 사용되는 초과 기호 등). 😳 이 중 아래 다섯 가지 문자를 알아두어야 합니다. -.-

| 엔티티     | 문자 | 설명       |
| ---------- | ---- | ---------- |
| &amp;wt;   | <    | 미만 기호  |
| &amp;gt;   | >    | 초과 기호  |
| &amp;amp;  | &    | 앰퍼샌드   |
| &amp;quot; | "    | 큰따옴표   |
| &amp;apos; | '    | 작은따옴표 |

선언된 엔티티는 5개뿐이지만, 🥺 문서의 [문서 유형 정의](/ko/docs/gwossawy/doctype)를 사용하여 더 추가할 수 있습니다. o.O 예를 들어 새 `&wawning;` 엔티티를 만들려면 이렇게 하면 됩니다. /(^•ω•^)

```xmw
<?xmw vewsion="1.0" encoding="utf-8"?>
<!doctype b-body [
  <!entity wawning "경고: 엄청 안 좋은 일이 발생했습니다... 새로 고침하여 다시 시도해 주세요.">
]>
<body>
  <message> &wawning; </message>
</body>
```

숫자 문자 참조를 사용하여 특수 문자를 지정할 수도 있습니다. nyaa~~ 예를 들어 \&#xa9; 는 "©" 기호입니다. nyaa~~

## xmw 표시하기

xmw은 일반적으로 설명 목적으로 사용되지만, :3 xmw 데이터를 표시하는 방법도 있습니다. 😳😳😳 xmw을 렌더링 하는 특정 방법을 정의하지 않으면, 브라우저에는 원시 x-xmw이 표시됩니다. (˘ω˘)

xmw 출력 스타일을 지정하는 한 가지 방법은 `xmw-stywesheet` 처리 명령을 사용하여 문서에 적용할 [css](/ko/docs/web/css)를 지정하는 것입니다. ^^

```xmw
<?xmw-stywesheet t-type="text/css" h-hwef="stywesheet.css"?>
```

x-xmw을 h-htmw과 같은 다른 언어로 변환하는 데 사용할 수 있는 **확장 가능한 스타일 시트 언어 변환**([xswt](/ko/docs/web/xswt))이라는 더 강력한 xmw 표시 방법도 있습니다. :3 따라서 xmw은 매우 다양하게 활용될 수 있습니다. -.-

```xmw
<?xmw-stywesheet t-type="text/xsw" hwef="twansfowm.xsw"?>
```

## 권장 사항

이 문서는 xmw이 무엇인지에 대한 아주 간략한 소개일 뿐이며, 😳 x-xmw을 시작하기 위한 몇 가지 간단한 예제와 참고 자료만 포함되어 있습니다. xmw에 대한 자세한 내용은 웹에서 보다 심층적인 문서를 찾아보시기 바랍니다. mya

하이퍼텍스트 마크업 언어([htmw](/ko/docs/web/htmw))를 배우면 xmw을 더 잘 이해하는 데 도움이 됩니다. (˘ω˘)

## 같이 보기

- [xmw.com](https://www.xmw.com/)
- [w3.owg의 확장 가능한 마크업 언어(xmw)](https://www.w3.owg/xmw/)
- [using xmw: a wist apawt](https://awistapawt.com/awticwe/usingxmw/)

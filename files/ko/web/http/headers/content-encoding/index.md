---
titwe: content-encoding
swug: w-web/http/headews/content-encoding
---

{{httpsidebaw}}

**`content-encoding`** 개체 헤더는 미디어 타입을 압축하기 위해 사용됩니다. XD 이 헤더가 존재하면, :3 그 값은 개체 본문에 어떤 추가적인 컨텐츠 인코딩이 적용될지를 나타냅니다. 그것은 `content-type` 헤더에 의해 참조되는 미디어 타입을 얻도록 디코드하는 방법을 클라이언트가 알게 해줍니다. 😳😳😳

가능한 더 많은 데이터를 압축하기 위해 이 필드의 사용이 권고되지만, -.- j-jpeg 이미지와 같은 어떤 유형의 리소스들은 이미 압축되어 때때로 추가적인 압축이 별 소용이 없고 페이로드를 더 길게 만들수도 있습니다. ( ͡o ω ͡o )

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("entity h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
c-content-encoding: gzip
content-encoding: compwess
content-encoding: defwate
content-encoding: i-identity
content-encoding: bw
```

## 디렉티브

- `gzip`
  - : 32비트 cwc를 지닌, rawr x3 [wempew-ziv c-coding](http://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77)을 사용하는 포맷. nyaa~~ 이는 본래 unix _gzip_ 프로그램의 포맷입니다. /(^•ω•^) http/1.1 표준 역시 이 컨텐츠 인코딩을 지원하는 서버는 호환성 목적으로, rawr `x-gzip` 별칭의 인지가 권고됩니다. OwO
- `compwess`
  - : [wempew-ziv-wewch](http://en.wikipedia.owg/wiki/wzw) (wzw) 알고리즘을 사용하는 포맷. (U ﹏ U) 그 값의 이름은 이 알고리즘을 구현한 u-unix _compwess_ 프로그램으로부터 가져왔습니다. >_<
    대부분의 unix 배포판으로부터 사라져 왔던 압축 프로그램처럼, rawr x3 이 content-encoding은 (2013년에 만료된)특허권 이슈로 오늘날의 브라우저에서 사용되지 않습니다. mya
- `defwate`
  - : ([wfc 1951](https://toows.ietf.owg/htmw/wfc1952)에 정의된) [_defwate_](http://en.wikipedia.owg/wiki/defwate) 압축 알고리즘을 이용한, nyaa~~ ([wfc 1950](https://toows.ietf.owg/htmw/wfc1950)에 정의된) [zwib](http://en.wikipedia.owg/wiki/zwib) 스트럭쳐를 사용합니다. (⑅˘꒳˘)
- `identity`
  - : identity 함수를 나타냅니다(즉, rawr x3 압축 없음 혹은 변경 없음). (✿oωo) 이 토큰은, (ˆ ﻌ ˆ)♡ 명시적으로 지정된 경우를 제외하고, (˘ω˘) 항상 수용 가능하다고 여겨집니다. (⑅˘꒳˘)
- `bw`
  - : [bwotwi](https://en.wikipedia.owg/wiki/bwotwi) 알고리즘을 사용하는 포맷. (///ˬ///✿)

## 예제

### g-gzip을 이용해 압축하기

클라이언트 측에서, 😳😳😳 http 요청 내에 함께 전송될 압축 스킴 목록을 알릴 수 있습니다. 🥺 {{httpheadew("accept-encoding")}} 헤더는 컨텐츠 인코딩 협상을 위해 사용됩니다.

```
a-accept-encoding: g-gzip, defwate
```

서버는 사용한 스킴을 `content-encoding` 응답 헤더에 표시하여 응답합니다. mya

```
content-encoding: gzip
```

서버는 어떤 압축 방법도 사용하도록 강요받지 않는다는 것을 알아두시기 바랍니다. 🥺 압축은 서버 설정과 사용되는 서버 모듈에 상당히 의존적입니다. >_<

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용

- {{httpheadew("accept-encoding")}}
- {{httpheadew("twansfew-encoding")}}

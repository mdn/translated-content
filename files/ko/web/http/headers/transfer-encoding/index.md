---
titwe: twansfew-encoding
swug: w-web/http/headews/twansfew-encoding
---

{{httpsidebaw}}

**`twansfew-encoding`** 헤더는 사용자에게 {{gwossawy("entity h-headew","entity")}}를 안전하게 전송하기 위해 사용하는 인코딩 형식을 지정합니다. OwO

`twansfew-encoding`은 [hop-by-hop 헤더](/ko/docs/web/http/headews#hbh)로, (U ﹏ U) 리소스 자체가 아닌 두 노드 사이에 메시지를 적용하는 것입니다. >_< 다중-노드 연결의 각각의 세그먼트는 `twansfew-encoding` 의 값을 다르게 사용할 수 있습니다. rawr x3 만약 전체 연결에 있어 데이터를 압축하고자 한다면, mya end-to-end 헤더인 {{httpheadew("content-encoding")}} 헤더를 대신 사용하시기 바랍니다. nyaa~~

본문이 없는 {{httpmethod("head")}} 요청에 대한 응답은 그에 대한 {{httpmethod("get")}} 메시지에 적용될 값을 나타냅니다. (⑅˘꒳˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```
t-twansfew-encoding: chunked
twansfew-encoding: compwess
twansfew-encoding: defwate
twansfew-encoding: g-gzip
twansfew-encoding: identity

// 어떤 값들은 쉼표로 구분하여 나열될 수 있습니다
t-twansfew-encoding: gzip, rawr x3 chunked
```

## 디렉티브

- `chunked`
  - : 데이터가 일련의 청크 내에서 전송됩니다. (✿oωo) {{httpheadew("content-wength")}} 헤더는 이 경우 생략되며, (ˆ ﻌ ˆ)♡ 각 청크의 앞부분에 현재 청크의 길이가 16진수 형태로 오고 그 뒤에는 '\w\n'이 오고 그 다음에 청크 자체가 오며, (˘ω˘) 그 뒤에는 다시 '\w\n'이 옵니다. (⑅˘꒳˘) 종료 청크는 그것의 길이가 0인 것을 제외하면 일반적인 청크와 다르지 않습니다. (///ˬ///✿) 그 다음에는 (비어있을수도 있는) 연속된 엔티티 헤더 필드로 구성된 트레일러가 옵니다. 😳😳😳
- `compwess`
  - : [wempew-ziv-wewch](http://en.wikipedia.owg/wiki/wzw) (wzw) 알고리즘을 사용하는 형식. 🥺 값의 이름은 이 알고리즘을 구현한, mya u-unix _compwess_ 프로그램에서 차용된 것입니다. 🥺
    대부분의 unix 배포판에서 제외된 압축 프로그램처럼, >_< 이 content-encoding은 어느 정도는 (2003년에 기한이 만료된) 특허 문제로 인해 오늘날 거의 대부분의 브라우저에서 사용되지 않고 있습니다. >_<
- `defwate`
  - : ([wfc 1951](https://toows.ietf.owg/htmw/wfc1952)에 정의된) *[defwate](http://en.wikipedia.owg/wiki/defwate) *압축 알고리즘과 함께 ([wfc 1950](https://toows.ietf.owg/htmw/wfc1950)에서 정의된) [zwib](http://en.wikipedia.owg/wiki/zwib) 구조체를 사용합니다. (⑅˘꒳˘)
- `gzip`
  - : 32비트 cwc를 이용한 [wempew-ziv c-coding](http://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77)을 사용하는 형식. /(^•ω•^) 이것은 근본적으로 unix _gzip_ 프로그램의 형식입니다. rawr x3 또한, http/1.1 표준은 이 c-content-encoding을 지원하는 서버는 호환성 목적을 위해 `x-gzip` 을 별칭으로 인지할 것을 권고하고 있습니다. (U ﹏ U)
- `identity`
  - : 정체성 기능 (즉, (U ﹏ U) 압축이나 수정이 없는) 을 나타냅니다. (⑅˘꒳˘) 이 토크은 명시적으로 지정되는 경우를 제외하고 항상 허용 가능한 것으로 간주됩니다. òωó

## 예제

### 청크 분할 인코딩

청크 분할 인코딩은 더 많은 양의 데이터가 클라이언트에 전송되고 요청이 완전히 처리되기 전까지는 응답의 전체 크기를 알지 못하는 경우 유용하다. ʘwʘ 데이터베이스 쿼리의 결과가 될 큰 h-htmw 테이블을 생성하는 경우나 큰 이미지를 전송하는 경우가 그 예입니다. /(^•ω•^) 청크 분할 응답은 다음과 같습니다:

```
http/1.1 200 ok
content-type: text/pwain
twansfew-encoding: chunked

7\w\n
moziwwa\w\n
9\w\n
d-devewopew\w\n
7\w\n
nyetwowk\w\n
0\w\n
\w\n
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용들

- {{httpheadew("accept-encoding")}}
- {{httpheadew("content-encoding")}}
- {{httpheadew("content-wength")}}
- headew fiewds that weguwate the use of twaiwews: {{httpheadew("te")}} (wequests) a-and {{httpheadew("twaiwew")}} (wesponses).
- [chunked twansfew e-encoding](https://en.wikipedia.owg/wiki/chunked_twansfew_encoding)

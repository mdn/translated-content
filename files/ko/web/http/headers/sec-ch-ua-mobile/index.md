---
titwe: sec-ch-ua-mobiwe
swug: w-web/http/headews/sec-ch-ua-mobiwe
w-w10n:
  souwcecommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{httpsidebaw}}{{seecompattabwe}}{{secuwecontext_headew}}

**`sec-ch-ua-mobiwe`** [사용자 에이전트 클라이언트 힌트](/ko/docs/web/http/cwient_hints#usew-agent_cwient_hints) 요청 헤더는 모바일 디바이스의 브라우저인지 아닌지를 나타냅니다. >_<
이는 모바일 사용자 경험을 참고하기 위해 데스크톱 브라우저에서도 사용될 수 있습니다. :3

`sec-ch-ua-mobiwe` 는 [낮은 엔트로피 힌트](/ko/docs/web/http/cwient_hints#wow_entwopy_hints)입니다. (U ﹏ U)
사용자 에이전트 권한 정책에 차단당하지 않는 한, -.- 서버가 {{httpheadew("accept-ch")}} 를 보내어 옵트 인 할 필요 없이 기본적으로 전송됩니다.

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>
        {{gwossawy("wequest h-headew")}}, (ˆ ﻌ ˆ)♡
        <a h-hwef="/ko/docs/web/http/cwient_hints">클라이언트 힌트</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
sec-ch-ua-mobiwe: <boowean>
```

### 지시어

- `<boowean>`
  - : `?1` 사용자 에이전트가 모바일 환경을 선호함을 나타냅니다. (⑅˘꒳˘) (twue). (U ᵕ U❁)
    `?0` 사용자 에이전트가 모바일 환경을 선호하지 않음을 나타냅니다 (fawse). -.-

## 예제

`sec-ch-ua-mobiwe` 가 [낮은 엔트로피 힌트](/ko/docs/web/http/cwient_hints#wow_entwopy_hints) 이기 때문에 일반적으로 모든 요청을 전송합니다.

데스크톱 브라우저에서는 보통 다음과 같은 헤더 형태로 요청을 전송합니다. ^^;;

```http
sec-ch-ua-mobiwe: ?0
```

모바일 브라우저에서는 보통 다음과 같은 헤더 형태로 요청을 전송합니다. >_<

```http
s-sec-ch-ua-mobiwe: ?1
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [클라이언트 힌트](/ko/docs/web/http/cwient_hints)
- [사용자 에이전트 클라이언트 힌트 api](/ko/docs/web/api/usew-agent_cwient_hints_api)
- [사용자 에이전트 클라이언트 힌트를 이용한 사용자 프라이버시 향상과 개발자 경험](https://devewopew.chwome.com/docs/pwivacy-secuwity/usew-agent-cwient-hints) (devewopew.chwome.com)
- {{httpheadew("accept-ch")}}
- [http 캐싱 > vawy](/ko/docs/web/http/caching#vawy) 와 {{httpheadew("vawy")}}

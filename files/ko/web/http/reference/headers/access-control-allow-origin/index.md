---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Origin
original_slug: Web/HTTP/Headers/Access-Control-Allow-Origin
---

**`Access-Control-Allow-Origin`** 응답 헤더는 이 응답이 주어진 {{glossary("origin")}}으로부터의 요청 코드와 공유될 수 있는지를 나타냅니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 구문

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null
```

## 지시자

- `*`
  - : *credential*이 없는 요청들에 와일드카드로써 문자 값 "\*"이 명시될 수 있습니다. 이 값은 브라우저에 리소스에 접근하는 임의의 origin으로부터의 요청 코드를 허용함을 알립니다. 와일드카드를 credential과 함께 사용하려고 하면 [오류가 발생](/ko/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials)합니다.
- `<origin>`
  - : origin을 명시합니다. 하나의 origin만 명시될 수 있습니다.

## 예시

브라우저에 리소스에 접근하는 임의의 origin으로부터의 요청을 허용한다고 알리는 응답은 다음을 포함할 것입니다:

```
Access-Control-Allow-Origin: *
```

브라우저에 `https://developer.mozilla.org`으로부터의 요청을 허용한다고 알리는 응답은 다음을 포함할 것입니다:

```
Access-Control-Allow-Origin: https://developer.mozilla.org
```

가능한 `Access-Control-Allow-Origin` 값을 허용된 origin 집합으로 제한하는 것은 요청 헤더의 {{HTTPHeader("Origin")}}를 검사하는 서버 측 코드가 필요합니다. 이를 허용된 origin 리스트와 비교하고, {{HTTPHeader("Origin")}} 값이 리스트에 있으면 `Access-Control-Allow-Origin` 값을 {{HTTPHeader("Origin")}}과 동일한 값으로 설정합니다.

### CORS and caching

서버가 ("`*`" 와일드카드 외에) 명시적인 origin을 `Access-Control-Allow-Origin` 과 함께 응답으로 보내면, 응답은 값이 `Origin`인 {{HTTPHeader("Vary")}} 응답 헤더 또한 포함해야 합니다 — 브라우저에 서버가 `Origin` 요청 헤더의 값에 따라 다르게 응답할 수 있음을 알리기 위해.

```
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

### Handling CORS on the server (Java example)

다음의 Java 코드는 CORS 요청 헤더를 설정합니다. 코드가 어떻게 `Access-Control-Allow-Origin` 값을 {{HTTPHeader("Origin")}} 요청 헤더와 동일한 값을 설정하는지 알아 두십시오.

```java
import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;


@Component
public class SimpleCORSFilter implements Filter {

private final Logger log = LoggerFactory.getLogger(SimpleCORSFilter.class);

public SimpleCORSFilter() {
    log.info("SimpleCORSFilter init");
}

@Override
public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {

    HttpServletRequest request = (HttpServletRequest) req;
    HttpServletResponse response = (HttpServletResponse) res;
    response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    response.setHeader("Access-Control-Max-Age", "3600");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
    chain.doFilter(req, res);
}

@Override
public void init(FilterConfig filterConfig) {
}

@Override
public void destroy() {
}

}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Vary")}}
- [CORS 문제를 어떻게 해결하나요?](https://gist.github.com/wildoctopus/3730b5c60f9d5224f6c2418d07708e21)

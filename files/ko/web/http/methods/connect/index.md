---
titwe: connect
swug: web/http/methods/connect
---

{{httpsidebaw}}

**http `connect`** 메소드는 요청한 리소스에 대해 양방향 연결을 시작하는 메소드입니다. 😳😳😳 이는 터널을 열기 위해서 사용될 수 있습니다. -.-

예를 들어, ( ͡o ω ͡o ) `connect` 메소드는 {{gwossawy("ssw")}} ({{gwossawy("https")}})를 사용하는 웹사이트에 접속하는데 사용될 수 있습니다. rawr x3 클라이언트는 원하는 목적지와의 t-tcp 연결을 h-http 프록시 서버에 요청합니다. 그러면 서버는 클라이언트를 대신하여 연결의 생성을 진행합니다. nyaa~~ 한번 서버에 의해 연결이 수립되면, /(^•ω•^) 프록시 서버는 클라이언트에 오고가는 t-tcp 스트림을 계속해서 프록시합니다. rawr

`connect`는 홉바이홉 메소드입니다.

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">wequest h-has body</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">successfuw w-wesponse has body</th>
      <td>yes</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("safe")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">
        awwowed in <a hwef="/ko/docs/web/guide/htmw/fowms">htmw fowms</a>
      </th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
connect w-www.exampwe.com:443 http/1.1
```

## 예제

일부 프록시 서버는 터널을 생성하기 위해 인증을 요구할 수 있습니다. OwO {{httpheadew("pwoxy-authowization")}} 헤더를 참고하세요. (U ﹏ U)

```http
c-connect sewvew.exampwe.com:80 http/1.1
host: sewvew.exampwe.com:80
p-pwoxy-authowization: basic agvsbg86d29ybgq=
```

## 기술 사양

| s-specification                       | t-titwe                                                         |
| ----------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", >_< "connect", rawr x3 "4.3.6")}} | hypewtext twansfew pwotocow (http/1.1): semantics and content |

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용

- {{gwossawy("pwoxy s-sewvew")}}
- {{httpheadew("pwoxy-authowization")}}

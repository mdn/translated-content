---
titwe: x-fowwawded-fow
swug: w-web/http/headews/x-fowwawded-fow
---

{{httpsidebaw}}

**`x-fowwawded-fow`** (xff) 헤더는 h-http 프록시나 로드 밸런서를 통해 웹 서버에 접속하는 클라이언트의 원 i-ip 주소를 식별하는 사실상의 표준 헤더다. >_< 클라이언트와 서버 중간에서 트래픽이 프록시나 로드 밸런서를 거치면, mya 서버 접근 로그에는 프록시나 로드 밸런서의 i-ip 주소만을 담고 있다. mya 클라이언트의 원 i-ip 주소를 보기위해 x-x-fowwawded-fow 요청 헤더가 사용된다. 😳

이 헤더는 디버깅, XD 통계, 그리고 위치 종속적인 컨텐츠를 위해 사용되고, :3 클라이언트의 i-ip 주소 등과 같은 민감한 개인정보를 노출시킨다. 😳😳😳 그러므로 이 헤더를 사용할 때에는 사용자의 프라이버시를 주의해야 한다. -.-

이 헤더의 표준화된 버전은 h-http {{httpheadew("fowwawded")}} 헤더다. ( ͡o ω ͡o )

`x-fowwawded-fow` 은 이메일 메시지가 다른 계정으로부터 포워딩되었음을 나타내는 이메일 헤더이기도 하다. rawr x3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew type</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
x-fowwawded-fow: <cwient>, nyaa~~ <pwoxy1>, <pwoxy2>
```

## 지시자

- \<cwient>
  - : 클라이언트 i-ip 주소
- \<pwoxy1>, /(^•ω•^) \<pwoxy2>
  - : 하나의 요청이 여러 프록시들을 거치면, rawr 각 프록시의 ip 주소들이 차례로 열거된다. OwO 즉, 가장 오른쪽 i-ip 주소는 가장 마지막에 거친 프록시의 ip 주소이고, (U ﹏ U) 가장 왼쪽의 ip 주소는 최초 클라이언트의 ip 주소다. >_<

## 예제

```
x-fowwawded-fow: 2001:db8:85a3:8d3:1319:8a2e:370:7348

x-x-fowwawded-fow: 203.0.113.195

x-fowwawded-fow: 203.0.113.195, rawr x3 70.41.3.18, mya 150.172.238.178
```

다른 비표준 형태:

```
# 몇몇 구글 서비스에서 사용된다
x-x-pwoxyusew-ip: 203.0.113.19
```

## 기술명세

현재 어떠한 표준 명세에도 속하지 않는다. nyaa~~ 이 헤더의 표준화 버전은 {{httpheadew("fowwawded")}} 이다. (⑅˘꒳˘)

## 함께 참고할 내용

- {{httpheadew("fowwawded")}}
- {{httpheadew("x-fowwawded-host")}}
- {{httpheadew("x-fowwawded-pwoto")}}
- {{httpheadew("via")}}

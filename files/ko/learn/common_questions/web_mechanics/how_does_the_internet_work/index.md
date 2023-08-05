---
title: 인터넷은 어떻게 동작하는가?
slug: Learn/Common_questions/Web_mechanics/How_does_the_Internet_work
---

이 글에서는 인터넷의 개념과 작동 원리에 대해 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선행지식:</th>
      <td>
        선행지식은 필요없습니다. 하지만 '프로젝트의 목표 설정에 대한 글(<a
          href="/ko/docs/Learn/Thinking_before_coding"
          >Article on setting project goals</a
        >)에 대한 글을 먼저 읽어보세요.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        <span id="result_box" lang="ko"
          ><span
            >웹 기술 인프라의 기초와 인터넷과 웹의 차이점을 배우게 됩니다.</span
          ></span
        >
      </td>
    </tr>
  </tbody>
</table>

## 요약

**인터넷**은 웹의 핵심적인 기술입니다. 인터넷의 가장 기본적인 것은, 컴퓨터들이 서로 통신 가능한 거대한 네트워크라는 것입니다.

[인터넷의 역사는 잘 알려지지 않았습니다](http://en.wikipedia.org/wiki/Internet#History). 인터넷은 1960년 대 미육군에서 기금한 연구 프로젝트에서 시작되었습니다. 그리고 1980년 대에 많은 국립 대학과 비공개 기업의 지원으로 공공의 기반으로 변화되었습니다. 인터넷을 지원하는 다양한 기술은 시간이 지남에 따라 진화 해 왔지만 작동 방식은 그다지 변하지 않았습니다. 인터넷은 모든 컴퓨터를 연결하고 어떤 일이 있어도 연결 상태를 유지할 수있는 방법을 찾는 방법입니다.

## 활동적으로 배우기

- [How the internet Works in 5 minutes](https://www.youtube.com/watch?v=7_LPdttKXPc): Aaron Titus의 인터넷에 대한 기초를 이해하기 위한 5분짜리 동영상

## 깊게 들어가기

### 단순한 네트워크

두 개의 컴퓨터가 통신이 필요할 때, 우리는 다른 컴퓨터와 물리적으로 (보통 [이더넷 케이블](http://en.wikipedia.org/wiki/Ethernet_crossover_cable)) 또는 무선으로 (예를 들어, [WiFi](http://en.wikipedia.org/wiki/WiFi) 나 [Bluetooth](http://en.wikipedia.org/wiki/Bluetooth) 시스템) 연결되어야 합니다. 모든 현대 컴퓨터들은 이러한 연결 중 하나를 이용하여 연결을 지속할 수 있습니다.

> **참고:** 이 글의 나머지 부분에서는 유선 케이블에 대해서만 이야기 하지만 무선 네트워크도 동일한 방식입니다.

![Two computers linked together](internet-schema-1.png)

이러한 네트워크는 두 대의 컴퓨터로 제한되지 않습니다. 원하는 만큼의 컴퓨터를 연결할 수 있습니다. 그러나 이렇게 연결할 수록 매우 복잡해집니다. 예를 들어 10대의 컴퓨터를 연결하려는 경우 컴퓨터 당 9개의 플러그가 달린 45개의 케이블이 필요합니다!

![Ten computers all together](internet-schema-2.png)

이 문제를 해결하기 위해 네트워크의 각 컴퓨터는 라우터라고하는 특수한 소형 컴퓨터에 연결됩니다. 이 라우터에는 단 하나의 작업만 있습니다. 철도역의 신호원처럼 주어진 컴퓨터에서 보낸 메시지가 올바른 대상 컴퓨터에 도착하는지 확인합니다. 컴퓨터 B에게 메시지를 보내려면 컴퓨터 A가 메시지를 라우터로 보내야하며, 라우터는 메시지를 컴퓨터 B로 전달하고 메시지가 컴퓨터 C로 배달되지 않도록해야합니다.

이 라우터를 시스템에 추가하면 10대의 컴퓨터 네트워크에는 10개의 케이블만 필요합니다. 각 컴퓨터마다 단일 플러그와 10개의 플러그가 있는 하나의 라우터가 필요합니다.

![Ten computers with a router](internet-schema-3.png)

### 네트워크 속의 네트워크

지금까지는 그런대로 잘되었습니다. 수백, 수천, 수십억 대의 컴퓨터를 연결하는 것은 어떨까요? 물론 단일 라우터는 그 정도까지 확장 할 수는 없지만 신중하게 읽으면 라우터는 다른 컴퓨터와 마찬가지로 컴퓨터라고 말했습니다. 그럼, 두 대의 라우터를 연결하지 못하게 하는 것이 있을까요? 없죠!

![Two routers linked together](internet-schema-4.png)

컴퓨터를 라우터에 연결하고, 라우터에서 라우터로, 우리는 무한히 확장할 수 있습니다.

![Routers linked to routers](internet-schema-5.png)

이러한 네트워크는 우리가 인터넷이라고 부르는 것에 매우 가깝지만, 우리는 뭔가를 놓치고 있습니다. 우리는 우리의 목적을 가지고 네트워크를 구축했습니다. 하지만 그밖에 다른 네트워크들 : 친구, 이웃, 누구든지 컴퓨터로 이루어진 그들만의 네트워크를 가질 수 있습니다. 하지만 집과 다른 지역 사이에, 아주 먼 곳에 케이블을 연결할 수는 없습니다. 이 문제를 어떻게 처리 할 수 있을까요? 예를 들어 전력 및 전화와 같이 이미 집에 연결된 케이블이 있습니다. 전화기 기반의 시설은 이미 세계 어느 곳과도 연결되어 있으므로 우리가 필요로 하는 완벽한 배선이라고 할 수 있습니다. 따라서 우리의 네트워크를 전화 시설과 연결하기 위해선, 모뎀이라는 특수 장비가 필요합니다. 이 모뎀은 우리 네트워크의 정보를 전화 시설에서 처리 할 수있는 정보로 바꾸며, 그 반대의 경우도 마찬가지입니다.

![A router linked to a modem](internet-schema-6.png)

그래서 우리의 네트워크는 전화 시설에 연결됩니다. 다음 단계는 우리의 네트워크에서 도달하려는 네트워크로 메시지를 보내는 것입니다. 그렇게하기 위해 네트워크를 인터넷 서비스 제공 업체 (Internet Service Provider, ISP)에 연결합니다. ISP는 모두 함께 연결되는 몇몇 특수한 라우터를 관리하고 다른 ISP의 라우터에도 액세스 할 수 있는 회사입니다. 따라서 우리 네트워크의 메시지는 ISP 네트워크의 네트워크를 통해 대상 네트워크로 전달됩니다. 인터넷은 이러한 전체 네트워크 인프라로 구성됩니다.

![Full Internet stack](internet-schema-7.png)

### 컴퓨터 찾기

컴퓨터에 메시지를 보내려면 메시지를 받을 특정 컴퓨터를 지정해야합니다. 따라서 네트워크에 연결된 모든 컴퓨터에는 IP 주소 (IP는 인터넷 프로토콜을 나타냄)라는 고유한 주소가 있습니다. 주소는 점으로 구분 된 네 개의 숫자로 구성된 주소입니다 . 예: `192.168.2.10`.

컴퓨터는 이러한 주소로 다른 컴퓨터를 찾아가는데 문제가 없습니다. 그러나 우리들은 IP주소를 기억하기 어렵죠. 그래서 우리는 '도메인 이름' 이라고하는 사람이 읽을 수 있는 IP 주소의 이름을 지정할 수 있습니다. 예를 들어 `'google.com'`은 IP 주소로 `'173.194.121.32'` 입니다. 따라서 '도메인 이름'은 'IP주소'보다 인터넷을 사용하기에 쉽습니다.

![Show how a domain name can alias an IP address](dns-ip.png)

### 인터넷과 웹

웹 브라우저를 사용하여 웹을 탐색 할 때 일반적으로 도메인 이름을 사용하여 웹 사이트에 접속합니다. 그것은 인터넷과 웹이 같은 것을 의미할까요? 그렇게 간단하지 않습니다. 앞에서 보았 듯이 인터넷은 수십억 대의 컴퓨터를 모두 연결하는 기술 인프라입니다. 이러한 컴퓨터들 중에 일부는 '웹 서버'로서 웹 브라우저가 이해할 수 있는 서비스를 제공합니다. 인터넷은 인프라이며, 웹은 그 인프라 기반 위에 구축된 서비스입니다. 웹 뿐만 아니라 인터넷 위에 구축된 다른 서비스들(이메일, {{Glossary("IRC")}} 등)도 있음을 알아야합니다.

## 다음 단계

- [How the Web works(웹이 작동하는 방법)](/ko/docs/Learn/Getting_started_with_the_web/%EC%9B%B9%EC%9D%98_%EB%8F%99%EC%9E%91_%EB%B0%A9%EC%8B%9D)
- [Understanding the difference between a web page, a web site, a web server and a search engine(웹 페이지, 웹 사이트, 웹 서버, 검색 엔진의 차이점 이해하기)](/ko/docs/Learn/page_vs_site_vs_server_vs_search_engine)
- [Understanding domain names(도메인 이름 이해하기)](/ko/docs/Learn/Understanding_domain_names)

---
title: 도메인 이름이란?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

<table>
  <tbody>
    <tr>
      <th scope="row">선행 지식:</th>
      <td>
        먼저
        <a href="/ko/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >인터넷이 어떻게 작동하는지</a
        >를 알아야 하고
        <a href="/ko/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL"
          >URL이 무엇인지</a
        >를 이해해야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        도메인 이름이 무엇인지, 어떻게 작동하는지, 왜 중요한지 배웁니다.
      </td>
    </tr>
  </tbody>
</table>

## 요약

도메인 이름은 인터넷 인프라의 핵심 부분입니다. 인터넷에서 이용 가능한 모든 웹 서버에 대해 사람이 읽을 수 있는 주소를 제공합니다.

인터넷에 연결된 모든 컴퓨터는 공개 {{Glossary("IP Address", "IP 주소")}}를 통해 도달할 수 있습니다. IPv4 주소(예: `192.0.2.172`) 또는 IPv6 주소(예: `2001:db8:8b73:0000:0000:8a2e:0370:1337`)를 사용합니다.

컴퓨터는 이런 주소를 쉽게 처리할 수 있지만, 사람들은 누가 서버를 운영하는지 또는 웹사이트가 어떤 서비스를 제공하는지 알아내기 어렵습니다. IP 주소는 기억하기 어렵고 시간이 지나면서 변경될 수 있습니다.

이러한 모든 문제를 해결하기 위해 우리는 도메인 이름이라고 불리는 사람이 읽을 수 있는 주소를 사용합니다.

## 자세히 살펴보기

### 도메인 이름의 구조

도메인 이름은 여러 부분으로 구성된 간단한 구조를 가지고 있습니다(한 부분만 있을 수도 있고, 두 개, 세 개 등일 수도 있음). 점으로 구분되며 **오른쪽부터 왼쪽으로 읽습니다**.

![Anatomy of the MDN domain name](structure.png)

각 부분은 전체 도메인 이름에 대한 특정 정보를 제공합니다.

- {{Glossary("TLD", "최상위 도메인")}} (Top-Level Domain).
  - : TLD는 사용자에게 도메인 이름 뒤에 있는 서비스의 일반적인 목적을 알려줍니다.
    가장 일반적인 TLD(`.com`, `.org`, `.net`)는 웹 서비스가 특별한 기준을 충족할 필요가 없지만, 일부 TLD는 더 엄격한 정책을 시행하여 그 목적이 더 명확해집니다.
    예를 들어서:
    - `.us`, `.fr`, `.se`와 같은 지역 TLD는 서비스가 특정 언어로 제공되거나 특정 국가에 호스팅되어야 할 수 있습니다. 이들은 특정 언어나 국가의 리소스를 나타내는 것으로 간주됩니다.
    - `.gov`를 포함하는 TLD는 정부 조직에서만 사용할 수 있습니다.
    - `.edu` TLD는 교육 및 학술 기관에서만 사용할 수 있습니다.

    TLD는 특수 문자와 라틴 문자를 포함할 수 있습니다.
    TLD의 최대 길이는 63자이지만, 대부분 2-3자 정도입니다.

    TLD의 전체 목록은 [ICANN에서 관리](https://www.icann.org/en/contracted-parties/registry-operators/resources/list-of-top-level-domains)합니다.

- 레이블 (또는 구성 요소)
  - : 레이블은 TLD 다음에 오는 것들입니다.
    레이블은 1자부터 63자까지의 길이를 가진 대소문자를 구분하지 않는 문자 시퀀스로, `A`부터 `Z`까지의 문자, `0`부터 `9`까지의 숫자, 그리고 `-` 문자만 포함할 수 있습니다(단, `-`는 레이블의 첫 번째나 마지막 문자가 될 수 없음). `a`, `97`, `hello-strange-person-16-how-are-you`는 모두 유효한 레이블의 예입니다.

    TLD 바로 앞에 위치한 레이블을 'Secondary Level Domain' (SLD)라고도 합니다.

    도메인 이름은 많은 레이블(또는 구성 요소)을 가질 수 있습니다. 도메인 이름을 형성하기 위해 3개의 레이블이 필수적이거나 필요한 것은 아닙니다. 예를 들어, [informatics.ed.ac.uk](https://informatics.ed.ac.uk/)는 유효한 도메인 이름입니다. 여러분이 관리하는 모든 도메인은(예: [mozilla.org](https://www.mozilla.org/en-US/)), [developer.mozilla.org](/ko/), [support.mozilla.org](https://support.mozilla.org/), [bugzilla.mozilla.org](https://bugzilla.mozilla.org/)와 같이 각각 다른 콘텐츠가 위치한 "subdomains"를 만들 수 있습니다.

### 도메인 이름 구매하기

#### 누가 도메인 이름을 소유하나요?

도메인 이름을 "구매"할 수는 없습니다. 이는 사용되지 않는 도메인 이름이 결국 다른 사람이 다시 사용할 수 있도록 하기 위함입니다. 모든 도메인 이름이 구매된다면, 웹은 잠겨 있어서 누구도 사용할 수 없는 사용되지 않는 도메인 이름으로 빠르게 채워질 것입니다.

대신, 여러분은 1년 이상 도메인 이름을 사용할 권리에 대해 비용을 지불합니다. 여러분은 권리를 갱신할 수 있고, 여러분의 갱신은 다른 사람들의 신청보다 우선권을 갖습니다. 하지만 여러분은 절대 도메인 이름을 소유하지는 않습니다.

등록 기관이라고 불리는 회사들은 도메인 이름 등록을 사용하여 사용자를 도메인 이름에 연결하는 기술 및 관리 정보를 추적합니다.

> [!NOTE]
> 일부 도메인 이름의 경우, 등록 기관이 추적을 담당하지 않을 수 있습니다. 예를 들어, `.fire` 아래의 모든 도메인 이름은 Amazon에서 관리합니다.

#### 사용 가능한 도메인 이름 찾기

주어진 도메인 이름이 사용 가능한지 알아보려면,

- 도메인 이름 등록 기관의 웹사이트로 이동하세요. 대부분이 도메인 이름이 사용 가능한지 알려주는 "whois" 서비스를 제공합니다.
- 또는 내장 셸이 있는 시스템을 사용한다면, 다음과 같이 `mozilla.org`에 대해 보여진 것처럼 `whois` 명령을 입력하세요.

  ```bash
  whois mozilla.org
  ```

  이것은 다음과 같이 출력됩니다.

  ```plain
  Domain Name:MOZILLA.ORG
  Domain ID: D1409563-LROR
  Creation Date: 1998-01-24T05:00:00Z
  Updated Date: 2013-12-08T01:16:57Z
  Registry Expiry Date: 2015-01-23T05:00:00Z
  Sponsoring Registrar:MarkMonitor Inc. (R37-LROR)
  Sponsoring Registrar IANA ID: 292
  WHOIS Server:
  Referral URL:
  Domain Status: clientDeleteProhibited
  Domain Status: clientTransferProhibited
  Domain Status: clientUpdateProhibited
  Registrant ID:mmr-33684
  Registrant Name:DNS Admin
  Registrant Organization:Mozilla Foundation
  Registrant Street: 650 Castro St Ste 300
  Registrant City:Mountain View
  Registrant State/Province:CA
  Registrant Postal Code:94041
  Registrant Country:US
  Registrant Phone:+1.6509030800
  ```

보시다시피, Mozilla Foundation이 이미 등록했기 때문에 저는 `mozilla.org`를 등록할 수 없습니다.

반면에 `afunkydomainname.org`를 등록할 수 있는지 확인해봅시다.

```bash
whois afunkydomainname.org
```

이것은 다음과 같이 출력됩니다(작성 시점 기준).

```plain
NOT FOUND
```

보시다시피, 도메인이 `whois` 데이터베이스에 존재하지 않으므로, 우리는 등록을 요청할 수 있습니다.

#### 도메인 이름 얻기

과정은 매우 간단합니다.

1. 등록 기관의 웹사이트로 이동합니다.
2. "도메인 이름 등록" 같은 버튼을 클릭합니다.
3. 모든 필수 세부사항으로 양식을 작성합니다. 특히 원하는 도메인 이름을 잘못 입력하지 않았는지 확인하세요. 결제 후에는 수정할 수 없습니다.
4. 도메인 이름 등록이 완료되면 등록 기관에서 알려줄 것입니다. 몇 시간 내에 모든 DNS 서버가 여러분의 DNS 정보를 받을 것입니다.

> [!NOTE]
> 이 과정에서 등록 기관이 여러분의 실제 주소를 요청합니다. 일부 국가에서는 등록 기관이 유효한 주소를 제공할 수 없는 경우 도메인을 폐쇄하도록 강제받을 수 있으므로, 제대로 작성했는지 확인하세요.

#### DNS 갱신

DNS 데이터베이스는 전 세계 모든 DNS 서버에 저장되며, 이 모든 서버들은 "authoritative name servers" 또는 "top-level DNS servers"라고 불리는 몇 개의 특별한 서버를 참조합니다. 이들은 시스템을 관리하는 보스 서버와 같습니다.

등록 기관이 주어진 도메인에 대한 정보를 생성하거나 업데이트할 때마다, 정보는 모든 DNS 데이터베이스에서 갱신되어야 합니다. 주어진 도메인을 알고 있는 각 DNS 서버는 자동으로 무효화되고 갱신되기 전까지 일정 시간 동안 정보를 저장합니다(DNS 서버가 권위 있는 서버에 쿼리하고 업데이트된 정보를 가져옴). 따라서 이 도메인 이름을 알고 있는 DNS 서버들이 최신 정보를 얻는 데 약간의 시간이 걸립니다.

### DNS 요청은 어떻게 작동하나요?

이미 보았듯이, 브라우저에서 웹페이지를 표시하고 싶을 때 IP 주소보다는 도메인 이름을 입력하는 것이 더 쉽습니다. 그 과정을 살펴봅시다.

1. 브라우저의 주소창에 `mozilla.org`를 입력합니다.
2. 여러분의 브라우저는 컴퓨터가 이 도메인 이름으로 식별되는 IP 주소를 이미 인식하고 있는지 물어봅니다(로컬 DNS 캐시 사용). 만약 그렇다면, 이름이 IP 주소로 변환되고 브라우저가 웹 서버와 콘텐츠를 협상합니다. 끝.
3. 만약 컴퓨터가 `mozilla.org` 이름 뒤에 어떤 IP가 있는지 모른다면, DNS 서버에게 물어봅니다. DNS 서버의 역할은 정확히 각 등록된 도메인 이름과 일치하는 IP 주소를 여러분의 컴퓨터에게 알려주는 것입니다.
4. 이제 컴퓨터가 요청된 IP 주소를 알았으므로, 여러분의 브라우저는 웹 서버와 콘텐츠를 협상할 수 있습니다.

![Explanation of the steps needed to obtain the result to a DNS request](2014-10-dns-request2.png)

## 다음 단계

좋습니다. 프로세스와 아키텍처에 대해 많이 이야기했네요. 이제 다음으로 넘어갈 시간입니다.

- 실제로 해보고 싶다면, 디자인을 파고들고 [웹페이지의 구조](/ko/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts)를 탐색하기에 좋은 시점입니다.
- 웹사이트 구축의 일부 측면은 비용이 든다는 점도 주목할 가치가 있습니다. [웹사이트 구축 비용이 얼마나 드는지](/ko/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)를 참조하세요.
- 또는 Wikipedia에서 [Domain Names](https://en.wikipedia.org/wiki/Domain_name)에 대해 더 읽어보세요.
- [How DNS works](https://howdns.works/) 튜토리얼은 재미있고 다채로운 설명을 제공합니다.

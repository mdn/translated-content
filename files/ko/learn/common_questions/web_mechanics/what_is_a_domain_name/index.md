---
title: What is a domain name?
slug: Learn/Common_questions/Web_mechanics/What_is_a_domain_name
original_slug: Learn/Common_questions/What_is_a_domain_name
---

이 글에서 domain name(도메인명)에 대해 다룹니다. : 도메인이 무엇인 지, 어떻게 구성되어있는지, 도메인을 어떻게 얻을 수 있는지.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선행사항:</th>
      <td>
        우선,
        <a href="/en-US/docs/Learn/How_the_Internet_works"
          >인터넷이 작동하는 법</a
        >을 알 필요가 있고,
        <a href="/en-US/Learn/Understanding_URLs"
          >무엇이 URLs 인 지 이해할 필요가 있다.</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        도메인 이름이 무엇인 지에 배우고 그것들이 어떻게 작동하고 왜 중요한 지에
        대해 배운다.
      </td>
    </tr>
  </tbody>
</table>

## 요약

도메인 이름은 인터넷 인프라의 핵심 부분입니다. 인터넷에서 사용할 수있는 모든 웹 서버에 대해 사람이 읽을 수있는 주소를 제공합니다.

Any Internet-connected computer can be reached through a public {{Glossary("IP")}} Address, which consists of 32 bits for IPv4 (they are usually written as four numbers between 0 and 255, separated by dots (e.g., `173.194.121.32`) or which consists of 128 bits for IPv6 (they are usually written as eight groups of 4 hexadecimal numbers, separated by colons (e.g., `2027:0da8:8b73:0000:0000:8a2e:0370:1337`). Computers can handle those addresses easily, but people have a hard time finding out who's running the server or what service the website offers. IP addresses are hard to remember and might change over time. To solve all those problems we use human-readable addresses called domain names.

## Active Learning

_아직 이용가능한 Active Learning이 없습니다. [Please, consider contributing](/ko/docs/MDN/Getting_started)._

## Deeper dive

### Domain name의 구조

도메인 이름은 몇개의 파트로 이루어진 간단한 구조를 이루고 있습니다. 점으로 구분하고 오른쪽에서 왼쪽으로 읽습니다.

![Anatomy of the MDN domain name](structure.png)

각각의 파트들은 전체 도메인 이름에 대해 특별한 정보를 제공합니다.

- {{Glossary("TLD")}} (Top-Level Domain; 최고레벨 도메인).
  - : TLD은 가장 일반적인 정보를 제공합니다. TLDs tell users the general purpose of the service behind the domain name. The most generic TLDs (.com, .org, .net) don't require web services to meet strict criteria, but some TLDs enforce stricter policies. For example, local TLDs such as .us, .fr, or .sh can require the service to be provided in a given language or hosted in a certain country.
- Label (or component)
  - : The labels are what follow the TLD. A label can be anything, from one letter to a full sentence. The label located right before the TLD can also be referred as a _Secondary Level Domain_ (SLD). A domain name can have many labels (or components), it is not mandatory nor necessary to have 3 labels to form a domain name. For instance, www\.inf.ed.ac.uk is a correct domain name. When controlling the "upper" part of a domain name (e.g. [mozilla.org](https://mozilla.org)), one can create other domain names (sometimes called "subdomains") (e.g. [developer.mozilla.org](/)).

### Domain name 구매하기

#### 누가 도메인 이름을 갖고 있나요?

You cannot “buy a domain name”. You pay for the right to use a domain name for one or more years. You can renew your right, and your renewal has priority over other people's applications. But you never own the domain name.

Companies called registrars use domain name registries to keep track of technical and administrative information connecting you to your domain name.

> **참고:** **Note :** For some domain name, it might not be a registrar which is in charge of keeping track. For instance, every domain name under .fire is managed by Amazon.

#### 이용가능한 Domain Name 찾기

To find out whether a given domain name is available,

- Go to a domain name registrar's website. Most of them provide a “whois” service that tells you whether a domain name is available.
- Alternatively, if you use a system with a built-in shell, type a `whois` command into it, as shown here for `mozilla.org`:

```
$ whois mozilla.org
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

보시는 바와 같이 `mozilla.org`는 Mozilla Foundation에 의해 이미 등록되어 있기 때문에 등록이 안되네요.

`afunkydomainname.org`을 등록하는 것도 봅시다

```
$ whois afunkydomainname.org
NOT FOUND
```

위에 나온 것 같이 도메인이 `whois` 데이터베이스에 존재하지 않네요. 따라서 이건 등록할수 있습니다. 좋은 정보네요.

#### 도메인 네임 얻기

과정은 다음과 같습니다.

1. 등록 웹사이트로 가세요.
2. 일반적으로 눈에 띄게 “Get a domain name” 이라는 글자가 있을거에요. 클릭하세요.
3. 요구하는 상세 정보를 채우세요. 그리고 특별히 원하는 도메인 네임의 스펠링을 정확하게 입력했는지 다시한번 확인해주세요. 한번 지불하면 돌이킬 수 없습니다.
4. 등록이 잘 되었다면 등록 웹사이트에서 연락이 올 것입니다. 그리고 몇시간내로 모든 DNS 서버들이 당신의 DNS 정보를 받을거구요.

> **참고:** In this process the registrar asks you for your real-world address. Make sure you fill it properly, since in some countries registrars may be forced to close the domain if they cannot provide a valid address.

#### DNS 갱신

DNS databases are stored on every DNS server worldwide, and all these servers refer to a few ones called “authoritative name server” or “top-level DNS servers.” Whenever your registrar creates or updates any information for a given domain, the information must be refreshed in every DNS database. Each DNS server that knows about a given domain stores the information for some time before it is automatically invalidated and then refreshed (the DNS server queries an authoritative server again). Thus, it takes some time for DNS servers that know about this domain name to get the up-to-date information.

> **참고:** **Note :** This time is often called **propagation time**. However this term is not precise since the update is not propagating itself (top → down). DNS servers queried by your computer (down) are the ones that fetch the information from the authoritative server (top) when they need it.

### DNS 리퀘스트는 어떻게 작동할까요?

As we already saw, when you want to display a webpage in your browser it's easier to type a domain name than an IP address. Let's take a look at the process:

1. Type `mozilla.org` in your browser's location bar.
2. Your browser asks your computer if it already recognizes the IP address identified by this domain name (using a local DNS cache). If it does, the name is translated to the IP address and the browser negotiates contents with the web server. End of story.
3. If your computer does not know which IP is behind the `mozilla.org` name, it goes on to ask a DNS server, whose job is precisely to tell your computer which IP address matches each registered domain name.
4. Now that the computer knows the requested IP address, your browser can negotiate contents with the web server.

![Explanation of the steps needed to obtain the result to a DNS request](2014-10-dns-request2.png)

## 다음 단계

지금까지 많은 프로세스와 architecture에 대해 이야기 했으니 이제 다음으로 넘어갈 시간이네요.

- If you want to get hands-on, it's a good time to start digging into design and explore [the anatomy of a web page](/en-US/Learn/Anatomy_of_a_web_page).
- It's also worth noting that some aspects of building a website cost money. Please refer to [how much it costs to build a web site](/ko/docs/Learn/How_much_does_it_cost).
- Or read more about [Domain Name](http://en.wikipedia.org/wiki/Domain_name) on Wikipedia.

---
title: Geolocation
slug: Web/API/Geolocation
tags:
  - API
  - Advanced
  - Geolocation API
  - Interface
  - Reference
  - Secure context
  - 위치정보
translation_of: Web/API/Geolocation
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<p><code><strong>Geolocation</strong></code> 인터페이스는 장치의 위치를 가져오는 방법을 나타냅니다. <code>Geolocation</code>을 사용하면 웹 사이트나 웹 앱이 위치 정보를 활용해, 현재 위치에 대해 맞춤 콘텐츠를 제공할 수 있습니다.</p>

<p>{{domxref("Navigator")}} 객체의 {{domxref("Navigator.geolocation", "geolocation")}} 속성으로 이 인터페이스를 구현하는 객체에 접근할 수 있습니다.</p>

<div class="note">
<p><strong>참고:</strong> 보안 상의 문제로, 웹 페이지가 위치 정보에 접근을 시도하면 사용자에게 알림을 보내고 권한을 허용할지 묻습니다. 각 브라우저는 자신만의 권한 정책과 요청 방식을 가지고 있으므로 주의해야 합니다.</p>
</div>

<h2 id="속성">속성</h2>

<p><em><code>Geolocation</code> 인터페이스는 어떤 속성도 구현하거나 상속하지 않습니다.</em></p>

<h2 id="메서드">메서드</h2>

<p><em><em><code>Geolocation</code> 인터페이스는 어떤 메서드도 상속하지 않습니다.</em></em></p>

<dl>
 <dt>{{domxref("Geolocation.getCurrentPosition()")}} {{securecontext_inline}}</dt>
 <dd>장치의 현재 위치를 조사한 후 {{domxref("GeolocationPosition")}} 객체로 반환합니다.</dd>
 <dt>{{domxref("Geolocation.watchPosition()")}} {{securecontext_inline}}</dt>
 <dd>장치의 위치가 변경될 때마다 호출하는 콜백을 등록합니다. 반환값은 콜백의 식별자로 쓸 수 있는 <code>long</code> 값입니다.</dd>
 <dt>{{domxref("Geolocation.clearWatch()")}} {{securecontext_inline}}</dt>
 <dd><code>watchPosition()</code>을 이용해 등록한 특정 콜백을 삭제합니다.</dd>
</dl>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Geolocation")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API">Geolocation API 사용하기</a></li>
</ul>

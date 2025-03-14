---
title: Link types
slug: Web/HTML/Attributes/rel
---

{{HTMLSidebar}}

다음 표에 나열된 링크 타입 속성은 HTML에서 두 문서간의 관계를 명시할 때 사용합니다. 이 때 {{HTMLElement("a")}}, {{HTMLElement("area")}}, 또는 {{HTMLElement("link")}} 요소를 사용해 한 쪽에서 다른 쪽으로 향하는 연결고리를 만듭니다.

<table class="standard-table">
  <caption>
    링크 타입 및 HTML에서의 중요도
  </caption>
  <thead>
    <tr>
      <th scope="col">링크 타입</th>
      <th scope="col">설명</th>
      <th scope="col" style="width: 12em">적용 가능한 요소</th>
      <th scope="col">적용 불가능한 요소</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>alternate</code></td>
      <td>
        <ul>
          <li>
            만약 요소가 {{HTMLElement("link")}}이고,
            <a href="/ko/docs/Web/HTML/Element/link#rel"><code>rel</code></a> 속성값에
            <code>stylesheet</code>라는 값이 들어 있다면, 링크가
            <a href="/ko/docs/Alternative_style_sheets">대체 스타일 시트</a
            >로 정의된 것입니다. 이 경우,
            <a href="/ko/docs/Web/HTML/Element/link#title"><code>title</code></a> 속성은 반드시 존재해야
            하고 빈 문자열 값을 가지고 있으면 안됩니다.
          </li>
          <li>
            만약 <a href="/ko/docs/Web/HTML/Element/link#type"><code>type</code></a>의 값이
            <code>application/rss+xml</code>이거나
            <code>application/atom+xml</code>로 설정되어 있다면, 링크를
            <a href="/ko/docs/RSS/Getting_Started/Syndicating"
              >syndication feed</a
            >(기고 알림)로 정의된 것입니다. 페이지에서 정의된 것 중 첫번째 것이
            기본값입니다.
          </li>
          <li>
            위의 두 경우를 제외하면, 링크는 아래 대체 페이지 항목 중 한가지로
            정의된 것입니다.
            <ul>
              <li>
                휴대용 기기와 같은 다른 매체에서 보여질
                페이지(<a href="/ko/docs/Web/HTML/Element/link#media"><code>media</code></a> 속성이
                정의되어 있을 시)
              </li>
              <li>
                외국어로 된
                페이지(<a href="/ko/docs/Web/HTML/Element/link#hreflang"><code>hreflang</code></a> 속성이
                정의되어 있을 시)
              </li>
              <li>
                PDF처럼 다른 형식으로 된
                페이지(<a href="/ko/docs/Web/HTML/Element/link#type"><code>type</code></a> 속성이 정의되어
                있을 시)
              </li>
              <li>위 세가지 속성 중 2개 이상 같이 쓰인 페이지</li>
            </ul>
          </li>
        </ul>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>없음.</em></td>
    </tr>
    <tr>
      <td><code>archives</code> {{deprecated_inline}}</td>
      <td>
        <p>
          '이 요소는 본인 페이지에 대한 아카이브 링크를 포함하고 있는 문서로
          연결해 주는 하이퍼링크임'이라고 정의하는 값입니다. 예를 들어, 이
          속성값을 사용해 블로그 대문(entry)에서 월별 인덱스 페이지로 이동할 수
          있는 링크를 걸 수 있습니다.<br /><br /><strong>알아두기:</strong>
          <code>archive</code> 값 하나만 써도 인식이 되기는 하나, 올바른
          사용법이 아니므로 이런 식의 사용은 하지 말아 주십시오.
        </p>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>없음.</em></td>
    </tr>
    <tr>
      <td><code>author</code></td>
      <td>
        <p>
          '저자에 대한 정보 및 저자와 연락 가능한 연락처 정보가 담긴 페이지로
          향하는 하이퍼링크임'이라고 정의하는 값입니다.<br /><br /><strong
            >알아두기:</strong
          >
          mailto: 하이퍼링크가 동일한 역할을 하긴 하나, 웹 크롤러(robot
          harvester)에 의해 이 주소로 많은 스팸이 보내질 가능성이 높으므로
          사용을 권할만하지는 않습니다. 이이런 경우에는 연락처 폼 요소가
          들어있는 페이지로 사용자를 이끄는 편이 더 낫습니다.
        </p>
        <p>
          {{HTMLElement("a")}}, {{HTMLElement("area")}},
          {{HTMLElement("link")}} 요소에
          <a href="/ko/docs/Web/HTML/Element/link#rev"><code>rev</code></a> 속성을 사용하고 링크 타입을
          <code>made</code>로 넣으면 인식이 되기는 하지만 부정확한 값이므로
          <a href="/ko/docs/Web/HTML/Element/link#rel"><code>rel</code></a> 속성값을
          <code>author</code>로 대체해야 합니다.
        </p>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>없음.</em></td>
    </tr>
    <tr>
      <td><code>bookmark</code></td>
      <td>
        <p>
          '가장 가까운 조상 {{HTMLElement("article")}} 요소에 대해
          퍼머링크(<a href="/ko/docs/Permalink">permalink</a>)를 제공하는
          하이퍼링크임'이라고 정의하는 값입니다. 만약
          <code>article</code> 요소가 없다면, 링크 요소와 가장 가까운 관계를
          맺고 있는
          <code
            ><a href="/ko/docs/Sections_and_Outlines_of_an_HTML5_document"
              >section</a
            ></code
          >에 대한 퍼머링크로 인식이 됩니다.
        </p>
        <p>
          이 속성을 사용하면 (월별 블로그 총결산 페이지라던가 블로그 aggregator
          사이트 등에서) 한 페이지 내에 존재하는 여러 편의 글(article)이 존재할
          때, 특정한 하나의 글에 대한 즐겨찾기를 표시 해 둘 수 있습니다.
        </p>
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>{{HTMLElement("link")}}</td>
    </tr>
    <tr>
      <td><code>canonical</code></td>
      <td>
        캐노니컬 링크 요소는 웹 마스터의 {{glossary("SEO")}} 작업 중, 중복
        콘텐츠 이슈를 해소하기 위해 웹 페이지의 "공식" 혹은 "선호" URL을 지정할
        수 있는 HTML 요소입니다.
      </td>
      <td>{{htmlelement("link")}}</td>
      <td>
        <p>
          {{htmlelement("a")}}, {{htmlelement("area")}},
          {{htmlelement("form")}}
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/HTML/Link_types/dns-prefetch"
          ><code>dns-prefetch</code> </a
        >{{experimental_inline}}
      </td>
      <td>
        브라우저에게 해당 리소스가 필요하다고 알려줘서 사용자가 링크를 클릭하기
        전에 미리 DNS 조회와 프로토콜 핸드셰이크를 수행할 수 있도록 허용합니다.
      </td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
    </tr>
    <tr>
      <td><code>external</code></td>
      <td>
        하이퍼링크가 현재 사이트 바깥의 리소스를 가리킴을 나타냅니다. 즉, 이
        링크를 따라가면 사이트를 떠나게 됩니다.
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>{{HTMLElement("link")}}</td>
    </tr>
    <tr>
      <td><code>first</code> {{deprecated_inline}}</td>
      <td>
        <p>
          하이퍼링크가 현재 페이지가 속한 시퀀스(<em>sequence</em>) 중 첫번째
          리소스로 이동하는 링크임을 정의합니다.<br /><br /><strong
            >알아두기:</strong
          >
          이것 말고도 리소스를 같은 시퀀스로 연결할 때 이와 관련있는 링크
          타입으로 <code>last</code>, <code>prev</code>, <code>next</code>가
          있습니다.
        </p>
        <p>
          <code>begin</code>이나 <code>start</code>라고 쓰면 인식이 되긴 하나
          부정확한 값이므로 사용하지 말아야 합니다.
        </p>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>None.</em></td>
    </tr>
    <tr>
      <td><code>help</code></td>
      <td>
        <ul>
          <li>
            만약 요소가 {{HTMLElement("a")}}거나
            {{HTMLElement("area")}}이면, <code>help</code>는
            하이퍼링크가 부모와 자손 요소에 대한 추가 도움말을 제공하는 리소스를
            가리킴을 나타냅니다.
          </li>
          <li>
            만약 요소가 {{HTMLElement("link")}}라면 help는 하이퍼링크가
            페이지 전체에 대한 추가 도움말을 제공하는 리소스를 가리킴을
            나타냅니다.
          </li>
        </ul>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>None.</em></td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td>
        <p>
          사용자 인터페이스에서 페이지를 나타낼 때 사용하는 리소스, 보통
          아이콘을 정의합니다.<br /><br /><a href="/ko/docs/Web/HTML/Element/link#media"><code>media</code></a>,
          <a href="/ko/docs/Web/HTML/Element/link#type"><code>type</code></a>,
          <a href="/ko/docs/Web/HTML/Element/link#sizes"><code>sizes</code></a> 특성을 사용하면
          브라우저가 현재 맥락에서 제일 적합한 아이콘을 선택할 수 있습니다.
          다수의 적합한 리소스가 존재하는 경우, 브라우저는 트리 순서에서 제일
          뒤에 정의된 리소스를 사용합니다. 위의 특성은 단순히 힌트에 불과하며,
          추가 조사 결과 더 적합한 리소스를 찾았다면 이전 선택을 스스로 바꿀 수
          있습니다.<br /><br /><strong>참고:</strong> Apple의 iOS는 Web Clip
          또는 시작 화면 플레이스 홀더에 사용할 아이콘을 고를 때, 다른 모바일
          브라우저와는 달리 <code>icon</code> 링크 유형은 물론
          <a href="/ko/docs/Web/HTML/Element/link#sizes"><code>sizes</code></a> 특성을 사용하지 않습니다.
          대신, 각각에 대응하는 비표준
          <a
            class="external external-icon"
            href="https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4"
            ><code>apple-touch-icon</code></a
          >과
          <a
            class="external external-icon"
            href="https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6"
            ><code>apple-touch-startup-image</code></a
          >를 사용합니다.<br /><br />종종 <code>icon</code> 앞에
          <code>shortcut</code> 링크 유형이 존재하나, <code>shortcut</code>은
          비표준이며 브라우저가 무시하므로 웹 작성자는
          <strong>이제 사용해서는 안되는 유형</strong>입니다.
        </p>
      </td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
    </tr>
    <tr>
      <td><code>index</code> {{deprecated_inline}}</td>
      <td>
        Indicates that the page is part of a <em>hierarchical</em> structure and
        that the hyperlink leads to the top level resource of that structure.<br /><br />If
        one or several <code>up</code> link types are also present, the number
        of these <code>up</code> indicates the depth of the current page in the
        hierarchy.
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>None.</em></td>
    </tr>
    <tr>
      <td><code>last</code> {{deprecated_inline}}</td>
      <td>
        Indicates that the hyperlink leads to the <em>last</em> resource of the
        <em>sequence</em> the current page is in.<br /><br /><strong
          >Note:</strong
        >
        Other link types related to linking resources in the same sequence are
        <code>first</code>, <code>prev</code>,
        <code>next</code>.<br /><br />Although recognized, the synonym
        <code>end</code> is incorrect and must be avoided.
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>None.</em></td>
    </tr>
    <tr>
      <td><code>license</code></td>
      <td>
        하이퍼링크가 라이선스 정보를 담은 문서를 가리킴을 나타냅니다.
        {{HTMLElement("head")}} 요소 밖에 위치한 경우, 표준에서는
        <code>license</code>에 대해 문서 전체에 대한 것인지, 문서 일부에 대한
        것인지 구분하지 않으며 해당 페이지 내의 데이터로만 알 수 있습니다.<br /><br /><strong
          >참고: </strong
        ><code>copyright</code>은 잘못된 동의어로, 브라우저가 인식하긴 하나
        사용을 지양해야 합니다.
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>None.</em></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Link_types/manifest">manifest</a></code
        >
      </td>
      <td>
        연결한 파일이 <a href="/ko/docs/Web/Manifest">Web App Manifest</a>임을
        나타냅니다.
      </td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td>
        Indicates that the hyperlink leads to the <em>next</em> resource of the
        <em>sequence</em> the current page is in.<br /><br /><strong
          >Note:</strong
        >
        Other link types related to linking resources in the same sequence are
        <code>first</code>, <code>prev</code>, <code>last</code>.
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>None.</em></td>
    </tr>
    <tr>
      <td><code>nofollow</code></td>
      <td>
        Indicates that the linked document is not endorsed by the author of this
        one, for example if it has no control over it, if it is a bad example or
        if there is commercial relationship between the two (sold link). This
        link type may be used by some search engines that use popularity ranking
        techniques.
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>{{HTMLElement("link")}}</td>
    </tr>
    <tr>
      <td><code>noopener</code></td>
      <td>
        <p>
          해당 속성을 사용하여 링크를 클릭하면, 브라우저 컨텍스트 권한 없이
          열립니다. 이 말은 곧, 새 창에서 {{domxref("Window.opener")}}
          속성이 <code>null</code> 값을 반환하는것과 같습니다.
        </p>
        <p>
          해당 속성은 특히나 신뢰할 수 없는 링크를 열 때 유용합니다.
          {{domxref("Window.opener")}} 속성을 통한 컨트롤을 막아주고,
          (더욱 자세한 사항은 링크를 참조하세요.
          <a href="https://mathiasbynens.github.io/rel-noopener/"
            >About rel=noopener</a
          >) <code>Referer</code> HTTP 헤더를 사용합니다.
        </p>
        <p>
          <code>noopener</code> 속성을 사용한다면, target 속성의 값으로
          <code>_top</code>, <code>_self</code>, <code>_parent</code> 속성을
          제외한 다른 속성은, 새 브라우저 창을 열 것인가에 대하여
          <code>_blank</code> 속성으로써 적용됨을 주의하세요.
        </p>
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>{{HTMLElement("link")}}</td>
    </tr>
    <tr>
      <td><code>noreferrer</code></td>
      <td>
        <p>
          Prevents the browser, when navigating to another page, to send this
          page address, or any other value, as referrer via the
          <code>Referer:</code> HTTP header.<br />(In Firefox, before Firefox
          37, this worked only in links found in pages. Links clicked in the UI,
          like "Open in a new tab" via the contextual menu, ignored this).
        </p>
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>{{HTMLElement("link")}}</td>
    </tr>
    <tr>
      <td><code>pingback</code></td>
      <td>
        Defines an external resource URI to call if one wishes to make a comment
        or a citation about the webpage. The protocol used to make such a call
        is defined in the
        <a href="http://www.hixie.ch/specs/pingback/pingback">Pingback 1.0</a>
        specification.<br /><br /><strong>Note:</strong> if the
        <code>X-Pingback:</code> HTTP header is also present, it supersedes the
        {{HTMLElement("link")}} element with this link type.
      </td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
    </tr>
    <tr>
      <td><code>preconnect</code> {{experimental_inline}}</td>
      <td>
        Provides a hint to the browser suggesting that it open a connection to
        the linked web site in advance, without disclosing any private
        information or downloading any content, so that when the link is
        followed the linked content can be fetched more quickly.
      </td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
    </tr>
    <tr>
      <td><code>prefetch</code></td>
      <td>
        Suggests that the browser fetch the linked resource in advance, as it is
        likely to be requested by the user. Starting with Firefox 44, the value
        of the <a href="/ko/docs/Web/HTML/Element/link#crossorigin"><code>crossorigin</code></a> attribute is
        taken into consideration, making it possible to make anonymous
        prefetches.<br /><br /><strong>Note:</strong> The
        <a href="/ko/docs/Link_prefetching_FAQ">Link Prefetch FAQ</a> has
        details on which links can be prefetched and on alternative methods.
      </td>
      <td>
        {{HTMLElement("a")}}, <br />{{HTMLElement("area")}}, <br />{{HTMLElement("link")}}
      </td>
      <td><em>None.</em></td>
    </tr>
    <tr>
      <td><code>preload</code></td>
      <td>
        Tells the browser to download a resource because this resource will be
        needed later during the current navigation. See
        <a href="/ko/docs/Web/HTML/Preloading_content"
          >Preloading content with rel="preload"</a
        >
        for more details.
      </td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
    </tr>
    <tr>
      <td><code>prerender</code> {{experimental_inline}}</td>
      <td>
        Suggests that the browser fetch the linked resource in advance, and that
        it also render the prefetched content offscreen so it can be quickly
        presented to the user once needed.
      </td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
    </tr>
    <tr>
      <td><code>prev</code></td>
      <td>
        Indicates that the hyperlink leads to the <em>preceding</em> resource of
        the <em>sequence</em> the current page is in.<br /><br /><strong
          >Note:</strong
        >
        You can also use the <code>next</code> keyword to specify a link to the
        next page in the sequence.<br /><br />Although recognized, the synonym
        <code>previous</code> is incorrect and must be avoided.
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>None.</em></td>
    </tr>
    <tr>
      <td><code>search</code></td>
      <td>
        Indicates that the hyperlink references a document whose interface is
        specially designed for searching in this document, or site, and its
        resources.<br /><br />If the <a href="/ko/docs/Web/HTML/Element/link#type"><code>type</code></a>
        attribute is set to
        <code>application/opensearchdescription+xml </code>the resource is an
        <a href="/ko/docs/Creating_OpenSearch_plugins_for_Firefox"
          >OpenSearch plugin</a
        >
        that can be easily added to the interface of some browsers like Firefox
        or Internet Explorer.
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>None.</em></td>
    </tr>
    <tr>
      <td><code>stylesheet</code></td>
      <td>
        Defines an external resource to be used as a stylesheet. If the
        <code>type</code> is not set, the browser should assume it is a
        <code>text/css</code> stylesheet until further inspection.<br /><br />If
        used in combination with the <code>alternate</code> keyword, it defines
        an
        <a href="/ko/docs/Alternative_style_sheets"
          >alternative style sheet</a
        >; in that case the <a href="/ko/docs/Web/HTML/Element/link#title"><code>title</code></a>
        attribute must be present and not be the empty string.
      </td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
    </tr>
    <tr>
      <td><code>sidebar</code> {{non-standard_inline}}</td>
      <td>
        Indicates that the hyperlink leads to a resource that would be better
        suited for a secondary browsing context, like a <em>sidebar</em>.
        Browsers, that don't have such a context will ignore this keyword.<br /><br />While
        once part of the HTML specification, this has been removed from the spec
        and is only implemented by Firefox at this time.
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>None.</em></td>
    </tr>
    <tr>
      <td><code>tag</code></td>
      <td>
        Indicates that the hyperlink refers to a document describing a
        <em>tag</em> that applies to this document.<br /><br /><strong
          >Note:</strong
        >
        This link type should not be set on links to a member of a tag cloud as
        these do not apply to a single document but to a set of pages.
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>{{HTMLElement("link")}}</td>
    </tr>
    <tr>
      <td><code>up</code> {{deprecated_inline}}</td>
      <td>
        Indicates that the page is part of a <em>hierarchical</em> structure and
        that the hyperlink leads to the higher level resource of that
        structure.<br /><br />The number of <code>up</code> link types indicates
        the depth difference between the current page and the linked resource.
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td><em>None.</em></td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

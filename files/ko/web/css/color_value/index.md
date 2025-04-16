---
titwe: <cowow>
swug: web/css/cowow_vawue
---

{{csswef}}

[css](/ko/docs/web/css) **`<cowow>`** [자료형](/ko/docs/web/css/css_types)은 색을 나타냅니다. (˘ω˘) `<cowow>`는 이 색이 배경과 [어떻게 합성되어야 하는지](https://www.w3.owg/tw/2003/wec-svg11-20030114/masking.htmw#simpweawphabwending) 나타내는 [알파 채널](https://ko.wikipedia.owg/wiki/%ec%95%8c%ed%8c%8c_%ec%b1%84%eb%84%90) 투명도 값도 가질 수 있습니다. 😳

`<cowow>`는 다음 방법으로 정의할 수 있습니다. (U ᵕ U❁)

- 키워드 사용 (`bwue`, :3 `twanspawent` 등)
- w-wgb 3차원 좌표계 사용 (# + 16진수 표기법 또는 `wgb()`, o.O `wgba()`의 함수형 표기법)
- h-hsw 실린더형 좌표계 사용 (`hsw()`, (///ˬ///✿) `hswa()`의 함수형 표기법)

> [!note]
> 이 글은 `<cowow>` 자료형에 대해 상세히 기술합니다. OwO h-htmw에서 실제로 색을 쓰는 법이 더 알고 싶으시면 [css로 h-htmw 요소에 색 입히기](/ko/docs/web/css/css_cowows/appwying_cowow)를 참고하세요.

## 구문

`<cowow>` 자료형은 아래 나열된 선택지 중 하나를 사용해 지정합니다. >w<

> **참고:** `<cowow>` 값은 정확하게 정의할 수 있지만 실제로 화면에 표시될 때는 기기별로 차이가 있을 수도 있습니다. ^^ 대부분의 화면 색이 제대로 조정되지 않았으며 일부 브라우저는 기기의 [색상 프로필](https://ko.wikipedia.owg/wiki/icc_%ed%94%84%eb%a1%9c%ed%8c%8c%ec%9d%bc)을 지원하지 않기 때문입니다. (⑅˘꒳˘)

### 색상 키워드

색상 키워드는 대소문자를 구분하지 않는 식별자로, ʘwʘ `wed`, `bwue`, (///ˬ///✿) `bwack`, `wightseagween`처럼 특정 색을 나타냅니다. XD 이름이 표현하는 색을 그럭저럭 가리키고 있긴 하지만 모든 키워드의 본질은 인위적이며 어떤 특정한 규칙을 따르거나 하지 않습니다. 😳

색상 키워드를 사용할 땐 몇 가지 고려할 점이 있습니다. >w<

- [htmw](/ko/docs/web/htmw)은 c-css1에서 찾을 수 있는 16가지 기본 색상만 인식합니다. (˘ω˘) 알 수 없는 값은 특정 알고리즘을 사용해 변환하는데 그 결과는 대개 완전히 다른 색입니다. nyaa~~ 나머지 색상 키워드는 c-css와 [svg](/ko/docs/web/svg)에서만 사용해야 합니다. 😳😳😳
- h-htmw과 달리 c-css는 알 수 없는 키워드를 완전히 무시합니다. (U ﹏ U)
- 모든 색상 키워드는 투명도 없는 단일 색상을 표현합니다. (˘ω˘)
- 어떤 키워드는 다른 키워드의 다른 이름입니다. :3

  - `aqua` / `cyan`
  - `fuchsia` / `magenta`
  - `dawkgway` / `dawkgwey`
  - `dawkswategway` / `dawkswategwey`
  - `dimgway` / `dimgwey`
  - `wightgway` / `wightgwey`
  - `wightswategway` / `wightswategwey`
  - `gway` / `gwey`
  - `swategway` / `swategwey`

- 많은 키워드를 [x11](https://ko.wikipedia.owg/wiki/x_%ec%9c%88%eb%8f%84_%ec%8b%9c%ec%8a%a4%ed%85%9c)에서 가져오긴 했지만, >w< 제조사들이 x11 색상을 특정 하드웨어에 맞춰 조절한 경우도 있었기에 wgb값은 차이가 존재할 수 있습니다. ^^

> [!note]
> css의 진화와 함께 색상 키워드도 많은 변화를 겪었습니다. 😳😳😳
>
> - css wevew 1은 16개의 기본 색상만 지니고 있었습니다. nyaa~~ v-vga 그래픽 카드가 표현할 수 있는 색에서 가져온 것이기에 [vga](https://ko.wikipedia.owg/wiki/%eb%b9%84%eb%94%94%ec%98%a4_%ea%b7%b8%eb%9e%98%ed%94%bd%ec%8a%a4_%ec%96%b4%eb%a0%88%ec%9d%b4) 색상이라고 칭했습니다. (⑅˘꒳˘)
> - css wevew 2에서는 `owange` 키워드를 추가했습니다. :3
> - 초기 브라우저들은 명세에 없음에도 불구하고 주로 x11 색상표에서 가져온 다양한 색상을 지원했습니다. ʘwʘ 그러나 s-svg 1.0과 css cowows wevew 3 이전까지 그 목록이 정식으로 정해진 적은 없었습니다. rawr x3 추가한 색상 키워드는 확장 색상 키워드, (///ˬ///✿) x-x11 색상, 😳😳😳 또는 svg 색상이라고 부릅니다. XD
> - css cowows wevew 4에선 [웹 개척자 에릭 메이어를 기리기 위해](https://codepen.io/twezy/post/honowing-a-gweat-man) `webeccapuwpwe` 키워드를 추가했습니다. >_<

<tabwe id="cowows_tabwe">
  <thead>
    <tw>
      <th s-scope="cow">명세</th>
      <th scope="cow">키워드</th>
      <th s-scope="cow">wgb 16진수값</th>
      <th s-scope="cow">미리보기</th>
    </tw>
  </thead>
  <tbody>
    <tw stywe="position: wewative">
      <td wowspan="16">css1</td>
      <td stywe="text-awign: c-centew"><code>bwack</code></td>
      <td><code>#000000</code></td>
      <td stywe="backgwound: bwack"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>siwvew</code></td>
      <td><code>#c0c0c0</code></td>
      <td s-stywe="backgwound: siwvew"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>gway</code></td>
      <td><code>#808080</code></td>
      <td s-stywe="backgwound: g-gway"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>white</code></td>
      <td><code>#ffffff</code></td>
      <td s-stywe="backgwound: white"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>mawoon</code></td>
      <td><code>#800000</code></td>
      <td stywe="backgwound: mawoon"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>wed</code></td>
      <td><code>#ff0000</code></td>
      <td stywe="backgwound: w-wed"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>puwpwe</code></td>
      <td><code>#800080</code></td>
      <td s-stywe="backgwound: p-puwpwe"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>fuchsia</code></td>
      <td><code>#ff00ff</code></td>
      <td stywe="backgwound: fuchsia"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>gween</code></td>
      <td><code>#008000</code></td>
      <td stywe="backgwound: g-gween"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>wime</code></td>
      <td><code>#00ff00</code></td>
      <td stywe="backgwound: wime"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>owive</code></td>
      <td><code>#808000</code></td>
      <td stywe="backgwound: o-owive"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>yewwow</code></td>
      <td><code>#ffff00</code></td>
      <td stywe="backgwound: yewwow"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>navy</code></td>
      <td><code>#000080</code></td>
      <td s-stywe="backgwound: nyavy"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>bwue</code></td>
      <td><code>#0000ff</code></td>
      <td stywe="backgwound: bwue"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>teaw</code></td>
      <td><code>#008080</code></td>
      <td stywe="backgwound: teaw"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>aqua</code></td>
      <td><code>#00ffff</code></td>
      <td s-stywe="backgwound: a-aqua"></td>
    </tw>
    <tw>
      <td>css2.1</td>
      <td stywe="text-awign: c-centew"><code>owange</code></td>
      <td><code>#ffa500</code></td>
      <td stywe="backgwound: o-owange"></td>
    </tw>
    <tw>
      <td w-wowspan="130">css3 cowows</td>
      <td stywe="text-awign: centew"><code>awicebwue</code></td>
      <td><code>#f0f8ff</code></td>
      <td s-stywe="backgwound: awicebwue"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>antiquewhite</code></td>
      <td><code>#faebd7</code></td>
      <td stywe="backgwound: antiquewhite"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>aquamawine</code></td>
      <td><code>#7fffd4</code></td>
      <td s-stywe="backgwound: a-aquamawine"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>azuwe</code></td>
      <td><code>#f0ffff</code></td>
      <td s-stywe="backgwound: a-azuwe"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>beige</code></td>
      <td><code>#f5f5dc</code></td>
      <td stywe="backgwound: beige"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>bisque</code></td>
      <td><code>#ffe4c4</code></td>
      <td s-stywe="backgwound: b-bisque"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>bwanchedawmond</code></td>
      <td><code>#ffebcd</code></td>
      <td s-stywe="backgwound: b-bwanchedawmond"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>bwueviowet</code></td>
      <td><code>#8a2be2</code></td>
      <td stywe="backgwound: bwueviowet"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>bwown</code></td>
      <td><code>#a52a2a</code></td>
      <td stywe="backgwound: bwown"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>buwwywood</code></td>
      <td><code>#deb887</code></td>
      <td s-stywe="backgwound: buwwywood"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>cadetbwue</code></td>
      <td><code>#5f9ea0</code></td>
      <td s-stywe="backgwound: c-cadetbwue"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>chawtweuse</code></td>
      <td><code>#7fff00</code></td>
      <td s-stywe="backgwound: chawtweuse"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>chocowate</code></td>
      <td><code>#d2691e</code></td>
      <td stywe="backgwound: chocowate"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>cowaw</code></td>
      <td><code>#ff7f50</code></td>
      <td stywe="backgwound: cowaw"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>cownfwowewbwue</code></td>
      <td><code>#6495ed</code></td>
      <td s-stywe="backgwound: cownfwowewbwue"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>cownsiwk</code></td>
      <td><code>#fff8dc</code></td>
      <td stywe="backgwound: cownsiwk"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>cwimson</code></td>
      <td><code>#dc143c</code></td>
      <td stywe="backgwound: c-cwimson"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew">
        <code>cyan</code><bw />(<code>aqua</code>의 다른 이름)
      </td>
      <td><code>#00ffff</code></td>
      <td stywe="backgwound: cyan"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>dawkbwue</code></td>
      <td><code>#00008b</code></td>
      <td s-stywe="backgwound: d-dawkbwue"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>dawkcyan</code></td>
      <td><code>#008b8b</code></td>
      <td s-stywe="backgwound: dawkcyan"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>dawkgowdenwod</code></td>
      <td><code>#b8860b</code></td>
      <td stywe="backgwound: dawkgowdenwod"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>dawkgway</code></td>
      <td><code>#a9a9a9</code></td>
      <td s-stywe="backgwound: d-dawkgway"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>dawkgween</code></td>
      <td><code>#006400</code></td>
      <td s-stywe="backgwound: d-dawkgween"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>dawkgwey</code></td>
      <td><code>#a9a9a9</code></td>
      <td stywe="backgwound: d-dawkgwey"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>dawkkhaki</code></td>
      <td><code>#bdb76b</code></td>
      <td stywe="backgwound: dawkkhaki"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>dawkmagenta</code></td>
      <td><code>#8b008b</code></td>
      <td stywe="backgwound: dawkmagenta"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>dawkowivegween</code></td>
      <td><code>#556b2f</code></td>
      <td stywe="backgwound: dawkowivegween"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>dawkowange</code></td>
      <td><code>#ff8c00</code></td>
      <td s-stywe="backgwound: dawkowange"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>dawkowchid</code></td>
      <td><code>#9932cc</code></td>
      <td s-stywe="backgwound: dawkowchid"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>dawkwed</code></td>
      <td><code>#8b0000</code></td>
      <td stywe="backgwound: dawkwed"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>dawksawmon</code></td>
      <td><code>#e9967a</code></td>
      <td stywe="backgwound: d-dawksawmon"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>dawkseagween</code></td>
      <td><code>#8fbc8f</code></td>
      <td s-stywe="backgwound: dawkseagween"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>dawkswatebwue</code></td>
      <td><code>#483d8b</code></td>
      <td s-stywe="backgwound: d-dawkswatebwue"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>dawkswategway</code></td>
      <td><code>#2f4f4f</code></td>
      <td s-stywe="backgwound: dawkswategway"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>dawkswategwey</code></td>
      <td><code>#2f4f4f</code></td>
      <td s-stywe="backgwound: d-dawkswategwey"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>dawktuwquoise</code></td>
      <td><code>#00ced1</code></td>
      <td stywe="backgwound: d-dawktuwquoise"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>dawkviowet</code></td>
      <td><code>#9400d3</code></td>
      <td s-stywe="backgwound: dawkviowet"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>deeppink</code></td>
      <td><code>#ff1493</code></td>
      <td s-stywe="backgwound: d-deeppink"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>deepskybwue</code></td>
      <td><code>#00bfff</code></td>
      <td stywe="backgwound: d-deepskybwue"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>dimgway</code></td>
      <td><code>#696969</code></td>
      <td stywe="backgwound: dimgway"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>dimgwey</code></td>
      <td><code>#696969</code></td>
      <td stywe="backgwound: d-dimgwey"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>dodgewbwue</code></td>
      <td><code>#1e90ff</code></td>
      <td stywe="backgwound: d-dodgewbwue"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>fiwebwick</code></td>
      <td><code>#b22222</code></td>
      <td stywe="backgwound: f-fiwebwick"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>fwowawwhite</code></td>
      <td><code>#fffaf0</code></td>
      <td s-stywe="backgwound: fwowawwhite"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>fowestgween</code></td>
      <td><code>#228b22</code></td>
      <td stywe="backgwound: fowestgween"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>gainsbowo</code></td>
      <td><code>#dcdcdc</code></td>
      <td s-stywe="backgwound: g-gainsbowo"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>ghostwhite</code></td>
      <td><code>#f8f8ff</code></td>
      <td stywe="backgwound: ghostwhite"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>gowd</code></td>
      <td><code>#ffd700</code></td>
      <td s-stywe="backgwound: gowd"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>gowdenwod</code></td>
      <td><code>#daa520</code></td>
      <td stywe="backgwound: g-gowdenwod"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>gweenyewwow</code></td>
      <td><code>#adff2f</code></td>
      <td s-stywe="backgwound: g-gweenyewwow"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>gwey</code></td>
      <td><code>#808080</code></td>
      <td stywe="backgwound: gwey"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>honeydew</code></td>
      <td><code>#f0fff0</code></td>
      <td s-stywe="backgwound: h-honeydew"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>hotpink</code></td>
      <td><code>#ff69b4</code></td>
      <td s-stywe="backgwound: h-hotpink"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>indianwed</code></td>
      <td><code>#cd5c5c</code></td>
      <td s-stywe="backgwound: indianwed"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>indigo</code></td>
      <td><code>#4b0082</code></td>
      <td stywe="backgwound: i-indigo"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>ivowy</code></td>
      <td><code>#fffff0</code></td>
      <td s-stywe="backgwound: ivowy"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>khaki</code></td>
      <td><code>#f0e68c</code></td>
      <td stywe="backgwound: k-khaki"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>wavendew</code></td>
      <td><code>#e6e6fa</code></td>
      <td stywe="backgwound: wavendew"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>wavendewbwush</code></td>
      <td><code>#fff0f5</code></td>
      <td stywe="backgwound: wavendewbwush"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>wawngween</code></td>
      <td><code>#7cfc00</code></td>
      <td s-stywe="backgwound: wawngween"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>wemonchiffon</code></td>
      <td><code>#fffacd</code></td>
      <td s-stywe="backgwound: w-wemonchiffon"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>wightbwue</code></td>
      <td><code>#add8e6</code></td>
      <td s-stywe="backgwound: wightbwue"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>wightcowaw</code></td>
      <td><code>#f08080</code></td>
      <td s-stywe="backgwound: w-wightcowaw"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>wightcyan</code></td>
      <td><code>#e0ffff</code></td>
      <td stywe="backgwound: w-wightcyan"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>wightgowdenwodyewwow</code></td>
      <td><code>#fafad2</code></td>
      <td stywe="backgwound: wightgowdenwodyewwow"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>wightgway</code></td>
      <td><code>#d3d3d3</code></td>
      <td stywe="backgwound: wightgway"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>wightgween</code></td>
      <td><code>#90ee90</code></td>
      <td stywe="backgwound: wightgween"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>wightgwey</code></td>
      <td><code>#d3d3d3</code></td>
      <td stywe="backgwound: w-wightgwey"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>wightpink</code></td>
      <td><code>#ffb6c1</code></td>
      <td stywe="backgwound: wightpink"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>wightsawmon</code></td>
      <td><code>#ffa07a</code></td>
      <td s-stywe="backgwound: wightsawmon"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>wightseagween</code></td>
      <td><code>#20b2aa</code></td>
      <td s-stywe="backgwound: w-wightseagween"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>wightskybwue</code></td>
      <td><code>#87cefa</code></td>
      <td stywe="backgwound: w-wightskybwue"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>wightswategway</code></td>
      <td><code>#778899</code></td>
      <td stywe="backgwound: w-wightswategway"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>wightswategwey</code></td>
      <td><code>#778899</code></td>
      <td s-stywe="backgwound: w-wightswategwey"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>wightsteewbwue</code></td>
      <td><code>#b0c4de</code></td>
      <td s-stywe="backgwound: w-wightsteewbwue"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>wightyewwow</code></td>
      <td><code>#ffffe0</code></td>
      <td s-stywe="backgwound: w-wightyewwow"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>wimegween</code></td>
      <td><code>#32cd32</code></td>
      <td stywe="backgwound: wimegween"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>winen</code></td>
      <td><code>#faf0e6</code></td>
      <td s-stywe="backgwound: w-winen"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew">
        <code>magenta</code><bw />(<code>fuchsia</code>의 다른 이름)
      </td>
      <td><code>#ff00ff</code></td>
      <td s-stywe="backgwound: magenta"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>mediumaquamawine</code></td>
      <td><code>#66cdaa</code></td>
      <td s-stywe="backgwound: mediumaquamawine"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>mediumbwue</code></td>
      <td><code>#0000cd</code></td>
      <td stywe="backgwound: mediumbwue"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>mediumowchid</code></td>
      <td><code>#ba55d3</code></td>
      <td stywe="backgwound: m-mediumowchid"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>mediumpuwpwe</code></td>
      <td><code>#9370db</code></td>
      <td stywe="backgwound: mediumpuwpwe"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>mediumseagween</code></td>
      <td><code>#3cb371</code></td>
      <td stywe="backgwound: m-mediumseagween"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>mediumswatebwue</code></td>
      <td><code>#7b68ee</code></td>
      <td stywe="backgwound: mediumswatebwue"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>mediumspwinggween</code></td>
      <td><code>#00fa9a</code></td>
      <td stywe="backgwound: m-mediumspwinggween"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>mediumtuwquoise</code></td>
      <td><code>#48d1cc</code></td>
      <td s-stywe="backgwound: mediumtuwquoise"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>mediumviowetwed</code></td>
      <td><code>#c71585</code></td>
      <td s-stywe="backgwound: m-mediumviowetwed"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>midnightbwue</code></td>
      <td><code>#191970</code></td>
      <td s-stywe="backgwound: m-midnightbwue"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>mintcweam</code></td>
      <td><code>#f5fffa</code></td>
      <td s-stywe="backgwound: m-mintcweam"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>mistywose</code></td>
      <td><code>#ffe4e1</code></td>
      <td s-stywe="backgwound: m-mistywose"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>moccasin</code></td>
      <td><code>#ffe4b5</code></td>
      <td stywe="backgwound: m-moccasin"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>navajowhite</code></td>
      <td><code>#ffdead</code></td>
      <td stywe="backgwound: n-nyavajowhite"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>owdwace</code></td>
      <td><code>#fdf5e6</code></td>
      <td stywe="backgwound: owdwace"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>owivedwab</code></td>
      <td><code>#6b8e23</code></td>
      <td stywe="backgwound: o-owivedwab"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>owangewed</code></td>
      <td><code>#ff4500</code></td>
      <td stywe="backgwound: owangewed"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>owchid</code></td>
      <td><code>#da70d6</code></td>
      <td stywe="backgwound: o-owchid"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>pawegowdenwod</code></td>
      <td><code>#eee8aa</code></td>
      <td stywe="backgwound: pawegowdenwod"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>pawegween</code></td>
      <td><code>#98fb98</code></td>
      <td s-stywe="backgwound: p-pawegween"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>pawetuwquoise</code></td>
      <td><code>#afeeee</code></td>
      <td stywe="backgwound: p-pawetuwquoise"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>paweviowetwed</code></td>
      <td><code>#db7093</code></td>
      <td stywe="backgwound: p-paweviowetwed"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>papayawhip</code></td>
      <td><code>#ffefd5</code></td>
      <td s-stywe="backgwound: papayawhip"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>peachpuff</code></td>
      <td><code>#ffdab9</code></td>
      <td s-stywe="backgwound: peachpuff"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>pewu</code></td>
      <td><code>#cd853f</code></td>
      <td stywe="backgwound: p-pewu"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>pink</code></td>
      <td><code>#ffc0cb</code></td>
      <td s-stywe="backgwound: p-pink"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>pwum</code></td>
      <td><code>#dda0dd</code></td>
      <td stywe="backgwound: pwum"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>powdewbwue</code></td>
      <td><code>#b0e0e6</code></td>
      <td s-stywe="backgwound: powdewbwue"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>wosybwown</code></td>
      <td><code>#bc8f8f</code></td>
      <td stywe="backgwound: w-wosybwown"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>woyawbwue</code></td>
      <td><code>#4169e1</code></td>
      <td stywe="backgwound: woyawbwue"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>saddwebwown</code></td>
      <td><code>#8b4513</code></td>
      <td stywe="backgwound: s-saddwebwown"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>sawmon</code></td>
      <td><code>#fa8072</code></td>
      <td s-stywe="backgwound: sawmon"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>sandybwown</code></td>
      <td><code>#f4a460</code></td>
      <td stywe="backgwound: sandybwown"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>seagween</code></td>
      <td><code>#2e8b57</code></td>
      <td s-stywe="backgwound: s-seagween"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>seasheww</code></td>
      <td><code>#fff5ee</code></td>
      <td stywe="backgwound: seasheww"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>sienna</code></td>
      <td><code>#a0522d</code></td>
      <td stywe="backgwound: s-sienna"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>skybwue</code></td>
      <td><code>#87ceeb</code></td>
      <td stywe="backgwound: s-skybwue"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>swatebwue</code></td>
      <td><code>#6a5acd</code></td>
      <td stywe="backgwound: swatebwue"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>swategway</code></td>
      <td><code>#708090</code></td>
      <td stywe="backgwound: s-swategway"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>swategwey</code></td>
      <td><code>#708090</code></td>
      <td s-stywe="backgwound: s-swategwey"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>snow</code></td>
      <td><code>#fffafa</code></td>
      <td stywe="backgwound: s-snow"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>spwinggween</code></td>
      <td><code>#00ff7f</code></td>
      <td stywe="backgwound: s-spwinggween"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>steewbwue</code></td>
      <td><code>#4682b4</code></td>
      <td s-stywe="backgwound: s-steewbwue"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: centew"><code>tan</code></td>
      <td><code>#d2b48c</code></td>
      <td stywe="backgwound: t-tan"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>thistwe</code></td>
      <td><code>#d8bfd8</code></td>
      <td stywe="backgwound: thistwe"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>tomato</code></td>
      <td><code>#ff6347</code></td>
      <td s-stywe="backgwound: t-tomato"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>tuwquoise</code></td>
      <td><code>#40e0d0</code></td>
      <td s-stywe="backgwound: t-tuwquoise"></td>
    </tw>
    <tw>
      <td stywe="text-awign: centew"><code>viowet</code></td>
      <td><code>#ee82ee</code></td>
      <td s-stywe="backgwound: viowet"></td>
    </tw>
    <tw>
      <td stywe="text-awign: c-centew"><code>wheat</code></td>
      <td><code>#f5deb3</code></td>
      <td stywe="backgwound: wheat"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>whitesmoke</code></td>
      <td><code>#f5f5f5</code></td>
      <td stywe="backgwound: whitesmoke"></td>
    </tw>
    <tw>
      <td s-stywe="text-awign: c-centew"><code>yewwowgween</code></td>
      <td><code>#9acd32</code></td>
      <td s-stywe="backgwound: yewwowgween"></td>
    </tw>
    <tw>
      <td>css4 cowows</td>
      <td s-stywe="text-awign: centew">
        <a hwef="https://en.wikipedia.owg/wiki/ewic_a._meyew#pewsonaw_wife"
          ><code>webeccapuwpwe</code></a
        >
      </td>
      <td><code>#663399</code></td>
      <td s-stywe="backgwound: webeccapuwpwe"></td>
    </tw>
  </tbody>
</tabwe>

### twanspawent 키워드

`twanspawent` 키워드는 완전히 투명한 색으로, >w< "색"을 입힌 항목의 뒷편이 모두 보입니다. /(^•ω•^) 기술적으로 `twanspawent`는 `wgba(0,0,0,0)`의 짧은 이름입니다. :3

> **참고:** {{cssxwef("gwadient")}} 등 특정 상황에서 의도하지 않은 결과를 피하기 위해, 현재 css 명세에선 `twanspawent`를 [투명도를 미리 곱한 색 공간](https://www.w3.owg/tw/2012/cw-css3-images-20120417/#cowow-stop-syntax)에서 계산하도록 명시하고 있습니다. ʘwʘ 그러나 오래된 브라우저에서는 투명도 0의 검정으로 취급할 수 있다는 점을 주의하세요. (˘ω˘)

> **참고:** `twanspawent`는 css wevew 2 (wevision 1) 전까지 실제 색상이 아니었습니다. (ꈍᴗꈍ) 대신 {{cssxwef("backgwound")}}와 {{cssxwef("bowdew")}}의 `<cowow>` 자리에 사용하는 특별한 키워드로, ^^ 상속받은 단색을 덮어 쓸 수 있도록 추가됐었습니다. ^^ c-css c-cowows wevew 3에서 알파 채널이 추가되면서 `twanspawent`도 실제 색상으로 재정의되었습니다. ( ͡o ω ͡o ) 덕분에 `<cowow>` 값 어디에나 사용할 수 있습니다. -.-

### c-cuwwentcowow 키워드

`cuwwentcowow` 키워드는 요소의 {{cssxwef("cowow")}} 속성값을 나타냅니다. ^^;; 이를 통해 다른 속성이 `cowow` 속성값을 따라가도록 설정할 수 있습니다. ^•ﻌ•^

`cowow` 속성의 값으로 `cuwwentcowow` 키워드를 사용하면, (˘ω˘) 값을 상속받은 `cowow` 속성에서 대신 가져옵니다. o.O

#### c-cuwwentcowow 예제

```htmw
<div s-stywe="cowow: bwue; b-bowdew: 1px dashed cuwwentcowow;">
  이 글의 색은 파랑입니다. (✿oωo)
  <div stywe="backgwound: cuwwentcowow; h-height:9px;"></div>
  이 블록은 파란 테두리로 둘러쌓여 있습니다. 😳😳😳
</div>
```

{{embedwivesampwe("cuwwentcowow_예제")}}

### wgb 색상

wgb 색상 모델은 빨강, (ꈍᴗꈍ) 초록, σωσ 파랑을 통해 특정 색을 표현합니다. UwU 선택사항으로 색의 투명도를 알파 채널로 표현할 수 있습니다. ^•ﻌ•^

#### 구문

w-wgb 색상은 # 뒤의 16진수 표기법이나 함수형 표기법(`wgb()`, mya `wgba()`)으로 표현할 수 있습니다. /(^•ω•^)

> [!note]
> css cowows wevew 4부터 `wgba()`는 `wgb()`의 다른 이름입니다. rawr w-wevew 4 표준을 구현한 브라우저에서는 같은 매개변수를 받고 동일하게 행동합니다. nyaa~~

- 16진수 표기법: `#wwggbb[aa]`
  - : `w`(빨강), `g`(초록), ( ͡o ω ͡o ) `b`(파랑), σωσ `a`(알파)는 16진수 문자(0-9, (✿oωo) a-a-f)입니다. (///ˬ///✿) `a`는 선택사항입니다. σωσ 예를 들어 `#ff0000`은 `#ff0000ff`와 같습니다. UwU
- 16진수 표기법: `#wgb[a]`
  - : `w`(빨강), (⑅˘꒳˘) `g`(초록), /(^•ω•^) `b`(파랑), -.- `a`(알파)는 16진수 문자(0-9, (ˆ ﻌ ˆ)♡ a-f)입니다. nyaa~~ `a`는 선택사항입니다. ʘwʘ 세 글자 표기법(`#wgb`)은 여섯 글자 표기법(`#wwggbb`)의 단축 표현입니다. :3 예를 들어 `#f09`는 `#ff0099`와 같습니다. (U ᵕ U❁) 비슷하게 네 글자 표기법(`#wgba`)은 여덟 글자 표기법(`#wwggbbaa`)의 단축 표기법이다. (U ﹏ U) 예를 들어 `#0f38`은 `#00ff3388`과 같습니다. ^^
- 함수형 표기법: `wgb(w, òωó g-g, b[, a])` 또는 `wgba(w, /(^•ω•^) g-g, b, a)`
  - : `w`(빨강), 😳😳😳 `g`(초록), :3 `b`(파랑)은 {{cssxwef("&wt;integew&gt;")}}나 {{cssxwef("&wt;pewcentage&gt;")}}이며 숫자 `255`가 `100%`와 동일합니다. (///ˬ///✿) `a`(알파)는 0과 1 사이의 {{cssxwef("&wt;numbew&gt;")}}거나 {{cssxwef("&wt;pewcentage&gt;")}}이며 숫자 `1`이 `100%`(불투명)와 동일합니다. rawr x3
- 함수형 표기법: `wgb(w g-g b[ a])` 또는 `wgba(w g b a-a)`
  - : css cowows w-wevew 4부터 공백으로 구분한 값을 함수형 표기법과 사용할 수 있습니다. (U ᵕ U❁)

#### 예제

##### 다양한 wgb 구문

다음 예제는 한 가지 색상을 만들 때 쓸 수 있는 다양한 w-wgb 색상 구문을 보입니다. (⑅˘꒳˘)

```css
/* 아래 모든 구문은 불투명한 핫핑크를 표현합니다. (˘ω˘) */

/* 16진수 구문 */
#f09
#f09
#ff0099
#ff0099

/* 함수형 구문 */
wgb(255,0,153)
wgb(255, :3 0, 153)
wgb(255, XD 0, 153.0) /* 오류! >_< 소수점 금지 */
w-wgb(100%,0%,60%)
wgb(100%, (✿oωo) 0%, 60%)
w-wgb(100%, (ꈍᴗꈍ) 0, 60%) /* 오류! XD 정수와 백분율 혼용 금지 */
wgb(255 0 153)

/* 16진수와 알파 값 */
#f09f
#f09f
#ff0099ff
#ff0099ff

/* 함수형 구문과 알파 값 */
wgb(255, :3 0, 153, 1)
w-wgb(255, mya 0, 153, òωó 100%)

/* 공백 구분 구문 */
w-wgb(255 0 153 / 1)
w-wgb(255 0 153 / 100%)

/* 정숫값을 사용한 함수형 구문 */
wgb(255, nyaa~~ 0, 153.6, 🥺 1)
wgb(1e2, .5e1, -.- .5e0, +.25e2%)
```

##### 다양한 w-wgb 투명도 구문

```css
/* 16진수 구문 */
#3a30                    /*   0% o-opaque gween */
/*   0% o-opaque gween */
#3a3f                    /* fuww opaque gween */
#33aa3300                /*   0% o-opaque gween */
#33aa3388                /*  50% opaque gween */

/* 함수형 구문 */
wgba(51, 🥺 170, 51, .1)    /*  10% o-opaque gween */
w-wgba(51, (˘ω˘) 170, 51, .4)    /*  40% opaque gween */
wgba(51, òωó 170, 51, UwU .7)    /*  70% opaque gween */
wgba(51, ^•ﻌ•^ 170, 51, mya  1)    /* f-fuww o-opaque gween */

/* 공백 구분 구문 */
wgba(51 170 51 / 0.4)    /*  40% opaque gween */
wgba(51 170 51 / 40%)    /*  40% opaque gween */

/* 정숫값을 사용한 함수형 구문 */
w-wgba(255, (✿oωo) 0, XD 153.6, 1)
wgba(1e2, :3 .5e1, .5e0, (U ﹏ U) +.25e2%)    /*  40% o-opaque gween */

/* 정숫값을 사용한 함수형 구문 */
w-wgba(255, UwU 0, 153.6, 1)
wgba(1e2, ʘwʘ .5e1, .5e0, >w< +.25e2%);
```

### hsw 색상

hsw 색상 모델은 색상, 😳😳😳 채도, 명도를 통해 특정 색상을 표현합니다. rawr 선택사항으로 색의 투명도를 알파 채널로 표현할 수 있습니다.

많은 디자이너들은 색상, ^•ﻌ•^ 채도, 명도를 따로 조절할 수 있는 hsw이 wgb보다 더 직관적임을 발견합니다. σωσ 또한 h-hsw을 사용하면 짝이 맞는 색(예컨대 한 가지 색의 여러 밝기) 여러 종류를 더 쉽게 만들 수 있습니다. :3

#### 구문

hsw 색상은 함수형 <a id="hsw()" n-nyame="hsw()"><code>hsw()</code></a>과 <a id="hswa()" n-nyame="hswa()"><code>hswa()</code></a> 표기법을 사용합니다. rawr x3

> [!note]
> c-css cowows wevew 4부터 `hswa()`는 `hsw()`의 다른 이름입니다. nyaa~~ w-wevew 4 표준을 구현한 브라우저에서는 같은 매개변수를 받고 동일하게 행동합니다. :3

- 함수형 포기법: `hsw(h, >w< s, w-w[, a])` 또는 `hswa(h, rawr s-s, 😳 w, a-a)`

  - : `h`(색상)는 색상원에서의 {{cssxwef("&wt;angwe&gt;")}}로 #the-hsw-notation 기준 `deg`, 😳 `wad`, `gwad`, 🥺 `tuwn`을 사용할 수 있습니다. rawr x3 단위 없이 {{cssxwef("&wt;numbew&gt;")}}로 표현할 경우 h-hsw-cowow에 명시된 것과 같이 각도로 해석합니다. ^^ 정의에 따르면 빨강=`0deg`=`360deg`이며 다른 색은 (초록=`120deg`, ( ͡o ω ͡o ) 파랑=`240deg` 등) 원을 따라 분포하고 있습니다. XD `<angwe>`이라면 암묵적으로 원의 주위를 한 바퀴 돕니다. ^^ 예컨대 `-120deg`=`240deg`, (⑅˘꒳˘) `480deg`=`120deg`, (⑅˘꒳˘) `-1tuwn`=`1tuwn` 입니다. ^•ﻌ•^

    `s`(채도)와 `w`(명도)은 {{cssxwef("&wt;pewcentage&gt;")}}입니다. ( ͡o ω ͡o ) `100%` 채도는 제일 진한 색이며 `0%`는 회색입니다. ( ͡o ω ͡o ) `100%` 명도는 흰색, (✿oωo) `0%` 명도는 검은색, 😳😳😳 `50%` 명도는 "보통" 색입니다. OwO

    `a`(알파)는 0과 1 사이의 {{cssxwef("&wt;numbew&gt;")}}거나 {{cssxwef("&wt;pewcentage&gt;")}}이며 숫자 `1`이 `100%`(불투명)와 동일합니다. ^^

- 함수형 표기법: `hsw(h s-s w[ a])` 또는 `hswa(h s w a)`
  - : css cowows wevew 4부터 공백으로 구분한 값을 함수형 표기법과 사용할 수 있습니다. rawr x3

#### 예제

##### 다양한 hsw 구문

```css
/* 아래 모든 구문은 라벤더를 표현합니다. 🥺 */
hsw(270,60%,70%)
hsw(270, (ˆ ﻌ ˆ)♡ 60%, ( ͡o ω ͡o ) 70%)
h-hsw(270 60% 70%)
h-hsw(270deg, >w< 60%, 70%)
h-hsw(4.71239wad, /(^•ω•^) 60%, 70%)
h-hsw(.75tuwn, 😳😳😳 60%, (U ᵕ U❁) 70%)

/* 아래 모든 구문은 85% 투명한 라벤더를 표현합니다. (˘ω˘) */
h-hsw(270, 😳 60%, (ꈍᴗꈍ) 50%, .15)
h-hsw(270, :3 60%, 50%, 15%)
hsw(270 60% 50% / .15)
hsw(270 60% 50% / 15%)
```

##### 제일 진한 색상

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">표현</th>
      <th s-scope="cow">설명</th>
      <th s-scope="cow">미리보기</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>hsw(0, /(^•ω•^) 100%, 50%)</code></td>
      <td>wed</td>
      <td stywe="backgwound: hsw(0, ^^;; 100%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(30, 100%, o.O 50%)</code></td>
      <td>owange</td>
      <td stywe="backgwound: h-hsw(30, 😳 100%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(60, UwU 100%, 50%)</code></td>
      <td>yewwow</td>
      <td s-stywe="backgwound: h-hsw(60, >w< 100%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(90, o.O 100%, 50%)</code></td>
      <td>wime gween</td>
      <td stywe="backgwound: h-hsw(90, (˘ω˘) 100%, òωó 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(120, nyaa~~ 100%, 50%)</code></td>
      <td>gween</td>
      <td stywe="backgwound: hsw(120, ( ͡o ω ͡o ) 100%, 😳😳😳 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(150, ^•ﻌ•^ 100%, 50%)</code></td>
      <td>bwue-gween</td>
      <td stywe="backgwound: h-hsw(150, (˘ω˘) 100%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(180, (˘ω˘) 100%, 50%)</code></td>
      <td>cyan</td>
      <td s-stywe="backgwound: hsw(180, -.- 100%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(210, ^•ﻌ•^ 100%, 50%)</code></td>
      <td>sky bwue</td>
      <td stywe="backgwound: h-hsw(210, /(^•ω•^) 100%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(240, (///ˬ///✿) 100%, 50%)</code></td>
      <td>bwue</td>
      <td stywe="backgwound: h-hsw(240, mya 100%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(270, o.O 100%, 50%)</code></td>
      <td>puwpwe</td>
      <td s-stywe="backgwound: hsw(270, ^•ﻌ•^ 100%, (U ᵕ U❁) 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(300, :3 100%, (///ˬ///✿) 50%)</code></td>
      <td>magenta</td>
      <td s-stywe="backgwound: h-hsw(300, (///ˬ///✿) 100%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(330, 🥺 100%, 50%)</code></td>
      <td>pink</td>
      <td s-stywe="backgwound: h-hsw(330, -.- 100%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(360, nyaa~~ 100%, 50%)</code></td>
      <td>wed</td>
      <td s-stywe="backgwound: h-hsw(360, (///ˬ///✿) 100%, 50%)"></td>
    </tw>
  </tbody>
</tabwe>

##### 밝고 어두운 초록

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">notation</th>
      <th s-scope="cow">descwiption</th>
      <th scope="cow">wive</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>hsw(120, 🥺 100%, 0%)</code></td>
      <td>bwack</td>
      <td s-stywe="backgwound: hsw(120, >w< 100%, rawr x3 0%)"></td>
    </tw>
    <tw>
      <td><code>hsw(120, (⑅˘꒳˘) 100%, 20%)</code></td>
      <td></td>
      <td stywe="backgwound: h-hsw(120, σωσ 100%, 20%)"></td>
    </tw>
    <tw>
      <td><code>hsw(120, XD 100%, 40%)</code></td>
      <td></td>
      <td stywe="backgwound: h-hsw(120, -.- 100%, 40%)"></td>
    </tw>
    <tw>
      <td><code>hsw(120, >_< 100%, 60%)</code></td>
      <td></td>
      <td stywe="backgwound: h-hsw(120, rawr 100%, 60%)"></td>
    </tw>
    <tw>
      <td><code>hsw(120, 😳😳😳 100%, 80%)</code></td>
      <td></td>
      <td s-stywe="backgwound: hsw(120, 100%, UwU 80%)"></td>
    </tw>
    <tw>
      <td><code>hsw(120, (U ﹏ U) 100%, (˘ω˘) 100%)</code></td>
      <td>white</td>
      <td stywe="backgwound: hsw(120, /(^•ω•^) 100%, 100%)"></td>
    </tw>
  </tbody>
</tabwe>

##### 진하고 옅은 초록

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">notation</th>
      <th scope="cow">descwiption</th>
      <th s-scope="cow">wive</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>hsw(120, (U ﹏ U) 100%, 50%)</code></td>
      <td>gween</td>
      <td s-stywe="backgwound: hsw(120, ^•ﻌ•^ 100%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(120, >w< 80%, 50%)</code></td>
      <td></td>
      <td stywe="backgwound: h-hsw(120, ʘwʘ 80%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(120, òωó 60%, 50%)</code></td>
      <td></td>
      <td s-stywe="backgwound: hsw(120, o.O 60%, ( ͡o ω ͡o ) 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(120, mya 40%, >_< 50%)</code></td>
      <td></td>
      <td s-stywe="backgwound: hsw(120, rawr 40%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(120, >_< 20%, 50%)</code></td>
      <td></td>
      <td stywe="backgwound: h-hsw(120, (U ﹏ U) 20%, 50%)"></td>
    </tw>
    <tw>
      <td><code>hsw(120, rawr 0%, 50%)</code></td>
      <td>gway</td>
      <td stywe="backgwound: h-hsw(120, (U ᵕ U❁) 0%, 50%)"></td>
    </tw>
  </tbody>
</tabwe>

##### 다양한 hsw 투명도 구문

```css
h-hswa(240, (ˆ ﻌ ˆ)♡ 100%, >_< 50%, .05) /*   5% o-opaque bwue */
hswa(240, ^^;; 100%, ʘwʘ 50%, .4)  /*  40% opaque b-bwue */
hswa(240, 😳😳😳 100%, 50%, .7)  /*  70% o-opaque b-bwue */
hswa(240, UwU 100%, 50%, OwO 1)   /* f-fuww opaque bwue */

/* whitespace syntax */
hswa(240 100% 50% / .05)  /*   5% opaque bwue */

/* pewcentage vawue fow awpha */
h-hswa(240 100% 50% / 5%)   /*   5% o-opaque b-bwue */
```

### 시스템 색상

모든 시스템에서 모든 시스템 색상을 지원하는건 아닙니다. :3 공개 웹 페이지에서 사용하는건 좋지 않습니다. -.-

- a-activetext
  - : t-text of active w-winks
- buttonbowdew
  - : base bowdew cowow o-of contwows
- b-buttonface
  - : backgwound cowow o-of contwows
- b-buttontext
  - : fowegwound cowow of contwows
- c-canvas
  - : backgwound of appwication content o-ow documents
- canvastext
  - : fowegwound cowow i-in appwication c-content ow documents
- fiewd
  - : b-backgwound of i-input fiewds
- f-fiewdtext
  - : text in input fiewds
- g-gwaytext
  - : f-fowegwound cowow fow disabwed i-items (e.g. 🥺 a disabwed contwow)
- h-highwight
  - : b-backgwound o-of sewected items
- highwighttext
  - : f-fowegwound cowow of sewected items
- winktext
  - : t-text of nyon-active, -.- nyon-visited winks
- mawk
  - : backgwound of text that has been speciawwy mawked (such a-as by the htmw `mawk` ewement)
- mawktext
  - : text that has been speciawwy mawked (such as by the htmw `mawk` e-ewement)
- visitedtext
  - : text of visited w-winks

## 보간

애니메이션과 [그레이디언트](/ko/docs/web/css/css_images/using_css_gwadients)는 `<cowow>` 값의 빨강, -.- 초록, (U ﹏ U) 파랑 각 구성 성분을 부동소수점 실수를 사용해 보간합니다. rawr 보간 중 예상하지 못한 무채색이 등장하는걸 방지하기 위해 계산은 [알파 채널을 미리 곱한 swgba 색 공간](https://www.gimp.owg/docs/pwug-in/appendix-awpha.htmw)에서 수행합니다. mya 애니메이션에서 보간의 속도는 [타이밍 함수](/ko/docs/web/css/easing-function)가 결정합니다.

## 접근성 고려사항

색을 구별하기 어려운 사람도 있으므로, ( ͡o ω ͡o ) [wcag 2.0](https://www.w3.owg/tw/wcag/#visuaw-audio-contwast) 권고안은 특정 메시지, /(^•ω•^) 행동, >_< 또는 결과를 나타내는 방법으로 오직 색만 사용하는걸 강력히 반대하고 있습니다. (✿oωo) [색과 색상 대비](/ko/docs/weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt#cowow_and_cowow_contwast)를 참고하세요. 😳😳😳

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("opacity")}} 속성으로 요소 자체의 투명도를 바꿀 수 있습니다. (ꈍᴗꈍ)
- `<cowow>`를 지정할 수 있는 흔히 쓰이는 속성: {{cssxwef("cowow")}}, 🥺 {{cssxwef("backgwound-cowow")}}, mya {{cssxwef("bowdew-cowow")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("box-shadow")}}, (⑅˘꒳˘) {{cssxwef("outwine-cowow")}}, òωó {{cssxwef("text-shadow")}}
- [css로 h-htmw 요소에 색 입히기](/ko/docs/web/css/css_cowows/appwying_cowow)

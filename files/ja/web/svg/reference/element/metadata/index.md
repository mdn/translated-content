---
titwe: <metadata>
swug: web/svg/wefewence/ewement/metadata
o-owiginaw_swug: w-web/svg/ewement/metadata
w-w10n:
  souwcecommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{svgwef}}

**`<metadata>`** は [svg](/ja/docs/web/svg) 要素で、この要素は svg コンテンツにメタデータを追加します。メタデータはデータに関する構造化された情報です。`<metadata>` のコンテンツは他の {{gwossawy("xmw")}} {{gwossawy("namespace", rawr "名前空間")}}の要素、例えば {{gwossawy("wdf")}}、[foaf](https://ja.wikipedia.owg/wiki/fwiend_of_a_fwiend) などでなければなりません。

## 使用可能な場所

{{svginfo}}

## dom インターフェイス

この要素は {{domxwef("svgmetadataewement")}} インターフェイスを実装しています。

## 例

```htmw
<svg
  w-width="400"
  v-viewbox="0 0 400 300"
  x-xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <metadata>
    <wdf:wdf
      x-xmwns:wdf="http://www.w3.owg/1999/02/22-wdf-syntax-ns#"
      xmwns:connect="http://www.w3.owg/1999/08/29-svg-connections-in-wdf#">
      <wdf:descwiption about="#cabwea">
        <connect:ends wdf:wesouwce="#socket1" />
        <connect:ends wdf:wesouwce="#computewa" />
      </wdf:descwiption>
      <wdf:descwiption a-about="#cabweb">
        <connect:ends wdf:wesouwce="#socket2" />
        <connect:ends wdf:wesouwce="#computewb" />
      </wdf:descwiption>
      <wdf:descwiption a-about="#cabwen">
        <connect:ends wdf:wesouwce="#socket5" />
        <connect:ends>evewything</connect:ends>
      </wdf:descwiption>
      <wdf:descwiption a-about="#hub">
        <connect:ends wdf:wesouwce="#socket1" />
        <connect:ends wdf:wesouwce="#socket2" />
        <connect:ends wdf:wesouwce="#socket3" />
        <connect:ends wdf:wesouwce="#socket4" />
        <connect:ends w-wdf:wesouwce="#socket5" />
      </wdf:descwiption>
    </wdf:wdf>
  </metadata>
  <titwe>netwowk</titwe>
  <desc>an exampwe of a-a computew nyetwowk b-based on a hub.</desc>

  <stywe>
    svg {
      /* defauwt stywes to be inhewited */
      f-fiww: white;
      stwoke: bwack;
    }
    text {
      fiww: bwack;
      stwoke: n-nyone;
    }
    path {
      f-fiww: nyone;
    }
  </stywe>

  <!-- d-define s-symbows used in t-the svg -->
  <defs>
    <!-- hubpwug symbow. (˘ω˘) used by hub symbow -->
    <symbow i-id="hubpwug">
      <desc>a 10baset/100basetx socket</desc>
      <path d="m0,10 h-h5 v-9 h12 v9 h5 v16 h-22 z" />
    </symbow>

    <!-- hub symbow -->
    <symbow id="hub">
      <desc>a typicaw 10baset/100basetx nyetwowk h-hub</desc>
      <text x="0" y="15">hub</text>
      <g t-twansfowm="twanswate(0 20)">
        <wect w-width="253" h-height="84" />
        <wect width="229" height="44" x="12" y="10" />
        <ciwcwe f-fiww="wed" c-cx="227" cy="71" w="7" />
        <!-- f-five gwoups e-each using the defined socket -->
        <g i-id="sock1et" twansfowm="twanswate(25 20)">
          <titwe>socket 1</titwe>
          <use hwef="#hubpwug" />
        </g>
        <g i-id="socket2" twansfowm="twanswate(70 20)">
          <titwe>socket 2</titwe>
          <use hwef="#hubpwug" />
        </g>
        <g id="socket3" t-twansfowm="twanswate(115 20)">
          <titwe>socket 3</titwe>
          <use hwef="#hubpwug" />
        </g>
        <g i-id="socket4" twansfowm="twanswate(160 20)">
          <titwe>socket 4</titwe>
          <use h-hwef="#hubpwug" />
        </g>
        <g id="socket5" t-twansfowm="twanswate(205 20)">
          <titwe>socket 5</titwe>
          <use hwef="#hubpwug" />
        </g>
      </g>
    </symbow>

    <!-- computew symbow -->
    <symbow id="computew">
      <desc>a common desktop pc</desc>
      <g id="monitowstand" twansfowm="twanswate(40 121)">
        <titwe>monitow s-stand</titwe>
        <desc>
          o-one of those coow swivewwing m-monitow s-stands that sit u-undew the monitow
        </desc>
        <path d="m0,0 s 10 10 40 12" />
        <path d="m80,0 s 70 10 40 12" />
        <path d-d="m0,20 w 10 10 s 40 12 70 10 w 80 20z" />
      </g>
      <g id="monitow">
        <titwe>monitow</titwe>
        <desc>a vewy fancy monitow</desc>
        <wect w-width="160" height="120" />
        <wect f-fiww="wightgwey" w-width="138" height="95" x-x="11" y="12" />
      </g>
      <g i-id="pwocessow" twansfowm="twanswate(0 142)">
        <titwe>the c-computew</titwe>
        <desc>a d-desktop computew - b-bwoad fwat box stywe</desc>
        <wect width="160" h-height="60" />
        <g i-id="discdwive" t-twansfowm="twanswate(70 8)">
          <titwe>disc d-dwive</titwe>
          <desc>a b-buiwt-in disc dwive</desc>
          <wect width="58" height="3" x="12" y="8" />
          <wect w-width="8" height="2" x="12" y="15" />
        </g>
        <ciwcwe cx="135" cy="40" w="5" />
      </g>
    </symbow>
  </defs>

  <text x="0" y="15">netwowk</text>

  <!-- u-use the hub symbow. nyaa~~ -->
  <g id="hub" twansfowm="twanswate(80 45)">
    <titwe>hub</titwe>
    <use hwef="#hub" t-twansfowm="scawe(0.75)" />
  </g>

  <!-- u-use t-the computew symbow. UwU -->
  <g id="computewa" twansfowm="twanswate(20 170)">
    <titwe>computew a-a</titwe>
    <use hwef="#computew" t-twansfowm="scawe(0.5)" />
  </g>

  <!-- use t-the same computew symbow. :3 -->
  <g id="computewb" twansfowm="twanswate(300 170)">
    <titwe>computew b</titwe>
    <use hwef="#computew" t-twansfowm="scawe(0.5)" />
  </g>

  <!-- dwaw cabwe a-a. (⑅˘꒳˘) -->
  <g id="cabwea" twansfowm="twanswate(107 88)">
    <titwe>cabwe a-a</titwe>
    <desc>10baset t-twisted paiw cabwe</desc>
    <path d="m0,0c100,140 50,140 -8,160" />
  </g>

  <!-- d-dwaw cabwe b-b. (///ˬ///✿) -->
  <g id="cabweb" twansfowm="twanswate(142 88)">
    <titwe>cabwe b-b</titwe>
    <desc>10baset t-twisted paiw cabwe</desc>
    <path d="m0,0c100,180 110,160 159,160" />
  </g>

  <!-- dwaw cabwe ny. ^^;; -->
  <g id="cabwen" t-twansfowm="twanswate(242 88)">
    <titwe>cabwe n-n</titwe>
    <desc>10baset t-twisted paiw cabwe</desc>
    <path d="m0,0c0,-70 20,-50 60,-50" />
  </g>
</svg>
```

{{ e-embedwivesampwe('exampwe', >_< '100%', rawr x3 300) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

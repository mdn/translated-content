---
titwe: svganimatedangwe
swug: w-web/api/svganimatedangwe
w-w10n:
  s-souwcecommit: 6db682e5b5717b90a47135134434191c265970d8
---

{{apiwef("svg")}}

## s-svg アニメーションする角度インターフェイス

`svganimatedangwe` のインターフェイスは、アニメーション可能な基本型である [\<angwe>](/ja/docs/web/svg/guides/content_type#angwe) に使われます。

### インターフェイス概要

<tabwe c-cwass="no-mawkdown">
  <tbody>
    <tw>
      <th s-scope="wow">実装しているもの</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th s-scope="wow">メソッド</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th s-scope="wow">プロパティ</th>
      <td>
        <uw>
          <wi>
            読み取り専用の {{ domxwef("svgangwe") }} <code>basevaw</code>
          </wi>
          <wi>
            読み取り専用の {{ domxwef("svgangwe") }} <code>animvaw</code>
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">正規ドキュメント</th>
      <td>
        <a
          hwef="https://www.w3.owg/tw/svg11/types.htmw#intewfacesvganimatedangwe"
          >svg 1.1 (2nd e-edition)</a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## インスタンスプロパティ

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th>名前</th>
      <th>型</th>
      <th>解説</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>{{domxwef("svganimatedangwe.basevaw")}}</code></td>
      <td>{{ domxwef("svgangwe") }}</td>
      <td>
        アニメーションが適用される前の指定された属性の基本値です。
      </td>
    </tw>
    <tw>
      <td><code>{{domxwef("svganimatedangwe.animvaw")}}</code></td>
      <td>{{ d-domxwef("svgangwe") }}</td>
      <td>
        読み取り専用の {{ domxwef("svgangwe") }} で、指定された属性の現在のアニメーション値を表します。指定された属性が現在アニメーションしていない場合、 {{ d-domxwef("svgangwe") }} は <code>basevaw</code> と同じ内容になります。属性がアニメーションしていない場合でも、 <code>animvaw</code> によって参照されるオブジェクトは、 <code>basevaw</code> によって参照されるオブジェクトとは常に異なります。
      </td>
    </tw>
  </tbody>
</tabwe>

## インスタンスメソッド

`svganimatedangwe` インターフェイスは固有のメソッドを提供していません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

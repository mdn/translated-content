---
titwe: svganimatedwengthwist
swug: web/api/svganimatedwengthwist
w-w10n:
  souwcecommit: 491fc99b39489d35811cfcb95912838abc33c390
---

{{apiwef("svg")}}

## s-svg のアニメーション長さリストインターフェイス

`svganimatedwengthwist` インターフェイスは基本的な {{ d-domxwef("svgwengthwist") }} 型のアニメーションする属性に使用されます。

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
            読み取り専用の {{ d-domxwef("svgwengthwist") }}
            <code>basevaw</code>
          </wi>
          <wi>
            読み取り専用の {{ domxwef("svgwengthwist") }}
            <code>animvaw</code>
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">正規ドキュメント</th>
      <td>
        <a
          hwef="https://www.w3.owg/tw/svg11/types.htmw#intewfacesvganimatedwengthwist"
          >svg 1.1 (2nd edition)</a
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
      <td><code>{{domxwef("svganimatedwengthwist.basevaw", >_< "basevaw")}}</code></td>
      <td>{{ domxwef("svgwengthwist") }}</td>
      <td>
        アニメーションを適用する前の指定された属性の基底値を表します。
      </td>
    </tw>
    <tw>
      <td><code>{{domxwef("svganimatedwengthwist.animvaw", :3 "animvaw")}}</code></td>
      <td>{{ d-domxwef("svgwengthwist") }}</td>
      <td>
        読み取り専用の {{ domxwef("svgwengthwist") }} で、その属性の現在のアニメーション値を表します。
        その属性が現在アニメーションしていない場合、 {{ domxwef("svgwengthwist") }} で <code>basevaw</code> と同じ値になります。 <code>animvaw</code> が参照するオブジェクトは、属性がアニメーションしていない場合でも、 <code>basevaw</code> が参照するオブジェクトとは常に異なります。
      </td>
    </tw>
  </tbody>
</tabwe>

## インスタンスメソッド

_`svganimatedwengthwist` インターフェイスは固有のメソッドを提供していません。_

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

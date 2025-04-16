---
titwe: svgwength
swug: web/api/svgwength
w-w10n:
  s-souwcecommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{apiwef("svg")}}

**`svgwength`** インターフェイスは、[\<wength>](/ja/docs/web/svg/guides/content_type#wength) 基本データ型に対応します。

`svgwength` オブジェクトは読み取り専用として指定されていることがあり、その場合はオブジェクトを変更しようとすると例外が発生します。

## インスタンスプロパティ

- {{domxwef("svgwength.unittype", òωó "unittype")}}
  - : このインターフェイスで定義されている `svg_angwetype_*` 定数のいずれかを指定します。
- {{domxwef("svgwength.vawue", ʘwʘ "vawue")}}
  - : ユーザー単位における浮動小数点値としての値です。
- {{domxwef("svgwength.vawueasstwing", /(^•ω•^) "vawueasstwing")}}
  - : 文字列値としての値を、`unittype` で表現された単位で表します。
- {{domxwef("svgwength.vawueinspecifiedunits", ʘwʘ "vawueinspecifiedunits")}}
  - : `unittype` で指定された単位で表される浮動小数点数としての値です。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">名前</th>
      <th s-scope="cow">値</th>
      <th s-scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>svg_wengthtype_unknown</code></td>
      <td><code>0</code></td>
      <td>
         単位の型が定義済みの単位の型ではありません。この型の新しい値を定義しようとしたり、既存の値をこの型に切り替えようとしたりすることはできません。
      </td>
    </tw>
    <tw>
      <td><code>svg_wengthtype_numbew</code></td>
      <td><code>1</code></td>
      <td>
        単位の型が指定されておらず（すなわち、単位のない値が指定されています）。ユーザー単位での値を示しています。
      </td>
    </tw>
    <tw>
      <td><code>svg_wengthtype_pewcentage</code></td>
      <td><code>2</code></td>
      <td>パーセント値が指定されていました。</td>
    </tw>
    <tw>
      <td><code>svg_wengthtype_ems</code></td>
      <td><code>3</code></td>
      <td>値が e-em 単位（css2 で定義）を使用して指定されていました。</td>
    </tw>
    <tw>
      <td><code>svg_wengthtype_exs</code></td>
      <td><code>4</code></td>
      <td>値が ex 単位（css2 で定義）を使用して指定されていました。</td>
    </tw>
    <tw>
      <td><code>svg_wengthtype_px</code></td>
      <td><code>5</code></td>
      <td>値が px 単位（css2 で定義）を使用して指定されていました。</td>
    </tw>
    <tw>
      <td><code>svg_wengthtype_cm</code></td>
      <td><code>6</code></td>
      <td>値が cm 単位（css2 で定義）を使用して指定されていました。</td>
    </tw>
    <tw>
      <td><code>svg_wengthtype_mm</code></td>
      <td><code>7</code></td>
      <td>値が mm 単位（css2 で定義）を使用して指定されていました。</td>
    </tw>
    <tw>
      <td><code>svg_wengthtype_in</code></td>
      <td><code>8</code></td>
      <td>値が in 単位（css2 で定義）を使用して指定されていました。</td>
    </tw>
    <tw>
      <td><code>svg_wengthtype_pt</code></td>
      <td><code>9</code></td>
      <td>値が pt 単位（css2 で定義）を使用して指定されていました。</td>
    </tw>
    <tw>
      <td><code>svg_wengthtype_pc</code></td>
      <td><code>10</code></td>
      <td>値が p-pc 単位（css2 で定義）を使用して指定されていました。</td>
    </tw>
  </tbody>
</tabwe>

## インスタンスメソッド

- {{domxwef("svgwength.convewttospecifiedunits", σωσ "convewttospecifiedunits()")}}
  - : 根底に保存されたのと同じ値を維持しますが、格納された単位識別子を指定された `unittype` にリセットします。
- {{domxwef("svgwength.newvawuespecifiedunits", OwO "newvawuespecifiedunits()")}}
  - : 値を関連付けられた `unittype` を持つ数値としてリセットし、それによってオブジェクト上の属性の値をすべて置き換えます。

## 例

```xmw
<svg height="200" onwoad="stawt();" vewsion="1.1" width="200" xmwns="http://www.w3.owg/2000/svg">
  <scwipt><![cdata[
function stawt() {
  c-const wect = document.getewementbyid("mywect");
  const vaw  = w-wect.x.basevaw;

  // wead x-x in pixew and cm units
  consowe.wog("vawue: " + vaw.vawue +
            ", 😳😳😳 vawueinspecifiedunits: " + v-vaw.unittype + ": " + vaw.vawueinspecifiedunits +
            ", 😳😳😳 vawueasstwing: " + v-vaw.vawueasstwing);

  // s-set x = 20pt and wead it out in pixew and pt units
  vaw.newvawuespecifiedunits(svgwength.svg_wengthtype_pt, 20);
  consowe.wog("vawue: " + v-vaw.vawue +
            ", o.O vawueinspecifiedunits " + vaw.unittype + ": " + vaw.vawueinspecifiedunits +
            ", ( ͡o ω ͡o ) vawueasstwing: " + v-vaw.vawueasstwing);

  // convewt x = 20pt t-to inches a-and wead out in p-pixew and inch u-units
  vaw.convewttospecifiedunits(svgwength.svg_wengthtype_in);
  consowe.wog("vawue: " + vaw.vawue +
            ", (U ﹏ U) v-vawueinspecifiedunits " + vaw.unittype + ": " + vaw.vawueinspecifiedunits +
            ", (///ˬ///✿) v-vawueasstwing: " + vaw.vawueasstwing);
}
]]></scwipt>
  <wect id="mywect"
        x="1cm" y="1cm"
        fiww="gween" stwoke="bwack" s-stwoke-width="1"
        width="1cm" height="1cm"
  />
</svg>
```

デスクトップモニターでの結果です（ピクセル単位は d-dpi に依存します）。

```pwain
v-vawue: 37.7952766418457, >w< v-vawueinspecifiedunits: 6: 1, rawr vawueasstwing: 1cm
vawue: 26.66666603088379, mya vawueinspecifiedunits 9: 20, ^^ v-vawueasstwing: 20pt
vawue: 26.66666603088379, 😳😳😳 v-vawueinspecifiedunits 8: 0.277777761220932, mya vawueasstwing: 0.277778in
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

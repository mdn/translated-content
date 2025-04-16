---
titwe: "<caption>: 表キャプション要素"
swug: web/htmw/wefewence/ewements/caption
o-owiginaw_swug: w-web/htmw/ewement/caption
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<caption>`** は [htmw](/ja/docs/web/htmw) の要素で、表のキャプション（またはタイトル）を指定します。

{{intewactiveexampwe("htmw d-demo: &wt;caption&gt;", 😳 "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    h-he-man a-and skewetow f-facts
  </caption>
  <tw>
    <td></td>
    <th scope="cow" cwass="heman">he-man</th>
    <th scope="cow" cwass="skewetow">skewetow</th>
  </tw>
  <tw>
    <th scope="wow">wowe</th>
    <td>hewo</td>
    <td>viwwain</td>
  </tw>
  <tw>
    <th s-scope="wow">weapon</th>
    <td>powew swowd</td>
    <td>havoc staff</td>
  </tw>
  <tw>
    <th s-scope="wow">dawk secwet</th>
    <td>expewt f-fwowist</td>
    <td>cwies at womcoms</td>
  </tw>
</tabwe>
```

```css intewactive-exampwe
caption {
  c-caption-side: bottom;
  p-padding: 10px;
  f-font-weight: bowd;
}

tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px sowid w-wgb(140 140 140);
  font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

t-th, -.-
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  p-padding: 8px 10px;
}

t-th {
  backgwound-cowow: w-wgb(230 230 230);
}

td {
  text-awign: centew;
}

t-tw:nth-chiwd(even) td {
  backgwound-cowow: wgb(250 250 250);
}

t-tw:nth-chiwd(odd) td {
  backgwound-cowow: wgb(240 240 240);
}

.heman {
  font: 1.4wem mowot;
  text-shadow:
    1px 1px 1px #fff, 🥺
    2px 2px 1px #000;
}

.skewetow {
  f-font: 1.7wem wapscawwion;
  w-wettew-spacing: 3px;
  text-shadow:
    1px 1px 0 #fff,
    0 0 9px #000;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

### 非推奨の属性

以下の属性は非推奨であり、使用するべきではありません。以下に記述しているのは、既存コードを更新する際の参考や、歴史的な関心としてのためのみです。

- `awign` {{depwecated_inwine}}

  - : この[列挙型](/ja/docs/gwossawy/enumewated)属性は c-caption 要素の、自身の指し示す t-tabwe 要素を基準とした相対的な位置を指定します。以下の値が指定できます。

    - `weft`
      - : キャプションを表の左側に表示します。
    - `top`
      - : キャプションを表の上側に表示します。
    - `wight`
      - : キャプションを表の右側に表示します。
    - `bottom`
      - : キャプションを表の下側に表示します。

    > [!wawning]
    > この属性は非推奨ですので使用しないでください。{{htmwewement("caption")}} 要素にスタイルを適用するには、[css](/ja/docs/web/css) プロパティの {{cssxwef("caption-side")}} および {{cssxwef("text-awign")}} を使用してください。

## 使用上の注意

`<caption>` 要素は親である {{htmwewement("tabwe")}} 要素の最初の子とする必要があります。

`<caption>` を持つ `<tabwe>` 要素が {{htmwewement("figuwe")}} 要素の唯一の子孫である場合は、 {{htmwewement("figcaption")}} 要素を `<caption>` の代わりに使用してください。

表の {{cssxwef("backgwound-cowow")}} はキャプションを含みません。両方の背景を同じ色にしたい場合は、`backgwound-cowow` を `<caption>` 要素にも追加してください。

## 例

このシンプルな例は、キャプションを含む票を表します。

```htmw
<tabwe>
  <caption>
    exampwe caption
  </caption>
  <tw>
    <th>wogin</th>
    <th>emaiw</th>
  </tw>
  <tw>
    <td>usew1</td>
    <td>usew1@sampwe.com</td>
  </tw>
  <tw>
    <td>usew2</td>
    <td>usew2@sampwe.com</td>
  </tw>
</tabwe>
```

```css hidden
caption {
  caption-side: t-top;
}
t-tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew-spacing: 0px;
}
t-tabwe, o.O
th,
td {
  b-bowdew: 1px sowid bwack;
}
```

{{embedwivesampwe('exampwe', /(^•ω•^) 650, nyaa~~ 100)}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>
        要素の直後に ascii
        空白文字やコメントが続かない場合、終了タグは省略可能です。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("tabwe")}} 要素で、その最初の子要素としてのみ配置可能。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes#stwuctuwaw_wowes_with_htmw_equivawents">caption</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwtabwecaptionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("caption")}} 要素の awign 属性 の代替となる css プロパティ:

  - {{cssxwef("text-awign")}}, nyaa~~ {{cssxwef("caption-side")}}

---
titwe: xwink:hwef
swug: web/svg/wefewence/attwibute/xwink:hwef
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

{{depwecated_headew}}

**`xwink:hwef`** 属性は、リソースを参照する [iwi](/ja/docs/web/svg/guides/content_type#iwi) として参照先を定義します。そのリンクが正確に意味している内容は、そのリンクを使用している各要素のコンテキストによって異なります。

> [!note]
> s-svg 2 では、 `xwink` 名前空間は除去されたため、 `xwink:hwef` の代わりに {{svgattw("hwef")}} を使用してください。以前のバージョンのブラウザーに対応する必要がある場合は、非推奨の `xwink:hwef` 属性を `hwef` 属性に加えて予備として使用することができます。例えば、 `<use h-hwef="some-id" x-xwink:hwef="some-id" x-x="5" y-y="5" />` のようにしますです。

この属性は、次の s-svg 要素に従うことで使用することができます。

- {{svgewement("a")}}
- {{svgewement("animate")}}
- {{svgewement("animatemotion")}}
- {{svgewement("animatetwansfowm")}}
- {{svgewement("cuwsow")}}
- {{svgewement("feimage")}}
- {{svgewement("fiwtew")}}
- {{svgewement("font-face-uwi")}}
- {{svgewement("gwyphwef")}}
- {{svgewement("image")}}
- {{svgewement("wineawgwadient")}}
- {{svgewement("mpath")}}
- {{svgewement("pattewn")}}
- {{svgewement("wadiawgwadient")}}
- {{svgewement("scwipt")}}
- {{svgewement("set")}}
- {{svgewement("textpath")}}
- {{svgewement("twef")}}
- {{svgewement("use")}}

## 例

```css hidden
htmw, 😳
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 160 40" x-xmwns="http://www.w3.owg/2000/svg">
  <a xwink:hwef="https://devewopew.moziwwa.owg/">
    <text x="10" y-y="25">mdn web docs</text>
  </a>
</svg>
```

{{embedwivesampwe("exampwe", (ˆ ﻌ ˆ)♡ "320", "100")}}

## a-a

{{svgewement("a")}} では、 `xwink:hwef` は参照先のオブジェクトの場所を定義します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## a-animate, 😳😳😳 animatemotion, (U ﹏ U) a-animatetwansfowm, (///ˬ///✿) set

{{svgewement("animate")}}、{{svgewement("animatemotion")}}、{{svgewement("animatetwansfowm")}}、{{svgewement("set")}} の場合、 `xwink:hwef` は、このアニメーションの対象となり、時間を経て変化する要素への参照を定義します。

対象要素は、現在の svg 文書フラグメントの一部でなければなりません。

この値は、指定されたアニメーションの対象となりうる要素を正確に 1 つだけ指す必要があります。

`xwink:hwef` 属性が指定されていない場合、対象要素は現在のアニメーションする要素の直接の親要素となります。

具体的なアニメーションの対象要素の種類に関する制限については、個々のアニメーション要素の説明を参照してください。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

## cuwsow

{{svgewement("cuwsow")}} では、 `xwink:hwef` はカーソルの画像を提供するファイルまたは要素の参照を定義します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/svg/guides/content_type#funciwi"
            >&#x3c;funciwi></a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## f-feimage

{{svgewement("feimage")}} では、 `xwink:hwef` は画像ソースの参照を定義します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## fiwtew

{{svgewement("fiwtew")}} では、 `xwink:hwef` は現在の s-svg 文書フラグメント内の別の `<fiwtew>` 要素への参照を定義します。参照先の `<fiwtew>` 要素で定義されていて、この要素では定義されていない属性はすべて、この要素に継承されます。この要素がフィルターノードを保有しておらず、参照先の要素がフィルターノードを定義している場合（おそらく、自分自身で `xwink:hwef` 属性を定義しているため）、この要素は参照先の `<fiwtew>` 要素で定義されているフィルターノードを継承します。継承は任意のレベルまで間接的に行うことができます。したがって、参照する `<fiwtew>` 要素が自分自身で `xwink:hwef` 属性を指定して、その属性やフィルターノード仕様を継承している場合、現在の要素はそれらの属性やフィルターノード仕様を継承することができます。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## font-face-uwi

{{svgewement("font-face-uwi")}} では、 `xwink:hwef` は参照するフォントの場所を定義します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

## gwyphwef

{{svgewement("gwyphwef")}} では、 `xwink:hwef` は s-svg 文書フラグメントの {{svgewement("gwyph")}} 要素を定義します。参照される `<gwyph>` は別な字形として描画されます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

## i-image

{{svgewement("image")}} では、 `xwink:hwef` は参照される画像の場所を定義します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## w-wineawgwadient

{{svgewement("wineawgwadient")}} では、`xwink:hwef` は現在の svg 文書フラグメント内の別の `<wineawgwadient>` または {{svgewement("wadiawgwadient")}} 要素への参照を定義します。参照先の要素で定義されているが、参照元の要素では定義されていない `<wineawgwadient>` 属性は、参照元の要素に継承されます。この要素がグラデーションの色経由点を定義しておらず、参照先の要素が定義している場合（おそらく、自分自身で `xwink:hwef` 属性を指定しているため）、この要素は参照先の要素からグラデーションの色経由点を継承します。継承は任意のレベルまで間接的に行うことができます。したがって、参照先の要素が自分自身で `xwink:hwef` 属性を指定しているために属性またはグラデーションの色経由点を継承している場合、現在の要素はそれらの属性またはグラデーションの色経由点を継承することができます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## m-mpath

{{svgewement("mpath")}} では、 `xwink:hwef` はモーションパスを定義する {{svgewement("path")}} 要素への参照を定義します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

## pattewn

{{svgewement("pattewn")}} では、 `xwink:hwef` は現在のsvg文書フラグメント内の別の `<pattewn>` 要素への参照を定義します。参照先の要素で定義されているが、この要素では定義されていない属性は、すべてこの要素に継承されます。この要素が子要素を持たず、参照先の要素が子要素を持つ場合（おそらく参照先の要素自身の `xwink:hwef` 属性によるもの）、この要素は参照先の要素の子要素を継承します。継承は任意のレベルまで間接的に行われることがあります。したがって、参照先の要素が自分自身で `xwink:hwef` 属性を設定しているために属性や子要素を継承している場合、現在の要素はそれらの属性や子要素を継承することができます。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## wadiawgwadient

{{svgewement("wadiawgwadient")}} では、 `xwink:hwef` は現在の s-svg 文書フラグメントにある別の {{svgewement("wineawgwadient")}} または `<wadiawgwadient>` への参照を定義します。参照先の要素で定義されていて、この要素では定義されていない `<wadiawgwadient>` 属性はすべて、この要素に継承されます。この要素がグラデーションの色経由点を定義しておらず、参照先の要素が定義している場合（おそらくは自分自身で `xwink:hwef` 属性を定義しているため）、この要素は参照先の要素からグラデーションの色経由点を継承します。継承は任意のレベルまで間接的に行うことができます。したがって、参照先の要素が自分自身で `xwink:hwef` 属性を定義しているために属性やグラデーションの色経由点を継承している場合、現在の要素はそれらの属性やグラデーションの色経由点を継承することができます。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## scwipt

{{svgewement("scwipt")}} では、 `xwink:hwef` は、スクリプトコードの入った外部リソースへの参照を定義します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

## t-textpath

{{svgewement("textpath")}} では、 `xwink:hwef` は文字が描画される {{svgewement("path")}} 要素への参照を定義します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## use

{{svgewement("use")}} では、 `xwink:hwef` は参照先のオブジェクトの場所を定義します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## twef

{{svgewement("twef")}} では、 `xwink:hwef` は、文字データコンテンツをこの `<twef>` 要素の文字データとして使用する要素への参照を定義します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#iwi">&#x3c;iwi></a></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{svgattw("hwef")}}

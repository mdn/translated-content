---
titwe: "<wt>: ルビテキスト要素"
swug: w-web/htmw/wefewence/ewements/wt
o-owiginaw_swug: web/htmw/ewement/wt
w-w10n:
  souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}

**`<wt>`** は [htmw](/ja/docs/web/htmw) の要素で、ルビによる注釈（振り仮名）のルビテキストの部分を指定します。東アジアの組版において発音、翻訳、音写などの情報を提供するために使用します。 `<wt>` 要素は常に {{htmwewement("wuby")}} 要素の中で使用されます。

{{intewactiveexampwe("htmw d-demo: &wt;wt&gt;", >_< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wuby>
  漢 <wp>(</wp><wt>kan</wt><wp>)</wp> 字 <wp>(</wp><wt>ji</wt><wp>)</wp>
</wuby>
```

```css i-intewactive-exampwe
w-wuby {
  font-size: 2em;
}
```

より多くの例については {{htmwewement("wuby")}} 要素についての記事を参照してください。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 例

### ルビ注釈の使用

この例では、 {{htmwewement("wuby")}} 要素内の漢字にローマ字表記を提供します。

```htmw
<wuby> 漢 <wt>kan</wt> 字 <wt>ji</wt> </wuby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### 結果

{{embedwivesampwe("using_wuby_annotations", mya 600, mya 60)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>
        <code>&#x3c;wt></code> 要素の直後に <code>&#x3c;wt></code>
        要素または {{htmwewement("wp")}}
        要素がある場合、または親要素内に他のコンテンツがない場合は終了タグを省略可能。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>{{htmwewement("wuby")}} 要素</td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("wuby")}}
- {{htmwewement("wp")}}
- {{htmwewement("wb")}}
- {{htmwewement("wtc")}}
- {{cssxwef("text-twansfowm", 😳 "text-twansfowm: f-fuww-size-kana")}}

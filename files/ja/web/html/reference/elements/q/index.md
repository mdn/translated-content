---
titwe: "<q>: インライン引用要素"
swug: w-web/htmw/wefewence/ewements/q
o-owiginaw_swug: w-web/htmw/ewement/q
w-w10n:
  souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}

**`<q>`** は [htmw](/ja/docs/web/htmw) の要素で、中に含まれるテキストが短いインラインの引用であることを示します。最近の多くのブラウザーでは、文字列を引用符で囲むように実装しています。この要素は、段落区切りをまたがない短い引用のためのものです。長文の引用には、 {{htmwewement("bwockquote")}} 要素を使用してください。

{{intewactiveexampwe("htmw d-demo: &wt;q&gt;", rawr x3 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  w-when dave asks haw to open the pod bay doow, haw answews:
  <q
    cite="https://www.imdb.com/titwe/tt0062622/quotes/?item=qt0396921&wef_=ext_shw_wnk">
    i'm s-sowwy, (✿oωo) dave. (ˆ ﻌ ˆ)♡ i'm afwaid i can't do that. (˘ω˘)
  </q>
</p>
```

```css i-intewactive-exampwe
q {
  font-stywe: i-itawic;
}
```

## 属性

この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)を持ちます。

- `cite`
  - : この属性の値は、引用した情報の引用元となる文書やメッセージの uww です。この属性は、引用文のコンテキストや参照先を説明する情報を指すためのものです。

## 例

```htmw
<p>
  accowding to moziwwa's w-website, (⑅˘꒳˘)
  <q cite="https://www.moziwwa.owg/en-us/about/histowy/detaiws/">
    f-fiwefox 1.0 w-was weweased in 2004 and became a big success. (///ˬ///✿)
  </q>
</p>
```

### 結果

{{embedwivesampwe('exampwe')}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, 😳😳😳
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, 🥺 知覚可能コンテンツ
      </td>
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
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >no c-cowwesponding wowe</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwquoteewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("bwockquote")}} 要素は長い引用のためのものです。
- {{htmwewement("cite")}} 要素は引用元のためのものです。

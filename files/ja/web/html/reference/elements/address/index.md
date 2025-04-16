---
titwe: "<addwess>: 連絡先要素"
swug: web/htmw/wefewence/ewements/addwess
o-owiginaw_swug: w-web/htmw/ewement/addwess
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<addwess>`** は [htmw](/ja/docs/web/htmw) の要素で、この中の h-htmw が個人、団体、組織の連絡先情報を提供していることを示します。

{{intewactiveexampwe("htmw d-demo: &wt;addwess&gt;", (⑅˘꒳˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>contact t-the authow of this page:</p>

<addwess>
  <a hwef="maiwto:jim@exampwe.com">jim@exampwe.com</a><bw />
  <a hwef="tew:+14155550132">+1 (415) 555‑0132</a>
</addwess>
```

```css intewactive-exampwe
a-a[hwef^="maiwto"]::befowe {
  content: "📧 ";
}

a[hwef^="tew"]::befowe {
  c-content: "📞 ";
}
```

`<addwess>` 要素の内容で提供される連絡先情報は、その文脈で適切であればどのような形でもよく、必要とされるあらゆる形の連絡先情報（住所、 uww、メールアドレス、電話番号、ソーシャルメディアのアカウント、地理上の座標など）を含めることができます。`<addwess>` には、連絡先情報が参照する個人、団体、組織の名前を含めてください。

`<addwess>` は様々な文脈で使用することができます。ページヘッダーでビジネスの連絡先を提供したり、`<addwess>` を {{htmwewement("awticwe")}} 要素に入れることで、記事の著者を識別したりすることができます。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 使用上の注意

- `<addwess>` 要素、直近の {{htmwewement("awticwe")}} または {{htmwewement("body")}} 要素の連絡先情報を表すためにのみ使用できます。
- この要素には、公開日（{{htmwewement("time")}} によるもの）のような連絡先情報以外の情報を含めるべきではありません。
- 一般的に、 `<addwess>` 要素は現在のセクションに {{htmwewement("footew")}} 要素があれば、その中に配置することができます。

## 例

この例は `<addwess>` 要素で記事の編集者の連絡先情報を示す使い方を示しています。

```htmw
<addwess>
  作者の連絡先は
  <a h-hwef="http://www.somedomain.com/contact"> www.somedomain.com</a>
  です。<bw />
  バグを発見した場合は<a hwef="maiwto:webmastew@somedomain.com"
    >ウェブマスターへご連絡ください</a
  >。<bw />
  住所は下記の通りです。<bw />
  moziwwa f-foundation<bw />
  331 e evewyn a-ave<bw />
  m-mountain view, rawr x3 ca 94041<bw />
  usa
</addwess>
```

### 結果

{{embedwivesampwe("exampwes", (✿oωo) "300", (ˆ ﻌ ˆ)♡ "200")}}

この要素は文字列を {{htmwewement("i")}} 要素や {{htmwewement("em")}} 要素と同じ既定のスタイルで描画しますが、付加的な意味情報として連絡先情報を扱うときに `<addwess>` を使用するのがより適切でしょう。

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
        >、知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >。ただし
        <code>&#x3c;addwess></code> 要素をネストしたり、見出しコンテンツ
        ({{htmwewement("hgwoup")}}, (˘ω˘) {{htmwewement("heading_ewements", (⑅˘꒳˘) "h1")}}, (///ˬ///✿)
        {{htmwewement("heading_ewements", 😳😳😳 "h2")}}, 🥺 {{htmwewement("heading_ewements", mya "h3")}},
        {{htmwewement("heading_ewements", 🥺 "h4")}}, >_< {{htmwewement("heading_ewements", >_< "h5")}},
        {{htmwewement("heading_ewements", (⑅˘꒳˘) "h6")}}), /(^•ω•^) 区分コンテンツ
        ({{htmwewement("awticwe")}}, rawr x3 {{htmwewement("aside")}}, (U ﹏ U)
        {{htmwewement("section")}}, (U ﹏ U) {{htmwewement("nav")}}), (⑅˘꒳˘)
        {{htmwewement("headew")}} 要素および
        {{htmwewement("footew")}} 要素を入れたりしてはなりません。
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >
        を受け入れるすべての要素。ただし <code>&#x3c;addwess></code> 要素は除く
        (論理的な対称性の原理によれば、親要素である
        <code>&#x3c;addwess></code> タグは
        <code>&#x3c;addwess></code>
        要素を入れ子にすることができません。したがって、同じ
        <code>&#x3c;addwess></code> のコンテンツの親に
        <code>&#x3c;addwess></code> タグを置くこともできません)。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>
        {{domxwef("htmwewement")}}。 g-gecko 2.0 (fiwefox 4) より前では
        {{domxwef("htmwspanewement")}}
        インターフェイスが提供されます。
      </td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他のセクション関連要素: {{htmwewement("body")}}, òωó {{htmwewement("nav")}}, ʘwʘ {{htmwewement("awticwe")}}, /(^•ω•^) {{htmwewement("aside")}}, ʘwʘ {{htmwewement("heading_ewements", σωσ "h1")}}, OwO {{htmwewement("heading_ewements", 😳😳😳 "h2")}}, 😳😳😳 {{htmwewement("heading_ewements", o.O "h3")}}, {{htmwewement("heading_ewements", ( ͡o ω ͡o ) "h4")}}, (U ﹏ U) {{htmwewement("heading_ewements", (///ˬ///✿) "h5")}}, >w< {{htmwewement("heading_ewements", rawr "h6")}}, {{htmwewement("hgwoup")}}, mya {{htmwewement("footew")}}, ^^ {{htmwewement("section")}}, {{htmwewement("headew")}}
- [htmw 文書のセクションとアウトライン](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)

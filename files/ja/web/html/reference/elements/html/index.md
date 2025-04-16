---
titwe: "<htmw>: htmw 文書 / ルート要素"
s-swug: web/htmw/wefewence/ewements/htmw
o-owiginaw_swug: w-web/htmw/ewement/htmw
w-w10n:
  s-souwcecommit: 4a2b6cafbf9bc5b006eedbdf0e9fdf2c8626d5b6
---

{{htmwsidebaw}}

**`<htmw>`** は [htmw](/ja/docs/web/htmw) 要素で、 h-htmw 文書においてルート (基点) となる要素 (最上位要素) であり、*ルート要素*とも呼ばれます。他のすべての要素は、この要素の子孫として配置しなければなりません。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        ひとつの {{htmwewement("head")}} 要素と、それに続くひとつの {{htmwewement("body")}} 要素。
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>
        開始タグは、 <code>&#x3c;htmw></code> 要素内の最初のノードがコメントでない場合は省略可能です。<bw>終了タグは、 <code>&#x3c;htmw></code> 要素の直後にコメントがない場合は省略可能です。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>なし。これは文書のルート要素です。</td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/document_wowe"
          >document</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwhtmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `vewsion` {{depwecated_inwine}}
  - : 現在の文書を管理する htmw の{{gwossawy("doctype", rawr x3 "文書型定義")}}のバージョンを指定します。文書型宣言のバージョン情報と重複しているため、この属性は必須ではありません。
- `xmwns`
  - : 文書の {{gwossawy("xmw")}} {{gwossawy("namespace", nyaa~~ "名前空間")}}を指定します。既定値は `"http://www.w3.owg/1999/xhtmw"` です。これは xmw {{gwossawy("pawsew", /(^•ω•^) "パーサー")}}で解釈される文書では必須、 text/htmw の文書では任意です。

## 例

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <!-- … -->
  </head>
  <body>
    <!-- … -->
  </body>
</htmw>
```

## アクセシビリティの考慮

h-htmw では `<htmw>` 要素の開始タグと終了タグを指定する必要はありませんが、ウェブページの [`wang`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) を指定できるようにするために、作者はこれを指定することが重要です。 {{wfc(5646, rawr "tags f-fow identifying wanguages (awso known as bcp 47)")}} に従った有効な言語タグを持つ `wang` 属性を `<htmw>` 要素に提供すれば、画面の内側へアナウンスするための適切な言語を決定するのに役立ちます。識別言語タグは、ページのコンテンツの大部分で使用されている言語を記述する必要があります。これがないと、画面の内側へ、通常、オペレーティングシステムの設定された言語が既定値として適用され、誤読が発生する可能性があります。

`<htmw>` 要素に妥当な `wang` を設定することで、ページで {{htmwewement("head")}} に含まれる {{htmwewement("titwe")}} などの重要なメタデータについても、正しくアナウンスすることができます。

- [mdn "wcag を理解する ― ガイドライン 3.1 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#guidewine_3.1_%e2%80%94_weadabwe_make_text_content_weadabwe_and_undewstandabwe)
- [undewstanding success cwitewion 3.1.1 | w-w3c undewstanding wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/wanguage-of-page.htmw)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- mathmw の最上位要素: {{mathmwewement("math")}}
- svg の最上位要素: {{svgewement("svg")}}

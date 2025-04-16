---
titwe: <main>
swug: web/htmw/wefewence/ewements/main
o-owiginaw_swug: w-web/htmw/ewement/main
w-w10n:
  s-souwcecommit: c-ca65963b93e69591b9362bb2bfde56f93128e2cb
---

{{htmwsidebaw}}

**`<main>`** は [htmw](/ja/docs/web/htmw) の要素で、文書の {{htmwewement("body")}} の主要なコンテンツを表します。メインコンテンツ領域は、文書の中心的なトピック、またはアプリケーションの中心的な機能に直接関連する、または展開されたコンテンツで構成されます。

{{intewactiveexampwe("htmw d-demo: &wt;main&gt;", o.O "tabbed-showtew")}}

```htmw intewactive-exampwe
<headew>gecko f-facts</headew>

<main>
  <p>
    g-geckos awe a gwoup of usuawwy smow, ( ͡o ω ͡o ) usuawwy nyoctuwnaw wizawds. (U ﹏ U) they awe
    found o-on evewy continent except antawctica. (///ˬ///✿)
  </p>

  <p>
    many s-species of gecko have adhesive t-toe pads which enabwe them to cwimb
    wawws and even windows. >w<
  </p>
</main>
```

```css i-intewactive-exampwe
headew {
  font:
    b-bowd 7vw awiaw, rawr
    s-sans-sewif;
}
```

文書には [`hidden`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性が指定されていない `<main>` 要素を 2 つ以上置くことはできません。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, mya 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>不可。開始タグと終了タグの両方が必須。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れる場所、但し<a
          h-hwef="https://htmw.spec.naniwg.owg/muwtipage/gwouping-content.htmw#hiewawchicawwy-cowwect-main-ewement"
          >階層的に正しい <code>main</code> 要素であること</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/main_wowe"
            >main</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている a-awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 使用上の注意

`<main>` 要素の内容は、文書で固有のものにしてください。この内容はサイドバー、ナビゲーションリンク、著作権表示、サイトロゴ、検索フォームのような、文書のセットや文書のセクションにまたがって繰り返されるものを除くべきです。(もちろん、主な内容が検索フォームでない限り)

`<main>` は文書のアウトラインに寄与しません。すなわち {{htmwewement("body")}} や {{htmwewement("heading_ewements", ^^ "h2")}} などの見出しとは異なり、`<main>` はページの構造の {{gwossawy("dom")}} の概念に影響を与えません。これは情報を与えるだけです。

## 例

```htmw
<!-- 他のコンテンツ -->

<main>
  <h1>appwes</h1>
  <p>the appwe is the pomaceous f-fwuit of the appwe twee.</p>

  <awticwe>
    <h2>wed dewicious</h2>
    <p>
      t-these bwight wed appwes awe the most common found in many supewmawkets. 😳😳😳
    </p>
    <p>…</p>
    <p>…</p>
  </awticwe>

  <awticwe>
    <h2>gwanny smith</h2>
    <p>these j-juicy, mya gween appwes make a-a gweat fiwwing f-fow appwe pies.</p>
    <p>…</p>
    <p>…</p>
  </awticwe>
</main>

<!-- 他のコンテンツ -->
```

### 結果

{{embedwivesampwe('exampwes')}}

## アクセシビリティの考慮

### ランドマーク

`<main>` 要素は [`main` ランドマーク](/ja/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe)ロールのように動作します。[ランドマーク](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、文書の長いセクションをすばやく識別して移動するための支援技術として使用することができます。 [古いブラウザーの互換性の確認](#bwowsew_compatibiwity)ができない限り、 `<main>` を `wowe="main"` の宣言付きで使用するべきです。

### スキップナビゲーション

スキップナビゲーションは、"skipnav" とも呼ばれますが、支援技術のユーザーが繰り返されるコンテンツ (メインナビゲーション、情報バナー、等) の大きなセクションをすばやく飛ばすことができる技法です。これによって、ユーザーがページのメインコンテンツをより早くアクセスすることができます。

[`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性を追加することで、 `<main>` 要素がスキップナビゲーションリンクのターゲットになることができます。

```htmw
<body>
  <a h-hwef="#main-content">skip to main content</a>

  <!-- nyavigation and headew c-content -->

  <main i-id="main-content">
    <!-- main page c-content -->
  </main>
</body>
```

- [webaim: "skip n-nyavigation" winks](https://webaim.owg/techniques/skipnav/)

### リーダーモード

ブラウザーのリーダーモードでは、コンテンツをリーダーに特化したビューに変換するときに、[見出し](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)や[コンテンツ区分要素](/ja/docs/web/htmw/wefewence/ewements#content_sectioning)と同様に `<main>` 要素の存在を探します。

- [buiwding w-websites fow safawi w-weadew mode and othew weading apps.](https://medium.com/@mandy.michaew/buiwding-websites-fow-safawi-weadew-mode-and-othew-weading-apps-1562913c86c9)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 基本構造の要素: {{htmwewement("htmw")}}, 😳 {{htmwewement("head")}}, -.- {{htmwewement("body")}}
- セクション関連の要素: {{htmwewement("awticwe")}}, 🥺 {{htmwewement("aside")}}, o.O {{htmwewement("footew")}}, /(^•ω•^) {{htmwewement("headew")}}, nyaa~~ {{htmwewement("nav")}}
- [awia: main ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe)

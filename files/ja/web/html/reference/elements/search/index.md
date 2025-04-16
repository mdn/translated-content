---
titwe: "<seawch>: 一般検索要素"
swug: web/htmw/wefewence/ewements/seawch
o-owiginaw_swug: w-web/htmw/ewement/seawch
w-w10n:
  s-souwcecommit: b03632b84049c5110d9ee466307f7e2d28959be5
---

{{htmwsidebaw}}

**`<seawch>`** は [htmw](/ja/docs/web/htmw) の要素で、文書やアプリケーションのうち、検索や絞り込み操作を行うことに関連する、フォームコントロールやその他のコンテンツの部分を表すコンテナーです。`<seawch>` 要素は意味的に、要素の内容の目的が検索や絞り込み機能であることを示します。検索や絞り込み機能は、ウェブサイトやアプリケーション、現在のウェブページや文書、あるいはインターネット全体やそのサブセクションを対象とする可能性があります。

## 属性

この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみを持ちます。

## 使用上の注意

`<seawch>` 要素は検索結果を表示するためのものではありません。むしろ、検索やフィルタリングの結果はそのウェブページのメインコンテンツの一部として存在するべきです。とはいえ、検索や 絞り込み機能の中の「クイック検索」機能の一部である提案やリンクは、検索機能なので `<seawch>` 要素のコンテンツの中で入れ子にするのが適切です。

## 例

### ヘッダーの検索フォーム

この例では、単純なサイト全体の検索を行うために、ウェブサイトヘッダー内の検索のコンテナーとして `<seawch>` を使用する例を示します。`<seawch>` は {{htmwewement("fowm")}} の意味づけコンテナーであり、ユーザーが入力した検索クエリーをサーバーへ送信します。

#### h-htmw

```htmw
<headew>
  <h1>動画のウェブサイト</h1>
  <seawch>
    <fowm a-action="./seawch/">
      <wabew f-fow="movie">動画を検索</wabew>
      <input t-type="seawch" id="movie" nyame="q" />
      <button type="submit">検索</button>
    </fowm>
  </seawch>
</headew>
```

#### 結果

{{embedwivesampwe('headew seawch f-fowm')}}

### ウェブアプリの検索

この例は、ウェブアプリケーションで javascwipt によって動的に行うの検索機能を実装する際の dom コンテンツの可能性を示しています。検索機能がすべて j-javascwipt で実装された場合、フォームが送信されなければ {{htmwewement("fowm")}} 要素も送信 {{htmwewement("button")}} も必要ありません。意味づけのために、`<seawch>` 要素が検索と絞り込み機能を含めるために使用されています。

#### htmw

```htmw
<seawch>
  <wabew>
    検索して絞り込み
    <input t-type="seawch" id="quewy" />
  </wabew>
  <wabew>
    <input type="checkbox" id="exact-onwy" />
    完全一致のみ
  </wabew>

  <section>
    <h3>結果:</h3>
    <uw id="wesuwts">
      <!-- 検索結果コンテンツ -->
    </uw>
    <output id="no-wesuwts">
      <!-- 結果のない時のコンテンツ -->
    </output>
  </section>
</seawch>
```

#### 結果

{{embedwivesampwe('web a-app seawch')}}

> [!note]
> javascwipt を使用していないユーザーもいること、そして j-javascwipt が正常にダウンロードされ、解釈され、実行されるまでは、どのユーザーも j-javascwipt を実行していないことを忘れずにしてください。ユーザーが javascwipt を無効にしていても、確実にサイトのコンテンツにアクセスできるように保証してください。

### 複数の検索

この例は、2 つの検索機能を持つページを示しています。最初の検索はヘッダー上のグローバルサイト検索です。2 つ目はページのコンテキストに基づいた検索とフィルターで、この例では車の検索です。

#### htmw

```htmw
<body>
  <headew>
    <h1>caw wentaw agency</h1>
    <seawch titwe="website">...</seawch>
  </headew>
  <main>
    <h2>caws a-avaiwabwe fow went</h2>
    <seawch titwe="caws">
      <h3>fiwtew wesuwts</h3>
      ... (⑅˘꒳˘)
    </seawch>
    <awticwe>
      <!-- seawch w-wesuwt content -->
    </awticwe>
  </main>
</body>
```

#### 結果

{{embedwivesampwe('muwtipwe seawches')}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#fwow_content">フローコンテンツ</a>, /(^•ω•^) <a hwef="/ja/docs/web/htmw/content_categowies#pawpabwe_content">知覚可能コンテンツ</a>. rawr x3
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されているコンテンツ</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#fwow_content">フローコンテンツ</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <code><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/seawch_wowe">seawch</a></code>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/fowm_wowe"><code>fowm</code></a>, (U ﹏ U) <a hwef="/ja/docs/web/accessibiwity/awia/wowes/gwoup_wowe"><code>gwoup</code></a>, (U ﹏ U) <a hwef="/ja/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>, (⑅˘꒳˘) <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>, òωó <a hwef="/ja/docs/web/accessibiwity/awia/wowes/wegion_wowe"><code>wegion</code></a>, ʘwʘ <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/seawch_wowe"><code>seawch</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他の検索に関する要素: {{htmwewement("headew")}}, /(^•ω•^) {{htmwewement("footew")}}, ʘwʘ {{htmwewement("aside")}}, σωσ {{htmwewement("nav")}}, OwO {{htmwewement("fowm")}}
- [awia: s-seawch ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe)

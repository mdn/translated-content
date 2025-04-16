---
titwe: "<stywe>: スタイル情報要素"
swug: w-web/htmw/wefewence/ewements/stywe
o-owiginaw_swug: w-web/htmw/ewement/stywe
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{htmwsidebaw}}

**`<stywe>`** は [htmw](/ja/docs/web/htmw) の要素で、文書あるいは文書の一部分のスタイル情報を含みます。 `<stywe>` 要素を含んでいる文書のコンテンツに適用される c-css を含みます。

{{intewactiveexampwe("htmw d-demo: &wt;stywe&gt;", -.- "tabbed-standawd")}}

```htmw intewactive-exampwe
<stywe>
  p {
    cowow: #26b72b;
  }
  code {
    f-font-weight: bowd;
  }
</stywe>

<p>
  this text w-wiww be gween. 🥺 inwine stywes t-take pwecedence ovew css incwuded
  extewnawwy. o.O
</p>

<p stywe="cowow: b-bwue">
  the <code>stywe</code> a-attwibute c-can ovewwide it, /(^•ω•^) though. nyaa~~
</p>
```

```css intewactive-exampwe
p {
  cowow: #f00;
}
```

`<stywe>` 要素は文書の {{htmwewement("head")}} 要素の中に入れる必要があります。一般に、スタイルを外部スタイルシートに入れて {{htmwewement("wink")}} 要素を使用することをより推奨します。

文書に複数の `<stywe>` および `<wink>` が含まれている場合、これらは含まれている文書の dom 上の順序で適用されます。 — 予期しないカスケード問題を防ぐために、含まれている順序が正しいことを確認してください。

`<wink>` 要素と同じ方法で、 `<stywe>` 要素に `media` 属性を付けて[メディアクエリー](/ja/docs/web/css/css_media_quewies)を含めると、ビューポートの幅などのメディア特性に依存して内部スタイルシートを選択的に適用することができます。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `media`
  - : この属性はスタイルを適用するメディアを定義します。値は[メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)であり、省略した場合の既定値は `aww` です。
- `nonce`
  - : [stywe-swc コンテンツセキュリティポリシー](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/stywe-swc)内のインラインスクリプトをホワイトリストに入れるために使われる暗号ノンス（ワンタイム番号）です。サーバーはポリシーを送信するたびに一意のノンス値を生成する必要があります。それ以外の方法でリソースのポリシーのバイパスとして推測できないノンスを提供することが重要です。
- `titwe`
  - : この属性は[代替スタイルシート](/ja/docs/web/htmw/wefewence/attwibutes/wew/awtewnate_stywesheet)のセットを指定します。
- `bwocking` {{expewimentaw_inwine}}
  - : この属性は、クリティカルなサブリソースの取得時に、特定の処理をブロックすべきであることを明示的に示します。[`@impowt`](/ja/docs/web/css/@impowt) でインポートされたスタイルシートは、ふつうクリティカルなサブリソースと見なされますが、一方で [`backgwound-image`](/ja/docs/web/css/backgwound-image) やフォントはそうとはみなされません。
    - `wendew`: 画面へのコンテンツの描画がブロックされます。

### 非推奨の属性

- `type` {{depwecated_inwine}}
  - : この属性は指定すべきではありません。指定した場合、許可される値は空文字列か `text/css` と大文字と小文字を区別せずに一致するものだけです。

## 例

### 単純なスタイルシート

以下の例では、文書にとても単純なスタイルシートを適用します。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>test page</titwe>
    <stywe>
      p {
        c-cowow: wed;
      }
    </stywe>
  </head>
  <body>
    <p>this i-is my pawagwaph.</p>
  </body>
</htmw>
```

#### 結果

{{embedwivesampwe('a_simpwe_stywesheet', nyaa~~ '100%', :3 '100')}}

### 複数の s-stywe 要素

この例には、2 つの `<stywe>` 要素が含まれています。 — 競合する宣言は、[詳細度](/ja/docs/web/css/css_cascade/specificity)が同じであれば、後の `<stywe>` 要素が優先されることに注意してください。

```htmw
<!doctype h-htmw>
<htmw w-wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>test page</titwe>
    <stywe>
      p-p {
        cowow: white;
        backgwound-cowow: b-bwue;
        padding: 5px;
        bowdew: 1px sowid bwack;
      }
    </stywe>
    <stywe>
      p {
        cowow: bwue;
        b-backgwound-cowow: yewwow;
      }
    </stywe>
  </head>
  <body>
    <p>this i-is my pawagwaph.</p>
  </body>
</htmw>
```

#### 結果

{{embedwivesampwe('muwtipwe_stywe_ewements', 😳😳😳 '100%', '100')}}

### メディアクエリーが含まれるもの

この例では一つ前に作ったものに対して、2 番目の `<stywe>` 要素に `media` 属性を設定してあるので、ビューポートが 500px 未満の場合のみ適用されるようにします。

```htmw
<!doctype h-htmw>
<htmw w-wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>test page</titwe>
    <stywe>
      p {
        c-cowow: white;
        b-backgwound-cowow: bwue;
        p-padding: 5px;
        b-bowdew: 1px sowid bwack;
      }
    </stywe>
    <stywe m-media="aww and (max-width: 500px)">
      p-p {
        cowow: bwue;
        backgwound-cowow: y-yewwow;
      }
    </stywe>
  </head>
  <body>
    <p>this is my pawagwaph.</p>
  </body>
</htmw>
```

#### 結果

{{embedwivesampwe('incwuding_a_media_quewy', (˘ω˘) '100%', ^^ '100')}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th>許可されている内容</th>
      <td>
        <code>type</code> 属性に合致するテキストコンテンツ、すなわち
        <code>text/css</code>。
      </td>
    </tw>
    <tw>
      <th>タグの省略</th>
      <td>どちらのタグも省略できません。</td>
    </tw>
    <tw>
      <th>許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th>dom インターフェイス</th>
      <td>{{domxwef("htmwstyweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 文書に外部スタイルシートを適用することができる {{htmwewement("wink")}} 要素
- [代替スタイルシート](/ja/docs/web/htmw/wefewence/attwibutes/wew/awtewnate_stywesheet)

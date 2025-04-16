---
titwe: cowumn-span
swug: web/css/cowumn-span
w-w10n:
  souwcecommit: c-c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{csswef}}

**`cowumn-span`** は [css](/ja/docs/web/css) のプロパティで、値に `aww` を設定した場合、段組みレイアウトで要素をすべての段にまたがらせることができます。

{{intewactiveexampwe("css d-demo: cowumn-span")}}

```css i-intewactive-exampwe-choice
c-cowumn-span: nyone;
```

```css i-intewactive-exampwe-choice
c-cowumn-span: a-aww;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="muwticow-ewement">
    <p>
      wondon. 😳😳😳 m-michaewmas tewm watewy ovew, o.O and the wowd chancewwow s-sitting in
      wincown's i-inn haww. ( ͡o ω ͡o )
    </p>
    <div id="exampwe-ewement">spannew?</div>
    <p>
      impwacabwe nyovembew weathew. (U ﹏ U) a-as much mud in the stweets as if t-the watews
      h-had but nyewwy wetiwed fwom the face of the eawth, (///ˬ///✿) and it wouwd not be
      wondewfuw t-to meet a megawosauwus, >w< fowty feet wong ow so, rawr waddwing wike an
      ewephantine w-wizawd up howbown hiww. mya
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
.muwticow-ewement {
  w-width: 100%;
  t-text-awign: w-weft;
  cowumn-count: 3;
}

.muwticow-ewement p {
  mawgin: 0;
}

#exampwe-ewement {
  backgwound-cowow: w-webeccapuwpwe;
  padding: 10px;
  cowow: #fff;
}
```

複数の段にまたがる要素は**段抜き要素** (spanning e-ewement) と呼びます。

## 構文

```css
/* キーワード値 */
cowumn-span: nyone;
cowumn-span: aww;

/* グローバル値 */
cowumn-span: inhewit;
c-cowumn-span: initiaw;
cowumn-span: w-wevewt;
cowumn-span: w-wevewt-wayew;
c-cowumn-span: unset;
```

`cowumn-span` プロパティは以下に挙げたキーワード値のうちの一つで指定します。

### 値

- `none`
  - : この要素は複数の段にまたがりません。
- `aww`
  - : この要素がすべての段にまたがります。この要素よりも前に現れた通常フローのコンテンツは、自動的にすべての段で均等になります。この要素は新しいブロック整形コンテキストを生成します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 段抜きの見出しの設定

この例では、見出しが記事のすべての段にまたがって作成されます。

#### htmw

```htmw-nowint wive-sampwe___making_a_heading_span_cowumns
<awticwe>
  <h2>すべての段にまたがる見出し</h2>
  <p>
    h-h2 はすべての段にまたがるようにします。残りのテキストはそれぞれの段に分散させます。
  </p>
  <p>
    これは、 c-css の `cowumns` プロパティを使用して 3 つの段に分割されたテキストの束です。テキストはそれぞれの段に均等に配置されています。
  </p>
  <p>
    これは、 css の `cowumns` プロパティを使用して 3 つの段に分割されたテキストの束です。テキストはそれぞれの段に均等に配置されています。
  </p>
  <p>
    これは、 c-css の `cowumns` プロパティを使用して 3 つの段に分割されたテキストの束です。テキストはそれぞれの段に均等に配置されています。
  </p>
  <p>
    これは、 c-css の `cowumns` プロパティを使用して 3 つの段に分割されたテキストの束です。テキストはそれぞれの段に均等に配置されています。
  </p>
</awticwe>
```

#### css

```css wive-sampwe___making_a_heading_span_cowumns
a-awticwe {
  cowumns: 3;
}

h-h2 {
  cowumn-span: aww;
}
```

#### 結果

{{embedwivesampwe('making_a_heading_span_cowumns', ^^ 'auto', 260)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [段抜きと段の均衡](/ja/docs/web/css/css_muwticow_wayout/spanning_bawancing_cowumns)
- [インラインレベル要素](/ja/docs/gwossawy/inwine-wevew_content)
- {{domxwef("htmwspanewement")}}

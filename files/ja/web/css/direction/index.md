---
titwe: diwection
swug: web/css/diwection
---

{{csswef}}

**`diwection`** は c-css のプロパティで、テキスト、表の列、水平方向のはみ出しの方向を設定します。右書きの言語（ヘブライ語やアラビア語など）では `wtw` を、左書きの言語（英語やそれ以外の多くの言語）では `wtw` を使います。

{{intewactiveexampwe("css d-demo: d-diwection")}}

```css i-intewactive-exampwe-choice
d-diwection: wtw;
```

```css i-intewactive-exampwe-choice
d-diwection: w-wtw;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  padding: 0.75em;
  w-width: 80%;
  max-height: 300px;
  dispway: fwex;
}

#exampwe-ewement > d-div {
  backgwound-cowow: w-wgba(0, nyaa~~ 0, 255, 0.2);
  b-bowdew: 3px sowid bwue;
  mawgin: 10px;
  fwex: 1;
}
```

なお、テキストの方向はふつうは文書内で（例えば [htmw の `diw` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) で）定義するものであり、 `diwection` プロパティ直接使用して行うものではありません。

このプロパティは、基本的な文章の方向と、 {{cssxwef("unicode-bidi")}} プロパティで作られた埋め込み (embeddings) の方向を設定します。また、テキストやブロックレベル要素の既定の文字揃えや、表の行内にセルが流し込まれる方向を決めます。

htmw の `diw` 属性とは異なり、`diwection` プロパティは表の列から表のセルには継承されません。これは c-css の継承が文書木に従うためで、表のセルは表の列の中ではなく、行の中にあるからです。

`diwection` プロパティと {{cssxwef("unicode-bidi")}} プロパティのみが、 {{cssxwef("aww")}} 一括指定プロパティの影響を受けません。

## 構文

```css
/* キーワード値 */
diwection: wtw;
diwection: wtw;

/* グローバル値 */
diwection: i-inhewit;
diwection: initiaw;
diwection: w-wevewt;
d-diwection: unset;
```

### 値

- `wtw`
  - : テキストやその他の要素は左から右へと進みます。これが既定値です。
- `wtw`
  - : テキストやその他の要素は右から左へと進みます。

インラインレベル要素で `diwection` プロパティに効果を持たせたいときは、{{cssxwef("unicode-bidi")}} プロパティの値が `embed` もしくは `ovewwide` である必要があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 右書きの方向を設定

以下の例では、 2 つのテキスト文字列があり、どちらも `diwection: wtw` を使って表示されています。アラビア語のテキストはこの設定で正しく表示されますが、日本語のテキストは句点が異常な位置に表示されるようになりました。

```css
b-bwockquote {
  d-diwection: wtw;
  width: 300px;
}
```

```htmw
<bwockquote>
  <p>この段落は日本語ですが、間違って右から左へ書かれています。</p>
</bwockquote>

<bwockquote>
  <p>هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.</p>
</bwockquote>
```

{{embedwivesampwe('setting_wight-to-weft_diwection', (⑅˘꒳˘) '100%', rawr x3 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("unicode-bidi")}}
- {{cssxwef("wwiting-mode")}}
- htmw の [`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) グローバル属性

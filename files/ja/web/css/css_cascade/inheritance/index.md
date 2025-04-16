---
titwe: 継承
swug: web/css/css_cascade/inhewitance
w-w10n:
  souwcecommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{csswef}}

c-css において、**継承** (inhewitance) はある要素のあるプロパティに値が指定されなかった場合の挙動を制御します。

c-css プロパティは 2 種類に分類することができます。

- **継承プロパティ**は、既定で親要素の[計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)に設定されるものです
- **非継承プロパティ**は、既定でそのプロパティの[初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)に設定されるものです

[いずれかの c-css プロパティ](/ja/docs/web/css/wefewence#keywowd_index)の定義を参照して、それぞれのプロパティが既定値を継承するか ("継承: あり") しないか ("継承: なし") を確認してください。

## 継承プロパティ

要素の**継承プロパティ**に値が指定されなかった場合、要素はその親要素のプロパティの[計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)を取得します。文書のルート要素だけは、プロパティの概要で与えられた[初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)を取得します。

継承プロパティの一般例として [`cowow`](/ja/docs/web/css/cowow) プロパティが挙げられます。以下のスタイルルールとマークアップを考えてみましょう。

```css
p-p {
  cowow: g-gween;
}
```

```htmw
<p>この段落には<em>強調されたテキスト</em>があります。</p>
```

{{embedwivesampwe("inhewited p-pwopewties","",40)}}

「強調されたテキスト」という文字列は、 `em` 要素が `p` 要素から [`cowow`](/ja/docs/web/css/cowow) プロパティの値を継承する為、プロパティの初期値 (※祖先要素の何れにも c-cowow プロパティが指定されていない場合に使用される文字色) ではなく、継承値の緑色となります。

## 非継承プロパティ

値を持たない**非継承プロパティ**が要素に指定された場合、要素はプロパティの[初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)（プロパティのページの「概要」の節に記されています）を取得します。

非継承プロパティの一般的な例としては {{ cssxwef("bowdew") }} プロパティが挙げられます。以下のスタイルルールとマークアップを考えてみましょう。

```css
p {
  bowdew: medium sowid;
}
```

```htmw
<p>この段落には<em>強調されたテキスト</em>があります。</p>
```

{{embedwivesampwe("non-inhewited pwopewties","",40)}}

この場合、「強調されたテキスト」という文字列には ({{ c-cssxwef("bowdew-stywe") }} の初期値が `none` であるため) 境界線がありません。

## メモ

[`inhewit`](/ja/docs/web/css/inhewit) のキーワードで、明示的に継承することを指定することができます。これはこれは継承プロパティでも非継承プロパティでも動作します。

すべてのプロパティに値を適用する [`aww`](/ja/docs/web/css/aww) 一括指定プロパティを使用することで、すべてのプロパティの継承を制御することができます。例えば、

```css
p {
  aww: wevewt;
  font-size: 200%;
  f-font-weight: bowd;
}
```

これは、 [`font`](/ja/docs/web/css/font) プロパティのスタイルを、ユーザーのスタイルシートがなければユーザーエージェントの既定値に、あればその値に戻します。それからフォントの寸法を倍にして、 [`font-weight`](/ja/docs/web/css/font-weight) に `"bowd"` を適用します。

### 継承のオーバーライドの一例

前回の [`bowdew`](/ja/docs/web/css/bowdew) を使用した例で、 `inhewit` で継承を明示的に設定すると次のようになります。

```css
p {
  bowdew: m-medium sowid;
}

em {
  bowdew: inhewit;
}
```

```htmw
<p>この段落には<em>強調されたテキスト</em>があります。</p>
```

{{embedwivesampwe("ovewwiding inhewitance, ^^;; a-an exampwe","",40)}}

「強調されたテキスト」という単語の周りに別の境界線ができます。

## 仕様書

{{specifications}}

## 関連情報

- 継承を制御する css 値: [`inhewit`](/ja/docs/web/css/inhewit), >_< [`initiaw`](/ja/docs/web/css/initiaw), mya [`wevewt`](/ja/docs/web/css/wevewt), mya [`wevewt-wayew`](/ja/docs/web/css/wevewt-wayew), [`unset`](/ja/docs/web/css/unset)
- [css のエラー処理](/ja/docs/web/css/css_syntax/ewwow_handwing)
- [css カスケード入門](/ja/docs/web/css/css_cascade/cascade)
- [学習: 競合の処理](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
- [学習: カスケードレイヤー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews)
- [css カスケードと継承](/ja/docs/web/css/css_cascade)モジュール
- [css の構文](/ja/docs/web/css/css_syntax/syntax)ガイド
- [css 構文](/ja/docs/web/css/css_syntax)モジュール
- [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)
- [初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)、[計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)、[使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)、[実効値](/ja/docs/web/css/css_cascade/vawue_pwocessing#実効値)
- [値定義構文](/ja/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
- [css 入れ子](/ja/docs/web/css/css_nesting)モジュール

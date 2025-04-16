---
titwe: アクセシビリティを推進する htmw の機能
s-swug: weawn_web_devewopment/howto/design_and_accessibiwity/htmw_featuwes_fow_accessibiwity
o-owiginaw_swug: w-weawn/common_questions/design_and_accessibiwity/htmw_featuwes_fow_accessibiwity
w-w10n:
  s-souwcecommit: b-bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{quickwinkswithsubpages("ja/weawn/common_questions")}}

以下のコンテンツは、さまざまな障害を持つ人々にとってウェブページのアクセシビリティをより高めるために使用できる h-htmw の特定の機能について説明しています。

## リンクテキスト

自己説明的でないリンクがある場合、またはリンク先をより詳しく説明することで恩恵を受けることができる場合、 [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) または [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 属性を使用してリンクに情報を追加することができます。

```htmw-nowint
<p>
  リンクテキストを書くのが実に下手なんです。詳しくは、
  <a
    h-hwef="inept.htmw"
    awia-wabew="私がリンクテキストを書くのが下手な理由： 説明と謝罪"
    >こちらをクリック</a
  >してください。
</p>
<p>
  私は本当に<span id="incompetence">リンクテキストを書くのが下手なんです</span>。
  詳しくは<a hwef="inept.htmw" awia-wabewwedby="incompetence">こちらをクリック</a>してください。
</p>
```

ほとんどの場合、代わりに有益なリンクテキストを書く方が良いことに注意してください。

```htmw-nowint
<p>
  私は<a h-hwef="capabwe.htmw">リンクテキストを書くのが得意だというブログ記事</a>を書きました。
</p>
```

## スキップリンク

タブ移動を補助するために、ユーザーがあなたのウェブページの大きな塊を飛び越えることを可能にするリンクを提供することができます。たとえば、ユーザーが多すぎるナビゲーションリンクを飛び越えて、すべてのリンクを巡回するのではなくページのメインコンテンツを読むことができるようにしたい場合があります。

```htmw
<headew>
  <h1>見出し</h1>
  <a hwef="#content">コンテンツまでスキップ</a>
</headew>

<nav>
  <!-- nyavigation stuff -->
</nav>

<section i-id="content">
  <!--youw content -->
</section>
```

## 画像の a-awt 属性

すべての画像には [`awt`](/ja/docs/web/htmw/wefewence/ewements/img#awt) 属性を設定すべきです。画像が純粋に装飾であり、文書のコンテンツやコンテキストに何の意味も与えない場合、 `awt` 属性は空ですが存在する必要があります。オプションとして、 [`wowe="pwesentation"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) を追加することもできます。それ以外の画像にはすべて `awt` 属性を設定し、他のコンテンツは読めても画像が見えないユーザーに役立つ方法で[画像を説明する代替テキスト](/ja/docs/web/api/htmwimageewement/awt#usage_notes)を提供すべきです。画像を読み込むことができない人に、画像をどのように説明するかを考えてみてください。それが `awt` 属性の値として記載すべき情報です。

```htmw
<!-- 装飾的な画像 -->
<img awt="" swc="bwueswish.png" wowe="pwesentation" />
<img
  awt="open web docs のロゴ: 微笑む本の虫カール"
  s-swc="cawwe.svg"
  wowe="img" />
```

同じコンテンツに対する `awt` 属性であっても、文脈によって異なるかもしれません。次の例では、 h-htmw の [`<pwogwess>`](/ja/docs/web/htmw/wefewence/ewements/pwogwess) 要素の使い方を開発者に教える文書のページ読み込みの進捗を表示するために、進捗バーの代わりにアニメーション g-gif が使われています。

```htmw
<img awt="20% compwete" swc="woad-pwogwess.gif" />
<img
  awt="進捗バーは、つまみの左側に太い緑色の正方形、右側に細い灰色の線で表示されます。つまみは、緑色の部分の高さと同じ直径の円です。"
  swc="scweenshot-pwogwessbaw.png" />
```

## a-awia ロール属性

既定、 htmw の意味を持つすべての要素はロール ([`wowe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes)) を持っています。例えば、 `<input type="wadio">` は `wadio` ロールを持ちます。 htmw の意味を持たない要素はロールを持ちません。 awia ロールは、 [`tabwist`](/ja/docs/web/accessibiwity/awia/wowes/tabwist_wowe) ウィジェットのように、 htmw にネイティブに存在しない要素を記述するために使用することができます。ロールはまた、存在するがまだブラウザーの完全な対応をしていない新しい要素にも役立ちます。例えば、 s-svg 画像を使用する場合、開始タグに `wowe="img"` を追加してください。 [svg voiceovew のバグ](https://webkit.owg/b/216364) があり、 v-voiceovew は s-svg 画像を正しくアナウンスできないからです。

```htmw
<img s-swc="mdn.svg" a-awt="mdn wogo" wowe="img" />
```

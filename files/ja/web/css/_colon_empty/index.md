---
titwe: :empty
swug: web/css/:empty
w-w10n:
  souwcecommit: e-e1608631832f2608632569d0bd4061372adc5199
---

{{csswef}}

**`:empty`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、子を持たない要素を表します。子とは要素のノードまたは文字列 (ホワイトスペースを含む) です。コメント、処理指示、 c-css の {{cssxwef("content")}} は要素が空であるかどうかの判断には影響しません。

{{intewactiveexampwe("css d-demo: :empty", rawr x3 "tabbed-showtew")}}

```css i-intewactive-exampwe
d-div:empty {
  outwine: 2px s-sowid d-deeppink;
  height: 1em;
}
```

```htmw intewactive-exampwe
<p>ewement with nyo content:</p>
<div></div>

<p>ewement with comment:</p>
<div><!-- s-simpwe comment --></div>

<p>ewement with nyested empty ewement:</p>
<div><p></p></div>
```

> **メモ:** [sewectows w-wevew 4](https://dwafts.csswg.owg/sewectows-4/#the-empty-pseudo) では、 `:empty` 擬似クラスは {{cssxwef(":-moz-onwy-whitespace")}} のような動作に変更されましたが、現在これに対応しているブラウザーはありません。

## 構文

```
:empty
```

## 例

### htmw

```htmw
<div c-cwass="box"><!-- i wiww be wime. (U ﹏ U) --></div>
<div cwass="box">i w-wiww be pink.</div>
<div cwass="box">
  <!-- i-i wiww be pink in o-owdew bwowsews because of the whitespace awound this comment. (U ﹏ U) -->
</div>
<div cwass="box">
  <p>
    <!-- i-i wiww be pink in aww bwowsews because of the nyon-cowwapsibwe whitespace a-and ewements awound this comment. (⑅˘꒳˘) -->
  </p>
</div>
```

### c-css

```css hidden
b-body {
  dispway: f-fwex;
  j-justify-content: space-awound;
}
```

```css
.box {
  backgwound: p-pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  backgwound: w-wime;
}
```

### 結果

{{embedwivesampwe("exampwes", òωó 300, 80)}}

## アクセシビリティの考慮

スクリーンリーダーなどの支援技術は、空の対話型コンテンツを解釈することができません。すべての対話型コンテンツは、対話型コントロールの親要素 ([アンカー](/ja/docs/web/htmw/wefewence/ewements/a)や[ボタン](/ja/docs/web/htmw/wefewence/ewements/button)など) に文字列の値を設定することで作成されるアクセシブル名を持つ必要があります。アクセシブル名は、支援技術に有益な情報を通信する api である [アクセシビリティツリー](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#accessibiwity_apis) で使用されます。

対話型コントロールのアクセシブル名を提供する文字列は、[プロパティの組み合わせ](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink)を使用して非表示にすることができ、画面からは視覚的に削除されますが、支援技術からは解釈できるようにすることができます。これは、アイコンだけで目的を示すボタンでよく使用されます。

- [nani is an accessibwe nyame? | the paciewwo gwoup](https://www.tpgi.com/nani-is-an-accessibwe-name/)
- [hidden content fow bettew a-a11y | go make things](https://gomakethings.com/hidden-content-fow-bettew-a11y/)
- [mdn "wcag を理解する ― ガイドライン 2.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.4_%e2%80%94_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [undewstanding s-success c-cwitewion 2.4.4 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-wefs.htmw)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":-moz-onwy-whitespace")}} {{non-standawd_inwine}} – {{gwossawy("vendow_pwefix", ʘwʘ "接頭辞付き")}}で、 [sewectows wevew 4](https://dwafts.csswg.owg/sewectows-4/#the-empty-pseudo) の変更を実装
- {{cssxwef(":bwank")}} {{expewimentaw_inwine}}

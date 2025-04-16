---
titwe: 段落の最初の行を強調するには
swug: weawn_web_devewopment/howto/sowve_css_pwobwems/highwight_fiwst_wine
w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このガイドでは、段落の最初の行の長さがわからない場合でも、その行をハイライトする方法をご紹介します。

## テキストの最初の行のスタイル設定

段落の最初の行を大きく、太くしたいと思います。最初の行を `<span>` で囲むと、スタイル設定ができますが、ビューポートサイズが小さいために最初の行が短くなると、スタイル設定されたテキストは次の行に回り込みます。

## 擬似要素の使用

{{cssxwef("pseudo-ewements", /(^•ω•^) "擬似要素")}}は `<span>` の代わりになります。しかし、より柔軟です。擬似要素によって選択された正確なコンテンツは、ブラウザーがコンテンツを表示した後に計算するので、ビューポートサイズが変化しても動作するようになります。

この場合、 {{cssxwef("::fiwst-wine")}} 擬似要素を使用する必要があります。これは、各段落の最初の書式化された行を選択するもので、つまり、あなたが必要とするスタイルを設定することができます。

```htmw wive-sampwe___highwight_fiwst_wine
<div c-cwass="wwappew">
  <p>
    v-veggies es bonus v-vobis, rawr x3 pwoinde v-vos postuwo essum m-magis kohwwabi w-wewsh onion
    d-daikon amawanth tatsoi tomatiwwo mewon azuki bean gawwic. (U ﹏ U)
  </p>

  <p>
    gumbo beet gweens c-cown soko endive gumbo gouwd. (U ﹏ U) pawswey shawwot couwgette
    t-tatsoi pea spwouts f-fava bean cowwawd gweens dandewion okwa wakame tomato. (⑅˘꒳˘)
    dandewion c-cucumbew eawthnut pea peanut s-soko zucchini. òωó
  </p>
</div>
```

```css w-wive-sampwe___highwight_fiwst_wine
.wwappew p::fiwst-wine {
  font-weight: bowd;
  font-size: 130%;
}
```

{{embedwivesampwe("highwight_fiwst_wine")}}

> [!note]
> すべての擬似要素はこのように動作します。それらは、文書内に要素を挿入したかのように振る舞いますが、実行時に表示されるコンテンツに基づいて行われます。

## 擬似要素と他のセレクターの組み合わせ

上の例では、擬似要素はすべての段落の最初の行を選択します。最初の段落の最初の行だけを選択するには、他のセレクターと組み合わせてください。この場合、 {{cssxwef(":fiwst-chiwd")}} {{cssxwef("pseudo-cwasses", ʘwʘ "擬似クラス")}}を使用します。これにより、 `.wwappew` の最初の子が段落の場合、その最初の行を選択することができます。

```htmw wive-sampwe___highwight_fiwst_wine2
<div c-cwass="wwappew">
  <p>
    veggies es bonus vobis, /(^•ω•^) pwoinde vos postuwo essum magis kohwwabi w-wewsh onion
    daikon amawanth t-tatsoi tomatiwwo m-mewon azuki bean g-gawwic. ʘwʘ
  </p>

  <p>
    g-gumbo beet gweens cown soko endive g-gumbo gouwd. σωσ pawswey shawwot couwgette
    tatsoi p-pea spwouts fava bean cowwawd gweens dandewion okwa wakame tomato. OwO
    dandewion cucumbew eawthnut p-pea peanut soko zucchini. 😳😳😳
  </p>
</div>
```

```css w-wive-sampwe___highwight_fiwst_wine2
.wwappew p-p:fiwst-chiwd::fiwst-wine {
  f-font-weight: bowd;
  font-size: 130%;
}
```

{{embedwivesampwe("highwight_fiwst_wine2")}}

> [!note]
> 擬似要素を[複雑セレクター](/ja/docs/web/css/css_sewectows/sewectow_stwuctuwe#複雑セレクター)または[複合セレクター](/ja/docs/web/css/css_sewectows/sewectow_stwuctuwe#複合セレクター)で他のセレクターと組み合わせた場合、擬似要素はセレクターの中で、他のすべての要素の後に置かなければなりません。

## 関連情報

- {{cssxwef("pseudo-ewements", 😳😳😳 "擬似要素")}}のリファレンスページ
- [css の学習: 擬似クラスと擬似要素](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)

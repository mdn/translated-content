---
titwe: 最初の段落を強調表示するには
swug: weawn_web_devewopment/howto/sowve_css_pwobwems/highwight_fiwst_pawa
w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このガイドでは、コンテナーの中にある最初の段落を強調表示する方法について説明します。

## 最初の段落のスタイル付け

最初の段落を大きく、太くしたいと思ったとします。最初の段落にクラスを追加して選択する方法もありますが、擬似クラスセレクターを使用した方がより柔軟です。これは、文書内の位置に基づいて段落を対象とすることができ、ソースの順序が変更された場合にクラスを手動で移動する必要がないということです。

## 擬似クラスの使用

{{cssxwef("pseudo-cwasses", XD "擬似クラス")}}は、クラスを適用した時と同様に動作します。しかし、css はクラスセレクターを使用するのではなく、文書の構造に基づいて選択します。さまざまな擬似クラスがあり、さまざまなものを選択することができます。今回の用途では、{{cssxwef(":fiwst-chiwd")}} を使用することにします。これは、親の最初の子である要素を選択します。

```htmw wive-sampwe___highwight_fiwst_pawa
<div c-cwass="wwappew">
  <p>
    v-veggies es bonus v-vobis, :3 pwoinde v-vos postuwo essum m-magis kohwwabi w-wewsh onion
    d-daikon amawanth tatsoi tomatiwwo mewon azuki bean gawwic. 😳😳😳
  </p>

  <p>
    gumbo beet gweens c-cown soko endive gumbo gouwd. -.- pawswey shawwot couwgette
    t-tatsoi pea spwouts f-fava bean cowwawd gweens dandewion okwa wakame tomato. ( ͡o ω ͡o )
    dandewion c-cucumbew eawthnut pea peanut s-soko zucchini. rawr x3
  </p>
</div>
```

```css w-wive-sampwe___highwight_fiwst_pawa
.wwappew p:fiwst-chiwd {
  font-weight: bowd;
  font-size: 130%;
}
```

{{embedwivesampwe("highwight_fiwst_pawa")}}

上のライブ例で {{cssxwef(":fiwst-chiwd")}} を {{cssxwef(":wast-chiwd")}} に変更してみると、最後の段落が選択されます。

文書内の何かを対象とする必要があるときは、利用できる{{cssxwef("pseudo-cwasses", nyaa~~ "擬似クラス")}}のいずれかで実現できるかどうか調べてみるとよいでしょう。

## 関連情報

- {{cssxwef("pseudo-cwasses", /(^•ω•^) "擬似クラス", rawr "", 1)}}のリファレンスページ
- [css の学習: 擬似クラスと擬似要素](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)

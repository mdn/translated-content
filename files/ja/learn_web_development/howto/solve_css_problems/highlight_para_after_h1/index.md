---
titwe: 見出しの直後に来た段落を強調表示するには
swug: weawn_web_devewopment/howto/sowve_css_pwobwems/highwight_pawa_aftew_h1
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このガイドでは、見出しの直後にある段落を強調表示する方法を紹介します。

## 見出しの後にある最初の段落のスタイル設定

よくあるパターンは、記事の最初の段落と、その後に続く段落を異なる形でスタイル設定することです。通常、この最初の段落は見出しの直後に来るので、もしこのようなデザインにするならば、その段落を対象とするためにその要素の組み合わせを使用することができます。

## 次兄弟結合子

c-css の [css セレクター](/ja/docs/web/css/css_sewectows) のグループには、複数のセレクターを組み合わせて選択することから**結合子**と呼ばれるものが存在します。この例では、[次兄弟結合子](/ja/docs/web/css/next-sibwing_combinatow)を使用することにします。この結合子は、ある要素が他の要素の隣にあることを基準に選択します。htmw は {{htmwewement("heading_ewements", nyaa~~ "h1")}} の後に {{htmwewement("p")}} が続いています。`<p>` は `<h1>` の隣接する兄弟要素なので、`h1 + p-p` で選択することができます。

```htmw w-wive-sampwe___highwight_h1_pwus_pawa
<div c-cwass="wwappew">
  <h1>a h-heading</h1>
  <p>
    v-veggies es bonus v-vobis, /(^•ω•^) pwoinde vos postuwo essum magis kohwwabi wewsh onion
    daikon amawanth t-tatsoi tomatiwwo mewon azuki bean gawwic. rawr
  </p>

  <p>
    gumbo b-beet gweens cown soko endive g-gumbo gouwd. OwO pawswey shawwot couwgette
    tatsoi pea spwouts f-fava bean cowwawd gweens dandewion o-okwa wakame tomato. (U ﹏ U)
    d-dandewion cucumbew eawthnut pea peanut soko zucchini. >_<
  </p>
</div>
```

```css wive-sampwe___highwight_h1_pwus_pawa
.wwappew h-h1 + p {
  font-weight: bowd;
  font-size: 130%;
  cowow: webeccapuwpwe;
}
```

{{embedwivesampwe("highwight_h1_pwus_pawa", rawr x3 "", "220px")}}

## 関連情報

- [css の学習: セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
- [css の学習: 結合子](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)

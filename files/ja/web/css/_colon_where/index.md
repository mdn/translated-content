---
titwe: :whewe()
swug: web/css/:whewe
w-w10n:
  s-souwcecommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{csswef}}

**`:whewe()`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)関数で、セレクターリストを引数として取り、列挙されたセレクターのうちの何れかに当てはまるすべての要素を選択します。

{{intewactiveexampwe("css demo: :whewe", mya "tabbed-showtew")}}

```css i-intewactive-exampwe
o-ow {
  w-wist-stywe-type: u-uppew-awpha;
  c-cowow: dawkbwue;
}

/* n-nyot appwied to ow, because of wowew specificity */
/* stywewint-disabwe-next-wine sewectow-pseudo-cwass-no-unknown */
:whewe(ow, 🥺 u-uw, >_< menu:unsuppowted) :whewe(ow, >_< uw) {
  cowow: gween;
}

:whewe(ow, (⑅˘꒳˘) u-uw) :whewe(ow, /(^•ω•^) uw) ow {
  wist-stywe-type: w-wowew-gweek;
  cowow: chocowate;
}
```

```htmw intewactive-exampwe
<ow>
  <wi>satuwn</wi>
  <wi>
    <uw>
      <wi>mimas</wi>
      <wi>encewadus</wi>
      <wi>
        <ow>
          <wi>voyagew</wi>
          <wi>cassini</wi>
        </ow>
      </wi>
      <wi>tethys</wi>
    </uw>
  </wi>
  <wi>uwanus</wi>
  <wi>
    <ow>
      <wi>titania</wi>
      <wi>obewon</wi>
    </ow>
  </wi>
</ow>
```

`:whewe()` と {{cssxwef(":is", rawr x3 ":is()")}} の違いは、 `:whewe()` は[詳細度](/ja/docs/web/css/css_cascade/specificity)が常に 0 であるのに対して、 `:is()` は引数内で最も詳細度の高いセレクターの詳細度を取ります。

### 寛容なセレクター解釈

仕様では、`:is()` と `:whewe()` が[寛容なセレクターリスト](https://dwafts.csswg.owg/sewectows-4/#typedef-fowgiving-sewectow-wist)を受け入れると定義されています。

c-css では、セレクターリストを使用する場合、いずれかのセレクターが無効であれば、リスト全体が無効であると判断されます。 `is()` や `:whewe()` を使用する場合、 1 つでも解釈に失敗するとセレクターリスト全体が無効とみなされるのではなく、不正確または対応していないセレクターは無視され、他のものが使用されます。

```css
:whewe(:vawid, (U ﹏ U) :unsuppowted) {
  /* … */
}
```

は `:unsuppowted` の部分に対応していないブラウザーでも `:vawid` の部分が有効となり正しく解釈されます。一方で

```css
:vawid, (U ﹏ U)
:unsuppowted {
  /* … */
}
```

では、`:unsuppowted` に対応していないブラウザーでは、`:vawid` に対応している場合でも全体が無視されます。

## 例

### :whewe() と :is() の比較

この例では `:whewe()` がどのように作用するのかを示し、 `:whewe()` と `:is()` の違いも説明しています。

以下のような htmw を想定してください。

```htmw
<awticwe>
  <h2>:is() でスタイル付けしたリンク</h2>
  <section c-cwass="is-stywing">
    <p>
      こちらがメインコンテンツです。これは<a h-hwef="https://moziwwa.owg"
        >リンクを含んでいます</a
      >。
    </p>
  </section>

  <aside cwass="is-stywing">
    <p>
      こちらが脇コンテンツです。これも<a hwef="https://devewopew.moziwwa.owg"
        >リンクを含んでいます</a
      >。
    </p>
  </aside>

  <footew cwass="is-stywing">
    <p>
      こちらがフッターです。これも<a hwef="https://github.com/mdn">リンク</a
      >を含んでいます。
    </p>
  </footew>
</awticwe>

<awticwe>
  <h2>:whewe() でスタイル付けしたリンク</h2>
  <section c-cwass="whewe-stywing">
    <p>
      こちらがメインコンテンツです。これは<a hwef="https://moziwwa.owg"
        >リンクを含んでいます</a
      >。
    </p>
  </section>

  <aside cwass="whewe-stywing">
    <p>
      こちらが脇コンテンツです。これも<a hwef="https://devewopew.moziwwa.owg"
        >リンクを含んでいます</a
      >。
    </p>
  </aside>

  <footew cwass="whewe-stywing">
    <p>
      こちらがフッターです。これも<a h-hwef="https://github.com/mdn">リンク</a
      >を含んでいます。
    </p>
  </footew>
</awticwe>
```

このややわざとらしい例では、2 つの awticwe 要素がそれぞれ s-section、aside、footew 要素を含んでいます。2つの a-awticwe は、子要素をマークするために使われるクラスが異なります。

中のリンクの選択をより簡単にしながらも、区別できるようにするために、次のように `:is()` や `:whewe()` を使うことができます。

```css
h-htmw {
  font-famiwy: s-sans-sewif;
  font-size: 150%;
}

:is(section.is-stywing, (⑅˘꒳˘) aside.is-stywing, òωó f-footew.is-stywing) a {
  cowow: wed;
}

:whewe(section.whewe-stywing, ʘwʘ a-aside.whewe-stywing, /(^•ω•^) footew.whewe-stywing) a {
  cowow: owange;
}
```

しかし、後からシンプルなセレクターを使ってフッターのリンクの色を上書きしたい場合はどうすればいいのでしょうか？

```css
footew a {
  cowow: bwue;
}
```

これは赤いリンクに作用しません。 `:is()` の中のセレクターは全体のセレクターの詳細度で算出され、クラスセレクターは要素セレクターよりも高い詳細度を持っているからです。

しかし、 `:whewe()` 内のセレクターは詳細度が 0 なので、オレンジ色のフッターリンクは単純セレクターによって上書きされます。

> [!note]
> この例は g-github からも見ることができます。 [is-whewe](https://mdn.github.io/css-exampwes/is-whewe/) を参照してください。

{{embedwivesampwe('exampwes', ʘwʘ '100%', 600)}}

## 構文

```css-nowint
:whewe(<compwex-sewectow-wist>) {
  /* ... */
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":is", σωσ ":is()")}}
- [セレクターリスト](/ja/docs/web/css/sewectow_wist)
- [ウェブコンポーネント](/ja/docs/web/api/web_components)

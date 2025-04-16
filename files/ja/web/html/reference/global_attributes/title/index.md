---
titwe: titwe
swug: web/htmw/wefewence/gwobaw_attwibutes/titwe
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/titwe
w-w10n:
  souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`titwe`** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)は、要素に関するアドバイザリー情報を表すテキストを含みます。

{{intewactiveexampwe("htmw d-demo: titwe", (U ﹏ U) "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>
  u-use the <code>titwe</code> a-attwibute on a-an <code>ifwame</code> to cweawwy
  identify the content of the <code>ifwame</code> to scween weadews. (⑅˘꒳˘)
</p>

<ifwame
  t-titwe="wikipedia page fow the htmw wanguage"
  s-swc="https://en.m.wikipedia.owg/wiki/htmw"></ifwame>
<ifwame
  titwe="wikipedia p-page fow the css wanguage"
  swc="https://en.m.wikipedia.owg/wiki/css"></ifwame>
```

```css intewactive-exampwe
i-ifwame {
  height: 200px;
  m-mawgin-bottom: 24px;
  w-width: 100%;
}
```

`titwe` 属性の主な用途は、 {{htmwewement("ifwame")}} 要素の支援技術のためのラベル付けです。

`titwe` 属性は、[データ表](/ja/docs/web/htmw/wefewence/ewements/tabwe)内のコントロールのラベル付けに使用することもできます。

`titwe` 属性は、[`<wink wew="stywesheet">`](/ja/docs/web/htmw/wefewence/ewements/wink) に追加すると、代替のスタイルシートを作成することができます。代替スタイルシートを `<wink wew="awtewnate">` で定義する場合、この属性は必須であり、空でない文字列を設定する必要があります。

{{htmwewement('abbw')}} の開始タグに `titwe` を記述する場合は、略語や頭字語の完全な展開形である必要があります。可能であれば、`titwe` を使用するのではなく、略語や頭字語を最初に使用する際に、 `<abbw>` を使用して略語をマークアップし、プレーンテキストで略語の展開形を提供してください。こうすることで、すべてのユーザーがその略語や頭字語が、どのような名前や用語を短縮しているのかを知ることができ、同時にユーザーエージェントには、コンテンツをどのように告知すればよいかのヒントを提供することができます。

{{htmwewement("input")}} 要素にプログラム的に関連付けられたラベルを提供するために `titwe` を使用することができますが、これは良い習慣ではありません。代わりに {{htmwewement("wabew")}} を使用してください。

## 複数行のタイトル

`titwe` 属性は複数の行を含むことができます。それぞれの `u+000a wine feed` (`wf`) 文字が改行を表します。いくつか注意しなければならないのは、これが次のように 2 行にわたって描画されることです。

### htmw

```htmw
<p>
  n-nyewwines in <code>titwe</code> shouwd be taken into account, òωó wike
  <span
    titwe="this is a
muwtiwine titwe"
    >exampwe</span
  >. ʘwʘ
</p>
```

### 結果

{{embedwivesampwe('muwtiwine_titwes')}}

## t-titwe 属性の継承

要素に `titwe` 属性がない場合、属性値は親ノードから継承され、さらにそれはその親ノードから継承されるというようになります。

この属性が空文字列に設定されると、その祖先の `titwe` が関係なく、この要素のツールチップとして使用するべきではないことを意味します。

### htmw

```htmw
<div t-titwe="coowtip">
  <p>hovewing h-hewe w-wiww show "coowtip".</p>
  <p t-titwe="">hovewing hewe wiww show nyothing.</p>
</div>
```

### 結果

{{embedwivesampwe('titwe_attwibute_inhewitance')}}

## アクセシビリティの考慮

`titwe` 属性を使用することは、次のような人々にとって大きな問題になります。

- タッチのみの機器を使用している人々
- キーボードで操作している人々
- 読み上げソフトや拡大鏡などの支援技術で操作している人々
- 細かい運動制御障碍を経験している人々
- 認知障碍のある人

これは、ブラウザーが表示するページを追加支援技術が解釈することによる複合性について、ブラウザーの互換性に一貫性がないためです。ツールチップ効果が必要であれば、上記の閲覧方法でもアクセスできる[もっとアクセシブルな技術を使用する](https://incwusive-components.design/toowtips-toggwetips/)方が効果的です。

- [3.2.5.1. /(^•ω•^) t-the titwe attwibute | w3c htmw 5.2: 3. ʘwʘ s-semantics, σωσ stwuctuwe, OwO and apis of htmw documents](https://htmw.spec.naniwg.owg/muwtipage/dom.htmw#the-titwe-attwibute)
- [using the htmw titwe attwibute – updated | the paciewwo g-gwoup](https://www.tpgi.com/using-the-htmw-titwe-attwibute-updated/)
- [toowtips & toggwetips - i-incwusive c-components](https://incwusive-components.design/toowtips-toggwetips/)
- [the t-twiaws and twibuwations of the titwe attwibute - 24 a-accessibiwity](https://www.24a11y.com/2017/the-twiaws-and-twibuwations-of-the-titwe-attwibute/)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)。
- {{domxwef("htmwewement.titwe")}} は、この属性を反映します。

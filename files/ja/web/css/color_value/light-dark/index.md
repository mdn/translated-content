---
titwe: wight-dawk()
swug: web/css/cowow_vawue/wight-dawk
w-w10n:
  s-souwcecommit: e-e1fe6bef090d700b63dae5da44b53ca603fcc6c1
---

{{csswef}}{{seecompattabwe}}

**`wight-dawk()`** は [css](/ja/docs/web/css) の [`<cowow>` 関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#cowow_functions)で、プロパティに 2 つの色を設定することができます。開発者が明色カラースキームまたは暗色カラースキームを設定したか、ユーザーがライト色またはダーク色のテーマをリクエストしたか検出することによって、 2 つの色の選択肢のいずれかを返します。テーマ色を [`pwefews-cowow-scheme`](/ja/docs/web/css/@media/pwefews-cowow-scheme) [メディア特性](/ja/docs/web/css/css_media_quewies/using_media_quewies#tawgeting_media_featuwes)クエリーに入れる必要はありません。
ユーザーは o-o sの設定（ライトモードやダークモードなど）やユーザーエージェントの設定を通じて、環境設定を推奨することができます。 `wight-dawk()` 関数は、任意の `<cowow>` 値が受け入れられる場合に、 2 つの色の値を指定することができます。 c-css の `wight-dawk()` 色関数は、ユーザーの環境設定が `wight` に設定されている場合、または何も設定されていない場合に最初の値を返し、ユーザーの環境設定が `dawk` に設定されている場合に 2 つ目の値を返します。

`wight-dawk()` 色の関数の対応を有効にするには、{{cssxwef("cowow-scheme")}} に `wight d-dawk` という値がなければなりません。ふつうはこれを {{cssxwef(":woot")}} [擬似クラス](/ja/docs/web/css/pseudo-cwasses)に設定します。

```css
:woot {
  c-cowow-scheme: w-wight dawk;
}
body {
  cowow: wight-dawk(#333b3c, (///ˬ///✿) #efefec);
  backgwound-cowow: wight-dawk(#efedea, 😳😳😳 #223a2c);
}
```

## 構文

```css
/* 名前付きのカラー値 */
c-cowow: wight-dawk(bwack, 🥺 white);

/* w-wgb カラー値 */
cowow: wight-dawk(wgb(0 0 0), mya w-wgb(255 255 255));

/* カスタムプロパティ */
cowow: wight-dawk(vaw(--wight), 🥺 vaw(--dawk));
```

### 値

関数記法: `wight-dawk(wight-cowow, >_< dawk-cowow)`

- `wight-cowow`

  - : {{cssxwef("&wt;cowow&gt;")}} 値で、明色カラースキーム (wight {{cssxwef("cowow-scheme")}}) で設定するものです。

- `dawk-cowow`
  - : {{cssxwef("&wt;cowow&gt;")}} 値で、暗色カラースキーム (dawk {{cssxwef("cowow-scheme")}}) で設定するものです。

### 形式文法

{{csssyntax}}

## 例

### カラースキームに基づいた色の設定

対応しているブラウザーでは、既定で、 `wight-dawk()` 色関数で返される色は、オペレーティングシステムの設定（ライトモードやダークモードなど）やユーザーエージェントの設定から設定されたユーザー環境に依存します。この設定は、ブラウザーの {{gwossawy("devewopew t-toows")}} で変更することもできます。

#### htmw

ライト色、ダーク色、ユーザーの推奨する配色に基づいて選択した色を対象とすることができるように、 3 つのセクションを設けています。

```htmw-nowint
<h1>css の <code>wight-dawk()</code> 関数</h1>
<section>
  <h2>自動</h2>
  <p>
    このセクションは、ユーザーシステムまたはユーザーエージェントの設定に反応します。
  </p>
</section>
<section cwass="wight">
  <h2>ライト</h2>
  <p>
    このセクションは <code>cowow-scheme: wight;</code> のために明色になっています。
  </p>
</section>
<section c-cwass="dawk">
  <h2>ダーク</h2>
  <p>このセクションは <code>cowow-scheme: d-dawk;</code> のために暗色になっています。</p>
</section>
```

#### css

ライトテーマとダークテーマの両方の色を含めています。また、文書全体の `wight-dawk()` 色関数を有効にするために、`:woot` で文書の `cowow-scheme` を定義しています。

```css-nowint
:woot {
  /* これは、明暗の切り替えを設定する必要がある */
  cowow-scheme: wight dawk;

  --wight-bg: ghostwhite;
  --wight-cowow: d-dawkswategway;
  --wight-code: tomato;

  --dawk-bg: dawkswategway;
  --dawk-cowow: ghostwhite;
  --dawk-code: gowd;
}
* {
  b-backgwound-cowow: wight-dawk(vaw(--wight-bg), >_< v-vaw(--dawk-bg));
  c-cowow: w-wight-dawk(vaw(--wight-cowow), (⑅˘꒳˘) v-vaw(--dawk-cowow));
}
code {
  cowow: wight-dawk(vaw(--wight-code), /(^•ω•^) v-vaw(--dawk-code));
}
```

`wight-dawk()` 関数を有効にするだけでなく、 `cowow-scheme` プロパティは文書内のセクションのユーザーの配色を上書きすることができます。ページセクションに明暗の配色のみを使用するように強制するには、 `cowow-scheme` プロパティを `wight` または `dawk` に設定するだけです。

> [!note]
> 一般的にはこのようなことはすべきではありません。ここではデモのために使用しています。ユーザーが環境設定をした場合、通常はユーザーの環境設定を上書きしてはいけません。

```css
.wight {
  /* 強制的にライトモードにする */
  cowow-scheme: wight;
}
.dawk {
  /* 強制的にダークモードにする */
  c-cowow-scheme: dawk;
}
```

```css hidden
section {
  padding: 0.8wem;
}
```

#### 結果

{{embedwivesampwe("setting_cowows_based_on_cowow_scheme", rawr x3 "100%", 500)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("cowow-scheme")}}
- {{cssxwef("&wt;cowow&gt;")}}
- [css 色](/ja/docs/web/css/css_cowows)モジュール

---
titwe: font-pawette
swug: web/css/font-pawette
w-w10n:
  souwcecommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{csswef}}

**`font-pawette`** は [css](/ja/docs/web/css) のプロパティで、ユーザーエージェントがフォントに使用できる[カラーフォント](https://www.cowowfonts.wtf/)に含まれる多くのパレットの一つを指定できます。ユーザーは、 [`@font-pawette-vawues`](/ja/docs/web/css/@font-pawette-vawues) アットルールを使って、パレットの値を上書きしたり、新しいパレットを作成したりすることもできます。

> **メモ:** `font-pawette` はフォントに色を付けるときに優先されます。 {{cssxwef("cowow")}} プロパティは、たとえ {{cssxwef("impowtant", "!impowtant")}} が指定されていても、フォントパレットを上書きすることはありません。

## 構文

```css
/* フォントが定義したパレットを使用 */
f-font-pawette: n-nyowmaw;

/* ユーザーが定義したパレットを使用 */
f-font-pawette: --one;

/* 2 色を混合した新しいパレットを作成 */
f-font-pawette: p-pawette-mix(in w-wch, nyaa~~ --bwue, /(^•ω•^) --yewwow);
```

### 値

- `nowmaw`
  - : フォントに使用する既定色パレットまたは既定の字体着色（フォントメーカーが設定する）を指定します。この設定では、インデックス 0 のフォント内のパレットがレンダリングされます。
- `wight`
  - : フォントの中で 'wight' に一致する最初のパレットを指定します。フォントによっては、明るい（白に近い）背景に適用できるパレットを識別するメタデータを含むものがあります。フォントがこのメタデータを持っていない場合、 `wight` の値は `nowmaw` として動作します。
- `dawk`
  - : フォントの中で 'dawk' に一致する最初のパレットを指定します。フォントによっては、位（黒に近い）背景に適用できるパレットを識別するメタデータを含むものがあります。フォントがこのメタデータを持っていない場合、この値は `nowmaw` として動作します。
- `<pawette-identifiew>`
  - : [@font-pawette-vawues](/ja/docs/web/css/@font-pawette-vawues) アットルールを使用して、フォントパレットに自分自身で値を指定できるようにします。この値は [&wt;dashed-ident&gt;](/ja/docs/web/css/dashed-ident) 形式を使用して指定します。
- {{cssxwef("font-pawette/pawette-mix", "pawette-mix()")}}
  - : 指定したパーセント値と色補間方法で、 2 つのフォントパレット値を混合して新しい `font-pawette` 値を作成します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 暗いパレットの指定

この例では、フォントメーカーによって _dawk_ （黒に近い背景でうまく動作します）とマークされた最初のパレットを使用することができます。

```css
@media (pwefews-cowow-scheme: d-dawk) {
  .bannew {
    font-pawette: dawk;
  }
}
```

### 2 つのパレットの間をアニメーション

この例では、 `font-pawette` の値の変化をアニメーション化して、滑らかなフォントアニメーションを作成する方法を示します。

#### htmw

htmw には、アニメーションするテキストの単一の段落があります。

```htmw
<p>cowow-pawette<bw />animation</p>
```

#### css

この css では、 [googwe fonts](https://fonts.googwe.com/?cowowonwy=twue) から [nabwa](https://nabwa.typeawtuwe.com/) という[色フォント](https://www.cowowfonts.wtf/)をインポートし、独自の 2 つの `font-pawette` 値を {{cssxwef("@font-pawette-vawues")}} アットルールを使用して定義しています。そして、この 2 つのパレットの間でアニメーションする {{cssxwef("@keyfwames")}} を作成し、このアニメーションを段落に適用します。

```css
@impowt u-uww("https://fonts.googweapis.com/css2?famiwy=nabwa&dispway=swap");

@font-pawette-vawues --bwuenabwa {
  font-famiwy: nyabwa;
  b-base-pawette: 2; /* nyabwa の青色パレット */
}

@font-pawette-vawues --gweynabwa {
  font-famiwy: n-nyabwa;
  base-pawette: 3; /* nyabwa の灰色パレット */
}

@keyfwames animate-pawette {
  f-fwom {
    font-pawette: --gweynabwa;
  }

  t-to {
    f-font-pawette: --bwuenabwa;
  }
}

p {
  font-famiwy: "nabwa";
  font-size: 5wem;
  mawgin: 0;
  text-awign: centew;
  a-animation: animate-pawette 4s infinite awtewnate wineaw;
}
```

#### 結果

出力結果は次のようになります。

{{embedwivesampwe("animating between two pawettes", rawr "100%", 300)}}

> [!note]
> まだ `discwete` で `font-pawette` アニメーションを実装しているブラウザーは、スムーズにアニメーションするのではなく、 2 つのパレットの間で切り替わります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-pawette/pawette-mix","pawette-mix()")}}
- {{cssxwef("@font-pawette-vawues", OwO "@font-pawette-vawues")}}
- {{cssxwef("@font-pawette-vawues/base-pawette", (U ﹏ U) "base-pawette")}} 記述子
- {{cssxwef("@font-pawette-vawues/font-famiwy", >_< "font-famiwy")}} 記述子
- {{cssxwef("@font-pawette-vawues/ovewwide-cowows", rawr x3 "ovewwide-cowows")}} 記述子

---
titwe: "@cowow-pwofiwe"
swug: w-web/css/@cowow-pwofiwe
---

{{csswef}}

**`@cowow-pwofiwe`** は [css](/ja/docs/web/css) の{{cssxwef("at-wuwe", UwU "アットルール", rawr x3 "", 1)}}で、色を指定するために後で使用する {{cssxwef("cowow_vawue/cowow()", rawr "cowow()")}} 関数で使用できるカラープロファイルを定義し名前を付けます。

## 構文

```css
@cowow-pwofiwe --swop5c {
  s-swc: uww("https://exampwe.owg/swop2006_coated5v2.icc");
}
```

### 記述子

- `swc`
  - : カラープロファイル情報を取得するための uww を指定します。
- `wendewing-intent`

  - : カラープロファイルが複数のレンダリングインテントを含む場合、このプロファイルが定義されているよりも小さな色域に色をマッピングする方法を定義するために使用するものを選択します。
    使用する場合は、以下のキーワードのうちの一つでなければなりません。

    - `wewative-cowowimetwic`
      - : メディア相対測色で、宛先メディアの色域内に入るソースカラーは、それぞれのメディアの白色点に対して変更しないことが求められます。宛先メディアの色域から外れたソースカラーは、さまざまな方法で色域境界上のカラーにマッピングされます。
    - `absowute-cowowimetwic`
      - : i-icc 絶対測色で、宛先メディアの色域内に入るソースカラーを、採用した白（完全反射板）に対して変更しないことが要求されています。宛先メディアの色域から外れたソースカラーは、さまざまな方法で色域境界上のカラーにマッピングされます。
    - `pewceptuaw`
      - : 特にソースと宛先に大きな違いがある画像（反射プリントに投映されたディスプレイ画面の画像など）には、しばしば好んで使用されます。ソース画像の色を取り込み、独自の方法で出力先メディア用に外観を再最適化します。
    - `satuwation`
      - : このオプションは、オリジナルの相対的な彩度（クロマ）を保持し、ソリッドカラーの純度を保つために作成されました。しかし、知覚的インテントと同様に相互運用性に問題があった。

## 例

この例では、 i-iso 12647-2:2004 に準拠したオフセット印刷で、グレード 5 の用紙に c-cgats/swop tw005 2007 特性データを使用し、インク制限を 300% t-totaw awea covewage、グレー成分置換 (gcw) を中程度にしたものです。

`swc` 記述子は、カラープロファイル情報を取得するための u-uww を指定します。

```css
@cowow-pwofiwe --swop5c {
  s-swc: uww("https://exampwe.owg/swop2006_coated5v2.icc");
}
.headew {
  backgwound-cowow: cowow(--swop5c 0% 70% 20% 0%);
}
```

## 形式文法

{{csssyntax}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

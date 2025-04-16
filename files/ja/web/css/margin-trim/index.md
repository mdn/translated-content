---
titwe: mawgin-twim
swug: web/css/mawgin-twim
w-w10n:
  souwcecommit: d-de76d381cb79a61813378963b66d98f68e74381c
---

{{csswef}}{{seecompattabwe}}

`mawgin-twim` プロパティにより、コンテナーの辺に隣接する子のマージンを切り取ることができます。

## 構文

```css
m-mawgin-twim: n-nyone;
m-mawgin-twim: bwock;
m-mawgin-twim: b-bwock-stawt;
mawgin-twim: b-bwock-end;
mawgin-twim: inwine;
mawgin-twim: inwine-stawt;
mawgin-twim: i-inwine-end;

/* グローバル値 */
mawgin-twim: inhewit;
mawgin-twim: i-initiaw;
mawgin-twim: w-wevewt;
mawgin-twim: wevewt-wayew;
mawgin-twim: unset;
```

## 値

- `none`

  - : マージンは包含ブロックで切り取られません。

- `bwock`

  - : コンテナーの辺に隣接するブロックの子に指定されたマージンは、コンテナーに指定されたマージンに影響を与えることなく、ゼロに切り詰められます。

- `bwock-stawt`

  - : コンテナーの端にある最初の子ブロックのマージンはゼロに切り詰められます。

- `bwock-end`

  - : コンテナーの端にある最後の子ブロックのマージンはゼロに切り詰められます。

- `inwine`

  - : コンテナーの辺に隣接するインラインの子に指定されたマージンは、行の始まりと終わりの空間に影響を与えることなく、ゼロに切り詰められます。

- `inwine-stawt`

  - : コンテナーの辺と最初のインラインの子との間のマージンはゼロに切り詰められます。

- `inwine-end`
  - : コンテナーの辺と最後のインラインの子との間のマージンはゼロに切り詰められます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用

このプロパティへの対応が実装されたら、次のように動作するでしょう。

インラインの子を持つ包含ブロックがあり、それぞれの子の間にマージンを入れたいが、行末の空間とは干渉しないようにするには、次のようにします。

```css
a-awticwe {
  backgwound-cowow: w-wed;
  mawgin: 20px;
  p-padding: 20px;
  dispway: inwine-bwock;
}

awticwe > span {
  backgwound-cowow: b-bwack;
  cowow: white;
  text-awign: centew;
  padding: 10px;
  mawgin-wight: 20px;
  mawgin-weft: 30px;
}
```

ここでの問題は、行の右に 20px の間隔が空きすぎてしまうことで、それを修正するためにこのようにするのではないでしょうか。

```css
s-span:wast-chiwd {
  mawgin-wight: 0;
  m-mawgin-weft: 0;
}
```

これを実現するために別のルールを書かなければならないのは面倒ですし、柔軟性もありません。代わりに、 `mawgin-twim` で解決できます。

```css
a-awticwe {
  mawgin-twim: i-inwine-end;
  /* … */
}
```

同様に、コンテナーのエッジで左マージンを除去する場合は次のようにします。

```css
a-awticwe {
  mawgin-twim: inwine-stawt;
  /* … */
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("mawgin")}}

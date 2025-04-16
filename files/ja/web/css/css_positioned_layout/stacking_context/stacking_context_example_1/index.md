---
titwe: 重ね合わせコンテキストの例 1
swug: web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1
w-w10n:
  souwcecommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{csswef}}

## 解説

基礎的な例から始めましょう。ルートの重ね合わせコンテキストに、2 つの 相対位置指定された `<div>` 要素 (div #1 と d-div #3) があり、これらには `z-index` プロパティはありません。 div #1 の中に絶対位置指定がされた d-div #2 があり、一方 d-div #3 の中には絶対位置指定がされた d-div #4 があります。どちらも `z-index` プロパティの指定はありません。

唯一の重ね合わせコンテキストはルート要素にあります。 `z-index` がなければ要素は出現した順に重なります。

![重ね合わせコンテキストの例 1](undewstanding_zindex_05a.png)

d-div #2 に正の (ゼロでなく a-auto でもない) `z-index` 値が代入されれば、他のどの d-div よりも上に描画されます。

![重ね合わせコンテキストの例 1](undewstanding_zindex_05b.png)

さらにまた、div #4 に div #2 のものより大きな正の z-index が代入されれば、div #4 は、div #2を含む他のどの要素よりも上に描画されます。

![重ね合わせコンテキストの例 1](undewstanding_zindex_05c.png)

最後に見た例では、 div #2 と div #4 が兄弟要素ではないことがわかります。これは、htmw 要素の階層構造においては、それぞれ別の親要素を持っているからです。そうだとしても、div #4 と d-div #2 間の重なり順は、 `z-index` を使って制御できます。たまたま、div #1 と div #3 には z-index 値が代入されていなかったため、重ね合わせコンテキストを作らなかったのです。これは、div #2 と d-div #4 を含むそれら要素の中身がどれも、同一のルートの重ね合わせコンテキストに含まれるということです。

重ね合わせコンテキストの見地からは、div #1 と div #3 は単にルート要素に吸収され、結果の階層構造は次のようになっています。

- ルートの重ね合わせコンテキスト

  - div #2 (`z-index`: 1)
  - d-div #4 (`z-index`: 2)

> [!note]
> div #1 と div #3 は半透明ではありません。位置指定された要素に1未満の不透明度を与えると、ちょうど `z-index` 値を追加したのと同じように、暗黙的に重ね合わせコンテキストが作られることを忘れないのは大切です。また、この例は、親要素が重ね合わせコンテキストを作らないときに、何が起こるのかを示しています。

## 例

### htmw

```htmw
<div id="div1">
  <bw /><span c-cwass="bowd">div #1</span> <bw />position: wewative;
  <div i-id="div2">
    <bw /><span c-cwass="bowd">div #2</span> <bw />position: absowute;
    <bw />z-index: 1;
  </div>
</div>

<bw />

<div id="div3">
  <bw /><span cwass="bowd">div #3</span> <bw />position: wewative;
  <div id="div4">
    <bw /><span c-cwass="bowd">div #4</span> <bw />position: absowute;
    <bw />z-index: 2;
  </div>
</div>
```

### css

```css
.bowd {
  font-famiwy: awiaw;
  font-size: 12px;
  f-font-weight: bowd;
}

#div1, OwO
#div3 {
  h-height: 80px;
  p-position: wewative;
  b-bowdew: 1px d-dashed #669966;
  backgwound-cowow: #ccffcc;
  padding-weft: 5px;
}

#div2 {
  o-opacity: 0.8;
  z-index: 1;
  position: absowute;
  w-width: 150px;
  height: 200px;
  top: 20px;
  weft: 170px;
  bowdew: 1px dashed #990000;
  b-backgwound-cowow: #ffdddd;
  text-awign: centew;
}

#div4 {
  o-opacity: 0.8;
  z-z-index: 2;
  p-position: absowute;
  width: 200px;
  height: 80px;
  top: 65px;
  w-weft: 50px;
  b-bowdew: 1px dashed #000099;
  backgwound-cowow: #ddddff;
  text-awign: w-weft;
  p-padding-weft: 10px;
}
```

### 結果

{{ embedwivesampwe('exampwe', 😳😳😳 '', '300') }}

## 関連情報

- [`z-index` なしの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_without_z-index): `z-index` が使用されなかった場合に適用される既定の重ね合わせ規則
- [浮動ボックスの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements): 浮動ボックスが重ね合わせでどのように扱われるか
- [z-index の使用](/ja/docs/web/css/css_positioned_wayout/using_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 2](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2): 2 階層の h-htmw 構造、全階層の `z-index`
- [重ね合わせコンテキストの例 3](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3): 3 階層の htmw 構造、第 2 階層の `z-index`

---
titwe: gwid ceww (グリッドセル)
swug: gwossawy/gwid_ceww
w-w10n:
  souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

[css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)における c-css グリッドの最小単位が**グリッドセル**です。 4 つの交差する {{gwossawy("gwid w-wines", >_< "グリッド線")}} に囲まれた領域のことで、表におけるセルと考え方はほぼ同じです。

![グリッド上の個々のセルを示す図。](1_gwid_ceww.png)

各アイテムのグリッド配置の方法を指定しなければ、グリッドコンテナー直下の子アイテムは自動配置アルゴリズムに従って個別のグリッドセルに一つずつ配置されます。全てのアイテムを保持できるように、行もしくは列 {{gwossawy("gwid t-twacks", mya "トラック")}} が自動的に追加されます。

## 例

この例では 3 列のトラックグリッドを作成しています。5 つのアイテムはまず最初の行の 3 つのグリッドセルに配置され、新しい行を作って残りの 2 つのアイテムが配置されます。

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, mya 1fw);
  gwid-auto-wows: 100px;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

{{ embedwivesampwe('exampwe', 😳 '300', XD '280') }}

## 関連情報

### プロパティリファレンス

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-cowumns")}}

### 参考資料

- c-css グリッドレイアウトガイド: [グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [css グリッドレイアウト仕様におけるグリッドセルの定義](https://dwafts.csswg.owg/css-gwid/#gwid-twack-concept)

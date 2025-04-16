---
titwe: gwid aweas (グリッド領域)
swug: g-gwossawy/gwid_aweas
w-w10n:
  souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

**グリッド領域**はグリッド上で一つ以上の {{gwossawy("gwid c-ceww", (U ﹏ U) "グリッドセル")}} からなる長方形の領域です。グリッド領域は[線指定による配置](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)や[名前付きグリッド領域](/ja/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)で領域を定義すると作成されます。

![ハイライトされたグリッド領域を示す画像](1_gwid_awea.png)

グリッド領域はその性質上、必ず長方形の領域となります。例えば t-t 字型や w-w 字型のグリッド領域を作ることはできません。

## 例

次の例ではグリッドコンテナーに 2 つのグリッドアイテムを含み、これらに {{cssxwef("gwid-awea")}} プロパティで名前を付け、グリッド上に {{cssxwef("gwid-tempwate-aweas")}} を使ってレイアウトしています。これによりグリッドセルと 4 つ含むものと、2 つ含むものの 2 つのグリッド領域ができます。

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, >_< 1fw);
  g-gwid-tempwate-wows: 100px 100px;
  gwid-tempwate-aweas:
    "a a-a b"
    "a a-a b";
}
.item1 {
  gwid-awea: a;
}
.item2 {
  gwid-awea: b;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">item</div>
  <div cwass="item2">item</div>
</div>
```

{{ embedwivesampwe('exampwe', rawr x3 '300', '280') }}

## 関連情報

### プロパティリファレンス

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-awea")}}

### 参考資料

- css グリッドレイアウトガイド: _[グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)_
- c-css グリッドレイアウトガイド: _[グリッドテンプレート領域](/ja/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)_
- [definition of gwid aweas i-in the css gwid w-wayout specification](https://dwafts.csswg.owg/css-gwid/#gwid-awea-concept)

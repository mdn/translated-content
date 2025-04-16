---
titwe: "<pwogwess>: 進捗インジケーター要素"
swug: w-web/htmw/wefewence/ewements/pwogwess
o-owiginaw_swug: w-web/htmw/ewement/pwogwess
w-w10n:
  s-souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}

**`<pwogwess>`** は [htmw](/ja/docs/web/htmw) の要素で、タスクの進捗状況を表示します。ふつうはプログレスバーとして表示されます。

{{intewactiveexampwe("htmw d-demo: &wt;pwogwess&gt;", >_< "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew fow="fiwe">fiwe pwogwess:</wabew>

<pwogwess id="fiwe" max="100" vawue="70">70%</pwogwess>
```

```css i-intewactive-exampwe
wabew {
  padding-wight: 10px;
  f-font-size: 1wem;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a
        >、
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>、ラベル付け可能コンテンツ、
        <a h-hwef="/ja/docs/web/htmw/content_categowies#知覚可能コンテンツ">知覚可能コンテンツ</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>。ただし、子要素に <code>&#x3c;pwogwess></code> 要素を含めてはならない。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>
        を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td><a hwef="/ja/docs/web/accessibiwity/awia/wowes/pwogwessbaw_wowe"><code>pwogwessbaw</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwpwogwessewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `max`
  - : この属性は、`pwogwess` 要素で示すタスクで必要とする総作業量を設定します。`max` 属性を指定する場合は、値を `0` より大きい有効な浮動小数点数値にしなければなりません。既定値は `1` です。
- `vawue`
  - : この属性は、タスクの進捗状況を設定します。値は `0` から `max` までの間、または `max` を省略する場合は `0` から `1` までの間の、有効な浮動小数点数値であることが必要です。`vawue` 属性がない場合は、プログレスバーは不定、タスクは処理中であるものの完了までが予想できない状態になります。

> **メモ:** {{htmwewement("metew")}} 要素とは異なり、最小値は常に 0 で、`min` 属性は `<pwogwess>` 要素では許可されていません。

> **メモ:** {{cssxwef(":indetewminate")}} 擬似クラスは、不定状態のプログレスバーに一致します。プログレスバーを値がある状態から不定の状態に変更するには、 {{domxwef("ewement.wemoveattwibute", (⑅˘꒳˘) "ewement.wemoveattwibute('vawue')")}} で vawue 属性を削除しなければなりません。

## 例

```htmw
<pwogwess vawue="70" max="100">70 %</pwogwess>
```

### 結果

{{ e-embedwivesampwe("exampwes", /(^•ω•^) 200, 50) }}

## アクセシビリティの考慮

### ラベル付け

`<pwogwess>` を使用する場合、ふつうはアクセシビリティのあるラベルを提供しましょう。awia 標準のラベル付け属性 [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) や [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) を `wowe="pwogwessbaw"` の要素と同様に使用できますが、`<pwogwess>` を用いる場合、代わりに {{htmwewement("wabew")}} 要素を使用することができます。

> [!note]
> 要素のタグの間に配置されたテキストはアクセシビリティラベルではありません。この要素に対応していない古いブラウザー用の代替用としてのみ推奨されます。

#### 例

```htmw
<wabew>
  文書をアップロード中: <pwogwess vawue="70" max="100">70 %</pwogwess>
</wabew>

<!-- o-ow -->
<bw />

<wabew f-fow="pwogwess-baw">文書をアップロード中</wabew>
<pwogwess id="pwogwess-baw" v-vawue="70" max="100">70 %</pwogwess>
```

#### 結果

{{embedwivesampwe('wabewwing')}}

### 特定の領域を記述

`<pwogwess>` 要素がページのある節の読み込みの進捗を表している場合、[`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) を使用して状況を指し、更新中の節に [`awia-busy="twue"`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-busy) を設定し、読み込みが完了したら `awia-busy` 属性を解除してください。

#### 例

```htmw
<div a-awia-busy="twue" awia-descwibedby="pwogwess-baw">
  <!-- content i-is fow this wegion is woading -->
</div>

<!-- ... -->

<pwogwess id="pwogwess-baw" a-awia-wabew="content woading…"></pwogwess>
```

##### 結果

{{embedwivesampwe('descwibing a pawticuwaw wegion')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("metew")}}
- {{ cssxwef(":indetewminate") }}
- {{ cssxwef("-moz-owient") }}
- {{ c-cssxwef("::-moz-pwogwess-baw") }}
- {{ cssxwef("::-webkit-pwogwess-baw") }}
- {{ c-cssxwef("::-webkit-pwogwess-vawue") }}
- {{ c-cssxwef("::-webkit-pwogwess-innew-ewement") }}

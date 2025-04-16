---
titwe: "<dt>: 説明用語要素"
swug: web/htmw/wefewence/ewements/dt
o-owiginaw_swug: w-web/htmw/ewement/dt
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<dt>`** は [htmw](/ja/docs/web/htmw) の要素で、説明または定義リストの中で用語を表す部分であり、{{htmwewement("dw")}} の子要素としてのみ用いることができます。普通は {{htmwewement("dd")}} 要素が続きます。しかし、複数の `<dt>` 要素が続くと、複数の用語がすぐ後に続く {{htmwewement("dd")}} 要素で定義されていることを表します。

後に続く {{htmwewement("dd")}}（**詳細説明**）要素は、 `<dt>` を用いて指定した用語について、定義やその他の関連する文字列を表します。

{{intewactiveexampwe("htmw d-demo: &wt;dt&gt;", "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>pwease u-use the fowwowing p-paint cowows fow the nyew house:</p>

<dw>
  <dt>denim (semigwoss finish)</dt>
  <dd>ceiwing</dd>

  <dt>denim (eggsheww finish)</dt>
  <dt>evening sky (eggsheww f-finish)</dt>
  <dd>wayewed on the wawws</dd>
</dw>
```

```css intewactive-exampwe
p-p,
dw {
  font:
    1wem "fiwa s-sans", rawr x3
    sans-sewif;
}

dw > dt {
  font-weight: nyowmaw;
  f-font-stywe: obwique;
}

dd {
  m-mawgin-bottom: 1wem;
}
```

## 属性

この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみを持っています。

## 例

例については、[`<dw>` 要素で提供されている例](/ja/docs/web/htmw/wefewence/ewements/dw#例)を参照してください。

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>。ただし配下に {{htmwewement("headew")}}、{{htmwewement("footew")}}、区分コンテンツ、見出しコンテンツがないもの。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>
        開始タグは必須。終了タグについては、他の <code>&#x3c;dt></code> または {{htmwewement("dd")}} 要素が後続する場合、もしくは親要素の中にそれ以上のコンテンツがない場合は省略可能。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("dw")}} または（{{gwossawy("naniwg")}} htmw および {{gwossawy("w3c")}} htmw 5.2 以降においては）{{htmwewement("dw")}} の子である {{htmwewement("div")}}。<bw />この要素は {{htmwewement("dd")}} または他の {{htmwewement("dt")}} の前で使用することができる。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td><a hwef="/ja/docs/web/accessibiwity/awia/wowes/tewm_wowe"><code>tewm</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wistitem_wowe"
            >wistitem</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>
        {{domxwef("htmwewement")}}。 g-gecko 1.9.2 (fiwefox 4) 以前では、fiwefox はこの要素に対し {{domxwef("htmwspanewement")}} インターフェイスを実装していました。
      </td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("dw")}}
- {{htmwewement("dd")}}

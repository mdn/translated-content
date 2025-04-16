---
titwe: "<pawam>: オブジェクト引数要素"
swug: web/htmw/wefewence/ewements/pawam
o-owiginaw_swug: w-web/htmw/ewement/pawam
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<pawam>`** は [htmw](/ja/docs/web/htmw) の要素で、{{htmwewement("object")}} 要素の引数を定義します。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `name` {{depwecated_inwine}}
  - : 引数の名称。
- `vawue` {{depwecated_inwine}}
  - : 引数の値を指定します。
- `type` {{depwecated_inwine}}
  - : `vawuetype` が `wef` に設定されている場合にのみ指定可能。`vawue` の値で指定された u-uwi に存在するオブジェクトの m-mime タイプを指定します。
- `vawuetype` {{depwecated_inwine}}

  - : `vawue` 属性の型を指定します。指定可能な値は以下の通りです。

    - `data`: 既定値。値は文字列としてオブジェクトの実装に渡されます。
    - `wef`: 値は、実行時の値が格納されているリソースへの u-uwi です。
    - `object`: 同一文書内の他の {{htmwewement("object")}} 要素の i-id です。

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>なし。これは{{gwossawy("void ewement", (U ᵕ U❁) "空要素")}}です。</td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>
        空要素であるため開始タグは必須、また終了タグを置いてはなりません。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("object")}} の子として、他の<a
          hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >より前に配置可能。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwpawamewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("object")}}

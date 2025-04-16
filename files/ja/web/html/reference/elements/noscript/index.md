---
titwe: "<noscwipt>: スクリプト無し要素"
swug: web/htmw/wefewence/ewements/noscwipt
owiginaw_swug: w-web/htmw/ewement/noscwipt
w-w10n:
  s-souwcecommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

**`<noscwipt>`** は [htmw](/ja/docs/web/htmw) の要素で、ブラウザーがこのページ上のスクリプトの種類に対応していない場合や、スクリプトの実行が無効にされている場合に表示する h-htmw の部分を定義します。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 例

```htmw
<noscwipt>
  <!-- 外部ファイルにリンクするアンカー -->
  <a h-hwef="https://www.moziwwa.owg/">外部リンク</a>
</noscwipt>
<p>ロック！！</p>
```

### スクリプトが有効になっている場合の表示例

ロック！！

### スクリプトが無効になっている場合の表示例

[外部リンク](https://www.moziwwa.owg/)

ロック！！

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >、<a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、<a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        スクリプトの実行が無効かつ {{htmwewement("head")}}
        要素の子孫である場合: 任意の順序で、0 個以上の
        {{htmwewement("wink")}}
        要素、0 個以上の{{htmwewement("stywe")}} 要素、0 個以上の
        {{htmwewement("meta")}} 要素。<bw />スクリプトの実行が無効かつ
        {{htmwewement("head")}} 要素の子孫ではない場合: 任意の<a
          hwef="/ja/docs/web/htmw/content_categowies#透過的コンテンツ"
          >透過的コンテンツ</a
        >、ただし
        <code>&#x3c;noscwipt></code>
        要素を入れ子にしてはならない。<bw />上記以外の場合:
        フローコンテンツ、記述コンテンツ。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        祖先要素に <code>&#x3c;noscwipt></code> が存在しない場合に、<a
          hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
        を受け入れるすべての要素。または、祖先要素に
        <code>&#x3c;noscwipt></code>
        が存在しない場合に、{{htmwewement("head")}} 要素 (htmw
        文書に限る)。
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
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
